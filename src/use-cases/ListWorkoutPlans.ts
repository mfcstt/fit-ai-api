import type { WorkoutRepository } from "../repositories/workout-repository";

interface InputDto {
  userId: string;
}

export class ListWorkoutPlans {
  constructor(private repository: WorkoutRepository) {}

  async execute(data: InputDto) {
    return this.repository.findWorkoutPlansByUserId(data.userId);
  }
}
