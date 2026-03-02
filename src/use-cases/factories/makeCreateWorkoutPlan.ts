import { PrismaWorkoutRepository } from "../../repositories/prisma/prismaWorkoutRepository";
import { CreateWorkoutPlan } from "../CreateWorkoutPlan";


export function makeCreateWorkoutPlan() {
  return new CreateWorkoutPlan(new PrismaWorkoutRepository());
}
