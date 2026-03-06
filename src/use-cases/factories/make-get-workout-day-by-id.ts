import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { GetWorkoutDayById } from "../GetWorkoutDayById.js";

export function makeGetWorkoutDayById() {
  return new GetWorkoutDayById(new PrismaWorkoutRepository());
}
