// const num = require("./enums");
import * as num from "./enums";

export function checkEnum(param: string) {
  if (param === "one") {
    return num.Numbers.One;
  } else if (param === "two") {
    return num.Numbers.One;
  } else if (param === "three") {
    return num.Numbers.One;
  } else if (param === "four") {
    return num.Numbers.One;
  }
};