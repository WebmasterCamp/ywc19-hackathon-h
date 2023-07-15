import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { RestaurantCountOrderByAggregateInputObjectSchema } from "./RestaurantCountOrderByAggregateInput.schema";
import { RestaurantMaxOrderByAggregateInputObjectSchema } from "./RestaurantMaxOrderByAggregateInput.schema";
import { RestaurantMinOrderByAggregateInputObjectSchema } from "./RestaurantMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RestaurantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RestaurantMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RestaurantMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RestaurantOrderByWithAggregationInputObjectSchema = Schema;
