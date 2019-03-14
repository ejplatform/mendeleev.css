import m from "mithril";
import {makePage, title, sub, subsub, RawMarkdown} from "../base";
import {row} from "../../../integrations/mendeleev-mithril/mendeleev-mithril";

let md = data => m(RawMarkdown, data);

export class Layout {
    view() {
        let verticalDirections = ["center", "baseline", "left", "right"];
        let horizontalDirections = ["center", "baseline", "top", "bottom"];
        let Cell = '.size-y4.text-center.color-accent.line-height-4';
        let triad = (x, props = ['', '', '']) => [
            m(x + '.color-accent-lighter' + props[0], 1),
            m(x + '.color-accent-light' + props[1], 2),
            m(x + '.color-accent' + props[2], 3),
        ];

        return makePage([
            title("Layout"),

            sub("Grids"),
            m.trust(`
            <div class="hard-grid-3 gap-2 flow-col-dense text-center line-height-4 size-y7 place-stretch grid-dense ">
              <div class="color-blue pad-x3p rounded-2 col-1 row-2">Default</div>
              <div class="color-blue size-y4 pad-x3p rounded-2 col-3">Centered</div>
              <div class="color-blue size-y4 pad-x3p rounded-2 col-1">Stretch</div>
            </div>`),

            sub("Tests"),
            m('.row.flex-center', triad(Cell + '.size-x4')),
            m('.row.row-expand', triad(Cell)),
            m('.row.wrap.justify-center', triad(Cell + '.width-1/2')),
            m('.row.gutter-1', triad(Cell + '.width-1/3')),
            m('.row.gutter-1', triad(Cell, ['.flex-1', '.flex-5', '.flex-6'])),


            ['Foo', m('.row-inline', triad(Cell))],


            sub("Layout classes"),
            md(layoutVerticalMarkdown),
            row([
                row([
                    this.layoutExample(".col", true),
                    this.layoutExample(".center-vertically", true),
                ]),
                m('div', [
                    this.layoutExample(".row"),
                    this.layoutExample(".center-horizontally"),
                ])
            ]),

            sub('Modifiers'),
            md('The class accept the following modifiers:'),

            m('.marginv-md', m('code.text-5.bold', '.col')),
            m(".row", [
                ...verticalDirections.map(x =>
                    this.layoutExample(`.col.align-${x}`, true)
                ),
            ]),

            m('.marginv-md', m('code.text-5.bold', '.center-vertically')),
            m(".row", [
                ...verticalDirections.map(x =>
                    this.layoutExample(`.center-vertically.align-${x}`, true)
                ),
            ]),

            m('.marginv-md', m('code.text-5.bold', '.row')),
            m(".row.row-wrap", [
                ...horizontalDirections.map(x =>
                    this.layoutExample(`.row.align-${x}`)
                ),
            ]),

            m('.marginv-md', m('code.text-5.bold', '.center-horizontally')),
            m(".row.row-wrap", [
                ...horizontalDirections.map(x =>
                    this.layoutExample(`.center-horizontally.align-${x}`)
                ),
            ]),
        ]);
    }

    layoutExample(cls: string, vertical = false) {
        // Compute displayed property
        let show = "." + last(cls.split("."));

        // Fix wrapper class
        cls += ".shadow.pad-xs.rounded-xs";
        cls += vertical ? ".margin-left-md" : ".margin-top-lg";

        // Define classes for sub-components
        let block = ".margin-xs.rounded-xs.bold.padv-sm.padh-md.color-accent-lighter";
        let selector =
            ".mono.bold.text-7.rounded-xs.pad-xs.color-accent.white-space-nowrap.absolute";
        let selectorStyle = vertical
            ? "transform: translateX(-3rem) rotate(-90deg) translateX(-50%)"
            : "transform: translateY(-1.25rem)";

        return m(".margin-bottom-lg" + (vertical ? ".col-3" : ".col-6"), [
            m(vertical ? ".center-horizontally" : "div", {style: "width: 8rem;"}, [
                m(selector, {style: selectorStyle}, show),
                m(
                    cls,
                    {
                        style: vertical
                            ? "min-height: 14rem; width: 6rem"
                            : "min-width: 14rem",
                    },
                    [
                        m(".text-5" + block, "1"),
                        m(".text-3" + block, "2"),
                        m(".text-1" + block, "3"),
                    ]
                ),
            ]),
        ]);
    }
}

// Text fragments
let layoutVerticalMarkdown = `
Mendeleev uses a flexbox based system to organize and distribute
objects on the page. based. Layout classes thus control how children 
should be distributed inside the parent container.

There are two classes to organize vertical layout distributions.
\`.vertical-layout\` organizes its children in a 
vertical orientation.

There are two classes to organize vertical layout distributions.
\`.vertical-layout\` organizes its children in a 
vertical orientation.

There are two classes to organize vertical layout distributions.
\`.vertical-layout\` organizes its children in a 
vertical orientation.
`;

// Auxiliary functions
let last = x => x[x.length - 1];
