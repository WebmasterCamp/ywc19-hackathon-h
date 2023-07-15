import { z } from "zod";
import { BookingUpdateManyMutationInputObjectSchema } from "./objects/BookingUpdateManyMutationInput.schema";
import { BookingWhereInputObjectSchema } from "./objects/BookingWhereInput.schema";

export const BookingUpdateManySchema = z.object({
  data: BookingUpdateManyMutationInputObjectSchema,
  where: BookingWhereInputObjectSchema.optional(),
});
