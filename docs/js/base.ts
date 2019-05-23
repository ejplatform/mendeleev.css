import m from "mithril";
import MarkdownIt from "markdown-it";
import Prismjs from "prismjs";

// Function that returns the CSS definition for a specific rule
function cssDefinitions(sel){
    let pos = 1;
    let rules = document.styleSheets[pos].cssRules;
    let cssDeclarations = {};
    
    for (var rule of rules) {
        var body = rule.cssText.split("{");
        body = body[1].split("}")[0].trim();
            
        cssDeclarations[rule.selectorText] = body;
    }
    return cssDeclarations[`.${sel}`];
}

// CSS Table component
export let CssTable = {
    view: (vnode) => {
        let classes = vnode.attrs.classes;
        return m("table.table",[

            m("tr", [m('th', 'Property'), m('th', 'Definition'), m('th', 'Style')]),
            ...classes.map(x =>
                m('tr', [
                    m('td', m('code', '.' + x)),
                    m('td', cssDefinitions(x)),
                    m(`td.${x}`, x),
                ]))
        ])
    }
}

//Prism component
export let Prism = {
    view: (vnode) => {
        let lang = vnode.attrs.lang;
        let code = vnode.children[0];
        switch(vnode.attrs.lang) {
            case 'html':
            return m("pre", m("code", 
                m(`.prismjs-${lang}`,  m.trust(Prismjs.highlight(code, Prismjs.languages.html, `${lang}`)))));
            case 'javascript':
            return m("pre", m("code",
                m(`.prismjs-${lang}`,  m.trust(Prismjs.highlight(code, Prismjs.languages.javascript, `${lang}`)))));
        }
    }
};

// Markdown component
let md = new MarkdownIt({html: true});
export let Markdown = {
    view: (vnode) => {
        let data = vnode.children[0];
        return m('.markdown', m.trust(md.render(data)))
    }
};
export let RawMarkdown = {view: (vnode) => m.trust(md.render(vnode.children[0]))};

// Lorem Ipsum
export let ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
    'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
    'commodo consequat.';

// Model
export let model = {};


/*
 VIEW FUNCTIONS
 ============================================================================ */

/**
 * Creates a component that renders a page.
 *
 * It accepts function to a mithril vnode, a string of Markdown text or
 * a mithril vnode. Returns a Mithril component.
 */
export function page(data) {
    switch (typeof(data)) {
        case 'function':
            return {view: () => makePage(data())};
        case 'string':
            return {view: () => makePage(m(Markdown, data))};
        default:
            return {view: () => makePage(data)};
    }
}

/**
 * Like page(), but aways receive a mithril vnode and return another.
 */
export function makePage(data) {
    return m('main.height-fullvh', [
        head(),
        m('.row.height-full.width-full', [
            m('.size-x6.shadow-4', navbar()),
            m('.flex-1.overflow-y-auto', m('.container-1.raise-first.pad-y3', data)),
        ])
    ]);
}


let head = () => m('header.row.items-center.text-brand.shadow-1.sticky.size-y4p', {style: 'background: #ffffffdd;'}, [
    m('.margin-l3', m.trust(logoSVG)),
    m('ul.list-reset.row', [
        m('li.margin-r2', m('a', {href: '/topics'}, 'Topics')),
        m('li.margin-r3', m('a', {href: '//github.com/fabiommendes/mendeleev.css/'}, 'Github')),
    ])
]);


let navbar = () => m('nav.pad-x2.pad-y3.height-full.overflow-y.color-grey', [
    section('Getting started', [
        'What is Mendeleev? </intro>',
        'Installation </installation>',
        'Introduction </introduction>',
        'FAQ/Contribute </faq>',
    ]),

    section('Configuration', [
        'Colors </colors>',
        'Layout </layout>',
    ]),

    section('Typography', [
        'Font size </font-size>',
        'Font style </font-style>',
        'Text align </text-align>'
    ]),

    section('Utility', [
        'Buttons and links </buttons>',
        'Forms </forms>',
        'Lists </lists>',
    ]),
]);

let section = (title, links) => m('.margin-b3p', [
    m('h1.h5.uppercase.opacity-4.margin-t0', title),
    m('ul.list-reset', links.map(sectionLink)),
]);

let sectionLink = (st) => {
    let [title, href] = parseLink(st);
    return m('li', m('a.text-white', {href: href}, title));
};

let parseLink = (st: string) => {
    let [title, post] = st.split('<');
    return [title.trim(), post.slice(0, post.length - 1)];
};

