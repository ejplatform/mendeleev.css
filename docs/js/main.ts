import m from "mithril";
import {Intro} from './pages/intro';
import {Faq} from "./pages/faq";
import {Lists} from "./pages/lists";
import {Colors} from "./pages/colors";
import {Layout} from "./pages/layout";
import {Installation} from "./pages/installation";
import {Organization} from "./pages/organization";
import {Buttons} from "./pages/buttons";
import {Forms} from "./pages/forms";
import {FontSize} from "./pages/font-size";
import {FontStyle} from "./pages/font-style";
import {TextAlign} from "./pages/text-align";


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
        '/layout': Layout,

        //Typography
        '/font-size': FontSize,
        '/font-style': FontStyle,
        '/text-align': TextAlign,

        // Utility
        '/buttons': Buttons,
        '/forms': Forms,
        '/lists': Lists,

    });
    console.log('Mithril application started...');
};
appStart();

