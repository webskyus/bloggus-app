export const SITE_TITLE = "Bloggus";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const GITHUB = "https://github.com/webskyus/";

export const LINKEDIN = "https://www.linkedin.com/in/webskyus/";

export enum PAGE_NAME {
  HOME = "Home",
  HI_TECH = "Hi-Tech",
  GAMES = "Games",
  ANIME = "Anime",
  SPORT = "Sport",
  MOVIE = "Movie",
  FINANCE = "Finance",
  MUSIC = "Music",
  LIFE = "Life",
}

export enum PAGE_CATEGORY {
  HI_TECH = "hi-Tech",
  GAMES = "games",
  ANIME = "anime",
  SPORT = "sport",
  MOVIE = "movie",
  FINANCE = "finance",
  MUSIC = "music",
  LIFE = "life",
}

export const categories: PAGE_CATEGORY[] = [
  PAGE_CATEGORY.HI_TECH,
  PAGE_CATEGORY.GAMES,
  PAGE_CATEGORY.ANIME,
  PAGE_CATEGORY.SPORT,
  PAGE_CATEGORY.MOVIE,
  PAGE_CATEGORY.FINANCE,
  PAGE_CATEGORY.MUSIC,
  PAGE_CATEGORY.LIFE,
];

export const URLS: Record<PAGE_NAME, `/${string}`> = {
  [PAGE_NAME.HOME]: "/",
  [PAGE_NAME.HI_TECH]: "/hi-tech",
  [PAGE_NAME.GAMES]: "/games",
  [PAGE_NAME.ANIME]: "/anime",
  [PAGE_NAME.SPORT]: "/sport",
  [PAGE_NAME.MOVIE]: "/movie",
  [PAGE_NAME.FINANCE]: "/finance",
  [PAGE_NAME.MUSIC]: "/music",
  [PAGE_NAME.LIFE]: "/life",
};

export const PAGES_HEAD_INFO: Record<
  PAGE_CATEGORY,
  { title: PAGE_NAME; description: string }
> = {
  [PAGE_CATEGORY.HI_TECH]: {
    title: PAGE_NAME.HI_TECH,
    description:
      "Welcome to the cutting-edge world of technology! Dive into the next pages to explore the latest advancements, futuristic innovations, and groundbreaking developments in the hi-tech realm. From artificial intelligence to virtual reality, stay ahead of the curve and witness the evolution of the digital landscape.",
  },
  [PAGE_CATEGORY.GAMES]: {
    title: PAGE_NAME.GAMES,
    description:
      "Immerse yourself in the thrilling universe of gaming. Discover reviews, tips, and updates on the hottest video games, board games, and esports competitions. Whether you're a casual gamer or a hardcore enthusiast, these pages are your gateway to endless excitement and interactive entertainment.",
  },
  [PAGE_CATEGORY.ANIME]: {
    title: PAGE_NAME.ANIME,
    description:
      "Embark on a journey into the captivating realm of anime. Explore in-depth reviews, character analyses, and the latest releases. From classic masterpieces to contemporary gems, these pages celebrate the artistry and storytelling magic that anime brings to screens around the world.",
  },
  [PAGE_CATEGORY.SPORT]: {
    title: PAGE_NAME.SPORT,
    description:
      "Experience the adrenaline rush of the sporting world. From nail-biting matches to inspiring athlete stories, these pages are a celebration of athleticism and sportsmanship. Stay updated on scores, highlights, and the latest trends in the ever-evolving landscape of sports.",
  },
  [PAGE_CATEGORY.MOVIE]: {
    title: PAGE_NAME.MOVIE,
    description:
      "Lights, camera, action! Delve into the cinematic universe with reviews, behind-the-scenes insights, and recommendations for the latest blockbusters and indie gems. Whether you're a film buff or just looking for a good movie night suggestion, these pages have you covered.",
  },
  [PAGE_CATEGORY.FINANCE]: {
    title: PAGE_NAME.FINANCE,
    description:
      "Navigate the complex world of finance with insights into investments, market trends, and personal finance tips. Stay informed about the ever-changing financial landscape and make wise decisions to secure your financial future.",
  },
  [PAGE_CATEGORY.MUSIC]: {
    title: PAGE_NAME.MUSIC,
    description:
      "Groove to the rhythm of the music pages, where you'll find a melodic mix of genres, artist spotlights, and album reviews. From chart-toppers to hidden gems, explore the diverse sounds that shape the soundtrack of our lives.",
  },
  [PAGE_CATEGORY.LIFE]: {
    title: PAGE_NAME.LIFE,
    description:
      "Wrap up your journey through these pages with a reflection on life itself. Discover articles on self-improvement, wellness, travel, and everything in between. These pages are your guide to living a fulfilling and balanced life in a world filled with endless possibilities.",
  },
};

export enum POST_TYPE {
  POST_SM = "h-[200px]",
  POST_MD = "h-[400px]",
  POST_LG = "h-[600px]",
}
