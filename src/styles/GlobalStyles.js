import { createGlobalStyle } from "styled-components";
import DtMF from "../../public/fonts/DtMF.ttf";
import MuseoSansNormal from "../../public/fonts/MuseoSans_300.otf";
import MuseoSansHeavy from "../../public/fonts/MuseoSans_500.otf";
import MuseoSansBold from "../../public/fonts/MuseoSans_700.otf";
import MuseoSansBoldest from "../../public/fonts/MuseoSans_900.otf";

const GlobalStyles = createGlobalStyle`

// CSS Reset
// prettier-ignore
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// Fonts
@font-face {
    font-family: 'DtMF';
    src: url(${DtMF}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
  font-family: 'Museo';
  src: url(${MuseoSansNormal}) format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
  font-family: 'Museo';
  src: url(${MuseoSansHeavy}) format('opentype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
  font-family: 'Museo';
  src: url(${MuseoSansBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
  font-family: 'Museo';
  src: url(${MuseoSansBoldest}) format('opentype');
    font-weight: 900;
    font-style: normal;
}

// Custom CSS Variables
body {
  background-color: #428fc1;
  color: #fef5d9;
  //red = #ed333c
  //#fdf8e8
  //#191d23
}

// Formatting
body {
  font-family: 'Museo', sans-serif;
  font-weight: 300;
}

// prettier-ignore
input, button, textarea, select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  // TODO add custom color later
}

a, a:visited, a:hover, a:active{
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
