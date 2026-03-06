import { PrismaUserTrainDataRepository } from "../../repositories/prisma/PrismaUserTrainDataRepository.js";
import { GetUserTrainData } from "../GetUserTrainData.js";

export function makeGetUserTrainData() {
  return new GetUserTrainData(new PrismaUserTrainDataRepository());
}
