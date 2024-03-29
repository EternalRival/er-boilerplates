import { getAnswer } from './get-answer';
import { parseApiRequest } from '../model/request.schema';

import type { ApiResponse } from '../model/response.schema';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function handleRequest(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  const parsedParams = parseApiRequest(req.query);

  if (parsedParams) {
    const data = await getAnswer(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
