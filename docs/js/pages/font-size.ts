import m from "mithril";
import {ipsum, makePage, RawMarkdown, sub, title, CssTable} from "../base";
import {row} from "../../../integrations/mendeleev-mithril/src/mendeleev-mithril";

let md = data => m(RawMarkdown, data);
let ipsumWords = ipsum.split(' ');

export class FontSize {
  view (){
    let Tag = 'span.text-6.pad-xs.color-subtle.rounded-xs.margin-left-sm';
    let fontSizes = [1, 2, 3, 4, 5, 6, 7, 8];
    
    return makePage([
      title('Font Size'),
      md("Most sizes are set in rems, so page can be responsively resized " +
      "based on a single <html> font-size property. Mendeleev never changes " +
      "the <html> font-size in media queries, but you can use it to make " +
      "responsive breakpoints for your project. Remember that 1rem = 16px, " +
      "which is the default font-size."),

      md(" Here you can see the MDN web documentation about " +
      "[font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) " +
      "and [heading](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)."
      ),
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
    ])
  }
}