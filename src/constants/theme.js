import { Sun, MoonStar, MonitorCog } from 'lucide-react';

export const THEME_CONFIG = {
    light: {
        label: 'Light mode',
        Icon: Sun,
        base: "rounded-full p-1 text-gray-950 fill-orange-700/60 hover:fill-orange-950 dark:hover:fill-white dark:text-yellow-200",
        active: "bg-orange-100 shadow-md",
        inactive: "ring-gray-950/10",
    },
    system: {
        label: 'System mode',
        Icon: MonitorCog,
        base: "rounded-full p-1 text-gray-500 fill-gray-400/60 hover:fill-gray-950 dark:text-white/30",
        active: "bg-gray-700/60 shadow-md",
        inactive: "",
    },
    dark: {
        label: 'Dark mode',
        Icon: MoonStar,
        base: "rounded-full p-1 text-blue-950 fill-slate-800/60 hover:fill-stone-400 dark:text-blue-100/50 dark:fill-slate-400 dark:hover:fill-gray-800",
        active: "bg-gray-700/60 shadow-md",
        inactive: "",
    }
}
