import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { UpdateWorkoutSession } from "../UpdateWorkoutSession.js";

export function makeUpdateWorkoutSession() {
  return new UpdateWorkoutSession(new PrismaWorkoutRepository());
}
