import { clsx } from 'clsx';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

import { FloatingGithubLink } from '@/features/floating-github-link';
import { NavBar } from '@/features/nav-bar';
import { routes } from '@/shared/router';

import { getFilteredNavRoutes } from '../lib/get-nav-routes';
import { metadata, siteTitle } from '../model/constants';

import type { FC, ReactNode } from 'react';

type Props = { children: ReactNode };

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin', 'cyrillic'] });

export const Layout: FC<Props> = ({ children }) => (
  <div className={clsx(roboto.className, 'bg-color2 flex min-h-screen')}>
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="/opengraph-image.png"
      />
      <link
        rel="apple-touch-icon"
        href="/opengraph-image.png"
      />
      {metadata.map(({ content, name }) => (
        <meta
          content={content}
          name={name}
          key={name}
        />
      ))}
      <title>{siteTitle}</title>
    </Head>
    <header className="bg-color1 flex shrink-0 items-center shadow-[0_0_10px_-5px]">
      <NavBar routes={getFilteredNavRoutes(routes)} />
      <FloatingGithubLink />
    </header>
    <main className="flex grow flex-col items-center justify-center p-4">{children}</main>
  </div>
);
