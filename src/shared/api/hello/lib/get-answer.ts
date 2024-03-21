import { answer } from '../model/constants';

import type { ApiRequest } from '../model/request.schema';

export const getAnswer = (query: ApiRequest): Promise<string> =>
  new Promise((res, rej) => {
    if (query.message === 'error') {
      rej(new Error("message is 'error'"));
    }

    res(answer);
  });
