
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface ContactInfo {
  name: string;
  location: string;
  phones: string[];
  email: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  link: string;
}
