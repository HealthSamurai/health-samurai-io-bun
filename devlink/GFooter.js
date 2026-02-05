"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GFooter.module.css";

export function GFooter({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-section")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "hs-logo-footer")}
        width="auto"
        height="auto"
        loading="auto"
        alt="Health Samurai Company Logo"
        src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a3041c4d877230001fc7454_hslogo-footer.svg"
      />
    </_Component>
  );
}
