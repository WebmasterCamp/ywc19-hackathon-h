import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { RestaurantOrderByWithRelationInputObjectSchema } from "./RestaurantOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingOrderByWithRelationInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    restaurant: z
      .lazy(() => RestaurantOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const BookingOrderByWithRelationInputObjectSchema = Schema;
