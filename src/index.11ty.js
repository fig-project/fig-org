module.exports = async function(data) {
  const [{ makeIndex }, { render }] =
    await Promise.all([import('./templates.mjs'), import('./html.mjs')])
    
  return render(makeIndex, { ...data, ...this });
};
