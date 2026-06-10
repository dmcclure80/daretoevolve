(function () {
  const current = location.pathname.split("/").pop() || "index.html";

  function isActive(item) {
    return item.href.split("#")[0] === current;
  }

  const bootstrapPlaceholder = document.getElementById("nav-placeholder");
  if (bootstrapPlaceholder) {
    const items = SITE_MENU.map(function (item) {
      const active = isActive(item);
      return '<li class="nav-item' + (active ? " active" : "") + '">' +
        '<a class="nav-link js-scroll-trigger" href="' + item.href + '">' + item.label +
        (active ? '<span class="sr-only">(current)</span>' : "") +
        '</a></li>';
    }).join("");

    const navHTML =
      '<nav class="navbar navbar-expand-md bg-dark navbar-dark menu fixed-top" id="mainNav">' +
        '<a class="navbar-brand js-scroll-trigger" color="#808088" href="#">DTE</a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" ' +
          'aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">' +
          '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarTogglerDemo02">' +
          '<ul class="navbar-nav ml-auto mt-2 mt-lg-0">' +
            items +
          '</ul>' +
        '</div>' +
      '</nav>';

    bootstrapPlaceholder.outerHTML = navHTML;
  }

  const simplePlaceholder = document.getElementById("simple-nav-placeholder");
  if (simplePlaceholder) {
    const links = SITE_MENU.map(function (item) {
      const active = isActive(item);
      return '<a href="' + item.href + '"' + (active ? ' class="active"' : '') + '>' + item.label + '</a>';
    }).join("");

    const navHTML =
      '<style>' +
        '.simple-nav { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; ' +
          'gap: 1rem; padding: 1rem 1.5rem; background: var(--deep-teal, #103a47); ' +
          'border-bottom: 1px solid var(--border, #1c4e59); font-family: var(--font-main, "Helvetica Neue", Helvetica, Arial, sans-serif); }' +
        '.simple-nav-brand { color: var(--accent, #59c3d8); font-weight: bold; text-decoration: none; font-size: 1.2rem; }' +
        '.simple-nav-links { display: flex; flex-wrap: wrap; gap: 1.2rem; }' +
        '.simple-nav-links a { color: var(--cream, #f3ede1); text-decoration: none; font-size: 0.95rem; }' +
        '.simple-nav-links a:hover, .simple-nav-links a.active { color: var(--accent, #59c3d8); }' +
      '</style>' +
      '<nav class="simple-nav">' +
        '<a class="simple-nav-brand" href="index.html#home">DTE</a>' +
        '<div class="simple-nav-links">' + links + '</div>' +
      '</nav>';

    simplePlaceholder.outerHTML = navHTML;
  }
})();
