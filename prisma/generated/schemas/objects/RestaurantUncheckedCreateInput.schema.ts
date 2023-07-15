import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const RestaurantUncheckedCreateInputObjectSchema = Schema;
