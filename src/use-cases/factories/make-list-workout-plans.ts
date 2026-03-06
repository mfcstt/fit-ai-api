import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository.js";
import { ListWorkoutPlans } from "../ListWorkoutPlans.js";

export function makeListWorkoutPlans() {
  return new ListWorkoutPlans(new PrismaWorkoutRepository());
}
