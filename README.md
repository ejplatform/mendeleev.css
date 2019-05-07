# An atomic CSS framework.

[![Travis Status](https://travis-ci.org/fabiommendes/mendeleev.css.svg?branch=master)](https://travis-ci.org/fabiommendes/mendeleev.css?branch=master)
[![Codacy Status](https://img.shields.io/codacy/grade/848fb4bd6902434fab0bcfb5461284fe/master.svg)](https://www.codacy.com/app/fabiommendes/mendeleev.css/dashboard)
[![Dependencies Status](https://david-dm.org/fabiommendes/mendeleev.css.svg)](https://david-dm.org/fabiommendes/mendeleev.css)
[![Version Status](https://badge.fury.io/js/mendeleev.svg)](https://www.npmjs.com/package/mendeleev.css)
[![Download Status](https://img.shields.io/npm/dt/mendeleev.css.svg)](https://www.npmjs.com/package/mendeleev.css)


## What is Mendeleev.css?

Mendeleev.css is a library for creating stylesheets in atomic/functional style.
It uses a utility-centric approach to CSS that value composition of small and
predictable utility classes over the up-front creation of components. This is
an approach that tackles the bloat and complexity often seen in CSS code bases
by desincouraging "premature abstraction". Your code starts life looking somewhat
like this:

```html
<div class="col flex-center pad-3 height-5 shadow-1 rounded-3">
    <h1 "uppercase text-3 color-muted">Smith</h1>
    <ul class="list-reset margin-y3">
        <li><strong>Name:</strong> John Smith</li>
        <li><strong>Email:</strong> foo@smith.com</li>
    </ul>
</div>
```

If the need arises, we can add new styles or tweak the existing ones (e.g.,
change `pad-3` to `pad-x3 pad-y2`. If a group of styles seems to be recurrent
(i.e., it wants to appear in at least two different places in your code base),
you might want to give it a name, effectively promoting a set of styles to a
CSS component.

SCSS:

```scss
.user-card {
    @include utilities('col flex-center pad-3 height-5 shadow-1 rounded-3');

    &__title {
        @include utilities('uppercase text-3 color-muted');
    }
}
```

Adjust the correponding HTML...

```html
<div class="user-card">
    <h1 "uppercase text-3 color-muted">Smith</h1>
    <ul class="user-card__title">
        <li><strong>Name:</strong> John Smith</li>
        <li><strong>Email:</strong> foo@smith.com</li>
    </ul>
</div>
```

Voila! A component!

Since most of us are using either server-side templating or a frontent framework
to generate HTML, it is actually very unlikely that there is a real need to make
this promotion. It is much more likely that `"user-card"` will be created
using something like `<UserCard user={user.username} name={user.name}>` instead
of typing raw HTML. Other than making a more beautful HTML in our inspect tool,
the CSS component approach does not acomplish much.

With Mendeleev, and with atomic CSS in general, we communicate style direcly in
HTML rather than relying exclusively on CSS. The point is that it is easier to
structure HTML documents than CSS stylesheets, and moving complexity from a
complicated system to a simpler one is often a good archtectural tradeoff.

If you are uneasy with this perversion of established "best practices",
consider that many talented developers are [challenging them](https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/).
To summarize the point: the standard "semantic classes" approach to HTML styling
separates technologies, not concerns. Styles are still coupled to markup
via class names. By enforcing semantic class names, we are given very little
opportunities to reuse styles and discover good organization of CSS code.

Atomic inverts this logic and declares that the primary use of classes is
to define presentation rather than giving semantic hints (to whom?). Markup
should preferebly treat CSS as a dependendency in you r HTML and not the other way around.
This beautiful [post](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
by the author of Tailwinds, currently the most popular Atomic CSS library,
nicely explains this point.


## Installation

### Use the CDN

If you are in a hurry, just grab Mendeleev.css from a CDN. We highly advice
**against it** in production code, since the default builds are very large and
define many properties you probably do not need.

```html
<link rel="stylesheet" href="...">
```


### Install with npm

(or yarn, pnpm, etc)

```sh
$ npm install mendeleev.css --save-dev
```

Most users just need to define a `$config` dictionary and then import the main
Mendeleev module from `node_modules/`

```
$config: (
    'pallete': (
        'brand': magenta,
        'accent': cyan,
    ),
    'typography': (
        'sans-serif': '"Comic Sans", sans',
    ),
);

@import 'node_modules/mendeleev.css/src/mendeleev';
```

Other more advanced uses are also possible (e.g., you may want to define your
own utility modules or react on the contents of the configuration dictionary).
The point is that almost all aspects of the generated styles can be controlled via
this configuration map. Mendeleev does not impose any style. We simply choose a
better default look that is more presentable than ugly unstyled HTML, but you can
control almost any aspect of the final presentation with the proper configuration
option.


## A design system instead of an UI tookit

Mendeleev.css is not a UI framework like Bootstrap. It does not create custom
UI elements like menus, tabs, accordions, etc, and it uses absolutely no
JavaScript. Instead, it defines a set of guidelines that helps developers to better
structure and grow CSS code bases. Its role is to define a good ground for a
well archtechitured CSS system, but leaves you the task to define exactly how
things should look.

Here is a list of core ideas used to design it, in no particular order:

* CSS benefits from composition of simple utility classes instead of components everywhere.
* It should be easy to extract higher level patterns from the basic library of
  utility classes (some might call it "components", but it is just an abstraction).
* Elements should carry some default style. The basic look and feel of a web site
  should be evident without using any class in the markup. Mendeleev defines
  some specific style, but this is very configurable.
* Sizing, colors, spaces, transparencies, etc should all be selected from in a discrete
  set of values. There is no point in fiddling around if some margin should
  be of 18px or 19px wide or to make a design a pixel-perfect copy of a Sketch
  file. We restrict options to make developers concentrate in decisions that
  really matter.
* That said, numeric values should be laid out in a progression/scale with good
  mathematical properties. That is why sizings are powers of two, grids have lots
  of divisors (e.g., the 12-grid and the 15-grid) and font sizes are in an
  exponential progression.
* Atomic does not mean non-semantic. While `.bg-red` might abstract the concrete
  hex value for red, and is better than `style="background: red"`,
  `.bg-error` might be even better since it makes the intent of why that
  specific color was selected more evident. The standard color pallete in
  Mendeleev is defined by roles (e.g., brand color, warning, action , etc) rather
  then by color names.
* Typography should guide the design. That is why the basic unit of length
  adopted by Mendeleev is the line height of default text (this is often called
  the vertical rhythm of a text). Headings, paragraphs and most elements respect
  this basic unit of vertical spacing and tend to align in a grid of multiples
  of the line height.
* While the vertical rhythm is the basic abstract unit of length, all sizings
  should be specified concretly in percentages or rems (or sometimes in ems). We
  avoid points or pixels most of the time. A pixel is just 1/16 of a rem and in
  those days of mobile phones and high definition screens it rarely correlates
  with actual screen pixel sizes.
* Only IE got it right: `content-box` is the wrong default. Mendeleev resets
  `box-sizing: border-box` to all elements.
* Mendeleev should take care of resets (i.e., we incorporate normalize.css and
  make resets adapt to the user config).


## Other Atomic CSS alternatives

Mendeleev is one of library from a growing ecosystem of atomic CSS libraries.
The choice of class names and overall organization is greatly influcenced by
[Tailwinds](https://tailwindcss.com/). The main difference between the two
libraries is that Tailwinds is based on PostCSS, while Mendeleev uses Sass. The
decision to use one library or the other should be largely dictated by which of
those technologies you prefer. If you are indifferent about the underlying CSS
pre-processor, Tailwinds is probably a safer bet since it is more mature,
better documented and has a much larger community.

[Tachyons](https://tachyons.io) was one of the first atomic CSS libraries, and
until recently was the most popular too. While we took lots of inspiration from
Tachyons, Mendeleev diverges in some crucial points: Tachyons uses very cryptic
class names like `i, f1, ttc, etc`, which are easy to type but hard to follow if
you are not good at memorization. Mendeelev, on the other hand, favors descriptive
names such as `italic, text-1, capitalize, etc`. Tachyons also relies on
advanced CSS features like custom properties and `calc()` instead of using a
pre-processor. This makes it harder to customize and unsuitable for old browsers,
but on the flip side it has a much simpler code base than Mendeleev.

[ACSS](https://acss.io/) is also one of the pioneer Atomic CSS libraries that
took a completely different approach that I really dislike: instead of declaring
a set of utility classes, those are created programatically from specially crafted
class names. ACSS requires tooling to introspect HTML markup and create the
corresponding CSS file. This approach does not work well if markup is not
generated by an HTML template such as using Hyperscript, Elm, or even non-HTML
syntax like Pug/Jade.

There are many other great open source alternatives. If you are interested learning
more about  Atomic CSS, go to this nicely curated list: https://johnpolacek.github.io/the-case-for-atomic-css/.


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/fabiommendes/mendeleev.css/blob/master/.github/contributing.md).


## License

Designed with ♥ by Fábio Macêdo Mendes. Licensed under the [MIT License](LICENSE).
