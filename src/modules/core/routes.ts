export type AppRoute = {
  label: string;
  href: string;
};

export const APP_ROUTES: Record<string, AppRoute> = {
  home: {
    label: "Accueil",
    href: "/home",
  },
};
