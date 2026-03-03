import { PrismaUserTrainDataRepository } from "../../repositories/prisma/PrismaUserTrainDataRepository";
import { UpsertUserTrainData } from "../UpsertUserTrainData";

export function makeUpsertUserTrainData() {
  return new UpsertUserTrainData(new PrismaUserTrainDataRepository());
}
