import { dashboardData } from '../data/mockData';
import { useDashboardData } from '../hooks/useDashboardData';

export const HeroSection = () => {
    const { hero } = dashboardData;
    const { tunnelStatus, traffic, loading } = useDashboardData();
    return (
        <section id="status" className="relative min-h-[870px] flex items-center px-6 md:px-12 py-12 bg-alpine-hero overflow-hidden mt-16">
            <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-fixed"></span>
                        </span>
                        <span className="text-xs font-bold tracking-widest uppercase">{hero.statusBadge}</span>
                    </div>
                    
                    <h1 className="font-headline text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                        {hero.titlePrimary} <br /> <span className="text-primary-fixed">{hero.titleSecondary}</span>
                    </h1>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        {/* <!-- STATUS BADGE --> */}
                        <div className={`text-white px-10 py-6 rounded-xl flex flex-col justify-center items-start shadow-2xl ${tunnelStatus?.status === 'OPEN' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-error-container text-on-error-container'}`}>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-70">Current Status</span>
                            <span className="font-headline text-5xl font-black">{loading ? '...' : (tunnelStatus?.status || hero.currentStatus)}</span>
                        </div>
                        <div className="glass-card text-white px-8 py-6 rounded-xl border border-white/10 flex flex-col justify-center min-w-[180px]">
                            <span className="text-sm font-bold uppercase tracking-widest opacity-70">Traffic</span>
                            <span className="font-headline text-3xl font-bold">{loading ? '...' : (traffic?.condition || hero.traffic)}</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 text-white">
                        <span className="material-symbols-outlined text-secondary-fixed mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60">Wait Time</p>
                        <p className="font-headline text-2xl font-bold">{loading ? '...' : (`~${traffic?.estimatedWaitMins || ''} MINS`)}</p>
                    </div>
                    
                    <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 text-white">
                        <span className="material-symbols-outlined text-secondary-fixed mb-2">history</span>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60">Updated</p>
                        <p className="font-headline text-sm font-bold">{tunnelStatus?.updated_at ? new Date(tunnelStatus.updated_at).toLocaleTimeString() : hero.updated}</p>
                    </div>

                    <div className="col-span-2 bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl text-white shadow-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Tunnel Advisory</p>
                                <p className="font-headline text-xl font-medium leading-tight">{loading ? 'Analyzing...' : (tunnelStatus?.reason || hero.restrictionDesc)}</p>
                            </div>
                            <span className="material-symbols-outlined text-4xl opacity-50">minor_crash</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
