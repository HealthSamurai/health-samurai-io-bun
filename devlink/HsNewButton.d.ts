import * as React from "react";
import * as Types from "./types";

declare function HsNewButton(props: {
  as?: React.ElementType;
  txtButton?: React.ReactNode;
  variant?:
    | "Base"
    | "Base caps"
    | "outline"
    | "outline caps"
    | "white"
    | "outline white"
    | "mini btn"
    | "btn-text-link"
    | "mini btn white"
    | "mini btn white outline"
    | "mini btn outline white"
    | "no border btn"
    | "mini-btn-t"
    | "mini-btn-t outline";
  hsNewButtonLink?: Types.Basic.Link;
  fsModalElement?: Types.Builtin.Text;
}): React.JSX.Element;
