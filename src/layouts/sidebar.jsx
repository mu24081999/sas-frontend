import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../constants";
import intertechLogo from "../assets/intertech-logo2.svg";
import { cn } from "../utils/cn";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
  const { user } = useAuth();

  const filteredNavbarLinks = navbarLinks
    .map((group) => ({
      ...group,
      links: group.links.filter((link) =>
        user ? link.roles.includes(user.role) : false
      ),
    }))
    .filter((group) => group.links.length > 0);

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0"
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={intertechLogo} alt="intertech" className="dark:hidden w-20" />
        <img
          src={intertechLogo}
          alt="intertech"
          className="hidden dark:block"
        />
      </div>
      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
        {filteredNavbarLinks.map((navbarLink) => (
          <nav
            key={navbarLink.title}
            className={cn("sidebar-group", collapsed && "md:items-center")}
          >
            <p
              className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}
            >
              {navbarLink.title}
            </p>
            {navbarLink.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
              >
                <link.icon size={22} className="flex-shrink-0" />
                {!collapsed && (
                  <p className="whitespace-nowrap">{link.label}</p>
                )}
              </NavLink>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};
