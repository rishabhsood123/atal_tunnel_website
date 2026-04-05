import { dashboardData } from '../data/mockData';
import { useDashboardData } from '../hooks/useDashboardData';

export const AdvisorySection = () => {
    const { advisory } = dashboardData;
    const { advisories, transitForecast, loading } = useDashboardData();

    return (
        <section id="advisory" className="bg-surface-container-low/50 py-20 px-6 scroll-mt-24">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Best Time To Cross */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-2">
                        <span className="text-primary font-black uppercase tracking-widest text-sm">{advisory.strategicTitle}</span>
                        <h2 className="font-headline text-4xl font-bold text-on-background">{advisory.strategicHeading}</h2>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-primary-fixed/30 rounded-lg border-l-4 border-primary">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            <div>
                                <p className="font-bold text-on-primary-fixed">{transitForecast?.bestTime?.title || advisory.bestTime.title}</p>
                                <p className="text-sm opacity-80">{transitForecast?.bestTime?.time || (!transitForecast && loading ? "Loading..." : advisory.bestTime.time)}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-tertiary-fixed/30 rounded-lg border-l-4 border-tertiary">
                            <span className="material-symbols-outlined text-tertiary">warning</span>
                            <div>
                                <p className="font-bold text-tertiary">{transitForecast?.avoidTime?.title || advisory.avoidTime.title}</p>
                                <p className="text-sm opacity-80">{transitForecast?.avoidTime?.time || (!transitForecast && loading ? "Loading..." : advisory.avoidTime.time)}</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-outline-variant/10">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Daily Schedule</p>
                            <div className="space-y-2">
                                {(transitForecast?.schedule || advisory.schedule).map((item: any, idx: number) => (
                                    <div key={idx} className="flex justify-between text-sm">
                                        <span>{item.label}</span>
                                        <span className="font-bold">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Travel Advisory Board */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-2">
                        <span className="text-tertiary font-black uppercase tracking-widest text-sm">{advisory.noticeTitle}</span>
                        <h2 className="font-headline text-4xl font-bold text-on-background">{advisory.noticeHeading}</h2>
                    </div>
                    <div className="grid gap-4">
                        {loading ? <p>Loading live advisories...</p> : null}
                        {(advisories?.notices || advisory.notices).map((notice: any, idx: number) => (
                            <div key={idx} className="bg-white p-6 rounded-xl flex gap-6 items-start hover:shadow-lg transition-shadow">
                                <div className={`${notice.colorClass} p-3 rounded-lg text-white`}>
                                    <span className="material-symbols-outlined">{notice.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{notice.title}</h4>
                                    <p className="text-on-surface-variant text-sm mt-1">{notice.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
