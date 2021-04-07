// ==UserScript==
// @name                 BAHAMUT Auto Dark Mode
// @namespace            http://tampermonkey.net/
// @version              0.1
// @description          Turn on/off dark mode automatically in ani.gamer.com.tw based on the color scheme of OS.
// @description:ZH-CN    根据系统配色自动开启/关闭 ani.gamer.com.tw 的深色模式
// @author               Jiachen Chen
// @match                *://ani.gamer.com.tw/*
// ==/UserScript==

(function () {
    "use strict";

    const htmlTag = document.getElementsByTagName("html")[0];
    const currentTheme = htmlTag.getAttribute("data-theme");

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
        if (currentTheme === "dark") {
            htmlTag.setAttribute("data-theme", "light");
        }
    }

    window
        .matchMedia("(prefers-color-scheme: light)")
        .addEventListener("change", (e) => {
            if (currentTheme === "dark") {
                htmlTag.setAttribute("data-theme", "light");
            }
        });

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        if (currentTheme === "light") {
            htmlTag.setAttribute("data-theme", "dark");
        }
    }

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            if (currentTheme === "light") {
                htmlTag.setAttribute("data-theme", "dark");
            }
        });
})();
