import { z } from "zod";
import { UserCreateNestedOneWithoutBookingInputObjectSchema } from "./UserCreateNestedOneWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateWithoutRestaurantInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutBookingInputObjectSchema),
  })
  .strict();

export const BookingCreateWithoutRestaurantInputObjectSchema = Schema;
