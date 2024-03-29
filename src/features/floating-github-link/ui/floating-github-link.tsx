import Image from 'next/image';

import { authorGithubUrl } from '@/shared/model/constants';

import type { ReactNode } from 'react';

export function FloatingGithubLink(): ReactNode {
  return (
    <a
      href={authorGithubUrl}
      target="_blank"
      className="fixed bottom-8 right-8 block drop-shadow-[0_0_.5rem_#000] transition-transform hover:scale-110"
    >
      <Image
        className="drop-shadow-[0_0_.5rem_#000]"
        src="/github-logo.png"
        alt={"author's github link"}
        width={64}
        height={64}
      />
    </a>
  );
}
