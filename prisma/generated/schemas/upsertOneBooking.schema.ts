import { z } from "zod";
import { BookingWhereUniqueInputObjectSchema } from "./objects/BookingWhereUniqueInput.schema";
import { BookingCreateInputObjectSchema } from "./objects/BookingCreateInput.schema";
import { BookingUncheckedCreateInputObjectSchema } from "./objects/BookingUncheckedCreateInput.schema";
import { BookingUpdateInputObjectSchema } from "./objects/BookingUpdateInput.schema";
import { BookingUncheckedUpdateInputObjectSchema } from "./objects/BookingUncheckedUpdateInput.schema";

export const BookingUpsertSchema = z.object({
  where: BookingWhereUniqueInputObjectSchema,
  create: z.union([
    BookingCreateInputObjectSchema,
    BookingUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BookingUpdateInputObjectSchema,
    BookingUncheckedUpdateInputObjectSchema,
  ]),
});
