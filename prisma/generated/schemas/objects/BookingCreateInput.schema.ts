import { z } from "zod";
import { UserCreateNestedOneWithoutBookingInputObjectSchema } from "./UserCreateNestedOneWithoutBookingInput.schema";
import { RestaurantCreateNestedOneWithoutBookingInputObjectSchema } from "./RestaurantCreateNestedOneWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutBookingInputObjectSchema),
    restaurant: z.lazy(
      () => RestaurantCreateNestedOneWithoutBookingInputObjectSchema
    ),
  })
  .strict();

export const BookingCreateInputObjectSchema = Schema;
