import { z } from "zod";
import { BookingCreateManyUserInputObjectSchema } from "./BookingCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BookingCreateManyUserInputObjectSchema),
      z.lazy(() => BookingCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BookingCreateManyUserInputEnvelopeObjectSchema = Schema;
