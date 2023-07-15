import { z } from "zod";
import { BookingCreateManyRestaurantInputObjectSchema } from "./BookingCreateManyRestaurantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateManyRestaurantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BookingCreateManyRestaurantInputObjectSchema),
      z.lazy(() => BookingCreateManyRestaurantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BookingCreateManyRestaurantInputEnvelopeObjectSchema = Schema;
