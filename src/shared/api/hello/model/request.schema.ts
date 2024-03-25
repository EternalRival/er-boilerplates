import { z } from 'zod';

const requestSchema = z.object({ message: z.string() });

export type ApiRequest = z.infer<typeof requestSchema>;

export function parseApiRequest(value: unknown): Nullable<ApiRequest> {
  return requestSchema.nullable().catch(null).parse(value);
}
