import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z
  .object({
    userId: z.string(),
    restaurantId: z.string(),
    id: z.string().optional(),
  })
  .strict();

export const BookingUncheckedCreateInputObjectSchema = Schema;
