import React from "react";

export default function Reducer(state, action) {
  switch (action.type) {
    case "SetUserName":
      return {
        ...state,
        worker: { ...state.worker, name: action.value },
      };
    case "SetUserSalary":
      return {
        ...state,
        worker: { ...state.worker, salary: action.value },
      };
    case "SetUserDepartment":
      return {
        ...state,
        worker: { ...state.worker, department: action.value },
      };
    case "AddWorker":
      return {
        ...state,
        workers: [...state.workers, action.value],
      };
    default:
      return state;
  }
}