let logoSVG = `
<svg
   xmlns="http://www.w3.org/2000/svg"
   width="320px"
   viewBox="0 0 77.409814 7.1628699"
   version="1.1">
  <g
     inkscape:label="Camada 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(283.1798,-119.06442)">
    <g aria-label="MENDELEEV.CSS">
      <path
         id="path1019"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Soviet Expanded';-inkscape-font-specification:'Soviet Expanded, ';fill:#de011e;fill-opacity:1;stroke-width:0.86954415px"
         d="m -279.10381,119.06442 q 0.34781,0 0.57607,0.17391 0.23912,0.17391 0.23912,0.41304 v 6.4781 h -1.63039 v -3.53252 l -0.8152,0.58694 -0.8152,-0.58694 v 3.53252 h -1.63039 v -6.4781 q 0,-0.23913 0.23912,-0.41304 0.23913,-0.17391 0.57608,-0.17391 h 0.81519 l 0.8152,2.35864 0.8152,-2.35864 z m 7.05655,2.35864 h -1.63039 v -1.17388 h -1.6304 v 1.82604 h 1.46736 v 1.04345 h -1.46736 v 1.82605 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57608,0.16304 h -3.26079 q -0.33695,0 -0.57607,-0.16304 -0.23913,-0.17391 -0.23913,-0.4239 v -5.89116 q 0,-0.23913 0.23913,-0.41304 0.23912,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57608,0.17391 0.23912,0.17391 0.23912,0.41304 z m 2.16537,-2.35864 q -0.33695,0 -0.57607,0.17391 -0.23913,0.17391 -0.23913,0.41304 v 6.4781 h 1.663 l 1.59779,-3.53252 v 3.53252 h 1.6304 v -6.4781 q 0,-0.23913 -0.23913,-0.41304 -0.22825,-0.17391 -0.57607,-0.17391 h -0.8152 l -1.65213,4.17382 v -4.17382 z m 7.05655,1.18476 v 4.69554 h 1.6304 v -4.69554 z m 2.06517,-1.18476 q 0.61955,0.1087 0.8152,0.27174 0.19565,0.19564 0.35869,0.65216 v 5.239 q -0.22826,0.48912 -0.41304,0.60868 -0.18477,0.13043 -0.83693,0.29347 h -3.61948 v -7.06505 z m 7.43698,2.35864 h -1.63039 v -1.17388 h -1.6304 v 1.82604 h 1.46736 v 1.04345 h -1.46736 v 1.82605 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57608,0.16304 h -3.26079 q -0.33695,0 -0.57607,-0.16304 -0.23912,-0.17391 -0.23912,-0.4239 v -5.89116 q 0,-0.23913 0.23912,-0.41304 0.23912,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57608,0.17391 0.23912,0.17391 0.23912,0.41304 z m 4.61096,2.34777 h 1.6304 v 2.35864 h -4.89119 v -7.06505 h 1.6304 v 5.8803 h 1.63039 z m 7.87176,-2.34777 h -1.6304 v -1.17388 h -1.63039 v 1.82604 h 1.46735 v 1.04345 h -1.46735 v 1.82605 h 1.63039 v -1.17389 h 1.6304 v 1.7717 q 0,0.24999 -0.23913,0.4239 -0.22825,0.16304 -0.57607,0.16304 h -3.26079 q -0.33695,0 -0.57607,-0.16304 -0.23913,-0.17391 -0.23913,-0.4239 v -5.89116 q 0,-0.23913 0.23913,-0.41304 0.23912,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57607,0.17391 0.23913,0.17391 0.23913,0.41304 z m 6.24135,0 h -1.63039 v -1.17388 h -1.6304 v 1.82604 h 1.46736 v 1.04345 h -1.46736 v 1.82605 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57607,0.16304 h -3.2608 q -0.33694,0 -0.57607,-0.16304 -0.23912,-0.17391 -0.23912,-0.4239 v -5.89116 q 0,-0.23913 0.23912,-0.41304 0.23913,-0.17391 0.57607,-0.17391 h 3.2608 q 0.34781,0 0.57607,0.17391 0.23912,0.17391 0.23912,0.41304 z m 1.35017,-2.35864 h 1.6304 l 0.8152,4.70641 0.81519,-4.70641 h 1.6304 l -1.6304,7.06505 h -1.63039 z m 6.24136,5.30422 h 2.31516 v 1.85865 h -2.31516 z m 8.75488,-2.94558 h -1.63039 v -1.17388 h -1.6304 v 4.69554 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57608,0.16304 h -3.26079 q -0.33694,0 -0.57607,-0.16304 -0.23912,-0.17391 -0.23912,-0.4239 v -5.89116 q 0,-0.23913 0.23912,-0.41304 0.23913,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57608,0.17391 0.23912,0.17391 0.23912,0.41304 z m 1.35018,-2.35864 v 1.18476 l 3.26079,4.69554 h -1.6304 v -1.17389 h -1.63039 v 2.35864 h 4.89118 v -1.18475 l -3.26079,-4.69554 h 1.6304 v 1.17388 h 1.63039 v -2.35864 z m 6.24135,0 v 1.18476 l 3.26079,4.69554 h -1.63039 v -1.17389 h -1.6304 v 2.35864 h 4.89119 v -1.18475 l -3.26079,-4.69554 h 1.63039 v 1.17388 h 1.6304 v -2.35864 z" />
    </g>
  </g>
</svg>`;

/*
 UTILITIES
 ============================================================================ */
export let title = content => m('h1.uppercase.text-brand.h3', content);
export let sub = content => m('h2.uppercase.text-brand.h4', content);
export let subsub = content => m('h2.uppercase.text-brand.h5', content);
