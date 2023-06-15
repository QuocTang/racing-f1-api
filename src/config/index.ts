import dotenv from "dotenv";
dotenv.config();
const config = {
  DB_URL: process.env.POKERTOURNAMENT_DB_URI,
  PORT: process.env.SERVER_LISTEN_PORT,
  JWT_SECRET: process.env.HASH_KEY,
  API_URL: "https://localhost:5000/",
};

export default config;
