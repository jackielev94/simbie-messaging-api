import type { SchemaOptions } from "celebrate";
import { celebrate } from "celebrate";

export const validatePayload = (validationSchema: SchemaOptions) =>
  celebrate(validationSchema, { allowUnknown: true });
