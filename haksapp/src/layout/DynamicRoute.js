import _ from "lodash";
import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// TODO
// warning 해결하기
// router.ts:11 No routes matched location "/"
const DynamicRoute = ({ routes, onRanderHandle }) => {
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
          _aimRoutes.push(
            <Route
              key={key}
              path={linkUrl}
              element={
                <SubPageComponent
                  {...linkProps}
                  onRanderHandle={onRanderHandle}
                />
              }
            />
          );
          //   if (linkUrl === "/") {
          //     _aimRoutes.push(
          //       <Route
          //         index
          //         key={key}
          //         element={
          //           <SubPageComponent
          //             {...linkProps}
          //             onRanderHandle={onRanderHandle}
          //           />
          //         }
          //       />
          //     );
          //   } else {
          //     _aimRoutes.push(
          //       <Route
          //         key={key}
          //         path={linkUrl}
          //         element={
          //           <SubPageComponent
          //             {...linkProps}
          //             onRanderHandle={onRanderHandle}
          //           />
          //         }
          //       />
          //     );
          //   }
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

    console.log("_routes", _routes);
  }, [onRanderHandle, routes]);
  //   const aimRoute = (
  //     <>
  //       <Route
  //         path={"/"}
  //         element={
  //           <ListPage />
  //         }
  //       />
  //       <Route
  //         path={"/test"}
  //         element={
  //           <ListPage />
  //         }
  //       />
  //     </>
  //   );
  return <Routes>{aimRoute}</Routes>;
};

export { DynamicRoute };
