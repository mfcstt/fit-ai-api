import { PrismaUserTrainDataRepository } from "../../repositories/prisma/PrismaUserTrainDataRepository.js";
import { UpsertUserTrainData } from "../UpsertUserTrainData.js";

export function makeUpsertUserTrainData() {
  return new UpsertUserTrainData(new PrismaUserTrainDataRepository());
}
