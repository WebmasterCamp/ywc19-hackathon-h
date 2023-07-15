import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutBookingNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutBookingNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.BookingUpdateWithoutRestaurantInput> = z
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
  })
  .strict();

export const BookingUpdateWithoutRestaurantInputObjectSchema = Schema;
