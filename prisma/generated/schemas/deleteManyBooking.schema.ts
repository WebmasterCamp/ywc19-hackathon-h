import { z } from "zod";
import { BookingWhereInputObjectSchema } from "./objects/BookingWhereInput.schema";

export const BookingDeleteManySchema = z.object({
  where: BookingWhereInputObjectSchema.optional(),
});
