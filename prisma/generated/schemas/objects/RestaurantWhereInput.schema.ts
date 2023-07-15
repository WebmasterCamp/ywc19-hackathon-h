import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RestaurantWhereInputObjectSchema),
        z.lazy(() => RestaurantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RestaurantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RestaurantWhereInputObjectSchema),
        z.lazy(() => RestaurantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const RestaurantWhereInputObjectSchema = Schema;
