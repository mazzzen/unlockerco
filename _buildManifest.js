self.__BUILD_MANIFEST = function(e, s, c, a, t, r) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/robots.txt",
                destination: "/api/robots"
            }, {
                source: "/:lang(ar){/}?",
                destination: s
            }, {
                source: "/:lang(ar)/:path*",
                destination: t
            }, {
                source: "/:lang(en){/}?",
                destination: s
            }, {
                source: "/:lang(en)/:path*",
                destination: t
            }, {
                source: "/:lang(fr){/}?",
                destination: s
            }, {
                source: "/:lang(fr)/:path*",
                destination: t
            }, {
                source: "/:lang(tr){/}?",
                destination: s
            }, {
                source: "/:lang(tr)/:path*",
                destination: t
            }],
            fallback: []
        },
        "/": [e, "static/chunks/pages/index-c56c08dfebde2786.js"],
        "/404": ["static/chunks/pages/404-c0430937bffcf476.js"],
        "/_error": ["static/chunks/pages/_error-832625bc9629a7e1.js"],
        "/cart": [e, "static/chunks/pages/cart-48586a707ff61e9a.js"],
        "/checkout": [c, e, a, "static/chunks/pages/checkout-eebae491d422d884.js"],
        "/checkout/confirmation/[orderId]": [c, e, a, "static/chunks/pages/checkout/confirmation/[orderId]-5b6c39b0382e6c36.js"],
        "/checkout/delivery": [c, e, a, "static/chunks/pages/checkout/delivery-94a47098162fbbcf.js"],
        "/checkout/invalid-order": [c, e, a, "static/chunks/pages/checkout/invalid-order-0ab8340052c05080.js"],
        "/checkout/payment/[orderId]": [c, e, a, "static/chunks/pages/checkout/payment/[orderId]-c0f27f25896159c5.js"],
        "/contact-us": [e, "static/chunks/pages/contact-us-3eddc29827fb42e5.js"],
        "/login": [r, e, "static/chunks/pages/login-c3891ab2a0687931.js"],
        "/me/my-account": [e, "static/chunks/pages/me/my-account-9be7e0937671a00e.js"],
        "/me/my-addresses": [e, "static/chunks/pages/me/my-addresses-15176389cb5e91d6.js"],
        "/me/my-orders": [e, "static/chunks/pages/me/my-orders-554da05d89ec8d43.js"],
        "/me/my-orders/[orderId]": [e, "static/chunks/pages/me/my-orders/[orderId]-627c4ddb3974b48e.js"],
        "/me/my-reviews": [e, "static/chunks/pages/me/my-reviews-98bebe844ba066d8.js"],
        "/page/[handle]": [e, "static/chunks/pages/page/[handle]-819df1b1eac782ee.js"],
        "/product/[collection]": [e, "static/chunks/pages/product/[collection]-b060386d7b866e2c.js"],
        "/product/[collection]/[handle]": [e, "static/chunks/pages/product/[collection]/[handle]-57af483a49f1defb.js"],
        "/registration": [r, e, "static/chunks/pages/registration-8b3fd755ddd05006.js"],
        "/reset-password": [r, e, "static/chunks/pages/reset-password-23ab2260ba6ee182.js"],
        "/search": [e, "static/chunks/pages/search-933decfad8051cad.js"],
        "/shop": [e, "static/chunks/pages/shop-9d1bedb1cd4721d6.js"],
        sortedPages: [s, "/404", "/_app", "/_error", "/cart", "/checkout", "/checkout/confirmation/[orderId]", "/checkout/delivery", "/checkout/invalid-order", "/checkout/payment/[orderId]", "/contact-us", "/login", "/me/my-account", "/me/my-addresses", "/me/my-orders", "/me/my-orders/[orderId]", "/me/my-reviews", "/page/[handle]", "/product/[collection]", "/product/[collection]/[handle]", "/registration", "/reset-password", "/search", "/shop"]
    }
}("static/chunks/23-bdf6cc70bca929ee.js", "/", "static/chunks/3-103942f06977e0a5.js", "static/chunks/959-dcd4c72d3fd04f47.js", "/:path*", "static/chunks/947-b4ad71979106575b.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();