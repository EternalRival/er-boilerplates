import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { Page02Page } from '@/pages/page02';

import type { FC } from 'react';

const Page: FC = () => (
  <>
    <Head>
      <title>{`Page 02 | ${siteTitle}`}</title>
    </Head>
    <Page02Page />
  </>
);

export default Page;
