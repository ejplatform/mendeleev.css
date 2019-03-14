"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
var base_1 = require("../base");
var mendeleev_mithril_1 = require("../../../integrations/mendeleev-mithril/mendeleev-mithril");
var md = function (data) { return mithril_1.default(base_1.RawMarkdown, data); };
exports.Lists = base_1.page([
    base_1.title('Lists'),
    mithril_1.default('.row', [
        mithril_1.default('.col', mendeleev_mithril_1.ulist([
            'Unordered list have a simple style.',
            ['No problem with nested lists.',
                mendeleev_mithril_1.ulist([
                    'Items are slightly smaller.',
                    'Extra indentation also helps!'
                ])],
            'If you use Mithril, check the mendeleev-mithril for extra goodness.'
        ])),
        mithril_1.default('.col', mendeleev_mithril_1.olist([
            'Unordered list have a simple style.',
            ['No problem with nested lists again.',
                mendeleev_mithril_1.olist([
                    'You could also have put an <ul> here.',
                    'Both behave very similarly.'
                ])],
            'If you use Mithril, check the mendeleev-mithril for extra goodness.'
        ])),
    ]),
]);
