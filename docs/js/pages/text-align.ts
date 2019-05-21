import m from "mithril";
import { ipsum, makePage, sub, title } from "../base";


export class TextAlign {
  view() {
    let alignments = ['left', 'center', 'right', 'justify'];

    return makePage([
      title('Text Align'),
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