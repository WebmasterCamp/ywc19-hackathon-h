import { z } from "zod";
import { BookingUncheckedCreateNestedManyWithoutRestaurantInputObjectSchema } from "./BookingUncheckedCreateNestedManyWithoutRestaurantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    Booking: z
      .lazy(
        () => BookingUncheckedCreateNestedManyWithoutRestaurantInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const RestaurantUncheckedCreateInputObjectSchema = Schema;
