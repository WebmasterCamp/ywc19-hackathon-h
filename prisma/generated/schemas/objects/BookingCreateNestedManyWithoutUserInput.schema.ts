import { z } from "zod";
import { BookingCreateWithoutUserInputObjectSchema } from "./BookingCreateWithoutUserInput.schema";
import { BookingUncheckedCreateWithoutUserInputObjectSchema } from "./BookingUncheckedCreateWithoutUserInput.schema";
import { BookingCreateOrConnectWithoutUserInputObjectSchema } from "./BookingCreateOrConnectWithoutUserInput.schema";
import { BookingCreateManyUserInputEnvelopeObjectSchema } from "./BookingCreateManyUserInputEnvelope.schema";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => BookingCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => BookingWhereUniqueInputObjectSchema),
        z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BookingCreateNestedManyWithoutUserInputObjectSchema = Schema;
