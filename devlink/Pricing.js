"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NewNavbar } from "./NewNavbar";
import { HsNewButton } from "./HsNewButton";
import { GPrefooter } from "./GPrefooter";
import { GFooter } from "./GFooter";
import * as _utils from "./utils";
import _styles from "./Pricing.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-545":{"id":"e-545","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-546"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".span-red","originalId":"65fbff8131cf9a313658d5fb|d7b61e9a-b530-eff7-b3ad-4a9373280c90","appliesTo":"CLASS"},"targets":[{"selector":".span-red","originalId":"65fbff8131cf9a313658d5fb|d7b61e9a-b530-eff7-b3ad-4a9373280c90","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1728994825498}},"actionLists":{"a-90":{"id":"a-90","title":"open follow","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__modal","selectorGuids":["ed91e5a3-a313-4d93-bdac-14f1f3878ef2"]},"value":"none"}},{"id":"a-90-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__f","selectorGuids":["b5f0b8f3-6fe8-4efc-8fb9-70ec1d2d1dcf"]},"value":"block"}},{"id":"a-90-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__file-download","selectorGuids":["f0ddf38b-6b75-eabd-2c48-c6344e92d9be"]},"value":"none"}}]},{"actionItems":[{"id":"a-90-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__modal","selectorGuids":["ed91e5a3-a313-4d93-bdac-14f1f3878ef2"]},"value":"flex"}},{"id":"a-90-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":10000,"easing":"","duration":0,"target":{"selector":".follow__file-download","selectorGuids":["f0ddf38b-6b75-eabd-2c48-c6344e92d9be"]},"value":"block"}},{"id":"a-90-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":10000,"easing":"","duration":0,"target":{"selector":".follow__f","selectorGuids":["b5f0b8f3-6fe8-4efc-8fb9-70ec1d2d1dcf"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1728925297766}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Pricing({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <NewNavbar />
      <_Builtin.Section
        className={_utils.cx(_styles, "price-hero__section")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global", "padding-48")}
          tag="div"
          loading="lazy"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1144")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "gap-52-32", "", "flex-center")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "gap-32-24",
                  "aligne-center-flex"
                )}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "headline-hero",
                    "aligne-center"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0bf-0320e0b8"
                  )}
                >
                  <_Builtin.Span className={_utils.cx(_styles, "span-red")}>
                    {"$_"}
                  </_Builtin.Span>
                  {" Flat pricing with no hidden fees"}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "h1-style-56")}
                  tag="div"
                >
                  {"Pick Your Aidbox Plan"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "p-txt-18", "mw")}
              >
                {
                  "Startup, regional, and volume discounts are available — reach out to learn more and find the plan that works best for you."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block className={_utils.cx(_styles, "t-26")} tag="div">
                {"Aidbox License Pricing"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-40-20")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "price-tab__wrp", "_2-shadow")}
              tag="div"
            >
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "pricing__tab")}
                current="Tab 2"
                easing="ease"
                fadeIn={100}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "pricing__tab-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Yearly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Monthly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(_styles, "pricing__tab-content")}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "no-border")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0d7-0320e0b8"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0d8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Aidbox Dev"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0dc-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Aidbox Base"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0e0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>
                              {"Aidbox Enterprise"}
                            </_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0e5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"FHIR Database"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0e8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0ea-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0ec-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0ef-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"REST API, SQL & GraphQL"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0f2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0f4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0f6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0f9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"FHIR IGs and Custom Resources"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0fc-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e0fe-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e100-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e103-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"User management & Access Control"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e106-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e108-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e10a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e10d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e110-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e112-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e114-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e117-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Access to SaaS Termbox"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e11a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e11c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e11e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e121-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Audit log"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e124-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e126-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e128-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e12b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"SQL on FHIR engine"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e12e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e130-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e132-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e135-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox administrative UI"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e138-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e13a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e13c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e13f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"SMART on FHIR"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e142-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e144-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e146-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e149-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Subscriptions"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e14c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e14e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e150-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e153-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Partitioning"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e156-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e158-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e15b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e15e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Smart search parameters"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e161-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e163-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e166-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e169-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e16c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e16e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e171-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e174-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Read replica"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e177-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e179-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e17c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e17f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Multi-tenancy"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e182-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e184-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e187-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e18a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {
                              "Protected health information allowed (HIPAA compliant)"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e18d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e190-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e192-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e195-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Support included"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e198-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e19b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Basic"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e19e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Basic"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1a2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Price"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1a5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"$0"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1a8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"from $19,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1ab-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1af-0320e0b8"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1b0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "hs-new-button",
                              "slider-link",
                              "mini-btn-t-2"
                            )}
                            button={false}
                            fs-modal-element="open"
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block tag="div">
                              {"Try now"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1b4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                            fsModalElement=""
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1b7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                            fsModalElement=""
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price_main-wrp")}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1bc-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Aidbox Dev"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"Free"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1c3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1c4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1c5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1c7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Database"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1ca-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1cb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1cd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"REST API, SQL & GraphQL"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1d0-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1d1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1d3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR IGs and Custom Resources"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1d6-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1d7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1d9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"User management & Access Control"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1dc-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1dd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1df-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1e2-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1e3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1e5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Access to SaaS Termbox"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1e8-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1e9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1eb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Audit log"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1ee-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1ef-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1f1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SQL on FHIR engine"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1f4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1f5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1f7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Aidbox administrative UI"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1fa-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1fb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e1fd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SMART on FHIR"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e200-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e201-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e203-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Subscriptions"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e206-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e207-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e209-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Partitioning"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e20c-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e20d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e20f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Smart search parameters"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e212-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e213-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e215-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e218-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e219-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e21b-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Read replica"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e21e-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e21f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e221-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Multi-tenancy"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e224-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e225-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e228-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Protected health information allowed (HIPAA compliant)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e22b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e22c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e22f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Support included"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border-none"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e232-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t"
                            txtButton="Try now"
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e236-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Aidbox Base Multibox"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"from $19,000/year"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"Basic Support"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e23e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e23f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e240-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e242-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Database"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e245-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e246-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e248-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"REST API, SQL & GraphQL"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e24b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e24c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e24e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR IGs and Custom Resources"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e251-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e252-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e254-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"User management & Access Control"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e257-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e258-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e25a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e25d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e25e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e260-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Access to SaaS Termbox"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e263-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e264-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e266-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Audit log"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e269-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e26a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e26c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SQL on FHIR engine"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e26f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e270-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e272-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Aidbox administrative UI"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e275-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e276-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e278-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SMART on FHIR"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e27b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e27c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e27e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Subscriptions"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e281-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e282-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e285-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Partitioning"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e288-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e289-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e28c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Smart search parameters"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e28f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e290-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e293-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e296-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e297-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e29a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Read replica"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e29d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e29e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2a1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Multi-tenancy"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2a4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2a5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2a7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Protected health information allowed (HIPAA compliant)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2aa-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2ab-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2ae-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Support included"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border-none"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2b1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2b5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Aidbox Enterprise"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "price_card-label",
                                "black"
                              )}
                              button={false}
                              block=""
                              options={{
                                href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                              }}
                            >
                              {"Contact us for pricing"}
                            </_Builtin.Link>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"Basic Support"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2bd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2be-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2bf-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2c1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Database"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2c4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2c5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2c7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"REST API, SQL & GraphQL"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2ca-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2cb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2cd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR IGs and Custom Resources"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2d0-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2d1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2d3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"User management & Access Control"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2d6-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2d7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2d9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2dc-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2dd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2df-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Access to SaaS Termbox"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2e2-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2e3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2e5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Audit log"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2e8-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2e9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2eb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SQL on FHIR engine"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2ee-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2ef-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2f1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Aidbox administrative UI"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2f4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2f5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2f7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SMART on FHIR"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2fa-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2fb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e2fd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Subscriptions"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e300-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e301-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e303-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Partitioning"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e306-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e307-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e309-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Smart search parameters"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e30c-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e30d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e30f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e312-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e313-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e315-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Read replica"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e318-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e319-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e31b-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Multi-tenancy"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e31e-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e31f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e321-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Protected health information allowed (HIPAA compliant)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e324-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e325-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e327-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Support included"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border-none"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e32a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "no-border")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e330-0320e0b8"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e331-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Aidbox Dev"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e335-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Aidbox Base"}</_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e339-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>
                              {"Aidbox Enterprise"}
                            </_Builtin.Strong>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e33e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"FHIR Database"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e341-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e343-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e345-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e348-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"REST API, SQL & GraphQL"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e34b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e34d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e34f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e352-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"FHIR IGs and Custom Resources"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e355-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e357-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e359-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e35c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"User management & Access Control"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e35f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e361-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e363-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e366-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e369-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e36b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e36d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e370-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Access to SaaS Termbox"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e373-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e375-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e377-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e37a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Audit log"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e37d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e37f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e381-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e384-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"SQL on FHIR engine"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e387-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e389-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e38b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e38e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox administrative UI"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e391-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e393-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e395-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e398-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"SMART on FHIR"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e39b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e39d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e39f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3a2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Subscriptions"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3a5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3a7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3a9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3ac-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Partitioning"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3af-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3b1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3b4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3b7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Smart search parameters"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3ba-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3bc-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3bf-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3c2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3c5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3c7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3ca-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3cd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Read replica"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3d0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3d2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3d5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3d8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Multi-tenancy"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3db-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3dd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3e0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3e3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {
                              "Protected health information allowed (HIPAA compliant)"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3e6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3e9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3eb-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3ee-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Support included"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3f1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3f4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Basic"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3f7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Basic"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3fb-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Price"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e3fe-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"$0"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e401-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"from $1,900/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e404-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e408-0320e0b8"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e409-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "hs-new-button",
                              "slider-link",
                              "mini-btn-t-2"
                            )}
                            button={false}
                            fs-modal-element="open"
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block tag="div">
                              {"Try now"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e40d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                            fsModalElement=""
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e410-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                            fsModalElement=""
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price_main-wrp")}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e415-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            <_Builtin.Strong>{"Aidbox Dev"}</_Builtin.Strong>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"Free"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e41c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e41d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e41e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e420-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Database"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e423-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e424-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e426-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"REST API, SQL & GraphQL"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e429-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e42a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e42c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR IGs and Custom Resources"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e42f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e430-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e432-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"User management & Access Control"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e435-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e436-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e438-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e43b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e43c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e43e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Access to SaaS Termbox"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e441-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e442-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e444-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Audit log"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e447-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e448-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e44a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SQL on FHIR engine"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e44d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e44e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e450-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Aidbox administrative UI"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e453-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e454-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e456-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SMART on FHIR"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e459-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e45a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e45c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Subscriptions"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e45f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e460-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e462-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Partitioning"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e465-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e466-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e468-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Smart search parameters"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e46b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e46c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e46e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e471-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e472-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e474-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Read replica"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e477-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e478-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e47a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Multi-tenancy"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e47d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e47e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e481-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Protected health information allowed (HIPAA compliant)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e484-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e485-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e488-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Support included"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border-none"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e48b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t"
                            txtButton="Try now"
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e48f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Aidbox Base Multibox"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"from $1,900/month"}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"Basic Support"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e497-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e498-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e499-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e49b-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Database"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e49e-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e49f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4a1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"REST API, SQL & GraphQL"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4a4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4a5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4a7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR IGs and Custom Resources"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4aa-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4ab-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4ad-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"User management & Access Control"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4b0-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4b1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4b3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4b6-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4b7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4b9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Access to SaaS Termbox"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4bc-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4bd-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4bf-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Audit log"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4c2-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4c3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4c5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SQL on FHIR engine"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4c8-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4c9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4cb-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Aidbox administrative UI"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4ce-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4cf-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4d1-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SMART on FHIR"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4d4-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4d5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4d7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Subscriptions"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4da-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4db-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4de-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Partitioning"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4e1-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4e2-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4e5-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Smart search parameters"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4e8-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4e9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4ec-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4ef-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4f0-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4f3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Read replica"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4f6-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4f7-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4fa-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Multi-tenancy"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4fd-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e4fe-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e500-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Protected health information allowed (HIPAA compliant)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e503-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e504-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e507-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Support included"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border-none"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e50a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e50e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Aidbox Enterprise"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "price_card-label",
                                "black"
                              )}
                              button={false}
                              block=""
                              options={{
                                href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                              }}
                            >
                              {"Contact us for pricing"}
                            </_Builtin.Link>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"Basic Support"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e516-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e517-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e518-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e51a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Database"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e51d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e51e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e520-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"REST API, SQL & GraphQL"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e523-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e524-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e526-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR IGs and Custom Resources"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e529-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e52a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e52c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"User management & Access Control"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e52f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e530-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e532-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Integration toolkit (HL7 v2, C-CDA, X12)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e535-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e536-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e538-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Access to SaaS Termbox"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e53b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e53c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e53e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Audit log"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e541-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e542-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e544-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SQL on FHIR engine"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e547-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e548-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e54a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Aidbox administrative UI"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e54d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e54e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e550-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"SMART on FHIR"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e553-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e554-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e556-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Subscriptions"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e559-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e55a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e55c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Partitioning"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e55f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e560-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e562-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Smart search parameters"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e565-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e566-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e568-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"CDC Connectors (Clickhouse, BigQuery, etc.)"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e56b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e56c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e56e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Read replica"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e571-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e572-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e574-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Multi-tenancy"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e577-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e578-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e57a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Protected health information allowed (HIPAA compliant)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e57d-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e57e-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e580-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Support included"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border-none"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e583-0320e0b8"
                          )}
                          tag="div"
                        >
                          <HsNewButton
                            variant="mini-btn-t outline"
                            txtButton="Schedule a demo"
                            hsNewButtonLink={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          />
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global", "padding-48")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "aligne-center-flex")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "t-26")} tag="div">
                {"Support Options"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-40-20")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "price-tab__wrp", "_2-shadow")}
              tag="div"
            >
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "pricing__tab")}
                current="Tab 1"
                easing="ease"
                fadeIn={100}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "pricing__tab-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Yearly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Monthly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(_styles, "pricing__tab-content")}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "no-border")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e59a-0320e0b8"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e59b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Basic"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e59e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Professional"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5a1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Enterprise"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5a5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Onboarding Video Call"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5a8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5aa-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5ac-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5af-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Private Chat & Bug Fixing"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5b2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5b4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5b6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5b9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"FHIR Guidance & New Terminologies"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5bc-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5bf-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5c1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5c4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"On-demand Video Calls"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5c7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5ca-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"12/year"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5cd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"1/week"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5d1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"24/7 Support & Consultations"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5d4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5d7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5da-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5dd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {
                              "Response Times (Q&A / Blocking issues resolution)"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5e0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"3 days/1 day"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5e3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"2 days/8 hours"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5e6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"1 day/4 hours"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5ea-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Price"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5ed-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"$0"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5f0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"$25,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5f3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price_main-wrp")}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5f8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Basic"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"free"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5fe-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e5ff-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e600-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Onboarding Video Call"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e603-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e605-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e606-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Private Chat & Bug Fixing"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e609-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e60b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e60c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Guidance & New Terminologies"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e60f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e612-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e613-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"On-demand Video Calls"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e616-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e619-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e61a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"24/7 Support & Consultations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e61d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e620-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e621-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Response Times (Q&A / Blocking issues resolution)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e624-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"3 days/1 day"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e628-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Professional"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"$25,000/year"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e62e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e62f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e630-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Onboarding Video Call"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e633-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e635-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e636-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Private Chat & Bug Fixing"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e639-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e63b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e63c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Guidance & New Terminologies"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e63f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e642-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e643-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"On-demand Video Calls"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e646-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"12/year"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e649-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e64a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"24/7 Support & Consultations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e64d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e650-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e651-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Response Times (Q&A / Blocking issues resolution)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e654-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"2 days/8 hours"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e658-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Enterprise"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(_styles, "price_card-label")}
                              button={false}
                              block=""
                              options={{
                                href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                              }}
                            >
                              {"Contact us"}
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e65e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e65f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e660-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Onboarding Video Call"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e663-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e665-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e666-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Private Chat & Bug Fixing"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e669-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e66b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e66c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Guidance & New Terminologies"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e66f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e672-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e673-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"On-demand Video Calls"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e676-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"1/week"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e679-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e67a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"24/7 Support & Consultations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e67d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e680-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e681-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Response Times (Q&A / Blocking issues resolution)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e684-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"1 day/4 hours"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "no-border")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e68a-0320e0b8"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e68b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Basic"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e68e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Professional"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e691-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Enterprise"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e695-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Onboarding Video Call"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e698-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e69a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e69c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e69f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Private Chat & Bug Fixing"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6a2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6a4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6a6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6a9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"FHIR Guidance & New Terminologies"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6ac-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6af-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6b1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6b4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"On-demand Video Calls"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6b7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6ba-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"12/year"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6bd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"1/week"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6c1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"24/7 Support & Consultations"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6c4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6c7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6ca-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            width="20.5"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6cd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {
                              "Response Times (Q&A / Blocking issues resolution)"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6d0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"3 days/1 day"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6d3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"2 days/8 hours"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6d6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"1 day/4 hours"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "table-row", "bg-row")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6da-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">{"Price"}</_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6dd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"$0"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6e0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-txt-")}
                            tag="div"
                          >
                            {"$2,500/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6e3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price_main-wrp")}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6e8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Basic"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"free"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6ee-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6ef-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6f0-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Onboarding Video Call"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6f3-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6f5-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6f6-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Private Chat & Bug Fixing"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6f9-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6fb-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6fc-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Guidance & New Terminologies"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e6ff-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e702-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e703-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"On-demand Video Calls"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e706-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e709-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e70a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"24/7 Support & Consultations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e70d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e710-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e711-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Response Times (Q&A / Blocking issues resolution)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e714-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"3 days/1 day"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e718-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Professional"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price_card-label")}
                              tag="div"
                            >
                              {"$2,500/month"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e71e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e71f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e720-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Onboarding Video Call"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e723-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e725-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e726-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Private Chat & Bug Fixing"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e729-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e72b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e72c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Guidance & New Terminologies"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e72f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e732-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e733-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"On-demand Video Calls"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e736-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"12/year"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e739-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e73a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"24/7 Support & Consultations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e73d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e740-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e741-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Response Times (Q&A / Blocking issues resolution)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e744-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"2 days/8 hours"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "price-mob-table")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-header")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e748-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_card-ttl")}
                            tag="div"
                          >
                            {"Enterprise"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "price_label-wrp")}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(_styles, "price_card-label")}
                              button={false}
                              block=""
                              options={{
                                href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                              }}
                            >
                              {"Contact us"}
                            </_Builtin.Link>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_row-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e74e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e74f-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e750-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Onboarding Video Call"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e753-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e755-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e756-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"Private Chat & Bug Fixing"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e759-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Image
                                width="20.5"
                                height="auto"
                                loading="lazy"
                                alt=""
                                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68769cfb8d4191c3946cbd2a_Checks.png"
                              />
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e75b-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e75c-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"FHIR Guidance & New Terminologies"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e75f-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e762-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e763-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"On-demand Video Calls"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e766-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"1/week"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e769-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e76a-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"24/7 Support & Consultations"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell",
                                "sz-fix"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e76d-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">{"-"}</_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "price-mob-row")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_408afdbb-7740-71e7-a982-0eaa0320e770-0320e0b8"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "price-table-cell-m"
                              )}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e771-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Response Times (Q&A / Blocking issues resolution)"
                                }
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "price-table-cell")}
                              id={_utils.cx(
                                _styles,
                                "w-node-_408afdbb-7740-71e7-a982-0eaa0320e774-0320e0b8"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {"1 day/4 hours"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global", "padding-48")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "aligne-center-flex")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "t-26")} tag="div">
                {"Optional Modules"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-40-20")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "price-tab__wrp", "_2-shadow")}
              tag="div"
            >
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "pricing__tab")}
                current="Tab 1"
                easing="ease"
                fadeIn={100}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "pricing__tab-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Yearly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Monthly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(
                    _styles,
                    "pricing__tab-content",
                    "pad-48"
                  )}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "table-heat"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e78b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Module"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e78e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Description"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e791-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Price"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e795-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox Forms"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e798-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A no-code builder for creating and deploying clinical forms. Includes a library of 3,000+ ready-to-use forms."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e79b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$12,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e79f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox MPI"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7a2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A Master Patient Index system that helps identify and merge duplicate patient records, with tools for manual and batch operations."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7a5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $15,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7a9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Termbox (self-hosted)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7ac-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A terminology service offering local access to standardized medical vocabularies like LOINC, SNOMED CT, ICD-10, and RxNorm."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7af-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7b3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox eRx"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7b6-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A module for electronic prescribing that integrates with medication terminologies and is ready for Surescripts certification"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7b9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $25,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7bd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"SMARTbox"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7c0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "ONC-certified and CMS-compliant SMART on FHIR app management module with developer sandboxes, administrative UI, and an app gallery with consent management."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7c3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$19,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7c7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"C-CDA Converter"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7ca-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A bidirectional converter between C-CDA R2.1 and FHIR R4.0.1 formats, with built-in validation for C-CDA documents."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7cd-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$8,000/year"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7d1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox Billing"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7d4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A healthcare billing module that supports claims management, rule-based billing logic, and X12 EDI messaging."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e7d7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "optional_wrp")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox Forms"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A no-code builder for creating and deploying clinical forms. Includes a library of 3,000+ ready-to-use forms."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"$12,000/year"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox MPI"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A Master Patient Index system that helps identify and merge duplicate patient records, with tools for manual and batch operations."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"From $15,000/year"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Termbox (self-hosted)"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A terminology service offering local access to standardized medical vocabularies like LOINC, SNOMED CT, ICD-10, and RxNorm."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "price_card-label")}
                          button={false}
                          block=""
                          options={{
                            href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                          }}
                        >
                          {"Contact us"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox eRx"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A module for electronic prescribing that integrates with medication terminologies and is ready for Surescripts certification"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"From $25,000/year"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"SMARTbox"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "ONC-certified and CMS-compliant SMART on FHIR app management module with developer sandboxes, administrative UI, and an app gallery with consent management."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"$19,000/year"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"C-CDA Converter"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A bidirectional converter between C-CDA R2.1 and FHIR R4.0.1 formats, with built-in validation for C-CDA documents."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"$8,000/year"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox Billing"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A healthcare billing module that supports claims management, rule-based billing logic, and X12 EDI messaging."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "price_card-label")}
                          button={false}
                          block=""
                          options={{
                            href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                          }}
                        >
                          {"Contact us"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "table-heat"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e80f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Module"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e812-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Description"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e815-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Price"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e819-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox Forms"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e81c-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A no-code builder for creating and deploying clinical forms. Includes a library of 3,000+ ready-to-use forms."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e81f-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$1,200/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e823-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox MPI"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e826-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A Master Patient Index system that helps identify and merge duplicate patient records, with tools for manual and batch operations."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e829-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $1,500/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e82d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Termbox (self-hosted)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e830-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A terminology service offering local access to standardized medical vocabularies like LOINC, SNOMED CT, ICD-10, and RxNorm."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e833-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e837-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox eRx"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e83a-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A module for electronic prescribing that integrates with medication terminologies and is ready for Surescripts certification"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e83d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $2,500/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e841-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"SMARTbox"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e844-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "ONC-certified and CMS-compliant SMART on FHIR app management module with developer sandboxes, administrative UI, and an app gallery with consent management."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e847-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$1,900/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e84b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"C-CDA Converter"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e84e-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A bidirectional converter between C-CDA R2.1 and FHIR R4.0.1 formats, with built-in validation for C-CDA documents."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e851-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$800/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "option-row",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e855-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Aidbox Billing"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e858-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {
                              "A healthcare billing module that supports claims management, rule-based billing logic, and X12 EDI messaging."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e85b-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "optional_wrp")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox Forms"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A no-code builder for creating and deploying clinical forms. Includes a library of 3,000+ ready-to-use forms."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"$1,200/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox MPI"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A Master Patient Index system that helps identify and merge duplicate patient records, with tools for manual and batch operations."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"From $1,500/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Termbox (self-hosted)"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A terminology service offering local access to standardized medical vocabularies like LOINC, SNOMED CT, ICD-10, and RxNorm."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "price_card-label")}
                          button={false}
                          block=""
                          options={{
                            href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                          }}
                        >
                          {"Contact us"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox eRx"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A module for electronic prescribing that integrates with medication terminologies and is ready for Surescripts certification"
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"From $2,500/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"SMARTbox"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "ONC-certified and CMS-compliant SMART on FHIR app management module with developer sandboxes, administrative UI, and an app gallery with consent management."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"$1,900/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"C-CDA Converter"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A bidirectional converter between C-CDA R2.1 and FHIR R4.0.1 formats, with built-in validation for C-CDA documents."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-label")}
                          tag="div"
                        >
                          {"$800/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "optional_card")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price_card-ttl-20")}
                          tag="div"
                        >
                          {"Aidbox Billing"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph>
                          {
                            "A healthcare billing module that supports claims management, rule-based billing logic, and X12 EDI messaging."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "price_card-label")}
                          button={false}
                          block=""
                          options={{
                            href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                          }}
                        >
                          {"Contact us"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global", "padding-48")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "aligne-center-flex")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "t-26")} tag="div">
                {"Professional Services"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-40-20")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "price-tab__wrp", "_2-shadow")}
              tag="div"
            >
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "pricing__tab")}
                current="Tab 1"
                easing="ease"
                fadeIn={100}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "pricing__tab-menu", "invis")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(
                      _styles,
                      "pricing__tab-link",
                      "downloads-input-hidden"
                    )}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Yearly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "pricing__tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block tag="div">{"Monthly"}</_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(
                    _styles,
                    "pricing__tab-content",
                    "pad-48"
                  )}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table-copy")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "table-heat-2"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8a4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Description"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8a7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Price"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8ab-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Automated Aidbox Deployment"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8ae-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $2,900 (one-time)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8b2-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Aidbox Instance Maintenance"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8b5-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $5,000/yearly"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8b9-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Aidbox Performance Optimization"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8bc-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $10,000/yearly"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8c0-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Aidbox Training"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8c3-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$6,000 (5-day session)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8c7-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Integration/Profiling Works"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8ca-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "proservice-wrp")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item", "start")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Automated Aidbox Deployment"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"5-day session"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Aidbox Instance Maintenance"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"From $5,000/mo"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Aidbox Performance Optimization"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"From $10,000/mo"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Aidbox Training"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"$6,000 (5-day session)"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Integration/Profiling Works"}
                        </_Builtin.Paragraph>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "table-link")}
                          button={false}
                          block=""
                          options={{
                            href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                          }}
                        >
                          {"Contact us"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "pricing__tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "price-table-copy")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "table-heat-2"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8ea-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Description"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8ed-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "table-ttl")}
                            tag="div"
                          >
                            {"Price"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8f1-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Automated Aidbox Deployment"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8f4-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $2,900 (one-time)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8f8-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Aidbox Instance Maintenance"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8fb-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $500/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e8ff-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Aidbox Performance Optimization"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e902-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"From $1,000/month"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e906-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Aidbox Training"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e909-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"$6,000 (5-day session)"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "table-row",
                          "service-row-copy",
                          "bg-row"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "price-table-cell")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e90d-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph>
                            {"Integration/Profiling Works"}
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "price-table-cell",
                            "cell-border"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_408afdbb-7740-71e7-a982-0eaa0320e910-0320e0b8"
                          )}
                          tag="div"
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "table-link",
                              "black"
                            )}
                            button={false}
                            block=""
                            options={{
                              href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                            }}
                          >
                            {"Contact us"}
                          </_Builtin.Link>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "proservice-wrp")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item", "start")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Automated Aidbox Deployment"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"From $2,900 (one-time)"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Aidbox Instance Maintenance"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"From $500/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Aidbox Performance Optimization"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"From $1,000/month"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Aidbox Training"}
                        </_Builtin.Paragraph>
                        <_Builtin.Block tag="div">
                          {"$6,000 (5-day session)"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "pro-item")}
                        tag="div"
                      >
                        <_Builtin.Paragraph>
                          {"Integration/Profiling Works"}
                        </_Builtin.Paragraph>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "table-link")}
                          button={false}
                          block=""
                          options={{
                            href: "#5b326f55-69fc-431b-abf1-b894b1252487",
                          }}
                        >
                          {"Contact us"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        grid={{
          type: "section",
        }}
        tag="section"
        id="form-contact"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global", "padding-48")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "aligne-center-flex", "gap-30")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "h2-48")} tag="div">
                {"Contact us"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "p-txt-18")}
                tag="div"
              >
                {
                  "Have a specific request? Get in touch and we'll set up a call"
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-30-20")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "form-layout-copy")}
              tag="div"
            >
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "form-price")}
                id="st-contact-sales-form"
              >
                <_Builtin.FormForm
                  className={_utils.cx(_styles, "st-contact-form-2")}
                  name="wf-form-Analytics-on-FHIR"
                  data-name="Analytics on FHIR"
                  action="https://price.d-chistoforov.workers.dev"
                  method="post"
                  ms-code-form-no-redirect=""
                  id="wf-form-Aidbox-Price"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "field-wrp")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "field-label")}
                      tag="div"
                    >
                      {"Full Name"}
                    </_Builtin.Block>
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "form-input-2")}
                      name="FNAME"
                      maxLength={256}
                      data-name="FNAME"
                      placeholder="Robert Mason Jr."
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      data-wfhsfieldname="Full-Name"
                      id="FNAME"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "field-wrp")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "form-input-2")}
                      name="COMPANY"
                      maxLength={256}
                      data-name="COMPANY"
                      placeholder="Company"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      data-wfhsfieldname="Business-Email-address"
                      id="COMPANY"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "field-label")}
                      tag="div"
                    >
                      {"Company"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "field-wrp")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "form-input-2")}
                      name="Email"
                      maxLength={256}
                      data-name="Email"
                      placeholder="Robert@gmail.com"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      data-wfhsfieldname="Business-Email-address"
                      id="Email"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "field-label")}
                      tag="div"
                    >
                      {"Business Email"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "field-wrp")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "form-input-2")}
                      name="Phone"
                      maxLength={256}
                      data-name="Phone"
                      placeholder="+1 (199) 039-98-42"
                      disabled={false}
                      type="tel"
                      required={true}
                      autoFocus={false}
                      data-wfhsfieldname="Business-Email-address"
                      id="Phone"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "field-label")}
                      tag="div"
                    >
                      {"Phone"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "field-wrp")}
                    tag="div"
                  >
                    <_Builtin.FormTextarea
                      className={_utils.cx(_styles, "form-input-2", "area")}
                      name="field"
                      maxLength={5000}
                      data-name="Field"
                      placeholder="Tell us about your project or challenges you're facing so we could figure out how to help"
                      required={false}
                      autoFocus={false}
                      id="field"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "field-label")}
                      tag="div"
                    >
                      {"Describe your topic"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "wb-text-field-hidden")}
                    name="MMERGE8"
                    maxLength={256}
                    data-name="MMERGE8"
                    disabled={false}
                    type="text"
                    required={false}
                    autoFocus={false}
                    data-wfhsfieldname="Request-description"
                    id="MMERGE-12"
                  />
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "wb-text-field-hidden")}
                    name="MMERGE9"
                    maxLength={256}
                    data-name="MMERGE9"
                    disabled={false}
                    type="text"
                    required={false}
                    autoFocus={false}
                    data-wfhsfieldname="Request-description"
                    id="MMERGE-11"
                  />
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "wb-text-field-hidden")}
                    name="MMERGE10"
                    maxLength={256}
                    data-name="MMERGE10"
                    disabled={false}
                    type="text"
                    required={false}
                    autoFocus={false}
                    data-wfhsfieldname="Request-description"
                    id="MMERGE10"
                  />
                  <_Builtin.HtmlEmbed value="%3Cinput%20type%3D%22hidden%22%20id%3D%22current-page%22%20data-name%3D%22WPAGE%22%3E%0A%3Cinput%20type%3D%22hidden%22%20name%3D%22tags%22%20value%3D%2219408568%22%3E%0A%3Cinput%20type%3D%22hidden%22%20name%3D%22MMERGE8%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20name%3D%22MMERGE9%22%20value%3E%0A%3Cinput%20type%3D%22hidden%22%20name%3D%22MMERGE10%22%20value%3E" />
                  <_Builtin.HtmlEmbed value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function%20()%20%7B%0A%20%20const%20form%20%3D%20document.querySelector('form')%3B%20%2F%2F%20%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%20%D0%BD%D0%B0%20%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%20%D1%84%D0%BE%D1%80%D0%BC%D1%8B%0A%0A%20%20if%20(!form)%20return%3B%0A%0A%20%20form.addEventListener(%22submit%22%2C%20function%20(e)%20%7B%0A%20%20%20%20const%20response%20%3D%20grecaptcha.getResponse()%3B%0A%20%20%20%20if%20(response.length%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20e.stopImmediatePropagation()%3B%20%2F%2F%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D1%83%D0%B5%D0%BC%20%D0%B2%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%20Webflow%0A%20%20%20%20%20%20alert(%22Confirm%20that%20you%20are%20not%20a%20robot!%22)%3B%0A%20%20%20%20%20%20return%20false%3B%20%2F%2F%20%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D1%82%D0%BE%D0%BF%0A%20%20%20%20%7D%0A%20%20%7D%2C%20true)%3B%20%2F%2F%20%D1%81%D0%BB%D1%83%D1%88%D0%B0%D0%B5%D0%BC%20%D0%B2%20%D1%84%D0%B0%D0%B7%D0%B5%20%D0%B7%D0%B0%D1%85%D0%B2%D0%B0%D1%82%D0%B0%2C%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D1%8C%20Webflow%0A%7D)%3B%0A%3C%2Fscript%3E" />
                  <_Builtin.FormReCaptcha
                    siteKey={process.env.DEVLINK_ENV_GOOGLE_RECAPTCHA_API_KEY}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "flex-center")}
                    tag="div"
                  >
                    <_Builtin.FormButton
                      className={_utils.cx(_styles, "submit-2")}
                      type="submit"
                      value="Send request"
                      data-wait="Please wait..."
                      id="submitBtn"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "st_form_policy", "caps")}
                    tag="div"
                  >
                    {"By submitting the form you agree to "}
                    <_Builtin.Link
                      button={false}
                      rel="nofollow"
                      block=""
                      options={{
                        href: "/legal/privacy-policy",
                        target: "_blank",
                      }}
                    >
                      {"PrivacyPolicy"}
                    </_Builtin.Link>
                    {"and"}
                    <_Builtin.Link
                      button={false}
                      rel="nofollow"
                      block=""
                      options={{
                        href: "/legal/cookie-policy",
                        target: "_blank",
                      }}
                    >
                      {"Cookie Policy"}
                    </_Builtin.Link>
                    {"."}
                  </_Builtin.Block>
                  <_Builtin.DOM
                    tag="input"
                    slot=""
                    type="hidden"
                    name="hutk"
                    value=""
                  />
                  <_Builtin.DOM
                    tag="input"
                    slot=""
                    type="hidden"
                    name="ipAddress"
                    value=""
                  />
                  <_Builtin.DOM
                    tag="input"
                    slot=""
                    type="hidden"
                    name="pageUri"
                    value=""
                  />
                  <_Builtin.DOM
                    tag="input"
                    slot=""
                    type="hidden"
                    name="pageId"
                    value=""
                  />
                  <_Builtin.DOM
                    tag="input"
                    slot=""
                    type="hidden"
                    name="pageName"
                    value=""
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage>
                  <_Builtin.Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <GPrefooter />
      <GFooter />
      <_Builtin.Block
        className={_utils.cx(_styles, "popup")}
        id={_utils.cx(
          _styles,
          "w-node-_408afdbb-7740-71e7-a982-0eaa0320e96a-0320e0b8"
        )}
        tag="div"
        fs-modal-element="modal"
        fs-modal-animation="fade"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "close-bg")}
          tag="div"
          fs-modal-element="close"
        />
        <_Builtin.Block className={_utils.cx(_styles, "popup-frame")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "gap-56-48")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "ttl-popup")}
              tag="div"
            >
              {"Get Started with Aidbox"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "gap-16")} tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "started-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "t-20", "semy-bold")}
                  tag="div"
                >
                  {"Run Aidbox Locally"}
                </_Builtin.Block>
                <_Builtin.Paragraph className={_utils.cx(_styles, "p-15")}>
                  {
                    "Quickly spin up a local Aidbox instance with a single command. Ideal for developers who want a private and persistent setup."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "copy-cod-wrp")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    {"curl -JO https://aidbox.app/runme && docker compose up"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "_1button", "copy-btn")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    data-copy-text="curl -JO https://aidbox.app/runme && docker compose up"
                    id="copyButton"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/686d0dc68af4c55a4a243a19_copy-btn.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "separ-block-orr")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "started-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "t-20", "semy-bold")}
                  tag="div"
                >
                  {"Launch Aidbox in Sandbox"}
                </_Builtin.Block>
                <_Builtin.Paragraph className={_utils.cx(_styles, "p-15")}>
                  {
                    "Explore Aidbox in a ready-to-use cloud environment with demo data and UI tools. Perfect for quick evaluations and product exploration."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Link
                  className={_utils.cx(_styles, "run-btn")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://aidbox.app/ui/portal",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Run in Cloud Sandbox"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-embed-custom")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2016%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10.5%202H14.5V6%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.25%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M7.16406%209.33333L14.4974%202%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.25%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M12.5%208.66667V12.6667C12.5%2013.0203%2012.3595%2013.3594%2012.1095%2013.6095C11.8594%2013.8595%2011.5203%2014%2011.1667%2014H3.83333C3.47971%2014%203.14057%2013.8595%202.89052%2013.6095C2.64048%2013.3594%202.5%2013.0203%202.5%2012.6667V5.33333C2.5%204.97971%202.64048%204.64057%202.89052%204.39052C3.14057%204.14048%203.47971%204%203.83333%204H7.83333%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.25%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "close-modal")}
            fs-modal-element="close"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2052%2052%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%2252%22%20height%3D%2252%22%20rx%3D%2224%22%20fill%3D%22%23F9F9F9%22%2F%3E%0A%3Cpath%20d%3D%22M35%2017L17%2035%22%20stroke%3D%22%23727885%22%20stroke-width%3D%222.8125%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M17%2017L35%2035%22%20stroke%3D%22%23727885%22%20stroke-width%3D%222.8125%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
