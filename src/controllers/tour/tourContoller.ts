
// tourController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller function to register a new tour package
export const registerTour = async (req:any, res:any) => {
    const {
        title,
        numberOfDays,
        description,
        banner,
        tourCountry,
        tourLevel,
        tourFocus,
        tourStartCity,
        tourEndCity,
        accommodationAvailable,
        airportTransportAvailable,
        basePrice,
        userId,
        dayItineraries,
        tourActivities,
        transportTypes,
        inclusions,
    } = req.body;

    try {
        const tourPackage = await prisma.tourPackage.create({
            data: {
                title,
                numberOfDays,
                description,
                banner,
                tourCountry,
                tourLevel,
                tourFocus,
                tourStartCity,
                tourEndCity,
                accommodationAvailable,
                airportTransportAvailable,
                basePrice,
                userId,
                dayItineraries: {
                    create: dayItineraries,
                },
                tourActivities: {
                    create: tourActivities,
                },
                transportTypes: {
                    create: transportTypes,
                },
                inclusions: {
                    create: inclusions,
                },
            },
        });

        return res.status(201).json({ message: 'Tour package registered successfully', tourPackage });
    } catch (error) {
        console.error("Error registering tour package:", error);
        return res.status(500).json({ message: 'Error registering tour package', error: error });
    }
};

module.exports = {
    registerTour,
};
