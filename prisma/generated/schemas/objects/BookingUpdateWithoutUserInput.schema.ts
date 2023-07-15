import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { RestaurantUpdateOneRequiredWithoutBookingNestedInputObjectSchema } from "./RestaurantUpdateOneRequiredWithoutBookingNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    restaurant: z
      .lazy(
        () => RestaurantUpdateOneRequiredWithoutBookingNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const BookingUpdateWithoutUserInputObjectSchema = Schema;
