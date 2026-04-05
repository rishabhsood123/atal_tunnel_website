import { dashboardData } from '../data/mockData';

export const TravelGuide = () => {
    const { guide } = dashboardData;

    return (
        <section id="guide" className="py-24 overflow-hidden scroll-mt-24">
            <div className="max-w-screen-xl mx-auto px-6 mb-12">
                <h2 className="font-headline text-4xl font-bold">{guide.title}</h2>
            </div>
            <div className="flex gap-6 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory max-w-screen-xl mx-auto pb-4">
                {guide.items.map((item, idx) => (
                    <div key={idx} className={`snap-start shrink-0 w-80 p-8 rounded-3xl space-y-6 ${item.bgClass}`}>
                        <span className={`material-symbols-outlined text-5xl ${item.iconColorClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                            {item.icon}
                        </span>
                        <h3 className="font-headline text-2xl font-bold">{item.value}</h3>
                        <p className={item.textColorClass}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
