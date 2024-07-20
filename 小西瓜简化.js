// ==UserScript==
// @name         小西瓜网页精简
// @namespace    http://tampermonkey.net/
// @version      2024-07-20
// @description  try to take over the world!
// @author       You
// @match        https://buondua.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=buondua.com
// @grant        none
// ==/UserScript==


// 去除广告1
// 回调函数
(function () {
    'use strict';
    // 监测参数
    var observerOptions = {
        childList: true, // 观察目标子节点的变化，是否有添加或者删除
        attributes: true, // 观察属性变动
        subtree: true, // 观察后代节点，默认为 false
    };
    function callback(mutationList, observer) {
        mutationList.forEach((mutation) => {
            switch (mutation.type) {
                case "childList":
                    if (document.querySelector("body > div.is-full.main-container > div > div.search-box > div.bd76a918083af37c04dae4dac71aadcb8") != null) {
                        document.querySelector("body > div.is-full.main-container > div > div.search-box > div.bd76a918083af37c04dae4dac71aadcb8").remove();
                        observer.disconnect();
                    }
                    break;
            }
        });
    }
    var observer = new MutationObserver(callback);
    observer.observe(document.querySelector("body > div.is-full.main-container > div > div.search-box"), observerOptions);

    // 去除广告2
    // 回调函数

    function callback2(mutationList, observer) {
        mutationList.forEach((mutation) => {
            switch (mutation.type) {
                case "childList":
                    if (document.querySelector("body > div.is-full.main-container > div > div:nth-child(3)") == null) { }
                    else if (document.querySelector("body > div.is-full.main-container > div > div:nth-child(3)").className != 'blog columns is-multiline is-mobile is-tablet' && document.querySelector("body > div.is-full.main-container > div > div:nth-child(3)").className != 'bottom-articles') {
                        document.querySelector("body > div.is-full.main-container > div > div:nth-child(3)").remove();
                    } else {
                        observer2.disconnect();
                    }
                    break;
            }
        });
    };

    if (document.querySelector("body > div.is-full.main-container > div > div.content") != null) {
        if (document.querySelector("body > div.is-full.main-container > div > div.content").className == 'article content') {
            document.querySelector("body > div.is-full.main-container > div > div.article.content > div:nth-child(10)").remove()
            document.querySelector("body > div.is-full.main-container > div > div.article.content > div:nth-child(10)").remove()
            document.querySelector("body > div.is-full.main-container > div > div.article.content > div:nth-child(10)").remove()
            document.querySelector("body > div.is-full.main-container > div > div:nth-child(4)").remove();
            document.querySelector("body > div.is-full.main-container > div > div:nth-child(4)").remove();
            document.querySelector("body > div.is-full.main-container > div > div.bottom-articles > div:nth-child(2)").remove()
            document.querySelector("body > div.is-full.main-container > div > div.bottom-articles > div:nth-child(2)").remove();
            document.querySelector("body > div.is-full.main-container > div > div.bottom-articles > div:nth-child(2)").remove();
        } else { document.querySelector("body > div.is-full.main-container > div > div.content").remove(); }

    };

    var observer2 = new MutationObserver(callback2);
    observer2.observe(document.querySelector("body > div.is-full.main-container > div"), observerOptions);

    document.querySelector("body > div.is-full.main-container > div > div.ba41f266a2df89da021e334deed7f3665").remove();
    document.querySelector("body > div.footer.is-full").remove();
    document.querySelector("body > div.is-full.main-container > div > div.search-box > div.bd76a918083af37c04dae4dac71aadcb8").remove();
    document.querySelector("body > script:nth-child(1)").remove();


    let intervalAmount = setInterval(function () { }, 10000);
    for (let i = 1; i <= intervalAmount; i++) {
        clearInterval(i);
    }
    let timerAmount = setTimeout(function () { }, 10000);
    for (let i = 1; i <= timerAmount; i++) {
        clearTimeout(i);
    }
    for (let key in AdProvider) {
        delete AdProvider[key];
    }
    // Your code here...
})();
