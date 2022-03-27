module.exports = async function(data) {
  const [{ makePost }, { render }] =
    await Promise.all([import('../../templates.mjs'), import('../../html.mjs')])
  
  return render(makePost, { ...data, ...this });
};
