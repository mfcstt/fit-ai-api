import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { GetWorkoutPlanById } from "../GetWorkoutPlanById.js";

export function makeGetWorkoutPlanById() {
  return new GetWorkoutPlanById(new PrismaWorkoutRepository());
}
