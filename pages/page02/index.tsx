import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { Page02Page } from '@/pages/page02';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.PAGE_02} | ${siteTitle}`}</title>
      </Head>
      <Page02Page />
    </>
  );
}
