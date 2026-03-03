-- CreateTable
CREATE TABLE "user_train_data" (
    "userId" TEXT NOT NULL,
    "weightInGrams" INTEGER NOT NULL,
    "heightInCentimeters" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "bodyFatPercentage" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_train_data_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "user_train_data" ADD CONSTRAINT "user_train_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
