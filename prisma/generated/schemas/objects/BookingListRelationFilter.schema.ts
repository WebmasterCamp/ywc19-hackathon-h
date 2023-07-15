import { z } from "zod";
import { BookingWhereInputObjectSchema } from "./BookingWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingListRelationFilter> = z
  .object({
    every: z.lazy(() => BookingWhereInputObjectSchema).optional(),
    some: z.lazy(() => BookingWhereInputObjectSchema).optional(),
    none: z.lazy(() => BookingWhereInputObjectSchema).optional(),
  })
  .strict();

export const BookingListRelationFilterObjectSchema = Schema;
