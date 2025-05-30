import React, { useState } from 'react';

export default function Guidelines() {
  const [tab, setTab] = useState('puppy');

  const tips = {
    grooming: [
      "Regular brushing depending on coat type",
      "Ear cleaning once a week",
      "Trim nails every 3–4 weeks",
      "Bath once every 4–6 weeks using dog-safe shampoo",
      "Check for fleas and ticks after walks"
    ],
    hygiene: [
      "Clean food and water bowls daily",
      "Wash bedding once a week",
      "Disinfect toys periodically",
      "Maintain oral hygiene with dental sticks"
    ],
    safety: [
      "Keep harmful foods and plants away",
      "Avoid small toys that can be swallowed",
      "Use a secure leash during walks",
      "Microchip and use a collar with ID tag"
    ]
  };

  const healthcareTips = {
    puppy: [
      "Frequent deworming till 6 months",
      "Core vaccinations: DHPP, Rabies, Bordetella",
      "Begin heartworm preventatives",
      "Regular vet visits every 2–3 months"
    ],
    adult: [
      "Annual booster shots",
      "Heartworm, flea and tick prevention",
      "Dental scaling if needed",
      "Monitor weight and energy levels"
    ],
    senior: [
      "Blood tests for liver/kidney function",
      "Joint supplements: glucosamine, omega-3",
      "Vision and hearing checkups",
      "Pain management for arthritis or other issues"
    ]
  };

  const essentialCare = [
    { title: "🐕 Nutrition", points: ["Breed-specific food types", "Avoid overfeeding or underfeeding", "Always provide clean drinking water"] },
    { title: "⚕️ Regular Vet Visits", points: ["Annual health checkups", "Vaccination updates", "Dental check and cleaning"] },
    { title: "🎾 Exercise & Play", points: ["Daily walks and play sessions", "Mental stimulation toys", "Prevent boredom and obesity"] },
    { title: "🛎️ Comfort", points: ["Clean sleeping space", "Proper bedding", "Avoid stress and provide love"] },
    { title: "🔒 Safety First", points: ["Avoid toxic foods like chocolate", "Secure backyard fences", "Use leash while walking"] },
    { title: "🧠 Training & Behavior", points: ["Basic commands (sit, stay, come)", "Positive reinforcement", "Discourage aggressive behavior"] }
  ];

  return (
    <div className="relative min-h-screen bg-[#F4E7E1] font-sans overflow-hidden p-6">
      {/* Floating Dog Paws Background */}
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .dog-paw {
          position: absolute;
          fill: #D5451B;
          opacity: 0.15;
          animation: floatUpDown 6s ease-in-out infinite;
          filter: drop-shadow(0 0 2px rgba(213,69,27,0.2));
        }
        .paw1 { top: 10%; left: 5%; width: 60px; animation-delay: 0s; }
        .paw2 { top: 30%; right: 10%; width: 100px; animation-delay: 2s; }
        .paw3 { bottom: 15%; left: 15%; width: 80px; animation-delay: 4s; }
        .paw4 { bottom: 25%; right: 20%; width: 70px; animation-delay: 1s; }
      `}</style>

      {/* SVG Background Paws */}
      {["paw1", "paw2", "paw3", "paw4"].map((paw) => (
        <svg
          key={paw}
          className={`dog-paw ${paw}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle cx="5.5" cy="10.5" r="2.5" />
          <circle cx="18.5" cy="10.5" r="2.5" />
          <circle cx="12" cy="4.5" r="2.5" />
          <ellipse cx="12" cy="17" rx="5" ry="7" />
        </svg>
      ))}

      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-[#D5451B]" style={{ minWidth: '200px' }}>
          <span className="text-3xl font-extrabold tracking-tight font-serif flex items-center gap-2">
            PawsFurVive
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5.5" cy="10.5" r="2.5" />
              <circle cx="18.5" cy="10.5" r="2.5" />
              <circle cx="12" cy="4.5" r="2.5" />
              <ellipse cx="12" cy="17" rx="5" ry="7" />
            </svg>
          </span>
        </div>

        <div className="flex flex-col items-center flex-grow">
          <h1 className="text-4xl font-bold text-[#B521C0] drop-shadow-md">🐾 Ultimate Dog Care Hub</h1>
          <p className="text-[#D5451B] text-lg mt-1">All-round care tips for your furry friends</p>
        </div>

        <div style={{ width: '200px' }}></div>
      </div>

      {/* Welcome */}
      <div className="bg-[#F4E7E1] text-[#5C3B1E] p-4 mb-8 rounded-xl flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-[#B521C0] mb-2 text-center">🐕 Welcome to the Pack!</h2>
        <p className="max-w-xl text-lg text-center">
          Whether you're a proud puppy parent, seasoned dog owner, or caring for a wise senior pup — this hub is your go-to guide for keeping tails wagging and paws happy. 🐾
        </p>
      </div>

      {/* Age Tabs */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#FF9B45] text-white font-semibold grid grid-cols-3 text-center rounded-lg overflow-hidden shadow">
          {["puppy", "adult", "senior"].map((age) => (
            <button
              key={age}
              className={`p-3 ${tab === age ? 'bg-[#D5451B]' : 'hover:bg-[#d5451b]/90'}`}
              onClick={() => setTab(age)}
            >
              {age.charAt(0).toUpperCase() + age.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6 space-y-6 transition-all duration-500">
          {tab === 'puppy' && (
            <>
              <h2 className="text-2xl font-semibold text-[#B521C0]">🐶 Puppy Essentials</h2>
              <ul className="list-disc pl-6 text-[#5C3B1E] space-y-2">
                <li>High-protein puppy food 3-4 times a day</li>
                <li>Training: Potty training, socialization, basic commands</li>
                <li>Daily playtime to burn energy and develop coordination</li>
                <li>
                  Vaccination Schedule:
                  <ul className="list-disc pl-6">
                    <li>6-8 weeks: DHPP, Bordetella</li>
                    <li>10-12 weeks: DHPP, Leptospirosis</li>
                    <li>14-16 weeks: DHPP, Rabies</li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#B521C0]">🩺 Healthcare</h3>
                <br/>
                <ul className="list-disc pl-6 text-[#5C3B1E] space-y-1">
                  {healthcareTips.puppy.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
            </>
          )}
          {tab === 'adult' && (
            <>
              <h2 className="text-2xl font-semibold text-[#B521C0]">🦴 Adult Dog Care</h2>
              <ul className="list-disc pl-6 text-[#5C3B1E] space-y-2">
                <li>Two meals per day with balanced nutrition</li>
                <li>Daily walks and active playtime</li>
                <li>Annual vet checkups and booster vaccinations</li>
                <li>Routine grooming and hygiene practices</li>
                <li>Interactive toys for mental stimulation</li>
              </ul>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#B521C0]">🩺 Healthcare</h3>
                <br/>
                <ul className="list-disc pl-6 text-[#5C3B1E] space-y-1">
                  {healthcareTips.adult.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
            </>
          )}
          {tab === 'senior' && (
            <>
              <h2 className="text-2xl font-semibold text-[#B521C0]">🢓 Senior Dog Wellness</h2>
              <ul className="list-disc pl-6 text-[#5C3B1E] space-y-2">
                <li>Senior-specific diet with supplements (omega-3, glucosamine)</li>
                <li>Gentle walks and short play sessions</li>
                <li>Comfortable sleeping area with orthopedic bedding</li>
                <li>Monitor behavior for signs of pain or discomfort</li>
              </ul>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#B521C0]">🩺 Healthcare</h3>
                <br/>
                <ul className="list-disc pl-6 text-[#5C3B1E] space-y-1">
                  {healthcareTips.senior.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Essential Care Guide */}
        <h2 className="text-2xl font-bold text-[#B521C0] mt-10 mb-4">🪰 Essential Care Guide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentialCare.map((item, index) => (
            <div key={index} className="bg-[#fff6f2] p-5 rounded-lg shadow hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-[#D5451B] mb-2">{item.title}</h3>
              <ul className="list-disc pl-5 text-[#5C3B1E] space-y-1">
                {item.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Grooming, Hygiene, Safety (you can add more like this) */}
        <h2 className="text-2xl font-bold text-[#B521C0] mt-10 mb-4">🪼 Grooming, Hygiene & Safety</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["grooming", "hygiene", "safety"].map((section, i) => (
            <div key={i} className="bg-[#fff6f2] p-5 rounded-lg shadow hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-[#B521C0] mb-2">
                {section === "grooming" ? "✨ Grooming" : section === "hygiene" ? "🧼 Hygiene" : "🛡️ Safety"}
              </h3>
              <ul className="list-disc pl-5 text-[#5C3B1E] space-y-1">
                {tips[section].map((tip, j) => <li key={j}>{tip}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
