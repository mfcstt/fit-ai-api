import type { UserTrainDataRepository } from "../repositories/user-train-data-repository";

interface InputDto {
  userId: string;
}

interface OutputDto {
  userId: string;
  userName: string;
  weightInGrams: number;
  heightInCentimeters: number;
  age: number;
  bodyFatPercentage: number;
}

export class GetUserTrainData {
  constructor(private repository: UserTrainDataRepository) {}

  async execute(data: InputDto): Promise<OutputDto | null> {
    return this.repository.findByUserId(data.userId);
  }
}
