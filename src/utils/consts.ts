export const SITE_TITLE = 'Bloggus'
export const SITE_DESCRIPTION = 'Welcome to my website!'

export const GITHUB = 'https://github.com/webskyus/'

export const LINKEDIN = 'https://www.linkedin.com/in/webskyus/'

export enum URLS {
  HOME = '/',
  HI_TECH = '/hi-tech',
  GAMES = '/games',
  ANIME = '/anime',
  SPORTS = '/sports',
  MOVIE = '/movie',
  CYBERSPORT = '/cybersport'
}

interface PagesHeadInfoType {
  title: string
  description: string
}

export const PAGES_HEAD_INFO: Record<URLS, PagesHeadInfoType> = {
  [URLS.HOME]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  },
  [URLS.HI_TECH]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  },
  [URLS.GAMES]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  },
  [URLS.ANIME]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  },
  [URLS.SPORTS]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  },
  [URLS.MOVIE]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  },
  [URLS.CYBERSPORT]: {
    title: 'Inspirations',
    description: 'We\'ve scoured web rankings and social media to compile the ultimate list of travel\'s most important, useful, and entertaining blogs.'
  }
}

export enum POST_TYPE {
  POST_SM = 'h-[200px]',
  POST_MD = 'h-[400px]',
  POST_LG = 'h-[600px]',
}
