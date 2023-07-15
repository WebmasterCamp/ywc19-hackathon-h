import { z } from "zod";
import { BookingUserIdRestaurantIdIdCompoundUniqueInputObjectSchema } from "./BookingUserIdRestaurantIdIdCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingWhereUniqueInput> = z
  .object({
    userId_restaurantId_id: z
      .lazy(() => BookingUserIdRestaurantIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const BookingWhereUniqueInputObjectSchema = Schema;
