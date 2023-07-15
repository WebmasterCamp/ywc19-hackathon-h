import { z } from "zod";
import { RestaurantWhereUniqueInputObjectSchema } from "./RestaurantWhereUniqueInput.schema";
import { RestaurantCreateWithoutBookingInputObjectSchema } from "./RestaurantCreateWithoutBookingInput.schema";
import { RestaurantUncheckedCreateWithoutBookingInputObjectSchema } from "./RestaurantUncheckedCreateWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutBookingInput> = z
  .object({
    where: z.lazy(() => RestaurantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RestaurantCreateWithoutBookingInputObjectSchema),
      z.lazy(() => RestaurantUncheckedCreateWithoutBookingInputObjectSchema),
    ]),
  })
  .strict();

export const RestaurantCreateOrConnectWithoutBookingInputObjectSchema = Schema;
