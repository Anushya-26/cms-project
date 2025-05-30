import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4E7E1] text-[#521C0D]">
            <div className="flex flex-col items-center bg-white/70 px-12 py-10 rounded-2xl shadow-lg">
                <h1 className="text-8xl font-extrabold text-[#D5451B] drop-shadow-lg">404</h1>
                <h2 className="text-2xl font-semibold my-4 text-[#521C0D]">Page Not Found</h2>
                <p className="mb-8 text-[#D5451B] text-center">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-[#FF9B45] text-white rounded-md font-semibold shadow-md hover:bg-[#D5451B] transition-colors duration-200"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
