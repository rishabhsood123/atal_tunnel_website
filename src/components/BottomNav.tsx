import { useState, useEffect } from 'react';
import { dashboardData } from '../data/mockData';

export const BottomNav = () => {
    const [activeTab, setActiveTab] = useState('Status');

    useEffect(() => {
        const handleScroll = () => {
            const sections = dashboardData.bottomNav.map(item => item.label);
            let current = 'Status'; // Default
            for (const label of sections) {
                const element = document.getElementById(label.toLowerCase());
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section's top is mostly within the viewport 
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
                        current = label;
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
        <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-[#f3faff]/90 dark:bg-[#021f29]/90 backdrop-blur-2xl no-border bg-gradient-to-t from-[#f3faff] to-transparent shadow-[0_-8px_40px_rgba(2,31,41,0.06)]">
            <div className="flex justify-around items-center h-20 px-4 w-full pt-1">
                {dashboardData.bottomNav.map((item, idx) => {
                    const targetId = item.label === 'Status' ? '#status' : `#${item.label.toLowerCase()}`;
                    if (item.label === activeTab) {
                        return (
                            <a key={idx} className="flex flex-col items-center justify-center bg-[#baeed9] dark:bg-[#1b4d3e] text-[#002117] dark:text-[#baeed9] rounded-2xl px-5 py-2 scale-105 transition-transform" href={targetId}>
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">{item.label}</span>
                            </a>
                        );
                    }
                    return (
                        <a key={idx} className="flex flex-col items-center justify-center text-[#021f29]/50 dark:text-[#f3faff]/50 px-5 py-2 hover:text-[#003629] transition-all" href={targetId}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">{item.label}</span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};
