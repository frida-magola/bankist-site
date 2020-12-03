// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
"use strict"; // Selecting elements

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var btnCloseModal = document.querySelector(".btn--close-modal");
var btnsOpenModal = document.querySelectorAll(".btn--show-modal");
var btnScrollTo = document.querySelector(".btn--scroll-to");
var section1 = document.querySelector("#section--1");
var links = document.querySelectorAll(".nav__link");
var tabsContainer = document.querySelector(".operations__tab-container");
var tabs = document.querySelectorAll(".operations__tab");
var tabsContent = document.querySelectorAll(".operations__content");
var nav = document.querySelector(".nav");
var header = document.querySelector(".header");
var footer = document.querySelector(".footer");
var allSections = document.querySelectorAll(".section");
var slides = document.querySelectorAll(".slide");
var sliderContainer = document.querySelector(".slider");
var btnLeft = document.querySelector(".slider__btn--left");
var btnRight = document.querySelector(".slider__btn--right");
var dotsContainer = document.querySelector(".dots"); ///////////////////////////////////////
// Modal window

var openModal = function openModal(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

var closeModal = function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (btn) {
  return btn.addEventListener("click", openModal);
});
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  // concerning the model
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
}); ///////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener("click", function (e) {
  var coords1 = section1.getBoundingClientRect();
  console.log(coords1);
  console.log(e.target.getBoundingClientRect());
  console.log("Current scroll (X/Y): ".concat(window.pageXOffset, ", ").concat(window.pageYOffset));
  console.log("Height/Width Viewport: ".concat(document.documentElement.clientHeight, ", ").concat(document.documentElement.clientWidth)); // scrolling
  // window.scrollTo(
  //   coords1.left + window.pageXOffset,
  //   coords1.top + window.pageYOffset
  // );
  // scrolling with smooth behavior old way of scrolling
  // window.scrollTo({
  //   left: coords1.left + window.pageXOffset,
  //   top: coords1.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  // Modern Way of scrolling

  section1.scrollIntoView({
    behavior: "smooth"
  });
}); ///////////////////////////////////////

/*
 Page Navigation
 with Events delegation by using the power of Bubbling and capturing phase
*/
// links.forEach(function (el) {
//   // el.addEventListener("click", function (e) {
//   //   e.preventDefault();
//   //   // const id = this.href; // entire url
//   //   const id = this.getAttribute("href");
//   //   console.log(id);
//   //   document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   // });
// });
// 1 Add event listener to common parent element

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault(); // console.log(e.target);
  // Matching strategy

  if (e.target.classList.contains("nav__link")) {
    var id = e.target.getAttribute("href"); // console.log(id);

    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }
}); ///////////////////////////////////////
//tabbed components

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  var clicked = e.target.closest(".operations__tab"); // console.log(clicked);
  // Guard clause

  if (!clicked) return; // Active tabs
  // Remove active active in all of them

  tabs.forEach(function (t) {
    return t.classList.remove("operations__tab--active");
  }); // Add active class

  clicked.classList.add("operations__tab--active"); // Activate content area

  tabsContent.forEach(function (tc) {
    return tc.classList.remove("operations__content--active");
  });
  document.querySelector(".operations__content--".concat(clicked.dataset.tab)).classList.add("operations__content--active");
}); ///////////////////////////////////////
// Menu fade animation

var eventHandler = function eventHandler(e) {
  var _this = this;

  if (e.target.classList.contains("nav__link")) {
    var link = e.target; // select the sibblings

    var sibblings = link.closest(".nav").querySelectorAll(".nav__link");
    var logo = link.closest(".nav").querySelector("img");
    sibblings.forEach(function (el) {
      if (el !== link) el.style.opacity = _this;
    });
    logo.style.opacity = this;
  }
}; // Passing "arguments" to events handler using bind method


nav.addEventListener("mouseover", eventHandler.bind(0.5));
nav.addEventListener("mouseout", eventHandler.bind(1)); ///////////////////////////////////////
// 1. Sticky Navigation using scroll event is bad for performance in the old smartphone
// window.addEventListener("scroll", function () {
//   // sticky nav start from the section 1 in HTML document
//   const initialsCoords = section1.getBoundingClientRect();
//   // console.log(initialsCoords);
//   if (window.scrollY > initialsCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
// 2. Sticky Navigation using the Intersection Observer API
// const obsCallBack = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

