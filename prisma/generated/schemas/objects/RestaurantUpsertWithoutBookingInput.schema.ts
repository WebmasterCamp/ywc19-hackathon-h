import { z } from "zod";
import { RestaurantUpdateWithoutBookingInputObjectSchema } from "./RestaurantUpdateWithoutBookingInput.schema";
import { RestaurantUncheckedUpdateWithoutBookingInputObjectSchema } from "./RestaurantUncheckedUpdateWithoutBookingInput.schema";
import { RestaurantCreateWithoutBookingInputObjectSchema } from "./RestaurantCreateWithoutBookingInput.schema";
import { RestaurantUncheckedCreateWithoutBookingInputObjectSchema } from "./RestaurantUncheckedCreateWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantUpsertWithoutBookingInput> = z
  .object({
    update: z.union([
      z.lazy(() => RestaurantUpdateWithoutBookingInputObjectSchema),
      z.lazy(() => RestaurantUncheckedUpdateWithoutBookingInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RestaurantCreateWithoutBookingInputObjectSchema),
      z.lazy(() => RestaurantUncheckedCreateWithoutBookingInputObjectSchema),
    ]),
  })
  .strict();

export const RestaurantUpsertWithoutBookingInputObjectSchema = Schema;
