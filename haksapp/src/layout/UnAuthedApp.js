import { Suspense } from "react";
import { DynamicRoute } from "./DynamicRoute";
import { UnauthedRoutes } from "./routes";

const UnAuthedApp = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicRoute routes={UnauthedRoutes}></DynamicRoute>
      </Suspense>
    </>
  );
};

export { UnAuthedApp };
