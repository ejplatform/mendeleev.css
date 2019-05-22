import m from "mithril";
import {makePage, sub, RawMarkdown, title, CssTable } from "../base";

let md = data => m(RawMarkdown, data);
export class FontStyle {

  view() {
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

    return makePage([


      title('Font Style'),
      md(" Here you can see the MDN web documentation about " +
      "[font](https://developer.mozilla.org/en-US/docs/Web/CSS/font), " +
      "[text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) and " +
      "[text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)."),
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
      m(CssTable, { classes: fontStyles }),

    ])
  }
}