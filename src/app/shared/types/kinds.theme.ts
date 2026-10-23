export type Kinds = 'default'
  | 'mint'
  | 'sky'
  | 'ember'
  | 'ocean'
  | 'ink'
  | 'amber';

export const Themes: Record<Kinds, string> = {
  default: 'bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
  mint: 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700',
  sky: 'bg-sky-400 text-sky-950 border-sky-500 hover:bg-sky-500',
  ember: 'bg-red-600 text-white border-red-700 hover:bg-red-700',
  ocean: 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700',
  ink: 'bg-gray-950 dark:bg-white text-white dark:text-black border-gray-950 dark:border-white hover:bg-gray-800 dark:hover:bg-white/80',
  amber: 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
};

export const SoftThemes: Record<Kinds, string> = {
  default: 'bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700',
  mint: 'bg-emerald-50 dark:bg-emerald-950/40 text-black dark:text-white border-emerald-300 dark:border-emerald-800',
  sky: 'bg-sky-50 dark:bg-sky-950/40 text-black dark:text-white border-sky-300 dark:border-sky-800',
  ember: 'bg-red-50 dark:bg-red-950/40 text-black dark:text-white border-red-300 dark:border-red-800',
  ocean: 'bg-blue-50 dark:bg-blue-950/40 text-black dark:text-white border-blue-300 dark:border-blue-800',
  ink: 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600',
  amber: 'bg-amber-50 dark:bg-amber-950/40 text-black dark:text-white border-amber-300 dark:border-amber-800',
};
