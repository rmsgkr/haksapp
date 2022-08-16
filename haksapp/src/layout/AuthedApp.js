import { Suspense } from "react";
import { DynamicRoute } from "./DynamicRoute";
import { AuthedRoutes } from "./routes";

const AuthedApp = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicRoute routes={AuthedRoutes}></DynamicRoute>
      </Suspense>
    </>
  );
};

export { AuthedApp };
