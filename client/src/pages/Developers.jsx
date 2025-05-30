import Header from "./Header"

function Developers() {
   const developers=[
    {
    name: 'Anushya',
    dept: 'AI-DS',
    rollNo: '22BTAD006',
    linkedin: 'https://linkedin.com/in/anushya-rajamani-41a55b254',
    github: 'https://github.com/anushya-26'
    },
    {
    name: 'Sridhisha',
    dept: 'CSE',
    rollNo: '22BECSE103',
    linkedin: 'https://linkedin.com/in/dhisha-mkt-a44454255',
    github: 'https://github.com/Dhishamkt'
    },
    {
    name: 'Sruthi',
    dept: 'CSE',
    rollNo: '22BECSE107',
    linkedin: 'https://linkedin.com/in/sruthi-s-70a35b255',
    github: 'https://github.com/Sruthi-1301'
    }
    ];
    return (
        <div className="p-8 bg-[#f4e7e1] min-h-screen">
            <Header/>
            <h2 className="text-4xl font-extrabold mb-25 mt-10 text-center text-orange-600 drop-shadow-lg">
                Developers 🐶
            </h2>

            <div
        className="absolute top-20 left-16 opacity-20 z-20 pointer-events-none text-[60px]"
      >🐾</div>
      <div
        className="absolute bottom-20 right-20 opacity-15 z-20 pointer-events-none text-[80px]"
      >🐾</div>

            <div className="flex flex-wrap gap-8 justify-center">
                {developers.map((dev, index) => (
                    <div
                        className="bg-[#f5d7ca] bg-opacity-95 shadow-xl rounded-2xl p-8 w-70 h-70 flex flex-col items-center border-4 border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        key={index}
                        style={{
                            boxShadow: "0 8px 32px 0 rgba(255, 200, 100, 0.18)"
                        }}
                    >
                        <h3 className="text-xl font-bold mb-3 text-[#b521c0] text-center">
                            Developer {index + 1}
                        </h3>
                        <p className="mb-1 text-center">
                            <span className="font-semibold text-orange-400">Name:</span>{' '}
                            <span className="text-[#b521c0] font-semibold">{dev.name}</span>
                        </p>
                        <p className="mb-1 text-center">
                            <span className="font-semibold text-orange-400">Department:</span>{' '}
                            <span className="text-[#b521c0] font-semibold">{dev.dept}</span>
                        </p>
                        <p className="mb-1 text-center">
                            <span className="font-semibold text-orange-400">Roll No:</span>{' '}
                            <span className="text-[#b521c0] font-semibold">{dev.rollNo}</span>
                        </p>
                        <p className="mb-1 text-center">
                            <span className="font-semibold text-orange-400">LinkedIn:</span>{' '}
                            <a
                                href={dev.linkedin}
                                target="_blank"
                                className="text-[#b521c0] font-medium hover:underline hover:text-blue-800 transition-colors"
                            >
                                linkedin-profile
                            </a>
                        </p>
                        <p className="text-center">
                            <span className="font-semibold text-orange-400">GitHub:</span>{' '}
                            <a
                                href={dev.github}
                                target="_blank"
                                className="text-[#b521c0] font-medium hover:underline hover:text-blue-800 transition-colors"
                            >
                                github-profile
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Developers;