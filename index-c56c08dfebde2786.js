(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        17285: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AmpStateContext = void 0;
            var o = (0, n(92648).Z)(n(67294)).default.createContext({});
            t.AmpStateContext = o
        },
        80354: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isInAmpMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = e.hybrid,
                    o = e.hasQuery;
                return void 0 !== t && t || void 0 !== n && n && void 0 !== o && o
            }
        },
        16505: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultHead = c, t.default = void 0;
            var o = n(6495).Z,
                r = n(92648).Z,
                a = (0, n(91598).Z)(n(67294)),
                i = r(n(70148)),
                u = n(17285),
                d = n(60523),
                l = n(80354);

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function s(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce(function(e, t) {
                    return "string" == typeof t || "number" == typeof t ? e : e.concat(t)
                }, [])) : e.concat(t)
            }
            n(92783);
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                var n, r, i, u, d = t.inAmpMode;
                return e.reduce(s, []).reverse().concat(c(d).reverse()).filter((n = new Set, r = new Set, i = new Set, u = {}, function(e) {
                    var t = !0,
                        o = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        o = !0;
                        var a = e.key.slice(e.key.indexOf("$") + 1);
                        n.has(a) ? t = !1 : n.add(a)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            r.has(e.type) ? t = !1 : r.add(e.type);
                            break;
                        case "meta":
                            for (var d = 0, l = f.length; d < l; d++) {
                                var c = f[d];
                                if (e.props.hasOwnProperty(c)) {
                                    if ("charSet" === c) i.has(c) ? t = !1 : i.add(c);
                                    else {
                                        var s = e.props[c],
                                            p = u[c] || new Set;
                                        ("name" !== c || !o) && p.has(s) ? t = !1 : (p.add(s), u[c] = p)
                                    }
                                }
                            }
                    }
                    return t
                })).reverse().map(function(e, t) {
                    var n = e.key || t;
                    if (!d && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function(t) {
                            return e.props.href.startsWith(t)
                        })) {
                        var r = o({}, e.props || {});
                        return r["data-href"] = r.href, r.href = void 0, r["data-optimized-fonts"] = !0, a.default.cloneElement(e, r)
                    }
                    return a.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            t.default = function(e) {
                var t = e.children,
                    n = a.useContext(u.AmpStateContext),
                    o = a.useContext(d.HeadManagerContext);
                return a.default.createElement(i.default, {
                    reduceComponentsToState: p,
                    headManager: o,
                    inAmpMode: l.isInAmpMode(n)
                }, t)
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        70148: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n = e.headManager,
                    u = e.reduceComponentsToState;

                function d() {
                    if (n && n.mountedInstances) {
                        var t = o.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));
                        n.updateHead(u(t, e))
                    }
                }
                return r && (null == n || null == (t = n.mountedInstances) || t.add(e.children), d()), a(function() {
                    var t;
                    return null == n || null == (t = n.mountedInstances) || t.add(e.children),
                        function() {
                            var t;
                            null == n || null == (t = n.mountedInstances) || t.delete(e.children)
                        }
                }), a(function() {
                    return n && (n._pendingUpdate = d),
                        function() {
                            n && (n._pendingUpdate = d)
                        }
                }), i(function() {
                    return n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null),
                        function() {
                            n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null)
                        }
                }), null
            };
            var o = (0, n(91598).Z)(n(67294)),
                r = !1,
                a = o.useLayoutEffect,
                i = r ? function() {} : o.useEffect
        },
        92783: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.warnOnce = void 0, t.warnOnce = function(e) {}
        },
        52779: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(17674),
                r = n(95036),
                a = n(86896),
                i = n(9008),
                u = n.n(i),
                d = n(34122),
                l = n(19132),
                c = n(56023),
                s = n(119),
                f = n(42937),
                p = n(69622),
                v = n(67294),
                m = n(85893);
            t.default = function() {
                var e, t, n, i, h, y, g, _ = (0, f.tv)(),
                    b = (0, r.oR)(),
                    S = s.F.get(),
                    w = b.storeId,
                    M = b.name,
                    x = b.description,
                    k = b.seo,
                    C = b.favIcon,
                    E = b.storeUrl,
                    O = b.logo,
                    j = _.query.ref,
                    P = (0, a.Z)(),
                    U = (0, l.TgN)({
                        variables: {
                            storeId: w
                        }
                    }),
                    A = U.data,
                    I = U.error,
                    H = U.loading,
                    N = (0, p._)("ref", ""),
                    Z = (0, o.Z)(N, 2),
                    T = (Z[0], Z[1]);
                if (v.useEffect(function() {
                        T(j)
                    }, []), H) return (0, m.jsx)(d.$j, {
                    size: 64
                });
                if (!A || I) return null;
                var F = null == A ? void 0 : null === (e = A.store) || void 0 === e ? void 0 : null === (t = e.StoreHomePageSections) || void 0 === t ? void 0 : t.filter(function(e) {
                    var t;
                    return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.type) === l.rTv.CollectionsRow
                }).map(function(e) {
                    return {
                        collections: (null == e ? void 0 : e.body).collections
                    }
                });
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsxs)(u(), {
                        children: [(0, c.LX)({
                            title: "".concat(P.formatMessage({
                                id: "rxNddi",
                                defaultMessage: [{
                                    type: 0,
                                    value: "Homepage"
                                }]
                            }), " | ").concat(M),
                            description: (null == k ? void 0 : k.description) || x,
                            pageUrl: "".concat(E),
                            faviconSrc: null == C ? void 0 : C.src,
                            imageSrc: null == O ? void 0 : null === (n = O.image) || void 0 === n ? void 0 : n.src
                        }), (0, c.mC)(b, null == A ? void 0 : A.storePaymentMethods), (0, c.ke)(F || [], null == b ? void 0 : b.storeUrl)]
                    }), (0, m.jsx)(S.pages.Home, {
                        appearance: null == A ? void 0 : null === (i = A.store) || void 0 === i ? void 0 : i.appearance,
                        homepageSections: null == A ? void 0 : null === (h = A.store) || void 0 === h ? void 0 : h.StoreHomePageSections,
                        products: null == A ? void 0 : null === (y = A.store) || void 0 === y ? void 0 : null === (g = y.products) || void 0 === g ? void 0 : g.nodes
                    })]
                })
            }
        },
        48312: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(52779)
            }])
        },
        9008: function(e, t, n) {
            e.exports = n(16505)
        }
    },
    function(e) {
        e.O(0, [23, 774, 888, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=index-c56c08dfebde2786.js.map