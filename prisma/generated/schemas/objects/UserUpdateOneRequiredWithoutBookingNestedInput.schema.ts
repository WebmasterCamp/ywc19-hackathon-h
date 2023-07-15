import { z } from "zod";
import { UserCreateWithoutBookingInputObjectSchema } from "./UserCreateWithoutBookingInput.schema";
import { UserUncheckedCreateWithoutBookingInputObjectSchema } from "./UserUncheckedCreateWithoutBookingInput.schema";
import { UserCreateOrConnectWithoutBookingInputObjectSchema } from "./UserCreateOrConnectWithoutBookingInput.schema";
import { UserUpsertWithoutBookingInputObjectSchema } from "./UserUpsertWithoutBookingInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutBookingInputObjectSchema } from "./UserUpdateWithoutBookingInput.schema";
import { UserUncheckedUpdateWithoutBookingInputObjectSchema } from "./UserUncheckedUpdateWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBookingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBookingInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutBookingInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutBookingInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutBookingInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutBookingInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutBookingInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBookingNestedInputObjectSchema =
  Schema;
