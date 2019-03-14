"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
var base_1 = require("../base");
var mendeleev_mithril_1 = require("../../../integrations/mendeleev-mithril/mendeleev-mithril");
var md = function (data) { return mithril_1.default(base_1.RawMarkdown, data); };
var ipsumWords = base_1.ipsum.split(' ');
var Typography = /** @class */ (function () {
    function Typography() {
    }
    Typography.prototype.view = function () {
        var Tag = 'span.text-6.pad-xs.color-subtle.rounded-xs.margin-left-sm';
        var fontSizes = [1, 2, 3, 4, 5, 6, 7, 8];
        var fontStyles = [
            // font-weight
            'thin', 'extra-light', 'light', 'regular', 'medium', 'bold', 'semi-bold',
            'bold', 'extra-bold', 'black',
            // font-style
            'italic', 'roman',
            // text-transform
            'uppercase', 'lowercase', 'capitalize', 'normalcase',
            // text-decoration
            'underline', 'line-through', 'no-underline',
            // font-family
            'sans-serif', 'serif', 'monospace', 'cursive',
        ];
        var alignments = ['left', 'center', 'right', 'justify'];
        return base_1.makePage([
            // INTRO
            base_1.title('Typography'),
            md("Most sizes are set in rems, so page can be responsively resized " +
                "based on a single <html> font-size property. Mendeleev never changes " +
                "the <html> font-size in media queries, but you can use it to make " +
                "responsive breakpoints for your project. Remember that 1rem = 16px, " +
                "which is the default font-size."),
            // HEADINGS
            base_1.sub('Font sizes and headings'),
            md("HTML headings go from `<h1>` to `<h6>`. The default font size of " +
                "`1rem` (16px) corresponds to `<h6>`. Text sizes follow headers " +
                "via the `.text-n` classes."),
            mendeleev_mithril_1.row([
                fontSizes.map(function (x) { return mithril_1.default(".text-subtle.text-" + x + ".pad-sm", [
                    ipsumWords.slice(3 * x, 3 * x + 3).join(' '),
                    mithril_1.default(Tag, ".text-" + x),
                ]); }),
                [1, 2, 3, 4, 5, 6].map(function (x) { return mithril_1.default("h" + x + ".text-subtle", [
                    'Heading',
                    mithril_1.default(Tag, "<h" + x + ">"),
                ]); }),
            ]),
            base_1.sub('Default inline styles')
        ].concat(['You can <mark>highlight</mark> text.',
            'Delete <del>parts</del><ins>fragments</ins> of text as in revision control',
            'Strike through <s  >invalid information</s>.',
            '<u>This line of text will render as underlined</u>',
            '<small>This line of text is meant to be treated as fine print.</small>',
            '<strong>This line <strong>rendered</strong> as bold text.</strong>',
            '<em>This line rendered as italicized text.</em>',
            'Add subscript<sub>1</sub> and superscripts<sup>2</sup>',
            'Show <code>code</code>, shortcuts <kbd>ctrl</kbd> + <kbd>C</kbd> and <samp>sample output</samp>',
            'Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>'].map(function (line) { return [
            mithril_1.default('div.text-7', mithril_1.default('code', line)),
            mithril_1.default('p', mithril_1.default.trust(line)),
        ]; }), [
            base_1.sub('Font styles and decoration'),
            mithril_1.default('table', [
                mithril_1.default('tr', [mithril_1.default('th', 'Property'), mithril_1.default('th', 'Style')])
            ].concat(fontStyles.map(function (x) {
                return mithril_1.default('tr', [
                    mithril_1.default('td', mithril_1.default('code', '.' + x)),
                    mithril_1.default("td." + x, x),
                ]);
            }))),
            base_1.sub('Paragraph alignment')
        ], alignments.map(function (x) { return mithril_1.default('div', [
            mithril_1.default('h2.h4', mithril_1.default('code', ".text-" + x)),
            mithril_1.default("p.text-" + x, base_1.ipsum),
        ]); }), [
            base_1.sub('Leading')
        ], ['-loose', '', '-title', '-solid'].map(function (x) { return mithril_1.default('div', [
            mithril_1.default('h2.h4', mithril_1.default('code', ".leading" + x)),
            mithril_1.default("p.leading" + x, base_1.ipsum),
        ]); }), [
            base_1.sub('Measure')
        ], ['', '-narrow', '-wide'].map(function (x) { return mithril_1.default('div', [
            mithril_1.default('h2.h4', mithril_1.default('code', ".measure" + x)),
            mithril_1.default("p.measure" + x, base_1.ipsum),
        ]); }), [
            base_1.sub('Indentation')
        ], ['indent', 'indent-punctuation', 'truncate'].map(function (x) { return mithril_1.default('div', [
            mithril_1.default('h2.h4', mithril_1.default('code', "." + x)),
            mithril_1.default("p." + x, base_1.ipsum),
        ]); }), [
            base_1.sub('Lists'),
            mithril_1.default.trust("\n<ul class=\"list-reset\">\n  <li>Lorem ipsum dolor sit amet</li>\n  <li>Integer molestie lorem at massa</li>\n    <ul>\n      <li>Phasellus iaculis neque</li>\n      <li>Purus sodales ultricies</li>\n      <li>Ac tristique libero volutpat at</li>\n    </ul>\n    <ol>\n      <li>Vestibulum laoreet porttitor sem</li>\n      <li>Facilisis in pretium nisl aliquet</li>\n    </ol>\n  </li>\n  <ul class=\"list-inline\">\n      <li>Nulla volutpat aliquam velit\n      <li>Faucibus porta lacus fringilla vel</li>\n      <li>Eget porttitor lorem</li>\n  </ul>\n</ul>"),
        ]));
    };
    return Typography;
}());
exports.Typography = Typography;
