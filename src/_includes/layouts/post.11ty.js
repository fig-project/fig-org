module.exports = async function(data) {
  const [{ makePost }, { render }] =
    await Promise.all([import('../../js/templates.js'), import('../../js/html.js')])
  
  return render(makePost, { ...data, ...this });
};
