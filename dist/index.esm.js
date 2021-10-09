import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ":root {\n    --swe-color-primary: #000046;\n    --swe-color-danger: #dc3545;\n    --swe-color-light: #fff;\n    --navbar-height: 8vh;\n    --minx-navbar-height: 60px;\n    --max-navbar-height: 80px;\n}\n\n\n/* to all devices  */\n\n.swe-container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n@media (min-width: 768px) {\n    .swe-container {\n        width: 750px;\n    }\n}\n\n@media (min-width: 992px) {\n    .swe-container {\n        width: 970px;\n    }\n}\n\n@media (min-width: 1200px) {\n    .swe-container {\n        width: 1170px;\n    }\n}\n\n\n/* to mobiles devices  */\n\n@media (max-width: 767.9px) {\n    .swe-navbar {\n        display: none;\n    }\n    .swe-hamburger-menu-bar-wrap {\n        width: 100%;\n        height: var(--navbar-height);\n        min-height: var(--min-navbar-height);\n        max-height: var(--max-navbar-height);\n        background-color: var(--bs-primary, var(--swe-color-primary));\n        margin: 0;\n        padding: 0;\n    }\n    .swe-hamburger-menu-logo-container {\n        content: \"\";\n        width: 30%;\n        height: calc(100% - 10px);\n        margin-top: 5px;\n        text-align: left;\n    }\n    .swe-hamburger-menu-logo-container img {\n        border-radius: 5px;\n        width: auto;\n        max-width: 100%;\n        max-height: 100%;\n    }\n    .swe-hamburger-menu-icon-container {\n        width: 70%;\n        text-align: right;\n    }\n    .swe-hamburger-menu-body {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        min-height: 100vh;\n        background-color: transparent;\n        z-index: 999;\n    }\n    .swe-hamburger-menu-body-content {\n        background-color: var(--bs-primary, var(--swe-color-primary));\n        box-shadow: 0px 0px 10px 5px var(--bs-primary, var(--swe-color-primary));\n        height: 100%;\n    }\n    .swe-hamburger-menu-links {\n        text-align: center;\n        padding: 30px 10px;\n    }\n    .swe-hamburger-menu-link-box {\n        background-color: var(--bs-danger);\n        border-radius: 20px;\n        overflow: hidden;\n        padding: 20px 0px;\n        margin-top: 15px;\n        border: solid 2px var(--bs-light, var(--swe-color-light));\n    }\n    .swe-hamburger-menu-link-box a {\n        color: var(--bs-light, var(--swe-color-light));\n        font-weight: 700;\n        text-decoration: none;\n    }\n    .swe-hamburger-menu-link-box-white {\n        background-color: var(--bs-light, var(--swe-color-light));\n        border-radius: 20px;\n        overflow: hidden;\n        padding: 20px 0px;\n        margin-top: 15px;\n    }\n    .swe-hamburger-menu-link-box-white a {\n        color: var(--bs-danger);\n        font-weight: 700;\n        text-decoration: none;\n    }\n}";
styleInject(css_248z$1);

var css_248z = "@media (min-width: 768px) {\n     :root {\n        --navbar-height: 8vh;\n        --min-navbar-height: 60px;\n        --max-navbar-height: 80px !important;\n    }\n    .swe-hamburger-menu-body,\n    .swe-hamburger-menu-bar-wrap {\n        display: none;\n    }\n    .swe-navbar {\n        content: '';\n        max-width: 100%;\n        max-height: var(--max-navbar-height);\n        height: var(--navbar-height);\n        min-height: var(--min-navbar-height);\n        background-color: var(--bs-primary, var(--swe-color-primary));\n        margin: 0;\n        display: flex;\n    }\n    .swe-navbar-over {\n        background-color: transparent;\n    }\n    .swe-navbar-logo-container {\n        width: 18%;\n        background-color: transparent;\n        height: calc(100% - 30px);\n        margin-top: 15px;\n        text-align: left;\n    }\n    .swe-navbar-logo-container img {\n        max-width: 100%;\n        max-height: 100%;\n        border-radius: 5px;\n    }\n    .swe-navbar-wrap {\n        height: 100%;\n        width: 82%;\n        margin: 0px;\n        margin-top: auto;\n        margin-bottom: auto;\n        display: flex;\n        flex-direction: row-reverse;\n    }\n    .swe-navbar-wrap-link-box {\n        display: flex;\n    }\n    .swe-navbar-wrap a {\n        color: var(--bs-light, var(--swe-color-light));\n        font-weight: 700;\n        padding: 10px 25px;\n        text-decoration: none;\n        margin: auto;\n    }\n    .swe-navbar-wrap a:hover {\n        color: var(--bs-danger, var(--swe-color-danger));\n    }\n    .swe-navbar-link-bg {\n        background-color: var(--bs-light, var(--swe-color-light));\n        transition: all 0.5s ease-in-out;\n    }\n    .swe-navbar-link-bg:hover {\n        background-color: var(--bs-danger, var(--swe-color-danger));\n        transition: all 0.5s ease-in-out;\n    }\n    .swe-navbar-wrap .swe-navbar-link-bg {\n        color: var(--bs-primary, var(--swe-color-primary));\n        font-weight: 700;\n        padding: 10px 25px;\n        text-decoration: none;\n        border-radius: 10px;\n    }\n    .swe-navbar-wrap .swe-navbar-link-bg:hover {\n        color: var(--bs-light, var(--swe-color-light));\n        font-weight: 700;\n        padding: 10px 25px;\n        text-decoration: none;\n        border-radius: 10px;\n    }\n}";
styleInject(css_248z);

