import {page} from "../base";

export let Installation = page(`
# Installation

## CDN

The easiest way to get Mendelev.CSS in your project is to use a CDN. Notice that
the CDN build is a one-size-fits-all solution that has taken a lots of decisions
about colors, typography, etc that you probably will want to change in your
project. The CDN version, however, is a great way to get your hands dirt and
start building something.

We use jsdelivr:

\`\`\`html
<!-- Add the fonts -->
<link 
    href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
    rel="stylesheet">

<!-- Normalize.CSS -->
<link 
    href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"
    rel="stylesheet">

<!-- Default stylesheet -->
<link 
    href="https://cdn.jsdelivr.net/npm/mendeleev.css/dist/mendeleev.min.css" 
    rel="stylesheet">

<!-- Extra components -->
<link
    href="https://cdn.jsdelivr.net/npm/mendeleev.css/dist/mendeleev-components.min.css" 
    rel="stylesheet">
\`\`\`

## NPM + Sass + Configuration

Mendeleev.CSS is build with Sass and can be personalized to your projects using
a series of configurations. You can install it using Sass 

### Parcel


### Webpack

`);
