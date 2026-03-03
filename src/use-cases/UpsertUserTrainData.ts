import type { UserTrainDataRepository } from "../repositories/user-train-data-repository";

interface InputDto {
  userId: string;
  weightInGrams: number;
  heightInCentimeters: number;
  age: number;
  bodyFatPercentage: number;
}

export class UpsertUserTrainData {
  constructor(private repository: UserTrainDataRepository) {}

  async execute(data: InputDto): Promise<InputDto> {
    const userTrainData = await this.repository.upsert(data);

    return {
      userId: userTrainData.userId,
      weightInGrams: userTrainData.weightInGrams,
      heightInCentimeters: userTrainData.heightInCentimeters,
      age: userTrainData.age,
      bodyFatPercentage: userTrainData.bodyFatPercentage,
    };
  }
}
