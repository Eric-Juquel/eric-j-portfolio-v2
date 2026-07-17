import clsx from "clsx";
import Languages from "../Languages";
import Burger from "../navigation/Burger";
import SideMenu from "../navigation/SideMenu";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed bg-transparent w-40 h-10 top-4 -right-14 z-3">
        <Languages />
      </div>
      <div data-testid="desktop-navigation" className="hidden lg:block w-60">
        <SideMenu />
      </div>
      <div
        data-testid="mobile-navigation"
        className="lg:hidden block cursor-pointer"
      >
        <Burger />
      </div>

      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 lg:left-60 h-32 z-2 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-body-from), transparent)",
        }}
      />

      <main
        className={clsx(
          "flex flex-col w-full h-full overflow-y-auto",
          "lg:ml-60 lg:max-w-[calc(100vw-16rem)]",
        )}
      >
        <section
          className={clsx(
            "flex min-h-screen pt-0",
            "px-4 pb-4 sm:px-8 sm:pb-8 md:px-12 md:pb-12 lg:px-20 lg:pb-20",
          )}
        >
          {children}
        </section>
      </main>
    </>
  );
}
