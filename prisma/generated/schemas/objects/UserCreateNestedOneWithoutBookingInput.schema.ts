import { z } from "zod";
import { UserCreateWithoutBookingInputObjectSchema } from "./UserCreateWithoutBookingInput.schema";
import { UserUncheckedCreateWithoutBookingInputObjectSchema } from "./UserUncheckedCreateWithoutBookingInput.schema";
import { UserCreateOrConnectWithoutBookingInputObjectSchema } from "./UserCreateOrConnectWithoutBookingInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBookingInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutBookingInputObjectSchema = Schema;
