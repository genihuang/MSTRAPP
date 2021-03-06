function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./login/login.module": ["./src/app/login/login.module.ts", "default~login-login-module~main-main-module", "login-login-module"],
      "./main/main.module": ["./src/app/main/main.module.ts", "default~login-login-module~main-main-module", "main-main-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<app-loading *ngIf=\"showLoading\"></app-loading>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading/loading.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading/loading.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"backdrop\">\n    <div id=\"loading\" #loading></div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/modal.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/modal.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"modal-header\" *ngIf=\"options.headText\">\n  <span class=\"modal-title\">{{options.headText}}</span>\n</div>\n<div class=\"modal-body\" [ngSwitch]=\"options?.type\">\n  <ng-container *ngSwitchCase=\"ModalType.Doc\">\n    <iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" [src]=\"urlSafe\" allowfullscreen></iframe>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <div class=\"modal__img\" *ngIf=\"options.imgContent\">\n      <img src=\"data:image/png;base64,{{options.imgContent}}\" width=\"100%\" height=\"100%\" />\n    </div>\n    <div class=\"modal__warning\" *ngIf=\"options.showWarning\">\n      <img src=\"assets/ico/ico_high_priority@1.5x.svg\" />\n    </div>\n    <div class=\"modal__content\" *ngIf=\"options.txtContent\">\n      {{options.txtContent}}\n    </div>\n  </ng-container>\n</div>\n<div class=\"modal-footer\" [ngSwitch]=\"options?.type\">\n  <ng-container *ngSwitchCase=\"ModalType.CancelDelete\">\n    <div class=\"row\">\n    <button class=\"btn btn-light col-sm\" (click)=\"activeModal.close('BACK')\" i18n=\"@@cancel\">??????</button>\n    <button class=\"btn btn-light red col-sm\" (click)=\"activeModal.close('NEXT')\" i18n=\"@@delete\">??????</button>\n  </div>\n  </ng-container>\n<ng-container *ngSwitchCase=\"ModalType.Confirm\">\n  <div class=\"row\">\n  <button class=\"btn btn-light col-sm\" (click)=\"closeModal('NEXT')\" i18n=\"@@apply\">??????</button>\n</div>\n</ng-container>\n<ng-container *ngSwitchCase=\"ModalType.ModifyPwd\">\n  <div class=\"row\">\n  <button class=\"btn btn-light col-sm\" (click)=\"closeModal('BACK')\" i18n=\"@@apply\">????????????</button>\n  <button class=\"btn btn-light col-sm\" (click)=\"closeModal('NEXT')\" i18n=\"@@apply\">????????????</button>\n</div>\n</ng-container>\n<ng-container *ngSwitchCase=\"ModalType.Doc\">\n  <div class=\"row\">\n  <button class=\"btn btn-light col-sm\" (click)=\"closeModal('NEXT')\" i18n=\"@@apply\">??????</button>\n</div>\n</ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-path.const.ts":
  /*!***********************************!*\
    !*** ./src/app/app-path.const.ts ***!
    \***********************************/

  /*! exports provided: appPath */

  /***/
  function srcAppAppPathConstTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appPath", function () {
      return appPath;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var appPath = {
      login: '',
      main: 'main'
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_path_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-path.const */
    "./src/app/app-path.const.ts"); //constant


    var routes = [{
      path: _app_path_const__WEBPACK_IMPORTED_MODULE_3__["appPath"].login,
      loadChildren: './login/login.module#LoginModule'
    }, {
      path: _app_path_const__WEBPACK_IMPORTED_MODULE_3__["appPath"].main,
      loadChildren: './main/main.module#MainModule'
    }, {
      path: '',
      redirectTo: _app_path_const__WEBPACK_IMPORTED_MODULE_3__["appPath"].login,
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: _app_path_const__WEBPACK_IMPORTED_MODULE_3__["appPath"].login,
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_path_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-path.const */
    "./src/app/app-path.const.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _class_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./class/modal */
    "./src/app/class/modal.ts");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/modal/modal.component */
    "./src/app/shared/modal/modal.component.ts");
    /* harmony import */


    var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/modal/modal.service */
    "./src/app/shared/modal/modal.service.ts");
    /* harmony import */


    var _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, loadingService, modalService, ngbModalService, cdRef) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.loadingService = loadingService;
        this.modalService = modalService;
        this.ngbModalService = ngbModalService;
        this.cdRef = cdRef;
        this.title = '???????????????';
        this.path = _app_path_const__WEBPACK_IMPORTED_MODULE_4__["appPath"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.idleTime = 0;
        this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.setTimeout("init");
        this.userInactive.subscribe(function () {
          console.log("time out"); // this.logout();

          _this.showMsg();
        });
      }

      _createClass(AppComponent, [{
        key: "onMouseMove",
        value: function onMouseMove() {
          clearTimeout(this.userActivity);
          this.setTimeout("mouse move");
        }
      }, {
        key: "keyDown",
        value: function keyDown() {
          clearTimeout(this.userActivity);
          this.setTimeout("keydown");
        }
      }, {
        key: "click",
        value: function click() {
          clearTimeout(this.userActivity);
          this.setTimeout("mouseenter");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.router.url);
          this.handleLoadingViewChange(); // this.setIntrvl();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.complete();
        }
      }, {
        key: "handleLoadingViewChange",
        value: function handleLoadingViewChange() {
          var _this2 = this;

          this.loadingService.getLoadingStatus().subscribe(function (value) {
            _this2.showLoading = value;

            _this2.cdRef.detectChanges();
          });
        }
      }, {
        key: "setTimeout",
        value: function (_setTimeout) {
          function setTimeout(_x) {
            return _setTimeout.apply(this, arguments);
          }

          setTimeout.toString = function () {
            return _setTimeout.toString();
          };

          return setTimeout;
        }(function (event) {
          var _this3 = this;

          var page = this.router.url;

          if (page == '/login' || page == '/') {// clearTimeout(this.userActivity);
          } else {
            this.userActivity = setTimeout(function () {
              return _this3.userInactive.next(undefined);
            }, 1800000);
          } // console.log(event);
          // this.userActivity = setTimeout(() => this.userInactive.next(undefined), 60000);

        })
      }, {
        key: "checkTokenValid",
        value: function checkTokenValid() {
          var _this4 = this;

          try {
            // setInterval(() => this.startGame2()
            // ,1000);
            setInterval(function () {
              var page = _this4.router.url;
              _this4.idleTime++;

              if (page == '/login' || page == '/') {
                console.log("login");
                _this4.idleTime = 0;
              } else {
                console.log(page);

                if (_this4.idleTime >= 10) {
                  console.log(_this4.idleTime);

                  _this4.logout();
                }
              }
            }, 10000);
          } catch (e) {}
        }
      }, {
        key: "showMsg",
        value: function showMsg() {
          var _this5 = this;

          var msg;
          var modalRtn;
          msg = {
            headText: '????????????',
            txtContent: '?????????????????????????????????',
            type: _class_modal__WEBPACK_IMPORTED_MODULE_6__["ModalType"].Confirm
          };
          modalRtn = this.open(msg);
          modalRtn.result.then(function (result) {
            if (result == 'NEXT') {
              _this5.logout();
            }
          }, function (reason) {
            console.log(reason);
          });
        }
      }, {
        key: "open",
        value: function open(modalOptions) {
          var rtn;
          var modalRef = this.ngbModalService.open(_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], {
            scrollable: true,
            centered: true,
            size: 'sm' // keyboard: false,
            // backdrop: 'static'

          });
          var data = modalOptions;
          modalRef.componentInstance.fromParent = data;
          return modalRef;
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.clear();
          this.router.navigateByUrl('/');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
      }, {
        type: _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mousemove')], AppComponent.prototype, "onMouseMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown')], AppComponent.prototype, "keyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:click')], AppComponent.prototype, "click", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _allianz_ngx_ndbx_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/modal */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-modal.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/api-common/api-common.module */
    "./src/app/service/api-common/api-common.module.ts");
    /* harmony import */


    var _service_app_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./service/app-login.service */
    "./src/app/service/app-login.service.ts");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/modal/modal.component */
    "./src/app/shared/modal/modal.component.ts");
    /* harmony import */


    var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/loading/loading.component */
    "./src/app/shared/loading/loading.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_8__["ApiCommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _allianz_ngx_ndbx_modal__WEBPACK_IMPORTED_MODULE_5__["NxModalModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
      providers: [_service_app_login_service__WEBPACK_IMPORTED_MODULE_9__["AppLoginService"]],
      entryComponents: [_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/class/modal.ts":
  /*!********************************!*\
    !*** ./src/app/class/modal.ts ***!
    \********************************/

  /*! exports provided: ModalType */

  /***/
  function srcAppClassModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalType", function () {
      return ModalType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ModalType;

    (function (ModalType) {
      ModalType[ModalType["CancelDelete"] = 0] = "CancelDelete";
      ModalType[ModalType["Confirm"] = 1] = "Confirm";
      ModalType[ModalType["ModifyPwd"] = 2] = "ModifyPwd";
      ModalType[ModalType["Block"] = 3] = "Block";
      ModalType[ModalType["Doc"] = 4] = "Doc";
    })(ModalType || (ModalType = {}));
    /***/

  },

  /***/
  "./src/app/environment/environment.ts":
  /*!********************************************!*\
    !*** ./src/app/environment/environment.ts ***!
    \********************************************/

  /*! exports provided: envData, apiPath, contentSize, idleTimeout */

  /***/
  function srcAppEnvironmentEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "envData", function () {
      return envData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiPath", function () {
      return apiPath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contentSize", function () {
      return contentSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "idleTimeout", function () {
      return idleTimeout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var envData = {
      env: '14',
      systemId: '80',
      systemCode: 'MSTR',
      version: '1.0.5',
      platform: '1',
      useAcc: '1' //0???????????????1????????????

    };
    var apiPath = [{
      apiID: "appLogin",
      domainKey: "utility",
      path: "MSTR/appLogin" //path:"Common/login"

    }, {
      apiID: "commonLogin",
      domainKey: "utility",
      //path: "MSTR/appLogin",
      path: "Common/login"
    }, {
      apiID: "mstrLogin",
      domainKey: "utility",
      path: "MSTR/mstrLogin"
    }, {
      apiID: "mstrRestApiLogin",
      domainKey: "utility",
      path: "MSTR/RestApi/mstrLogin"
    }, {
      apiID: "mstrRestApiPage",
      domainKey: "MstrPage",
      path: "MSTR/MSTR.aspx"
    }, {
      apiID: "mstrMenu",
      domainKey: "wsaz",
      path: "Main/ProcessReq_V2"
    }, {
      apiID: "versionCheck",
      domainKey: "discover",
      //domainKey:"utility",
      path: "Common/checkVersion"
    }, {
      apiID: "commonVersionCheck",
      //domainKey:"discover",
      domainKey: "utility",
      path: "Common/checkVersion"
    }, {
      apiID: "checkPwdWs",
      domainKey: "w2Util_pp",
      path: "pp.asmx"
    }, {
      apiID: "modifyPwdPage",
      domainKey: "AZPL",
      path: "ModifyPwd/modifyPwd.aspx?Mode=U"
    }, {
      apiID: "forgetPwdPage",
      domainKey: "AZPL",
      path: "ModifyPwd/modifyPwd.aspx?Mode=Q"
    }, {
      apiID: "maintainData",
      domainKey: "w2UtilAPI",
      path: "General/GetMaintainData"
    }, {
      apiID: "tokenData",
      domainKey: "utility",
      path: "Common/getTokenData"
    }];
    var contentSize = 8;
    var idleTimeout = 30;
    /***/
  },

  /***/
  "./src/app/environment/url.ts":
  /*!************************************!*\
    !*** ./src/app/environment/url.ts ***!
    \************************************/

  /*! exports provided: apiDomain_Uat, apiConfig_Uat, apiDomain_PreProd, apiConfig_PreProd, apiDomain_Prod, apiConfig_Prod */

  /***/
  function srcAppEnvironmentUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiDomain_Uat", function () {
      return apiDomain_Uat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiConfig_Uat", function () {
      return apiConfig_Uat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiDomain_PreProd", function () {
      return apiDomain_PreProd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiConfig_PreProd", function () {
      return apiConfig_PreProd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiDomain_Prod", function () {
      return apiDomain_Prod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiConfig_Prod", function () {
      return apiConfig_Prod;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // export const mstrApiDomain:string='http://113.196.86.118/wsUtility/MSTR/getApiUrl';


    var apiDomain_Uat = [{
      apiDomainKey: "utility",
      //apiDomain:"http://t2.allianz.com.tw/wsUtility/"
      apiDomain: "https://esuat.allianz.com.tw/service/wsUtility/"
    }, {
      apiDomainKey: "discover",
      //apiDomain:"http://t2.allianz.com.tw/wsIllustrationIII/"
      apiDomain: "https://esuat.allianz.com.tw/service/wsIllustrationIII/"
    }, {
      apiDomainKey: "wsaz",
      //apiDomain: "https://t5.allianz.com.tw/WSAZ/"
      apiDomain: "https://esuat.allianz.com.tw/service/WSAZ/"
    }, {
      apiDomainKey: "MstrPage",
      //apiDomain: "http://t1.allianz.com.tw/MSTR/"
      apiDomain: "https://esuat.allianz.com.tw/partner/MSTR/"
    }, {
      apiDomainKey: "w2Util_pp",
      //apiDomain:"http://t5.allianz.com.tw/w2Util/"
      apiDomain: "https://esuat.allianz.com.tw/service/w2Util/"
    }, {
      apiDomainKey: "AZPL",
      //apiDomain:"http://t1.allianz.com.tw/eProCommonsite/"
      apiDomain: "https://esuat.allianz.com.tw/partner/eProCommonsite/"
    }, {
      apiDomainKey: "w2UtilAPI",
      //apiDomain:"http://t5.allianz.com.tw/w2UtilAPI/"
      apiDomain: "https://esuat.allianz.com.tw/service/w2UtilAPI/"
    }];
    var apiConfig_Uat = [{
      apiID: "appLogin",
      keyId: "B718A8D8-6E99-4C55-B3F1-A826FBC0EF4F"
    }, {
      apiID: "commonLogin",
      keyId: "B718A8D8-6E99-4C55-B3F1-A826FBC0EF4F"
    }, {
      apiID: "mstrLogin",
      keyId: ""
    }, {
      apiID: "mstrRestApiLogin",
      keyId: ""
    }, {
      apiID: "mstrRestApiPage",
      keyId: ""
    }, {
      apiID: "mstrMenu",
      keyId: "yAARveQNJZMgeutaObybFjaquxgafUbiyHtbhyzD"
    }, {
      apiID: "versionCheck",
      keyId: "2F61976E-4E8D-4DA4-871C-1507FB26D874"
    }, {
      apiID: "commonVersionCheck",
      keyId: "2F61976E-4E8D-4DA4-871C-1507FB26D874"
    }, {
      apiID: "checkPwdWs",
      keyId: ""
    }, {
      apiID: "modifyPwdPage",
      keyId: ""
    }, {
      apiID: "forgetPwdPage",
      keyId: ""
    }, {
      apiID: "maintainData",
      keyId: "1EECE5B6-3A06-4F0D-BF72-FD08762D2B1C"
    }, {
      apiID: "tokenData",
      keyId: "263E0FE2-8FA7-45AC-AAD7-610D57DAF364"
    }];
    var apiDomain_PreProd = [{
      apiDomainKey: "utility",
      apiDomain: 'http://113.196.86.105/wsUtility/'
    }, {
      apiDomainKey: "discover",
      apiDomain: "http://113.196.86.105/wsIllustrationIII/"
    }, {
      apiDomainKey: "wsaz",
      apiDomain: "https://preW2.allianz.com.tw/WSAZ/"
    }, {
      apiDomainKey: "MstrPage",
      // apiDomain: "http://113.196.86.102/WSAZ/"
      apiDomain: "https://preW2.allianz.com.tw/MSTR/"
    }, {
      apiDomainKey: "w2Util_pp",
      apiDomain: "https://preW2.allianz.com.tw/w2Util/"
    }, {
      apiDomainKey: "AZPL",
      apiDomain: "https://preW2.allianz.com.tw/eProCommonsite/"
    }, {
      apiDomainKey: "w2UtilAPI",
      //apiDomain:"http://t5.allianz.com.tw/w2UtilAPI/"
      apiDomain: "https://preW2.allianz.com.tw/w2UtilAPI/"
    }];
    var apiConfig_PreProd = [{
      apiID: "appLogin",
      keyId: "B68DFBB5-4509-4FC4-89D9-6CE4AA713756"
    }, {
      apiID: "commonLogin",
      keyId: "B68DFBB5-4509-4FC4-89D9-6CE4AA713756"
    }, {
      apiID: "mstrLogin",
      keyId: ""
    }, {
      apiID: "mstrRestApiLogin",
      keyId: ""
    }, {
      apiID: "mstrRestApiPage",
      keyId: ""
    }, {
      apiID: "mstrMenu",
      keyId: "RaWTMDZvIiZZxBIGQknYUqrpMJbmQccldLTkAcNH"
    }, {
      apiID: "versionCheck",
      keyId: "0D06003A-7FAA-4A78-9F0C-D58F2349AED3"
    }, {
      apiID: "commonVersionCheck",
      keyId: "0D06003A-7FAA-4A78-9F0C-D58F2349AED3"
    }, {
      apiID: "checkPwdWs",
      keyId: ""
    }, {
      apiID: "modifyPwdPage",
      keyId: ""
    }, {
      apiID: "forgetPwdPage",
      keyId: ""
    }, {
      apiID: "maintainData",
      keyId: "5B98F6AD-5E60-4965-B9F1-5423C7275AAD"
    }, {
      apiID: "tokenData",
      keyId: "DAB87AF7-E85D-475D-B637-F1CF4873DFE2"
    }];
    var apiDomain_Prod = [{
      apiDomainKey: "utility",
      //apiDomain: "https://first2.allianz.com.tw/wsUtility/"
      apiDomain: "https://es.allianz.com.tw/service/wsUtility/"
    }, {
      apiDomainKey: "discover",
      //apiDomain: "https://first2.allianz.com.tw/wsIllustrationIII/"
      apiDomain: "https://es.allianz.com.tw/service/wsIllustrationIII/"
    }, {
      apiDomainKey: "wsaz",
      //apiDomain: "https://w2.allianz.com.tw/WSAZ/"
      apiDomain: "https://es.allianz.com.tw/service/WSAZ/"
    }, {
      apiDomainKey: "MstrPage",
      //apiDomain: "https://w2.allianz.com.tw/MSTR/"
      apiDomain: "https://es.allianz.com.tw/partner/MSTR/"
    }, {
      apiDomainKey: "w2Util_pp",
      //apiDomain:"https://w2.allianz.com.tw/w2Util/"
      apiDomain: "https://es.allianz.com.tw/service/w2Util/"
    }, {
      apiDomainKey: "AZPL",
      //apiDomain:"https://www.azpl.com.tw/eProCommonsite/"
      apiDomain: "https://es.allianz.com.tw/partner/eProCommonsite/"
    }, {
      apiDomainKey: "w2UtilAPI",
      //apiDomain:"https://w2.allianz.com.tw/w2UtilAPI/"
      apiDomain: "https://es.allianz.com.tw/service/w2UtilAPI/"
    }];
    var apiConfig_Prod = [{
      apiID: "appLogin",
      keyId: "C27A0301-9162-4DD2-9196-8BB9DB971DE0"
    }, {
      apiID: "commonLogin",
      keyId: "C27A0301-9162-4DD2-9196-8BB9DB971DE0"
    }, {
      apiID: "mstrLogin",
      keyId: ""
    }, {
      apiID: "mstrRestApiLogin",
      keyId: ""
    }, {
      apiID: "mstrRestApiPage",
      keyId: ""
    }, {
      apiID: "mstrMenu",
      keyId: "gVSAxjUcjoYOBTCejyGcfChltsJxdVOxGFZSZMSw"
    }, {
      apiID: "versionCheck",
      keyId: "F8D2555D-89F3-44AE-95FD-633A73FC56E2"
    }, {
      apiID: "commonVersionCheck",
      keyId: "F8D2555D-89F3-44AE-95FD-633A73FC56E2"
    }, {
      apiID: "checkPwdWs",
      keyId: ""
    }, {
      apiID: "modifyPwdPage",
      keyId: ""
    }, {
      apiID: "forgetPwdPage",
      keyId: ""
    }, {
      apiID: "maintainData",
      keyId: "6EF77201-21A7-46DF-926A-825737DF6608"
    }, {
      apiID: "tokenData",
      keyId: "14B7C122-2212-4F23-A62E-5DBBD7673A43"
    }];
    /***/
  },

  /***/
  "./src/app/service/api-common/api-common.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/service/api-common/api-common.module.ts ***!
    \*********************************************************/

  /*! exports provided: ApiCommonModule */

  /***/
  function srcAppServiceApiCommonApiCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiCommonModule", function () {
      return ApiCommonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environment/environment */
    "./src/app/environment/environment.ts");
    /* harmony import */


    var _environment_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environment/url */
    "./src/app/environment/url.ts");
    /* harmony import */


    var _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/common-utility/common-utility.module */
    "./src/app/shared/common-utility/common-utility.module.ts");

    var ApiCommonModule =
    /*#__PURE__*/
    function () {
      function ApiCommonModule(commonUtility) {
        _classCallCheck(this, ApiCommonModule);

        this.commonUtility = commonUtility;
      }

      _createClass(ApiCommonModule, [{
        key: "getApiConfigByApiID",
        value: function getApiConfigByApiID(apiId) {
          console.log(this.allApiConfig);
          return this.allApiConfig.find(function (apiConfig) {
            return apiConfig.apiID == apiId;
          });
        }
      }, {
        key: "getApiUrl",
        value: function getApiUrl(apiID) {
          var domain;
          var path;
          var apiConfig = this.allApiConfig;
          domain = apiConfig.find(function (url) {
            return url.apiID == apiID;
          }).domain;
          path = apiConfig.find(function (url) {
            return url.apiID == apiID;
          }).path;
          return "".concat(domain).concat(path);
        }
      }, {
        key: "errorHandle",
        value: function errorHandle(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.errorMessage;
          } else {
            errorMessage = "Error Code: ".concat(error.status, "\n Message:").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }, {
        key: "allApiConfig",
        get: function get() {
          var _this6 = this;

          var pApiConfig;

          switch (this.commonUtility.env) {
            case '10':
            case '14':
              pApiConfig = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiConfig_Uat"];
              break;

            case '11':
            case '15':
              pApiConfig = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiConfig_PreProd"];
              break;

            case '0':
            case '2':
              pApiConfig = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiConfig_Prod"];
              break;

            default:
              pApiConfig = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiConfig_Prod"];
              break;
          }

          ;
          pApiConfig.forEach(function (apiConfig) {
            apiConfig.domainKey = _environment_environment__WEBPACK_IMPORTED_MODULE_5__["apiPath"].find(function (path) {
              return path.apiID == apiConfig.apiID;
            }).domainKey;
            apiConfig.domain = _this6.ApiDomain.find(function (domain) {
              return domain.apiDomainKey == apiConfig.domainKey;
            }).apiDomain;
            apiConfig.path = _environment_environment__WEBPACK_IMPORTED_MODULE_5__["apiPath"].find(function (path) {
              return path.apiID == apiConfig.apiID;
            }).path;
          });
          return pApiConfig;
        }
      }, {
        key: "ApiDomain",
        get: function get() {
          var pApiDomain;

          switch (this.commonUtility.env) {
            case '10':
            case '14':
              pApiDomain = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiDomain_Uat"];
              break;

            case '11':
            case '15':
              pApiDomain = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiDomain_PreProd"];
              break;

            case '0':
            case '2':
              pApiDomain = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiDomain_Prod"];
              break;

            default:
              pApiDomain = _environment_url__WEBPACK_IMPORTED_MODULE_6__["apiDomain_Prod"];
              break;
          }

          return pApiDomain;
        }
      }, {
        key: "reqCommon",
        get: function get() {
          var pReqCommon = {
            RequestDate: this.commonUtility.Date,
            RequestTimeStamp: this.commonUtility.TimeStamp,
            RequestTime: this.commonUtility.TimeStamp,
            SystemID: this.commonUtility.systemId,
            SystemCode: this.commonUtility.systemId
          };
          return pReqCommon;
        }
      }, {
        key: "httpHeaders",
        get: function get() {
          var pHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authenticationToken': sessionStorage.getItem('authenticationToken')
          });
          return pHeaders;
        }
      }]);

      return ApiCommonModule;
    }();

    ApiCommonModule.ctorParameters = function () {
      return [{
        type: _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_7__["CommonUtilityModule"]
      }];
    };

    ApiCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_7__["CommonUtilityModule"]]
    })], ApiCommonModule);
    /***/
  },

  /***/
  "./src/app/service/app-login.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/app-login.service.ts ***!
    \**********************************************/

  /*! exports provided: AppLoginService */

  /***/
  function srcAppServiceAppLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoginService", function () {
      return AppLoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/common-utility/common-utility.module */
    "./src/app/shared/common-utility/common-utility.module.ts");
    /* harmony import */


    var _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var _api_common_api_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./api-common/api-common.module */
    "./src/app/service/api-common/api-common.module.ts");

    var AppLoginService =
    /*#__PURE__*/
    function () {
      function AppLoginService(apiCommon, commonUtility, loadingService, http) {
        _classCallCheck(this, AppLoginService);

        this.apiCommon = apiCommon;
        this.commonUtility = commonUtility;
        this.loadingService = loadingService;
        this.http = http;
      }

      _createClass(AppLoginService, [{
        key: "appLogin",
        value: function appLogin(account, pwd) {
          var _this7 = this;

          var apiId = "appLogin";

          switch (this.commonUtility.accType) {
            case "0":
              break;

            case "1":
              apiId = "commonLogin";
              break;
          }

          console.log(apiId);
          this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
          var apiUrl = this.apiCommon.getApiUrl(apiId);
          console.log(apiUrl);
          console.warn();
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'apiKey': this.ApiConfig.keyId
            })
          };
          this.loadingService.show();
          var rqbody = {
            MetaData: this.apiCommon.reqCommon,
            LoginData: {
              DeviceID: "TestD",
              Account: account,
              Password: pwd
            }
          };
          console.log(rqbody);
          return this.http.post(apiUrl, JSON.stringify(rqbody), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(90 * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.warn('error:', error);

            _this7.loadingService.hide();

            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {}

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }, {
        key: "versionCheck",
        value: function versionCheck(appVersion, lastUpdateTime, platform) {
          var _this8 = this;

          var apiId = "versionCheck";

          switch (this.commonUtility.accType) {
            case "0":
              break;

            case "1":
              apiId = "commonVersionCheck";
              break;
          }

          console.log(apiId);
          this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
          var apiUrl = this.apiCommon.getApiUrl(apiId);
          console.log(apiUrl);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'authenticationToken': this.commonUtility.getSessionValue('authenticationToken'),
              'apiKey': this.ApiConfig.keyId
            })
          };
          this.loadingService.show();
          var rqbody = {
            MetaData: this.apiCommon.reqCommon,
            AppVersion: appVersion,
            LastUpdateTime: lastUpdateTime,
            DeviceSystemType: platform
          };
          console.log(rqbody);
          return this.http.post(apiUrl, JSON.stringify(rqbody), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(90 * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log('error:', error);

            _this8.loadingService.hide();

            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {}

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }, {
        key: "getTokenDetail",
        value: function getTokenDetail() {
          var _this9 = this;

          var apiId = "tokenData";
          console.log(apiId);
          this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
          var apiUrl = this.apiCommon.getApiUrl(apiId);
          console.log(apiUrl);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'authenticationToken': this.commonUtility.getSessionValue('authenticationToken'),
              'apiKey': this.ApiConfig.keyId
            })
          };
          this.loadingService.show();
          var rqbody = {
            MetaData: this.apiCommon.reqCommon
          };
          console.log(rqbody);
          return this.http.post(apiUrl, JSON.stringify(rqbody), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(90 * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log('error:', error);

            _this9.loadingService.hide();

            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {}

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return AppLoginService;
    }();

    AppLoginService.ctorParameters = function () {
      return [{
        type: _api_common_api_common_module__WEBPACK_IMPORTED_MODULE_7__["ApiCommonModule"]
      }, {
        type: _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_5__["CommonUtilityModule"]
      }, {
        type: _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppLoginService);
    /***/
  },

  /***/
  "./src/app/shared/common-utility/common-utility.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/common-utility/common-utility.module.ts ***!
    \****************************************************************/

  /*! exports provided: CommonUtilityModule */

  /***/
  function srcAppSharedCommonUtilityCommonUtilityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonUtilityModule", function () {
      return CommonUtilityModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environment/environment */
    "./src/app/environment/environment.ts");

    var CommonUtilityModule =
    /*#__PURE__*/
    function () {
      function CommonUtilityModule(route) {
        _classCallCheck(this, CommonUtilityModule);

        this.route = route;
      }

      _createClass(CommonUtilityModule, [{
        key: "setSessionValue",
        value: function setSessionValue(key, value) {
          sessionStorage.setItem(key, value);
        }
      }, {
        key: "getSessionValue",
        value: function getSessionValue(key) {
          return sessionStorage.getItem(key);
        }
      }, {
        key: "setLocalValue",
        value: function setLocalValue(key, value) {
          localStorage.setItem(key, value);
        }
      }, {
        key: "getLocalValue",
        value: function getLocalValue(key) {
          return localStorage.getItem(key);
        }
      }, {
        key: "tranNull",
        value: function tranNull(value) {
          var rtn;
          rtn = value;

          if (value == null) {
            rtn = '';
          }

          return rtn;
        }
      }, {
        key: "openUrl",
        value: function openUrl(url, target) {
          console.log(url);
          document.addEventListener('deviceready', function () {
            cordova.InAppBrowser.open(encodeURI(url), target, 'location=no,closebuttoncaption=??????,hidenavigationbuttons=yes');
          });
        }
        /* public openRouteUrl(DocUrl:string,target:string)
        {
          var url = "doc.html";
          console.log('openRouteUrl');
          localStorage.setItem("objUrl",DocUrl);
          document.addEventListener('deviceready', () => {
            cordova.InAppBrowser.open(url, '_blank', 'location=yes,closebuttoncaption=??????,hidenavigationbuttons=yes');
          });
        }
        
        public openRestApiTest(DocUrl:string,target:string)
        {
          var url = "RestApiTest.html";
          console.log('RestApiTest');
          localStorage.setItem("objUrl",DocUrl);
          document.addEventListener('deviceready', () => {
            cordova.InAppBrowser.open(url, '_system', 'location=yes,closebuttoncaption=??????,hidenavigationbuttons=yes');
          });
        } */

      }, {
        key: "modifyPwd",
        value: function modifyPwd(account, page) {
          // modifyPwdPage = this.apiCommon.getApiUrl("modifyPwdPage");
          page += '&SystemID=' + this.systemId + '&Account=' + account;
          console.log(page);
          this.openUrl(page, "_blank");
        }
      }, {
        key: "forgetPassword",
        value: function forgetPassword(page) {
          // forgetPwdPage = this.apiCommon.getApiUrl("forgetPwdPage");
          // forgetPwdPage = "https://t1.allianz.com.tw/eProAgent/";
          page += '&SystemID=' + this.systemId;
          console.log(page);
          this.openUrl(page, "_blank");
        }
      }, {
        key: "getUrlPrefix",
        value: function getUrlPrefix() {
          var rtn = "https://";

          switch (_environment_environment__WEBPACK_IMPORTED_MODULE_4__["envData"].env) {
            case "10":
              rtn = "http://";
              break;
          }

          return rtn;
        }
      }, {
        key: "getEnvironment",
        value: function getEnvironment() {
          var rtn;

          switch (_environment_environment__WEBPACK_IMPORTED_MODULE_4__["envData"].env) {
            case "0":
            case "2":
              rtn = "";
              break;

            case "10":
            case "14":
              rtn = "UAT";
              break;

            case "11":
            case "15":
              rtn = "PreProd";
              break;

            default:
              rtn = "UAT";
              break;
          }

          return rtn;
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var rtn;
          var year = date.getFullYear().toString();
          var month = (date.getMonth() + 1).toString();
          month = month.length < 2 ? '0' + month : month;
          var day = date.getDate().toString();
          day = day.length < 2 ? '0' + day : day;
          rtn = year + month + day;
          return rtn;
        }
      }, {
        key: "formatTime",
        value: function formatTime(date) {
          var rtn;
          var hour = date.getHours().toString();
          var min = date.getMinutes().toString();
          var sec = date.getSeconds().toString();
          hour = hour.length < 2 ? '0' + hour : hour;
          min = min.length < 2 ? '0' + min : min;
          sec = sec.length < 2 ? '0' + sec : sec;
          rtn = hour + min + sec;
          return rtn;
        }
      }, {
        key: "setToken",
        //??????????????????
        value: function setToken(value) {
          this.setSessionValue("authenticationToken", value); // sessionStorage.setItem("authenticationToken", value);
        }
      }, {
        key: "setTokenStart",
        value: function setTokenStart(value) {
          this.setSessionValue("TokenStart", value); // sessionStorage.setItem("TokenStart", value);
        }
      }, {
        key: "setTokenEnd",
        value: function setTokenEnd(value) {
          this.setSessionValue("TokenEnd", value); // sessionStorage.setItem("TokenEnd", value);
        }
      }, {
        key: "contentSize",
        get: function get() {
          return _environment_environment__WEBPACK_IMPORTED_MODULE_4__["contentSize"];
        }
      }, {
        key: "Date",
        get: function get() {
          var date = new Date(); // const year = date.getFullYear().toString();
          // let month = (date.getMonth()+1).toString();
          // month = (month.length < 2)? '0'+ month : month ;
          // let day = (date.getDate()).toString();
          // day = (day.length<2)?'0'+day:day;
          // const rqdate =  year + month + day;

          var rqdate = this.formatDate(date);
          return rqdate;
        }
      }, {
        key: "TimeStamp",
        get: function get() {
          var date = new Date(); // let hour = date.getHours().toString();
          // let min = date.getMinutes().toString();
          // let sec = date.getSeconds().toString();
          // hour = (hour.length<2)?'0'+hour:hour;
          // min = (min.length<2)?'0'+min:min;
          // sec = (sec.length<2)?'0'+sec:sec;
          // const rqtime = hour + min + sec;

          var rqtime = this.formatTime(date);
          return rqtime;
        }
      }, {
        key: "env",
        get: function get() {
          return _environment_environment__WEBPACK_IMPORTED_MODULE_4__["envData"].env;
        }
      }, {
        key: "systemId",
        get: function get() {
          return _environment_environment__WEBPACK_IMPORTED_MODULE_4__["envData"].systemId;
        }
      }, {
        key: "systemCode",
        get: function get() {
          return _environment_environment__WEBPACK_IMPORTED_MODULE_4__["envData"].systemCode;
        }
      }, {
        key: "accType",
        get: function get() {
          return _environment_environment__WEBPACK_IMPORTED_MODULE_4__["envData"].useAcc;
        }
      }, {
        key: "Token",
        set: function set(value) {
          this.setTokenEnd(value);
        }
      }, {
        key: "TokenStart",
        set: function set(value) {
          this.setTokenStart(value);
        }
      }, {
        key: "TokenEnd",
        set: function set(value) {
          this.setTokenEnd(value);
        }
      }, {
        key: "loginUser",
        set: function set(value) {
          this.setSessionValue("loginUser", value); // sessionStorage.setItem("loginUser", value);
        }
      }, {
        key: "accSource",
        set: function set(value) {
          this.setSessionValue("accSource", value);
        }
      }, {
        key: "agentId",
        set: function set(value) {
          this.setSessionValue("agentId", value);
        }
      }, {
        key: "TokenData",
        set: function set(value) {
          this.setToken(value.Token);
          this.setTokenStart(value.StartTime);
          this.setTokenEnd(value.EndTime);
        }
      }]);

      return CommonUtilityModule;
    }();

    CommonUtilityModule.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CommonUtilityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
    })], CommonUtilityModule);
    /***/
  },

  /***/
  "./src/app/shared/loading/loading.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/loading/loading.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLoadingLoadingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 99998;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(48, 71, 120, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n.backdrop> #loading {\n    width: 100px;\n    height: 100px;\n    z-index: 99999;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTk5ODtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA3MSwgMTIwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuLmJhY2tkcm9wPiAjbG9hZGluZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5OTk7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/loading/loading.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/loading/loading.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppSharedLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lottie-web */
    "./node_modules/lottie-web/build/player/lottie.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__); //import animationData from '../../../assets/images/loading.json';


    var LoadingComponent =
    /*#__PURE__*/
    function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);

        this.data = __webpack_require__(
        /*! ../../../assets/loading.json */
        "./src/assets/loading.json");
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.loadAnimation({
            container: this.loading.nativeElement,
            animationData: this.data,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            name: 'loading'
          });
        }
      }]);

      return LoadingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loading', {
      static: true
    })], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loading/loading.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading.component.css */
      "./src/app/shared/loading/loading.component.css")).default]
    })], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/shared/loading/loading.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/loading/loading.service.ts ***!
    \***************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppSharedLoadingLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoadingService =
    /*#__PURE__*/
    function () {
      function LoadingService() {
        _classCallCheck(this, LoadingService);

        this._showLoadingToggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(LoadingService, [{
        key: "show",
        value: function show() {
          this._showLoadingToggle$.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          this._showLoadingToggle$.next(false);
        }
      }, {
        key: "getLoadingStatus",
        value: function getLoadingStatus() {
          return this._showLoadingToggle$.asObservable();
        }
      }]);

      return LoadingService;
    }();

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoadingService);
    /***/
  },

  /***/
  "./src/app/shared/modal/modal.component.css":
  /*!**************************************************!*\
    !*** ./src/app/shared/modal/modal.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .modal{\n  top:50%;\n} */\n.modal-header {\n  height: 50px;\n  background-color: #F0F0F0;\n}\n.modal-title {\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: large;\n}\n.modal-body {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n}\n.modal__img {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.modal__warning {\n    margin: 32px 0 6px;\n    width: 50px;\n    height: 50px;\n  }\n.modal__warning img{\n    width: 100%;   \n  }\n.modal__content {\n    margin: 12px 0;\n    padding: 0 12px;\n    font-size: medium;\n    font-weight: 600;\n    color: #2A2A2A;\n  }\n.modal-footer {\n    padding: 0;\n  }\n.modal-footer button {\n    margin: 0;\n    height: 100%;\n    background: white;\n    padding: 1.125rem;\n    font-size: medium;\n    font-weight: 500;\n    color: #3D81E0;\n    border-top: 1px solid #E3E7EA;\n  }\n.modal-footer button:first-child {\n    border-right: 1px solid #E3E7EA;\n  }\n.modal-footer button.red {\n    color: #E66969;\n  }\n.modal-footer>*{\n    margin: 0;\n  }\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    margin: 0;\n    }\n.modal-dialog-centered{\n      width:30%\n    }\n.modal-lg {\n      max-width: 90%;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNBO0lBQ0UsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVDtBQUNBO01BQ0U7SUFDRjtBQUNBO01BQ0UsY0FBYztJQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1vZGFse1xuICB0b3A6NTAlO1xufSAqL1xuLm1vZGFsLWhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbn1cbi5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG4ubW9kYWxfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4gIC5tb2RhbF9fd2FybmluZyB7XG4gICAgbWFyZ2luOiAzMnB4IDAgNnB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAubW9kYWxfX3dhcm5pbmcgaW1ne1xuICAgIHdpZHRoOiAxMDAlOyAgIFxuICB9XG4gIC5tb2RhbF9fY29udGVudCB7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyQTJBMkE7XG4gIH1cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAubW9kYWwtZm9vdGVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjEyNXJlbTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjM0Q4MUUwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTNFN0VBO1xuICB9XG4gIC5tb2RhbC1mb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTNFN0VBO1xuICB9XG4gIC5tb2RhbC1mb290ZXIgYnV0dG9uLnJlZCB7XG4gICAgY29sb3I6ICNFNjY5Njk7XG4gIH1cbiAgLm1vZGFsLWZvb3Rlcj4qe1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLm1vZGFsLWRpYWxvZy1jZW50ZXJlZHtcbiAgICAgIHdpZHRoOjMwJVxuICAgIH1cbiAgICAubW9kYWwtbGcge1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/modal/modal.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/modal/modal.component.ts ***!
    \*************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppSharedModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _class_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../class/modal */
    "./src/app/class/modal.ts");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(config, sanitizer, activeModal) {
        _classCallCheck(this, ModalComponent);

        this.config = config;
        this.sanitizer = sanitizer;
        this.activeModal = activeModal;
        this.ModalType = _class_modal__WEBPACK_IMPORTED_MODULE_4__["ModalType"];
        config.backdrop = 'static';
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.fromParent);
          this.options = this.fromParent;
        }
      }, {
        key: "closeModal",
        value: function closeModal(sendData) {
          this.activeModal.close(sendData);
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "fromParent", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.css */
      "./src/app/shared/modal/modal.component.css")).default]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/modal/modal.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/modal/modal.service.ts ***!
    \***********************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppSharedModalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/shared/modal/modal.component.ts");

    var ModalService =
    /*#__PURE__*/
    function () {
      // @Input() fromParent;
      function ModalService(ngbModalService) {
        _classCallCheck(this, ModalService);

        this.ngbModalService = ngbModalService;
      }

      _createClass(ModalService, [{
        key: "open",
        value: function open(modalOptions, screenSize) {
          var rtn;
          console.log(screenSize);
          var modalRef = this.ngbModalService.open(_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            scrollable: true,
            centered: true,
            size: screenSize,
            keyboard: false,
            backdrop: 'static'
          });
          var data = modalOptions;
          modalRef.componentInstance.fromParent = data;
          console.log(modalRef.componentInstance.fromParent); // return this.http.post<login.resMstrLogin>(apiUrl, JSON.stringify(rqbody), httpOptions)

          modalRef.result.then(function (result) {
            console.log(result);
            return result;
            console.log(rtn);
          }, function (reason) {
            console.log(reason);
          });
        }
      }, {
        key: "handler",
        value: function handler(countData) {
          console.log("handler : data => ".concat(countData));
        }
      }]);

      return ModalService;
    }();

    ModalService.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModalService);
    /***/
  },

  /***/
  "./src/assets/loading.json":
  /*!*********************************!*\
    !*** ./src/assets/loading.json ***!
    \*********************************/

  /*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */

  /***/
  function srcAssetsLoadingJson(module) {
    module.exports = JSON.parse("{\"v\":\"5.3.4\",\"fr\":29.9700012207031,\"ip\":0,\"op\":65.0000026475043,\"w\":300,\"h\":300,\"nm\":\"loading\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"allianz_logo_NO\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.347],\"y\":[0.981]},\"o\":{\"x\":[0.733],\"y\":[0.001]},\"n\":[\"0p347_0p981_0p733_0p001\"],\"t\":19,\"s\":[10],\"e\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":23,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.353],\"y\":[0.006]},\"n\":[\"0p667_1_0p353_0p006\"],\"t\":59,\"s\":[100],\"e\":[10]},{\"t\":64.0000026067734}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[150,150,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[46,46,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.578,0.578,0.667],\"y\":[0.37,0.37,1]},\"o\":{\"x\":[0.495,0.495,0.333],\"y\":[-0.024,-0.024,0]},\"n\":[\"0p578_0p37_0p495_-0p024\",\"0p578_0p37_0p495_-0p024\",\"0p667_1_0p333_0\"],\"t\":20,\"s\":[180,180,100],\"e\":[200,200,100]},{\"i\":{\"x\":[0.897,0.897,0.667],\"y\":[35683770.434,35683764.732,177.419]},\"o\":{\"x\":[0.302,0.302,0.333],\"y\":[50182372.704,50182364.686,0]},\"n\":[\"0p897_35683770p434_0p302_50182372p704\",\"0p897_35683764p732_0p302_50182364p686\",\"0p667_177p419_0p333_0\"],\"t\":25,\"s\":[200,200,100],\"e\":[200,200,100]},{\"i\":{\"x\":[0.893,0.893,0.667],\"y\":[1.011,1.011,1]},\"o\":{\"x\":[0.254,0.254,0.333],\"y\":[0.034,0.034,-33.078]},\"n\":[\"0p893_1p011_0p254_0p034\",\"0p893_1p011_0p254_0p034\",\"0p667_1_0p333_-33p078\"],\"t\":57,\"s\":[200,200,100],\"e\":[160,160,100]},{\"t\":63.0000025660426}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[21.341,0],[0,21.735],[-21.42,0],[0,-21.647]],\"o\":[[-21.423,0],[0,-21.647],[21.341,0],[0,21.735]],\"v\":[[-0.005,38],[-37,0.454],[-0.005,-37],[37,0.454]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[26.328,0],[0,-26.323],[-26.315,0],[0,26.408]],\"o\":[[-26.315,0],[0,26.408],[26.328,0],[0,-26.323]],\"v\":[[0.037,-46],[-46,-0.043],[0.037,46],[46,-0.043]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.136999990426,0.375999989229,0.647000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[46,46],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.724],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[-3.8,0]],\"v\":[[-6.5,-15.801],[-6.5,20.998],[6.5,20.998],[6.5,-20.998],[-1.193,-20.998]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.136999990426,0.375999989229,0.647000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[27.5,49.998],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.92,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,-3.724]],\"v\":[[1.155,-21],[-6.5,-21],[-6.5,21],[6.5,21],[6.5,-15.803]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.136999990426,0.375999989229,0.647000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[64.5,50],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.773,0],[0,0],[0,0],[0,0],[0,0],[-0.341,-0.342],[0,-1.277],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.42,0],[0.504,0.593],[0,0],[0,0],[0,0],[0,-3.831]],\"v\":[[2.97,-26.5],[-8,-26.5],[-8,-21.226],[-7.329,-21.226],[-6.155,-21.145],[-4.981,-20.545],[-4.314,-18.079],[-4.314,26.5],[8,26.5],[8,-21.392]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.136999990426,0.375999989229,0.647000002394,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[44,43.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":21.0000008553475,\"op\":65.0000026475043,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"round_line_start\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[150,150,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[15.148,12.148,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":3,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[274.297,274.297],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.605],\"y\":[0.867]},\"o\":{\"x\":[0.49],\"y\":[0.09]},\"n\":[\"0p605_0p867_0p49_0p09\"],\"t\":0,\"s\":[100],\"e\":[0]},{\"t\":23.0000009368092}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.432],\"y\":[0.89]},\"o\":{\"x\":[0.409],\"y\":[0.208]},\"n\":[\"0p432_0p89_0p409_0p208\"],\"t\":23,\"s\":[100],\"e\":[0]},{\"t\":55.0000022401959}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.98431372549,0.98431372549,0.98431372549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":0,\"ix\":2}},{\"n\":\"d\",\"nm\":\"dash2\",\"v\":{\"a\":0,\"k\":0,\"ix\":3}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.98431372549,0.98431372549,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":true},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[16.219,12.996],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[103,103],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[10043],\"e\":[10085]},{\"t\":54.0000021994651}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":51,\"s\":[100],\"e\":[0]},{\"t\":54.0000021994651}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":65.0000026475043,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"dot_r\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":7,\"s\":[25],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":17,\"s\":[100],\"e\":[25]},{\"t\":27.0000010997325}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[207.25,153,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.8,0.8,0.667],\"y\":[0.775,0.775,1]},\"o\":{\"x\":[1,1,0.333],\"y\":[0,0,0]},\"n\":[\"0p8_0p775_1_0\",\"0p8_0p775_1_0\",\"0p667_1_0p333_0\"],\"t\":7,\"s\":[0,0,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.853,0.853,0.667],\"y\":[26.331,26.331,1]},\"o\":{\"x\":[0.099,0.099,0.333],\"y\":[24.583,24.583,0]},\"n\":[\"0p853_26p331_0p099_24p583\",\"0p853_26p331_0p099_24p583\",\"0p667_1_0p333_0\"],\"t\":13,\"s\":[80,80,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.337,0.337,0.333],\"y\":[0.317,0.317,0]},\"n\":[\"0_1_0p337_0p317\",\"0_1_0p337_0p317\",\"0p667_1_0p333_0\"],\"t\":22,\"s\":[80,80,100],\"e\":[0,0,100]},{\"t\":27.0000010997325}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[40.016,40.016],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":30,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.109803921569,0.333333333333,0.643137254902,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":65.0000026475043,\"st\":1.00000004073083,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"dot_m\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":3,\"s\":[25],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":13,\"s\":[100],\"e\":[25]},{\"t\":23.0000009368092}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[151,153,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.8,0.8,0.667],\"y\":[0.775,0.775,1]},\"o\":{\"x\":[1,1,0.333],\"y\":[0,0,0]},\"n\":[\"0p8_0p775_1_0\",\"0p8_0p775_1_0\",\"0p667_1_0p333_0\"],\"t\":3,\"s\":[0,0,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.853,0.853,0.667],\"y\":[26.331,26.331,1]},\"o\":{\"x\":[0.099,0.099,0.333],\"y\":[24.583,24.583,0]},\"n\":[\"0p853_26p331_0p099_24p583\",\"0p853_26p331_0p099_24p583\",\"0p667_1_0p333_0\"],\"t\":9,\"s\":[80,80,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.337,0.337,0.333],\"y\":[0.317,0.317,0]},\"n\":[\"0_1_0p337_0p317\",\"0_1_0p337_0p317\",\"0p667_1_0p333_0\"],\"t\":18,\"s\":[80,80,100],\"e\":[0,0,100]},{\"t\":23.0000009368092}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[40.016,40.016],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":30,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.109803921569,0.333333333333,0.643137254902,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":65.0000026475043,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"dot_l\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[25],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":10,\"s\":[100],\"e\":[25]},{\"t\":20.0000008146167}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[94.75,153,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.8,0.8,0.667],\"y\":[0.775,0.775,1]},\"o\":{\"x\":[1,1,0.333],\"y\":[0,0,0]},\"n\":[\"0p8_0p775_1_0\",\"0p8_0p775_1_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[0,0,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.853,0.853,0.667],\"y\":[26.331,26.331,1]},\"o\":{\"x\":[0.099,0.099,0.333],\"y\":[24.583,24.583,0]},\"n\":[\"0p853_26p331_0p099_24p583\",\"0p853_26p331_0p099_24p583\",\"0p667_1_0p333_0\"],\"t\":6,\"s\":[80,80,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.337,0.337,0.333],\"y\":[0.317,0.317,0]},\"n\":[\"0_1_0p337_0p317\",\"0_1_0p337_0p317\",\"0p667_1_0p333_0\"],\"t\":15,\"s\":[80,80,100],\"e\":[0,0,100]},{\"t\":20.0000008146167}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[40.016,40.016],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":30,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.109803921569,0.333333333333,0.643137254902,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":65.0000026475043,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"bg_white_round\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[138.76,148.045,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[108,108,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[214.98,214.98],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":184,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.98431372549,0.98431372549,0.98431372549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":30,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.98431372549,0.98431372549,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[11.24,1.955],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[102,101.878],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":65.0000026475043,\"st\":0,\"bm\":0}],\"markers\":[]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/aztl/Documents/Project/MSTRAPP/MSTR/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map