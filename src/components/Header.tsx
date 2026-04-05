import { useState, useEffect } from 'react';
import { dashboardData } from '../data/mockData';

export const Header = () => {
    const [activeTab, setActiveTab] = useState('Live Status');

    useEffect(() => {
        const handleScroll = () => {
            const sections = dashboardData.header.links;
            let current = 'Live Status'; // Default
            for (const link of sections) {
                const targetId = link === 'Live Status' ? 'status' : link.toLowerCase();
                const element = document.getElementById(targetId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section's top is mostly within the viewport 
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
                        current = link;
                    }
                }
            }
            setActiveTab(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial active state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 bg-[#f3faff]/80 dark:bg-[#021f29]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(2,31,41,0.04)] no-border">
            <div className="flex justify-between items-center px-6 h-16 max-w-screen-xl mx-auto">
                <div className="font-headline font-black text-xl tracking-tighter text-[#003629] dark:text-[#baeed9] uppercase">
                    {dashboardData.header.title}
                </div>
                <div className="hidden md:flex gap-8">
                    {dashboardData.header.links.map((link, i) => {
                        const targetId = link === 'Live Status' ? '#status' : `#${link.toLowerCase()}`;
                        const isActive = link === activeTab;
                        return (
                        <a 
                            key={i}
                            className={`font-headline font-bold text-lg tracking-tight transition-colors ${isActive ? 'text-[#003629] dark:text-[#baeed9] border-b-2 border-[#003629]' : 'text-[#021f29]/60 dark:text-[#f3faff]/60 hover:text-[#003629] hover:bg-[#e6f6ff]/50'}`} 
                            href={targetId}
                        >
                            {link}
                        </a>
                    )})}
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-[#e6f6ff]/50 transition-colors text-[#003629]">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-[#e6f6ff]/50 transition-colors text-[#003629]">
                        <span className="material-symbols-outlined">emergency_share</span>
                    </button>
                </div>
            </div>
        </header>
    );
};
