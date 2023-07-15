import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingUpdateWithoutUserInputObjectSchema } from "./BookingUpdateWithoutUserInput.schema";
import { BookingUncheckedUpdateWithoutUserInputObjectSchema } from "./BookingUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => BookingUpdateWithoutUserInputObjectSchema),
      z.lazy(() => BookingUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BookingUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
