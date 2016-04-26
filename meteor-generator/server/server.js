var Fiber = Npm.require('fibers');

WebApp.connectHandlers.use(function (req, res) {
  Fiber(function () {
    var templates = [
      'index',
      'icon',
      'section',
      'subsection'
    ];
    templates.forEach(function (tmpl) {
      SSR.compileTemplate(tmpl, Assets.getText(tmpl + '.html'));
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!DOCTYPE html>' + SSR.render('index'));
  }).run();
});

