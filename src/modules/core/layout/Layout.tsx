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

      <main className="flex flex-col w-full h-full lg:ml-60 lg:max-w-[calc(100vw-16rem)] overflow-y-auto">
        <section className="flex min-h-[100vh] p-20 pr-0">{children}</section>
      </main>
    </>
  );
}
