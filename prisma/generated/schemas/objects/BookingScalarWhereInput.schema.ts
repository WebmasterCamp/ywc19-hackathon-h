import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BookingScalarWhereInputObjectSchema),
        z.lazy(() => BookingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BookingScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BookingScalarWhereInputObjectSchema),
        z.lazy(() => BookingScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const BookingScalarWhereInputObjectSchema = Schema;
