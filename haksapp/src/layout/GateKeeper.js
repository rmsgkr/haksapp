import { Suspense, useEffect, useState } from "react";
import { Else, If, Then } from "react-if";
import _ from "lodash";
import { AuthedApp } from "./AuthedApp";
import { UnAuthedApp } from "./UnAuthedApp";

const GateKeeper = () => {
  // const [IsAuthed, setAuthed] = useState(false);
  const IsAuthed = true;
  const [randerHandle, setRanderHandle] = useState(false);

  const onRanderHandle = () => {
    setRanderHandle((prev) => {
      return !prev;
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <If condition={IsAuthed}>
        <Then>
          <AuthedApp onRanderHandle={onRanderHandle} />
        </Then>
        <Else>
          <UnAuthedApp onRanderHandle={onRanderHandle} />
        </Else>
      </If>
    </Suspense>
  );
};

export default GateKeeper;

export { GateKeeper };
