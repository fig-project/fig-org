module.exports = async function(data) {
  const [{ makeIndex }, { render }] =
    await Promise.all([import('./js/templates.js'), import('./js/html.js')])
    
  return render(makeIndex, { ...data, ...this });
};
