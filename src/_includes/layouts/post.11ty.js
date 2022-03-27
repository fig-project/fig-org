module.exports = async function(data) {
  const [{ makePost }, { render }] =
    await Promise.all([import('../../all.html.mjs'), import('../../html.mjs')])
  
  return render(makePost, { ...data, ...this });
};
