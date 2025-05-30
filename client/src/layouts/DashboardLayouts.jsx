import { Link, Outlet, useLocation } from 'react-router';

const PATHS = [
    { path: '/cms/form', text: 'Adoption Form' },
    { path: '/cms/guideline', text: 'Guidelines' },
    { path: '/cms/petprofile', text: 'Pet Profile' }
];

export default function Dashboard() {
    const location = useLocation();

    return (
        <>
        <div className="flex min-h-screen bg-[#F4E7E1]">
            <aside className="p-8 w-60 sticky top-0 h-screen bg-gradient-to-b from-[#B521C0] to-[#D5451B] flex flex-col items-center shadow-2xl">
                <span className="text-3xl font-extrabold mb-8 text-white tracking-wide">
                    Dashboard
                </span>
                <nav className="flex flex-col gap-0.5 w-full">
                    {PATHS.map((value, index) => (
                        <Link
                            key={index}
                            to={value.path}
                            style={location.pathname === value.path ? STYLE.active : STYLE.inactive}
                            className={`block px-4 py-2 rounded-lg font-medium transition 
                                ${
                                    location.pathname === value.path
                                        ? 'bg-[#FF9B45] shadow text-white'
                                        : 'hover:bg-[#FF9B45] hover:text-white text-white'
                                }`}
                        >
                            {value.text.charAt(0).toUpperCase() + value.text.slice(1)}
                        </Link>
                    ))}
                </nav>
            </aside>
            <main className="bg-[#F4E7E1] flex-1 min-h-screen overflow-auto p-10">
                <div className="text-center mb-15 mt-5">
                    <h1 className="text-2xl font-bold mb-2 text-[#B521C0]">Welcome🐕❤️</h1>
                    <p className="text-[#D5451B]">
                        <strong>Here you can manage adoption forms, view guidelines, and update pet profiles!!!!</strong>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-110 transition duration-300 border-2 border-[#FF9B45]">
                        <span className="text-lg font-semibold mb-2 text-[#D5451B]"><strong>Form ✍</strong></span>
                        <span className="text-gray-800 text-center"><strong>Fill the form and adopt your new friend!!!</strong></span>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-110 transition duration-300 border-2 border-[#FF9B45]">
                        <span className="text-lg font-semibold mb-2 text-[#D5451B]"><strong>Guidelines 📝</strong></span>
                        <span className="text-gray-800 text-center"><strong>Analyze and understand the guidelines provided..</strong></span>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-110 transition duration-300 border-2 border-[#FF9B45]">
                        <span className="text-lg font-semibold mb-2 text-[#D5451B]"><strong>Pet Profile 🐶</strong></span>
                        <span className="text-gray-800 text-center"><strong>Explore the pets you want to adopt</strong></span>
                    </div>
                </div>

                {/* 🐾 Roles of Dogs in Human Life Section */}
                <section className="bg-white p-6 rounded-xl shadow border-2 border-[#FF9B45]">
                    <h2 className="text-xl font-bold text-[#B521C0] mb-4">🐾 The Roles of Dogs in Human Life</h2>
                    <p className="text-gray-700 mb-2">
                        Dogs have been loyal companions to humans for thousands of years, playing many important roles in our lives:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Companionship:</strong> Dogs provide unconditional love and friendship, reducing loneliness and improving mental well-being.</li>
                        <li><strong>Protection:</strong> Many dogs serve as guard animals, alerting their owners to danger and providing a sense of security.</li>
                        <li><strong>Assistance:</strong> Service dogs help people with disabilities, including guiding the visually impaired, alerting the deaf, and supporting those with medical conditions.</li>
                        <li><strong>Therapy:</strong> Therapy dogs visit hospitals and nursing homes to comfort and cheer patients, aiding in emotional healing.</li>
                        <li><strong>Work Partners:</strong> Dogs assist in search and rescue, police work, and herding livestock, showing incredible intelligence and dedication.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-[#D5451B] mb-2"><strong>Benefits of Adopting a Dog</strong></h3>
                    <p className="text-gray-700 mb-2">
                        Choosing to adopt a dog brings many rewards, both for you and the animal:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>You provide a loving home to a dog in need, often saving it from shelter euthanasia or homelessness.</li>
                        <li>Adoption supports animal shelters and rescues, helping reduce pet overpopulation.</li>
                        <li>Adopted dogs often show immense gratitude and loyalty, forming strong bonds with their new families.</li>
                        <li>Adopting is usually more affordable than buying from breeders and helps discourage puppy mills.</li>
                        <li>You gain a lifelong friend who brings joy, health benefits, and companionship into your life.</li>
                    </ul>
                    <p className="text-[#D5451B] font-semibold">
                        Ready to welcome a dog into your life? Explore our pet profiles and start your adoption journey today!
                    </p>
                </section>

                <Outlet />
            </main>
        </div>
        </>
    );
}

const STYLE = {
    active: {
        color: 'white',
    },
    inactive: {
        color: 'white',
    },
};