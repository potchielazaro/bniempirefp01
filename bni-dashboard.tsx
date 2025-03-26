import React, { useState } from 'react';

function SimpleCaptionDashboard() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedPresenter, setSelectedPresenter] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  
  // Simplified data structure - just dates and presenters
  const events = [
    { date: "March 25, 2025", presenters: ["Arch. Mabel Ongcarranceja", "Maria Corazon \"Baby\" Cruz"] },
    { date: "April 1, 2025", presenters: ["Melrose Co", "Rommel Bares"] },
    { date: "April 8, 2025", presenters: ["Cris Mananquil", "Michelle Co"] },
    { date: "April 15, 2025", presenters: ["Ellen Samano", "Gabrielle Gay Sayson"] },
    { date: "April 22, 2025", presenters: ["Gina Talinio", "Marco Carlos"] },
    { date: "April 29, 2025", presenters: ["Irish De Guzman", "Katherine Alviar"] },
    { date: "May 6, 2025", presenters: ["Business Services Power Team"] }
  ];
  
  // Presenter details
  const presenters = [
    { name: "Arch. Mabel Ongcarranceja", company: "AMO Builders", category: "Builder/General Contractor" },
    { name: "Maria Corazon \"Baby\" Cruz", company: "Sun Life of Canada", category: "Life Insurance" },
    { name: "Melrose Co", company: "Maxicare", category: "HMO" },
    { name: "Rommel Bares", company: "Bares Business Solutions", category: "Accounting Services" },
    { name: "Cris Mananquil", company: "Backstage Manila", category: "Corporate Events and Activation" },
    { name: "Michelle Co", company: "MUNC Digital", category: "Social Media Management" },
    { name: "Ellen Samano", company: "Sparks Comm Manila, Inc.", category: "Advertising Agency" },
    { name: "Gabrielle Gay Sayson", company: "Solah Studios Inc.", category: "Interior Design - Commercial" },
    { name: "Gina Talinio", company: "Market Place Lending Corporation", category: "Business Lending" },
    { name: "Marco Carlos", company: "Hardin Sa Mendez", category: "Rest/Recreation Resort and Events Venue" },
    { name: "Irish De Guzman", company: "Maharlika Philippine Center for NLP", category: "Neuro-Linguistic Programming Instructor" },
    { name: "Katherine Alviar", company: "Brand Redeemed Consultancy", category: "Gallup Strengths Coach" },
    { name: "Business Services Power Team", company: "Multiple Companies", category: "Business Services" }
  ];
  
  // Simplified post structure
  const postTypes = ["Introduction", "Business Spotlight", "Final Reminder"];
  
  // Get a sample caption for a presenter and post type
  const getCaption = (presenter, type) => {
    const captions = {
      "Arch. Mabel Ongcarranceja": {
        "Introduction": "Design meets function in every building that bears Arch. Mabel Ongcarranceja's signature! ✏️🏢\n\nAs owner and principal architect at AMO Builders, Mabel has transformed countless spaces from mere concepts into breathtaking, functional realities.\n\nWhat makes her stand out? It's her extraordinary ability to balance aesthetic vision with practical construction knowledge—something clients celebrate when their projects are delivered on time, within budget, and beyond expectation.\n\nDon't miss Mabel's feature presentation next Tuesday where she'll reveal the hidden considerations in architectural design that can save businesses thousands in long-term operating costs!\n\n🗓 Date: March 25, 2025 (Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister here: http://bit.ly/BNIEmpireZoom\nOr send us a message to attend our business meeting.\n\nConnect with fellow business owners and professionals—send us a message on our BNI Empire Official Facebook Page to learn more!\n\n#ArchitecturalDesign #BuildSmarter #BNIEmpire #FeaturePresenter #YourNetworkIsYourNetWorth",
        "Business Spotlight": "\"Magkano na magpatayo ng bahay ngayon?\" 🏠💰\n\nWith construction costs constantly changing, this question is on everyone's mind when considering building a home. AMO Builders, under Arch. Mabel Ongcarranceja's expert leadership, specializes in creating dream homes that balance beauty, functionality, and budget.\n\nArch. Mabel helps homeowners navigate residential construction with:\n\n• Updated cost breakdowns for different home types and sizes\n• Smart material selections that offer long-term value\n• Design solutions that reduce construction complexities\n• Energy-efficient features that lower monthly utility costs\n\n\"Arch. Mabel made our home building journey less stressful by providing clear cost guidance from the start. Her design choices helped us stay within budget without sacrificing quality.\" - Recent homeowner\n\nJoin us Tuesday as Arch. Mabel answers \"Magkano na magpatayo ng bahay ngayon?\" with current insights and practical tips for your dream home project!\n\n🗓 Date: March 25, 2025 (Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister: http://bit.ly/BNIEmpireZoom\nOr message us to attend!\n\nConnect with Mabel directly:\n📱 09175800525 | 📧 archt.mabel@yahoo.com\n\n#HomeBuilding #ResidentialConstruction #BNIEmpire #YourNetworkIsYourNetWorth",
        "Final Reminder": "TOMORROW! The blueprint for budget-friendly home construction 🏗️\n\nBring your home building questions to our meeting tomorrow when Arch. Mabel Ongcarranceja of AMO Builders takes the spotlight!\n\nIn just 10 minutes, she'll answer \"Magkano na magpatayo ng bahay ngayon?\" and reveal:\n• Current costs for different home types and sizes\n• Key factors affecting your construction budget\n• Smart ways to save without cutting corners\n• Design decisions that pay off in the long run\n\n🗓 Date: March 25, 2025 (TOMORROW, Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister now: http://bit.ly/BNIEmpireZoom\n\nNo architectural background needed—just bring your questions about building your dream home!\n\nConnect with fellow business owners and professionals—send us a message on our BNI Empire Official Facebook Page to learn more!\n\n#ArchitecturalInsights #HomeBuilding #BNIEmpire #YourNetworkIsYourNetWorth #ProfessionalGrowth"
      },
      "Maria Corazon \"Baby\" Cruz": {
        "Introduction": "Behind every successful business owner is a solid financial plan! 📊\n\nMeet Baby Cruz, Registered Financial Consultant with Sun Life of Canada and one of BNI Empire's most valued members.\n\nWith over 20 years of experience in life insurance and financial planning, Baby has helped countless entrepreneurs protect their business legacy while building personal wealth.\n\nHer approach is refreshingly straightforward: \"Financial security isn't about complex products—it's about matching the right solutions to your unique life goals.\"\n\nJoin us Tuesday morning to discover Baby's framework for financial decisions that support both business growth AND life enjoyment!\n\n🗓 Date: March 25, 2025 (Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister here: http://bit.ly/BNIEmpireZoom\nOr send us a message to attend our business meeting.\n\nConnect with fellow business owners and professionals through our BNI Empire Official Facebook Page!\n\n#FinancialWisdom #BusinessProtection #BNIEmpire #YourNetworkIsYourNetWorth #ProfessionalGrowth",
        "Business Spotlight": "\"Life insurance is just for death benefits.\" Think again! 🚫\n\nThis Tuesday, Baby Cruz of Sun Life of Canada presents \"Beyond The Basics: Exploring The Versatility Of Life Insurance\" — revealing how modern life insurance can be a dynamic financial tool for entrepreneurs.\n\nAs a Registered Financial Consultant with over 20 years of experience, Baby shows business owners how versatile life insurance can be:\n\n• Cash value that works as an emergency business fund\n• Living benefits you can access during critical illness or disability\n• Loan collateral for business expansion opportunities\n• Tax-advantaged wealth transfer to preserve your business legacy\n\n\"I never realized my life insurance policy could help finance my company's growth. Baby showed me strategies I'd never considered before.\" - Business owner client\n\n🗓 Date: March 25, 2025 (Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister now: http://bit.ly/BNIEmpireZoom\n\nDiscover the untapped potential of your life insurance policies. Connect with Baby:\n📱 09178855079 | 📧 babyaguada177@yahoo.com\n\n#LifeInsuranceVersatility #BusinessProtection #BNIEmpire #YourNetworkIsYourNetWorth",
        "Final Reminder": "Financial knowledge = Business power! 💪\n\nTOMORROW: Baby Cruz from Sun Life of Canada shares \"Beyond The Basics: Exploring The Versatility Of Life Insurance\" — essential strategies every business owner needs.\n\nIn her feature presentation, she'll answer:\n• How can life insurance work as a living business asset?\n• What benefits can you access while still alive?\n• How can your policy help fund business growth?\n• Which insurance features offer the most flexibility for entrepreneurs?\n\nThe best part? Baby explains complex concepts without the intimidating jargon.\n\n🗓 Date: March 25, 2025 (TOMORROW, Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister here: http://bit.ly/BNIEmpireZoom\n\nConnect with fellow business owners and professionals—send us a message on our BNI Empire Official Facebook Page to learn more!\n\n#SmartMoney #BusinessProtection #BNIEmpire #YourNetworkIsYourNetWorth #ProfessionalGrowth"
      },
      // Add more presenters as needed
    };
    
    // For presenters not explicitly listed, return a generic caption
    if (!captions[presenter]) {
      return `${type} caption for ${presenter}.\n\nThis is a customized and engaging social media post showcasing the presenter's expertise and upcoming presentation.\n\n🗓 Date: ${getPresentationDate(presenter)} (Tuesday)\n⏰ Time: 6:30 AM - 9:30 AM\n🖥️ Online via ZOOM\n\nRegister here: http://bit.ly/BNIEmpireZoom\nOr send us a message to attend our business meeting.\n\nConnect with fellow business owners and professionals—send us a message on our BNI Empire Official Facebook Page to learn more!\n\n#BNIEmpire #FeaturePresentation #YourNetworkIsYourNetWorth #BusinessMeeting #ProfessionalGrowth`;
    }
    
    return captions[presenter][type] || `${type} caption for ${presenter}`;
  };
  
  // Get presentation date for a presenter
  const getPresentationDate = (presenter) => {
    for (const event of events) {
      if (event.presenters.includes(presenter)) {
        return event.date;
      }
    }
    return "Unknown date";
  };
  
  // Modal for displaying captions
  const CaptionModal = () => {
    if (!selectedCaption) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col">
          <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
            <h3 className="font-bold text-lg">{selectedCaption.type} - {selectedCaption.presenter}</h3>
            <button 
              onClick={() => setSelectedCaption(null)} 
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <div className="p-4 overflow-y-auto flex-grow">
            <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm mb-2">{selectedCaption.caption}</pre>
          </div>
          <div className="p-4 border-t flex justify-end sticky bottom-0 bg-white z-10">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                try {
                  // Create a temporary textarea element
                  const textarea = document.createElement('textarea');
                  textarea.value = selectedCaption.caption;
                  textarea.setAttribute('readonly', '');
                  textarea.style.position = 'absolute';
                  textarea.style.left = '-9999px';
                  document.body.appendChild(textarea);
                  
                  // Select and copy the text
                  textarea.select();
                  document.execCommand('copy');
                  
                  // Remove the temporary element
                  document.body.removeChild(textarea);
                  
                  alert("Copied to clipboard!");
                } catch (err) {
                  console.error('Failed to copy text: ', err);
                  alert("Couldn't copy to clipboard. Please try selecting and copying the text manually.");
                }
              }}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Calendar View Component
  const CalendarView = () => (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Upcoming Presentations</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className={`${index % 2 === 0 ? 'bg-blue-600' : 'bg-gray-700'} text-white p-3`}>
              <h3 className="font-bold">{event.date}</h3>
            </div>
            <div className="p-4">
              <h4 className="font-medium mb-2">Feature Presenters:</h4>
              <ul className="space-y-2">
                {event.presenters.map((presenter, idx) => (
                  <li key={idx} className="flex flex-col">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-100 mr-2"></span>
                      <span className="font-medium">{presenter}</span>
                    </div>
                    <div className="ml-5 mt-1 flex space-x-2">
                      {postTypes.map((type, typeIdx) => (
                        <button
                          key={typeIdx}
                          className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                          onClick={() => setSelectedCaption({
                            presenter,
                            type,
                            caption: getCaption(presenter, type)
                          })}
                        >
                          View {type}
                        </button>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Presenters View Component
  const PresentersView = () => (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Feature Presenters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {presenters.map((presenter, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md">
            <h3 className="font-bold text-lg">{presenter.name}</h3>
            <p className="text-sm text-gray-600">{presenter.company}</p>
            <p className="text-sm text-gray-500 mb-3">{presenter.category}</p>
            <p className="text-sm text-gray-600 mb-2">Presenting on: {getPresentationDate(presenter.name)}</p>
            
            <h4 className="font-medium text-sm mb-2">Social Media Posts:</h4>
            <div className="flex flex-wrap gap-2">
              {postTypes.map((type, typeIdx) => (
                <button
                  key={typeIdx}
                  className={`text-xs px-2 py-1 rounded ${
                    type === 'Introduction' ? 'bg-green-500 text-white' : 
                    type === 'Business Spotlight' ? 'bg-yellow-500 text-white' : 
                    'bg-orange-500 text-white'
                  }`}
                  onClick={() => setSelectedCaption({
                    presenter: presenter.name,
                    type,
                    caption: getCaption(presenter.name, type)
                  })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Schedule View Component
  const ScheduleView = () => {
    const allPosts = [];
    
    // Generate all posts for all presenters
    presenters.forEach(presenter => {
      postTypes.forEach(type => {
        // Determine the post date based on presentation date
        const presentationDate = new Date(getPresentationDate(presenter.name));
        let postDate = new Date(presentationDate);
        
        if (type === "Introduction") {
          postDate.setDate(presentationDate.getDate() - 4);
        } else if (type === "Business Spotlight") {
          postDate.setDate(presentationDate.getDate() - 3);
        } else {
          postDate.setDate(presentationDate.getDate() - 1);
        }
        
        allPosts.push({
          date: postDate.toISOString().split('T')[0],
          presenter: presenter.name,
          type,
          presentationDate: getPresentationDate(presenter.name)
        });
      });
    });
    
    // Sort posts by date
    allPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Complete Posting Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="py-3 px-6 text-left">Post Date</th>
                <th className="py-3 px-6 text-left">Presenter</th>
                <th className="py-3 px-6 text-left">Post Type</th>
                <th className="py-3 px-6 text-left">Presentation Date</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {allPosts.map((post, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left">{post.date}</td>
                  <td className="py-3 px-6 text-left">{post.presenter}</td>
                  <td className="py-3 px-6 text-left">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      post.type === 'Introduction' ? 'bg-green-100 text-green-800' : 
                      post.type === 'Business Spotlight' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {post.type}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">{post.presentationDate}</td>
                  <td className="py-3 px-6 text-left">
                    <button 
                      className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => setSelectedCaption({
                        presenter: post.presenter,
                        type: post.type,
                        caption: getCaption(post.presenter, post.type)
                      })}
                    >
                      View Caption
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">BNI Empire Chapter</h1>
          <h2 className="text-xl text-gray-700">Social Media Campaign Dashboard</h2>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 bg-white rounded-lg shadow-sm">
          <div className="flex">
            <button 
              className={`flex-1 py-2 px-4 text-center ${activeTab === 'calendar' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('calendar')}
            >
              Calendar View
            </button>
            <button 
              className={`flex-1 py-2 px-4 text-center ${activeTab === 'presenters' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('presenters')}
            >
              Presenters
            </button>
            <button 
              className={`flex-1 py-2 px-4 text-center ${activeTab === 'schedule' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('schedule')}
            >
              Post Schedule
            </button>
          </div>
        </div>
        
        {/* Content */}
        {activeTab === 'calendar' && <CalendarView />}
        {activeTab === 'presenters' && <PresentersView />}
        {activeTab === 'schedule' && <ScheduleView />}
        
        {/* Caption Modal */}
        {selectedCaption && <CaptionModal />}
      </div>
    </div>
  );
}

export default SimpleCaptionDashboard;
