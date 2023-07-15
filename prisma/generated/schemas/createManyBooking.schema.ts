import { z } from "zod";
import { BookingCreateManyInputObjectSchema } from "./objects/BookingCreateManyInput.schema";

export const BookingCreateManySchema = z.object({
  data: z.union([
    BookingCreateManyInputObjectSchema,
    z.array(BookingCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
