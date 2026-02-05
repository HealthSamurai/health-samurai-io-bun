"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewNavbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-101":{"id":"e-101","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8bad1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8bad1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680785013050},"e-102":{"id":"e-102","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-101"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8bad1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8bad1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680785013051},"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680785856870},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786068057},"e-106":{"id":"e-106","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-105"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786068057},"e-107":{"id":"e-107","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786264983},"e-108":{"id":"e-108","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-107"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786265018},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786291819},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba5c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba5c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786291848},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786306103},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680786306132},"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8bae9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8bae9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680788767771},"e-114":{"id":"e-114","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8bae9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8bae9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680788767771},"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8baf7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8baf7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680788880054},"e-116":{"id":"e-116","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8baf7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8baf7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680788880054},"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8bb15","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8bb15","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680789174411},"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8bb15","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5d754a33-592a-7fef-19f3-b3781cc8bb15","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680789174411},"e-271":{"id":"e-271","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a43651978f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a43651978f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-272":{"id":"e-272","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-271"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a43651978f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a43651978f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-273":{"id":"e-273","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-275":{"id":"e-275","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-276"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197bb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197bb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-277":{"id":"e-277","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-278"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167},"e-278":{"id":"e-278","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-277"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e700209ec2472550459b57|b3ded235-5137-98f8-9584-51a4365197d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690533272167}},"actionLists":{"a-33":{"id":"a-33","title":"mobile-icon-flip-down","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".nb-mobile-item-icon","selectorGuids":["9526bd53-0eec-1d1a-9531-f05dac97f2e1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680785201601},"a-34":{"id":"a-34","title":"mobile-icon-flip-right","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".nb-mobile-item-icon","selectorGuids":["9526bd53-0eec-1d1a-9531-f05dac97f2e1"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680785276062},"a-30":{"id":"a-30","title":"flip-top","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".nb-icon","selectorGuids":["4764cc13-b1f1-0890-7b4a-a39e43276468"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680694780170},"a-31":{"id":"a-31","title":"flip-down","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".nb-icon","selectorGuids":["4764cc13-b1f1-0890-7b4a-a39e43276468"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680694879767},"a-96":{"id":"a-96","title":"navbar down","actionItemGroups":[{"actionItems":[{"id":"a-96-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba01"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734610909062},"a-95":{"id":"a-95","title":"navbar up","actionItemGroups":[{"actionItems":[{"id":"a-95-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"id":"5d754a33-592a-7fef-19f3-b3781cc8ba01"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734610909062}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewNavbar({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nb-section-fhirbase")}
      data-w-id="5d754a33-592a-7fef-19f3-b3781cc8ba01"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "nb-container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "nb-left-items")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nb-item-logo")}
            button={false}
            block="inline"
            options={{
              href: "/",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "nb-logo")}
              loading="eager"
              width="64"
              height="64"
              alt="Health Samurai logo"
              src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
            />
          </_Builtin.Link>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "nb-item-dropdown")}
            data-w-id="5d754a33-592a-7fef-19f3-b3781cc8ba06"
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nb-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "nb-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-item-text")}
                tag="div"
              >
                {"Products"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "nb-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-dropdown-list-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nb-submenu-container")}
                  tag="div"
                >
                  <_Builtin.Row
                    className={_utils.cx(_styles, "nb-item-list-cols")}
                    tag="div"
                    columns={{
                      main: "3|3|3|3",
                      medium: "",
                      small: "",
                      tiny: "",
                    }}
                  >
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "nb-item-col-title",
                          "transparent"
                        )}
                        tag="div"
                      >
                        {"FHIR server"}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-extended")}
                        button={false}
                        block="inline"
                        options={{
                          href: "/fhir-server",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-title")}
                          tag="div"
                        >
                          {"FHIR Server"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-desc")}
                          tag="div"
                        >
                          {"Powerful backend for digital health developers"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-extended")}
                        button={false}
                        block="inline"
                        options={{
                          href: "/fhir-database",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-title")}
                          tag="div"
                        >
                          {"Fhirbase"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-desc")}
                          tag="div"
                        >
                          {
                            "Open source FHIR-native database for healthcare data"
                          }
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-extended")}
                        button={false}
                        block="inline"
                        options={{
                          href: "/auditbox",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-title")}
                          tag="div"
                        >
                          {"Auditbox"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-desc")}
                          tag="div"
                        >
                          {
                            "FHIR-native Audit Record Repository for compliance and security"
                          }
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-extended")}
                        button={false}
                        block="inline"
                        options={{
                          href: "https://healthsamurai.github.io/formbox-renderer/",
                          target: "_blank",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-title")}
                          tag="div"
                        >
                          {"Open-Source Form Renderer"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-item-ext-desc")}
                          tag="div"
                        >
                          {
                            "Render HL7® FHIR® Questionnaires across any UI system"
                          }
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"converters"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/modules/integration-toolkit/hl7-v2-integration",
                          target: "_blank",
                        }}
                      >
                        {"HL7v2 to FHIR converter"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "https://www.health-samurai.io/c-cda-to-fhir-converter",
                          target: "_blank",
                        }}
                      >
                        {"C-CDA to FHIR converter"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"modules"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/medical-form",
                        }}
                      >
                        {"Aidbox Forms"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/terminology-module/overview",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox Terminology"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/modules/other-modules/mpi",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox MPI"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/security-and-access-control-1/overview",
                          target: "_blank",
                        }}
                      >
                        {"Auth Server"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "/e-prescription-module",
                        }}
                      >
                        {"Aidbox E-Prescription"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-banner")}
                        button={false}
                        rel="nofollow"
                        block="inline"
                        options={{
                          href: "https://aidbox.app/ui/portal#/signup",
                          target: "_blank",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-left")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-img")}
                            loading="lazy"
                            width="auto"
                            height="48"
                            alt="Aidbox logo"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-title")}
                            tag="div"
                          >
                            {"Managed Aidbox"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-desc")}
                            tag="div"
                          >
                            {
                              "Get started in minutes with a fully managed Aidbox FHIR platform and modules"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-right")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-arrow")}
                            loading="lazy"
                            height="32"
                            width="auto"
                            alt="Right Arrow Icon\n"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Column>
                  </_Builtin.Row>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "nb-item-dropdown")}
            data-w-id="5d754a33-592a-7fef-19f3-b3781cc8ba39"
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nb-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "nb-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-item-text")}
                tag="div"
              >
                {"Solutions"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "nb-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-dropdown-list-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nb-submenu-container")}
                  tag="div"
                >
                  <_Builtin.Row
                    className={_utils.cx(_styles, "nb-item-list-cols")}
                    tag="div"
                    columns={{
                      main: "3|3|3|3",
                      medium: "",
                      small: "",
                      tiny: "",
                    }}
                  >
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"development"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/startups",
                        }}
                      >
                        {"Aidbox for Startups"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/healthcare-data-platform-toolkit-aidbox",
                        }}
                      >
                        {"Aidbox for Data Platforms"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/telemedicine",
                        }}
                      >
                        {"Telemed development toolkit"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/ehr-toolkit",
                        }}
                      >
                        {"EHR development toolkit"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"Compliance"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/fhir-api",
                        }}
                      >
                        {"ONC-certified API tools for EHRs"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/payers",
                        }}
                      >
                        {"FHIR API for Payers - CMS"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/auditbox",
                        }}
                      >
                        {"Audit Record Repository"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"others"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "https://www.health-samurai.io/articles/aidbox-for-wearable-and-medical-devices",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox for IoMT vendors"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-banner")}
                        button={false}
                        rel="nofollow"
                        block="inline"
                        options={{
                          href: "https://aws.amazon.com/marketplace/pp/prodview-l5djlpvsd6o5g",
                          target: "_blank",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-left")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-img")}
                            loading="lazy"
                            width="auto"
                            height="48"
                            alt="Aidbox logo"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-title")}
                            tag="div"
                          >
                            {"Aidbox on AWS"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-desc")}
                            tag="div"
                          >
                            {"Get FHIR backend on AWS in one click."}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-right")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-arrow")}
                            loading="lazy"
                            height="32"
                            width="auto"
                            alt="Right Arrow Icon\n"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Column>
                  </_Builtin.Row>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Link
            className={_utils.cx(_styles, "nb-item-link")}
            button={false}
            rel="nofollow"
            block="inline"
            options={{
              href: "/services",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nb-item-text")}
              tag="div"
            >
              {"Services"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-183")}
            tag="div"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "nb-item-dropdown")}
            data-w-id="5d754a33-592a-7fef-19f3-b3781cc8ba5c"
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nb-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "nb-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-item-text")}
                tag="div"
              >
                {"Docs & Resources"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "nb-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-dropdown-list-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nb-submenu-container")}
                  tag="div"
                >
                  <_Builtin.Row
                    className={_utils.cx(_styles, "nb-item-list-cols")}
                    tag="div"
                    columns={{
                      main: "3|3|3|3",
                      medium: "",
                      small: "",
                      tiny: "",
                    }}
                  >
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"Resources"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/blog",
                        }}
                      >
                        {"Blog"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/downloads",
                        }}
                      >
                        {"Downloads "}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/casestudies",
                        }}
                      >
                        {"Case Studies"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/events",
                        }}
                      >
                        {"Events and Webinars"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/overview/release-notes",
                          target: "_blank",
                        }}
                      >
                        {"Release Notes"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"docs"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox Docs"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://fhirbase.aidbox.app/",
                          target: "_blank",
                        }}
                      >
                        {"Fhirbase Docs"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/modules/aidbox-forms",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox Forms Docs"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/modules/other-modules/mpi",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox MPI Docs"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/terminology-module/overview",
                          target: "_blank",
                        }}
                      >
                        {"Aidbox Terminology"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"community"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://connect.health-samurai.io/",
                          target: "_blank",
                        }}
                      >
                        {"User Community"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-banner")}
                        button={false}
                        rel="nofollow"
                        block="inline"
                        options={{
                          href: "https://www.health-samurai.io/docs/aidbox/getting-started/run-aidbox-in-sandbox",
                          target: "_blank",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-left")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-img")}
                            loading="lazy"
                            width="auto"
                            height="48"
                            alt="Aidbox logo"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/633ac72418675342e0eb95ee_aidbox_logo_mini.svg"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-title")}
                            tag="div"
                          >
                            {"Getting Started"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-desc")}
                            tag="div"
                          >
                            {
                              "Step-by-step guide on how to start with the Aidbox FHIR platform"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-right")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-arrow")}
                            loading="lazy"
                            height="32"
                            width="auto"
                            alt="Right Arrow Icon\n"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Column>
                  </_Builtin.Row>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "nb-item-dropdown")}
            data-w-id="5d754a33-592a-7fef-19f3-b3781cc8ba8f"
            tag="div"
            delay={0}
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nb-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "nb-icon")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-item-text")}
                tag="div"
              >
                {"Company"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "nb-dropdown-list")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-dropdown-list-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nb-submenu-container")}
                  tag="div"
                >
                  <_Builtin.Row
                    className={_utils.cx(_styles, "nb-item-list-cols")}
                    tag="div"
                    columns={{
                      main: "3|3|3|3",
                      medium: "",
                      small: "",
                      tiny: "",
                    }}
                  >
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"company"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/company",
                        }}
                      >
                        {"About us"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/careers",
                        }}
                      >
                        {"Careers"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/news",
                        }}
                      >
                        {"News"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/company",
                        }}
                      >
                        {"Advisory Board"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/contacts",
                        }}
                      >
                        {"Contact us"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        options={{
                          href: "/partners",
                        }}
                      >
                        {"Aidbox Partner Network"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "nb-item-col-title")}
                        tag="div"
                      >
                        {"follow us"}
                      </_Builtin.Block>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://github.com/Aidbox",
                          target: "_blank",
                        }}
                      >
                        {"GitHub"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.linkedin.com/company/6653460",
                          target: "_blank",
                        }}
                      >
                        {"LinkedIn"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://twitter.com/health_samurai",
                          target: "_blank",
                        }}
                      >
                        {"Twitter"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.facebook.com/healthsamurai/",
                          target: "_blank",
                        }}
                      >
                        {"Facebook"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nb-link")}
                        rel="nofollow"
                        options={{
                          href: "https://www.crunchbase.com/organization/health-samurai",
                          target: "_blank",
                        }}
                      >
                        {"Crunchbase"}
                      </_Builtin.DropdownLink>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-banner")}
                        button={false}
                        block="inline"
                        options={{
                          href: "/fhir-api",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-left")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-title")}
                            tag="div"
                          >
                            {"FHIR API for EHRs"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-desc")}
                            tag="div"
                          >
                            {
                              "Enrich your EHR with a pluggable Aidbox FHIR® API module"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-right")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-arrow")}
                            loading="lazy"
                            height="32"
                            width="auto"
                            alt="Right Arrow Icon\n"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Column>
                    <_Builtin.Column
                      className={_utils.cx(_styles, "nb-item-list-col")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "nb-item-banner")}
                        button={false}
                        block="inline"
                        options={{
                          href: "/payers",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-left")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-title")}
                            tag="div"
                          >
                            {"FHIR API for Payers"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "nb-banner-desc")}
                            tag="div"
                          >
                            {
                              "Aidbox helps health plans to comply with the CMS Interoperability rule"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nb-banner-right")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "nb-banner-arrow")}
                            loading="lazy"
                            height="32"
                            width="auto"
                            alt="Right Arrow Icon\n"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/634d407529d4e111967296f9_rightArrow.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Column>
                  </_Builtin.Row>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.Link
            className={_utils.cx(_styles, "nb-item-link")}
            button={false}
            rel="nofollow"
            block="inline"
            options={{
              href: "/price",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nb-item-text")}
              tag="div"
            >
              {"Pricing"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nb-right-items")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nb-btn-primary")}
            button={true}
            rel="nofollow"
            id="Sign-up-Cross-Web"
            block=""
            options={{
              href: "https://aidbox.app/ui/portal#/signup",
              target: "_blank",
            }}
          >
            {"Sign up for free"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nb-navbar-mobile")}
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: true,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: true,
        }}
      >
        <_Builtin.NavbarContainer
          className={_utils.cx(_styles, "nb-container-mobile")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nb-mobile-subcontainer")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "nb-item-logo")}
              button={false}
              block="inline"
              options={{
                href: "/",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "nb-logo")}
                loading="auto"
                width="128"
                height="64"
                alt="Health Samurai Logo"
                src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/5a2ff50e669ec50001a59b5d_health-samurai.webp"
              />
            </_Builtin.Link>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "nb-menu-button")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "nb-menu-btn-icon")}
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.Block>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nb-navbar-mobile-list")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "nb-mobile-dropdown")}
              data-w-id="5d754a33-592a-7fef-19f3-b3781cc8bad1"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "nb-mobile-submenu-item-title")}
                tag="div"
              >
                <_Builtin.Icon
                  className={_utils.cx(_styles, "nb-mobile-item-icon")}
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-45")}
                  tag="div"
                >
                  {"Products"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "nb-mobile-submenu-items")}
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/fhir-server",
                  }}
                >
                  {"Aidbox FHIR Server"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/fhirbase",
                  }}
                >
                  {"Fhirbase"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/modules-1/hl7-v2-integration",
                    target: "_blank",
                  }}
                >
                  {"HL7v2 to FHIR Converter"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "https://www.health-samurai.io/c-cda-to-fhir-converter",
                    target: "_blank",
                  }}
                >
                  {"C-CDA to FHIR Converter"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/medical-form",
                  }}
                >
                  {"Aidbox Forms"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/modules-1/terminology",
                    target: "_blank",
                  }}
                >
                  {"Aidbox Terminology"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/modules-1/mdm",
                    target: "_blank",
                  }}
                >
                  {"Aidbox MPI"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/integrations/analytics",
                    target: "_blank",
                  }}
                >
                  {"Aidbox Analytics"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/security-and-access-control-1/overview",
                    target: "_blank",
                  }}
                >
                  {"Auth Server"}
                </_Builtin.DropdownLink>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "nb-mobile-dropdown")}
              data-w-id="5d754a33-592a-7fef-19f3-b3781cc8bae9"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "nb-mobile-submenu-item-title")}
                tag="div"
              >
                <_Builtin.Icon
                  className={_utils.cx(_styles, "nb-mobile-item-icon")}
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-45")}
                  tag="div"
                >
                  {"Solutions"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "nb-mobile-submenu-items")}
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/startups",
                  }}
                >
                  {"Aidbox for Startups"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/healthcare-data-platform-toolkit-aidbox",
                  }}
                >
                  {"Aidbox for Data Platforms"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/telemedicine",
                  }}
                >
                  {"Telemed development toolkit"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/ehr-toolkit",
                  }}
                >
                  {"EHR development toolkit"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/fhir-api",
                  }}
                >
                  {"ONC-certified API tools for EHRs"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/payers",
                  }}
                >
                  {"FHIR API for Payers - CMS"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "https://www.health-samurai.io/articles/aidbox-for-wearable-and-medical-devices",
                    target: "_blank",
                  }}
                >
                  {"Aidbox for IoMT vendors"}
                </_Builtin.DropdownLink>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.Link
              className={_utils.cx(_styles, "nb-item-link-mobile")}
              button={false}
              rel="nofollow"
              block="inline"
              options={{
                href: "/services",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-item-text-mobile")}
                tag="div"
              >
                {"Services"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "nb-mobile-dropdown")}
              data-w-id="5d754a33-592a-7fef-19f3-b3781cc8baf7"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "nb-mobile-submenu-item-title")}
                tag="div"
              >
                <_Builtin.Icon
                  className={_utils.cx(_styles, "nb-mobile-item-icon")}
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-45")}
                  tag="div"
                >
                  {"Docs & Resources"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "nb-mobile-submenu-items")}
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/blog",
                  }}
                >
                  {"Blog"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/downloads",
                  }}
                >
                  {"Downloads"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/casestudies",
                  }}
                >
                  {"Case Studies"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/events",
                  }}
                >
                  {"Events and Webinars"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/overview/release-notes",
                    target: "_blank",
                  }}
                >
                  {"Release Notes"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://github.com/Aidbox/Issues",
                    target: "_blank",
                  }}
                >
                  {"Aidbox Bug Tracker"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/",
                    target: "_blank",
                  }}
                >
                  {"Aidbox Docs"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://fhirbase.aidbox.app/",
                    target: "_blank",
                  }}
                >
                  {"Fhirbase Docs"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/modules-1/aidbox-forms",
                    target: "_blank",
                  }}
                >
                  {"Aidbox Forms Docs"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/modules-1/mdm",
                    target: "_blank",
                  }}
                >
                  {"Aidbox MPI Docs"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  rel="nofollow"
                  options={{
                    href: "https://docs.aidbox.app/modules-1/terminology",
                    target: "_blank",
                  }}
                >
                  {"Aidbox Terminology Docs"}
                </_Builtin.DropdownLink>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "nb-mobile-dropdown")}
              data-w-id="5d754a33-592a-7fef-19f3-b3781cc8bb15"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "nb-mobile-submenu-item-title")}
                tag="div"
              >
                <_Builtin.Icon
                  className={_utils.cx(_styles, "nb-mobile-item-icon")}
                  widget={{
                    type: "icon",
                    icon: "dropdown-toggle",
                  }}
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-45")}
                  tag="div"
                >
                  {"Company"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "nb-mobile-submenu-items")}
                tag="nav"
              >
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/company",
                  }}
                >
                  {"About Us"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/careers",
                  }}
                >
                  {"Careers"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/news",
                  }}
                >
                  {"News"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/company",
                  }}
                >
                  {"Advisory Board"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/contacts",
                  }}
                >
                  {"Contact Us"}
                </_Builtin.DropdownLink>
                <_Builtin.DropdownLink
                  className={_utils.cx(_styles, "nb-mobile-submenu-item")}
                  options={{
                    href: "/partners",
                  }}
                >
                  {"Aidbox Partner Network"}
                </_Builtin.DropdownLink>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.Link
              className={_utils.cx(_styles, "nb-item-link-mobile")}
              button={false}
              rel="nofollow"
              block="inline"
              options={{
                href: "/price",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nb-item-text-mobile")}
                tag="div"
              >
                {"Pricing"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.NavbarMenu>
        </_Builtin.NavbarContainer>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
