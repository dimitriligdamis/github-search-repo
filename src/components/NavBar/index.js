import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

export default function Navbar() {
  return (
    <Menu>
      <Menu.Item
        as={NavLink}
        to="/"
      >
        Recherche
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/faq"
      >
        FAQ
      </Menu.Item>
    </Menu>
  );
}
