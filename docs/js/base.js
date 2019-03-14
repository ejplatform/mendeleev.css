"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
var MarkdownIt = require("markdown-it");
// Markdown component
var md = new MarkdownIt({ html: true });
exports.Markdown = {
    view: function (vnode) {
        var data = vnode.children[0];
        return mithril_1.default('.markdown', mithril_1.default.trust(md.render(data)));
    }
};
exports.RawMarkdown = { view: function (vnode) { return mithril_1.default.trust(md.render(vnode.children[0])); } };
// Lorem Ipsum
exports.ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
    'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
    'commodo consequat.';
// Model
exports.model = {};
/*
 VIEW FUNCTIONS
 ============================================================================ */
/**
 * Creates a component that renders a page.
 *
 * It accepts function to a mithril vnode, a string of Markdown text or
 * a mithril vnode. Returns a Mithril component.
 */
function page(data) {
    switch (typeof (data)) {
        case 'function':
            return { view: function () { return makePage(data()); } };
        case 'string':
            return { view: function () { return makePage(mithril_1.default(exports.Markdown, data)); } };
        default:
            return { view: function () { return makePage(data); } };
    }
}
exports.page = page;
/**
 * Like page(), but aways receive a mithril vnode and return another.
 */
function makePage(data) {
    return mithril_1.default('main.height-screen', [
        head(),
        mithril_1.default('.row.height-full.width-full', [
            mithril_1.default('.size-x6.shadow-3', navbar()),
            mithril_1.default('.flex-1.overflow-y-auto', mithril_1.default('.container.raise-first.pad-y3', data)),
        ])
    ]);
}
exports.makePage = makePage;
var head = function () { return mithril_1.default('header.row.items-center.text-brand.shadow.sticky.size-y4p', { style: 'background: #ffffffdd;' }, [
    mithril_1.default('.margin-l3', mithril_1.default.trust(logoSVG)),
    mithril_1.default('ul.list-reset.row', [
        mithril_1.default('li.margin-r2', mithril_1.default('a', { href: '/topics' }, 'Topics')),
        mithril_1.default('li.margin-r3', mithril_1.default('a', { href: '//github.com/fabiommendes/mendeleev.css/' }, 'Github')),
    ])
]); };
var navbar = function () { return mithril_1.default('nav.pad-x2.pad-y3.height-full.overflow-y.color-grey', [
    section('Getting started', [
        'What is Mendeleev? </intro>',
        'Installation </installation>',
        'Introduction </introduction>',
        'FAQ/Contribute </faq>',
    ]),
    section('Configuration', [
        'Colors </colors>',
        'Layout </layout>',
        'Typography </typography>',
    ]),
    section('Utility', [
        'Buttons and links </buttons>',
        'Forms </buttons>',
        'Lists </lists>',
    ]),
]); };
var section = function (title, links) { return mithril_1.default('.margin-b3p', [
    mithril_1.default('h1.h5.uppercase.opacity-4.margin-t0', title),
    mithril_1.default('ul.list-reset', links.map(sectionLink)),
]); };
var sectionLink = function (st) {
    var _a = parseLink(st), title = _a[0], href = _a[1];
    return mithril_1.default('li', mithril_1.default('a.text-white', { href: href }, title));
};
var parseLink = function (st) {
    var _a = st.split('<'), title = _a[0], post = _a[1];
    return [title.trim(), post.slice(0, post.length - 1)];
};
var logoSVG = "\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   width=\"320px\"\n   viewBox=\"0 0 77.409814 7.1628699\"\n   version=\"1.1\">\n  <g\n     inkscape:label=\"Camada 1\"\n     inkscape:groupmode=\"layer\"\n     id=\"layer1\"\n     transform=\"translate(283.1798,-119.06442)\">\n    <g aria-label=\"MENDELEEV.CSS\">\n      <path\n         id=\"path1019\"\n         style=\"font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Soviet Expanded';-inkscape-font-specification:'Soviet Expanded, ';fill:#de011e;fill-opacity:1;stroke-width:0.86954415px\"\n         d=\"m -279.10381,119.06442 q 0.34781,0 0.57607,0.17391 0.23912,0.17391 0.23912,0.41304 v 6.4781 h -1.63039 v -3.53252 l -0.8152,0.58694 -0.8152,-0.58694 v 3.53252 h -1.63039 v -6.4781 q 0,-0.23913 0.23912,-0.41304 0.23913,-0.17391 0.57608,-0.17391 h 0.81519 l 0.8152,2.35864 0.8152,-2.35864 z m 7.05655,2.35864 h -1.63039 v -1.17388 h -1.6304 v 1.82604 h 1.46736 v 1.04345 h -1.46736 v 1.82605 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57608,0.16304 h -3.26079 q -0.33695,0 -0.57607,-0.16304 -0.23913,-0.17391 -0.23913,-0.4239 v -5.89116 q 0,-0.23913 0.23913,-0.41304 0.23912,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57608,0.17391 0.23912,0.17391 0.23912,0.41304 z m 2.16537,-2.35864 q -0.33695,0 -0.57607,0.17391 -0.23913,0.17391 -0.23913,0.41304 v 6.4781 h 1.663 l 1.59779,-3.53252 v 3.53252 h 1.6304 v -6.4781 q 0,-0.23913 -0.23913,-0.41304 -0.22825,-0.17391 -0.57607,-0.17391 h -0.8152 l -1.65213,4.17382 v -4.17382 z m 7.05655,1.18476 v 4.69554 h 1.6304 v -4.69554 z m 2.06517,-1.18476 q 0.61955,0.1087 0.8152,0.27174 0.19565,0.19564 0.35869,0.65216 v 5.239 q -0.22826,0.48912 -0.41304,0.60868 -0.18477,0.13043 -0.83693,0.29347 h -3.61948 v -7.06505 z m 7.43698,2.35864 h -1.63039 v -1.17388 h -1.6304 v 1.82604 h 1.46736 v 1.04345 h -1.46736 v 1.82605 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57608,0.16304 h -3.26079 q -0.33695,0 -0.57607,-0.16304 -0.23912,-0.17391 -0.23912,-0.4239 v -5.89116 q 0,-0.23913 0.23912,-0.41304 0.23912,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57608,0.17391 0.23912,0.17391 0.23912,0.41304 z m 4.61096,2.34777 h 1.6304 v 2.35864 h -4.89119 v -7.06505 h 1.6304 v 5.8803 h 1.63039 z m 7.87176,-2.34777 h -1.6304 v -1.17388 h -1.63039 v 1.82604 h 1.46735 v 1.04345 h -1.46735 v 1.82605 h 1.63039 v -1.17389 h 1.6304 v 1.7717 q 0,0.24999 -0.23913,0.4239 -0.22825,0.16304 -0.57607,0.16304 h -3.26079 q -0.33695,0 -0.57607,-0.16304 -0.23913,-0.17391 -0.23913,-0.4239 v -5.89116 q 0,-0.23913 0.23913,-0.41304 0.23912,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57607,0.17391 0.23913,0.17391 0.23913,0.41304 z m 6.24135,0 h -1.63039 v -1.17388 h -1.6304 v 1.82604 h 1.46736 v 1.04345 h -1.46736 v 1.82605 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57607,0.16304 h -3.2608 q -0.33694,0 -0.57607,-0.16304 -0.23912,-0.17391 -0.23912,-0.4239 v -5.89116 q 0,-0.23913 0.23912,-0.41304 0.23913,-0.17391 0.57607,-0.17391 h 3.2608 q 0.34781,0 0.57607,0.17391 0.23912,0.17391 0.23912,0.41304 z m 1.35017,-2.35864 h 1.6304 l 0.8152,4.70641 0.81519,-4.70641 h 1.6304 l -1.6304,7.06505 h -1.63039 z m 6.24136,5.30422 h 2.31516 v 1.85865 h -2.31516 z m 8.75488,-2.94558 h -1.63039 v -1.17388 h -1.6304 v 4.69554 h 1.6304 v -1.17389 h 1.63039 v 1.7717 q 0,0.24999 -0.23912,0.4239 -0.22826,0.16304 -0.57608,0.16304 h -3.26079 q -0.33694,0 -0.57607,-0.16304 -0.23912,-0.17391 -0.23912,-0.4239 v -5.89116 q 0,-0.23913 0.23912,-0.41304 0.23913,-0.17391 0.57607,-0.17391 h 3.26079 q 0.34782,0 0.57608,0.17391 0.23912,0.17391 0.23912,0.41304 z m 1.35018,-2.35864 v 1.18476 l 3.26079,4.69554 h -1.6304 v -1.17389 h -1.63039 v 2.35864 h 4.89118 v -1.18475 l -3.26079,-4.69554 h 1.6304 v 1.17388 h 1.63039 v -2.35864 z m 6.24135,0 v 1.18476 l 3.26079,4.69554 h -1.63039 v -1.17389 h -1.6304 v 2.35864 h 4.89119 v -1.18475 l -3.26079,-4.69554 h 1.63039 v 1.17388 h 1.6304 v -2.35864 z\" />\n    </g>\n  </g>\n</svg>";
/*
 UTILITIES
 ============================================================================ */
exports.title = function (content) { return mithril_1.default('h1.uppercase.text-brand.h3', content); };
exports.sub = function (content) { return mithril_1.default('h2.uppercase.text-brand.h4', content); };
exports.subsub = function (content) { return mithril_1.default('h2.uppercase.text-brand.h5', content); };
