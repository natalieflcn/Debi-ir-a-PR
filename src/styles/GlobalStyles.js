import { createGlobalStyle } from "styled-components";
import DtMF from "/fonts/DtMF.ttf";
import MuseoSansNormal from "/fonts/MuseoSans_300.otf";
import MuseoSansHeavy from "/fonts/MuseoSans_500.otf";
import MuseoSansBold from "/fonts/MuseoSans_700.otf";
import MuseoSansBoldest from "/fonts/MuseoSans_900.otf";

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
:root {
  --color-blue-0: #b5d2e7;
  --color-blue-100: #7eb0d4;
  --color-blue-200: #428fc1;
  --color-blue-300: #255777;
  --color-blue-400: #0b2434;

  --color-red-0: #ffb8b2;
  --color-red-100: #f97f7a;
  --color-red-200: #ed333c;
  --color-red-300: #6d2317;
  --color-red-400: #41080b;

  --color-yellow-0: #f1dfb5;
  --color-yellow-100: #e7c67a;
  --color-yellow-200:  #dcad2b;
  --color-yellow-300: #886a16;
  --color-yellow-400: #3c2d05;

  --color-green-0: #bbd2b4;
  --color-green-100: #8ab17d;
  --color-green-200: #599046;
  --color-green-300: #345728;
  --color-green-400: #13240d;

  --color-light-0: #fffbf0;
  --color-light-100: #fef5d9;
  --color-light-200:#ebdeca;

  --color-dark-0: #6b6e73;
  --color-dark-100: #404449;
  --color-dark-200: #191d23;

  --border-radius-sm: 3px;
  --border-radius-md: 4px;
  --border-radius-lg: 7px;
}

// Formatting
body {
  font-family: 'Museo', sans-serif;
  font-weight: 300;
  background-color: var(--color-blue-200);
  color: var(--color-light-100);
}

body::before{
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* opacity: 0.9;  */
  background-image: url("public/images/BlueOverlay.png");
} 
// prettier-ignore
input, button, textarea, select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
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

// Animations
@keyframes glow {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes glowEven {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
`;

export default GlobalStyles;
