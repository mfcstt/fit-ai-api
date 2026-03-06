import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { GetHomeData } from "../GetHomeData.js";

export function makeGetHomeData() {
  return new GetHomeData(new PrismaWorkoutRepository());
}
