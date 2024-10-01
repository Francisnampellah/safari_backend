const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTourById = async (tourId) => {
  try {
    const tourPackage = await prisma.tourPackage.findUnique({
      where: { id: tourId },
      include: {
        dayItineraries: true, // Include day itineraries
        tourActivities: true, // Include tour activities
        transportTypes: true, // Include transport types
        inclusions: true,     // Include inclusions
      },
    });

    if (!tourPackage) {
      throw new Error(`Tour package with ID ${tourId} not found`);
    }

    return tourPackage;
  } catch (error) {
    console.error("Error fetching tour package:", error.message);
    throw error; // Rethrow error after logging
  }
};

// Example usage
const fetchTour = async () => {
  const tourId = 1; // Replace with the actual ID you want to fetch
  const tourData = await getTourById(tourId);
  console.log(tourData);
};

// Call the function to test
fetchTour();
