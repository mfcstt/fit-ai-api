import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { GetStats } from "../GetStats.js";

export function makeGetStats() {
  return new GetStats(new PrismaWorkoutRepository());
}
