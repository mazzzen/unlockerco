(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [459], {
        76780: function(n, e, o) {
            "use strict";
            o.r(e);
            var i = o(9008),
                r = o.n(i),
                t = o(5152),
                c = o.n(t),
                s = o(86896),
                l = o(75355),
                u = o(95036),
                a = o(56023),
                d = o(119),
                g = o(42937),
                f = o(85893),
                v = function() {
                    var n, e = (0, u.oR)(),
                        o = e.name,
                        i = e.seo,
                        t = e.favIcon,
                        c = e.storeUrl,
                        v = e.logo,
                        _ = e.description,
                        p = (0, g.tv)(),
                        h = (0, s.Z)(),
                        m = d.F.get();
                    return (0, l.aC)().isLoggedIn ? (p.replace("/"), null) : (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(r(), {
                            children: (0, a.LX)({
                                title: "".concat(h.formatMessage({
                                    id: "AyGauy",
                                    defaultMessage: [{
                                        type: 0,
                                        value: "Login"
                                    }]
                                }), " | ").concat(o),
                                description: (null == i ? void 0 : i.description) || _,
                                pageUrl: "".concat(c, "/login"),
                                faviconSrc: null == t ? void 0 : t.src,
                                imageSrc: null == v ? void 0 : null === (n = v.image) || void 0 === n ? void 0 : n.src
                            })
                        }), (0, f.jsx)(m.pages.Login, {})]
                    })
                };
            e.default = c()(function() {
                return Promise.resolve(v)
            }, {
                ssr: !1
            })
        },
        73700: function(n, e, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
                return o(76780)
            }])
        }
    },
    function(n) {
        n.O(0, [947, 23, 774, 888, 179], function() {
            return n(n.s = 73700)
        }), _N_E = n.O()
    }
]);
//# sourceMappingURL=login-c3891ab2a0687931.js.map