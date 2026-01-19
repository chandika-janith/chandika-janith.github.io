
import React from 'react';
import { SocialLink, ContactInfo, PortfolioItem } from './types';

export const CONTACT_INFO: ContactInfo = {
  name: "Chandika Janith",
  location: "Badulla, Sri Lanka",
  phones: ["+94 70 3054 874", "+94 75 6060 007"],
  email: "chandikajanith0@gmail.com"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Facebook", url: "https://www.facebook.com/chandika.janith.cj", icon: "facebook", username: "chandika.janith.cj" },
  { platform: "Instagram", url: "https://www.instagram.com/chandika.janith?igsh=MzdjdzRjaGx0b2I=", icon: "instagram", username: "chandika.janith" },
  { platform: "WhatsApp", url: "https://wa.me/qr/NOKZ7LO7SGFMH1", icon: "whatsapp", username: "Chat on WhatsApp" },
  { platform: "Telegram", url: "https://t.me/chandika_janith", icon: "telegram", username: "@chandika_janith" },
  { platform: "Behance", url: "https://www.behance.net/chandikajanith", icon: "behance", username: "chandikajanith" }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [];
