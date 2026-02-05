"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HsNewButton.module.css";

export function HsNewButton({
  as: _Component = _Builtin.Link,
  txtButton = "Register for free",
  variant = "Base",

  hsNewButtonLink = {
    href: "#",
  },

  fsModalElement = "open",
}) {
  const _styleVariantMap = {
    Base: "",
    "Base caps": "w-variant-07884a67-0f36-1e02-4294-7e271de90c97",
    outline: "w-variant-d0f1e7ed-0478-cfda-32db-847cd65ddb10",
    "outline caps": "w-variant-7d72785b-b74d-c440-3134-be8462d29c19",
    white: "w-variant-8d98aa3d-1f4e-2692-363d-192e5ec1c13d",
    "outline white": "w-variant-c3704199-c251-54cd-c9a1-1836acfb46af",
    "mini btn": "w-variant-32142f9f-334f-956b-6b62-6e6c2be92de9",
    "btn-text-link": "w-variant-58c0365c-584c-c1d6-e30e-649c8dc39ef5",
    "mini btn white": "w-variant-40262946-3780-039e-29bd-a54419912ed8",
    "mini btn white outline": "w-variant-6826ebbf-551e-eb7a-8ffd-02956fb7da2e",
    "mini btn outline white": "w-variant-5c8ebc0e-2acd-10a2-eafc-cf9be96ca095",
    "no border btn": "w-variant-b47c2f81-c51f-a4f3-8ab2-f1eb903f7ce3",
    "mini-btn-t": "w-variant-66b91b3c-6f7e-d473-ad63-24a0b343aa6a",
    "mini-btn-t outline": "w-variant-c5819342-eed2-1536-f4a7-4799f41c6def",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "hs-new-button",
        "slider-link",
        _activeStyleVariant
      )}
      button={false}
      block="inline"
      options={hsNewButtonLink}
    >
      <_Builtin.Block tag="div">{txtButton}</_Builtin.Block>
    </_Component>
  );
}
