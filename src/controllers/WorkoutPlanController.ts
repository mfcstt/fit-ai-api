import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { WeekDay } from "../generated/prisma/enums";
import { makeCreateWorkoutPlan } from "../use-cases/factories/makeCreateWorkoutPlan";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";
import { th } from "zod/locales";
import { NotFoundError } from "../errors/error";

export async function workoutPlanController(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/workout-plans",
    schema: {
      tags: ["Workout Plans"],
      summary: "Create a new workout plan",
      body: z.object({
        name: z.string().trim().min(1),
        workoutDays: z.array(
          z.object({
            name: z.string().trim().min(1),
            weekDay: z.enum(WeekDay),
            isRest: z.boolean().default(false),
            estimatedDurationInSeconds: z.number().min(1),
            exercises: z.array(
              z.object({
                order: z.number().min(0),
                name: z.string().trim().min(1),
                sets: z.number().min(1),
                reps: z.number().min(1),
                restTimeInSeconds: z.number().min(1),
              }),
            ),
          }),
        ),
      }),
      response: {
        201: z.object({
          id: z.uuid(),
          message: z.string().default("Workout plan created successfully"),
        }),
        400: z.object({
          error: z.string(),
          code: z.string(),
        }),
        401: z.object({
          error: z.string(),
          code: z.string(),
        }),
        404: z.object({
          error: z.string(),
          code: z.string(),
        }),
        500: z.object({
          error: z.string(),
          code: z.string(),
        }),
      },
    },
    handler: async (request, reply) => {
      const createWorkoutPlan = makeCreateWorkoutPlan();

      const session = await auth.api.getSession({
        headers: fromNodeHeaders(request.headers),
      });

      if (!session) {
        return reply.status(401).send({
          error: "Unauthorized",
          code: "UNAUTHORIZED",
        });
      }

      try {
        const { workoutPlanId } = await createWorkoutPlan.execute({
          userId: session.user.id,
          name: request.body.name,
          workoutDays: request.body.workoutDays,
        });
        return reply.status(201).send({
          id: workoutPlanId,
          message: "Workout plan created successfully",
        });
      } catch (error) {
        if (error instanceof NotFoundError) {
          return reply.status(404).send({
            error: error.message,
            code: "NOT_FOUND",
          });
        }
        return reply.status(500).send({
          error: "Internal server error",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    },
  });
}
