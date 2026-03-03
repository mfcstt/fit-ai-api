export interface UpsertUserTrainDataDTO {
  userId: string;
  weightInGrams: number;
  heightInCentimeters: number;
  age: number;
  bodyFatPercentage: number;
}

export interface UserTrainData {
  userId: string;
  weightInGrams: number;
  heightInCentimeters: number;
  age: number;
  bodyFatPercentage: number;
}

export interface UserTrainDataWithUserName extends UserTrainData {
  userName: string;
}

export interface UserTrainDataRepository {
  upsert(data: UpsertUserTrainDataDTO): Promise<UserTrainData>;
  findByUserId(userId: string): Promise<UserTrainDataWithUserName | null>;
}
