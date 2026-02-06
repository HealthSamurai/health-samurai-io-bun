"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { HsNewButton } from "./HsNewButton";
import * as _utils from "./utils";
import _styles from "./Formbox.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-545":{"id":"e-545","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-546"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".span-red","originalId":"65fbff8131cf9a313658d5fb|d7b61e9a-b530-eff7-b3ad-4a9373280c90","appliesTo":"CLASS"},"targets":[{"selector":".span-red","originalId":"65fbff8131cf9a313658d5fb|d7b61e9a-b530-eff7-b3ad-4a9373280c90","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1728994825498},"e-555":{"id":"e-555","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-556"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-ico","originalId":"674338b83bbf3144c0fef170|046a4b1d-e990-34d6-b23f-988bc275edc8","appliesTo":"CLASS"},"targets":[{"selector":".button-ico","originalId":"674338b83bbf3144c0fef170|046a4b1d-e990-34d6-b23f-988bc275edc8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734363964150},"e-556":{"id":"e-556","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-555"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-ico","originalId":"674338b83bbf3144c0fef170|046a4b1d-e990-34d6-b23f-988bc275edc8","appliesTo":"CLASS"},"targets":[{"selector":".button-ico","originalId":"674338b83bbf3144c0fef170|046a4b1d-e990-34d6-b23f-988bc275edc8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734363964152}},"actionLists":{"a-90":{"id":"a-90","title":"open follow","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__modal","selectorGuids":["ed91e5a3-a313-4d93-bdac-14f1f3878ef2"]},"value":"none"}},{"id":"a-90-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__f","selectorGuids":["b5f0b8f3-6fe8-4efc-8fb9-70ec1d2d1dcf"]},"value":"block"}},{"id":"a-90-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__file-download","selectorGuids":["f0ddf38b-6b75-eabd-2c48-c6344e92d9be"]},"value":"none"}}]},{"actionItems":[{"id":"a-90-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".follow__modal","selectorGuids":["ed91e5a3-a313-4d93-bdac-14f1f3878ef2"]},"value":"flex"}},{"id":"a-90-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":10000,"easing":"","duration":0,"target":{"selector":".follow__file-download","selectorGuids":["f0ddf38b-6b75-eabd-2c48-c6344e92d9be"]},"value":"block"}},{"id":"a-90-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":10000,"easing":"","duration":0,"target":{"selector":".follow__f","selectorGuids":["b5f0b8f3-6fe8-4efc-8fb9-70ec1d2d1dcf"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1728925297766},"a-93":{"id":"a-93","title":"read more","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outCubic","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-16.less","selectorGuids":["a70cc13e-7959-d7db-2b57-53201cb255f8","d29cfe58-e3b4-ef21-1a73-3d78ea21e32f"]},"value":"none"}},{"id":"a-93-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"selector":".hide-content","selectorGuids":["5ce0cc5d-2523-beda-e12b-5e340a6b0678"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-93-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outCubic","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-16.less","selectorGuids":["a70cc13e-7959-d7db-2b57-53201cb255f8","d29cfe58-e3b4-ef21-1a73-3d78ea21e32f"]},"value":"block"}},{"id":"a-93-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-custom-5","selectorGuids":["e7f97b1b-cb8b-c571-53a8-e68a2ee4f10c"]},"yValue":0,"zValue":45,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}},{"id":"a-93-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outCubic","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-16.read","selectorGuids":["a70cc13e-7959-d7db-2b57-53201cb255f8","3ff03359-17a2-2921-eac7-4eba8a8ff0da"]},"value":"none"}},{"id":"a-93-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"selector":".hide-content","selectorGuids":["5ce0cc5d-2523-beda-e12b-5e340a6b0678"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1734364025784},"a-94":{"id":"a-94","title":"less close","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outCubic","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-16.less","selectorGuids":["a70cc13e-7959-d7db-2b57-53201cb255f8","d29cfe58-e3b4-ef21-1a73-3d78ea21e32f"]},"value":"none"}},{"id":"a-94-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-embed-custom-5","selectorGuids":["e7f97b1b-cb8b-c571-53a8-e68a2ee4f10c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-94-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-txt-16.read","selectorGuids":["a70cc13e-7959-d7db-2b57-53201cb255f8","3ff03359-17a2-2921-eac7-4eba8a8ff0da"]},"value":"block"}},{"id":"a-94-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outCubic","duration":0,"target":{"selector":".hide-content","selectorGuids":["5ce0cc5d-2523-beda-e12b-5e340a6b0678"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734364025784}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Formbox({
  as: _Component = _Builtin.Block,
  title = "Medical Forms for Healthcare Workflows",
  title2 = "Trusted by digital healthcare providersacross the globe",
  title3 = "Embedded Form Builder",

  link = {
    href: "#",
  },

  link2 = {
    href: "#",
  },

  hsNewButtonVariant = null,
  hsNewButtonTxtButton = "Try FORMS for free",

  hsNewButtonHsNewButtonLink = {
    href: "https://form-builder.aidbox.app/?_ga=2.146381684.199355617.1730113119-901415260.1716823622&_gl=1*l3w2uk*_gcl_au*NzE2NTk0MDU4LjE3MjQ5MzMzNjk.*_ga*OTAxNDE1MjYwLjE3MTY4MjM2MjI.*_ga_G1Y6RVRQGD*MTczMDIwMTA1Mi4xNDguMS4xNzMwMjAxMTE0LjAuMC45MzEyNjA3NjQ",
    target: "_blank",
  },

  hsNewButton2Variant = null,
  hsNewButton2TxtButton = "Book a demo",

  hsNewButton2HsNewButtonLink = {
    href: "#f3d59958-1987-9ded-3b94-8258af34b894",
  },

  hsNewButton3Variant = null,
  hsNewButton3TxtButton = "Try it out",

  hsNewButton3HsNewButtonLink = {
    href: "https://form-builder.aidbox.app/?_ga=2.146381684.199355617.1730113119-901415260.1716823622&_gl=1*l3w2uk*_gcl_au*NzE2NTk0MDU4LjE3MjQ5MzMzNjk.*_ga*OTAxNDE1MjYwLjE3MTY4MjM2MjI.*_ga_G1Y6RVRQGD*MTczMDIwMTA1Mi4xNDguMS4xNzMwMjAxMTE0LjAuMC45MzEyNjA3NjQ",
    target: "_blank",
  },

  hsNewButton4Variant = null,
  hsNewButton4TxtButton = "Try it out",

  hsNewButton4HsNewButtonLink = {
    href: "https://form-builder.aidbox.app/?_ga=2.146381684.199355617.1730113119-901415260.1716823622&_gl=1*l3w2uk*_gcl_au*NzE2NTk0MDU4LjE3MjQ5MzMzNjk.*_ga*OTAxNDE1MjYwLjE3MTY4MjM2MjI.*_ga_G1Y6RVRQGD*MTczMDIwMTA1Mi4xNDguMS4xNzMwMjAxMTE0LjAuMC45MzEyNjA3NjQ",
    target: "_blank",
  },

  hsNewButton5Variant = null,
  hsNewButton5TxtButton = "Try it out",

  hsNewButton5HsNewButtonLink = {
    href: "https://form-builder.aidbox.app/?_ga=2.146381684.199355617.1730113119-901415260.1716823622&_gl=1*l3w2uk*_gcl_au*NzE2NTk0MDU4LjE3MjQ5MzMzNjk.*_ga*OTAxNDE1MjYwLjE3MTY4MjM2MjI.*_ga_G1Y6RVRQGD*MTczMDIwMTA1Mi4xNDguMS4xNzMwMjAxMTE0LjAuMC45MzEyNjA3NjQ",
    target: "_blank",
  },

  hsNewButton6Variant = null,
  hsNewButton6TxtButton = "Try it out",

  hsNewButton6HsNewButtonLink = {
    href: "https://form-builder.aidbox.app/?_ga=2.146381684.199355617.1730113119-901415260.1716823622&_gl=1*l3w2uk*_gcl_au*NzE2NTk0MDU4LjE3MjQ5MzMzNjk.*_ga*OTAxNDE1MjYwLjE3MTY4MjM2MjI.*_ga_G1Y6RVRQGD*MTczMDIwMTA1Mi4xNDguMS4xNzMwMjAxMTE0LjAuMC45MzEyNjA3NjQ",
    target: "_blank",
  },

  hsNewButton7Variant = null,
  hsNewButton7TxtButton = "Try it out",

  hsNewButton7HsNewButtonLink = {
    href: "https://form-builder.aidbox.app/?_ga=2.146381684.199355617.1730113119-901415260.1716823622&_gl=1*l3w2uk*_gcl_au*NzE2NTk0MDU4LjE3MjQ5MzMzNjk.*_ga*OTAxNDE1MjYwLjE3MTY4MjM2MjI.*_ga_G1Y6RVRQGD*MTczMDIwMTA1Mi4xNDguMS4xNzMwMjAxMTE0LjAuMC45MzEyNjA3NjQ",
    target: "_blank",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <_Builtin.Section
        className={_utils.cx(_styles, "hero__section-forms")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "padding")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "gap-32-24")}
              id={_utils.cx(
                _styles,
                "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78ae-064c78aa"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "heading-wrp")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78af-064c78aa"
                )}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "h1-style-56")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78b0-064c78aa"
                  )}
                  tag="h1"
                >
                  {title}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "_3-col", "grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "hero-col", "col")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78b3-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "body__txt-16",
                      "transparent-65"
                    )}
                  >
                    {
                      "Design, manage, and embed intelligent forms with ease. Fully customizable and compliant with healthcare standards."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hero__btn-wrp")}
                    tag="div"
                  >
                    <HsNewButton
                      txtButton={hsNewButtonTxtButton}
                      variant={hsNewButtonVariant}
                      hsNewButtonLink={hsNewButtonHsNewButtonLink}
                    />
                    <HsNewButton
                      variant={hsNewButton2Variant}
                      txtButton={hsNewButton2TxtButton}
                      hsNewButtonLink={hsNewButton2HsNewButtonLink}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "hero__img-forms", "col")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78bb-064c78aa"
                  )}
                  tag="div"
                  data-fancybox="gallery"
                  data-src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F67641eed45335704ef37e683_No-Code%20Form%20Builder%EF%BC%9A%20Easy%2C%20Ready%20Templates%2C%20PDF%20to%20Digital-transcode.mp4"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "plyr_embed")}
                    value="%3Cvideo%20id%3D%22myVideo%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20class%3D%22plyr_video%22%20playsinline%20loop%20autoplay%20muted%20data-poster%3E%0A%20%20%3Csource%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F57441aa5da71fdf07a0a2e19%252F67641eed45335704ef37e683_No-Code%2520Form%2520Builder%25EF%25BC%259A%2520Easy%252C%2520Ready%2520Templates%252C%2520PDF%2520to%2520Digital-transcode.mp4%22%20type%3D%22video%2Fmp4%22%3E%0A%3C%2Fvideo%3E"
                  />
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "video-frame-popup")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "vedio-embed__wrp")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "code-embed-8")}
                  value="%3Ciframe%20class%3D%22iframe-fluid%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FScMzIvxBSi4%3Fenablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DScMzIvxBSi4%26modestbranding%3D0%26iv_load_policy%3D3%26controls%3D0%22%20title%3D%22YouTube%20video%20player%22%20frameborder%3D%220%22%20allow%3D%22accelerometer%3B%20autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20gyroscope%3B%20picture-in-picture%22%20allowfullscreen%3E%3C%2Fiframe%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "video-block-hver")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "trusted__section")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "padding")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "gap-32-24")}
              id={_utils.cx(
                _styles,
                "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78c7-064c78aa"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "trusted-block", "grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "trusted-header-wrp", "col")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78c9-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "h3")}
                    tag="h3"
                  >
                    {title2}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "digital-logo", "col")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78cc-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="244.5"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67477312c1d408ef9390800d_Forms-clients---PKB.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/674773127592d23bf6254273_Forms-clients---Bayshore.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67477312dd6a1d8846f41685_Forms-clients---akinox.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67477312c1d408ef93907f7d_Forms-clients---%204%20sundata%201.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67477312931359a0780510b5_Forms-clients---myriad.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6747731259939d2b5747456b_Forms-clients---duodecim.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "digital__logo-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-img")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67477312f50e8a815b450ce5_Forms-clients---%207%20amwell%201.webp"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "special__section")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "padding")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "special__row", "grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "special__content", "col")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78df-064c78aa"
                )}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "h2-style-42")}
                >
                  {"Tailored for Digital Health Professionals"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "special__p", "max-w")}
                >
                  {
                    "Perfect for healthcare providers, digital health vendors, startups, and clinical researchers looking to streamline data collection."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "gap-64-32", "top-48")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "special__row")}
                tag="div"
              >
                <_Builtin.NotSupported _atom="LightboxWrapper" />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "special__img-content",
                    "pl-32"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78e8-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "h3-style-26",
                      "special__text"
                    )}
                  >
                    {"No-code Form Creation"}
                  </_Builtin.Paragraph>
                  <_Builtin.RichText
                    className={_utils.cx(
                      _styles,
                      "special__text",
                      "transparent-65"
                    )}
                    tag="div"
                    slot=""
                  >
                    <_Builtin.Paragraph>
                      {
                        "Drag-and-drop Medical Form Builder interface to create intelligent medical forms."
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.List tag="ul" unstyled={false}>
                      <_Builtin.ListItem>
                        {"Real-time form view with testing capabilities."}
                      </_Builtin.ListItem>
                      <_Builtin.ListItem>
                        {"Create forms from 3000+ ready-made templates."}
                      </_Builtin.ListItem>
                      <_Builtin.ListItem>
                        {"Generate digital forms from PDF files."}
                      </_Builtin.ListItem>
                    </_Builtin.List>
                  </_Builtin.RichText>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "special__row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "special__img-content",
                    "pr-32"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c78f6-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "h3-style-26",
                      "special__text"
                    )}
                  >
                    {"FHIR-Compliant Data"}
                  </_Builtin.Paragraph>
                  <_Builtin.RichText
                    className={_utils.cx(
                      _styles,
                      "special__text",
                      "col",
                      "_448"
                    )}
                    tag="div"
                    slot=""
                  >
                    <_Builtin.Paragraph>
                      {
                        "Ensure all captured data is structured and standard-based for easy integration"
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.List tag="ul" unstyled={false}>
                      <_Builtin.ListItem>
                        {"Data is collected and stored according to FHIR SDC "}
                        <br />
                        {"standard."}
                      </_Builtin.ListItem>
                      <_Builtin.ListItem>
                        {
                          "FHIR API enables data exchange with third-party apps."
                        }
                      </_Builtin.ListItem>
                    </_Builtin.List>
                  </_Builtin.RichText>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "special__img-wrp",
                    "no-shadow"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7903-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "special__row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "special__img-wrp")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7907-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "special__img-content",
                    "pl-32"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c790a-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "h3-style-26",
                      "special__text"
                    )}
                  >
                    {"Seamless Forms Integration"}
                  </_Builtin.Paragraph>
                  <_Builtin.RichText
                    className={_utils.cx(_styles, "special__text", "mw")}
                    tag="div"
                    slot=""
                  >
                    <_Builtin.Paragraph>
                      {
                        "Embed forms into apps, portals, or EHR systems using iFrames or web components."
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Paragraph>
                      {
                        "This integration guarantees user experience consistency and allows forms to be easily accessible where needed."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.RichText>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "special__row")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "special__img-content",
                    "pr-32"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7913-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "h3-style-26",
                      "special__text"
                    )}
                    tag="h2"
                  >
                    {title3}
                  </_Builtin.Heading>
                  <_Builtin.RichText
                    className={_utils.cx(_styles, "special__text")}
                    tag="div"
                    slot=""
                  >
                    <_Builtin.Paragraph>
                      {
                        "Provide healthcare professionals with a form builder for creating and editing forms in real-time directly within your application. "
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Paragraph>
                      {
                        "Embedding the Form Builder eliminates the need for developer involvement, enabling rapid form updates and customization on demand."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.RichText>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "special__img-wrp")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c791b-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "partner__section-2")}
        tag="section"
        grid={{
          type: "section",
        }}
        loading="lazy"
        id="intro2"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-global")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "medium__container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "roll", "gradient")}
              tag="div"
            >
              <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%40keyframes%20scroll%20%7B%0A%20%20from%20%7B%0A%20%20%20%20transform%3A%20translateX(0)%3B%0A%20%20%7D%0A%20%20to%20%7B%0A%20%20%20%20transform%3A%20translateX(calc(-100%25%20-%201rem))%3B%0A%20%20%7D%0A%7D%0A%0A.scroll%20%7B%0A%20%20animation%3A%20scroll%2040s%20linear%20infinite%3B%0A%7D%0A%0A.reverse%20%7B%0A%20%20animation-direction%3A%20reverse%3B%0A%7D%0A%3C%2Fstyle%3E" />
              <_Builtin.Block
                className={_utils.cx(_styles, "roll__wrp", "scroll")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9183cbed907cb67cce03_logo12.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="110.5"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/682360deced486a15d259a50_Client%20Logo6.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-159")}
                    width="80"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/681220a90ec4a5ece4e13a9c_Bupa2.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e918358ed3a1dac26c220_logo11.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e918293ce421f3e03919e_logo09.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9182cadceb89ec18dfc3_logo10.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fb3e170118d96aafa_logo07.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fe610f1918530f585_logo08.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f6d7afde310aee2b9_logo05.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fd7a91fd1635f1deb_logo04.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917feae91773d2d5d45f_logo06.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f6b877edc34c44c86_logo02.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f64f5e7b49595df11_logo01.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f4eeff79f8be38e8e_logo03.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "log-150")}
                    width="254"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68e3da6d6bb804a0e39fba1d_novellia.png"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "roll__wrp", "scroll")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9183cbed907cb67cce03_logo12.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="110.5"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/682360deced486a15d259a50_Client%20Logo6.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-159")}
                    width="80"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/681220a90ec4a5ece4e13a9c_Bupa2.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e918358ed3a1dac26c220_logo11.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e918293ce421f3e03919e_logo09.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e9182cadceb89ec18dfc3_logo10.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fb3e170118d96aafa_logo07.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fe610f1918530f585_logo08.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f6d7afde310aee2b9_logo05.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917fd7a91fd1635f1deb_logo04.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917feae91773d2d5d45f_logo06.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f6b877edc34c44c86_logo02.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f64f5e7b49595df11_logo01.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/685e917f4eeff79f8be38e8e_logo03.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "roll__item")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "log-150")}
                    width="254"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68e3da6d6bb804a0e39fba1d_novellia.png"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "testimonial__section")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding", "padding-24")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "_3-col-grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "special__content")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7965-064c78aa"
                )}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "h2-style-42")}
                >
                  {"Testimonials"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "special__p", "hide")}
                >
                  {
                    "Leading companies rely on Aidbox as a crucial component of their EHR systems. With a superior FHIR backend and Highly adaptable modules, Aidbox guarantees data security, interoperability, and compliance with regulations such as HIPA and GDPR."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "slider-main_component",
                "margin-top-40"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "_3-col-grid", "margin-top-32")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "swiper", "apperance-slider")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c796c-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "swiper-wrapper",
                      "apperance-slider"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "swiper-slide",
                        "apperance-slider"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_3-col-grid", "gap-24")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c796f-064c78aa"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "testimonial")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7970-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "test__txt")}
                          >
                            {
                              "Aidbox Forms made it possible for us to extend our EHR capabilities and enable additional workflows through customizable forms. The platform’s flexibility and FHIR compliance makes it easy to adapt forms to our specific needs, whether for data collection or process automation. Their product and support teams are always available, helping us resolve even the most complex challenges quickly and efficiently."
                            }
                          </_Builtin.Paragraph>
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "test-corner")}
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2025%2025%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M0.874512%200.65625L24.8745%200.65625L0.874512%2024.6562L0.874512%200.65625Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "slider__content",
                            "horizont"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7974-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "testimonial-ava")}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt="User of Medical forms"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/68dbe2683100ce1b15cf4c98_Cristian%20Ruiz%20P%C3%A9rez%2C%20Head%20of%20Clinical%20Systems%2C%20Bupa%20Chile.png"
                          />
                          <_Builtin.Paragraph
                            className={_utils.cx(_styles, "tester")}
                          >
                            {"Cristian Ruiz"}
                          </_Builtin.Paragraph>
                          <_Builtin.RichText
                            className={_utils.cx(_styles, "testimonial-txt")}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Paragraph>
                              {"Head of Clinical Systems at Bupa"}
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "slider-control-arrows",
                    "mtop",
                    "hide"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c797b-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "slider-arrow-apparence",
                      "reverse",
                      "swiper-prev",
                      "gray-color"
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M25.3027 34.772C24.4743 34.772 23.8027 35.4435 23.8027 36.272C23.8027 37.1004 24.4743 37.772 25.3027 37.772V34.772ZM47.7569 37.3326C48.3427 36.7468 48.3427 35.7971 47.7569 35.2113L38.211 25.6654C37.6252 25.0796 36.6755 25.0796 36.0897 25.6654C35.5039 26.2512 35.5039 27.2009 36.0897 27.7867L44.575 36.272L36.0897 44.7573C35.5039 45.343 35.5039 46.2928 36.0897 46.8786C36.6755 47.4644 37.6252 47.4644 38.211 46.8786L47.7569 37.3326ZM25.3027 37.772H46.6963V34.772H25.3027V37.772Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "slider-arrow-apparence",
                      "swiper-next",
                      "gray-color"
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M25.3027 34.772C24.4743 34.772 23.8027 35.4435 23.8027 36.272C23.8027 37.1004 24.4743 37.772 25.3027 37.772V34.772ZM47.7569 37.3326C48.3427 36.7468 48.3427 35.7971 47.7569 35.2113L38.211 25.6654C37.6252 25.0796 36.6755 25.0796 36.0897 25.6654C35.5039 26.2512 35.5039 27.2009 36.0897 27.7867L44.575 36.272L36.0897 44.7573C35.5039 45.343 35.5039 46.2928 36.0897 46.8786C36.6755 47.4644 37.6252 47.4644 38.211 46.8786L47.7569 37.3326ZM25.3027 37.772H46.6963V34.772H25.3027V37.772Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "swiper-bullet-wrapper",
                    "hide-element"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7980-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "swiper-bullet", "is-active")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "swiper-bullet")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "apperance__section")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "padding")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "special__row", "grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "gap-24", "align-left", "col")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7987-064c78aa"
                )}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "h2-style-42")}
                >
                  {"Appearance & Capabilities"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "special__p")}
                >
                  {
                    "With Aidbox UI Builder, create versatile forms that adapt to various user scenarios and customize their appearance to fit specific needs, from dynamic forms to multilingual support."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "slider-main_component",
                "margin-top-40"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "_3-col-grid", "margin-top-32")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "swiper", "apperance-slider")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c798e-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "swiper-wrapper",
                      "apperance-slider"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "swiper-slide",
                        "apperance-slider"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_3-col-grid", "sliders")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7991-064c78aa"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "slide-video-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7992-064c78aa"
                          )}
                          tag="div"
                          data-fancybox="gallery2"
                          data-src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F676dc061fc9cc526dce41ec8_PHQ2%E2%A7%B8PHQ9%20Depression%20Form%20%E2%80%93%20Intelligent%2C%20Adaptive%20Design-transcode.mp4"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "img-100",
                              "mobile-img"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt="Smart Dynamic Medical Forms"
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/6771584f8b412975e10c9ff8_IMAGE%202024-12-29%2016%3A10%3A16.jpg"
                          />
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "video-bg")}
                            value="%3Cvideo%20id%3D%22myVideo%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20class%3D%22plyr_video%22%20playsinline%20loop%20autoplay%20muted%20data-poster%3E%0A%20%20%3Csource%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F57441aa5da71fdf07a0a2e19%252F67641eed45335704ef37e683_No-Code%2520Form%2520Builder%25EF%25BC%259A%2520Easy%252C%2520Ready%2520Templates%252C%2520PDF%2520to%2520Digital-transcode.mp4%22%20type%3D%22video%2Fmp4%22%3E%0A%3C%2Fvideo%3E"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "overlay")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "overlay-play")}
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2074%2075%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M37%200.949219C56.9878%200.949219%2073.25%2017.2114%2073.25%2037.1992C73.25%2057.187%2056.9878%2073.4492%2037%2073.4492C17.0122%2073.4492%200.75%2057.187%200.75%2037.1992C0.75%2017.2114%2017.0122%200.949219%2037%200.949219Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M28.9062%2025.1504C28.9062%2024.8652%2029.082%2024.7207%2029.1875%2024.6582C29.25%2024.623%2029.3477%2024.5801%2029.4727%2024.5801C29.5586%2024.5801%2029.6524%2024.5996%2029.7539%2024.6582L50.6249%2036.7092C50.871%2036.8498%2050.9062%2037.0764%2050.9062%2037.1975C50.9062%2037.3186%2050.871%2037.5451%2050.6249%2037.6858L29.7539%2049.7368C29.5078%2049.8774%2029.293%2049.7993%2029.1914%2049.7368C29.0859%2049.6743%2028.9102%2049.5336%2028.9102%2049.2485V25.1505L28.9062%2025.1504Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "slider__content",
                            "top-margin-content"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7997-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "h3-style-26",
                              "special__text"
                            )}
                          >
                            {"Smart Dynamic Forms"}
                          </_Builtin.Paragraph>
                          <_Builtin.RichText
                            className={_utils.cx(_styles, "special__text")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c799a-064c78aa"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Paragraph>
                              {
                                "Design forms that reduce cognitive load by displaying only the fields that require attention. Fields appear as needed, based on user input and set conditions."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                          <_Builtin.Block
                            id={_utils.cx(
                              _styles,
                              "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c799d-064c78aa"
                            )}
                            tag="div"
                          >
                            <HsNewButton
                              variant={hsNewButton3Variant}
                              txtButton={hsNewButton3TxtButton}
                              hsNewButtonLink={hsNewButton3HsNewButtonLink}
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "swiper-slide",
                        "apperance-slider"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_3-col-grid", "sliders")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79a1-064c78aa"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "slide-video-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79a2-064c78aa"
                          )}
                          tag="div"
                          data-fancybox="gallery3"
                          data-src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F676dc14afaf1dcd4123390ae_Multi-Page%20Forms%20or%20Forms%20with%20Navigation%20Tab-transcode.mp4"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "img-100",
                              "mobile-img"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67715abcb76ee24f111c2d4f_IMAGE%202024-12-29%2016%3A20%3A37.jpg"
                          />
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "video-bg")}
                            value="%3Cvideo%20id%3D%22myVideo%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20class%3D%22plyr_video%22%20playsinline%20loop%20autoplay%20muted%20data-poster%3E%0A%20%20%3Csource%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F57441aa5da71fdf07a0a2e19%252F67641eed45335704ef37e683_No-Code%2520Form%2520Builder%25EF%25BC%259A%2520Easy%252C%2520Ready%2520Templates%252C%2520PDF%2520to%2520Digital-transcode.mp4%22%20type%3D%22video%2Fmp4%22%3E%0A%3C%2Fvideo%3E"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "overlay")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "overlay-play")}
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2074%2075%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M37%200.949219C56.9878%200.949219%2073.25%2017.2114%2073.25%2037.1992C73.25%2057.187%2056.9878%2073.4492%2037%2073.4492C17.0122%2073.4492%200.75%2057.187%200.75%2037.1992C0.75%2017.2114%2017.0122%200.949219%2037%200.949219Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M28.9062%2025.1504C28.9062%2024.8652%2029.082%2024.7207%2029.1875%2024.6582C29.25%2024.623%2029.3477%2024.5801%2029.4727%2024.5801C29.5586%2024.5801%2029.6524%2024.5996%2029.7539%2024.6582L50.6249%2036.7092C50.871%2036.8498%2050.9062%2037.0764%2050.9062%2037.1975C50.9062%2037.3186%2050.871%2037.5451%2050.6249%2037.6858L29.7539%2049.7368C29.5078%2049.8774%2029.293%2049.7993%2029.1914%2049.7368C29.0859%2049.6743%2028.9102%2049.5336%2028.9102%2049.2485V25.1505L28.9062%2025.1504Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "slider__content",
                            "top-margin-content"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79a7-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.RichText
                            className={_utils.cx(_styles, "special__text")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79a8-064c78aa"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              <_Builtin.Strong>
                                {
                                  "Multi-Page Forms or Forms with Navigation Tab"
                                }
                              </_Builtin.Strong>
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "Easily organize large forms, like the Adult Assessment Form, into multi-page layouts or add a navigation tab for smooth navigation. This feature allows users to enter information step-by-step or quickly switch between sections, reducing overwhelm and enhancing usability."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                          <HsNewButton
                            variant={hsNewButton4Variant}
                            txtButton={hsNewButton4TxtButton}
                            hsNewButtonLink={hsNewButton4HsNewButtonLink}
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "swiper-slide",
                        "apperance-slider"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_3-col-grid", "sliders")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79b1-064c78aa"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "slide-video-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79b2-064c78aa"
                          )}
                          tag="div"
                          data-fancybox="gallery4"
                          data-src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F676dc285edb3aed818b8a8c0_Enhanced%20Forms%20with%20Annotation%20Pad%20%26%20Speech%20to%20Text-transcode.mp4"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "img-100",
                              "mobile-img"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67715ae2e79df71a90a45018_IMAGE%202024-12-29%2016%3A21%3A16.jpg"
                          />
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "video-bg")}
                            value="%3Cvideo%20id%3D%22myVideo%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20class%3D%22plyr_video%22%20playsinline%20loop%20autoplay%20muted%20data-poster%3E%0A%20%20%3Csource%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F57441aa5da71fdf07a0a2e19%252F67641eed45335704ef37e683_No-Code%2520Form%2520Builder%25EF%25BC%259A%2520Easy%252C%2520Ready%2520Templates%252C%2520PDF%2520to%2520Digital-transcode.mp4%22%20type%3D%22video%2Fmp4%22%3E%0A%3C%2Fvideo%3E"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "overlay")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "overlay-play")}
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2074%2075%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M37%200.949219C56.9878%200.949219%2073.25%2017.2114%2073.25%2037.1992C73.25%2057.187%2056.9878%2073.4492%2037%2073.4492C17.0122%2073.4492%200.75%2057.187%200.75%2037.1992C0.75%2017.2114%2017.0122%200.949219%2037%200.949219Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M28.9062%2025.1504C28.9062%2024.8652%2029.082%2024.7207%2029.1875%2024.6582C29.25%2024.623%2029.3477%2024.5801%2029.4727%2024.5801C29.5586%2024.5801%2029.6524%2024.5996%2029.7539%2024.6582L50.6249%2036.7092C50.871%2036.8498%2050.9062%2037.0764%2050.9062%2037.1975C50.9062%2037.3186%2050.871%2037.5451%2050.6249%2037.6858L29.7539%2049.7368C29.5078%2049.8774%2029.293%2049.7993%2029.1914%2049.7368C29.0859%2049.6743%2028.9102%2049.5336%2028.9102%2049.2485V25.1505L28.9062%2025.1504Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "slider__content",
                            "top-margin-content"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79b7-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.RichText
                            className={_utils.cx(_styles, "special__text")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79b8-064c78aa"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              {
                                "Enhanced Forms with Annotation Pad & Speech-to-Text"
                              }
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "Add advanced input options to your forms. The Annotation Pad lets clinicians mark images, like indicating wound locations, while Speech-to-Text enables quick, hands-free data entry. These features streamline data collection, improving accuracy and efficiency."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                          <HsNewButton
                            variant={hsNewButton5Variant}
                            txtButton={hsNewButton5TxtButton}
                            hsNewButtonLink={hsNewButton5HsNewButtonLink}
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "swiper-slide",
                        "apperance-slider"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_3-col-grid", "sliders")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79c0-064c78aa"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "slide-video-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79c1-064c78aa"
                          )}
                          tag="div"
                          data-fancybox="gallery5"
                          data-src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F676dc33fdf366a17dffeb61c_Personalized%20form%20styling-transcode.mp4"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "img-100",
                              "mobile-img"
                            )}
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67715afb2ad8d02fcdbb1d3e_IMAGE%202024-12-29%2016%3A21%3A41.jpg"
                          />
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "video-bg")}
                            value="%3Cvideo%20id%3D%22myVideo%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20class%3D%22plyr_video%22%20playsinline%20loop%20autoplay%20muted%20data-poster%3E%0A%20%20%3Csource%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F57441aa5da71fdf07a0a2e19%252F67641eed45335704ef37e683_No-Code%2520Form%2520Builder%25EF%25BC%259A%2520Easy%252C%2520Ready%2520Templates%252C%2520PDF%2520to%2520Digital-transcode.mp4%22%20type%3D%22video%2Fmp4%22%3E%0A%3C%2Fvideo%3E"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "overlay")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "overlay-play")}
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2074%2075%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M37%200.949219C56.9878%200.949219%2073.25%2017.2114%2073.25%2037.1992C73.25%2057.187%2056.9878%2073.4492%2037%2073.4492C17.0122%2073.4492%200.75%2057.187%200.75%2037.1992C0.75%2017.2114%2017.0122%200.949219%2037%200.949219Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M28.9062%2025.1504C28.9062%2024.8652%2029.082%2024.7207%2029.1875%2024.6582C29.25%2024.623%2029.3477%2024.5801%2029.4727%2024.5801C29.5586%2024.5801%2029.6524%2024.5996%2029.7539%2024.6582L50.6249%2036.7092C50.871%2036.8498%2050.9062%2037.0764%2050.9062%2037.1975C50.9062%2037.3186%2050.871%2037.5451%2050.6249%2037.6858L29.7539%2049.7368C29.5078%2049.8774%2029.293%2049.7993%2029.1914%2049.7368C29.0859%2049.6743%2028.9102%2049.5336%2028.9102%2049.2485V25.1505L28.9062%2025.1504Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "slider__content",
                            "top-margin-content"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79c6-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.RichText
                            className={_utils.cx(_styles, "special__text")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79c7-064c78aa"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              {"Forms with Personalized Styling"}
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "Customize forms with pre-designed themes or create unique styles by adjusting fonts, color schemes, and branding elements. Apply the same theme across multiple forms or use different themes for each client without duplicating forms."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                          <HsNewButton
                            variant={hsNewButton6Variant}
                            txtButton={hsNewButton6TxtButton}
                            hsNewButtonLink={hsNewButton6HsNewButtonLink}
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "swiper-slide",
                        "apperance-slider"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "_3-col-grid", "sliders")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79cf-064c78aa"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "slide-video-wrp")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79d0-064c78aa"
                          )}
                          tag="div"
                          data-fancybox="gallery6"
                          data-src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19%2F676dbdcdfaf1dcd4123120f3_Multilingual%20Support%20for%20Forms%20and%20Form%20Builder-transcode.mp4"
                        >
                          <_Builtin.Image
                            className={_utils.cx(
                              _styles,
                              "img-100",
                              "mobile-img"
                            )}
                            width="1280"
                            height="712"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/67715b15715ad11e8e77bb4f_IMAGE%202024-12-29%2016%3A22%3A08.jpg"
                          />
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "video-bg")}
                            value="%3Cvideo%20id%3D%22myVideo%22%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20class%3D%22plyr_video%22%20playsinline%20loop%20autoplay%20muted%20data-poster%3E%0A%20%20%3Csource%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F57441aa5da71fdf07a0a2e19%252F67641eed45335704ef37e683_No-Code%2520Form%2520Builder%25EF%25BC%259A%2520Easy%252C%2520Ready%2520Templates%252C%2520PDF%2520to%2520Digital-transcode.mp4%22%20type%3D%22video%2Fmp4%22%3E%0A%3C%2Fvideo%3E"
                          />
                          <_Builtin.Block
                            className={_utils.cx(_styles, "overlay")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "overlay-play")}
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2074%2075%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M37%200.949219C56.9878%200.949219%2073.25%2017.2114%2073.25%2037.1992C73.25%2057.187%2056.9878%2073.4492%2037%2073.4492C17.0122%2073.4492%200.75%2057.187%200.75%2037.1992C0.75%2017.2114%2017.0122%200.949219%2037%200.949219Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M28.9062%2025.1504C28.9062%2024.8652%2029.082%2024.7207%2029.1875%2024.6582C29.25%2024.623%2029.3477%2024.5801%2029.4727%2024.5801C29.5586%2024.5801%2029.6524%2024.5996%2029.7539%2024.6582L50.6249%2036.7092C50.871%2036.8498%2050.9062%2037.0764%2050.9062%2037.1975C50.9062%2037.3186%2050.871%2037.5451%2050.6249%2037.6858L29.7539%2049.7368C29.5078%2049.8774%2029.293%2049.7993%2029.1914%2049.7368C29.0859%2049.6743%2028.9102%2049.5336%2028.9102%2049.2485V25.1505L28.9062%2025.1504Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "slider__content",
                            "top-margin-content"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79d5-064c78aa"
                          )}
                          tag="div"
                        >
                          <_Builtin.RichText
                            className={_utils.cx(_styles, "special__text")}
                            id={_utils.cx(
                              _styles,
                              "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79d6-064c78aa"
                            )}
                            tag="div"
                            slot=""
                          >
                            <_Builtin.Heading tag="h3">
                              {"Multilingual Forms"}
                            </_Builtin.Heading>
                            <_Builtin.Paragraph>
                              {
                                "Create multilingual forms to serve users in different languages effortlessly, with the help of AI-assisted translations. This feature makes localization easy and efficient, enabling a seamless experience for users across multiple languages."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.RichText>
                          <HsNewButton
                            variant={hsNewButton7Variant}
                            txtButton={hsNewButton7TxtButton}
                            hsNewButtonLink={hsNewButton7HsNewButtonLink}
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "slider-control-arrows")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79dd-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "slider-arrow-apparence",
                      "reverse",
                      "swiper-prev"
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M25.3027 34.772C24.4743 34.772 23.8027 35.4435 23.8027 36.272C23.8027 37.1004 24.4743 37.772 25.3027 37.772V34.772ZM47.7569 37.3326C48.3427 36.7468 48.3427 35.7971 47.7569 35.2113L38.211 25.6654C37.6252 25.0796 36.6755 25.0796 36.0897 25.6654C35.5039 26.2512 35.5039 27.2009 36.0897 27.7867L44.575 36.272L36.0897 44.7573C35.5039 45.343 35.5039 46.2928 36.0897 46.8786C36.6755 47.4644 37.6252 47.4644 38.211 46.8786L47.7569 37.3326ZM25.3027 37.772H46.6963V34.772H25.3027V37.772Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "slider-arrow-apparence",
                      "swiper-next"
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <_Builtin.DOM
                      className={_utils.cx(_styles, "path")}
                      tag="path"
                      slot=""
                      d="M25.3027 34.772C24.4743 34.772 23.8027 35.4435 23.8027 36.272C23.8027 37.1004 24.4743 37.772 25.3027 37.772V34.772ZM47.7569 37.3326C48.3427 36.7468 48.3427 35.7971 47.7569 35.2113L38.211 25.6654C37.6252 25.0796 36.6755 25.0796 36.0897 25.6654C35.5039 26.2512 35.5039 27.2009 36.0897 27.7867L44.575 36.272L36.0897 44.7573C35.5039 45.343 35.5039 46.2928 36.0897 46.8786C36.6755 47.4644 37.6252 47.4644 38.211 46.8786L47.7569 37.3326ZM25.3027 37.772H46.6963V34.772H25.3027V37.772Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "swiper-bullet-wrapper",
                    "absolute-position"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "swiper-bullet", "is-active")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "swiper-bullet")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "solution__section")}
        tag="section"
        grid={{
          type: "section",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "padding")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "g-48-40-24")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "g-40")} tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "_3-col-grid")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "special__content")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79eb-064c78aa"
                    )}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "h2-style-42")}
                    >
                      {"Solution Architecture"}
                    </_Builtin.Paragraph>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "paragraph-18",
                        "transparent-65"
                      )}
                    >
                      {"Flexible, Scalable, and Customizable"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "gap-56-48")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79f0-064c78aa"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "g-40")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79f1-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_3-col-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "special__content")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79f3-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "p-26")}
                      >
                        <_Builtin.Span
                          className={_utils.cx(_styles, "span-red", "_600")}
                        >
                          {"Option1:"}
                        </_Builtin.Span>
                        {" Using Aidbox FHIR server to store collected data"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "solution__img")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79f8-064c78aa"
                    )}
                    width="1072"
                    height="auto"
                    loading="lazy"
                    alt="Medical Form Builder and Aidbox"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/675c6acd42de70d646f8605d_1.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "grid-col-12", "g-24")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79f9-064c78aa"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_8-span-col")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c79fa-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "hide-content")}
                        tag="div"
                      >
                        <_Builtin.RichText
                          className={_utils.cx(_styles, "special__text")}
                          tag="div"
                          slot=""
                        >
                          <_Builtin.Paragraph>
                            <_Builtin.Strong>{"Aidbox Forms"}</_Builtin.Strong>
                          </_Builtin.Paragraph>
                          <_Builtin.List tag="ul" unstyled={false}>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"UI Form Builder: "}
                              </_Builtin.Strong>
                              {
                                "A drag-and-drop interface for non-technical users, supporting complex logic and customization."
                              }
                            </_Builtin.ListItem>
                          </_Builtin.List>
                          <_Builtin.List tag="ul" unstyled={false}>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Form Renderer:"}
                              </_Builtin.Strong>
                              {
                                " Full customization for seamlessly integrating your app’s design and workflows."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"FHIR SDC API: "}
                              </_Builtin.Strong>
                              {
                                "Collect and exchange data in a standardized FHIR format, following the FHIR Structured Data Capture (SDC) Implementation Guide."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Form Library: "}
                              </_Builtin.Strong>
                              {
                                "Access nearly 3,000 ready-to-use, customizable forms."
                              }
                            </_Builtin.ListItem>
                          </_Builtin.List>
                          <_Builtin.Paragraph>
                            <_Builtin.Strong>
                              {"Aidbox FHIR Server"}
                            </_Builtin.Strong>
                          </_Builtin.Paragraph>
                          <_Builtin.Paragraph>
                            {
                              "Aidbox Forms is deployed with the Aidbox FHIR Server providing SDC Forms with the following functionality:"
                            }
                          </_Builtin.Paragraph>
                          <_Builtin.List tag="ul" unstyled={false}>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"FHIR API & FHIR Storage"}
                              </_Builtin.Strong>
                              {
                                ": Store, retrieve, and interact with FHIR-compliant data."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Subscriptions"}
                              </_Builtin.Strong>
                              {
                                ": Get real-time updates by subscribing to FHIR resource changes."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Authentication (Auth)"}
                              </_Builtin.Strong>
                              {
                                ": Secure access with a comprehensive authentication mechanism, ensuring only authorized users can interact with your forms and APIs."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Audit Logging"}
                              </_Builtin.Strong>
                              {
                                ": Track every action for security and compliance."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Analytics Module"}
                              </_Builtin.Strong>
                              {
                                ": Analyze FHIR data using flat resource representation."
                              }
                            </_Builtin.ListItem>
                          </_Builtin.List>
                          <_Builtin.Paragraph>
                            {
                              "* Aidbox Forms with the Aidbox FHIR Server is delivered as a Docker container, making deployment easy on any infrastructure."
                            }
                          </_Builtin.Paragraph>
                          <_Builtin.Heading
                            className={_utils.cx(_styles, "h5")}
                            tag="h5"
                          >
                            {"‍"}
                          </_Builtin.Heading>
                        </_Builtin.RichText>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "g-24")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a30-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "p-txt-18")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a31-064c78aa"
                        )}
                      >
                        {
                          "Aidbox Forms are provided with their own FHIR server, which is required to run the forms, store form templates, and can also be used for securely storing collected data."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button-ico")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a33-064c78aa"
                      )}
                      button={false}
                      block="inline"
                      options={link}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%2022.1914C17.5228%2022.1914%2022%2017.7143%2022%2012.1914C22%206.66856%2017.5228%202.19141%2012%202.19141C6.47715%202.19141%202%206.66856%202%2012.1914C2%2017.7143%206.47715%2022.1914%2012%2022.1914Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M8%2012.1914H16%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M12%208.19141V16.1914%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-txt-16", "read")}
                        tag="div"
                      >
                        {"Read more"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-txt-16", "less")}
                        tag="div"
                      >
                        {"less"}
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "g-40")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a39-064c78aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "_3-col-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "special__content")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a3b-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "p-26")}
                      >
                        <_Builtin.Span
                          className={_utils.cx(_styles, "span-red", "_600")}
                        >
                          {"Option2: "}
                        </_Builtin.Span>
                        {"Using your FHIR-Server for data storage"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "solution__img")}
                    width="1072"
                    height="auto"
                    loading="lazy"
                    alt="Medical Form Builder and your FHIR Server"
                    src="https://cdn.prod.website-files.com/57441aa5da71fdf07a0a2e19/675c6ace65621fb51aab7289_3.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "grid-col-12", "g-24")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a41-064c78aa"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_8-span-col")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a42-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "hide-content")}
                        tag="div"
                      >
                        <_Builtin.RichText
                          className={_utils.cx(_styles, "special__text")}
                          tag="div"
                          slot=""
                        >
                          <_Builtin.Paragraph>
                            <_Builtin.Strong>
                              {"In this setup:"}
                            </_Builtin.Strong>
                          </_Builtin.Paragraph>
                          <_Builtin.List tag="ul" unstyled={false}>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Pre-filled Forms"}
                              </_Builtin.Strong>
                              {
                                ": FHIR questionnaire will be pre-filled with data from your storage."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Form Submission"}
                              </_Builtin.Strong>
                              {
                                ": Once the form is submitted, the extracted data will be saved directly into your storage."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Form Creation and Storage"}
                              </_Builtin.Strong>
                              {
                                ": Forms will be created and stored in the Aidbox FHIR Server."
                              }
                            </_Builtin.ListItem>
                            <_Builtin.ListItem>
                              <_Builtin.Strong>
                                {"Audit Logging"}
                              </_Builtin.Strong>
                              {
                                ": All logging will be handled within the Aidbox FHIR Server for full traceability."
                              }
                            </_Builtin.ListItem>
                          </_Builtin.List>
                          <_Builtin.Paragraph>
                            {
                              "This flexibility ensures that Aidbox Forms can adapt to your infrastructure requirements while keeping your data secure and centralized."
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.RichText>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "g-24")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a5b-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "p-txt-18")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a5c-064c78aa"
                        )}
                      >
                        {
                          "If you need to store data in your storage, Aidbox Forms can be seamlessly integrated and used as a repository for creating and storing FHIR questionnaire templates.The data will remain in your storage, ensuring you retain full control."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button-ico")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a5e-064c78aa"
                      )}
                      button={false}
                      block="inline"
                      options={link2}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%2022.1914C17.5228%2022.1914%2022%2017.7143%2022%2012.1914C22%206.66856%2017.5228%202.19141%2012%202.19141C6.47715%202.19141%202%206.66856%202%2012.1914C2%2017.7143%206.47715%2022.1914%2012%2022.1914Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M8%2012.1914H16%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M12%208.19141V16.1914%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-txt-16", "less")}
                        tag="div"
                      >
                        {"less"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "btn-txt-16", "read")}
                        tag="div"
                      >
                        {"Read more"}
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "discuss__section")}
        tag="section"
        grid={{
          type: "section",
        }}
        id="demo"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding", "padding-24")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-1200")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "special__row", "grid")}
              id={_utils.cx(
                _styles,
                "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a67-064c78aa"
              )}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "h2-style-42",
                  "col",
                  "color-red",
                  "max-w"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a68-064c78aa"
                )}
              >
                {"Ready to discuss your project with us?"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "pading-32")}
              tag="div"
            >
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "hs-form-wrp")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a6b-064c78aa"
                )}
              >
                <_Builtin.FormForm
                  className={_utils.cx(_styles, "form")}
                  name="email-form"
                  data-name="Email Form"
                  action="https://medical-forms.d-chistoforov.workers.dev/"
                  method="post"
                  ms-code-form-no-redirect=""
                  id="email-form"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "special__row", "grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "flex-v-gap-24", "col")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a6e-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "paragraph-1",
                          "transparent-65"
                        )}
                      >
                        {
                          "Tell us about your case and we will get in touch to book a remote session."
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "form-column")}
                      id={_utils.cx(
                        _styles,
                        "w-node-_6046e0ab-c70f-00c9-94f4-5f09064c7a71-064c78aa"
                      )}
                      tag="div"
                    >
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "form-input")}
                        name="Lead-Namr"
                        maxLength={256}
                        data-name="Lead-Namr"
                        placeholder="Full Name"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        id="Lead-Namr"
                      />
                      <_Builtin.FormTextInput
                        className={_utils.cx(
                          _styles,
                          "global-textinput",
                          "form-input"
                        )}
                        name="Company-Name"
                        maxLength={256}
                        data-name="Company Name"
                        placeholder="Company"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        id="Company-Name"
                      />
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "form-input")}
                        name="Business-Email"
                        maxLength={256}
                        data-name="Business Email"
                        placeholder="Business Email"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        id="Business-Email"
                      />
                      <_Builtin.FormTextarea
                        className={_utils.cx(
                          _styles,
                          "form-input",
                          "input-area"
                        )}
                        name="Some-details-about-your-case"
                        maxLength={5000}
                        data-name="Some details about your case"
                        placeholder="Describe your case"
                        required={false}
                        autoFocus={false}
                        id="Some-details-about-your-case"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "police-txt")}
                        tag="div"
                      >
                        {"By submitting the form you agree to "}
                        <_Builtin.Link
                          button={false}
                          block=""
                          options={{
                            href: "#",
                            target: "_blank",
                          }}
                        >
                          {"Privacy Policy"}
                        </_Builtin.Link>
                        {" and "}
                        <_Builtin.Link
                          button={false}
                          block=""
                          options={{
                            href: "#",
                            target: "_blank",
                          }}
                        >
                          {"Cookie Policy"}
                        </_Builtin.Link>
                        {"."}
                      </_Builtin.Block>
                      <_Builtin.FormButton
                        className={_utils.cx(
                          _styles,
                          "hs-new-button",
                          "submit-button",
                          "caps-copy"
                        )}
                        type="submit"
                        value="Book a Demo"
                        data-wait="Please wait..."
                        id="af-demo"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage
                  className={_utils.cx(_styles, "succes-message-component")}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "succes-message__content")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "succes-message__icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M5.12968%2011.4941C4.93507%2010.6175%204.96496%209.7059%205.21656%208.8439C5.46817%207.9819%205.93335%207.19737%206.56898%206.56308C7.2046%205.92878%207.9901%205.46524%208.85263%205.21544C9.71516%204.96564%2010.6268%204.93767%2011.503%205.13411C11.9853%204.37985%2012.6497%203.75913%2013.435%203.32916C14.2202%202.8992%2015.1011%202.67383%2015.9964%202.67383C16.8916%202.67383%2017.7725%202.8992%2018.5577%203.32916C19.343%203.75913%2020.0074%204.37985%2020.4897%205.13411C21.3672%204.93681%2022.2804%204.96466%2023.1443%205.21507C24.0083%205.46547%2024.7948%205.9303%2025.4308%206.56632C26.0668%207.20234%2026.5317%207.98888%2026.7821%208.85278C27.0325%209.71669%2027.0603%2010.6299%2026.863%2011.5074C27.6173%2011.9897%2028.238%2012.6541%2028.668%2013.4394C29.0979%2014.2246%2029.3233%2015.1055%2029.3233%2016.0008C29.3233%2016.8961%2029.0979%2017.7769%2028.668%2018.5622C28.238%2019.3474%2027.6173%2020.0118%2026.863%2020.4941C27.0595%2021.3703%2027.0315%2022.282%2026.7817%2023.1445C26.5319%2024.007%2026.0684%2024.7925%2025.4341%2025.4282C24.7998%2026.0638%2024.0152%2026.529%2023.1532%2026.7806C22.2912%2027.0322%2021.3796%2027.0621%2020.503%2026.8674C20.0214%2027.6246%2019.3565%2028.248%2018.5699%2028.6799C17.7832%2029.1118%2016.9004%2029.3382%2016.003%2029.3382C15.1056%2029.3382%2014.2228%2029.1118%2013.4362%2028.6799C12.6496%2028.248%2011.9847%2027.6246%2011.503%2026.8674C10.6268%2027.0639%209.71516%2027.0359%208.85263%2026.7861C7.9901%2026.5363%207.2046%2026.0728%206.56898%2025.4385C5.93335%2024.8042%205.46817%2024.0197%205.21656%2023.1577C4.96496%2022.2957%204.93507%2021.3841%205.12968%2020.5074C4.36963%2020.0264%203.74357%2019.361%203.30975%2018.5731C2.87593%2017.7851%202.64844%2016.9003%202.64844%2016.0008C2.64844%2015.1013%202.87593%2014.2164%203.30975%2013.4285C3.74357%2012.6406%204.36963%2011.9751%205.12968%2011.4941Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M12%2016.0007L14.6667%2018.6673L20%2013.334%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block tag="div">
                      {"Thank you! Your submission has been received!"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage
                  className={_utils.cx(_styles, "error-message-component")}
                >
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
    </_Component>
  );
}
