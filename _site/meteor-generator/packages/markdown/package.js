// Source: https://github.com/coreyti/showdown

Package.describe({
  summary: "Markdown-to-HTML processor",
  version: "1.0.4"
});

Package.onUse(function (api) {
  api.addFiles("showdown.js");
  api.export('Showdown');

  api.use(['meteorhacks:ssr', 'blaze', 'htmljs']);
  api.addFiles('template-integration.js');
});
