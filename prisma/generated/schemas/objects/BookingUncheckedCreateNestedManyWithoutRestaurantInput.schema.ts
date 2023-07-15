import { z } from "zod";
import { BookingCreateWithoutRestaurantInputObjectSchema } from "./BookingCreateWithoutRestaurantInput.schema";
import { BookingUncheckedCreateWithoutRestaurantInputObjectSchema } from "./BookingUncheckedCreateWithoutRestaurantInput.schema";
import { BookingCreateOrConnectWithoutRestaurantInputObjectSchema } from "./BookingCreateOrConnectWithoutRestaurantInput.schema";
import { BookingCreateManyRestaurantInputEnvelopeObjectSchema } from "./BookingCreateManyRestaurantInputEnvelope.schema";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutRestaurantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookingCreateWithoutRestaurantInputObjectSchema),
          z.lazy(() => BookingCreateWithoutRestaurantInputObjectSchema).array(),
          z.lazy(
            () => BookingUncheckedCreateWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () => BookingUncheckedCreateWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BookingCreateOrConnectWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () => BookingCreateOrConnectWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookingCreateManyRestaurantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BookingWhereUniqueInputObjectSchema),
          z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BookingUncheckedCreateNestedManyWithoutRestaurantInputObjectSchema =
  Schema;
