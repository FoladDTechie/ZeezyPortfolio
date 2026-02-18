"use client";

export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-12 border-t border-gray-200 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500 font-medium">
                © {new Date().getFullYear()} Azeez. All rights reserved.
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold tracking-wider text-gray-700">
                    SYSTEM STATUS: ONLINE
                </span>
            </div>
        </footer>
    );
}
