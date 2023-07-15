import { z } from "zod";
import { RestaurantWhereInputObjectSchema } from "./RestaurantWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantRelationFilter> = z
  .object({
    is: z
      .lazy(() => RestaurantWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RestaurantWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RestaurantRelationFilterObjectSchema = Schema;
