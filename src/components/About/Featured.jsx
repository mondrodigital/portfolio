import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ year, title, subtitle, description, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12 mb-12 lg:mb-16"
  >
    <span className="text-gray-500 w-full lg:w-32 flex-shrink-0 text-base sm:text-lg">{year}</span>
    <div>
      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 font-medium mb-3 text-base sm:text-lg">{subtitle}</p>
      <p className="text-gray-600 leading-relaxed max-w-2xl text-base sm:text-lg">{description}</p>
    </div>
  </motion.div>
);

const ExperienceSection = ({ title, items }) => (
  <div className="flex flex-col lg:flex-row lg:gap-24 mb-16 lg:mb-24">
    {/* Left column with section title */}
    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
      <h2 className="text-3xl sm:text-4xl font-bold font-faction lg:sticky lg:top-24">{title}</h2>
    </div>
    
    {/* Right column with items */}
    <div className="w-full lg:w-2/3 pb-8 border-b border-gray-200">
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
      description: `Built and manage Vellum's entire marketing tech stack. Automated lead nurturing through CRM-LOS integration, generating 300+ qualified leads in Q1 2024. Trained 4 loan officers on sales automation, reducing their admin work by 70%. Grew website traffic 40% through conversion-focused landing pages and SEO optimization. Currently scaling content strategy across social and email, with 85% of loan officers actively using provided templates.`
    },
    {
      year: "Aug '21 - Mar '23",
      title: 'Marketing Specialist',
      subtitle: 'Coghlin Companies',
      description: `Led complete website redesign that increased qualified leads by 200%. Built targeted Google Ads campaigns for robotics and medical device verticals, achieving $40 CAC (vs. industry average $200). Grew LinkedIn from 1.5K to 4K followers through data-driven content strategy. Key win: Generated 6 enterprise leads worth $2M+ through LinkedIn/Crunchbase campaign targeting Fortune 500 manufacturers.`
    },
    {
      year: "May '19 - Aug '21",
      title: 'Marketing Associate',
      subtitle: 'Coghlin Companies',
      description: `Implemented HubSpot CRM and built automated lead scoring system that identified 20+ high-value prospects monthly. Created first structured analytics dashboard tracking website engagement, reducing reporting time from 4 hours to 15 minutes weekly. Automated 80% of internal communications workflow through HubSpot-Slack integration.`
    }
  ];

  const internshipItems = [
    {
      year: "Summer '18",
      title: 'Brand Marketing Intern',
      subtitle: 'Dassault Systemès',
      description: `Increased Enovia product landing page conversion rate by 40% through competitive analysis and UX optimization. Built first version of automated competitor tracking system, now used across 3 product lines. Contributed to 2 major product launches that exceeded signup targets by 25%.`
    },
    {
      year: "Summer '17",
      title: 'Marketing Intern',
      subtitle: 'Coghlin Companies',
      description: `Created company's first social media content system, increasing engagement 300% in 3 months. Redesigned sales deck that helped close 2 major accounts worth $500K+. Built repeatable process for content creation that reduced turnaround time from 2 weeks to 3 days.`
    },
    {
      year: "Summer '16",
      title: 'Summer Co-OP',
      subtitle: 'Protonex',
      description: `Optimized production workflow reducing assembly time by 25% (10 hours per project). Designed product logo now used across company's military power systems line. Created standardized parts procurement process adopted by 3 other departments.`
    }
  ];

  const educationItems = [
    {
      year: "May '20",
      title: 'MBA',
      subtitle: 'Clark University',
      description: `Focused on intersection of marketing analytics and machine learning. Built 3 full-stack projects combining ML and business applications: 1) News bias detection system (85% accuracy), 2) Customer churn predictor (78% accuracy), 3) Marketing spend optimizer (increased ROAS by 40% in simulations). Led 4-person team to 3rd place in university's startup competition.`
    },
    {
      year: "May '19",
      title: 'BA in Management',
      subtitle: 'Clark University',
      description: `Combined management and statistics coursework to build quantitative marketing foundation. As NCAA baseball pitcher, maintained 3.8 GPA while practicing 20+ hours weekly. Key projects: 1) Built regression model predicting customer lifetime value (R² = 0.82), 2) Created automated social media analytics dashboard used by university marketing team.`
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ExperienceSection title="Work Experience" items={experienceItems} />
        <ExperienceSection title="Internships" items={internshipItems} />
        <ExperienceSection title="Education" items={educationItems} />
      </div>
    </div>
  );
};

export default Featured;