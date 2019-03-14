"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
var base_1 = require("../base");
var mendeleev_mithril_1 = require("../../../integrations/mendeleev-mithril/mendeleev-mithril");
var md = function (data) { return mithril_1.default(base_1.RawMarkdown, data); };
var Layout = /** @class */ (function () {
    function Layout() {
    }
    Layout.prototype.view = function () {
        var _this = this;
        var verticalDirections = ["center", "baseline", "left", "right"];
        var horizontalDirections = ["center", "baseline", "top", "bottom"];
        var Cell = '.size-y4.text-center.color-accent.line-height-4';
        var triad = function (x, props) {
            if (props === void 0) { props = ['', '', '']; }
            return [
                mithril_1.default(x + '.color-accent-lighter' + props[0], 1),
                mithril_1.default(x + '.color-accent-light' + props[1], 2),
                mithril_1.default(x + '.color-accent' + props[2], 3),
            ];
        };
        return base_1.makePage([
            base_1.title("Layout"),
            base_1.sub("Grids"),
            mithril_1.default.trust("\n            <div class=\"hard-grid-3 gap-2 flow-col-dense text-center line-height-4 size-y7 place-stretch grid-dense \">\n              <div class=\"color-blue pad-x3p rounded-2 col-1 row-2\">Default</div>\n              <div class=\"color-blue size-y4 pad-x3p rounded-2 col-3\">Centered</div>\n              <div class=\"color-blue size-y4 pad-x3p rounded-2 col-1\">Stretch</div>\n            </div>"),
            base_1.sub("Tests"),
            mithril_1.default('.row.flex-center', triad(Cell + '.size-x4')),
            mithril_1.default('.row.row-expand', triad(Cell)),
            mithril_1.default('.row.wrap.justify-center', triad(Cell + '.width-1/2')),
            mithril_1.default('.row.gutter-1', triad(Cell + '.width-1/3')),
            mithril_1.default('.row.gutter-1', triad(Cell, ['.flex-1', '.flex-5', '.flex-6'])),
            ['Foo', mithril_1.default('.row-inline', triad(Cell))],
            base_1.sub("Layout classes"),
            md(layoutVerticalMarkdown),
            mendeleev_mithril_1.row([
                mendeleev_mithril_1.row([
                    this.layoutExample(".col", true),
                    this.layoutExample(".center-vertically", true),
                ]),
                mithril_1.default('div', [
                    this.layoutExample(".row"),
                    this.layoutExample(".center-horizontally"),
                ])
            ]),
            base_1.sub('Modifiers'),
            md('The class accept the following modifiers:'),
            mithril_1.default('.marginv-md', mithril_1.default('code.text-5.bold', '.col')),
            mithril_1.default(".row", verticalDirections.map(function (x) {
                return _this.layoutExample(".col.align-" + x, true);
            }).slice()),
            mithril_1.default('.marginv-md', mithril_1.default('code.text-5.bold', '.center-vertically')),
            mithril_1.default(".row", verticalDirections.map(function (x) {
                return _this.layoutExample(".center-vertically.align-" + x, true);
            }).slice()),
            mithril_1.default('.marginv-md', mithril_1.default('code.text-5.bold', '.row')),
            mithril_1.default(".row.row-wrap", horizontalDirections.map(function (x) {
                return _this.layoutExample(".row.align-" + x);
            }).slice()),
            mithril_1.default('.marginv-md', mithril_1.default('code.text-5.bold', '.center-horizontally')),
            mithril_1.default(".row.row-wrap", horizontalDirections.map(function (x) {
                return _this.layoutExample(".center-horizontally.align-" + x);
            }).slice()),
        ]);
    };
    Layout.prototype.layoutExample = function (cls, vertical) {
        if (vertical === void 0) { vertical = false; }
        // Compute displayed property
        var show = "." + last(cls.split("."));
        // Fix wrapper class
        cls += ".shadow.pad-xs.rounded-xs";
        cls += vertical ? ".margin-left-md" : ".margin-top-lg";
        // Define classes for sub-components
        var block = ".margin-xs.rounded-xs.bold.padv-sm.padh-md.color-accent-lighter";
        var selector = ".mono.bold.text-7.rounded-xs.pad-xs.color-accent.white-space-nowrap.absolute";
        var selectorStyle = vertical
            ? "transform: translateX(-3rem) rotate(-90deg) translateX(-50%)"
            : "transform: translateY(-1.25rem)";
        return mithril_1.default(".margin-bottom-lg" + (vertical ? ".col-3" : ".col-6"), [
            mithril_1.default(vertical ? ".center-horizontally" : "div", { style: "width: 8rem;" }, [
                mithril_1.default(selector, { style: selectorStyle }, show),
                mithril_1.default(cls, {
                    style: vertical
                        ? "min-height: 14rem; width: 6rem"
                        : "min-width: 14rem",
                }, [
                    mithril_1.default(".text-5" + block, "1"),
                    mithril_1.default(".text-3" + block, "2"),
                    mithril_1.default(".text-1" + block, "3"),
                ]),
            ]),
        ]);
    };
    return Layout;
}());
exports.Layout = Layout;
// Text fragments
var layoutVerticalMarkdown = "\nMendeleev uses a flexbox based system to organize and distribute\nobjects on the page. based. Layout classes thus control how children \nshould be distributed inside the parent container.\n\nThere are two classes to organize vertical layout distributions.\n`.vertical-layout` organizes its children in a \nvertical orientation.\n\nThere are two classes to organize vertical layout distributions.\n`.vertical-layout` organizes its children in a \nvertical orientation.\n\nThere are two classes to organize vertical layout distributions.\n`.vertical-layout` organizes its children in a \nvertical orientation.\n";
// Auxiliary functions
var last = function (x) { return x[x.length - 1]; };
