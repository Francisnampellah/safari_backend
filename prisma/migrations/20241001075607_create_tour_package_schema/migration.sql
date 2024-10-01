/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "phoneNumber";

-- CreateTable
CREATE TABLE "TourPackage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "numberOfDays" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "tourCountry" TEXT NOT NULL,
    "tourLevel" TEXT NOT NULL,
    "tourFocus" TEXT NOT NULL,
    "tourStartCity" TEXT NOT NULL,
    "tourEndCity" TEXT NOT NULL,
    "accommodationAvailable" BOOLEAN NOT NULL,
    "airportTransportAvailable" BOOLEAN NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayItinerary" (
    "id" SERIAL NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "accommodationName" TEXT,
    "accommodationType" TEXT,
    "accommodationLocation" TEXT,
    "accommodationLevel" TEXT,
    "meal" TEXT,
    "image" TEXT,
    "destination" TEXT,
    "tourPackageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DayItinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourActivity" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL,
    "tourPackageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransportType" (
    "id" SERIAL NOT NULL,
    "transport" TEXT NOT NULL,
    "tourPackageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransportType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inclusion" (
    "id" SERIAL NOT NULL,
    "inclusion" TEXT NOT NULL,
    "tourPackageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inclusion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TourPackage" ADD CONSTRAINT "TourPackage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DayItinerary" ADD CONSTRAINT "DayItinerary_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourActivity" ADD CONSTRAINT "TourActivity_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportType" ADD CONSTRAINT "TransportType_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inclusion" ADD CONSTRAINT "Inclusion_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
