exports.render = (maker, data) => {
  const isTemplate = new WeakMap();
  const html = (strings, ...values) => {
    const handle = {};
    isTemplate.set(handle, [strings, ...values]);
    return handle;
  };

  html.raw = (strings, ...values) => {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
      const prior = strings[i];
      result.push(prior);
      const context = prior[prior.length - 1];
      const surround = expanded =>
        context === '=' ? `"${expanded}"` : expanded;
      if (i < values.length) {
        result.push(surround(expand(values[i], false)));
      }
    }
    return html([result.join('')]);
  };

  const expand = (value, quote = true) => {
    if (!isTemplate.has(value)) {
      if (!value || value === true) {
        value = '';
      } else {
        value = `${value}`;
      }
      // Escape HTML.
      if (quote) {
        return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      }
      return value;
    }

    const [strings, ...values] = isTemplate.get(value);
    const result = [];
    for (let i = 0; i < strings.length; i++) {
      const prior = strings[i];
      result.push(prior);
      const context = prior[prior.length - 1];
      const surround = expanded =>
        context === '=' ? `"${expanded}"` : expanded;
      if (i < values.length) {
        result.push(surround(expand(values[i], quote)));
      }
    }
    return result.join('');
  };

  return expand(maker(html, data));
};
