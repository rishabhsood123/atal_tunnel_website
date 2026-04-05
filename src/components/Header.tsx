import { dashboardData } from '../data/mockData';

export const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#f3faff]/80 dark:bg-[#021f29]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(2,31,41,0.04)] no-border">
            <div className="flex justify-between items-center px-6 h-16 max-w-screen-xl mx-auto">
                <div className="font-headline font-black text-xl tracking-tighter text-[#003629] dark:text-[#baeed9] uppercase">
                    {dashboardData.header.title}
                </div>
                <div className="hidden md:flex gap-8">
                    {dashboardData.header.links.map((link, i) => {
                        const targetId = link === 'Live Status' ? '#status' : `#${link.toLowerCase()}`;
                        return (
                        <a 
                            key={i}
                            className={`font-headline font-bold text-lg tracking-tight hover:text-[#003629] transition-colors ${i === 0 ? 'text-[#003629] dark:text-[#baeed9] border-b-2 border-[#003629]' : 'text-[#021f29]/60 dark:text-[#f3faff]/60 hover:bg-[#e6f6ff]/50'}`} 
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
