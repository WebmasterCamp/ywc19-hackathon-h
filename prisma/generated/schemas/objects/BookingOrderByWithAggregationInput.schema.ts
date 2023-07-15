import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { BookingCountOrderByAggregateInputObjectSchema } from "./BookingCountOrderByAggregateInput.schema";
import { BookingMaxOrderByAggregateInputObjectSchema } from "./BookingMaxOrderByAggregateInput.schema";
import { BookingMinOrderByAggregateInputObjectSchema } from "./BookingMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingOrderByWithAggregationInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BookingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => BookingMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BookingMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BookingOrderByWithAggregationInputObjectSchema = Schema;
