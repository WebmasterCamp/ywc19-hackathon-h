import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutBookingInputObjectSchema } from "./UserCreateWithoutBookingInput.schema";
import { UserUncheckedCreateWithoutBookingInputObjectSchema } from "./UserUncheckedCreateWithoutBookingInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookingInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBookingInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBookingInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBookingInputObjectSchema = Schema;
