import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./objects/BookingWhereUniqueInput.schema";

export const BookingFindUniqueSchema = z.object({
  where: BookingWhereUniqueInputObjectSchema,
});
