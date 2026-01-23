
import React from "react";

const navBarItems = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact", href: "#contact" },
];

export default function Navbar(){

    return(
        <nav className="w-full flex items-end justify-between py-8 px-16 bg-white dark:bg-black">
        <h1 className="text-2xl font-bold text-black dark:text-white">ANGELO PRINCIPIO / <span className="text-blue-500">Portfolio</span></h1>
        <ul className="flex space-x-8">
            {navBarItems.map((item) => (
                <li key={item.id}>
                    <a href={item.href} className="text-black dark:text-white hover:underline">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    )
}