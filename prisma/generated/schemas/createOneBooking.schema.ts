import { z } from "zod";
import { BookingCreateInputObjectSchema } from "./objects/BookingCreateInput.schema";
import { BookingUncheckedCreateInputObjectSchema } from "./objects/BookingUncheckedCreateInput.schema";

export const BookingCreateOneSchema = z.object({
  data: z.union([
    BookingCreateInputObjectSchema,
    BookingUncheckedCreateInputObjectSchema,
  ]),
});
