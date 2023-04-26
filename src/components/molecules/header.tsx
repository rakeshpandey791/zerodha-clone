import React from "react";

import { HEADER_MENU_ITEMS, ROUTE_NAME } from "../../constants/global";
import { LOGO } from "../../constants/assets";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteNavigation = (route: string) => {
    navigate(route);
  };

  const addActiveClass = (route: string, children: any) => {
    if (children?.length > 0) {
      return location.pathname.includes(route);
    }

    return location.pathname === `/${route}`;
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 flex text-sm font-semibold border-b-2">
        <div className="w-2/6 mr-2">
          <img
            src={LOGO}
            alt={"Logo"}
            className="w-8"
            onClick={() => handleRouteNavigation(ROUTE_NAME.DASHBOARD)}
          />
        </div>
        <div className="w-4/6 flex">
          {HEADER_MENU_ITEMS.map((route, index) => (
            <div
              key={route.route}
              onClick={() => handleRouteNavigation(route.route)}
              className={`mr-6 cursor-pointer text-sm font-light ${
                addActiveClass(route.route, route.children) && "text-red-600"
              } `}
            >
              {route?.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
