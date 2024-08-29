import { z } from "zod";
import schema from "./schema";

export const taskSchema=z.object({
    title:schema.title(),
    description:schema.description()
})