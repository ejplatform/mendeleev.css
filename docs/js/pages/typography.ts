import m from "mithril";
import {ipsum, makePage, RawMarkdown, sub, title} from "../base";
import {row} from "../../../integrations/mendeleev-mithril/src/mendeleev-mithril";

let md = data => m(RawMarkdown, data);
let ipsumWords = ipsum.split(' ');

export class Typography {
    view() {
        let Tag = 'span.text-6.pad-xs.color-subtle.rounded-xs.margin-left-sm';
        let fontSizes = [1, 2, 3, 4, 5, 6, 7, 8];
        let fontStyles = [
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

            // vertical-align
            // 'align-baseline', 'align-top', 'align-middle', 'align-bottom', 'align-text-top', 'align-text-bottom',
        ];
        let alignments = ['left', 'center', 'right', 'justify'];

        return makePage([
            // INTRO
            title('Typography'),
            md("Most sizes are set in rems, so page can be responsively resized " +
                "based on a single <html> font-size property. Mendeleev never changes " +
                "the <html> font-size in media queries, but you can use it to make " +
                "responsive breakpoints for your project. Remember that 1rem = 16px, " +
                "which is the default font-size."),

            // HEADINGS
            sub('Font sizes and headings'),
            md("HTML headings go from `<h1>` to `<h6>`. The default font size of " +
                "`1rem` (16px) corresponds to `<h6>`. Text sizes follow headers " +
                "via the `.text-n` classes."),
            row([
                fontSizes.map(x => m(`.text-subtle.text-${x}.pad-sm`, [
                    ipsumWords.slice(3 * x, 3 * x + 3).join(' '),
                    m(Tag, `.text-${x}`),
                ])),
                [1, 2, 3, 4, 5, 6].map(x => m(`h${x}.text-subtle`, [
                    'Heading',
                    m(Tag, `<h${x}>`),
                ])),
            ]),

            sub('Default inline styles'),
            ...['You can <mark>highlight</mark> text.',
                'Delete <del>parts</del><ins>fragments</ins> of text as in revision control',
                'Strike through <s  >invalid information</s>.',
                '<u>This line of text will render as underlined</u>',
                '<small>This line of text is meant to be treated as fine print.</small>',
                '<strong>This line <strong>rendered</strong> as bold text.</strong>',
                '<em>This line rendered as italicized text.</em>',
                'Add subscript<sub>1</sub> and superscripts<sup>2</sup>',
                'Show <code>code</code>, shortcuts <kbd>ctrl</kbd> + <kbd>C</kbd> and <samp>sample output</samp>',
                'Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>'].map(line => [
                m('div.text-7', m('code', line)),
                m('p', m.trust(line)),
            ]),

            sub('Font styles and decoration'),
            m('table', [
                m('tr', [m('th', 'Property'), m('th', 'Style')]),
                ...fontStyles.map(x =>
                    m('tr', [
                        m('td', m('code', '.' + x)),
                        m(`td.${x}`, x),
                    ]))
            ]),

            sub('Paragraph alignment'),
            ...alignments.map(x => m('div', [
                m('h2.h4', m('code', `.text-${x}`)),
                m(`p.text-${x}`, ipsum),
            ])),

            sub('Leading'),
            ...['-loose', '', '-title', '-solid'].map(x => m('div', [
                m('h2.h4', m('code', `.leading${x}`)),
                m(`p.leading${x}`, ipsum),
            ])),

            sub('Measure'),
            ...
                ['', '-narrow', '-wide'].map(x => m('div', [
                    m('h2.h4', m('code', `.measure${x}`)),
                    m(`p.measure${x}`, ipsum),
                ])),

            sub('Indentation'),
            ...
                ['indent', 'indent-punctuation', 'truncate'].map(x => m('div', [
                    m('h2.h4', m('code', `.${x}`)),
                    m(`p.${x}`, ipsum),
                ])),

            sub('Lists'),
            m.trust(`
<ul class="list-reset">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Integer molestie lorem at massa</li>
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
    <ol>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Facilisis in pretium nisl aliquet</li>
    </ol>
  </li>
  <ul class="list-inline">
      <li>Nulla volutpat aliquam velit
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Eget porttitor lorem</li>
  </ul>
</ul>`),
        ])
    }
}

