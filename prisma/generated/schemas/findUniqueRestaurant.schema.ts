import { z } from "zod";
import { RestaurantWhereUniqueInputObjectSchema } from "./objects/RestaurantWhereUniqueInput.schema";

export const RestaurantFindUniqueSchema = z.object({
  where: RestaurantWhereUniqueInputObjectSchema,
});
