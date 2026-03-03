import { PrismaWorkoutRepository } from "../../repositories/prisma/PrismaWorkoutRepository";
import { ListWorkoutPlans } from "../ListWorkoutPlans";

export function makeListWorkoutPlans() {
  return new ListWorkoutPlans(new PrismaWorkoutRepository());
}
