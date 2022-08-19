const AuthedRoutes = [
  {
    url: "/",
    page: () => import("../page/main/MainPage"),
  },
  {
    url: "/schedule",
    page: () => import("../page/schedule/ListPage"),
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
