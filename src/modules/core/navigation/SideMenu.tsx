import Heading from "./Heading";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";

export default function SideMenu() {
  return (
    <aside className="flex flex-col justify-between items-center h-screen fixed top-0 right-auto w-60 z-3 py-8">
      <Heading />
      <Navigation />
      <SocialNetworks />
    </aside>
  );
}
