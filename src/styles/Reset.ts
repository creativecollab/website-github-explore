import { createGlobalStyle } from 'styled-components';

import BGithub from '../assets/github-background.svg';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  outline: 0;
  padding:0; margin:0;
}

#root{
  max-width: 60em;
  margin: 0 auto;
  padding-top:40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

}

body, button, input{
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,h1,h2,h3,h4,p,ul[class],ol[class],figure,blockquote,dl,dd {
  margin: 0;
}

/* Set core root defaults */
html {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;

  background-color: #F0f0f5;
  background-image: url(${BGithub});
  background-repeat: no-repeat;
  background-position-x: 70%;
  background-position-y: top;

  -webkit-font-smoothing: antialiased;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class], ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input, button, textarea,select {
  font: inherit;
}

/* Blur images when they have no alt attribute */
img:not([alt]) {
  filter: blur(10px);
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
