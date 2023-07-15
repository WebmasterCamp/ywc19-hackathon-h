import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { BookingUncheckedUpdateManyWithoutRestaurantNestedInputObjectSchema } from "./BookingUncheckedUpdateManyWithoutRestaurantNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Booking: z
      .lazy(
        () => BookingUncheckedUpdateManyWithoutRestaurantNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const RestaurantUncheckedUpdateInputObjectSchema = Schema;
