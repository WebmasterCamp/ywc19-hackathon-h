import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { BookingUpdateManyWithoutRestaurantNestedInputObjectSchema } from "./BookingUpdateManyWithoutRestaurantNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.RestaurantUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Booking: z
      .lazy(() => BookingUpdateManyWithoutRestaurantNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RestaurantUpdateInputObjectSchema = Schema;
