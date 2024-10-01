
// tourController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller function to register a new tour package
export const registerTour = async (req, res) => {
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
        userId, // Assuming the user ID is passed in the request
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
                userId, // Link the tour package to the user
                dayItineraries: {
                    create: dayItineraries, // Assuming it's an array of day itineraries
                },
                tourActivities: {
                    create: tourActivities, // Assuming it's an array of tour activities
                },
                transportTypes: {
                    create: transportTypes, // Assuming it's an array of transport types
                },
                inclusions: {
                    create: inclusions, // Assuming it's an array of inclusions
                },
            },
        });

        return res.status(201).json({ message: 'Tour package registered successfully', tourPackage });
    } catch (error) {
        console.error("Error registering tour package:", error);
        return res.status(500).json({ message: 'Error registering tour package', error: error.message });
    }
};

module.exports = {
    registerTour,
};
