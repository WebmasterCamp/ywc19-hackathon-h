import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { RestaurantRelationFilterObjectSchema } from "./RestaurantRelationFilter.schema";
import { RestaurantWhereInputObjectSchema } from "./RestaurantWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BookingWhereInputObjectSchema),
        z.lazy(() => BookingWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BookingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BookingWhereInputObjectSchema),
        z.lazy(() => BookingWhereInputObjectSchema).array(),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    restaurantId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    restaurant: z
      .union([
        z.lazy(() => RestaurantRelationFilterObjectSchema),
        z.lazy(() => RestaurantWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BookingWhereInputObjectSchema = Schema;
