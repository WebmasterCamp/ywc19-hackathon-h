import { z } from "zod";
import { BookingCreateWithoutUserInputObjectSchema } from "./BookingCreateWithoutUserInput.schema";
import { BookingUncheckedCreateWithoutUserInputObjectSchema } from "./BookingUncheckedCreateWithoutUserInput.schema";
import { BookingCreateOrConnectWithoutUserInputObjectSchema } from "./BookingCreateOrConnectWithoutUserInput.schema";
import { BookingUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./BookingUpsertWithWhereUniqueWithoutUserInput.schema";
import { BookingCreateManyUserInputEnvelopeObjectSchema } from "./BookingCreateManyUserInputEnvelope.schema";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./BookingUpdateWithWhereUniqueWithoutUserInput.schema";
import { BookingUpdateManyWithWhereWithoutUserInputObjectSchema } from "./BookingUpdateManyWithWhereWithoutUserInput.schema";
import { BookingScalarWhereInputObjectSchema } from "./BookingScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BookingCreateWithoutUserInputObjectSchema),
        z.lazy(() => BookingCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => BookingUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => BookingUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BookingCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => BookingCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => BookingUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => BookingUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => BookingCreateManyUserInputEnvelopeObjectSchema)
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
        z.lazy(() => BookingUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => BookingUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => BookingUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => BookingUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const BookingUpdateManyWithoutUserNestedInputObjectSchema = Schema;
