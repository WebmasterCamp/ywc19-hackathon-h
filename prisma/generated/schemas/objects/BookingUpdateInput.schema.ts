import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutBookingNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutBookingNestedInput.schema";
import { RestaurantUpdateOneRequiredWithoutBookingNestedInputObjectSchema } from "./RestaurantUpdateOneRequiredWithoutBookingNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutBookingNestedInputObjectSchema)
      .optional(),
    restaurant: z
      .lazy(
        () => RestaurantUpdateOneRequiredWithoutBookingNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const BookingUpdateInputObjectSchema = Schema;
