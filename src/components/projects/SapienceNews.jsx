import React from 'react';
import { projectImages } from '../../data/images';

const SapienceNews = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="w-full rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl mb-24">
          <img
            src={projectImages.sapienceHeader}
            alt="Sapience News Interface"
            className="w-full"
          />
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-4 gap-24">
          {/* Left side - 3/4 width */}
          <div className="col-span-3">
            <h1 className="text-6xl font-bold font-faction mb-6">Sapience News</h1>
            <h2 className="text-4xl text-gray-500 font-light mb-12">
              ML-powered platform for detecting and analyzing media bias
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-24 max-w-3xl">
              For a Shark Tank competition at Clark University, we developed an innovative platform 
              that uses machine learning to analyze media bias in news articles. We built a 
              custom web scraper to gather training data from various news sources, ultimately 
              collecting and processing over 100,000 articles. The project combines traditional 
              ML techniques with modern NLP approaches to help readers make more informed 
              decisions about their news consumption.
            </p>

            {/* Problem/Outcome Section */}
            <div className="grid grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-bold mb-4">Problem</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  How might we help readers identify media bias in news articles quickly 
                  and objectively using machine learning technology, while ensuring the 
                  analysis is transparent and trustworthy?
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Outcome</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Developed a Random Forest classifier achieving 85% accuracy in bias detection 
                  through extensive data collection and model training. Created an intuitive 
                  interface for real-time analysis, winning 3rd place and securing funding 
                  in Clark's Clark Tank competition.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - 1/4 width */}
          <div className="space-y-12 mt-[140px]">
            <div>
              <h3 className="text-2xl font-bold mb-4">Role</h3>
              <p className="text-gray-500 text-xl">UX Designer, Frontend Developer & Presenter</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Timeline</h3>
              <p className="text-gray-500 text-xl">2 months</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Team</h3>
              <p className="text-gray-500 text-xl">3 people</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-20">
            <div className="pr-12">
              <h2 className="text-6xl font-bold font-faction mb-4">Development</h2>
              <h2 className="text-6xl font-bold font-faction text-gray-500 mb-8">timeline</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Our eight-week development process was carefully structured to balance thorough 
                data collection and model training with creating an intuitive user experience. 
                Each phase built upon the previous, culminating in a comprehensive solution 
                for media bias detection.
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Weeks 1-3—Data Collection & Processing</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Built Python web scrapers using BeautifulSoup and Selenium to gather articles 
                    from diverse news sources. Implemented data cleaning pipelines to standardize 
                    text, remove duplicates, and extract relevant features. Created a balanced 
                    dataset of 100,000 articles with pre-labeled bias ratings.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Weeks 4-5—Model Development</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Engineered features using NLP techniques including TF-IDF vectorization 
                    and sentiment analysis. Trained and optimized Random Forest classifier 
                    using scikit-learn, achieving 85% accuracy through cross-validation 
                    and hyperparameter tuning.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">03</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Weeks 6-7—UI Development</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Designed and built React frontend with data visualizations using D3.js. 
                    Created Flask API backend for real-time article analysis. Implemented 
                    caching and optimization to achieve sub-2-second response times.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">04</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Week 8—Testing & Pitch</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Conducted user testing with diverse student groups, focusing on how well 
                    they could identify bias patterns across left, right, and neutral perspectives. 
                    Refined UI based on feedback. Prepared competition materials and delivered 
                    winning pitch highlighting technical innovation and social impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Details */}
      <div className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl font-bold font-faction mb-8">Technical Architecture</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-16">
                Our solution combines three key technical components working in harmony: 
                data pipeline, machine learning engine, and user interface. Each component 
                was carefully designed to ensure accuracy, speed, and usability.
              </p>
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">01.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Data Pipeline: Custom scrapers collect articles, while preprocessing 
                      steps handle cleaning, deduplication, and feature extraction
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">02.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      ML Engine: Random Forest model processes TF-IDF features and 
                      sentiment scores through an optimized classification pipeline
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">03.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      User Interface: React frontend with D3.js visualizations connects 
                      to Flask backend via RESTful API with response caching
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-[600px] w-full rounded-2xl overflow-y-auto bg-[#FDF6F3] shadow-xl">
                <img
                  src={projectImages.sapienceFullScreen}
                  alt="Sapience Interface Design"
                  className="w-[110%] max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing & UX Section */}
      <div className="bg-[#FDF6F3] py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl font-bold font-faction mb-8">User-Centered Design</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Our design process focused on making complex bias analysis accessible and 
                actionable for everyday news readers. We developed an intuitive interface 
                that presents bias analysis through clear, interactive visualizations. 
                The dashboard displays left, right, and neutral perspectives side by side, 
                allowing users to easily identify and compare biases across different 
                viewpoints of the same story.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed mt-8">
                Through multiple rounds of testing with diverse student groups at Clark, 
                we refined the interface to effectively highlight bias patterns. The 
                three-perspective approach proved particularly effective, as users could 
                immediately see how the same news story was portrayed differently across 
                the political spectrum.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-faction mb-8">Market Strategy</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Our go-to-market approach centered on building credibility within academic 
                journalism programs before expanding to broader audiences. By partnering 
                with university journalism departments for beta testing, we gained valuable 
                feedback while establishing Sapience as a trusted educational tool. This 
                academic foundation helped validate our approach and refine our feature set.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed mt-8">
                The business model follows a freemium approach, with basic analysis tools 
                freely available to students and educators. Premium features, including 
                advanced analytics and batch processing capabilities, are offered to 
                newsrooms and research institutions. This model allows us to maintain 
                accessibility while building a sustainable revenue stream.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Competition Video Section */}
      <div className="bg-gray-900 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold font-faction mb-12">Competition Pitch</h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-16 max-w-3xl">
            We created this video to showcase Sapience's potential impact and innovative approach 
            to addressing media bias. The pitch helped us secure 3rd place in WPI's Shark Tank competition.
          </p>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bos2tX-CVew"
              title="Sapience Competition Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-900 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold font-faction mb-32">The Impact</h2>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-8 mb-32">
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">85%</span>
              <span className="text-xl text-gray-400">ML model accuracy</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">3rd</span>
              <span className="text-xl text-gray-400">Place in competition</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">1K</span>
              <span className="text-xl text-gray-400">Articles analyzed</span>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h3 className="text-3xl font-bold mb-12">Technical Innovation</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">ML Pipeline</h4>
                    <p className="text-gray-400">
                      Custom web scrapers and NLP processing pipeline handling 100,000+ articles 
                      with 85% classification accuracy
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">⚡️</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Real-time Analysis</h4>
                    <p className="text-gray-400">
                      Optimized backend with caching and parallel processing for sub-2-second 
                      article analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-12">Project Success</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Competition Recognition</h4>
                    <p className="text-gray-400">Secured $1,000 in seed funding and valuable investor feedback</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">User Validation</h4>
                    <p className="text-gray-400">Strong positive feedback from student test groups on the multi-perspective analysis approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SapienceNews; 