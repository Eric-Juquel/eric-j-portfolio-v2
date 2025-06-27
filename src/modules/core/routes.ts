export type AppRoute = {
  label: string;
  href: string;
};

export const APP_ROUTES: Record<string, AppRoute> = {
  home: {
    label: "Accueil",
    href: "/home",
  },
  skills: {
    label: "Compétences",
    href: "/skills",
  },
  achievements: {
    label: "Réalisations",
    href: "/achievements",
  },
  contact: {
    label: "Contact",
    href: "/contact",
  },
};
