import { PrismaUserTrainDataRepository } from "../../repositories/prisma/PrismaUserTrainDataRepository";
import { GetUserTrainData } from "../GetUserTrainData";

export function makeGetUserTrainData() {
  return new GetUserTrainData(new PrismaUserTrainDataRepository());
}
