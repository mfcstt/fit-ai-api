import { NotFoundError } from "../errors/error.js";
import type { WorkoutRepository } from "../repositories/workout-repository.js";

interface Input {
  name: string;
  userId: string;
  workoutDays: any[];
}

interface Output {
  workoutPlanId: string;
}

export class CreateWorkoutPlan {
  constructor(private repository: WorkoutRepository) {}

  async execute(data: Input): Promise<Output> {
    const existing = await this.repository.findActiveByUserId(data.userId);

    if (existing) {
      throw new NotFoundError(
        "An active workout plan already exists for this user",
      );
    }

    const workout = await this.repository.create(data);

    return { workoutPlanId: workout.id };
  }
}
