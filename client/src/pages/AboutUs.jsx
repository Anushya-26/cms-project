import React from 'react'
import Header from './Header';
export default function AboutUs() {
  
  // --- PawsFurVive Section ---
  const pawsFurViveInfo = {
    name: "PawsFurVive",
    description:
      "PawsFurVive is dedicated to making pet adoption easy, transparent, and joyful. We connect loving families with pets in need, support animal shelters, and promote responsible pet ownership.",
    details: [
      "Founded by passionate animal lovers, PawsFurVive partners with local shelters to feature verified, up-to-date pet profiles.",
      "Our platform offers a user-friendly experience to search, filter, and connect with pets that fit your lifestyle.",
      "We provide resources on pet care, adoption guidance, and ongoing support to help every adopted pet thrive in their forever home.",
      "Join PawsFurVive and help us give every pet a second chance!"
    ]
  };
  
 
  // Card for PawsFurVive Info
  function PawsFurViveCard({ info }) {
    return (
      <>
      <section className="w-full bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">{info.name}</h2>
        <p className="text-gray-700 mb-4">{info.description}</p>
        <ul className="list-disc pl-5 text-gray-700">
          {info.details.map((detail, idx) => (
            <li key={idx} className="mb-1">{detail}</li>
          ))}
        </ul>
      </section>
      </>
    );
  }

  // Mission List in grid
  function MissionList({ missions }) {
    return (
      <section className="w-full bg-white rounded-2xl shadow p-5 " style={{ marginRight: '9rem' }}>
      <h2 className="text-xl font-bold text-orange-400 mb-2 text-center">Our Mission</h2>
      <div>
        {missions.map((m, i) => (
        <div key={i} className="flex items-start mb-2">
          <span className="text-2xl mr-2">{m.icon}</span>
          <div>
          <span className="font-semibold text-orange-500">{m.title}: </span>
          <span className="text-gray-700">{m.desc}</span>
          </div>
        </div>
        ))}
      </div>
      </section>
    );
  }

  // Impact/Adoption Importance grid
  function AdoptionImportanceList({ items }) {
    return (
      <section className="w-full mb-8">
        <h2 className="text-xl font-bold text-yellow-600 mb-4 text-center">Why Adoption Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-yellow-50 rounded-xl shadow p-4 flex flex-col items-center text-center">
              <span className="text-2xl mb-1">{item.icon}</span>
              <h3 className="font-semibold text-orange-500">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Extra Adoption Info grid
  function AdoptionInfoList({ info }) {
    return (
      <section className="w-full mb-8">
        <h2 className="text-xl font-bold text-pink-600 mb-4 text-center">Learn More About Adoption</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {info.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
              <span className="text-2xl mb-1">{item.icon}</span>
              <h3 className="font-semibold text-orange-500">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Our Mission Statements
  const missions = [
    {
      icon: "🌱",
      title: "Promote Adoption",
      desc: "Encouraging families to adopt pets and give them a forever home.",
    },
    {
      icon: "🤲",
      title: "Support Shelters",
      desc: "Partnering with shelters and rescue groups to help more animals.",
    },
    {
      icon: "📢",
      title: "Raise Awareness",
      desc: "Educating the public about responsible pet ownership and animal welfare.",
    },
    {
      icon: "💬",
      title: "Build Community",
      desc: "Connecting pet lovers and sharing inspiring adoption stories.",
    },
  ];
  // Tailwind CSS is used for styling below components
  // Add a playful dog gallery and impact/mission stats section
  

  // Importance of adoption
  const adoptionImportance = [
    {
      icon: "🌟",
      title: "Save Lives",
      text: "Millions of dogs are waiting in shelters for a loving home. Adopting gives them a second chance at happiness."
    },
    {
      icon: "💸",
      title: "Cost Effective",
      text: "Adoption fees are much lower than buying from breeders, and often include vaccinations, microchipping, and spaying/neutering."
    },
    {
      icon: "💖",
      title: "Unconditional Love",
      text: "Adopted dogs are grateful and loyal. They bring joy, companionship, and unconditional love to your family."
    }
  ];

  // Extra content about pet adoption
  const adoptionInfo = [
    {
      icon: "❤️",
      title: "Why Adopt?",
      text: "Adopting a pet saves lives and gives animals a second chance. Shelters are full of loving dogs waiting for a family like yours."
    },
    {
      icon: "🏡",
      title: "Responsible Adoption",
      text: "Before adopting, consider your lifestyle and commitment. Dogs need time, love, and care. Adoption is a lifelong promise."
    },
    {
      icon: "🤝",
      title: "Join Our Community",
      text: "Connect with other pet lovers, share your adoption stories, and help us spread awareness about responsible pet ownership."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-100 to-blue-200 font-quicksand flex flex-col">
     
     <header className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-orange-500">🐾 PawsFurVive</span>
        </div>
        <div className="hidden md:flex gap-8 text-[#D5451B] font-semibold">
          <a href="/home" className="hover:text-[#B521C0] transition">Home</a>
          <a href="#" className="hover:text-[#B521C0] transition">Adopt</a>
          <a href="/About" className="hover:text-[#B521C0] transition">About</a>
          <a href="#" className="hover:text-[#B521C0] transition">Developer</a>
        </div>
        <div className="flex gap-3">
          {/* Sign In and Sign Up buttons */}
          <a
            href="/Login"
            className="bg-white border border-[#B521C0] text-[#B521C0] hover:bg-[#B521C0] hover:text-white font-bold py-2 px-4 rounded-xl shadow transition-colors duration-300 text-base ml-2"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-[#B521C0] text-white hover:bg-[#D5451B] font-bold py-2 px-4 rounded-xl shadow transition-colors duration-300 text-base ml-2"
          >
            Sign Up
          </a>

        </div>
      </header>



      <main className="flex-1 p-6 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400 drop-shadow text-center">
          🐾 About PetAdoptions 🐾
        </h1>

        {/* PawsFurVive Info Section */}
        <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">{pawsFurViveInfo.name}</h2>
          <p className="text-gray-700 mb-4">{pawsFurViveInfo.description}</p>
          <ul className="list-disc pl-5 text-gray-700">
            {pawsFurViveInfo.details.map((detail, idx) => (
              <li key={idx} className="mb-1">{detail}</li>
            ))}
          </ul>
        </section>

        {/* Mission & Impact */}
        <div >
          {/* Mission Section */}
          <section className="bg-white rounded-2xl shadow p-5 flex flex-col">
            <h2 className="text-xl font-bold text-orange-400 mb-2">Our Mission</h2>
            <ul>
              {missions.map((m, i) => (
                <li key={i} className="flex items-start mb-2">
                  <span className="text-2xl mr-2">{m.icon}</span>
                  <div>
                    <span className="font-semibold text-orange-500">{m.title}: </span>
                    <span className="text-gray-700">{m.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        
        </div>
        <br/>
        <section className="w-full max-w-5xl mb-8">
          <h2 className="text-xl font-bold text-yellow-600 mb-4 text-center">Why Adoption Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {adoptionImportance.map((item, i) => (
              <div key={i} className="bg-yellow-50 rounded-xl shadow p-4 flex flex-col items-center text-center">
                <span className="text-2xl mb-1">{item.icon}</span>
                <h3 className="font-semibold text-orange-500">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Extra Info */}
        <section className="w-full max-w-5xl mb-8">
          <h2 className="text-xl font-bold text-pink-600 mb-4 text-center">Learn More About Adoption</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {adoptionInfo.map((info, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
                <span className="text-2xl mb-1">{info.icon}</span>
                <h3 className="font-semibold text-orange-500">{info.title}</h3>
                <p className="text-gray-700 text-sm">{info.text}</p>
              </div>
            ))}
          </div>
        </section>
        <p className="text-orange-400 font-bold text-lg bg-white rounded-xl px-5 py-3 shadow mt-6 text-center">
          Every pet deserves a loving home. 🐶 Adopt, don't shop!
        </p>
      </main>
      <footer className="bg-orange-100 py-3 text-center rounded-t-2xl font-bold text-md text-gray-800 shadow-inner mt-6">
        <span className="text-orange-400">Developed by:</span> <span className="text-pink-600">Anushya R, Sridhisha K, Sruthi S</span> 
      </footer>
    </div>
  );
}