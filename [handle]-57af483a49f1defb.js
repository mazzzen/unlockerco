(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [921], {
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
                i = n(92648).Z,
                d = (0, n(91598).Z)(n(67294)),
                l = i(n(70148)),
                r = n(17285),
                u = n(60523),
                a = n(80354);

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [d.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(d.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function v(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === d.default.Fragment ? e.concat(d.default.Children.toArray(t.props.children).reduce(function(e, t) {
                    return "string" == typeof t || "number" == typeof t ? e : e.concat(t)
                }, [])) : e.concat(t)
            }
            n(92783);
            var s = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                var n, i, l, r, u = t.inAmpMode;
                return e.reduce(v, []).reverse().concat(c(u).reverse()).filter((n = new Set, i = new Set, l = new Set, r = {}, function(e) {
                    var t = !0,
                        o = !1;
                    if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                        o = !0;
                        var d = e.key.slice(e.key.indexOf("$") + 1);
                        n.has(d) ? t = !1 : n.add(d)
                    }
                    switch (e.type) {
                        case "title":
                        case "base":
                            i.has(e.type) ? t = !1 : i.add(e.type);
                            break;
                        case "meta":
                            for (var u = 0, a = s.length; u < a; u++) {
                                var c = s[u];
                                if (e.props.hasOwnProperty(c)) {
                                    if ("charSet" === c) l.has(c) ? t = !1 : l.add(c);
                                    else {
                                        var v = e.props[c],
                                            p = r[c] || new Set;
                                        ("name" !== c || !o) && p.has(v) ? t = !1 : (p.add(v), r[c] = p)
                                    }
                                }
                            }
                    }
                    return t
                })).reverse().map(function(e, t) {
                    var n = e.key || t;
                    if (!u && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function(t) {
                            return e.props.href.startsWith(t)
                        })) {
                        var i = o({}, e.props || {});
                        return i["data-href"] = i.href, i.href = void 0, i["data-optimized-fonts"] = !0, d.default.cloneElement(e, i)
                    }
                    return d.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            t.default = function(e) {
                var t = e.children,
                    n = d.useContext(r.AmpStateContext),
                    o = d.useContext(u.HeadManagerContext);
                return d.default.createElement(l.default, {
                    reduceComponentsToState: p,
                    headManager: o,
                    inAmpMode: a.isInAmpMode(n)
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
                    r = e.reduceComponentsToState;

                function u() {
                    if (n && n.mountedInstances) {
                        var t = o.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));
                        n.updateHead(r(t, e))
                    }
                }
                return i && (null == n || null == (t = n.mountedInstances) || t.add(e.children), u()), d(function() {
                    var t;
                    return null == n || null == (t = n.mountedInstances) || t.add(e.children),
                        function() {
                            var t;
                            null == n || null == (t = n.mountedInstances) || t.delete(e.children)
                        }
                }), d(function() {
                    return n && (n._pendingUpdate = u),
                        function() {
                            n && (n._pendingUpdate = u)
                        }
                }), l(function() {
                    return n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null),
                        function() {
                            n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null)
                        }
                }), null
            };
            var o = (0, n(91598).Z)(n(67294)),
                i = !1,
                d = o.useLayoutEffect,
                l = i ? function() {} : o.useEffect
        },
        92783: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.warnOnce = void 0, t.warnOnce = function(e) {}
        },
        87227: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(67294),
                i = n(86896),
                d = n(95036),
                l = n(34122),
                r = n(27260),
                u = n(19132),
                a = n(9008),
                c = n.n(a),
                v = n(86207),
                s = n(56023),
                p = n(119),
                f = n(42937),
                m = n(75355),
                h = n(85893);
            t.default = function() {
                var e, t, n, a, _, y, g = p.F.get(),
                    b = (0, m.aC)().user,
                    k = (0, d.oR)(),
                    w = k.storeId,
                    x = k.name,
                    j = k.description,
                    C = k.favIcon,
                    S = k.storeUrl,
                    M = (0, f.tv)(),
                    E = (0, i.Z)(),
                    O = M.query,
                    P = O.handle,
                    A = O.collection,
                    I = (0, u.cV3)({
                        variables: {
                            storeId: w,
                            slug: P,
                            collectionHandle: A
                        }
                    }),
                    U = I.data,
                    Z = I.error,
                    N = I.loading,
                    F = "".concat(S, "/product/").concat(A, "/").concat(P);
                if (o.useEffect(function() {
                        if (null != U && U.product) {
                            var e, t, n, o, i, d, l, r, u, a, c, s, p, f, m, h, _, y, g, k, w, j, C, S, M, E;
                            v.j.fireEvent({
                                name: "View_Product",
                                parameters: {
                                    event_category: "Shop",
                                    event_label: null === (e = U.product) || void 0 === e ? void 0 : e.title,
                                    content_category: (null === (t = U.collection) || void 0 === t ? void 0 : t.title) || void 0,
                                    content_type: "product_group",
                                    content_ids: [null === (n = U.product) || void 0 === n ? void 0 : n.id],
                                    content_name: null === (o = U.product) || void 0 === o ? void 0 : o.title,
                                    content_sku: null === (i = U.product) || void 0 === i ? void 0 : null === (d = i.variants) || void 0 === d ? void 0 : null === (l = d.nodes) || void 0 === l ? void 0 : null === (r = l[0]) || void 0 === r ? void 0 : r.sku,
                                    content_imgSrc: null === (u = U.product) || void 0 === u ? void 0 : null === (a = u.images) || void 0 === a ? void 0 : null === (c = a[0]) || void 0 === c ? void 0 : c.src,
                                    content_url: F,
                                    content_brand: x,
                                    content_price: null === (s = U.product) || void 0 === s ? void 0 : null === (p = s.variants) || void 0 === p ? void 0 : null === (f = p.nodes) || void 0 === f ? void 0 : null === (m = f[0]) || void 0 === m ? void 0 : null === (h = m.price) || void 0 === h ? void 0 : h.amount,
                                    content_compareAtPrice: null === (_ = U.product) || void 0 === _ ? void 0 : null === (y = _.variants) || void 0 === y ? void 0 : null === (g = y.nodes) || void 0 === g ? void 0 : null === (k = g[0]) || void 0 === k ? void 0 : null === (w = k.compareAtPrice) || void 0 === w ? void 0 : w.amount,
                                    content_currency: null === (j = U.product) || void 0 === j ? void 0 : null === (C = j.variants) || void 0 === C ? void 0 : null === (S = C.nodes) || void 0 === S ? void 0 : null === (M = S[0]) || void 0 === M ? void 0 : null === (E = M.price) || void 0 === E ? void 0 : E.currencyCode,
                                    customerId: null == b ? void 0 : b.id
                                }
                            })
                        }
                    }, [U, F, x, null == b ? void 0 : b.id]), Z) return (0, h.jsx)(r.j, {
                    statusCode: 404
                });
                if (N) return (0, h.jsx)(l.$j, {
                    size: 64,
                    inline: !1
                });
                var H = null == U ? void 0 : U.product,
                    T = [{
                        title: E.formatMessage({
                            id: "Dxd1uB",
                            defaultMessage: [{
                                type: 0,
                                value: "Shop"
                            }]
                        }),
                        link: "/shop"
                    }, null != U && U.collection ? {
                        title: null == U ? void 0 : null === (e = U.collection) || void 0 === e ? void 0 : e.title,
                        link: "/product/".concat(U.collection.handle)
                    } : void 0].filter(Boolean);
                return (0, h.jsxs)(h.Fragment, {
                    children: [(0, h.jsxs)(c(), {
                        children: [(0, s.LX)({
                            title: "".concat((null == H ? void 0 : null === (t = H.seo) || void 0 === t ? void 0 : t.title) || (null == H ? void 0 : H.title), " | ").concat(x),
                            description: (null == H ? void 0 : null === (n = H.seo) || void 0 === n ? void 0 : n.description) || (null == H ? void 0 : null === (a = H.shortDescription) || void 0 === a ? void 0 : a.substring(0, 160)) || j,
                            pageUrl: F,
                            faviconSrc: null == C ? void 0 : C.src,
                            imageSrc: null == H ? void 0 : null === (_ = H.images) || void 0 === _ ? void 0 : null === (y = _[0]) || void 0 === y ? void 0 : y.src
                        }), (0, s.Cv)(U, F), (0, s.Ul)(null == T ? void 0 : T.map(function(e) {
                            return {
                                link: S + (null == e ? void 0 : e.link),
                                title: null == e ? void 0 : e.title
                            }
                        })), (0, h.jsx)("link", {
                            rel: "canonical",
                            href: "".concat(S, "/product/all/").concat(P)
                        })]
                    }), (0, h.jsx)(g.pages.Product, {
                        breadcrumbItems: T,
                        product: H
                    })]
                })
            }
        },
        1466: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/product/[collection]/[handle]", function() {
                return n(87227)
            }])
        },
        9008: function(e, t, n) {
            e.exports = n(16505)
        }
    },
    function(e) {
        e.O(0, [23, 774, 888, 179], function() {
            return e(e.s = 1466)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=[handle]-57af483a49f1defb.js.map