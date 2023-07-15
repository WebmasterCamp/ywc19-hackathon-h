import { z } from "zod";
import { BookingCreateNestedManyWithoutRestaurantInputObjectSchema } from "./BookingCreateNestedManyWithoutRestaurantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantCreateInput> = z
  .object({
    id: z.string().optional(),
    Booking: z
      .lazy(() => BookingCreateNestedManyWithoutRestaurantInputObjectSchema)
      .optional(),
  })
  .strict();

export const RestaurantCreateInputObjectSchema = Schema;
