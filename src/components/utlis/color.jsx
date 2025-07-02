// Universal color scheme that works for both dark and light themes
export const colors = {
  // Primary colors (work on both themes)
  primary: {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    purple: 'text-purple-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
    indigo: 'text-indigo-600',
    teal: 'text-teal-600',
  },

  // Background colors
  bg: {
    primary: {
      dark: 'bg-slate-800',
      light: 'bg-slate-100',
    },
    secondary: {
      dark: 'bg-slate-700',
      light: 'bg-slate-200',
    },
    accent: {
      dark: 'bg-blue-900/20',
      light: 'bg-blue-100/50',
    }
  },

  // Text colors
  text: {
    primary: {
      dark: 'text-white',
      light: 'text-slate-900',
    },
    secondary: {
      dark: 'text-slate-300',
      light: 'text-slate-700',
    },
    muted: {
      dark: 'text-slate-400',
      light: 'text-slate-600',
    }
  },

  // Border colors
  border: {
    primary: {
      dark: 'border-slate-600',
      light: 'border-slate-300',
    },
    accent: 'border-blue-500',
  }
};
// Helper function to get theme-specific color
export const getThemeColor = (colorPath, isDark) => {
  const pathArray = colorPath.split('.');
  let color = colors;

  for (const path of pathArray) {
    color = color[path];
  }

  if (typeof color === 'object' && color.dark && color.light) {
    return isDark ? color.dark : color.light;
  }

  return color;
}; 