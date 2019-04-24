import m from "mithril";
import { truncate } from "fs";

export let ulist = children => m("ul", children.map(x => m("li", x)));
export let olist = children => m("ol", children.map(x => m("li", x)));

/**
 * Create a row layout.
 *
 * @param children - list of elements
 * @param layout - number or array with column numbers
 */
export let row = (children, layout?) => {
    if (typeof layout === "number") {
        return row(children, numToLayout(layout, []));
    } else if (layout instanceof Array) {
        if (layout.length != children.length) {
            throw "Children and layout have different sizes";
        }
        let columns = [];
        for (let i = 0; i < children.length; i++) {
            columns.push(m(`.col-${layout[i]}`, children[i]));
        }
        return m(".row", columns);
    } else {
        return m(".row", children.map(x => m(".col", x)));
    }
};

// AUXILIARY FUNCTIONS
let numToLayout = (n, tmp: [number]) => {
    return n == 0 ? tmp.reverse() : numToLayout(Math.trunc(n / 10), (tmp.push(n % 10), tmp));
};
