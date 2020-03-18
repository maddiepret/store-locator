# store-locator# Store Locator

## Quick Start

Create a "config/config.env" file and add tghe following:

- NODE_ENV = development;
- MONGO_URI = ######
- GEOCODER_PROVIDER=mapquest
- GEOCODER_API_KEY = ######

# Install dependencies

npm install

# Serve on localhost:6000

npm run dev (nodemon)
or
npm start

# Routes

GET /api/v1/stores # Get Stores

POST /api/v1/stores # Add Store
body { storeId: "0001", address: "10 main st Paarl, South Africa" }
