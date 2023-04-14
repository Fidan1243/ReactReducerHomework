import React from "react";
import { memo } from "react";

export default memo(function WorkerForm({
  name,
  salary,
  department,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
  <div style={{display:"flex",margin:"auto",textAlign:"center"}} class="form-row align-items-center">
    <div class="col col-sm-2 m-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" name="worker" value={name} onChange={onChange} class="form-control" id="inlineFormInputName" placeholder="Jane Doe"/>
    </div>
    <div class="col col-sm-2 m-1">
      <label class="sr-only" for="inlineFormInputName">Salary</label>
      <input type="number" name="salary" value={salary} onChange={onChange} class="form-control" id="inlineFormInputName" placeholder="1000"/>
    </div>
    
    <div class="col col-sm-2 m-1">
      <label class="sr-only" for="inlineFormInputName">Department</label>
      <input type="text" name="department" value={department} onChange={onChange} class="form-control" id="inlineFormInputName" placeholder="Developer"/>
    </div>
    <div class="col-auto m-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
  );
});
