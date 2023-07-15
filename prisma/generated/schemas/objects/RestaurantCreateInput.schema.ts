import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantCreateInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const RestaurantCreateInputObjectSchema = Schema;
