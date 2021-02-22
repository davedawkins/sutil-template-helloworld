import { mountElement, text, Html_div } from "./.fable/Sutil.0.1.1-alpha/DOM.fs.js";
import { CssEngine_CssEngine$1__fontSize_4E60E31B, CssEngine_CssEngine$1__marginTop_4E60E31B, CssEngine_CssEngine$1__textAlign_4E60E31B, Css, CssEngine_CssEngine$1__fontFamily_4E60E31B, style } from "./.fable/Sutil.0.1.1-alpha/Attr.fs.js";

export function view() {
    return Html_div([style([CssEngine_CssEngine$1__fontFamily_4E60E31B(Css, "Arial, Helvetica,sans-serif"), CssEngine_CssEngine$1__textAlign_4E60E31B(Css, "center"), CssEngine_CssEngine$1__marginTop_4E60E31B(Css, "40px"), CssEngine_CssEngine$1__fontSize_4E60E31B(Css, "10ex")]), text("Hello World")]);
}

mountElement("sutil-app", view());

