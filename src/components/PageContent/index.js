import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
import Menu from "./Main/Menu";

export default function HomePageContent() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      {menu ? <Menu setMenu={setMenu} /> : <Main />}
    </>
  );
}
