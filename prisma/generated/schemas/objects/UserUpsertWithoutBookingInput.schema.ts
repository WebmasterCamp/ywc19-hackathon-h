import { z } from "zod";
import { UserUpdateWithoutBookingInputObjectSchema } from "./UserUpdateWithoutBookingInput.schema";
import { UserUncheckedUpdateWithoutBookingInputObjectSchema } from "./UserUncheckedUpdateWithoutBookingInput.schema";
import { UserCreateWithoutBookingInputObjectSchema } from "./UserCreateWithoutBookingInput.schema";
import { UserUncheckedCreateWithoutBookingInputObjectSchema } from "./UserUncheckedCreateWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutBookingInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutBookingInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutBookingInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutBookingInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBookingInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutBookingInputObjectSchema = Schema;
