import config from '../config.json';

const { name, url, bluesky } = config;
const defaultOgImage = `${url}/social-image.png`;

interface MetaParams {
  title: string;
  description: string;
  prefix?: string;
  ogImage?: string;
}

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
}: MetaParams) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: 'Banner for the site' },
    { property: 'og:image:width', content: '1020' },
    { property: 'og:image:height', content: '532' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:description', content: description },    
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: url },
    { property: 'twitter:creator', content: bluesky },
    { property: 'twitter:image', content: ogImage },
  ];
}
