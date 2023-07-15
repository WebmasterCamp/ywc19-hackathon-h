import { z } from "zod";
import { BookingWhereInputObjectSchema } from "./objects/BookingWhereInput.schema";
import { BookingOrderByWithAggregationInputObjectSchema } from "./objects/BookingOrderByWithAggregationInput.schema";
import { BookingScalarWhereWithAggregatesInputObjectSchema } from "./objects/BookingScalarWhereWithAggregatesInput.schema";
import { BookingScalarFieldEnumSchema } from "./enums/BookingScalarFieldEnum.schema";

export const BookingGroupBySchema = z.object({
  where: BookingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BookingOrderByWithAggregationInputObjectSchema,
      BookingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BookingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BookingScalarFieldEnumSchema),
});
