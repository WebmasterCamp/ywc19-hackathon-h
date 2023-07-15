import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingCreateWithoutUserInputObjectSchema } from "./BookingCreateWithoutUserInput.schema";
import { BookingUncheckedCreateWithoutUserInputObjectSchema } from "./BookingUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BookingCreateWithoutUserInputObjectSchema),
      z.lazy(() => BookingUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const BookingCreateOrConnectWithoutUserInputObjectSchema = Schema;
