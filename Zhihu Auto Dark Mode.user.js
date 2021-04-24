// ==UserScript==
// @name                 Zhihu Auto Dark Mode
// @name:ZH-CN           知乎自动切换深色模式
// @namespace            http://tampermonkey.net/
// @version              0.1
// @description          Turn on/off dark mode automatically in zhihu.com based on the color scheme of OS.
// @description:ZH-CN    根据系统配色自动开启/关闭 zhihu.com 的深色模式
// @author               Jiachen Chen
// @match                *://*.zhihu.com/*
// ==/UserScript==

(function () {
    "use strict";

    const currentTheme = document
        .getElementsByTagName("html")[0]
        .getAttribute("data-theme");

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
        if (currentTheme === "dark") {
            window.location.replace("?theme=light");
        }
    }

    window
        .matchMedia("(prefers-color-scheme: light)")
        .addEventListener("change", (e) => {
            if (currentTheme === "dark") {
                window.location.replace("?theme=light");
            }
        });

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        if (currentTheme === "light") {
            window.location.replace("?theme=dark");
        }
    }

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            if (currentTheme === "light") {
                window.location.replace("?theme=dark");
            }
        });
})();
