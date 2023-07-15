import { z } from "zod";
import { RestaurantUpdateInputObjectSchema } from "./objects/RestaurantUpdateInput.schema";
import { RestaurantUncheckedUpdateInputObjectSchema } from "./objects/RestaurantUncheckedUpdateInput.schema";
import { RestaurantWhereUniqueInputObjectSchema } from "./objects/RestaurantWhereUniqueInput.schema";

export const RestaurantUpdateOneSchema = z.object({
  data: z.union([
    RestaurantUpdateInputObjectSchema,
    RestaurantUncheckedUpdateInputObjectSchema,
  ]),
  where: RestaurantWhereUniqueInputObjectSchema,
});
