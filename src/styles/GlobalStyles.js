import { createGlobalStyle } from "styled-components";
import "./variables.css";
import "./animations.css";
import "./typography.css";

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

// My Global Styles
body {
  font-family:  sans-serif, Helvetica;
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
  opacity: 0.9; 
  background-image: url('src/assets/images/ui/BlueOverlay.png');
} 

.yt-lite {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export default GlobalStyles;
