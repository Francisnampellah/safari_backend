-- DropForeignKey
ALTER TABLE "DayItinerary" DROP CONSTRAINT "DayItinerary_tourPackageId_fkey";

-- DropForeignKey
ALTER TABLE "Inclusion" DROP CONSTRAINT "Inclusion_tourPackageId_fkey";

-- DropForeignKey
ALTER TABLE "TourActivity" DROP CONSTRAINT "TourActivity_tourPackageId_fkey";

-- DropForeignKey
ALTER TABLE "TransportType" DROP CONSTRAINT "TransportType_tourPackageId_fkey";

-- AddForeignKey
ALTER TABLE "DayItinerary" ADD CONSTRAINT "DayItinerary_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourActivity" ADD CONSTRAINT "TourActivity_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportType" ADD CONSTRAINT "TransportType_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inclusion" ADD CONSTRAINT "Inclusion_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
