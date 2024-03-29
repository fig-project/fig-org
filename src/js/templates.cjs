const { DateTime } = require('luxon');

const friendlyDate = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd HH:mm');
};

const makeBase = (html, data) => html`\
<?xml version="1.0"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>FiG.org :: ${
      data.page.url === '/' ?
        'Spiritual reductionism since 1998' :
        data.title
    }</title>
<meta name="google-site-verification" content="AmAmTNGpuiVP_vI0YqolsfHGYTe6Crrj6-r9GoS2uf8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="alternate" type="application/rss+xml" title="FiG.org RSS" href="/hg.cgi?rss-log" />

<link rel="shortcut icon" href="/images/fig.ico" type="image/x-icon" />
    <style type="text/css" media="all">@import "/css/garland.css";</style>
        <style type="text/css" media="print">@import "/css/print.css";</style>
    <!--[if lt IE 7]>
    <style type="text/css" media="all">@import "/css/fix-ie.css";</style>
    <![endif]-->
  </head>
  <body class="sidebars">

<!-- Layout -->
  <div id="header-region" class="clear-block"></div>

    <div id="wrapper">
    <div id="container" class="clear-block">

      <div id="header">
        <div id="logo-floater">
        <h1><a href="/" title="FiG.org"><img src="/images/fig.png" alt="FiG.org" id="logo" /><span>FiG.org</span></a></h1>        </div>

      </div> <!-- /header -->

              <div id="sidebar-left" class="sidebar">
                    <div id="block-user-1" class="clear-block block block-user">

  <h2>Navigation</h2>

  <div class="content">
<ul class="menu">
<li class="expanded">About FIG
<ul class="menu">
  <li class="leaf"><a href="/philosophy.html">Philosophy</a></li>
  <li class="leaf"><a href="/project.html">FIG Project</a></li>
  <li class="leaf"><a href="/figstory.html">FIGstory</a></li>
</ul>
</li>
  <li class="leaf"><a href="/people.html">People</a></li>
<li class="collapsed"><a href="/software.html">Software</a></li>
</ul>

</div>
</div>

        </div>
      
      <div id="center"><div id="squeeze"><div class="right-corner"><div class="left-corner">
                    <div id="mission">Promoting freedom and diversity
                    through pragmatic idealism.</div>

${html.raw`${data.content}`}

<table>
<tr><td>Copyright &copy; 2007&nbsp;&nbsp;<a href="/project.html">The
FiG Project</a> <a href="mailto:project@fig.org">&lt;project@fig.org&gt;</a></td> <td><a rel="license" href="https://creativecommons.org/licenses/by/2.5/ca/">
<img alt="Creative Commons License" width="88" height="31" src="https://i.creativecommons.org/l/by/2.5/ca/88x31.png" />
</a></td></tr>
<tr><td colspan="2">This work is licensed under a 
<a rel="license"
    href="https://creativecommons.org/licenses/by/2.5/ca/">Creative
    Commons Attribution 2.5 Canada License</a>.</td></tr>
    <tr><td></td><td><a href="https://validator.w3.org/check?uri=referer"><img src="https://www.w3.org/Icons/valid-xhtml10-blue"
        width="88" height="31" alt="Valid XHTML 1.0 Strict"
        /></a></td></tr>
</table>

</div></div></div></div> <!-- /.left-corner, /.right-corner, /#squeeze, /#center -->

    </div> <!-- /container -->
<!-- /layout23 -->
    </div>
  </body>
</html>
`;

const makePost = (html, data) => {
  const content = html`
<h2>${html.raw`${data.title}`}</h2>

<div class="node">
  ${data.author && html`\
  <span class="submitted">${friendlyDate(data.date)} &#151; ${data.author}</span>`}
  
  <div class="content">
    ${html`${data.content}`}
  </div>
  
  <div class="clear-block clear">
    <div class="meta"></div>
    ${data.readMoreUrl && html`
    <div class="links">
      <ul class="links inline">
        <li class="first last node_read_more"><a
        href=${data.readMoreUrl} class="node_read_more">Read more...</a></li>
      </ul>
    </div>`}
  </div>
</div>
`;
  return makeBase(html, { ...data, content });
};


const makeIndex = (html, data) => {
  const obj = {
    teaser: data.collections.home[0].data.teaser,
    url: data.collections.home[0].url,
  };
  obj.readMoreUrl = obj.url;
  obj.title = html`<a href=${obj.url}>${data.collections.home[0].data.title}</a>`;

  const content = html`
<script type="text/javascript">
  // Redirect admin logins.
  if (location.hash.includes('confirmation_token=')) {
    location.pathname = '/admin/';
  }
</script>

${html.raw(obj.teaser)}
`;

  return makePost(html, { ...data, ...obj, content });
};

exports.makeIndex = makeIndex;
exports.makeBase = makeBase;
exports.makePost = makePost;
exports.friendlyDate = friendlyDate;
