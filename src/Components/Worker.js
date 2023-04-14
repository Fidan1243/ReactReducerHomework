import React, { useState } from "react";
import { memo } from "react";

export default memo(function Worker({ worker }) {
    const [isVisible,setVisibility] = useState(false);
  return (
    <div className="col-md-8 mx-auto mb-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h3 className="d-inline" onClick={()=>setVisibility(!isVisible)}>
            {worker.name}
          </h3>
        </div>
        {isVisible ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Salary: {worker.salary}</li>
            <li className="list-group-item">Department: {worker.department}</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
)