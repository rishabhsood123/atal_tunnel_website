import { dashboardData } from '../data/mockData';
import { useDashboardData } from '../hooks/useDashboardData';

export const WeatherConditions = () => {
    const { weather: mockW } = dashboardData;
    const { weather, loading } = useDashboardData();

    return (
        <section id="weather" className="max-w-screen-xl mx-auto px-6 py-20 scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="space-y-2">
                    <span className="text-secondary font-black uppercase tracking-widest text-sm">{mockW.sectionTitle}</span>
                    <h2 className="font-headline text-4xl font-bold text-on-background">{mockW.sectionHeading}</h2>
                </div>
                {/* Snowfall Alert Banner */}
                {(weather?.southPortal?.snowfall > 0 || weather?.northPortal?.snowfall > 0) ? (
                <div className="bg-error-container text-on-error-container px-6 py-3 rounded-full flex items-center gap-3">
                    <span className="material-symbols-outlined animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
                    <span className="font-bold text-sm uppercase tracking-wide">Live Snowfall Detected</span>
                </div>
                ) : null}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* South Portal */}
                <div className="bg-surface-container-low p-8 rounded-full shadow-sm flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-secondary"></span>
                            <span className="font-bold tracking-widest uppercase text-xs">{mockW.southPortal.name}</span>
                        </div>
                        <h3 className="font-headline text-6xl font-black text-on-background">{loading ? '...' : `${weather?.southPortal?.temperature_2m || mockW.southPortal.temp}°C`}</h3>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-50">Visibility</p>
                                <p className="font-bold">{loading ? '...' : `${weather?.southPortal?.visibility || mockW.southPortal.visibility} M`}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-50">Wind Speed</p>
                                <p className="font-bold">{loading ? '...' : `${weather?.southPortal?.wind_speed_10m || mockW.southPortal.windSpeed} Kmph`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner">
                        <span className="material-symbols-outlined text-6xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{mockW.southPortal.icon}</span>
                    </div>
                </div>

                {/* North Portal */}
                <div className="bg-surface-container-highest p-8 rounded-full shadow-sm flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            <span className="font-bold tracking-widest uppercase text-xs">{mockW.northPortal.name}</span>
                        </div>
                        <h3 className="font-headline text-6xl font-black text-on-background">{loading ? '...' : `${weather?.northPortal?.temperature_2m || mockW.northPortal.temp}°C`}</h3>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-50">Snow Accumulation</p>
                                <p className="font-bold">{loading ? '...' : `${weather?.northPortal?.snowfall || mockW.northPortal.snow} CM`}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-50">Visibility</p>
                                <p className="font-bold text-error">{loading ? '...' : `${weather?.northPortal?.visibility || mockW.northPortal.visibility} M`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner">
                        <span className="material-symbols-outlined text-6xl text-tertiary-container">{mockW.northPortal.icon}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
