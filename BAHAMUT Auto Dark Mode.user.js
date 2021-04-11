// ==UserScript==
// @name                 BAHAMUT Auto Dark Mode
// @namespace            http://tampermonkey.net/
// @version              0.2
// @description          Turn on/off dark mode automatically in ani.gamer.com.tw based on the color scheme of OS.
// @description:ZH-CN    根据系统配色自动开启/关闭 ani.gamer.com.tw 的深色模式
// @author               Jiachen Chen
// @match                *://ani.gamer.com.tw/*
// ==/UserScript==

(function () {
    "use strict";

    const htmlTag = document.getElementsByTagName("html")[0];
    const lightSwitch = document.getElementById("lightSwitch");

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
        if (htmlTag.getAttribute("data-theme") === "dark") {
            lightSwitch.click();
        }
    }

    window
        .matchMedia("(prefers-color-scheme: light)")
        .addEventListener("change", (e) => {
            if (htmlTag.getAttribute("data-theme") === "dark") {
                lightSwitch.click();
            }
        });

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        if (htmlTag.getAttribute("data-theme") === "light") {
            lightSwitch.click();
        }
    }

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            if (htmlTag.getAttribute("data-theme") === "light") {
                lightSwitch.click();
            }
        });
})();
