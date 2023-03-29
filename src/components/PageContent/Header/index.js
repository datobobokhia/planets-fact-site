import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header({ menu, setMenu }) {
  return (
    <>
      <DesktopHeader />
      <MobileHeader menu={menu} setMenu={setMenu} />
    </>
  );
}
