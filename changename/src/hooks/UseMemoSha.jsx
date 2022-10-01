import React from "react";
import { useMemo } from "react";
let complexFunction = function (arg1, arg2) {
  return arg1 + arg2; // just for example (any logic can be here)
};
const cache = (complexFunction) => {
  return useMemo(complexFunction, []);
};
let cachedFunction = cache(complexFunction);
const UseMemoSha = () => {
  return <div></div>;
};

export default UseMemoSha;
