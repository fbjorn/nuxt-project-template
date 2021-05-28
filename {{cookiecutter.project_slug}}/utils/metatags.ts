import { LinkPropertyHref, MetaPropertyName } from 'vue-meta/types/vue-meta'
import conf from '../settings'

export const createMetaTags = (props: {
  title: string
  description: string
}): Array<MetaPropertyName> => {
  return [
    { hid: 'description', name: 'description', content: props.description },
    { hid: 'og:title', name: 'og:title', content: props.title },
    {
      hid: 'og:description',
      name: 'og:description',
      content: props.description,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: `${conf.prodBaseUrl}/img/logos/logo.png`,
    },

    { hid: 'twitter:title', name: 'twitter:title', content: props.title },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: props.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: `${conf.prodBaseUrl}/img/logos/logo.png`,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ]
}

export const link = (
  rel: string,
  href: string,
  extra: any = {}
): LinkPropertyHref => {
  return {
    rel,
    href,
    ...extra,
  }
}

export const favicon = (
  size: string,
  imgDir: string = '/img/icons'
): LinkPropertyHref => {
  return link('icon', `${imgDir}/favicon-${size}.png`, { sizes: size })
}
