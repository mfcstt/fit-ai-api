import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { CreateWorkoutPlan } from "../CreateWorkoutPlan.js";

export function makeCreateWorkoutPlan() {
  return new CreateWorkoutPlan(new PrismaWorkoutRepository());
}
