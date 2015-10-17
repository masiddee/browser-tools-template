(function() {
  var tools = window["custom-browser-tools-loader"];

  tools.init({
    paths: {
      scripts: '../../dist/',
      // Paths are in context of the host page (not this file). These are probably best
      // as host-relative (e.g., `/browser-tools/popup`), but this allows for more flexibility
      // in demo file structure
      devToolsPanel: 'browser-tools/tools-panel',
      popup: 'browser-tools/popup'
    }
  });

}());
