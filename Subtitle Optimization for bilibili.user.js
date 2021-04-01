// ==UserScript==
// @name Subtitle Optimization for bilibili
// @namespace github.com/openstyles/stylus
// @version 1.0.1
// @description Optimize the subtitles in bilibili.com
// @author Jiachen Chen
// @grant GM_addStyle
// @run-at document-start
// @include http://bilibili.com/*
// @include https://bilibili.com/*
// @include http://*.bilibili.com/*
// @include https://*.bilibili.com/*
// ==/UserScript==

(function () {
  let css = `
    .subtitle-item-text {
        background-color: rgba(0, 0, 0, 0) !important;
        padding: 0px !important;
        font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif !important;
    }

    .bilibili-player-video-subtitle {
        text-shadow: black 0px 0px 4px, black 0px 0px 4px, black 0px 0px 4px, black 0px 0px 4px, black 0px 0px 4px !important;
    }

    .subtitle-position.subtitle-position-bc {
        bottom: 10% !important;
    }
`;
  if (typeof GM_addStyle !== "undefined") {
    GM_addStyle(css);
  } else {
    let styleNode = document.createElement("style");
    styleNode.appendChild(document.createTextNode(css));
    (document.querySelector("head") || document.documentElement).appendChild(
      styleNode
    );
  }
})();
