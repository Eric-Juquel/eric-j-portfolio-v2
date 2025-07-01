import Languages from "../Languages";
import SideMenu from "../navigation/SideMenu";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed bg-transparent w-40 h-20 top-4 -right-14 z-3">
        <Languages />
      </div>
      <div className="hidden md:block ">
        <SideMenu />
      </div>
      <div className="md:hidden block w-60">Burger Menu</div>

      <main>{children}</main>
    </>
  );
}
