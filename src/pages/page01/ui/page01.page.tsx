import Head from 'next/head';

import { RouteName } from '@/shared/router';
import { siteTitle } from '@/shared/model/constants';

import type { ReactNode } from 'react';

export function Page01Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.PAGE_01} | ${siteTitle}`}</title>
      </Head>
      <h1>Page 01</h1>
    </>
  );
}
