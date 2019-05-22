import m from "mithril";
import { ipsum, makePage, RawMarkdown, sub, title } from "../base";

let md = data => m(RawMarkdown, data);

export class TextAlign {
  view() {
    let alignments = ['left', 'center', 'right', 'justify'];

    return makePage([
      title('Text Align'),
      md(" Here you can see the MDN web documentation about " +
      "[text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align), " +
      "[text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent) and " +
      "[line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)."),
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
    ])
  }
}