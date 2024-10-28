import { NavLink } from "react-router-dom"; // Pastikan ini diimpor

const Navbar = () => {
  const menus = [
    {
      title: "Articles",
      items: [
        { name: "All Posts", path: "/" },
        { name: "Add New", path: "/new" },
        { name: "Preview", path: "/preview" },
      ],
    },
  ];

  return (
    <div className="navbar">
      <div className="navLogo padding12lr">
        <div className="logoTitle mb-20">KENAPARTICLE</div>
      </div>
      <div className="navMenus">
        {menus.map((menu, index) => (
          <div className="navMenu" key={index}>
            {" "}
            {/* Tambahkan key di sini */}
            <div className="menuTitle">{menu.title}</div>
            {menu.items.map((item, itemIndex) => (
              <div className="menuItems" key={itemIndex}>
                {" "}
                {/* Tambahkan key di sini */}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "menuItem active" : "menuItem"
                  }
                >
                  <span className="itemSpan"></span>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
