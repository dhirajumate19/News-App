import "dotenv/config";

const {
  PORT = "3001",
  DB_URL = "mongodb://localhost",
  DB_PORT = 27017,
} = process.env;
export const PORTNumber = PORT;
export const dburl = `${DB_URL}:${DB_PORT}`;
