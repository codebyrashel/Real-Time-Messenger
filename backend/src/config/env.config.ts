import { GetEnv } from "../utils/get-env";

export const Env = {
  NODE_ENV: GetEnv("NODE_ENV", "development"),
  PORT: GetEnv("PORT", "8000"),
  MONGO_URI: GetEnv("MONGO_URI"),
  JWT_SECRET: GetEnv("JWT_SECRET", "secret_jwt"),
  JWT_EXPIRES_IN: GetEnv("JWT_EXPIRES_IN", "15m"),
  FRONTEND_ORIGIN: GetEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
};
