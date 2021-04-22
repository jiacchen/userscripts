// ==UserScript==
// @name         Auto Dark Mode Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix the auto dark mode by bilibili evolved
// @author       Jiachen Chen
// @match        *://*.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    const classList = document.getElementsByTagName("body")[0].classList;
    var dark = false;
    classList.forEach((classItem) => {
        if (classItem == "dark") {
            dark = true;
        }
    });

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
        if (dark) {
            location.reload();
        }
    }

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        if (!dark) {
            location.reload();
        }
    }
})();
