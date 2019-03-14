import m from "mithril";
import {page, RawMarkdown, title} from "../base";
import {olist, ulist} from "../../../integrations/mendeleev-mithril/mendeleev-mithril";
let md = data => m(RawMarkdown, data);


export let Lists = page([
    title('Lists'),
    m('.row', [
        m('.col', ulist([
            'Unordered list have a simple style.',
            ['No problem with nested lists.',
                ulist([
                    'Items are slightly smaller.',
                    'Extra indentation also helps!'
                ])],
            'If you use Mithril, check the mendeleev-mithril for extra goodness.'
        ])),
        m('.col', olist([
            'Unordered list have a simple style.',
            ['No problem with nested lists again.',
                olist([
                    'You could also have put an <ul> here.',
                    'Both behave very similarly.'
                ])],
            'If you use Mithril, check the mendeleev-mithril for extra goodness.'
        ])),

    ]),
]);
