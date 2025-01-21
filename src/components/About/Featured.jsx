import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ year, title, subtitle, description, link, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex items-start gap-12 mb-16"
  >
    <span className="text-gray-500 w-32 flex-shrink-0">{year}</span>
    <div>
      <a href={link} className="group flex items-center gap-2 text-gray-900 hover:text-gray-600">
        <span className="text-xl font-medium">{title}</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <p className="text-gray-500 font-medium mb-3">{subtitle}</p>
      <p className="text-gray-600 leading-relaxed max-w-2xl">{description}</p>
    </div>
  </motion.div>
);

const ExperienceSection = ({ title, items }) => (
  <div className="flex gap-24 mb-24">
    {/* Left column with section title */}
    <div className="w-1/3">
      <h2 className="text-4xl font-bold font-faction sticky top-24">{title}</h2>
    </div>
    
    {/* Right column with items */}
    <div className="w-2/3 pb-8 border-b border-gray-200">
      {items.map((item, index) => (
        <ExperienceItem key={index} {...item} delay={index * 0.1} />
      ))}
    </div>
  </div>
);

const Featured = () => {
  const experienceItems = [
    {
      year: "Apr '23 - Present",
      title: 'Marketing Lead',
      subtitle: 'Vellum Mortgage',
      description: 'At Vellum Mortgage, I lead the marketing department, managing strategy and execution across website updates, CRM integration, design, content creation, sales enablement, event planning, and analytics. I launched a new marketing tech stack, integrating our CRM with the loan origination system to automate lead nurturing, milestone emails, and lead capture forms, resulting in over 300 new leads in the first quarter. I trained and onboarded four new loan officers, equipping them with tailored sales content and automations to accelerate their productivity. I also implemented key updates to the company website that drove an additional 5,000 visitors within a few months. Beyond this, I set annual marketing objectives, grew social media engagement by creating personalized content for loan officers, and developed detailed analytics tools to track and refine campaign performance.',
      link: '#'
    },
    {
      year: "Aug '21 - Mar '23",
      title: 'Marketing Specialist',
      subtitle: 'Coghlin Companies',
      description: 'At Coghlin Companies, I redesigned the company website using Figma, modernizing branding for three divisions and increasing monthly web traffic by over 10,000 visitors. Working closely with sales, I created a LinkedIn and Crunchbase campaign that generated six new business inquiries and overhauled reporting systems to identify and track companies visiting our site. I built landing pages for Google Ads campaigns targeting industries such as robotics and medical devices, which collectively drove over 50 high-quality leads. I also grew the company’s LinkedIn following from 1,500 to 4,000, managed email and SMS communications to 1,000+ employees, and organized internal events to foster stronger engagement.',
      link: '#'
    },
    {
      year: "May '19 - Aug '21",
      title: 'Marketing Associate',
      subtitle: 'Coghlin Companies',
      description: 'As a Marketing Associate at Coghlin Companies, I implemented HubSpot CRM, automating workflows and increasing efficiency in tracking over 500 active leads. I supported sales efforts by building competitive analysis frameworks and automated reporting tools that helped identify over 20 high-value prospects visiting the company website each month. I maintained and updated the company website, aligning content with marketing campaigns to improve user engagement. Additionally, I organized and executed internal events, strengthening communication across the 1,000+ employee organization.',
      link: '#'
    }
  ];

  const internshipItems = [
    {
      year: "Summer '18",
      title: 'Brand Marketing Intern',
      subtitle: 'Dassault Systemès',
      description: 'At Dassault Systèmes, I conducted a comprehensive competitor analysis and optimized product landing pages for Enovia, contributing to over 2,000 additional site visits. I worked with the web development team to implement Google Analytics insights and edited whitepapers for product launches, creating materials that directly supported sales and marketing efforts.',
      link: '#'
    },
    {
      year: "Summer '17",
      title: 'Marketing Intern',
      subtitle: 'Coghlin Companies',
      description: "At Coghlin Companies, I developed the company’s first structured social media content calendar, increasing post engagement by over 1,000 interactions within three months. I also redesigned the sales presentation used in client pitches, creating a more modern and persuasive tool that helped secure new business opportunities.",
      link: '#'
    },
    {
      year: "Summer '16",
      title: 'Summer Co-OP',
      subtitle: 'Protonex',
      description: 'At Protonex, I streamlined key processes for parts procurement and device assembly, reducing production time by 10 hours per project. I also designed a logo for a new product, improving its branding and market visibility.',
      link: '#'
    }
  ];

  const educationItems = [
    {
      year: "May '20",
      title: 'MBA',
      subtitle: 'Clark University',
      description: 'During my MBA, I specialized in business analytics, gaining hands-on experience in data analysis and business intelligence tools. I developed a strong foundation in interpreting and visualizing complex datasets to inform strategic decisions. My coursework also included exposure to machine learning applications, where I explored predictive analytics and automation techniques to solve real-world business challenges. This combination of technical and strategic skills prepared me to implement data-driven solutions across industries.',
      link: '#'
    },
    {
      year: "May '19",
      title: 'BA in Management',
      subtitle: 'Clark University',
      description: 'My undergraduate studies focused on management and statistics, with a liberal arts foundation that allowed me to explore a wide range of disciplines, including economics, psychology, and history. This diverse coursework provided me with a well-rounded perspective and the ability to approach challenges with creativity and critical thinking. As a varsity NCAA baseball pitcher, I honed leadership, teamwork, and time management skills while balancing the demands of athletics and academics. My role as a pitcher taught me how to perform under pressure, strategize effectively, and remain disciplined in high-stakes situations.',
      link: '#'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ExperienceSection title="Work Experience" items={experienceItems} />
        <ExperienceSection title="Internships" items={internshipItems} />
        <ExperienceSection title="Education" items={educationItems} />
      </div>
    </div>
  );
};

export default Featured;