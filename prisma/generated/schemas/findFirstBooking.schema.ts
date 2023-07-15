import { z } from "zod";
import { BookingOrderByWithRelationInputObjectSchema } from "./objects/BookingOrderByWithRelationInput.schema";
import { BookingWhereInputObjectSchema } from "./objects/BookingWhereInput.schema";
import { BookingWhereUniqueInputObjectSchema } from "./objects/BookingWhereUniqueInput.schema";
import { BookingScalarFieldEnumSchema } from "./enums/BookingScalarFieldEnum.schema";

export const BookingFindFirstSchema = z.object({
  orderBy: z
    .union([
      BookingOrderByWithRelationInputObjectSchema,
      BookingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BookingWhereInputObjectSchema.optional(),
  cursor: BookingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BookingScalarFieldEnumSchema).optional(),
});
