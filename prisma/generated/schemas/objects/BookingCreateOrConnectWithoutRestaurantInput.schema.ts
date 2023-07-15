import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./BookingWhereUniqueInput.schema";
import { BookingCreateWithoutRestaurantInputObjectSchema } from "./BookingCreateWithoutRestaurantInput.schema";
import { BookingUncheckedCreateWithoutRestaurantInputObjectSchema } from "./BookingUncheckedCreateWithoutRestaurantInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingCreateOrConnectWithoutRestaurantInput> = z
  .object({
    where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BookingCreateWithoutRestaurantInputObjectSchema),
      z.lazy(() => BookingUncheckedCreateWithoutRestaurantInputObjectSchema),
    ]),
  })
  .strict();

export const BookingCreateOrConnectWithoutRestaurantInputObjectSchema = Schema;
