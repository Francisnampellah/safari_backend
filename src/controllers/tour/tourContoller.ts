

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const registerTour = async (req: any, res: any) => {
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
}

export const getAllTours = async (req: any, res: any) => {
    try {
        const tours = await prisma.tourPackage.findMany();
        res.json(tours);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tours' });
    }
};

export const getTourById = async (req: any, res: any) => {
    const { id } = req.params;

    console.log('id', id);

    try {
        const tour = await prisma.tourPackage.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        res.json(tour);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


export const getToursByUserId = async (req: any, res: any) => {
    const { userId } = req.params;

    try {
        const tours = await prisma.tourPackage.findMany({
            where: {
                userId: Number(userId),
            },
        });

        if (!tours) {
            return res.status(404).json({ error: 'Tours not found for this user' });
        }

        res.json(tours);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the tours' });
    }
};


export const updateTour = async (req: any, res: any) => {
    const { id } = req.params;

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
        const tour = await prisma.tourPackage.update({
            where: {
                id: Number(id),
            },
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

        res.json(tour);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the tour' });
    }
};

export const deleteTourById = async (req: any, res: any) => {
    const { id } = req.params;

    console.log('Delete item with id', id);
    try {

        const tour = await prisma.tourPackage.delete({
          where: {
            id: Number(id),
          },
        });
      
        res.json({ message: 'Tour deleted successfully' });
      } catch (error) {
        res.json({ error: error });
      }
};

module.exports = {
    registerTour,
    getAllTours,
    getTourById,
    getToursByUserId,
    updateTour,
    deleteTourById,
};