var navHeight = nav.getBoundingClientRect().height; // console.log(navHeight);

var stickyNav = function stickyNav(entries) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (!entry.isIntersecting) nav.classList.add("sticky");else nav.classList.remove("sticky");
};

var headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-".concat(navHeight, "px")
});
headerObserver.observe(header); ///////////////////////////////////////
// Reveal Sections on scrolling

var revealSections = function revealSections(entries, observer) {
  var _entries2 = _slicedToArray(entries, 1),
      entry = _entries2[0]; // console.log(entry);


  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

var sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15
});
allSections.forEach(function (section) {
  sectionObserver.observe(section); // section.classList.add("section--hidden");
}); ///////////////////////////////////////
//Lazy Loading images

var imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

var loadImg = function loadImg(entries, observer) {
  var _entries3 = _slicedToArray(entries, 1),
      entry = _entries3[0];

  if (!entry.isIntersecting) return; // Replace src with data-src

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

var imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px"
});
imgTargets.forEach(function (img) {
  imgObserver.observe(img);
}); ///////////////////////////////////////
// Slider
// slider.style.transform = "scale(0.4) translateX(-1000px)";
// slider.style.overflow = "visible";

var slider = function slider() {
  var curSlide = 0;
  var maxSlide = slides.length; // create and insert dots in each slide

  var createDots = function createDots() {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML("beforeend", "<button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>"));
    });
  }; // Activate Dot


  var activateDot = function activateDot(slide) {
    // select all the dots and remove in all of them the active class
    document.querySelectorAll(".dots__dot").forEach(function (dot) {
      return dot.classList.remove("dots__dot--active");
    }); // Add active class to the current dot based on the data-slide attribute

    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"]")).classList.add("dots__dot--active");
  };

  var goToSlide = function goToSlide(CurSlide) {
    slides.forEach(function (s, i) {
      s.style.transform = "translate(".concat(100 * (i - CurSlide), "%)");
    });
  }; // Next Slide


  var nextSlide = function nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }; // Previous Slide


  var prevSlide = function prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1; // maxSlide is Zero base so then we add moins 1
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }; /////////////////////////////////////////
  // Initialisation function for the slider


  var init = function init() {
    goToSlide(0); // make the first slide active at 0%

    createDots(); // create dots buttons

    activateDot(0); // make the first dot active
  };

  init(); /////////////////////////////////////////
  //Events Handlers
  // curSlide = 1: -100%, 0%, 100%, 200%, 300%

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide); // Add event listener to each dot

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      // console.log(e.target);
      // detructuring the slide
      var slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  }); ///////////////////////////////////////
  // Events attach to the document

  document.addEventListener("keydown", function (e) {
    // slider
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};

slider(); ///////////////////////////////////////

/*
  Traversing the DOM 
 */
// 1. Going Downwards : child
// const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children); //used direct children
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";
// // 2. Going upwards : Parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// // 3. Going sideways : sibblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

/**
 * EVENTS
 */
// 1.Events
// const alertFunc = function (e) {
//   alert("Hello from h1 mouse enter!");
// remove listener
// h1.removeEventListener("mouseenter", alertFunc);
// };
// h1.addEventListener("mouseenter", alertFunc);
// remove listener
// setTimeout(() => {
//   h1.removeEventListener("mouseenter", alertFunc);
// }, 3000);
// Create an element

var message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>"; // Insert element
//header.prepend(message); // insert message at the beginning of header content
//header.append(message);
//header.before(message); // insert before header container sibblings

footer.after(message); // Delete element from the DOM

document.querySelector(".btn--close-cookie").addEventListener("click", function (e) {
  // message.remove();
  message.parentElement.removeChild(message);
}); // Styles elements
// message.style.backgroundColor = "#37383d";

message.style.backgroundColor = " rgba(255, 255, 255, 0.95)";
message.style.color = "#37383d"; // cumputedStyle, modifting the height

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px"; // set custom color variable in root
// document.documentElement.style.setProperty("--color-primary", "orangered");
// Lifecycle DOM Events
// 1. make the page ready for users
// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log(e);
//   console.log("The HTML parsed and DOM tree built!");
// });
// load events
// window.addEventListener("load", function (e) {
//   console.log(e);
//   console.log("Load external files, images");
// });
// Ask the user before leaving the page
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });
},{}],"../../../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64920" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map