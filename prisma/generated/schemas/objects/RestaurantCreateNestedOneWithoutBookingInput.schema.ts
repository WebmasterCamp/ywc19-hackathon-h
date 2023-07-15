import { z } from "zod";
import { RestaurantCreateWithoutBookingInputObjectSchema } from "./RestaurantCreateWithoutBookingInput.schema";
import { RestaurantUncheckedCreateWithoutBookingInputObjectSchema } from "./RestaurantUncheckedCreateWithoutBookingInput.schema";
import { RestaurantCreateOrConnectWithoutBookingInputObjectSchema } from "./RestaurantCreateOrConnectWithoutBookingInput.schema";
import { RestaurantWhereUniqueInputObjectSchema } from "./RestaurantWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutBookingInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RestaurantCreateWithoutBookingInputObjectSchema),
        z.lazy(() => RestaurantUncheckedCreateWithoutBookingInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RestaurantCreateOrConnectWithoutBookingInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RestaurantWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RestaurantCreateNestedOneWithoutBookingInputObjectSchema = Schema;
