"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
exports.ulist = function (children) { return mithril_1.default("ul", children.map(function (x) { return mithril_1.default("li", x); })); };
exports.olist = function (children) { return mithril_1.default("ol", children.map(function (x) { return mithril_1.default("li", x); })); };
/**
 * Create a row layout.
 *
 * @param children - list of elements
 * @param layout - number or array with column numbers
 */
exports.row = function (children, layout) {
    if (typeof layout === "number") {
        return exports.row(children, numToLayout(layout, []));
    }
    else if (layout instanceof Array) {
        if (layout.length != children.length) {
            throw "Children and layout have different sizes";
        }
        var columns = [];
        for (var i = 0; i < children.length; i++) {
            columns.push(mithril_1.default(".col-" + layout[i], children[i]));
        }
        return mithril_1.default(".row", columns);
    }
    else {
        return mithril_1.default(".row", children.map(function (x) { return mithril_1.default(".col", x); }));
    }
};
// AUXILIARY FUNCTIONS
var numToLayout = function (n, tmp) {
    return n == 0 ? tmp.reverse() : numToLayout(Math.trunc(n / 10), (tmp.push(n % 10), tmp));
};
