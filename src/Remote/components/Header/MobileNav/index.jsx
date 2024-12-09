import { useState } from "react";

import { NavOpened } from "./NavOpened";
import { Nav } from "./Nav";

export const MobileNav = () => {
  const [opened, setOpened] = useState(false);

  const open = () => setOpened(true);

  const close = () => setOpened(false);

  return (
    <>
      <Nav hidden={opened} toggle={open}></Nav>
      <NavOpened hidden={!opened} toggle={close}></NavOpened>
    </>
  );
};
