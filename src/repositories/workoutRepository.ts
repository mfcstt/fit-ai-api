export interface CreateWorkoutPlanDTO {
  name: string;
  userId: string;
  workoutDays: {
    weekDay: string;
    isRest: boolean;
    estimatedDurationInSeconds: number;
    exercises: {
      order: number;
      name: string;
      sets: number;
      reps: number;
      restTimeInSeconds: number;
    }[];
  }[];
}

export interface WorkoutRepository {
  create(data: CreateWorkoutPlanDTO): Promise<{ id: string }>;
  findActiveByUserId(userId: string): Promise<{ id: string } | null>;
}