import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateManyUserInput> = z
  .object({
    restaurantId: z.string(),
    id: z.string().optional(),
  })
  .strict();

export const BookingCreateManyUserInputObjectSchema = Schema;
