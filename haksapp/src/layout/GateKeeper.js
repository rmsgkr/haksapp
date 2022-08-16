import { Suspense } from "react";
import { Else, If, Then } from "react-if";
import _ from "lodash";
import { AuthedApp } from "./AuthedApp";
import { UnAuthedApp } from "./UnAuthedApp";

const GateKeeper = () => {
  // const [IsAuthed, setAuthed] = useState(false);
  const IsAuthed = true;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <If condition={IsAuthed}>
        <Then>
          <AuthedApp />
        </Then>
        <Else>
          <UnAuthedApp />
        </Else>
      </If>
    </Suspense>
  );
};

export default GateKeeper;

export { GateKeeper };
