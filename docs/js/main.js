"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = require("mithril");
var intro_1 = require("./pages/intro");
var faq_1 = require("./pages/faq");
var typography_1 = require("./pages/typography");
var lists_1 = require("./pages/lists");
var colors_1 = require("./pages/colors");
var layout_1 = require("./pages/layout");
var installation_1 = require("./pages/installation");
var organization_1 = require("./pages/organization");
var buttons_1 = require("./pages/buttons");
var forms_1 = require("./pages/forms");
var appStart = function () {
    mithril_1.default.route.prefix('');
    mithril_1.default.route(document.body, '/', {
        // Getting started
        '/': intro_1.Intro,
        '/installation': installation_1.Installation,
        '/organization': organization_1.Organization,
        '/faq': faq_1.Faq,
        // Configurations
        '/colors': colors_1.Colors,
        '/typography': typography_1.Typography,
        '/layout': layout_1.Layout,
        // Utility
        '/buttons': buttons_1.Buttons,
        '/forms': forms_1.Forms,
        '/lists': lists_1.Lists,
    });
    console.log('Mithril application started...');
};
appStart();
