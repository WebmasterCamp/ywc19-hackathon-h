import { z } from "zod";
import { RestaurantCreateInputObjectSchema } from "./objects/RestaurantCreateInput.schema";
import { RestaurantUncheckedCreateInputObjectSchema } from "./objects/RestaurantUncheckedCreateInput.schema";

export const RestaurantCreateOneSchema = z.object({
  data: z.union([
    RestaurantCreateInputObjectSchema,
    RestaurantUncheckedCreateInputObjectSchema,
  ]),
});
