import type { WeekDay } from "../../generated/prisma/enums";
import { prisma } from "../../lib/auth";
import type {
  CreateWorkoutPlanDTO,
  WorkoutRepository,
} from "../workout-repository";

export class PrismaWorkoutRepository implements WorkoutRepository {
  async create(data: CreateWorkoutPlanDTO) {
    const workout = await prisma.workoutPlan.create({
      data: {
        name: data.name,
        user: { connect: { id: data.userId } },
        workoutDays: {
          create: data.workoutDays.map((day) => ({
            weekDay: day.weekDay as WeekDay,
            isRest: day.isRest,
            estimatedDurationInSeconds: day.estimatedDurationInSeconds,
            workoutExercises: {
              create: day.exercises,
            },
          })),
        },
      },
    });

    return { id: workout.id };
  }

  async findActiveByUserId(userId: string) {
    return prisma.workoutPlan.findFirst({
      where: {
        userId,
        isActive: true,
      },
      select: { id: true },
    });
  }
}
