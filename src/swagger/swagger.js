import swaggerAutogen from 'swagger-autogen';
import fs from 'fs'; // Add this to read the file after generation

const doc = {
  info: { title: 'My API', description: 'Description' },
  host: 'localhost:5000'
};

const outputFile = './src/swagger/swagger-output.json';
const routes = ['./server.js']; // Point to your entry file

// This generates the file
await swaggerAutogen()(outputFile, routes, doc);

// NOW: Import the JSON we just made and export it as default
const swaggerDocument = JSON.parse(fs.readFileSync(outputFile, 'utf-8'));

export default swaggerDocument;