import m from "mithril";
import {Intro} from './pages/intro';
import {Faq} from "./pages/faq";
import {Typography} from "./pages/typography";
import {Lists} from "./pages/lists";
import {Colors} from "./pages/colors";
import {Layout} from "./pages/layout";
import {Installation} from "./pages/installation";
import {Organization} from "./pages/organization";
import {Buttons} from "./pages/buttons";
import {Forms} from "./pages/forms";


let appStart = () => {
    m.route.prefix('');
    m.route(document.body, '/', {
        // Getting started
        '/': Intro,
        '/installation': Installation,
        '/organization': Organization,
        '/faq': Faq,

        // Configurations
        '/colors': Colors,
        '/typography': Typography,
        '/layout': Layout,

        // Utility
        '/buttons': Buttons,
        '/forms': Forms,
        '/lists': Lists,

    });
    console.log('Mithril application started...');
};
appStart();

