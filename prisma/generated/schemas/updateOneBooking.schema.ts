import { z } from "zod";
import { BookingUpdateInputObjectSchema } from "./objects/BookingUpdateInput.schema";
import { BookingUncheckedUpdateInputObjectSchema } from "./objects/BookingUncheckedUpdateInput.schema";
import { BookingWhereUniqueInputObjectSchema } from "./objects/BookingWhereUniqueInput.schema";

export const BookingUpdateOneSchema = z.object({
  data: z.union([
    BookingUpdateInputObjectSchema,
    BookingUncheckedUpdateInputObjectSchema,
  ]),
  where: BookingWhereUniqueInputObjectSchema,
});
