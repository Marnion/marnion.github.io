(function(e) {
    function t(t) {
        for (var n, o, i = t[0], l = t[1], c = t[2], d = 0, f = []; d < i.length; d++) o = i[d], Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]), r[o] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        u && u(t);
        while (f.length) f.shift()();
        return s.push.apply(s, c || []), a()
    }

    function a() {
        for (var e, t = 0; t < s.length; t++) {
            for (var a = s[t], n = !0, i = 1; i < a.length; i++) {
                var l = a[i];
                0 !== r[l] && (n = !1)
            }
            n && (s.splice(t--, 1), e = o(o.s = a[0]))
        }
        return e
    }
    var n = {},
        r = {
            app: 0
        },
        s = [];

    function o(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = e, o.c = n, o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var c = 0; c < i.length; c++) t(i[c]);
    var u = l;
    s.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "034f": function(e, t, a) {
        "use strict";
        var n = a("85ec"),
            r = a.n(n);
        r.a
    },
    "2ac8": function(e, t, a) {
        e.exports = a.p + "img/mni.png"
    },
    4678: function(e, t, a) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function r(e) {
            var t = s(e);
            return a(t)
        }

        function s(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }
        r.keys = function() {
            return Object.keys(n)
        }, r.resolve = s, e.exports = r, r.id = "4678"
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("2b0e"),
            r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-app", [n("header", {
                    staticClass: "container-fluid container-lg"
                }, [n("div", {
                    staticClass: "row"
                }, [n("div", {
                    staticClass: "col-md-3 col-lg-3"
                }, [n("v-app-bar-nav-icon", {
                    staticClass: "hidden-md-and-up",
                    staticStyle: {},
                    attrs: {
                        large: "",
                        dark: ""
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.drawer = !e.drawer
                        }
                    }
                }), n("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "/",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600"
                    }
                }, [n("img", {
                    attrs: {
                        src: a("6b84"),
                        alt: "UniTrade Logo"
                    }
                })])], 1), n("div", {
                    staticClass: "col-md-9 col-lg-9"
                }, [n("ul", {
                    staticClass: "menu"
                }, [n("li", [n("router-link", {
                    attrs: {
                        to: {
                            name: "Stake"
                        }
                    }
                }, [e._v("Stake")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/auction"
                    }
                }, [e._v("Auction")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/referral"
                    }
                }, [e._v("Referral")])], 1), n("li", [n("a", {
                    attrs: {
                        href: "https://tronscan.org/#/contract/TUCjCMAwbpmeACMBkedFh9N5u3fUmpCrQ7"
                    }
                }, [e._v("Contract")])]), n("countdown", {
                    attrs: {
                        time: e.countdownTime,
                        transform: e.transform
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [n("a", {
                                staticClass: "btn-circle-address",
                                staticStyle: {
                                    background: "linear-gradient(272.25deg, rgba(81, 36, 255, 0.15) 0.08%, rgba(130, 98, 255, 0.15) 95.38%, rgba(138, 113, 234, 0.15) 95.38%)",
                                    border: "1px solid #8161ff"
                                }
                            }, [e._v("Auction Ends " + e._s(t.hours) + " : " + e._s(t.minutes) + " : " + e._s(t.seconds))])]
                        }
                    }])
                }), n("li", [n("a", {
                    staticClass: "btn-circle-address",
                    staticStyle: {
                        background: "linear-gradient(272.25deg, rgba(81, 36, 255, 0.15) 0.08%, rgba(130, 98, 255, 0.15) 95.38%, rgba(138, 113, 234, 0.15) 95.38%)",
                        border: "1px solid #8161ff"
                    }
                }, [e._v(e._s(e.myAccAdd))])])], 1)])])]), n("v-navigation-drawer", {
                    attrs: {
                        absolute: "",
                        right: "",
                        temporary: ""
                    },
                    model: {
                        value: e.drawer,
                        callback: function(t) {
                            e.drawer = t
                        },
                        expression: "drawer"
                    }
                }, [n("v-list", {
                    attrs: {
                        nav: "",
                        dense: ""
                    }
                }, [n("v-list-item-group", {
                    attrs: {
                        "active-class": "deep-purple lighten-3"
                    }
                }, [n("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [n("v-list-item", [e._v("Home")])], 1), n("router-link", {
                    attrs: {
                        to: "/stake"
                    }
                }, [n("v-list-item", [e._v("Stake")])], 1), n("router-link", {
                    attrs: {
                        to: "/auction"
                    }
                }, [n("v-list-item", [e._v("Auction")])], 1), n("router-link", {
                    attrs: {
                        to: "/referral"
                    }
                }, [n("v-list-item", [e._v("Referral")])], 1)], 1)], 1)], 1), n("v-main", [n("router-view")], 1), n("div", [n("footer", [n("div", {
                    staticClass: "container-fluid"
                }, [n("div", {
                    staticClass: "row footer-wrapper"
                }, [n("div", {
                    staticClass: "col-md-5"
                }, [n("div", {
                    staticClass: "logo-wrapper"
                }, [n("img", {
                    attrs: {
                        src: a("6b84"),
                        alt: "marnion Logo"
                    }
                })]), n("div", {
                    staticClass: "social-wrapper"
                }, [n("ul", {
                    staticClass: "social-links gray"
                }, [n("li", [n("a", {
                        href: "https://t.me/marnion ",
                    attrs: {
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-telegram-plane"
                })])]), n("li", [n("a", {
                    attrs: {
                        href: "https://twitter.com/marnion ",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-twitter"
                })])])])])]), n("div", {
                    staticClass: "col-md-6"
                }, [n("ul", {
                    staticClass: "footer-menu"
                }, [n("li", [n("router-link", {
                    attrs: {
                        to: "/stake"
                    }
                }, [e._v("Stake")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/auction"
                    }
                }, [e._v("Auction")])], 1), n("li", [n("router-link", {
                    attrs: {
                        to: "/referral"
                    }
                }, [e._v("Referral")])], 1), n("li", [n("a", {
                    attrs: {
                        href: "https://tronscan.org/#/contract/TUCjCMAwbpmeACMBkedFh9N5u3fUmpCrQ7"
                    }
                }, [e._v("Contract")])])])])])])])])], 1)
            },
            s = [],
            o = a("a34a"),
            i = a.n(o),
            l = a("7f45"),
            c = a.n(l),
            u = "TUCjCMAwbpmeACMBkedFh9N5u3fUmpCrQ7",
            d = localStorage.getItem("referrerAddress") || "TFqiUZ1VTi2wqB1MJqkDzavH8aN3q7REL1";

        function f(e, t, a, n, r, s, o) {
            try {
                var i = e[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? t(l) : Promise.resolve(l).then(n, r)
        }

        function v(e) {
            return function() {
                var t = this,
                    a = arguments;
                return new Promise((function(n, r) {
                    var s = e.apply(t, a);

                    function o(e) {
                        f(s, n, r, o, i, "next", e)
                    }

                    function i(e) {
                        f(s, n, r, o, i, "throw", e)
                    }
                    o(void 0)
                }))
            }
        }

        function p(e, t) {
            return w(e) || y(e, t) || m(e, t) || b()
        }

        function b() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function m(e, t) {
            if (e) {
                if ("string" === typeof e) return h(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? h(e, t) : void 0
            }
        }

        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        function y(e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                var a = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done); n = !0)
                        if (a.push(o.value), t && a.length === t) break
                } catch (l) {
                    r = !0, s = l
                } finally {
                    try {
                        n || null == i["return"] || i["return"]()
                    } finally {
                        if (r) throw s
                    }
                }
                return a
            }
        }

        function w(e) {
            if (Array.isArray(e)) return e
        }
        var k = {
                name: "App",
                data: function() {
                    return {
                        countdownTime: null,
                        group: null,
                        drawer: !1,
                        events: [],
                        stVal1: null,
                        stVal12: null,
                        stVal8: null,
                        myEndedStakesList: null,
                        stakeData: {
                            entered_amount: 0,
                            entered_days: 0,
                            currentDay: void 0,
                            stakingShare: void 0,
                            clc_1: 0,
                            clc_2: 0,
                            shareRate: 0
                        },
                        myAccAdd: "",
                        mainContract: null,
                        currentDay: null,
                        yourTokenBalanceHd: "",
                        user: {
                            address: null,
                            balance: null,
                            referrer: d
                        }
                    }
                },
                watch: {
                    group: function() {
                        this.drawer = !1
                    }
                },
                methods: {
                    transform: function(e) {
                        return Object.entries(e).forEach((function(t) {
                            var a = p(t, 2),
                                n = a[0],
                                r = a[1],
                                s = r < 10 ? "0".concat(r) : r;
                            r < 2 && n.replace(/s$/, "");
                            e[n] = "".concat(s)
                        })), e
                    },
                    accessCookie: function(e) {
                        for (var t = e + "=", a = document["cookie"]["split"](";"), n = 0; n < a["length"]; n++) {
                            var r = a[n]["trim"]();
                            if (0 == r["indexOf"](t)) return r["substring"](t["length"], r["length"])
                        }
                        return ""
                    },
                    validateAddress: function(e) {
                        return "string" === typeof e && ("T" === e[0] && 34 == e["length"])
                    },
                    updateHeadAddress: function() {
                        var e = this.user["address"]["slice"](29);
                        this.myAccAdd = this.user["address"]["slice"](0, 5) + "..." + e
                    },
                    setUpContracts: function(e) {
                        var t = this;
                        if (!u && !e) return null;
                        window.tronWeb["contract"]()["at"](u || e, (function(e, a) {
                            e ? console.error("data1 error==>>", e) : (t.mainContract = a, t.mainContract.stakeLists().call({
                                address: t.user.address
                            }), t.contractLoaded())
                        }))
                    },
                    contractLoaded: function() {
                        var e = this;
                        if (this.user.address) {
                            this.getUserBalance(), setInterval((function() {
                                e.getUserBalance()
                            }), 6e3), this.getCurrentDay();
                            var t = setInterval((function() {
                                e.currentDay && (clearInterval(t), "function" === typeof e.run_Stake && e.run_Stake(), e.run_Auction, e.run_Dividends)
                            }), 100)
                        }
                    },
                    getUserBalance: function() {
                        var e = this;
                        this.mainContract.balanceOf(this.user.address).call({
                            shouldPollResponse: !1
                        }).then((function(t) {
                            e.user["balance"] = parseFloat(window.tronWeb.fromSun(t)) / 100, e.yourTokenBalanceHd = "Your D2X balance: " + e.user["balance"]["toLocaleString"]()
                        }))
                    },
                    getCurrentDay: function() {
                        var e = this;
                        this.mainContract.globalInfo().call({
                            shouldPollResponse: !0
                        }).then((function(t) {
                            e.currentDay = window.tronWeb.fromSun(t[4]._hex) * e.SUN
                        }))
                    },
                    run_Stake: function(e) {
                        var t = this;
                        console.log("in run_Stake==>>>"), this.mainContract.globalInfo().call({
                            shouldPollResponse: !0
                        }).then((function(e) {
                            t.stakeData.stakingShare = window.tronWeb.fromSun(e[2]["_hex"]) * t.SUN, t.stVal1 = t.currentDay + 1, t.stakeData.shareRate = 1e5 / t.stakeData.stakingShare * 1e8, t.stVal12 = t.abbreviate_number(t.stakeData.shareRate, 2) + "/D2X"
                        })), this.mainContract.xfLobby(this.currentDay).call({
                            shouldPollResponse: !0
                        }).then((function(e) {
                            t.stVal8 = t.abbreviate_number(window.tronWeb.fromSun(e._hex), 2) + " TRX"
                        })), e || this.getMyEndedStakes()
                    },
                    abbreviate_number: function(e, t) {
                        var a = parseFloat(e);
                        return a
                    },
                    getMyEndedStakes: function() {
                        return v(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    renderMyEndedStakes: function(e) {}
                },
                mounted: function() {
                    this.countdownTime = c.a.utc().add(1, "day").startOf("day").tz("Etc/UTC").valueOf() - c.a.utc().tz("Etc/UTC").valueOf(), this.accessCookie("ref")["length"] > 0 && this.validateAddress(this.accessCookie("ref")) && (this.user["referrer"] = this.accessCookie("ref"))
                },
                created: function() {
                    var e = this;
                    return v(i.a.mark((function t() {
                        var a;
                        return i.a.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return console.log("created in app"), a = new Promise((function(e, t) {
                                        window["tronWeb"] && window["tronWeb"]["ready"] ? e(!0) : window["addEventListener"]("load", (function() {
                                            var t = setInterval((function() {
                                                window["tronWeb"] && window["tronWeb"]["ready"] && e(!0), clearInterval(t)
                                            }), 200);
                                            setTimeout((function() {
                                                clearInterval(t)
                                            }), 1e4)
                                        }))
                                    })).then((function() {
                                        return console["log"]("Tronweb installed and logged in"), !0
                                    })).catch((function(e) {
                                        return console["error"]("Error while detecting tronweb", e), !1
                                    })), t.next = 4, a["then"]((function(t) {
                                        return new Promise((function(t, a) {
                                            var n = window["tronWeb"]["defaultAddress"]["base58"];
                                            if (!n) return t(!1);
                                            e.user.address = n;
                                            var r = window.tronWeb.address.toHex(n);
                                            r = "0x" + r.slice(2), e.updateHeadAddress(), setInterval((function() {
                                                window["tronWeb"] && e.user["address"] !== window["tronWeb"]["defaultAddress"]["base58"] && location["reload"]()
                                            }), 700)
                                        }))
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            g = k,
            x = (a("034f"), a("2877")),
            S = a("6544"),
            _ = a.n(S),
            C = a("7496"),
            j = a("5bc1"),
            D = a("8860"),
            T = a("da13"),
            P = a("1baa"),
            O = a("f6c4"),
            R = a("f774"),
            A = Object(x["a"])(g, r, s, !1, null, null, null),
            I = A.exports;
        _()(A, {
            VApp: C["a"],
            VAppBarNavIcon: j["a"],
            VList: D["a"],
            VListItem: T["a"],
            VListItemGroup: P["a"],
            VMain: O["a"],
            VNavigationDrawer: R["a"]
        });
        a("5363");
        var E = a("f309");
        n["a"].use(E["a"]);
        var V = new E["a"]({
                icons: {
                    iconfont: "mdi"
                },
                theme: {
                    dark: !0
                }
            }),
            L = a("f5af"),
            W = a.n(L),
            F = (a("e829"), a("8c4f")),
            N = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("HomeHero"), a("HomeBenefits"), a("HomeCommunity", {
                    staticClass: "mt-5"
                })], 1)
            },
            M = [],
            B = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("div", {
                    staticClass: "mb-3",
                    attrs: {
                        id: "hero"
                    }
                }, [e._m(0), a("h2", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "400"
                    }
                }, [e._v("Daily Auction Lobby, Daily Tron Dividends, Lucrative Staking System, Completely Decentralized.")]), a("div", {
                    staticClass: "button-holder"
                }, [a("router-link", {
                    staticClass: "button",
                    staticStyle: {},
                    attrs: {
                        to: "/auction"
                    }
                }, [e._v("Auction Lobby")]), a("router-link", {
                    staticClass: "button",
                    staticStyle: {},
                    attrs: {
                        to: {
                            name: "Stake"
                        }
                    }
                }, [e._v("Staking Lounge")])], 1), e._m(1)]), a("div", {
                    staticClass: "bg-img-1",
                    staticStyle: {
                        "background-image": "url('./assets/images/header_dots_circle.png')"
                    }
                }), a("div", {
                    staticClass: "bg-img-2",
                    staticStyle: {
                        "background-image": "url('images/header_dots_square.png')"
                    }
                })])
            },
            z = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("h1", {
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "200"
                    }
                }, [e._v("marnion built on "), a("span", [e._v("Tron")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("p", [a("b", [e._v("Stake it till you make it - ")]), e._v("Longer and Bigger Pays Better!")])
            }],
            U = {},
            H = Object(x["a"])(U, B, z, !1, null, null, null),
            X = H.exports,
            q = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            $ = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("section", {
                    staticClass: "section white-bg",
                    attrs: {
                        id: "d2x-benefits"
                    }
                }, [a("div", {
                    staticClass: "container"
                }, [a("div", {
                    staticClass: "row",
                    staticStyle: {
                        "overflow-x": "hidden"
                    }
                }, [a("div", {
                    staticClass: "col-md-4 col-sm-6",
                    attrs: {
                        "data-aos": "fade-left"
                    }
                }, [a("div", {
                    staticClass: "d2x-benefits-box"
                }, [a("i", {
                    staticClass: "far fa-calendar-check"
                }), a("h4", [e._v("Daily Auction Lobby")]), a("p", [e._v("Our Daily Auctions will start from 2.5 million marnion tokens per day and will be distributed between the users that participated in Auction based on their purchase amount. This will reduce over the next 365 days.")])])]), a("div", {
                    staticClass: "col-md-4 col-sm-6",
                    attrs: {
                        "data-aos": "fade-left"
                    }
                }, [a("div", {
                    staticClass: "d2x-benefits-box"
                }, [a("i", {
                    staticClass: "fas fa-redo-alt"
                }), a("h4", [e._v("Daily TRON Dividends")]), a("p", [e._v("Everyday 97% of the previous day's TRX that was spent in the Auction Lobby will be pooled and allocated to users based upon their completed stake terms.")])])]), a("div", {
                    staticClass: "col-md-4 col-sm-6",
                    attrs: {
                        "data-aos": "fade-left"
                    }
                }, [a("div", {
                    staticClass: "d2x-benefits-box"
                }, [a("i", {
                    staticClass: "fas fa-tint"
                }), a("h4", [e._v("Lucrative Staking System")]), a("p", [e._v("Stake your marnion tokens within the Staking Portal and earn daily interest. Additionally, Stakers are rewarded TRX tokens from the daily Lobbies based off the percentage of total tokens being Staked.")])])])])])])
            }],
            Y = {},
            J = Object(x["a"])(Y, q, $, !1, null, null, null),
            Q = J.exports,
            K = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Z = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "section",
                    attrs: {
                        id: "d2x-community"
                    }
                }, [n("div", {
                    staticClass: "container"
                }, [n("img", {
                    attrs: {
                        src: a("6b84"),
                        alt: "marnion Logo"
                    }
                }), n("h1", [e._v("Join our "), n("span", [e._v("Community")])]), n("p", [e._v("Learn more about the project, interact with the team, and take a part in shaping the future of NUI.")]), n("div", {
                    staticClass: "row"
                }, [n("div", {
                    staticClass: "col-md-6",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "100"
                    }
                }, [n("a", {
                    attrs: {
                        href: "https://t.me/marnion ",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-telegram-plane"
                }), e._v(" Telegram")])]), n("div", {
                    staticClass: "col-md-6",
                    attrs: {
                        "data-aos": "fade-up",
                        "data-aos-delay": "175",
                        "data-aos-offset": "150"
                    }
                }, [n("a", {
                    attrs: {
                        href: "https://twitter.com/marnion ",
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-twitter"
                }), e._v(" Twitter")])])]), n("hr")])])
            }],
            G = {},
            ee = G,
            te = Object(x["a"])(ee, K, Z, !1, null, null, null),
            ae = te.exports,
            ne = {
                components: {
                    HomeHero: X,
                    HomeBenefits: Q,
                    HomeCommunity: ae
                },
                mounted: function() {
                    var e = this.$route.query.ref;
                    e && localStorage.setItem("referrerAddress", e)
                }
            },
            re = ne,
            se = Object(x["a"])(re, N, M, !1, null, null, null),
            oe = se.exports,
            ie = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "stake"
                }, [n("div", [n("v-row", {
                    staticClass: "mb-6",
                    attrs: {
                        "no-gutters": ""
                    }
                }, [n("v-col", {
                    staticClass: "pa-2",
                    attrs: {
                        lg: "4",
                        md: "4",
                        sm: "12"
                    }
                }, [n("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0"
                }, [n("v-toolbar-title", [e._v("Stake")]), n("v-spacer"), n("p", {
                    staticStyle: {
                        color: "white !important"
                    }
                }, [n("v-btn", {
                    staticClass: "subtitle-2 mt-4",
                    attrs: {
                        block: ""
                    }
                }, [e._v(" marnion Balance: " + e._s(e.user.formattedBalance))])], 1)], 1), n("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        col: 6
                    }
                }, [n("v-form", {
                    ref: "form",
                    attrs: {
                        "lazy-validation": ""
                    },
                    model: {
                        value: e.valid,
                        callback: function(t) {
                            e.valid = t
                        },
                        expression: "valid"
                    }
                }, [n("v-card-subtitle", [e._v("Stake")]), n("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        rules: [e.numberRule],
                        outlined: "",
                        label: "Amount to Stake:",
                        required: ""
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [n("v-fade-transition", {
                                attrs: {
                                    "leave-absolute": ""
                                }
                            }, [n("img", {
                                attrs: {
                                    width: "25",
                                    height: "31",
                                    src: a("2ac8"),
                                    alt: ""
                                }
                            })])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: e.amountToStake,
                        callback: function(t) {
                            e.amountToStake = t
                        },
                        expression: "amountToStake"
                    }
                }), n("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        outlined: "",
                        rules: [e.numberRule],
                        label: "Days to Stake",
                        required: ""
                    },
                    model: {
                        value: e.daysToStake,
                        callback: function(t) {
                            e.daysToStake = t
                        },
                        expression: "daysToStake"
                    }
                }), n("div", {
                    staticClass: "px-4 pb-3"
                }, [n("v-btn", {
                    staticStyle: {
                        border: "1px solid #8161ff"
                    },
                    attrs: {
                        disabled: !e.valid,
                        block: "",
                        dark: ""
                    },
                    on: {
                        click: function(t) {
                            return e.doStake()
                        }
                    }
                }, [e._v("Stake")]), n("span", {
                    staticClass: "row no-gutters"
                }, [n("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v("Start Day:")])]), n("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v("Last Full Day:")])]), n("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v("Collect On Day:")])])]), n("span", {
                    staticClass: "row no-gutters"
                }, [n("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v(" " + e._s(e.currentDay + 1) + " ")])]), n("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [e.daysToStake ? n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v(" " + e._s(e.getLastFullDay()) + " ")]) : n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v("--")])]), n("div", {
                    staticClass: "col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [e.daysToStake ? n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v(" " + e._s(e.getLastFullDay() + 1) + " ")]) : n("div", {
                    staticClass: "pa-2 v-card flat rounded-0"
                }, [e._v("--")])])])], 1)], 1)], 1), n("v-card", {
                    attrs: {
                        flat: ""
                    }
                }, [n("v-card-text", {
                    staticClass: "pt-0"
                }, [n("div", {
                    staticClass: "title font-weight-light mb-2"
                })]), n("v-sheet", {
                    staticClass: "v-sheet--offset mx-auto",
                    attrs: {
                        color: "#8161ff",
                        elevation: "12",
                        "max-width": "calc(100% - 32px)"
                    }
                }, [n("v-sparkline", {
                    attrs: {
                        value: e.value,
                        "auto-draw": "",
                        smooth: 25,
                        color: "white",
                        "line-width": ".5",
                        height: "50px",
                        padding: "8",
                        "label-size": "3"
                    }
                })], 1), n("v-card-text", {
                    staticClass: "pt-0"
                }, [n("div", {
                    staticClass: "title font-weight-light mb-2"
                }, [e._v(" Daily Dividends Chart ")]), n("div", {
                    staticClass: "subheading font-weight-light white--text"
                }, [e._v(" Current Dividends Pool: "), n("span", {
                    staticClass: "headline"
                }, [e._v(e._s(e.TRXDividends))])]), n("v-divider", {
                    staticClass: "my-2"
                }), n("v-icon", {
                    staticClass: "mr-2",
                    attrs: {
                        small: ""
                    }
                }, [e._v(" mdi-clock ")]), n("span", {
                    staticClass: "caption grey--text font-weight-light"
                }, [e._v("last updated: " + e._s(e.getTime()))])], 1)], 1), n("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        flat: ""
                    }
                }, [n("v-toolbar-title", [e._v("Staking FAQ")]), n("v-spacer"), n("p", {
                    staticStyle: {
                        color: "white !important"
                    }
                })], 1), n("v-card", [n("v-expansion-panels", {
                    attrs: {
                        focusable: ""
                    }
                }, [n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("What is staking?")]), n("v-expansion-panel-content", [e._v(" You can stake your marnion tokens for a fixed number of days to earn interest on them. Make sure to stake more than 5 days to be eligible for bonus days rewards. At the end of every day the daily stake pool of marnion tokens will be calculated and allocated proportionally between all the open stakes. The allocated marnion tokens and TRX will be available for users to withdraw when the stake ends. ")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("How is stake pool calculated?")]), n("v-expansion-panel-content", [e._v("[marnion supply * 50000 / 5.42% inflation per year ], this daily pool will be distributed between all the Stakers as their stake interest.")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("Bonus for Staking?")]), n("v-expansion-panel-content", [e._v("You get a bonus reward for your stake, based on the amount and time that you are staking")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("What is a reward day?")]), n("v-expansion-panel-content", [e._v("Every stake will get a bonus day every 5 days, stakes get 2X interest on bonus days. Example: creating a stake on day 4 for 15 days gives this stake 3 bonus days on days 10,15, and 20.")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("What if I end my stake early?")]), n("v-expansion-panel-content", [e._v("You will get a penalty equal to the profit of half the days you committed to.")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("Do I get TRON dividends for staking?")]), n("v-expansion-panel-content", [e._v("Yes! One of the benefits of Staking marnion is TRON dividends. At the end of each day a TRON dividends pool will be calculated and allocated to all the open stakes based on their stake amount. The dividends pool comes from the daily auction lobby total entry amount.")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("How is dividends pool calculated?")]), n("v-expansion-panel-content", [e._v("97% of all TRX that enters the daily Auction Lobby is pooled and distributed back out to Stakers.")])], 1), n("v-expansion-panel", [n("v-expansion-panel-header", [e._v("When will I receive my TRON dividends?")]), n("v-expansion-panel-content", [e._v("You will receive your TRX dividends after you exit your stake position.")])], 1), n("v-expansion-panel")], 1)], 1)], 1), n("v-col", {
                    staticClass: "pa-2",
                    attrs: {
                        lg: "8",
                        md: "8",
                        sm: "12"
                    }
                }, [n("v-card", [n("v-overlay", {
                    attrs: {
                        absolute: !0,
                        value: e.loading
                    }
                }, [n("v-progress-circular", {
                    attrs: {
                        indeterminate: "",
                        size: "64"
                    }
                })], 1), n("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        fixed: ""
                    }
                }, [n("v-toolbar-title", [e._v("My Active Stakes")]), n("v-spacer")], 1), n("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: e.headersActiveStake,
                        items: e.activeStakes,
                        "items-per-page": 25,
                        "mobile-breakpoint": "100",
                        "multi-sort": "",
                        "sort-desc": !0,
                        "sort-by": "lockedDay"
                    },
                    scopedSlots: e._u([{
                        key: "item.servedDays",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.add(a.lockedDay, a.stakedDays)))]
                        }
                    }, {
                        key: "item.progress",
                        fn: function(t) {
                            var a = t.item;
                            return [e.isWaiting(a) ? n("span", [e._v("Waiting")]) : n("v-progress-linear", {
                                attrs: {
                                    width: 300,
                                    "background-opacity": .9,
                                    "buffer-value": e.getProgressBar(a),
                                    stream: "",
                                    color: "amber"
                                }
                            })]
                        }
                    }, {
                        key: "item.stakeShares",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s("object" === typeof a.stakeShares ? e.getPayout(a.stakeShares) : a.stakeShares))]
                        }
                    }, {
                        key: "item.stakedSuns",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.getPayout(a.stakedSuns._hex)))]
                        }
                    }, {
                        key: "item.actions",
                        fn: function(t) {
                            var a = t.item;
                            return ["collect" == e.getStatus(a) ? n("v-btn", {
                                staticStyle: {
                                    background: "linear-gradient(90deg,#8262ff 0%,#5124ff 100%)",
                                    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 3px 6px,rgba(0, 0, 0, 0.2) 0px 0px 10px 3px inset,rgb(130 98 255 / 0.51) 0px 3px 20px,rgb(81 36 255 / 0.48) 0px 3px 35px"
                                },
                                attrs: {
                                    width: "100px",
                                    small: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.endStake(a.stakeId)
                                    }
                                }
                            }, [e._v("Collect")]) : "cancel" == e.getStatus(a) ? n("v-btn", {
                                staticStyle: {
                                    border: "1px solid #814975"
                                },
                                attrs: {
                                    width: "100px",
                                    small: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.endStake(a.stakeId)
                                    }
                                }
                            }, [e._v("Cancel")]) : e._e(), e._v(" " + e._s(a.action) + " ")]
                        }
                    }, {
                        key: "item.bonus",
                        fn: function(t) {
                            var a = t.item;
                            return [a.bonus ? n("span", [e._v(" " + e._s(a.bonus) + " ")]) : n("span", [e._v("0")])]
                        }
                    }, {
                        key: "item.interest",
                        fn: function(t) {
                            var a = t.item;
                            return [n("span", [e._v(" " + e._s(e.abbreviate_number(a.interest, 2)) + " ")])]
                        }
                    }, {
                        key: "item.currentValue",
                        fn: function(t) {
                            var a = t.item;
                            return [n("span", [e._v(" " + e._s(e.abbreviate_number(a.currentValue, 2)) + " ")])]
                        }
                    }, {
                        key: "item.divRewards",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(a.divRewards))]
                        }
                    }])
                })], 1), n("v-card", {
                    staticClass: "mt-8 mb-5"
                }, [n("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        fixed: ""
                    }
                }, [n("v-toolbar-title", [e._v("My Ended Stakes")]), n("v-spacer")], 1), n("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: e.headersEndedStake,
                        items: e.endedStakes,
                        loading: "true",
                        "items-per-page": 15,
                        "mobile-breakpoint": "100",
                        "multi-sort": ""
                    },
                    scopedSlots: e._u([{
                        key: "item.payout",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.getPayout(a.payout)))]
                        }
                    }, {
                        key: "item.stakedSuns",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.getPayout(a.stakedSuns)))]
                        }
                    }, {
                        key: "item.stakeReturn",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.getPayout(a.stakeReturn)))]
                        }
                    }, {
                        key: "item.dividends",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.getPayout(100 * a.dividends) + " TRX"))]
                        }
                    }, {
                        key: "item.progress",
                        fn: function(t) {
                            var a = t.item;
                            return ["Canceled" == e.getProgress(a) ? n("v-chip", {
                                staticStyle: {
                                    border: "1px solid #814975",
                                    background: "#272727"
                                },
                                attrs: {
                                    width: "100px",
                                    small: "",
                                    label: ""
                                }
                            }, [e._v("canceled")]) : e._e(), "Finished" == e.getProgress(a) ? n("v-chip", {
                                staticStyle: {
                                    border: "1px solid #545454",
                                    background: "#272727"
                                },
                                attrs: {
                                    width: "100px",
                                    small: "",
                                    label: ""
                                }
                            }, [e._v("Finished")]) : e._e()]
                        }
                    }, {
                        key: "item.stakeShares",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.getPayout(a.stakeShares)))]
                        }
                    }, {
                        key: "item.servedDays",
                        fn: function(t) {
                            var a = t.item;
                            return [e._v(e._s(e.add(a.lockedDay, a.servedDays)))]
                        }
                    }])
                })], 1)], 1)], 1)], 1), n("v-snackbar", {
                    attrs: {
                        timeout: "10000",
                        color: e.color,
                        top: "",
                        center: ""
                    },
                    model: {
                        value: e.snackbar,
                        callback: function(t) {
                            e.snackbar = t
                        },
                        expression: "snackbar"
                    }
                }, [e._v(e._s(e.text))])], 1)
            },
            le = [],
            ce = a("bc3a"),
            ue = a.n(ce),
            de = a("ef8e"),
            fe = a.n(de);

        function ve(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function pe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ve(Object(a), !0).forEach((function(t) {
                    be(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ve(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        function be(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function me(e) {
            return ke(e) || we(e) || ye(e) || he()
        }

        function he() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function ye(e, t) {
            if (e) {
                if ("string" === typeof e) return ge(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ge(e, t) : void 0
            }
        }

        function we(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }

        function ke(e) {
            if (Array.isArray(e)) return ge(e)
        }

        function ge(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
            return n
        }

        function xe(e, t, a, n, r, s, o) {
            try {
                var i = e[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? t(l) : Promise.resolve(l).then(n, r)
        }

        function Se(e) {
            return function() {
                var t = this,
                    a = arguments;
                return new Promise((function(n, r) {
                    var s = e.apply(t, a);

                    function o(e) {
                        xe(s, n, r, o, i, "next", e)
                    }

                    function i(e) {
                        xe(s, n, r, o, i, "throw", e)
                    }
                    o(void 0)
                }))
            }
        }
        var _e = 1e8,
            Ce = new fe.a({
                maxConcurrent: 1,
                minTime: 30
            }),
            je = {
                data: function() {
                    return {
                        lastUpdated: new Date,
                        labels: [0],
                        value: [0],
                        loadingCollectStake: !1,
                        valuesObj: null,
                        TRXDividends: null,
                        valid: !0,
                        snackbar: !1,
                        color: "",
                        text: "",
                        loading: !1,
                        user: {
                            address: null,
                            balance: null,
                            formattedBalance: null,
                            referrer: d
                        },
                        mainContract: null,
                        activeStakes: [],
                        endedStakes: [],
                        endedStatesHeaders: [],
                        daysData: [],
                        bonus: null,
                        currentDay: null,
                        amountToStake: null,
                        daysToStake: null,
                        headersActiveStake: [{
                            text: "Start",
                            value: "lockedDay"
                        }, {
                            text: "Last Full Day",
                            value: "servedDays"
                        }, {
                            text: "Progress",
                            value: "progress"
                        }, {
                            text: "Staked Amount",
                            value: "stakedSuns",
                            align: "center"
                        }, {
                            text: "Shares",
                            value: "stakeShares",
                            align: "center"
                        }, {
                            text: "BonusDay Rewards",
                            value: "bonus",
                            align: "center"
                        }, {
                            text: "Dividend Rewards",
                            value: "divRewards",
                            align: "center"
                        }, {
                            text: "Interest",
                            value: "interest",
                            align: "center"
                        }, {
                            text: "Current Value",
                            value: "currentValue",
                            align: "center"
                        }, {
                            text: "Actions",
                            value: "actions",
                            sortable: !1,
                            align: "center"
                        }],
                        headersEndedStake: [{
                            text: "Start",
                            value: "lockedDay"
                        }, {
                            text: "End",
                            value: "servedDays"
                        }, {
                            text: "Progress",
                            value: "progress"
                        }, {
                            text: "Staked Amount",
                            value: "stakedSuns",
                            align: "center"
                        }, {
                            text: "Shares",
                            value: "stakeShares"
                        }, {
                            text: "Dividends",
                            value: "dividends"
                        }, {
                            text: "BonusDay Rewards + Stake Interest",
                            value: "payout",
                            align: "center"
                        }, {
                            text: "Paid Amount",
                            value: "stakeReturn"
                        }],
                        numberRule: function(e) {
                            return !(!e || e.trim()) || (!isNaN(parseFloat(e)) && e > 0 || "Number has to be greater than 0")
                        }
                    }
                },
                created: function() {
                    return Se(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                mounted: function() {
                    var e = this,
                        t = new Promise((function(e, t) {
                            window["tronWeb"] && window["tronWeb"]["ready"] ? e(!0) : window["addEventListener"]("load", (function() {
                                var t = setInterval((function() {
                                    window["tronWeb"] && window["tronWeb"]["ready"] && e(!0), clearInterval(t)
                                }), 200);
                                setTimeout((function() {
                                    clearInterval(t)
                                }), 1e4)
                            }))
                        }));
                    t["then"]((function(t) {
                        return new Promise(function() {
                            var t = Se(i.a.mark((function t(a, n) {
                                var r, s, o, l;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (console.log(n), r = window.tronWeb.defaultAddress.base58, r) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", a(!1));
                                        case 4:
                                            return e.user.address = r, s = window.tronWeb.address.toHex(r), s = "0x" + s.slice(2), t.prev = 7, t.next = 10, ue.a.get("/api/events?userAddress=".concat(s));
                                        case 10:
                                            return o = t.sent, l = o.data, e.endedStakes = l.map((function(e) {
                                                var t = Object.assign({}, e);
                                                return t.result
                                            })), e.endedStakes.sort((function(e, t) {
                                                return t.lockedDay - e.lockedDay
                                            })), t.next = 16, e.setUpContracts();
                                        case 16:
                                            return t.next = 18, e.getBalance();
                                        case 18:
                                            setInterval((function() {
                                                window.tronWeb && e.user.address !== window.tronWeb.defaultAddress.base58 && location["reload"]()
                                            }), 700), t.next = 24;
                                            break;
                                        case 21:
                                            t.prev = 21, t.t0 = t["catch"](7), console.log("err==>>", t.t0);
                                        case 24:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [7, 21]
                                ])
                            })));
                            return function(e, a) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }))
                },
                methods: {
                    timeAgo: function(e) {
                        c.a.updateLocale("en", {
                            relativeTime: {
                                future: "in %s",
                                past: "%s ago",
                                s: function(e) {
                                    return e + "s ago"
                                },
                                ss: "%ds ago",
                                m: "1m ago",
                                mm: "%dm ago",
                                h: "1h ago",
                                hh: "%dh ago",
                                d: "1d ago",
                                dd: "%dd ago",
                                M: "a month ago",
                                MM: "%d months ago",
                                y: "a year ago",
                                yy: "%d years ago"
                            }
                        });
                        var t = c()().diff(e, "seconds"),
                            a = c()("2018-01-01").startOf("day").seconds(t);
                        return t > 300 ? c()(e).fromNow(!0) : t < 60 ? a.format("s") + "s ago" : a.format("m:ss") + "m ago"
                    },
                    setUpContracts: function(e) {
                        var t = this;
                        return new Promise((function(a, n) {
                            if (!u && !e) return null;
                            window.tronWeb["contract"]()["at"](u || e, function() {
                                var e = Se(i.a.mark((function e(r, s) {
                                    return i.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (r) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return t.mainContract = s, e.next = 4, t.getCurrentDay();
                                            case 4:
                                                return e.next = 6, t.getDivChartData();
                                            case 6:
                                                return t.loading = !0, e.next = 9, t.getDaysData();
                                            case 9:
                                                return e.next = 11, t.myStakesCount();
                                            case 11:
                                                return e.next = 13, t.runDividends();
                                            case 13:
                                                setInterval(Se(i.a.mark((function e() {
                                                    return i.a.wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, t.getCurrentDay();
                                                            case 2:
                                                                return e.next = 4, t.runDividends();
                                                            case 4:
                                                                t.lastUpdated = new Date;
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), 1e4), setInterval(Se(i.a.mark((function e() {
                                                    return i.a.wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, t.myStakesCount();
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), 2e4), a(), e.next = 20;
                                                break;
                                            case 18:
                                                console.error("data1 error==>>", r), n(r);
                                            case 20:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }))
                    },
                    myStakesCount: function() {
                        var e = this;
                        return Se(i.a.mark((function t() {
                            var a, n;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, e.mainContract.stakeCount(e.user.address).call({
                                            shouldPollResponse: !0
                                        });
                                    case 3:
                                        return a = t.sent, n = 1e6 * parseFloat(window.tronWeb.fromSun(a._hex)), t.next = 7, e.ck1(n);
                                    case 7:
                                        e.loading = !1, t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t["catch"](0), console.log("errrrr stake count==>>>", t.t0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 10]
                            ])
                        })))()
                    },
                    getStatus: function(e) {
                        return e.lockedDay + e.stakedDays < this.currentDay + 1 ? "collect" : "cancel"
                    },
                    getLastFullDay: function() {
                        return null != this.daysToStake ? Number(this.daysToStake) + Number(this.currentDay) + 1 : "--"
                    },
                    getProgressBar: function(e) {
                        var t = this.currentDay - e.lockedDay,
                            a = t / e.stakedDays * 100;
                        return a
                    },
                    getDrc: function(e) {
                        return this.mainContract.stakeLists(this.user.address, e).call({
                            shouldPollResponse: !0
                        })
                    },
                    getDaysData: function() {
                        var e = this;
                        return Se(i.a.mark((function t() {
                            var a, n;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, ue.a.get("/api/days");
                                    case 2:
                                        a = t.sent, n = a.data, e.daysData = n;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    runDividends: function() {
                        var e = this;
                        return Se(i.a.mark((function t() {
                            var a, n, r;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.mainContract.xfLobby(e.currentDay).call({
                                            shouldPollResponse: !0
                                        });
                                    case 2:
                                        a = t.sent, n = e.abbreviate_number(window.tronWeb["fromSun"](a._hex), 2), r = e.labels.slice(-1)[0], r !== e.currentDay && (e.value = [].concat(me(e.value), [parseFloat(n.slice(0, -1))]), e.labels = [].concat(me(e.labels), [e.currentDay]), e.TRXDividends = n + " TRX");
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    ck1: function() {
                        var e = Se(i.a.mark((function e(t) {
                            var a = this;
                            return i.a.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all(Array.from(Array(t).keys()).map(function() {
                                            var e = Se(i.a.mark((function e(t) {
                                                var n, r, s, o, l, c, u, d, f, v, p, b, m, h;
                                                return i.a.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Ce.schedule((function() {
                                                                return a.getDrc(t)
                                                            }));
                                                        case 2:
                                                            for (n = e.sent, r = n.lockedDay, s = n.stakedDays, o = n.stakeShares, l = 0, c = function(e) {
                                                                    var t = a.daysData.find((function(t) {
                                                                        return t.day === e
                                                                    }));
                                                                    if (t) {
                                                                        var r = t.payoutTotal,
                                                                            s = t.stakeSharesTotal,
                                                                            i = parseFloat(window.tronWeb.fromSun(o._hex)) / 100,
                                                                            c = r * i / s;
                                                                        n.bonus = a.abbreviate_number(parseFloat(l) + parseFloat(c), 2), l = c
                                                                    }
                                                                }, u = r + 4; u < r + s; u += 5) c(u);
                                                            for (d = 0, f = 0, v = parseFloat(window.tronWeb.fromSun(o._hex)) / 100, p = function(e) {
                                                                    a.daysData.forEach((function(t) {
                                                                        t.day == r + e && (f +=  t.totalDividends * v / t.stakeSharesTotal, d = a.abbreviate_number(100 * .97 * f, 3) + " TRX")
                                                                    }))
                                                                }, b = 0; b < s; b++) p(b);
                                                            for (n.divRewards = d, m = 0, h = r; h < s + r; h++) a.daysData.forEach((function(e) {
                                                                e.day == h && (m += e.payoutTotal * parseFloat(window.tronWeb.fromSun(o._hex)) / e.stakeSharesTotal)
                                                            }));
                                                            return n.interest = m / 100, n.currentValue = Number(parseInt(n.stakedSuns._hex) / _e) + Number(n.interest), e.abrupt("return", n);
                                                        case 18:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 2:
                                        this.activeStakes = e.sent;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    getCurrentDay: function() {
                        var e = this;
                        this.mainContract.currentDay().call({
                            shouldPollResponse: !1
                        }).then((function(t) {
                            e.currentDay = 1e6 * window.tronWeb.fromSun(t._hex)
                        }))
                    },
                    getProgress: function(e) {
                        if (e.servedDays > 0 && "0" !== e.payout) {
                            var t = "Finished";
                            return t
                        }
                        return "Canceled"
                    },
                    getPayout: function(e) {
                        return this.abbreviate_number(parseInt(e) / _e, 2)
                    },
                    isWaiting: function(e) {
                        return e.lockedDay == this.currentDay + 1
                    },
                    doStake: function() {
                        var e = this;
                        this.loading = !0, this.mainContract.balanceOf(this.user.address).call({
                            shouldPollResponse: !1
                        }).then((function(t) {
                            window.tronWeb.fromSun(t._hex) / 100 < parseFloat(e.amountToStake) ? (e.snackbar = !0, e.text = "Something went wrong. Remove decimal value, if present, otherwise Insufficient Balance!", e.color = "error") : e.mainContract.stakeStart(parseFloat(e.amountToStake) * _e, parseInt(e.daysToStake)).send({
                                shouldPollResponse: !1
                            }).then((function() {
                                var t = {
                                    lockedDay: e.currentDay + 1,
                                    stakedDays: parseInt(e.daysToStake),
                                    stakedSuns: parseInt(e.amountToStake),
                                    stakeShares: "Waiting..."
                                };
                                e.activeStakes = e.activeStakes.concat(t), e.loading = !1, setTimeout((function() {
                                    return e.myStakesCount()
                                }), 5e3), e.snackbar = !0, e.color = "#8161ff", e.text = "Successfully staked ".concat(parseFloat(e.amountToStake), " marnion for ").concat(parseInt(e.daysToStake), " days.")
                            })).catch((function(t) {
                                e.snackbar = !0, e.text = "Something went wrong, check input and try again.", e.color = "error", console.log(t)
                            })).finally((function() {
                                e.amountToStake = "", e.daysToStake = ""
                            }))
                        }))
                    },
                    getBalance: function() {
                        var e = this;
                        this.mainContract.balanceOf(this.user.address).call({
                            shouldPollResponse: !0
                        }).then((function(t) {
                            e.user.balance = window.tronWeb.fromSun(t._hex) / 100, e.user.formattedBalance = e.user.balance.toFixed(2)
                        }))
                    },
                    abbreviate_number: function(e, t) {
                        var a = parseFloat(e);
                        if (null === a) return null;
                        if (0 === a) return "0";
                        t = !t || t < 0 ? 0 : t;
                        var n = a["toPrecision"](2)["split"]("e"),
                            r = 1 === n["length"] ? 0 : Math["floor"](Math["min"](n[1]["slice"](1), 14) / 3),
                            s = r < 1 ? a["toFixed"](0 + t) : (a / Math["pow"](10, 3 * r))["toFixed"](1 + t),
                            o = s < 0 ? s : Math["abs"](s),
                            i = o + ["", "K", "M", "B", "T"][r];
                        return i
                    },
                    add: function(e, t) {
                        var a = parseInt(e),
                            n = parseInt(t);
                        return Number(a) + Number(n)
                    },
                    getTime: function() {
                        return this.timeAgo(this.lastUpdated)
                    },
                    endStake: function(e) {
                        var t = this;
                        return Se(i.a.mark((function a() {
                            var n, r, s;
                            return i.a.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return t.loading = !0, t.loadingCollectStake = !0, n = t.activeStakes.findIndex((function(t) {
                                            return t.stakeId === e
                                        })), a.prev = 3, r = 5e3, a.next = 7, t.mainContract.stakeEnd(n, e).send({
                                            shouldPollResponse: !1
                                        });
                                    case 7:
                                        s = a.sent, setTimeout(Se(i.a.mark((function a() {
                                            var n, r, o;
                                            return i.a.wrap((function(a) {
                                                while (1) switch (a.prev = a.next) {
                                                    case 0:
                                                        return a.next = 2, ue.a.get("".concat("https://api.trongrid.io", "/v1/transactions/").concat(s, "/events"));
                                                    case 2:
                                                        return n = a.sent, r = n.data, o = r.data.find((function(e) {
                                                            return "StakeEnd" === e.event_name
                                                        })), a.next = 7, ue.a.post("/api/events", pe({}, o));
                                                    case 7:
                                                        t.activeStakes = t.activeStakes.filter((function(t) {
                                                            return t.stakeId !== e
                                                        })), t.endedStakes.unshift(o.result), t.loadingCollectStake = !1;
                                                    case 10:
                                                    case "end":
                                                        return a.stop()
                                                }
                                            }), a)
                                        }))), r), a.next = 18;
                                        break;
                                    case 11:
                                        a.prev = 11, a.t0 = a["catch"](3), t.snackbar = !0, t.text = "Something went wrong, " + a.t0, t.color = "error", console.log("an err occcc==>>>", a.t0), t.loadingCollectStake = !1;
                                    case 18:
                                        return a.prev = 18, t.mainContract.balanceOf(t.user.address).call({
                                            shouldPollResponse: !1
                                        }), t.loading = !1, t.loadingCollectStake = !1, a.finish(18);
                                    case 23:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [3, 11, 18, 23]
                            ])
                        })))()
                    },
                    getDailyBonusRewards: function(e) {
                        for (var t = e.lockedDay, a = e.stakedDays, n = parseFloat(window.tronWeb.fromSun(e.stakeShares._hex)), r = 0, s = 0, o = t; o < a + t; o++) r < 4 ? r++ : (s = this.processDailyBonus(o, s, n), r = 0);
                        return this.bonus = s, s
                    },
                    processDailyBonus: function(e, t, a) {
                        var n = this;
                        return this.daysData.forEach((function(r) {
                            if (r.day == e) {
                                var s = r.payoutTotal * a / r.stakeSharesTotal;
                                t = n.abbreviate_number(parseFloat(s), 2)
                            }
                        })), t
                    },
                    getDivChartData: function() {
                        var e = this;
                        return Se(i.a.mark((function t() {
                            var a, n;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, ue.a.get("/api/days");
                                    case 3:
                                        a = t.sent, n = a.data, e.value = [].concat(me(e.value), me(n.map((function(t) {
                                            return parseFloat(e.abbreviate_number(t.totalDividends, 2).slice(0, -1))
                                        })))), e.labels = [].concat(me(e.labels), me(n.map((function(e) {
                                            return e.day
                                        })))), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](0), console.log("an err occurred==>>>", t.t0);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 9]
                            ])
                        })))()
                    }
                }
            },
            De = je,
            Te = a("8336"),
            Pe = a("b0af"),
            Oe = a("99d9"),
            Re = a("cc20"),
            Ae = a("62ad"),
            Ie = a("8fea"),
            Ee = a("ce7e"),
            Ve = a("cd55"),
            Le = a("49e2"),
            We = a("c865"),
            Fe = a("0393"),
            Ne = a("0789"),
            Me = a("4bd4"),
            Be = a("132d"),
            ze = a("a797"),
            Ue = a("490a"),
            He = a("8e36"),
            Xe = a("0fd9"),
            qe = a("8dd9"),
            $e = a("2db4"),
            Ye = a("2fa4"),
            Je = a("7f2e"),
            Qe = a("8654"),
            Ke = a("71d9"),
            Ze = a("2a7f"),
            Ge = Object(x["a"])(De, ie, le, !1, null, null, null),
            et = Ge.exports;
        _()(Ge, {
            VBtn: Te["a"],
            VCard: Pe["a"],
            VCardSubtitle: Oe["a"],
            VCardText: Oe["b"],
            VChip: Re["a"],
            VCol: Ae["a"],
            VDataTable: Ie["a"],
            VDivider: Ee["a"],
            VExpansionPanel: Ve["a"],
            VExpansionPanelContent: Le["a"],
            VExpansionPanelHeader: We["a"],
            VExpansionPanels: Fe["a"],
            VFadeTransition: Ne["c"],
            VForm: Me["a"],
            VIcon: Be["a"],
            VOverlay: ze["a"],
            VProgressCircular: Ue["a"],
            VProgressLinear: He["a"],
            VRow: Xe["a"],
            VSheet: qe["a"],
            VSnackbar: $e["a"],
            VSpacer: Ye["a"],
            VSparkline: Je["a"],
            VTextField: Qe["a"],
            VToolbar: Ke["a"],
            VToolbarTitle: Ze["a"]
        });
        var tt = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("div", {
                    staticClass: "auction"
                }, [a("div", [a("v-card", {
                    staticClass: "p-2"
                }, [a("v-card-title", [e._v("Dividend Histogram")]), a("area-chart", {
                    attrs: {
                        data: e.valuesObj,
                        xtitle: "Days",
                        ytitle: "Millions"
                    }
                })], 1)], 1), a("div", [a("v-row", {
                    staticClass: "mb-6",
                    attrs: {
                        "no-gutters": ""
                    }
                }, [a("v-dialog", {
                    attrs: {
                        "max-width": "400"
                    },
                    model: {
                        value: e.dialog,
                        callback: function(t) {
                            e.dialog = t
                        },
                        expression: "dialog"
                    }
                }, [a("v-system-bar", {
                    attrs: {
                        color: "#2b2b33",
                        dark: ""
                    }
                }, [a("v-spacer"), a("v-icon", [e._v("mdi-window-minimize")]), a("v-icon", {
                    on: {
                        click: function(t) {
                            return e.close()
                        }
                    }
                }, [e._v("mdi-close")])], 1), a("v-card", {
                    staticClass: "p-2"
                }, [a("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        outlined: "",
                        label: "Amount of TRON to Enter",
                        required: ""
                    },
                    model: {
                        value: e.amountToStake,
                        callback: function(t) {
                            e.amountToStake = t
                        },
                        expression: "amountToStake"
                    }
                }), a("v-btn", {
                    staticClass: "mb-2",
                    staticStyle: {
                        background: "linear-gradient(90deg, #8262ff 0%, #5124ff 100%)"
                    },
                    attrs: {
                        block: "",
                        dark: "",
                        color: "primary"
                    },
                    on: {
                        click: function(t) {
                            return e.enterLobbyFinal()
                        }
                    }
                }, [e._v("Enter the Auction")])], 1)], 1), a("v-col", {
                    staticClass: "pa-2",
                    attrs: {
                        lg: "4",
                        md: "4",
                        sm: "12"
                    }
                }, [a("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        flat: ""
                    }
                }, [a("v-toolbar-title", [e._v("Current Dividends Pool")]), a("v-spacer"), a("p", {
                    staticStyle: {
                        color: "white !important"
                    }
                })], 1), a("v-card", {
                    attrs: {
                        flat: ""
                    }
                }, [a("v-card-text", [e._v("One of the benefits of Staking marnion is TRON dividends. At the end of each day a TRON dividends pool will be calculated and allocated to all the open stakes based on their stake amount. The TRON dividends pool comes from the total daily entry of auction lobby.The only way to receive TRON Dividends is having open stakes")]), a("v-row", {
                    staticClass: "ml-4 mr-4"
                }, [a("v-btn", {
                    staticClass: "headline mb-4",
                    staticStyle: {
                        background: "linear-gradient(90deg, #8262ff 0%, #5124ff 100%)"
                    },
                    attrs: {
                        block: ""
                    }
                }, [e._v(" " + e._s(e.TRXDividends))])], 1)], 1), a("v-toolbar", {
                    staticClass: "titlebar mt-5 pl-0",
                    attrs: {
                        flat: ""
                    }
                }, [a("v-toolbar-title", [e._v("Auction FAQ")]), a("v-spacer"), a("p", {
                    staticStyle: {
                        color: "white !important"
                    }
                })], 1), a("v-card", [a("v-expansion-panels", {
                    attrs: {
                        focusable: ""
                    }
                }, [a("v-expansion-panel", [a("v-expansion-panel-header", [e._v("What are auction lobbies?")]), a("v-expansion-panel-content", [e._v(" Auction lobbies are Daily Auctions that offer marnion tokens for TRON based on the marnion and TRON pool at the end of the day. ")])], 1), a("v-expansion-panel", [a("v-expansion-panel-header", [e._v("How much marnion do lobbies pay?")]), a("v-expansion-panel-content", [e._v("Lobbies marnion pool will start from 2.5 million marnion per day and goes until 1 million over the next 365 days but never goes lower than 1 million tokens per day.")])], 1), a("v-expansion-panel", [a("v-expansion-panel-header", [e._v("Buying tokens from exchange or participating in auction?")]), a("v-expansion-panel-content", [e._v("It is more profitable to purchase marnion tokens in the Auction lobby rather than on exchanges. Stake holders are rewarded via dividends from the daily TRX pool.")])], 1), a("v-expansion-panel", [a("v-expansion-panel-header", [e._v("Where does all the TRON go?")]), a("v-expansion-panel-content", [e._v("Dividends, well at least 97% of them! The other 3% is reserved for promotion and platform development costs.")])], 1), a("v-expansion-panel", [a("v-expansion-panel-header", [e._v("When do lobbies end?")]), a("v-expansion-panel-content", [e._v("Lobbies are daily and restart every day at 00:00 UTC")])], 1)], 1)], 1)], 1), a("v-col", {
                    staticClass: "pa-2",
                    attrs: {
                        lg: "8",
                        md: "8",
                        sm: "12"
                    }
                }, [e.myObj.length < 0 ? a("v-skeleton-loader", {
                    staticClass: "mx-auto",
                    attrs: {
                        type: "table"
                    }
                }) : e._e(), e.myObj.length > 0 ? a("v-card", {
                    attrs: {
                        transition: "fade-transition"
                    }
                }, [a("v-toolbar", {
                    staticClass: "NUI-titlebar mt-5 pl-0 pr-0",
                    attrs: {
                        fixed: ""
                    }
                }, [a("v-toolbar-title", {
                    staticClass: "ml-1 pl-0 pr-0 mr-0"
                }, [e._v("Auction Lobby")]), a("v-spacer"), a("v-btn", {
                    staticClass: "mr-4",
                    staticStyle: {
                        background: "linear-gradient(272.25deg,rgba(81, 36, 255, 0.15) 0.08%,rgba(130, 98, 255, 0.15) 95.38%,rgba(138, 113, 234, 0.15) 95.38%)",
                        "background-image": "linear-gradient(272.25deg,rgba(81, 36, 255, 0.15) 0.08%,rgba(130, 98, 255, 0.15) 95.38%,rgba(138, 113, 234, 0.15) 95.38%)",
                        border: "1px solid #8161ff"
                    },
                    attrs: {
                        small: "",
                        dark: ""
                    },
                    on: {
                        click: function(t) {
                            return e.enterLobby()
                        }
                    }
                }, [e._v("enter auction lobby")])], 1), a("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: e.headers,
                        items: e.myObj,
                        "items-per-page": 25,
                        "default-sort": "day:desc",
                        "mobile-breakpoint": "100",
                        "multi-sort": "",
                        "loading-text": "Loading... Please wait"
                    },
                    scopedSlots: e._u([{
                        key: "item.status",
                        fn: function(t) {
                            var n = t.item;
                            return [n ? a("span", ["open" == n.state ? a("v-btn", {
                                staticStyle: {
                                    border: "1px solid #8161ff"
                                },
                                attrs: {
                                    small: "",
                                    dark: "",
                                    "min-width": "100px"
                                },
                                on: {
                                    click: function(t) {
                                        return e.enterLobby(n)
                                    }
                                }
                            }, [e._v("Enter")]) : "closed" == n.state && n.entry > 0 ? a("v-btn", {
                                staticStyle: {
                                    background: "linear-gradient(90deg,#8262ff 0%,#5124ff 100%)",
                                    "box-shadow": "rgba(0, 0, 0, 0.3) 0px 3px 6px,rgba(0, 0, 0, 0.2) 0px 0px 10px 3px inset,rgb(130 98 255 / 0.51) 0px 3px 20px,rgb(81 36 255 / 0.48) 0px 3px 35px"
                                },
                                attrs: {
                                    small: "",
                                    dark: "",
                                    "min-width": "100px"
                                },
                                on: {
                                    click: function(t) {
                                        return e.collectLobby(n)
                                    }
                                }
                            }, [e._v("collect")]) : "closed" == n.state ? a("v-btn", {
                                attrs: {
                                    small: "",
                                    color: "#757575",
                                    disabled: "",
                                    "min-width": "100px"
                                }
                            }, [e._v("ended")]) : e._e()], 1) : e._e()]
                        }
                    }, {
                        key: "item.received",
                        fn: function(t) {
                            var n = t.item;
                            return [n.received ? a("span", {
                                staticStyle: {}
                            }, [e._v(" " + e._s(n.received) + " ")]) : a("span", {
                                attrs: {
                                    vstyle: "text-align=center"
                                }
                            }, [e._v(" -- ")])]
                        }
                    }, {
                        key: "item.entry",
                        fn: function(t) {
                            var n = t.item;
                            return [n.entry ? a("span", {
                                staticStyle: {}
                            }, [e._v(" " + e._s(n.entry) + " ")]) : a("span", {
                                staticStyle: {}
                            }, [e._v(" -- ")])]
                        }
                    }], null, !1, 3678067178)
                })], 1) : e._e()], 1)], 1)], 1), a("v-snackbar", {
                    attrs: {
                        timeout: "10000",
                        color: e.color,
                        top: "",
                        center: ""
                    },
                    model: {
                        value: e.snackbar,
                        callback: function(t) {
                            e.snackbar = t
                        },
                        expression: "snackbar"
                    }
                }, [e._v(e._s(e.text))])], 1)])
            },
            at = [];

        function nt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function rt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nt(Object(a), !0).forEach((function(t) {
                    st(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : nt(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        function st(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function ot(e, t, a, n, r, s, o) {
            try {
                var i = e[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? t(l) : Promise.resolve(l).then(n, r)
        }

        function it(e) {
            return function() {
                var t = this,
                    a = arguments;
                return new Promise((function(n, r) {
                    var s = e.apply(t, a);

                    function o(e) {
                        ot(s, n, r, o, i, "next", e)
                    }

                    function i(e) {
                        ot(s, n, r, o, i, "throw", e)
                    }
                    o(void 0)
                }))
            }
        }
        var lt = 1e8,
            ct = 1e6,
            ut = {
                data: function() {
                    return {
                        TRXDividends: null,
                        valuesObj: {
                            0: 0
                        },
                        valuesObj2: [0],
                        limiter: null,
                        snackbar: !1,
                        color: "",
                        text: "",
                        auctionBtn: "Enter",
                        currentItemIndex: -1,
                        currentItem: null,
                        dialog: !1,
                        amountToStake: null,
                        myObj: [],
                        anotherObj: [],
                        tempdata: {
                            day: null
                        },
                        user: {
                            address: null,
                            balance: null,
                            referrer: d
                        },
                        day: null,
                        amount: null,
                        mainContract: {},
                        endedStatesHeaders: [],
                        currentDay: null,
                        daysToStake: null,
                        headers: [{
                            text: "Day",
                            value: "day"
                        }, {
                            text: "marnion Pool",
                            value: "amount"
                        }, {
                            text: "NUI/TRON",
                            value: "ratio"
                        }, {
                            text: "State",
                            value: "state"
                        }, {
                            text: "marnion Received",
                            value: "received"
                        }, {
                            text: "Your Entry",
                            value: "entry"
                        }, {
                            text: "Daily Entry",
                            value: "dayEntry"
                        }, {
                            text: "Status",
                            value: "status"
                        }]
                    }
                },
                mounted: function() {
                    var e = this,
                        t = new Promise((function(e, t) {
                            window.tronWeb && window.tronWeb.ready ? e(!0) : window.addEventListener("load", (function() {
                                var t = setInterval((function() {
                                    window.tronWeb && window.tronWeb.ready && e(!0), clearInterval(t)
                                }), 200);
                                setTimeout((function() {
                                    clearInterval(t)
                                }), 200)
                            }))
                        })).then((function() {
                            return console.log("Tronweb installed and logged in"), !0
                        })).catch((function(e) {
                            return console.error("Error while detecting tronweb", e), !1
                        }));
                    t["then"]((function(t) {
                        return new Promise(function() {
                            var t = it(i.a.mark((function t(a) {
                                var n;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = window.tronWeb.defaultAddress.base58, n) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return", a(!1));
                                        case 3:
                                            return e.user.address = n, t.next = 6, e.setUpContracts();
                                        case 6:
                                            try {
                                                setInterval((function() {
                                                    window.tronWeb && e.user.address !== window.tronWeb.defaultAddress.base58 && location.reload()
                                                }), 700)
                                            } catch (r) {
                                                console.log("err==>>", r)
                                            }
                                            case 7:
                                            case "end":
                                                return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }))
                },
                methods: {
                    setUpContracts: function(e) {
                        var t = this;
                        return new Promise((function(a, n) {
                            if (!u && !e) return a(null);
                            window.tronWeb.contract().at(u || e, function() {
                                var e = it(i.a.mark((function e(r, s) {
                                    return i.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (r) {
                                                    e.next = 20;
                                                    break
                                                }
                                                return t.mainContract = s, e.next = 4, t.getDivChartData();
                                            case 4:
                                                return e.next = 6, t.getCurrentDay();
                                            case 6:
                                                return e.next = 8, t.runDividends();
                                            case 8:
                                                return setInterval(it(i.a.mark((function e() {
                                                    return i.a.wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, t.getDivChartData();
                                                            case 2:
                                                                return e.next = 4, t.getCurrentDay();
                                                            case 4:
                                                                return e.next = 6, t.runDividends();
                                                            case 6:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), 3e4), e.prev = 9, e.next = 12, t.getLobbyTable();
                                            case 12:
                                                e.next = 17;
                                                break;
                                            case 14:
                                                e.prev = 14, e.t0 = e["catch"](9), console.log(e.t0);
                                            case 17:
                                                a(), e.next = 22;
                                                break;
                                            case 20:
                                                console.error("data1 error==>>", r), n(r);
                                            case 22:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 14]
                                    ])
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }))
                    },
                    getLobbyTable: function() {
                        var e = this;
                        return it(i.a.mark((function t() {
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.myObj = Array.from(Array(e.currentDay).keys()).reverse().map((function(t, a) {
                                                var n = t + 1,
                                                    r = {};
                                                return r.state = n === e.currentDay ? "open" : "closed", r.day = n, r.amount = e.abbreviate_number(e.calcDaysLobbyPayout(n) / lt, 2), r
                                            })), !e.limiter) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, e.limiter.stop();
                                    case 4:
                                        return e.limiter = new fe.a({
                                            maxConcurrent: 1,
                                            minTime: 300
                                        }), t.next = 7, Promise.allSettled(e.myObj.map(function() {
                                            var t = it(i.a.mark((function t(a, n) {
                                                return i.a.wrap((function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, e.limiter.schedule(it(i.a.mark((function t() {
                                                                var n, r, s, o;
                                                                return i.a.wrap((function(t) {
                                                                    while (1) switch (t.prev = t.next) {
                                                                        case 0:
                                                                            return t.next = 2, e.mainContract.xfLobby(a.day).call({
                                                                                shouldPollResponse: !0
                                                                            });
                                                                        case 2:
                                                                            return n = t.sent, r = parseFloat(window.tronWeb.fromSun(n)), a.ratio = 0 === r ? "-" : (e.calcDaysLobbyPayout(a.day) / lt / r)["toFixed"](3), s = 0, t.next = 8, e.mainContract.xfLobby(a.day).call({
                                                                                shouldPollResponse: !0
                                                                            }).then((function(t) {
                                                                                var a = parseFloat(window.tronWeb["fromSun"](t));
                                                                                return e.abbreviate_number(a, 2)
                                                                            }));
                                                                        case 8:
                                                                            return a.dayEntry = t.sent, t.next = 11, e.mainContract["xfLobbyMembers"](a.day, e.user.address).call({
                                                                                shouldPollResponse: !0
                                                                            });
                                                                        case 11:
                                                                            return o = t.sent, t.next = 14, Promise.allSettled(Array.from(Array(o.tailIndex).keys()).map(function() {
                                                                                var t = it(i.a.mark((function t(n) {
                                                                                    var o;
                                                                                    return i.a.wrap((function(t) {
                                                                                        while (1) switch (t.prev = t.next) {
                                                                                            case 0:
                                                                                                return t.next = 2, e.mainContract.xfLobbyEntry(e.user.address, a.day, n).call({
                                                                                                    shouldPollResponse: !1
                                                                                                });
                                                                                            case 2:
                                                                                                o = t.sent, s += parseFloat(window.tronWeb["fromSun"](o["rawAmount"]._hex)), a.entry = s, a.received = e.abbreviate_number(e.calcDaysLobbyPayout(a.day) / lt * s / r, 2);
                                                                                            case 6:
                                                                                            case "end":
                                                                                                return t.stop()
                                                                                        }
                                                                                    }), t)
                                                                                })));
                                                                                return function(e) {
                                                                                    return t.apply(this, arguments)
                                                                                }
                                                                            }()));
                                                                        case 14:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                                }), t)
                                                            }))));
                                                        case 2:
                                                            e.myObj.splice(n, 1, a);
                                                        case 3:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, a) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getDataEntry: function(e, t) {
                        var a = this;
                        return it(i.a.mark((function n() {
                            var r, s, o, l;
                            return i.a.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r = new fe.a({
                                            maxConcurrent: 25,
                                            minTime: 300
                                        }), s = {}, o = 0, l = a.currentDay, n.next = 6, Promise.allSettled(Array.from(Array(e.tailIndex).keys()).map(function() {
                                            var e = it(i.a.mark((function e(n) {
                                                return i.a.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", r.schedule(it(i.a.mark((function e() {
                                                                var r;
                                                                return i.a.wrap((function(e) {
                                                                    while (1) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.next = 2, a.mainContract.xfLobbyEntry(t, l, n).call({
                                                                                shouldPollResponse: !1
                                                                            });
                                                                        case 2:
                                                                            return r = e.sent, e.t0 = o, e.next = 6, parseFloat(window.tronWeb["fromSun"](r["rawAmount"]._hex));
                                                                        case 6:
                                                                            o = e.t0 += e.sent, s.entry = o;
                                                                        case 8:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            })))));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 6:
                                        return console.log("Entry===>", s), n.abrupt("return", s);
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    calcDaysLobbyPayout: function(e) {
                        return e <= 365 ? 25e13 - 410958904109 * (e - 1) : 1e14
                    },
                    getCurrentDay: function() {
                        var e = it(i.a.mark((function e() {
                            var t;
                            return i.a.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.mainContract.currentDay().call({
                                            shouldPollResponse: !0
                                        });
                                    case 2:
                                        t = e.sent, this.currentDay = 1e6 * window.tronWeb.fromSun(t._hex);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    runDividends: function() {
                        var e = this;
                        return it(i.a.mark((function t() {
                            var a, n;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.mainContract.xfLobby(e.currentDay).call({
                                            shouldPollResponse: !0
                                        });
                                    case 2:
                                        a = t.sent, n = e.abbreviate_number(window.tronWeb["fromSun"](a._hex), 2), e.valuesObj = rt(rt({}, e.valuesObj), {}, st({}, e.currentDay, parseFloat(n.slice(0, -1)))), e.TRXDividends = n + " TRX";
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    abbreviate_number: function(e, t) {
                        var a = parseFloat(e);
                        if (null === a) return null;
                        if (0 === a) return "0";
                        t = !t || t < 0 ? 0 : t;
                        var n = a["toPrecision"](2)["split"]("e"),
                            r = 1 === n["length"] ? 0 : Math["floor"](Math["min"](n[1]["slice"](1), 14) / 3),
                            s = r < 1 ? a["toFixed"](0 + t) : (a / Math["pow"](10, 3 * r))["toFixed"](1 + t),
                            o = s < 0 ? s : Math["abs"](s),
                            i = o + ["", "K", "M", "B", "T"][r];
                        return i
                    },
                    add: function(e, t) {
                        var a = parseInt(e),
                            n = parseInt(t);
                        return Number(a) + Number(n)
                    },
                    close: function() {
                        this.dialog = !1, this.amountToStake = null
                    },
                    enterLobby: function(e) {
                        this.dialog = !0, this.currentItemIndex = this.myObj.indexOf(e), this.currentItem = e
                    },
                    collectLobby: function(e) {
                        var t = this;
                        return it(i.a.mark((function a() {
                            var n;
                            return i.a.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, t.mainContract.xfLobbyExit(e.day, 0).send({
                                            shouldPollResponse: !1
                                        });
                                    case 3:
                                        n = t.myObj.findIndex((function(t) {
                                            return t.day === e.day
                                        })), t.myObj.splice(n, 1, rt(rt({}, e), {}, {
                                            received: null,
                                            entry: null,
                                            state: "closed"
                                        })), a.next = 10;
                                        break;
                                    case 7:
                                        a.prev = 7, a.t0 = a["catch"](0), console.log("err occurred", a.t0);
                                    case 10:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [0, 7]
                            ])
                        })))()
                    },
                    sleep: function(e) {
                        return new Promise((function(t) {
                            return setTimeout(t, e)
                        }))
                    },
                    delay: function() {
                        var e = this;
                        return it(i.a.mark((function t() {
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.sleep(5e3);
                                    case 2:
                                        return t.next = 4, e.getCurrentDay();
                                    case 4:
                                        return t.next = 6, e.getLobbyTable();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getDivChartData: function() {
                        var e = this;
                        return it(i.a.mark((function t() {
                            var a, n;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, ue.a.get("/api/days");
                                    case 3:
                                        a = t.sent, n = a.data, e.valuesObj = rt(rt({}, e.valuesObj), n.reduce((function(t, a) {
                                            return Object.assign(t, st({}, a.day, parseFloat(e.abbreviate_number(a.totalDividends, 2).slice(0, -1))))
                                        }), {})), e.mainContract.xfLobby(e.currentDay).call({
                                            shouldPollResponse: !0
                                        }).then((function(t) {
                                            e.TRXDividendsRaw = window.tronWeb["fromSun"](t._hex)
                                        })), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](0), console.log("an err occurred==>>>", t.t0);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 9]
                            ])
                        })))()
                    },
                    enterLobbyFinal: function() {
                        var e = this;
                        return it(i.a.mark((function t() {
                            var a;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.dialog = !1, e.snackbar = !0, e.color = "#8161ff", e.text = "Confirming " + e.amountToStake + " into auction, standby...", a = localStorage.getItem("referrerAddress") || "TUkY7QsBEX4EBSvhuTFeswFTap8UV3baYc", t.prev = 5, t.next = 8, e.mainContract.xfLobbyEnter(a).send({
                                            shouldPollResponse: !1,
                                            callValue: parseInt(parseFloat(e.amountToStake * ct))
                                        }).then(function() {
                                            var t = it(i.a.mark((function t(a) {
                                                var n;
                                                return i.a.wrap((function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, e.mainContract.xfLobby(e.currentItem.day).call({
                                                                shouldPollResponse: !0
                                                            });
                                                        case 2:
                                                            n = t.sent, parseFloat(window.tronWeb.fromSun(n)), e.text = e.amountToStake + " successfully entered lobby.", e.snackbar = !0;
                                                        case 6:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch((function(e) {
                                            console["error"](e, "er")
                                        })).finally(it(i.a.mark((function t() {
                                            return i.a.wrap((function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                    case 0:
                                                        e.delay();
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))));
                                    case 8:
                                        t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t["catch"](5), console.log(t.t0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, 10]
                            ])
                        })))()
                    }
                }
            },
            dt = ut,
            ft = a("169a"),
            vt = a("3129"),
            pt = a("afd9"),
            bt = Object(x["a"])(dt, tt, at, !1, null, null, null),
            mt = bt.exports;
        _()(bt, {
            VBtn: Te["a"],
            VCard: Pe["a"],
            VCardText: Oe["b"],
            VCardTitle: Oe["c"],
            VCol: Ae["a"],
            VDataTable: Ie["a"],
            VDialog: ft["a"],
            VExpansionPanel: Ve["a"],
            VExpansionPanelContent: Le["a"],
            VExpansionPanelHeader: We["a"],
            VExpansionPanels: Fe["a"],
            VIcon: Be["a"],
            VRow: Xe["a"],
            VSkeletonLoader: vt["a"],
            VSnackbar: $e["a"],
            VSpacer: Ye["a"],
            VSystemBar: pt["a"],
            VTextField: Qe["a"],
            VToolbar: Ke["a"],
            VToolbarTitle: Ze["a"]
        });
        var ht = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        flat: ""
                    }
                }, [a("v-card-title", [e._v("TRON Dividends")]), a("v-card-text", [e._v("One of the benefits of Staking marnion is TRON dividends. At the end of each day a TRON dividends pool will be calculated and allocated to all the open stakes based on their stake amount. The TRON dividends pool comes from the total daily entry of auction lobby.The only way to receive TRON Dividends is having open stakes")]), a("v-row", {
                    staticClass: "ml-4 mr-4"
                }, [a("v-card-subtitle", [e._v("Current Dividends Pool")]), a("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        outlined: "",
                        label: "",
                        required: ""
                    },
                    model: {
                        value: e.TRXDividends,
                        callback: function(t) {
                            e.TRXDividends = t
                        },
                        expression: "TRXDividends"
                    }
                })], 1)], 1), a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        "min-height": "1375"
                    }
                }, [a("v-card-title", [e._v("Dividend History")]), a("line-chart", {
                    attrs: {
                        data: e.valuesObj
                    }
                })], 1)], 1)
            },
            yt = [];

        function wt(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function kt(e, t, a, n, r, s, o) {
            try {
                var i = e[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? t(l) : Promise.resolve(l).then(n, r)
        }

        function gt(e) {
            return function() {
                var t = this,
                    a = arguments;
                return new Promise((function(n, r) {
                    var s = e.apply(t, a);

                    function o(e) {
                        kt(s, n, r, o, i, "next", e)
                    }

                    function i(e) {
                        kt(s, n, r, o, i, "throw", e)
                    }
                    o(void 0)
                }))
            }
        }
        var xt = {
                data: function() {
                    return {
                        snackbar: !1,
                        values: [],
                        valuesObj: [],
                        text: "",
                        auctionBtn: "Enter",
                        currentItemIndex: -1,
                        currentItem: null,
                        TRXDividends: null,
                        dialog: !1,
                        amountToStake: null,
                        myObj: [],
                        anotherObj: [],
                        tempdata: {
                            day: null
                        },
                        user: {
                            address: null,
                            balance: null,
                            referrer: d
                        },
                        day: null,
                        amount: null,
                        mainContract: {},
                        endedStatesHeaders: [],
                        currentDay: null,
                        daysToStake: null,
                        headers: [{
                            text: "day",
                            value: "day"
                        }, {
                            text: "marnion Pool",
                            value: "amount"
                        }, {
                            text: "NUI/TRON",
                            value: "ratio"
                        }, {
                            text: "State",
                            value: "state"
                        }, {
                            text: "marnion Received",
                            value: "received"
                        }, {
                            text: "Your Entry",
                            value: "entry"
                        }, {
                            text: "Daily Entry",
                            value: "dayEntry"
                        }, {
                            text: "Status",
                            value: "status"
                        }]
                    }
                },
                mounted: function() {
                    var e = this,
                        t = new Promise((function(e, t) {
                            window.tronWeb && window.tronWeb.ready ? e(!0) : window.addEventListener("load", (function() {
                                var t = setInterval((function() {
                                    window.tronWeb && window.tronWeb.ready && e(!0), clearInterval(t)
                                }), 200);
                                setTimeout((function() {
                                    clearInterval(t)
                                }), 1e4)
                            }))
                        })).then((function() {
                            return console.log("Tronweb installed and logged in"), !0
                        })).catch((function(e) {
                            return console.error("Error while detecting tronweb", e), !1
                        }));
                    t["then"]((function(t) {
                        return new Promise(function() {
                            var t = gt(i.a.mark((function t(a) {
                                var n;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = window.tronWeb.defaultAddress.base58, n) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return", a(!1));
                                        case 3:
                                            return e.user.address = n, t.next = 6, e.setUpContracts();
                                        case 6:
                                            try {
                                                setInterval((function() {
                                                    window.tronWeb && e.user.address !== window.tronWeb.defaultAddress.base58 && location.reload()
                                                }), 700)
                                            } catch (r) {
                                                console.log("err==>>", r)
                                            }
                                            case 7:
                                            case "end":
                                                return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }))
                },
                methods: {
                    setUpContracts: function(e) {
                        var t = this;
                        return new Promise((function(a, n) {
                            if (!u && !e) return a(null);
                            window.tronWeb.contract().at(u || e, function() {
                                var e = gt(i.a.mark((function e(r, s) {
                                    var o;
                                    return i.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (r) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return t.mainContract = s, e.next = 4, t.getCurrentDay();
                                            case 4:
                                                return o = e.sent, t.currentDay = 1e6 * window.tronWeb.fromSun(o._hex), e.next = 8, t.getDivChartData();
                                            case 8:
                                                a(), e.next = 13;
                                                break;
                                            case 11:
                                                console.error("data1 error==>>", r), n(r);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }))
                    },
                    getDivChartData: function() {
                        var e = this;
                        return gt(i.a.mark((function t() {
                            var a, n;
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, ue.a.get("/api/datapoints");
                                    case 3:
                                        a = t.sent, n = a.data, e.valuesObj = n.reduce((function(e, t) {
                                            return Object.assign(e, wt({}, t.day, t.datapoint))
                                        }), {}), console.log("chart data===>", e.valuesObj), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](0), console.log("an err occurred==>>>", t.t0);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 9]
                            ])
                        })))()
                    },
                    runDividends: function() {
                        var e = this;
                        return gt(i.a.mark((function t() {
                            return i.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.mainContract.xfLobby(e.currentDay).call({
                                            shouldPollResponse: !0
                                        }).then((function(t) {
                                            e.TRXDividends = e.abbreviate_number(window.tronWeb["fromSun"](t._hex), 2) + " TRX", console.log("DIVs===>", e.TRXDividends)
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getCurrentDay: function() {
                        return this.mainContract.currentDay().call({
                            shouldPollResponse: !0
                        })
                    },
                    abbreviate_number: function(e, t) {
                        var a = parseFloat(e);
                        if (null === a) return null;
                        if (0 === a) return "0";
                        t = !t || t < 0 ? 0 : t;
                        var n = a["toPrecision"](2)["split"]("e"),
                            r = 1 === n["length"] ? 0 : Math["floor"](Math["min"](n[1]["slice"](1), 14) / 3),
                            s = r < 1 ? a["toFixed"](0 + t) : (a / Math["pow"](10, 3 * r))["toFixed"](1 + t),
                            o = s < 0 ? s : Math["abs"](s),
                            i = o + ["", "K", "M", "B", "T"][r];
                        return i
                    }
                }
            },
            St = xt,
            _t = Object(x["a"])(St, ht, yt, !1, null, null, null),
            Ct = _t.exports;
        _()(_t, {
            VCard: Pe["a"],
            VCardSubtitle: Oe["a"],
            VCardText: Oe["b"],
            VCardTitle: Oe["c"],
            VRow: Xe["a"],
            VTextField: Qe["a"]
        });
        var jt = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        "max-width": "800",
                        flat: ""
                    }
                }, [a("v-card-title", [e._v("Your Referral Link")]), a("v-card-text", [e._v("Your referrals will earn an extra 5% minted marnion tokens on their Auction Lobby Purchase. As a referrer you will earn an extra 10%. There are no limits on number nor the amount of referrals that you can get.")]), a("v-row", {
                    staticClass: "ml-4 mr-4"
                }, [a("v-text-field", {
                    staticClass: "px-4",
                    attrs: {
                        id: "referralInput",
                        outlined: "",
                        label: "Referral Link",
                        readonly: "",
                        value: e.referral,
                        required: ""
                    }
                }), e._v("s "), a("v-btn", {
                    staticClass: "mt-1 mb-6",
                    staticStyle: {
                        background: "linear-gradient(90deg, #8262ff 0%, #5124ff 100%)"
                    },
                    attrs: {
                        block: ""
                    },
                    on: {
                        click: function(t) {
                            return e.copyLink()
                        }
                    }
                }, [e._v("Copy Link")])], 1)], 1)], 1)
            },
            Dt = [];

        function Tt(e, t, a, n, r, s, o) {
            try {
                var i = e[s](o),
                    l = i.value
            } catch (c) {
                return void a(c)
            }
            i.done ? t(l) : Promise.resolve(l).then(n, r)
        }

        function Pt(e) {
            return function() {
                var t = this,
                    a = arguments;
                return new Promise((function(n, r) {
                    var s = e.apply(t, a);

                    function o(e) {
                        Tt(s, n, r, o, i, "next", e)
                    }

                    function i(e) {
                        Tt(s, n, r, o, i, "throw", e)
                    }
                    o(void 0)
                }))
            }
        }
        var Ot = {
                data: function() {
                    return {
                        address: "",
                        referral: "https://marnion .github.io/ui/?ref=".concat(this.address)
                    }
                },
                mounted: function() {
                    var e = this,
                        t = new Promise((function(e, t) {
                            window.tronWeb && window.tronWeb.ready ? e(!0) : window.addEventListener("load", (function() {
                                var t = setInterval((function() {
                                    window.tronWeb && window.tronWeb.ready && e(!0), clearInterval(t)
                                }), 200);
                                setTimeout((function() {
                                    clearInterval(t)
                                }), 200)
                            }))
                        })).then((function() {
                            return console.log("Tronweb installed and logged in"), !0
                        })).catch((function(e) {
                            return console.error("Error while detecting tronweb", e), !1
                        }));
                    t["then"]((function(t) {
                        return new Promise(function() {
                            var t = Pt(i.a.mark((function t(a) {
                                var n;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = window.tronWeb.defaultAddress.base58, n) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return", a(!1));
                                        case 3:
                                            e.address = n, e.referral = "https://marnion .github.io/ui/?ref=".concat(e.address);
                                            try {
                                                setInterval((function() {
                                                    window.tronWeb && e.address !== window.tronWeb.defaultAddress.base58 && location.reload()
                                                }), 700)
                                            } catch (r) {
                                                console.log("err==>>", r)
                                            }
                                            case 6:
                                            case "end":
                                                return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }))
                },
                methods: {
                    copyLink: function() {
                        var e = document.getElementById("referralInput");
                        e.focus(), e.select(), e.setSelectionRange(0, 999999), document.execCommand("copy")
                    }
                }
            },
            Rt = Ot,
            At = Object(x["a"])(Rt, jt, Dt, !1, null, null, null),
            It = At.exports;
        _()(At, {
            VBtn: Te["a"],
            VCard: Pe["a"],
            VCardText: Oe["b"],
            VCardTitle: Oe["c"],
            VRow: Xe["a"],
            VTextField: Qe["a"]
        }), n["a"].use(F["a"]);
        var Et = [{
                path: "/",
                name: "Home",
                component: oe
            }, {
                path: "/auction",
                name: "Auction",
                component: mt,
                props: !0
            }, {
                path: "/stake",
                name: "Stake",
                component: et
            }, {
                path: "/dividends",
                name: "Dividends",
                component: Ct
            }, {
                path: "/referral",
                name: "Referral",
                component: It
            }],
            Vt = new F["a"]({
                mode: "history",
                base: "/",
                routes: Et
            }),
            Lt = Vt,
            Wt = a("d842"),
            Ft = a("30ef"),
            Nt = a.n(Ft),
            Mt = a("407d"),
            Bt = a.n(Mt);
        n["a"].use(Wt["a"].use(Nt.a)), n["a"].config.productionTip = !1, n["a"].component("pulse-loader", a("8a5d")), n["a"].component(Bt.a.name, Bt.a), new n["a"]({
            created: function() {
                W.a.init()
            },
            vuetify: V,
            router: Lt,
            render: function(e) {
                return e(I)
            }
        }).$mount("#app")
    },
    "6b84": function(e, t, a) {
        e.exports = a.p + "img/mni.png"
    },
    "85ec": function(e, t, a) {}
});
//# sourceMappingURL=app.c3b3e109.js.map
