import SideMenu from "../navigation/SideMenu";

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block ">
        <SideMenu />
      </div>
      <div className="md:hidden block w-60">Burger Menu</div>

      <main>{children}</main>
    </>
  );
}
