import Languages from "../Languages";
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
      <div className="hidden md:block w-60">
        <SideMenu />
      </div>
      <div className="md:hidden block w-60">Burger Menu</div>

      <main className="flex flex-col w-full h-full md:ml-60 md:w-[calc(100vw-16rem)] overflow-y-auto">
        <section className="flex min-h-[100vh] p-20">{children}</section>
      </main>
    </>
  );
}
