import { getAnswer, parseApiRequest } from '@/shared/api/hello';

import type { ApiResponse } from '@/shared/api/hello';
import type { NextApiHandler } from 'next';

const handler: NextApiHandler<ApiResponse> = async (req, res) => {
  const parsedParams = parseApiRequest(req.query);

  if (parsedParams) {
    const data = await getAnswer(parsedParams);
    res.json({ success: true, data });
  } else {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export default handler;
