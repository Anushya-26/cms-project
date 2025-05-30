import { Link } from "react-router-dom";
import Header from "./Header";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#F4E7E1] via-[#FF9B45]/30 to-[#B521C0]/10 font-sans overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-[#D5451B]/20 rounded-full blur-[60px] z-0 animate-float1" />
      <div className="absolute -bottom-40 -right-40 w-[380px] h-[380px] bg-[#B521C0]/20 rounded-full blur-[70px] z-0 animate-float2" />
      <Header/>
    
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-20 px-6">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start">
          <span className="bg-[#FF9B45]/20 text-[#B521C0] px-5 py-1 rounded-full mb-5 font-semibold text-base tracking-wide shadow animate-pulse">
            Where Every Paw Finds a Home
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#D5451B] mb-6 leading-tight font-serif drop-shadow-lg">
            Adopt <span className="text-[#B521C0]">Happiness</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#B521C0] mb-8 font-medium max-w-2xl">
            Give a loving home to a dog in need. Every adoption is a new
            beginning, a new story, and a new best friend.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <span className="bg-[#F4E7E1] text-[#D5451B] px-4 py-2 rounded-full font-semibold shadow animate-bounce">
              🐶 100+ Dogs Rescued
            </span>
            <span className="bg-[#FF9B45]/20 text-[#B521C0] px-4 py-2 rounded-full font-semibold shadow">
              ❤️ Trusted by Families
            </span>
          </div>
          <Link
            to="/login"
            className="bg-[#B521C0] hover:bg-[#D5451B] text-white font-bold py-3 px-10 rounded-xl shadow-lg transition-colors duration-300 text-lg"
          >
            View Dogs for Adoption
          </Link>
        </div>
        {/* Right: Dog Image Card Carousel */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-60 h-60 bg-[#FF9B45]/20 rounded-3xl blur-[30px] z-0" />
            <div className="bg-white/90 rounded-3xl shadow-2xl border-2 border-[#FF9B45]/30 p-8 flex flex-col items-center max-w-xs relative z-10 transition-transform group-hover:scale-105 duration-300">
              <img
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
                alt="Adoptable dog"
                className="rounded-2xl shadow-xl border-4 border-[#F4E7E1] object-cover w-56 h-56 mb-4 hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-2xl font-bold text-[#D5451B] mb-1">Buddy</h2>
              <p className="text-[#B521C0] font-medium mb-2">
                2 years old • Male
              </p>
              <span className="bg-[#FF9B45]/20 text-[#FF9B45] px-3 py-1 rounded-full text-sm mb-3">
                Labrador Mix
              </span>
              <p className="text-center text-[#B521C0] text-sm mb-4">
                Friendly, playful, and ready for a forever home!
              </p>
              <Link to="/login">
              <button  className="bg-[#FF9B45] hover:bg-[#B521C0] text-white px-6 py-2 rounded-lg font-semibold shadow transition">
                Adopt Me
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Info Cards about Dogs */}
      <section className="max-w-7xl mx-auto mt-16 px-6 grid md:grid-cols-3 gap-10">
        <div className="bg-gradient-to-br from-[#F4E7E1] to-[#FF9B45]/30 rounded-2xl shadow-xl p-8 border-l-8 border-[#FF9B45] hover:scale-105 transition-transform duration-300 group">
          <h3 className="text-[#D5451B] font-bold text-2xl mb-3 flex items-center gap-2">
            <span role="img" aria-label="dog">
              🐕
            </span>{" "}
            Dog Breeds
          </h3>
          <p className="text-[#B521C0] text-lg">
            From playful Labradors to loyal German Shepherds, every breed brings
            unique joy. Find your perfect match!
          </p>
          <ul className="mt-4 text-[#B521C0] text-base list-disc list-inside space-y-1">
            <li>Labrador Retriever</li>
            <li>Beagle</li>
            <li>Golden Retriever</li>
            <li>Indie (Indian Pariah Dog)</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-[#F4E7E1] to-[#B521C0]/10 rounded-2xl shadow-xl p-8 border-l-8 border-[#B521C0] hover:scale-105 transition-transform duration-300 group">
          <h3 className="text-[#B521C0] font-bold text-2xl mb-3 flex items-center gap-2">
            <span role="img" aria-label="paw">
              🐾
            </span>{" "}
            Why Adopt?
          </h3>
          <p className="text-[#D5451B] text-lg">
            Adoption saves lives and gives dogs a second chance. Shelters are
            full of loving pets waiting for a home.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="bg-[#FF9B45]/20 text-[#B521C0] px-3 py-1 rounded-full text-xs font-semibold">
              Rescue
            </span>
            <span className="bg-[#D5451B]/10 text-[#D5451B] px-3 py-1 rounded-full text-xs font-semibold">
              Love
            </span>
            <span className="bg-[#B521C0]/10 text-[#B521C0] px-3 py-1 rounded-full text-xs font-semibold">
              Family
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#F4E7E1] to-[#D5451B]/10 rounded-2xl shadow-xl p-8 border-l-8 border-[#D5451B] hover:scale-105 transition-transform duration-300 group">
          <h3 className="text-[#FF9B45] font-bold text-2xl mb-3 flex items-center gap-2">
            <span role="img" aria-label="info">
              📚
            </span>{" "}
            About Dog Adoption
          </h3>
          <p className="text-[#B521C0] text-lg">
            Adopting a dog means gaining a loyal companion. Dogs teach us
            kindness, patience, and unconditional love.
          </p>
          <div className="mt-4 text-[#D5451B] text-base italic">
            "Adopt, don’t shop. Give a shelter dog a second chance at life."
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-3xl mx-auto mt-12 px-6">
        <div className="bg-gradient-to-r from-[#B521C0] via-[#FF9B45] to-[#D5451B] text-white px-10 py-8 rounded-3xl font-bold text-2xl shadow-lg text-center border-4 border-[#F4E7E1] animate-fadein">
          "Saving one dog will not change the world, but surely for that one
          dog, the world will change forever."
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto mt-20 px-6 grid md:grid-cols-3 gap-10">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-l-8 border-[#FF9B45] hover:scale-105 transition-transform duration-300">
          <h3 className="text-[#D5451B] font-bold text-2xl mb-3">
            Our Mission
          </h3>
          <p className="text-[#B521C0] text-lg">
            To connect kind humans with wonderful dogs, making the world a
            better place for both.
          </p>
        </div>
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-l-8 border-[#B521C0] hover:scale-105 transition-transform duration-300">
          <h3 className="text-[#B521C0] font-bold text-2xl mb-3">
            How It Works
          </h3>
          <p className="text-[#D5451B] text-lg">
            Browse available dogs, meet your match, and start your adoption
            journey with PawsFurVive!
          </p>
        </div>
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-l-8 border-[#D5451B] hover:scale-105 transition-transform duration-300">
          <h3 className="text-[#FF9B45] font-bold text-2xl mb-3">
            Adoption Benefits
          </h3>
          <ul className="text-[#B521C0] text-lg list-disc list-inside space-y-1">
            <li>Save a life and reduce shelter crowding</li>
            <li>Find a loyal, loving companion</li>
            <li>Support ethical pet ownership</li>
          </ul>
        </div>
      </section>

      {/* Floating Adoption Steps */}
      <section className="max-w-5xl mx-auto mt-24 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex flex-col items-center bg-[#F4E7E1]/80 rounded-2xl shadow-lg p-8 mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
            <span className="bg-[#FF9B45] text-white w-14 h-14 flex items-center justify-center rounded-full text-3xl font-bold mb-4 shadow-lg animate-bounce">
              1
            </span>
            <h4 className="text-[#B521C0] font-bold text-xl mb-2">
              Browse Dogs
            </h4>
            <p className="text-[#D5451B] text-center">
              Explore our gallery of adorable, adoptable dogs.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-[#F4E7E1]/80 rounded-2xl shadow-lg p-8 mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
            <span className="bg-[#B521C0] text-white w-14 h-14 flex items-center justify-center rounded-full text-3xl font-bold mb-4 shadow-lg animate-bounce">
              2
            </span>
            <h4 className="text-[#FF9B45] font-bold text-xl mb-2">
              Meet & Greet
            </h4>
            <p className="text-[#D5451B] text-center">
              Schedule a visit and get to know your future friend.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-[#F4E7E1]/80 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
            <span className="bg-[#D5451B] text-white w-14 h-14 flex items-center justify-center rounded-full text-3xl font-bold mb-4 shadow-lg animate-bounce">
              3
            </span>
            <h4 className="text-[#B521C0] font-bold text-xl mb-2">
              Adopt & Love
            </h4>
            <p className="text-[#D5451B] text-center">
              Complete the process and welcome your new family member!
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts About Dogs */}
      <section className="max-w-5xl mx-auto mt-20 px-6">
        <div className="bg-gradient-to-br from-[#FF9B45]/20 to-[#B521C0]/10 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=300&q=80"
            alt="Happy dog"
            className="rounded-2xl shadow-lg w-40 h-40 object-cover border-4 border-[#F4E7E1] mb-6 md:mb-0"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#B521C0] mb-3">
              Did You Know?
            </h3>
            <ul className="list-disc list-inside text-[#D5451B] text-lg space-y-2">
              <li>
                Dogs have an extraordinary sense of smell—up to 100,000 times
                better than humans!
              </li>
              <li>
                Adopted dogs often show immense gratitude and loyalty to their
                new families.
              </li>
              <li>
                Every year, millions of dogs are looking for loving homes. You
                can make a difference!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Custom keyframes for floating animation and fadein */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0) scale(1);}
            100% { transform: translateY(40px) scale(1.05);}
          }
          @keyframes float2 {
            0% { transform: translateY(0) scale(1);}
            100% { transform: translateY(-30px) scale(1.08);}
          }
          .animate-float1 {
            animation: float1 8s ease-in-out infinite alternate;
          }
          .animate-float2 {
            animation: float2 10s ease-in-out infinite alternate;
          }
          @keyframes fadein {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadein {
            animation: fadein 1.5s ease;
          }
        `}
      </style>
    </main>
  );
}
