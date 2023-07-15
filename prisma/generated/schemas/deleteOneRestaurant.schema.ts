import { z } from "zod";
import { RestaurantWhereUniqueInputObjectSchema } from "./objects/RestaurantWhereUniqueInput.schema";

export const RestaurantDeleteOneSchema = z.object({
  where: RestaurantWhereUniqueInputObjectSchema,
});
