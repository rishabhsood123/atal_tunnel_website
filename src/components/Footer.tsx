import { dashboardData } from '../data/mockData';

export const Footer = () => {
    const { footer } = dashboardData;

    return (
        <footer className="bg-inverse-surface text-white py-12 px-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
                    <div className="space-y-4">
                        <div className="font-headline font-black text-2xl tracking-tighter uppercase">{footer.title}</div>
                        <p className="opacity-60 text-sm max-w-xs">{footer.desc}</p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-50">Critical Helplines</p>
                        <div className="space-y-4">
                            {footer.helplines.map((helpline, idx) => (
                                <a key={idx} className="flex items-center gap-3 group" href={`tel:${helpline.number}`}>
                                    <span className={`${helpline.colorClass} w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <span className="material-symbols-outlined text-sm">{helpline.icon}</span>
                                    </span>
                                    <div>
                                        <p className="text-sm opacity-60">{helpline.title}</p>
                                        <p className="font-bold text-xl">{helpline.number}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-50">Control Rooms</p>
                        <div className="space-y-2 text-sm">
                            {footer.controlRooms.map((room, idx) => (
                                <p key={idx} className="flex justify-between">
                                    <span>{room.label}</span>
                                    <span className="font-bold">{room.number}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-40">
                    <p>{footer.copyright}</p>
                    <div className="flex flex-wrap gap-8 justify-center border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                        {footer.links.map((link, idx) => (
                            <a key={idx} href="#">{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
