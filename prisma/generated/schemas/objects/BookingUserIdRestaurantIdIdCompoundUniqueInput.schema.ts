import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUserIdRestaurantIdIdCompoundUniqueInput> =
  z
    .object({
      userId: z.string(),
      restaurantId: z.string(),
      id: z.string(),
    })
    .strict();

export const BookingUserIdRestaurantIdIdCompoundUniqueInputObjectSchema =
  Schema;
