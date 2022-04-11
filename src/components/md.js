import fsp from 'node:fs/promises';

export const renderMarkdownFile = async (Astro, filename, className = undefined) => {
  const content = await fsp.readFile(filename);
  return Astro.__renderMarkdown(content, {
                mode: 'md',
                $: {
                        scopedClassName: className,
                },
        });
};
