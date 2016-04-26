var Template = Package['meteorhacks:ssr'].Template;
var Blaze = Package.blaze.Blaze; // implied by `templating`
var HTML = Package.htmljs.HTML; // implied by `blaze`

Template.registerHelper("markdown", new Template('markdown', function () {
  var view = this;
  var content = '';
  if (view.templateContentBlock) {
    content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
  }
  var converter = new Showdown.converter();
  return HTML.Raw(converter.makeHtml(content));
}));
