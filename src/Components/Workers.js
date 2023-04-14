import React from "react";
import Worker from "./Worker";
import { memo } from "react";
export default memo(function Workers({ workers }) {
  return (
    <div>
      {workers.map((worker,index) => (
        <Worker key={index} worker={worker} />
      ))}
    </div>
  );
}
)