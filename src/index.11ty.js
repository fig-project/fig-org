module.exports = async function(data) {
  const [{ makeIndex }, { render }] =
    await Promise.all([import('./all.html.mjs'), import('./html.mjs')])
    
  return render(makeIndex, { ...data, ...this });
};
