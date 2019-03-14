"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
var base_1 = require("../base");
var md = function (data) { return mithril_1.default(base_1.RawMarkdown, data); };
var Colors = /** @class */ (function () {
    function Colors() {
    }
    Colors.prototype.view = function (vnode) {
        var TextCol = '.col';
        return base_1.makePage([
            base_1.title('Colors'),
            md('Describe color system'),
            // Text and paragraphs
            base_1.sub('Text and background'),
            md("djfsoi"),
            mithril_1.default('.row.pad-children-md', [
                mithril_1.default(TextCol + '.color-content', 'This is some text'),
                mithril_1.default(TextCol + '.color-subtle', 'This is some text'),
                mithril_1.default(TextCol + '.color-inverse', 'This is some text'),
                mithril_1.default(TextCol + '.color-subtle-inverse', 'This is some text'),
            ]),
            // Brand colors
            base_1.sub('Brand colors'),
            md('Explain brand/accent and their variations'),
            base_1.subsub('Brand'),
            this.palette(this.variants('brand')),
            base_1.subsub('Accent'),
            this.palette(this.variants('accent')),
            // Actions
            base_1.sub('Actions'),
            md('Explain actions and their variations'),
            this.palette(['primary', 'secondary', 'tertiary']),
            this.palette(['positive', 'negative', 'warning']),
            // Colors
            mithril_1.default('h2', 'Colors'),
            this.palette([
                'black', 'white', 'grey', 'red', 'orange', 'yellow', 'olive',
                'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown',
            ]),
        ]);
    };
    Colors.prototype.palette = function (roles) {
        var Color = '.size-5.margin-1.pad-1.text-center.text-8.rounded-2.shadow.col.flex-center';
        return mithril_1.default('p.row.row-wrap.row-center.row.wrap.flex-center', roles.map(function (color) {
            return mithril_1.default(Color, { class: "color-" + color + " border-" + color + " center-vertically" }, mithril_1.default('span.monospace.bold.rotate-n45', ".color-" + color));
        }).slice());
    };
    Colors.prototype.variants = function (role) {
        return [role + "-lighter", role + "-light", role, role + "-dark", role + "-darker"];
    };
    return Colors;
}());
exports.Colors = Colors;
