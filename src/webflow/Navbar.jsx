"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import NavbarBrand from "./webflow_modules/Navbar/components/NavbarBrand";
import NavbarButton from "./webflow_modules/Navbar/components/NavbarButton";
import NavbarLink from "./webflow_modules/Navbar/components/NavbarLink";
import NavbarMenu from "./webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "./webflow_modules/Navbar/components/NavbarWrapper";

export function Navbar({}) {
  return (
    <NavbarWrapper
      className={"tw-navbar"}
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "medium",
      }}
      tag={"div"}
    >
      <Block className={"container"} tag={"div"}>
        <HtmlEmbed
          className={"navbar-cs"}
          content={
            "<style>\n  .humberger-button .humberger-line:nth-child(1){top:0;}\n  .humberger-button .humberger-line:nth-child(2){top:8px;}\n  .humberger-button .humberger-line:nth-child(3){top:16px;}\n  .humberger-button.w--open .humberger-line:nth-child(1){transform:rotate(45deg);top:8px;}\n  .humberger-button.w--open .humberger-line:nth-child(2){opacity:0;}\n  .humberger-button.w--open .humberger-line:nth-child(3){transform:rotate(-45deg);top:8px;width:100%;}\n  body:has(.humberger-button.w--open){overflow:hidden;}\n  .nav:has(.humberger-button.w--open){border-bottom-right-radius:0rem;border-bottom-left-radius:0rem;border-bottom:none;}\n</style>"
          }
        />
        <Block className={"tw-navbar-row"} tag={"div"}>
          <NavbarBrand
            className={"tw-logo-link"}
            options={{
              href: "#",
            }}
          >
            <Block tag={"div"}>{"TECHWISE"}</Block>
          </NavbarBrand>
          <NavbarMenu
            className={"tw-navigation"}
            role={"navigation"}
            tag={"nav"}
          >
            <Block className={"tw-navigation-content"} tag={"div"}>
              <NavbarLink
                className={"tw-navigation-link"}
                options={{
                  href: "#",
                }}
              >
                {"Home"}
              </NavbarLink>
              <NavbarLink
                className={"tw-navigation-link"}
                options={{
                  href: "/about",
                }}
              >
                {"About"}
              </NavbarLink>
              <NavbarLink
                className={"tw-navigation-link"}
                options={{
                  href: "/app",
                }}
              >
                {"App"}
              </NavbarLink>
            </Block>
          </NavbarMenu>
          <NavbarButton className={"humberger-button"} tag={"div"}>
            <Block className={"humberger-btn-wrap"} tag={"div"}>
              <Block className={"humberger-lines-holder"} tag={"div"}>
                <Block className={"humberger-line"} tag={"div"} />
                <Block className={"humberger-line"} tag={"div"} />
                <Block className={"humberger-line"} tag={"div"} />
              </Block>
            </Block>
          </NavbarButton>
        </Block>
      </Block>
    </NavbarWrapper>
  );
}
