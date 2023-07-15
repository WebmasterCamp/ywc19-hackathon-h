import { z } from "zod";
import { BookingCreateWithoutRestaurantInputObjectSchema } from "./BookingCreateWithoutRestaurantInput.schema";
import { BookingUncheckedCreateWithoutRestaurantInputObjectSchema } from "./BookingUncheckedCreateWithoutRestaurantInput.schema";
import { BookingCreateOrConnectWithoutRestaurantInputObjectSchema } from "./BookingCreateOrConnectWithoutRestaurantInput.schema";
import { BookingUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema } from "./BookingUpsertWithWhereUniqueWithoutRestaurantInput.schema";
import { BookingCreateManyRestaurantInputEnvelopeObjectSchema } from "./BookingCreateManyRestaurantInputEnvelope.schema";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema } from "./BookingUpdateWithWhereUniqueWithoutRestaurantInput.schema";
import { BookingUpdateManyWithWhereWithoutRestaurantInputObjectSchema } from "./BookingUpdateManyWithWhereWithoutRestaurantInput.schema";
import { BookingScalarWhereInputObjectSchema } from "./BookingScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateManyWithoutRestaurantNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => BookingUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                BookingUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookingCreateManyRestaurantInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BookingWhereUniqueInputObjectSchema),
          z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BookingWhereUniqueInputObjectSchema),
          z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BookingWhereUniqueInputObjectSchema),
          z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BookingWhereUniqueInputObjectSchema),
          z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BookingUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                BookingUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BookingUpdateManyWithWhereWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () => BookingUpdateManyWithWhereWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BookingScalarWhereInputObjectSchema),
          z.lazy(() => BookingScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BookingUpdateManyWithoutRestaurantNestedInputObjectSchema = Schema;
