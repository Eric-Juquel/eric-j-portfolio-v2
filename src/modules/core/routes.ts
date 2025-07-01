export type AppRoute = {
  label: string;
  href: string;
};

export const APP_ROUTES: Record<string, AppRoute> = {
  home: {
    label: "home",
    href: "/home",
  },
  skills: {
    label: "skills",
    href: "/skills",
  },
  achievements: {
    label: "achievements",
    href: "/achievements",
  },
  contact: {
    label: "contact",
    href: "/contact",
  },
};
