import { Suspense } from "react";
import { DynamicRoute } from "./DynamicRoute";
import { UnauthedRoutes } from "./routes";

const UnAuthedApp = ({ onRanderHandle }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicRoute
          routes={UnauthedRoutes}
          onRanderHandle={onRanderHandle}
        ></DynamicRoute>
      </Suspense>
    </>
  );
};

export { UnAuthedApp };
