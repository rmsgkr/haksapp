import { Suspense } from "react";
import { DynamicRoute } from "./DynamicRoute";
import { AuthedRoutes } from "./routes";

const AuthedApp = ({ onRanderHandle }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicRoute
          routes={AuthedRoutes}
          onRanderHandle={onRanderHandle}
        ></DynamicRoute>
      </Suspense>
    </>
  );
};

export { AuthedApp };
