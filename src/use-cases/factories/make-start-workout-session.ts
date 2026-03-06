import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { StartWorkoutSession } from "../StartWorkoutSession.js";

export function makeStartWorkoutSession() {
  return new StartWorkoutSession(new PrismaWorkoutRepository());
}
