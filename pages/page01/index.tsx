import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { Page01Page } from '@/pages/page01';

import type { FC } from 'react';

const Page: FC = () => (
  <>
    <Head>
      <title>{`Page 01 | ${siteTitle}`}</title>
    </Head>
    <Page01Page />
  </>
);

export default Page;
