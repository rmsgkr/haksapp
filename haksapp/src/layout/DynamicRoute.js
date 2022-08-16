import _ from "lodash";
import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// TODO
// warning 해결하기
// router.ts:11 No routes matched location "/"
const DynamicRoute = ({ routes }) => {
  const [aimRoute, setAimRoute] = useState([]);

  useEffect(() => {
    const _routes = _.reduce(
      routes,
      (_aimRoutes, elem, index) => {
        if (_.isUndefined(elem)) {
          return;
        }
        const { url, page, props } = elem;
        const dynamicRoute = (linkUrl, linkPage, linkProps, key) => {
          const SubPageComponent = lazy(linkPage);
          if (linkUrl === "/") {
            _aimRoutes.push(
              <Route
                index
                key={key}
                element={<SubPageComponent {...linkProps} />}
              />
            );
          } else {
            _aimRoutes.push(
              <Route
                key={key}
                path={linkUrl}
                element={<SubPageComponent {...linkProps} />}
              />
            );
          }
        };
        if (_.isArray(url)) {
          _.map(url, (elem, index) => {
            dynamicRoute(elem, page, props, index);
          });
        } else {
          dynamicRoute(url, page, props, "uni");
        }
        return _aimRoutes;
      },
      []
    );
    setAimRoute(_routes);
  }, [routes]);

  // const Page1 = lazy(() => import("../page/main/ListPage"));
  // const Page2 = lazy(() => import("../page/unauthed/RedirectPage"));
  // const aimRoute = (
  //   <>
  //     <Route path={"/"} element={<Page1 />} />
  //     <Route path={"/test"} element={<Page2 />} />
  //   </>
  // );
  return <Routes>{aimRoute}</Routes>;
};

export { DynamicRoute };
