"use client";

import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function Header() {
    return (
        <header className="flex items-center justify-between px-4 md:px-20 py-6 border-b border-neutral-800 bg-black text-white">
            {/* Logo + Name */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full">
                    KS
                </div>
                <div>
                    <h1 className="text-lg font-semibold">Kalash Sharma</h1>
                    <p className="text-sm text-neutral-400">Full Stack Developer</p>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
                <Link href="https://www.linkedin.com/in/kalash-sharma/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
                </Link>
                <Link href="https://x.com/kaiser_kalash"><Twitter className="w-5 h-5 hover:text-yellow-400 transition" /></Link>
                <Link href="mailto:kalashsharma.r@email.com">
                    <Mail className="w-5 h-5 hover:text-red-400 transition" />
                </Link>
            </div>
        </header>
    );
}
