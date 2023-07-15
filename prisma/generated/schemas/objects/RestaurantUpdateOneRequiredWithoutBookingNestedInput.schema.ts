import { z } from "zod";
import { RestaurantCreateWithoutBookingInputObjectSchema } from "./RestaurantCreateWithoutBookingInput.schema";
import { RestaurantUncheckedCreateWithoutBookingInputObjectSchema } from "./RestaurantUncheckedCreateWithoutBookingInput.schema";
import { RestaurantCreateOrConnectWithoutBookingInputObjectSchema } from "./RestaurantCreateOrConnectWithoutBookingInput.schema";
import { RestaurantUpsertWithoutBookingInputObjectSchema } from "./RestaurantUpsertWithoutBookingInput.schema";
import { RestaurantWhereUniqueInputObjectSchema } from "./RestaurantWhereUniqueInput.schema";
import { RestaurantUpdateWithoutBookingInputObjectSchema } from "./RestaurantUpdateWithoutBookingInput.schema";
import { RestaurantUncheckedUpdateWithoutBookingInputObjectSchema } from "./RestaurantUncheckedUpdateWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutBookingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RestaurantCreateWithoutBookingInputObjectSchema),
          z.lazy(
            () => RestaurantUncheckedCreateWithoutBookingInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RestaurantCreateOrConnectWithoutBookingInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RestaurantUpsertWithoutBookingInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RestaurantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RestaurantUpdateWithoutBookingInputObjectSchema),
          z.lazy(
            () => RestaurantUncheckedUpdateWithoutBookingInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const RestaurantUpdateOneRequiredWithoutBookingNestedInputObjectSchema =
  Schema;
