import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { BookingOrderByRelationAggregateInputObjectSchema } from "./BookingOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    Booking: z
      .lazy(() => BookingOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RestaurantOrderByWithRelationInputObjectSchema = Schema;
