import {makePage, title} from "../base";
import m from "mithril";

export class Forms {
    view() {
        return makePage([
            title('Forms'),
            ['email', 'number', 'password', 'search', 'tel', 'text', 'url',
                'color', 'date', 'month', 'week', 'datetime', 'datetime-local'].map(
                x => m('label', [
                    `Field (${x})`, m('input', {value: 'Content', placeholder: 'Placeholder', type: x}),
                ]),
            ),
            m('label', 'Label'),
            m('textarea', 'isj aoijdoaijsd oiajsoai'),
            m('legend', 'legend'),

            m('label', 'Select'),
            m('select', ['foo', 'bar', 'baz'].map(x => m('option', x))),

            m('label', 'Checkbox'),
            ['foo', 'bar', 'baz'].map(x => m('label', [m('input', {type: 'checkbox'}), x])),

            m('label', 'Radio'),
            ['foo', 'bar', 'baz'].map(x => m('label', [m('input', {type: 'radio', name: 'foo'}), x])),
        ])
    }
}
