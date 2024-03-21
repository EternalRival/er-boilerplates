export const siteTitle = 'Site Title';

const deployUrl = 'https://eternalrival.github.com';

const description = 'Description template from https://github.com/EternalRival';
const ogImage = `${deployUrl}/opengraph-image.png`;

export const metadata = [
  {
    name: 'description',
    content: description,
  },
  {
    name: 'og:title',
    content: siteTitle,
  },
  {
    name: 'og:description',
    content: description,
  },
  {
    name: 'og:type',
    content: 'website',
  },
  {
    name: 'og:image',
    content: ogImage,
  },
];
