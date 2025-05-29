import React from 'react'

export default function Header() {
return (
    <header className="flex justify-between items-center p-4 bg-[#ff9b45]">
        <nav>
            <ul className="flex gap-6 list-none m-0 p-0">
                <li><a href="#" className="hover:text-[#521c0d]">Home</a></li>
                <li><a href="#" className="hover:text-[#521c0d]">About</a></li>
                <li><a href="#" className="hover:text-[#521c0d]">Developer</a></li>
            </ul>
        </nav>
        <div>
            <a href="#" className="mr-4 hover:underline">Sign In</a>
            <a href="#" className="hover:underline">Sign Up</a>
        </div>
    </header>
)
}
