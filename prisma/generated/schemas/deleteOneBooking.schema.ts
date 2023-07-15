import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./objects/BookingWhereUniqueInput.schema";

export const BookingDeleteOneSchema = z.object({
  where: BookingWhereUniqueInputObjectSchema,
});
