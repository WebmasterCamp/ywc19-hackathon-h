import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingUpdateWithoutRestaurantInputObjectSchema } from "./BookingUpdateWithoutRestaurantInput.schema";
import { BookingUncheckedUpdateWithoutRestaurantInputObjectSchema } from "./BookingUncheckedUpdateWithoutRestaurantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BookingUpdateWithoutRestaurantInputObjectSchema),
        z.lazy(() => BookingUncheckedUpdateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict();

export const BookingUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema =
  Schema;
