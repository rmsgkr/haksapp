const AuthedRoutes = [
  {
    url: "/",
    page: () => import("../page/main/ListPage"),
  },
  {
    url: "*",
    page: () => import("../page/unauthed/RedirectPage"),
  },
];

const UnauthedRoutes = [
  {
    url: "redirect",
    page: () => import("../page/unauthed/RedirectPage"),
  },
];

export { AuthedRoutes, UnauthedRoutes };
