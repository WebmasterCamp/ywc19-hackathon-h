import { z } from "zod";
import { RestaurantCreateNestedOneWithoutBookingInputObjectSchema } from "./RestaurantCreateNestedOneWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    restaurant: z.lazy(
      () => RestaurantCreateNestedOneWithoutBookingInputObjectSchema
    ),
  })
  .strict();

export const BookingCreateWithoutUserInputObjectSchema = Schema;
