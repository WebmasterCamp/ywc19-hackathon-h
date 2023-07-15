import { z } from "zod";

export const BookingScalarFieldEnumSchema = z.enum([
  "userId",
  "restaurantId",
  "id",
]);
