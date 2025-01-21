import { projectImages } from './images';

export const projects = [
  {
    id: 'law-firm-website',
    title: 'Law Firm Website Design',
    description: 'Built Webflow CMS for easy content updates and team management. Implemented instant consultation alerts and email analytics reports. Optimized UX based on user behavior data.',
    date: 'February 2023',
    status: 'Shipped',
    image: projectImages.slepkowCover,
    bg: 'bg-white'
  },
  {
    id: 'ai-trip-planning',
    title: 'Triply',
    description: 'Led user acquisition campaign for AI travel planning startup. Achieved 5% conversion rate through targeted Facebook/Instagram ads and ChatGPT marketing. Generated 150 beta users at $0.33 cost per lead.',
    date: 'January 2023',
    status: 'Beta',
    image: projectImages.triplyCover,
    bg: 'bg-white'
  },
  {
    id: 'sapience-news',
    title: 'Sapience News Website',
    description: 'Built ML news bias detection app with WPI team. Created intuitive interface for real-time analysis. Won 3rd place in Shark Tank competition.',
    date: 'February 2020',
    status: 'Shipped',
    image: projectImages.sapienceCover,
    bg: 'bg-white'
  }
];