"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base");
var mithril_1 = require("mithril");
var md = function (data) { return mithril_1.default(base_1.RawMarkdown, data); };
var Buttons = /** @class */ (function () {
    function Buttons() {
    }
    Buttons.prototype.view = function (vnode) {
        var TextCol = '.col';
        return base_1.makePage([
            base_1.title('Buttons'),
            md('Buttons came in 3 basic flavors. The default `<button>` element ' +
                'is plain, whereas the two variants `.button-primary` and ' +
                '`.button-secondary` are vibrant and prominent. Button styles ' +
                'are applied to form elements such as `<input type="submit">`, ' +
                'but can be attached to arbitrary elements (e.g., anchors) using ' +
                'the `.button` class.'),
            mithril_1.default('div', [
                mithril_1.default('button', 'Plain button'), ' ',
                mithril_1.default('button.button-primary', 'Primary button'), ' ',
                mithril_1.default('button.button-secondary', 'Secondary button'), ' ',
                mithril_1.default('a.button', 'A link button'), ' ',
            ])
        ]);
    };
    return Buttons;
}());
exports.Buttons = Buttons;
