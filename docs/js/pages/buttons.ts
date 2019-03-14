import {makePage, RawMarkdown, title} from "../base";
import m from "mithril";

let md = data => m(RawMarkdown, data);


export class Buttons {
    view(vnode) {
        let TextCol = '.col';

        return makePage([
            title('Buttons'),
            md('Buttons came in 3 basic flavors. The default `<button>` element ' +
                'is plain, whereas the two variants `.button-primary` and ' +
                '`.button-secondary` are vibrant and prominent. Button styles ' +
                'are applied to form elements such as `<input type="submit">`, ' +
                'but can be attached to arbitrary elements (e.g., anchors) using ' +
                'the `.button` class.'),

            m('div', [
                m('button', 'Plain button'), ' ',
                m('button.button-primary', 'Primary button'), ' ',
                m('button.button-secondary', 'Secondary button'), ' ',
                m('a.button', 'A link button'), ' ',
            ])
        ]);
    }

}
