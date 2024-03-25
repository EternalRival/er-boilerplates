import { getAnswer, parseApiRequest } from '@/shared/api/hello';

import type { ApiResponse } from '@/shared/api/hello';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  const parsedParams = parseApiRequest(req.query);

  if (parsedParams) {
    const data = await getAnswer(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
