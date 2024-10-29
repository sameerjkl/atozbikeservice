// serviceData.js
let serviceData = [];

// Function to fetch data from the API
export const fetchServiceData = async () => {
  try {
    const response = await fetch(
      "https://prod-03.centralindia.logic.azure.com:443/workflows/94fa92a5576b4bc3b39ea1df0d4b090f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WRnfQ4CD_S2_uWzXZLPYGtAg30c0djZvBxlkEIi8fjU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ check: "services" }), // Adjust body if API requires parameters
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    serviceData = data; // Update serviceData with the fetched data
    return serviceData; // Return the fetched data
  } catch (error) {
    console.error("Error fetching service data:", error);
    return [];
  }
};