function Menu({
  logo,
  logoHref,
  links
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "swe-navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "swe-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "swe-navbar-logo-container "
  }, /*#__PURE__*/React.createElement("a", {
    href: logoHref || '/#'
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "tbc"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
    className: "swe-navbar-wrap"
  }, links.map(item => item).reverse().map((link, i) => {
    return /*#__PURE__*/React.createElement("div", {
      key: `navbar-link-${i}`,
      className: "swe-navbar-wrap-link-box"
    }, /*#__PURE__*/React.createElement("a", {
      className: link.background ? 'swe-navbar-link-bg' : '',
      href: link.href
    }, link.label, " "));
  })))));
}

function HamburgerMenu({
  logo,
  logoHref,
  links
}) {
  const [state, setState] = useState({
    menuClosed: true
  });

  function toggleMenu(value) {
    setState({ ...state,
      menuClosed: !state.menuClosed
    });
  }

  const MenuIcon = () => {
    return /*#__PURE__*/React.createElement("svg", {
      onClick: () => {
        toggleMenu();
      },
      fill: "#fff",
      viewBox: "0 0 100 100",
      width: "40",
      height: "100%"
    }, /*#__PURE__*/React.createElement("rect", {
      y: "calc(50% - 40px)",
      width: "100",
      height: "10px"
    }), /*#__PURE__*/React.createElement("rect", {
      y: "calc(50% - 10px)",
      width: "100",
      height: "10px"
    }), /*#__PURE__*/React.createElement("rect", {
      y: "calc(50% + 20px)",
      width: "100",
      height: "10px"
    }));
  };

  const CloseIcon = () => {
    return /*#__PURE__*/React.createElement("svg", {
      onClick: () => {
        toggleMenu();
      },
      width: "30",
      height: "30",
      viewBox: "0 0 30 30",
      overflow: "visible",
      stroke: "#fff",
      "stroke-width": "4",
      "stroke-linecap": "round"
    }, /*#__PURE__*/React.createElement("line", {
      y: "10",
      x2: "30",
      y2: "30"
    }), /*#__PURE__*/React.createElement("line", {
      y: "10",
      x1: "30",
      y2: "30"
    }));
  };

  const ClosedBar = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-bar-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "swe-container",
      style: {
        display: "flex",
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-logo-container"
    }, /*#__PURE__*/React.createElement("a", {
      href: logoHref || '/#'
    }, logo ? /*#__PURE__*/React.createElement("img", {
      src: logo,
      alt: "tbc"
    }) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-icon-container"
    }, /*#__PURE__*/React.createElement(MenuIcon, null))));
  };

  const MenuBody = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-body-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "swe-container"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "15px",
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-logo-container"
    }, /*#__PURE__*/React.createElement("a", {
      href: logoHref || '/#'
    }, logo ? /*#__PURE__*/React.createElement("img", {
      src: logo,
      alt: "tbc"
    }) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-icon-container"
    }, /*#__PURE__*/React.createElement(CloseIcon, null)))), /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "swe-hamburger-menu-links"
    }, links.map((link, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: `swe-hamburger-menu-link-${i}`,
        className: link.background ? 'swe-hamburger-menu-link-box-white' : 'swe-hamburger-menu-link-box'
      }, /*#__PURE__*/React.createElement("a", {
        href: link.href,
        target: link.target
      }, "  ", link.label));
    })))));
  };

  return state.menuClosed ? /*#__PURE__*/React.createElement(ClosedBar, null) : /*#__PURE__*/React.createElement(MenuBody, null);
}

function NavBar(_ref) {
  var logo = _ref.logo,
      logoHref = _ref.logoHref,
      links = _ref.links;
  var _props = {
    logo: logo || '',
    logoHref: logoHref || '/#',
    links: links || []
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Menu, _props), /*#__PURE__*/React.createElement(HamburgerMenu, _props));
}

export { NavBar as default };
