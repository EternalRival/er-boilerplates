import Head from 'next/head';

import { siteTitle } from '@/app/model/constants';
import { Page01Page } from '@/pages/page01';
import { RouteName } from '@/shared/router';

import type { ReactNode } from 'react';

export default function Page(): ReactNode {
  return (
    <>
      <Head>
        <title>{`${RouteName.PAGE_01} | ${siteTitle}`}</title>
      </Head>
      <Page01Page />
    </>
  );
}
