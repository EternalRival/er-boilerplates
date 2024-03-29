import Head from 'next/head';

import { RouteName } from '@/shared/router';
import { siteTitle } from '@/shared/model/constants';

import type { ReactNode } from 'react';

export function Page02Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.PAGE_02} | ${siteTitle}`}</title>
      </Head>
      <h1>Page 02</h1>
    </>
  );
}
