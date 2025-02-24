import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price in rupees, hotel image url, geo coordinates, rating, descriptions and  suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing in rupees, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"Las Vegas\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"HotelName\": \"The LINQ Hotel + Experience\",\n      \"HotelAddress\": \"3535 Las Vegas Blvd South, Las Vegas, NV 89109\",\n      \"Price\": \"$60 - $150\",\n       \"hotelImageURL\": \"https://images.unsplash.com/photo-1586442125320-2d69e37268f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80\",  \n      \"geoCoordinates\": \"36.1030, -115.1708\",\n      \"rating\": \"4.2\",\n      \"descriptions\": \"A vibrant hotel on the Las Vegas Strip offering various amenities and proximity to attractions.  Good for couples with a budget. \"\n    },\n    {\n      \"HotelName\": \"Circus Circus Hotel & Casino\",\n      \"HotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"Price\": \"$50 - $120\",\n      \"hotelImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Circus_Circus_Hotel_2019.jpg/1200px-Circus_Circus_Hotel_2019.jpg\",\n      \"geoCoordinates\": \"36.1030, -115.1708\",\n      \"rating\": \"3.8\",\n      \"descriptions\": \"A budget-friendly option with a retro feel.  Great for couples looking for value.\"\n    },\n    {\n\t\t  \"HotelName\": \"Excalibur Hotel & Casino\",\n      \"HotelAddress\": \"3850 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"Price\": \"$55 - $140\",\n      \"hotelImageURL\": \"https://images.unsplash.com/photo-1673109874298-a2b2d4a50ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80\",\n      \"geoCoordinates\": \"36.1030, -115.1708\",\n      \"rating\": \"3.9\",\n      \"descriptions\": \"A classic hotel with a medieval theme and reasonable pricing. Ideal for a budget-conscious couple. \"\n\t}\n\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": \"Downtown Las Vegas Exploration\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Iconic pedestrian-only area with street performers, lighting shows, and shops.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Fremont_Street_Experience_at_night.jpg/1200px-Fremont_Street_Experience_at_night.jpg\",\n          \"geoCoordinates\": \"36.1025,-115.1586\",\n          \"ticketPricing\": \"Free for entry, some shows have a fee\",\n          \"rating\": \"4.5\",\n          \"timeToVisit\": \"Evening (7-10pm)\"\n        },\n         {\n          \"placeName\": \"Mob Museum\",\n          \"placeDetails\": \"Interactive exhibits on the history of organized crime in Las Vegas.\",\n          \"placeImageURL\": \"https://www.themobmuseum.org/images/photos/the-mob-museum-exterior-5.jpg\",\n          \"geoCoordinates\": \"36.1145, -115.1716\",\n          \"ticketPricing\": \"$29 Adults\",\n          \"rating\": \"4.3\",\n          \"timeToVisit\": \"Afternoon (12-4pm)\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": \"Strip Adventures\",\n      \"places\": [\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Spectacular choreographed water shows.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bellagio_fountains_01.jpg/1200px-Bellagio_fountains_01.jpg\",\n          \"geoCoordinates\": \"36.1030, -115.1708\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.8\",\n          \"timeToVisit\": \"Evening (7-9pm)\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Get breathtaking panoramic views of the Strip.\",\n          \"placeImageURL\": \"https://www.thelinq.com/sites/default/files/2021-01/HighRoller-Exterior-01.jpg\",\n          \"geoCoordinates\": \"36.1030,-115.1708\",\n          \"ticketPricing\": \"$35 - $50\",\n          \"rating\": \"4.6\",\n          \"timeToVisit\": \"Afternoon (2-5pm)\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": \"Budget-Friendly Fun\",\n      \"places\": [\n        {\n          \"placeName\": \"Downtown Container Park\",\n          \"placeDetails\": \"Unique outdoor market with art installations and street food.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Container_park_Las_Vegas_2022.jpg/1200px-Container_park_Las_Vegas_2022.jpg\",\n          \"geoCoordinates\": \"36.1028, -115.1586\",\n          \"ticketPricing\": \"Free (food varies)\",\n          \"rating\": \"4.2\",\n          \"timeToVisit\": \"Morning (10am-1pm)\"\n        },\n         {\n          \"placeName\": \"Discovery Children's Museum\",\n          \"placeDetails\": \"Interactive exhibits for all ages, great for family fun.\",\n          \"placeImageURL\": \"https://discoverychildrensmuseum.org/wp-content/uploads/2021/05/DSC_0290-scaled.jpg\",\n          \"geoCoordinates\": \"36.0902, -115.1728\",\n          \"ticketPricing\": \"Adults around $20\",\n          \"rating\": \"4.4\",\n          \"timeToVisit\": \"Afternoon (1-5pm)\"\n        }\n      ]\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

