const white = '#FFFFFF';
const black = '#1C2336';
const darkPurple = '#191419';
const gray = '#E6E9ED';
const link = '#3D4266';
const darkLink = '#46BFBF';

const themeLight = {
  background: gray,
  secondBackground: white,
  text: black,
  link: link,
};

const themeDark = {
  background: black,
  secondBackground: darkPurple,
  text: white,
  link: darkLink,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
