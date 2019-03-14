"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base");
var mithril_1 = require("mithril");
var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms.prototype.view = function () {
        return base_1.makePage([
            base_1.title('Forms'),
            ['email', 'number', 'password', 'search', 'tel', 'text', 'url',
                'color', 'date', 'month', 'week', 'datetime', 'datetime-local'].map(function (x) { return mithril_1.default('label', [
                "Field (" + x + ")", mithril_1.default('input', { value: 'Content', placeholder: 'Placeholder', type: x }),
            ]); }),
            mithril_1.default('label', 'Label'),
            mithril_1.default('textarea', 'isj aoijdoaijsd oiajsoai'),
            mithril_1.default('legend', 'legend'),
            mithril_1.default('label', 'Select'),
            mithril_1.default('select', ['foo', 'bar', 'baz'].map(function (x) { return mithril_1.default('option', x); })),
            mithril_1.default('label', 'Checkbox'),
            ['foo', 'bar', 'baz'].map(function (x) { return mithril_1.default('label', [mithril_1.default('input', { type: 'checkbox' }), x]); }),
            mithril_1.default('label', 'Radio'),
            ['foo', 'bar', 'baz'].map(function (x) { return mithril_1.default('label', [mithril_1.default('input', { type: 'radio', name: 'foo' }), x]); }),
        ]);
    };
    return Forms;
}());
exports.Forms = Forms;
