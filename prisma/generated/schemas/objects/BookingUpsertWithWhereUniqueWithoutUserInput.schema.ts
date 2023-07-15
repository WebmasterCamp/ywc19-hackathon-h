import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingUpdateWithoutUserInputObjectSchema } from "./BookingUpdateWithoutUserInput.schema";
import { BookingUncheckedUpdateWithoutUserInputObjectSchema } from "./BookingUncheckedUpdateWithoutUserInput.schema";
import { BookingCreateWithoutUserInputObjectSchema } from "./BookingCreateWithoutUserInput.schema";
import { BookingUncheckedCreateWithoutUserInputObjectSchema } from "./BookingUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => BookingUpdateWithoutUserInputObjectSchema),
      z.lazy(() => BookingUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BookingCreateWithoutUserInputObjectSchema),
      z.lazy(() => BookingUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BookingUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
