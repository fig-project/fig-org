import viperHTML from 'viperhtml';

export const render = (maker, ...args) => {
  const html = viperHTML.wire();
  html.raw = htmlContent => [htmlContent];
  return maker(html, ...args).toString();
};
