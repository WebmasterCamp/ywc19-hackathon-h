import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingUpdateWithoutRestaurantInputObjectSchema } from "./BookingUpdateWithoutRestaurantInput.schema";
import { BookingUncheckedUpdateWithoutRestaurantInputObjectSchema } from "./BookingUncheckedUpdateWithoutRestaurantInput.schema";
import { BookingCreateWithoutRestaurantInputObjectSchema } from "./BookingCreateWithoutRestaurantInput.schema";
import { BookingUncheckedCreateWithoutRestaurantInputObjectSchema } from "./BookingUncheckedCreateWithoutRestaurantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BookingUpdateWithoutRestaurantInputObjectSchema),
        z.lazy(() => BookingUncheckedUpdateWithoutRestaurantInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BookingCreateWithoutRestaurantInputObjectSchema),
        z.lazy(() => BookingUncheckedCreateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict();

export const BookingUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema =
  Schema;
