import { z } from "zod";
import { BookingOrderByWithRelationInputObjectSchema } from "./objects/BookingOrderByWithRelationInput.schema";
import { BookingWhereInputObjectSchema } from "./objects/BookingWhereInput.schema";
import { BookingWhereUniqueInputObjectSchema } from "./objects/BookingWhereUniqueInput.schema";
import { BookingCountAggregateInputObjectSchema } from "./objects/BookingCountAggregateInput.schema";
import { BookingMinAggregateInputObjectSchema } from "./objects/BookingMinAggregateInput.schema";
import { BookingMaxAggregateInputObjectSchema } from "./objects/BookingMaxAggregateInput.schema";

export const BookingAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), BookingCountAggregateInputObjectSchema])
    .optional(),
  _min: BookingMinAggregateInputObjectSchema.optional(),
  _max: BookingMaxAggregateInputObjectSchema.optional(),
});
