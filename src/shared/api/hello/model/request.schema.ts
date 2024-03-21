import { z } from 'zod';

const requestSchema = z.object({ message: z.string() });

export type ApiRequest = z.infer<typeof requestSchema>;

export const parseApiRequest = (value: unknown): Nullable<ApiRequest> =>
  requestSchema.nullable().catch(null).parse(value);
