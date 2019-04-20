import m from "mithril";
import {makePage, RawMarkdown, sub, subsub, title} from "../base";

let md = data => m(RawMarkdown, data);

export class Colors {
    view(vnode) {
        let TextCol = '.col';

        return makePage([
            title('Colors'),
            md('Describe color system'),

            // Text and paragraphs
            sub('Text and background'),
            md(`djfsoi`),
            m('.row.pad-children-md', [
                m(TextCol + '.color-content', 'This is some text'),
                m(TextCol + '.color-subtle', 'This is some text'),
                m(TextCol + '.color-inverse', 'This is some text'),
                m(TextCol + '.color-subtle-inverse', 'This is some text'),
            ]),

            // Brand colors
            sub('Brand colors'),
            md('Explain brand/accent and their variations'),

            subsub('Brand'),
            this.palette(this.variants('brand')),

            subsub('Accent'),
            this.palette(this.variants('accent')),

            // Actions
            sub('Actions'),
            md('Explain actions and their variations'),
            this.palette(['primary', 'secondary', 'tertiary']),
            this.palette(['positive', 'negative', 'warning']),

            // Colors
            m('h2', 'Colors'),
            this.palette([
                'black', 'white', 'grey', 'red', 'orange', 'yellow', 'olive',
                'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown',
            ]),

        ]);
    }

    palette(roles) {
        let Color = '.size-5.margin-1.pad-1.text-center.text-8.rounded-2.shadow-1.col.flex-center';
        return m('p.row.row-wrap.row-center.row.wrap.flex-center', [
            ...roles.map(color =>
                m(Color, {class: `color-${color} border-${color} center-vertically`},
                    m('span.monospace.bold.rotate-n45', `.color-${color}`))),
        ])
    }

    variants(role) {
        return [`${role}-lighter`, `${role}-light`, role, `${role}-dark`, `${role}-darker`];
    }
}

