function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-action.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-action.js ***!
    \****************************************************************************/

  /*! exports provided: NxActionModule, NxActionComponent, NxActionIconDirective */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxActionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxActionModule", function () {
      return NxActionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxActionComponent", function () {
      return NxActionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxActionIconDirective", function () {
      return NxActionIconDirective;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/icon */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-icon.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NxActionComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       */
      function NxActionComponent(_changeDetectorRef) {
        _classCallCheck(this, NxActionComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._selected = false;
        this._expandable = false;
        this._expanded = false;
      }
      /**
       * Whether this action is selected or not.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxActionComponent, [{
        key: "selected",
        set: function set(value) {
          this._selected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._selected;
        }
        /**
         * Whether this action is expandable or not. Will add a caret icon.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "expandable",
        set: function set(value) {
          this._expandable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._expandable;
        }
        /**
         * Whether this action is expanded or not.
         * Only works in combination with the `expandable` option set to `true`.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "expanded",
        set: function set(value) {
          this._expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._expanded;
        }
      }]);

      return NxActionComponent;
    }();

    NxActionComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        // tslint:disable-next-line:component-selector
        selector: '[nxAction]',
        template: "<div class=\"nx-action__wrapper\">\n  <ng-container *ngIf=\"expandable\">\n    <nx-icon class=\"nx-action__expand-icon\" name=\"chevron-right\"></nx-icon>\n  </ng-container>\n  <ng-content select=\"[nxActionIcon]\"></ng-content>\n  <span class=\"nx-action__label\">\n    <ng-content></ng-content>\n  </span>\n</div>\n",
        host: {
          '[class.is-expanded]': 'expanded',
          '[class.is-selected]': 'selected',
          '[class.is-expandable]': 'expandable',
          'class': 'nx-action'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [":host(.nx-action){display:block;background-color:#f5f5f5;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;box-shadow:none;border:none;margin:0;cursor:pointer;line-height:24px;font-size:16px;font-weight:400;padding:8px 16px 8px 0;width:100%;color:#414141;text-decoration:none}:host(.nx-action):hover{background-color:#ececec}:host(.nx-action).is-expanded{font-weight:700}:host(.nx-action).is-expanded .nx-action__expand-icon{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}:host(.nx-action).is-expandable .nx-action__wrapper::before{flex:0 1 32px;max-width:8px;min-width:4px}:host(.nx-action).is-selected{background-color:#007ab3;color:#fff;font-weight:700}:host(.nx-action)[nxTreeNodePadding] .nx-action__wrapper::before{flex-shrink:0}:host(.nx-action)::-moz-focus-inner{border:0}:host-context([data-whatinput=keyboard]):focus{box-shadow:inset 0 0 0 4px #009de6;border-radius:8px}:host-context([data-whatinput=keyboard]):focus.is-selected{box-shadow:inset 0 0 0 4px #009de6,inset 0 0 0 6px #fff}.nx-action__expand-icon{display:flex;justify-content:center;transition:.2s;-webkit-transform:rotateZ(0);transform:rotateZ(0);width:16px;height:24px;margin-right:8px;flex:0 0 auto;font-size:22px}.nx-action__wrapper{display:flex;align-items:center;position:relative;overflow:hidden}.nx-action__wrapper::before{content:'';display:block;flex:0 1 32px;min-width:16px;height:1em}::ng-deep .nx-action__icon{margin-right:16px;height:24px;font-weight:400;flex:0 0 auto;position:relative;top:-1px}.nx-action__label{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 50%;text-align:left;line-height:1;padding:4px 0}"]
      }]
    }];
    /** @nocollapse */

    NxActionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    NxActionComponent.propDecorators = {
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      expandable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      expanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxActionIconDirective = function NxActionIconDirective() {
      _classCallCheck(this, NxActionIconDirective);
    };

    NxActionIconDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[nxActionIcon]',
        host: {
          'class': 'nx-action__icon'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxActionModule = function NxActionModule() {
      _classCallCheck(this, NxActionModule);
    };

    NxActionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_3__["NxIconModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        declarations: [NxActionComponent, NxActionIconDirective],
        exports: [NxActionComponent, NxActionIconDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-action.js.map

    /***/
  },

  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-config.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-config.js ***!
    \****************************************************************************/

  /*! exports provided: NxExpertModule */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxConfigJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxExpertModule", function () {
      return NxExpertModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _allianz_ngx_ndbx_formfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/formfield */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-formfield.js");
    /* harmony import */


    var _allianz_ngx_ndbx_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/base */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-base.js");
    /* harmony import */


    var _allianz_ngx_ndbx_datefield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/datefield */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-datefield.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // expert presets

    /** @type {?} */


    var formfieldExpertOptions = {
      appearance: 'outline',
      nxFloatLabel: 'always'
    };
    /** @type {?} */

    var errorExpertOptions = {
      appearance: 'text'
    };
    /** @type {?} */

    var labelExpertOptions = {
      size: 'small'
    };
    /** @type {?} */

    var datepickerExpertOptions = {
      toggleIconTabindex: -1
    };
    var ??0 = formfieldExpertOptions,
        ??1 = labelExpertOptions,
        ??2 = datepickerExpertOptions,
        ??3 = errorExpertOptions; // should not be a singleton since different tokens can be used in seperate modules

    var NxExpertModule = function NxExpertModule() {
      _classCallCheck(this, NxExpertModule);
    };

    NxExpertModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [{
          provide: _allianz_ngx_ndbx_formfield__WEBPACK_IMPORTED_MODULE_1__["FORMFIELD_DEFAULT_OPTIONS"],
          useValue: ??0
        }, {
          provide: _allianz_ngx_ndbx_base__WEBPACK_IMPORTED_MODULE_2__["LABEL_DEFAULT_OPTIONS"],
          useValue: ??1
        }, {
          provide: _allianz_ngx_ndbx_datefield__WEBPACK_IMPORTED_MODULE_3__["DATEPICKER_DEFAULT_OPTIONS"],
          useValue: ??2
        }, {
          provide: _allianz_ngx_ndbx_base__WEBPACK_IMPORTED_MODULE_2__["ERROR_DEFAULT_OPTIONS"],
          useValue: ??3
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-config.js.map

    /***/
  },

  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-datefield.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-datefield.js ***!
    \*******************************************************************************/

  /*! exports provided: NxDatefieldModule, NX_DATEFIELD_VALUE_ACCESSOR, NX_DATEFIELD_VALIDATORS, NxDatepickerInputEvent, NxDatefieldDirective, NX_DATE_LOCALE_PROVIDER, NativeDateModule, NxNativeDateModule, NX_DATE_LOCALE, NxDateAdapter, NX_DATE_FORMATS, NxNativeDateAdapter, NX_NATIVE_DATE_FORMATS, NxDatepickerIntl, NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, NX_DATEPICKER_SCROLL_STRATEGY, NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER, DATEPICKER_DEFAULT_OPTIONS, NxDatepickerContentComponent, NxDatepickerComponent, ??c, ??e, ??b, ??a, ??d, ??g, ??f */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxDatefieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDatefieldModule", function () {
      return NxDatefieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATEFIELD_VALUE_ACCESSOR", function () {
      return NX_DATEFIELD_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATEFIELD_VALIDATORS", function () {
      return NX_DATEFIELD_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDatepickerInputEvent", function () {
      return NxDatepickerInputEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDatefieldDirective", function () {
      return NxDatefieldDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATE_LOCALE_PROVIDER", function () {
      return NX_DATE_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return NativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxNativeDateModule", function () {
      return NxNativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATE_LOCALE", function () {
      return NX_DATE_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDateAdapter", function () {
      return NxDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATE_FORMATS", function () {
      return NX_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxNativeDateAdapter", function () {
      return NxNativeDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_NATIVE_DATE_FORMATS", function () {
      return NX_NATIVE_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDatepickerIntl", function () {
      return NxDatepickerIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATEPICKER_SCROLL_STRATEGY", function () {
      return NX_DATEPICKER_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER", function () {
      return NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATEPICKER_DEFAULT_OPTIONS", function () {
      return DATEPICKER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDatepickerContentComponent", function () {
      return NxDatepickerContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxDatepickerComponent", function () {
      return NxDatepickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??c", function () {
      return NxCalendarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??e", function () {
      return NxCalendarBodyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??b", function () {
      return NxDatepickerToggleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??a", function () {
      return NxDatepickerToggleIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??d", function () {
      return NxMonthViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??g", function () {
      return NxMultiYearViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??f", function () {
      return NxYearViewComponent;
    });
    /* harmony import */


    var _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/icon */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-icon.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _allianz_ngx_ndbx_formfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/formfield */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-formfield.js");
    /* harmony import */


    var _allianz_ngx_ndbx_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/input */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var NX_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null
      },
      display: {
        dateInput: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        },
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @abstract
     * @template D
     */

    var NxDateAdapter =
    /*#__PURE__*/
    function () {
      function NxDateAdapter() {
        _classCallCheck(this, NxDateAdapter);

        this.locale = 'de-DE';
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(NxDateAdapter, [{
        key: "deserialize",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function deserialize(value) {
          if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
          }

          return this.invalid();
        }
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */

      }, {
        key: "sameDate",
        value: function sameDate(first, second) {
          if (first && second) {
            /** @type {?} */
            var firstValid = this.isValid(first);
            /** @type {?} */

            var secondValid = this.isValid(second);

            if (firstValid && secondValid) {
              return !this.compareDate(first, second);
            }

            return firstValid === secondValid;
          }

          return first === second;
        }
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */

      }, {
        key: "compareDate",
        value: function compareDate(first, second) {
          return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
        }
        /**
         * @param {?} locale
         * @return {?}
         */

      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          this.locale = locale;

          this._localeChanges.next(this.locale);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getLocale",
        value: function getLocale() {
          return this.locale;
        }
        /**
         * @param {?} date
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */

      }, {
        key: "clampDate",
        value: function clampDate(date, min, max) {
          if (min && this.compareDate(date, min) < 0) {
            return min;
          }

          if (max && this.compareDate(date, max) > 0) {
            return max;
          }

          return date;
        }
      }, {
        key: "localeChanges",
        get: function get() {
          return this._localeChanges;
        }
      }]);

      return NxDateAdapter;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken for datepicker that can be used to override default locale code.
     * @type {?}
     */


    var NX_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["InjectionToken"]('nx-date-locale');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(mmalerba): Remove when we no longer support safari 9.

    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */

    var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */

    var DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };

    var ??0 =
    /**
    * @param {?} i
    * @return {?}
    */
    function ??0(i) {
      return String(i + 1);
    };
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_DATE_NAMES = range(31, ??0);
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */

    var DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */

    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */

    function range(length, valueFunction) {
      /** @type {?} */
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * \@docs-private
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */


    var NxNativeDateAdapter =
    /*#__PURE__*/
    function (_NxDateAdapter) {
      _inherits(NxNativeDateAdapter, _NxDateAdapter);

      /**
       * @param {?} matDateLocale
       * @param {?} platform
       */
      function NxNativeDateAdapter(matDateLocale, platform) {
        var _this;

        _classCallCheck(this, NxNativeDateAdapter);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(NxNativeDateAdapter).call(this));
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from it's utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */

        _this.useUtcForDisplay = true;

        _get(_getPrototypeOf(NxNativeDateAdapter.prototype), "setLocale", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), matDateLocale); // IE does its own time zone correction, so we disable this on IE.


        _this.useUtcForDisplay = !platform.TRIDENT;
        _this._clampDate = platform.TRIDENT || platform.EDGE;
        return _this;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      _createClass(NxNativeDateAdapter, [{
        key: "getYear",
        value: function getYear(date) {
          return date.getFullYear();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth(date) {
          return date.getMonth();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate(date) {
          return date.getDate();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayOfWeek",
        value: function getDayOfWeek(date) {
          return date.getDay();
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getMonthNames",
        value: function getMonthNames(style) {
          var _this2 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              month: style,
              timeZone: 'utc'
            });
            return range(12,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this2._stripDirectionalityCharacters(_this2._format(dtf, new Date(2017, i, 1)));
            });
          }

          return DEFAULT_MONTH_NAMES[style];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDateNames",
        value: function getDateNames() {
          var _this3 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              day: 'numeric',
              timeZone: 'utc'
            });
            return range(31,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this3._stripDirectionalityCharacters(_this3._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DATE_NAMES;
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getDayOfWeekNames",
        value: function getDayOfWeekNames(style) {
          var _this4 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              weekday: style,
              timeZone: 'utc'
            });
            return range(7,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this4._stripDirectionalityCharacters(_this4._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DAY_OF_WEEK_NAMES[style];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYearName",
        value: function getYearName(date) {
          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              year: 'numeric',
              timeZone: 'utc'
            });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return String(this.getYear(date));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
          return 0;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getNumDaysInMonth",
        value: function getNumDaysInMonth(date) {
          return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(date) {
          return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date));
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "createDate",
        value: function createDate(year, month, date) {
          // Check for invalid month and date (except upper bound on date which we have to check after
          // creating the Date).
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


          if (result.getMonth() !== month) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "today",
        value: function today() {
          return new Date();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "parse",
        value: function parse(value) {
          // We have no way using the native JS Date to set the parse format or locale, so we ignore these
          // parameters.
          if (typeof value === 'number') {
            return new Date(value);
          }

          return value ? new Date(Date.parse(value)) : null;
        }
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (!this.isValid(date)) {
            throw Error('NxNativeDateAdapter: Cannot format invalid date.');
          }

          if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
              date = this.clone(date);
              date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }

            displayFormat = Object.assign({}, displayFormat, {
              timeZone: 'utc'
            });
            /** @type {?} */

            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return this._stripDirectionalityCharacters(date.toDateString());
        }
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */

      }, {
        key: "addCalendarYears",
        value: function addCalendarYears(date, years) {
          return this.addCalendarMonths(date, years * 12);
        }
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */

      }, {
        key: "addCalendarMonths",
        value: function addCalendarMonths(date, months) {
          /** @type {?} */
          var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
          // month. In this case we want to go to the last day of the desired month.
          // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
          // guarantee this.


          if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
          }

          return newDate;
        }
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "addCalendarDays",
        value: function addCalendarDays(date, days) {
          return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toIso8601",
        value: function toIso8601(date) {
          return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
        }
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          if (typeof value === 'string') {
            if (!value) {
              return null;
            } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.


            if (ISO_8601_REGEX.test(value)) {
              /** @type {?} */
              var date = new Date(value);

              if (this.isValid(date)) {
                return date;
              }
            }
          }

          return _get(_getPrototypeOf(NxNativeDateAdapter.prototype), "deserialize", this).call(this, value);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "isDateInstance",
        value: function isDateInstance(obj) {
          return obj instanceof Date;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return !isNaN(date.getTime());
        }
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        value: function invalid() {
          return new Date(NaN);
        }
        /**
         * Creates a date but allows the month and date to overflow.
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_createDateWithOverflow",
        value: function _createDateWithOverflow(year, month, date) {
          /** @type {?} */
          var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
          // abbreviations for 19xx.

          if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
          }

          return result;
        }
        /**
         * Pads a number to make it two digits.
         * @private
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */

      }, {
        key: "_2digit",
        value: function _2digit(n) {
          return ('00' + n).slice(-2);
        }
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @private
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */

      }, {
        key: "_stripDirectionalityCharacters",
        value: function _stripDirectionalityCharacters(str) {
          return str.replace(/[\u200e\u200f]/g, '');
        }
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @private
         * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param {?} date Date from which we want to get the string representation according to dtf
         * @return {?} A Date object with its UTC representation based on the passed in date info
         */

      }, {
        key: "_format",
        value: function _format(dtf, date) {
          /** @type {?} */
          var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
          return dtf.format(d);
        }
      }]);

      return NxNativeDateAdapter;
    }(NxDateAdapter);

    NxNativeDateAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"]
    }];
    /** @nocollapse */

    NxNativeDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [NX_DATE_LOCALE]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NX_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["InjectionToken"]('nx-date-formats');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NX_DATE_LOCALE_PROVIDER = {
      provide: NX_DATE_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_13__["LOCALE_ID"]
    };

    var NativeDateModule = function NativeDateModule() {
      _classCallCheck(this, NativeDateModule);
    };

    NativeDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"],
      args: [{
        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]],
        providers: [{
          provide: NxDateAdapter,
          useClass: NxNativeDateAdapter
        }, NX_DATE_LOCALE_PROVIDER]
      }]
    }];
    var ??0$1 = NX_NATIVE_DATE_FORMATS;

    var NxNativeDateModule = function NxNativeDateModule() {
      _classCallCheck(this, NxNativeDateModule);
    };

    NxNativeDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"],
      args: [{
        imports: [NativeDateModule],
        providers: [{
          provide: NX_DATE_FORMATS,
          useValue: ??0$1
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} provider
     * @return {?}
     */

    function createMissingDateImplError(provider) {
      return Error("NxDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: NxNativeDateModule, NxMomentDateModule, or provide a " + "custom implementation.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Datepicker data that requires internationalization.
     */


    var NxDatepickerIntl = function NxDatepickerIntl() {
      _classCallCheck(this, NxDatepickerIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
      /** A label for the calendar popup (visible in UI). */

      /**
       * @deprecated Use `switchToMultiYearViewLabel` instead
       */

      this.calendarHeader = 'Choose a date';
      /**
       * A label for the calendar popup (used by screen readers).
       */

      this.calendarLabel = 'Calendar';
      /**
       * A label for the button used to open the calendar popup (used by screen readers).
       */

      this.openCalendarLabel = 'Open calendar';
      /**
       * A label for the previous month button (used by screen readers).
       */

      this.prevMonthLabel = 'Previous month';
      /**
       * A label for the next month button (used by screen readers).
       */

      this.nextMonthLabel = 'Next month';
      /**
       * A label for the previous year button (used by screen readers).
       */

      this.prevYearLabel = 'Previous year';
      /**
       * A label for the next year button (used by screen readers).
       */

      this.nextYearLabel = 'Next year';
      /**
       * A label for the previous multi-year button (used by screen readers).
       */

      this.prevMultiYearLabel = 'Previous 20 years';
      /**
       * A label for the next multi-year button (used by screen readers).
       */

      this.nextMultiYearLabel = 'Next 20 years';
      /**
       * A label for the 'switch to month view' button (used by screen readers).
       */

      this.switchToMonthViewLabel = 'Choose date';
      /**
       * A label for the 'switch to year view' button (used by screen readers).
       */

      this.switchToMultiYearViewLabel = 'Choose month and year';
    };

    NxDatepickerIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} provider
     * @return {?}
     */

    function createMissingDateImplError$1(provider) {
      return Error("NxDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: NxNativeDateModule, NxMomentDateModule, or provide a " + "custom implementation.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */


    var NxCalendarCell =
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?=} ariaLabel
     * @param {?=} enabled
     */
    function NxCalendarCell(value, displayValue, ariaLabel, enabled) {
      _classCallCheck(this, NxCalendarCell);

      this.value = value;
      this.displayValue = displayValue;
      this.ariaLabel = ariaLabel;
      this.enabled = enabled;
    };
    /**
     * An internal component used to display calendar data in a table.
     * \@docs-private
     */


    var NxCalendarBodyComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function NxCalendarBodyComponent(_elementRef, _ngZone) {
        _classCallCheck(this, NxCalendarBodyComponent);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * The number of columns in the table.
         */

        this.numCols = 7;
        /**
         * Whether to allow selection of disabled cells.
         */

        this.allowDisabledSelection = false;
        /**
         * The cell number of the active cell in the table.
         */

        this.activeCell = 0;
        /**
         * The items to display in the first row in the offset space.
         */

        this.previousItems = [];
        /**
         * The items to display in the last row in the offset space.
         */

        this.followingItems = [[]];
        /**
         * Emits when a new value is selected.
         */

        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
      }
      /**
       * @param {?} cell
       * @return {?}
       */


      _createClass(NxCalendarBodyComponent, [{
        key: "_cellClicked",
        value: function _cellClicked(cell) {
          if (!this.allowDisabledSelection && !cell.enabled) {
            return;
          }

          this.selectedValueChange.emit(cell.value);
        }
        /**
         * The number of blank cells to put at the beginning for the first row.
         * @return {?}
         */

      }, {
        key: "_isActiveCell",

        /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
        value: function _isActiveCell(rowIndex, colIndex) {
          /** @type {?} */
          var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

          if (rowIndex) {
            cellNumber -= this._firstRowOffset;
          }

          return cellNumber === this.activeCell;
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          var _this5 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this5._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this5._elementRef.nativeElement.querySelector('.nx-calendar-body-active').focus();
            });
          });
        }
      }, {
        key: "_firstRowOffset",
        get: function get() {
          return this.rows && this.rows.length && this.rows[0].length ? this.numCols - this.rows[0].length : 0;
        }
        /**
         * The number of blank cells to put at the end of the last filled row.
         * @return {?}
         */

      }, {
        key: "_lastRowOffset",
        get: function get() {
          return this.rows && this.rows.length && this.rows[this.rows.length - 1].length ? this.numCols - this.rows[this.rows.length - 1].length : 0;
        }
        /**
         * The index of the last row.
         * @return {?}
         */

      }, {
        key: "_lastRowIndex",
        get: function get() {
          return this.rows && this.rows.length ? this.rows.length - 1 : 0;
        }
        /**
         * The following full rows to display and fill up the calendar.
         * @return {?}
         */

      }, {
        key: "_followingRows",
        get: function get() {
          if (this.followingItems && this.followingItems.length) {
            // if first row is not a full row => display them in offset space
            if (this.followingItems[0].length < this.numCols) {
              return this.followingItems.slice(1, this.followingItems.length);
            }

            return this.followingItems;
          }

          return [];
        }
      }]);

      return NxCalendarBodyComponent;
    }();

    NxCalendarBodyComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        // tslint:disable-next-line:component-selector
        selector: '[nx-calendar-body]',
        template: "<!-- Create the first and last row separately so we can include special spacer cells. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <ng-container *ngIf=\"rowIndex === 0\">\n    <td *ngFor=\"let item of previousItems\"\n        aria-hidden=\"true\"\n        class=\"nx-calendar-adjacent-cell\">\n      <div aria-hidden=\"true\"\n           class=\"nx-calendar-adjacent-cell-content\">\n        {{ item.displayValue }}\n      </div>\n    </td>\n  </ng-container>\n\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"nx-calendar-body-cell\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [class.nx-calendar-body-disabled]=\"!item.enabled\"\n      [class.nx-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      (click)=\"_cellClicked(item)\"\n      [style.width.%]=\"100 / numCols\">\n    <div class=\"nx-calendar-body-cell-content\"\n         [class.nx-calendar-body-selected]=\"selectedValue === item.value\"\n         [class.nx-calendar-body-today]=\"todayValue === item.value\">\n      {{item.displayValue}}\n    </div>\n  </td>\n\n  <ng-container *ngIf=\"rowIndex === _lastRowIndex && _lastRowOffset\">\n    <td *ngFor=\"let item of followingItems[0]\"\n        aria-hidden=\"true\"\n        class=\"nx-calendar-adjacent-cell\">\n      <div aria-hidden=\"true\"\n           class=\"nx-calendar-adjacent-cell-content\">\n        {{ item.displayValue }}\n      </div>\n    </td>\n  </ng-container>\n\n</tr>\n\n<!-- \n  if there are still elements remaining in 'following-elements', then create some extra rows\n  to fill up the space\n-->\n<tr *ngFor=\"let row of _followingRows\"\n    aria-hidden=\"true\">\n  <td *ngFor=\"let item of row\"\n      class=\"nx-calendar-adjacent-cell\">\n    <div class=\"nx-calendar-adjacent-cell-content\">\n      {{ item.displayValue }}\n    </div>\n  </td>\n</tr>\n",
        host: {
          'class': 'nx-calendar-body',
          'role': 'grid',
          'attr.aria-readonly': 'true'
        },
        exportAs: 'nxCalendarBody',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [".nx-calendar-adjacent-cell,.nx-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;vertical-align:text-bottom}.nx-calendar-body-cell{cursor:pointer}.nx-calendar-body-disabled{cursor:default}.nx-calendar-body-cell-content{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:40px;height:40px;margin:0 auto;font-size:16px;font-weight:600;color:#414141;border-radius:50%;line-height:1;box-shadow:0 0 0 6px transparent}.nx-calendar-body-cell-content.nx-calendar-body-selected{background-color:#007ab3;color:#fff}.nx-calendar-body-disabled>.nx-calendar-body-cell-content:not(.nx-calendar-body-selected){color:#c2c2c2;font-weight:400}.nx-calendar-body-active:not(.nx-calendar-body-disabled)>.nx-calendar-body-cell-content:not(.nx-calendar-body-selected),:not(.nx-calendar-body-disabled):hover>.nx-calendar-body-cell-content:not(.nx-calendar-body-selected){background-color:#ececec;color:#414141}:host-context([data-whatinput=keyboard]) .nx-calendar-body-cell:focus .nx-calendar-body-cell-content{box-shadow:0 0 0 2px #fff,0 0 0 6px #009de6}:host-context([data-whatinput=keyboard]) .nx-calendar-body-cell:focus.nx-calendar-body-disabled .nx-calendar-body-cell-content{color:#c2c2c2}:host-context([data-whatinput=keyboard]) .nx-calendar-body-cell:focus .nx-calendar-body-cell-content:not(.nx-calendar-body-selected){background-color:#fff}.nx-calendar-adjacent-cell-content{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:40px;height:40px;margin:0 auto;font-size:16px;font-weight:400;color:#c2c2c2;border-radius:50%;line-height:1}"]
      }]
    }];
    /** @nocollapse */

    NxCalendarBodyComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgZone"]
      }];
    };

    NxCalendarBodyComponent.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      rows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      todayValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selectedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      numCols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      allowDisabledSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      activeCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      previousItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      followingItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selectedValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */

    var DAYS_PER_WEEK = 7;
    /** @type {?} */

    var TOTAL_DAYS_TO_DISPLAY = 6 * DAYS_PER_WEEK;
    /**
     * An internal component used to display a single month in the datepicker.
     * \@docs-private
     * @template D
     */

    var NxMonthViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateFormats
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function NxMonthViewComponent(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        _classCallCheck(this, NxMonthViewComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new date is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */

        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Number of days that should be displayed in one row.
         */

        this._numCols = 7;

        if (!this._dateAdapter) {
          throw createMissingDateImplError$1('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError$1('MAT_DATE_FORMATS');
        }
        /** @type {?} */


        var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        /** @type {?} */


        var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        /** @type {?} */


        var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.

        /** @type {?} */


        var weekdays = longWeekdays.map(
        /**
        * @param {?} long
        * @param {?} i
        * @return {?}
        */
        function (long, i) {
          return {
            long: long,
            narrow: narrowWeekdays[i]
          };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this month view (everything other than the month and year is ignored).
       * @return {?}
       */


      _createClass(NxMonthViewComponent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._init();

          this._focusActiveCell();
        }
        /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_dateSelected",
        value: function _dateSelected(date) {
          if (this._selectedDate !== date) {
            /** @type {?} */
            var selectedYear = this._dateAdapter.getYear(this.activeDate);
            /** @type {?} */


            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */


            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

            this.selectedChange.emit(selectedDate);
          }

          this._userSelection.emit();
        }
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -this._numCols);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._numCols);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
              this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
              this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                this._dateSelected(this._dateAdapter.getDate(this._activeDate));

                this._userSelection.emit(); // Prevent unexpected default actions such as form submission.


                event.preventDefault();
              }

              return;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * Initializes this month view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          this._selectedDate = this._getDateInCurrentMonth(this.selected);
          this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
          this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
          /** @type {?} */

          var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

          this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

          this._createWeekCells();

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @private
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._nxCalendarBody._focusActiveCell();
        }
        /**
         * Creates NxCalendarCells for the dates in this month.
         * @private
         * @return {?}
         */

      }, {
        key: "_createWeekCells",
        value: function _createWeekCells() {
          /** @type {?} */
          var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
          /** @type {?} */


          var dateNames = this._dateAdapter.getDateNames();

          this._weeks = [[]];

          for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell === DAYS_PER_WEEK) {
              this._weeks.push([]);

              cell = 0;
            }
            /** @type {?} */


            var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            /** @type {?} */


            var enabled = this._shouldEnableDate(date);
            /** @type {?} */


            var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);

            this._weeks[this._weeks.length - 1].push(new NxCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
          }
        }
        /**
         * Date filter for the month
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_shouldEnableDate",
        value: function _shouldEnableDate(date) {
          return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
        }
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_getDateInCurrentMonth",
        value: function _getDateInCurrentMonth(date) {
          return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
        }
        /**
         * Checks whether the 2 dates are non-null and fall within the same month of the same year.
         * @private
         * @param {?} d1
         * @param {?} d2
         * @return {?}
         */

      }, {
        key: "_hasSameMonthAndYear",
        value: function _hasSameMonthAndYear(d1, d2) {
          return !!(d1 && d2 && this._dateAdapter.getMonth(d1) === this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) === this._dateAdapter.getYear(d2));
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
        /**
         * The last days of the previous month that should be displayed
         * in the first row of the calendar.
         * @return {?}
         */

      }, {
        key: "_getLastDaysOfPreviousMonth",
        value: function _getLastDaysOfPreviousMonth() {
          /** @type {?} */
          var firstDayOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
          /** @type {?} */


          var firstDayOfPreviousItems = this._dateAdapter.addCalendarDays(firstDayOfMonth, -this._firstWeekOffset);

          return this._getRowOfDays(firstDayOfPreviousItems, this._firstWeekOffset);
        }
        /**
         * The first days of the following month that should be displayed
         * after the days of the current month. After filling up the last
         * row of the current month, additional rows are added, so that a
         * total of 42 days (6 rows/weeks) is displayed.
         * @return {?}
         */

      }, {
        key: "_getFirstDaysOfFollowingMonth",
        value: function _getFirstDaysOfFollowingMonth() {
          /** @type {?} */
          var followingDays = [];
          /** @type {?} */

          var firstDayOfNextMonth = this._dateAdapter.addCalendarMonths(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1), 1); // there should be displayed a total of 7 * 6 items

          /** @type {?} */


          var followingDaysCount = TOTAL_DAYS_TO_DISPLAY - this._firstWeekOffset - this._dateAdapter.getNumDaysInMonth(this.activeDate);
          /** @type {?} */


          var offsetItems = followingDaysCount % 7; // add a non-full row to following rows.
          // These items will fill up the last incomplete row of the current month.

          if (offsetItems > 0) {
            /** @type {?} */
            var offsetRow = this._getRowOfDays(firstDayOfNextMonth, offsetItems);

            followingDays.push(offsetRow);
          }
          /** @type {?} */


          var remainingDays = followingDaysCount - offsetItems;
          /** @type {?} */

          var firstDayInRow = this._dateAdapter.addCalendarDays(firstDayOfNextMonth, offsetItems); // fill remaining rows if needed


          while (remainingDays > 0) {
            followingDays.push(this._getRowOfDays(firstDayInRow, this._numCols));
            firstDayInRow = this._dateAdapter.addCalendarDays(firstDayInRow, this._numCols);
            remainingDays -= this._numCols;
          }

          return followingDays;
        }
        /**
         * Returns a row with days, beginning with the date of `firstDayInRow`-parameter.
         * The returned row contains `daysCount` elements.
         * @param {?} firstDayInRow
         * @param {?} daysCount
         * @return {?}
         */

      }, {
        key: "_getRowOfDays",
        value: function _getRowOfDays(firstDayInRow, daysCount) {
          /** @type {?} */
          var nextRow = [];
          /** @type {?} */

          var dateNames = this._dateAdapter.getDateNames();

          for (var addDays = 0; addDays < daysCount; addDays++) {
            /** @type {?} */
            var day = this._dateAdapter.getDate(this._dateAdapter.addCalendarDays(firstDayInRow, addDays));

            nextRow.push(new NxCalendarCell(day, dateNames[day - 1]));
          }

          return nextRow;
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedDate = this._getDateInCurrentMonth(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return NxMonthViewComponent;
    }();

    NxMonthViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-month-view',
        template: "<table class=\"nx-calendar-table\">\n  <thead class=\"nx-calendar-table-head\">\n    <tr>\n      <th\n        class=\"nx-calendar-table-header\"\n        *ngFor=\"let day of _weekdays\"\n        [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr>\n    <tr>\n  </thead>\n  <tbody nx-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [previousItems]=\"_getLastDaysOfPreviousMonth()\"\n         [followingItems]=\"_getFirstDaysOfFollowingMonth()\"\n         [todayValue]=\"_todayDate\"\n         [numCols]=\"_numCols\"\n         [selectedValue]=\"_selectedDate\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
        exportAs: 'nxMonthView',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [".nx-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.nx-calendar-table-header{text-align:center;color:#c2c2c2;font-size:16px;line-height:24px;height:40px;font-weight:600}"]
      }]
    }];
    /** @nocollapse */

    NxMonthViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [NX_DATE_FORMATS]
        }]
      }, {
        type: NxDateAdapter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }];
    };

    NxMonthViewComponent.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      _userSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      _nxCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxCalendarBodyComponent]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */

    var yearsPerPage = 20;
    /** @type {?} */

    var yearsPerRow = 4;
    /**
     * An internal component used to display a year selector in the datepicker.
     * \@docs-private
     * @template D
     */

    var NxMultiYearViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function NxMultiYearViewComponent(_changeDetectorRef, _dateAdapter, _dir) {
        _classCallCheck(this, NxMultiYearViewComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new year is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError$1('DateAdapter');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this multi-year view (everything other than the year is ignored).
       * @return {?}
       */


      _createClass(NxMultiYearViewComponent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._init();

          this._focusActiveCell();
        }
        /**
         * Initializes this multi-year view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this6 = this;

          this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
          /** @type {?} */

          var activeYear = this._dateAdapter.getYear(this._activeDate);
          /** @type {?} */


          var activeOffset = activeYear % yearsPerPage;
          this._years = [];

          for (var i = 0, row = []; i < yearsPerPage; i++) {
            row.push(activeYear - activeOffset + i);

            if (row.length === yearsPerRow) {
              this._years.push(row.map(
              /**
              * @param {?} year
              * @return {?}
              */
              function (year) {
                return _this6._createCellForYear(year);
              }));

              row = [];
            }
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Handles when a new year is selected.
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_yearSelected",
        value: function _yearSelected(year) {
          this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
          /** @type {?} */

          var month = this._dateAdapter.getMonth(this.activeDate);
          /** @type {?} */


          var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

          this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        }
        /**
         * Handles keydown events on the calendar body when calendar is in multi-year view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -this._dateAdapter.getYear(this._activeDate) % yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - this._dateAdapter.getYear(this._activeDate) % yearsPerPage - 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              this._yearSelected(this._dateAdapter.getYear(this._activeDate));

              break;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getActiveCell",
        value: function _getActiveCell() {
          return this._dateAdapter.getYear(this.activeDate) % yearsPerPage;
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @private
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._nxCalendarBody._focusActiveCell();
        }
        /**
         * Creates an NxCalendarCell for the given year.
         * @private
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_createCellForYear",
        value: function _createCellForYear(year) {
          /** @type {?} */
          var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));

          return new NxCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
        }
        /**
         * Whether the given year is enabled.
         * @private
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_shouldEnableYear",
        value: function _shouldEnableYear(year) {
          // disable if the year is greater than maxDate lower than minDate
          if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
            return false;
          } // enable if it reaches here and there's no filter defined


          if (!this.dateFilter) {
            return true;
          }
          /** @type {?} */


          var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


          for (var date = firstOfYear; this._dateAdapter.getYear(date) === year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
              return true;
            }
          }

          return false;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (Math.floor(this._dateAdapter.getYear(oldActiveDate) / yearsPerPage) !== Math.floor(this._dateAdapter.getYear(this._activeDate) / yearsPerPage)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return NxMultiYearViewComponent;
    }();

    NxMultiYearViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-multi-year-view',
        template: "<table class=\"nx-calendar-table\">\n  <tbody nx-calendar-body\n         allowDisabledSelection=\"true\"\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [selectedValue]=\"_selectedYear\"\n         [numCols]=\"4\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
        exportAs: 'nxMultiYearView',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [".nx-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}:host ::ng-deep .nx-calendar-body .nx-calendar-body-cell-content{margin:0 17.33333px 8px}:host ::ng-deep .nx-calendar-body tr .nx-calendar-body-cell:first-child .nx-calendar-body-cell-content{margin-left:8px}:host ::ng-deep .nx-calendar-body tr .nx-calendar-body-cell:last-child .nx-calendar-body-cell-content{margin-right:8px}"]
      }]
    }];
    /** @nocollapse */

    NxMultiYearViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectorRef"]
      }, {
        type: NxDateAdapter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }];
    };

    NxMultiYearViewComponent.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      _nxCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxCalendarBodyComponent]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * An internal component used to display a single year in the datepicker.
     * \@docs-private
     * @template D
     */

    var NxYearViewComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateFormats
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function NxYearViewComponent(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        _classCallCheck(this, NxYearViewComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new month is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this._numCols = 3;

        if (!this._dateAdapter) {
          throw createMissingDateImplError$1('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError$1('MAT_DATE_FORMATS');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this year view (everything other than the year is ignored).
       * @return {?}
       */


      _createClass(NxYearViewComponent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._init();

          this._focusActiveCell();
        }
        /**
         * Handles when a new month is selected.
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_monthSelected",
        value: function _monthSelected(month) {
          /** @type {?} */
          var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

          this.monthSelected.emit(normalizedDate);
          /** @type {?} */

          var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

          this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        }
        /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._numCols);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, this._numCols);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              this._monthSelected(this._dateAdapter.getMonth(this._activeDate));

              break;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * Initializes this year view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this7 = this;

          this._selectedMonth = this._getMonthInCurrentYear(this.selected);
          this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
          this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
          /** @type {?} */

          var monthNames = this._dateAdapter.getMonthNames('short');

          this._months = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]].map(
          /**
          * @param {?} row
          * @return {?}
          */
          function (row) {
            return row.map(
            /**
            * @param {?} month
            * @return {?}
            */
            function (month) {
              return _this7._createCellForMonth(month, monthNames[month]);
            });
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @private
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._nxCalendarBody._focusActiveCell();
        }
        /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_getMonthInCurrentYear",
        value: function _getMonthInCurrentYear(date) {
          return date && this._dateAdapter.getYear(date) === this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
        }
        /**
         * Creates an NxCalendarCell for the given month.
         * @private
         * @param {?} month
         * @param {?} monthName
         * @return {?}
         */

      }, {
        key: "_createCellForMonth",
        value: function _createCellForMonth(month, monthName) {
          /** @type {?} */
          var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);

          return new NxCalendarCell(month, monthName, ariaLabel, this._shouldEnableMonth(month));
        }
        /**
         * Whether the given month is enabled.
         * @private
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_shouldEnableMonth",
        value: function _shouldEnableMonth(month) {
          /** @type {?} */
          var activeYear = this._dateAdapter.getYear(this.activeDate);

          if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
          }

          if (!this.dateFilter) {
            return true;
          }
          /** @type {?} */


          var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


          for (var date = firstOfMonth; this._dateAdapter.getMonth(date) === month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
              return true;
            }
          }

          return false;
        }
        /**
         * Tests whether the combination month/year is after this.maxDate, considering
         * just the month and year of this.maxDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_isYearAndMonthAfterMaxDate",
        value: function _isYearAndMonthAfterMaxDate(year, month) {
          if (this.maxDate) {
            /** @type {?} */
            var maxYear = this._dateAdapter.getYear(this.maxDate);
            /** @type {?} */


            var maxMonth = this._dateAdapter.getMonth(this.maxDate);

            return year > maxYear || year === maxYear && month > maxMonth;
          }

          return false;
        }
        /**
         * Tests whether the combination month/year is before this.minDate, considering
         * just the month and year of this.minDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_isYearAndMonthBeforeMinDate",
        value: function _isYearAndMonthBeforeMinDate(year, month) {
          if (this.minDate) {
            /** @type {?} */
            var minYear = this._dateAdapter.getYear(this.minDate);
            /** @type {?} */


            var minMonth = this._dateAdapter.getMonth(this.minDate);

            return year < minYear || year === minYear && month < minMonth;
          }

          return false;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return NxYearViewComponent;
    }();

    NxYearViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-year-view',
        template: "<table class=\"nx-calendar-table\">\n  <tbody nx-calendar-body\n         allowDisabledSelection=\"true\"\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth\"\n         [selectedValue]=\"_selectedMonth\"\n         [numCols]=\"_numCols\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
        exportAs: 'nxYearView',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [".nx-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}:host ::ng-deep .nx-calendar-body .nx-calendar-body-cell-content{margin:0 36px 8px}:host ::ng-deep .nx-calendar-body tr .nx-calendar-body-cell:first-child .nx-calendar-body-cell-content{margin-left:8px}:host ::ng-deep .nx-calendar-body tr .nx-calendar-body-cell:last-child .nx-calendar-body-cell-content{margin-right:8px}"]
      }]
    }];
    /** @nocollapse */

    NxYearViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [NX_DATE_FORMATS]
        }]
      }, {
        type: NxDateAdapter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }];
    };

    NxYearViewComponent.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      _nxCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxCalendarBodyComponent]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */

    var yearsPerPage$1 = 20;
    /**
     * A calendar that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */

    var NxCalendarComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _intl
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} changeDetectorRef
       */
      function NxCalendarComponent(_intl, _dateAdapter, _dateFormats, changeDetectorRef) {
        _classCallCheck(this, NxCalendarComponent);

        this._intl = _intl;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /**
         * Whether the calendar should be started in month or year view.
         */

        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */

        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError$1('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError$1('MAT_DATE_FORMATS');
        }

        this._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
      }
      /**
       * A date representing the period (month or year) to start the calendar in.
       * @return {?}
       */


      _createClass(NxCalendarComponent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._activeDate = this.startAt || this._dateAdapter.today();
          this._currentView = this.startView;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var change = changes.minDate || changes.maxDate || changes.dateFilter;

          if (change && !change.firstChange) {
            /** @type {?} */
            var view = this.monthView || this.yearView || this.multiYearView;

            if (view) {
              view._init();
            }
          }
        }
        /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_dateSelected",
        value: function _dateSelected(date) {
          if (!this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
          }
        }
        /**
         * Handles year selection in the multiyear view.
         * @param {?} normalizedYear
         * @return {?}
         */

      }, {
        key: "_yearSelectedInMultiYearView",
        value: function _yearSelectedInMultiYearView(normalizedYear) {
          this.yearSelected.emit(normalizedYear);
        }
        /**
         * Handles month selection in the year view.
         * @param {?} normalizedMonth
         * @return {?}
         */

      }, {
        key: "_monthSelectedInYearView",
        value: function _monthSelectedInYearView(normalizedMonth) {
          this.monthSelected.emit(normalizedMonth);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_userSelected",
        value: function _userSelected() {
          this._userSelection.emit();
        }
        /**
         * Handles year/month selection in the multi-year/year views.
         * @param {?} date
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_goToDateInView",
        value: function _goToDateInView(date, view) {
          this._activeDate = date;
          this._currentView = view;
        }
        /**
         * Handles user clicks on the period label.
         * @return {?}
         */

      }, {
        key: "_changeViewClicked",
        value: function _changeViewClicked() {
          this._currentView = this._currentView === 'month' ? 'multi-year' : 'month';
        }
        /**
         * Handles user clicks on the previous button.
         * @return {?}
         */

      }, {
        key: "_previousClicked",
        value: function _previousClicked() {
          this._activeDate = this._currentView === 'month' ? this._dateAdapter.addCalendarMonths(this._activeDate, -1) : this._dateAdapter.addCalendarYears(this._activeDate, this._currentView === 'year' ? -1 : -yearsPerPage$1);
        }
        /**
         * Handles user clicks on the next button.
         * @return {?}
         */

      }, {
        key: "_nextClicked",
        value: function _nextClicked() {
          this._activeDate = this._currentView === 'month' ? this._dateAdapter.addCalendarMonths(this._activeDate, 1) : this._dateAdapter.addCalendarYears(this._activeDate, this._currentView === 'year' ? 1 : yearsPerPage$1);
        }
        /**
         * Whether the previous period button is enabled.
         * @return {?}
         */

      }, {
        key: "_previousEnabled",
        value: function _previousEnabled() {
          if (!this.minDate) {
            return true;
          }

          return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
        }
        /**
         * Whether the next period button is enabled.
         * @return {?}
         */

      }, {
        key: "_nextEnabled",
        value: function _nextEnabled() {
          return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
        }
        /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @private
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */

      }, {
        key: "_isSameView",
        value: function _isSameView(date1, date2) {
          if (this._currentView === 'month') {
            return this._dateAdapter.getYear(date1) === this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) === this._dateAdapter.getMonth(date2);
          }

          if (this._currentView === 'year') {
            return this._dateAdapter.getYear(date1) === this._dateAdapter.getYear(date2);
          } // Otherwise we are in 'multi-year' view.


          return Math.floor(this._dateAdapter.getYear(date1) / yearsPerPage$1) === Math.floor(this._dateAdapter.getYear(date2) / yearsPerPage$1);
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "startAt",
        get: function get() {
          return this._startAt;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */

      }, {
        key: "_activeDate",
        get: function get() {
          return this._clampedActiveDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        }
        /**
         * The label for the current calendar view.
         * @return {?}
         */

      }, {
        key: "_periodButtonText",
        get: function get() {
          if (this._currentView === 'month') {
            return this._dateAdapter.format(this._activeDate, this._dateFormats.display.monthYearLabel);
          }

          if (this._currentView === 'year') {
            return this._dateAdapter.getYearName(this._activeDate);
          }
          /** @type {?} */


          var activeYear = this._dateAdapter.getYear(this._activeDate);
          /** @type {?} */


          var firstYearInView = this._dateAdapter.getYearName(this._dateAdapter.createDate(activeYear - activeYear % yearsPerPage$1, 0, 1));
          /** @type {?} */


          var lastYearInView = this._dateAdapter.getYearName(this._dateAdapter.createDate(activeYear + yearsPerPage$1 - 1 - activeYear % yearsPerPage$1, 0, 1));

          return "".concat(firstYearInView, " \u2013 ").concat(lastYearInView);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_periodButtonLabel",
        get: function get() {
          return this._currentView === 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
        }
        /**
         * The label for the the previous button.
         * @return {?}
         */

      }, {
        key: "_prevButtonLabel",
        get: function get() {
          return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
          }[this._currentView];
        }
        /**
         * The label for the the next button.
         * @return {?}
         */

      }, {
        key: "_nextButtonLabel",
        get: function get() {
          return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
          }[this._currentView];
        }
      }]);

      return NxCalendarComponent;
    }();

    NxCalendarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-calendar',
        template: "<div class=\"nx-calendar-header\">\n  <div class=\"nx-calendar-controls\">\n\n    <button class=\"nx-calendar-previous-button\"\n            [disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\"\n            [attr.aria-label]=\"_prevButtonLabel\">\n            <nx-icon name=\"chevron-left\"></nx-icon>\n    </button>\n\n    <span class=\"nx-calendar-period-label\">\n      {{_periodButtonText}}\n    </span>\n\n    <button class=\"nx-calendar-next-button\"\n            [disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\"\n            [attr.aria-label]=\"_nextButtonLabel\">\n            <nx-icon name=\"chevron-right\"></nx-icon>\n    </button>\n  </div>\n\n  <div class=\"nx-calendar-view-controls\">\n    <button\n        class=\"nx-calendar-change-view-button\"\n        (click)=\"_changeViewClicked()\" [attr.aria-label]=\"_periodButtonLabel\">\n      {{_periodButtonLabel}}\n    </button>\n  </div>\n</div>\n\n<div class=\"nx-calendar-content\" [ngSwitch]=\"_currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <nx-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"_activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (selectedChange)=\"_dateSelected($event)\"\n      (_userSelection)=\"_userSelected()\">\n  </nx-month-view>\n\n  <nx-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"_activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </nx-year-view>\n\n  <nx-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"_activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </nx-multi-year-view>\n</div>\n",
        host: {
          'class': 'nx-calendar'
        },
        exportAs: 'nxCalendar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [".nx-calendar-content{width:280px;margin:16px auto 0}.nx-calendar-next-button,.nx-calendar-previous-button{background-color:transparent;border:none;cursor:pointer;padding:0;line-height:24px;font-size:24px;color:#006192}.nx-calendar-next-button:focus,.nx-calendar-previous-button:focus{outline:0}.nx-calendar-controls{display:flex;justify-content:center;height:24px}.nx-calendar-period-label{width:216px;font-size:20px;line-height:24px;font-weight:600;color:#414141;text-align:center;letter-spacing:.2px}.nx-calendar-view-controls{text-align:center;height:24px}.nx-calendar-change-view-button{border:none;background-color:transparent;cursor:pointer;margin:8px 0 0;color:#006192;font-size:16px;line-height:16px;font-weight:700;height:16px}.nx-calendar-change-view-button:focus{outline:0}:host-context([data-whatinput=keyboard]) .nx-calendar-change-view-button:focus,:host-context([data-whatinput=keyboard]) .nx-calendar-next-button:focus,:host-context([data-whatinput=keyboard]) .nx-calendar-previous-button:focus{box-shadow:0 0 0 2px #fff,0 0 0 6px #009de6;border-radius:4px}button::-moz-focus-inner{border:0}"]
      }]
    }];
    /** @nocollapse */

    NxCalendarComponent.ctorParameters = function () {
      return [{
        type: NxDatepickerIntl
      }, {
        type: NxDateAdapter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [NX_DATE_FORMATS]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectorRef"]
      }];
    };

    NxCalendarComponent.propDecorators = {
      startAt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      startView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      _userSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      monthView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxMonthViewComponent]
      }],
      yearView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxYearViewComponent]
      }],
      multiYearView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxMultiYearViewComponent]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate a unique ID for each datepicker instance.
     * @type {?}
     */

    var datepickerUid = 0;
    /**
     * Injection token that determines the scroll handling while the calendar is open.
     * @type {?}
     */

    var NX_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["InjectionToken"]('nx-datepicker-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER = {
      provide: NX_DATEPICKER_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /** @type {?} */

    var DATEPICKER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["InjectionToken"]('DATEPICKER_DEFAULT_OPTIONS');
    /**
     * \@docs-private
     * Component used as the content for the datepicker dialog and popup. We use this instead of using
     * NxCalendarComponent directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the calendar itself in the
     * future. (e.g. confirmation buttons).
     * @template D
     */

    var NxDatepickerContentComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _intl
       * @param {?} elementRef
       * @param {?} _ngZone
       */
      function NxDatepickerContentComponent(_intl, elementRef, _ngZone) {
        _classCallCheck(this, NxDatepickerContentComponent);

        this._intl = _intl;
        this.elementRef = elementRef;
        this._ngZone = _ngZone;
      }
      /**
       * @return {?}
       */


      _createClass(NxDatepickerContentComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._focusActiveCell();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @private
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          var _this8 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this8._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this8.elementRef.nativeElement.querySelector('.nx-calendar-body-active').focus();
            });
          });
        }
      }]);

      return NxDatepickerContentComponent;
    }();

    NxDatepickerContentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-datepicker-content',
        template: "<div class=\"nx-datepicker-header\">\n    <button (click)=\"datepicker.close()\" class=\"nx-datepicker-close\">\n        <nx-icon name=\"close\"></nx-icon>\n    </button>\n</div>\n\n<nx-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker.minDate\"\n    [maxDate]=\"datepicker.maxDate\"\n    [dateFilter]=\"datepicker.dateFilter\"\n    [selected]=\"datepicker.selected\"\n    (selectedChange)=\"datepicker.select($event)\"\n    (yearSelected)=\"datepicker.selectYear($event)\"\n    (monthSelected)=\"datepicker.selectMonth($event)\"\n    (_userSelection)=\"datepicker.close()\">\n</nx-calendar>\n",
        host: {
          'class': 'nx-datepicker-content'
        },
        exportAs: 'nxDatepickerContent',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [":host{background-color:#fff;display:flex;flex-flow:column nowrap;box-shadow:0 8px 24px rgba(65,65,65,.35);border:1px solid #d9d9d9;border-radius:4px}.nx-datepicker-header{padding:calc(16px - 1px) 16px 16px;display:flex;height:55px}.nx-datepicker-close{background-color:transparent;border:none;margin-left:auto;cursor:pointer;padding:0;line-height:24px;font-size:24px;color:#006192;outline:0}nx-calendar{width:calc(7 * 40px + 2 * 32px - 2 * 1px);height:calc(48px + 16px + 7 * 40px + 32px - 1px)}"]
      }]
    }];
    /** @nocollapse */

    NxDatepickerContentComponent.ctorParameters = function () {
      return [{
        type: NxDatepickerIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgZone"]
      }];
    };

    NxDatepickerContentComponent.propDecorators = {
      _calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"],
        args: [NxCalendarComponent]
      }]
    }; // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
    // template reference variables (e.g. #d vs #d="nxDatepicker"). We can change this to a directive
    // if angular adds support for `exportAs: '$implicit'` on directives.

    /**
     * Component responsible for managing the datepicker popup/dialog.
     * @template D
     */

    var NxDatepickerComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} _scrollStrategy
       * @param {?} _dateAdapter
       * @param {?} _dir
       * @param {?} _document
       */
      function NxDatepickerComponent(_overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
        _classCallCheck(this, NxDatepickerComponent);

        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */

        this.startView = 'month';
        /**
         * \@docs-private
         */

        this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when the datepicker has been opened.
         */

        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */

        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this._opened = false;
        /**
         * \@docs-private
         * The id for the datepicker calendar.
         */

        this.id = "nx-datepicker-".concat(datepickerUid++);
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */

        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */

        this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */

        this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError$1('DateAdapter');
        }
      }
      /**
       * The date to open the calendar initially.
       * @return {?}
       */


      _createClass(NxDatepickerComponent, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.close();

          this._inputSubscription.unsubscribe();

          this._disabledChange.complete();

          if (this._popupRef) {
            this._popupRef.dispose();

            this._popupComponentRef = null;
          }
        }
        /**
         * \@docs-private
         * Selects the given date
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(date) {
          /** @type {?} */
          var oldValue = this.selected;
          this.selected = date;

          if (!this._dateAdapter.sameDate(oldValue, this.selected)) {
            this.selectedChanged.emit(date);
          }
        }
        /**
         * \@docs-private
         * Emits the selected year in multiyear view
         * @param {?} normalizedYear
         * @return {?}
         */

      }, {
        key: "selectYear",
        value: function selectYear(normalizedYear) {
          this.yearSelected.emit(normalizedYear);
        }
        /**
         * \@docs-private
         * Emits selected month in year view
         * @param {?} normalizedMonth
         * @return {?}
         */

      }, {
        key: "selectMonth",
        value: function selectMonth(normalizedMonth) {
          this.monthSelected.emit(normalizedMonth);
        }
        /**
         * \@docs-private
         * Register an input with this datepicker.
         * @param {?} input The datepicker input to register with this datepicker.
         * @return {?}
         */

      }, {
        key: "registerInput",
        value: function registerInput(input) {
          var _this9 = this;

          if (this._datepickerInput) {
            throw Error('A NxDatepicker can only be associated with a single input.');
          }

          this._datepickerInput = input;
          this._inputSubscription = this._datepickerInput._valueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this9.selected = value;
          });
        }
        /**
         * \@docs-private
         * Register an input toggle with this datepicker.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "registerToggle",
        value: function registerToggle(toggle) {
          if (this._toggleButton) {
            throw Error('A NxDatepicker can only be associated with a single toggle button.');
          }

          this._toggleButton = toggle;
        }
        /**
         * \@docs-private
         * Open the calendar.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (this._opened || this.disabled) {
            return;
          }

          if (!this._datepickerInput) {
            throw Error('Attempted to open an NxDatepicker with no associated input.');
          }

          if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
          }

          this._openAsPopup();

          this._opened = true;
          this.openedStream.emit();
        }
        /**
         * \@docs-private
         * Close the calendar.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          var _this10 = this;

          if (!this._opened) {
            return;
          }

          if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
          }

          if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
          }
          /** @type {?} */


          var completeClose =
          /**
          * @return {?}
          */
          function completeClose() {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this10._opened) {
              _this10._opened = false;

              _this10.closedStream.emit();

              _this10._focusedElementBeforeOpen = null;
            }
          };

          if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();

            setTimeout(completeClose);
          } else {
            completeClose();
          } // if the datepicker toggle button is not focusable, focus the associated input.


          if (this._toggleButton.tabindex < 0) {
            this._datepickerInput._focus();
          }
        }
        /**
         * Open the calendar as a popup.
         * @private
         * @return {?}
         */

      }, {
        key: "_openAsPopup",
        value: function _openAsPopup() {
          var _this11 = this;

          if (!this._calendarPortal) {
            this._calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["ComponentPortal"](NxDatepickerContentComponent, this._viewContainerRef);
          }

          if (!this._popupRef) {
            this._createPopup();
          }

          if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this; // Update the position once the calendar has rendered.

            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this11._popupRef.updatePosition();
            });
          }
        }
        /**
         * Create the popup.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPopup",
        value: function _createPopup() {
          var _this12 = this;

          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'nx-overlay-transparent-backdrop',
            direction: this._dir ? this._dir.value : 'ltr',
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'nx-datepicker-popup'
          });
          this._popupRef = this._overlay.create(overlayConfig);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"];
          }))).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this12.close();
          });
        }
        /**
         * Create the popup PositionStrategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPopupPositionStrategy",
        value: function _createPopupPositionStrategy() {
          return this._overlay.position().connectedTo(this._datepickerInput.getConnectedOverlayOrigin(), {
            originX: 'start',
            originY: 'bottom'
          }, {
            overlayX: 'start',
            overlayY: 'top'
          }).withFallbackPosition({
            originX: 'start',
            originY: 'top'
          }, {
            overlayX: 'start',
            overlayY: 'bottom'
          }).withFallbackPosition({
            originX: 'end',
            originY: 'bottom'
          }, {
            overlayX: 'end',
            overlayY: 'top'
          }).withFallbackPosition({
            originX: 'end',
            originY: 'top'
          }, {
            overlayX: 'end',
            overlayY: 'bottom'
          });
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "startAt",
        get: function get() {
          // If an explicit startAt is set we start there, otherwise we start at whatever the currently
          // selected value is.
          return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._disabledChange.next(newValue);
          }
        }
        /**
         * Whether the calendar is open.
         * @return {?}
         */

      }, {
        key: "opened",
        get: function get() {
          return this._opened;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value ? this.open() : this.close();
        }
        /**
         * \@docs-private
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._validSelected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._validSelected = value;
        }
        /**
         * \@docs-private
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._datepickerInput && this._datepickerInput.min;
        }
        /**
         * \@docs-private
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._datepickerInput && this._datepickerInput.max;
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "dateFilter",
        get: function get() {
          return this._datepickerInput && this._datepickerInput._dateFilter;
        }
      }]);

      return NxDatepickerComponent;
    }();

    NxDatepickerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-datepicker',
        template: '',
        exportAs: 'nxDatepicker',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    NxDatepickerComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [NX_DATEPICKER_SCROLL_STRATEGY]
        }]
      }, {
        type: NxDateAdapter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
        }]
      }];
    };

    NxDatepickerComponent.propDecorators = {
      startAt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      startView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"],
        args: ['opened']
      }],
      closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"],
        args: ['closed']
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:member-ordering

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */

    var NX_DATEFIELD_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NxDatefieldDirective;
      }),
      multi: true
    };
    /** @type {?} */

    var NX_DATEFIELD_VALIDATORS = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NxDatefieldDirective;
      }),
      multi: true
    };
    /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use NxDatepickerInputEvent instead.
     * @template D
     */

    var NxDatepickerInputEvent =
    /**
     * @param {?} target
     * @param {?} targetElement
     */
    function NxDatepickerInputEvent(target, targetElement) {
      _classCallCheck(this, NxDatepickerInputEvent);

      this.target = target;
      this.targetElement = targetElement;
      this.value = this.target.value;
    };
    /**
     * Directive used to provide date processing functionality to an input.
     * @template D
     */


    var NxDatefieldDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} _formField
       */
      function NxDatefieldDirective(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this13 = this;

        _classCallCheck(this, NxDatefieldDirective);

        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * \@docs-private
         */

        this.currentFormattedDate = null;
        this._strict = true;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */

        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */

        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */

        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */

        this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._cvaOnChange =
        /**
        * @return {?}
        */
        function () {};

        this._validatorOnChange =
        /**
        * @return {?}
        */
        function () {};

        this._datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"].EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */

        this._parseValidator =
        /**
        * @return {?}
        */
        function () {
          return _this13._lastValueValid ? null : {
            'nxDatefieldParse': {
              'text': _this13._elementRef.nativeElement.value
            }
          };
        };
        /**
         * The form control validator for the min date.
         */


        this._minValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this13._getValidDateOrNull(_this13._dateAdapter.deserialize(control.value));

          return !_this13.min || !controlValue || _this13._dateAdapter.compareDate(_this13.min, controlValue) <= 0 ? null : {
            'nxDatefieldMin': {
              'min': _this13.min,
              'actual': controlValue
            }
          };
        };
        /**
         * The form control validator for the max date.
         */


        this._maxValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this13._getValidDateOrNull(_this13._dateAdapter.deserialize(control.value));

          return !_this13.max || !controlValue || _this13._dateAdapter.compareDate(_this13.max, controlValue) >= 0 ? null : {
            'nxDatefieldMax': {
              'max': _this13.max,
              'actual': controlValue
            }
          };
        };
        /**
         * The form control validator for the date filter.
         */


        this._filterValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this13._getValidDateOrNull(_this13._dateAdapter.deserialize(control.value));

          return !_this13._dateFilter || !controlValue || _this13._dateFilter(controlValue) ? null : {
            'nxDatefieldFilter': true
          };
        };
        /**
         * The combined form control validator for this input.
         */


        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */

        this._lastValueValid = false;

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('NX_DATE_FORMATS');
        } // Update the displayed date when the locale changes.


        this._localeSubscription = _dateAdapter.localeChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this13.value = _this13.value;
        });
      }
      /**
       * The datepicker that this input is associated with.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxDatefieldDirective, [{
        key: "registerDatepicker",

        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        value: function registerDatepicker(value) {
          if (value) {
            this._datepicker = value;

            this._datepicker.registerInput(this);
          }
        }
        /**
         * Function that can be used to filter out dates within the datepicker and invalidate values in the datefield.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "format",

        /**
         * \@docs-private
         * This will force the current value to be parse again by the given DateAdapter.
         * That's a convenience method so you can trigger it manually.
         * @return {?}
         */
        value: function format() {
          this.value = this.value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this14 = this;

          if (this._datepicker) {
            this._datepickerSubscription = this._datepicker.selectedChanged.subscribe(
            /**
            * @param {?} selected
            * @return {?}
            */
            function (selected) {
              _this14.value = selected;

              _this14._cvaOnChange(selected);

              _this14._onTouched();

              _this14.dateInput.emit(new NxDatepickerInputEvent(_this14, _this14._elementRef.nativeElement));

              _this14.dateChange.emit(new NxDatepickerInputEvent(_this14, _this14._elementRef.nativeElement));
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._datepickerSubscription.unsubscribe();

          this._localeSubscription.unsubscribe();

          this._valueChange.complete();

          this._disabledChange.complete();
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._validatorOnChange = fn;
        }
        /**
         * \@docs-private
         * @param {?} c
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(c) {
          return this._validator ? this._validator(c) : null;
        }
        /**
         * \@docs-private
         * @deprecated
         * \@deletion-target 7.0.0 Use `getConnectedOverlayOrigin` instead
         * @return {?}
         */

      }, {
        key: "getPopupConnectionElementRef",
        value: function getPopupConnectionElementRef() {
          return this.getConnectedOverlayOrigin();
        }
        /**
         * \@docs-private
         *
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */

      }, {
        key: "getConnectedOverlayOrigin",
        value: function getConnectedOverlayOrigin() {
          // formfield not yet accessible as we don't have them in a secondary entry point to import yet.
          // return this._elementRef;
          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._cvaOnChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]) {
            this._datepicker.open();

            event.preventDefault();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput(value) {
          /** @type {?} */
          var date = this._dateAdapter.parse(value, this._parseFormat || this._dateFormats.parse.dateInput, this.strict);

          this._lastValueValid = !date || this._dateAdapter.isValid(date);
          date = this._getValidDateOrNull(date);
          this._value = date;

          if (date) {
            this.currentFormattedDate = this._dateAdapter.format(date, this._displayFormat || this._dateFormats.display.dateInput);
          } else {
            this.currentFormattedDate = null;
          }

          this._cvaOnChange(date);

          this._valueChange.emit(date);

          this.dateInput.emit(new NxDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onChange",
        value: function _onChange() {
          this.dateChange.emit(new NxDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        /**
         * @return {?}
         */

      }, {
        key: "_focus",
        value: function _focus() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "datepicker",
        set: function set(value) {
          this.registerDatepicker(value);
        }
      }, {
        key: "datefieldFilter",
        set: function set(value) {
          this._dateFilter = value;

          this._validatorOnChange();
        }
        /**
         * Provide or read the current date. It's type <D> depends on the chosen date implementation
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = this._dateAdapter.deserialize(value);
          this._lastValueValid = !value || this._dateAdapter.isValid(value);
          value = this._getValidDateOrNull(value);
          /** @type {?} */

          var oldDate = this.value;
          this._value = value;
          this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._displayFormat || this._dateFormats.display.dateInput) : '';

          if (!this._dateAdapter.sameDate(oldDate, value)) {
            this._valueChange.emit(value);
          }
        }
        /**
         * Sets the minimum valid date.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

          this._validatorOnChange();
        }
        /**
         * Sets the maximum valid date.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

          this._validatorOnChange();
        }
        /**
         * If supported by the date implementation enable strict parsing (applies to Moment's parse function here)
         * @return {?}
         */

      }, {
        key: "strict",
        get: function get() {
          return this._strict;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strict = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value); // parse given text value again

          this._onInput(this._elementRef.nativeElement.value);
        }
        /**
         * Override the parse format given with parse.dateInput with the token NX_DATE_FORMATS
         * @return {?}
         */

      }, {
        key: "parseFormat",
        get: function get() {
          return this._parseFormat;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._parseFormat = value; // parse given text value again

          this._onInput(this._elementRef.nativeElement.value);
        }
        /**
         * Override the display format given with display.dateInput with the token NX_DATE_FORMATS
         * @return {?}
         */

      }, {
        key: "displayFormat",
        get: function get() {
          return this._displayFormat;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._displayFormat = value;
          this.format();
        }
        /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);

          if (this._disabled !== newValue) {
            this._disabled = newValue;

            this._disabledChange.emit(newValue);
          }

          if (newValue) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            this._elementRef.nativeElement.blur();
          }
        }
      }]);

      return NxDatefieldDirective;
    }();

    NxDatefieldDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Directive"],
      args: [{
        selector: 'input[nxDatefield]',
        providers: [NX_DATEFIELD_VALUE_ACCESSOR, NX_DATEFIELD_VALIDATORS, // {provide: NX_INPUT_VALUE_ACCESSOR, useExisting: NxDatefieldDirective},
        {
          provide: _allianz_ngx_ndbx_input__WEBPACK_IMPORTED_MODULE_4__["NX_INPUT_VALUE_ACCESSOR"],
          useExisting: NxDatefieldDirective
        }],
        host: {
          '[attr.aria-haspopup]': 'true',
          '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
          '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
          '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
          '[disabled]': 'disabled',
          '(input)': '_onInput($event.target.value)',
          '(change)': '_onChange()',
          '(blur)': '_onTouched()',
          '(keydown)': '_onKeydown($event)'
        },
        exportAs: 'nxDatefield'
      }]
    }];
    /** @nocollapse */

    NxDatefieldDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"]
      }, {
        type: NxDateAdapter,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [NX_DATE_FORMATS]
        }]
      }, {
        type: _allianz_ngx_ndbx_formfield__WEBPACK_IMPORTED_MODULE_3__["NxFormfieldComponent"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }]
      }];
    };

    NxDatefieldDirective.propDecorators = {
      datepicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxDatepicker']
      }],
      datefieldFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxDatefieldFilter']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxMin']
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxMax']
      }],
      strict: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxStrict']
      }],
      parseFormat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxParseFormat']
      }],
      displayFormat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['nxDisplayFormat']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      dateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }],
      dateInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Can be used to override the icon of a `nxDatepickerToggle`.
     */
    // tslint:disable-next-line:directive-class-suffix

    var NxDatepickerToggleIconComponent = function NxDatepickerToggleIconComponent() {
      _classCallCheck(this, NxDatepickerToggleIconComponent);
    };

    NxDatepickerToggleIconComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Directive"],
      args: [{
        selector: '[nxDatepickerToggleIcon]'
      }]
    }];
    /**
     * @template D
     */

    var NxDatepickerToggleComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       * @param {?} _defaultOptions
       */
      function NxDatepickerToggleComponent(_intl, _changeDetectorRef, _defaultOptions) {
        _classCallCheck(this, NxDatepickerToggleComponent);

        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._defaultOptions = _defaultOptions;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"].EMPTY;
        this._tabindex = 0;

        if (this._defaultOptions && this._defaultOptions.toggleIconTabindex) {
          this._tabindex = this._defaultOptions.toggleIconTabindex;
        }
      }
      /**
       * Datepicker instance that the button will toggle.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxDatepickerToggleComponent, [{
        key: "registerDatepicker",

        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        value: function registerDatepicker(value) {
          if (value) {
            this._datepicker = value;

            this._datepicker.registerToggle(this);
          }
        }
        /**
         * Whether the toggle button is disabled.
         * @return {?}
         */

      }, {
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.datepicker) {
            this._watchStateChanges();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._watchStateChanges();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_open",
        value: function _open(event) {
          if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_watchStateChanges",
        value: function _watchStateChanges() {
          var _this15 = this;

          /** @type {?} */
          var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])();
          /** @type {?} */

          var inputDisabled = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])();
          /** @type {?} */

          var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])();

          this._stateChanges.unsubscribe();

          this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this15._changeDetectorRef.markForCheck();
          });
        }
      }, {
        key: "datepicker",
        set: function set(value) {
          this.registerDatepicker(value);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._datepicker;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled === undefined ? this.datepicker.disabled : !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
        }
        /**
         * Sets the tabindex for the toggle button. Default: 0.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "tabindex",
        set: function set(value) {
          if (this._tabindex !== value) {
            this._tabindex = value;
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._tabindex;
        }
      }]);

      return NxDatepickerToggleComponent;
    }();

    NxDatepickerToggleComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"],
      args: [{
        selector: 'nx-datepicker-toggle',
        template: "<button class=\"nx-datepicker-toggle-button\"\n        [tabindex]=\"tabindex\"\n        type=\"button\"\n        [attr.aria-label]=\"_intl.openCalendarLabel\"\n        [disabled]=\"disabled\"\n        (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M5.2002,17 L5.2002,15 C5.2002,14.45 5.6502,14 6.2002,14 L8.2002,14 C8.7502,14 9.2002,14.45 9.2002,15 L9.2002,17 C9.2002,17.55 8.7502,18 8.2002,\n            18 L6.2002,18 C5.6502,18 5.2002,17.55 5.2002,17 L5.2002,17 Z M20.3992,20.4 L3.5992,20.4 L3.5992,11.464 L3.5992,9.464 L3.5992,8 L20.3992,8 L20.3992,\n            20.4 Z M21.0002,3 L20.0002,3 L19.0002,3 L19.0002,2 C19.0002,1.447 18.5532,1 18.0002,1 C17.4472,1 17.0002,1.447 17.0002,2 L17.0002,3 L16.4002,3 L7.5992,\n            3 L7.0002,3 L7.0002,2 C7.0002,1.447 6.5532,1 6.0002,1 C5.4472,1 5.0002,1.447 5.0002,2 L5.0002,3 L4.0002,3 L3.0002,3 C2.4502,3 2.0002,3.45 2.0002,4 L2.0002,\n            9.464 L2.0002,11.464 L2.0002,21 C2.0002,21.55 2.4502,22 3.0002,22 L21.0002,22 C21.5502,22 22.0002,21.55 22.0002,21 L22.0002,4 C22.0002,3.45 21.5502,3 21.0002,3 L21.0002,3 Z\" id=\"path-1\"></path>\n  </svg>\n\n  <ng-content select=\"[nxDatepickerToggleIcon]\"></ng-content>\n</button>\n",
        host: {
          'class': 'nx-datepicker-toggle',
          '[class.nx-datepicker-toggle-active]': 'datepicker && datepicker.opened',
          '[class.nx-datepicker-toggle--disabled]': 'disabled'
        },
        exportAs: 'nxDatepickerToggle',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectionStrategy"].OnPush,
        styles: [":host{position:relative;display:inline-block;height:24px;width:24px}:host:active{outline:0}.nx-datepicker-toggle-button{border:none;background-color:transparent;outline:0;cursor:pointer;padding:0}.nx-datepicker-toggle-button::-moz-focus-inner{border:0}.default-icon{display:block}:host(.nx-datepicker-toggle--disabled) .nx-datepicker-toggle-button{cursor:not-allowed}:host-context([data-whatinput=keyboard]) .nx-datepicker-toggle-button:focus{border-radius:4px;box-shadow:0 0 0 2px #fff,0 0 0 6px #009de6}"]
      }]
    }];
    /** @nocollapse */

    NxDatepickerToggleComponent.ctorParameters = function () {
      return [{
        type: NxDatepickerIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"],
          args: [DATEPICKER_DEFAULT_OPTIONS]
        }]
      }];
    };

    NxDatepickerToggleComponent.propDecorators = {
      _customIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ContentChild"],
        args: [NxDatepickerToggleIconComponent]
      }],
      datepicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"],
        args: ['for']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }],
      tabindex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxDatefieldModule = function NxDatefieldModule() {
      _classCallCheck(this, NxDatefieldModule);
    };

    NxDatefieldModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_0__["NxIconModule"]],
        providers: [// Provide our NX_DATE_LOCALE to determine the current language
        NX_DATE_LOCALE_PROVIDER, NxDatepickerIntl, NX_DATEPICKER_SCROLL_STRATEGY_PROVIDER],
        declarations: [NxDatefieldDirective, NxDatepickerComponent, NxDatepickerToggleIconComponent, NxDatepickerToggleComponent, NxDatepickerContentComponent, NxCalendarComponent, NxCalendarBodyComponent, NxMonthViewComponent, NxMultiYearViewComponent, NxYearViewComponent],
        exports: [NxDatefieldDirective, NxDatepickerComponent, NxDatepickerToggleIconComponent, NxDatepickerToggleComponent, NxCalendarComponent, NxCalendarBodyComponent, NxMonthViewComponent, NxMultiYearViewComponent, NxYearViewComponent],
        entryComponents: [NxDatepickerContentComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-datefield.js.map

    /***/
  },

  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-menu.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-menu.js ***!
    \**************************************************************************/

  /*! exports provided: NxMenuModule, NxMenuComponent, NxMenuLinkDirective, NxMenuButtonComponent, NxMenuButtonIconDirective, NxMenuItemDirective */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxMenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxMenuModule", function () {
      return NxMenuModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxMenuComponent", function () {
      return NxMenuComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxMenuLinkDirective", function () {
      return NxMenuLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxMenuButtonComponent", function () {
      return NxMenuButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxMenuButtonIconDirective", function () {
      return NxMenuButtonIconDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxMenuItemDirective", function () {
      return NxMenuItemDirective;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/icon */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-icon.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This components is a collapsible menu for usage on smaller devices.
     * Can contain any content, but usually [nxMenuLink], [nxMenuGroup] and [nxAction].
     */


    var NxMenuComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       */
      function NxMenuComponent(_changeDetectorRef) {
        _classCallCheck(this, NxMenuComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._open = false;
      }
      /**
       * Whether the menu is open or closed.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxMenuComponent, [{
        key: "toggle",

        /* Toggles the open state of the menu. */

        /**
         * @return {?}
         */
        value: function toggle() {
          this.open = !this.open;
        }
      }, {
        key: "open",
        set: function set(value) {
          /** @type {?} */
          var open = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

          if (open !== this._open) {
            this._open = open;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._open;
        }
      }]);

      return NxMenuComponent;
    }();

    NxMenuComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'nx-menu',
        template: "<div class=\"nx-menu__wrapper\" *ngIf=\"open\">\n  <ng-content></ng-content>\n</div>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        host: {
          '[attr.aria-expanded]': 'open'
        },
        styles: [":host(.nx-menu){display:block}.nx-menu__wrapper{position:fixed;top:60px;left:0;right:0;bottom:0;z-index:1;overflow:auto;background:#fff}::ng-deep .nx-menu__link{display:block;padding:12px 0;font-size:18px;line-height:24px;outline:0}::ng-deep .nx-menu__link+.nx-menu__link{margin-top:8px}::ng-deep [data-whatinput=keyboard] .nx-menu__link:focus{box-shadow:0 0 0 2px #fff,0 0 0 6px #009de6;border-radius:4px;outline:0}::ng-deep .nx-menu__item.nx-menu__item--large,::ng-deep .nx-menu__item.nx-menu__item--small{padding:24px;border-bottom:1px solid #d9d9d9}::ng-deep .nx-menu__item.nx-menu__item--large{padding-left:64px}"]
      }]
    }];
    /** @nocollapse */

    NxMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    NxMenuComponent.propDecorators = {
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is a menu link.
     * It adds styling to a link and is usually used within a [nxMenuItem].
     */

    var NxMenuLinkDirective = function NxMenuLinkDirective() {
      _classCallCheck(this, NxMenuLinkDirective);
    };

    NxMenuLinkDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: 'a[nxMenuLink]',
        host: {
          class: 'nx-menu__link'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is a menu item is used to structure content whithin a menu.
     */

    var NxMenuItemDirective =
    /*#__PURE__*/
    function () {
      function NxMenuItemDirective() {
        _classCallCheck(this, NxMenuItemDirective);

        this._size = 's';
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NxMenuItemDirective, [{
        key: "size",
        set: function set(value) {
          this._size = value === 'l' ? 'l' : 's';
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._size;
        }
      }]);

      return NxMenuItemDirective;
    }();

    NxMenuItemDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[nxMenuItem]',
        host: {
          class: 'nx-menu__item',
          '[class.nx-menu__item--small]': 'size === "s"',
          '[class.nx-menu__item--large]': 'size === "l"'
        }
      }]
    }];
    NxMenuItemDirective.propDecorators = {
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['nxMenuItem']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@title MenuButton
     */

    var NxMenuButtonComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       */
      function NxMenuButtonComponent(_changeDetectorRef) {
        _classCallCheck(this, NxMenuButtonComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._expandable = false;
        this._expanded = false;
        this._type = 'root';
      }
      /**
       * Whether this menu button is expandable or not. Will add a caret icon.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxMenuButtonComponent, [{
        key: "expandable",
        set: function set(value) {
          this._expandable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._expandable;
        }
        /**
         * Whether this menu button is expanded or not.
         * Only works in combination with the `expandable` option set to `true`.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "expanded",
        set: function set(value) {
          this._expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._expanded;
        }
        /**
         * The type of this menu button.
         * Can be `primary` or `secondary`, defaults to `primary`.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "type",
        set: function set(value) {
          if (value === 'root' || value === 'nested') {
            this._type = value;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._type;
        }
      }]);

      return NxMenuButtonComponent;
    }();

    NxMenuButtonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        // tslint:disable-next-line:component-selector
        selector: '[nxMenuButton]',
        template: "<ng-content select=\"[nxMenuButtonIcon]\"></ng-content>\n<span class=\"nx-menu-button__label\">\n  <ng-content></ng-content>\n</span>\n<nx-icon *ngIf=\"expandable\" class=\"nx-menu-button__expand-icon\" name=\"chevron-down\"></nx-icon>\n",
        host: {
          '[class.is-expanded]': 'expandable && expanded',
          '[class.is-expandable]': 'expandable',
          '[class.nx-menu-button--nested]': 'type === "nested"',
          '[class.nx-menu-button--root]': 'type === "root"',
          'class': 'nx-menu-button'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [":host{display:flex;align-items:center;background-color:#fff;color:#414141;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;box-shadow:none;border:none;margin:0;cursor:pointer;line-height:24px;font-weight:400;font-size:18px;width:100%;text-decoration:none;padding:24px}:host:hover{background-color:#ececec}:host.is-expanded{font-weight:700;background-color:#007ab3;border-color:#007ab3;color:#fff}:host.is-expanded .nx-menu-button__expand-icon{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}:host.nx-menu-button--nested{background-color:#f5f5f5}:host.nx-menu-button--nested.is-expanded{background-color:#c1ebfb;border-color:#c1ebfb;color:#414141}:host::-moz-focus-inner{border:0}:host-context([data-whatinput=keyboard]):focus{box-shadow:inset 0 0 0 4px #009de6,inset 0 0 0 6px #fff;border-radius:8px;border:none}.nx-menu-button__expand-icon{display:flex;justify-content:center;transition:.2s;-webkit-transform:rotateZ(0);transform:rotateZ(0);width:16px;height:24px;margin-right:8px;flex:0 0 auto;font-size:24px}.nx-menu-button__label{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 auto;text-align:left;line-height:1;padding:4px 0}::ng-deep .nx-menu-button__icon{margin-right:16px;height:24px;font-weight:400;flex:0 0 auto}"]
      }]
    }];
    /** @nocollapse */

    NxMenuButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    NxMenuButtonComponent.propDecorators = {
      expandable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      expanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['nxType']
      }]
    };
    /**
     * Icon that can be added to a [nxButton].
     */

    var NxMenuButtonIconDirective = function NxMenuButtonIconDirective() {
      _classCallCheck(this, NxMenuButtonIconDirective);
    };

    NxMenuButtonIconDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[nxMenuButtonIcon]',
        host: {
          class: 'nx-menu-button__icon'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var EXPORTED_MODULES = [NxMenuComponent, NxMenuLinkDirective, NxMenuItemDirective, NxMenuButtonComponent, NxMenuButtonIconDirective];

    var NxMenuModule = function NxMenuModule() {
      _classCallCheck(this, NxMenuModule);
    };

    NxMenuModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_1__["NxIconModule"]],
        declarations: EXPORTED_MODULES,
        exports: EXPORTED_MODULES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-menu.js.map

    /***/
  },

  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-sidebar.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-sidebar.js ***!
    \*****************************************************************************/

  /*! exports provided: NxSidebarModule, MAX_WIDTH, MIN_WIDTH, AUTO_COLLAPSE_WIDTH, RESIZE_STEP_SIZE, NxSidebarComponent */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxSidebarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxSidebarModule", function () {
      return NxSidebarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAX_WIDTH", function () {
      return MAX_WIDTH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MIN_WIDTH", function () {
      return MIN_WIDTH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTO_COLLAPSE_WIDTH", function () {
      return AUTO_COLLAPSE_WIDTH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RESIZE_STEP_SIZE", function () {
      return RESIZE_STEP_SIZE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxSidebarComponent", function () {
      return NxSidebarComponent;
    });
    /* harmony import */


    var _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/icon */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAX_WIDTH = 400;
    /** @type {?} */

    var MIN_WIDTH = 56;
    /** @type {?} */

    var AUTO_COLLAPSE_WIDTH = 168;
    /** @type {?} */

    var RESIZE_STEP_SIZE = 20;

    var NxSidebarComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} renderer
       * @param {?} _element
       */
      function NxSidebarComponent(_changeDetectorRef, renderer, _element) {
        _classCallCheck(this, NxSidebarComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this.renderer = renderer;
        this._element = _element;
        /**
         * Emits the new width of the sidebar on resize or on close/open event.
         */

        this.widthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._resizeable = false;
        this._minWidth = MIN_WIDTH;
        this._resizeHandleAriaLabel = '';
        this._open = true;
        this._width = 0;
        this._resizing = false;
        this._previousWidth = 0;
        this._isMobile = false;
        this._resizeWidth = 0;
        this._unsubscribeListeners = [];
        this._onResize = this._onResize.bind(this);
        this._onResizeEnd = this._onResizeEnd.bind(this);
      }
      /**
       * If set to `true` this will enable dynamic resizing of the sidebar.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxSidebarComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.width = this._element.nativeElement.clientWidth;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._removeDragEventListeners();
        }
        /**
         * This will expand the sidebar to its full width.
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand() {
          this.open = true;
        }
        /**
         * This will close the sidebar to its minimal width.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.open = false;
        }
        /**
         * This will close or expand the sidebar depending if its expanded or closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.open) {
            this.close();
          } else {
            this.expand();
          }

          this._emitWidthChange(this._sidebarElementWidth);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onResizeStart",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function _onResizeStart(event) {
          if (event.type.startsWith('touch')) {
            event = event.changedTouches[0];
          }

          this._resizeStartX = event.screenX;
          this._resizeStartWidth = this.open ? this.width : this.minWidth;
          this._resizeWidth = this.width;

          this._attachDragEventListeners();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onResize",
        value: function _onResize(event) {
          this._resizing = true;

          if (event.type.startsWith('touch')) {
            event = event.changedTouches[0];
          }
          /** @type {?} */


          var dx = event.screenX - this._resizeStartX;
          this._resizeWidth = Math.max(this.minWidth, this._resizeStartWidth + dx);
          this.open = this._resizeWidth > this.minWidth;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onResizeEnd",
        value: function _onResizeEnd(event) {
          this._resizing = false;

          this._removeDragEventListeners();

          if (this._isMouseDrag(this._resizeStartX, event.screenX)) {
            if (this._resizeWidth < AUTO_COLLAPSE_WIDTH) {
              this.open = false;

              this._emitWidthChange(this._sidebarElementWidth);
            } else {
              this.open = true;
              this.width = Math.min(MAX_WIDTH, this._resizeWidth);

              this._emitWidthChange(this.width);
            }
          }

          this._resizeWidth = 0;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onToggleClick",
        value: function _onToggleClick() {
          this.toggle();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onResizeHandleClick",
        value: function _onResizeHandleClick(event) {
          if (this._isMouseDrag(this._resizeStartX, event.screenX)) {
            return;
          }

          this.toggle();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onSidebarKeydown",
        value: function _onSidebarKeydown(event) {
          if (event.which === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]) {
            event.preventDefault();
            this.toggle();
          } else if (event.which === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]) {
            this.width = this.width - RESIZE_STEP_SIZE;

            if (this.width <= AUTO_COLLAPSE_WIDTH) {
              this.open = false;
              this.width = AUTO_COLLAPSE_WIDTH + 1;
            }

            this._emitWidthChange(this.width);
          } else if (event.which === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]) {
            if (this.open) {
              this.width = Math.min(MAX_WIDTH, this.width + RESIZE_STEP_SIZE);
            } else {
              this.open = true;
              this.width = Math.max(this.width, AUTO_COLLAPSE_WIDTH);
            }

            this._emitWidthChange(this.width);
          }
        }
        /**
         * @private
         * @param {?} width
         * @return {?}
         */

      }, {
        key: "_emitWidthChange",
        value: function _emitWidthChange(width) {
          this.widthChange.emit(width);
        }
        /**
         * @private
         * @param {?} startX
         * @param {?} endX
         * @return {?}
         */

      }, {
        key: "_isMouseDrag",
        value: function _isMouseDrag(startX, endX) {
          return Math.abs(endX - startX) > 5;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_attachDragEventListeners",
        value: function _attachDragEventListeners() {
          this._unsubscribeListeners.push(this.renderer.listen('document', 'mousemove', this._onResize));

          this._unsubscribeListeners.push(this.renderer.listen('document', 'mouseup', this._onResizeEnd));

          this._unsubscribeListeners.push(this.renderer.listen('document', 'touchmove', this._onResize));

          this._unsubscribeListeners.push(this.renderer.listen('document', 'touchend', this._onResizeEnd));
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_removeDragEventListeners",
        value: function _removeDragEventListeners() {
          this._unsubscribeListeners.forEach(
          /**
          * @param {?} unsubscribe
          * @return {?}
          */
          function (unsubscribe) {
            return unsubscribe();
          });
        }
      }, {
        key: "resizeable",
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (newValue !== this._resizeable) {
            this._resizeable = newValue;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._resizeable;
        }
        /**
         * Sets the minimal width (in pixel) of the sidebar.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "minWidth",
        set: function set(value) {
          this._minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value) || MIN_WIDTH;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._minWidth;
        }
        /**
         * This sets the accessibility label for the resize handle of the sidebar.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "resizeHandleAriaLabel",
        set: function set(value) {
          if (value !== this._resizeHandleAriaLabel) {
            this._resizeHandleAriaLabel = value;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._resizeHandleAriaLabel;
        }
        /**
         * This reflects the current open state of the sidebar.
         * It will be `true` if the sidebar is expanded and `false` if the sidebar is closed.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "open",
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (newValue !== this._open) {
            this._open = newValue;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._open;
        }
        /**
         * This sets the width of the sidebar.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "width",
        set: function set(value) {
          /** @type {?} */
          var newValue = Math.max(value, this.minWidth);

          if (newValue !== this._width) {
            this._width = newValue;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._width;
        }
      }, {
        key: "_sidebarElementWidth",
        get: function get() {
          if (this._resizing) {
            return this._resizeWidth;
          }

          return this.open ? this.width : this.minWidth;
        }
      }]);

      return NxSidebarComponent;
    }();

    NxSidebarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        template: "<div class=\"nx-sidebar__box\"\n  [attr.aria-expanded]=\"open\">\n  <div class=\"nx-sidebar__content\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"nx-sidebar__toggle\">\n    <button class=\"nx-sidebar__toggle-button\"\n        (click)=\"_onToggleClick()\"\n        [attr.aria-label]=\"resizeHandleAriaLabel\"\n        type=\"button\">\n        <nx-icon name=\"chevron-left\" aria-hidden=\"true\"></nx-icon>\n        <nx-icon name=\"chevron-left\" aria-hidden=\"true\"></nx-icon>\n    </button>\n  </div>\n</div>\n\n<button class=\"nx-sidebar__handle\"\n  *ngIf=\"resizeable\"\n  tabindex=\"0\"\n  type=\"button\"\n  (mousedown)=\"_onResizeStart($event)\"\n  (keydown)=\"_onSidebarKeydown($event)\"\n  (touchstart)=\"_onResizeStart($event)\"\n  (click)=\"_onResizeHandleClick($event)\"\n  [attr.aria-label]=\"resizeHandleAriaLabel\"></button>\n",
        selector: 'nx-sidebar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        host: {
          '[class.is-resizing]': '_resizing',
          '[class.is-closed]': '!open',
          '[style.width.px]': "_sidebarElementWidth"
        },
        styles: [":host{position:relative;height:100%;transition:width .15s;display:flex;flex:0 0 auto;width:280px}:host.is-resizing{transition:none}@media (max-width:703px){:host{width:100%;position:absolute;transition:none}:host .nx-sidebar__handle{display:none}}:host.is-closed .nx-sidebar__toggle-button{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}.nx-sidebar__toggle{display:flex;padding:16px 0;justify-content:flex-end;flex-shrink:0}.nx-sidebar__toggle::after,.nx-sidebar__toggle::before{content:'';display:block;flex:0 1 24px}.nx-sidebar__handle{position:absolute;right:-14px;top:0;bottom:0;display:flex;flex:0 0 16px;justify-content:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;background:0 0;margin:0;cursor:col-resize;color:#c2c2c2;outline:0;z-index:1}.nx-sidebar__handle::before{content:'||';font-size:14px;letter-spacing:-1px;font-weight:600;color:inherit}.nx-sidebar__handle::-moz-focus-inner{border:0}.nx-sidebar__toggle-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;background:0 0;margin:0;padding:0;cursor:pointer;color:#414141;outline:0;white-space:nowrap;font-size:22px}.nx-sidebar__toggle-button:hover{color:#999}.nx-sidebar__toggle-button:active{color:#5b5b5b}:host-context([data-whatinput=keyboard]) .nx-sidebar__toggle-button:focus{box-shadow:0 0 0 4px #009de6;border-radius:4px}.nx-sidebar__toggle-button>nx-icon:last-child{margin-left:-16px}.nx-sidebar__toggle-button::-moz-focus-inner{border:0}.nx-sidebar__box{height:100%;flex:1 1 100%;display:flex;overflow:hidden;flex-direction:column;background-color:#f5f5f5}@media screen and (-ms-high-contrast:active){.nx-sidebar__handle::before{box-shadow:0 0 0 6px window,0 0 0 8px windowText}.nx-sidebar__toggle-button{border:1px solid windowText;padding-top:4px}.nx-sidebar__box{border-right:1px solid windowText}}.nx-sidebar__content{flex:1 1 100%;overflow:hidden;overflow-y:auto;padding-top:16px}"]
      }]
    }];
    /** @nocollapse */

    NxSidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    NxSidebarComponent.propDecorators = {
      widthChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      resizeable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      resizeHandleAriaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxSidebarModule = function NxSidebarModule() {
      _classCallCheck(this, NxSidebarModule);
    };

    NxSidebarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_0__["NxIconModule"]],
        declarations: [NxSidebarComponent],
        exports: [NxSidebarComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-sidebar.js.map

    /***/
  },

  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tabs.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tabs.js ***!
    \**************************************************************************/

  /*! exports provided: NxTabsModule, NxTabComponent, NxTabChangeEvent, NxTabGroupComponent, NxTabHeaderComponent, NxTabBodyComponent, NxTabLabelDirective, NxTabNavBarComponent, NxTabLinkDirective, ??a */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxTabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabsModule", function () {
      return NxTabsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabComponent", function () {
      return NxTabComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabChangeEvent", function () {
      return NxTabChangeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabGroupComponent", function () {
      return NxTabGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabHeaderComponent", function () {
      return NxTabHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabBodyComponent", function () {
      return NxTabBodyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabLabelDirective", function () {
      return NxTabLabelDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabNavBarComponent", function () {
      return NxTabNavBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTabLinkDirective", function () {
      return NxTabLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??a", function () {
      return NxTabGroupBase;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _allianz_ngx_ndbx_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/accordion */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-accordion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @abstract
     */


    var NxTabGroupBase = function NxTabGroupBase() {
      _classCallCheck(this, NxTabGroupBase);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NxTabComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _tabGroup
       */
      function NxTabComponent(_viewContainerRef, _tabGroup) {
        _classCallCheck(this, NxTabComponent);

        this._viewContainerRef = _viewContainerRef;
        this._tabGroup = _tabGroup;
        /**
         * The portal that will be the hosted content of the tab
         */

        this._contentPortal = null;
        /**
         * Emits whenever the internal state of the tab changes.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether the tab is currently active.
         */

        this.isActive = false;

        if (!this._tabGroup) {
          throw Error("The nx-tab element has to be wrapped in a nx-tab-group to work.\n      Please provide a nx-tab-group element and place your tabs inside it.");
        }
      }
      /**
       * Sets the label of the tab shown in the tablist.
       * @return {?}
       */


      _createClass(NxTabComponent, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.hasOwnProperty('label')) {
            this._stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._implicitContent, this._viewContainerRef);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "label",
        get: function get() {
          return this._label;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._label !== value) {
            this._label = value;
          }
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "content",
        get: function get() {
          return this._contentPortal;
        }
      }]);

      return NxTabComponent;
    }();

    NxTabComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
      args: [{
        selector: 'nx-tab',
        exportAs: 'nxTab',
        template: "<ng-template><ng-content></ng-content></ng-template>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    NxTabComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
      }, {
        type: NxTabGroupBase,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
          args: [NxTabGroupBase]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Host"]
        }]
      }];
    };

    NxTabComponent.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      _implicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */

    var NxTabBodyComponent =
    /*#__PURE__*/
    function () {
      function NxTabBodyComponent() {
        _classCallCheck(this, NxTabBodyComponent);

        this._active = false;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NxTabBodyComponent, [{
        key: "attach",

        /**
         * @return {?}
         */
        value: function attach() {
          if (!this.portalOutlet.hasAttached()) {
            this.portalOutlet.attach(this.content);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this.portalOutlet.hasAttached()) {
            this.portalOutlet.detach();
          }
        }
      }, {
        key: "active",
        set: function set(value) {
          this._active = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);

          if (this._active) {
            this.attach();
          } else {
            this.detach();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._active;
        }
      }]);

      return NxTabBodyComponent;
    }();

    NxTabBodyComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
      args: [{
        selector: 'nx-tab-body',
        template: "<ng-template cdkPortalOutlet></ng-template>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
        styles: [":host{display:block}"]
      }]
    }];
    NxTabBodyComponent.propDecorators = {
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */

    var NxTabLabelDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       */
      function NxTabLabelDirective(elementRef) {
        _classCallCheck(this, NxTabLabelDirective);

        this.elementRef = elementRef;
      }
      /**
       * @return {?}
       */


      _createClass(NxTabLabelDirective, [{
        key: "focus",
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
      }]);

      return NxTabLabelDirective;
    }();

    NxTabLabelDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
      args: [{
        selector: '[nxTabLabel]'
      }]
    }];
    /** @nocollapse */

    NxTabLabelDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */


    var NxTabHeaderComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       */
      function NxTabHeaderComponent(_changeDetectorRef) {
        _classCallCheck(this, NxTabHeaderComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._selectedIndex = 0;
        this._autoselect = true;
        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(NxTabHeaderComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusKeyManager"](this.labels).withHorizontalOrientation('ltr').withWrap();

          this._keyManager.updateActiveItemIndex(0);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @private
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "_isValidIndex",
        value: function _isValidIndex(idx) {
          if (!this.labels) {
            return true;
          }

          return !!this.labels.toArray()[idx];
        }
        /**
         * Handles keyboard inputs on the labels
         * If autoselect is enabled the tab gets changed immediately
         * If autoselect is disabled only the focus changes but the user still has to select the item
         * by himself
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleKeydown",
        value: function handleKeydown(event) {
          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"]:
              this._keyManager.setFirstItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]:
              this._keyManager.setLastItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"]:
              this.selectFocusedIndex.emit(this._keyManager.activeItemIndex);
              event.preventDefault();
              break;

            default:
              this._keyManager.onKeydown(event);

          }

          if (this.autoselect) {
            this.selectFocusedIndex.emit(this._keyManager.activeItemIndex);
          } else if (event.keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] && event.keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"]) {
            this.indexFocused.emit(this._keyManager.activeItemIndex);
          }
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selectedIndex = value;

          if (this._keyManager) {
            this._keyManager.updateActiveItemIndex(value);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focusIndex",
        get: function get() {
          return this._keyManager ? this._keyManager.activeItemIndex : 0;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
          }

          this._keyManager.setActiveItem(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "autoselect",
        get: function get() {
          return this._autoselect;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoselect = value;
        }
      }]);

      return NxTabHeaderComponent;
    }();

    NxTabHeaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
      args: [{
        selector: 'nx-tab-header',
        template: "<div class=\"nx-tab-header\" (keydown)=\"handleKeydown($event)\" role=\"tablist\">\n  <ng-content></ng-content>\n</div>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
        styles: [":host{display:block}.nx-tab-header{display:flex;align-items:flex-end;justify-content:center;padding:60px 0}"]
      }]
    }];
    /** @nocollapse */

    NxTabHeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
      }];
    };

    NxTabHeaderComponent.propDecorators = {
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      autoselect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      selectFocusedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
      }],
      indexFocused: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
      }],
      labels: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
        args: [NxTabLabelDirective]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxTabChangeEvent = function NxTabChangeEvent() {
      _classCallCheck(this, NxTabChangeEvent);
    };
    /** @type {?} */


    var nextId = 0;
    /** @type {?} */

    var MOBILE_BREAKPOINT = 480;

    var NxTabGroupComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       */
      function NxTabGroupComponent(_changeDetectorRef) {
        _classCallCheck(this, NxTabGroupComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._selectedIndex = null;
        this._negative = false;
        this._indexToSelect = 0;
        this._autoselect = true;
        this._mobileAccordion = true;
        this._showAccordion = false;
        /**
         * An event emitted when the selected tab has changed.
         */

        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * An event emitted when the selected tab has changed.
         */

        this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * An event emitted when focus has changed within a tab group.
         *
         * **Note:** is not supported in mobile view.
         */

        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * Subscription to tabs being added/removed.
         */

        this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */

        this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._groupId = nextId++;
      }
      /**
       * Sets the selected tab.
       * @return {?}
       */


      _createClass(NxTabGroupComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._switchAppearance(window.innerWidth);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this16 = this;

          this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
          // able to re-render the content as new tabs are added or removed.


          this._tabsSubscription = this.tabs.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var indexToSelect = _this16._clampTabIndex(_this16._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.


            if (indexToSelect === _this16._selectedIndex) {
              /** @type {?} */
              var tabs = _this16.tabs.toArray();

              for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].isActive) {
                  // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                  // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                  // adding a tab within the `selectedIndexChange` event.
                  _this16._indexToSelect = _this16._selectedIndex = i;
                  break;
                }
              }
            }

            _this16._changeDetectorRef.markForCheck();
          });
        }
        /**
         * After the content is checked, this component knows what tabs have been defined
         * and what the selected index should be.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this17 = this;

          // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
          // the amount of tabs changes before the actual change detection runs.

          /** @type {?} */
          var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
          // the selected index has not yet been initialized.


          if (this._selectedIndex !== indexToSelect) {
            /** @type {?} */
            var isFirstRun = this._selectedIndex == null;

            if (!isFirstRun) {
              this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            } // Changing these values after change detection has run
            // since the checked content may contain references to them.


            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this17.tabs.forEach(
              /**
              * @param {?} tab
              * @param {?} index
              * @return {?}
              */
              function (tab, index) {
                return tab.isActive = index === indexToSelect;
              });

              if (!isFirstRun) {
                _this17.selectedIndexChange.emit(indexToSelect);
              }
            });
          }

          if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._tabsSubscription.unsubscribe();

          this._tabLabelSubscription.unsubscribe();
        }
        /**
         * Subscribes to changes in the tab labels. This is needed, because the \@Input for the label is
         * on the NxTab component, whereas the data binding is inside the NxTabGroup. In order for the
         * binding to be updated, we need to subscribe to changes in it and trigger change detection
         * manually.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToTabLabels",
        value: function _subscribeToTabLabels() {
          var _this18 = this;

          if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
          }

          this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(this.tabs.map(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            return tab._stateChanges;
          }))).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this18._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_clampTabIndex",
        value: function _clampTabIndex(index) {
          // Note the `|| 0`, which ensures that values like NaN can't get through
          // and which would otherwise throw the component into an infinite loop
          // (since Math.max(NaN, 0) === NaN).
          return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
        }
        /**
         * \@docs-private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "focusChanged",
        value: function focusChanged(index) {
          this.focusChange.emit(this._createChangeEvent(index));
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent(index) {
          /** @type {?} */
          var event = new NxTabChangeEvent();
          event.index = index;

          if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
          }

          return event;
        }
        /**
         * \@docs-private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "handleClick",
        value: function handleClick(index) {
          this.selectedIndex = this.tabHeader.focusIndex = index;
        }
        /**
         * \@docs-private
         * Returns the tabindex for a tab label
         * @param {?} tab
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "getTabIndex",
        value: function getTabIndex(tab, idx) {
          return this.selectedIndex === idx ? 0 : -1;
        }
        /**
         * Returns a unique id for each tab label element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabLabelId",
        value: function _getTabLabelId(i) {
          return "nx-tab-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns a unique id for each tab content element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabContentId",
        value: function _getTabContentId(i) {
          return "nx-tab-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * \@docs-private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onResize",
        value: function onResize(event) {
          this._switchAppearance(event.target.innerWidth);
        }
        /**
         * @private
         * @param {?} viewPortWidth
         * @return {?}
         */

      }, {
        key: "_switchAppearance",
        value: function _switchAppearance(viewPortWidth) {
          if (!this._mobileAccordion) {
            return;
          }

          if (viewPortWidth <= MOBILE_BREAKPOINT && !this._showAccordion) {
            this._showMobileVersion();
          } else if (viewPortWidth > MOBILE_BREAKPOINT && this._showAccordion) {
            this._showDesktopVersion();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_showMobileVersion",
        value: function _showMobileVersion() {
          this._showAccordion = true;

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_showDesktopVersion",
        value: function _showDesktopVersion() {
          this._showAccordion = false;

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emulate the tab change event when an accordion panel is opened in
         * mobile viewports.
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_panelOpened",
        value: function _panelOpened(index) {
          this.selectedIndex = index;
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value, null);
        }
        /**
         * Whether the negative set of styling should be used.
         * @return {?}
         */

      }, {
        key: "negative",
        get: function get() {
          return this._negative;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._negative) {
            this._negative = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          }
        }
        /**
         * Whether the tab should be immediately selected on focus.
         * @return {?}
         */

      }, {
        key: "autoselect",
        get: function get() {
          return this._autoselect;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoselect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the tabs should to accordion on mobile viewports.
         * @return {?}
         */

      }, {
        key: "mobileAccordion",
        get: function get() {
          return this._mobileAccordion;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._mobileAccordion = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
      }]);

      return NxTabGroupComponent;
    }();

    NxTabGroupComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
      args: [{
        selector: 'nx-tab-group',
        template: "\n  <nx-tab-header *ngIf=\"!_showAccordion\"\n      #tabHeader\n      [selectedIndex]=\"selectedIndex\"\n      (selectFocusedIndex)=\"selectedIndex = $event\"\n      (indexFocused)=\"focusChanged($event)\"\n      [autoselect]=\"autoselect\">\n    <button\n      type=\"button\"\n      nxTabLabel\n      *ngFor=\"let tab of tabs; let i = index\"\n      role=\"tab\"\n      (click)=\"handleClick(i)\"\n      class=\"nx-tab-header__item\"\n      [id]=\"_getTabLabelId(i)\"\n      [attr.aria-controls]=\"_getTabContentId(i)\"\n      [attr.aria-selected]=\"selectedIndex == i\"\n      [attr.tabindex]=\"getTabIndex(tab, i)\"\n      [class.nx-tab-header__item--active]=\"selectedIndex == i\">\n      {{tab.label}}\n    </button>\n  </nx-tab-header>\n\n  <div class=\"nx-tab-body__container\">\n    <nx-tab-body\n      *ngFor=\"let tab of tabs; let i = index\"\n      [id]=\"_getTabContentId(i)\"\n      role=\"tabpanel\"\n      [attr.tabindex]=\"(!_showAccordion && selectedIndex == i) ? 0 : -1\"\n      class=\"nx-tab__body\"\n      [attr.aria-labelledby]=\"_getTabContentId(i)\"\n      [class.nx-tab__body--active]=\"selectedIndex == i\"\n      [content]=\"tab.content\"\n      [active]=\"!_showAccordion && selectedIndex == i\"\n    ></nx-tab-body>\n  </div>\n\n  <nx-accordion *ngIf=\"_showAccordion\" [negative]=\"negative\">\n    <nx-expansion-panel *ngFor=\"let tab of tabs; let i = index\" [expanded]=\"selectedIndex === i\" (opened)=\"_panelOpened(i)\">\n      <nx-expansion-panel-header>\n        <nx-expansion-panel-title>{{tab.label}}</nx-expansion-panel-title>\n      </nx-expansion-panel-header>\n      <ng-template [cdkPortalOutlet]=\"tab.content\"></ng-template>\n    </nx-expansion-panel>\n  </nx-accordion>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
        host: {
          '[class.is-negative]': 'negative'
        },
        providers: [{
          provide: NxTabGroupBase,
          useExisting: NxTabGroupComponent
        }],
        styles: [":host{display:block}.nx-tab-header__item{text-decoration:none;border:none;background:0 0;color:#006192;border-bottom:2px solid #007ab3;padding:0 16px 6px;font-weight:400;font-size:18px;line-height:24px;outline:0}.nx-tab-header__item::-moz-focus-inner{border:0}:host-context([data-whatinput=keyboard]) .nx-tab-header__item:focus{box-shadow:0 0 0 2px #fff,0 0 0 6px #009de6;border-radius:4px}.nx-tab-header__item--active{border-width:4px;font-weight:700;transition:font-weight .3s;padding-bottom:4px}:host(.is-negative){color:#fff}:host(.is-negative) .nx-tab-header__item{color:#fff;border-bottom-color:#fff}"]
      }]
    }];
    /** @nocollapse */

    NxTabGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
      }];
    };

    NxTabGroupComponent.propDecorators = {
      tabs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
        args: [NxTabComponent]
      }],
      tabBodyChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChildren"],
        args: [NxTabBodyComponent]
      }],
      tabHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
        args: ['tabHeader']
      }],
      panels: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChildren"],
        args: [_allianz_ngx_ndbx_accordion__WEBPACK_IMPORTED_MODULE_3__["NxExpansionPanelComponent"]]
      }],
      accordion: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
        args: [_allianz_ngx_ndbx_accordion__WEBPACK_IMPORTED_MODULE_3__["NxAccordionDirective"]]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      negative: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      autoselect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      mobileAccordion: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }],
      selectedIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
      }],
      selectedTabChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
      }],
      focusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
        args: ['window:resize', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxTabNavBarComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       */
      function NxTabNavBarComponent(_changeDetectorRef) {
        _classCallCheck(this, NxTabNavBarComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._negative = false;
      }
      /**
       * Whether the tab nav bar has negative styling.
       * @param {?} value
       * @return {?}
       */


      _createClass(NxTabNavBarComponent, [{
        key: "negative",
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);

          if (newValue !== this.negative) {
            this._negative = newValue;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._negative;
        }
      }]);

      return NxTabNavBarComponent;
    }();

    NxTabNavBarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
      args: [{
        selector: 'nx-tab-nav-bar',
        template: "<ng-content></ng-content>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
        host: {
          '[class.is-negative]': 'negative',
          'role': 'navigation'
        },
        styles: [":host{display:flex;align-items:flex-end;justify-content:center}:host ::ng-deep a.nx-tab-link{text-decoration:none;border:none;background:0 0;color:#006192;border-bottom:2px solid #007ab3;padding:0 16px 6px;font-weight:400;font-size:18px;line-height:24px}:host ::ng-deep a.nx-tab-link.is-active{border-width:4px;font-weight:700;transition:font-weight .3s;padding-bottom:4px}:host(.is-negative){color:#fff}:host(.is-negative) ::ng-deep a.nx-tab-link{color:#fff;border-bottom-color:#fff}:host-context([data-whatinput=keyboard]) nx-tab-link:focus{box-shadow:0 0 0 2px #fff,0 0 0 6px #009de6;border-radius:4px}"]
      }]
    }];
    /** @nocollapse */

    NxTabNavBarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
      }];
    };

    NxTabNavBarComponent.propDecorators = {
      negative: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }]
    };

    var NxTabLinkDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _tabNavBar
       */
      function NxTabLinkDirective(_tabNavBar) {
        _classCallCheck(this, NxTabLinkDirective);

        this._tabNavBar = _tabNavBar;
        this._active = false;

        if (!this._tabNavBar) {
          throw Error("The nx-tab-link element has to be wrapped in a nx-tab-nav-bar to work.");
        }
      }
      /**
       * Whether the tab link is active and has the active styling.
       * @return {?}
       */


      _createClass(NxTabLinkDirective, [{
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);

          if (newValue !== this._active) {
            this._active = value;
          }
        }
      }]);

      return NxTabLinkDirective;
    }();

    NxTabLinkDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
      args: [{
        selector: '[nxTabLink]',
        host: {
          '[class.nx-tab-link]': 'true',
          '[class.is-active]': 'active',
          '[attr.aria-current]': 'active'
        }
      }]
    }];
    /** @nocollapse */

    NxTabLinkDirective.ctorParameters = function () {
      return [{
        type: NxTabNavBarComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["SkipSelf"]
        }]
      }];
    };

    NxTabLinkDirective.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxTabsModule = function NxTabsModule() {
      _classCallCheck(this, NxTabsModule);
    };

    NxTabsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _allianz_ngx_ndbx_accordion__WEBPACK_IMPORTED_MODULE_3__["NxAccordionModule"]],
        exports: [NxTabComponent, NxTabGroupComponent, NxTabLabelDirective, NxTabHeaderComponent, NxTabBodyComponent, NxTabNavBarComponent, NxTabLinkDirective],
        declarations: [NxTabComponent, NxTabGroupComponent, NxTabLabelDirective, NxTabHeaderComponent, NxTabBodyComponent, NxTabNavBarComponent, NxTabLinkDirective],
        providers: []
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-tabs.js.map

    /***/
  },

  /***/
  "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tree.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tree.js ***!
    \**************************************************************************/

  /*! exports provided: NxTreeModule, NxTreeComponent, NxTreeFlatDataSource, NxFlatTreeControl, ??b, ??c, ??a, ??d, ??e */

  /***/
  function node_modulesAllianzNgxNdbxFesm2015AllianzNgxNdbxTreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTreeModule", function () {
      return NxTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTreeComponent", function () {
      return NxTreeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxTreeFlatDataSource", function () {
      return NxTreeFlatDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NxFlatTreeControl", function () {
      return NxFlatTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??b", function () {
      return NxTreeNodeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??c", function () {
      return NxTreeNodeDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??a", function () {
      return NxTreeNodeOutletDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??d", function () {
      return NxTreeNodePaddingDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??e", function () {
      return NxTreeNodeToggleDirective;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Outlet for nested CdkNode. Put `[nxTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */


    var NxTreeNodeOutletDirective =
    /**
     * @param {?} viewContainer
     */
    function NxTreeNodeOutletDirective(viewContainer) {
      _classCallCheck(this, NxTreeNodeOutletDirective);

      this.viewContainer = viewContainer;
    };

    NxTreeNodeOutletDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[nxTreeNodeOutlet]'
      }]
    }];
    /** @nocollapse */

    NxTreeNodeOutletDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with NDBX design styles.
     * @template T
     */


    var NxTreeComponent =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE) {
      _inherits(NxTreeComponent, _angular_cdk_tree__WE);

      function NxTreeComponent() {
        _classCallCheck(this, NxTreeComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(NxTreeComponent).apply(this, arguments));
      }

      return NxTreeComponent;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTree"]);

    NxTreeComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'nx-tree',
        exportAs: 'nxTree',
        template: "<ng-container nxTreeNodeOutlet></ng-container>",
        host: {
          'class': 'nx-tree',
          'role': 'tree'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTree"],
          useExisting: NxTreeComponent
        }],
        styles: [":host.nx-tree{display:block}.nx-tree__node{display:block;overflow:hidden}"]
      }]
    }];
    NxTreeComponent.propDecorators = {
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [NxTreeNodeOutletDirective]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree node with NDBX design styles.
     * @template T
     */

    var NxTreeNodeComponent =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE2) {
      _inherits(NxTreeNodeComponent, _angular_cdk_tree__WE2);

      function NxTreeNodeComponent() {
        _classCallCheck(this, NxTreeNodeComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(NxTreeNodeComponent).apply(this, arguments));
      }

      return NxTreeNodeComponent;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNode"]);

    NxTreeNodeComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'nx-tree-node',
        exportAs: 'nxTreeNode',
        inputs: ['disabled', 'tabIndex'],
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.aria-level]': 'role === "treeitem" ? level : null',
          '[attr.role]': 'role',
          'class': 'nx-tree__node',
          '[class.is-expanded]': 'isExpanded'
        },
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNode"],
          useExisting: NxTreeNodeComponent
        }],
        template: "<div class=\"nx-tree__node-box\">\n  <ng-content></ng-content>\n</div>\n"
      }]
    }];
    /**
     * Wrapper for the CdkTree node definition with NDBX design styles.
     * @template T
     */

    var NxTreeNodeDefDirective =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE3) {
      _inherits(NxTreeNodeDefDirective, _angular_cdk_tree__WE3);

      function NxTreeNodeDefDirective() {
        _classCallCheck(this, NxTreeNodeDefDirective);

        return _possibleConstructorReturn(this, _getPrototypeOf(NxTreeNodeDefDirective).apply(this, arguments));
      }

      return NxTreeNodeDefDirective;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNodeDef"]);

    NxTreeNodeDefDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[nxTreeNodeDef]',
        inputs: ['when: nxTreeNodeDefWhen'],
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNodeDef"],
          useExisting: NxTreeNodeDefDirective
        }]
      }]
    }];
    NxTreeNodeDefDirective.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['nxTreeNode']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     * @template T
     */

    var NxTreeNodePaddingDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _treeNode
       * @param {?} _tree
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _dir
       */
      function NxTreeNodePaddingDirective(_treeNode, _tree, _renderer, _element, _dir) {
        var _this19 = this;

        _classCallCheck(this, NxTreeNodePaddingDirective);

        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */

        this.indentUnits = 'px';
        this._offset = 0;
        this._indent = 24;

        this._setPadding();

        if (this._dir) {
          this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this19._setPadding();
          });
        }
      }
      /**
       * The level of depth of the tree node. The padding will be `level * indent` pixels.
       * @return {?}
       */


      _createClass(NxTreeNodePaddingDirective, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * The padding indent value for the tree node. Returns a string with px numbers if not null.
         * @return {?}
         */

      }, {
        key: "_paddingIndent",
        value: function _paddingIndent() {
          /** @type {?} */
          var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
          /** @type {?} */

          var level = this._level || nodeLevel;
          return level ? "".concat(level * this._indent + this._offset).concat(this.indentUnits) : null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_setPadding",
        value: function _setPadding() {
          /** @type {?} */
          var padding = this._paddingIndent();
          /** @type {?} */


          var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';

          this._renderer.setStyle(this._element.nativeElement, paddingProp, padding);
        }
      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._level = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setPadding();
        }
        /**
         * The offset is added once on top of each indent. Default number is 0.
         * @return {?}
         */

      }, {
        key: "offset",
        get: function get() {
          return this._offset;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._offset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setPadding();
        }
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 24px from material design menu sub-menu spec.
         * @return {?}
         */

      }, {
        key: "indent",
        get: function get() {
          return this._indent;
        }
        /**
         * @param {?} indent
         * @return {?}
         */
        ,
        set: function set(indent) {
          /** @type {?} */
          var value = indent;
          /** @type {?} */

          var units = 'px';

          if (typeof indent === 'string') {
            /** @type {?} */
            var parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
          }

          this.indentUnits = units;
          this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setPadding();
        }
      }]);

      return NxTreeNodePaddingDirective;
    }();

    NxTreeNodePaddingDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[nxTreeNodePadding]'
      }]
    }];
    /** @nocollapse */

    NxTreeNodePaddingDirective.ctorParameters = function () {
      return [{
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNode"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTree"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    NxTreeNodePaddingDirective.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['nxTreeNodePadding']
      }],
      offset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['nxTreeNodePaddingOffset']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['nxTreeNodePaddingIndent']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree's toggle with NDBX design styles.
     * @template T
     */

    var NxTreeNodeToggleDirective =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE4) {
      _inherits(NxTreeNodeToggleDirective, _angular_cdk_tree__WE4);

      function NxTreeNodeToggleDirective() {
        var _this20;

        _classCallCheck(this, NxTreeNodeToggleDirective);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(NxTreeNodeToggleDirective).apply(this, arguments));
        _this20.recursive = false;
        return _this20;
      }

      return NxTreeNodeToggleDirective;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNodeToggle"]);

    NxTreeNodeToggleDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[nxTreeNodeToggle]',
        host: {
          '(click)': '_toggle($event)'
        },
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeNodeToggle"],
          useExisting: NxTreeNodeToggleDirective
        }]
      }]
    }];
    NxTreeNodeToggleDirective.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['nxTreeNodeToggleRecursive']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NxTreeModule = function NxTreeModule() {
      _classCallCheck(this, NxTreeModule);
    };

    NxTreeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        declarations: [NxTreeComponent, NxTreeNodeComponent, NxTreeNodeDefDirective, NxTreeNodePaddingDirective, NxTreeNodeToggleDirective, NxTreeNodeOutletDirective],
        exports: [NxTreeComponent, NxTreeNodeComponent, NxTreeNodeDefDirective, NxTreeNodePaddingDirective, NxTreeNodeToggleDirective, NxTreeNodeOutletDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree flattener to convert a normal type of node to node with children & level information.
     * Transform nested nodes of type `T extends NxTreeNode` to flattened nodes of type `F extends NxFlatTreeNode`.
     *
     * For example, the input data of type `T` is nested, and contains its children data:
     *   SomeNode: {
     *     key: 'Fruits',
     *     children: [
     *       NodeOne: {
     *         key: 'Apple',
     *       },
     *       NodeTwo: {
     *        key: 'Pear',
     *      }
     *    ]
     *  }
     *  After flattener flatten the tree, the structure will become
     *  SomeNode: {
     *    key: 'Fruits',
     *    expandable: true,
     *    level: 1
     *  },
     *  NodeOne: {
     *    key: 'Apple',
     *    expandable: false,
     *    level: 2
     *  },
     *  NodeTwo: {
     *   key: 'Pear',
     *   expandable: false,
     *   level: 2
     * }
     * and the output flattened type is `F extends NxFlatTreeNode` with additional information.
     * @template T, F
     */

    var NxTreeFlattener =
    /*#__PURE__*/
    function () {
      function NxTreeFlattener() {
        _classCallCheck(this, NxTreeFlattener);
      }

      _createClass(NxTreeFlattener, [{
        key: "transformFunction",

        /**
         * @param {?} node
         * @param {?} level
         * @return {?}
         */
        value: function transformFunction(node, level) {
          var children = node.children,
              rest = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__rest"])(node, ["children"]);
          return (
            /** @type {?} */
            Object.assign({}, rest, {
              level: level,
              expandable: Array.isArray(children) && children.length > 0
            })
          );
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "getLevel",
        value: function getLevel(node) {
          return node.level;
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "isExpandable",
        value: function isExpandable(node) {
          return node.expandable;
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "getChildren",
        value: function getChildren(node) {
          return (
            /** @type {?} */
            node.children
          );
        }
        /**
         * @param {?} node
         * @param {?} level
         * @param {?} resultNodes
         * @param {?} parentMap
         * @return {?}
         */

      }, {
        key: "_flattenNode",
        value: function _flattenNode(node, level, resultNodes, parentMap) {
          var _this21 = this;

          /** @type {?} */
          var flatNode = this.transformFunction(node, level);
          resultNodes.push(flatNode);

          if (this.isExpandable(flatNode)) {
            /** @type {?} */
            var childrenNodes = this.getChildren(node);

            if (Array.isArray(childrenNodes)) {
              this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
            } else {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
              /**
              * @param {?} children
              * @return {?}
              */
              function (children) {
                _this21._flattenChildren(children, level, resultNodes, parentMap);
              });
            }
          }

          return resultNodes;
        }
        /**
         * @param {?} children
         * @param {?} level
         * @param {?} resultNodes
         * @param {?} parentMap
         * @return {?}
         */

      }, {
        key: "_flattenChildren",
        value: function _flattenChildren(children, level, resultNodes, parentMap) {
          var _this22 = this;

          children.forEach(
          /**
          * @param {?} child
          * @param {?} index
          * @return {?}
          */
          function (child, index) {
            /** @type {?} */
            var childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1); // tslint:disable-line

            _this22._flattenNode(child, level + 1, resultNodes, childParentMap);
          });
        }
        /**
         * Flatten a list of node type T to flattened version of node F.
         * Please note that type T may be nested, and the length of `structuredData` may be different
         * from that of returned list `F[]`.
         * @param {?} structuredData
         * @return {?}
         */

      }, {
        key: "flattenNodes",
        value: function flattenNodes(structuredData) {
          var _this23 = this;

          /** @type {?} */
          var resultNodes = [];
          structuredData.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return _this23._flattenNode(node, 0, resultNodes, []);
          });
          return resultNodes;
        }
        /**
         * Expand flattened node with current expansion status.
         * The returned list may have different length.
         * @param {?} nodes
         * @param {?} treeControl
         * @return {?}
         */

      }, {
        key: "expandFlattenedNodes",
        value: function expandFlattenedNodes(nodes, treeControl) {
          var _this24 = this;

          /** @type {?} */
          var results = [];
          /** @type {?} */

          var currentExpand = [];
          currentExpand[0] = true;
          nodes.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            /** @type {?} */
            var expand = true;

            for (var i = 0; i <= _this24.getLevel(node); i++) {
              expand = expand && currentExpand[i];
            }

            if (expand) {
              results.push(node);
            }

            if (_this24.isExpandable(node)) {
              currentExpand[_this24.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
          });
          return results;
        }
      }]);

      return NxTreeFlattener;
    }();
    /**
     * Data source for flat tree.
     * The data source need to handle expansion/collapsion of the tree node and change the data feed
     * to `NxTree`.
     * The nested tree nodes of type `T extends NxTreeNode` are flattened through `NxTreeFlattener`, and converted
     * to type `F extends NxFlatTreeNode` for `NxTree` to consume.
     * @template T, F
     */


    var NxTreeFlatDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti) {
      _inherits(NxTreeFlatDataSource, _angular_cdk_collecti);

      /**
       * @param {?} treeControl
       * @param {?=} initialData
       */
      function NxTreeFlatDataSource(treeControl) {
        var _this25;

        var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, NxTreeFlatDataSource);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(NxTreeFlatDataSource).call(this));
        _this25.treeControl = treeControl;
        _this25._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this25._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this25._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        _this25._treeFlattener = new NxTreeFlattener();
        _this25.data = initialData;
        return _this25;
      }
      /**
       * @return {?}
       */


      _createClass(NxTreeFlatDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this26 = this;

          /** @type {?} */
          var changes = [collectionViewer.viewChange, this.treeControl.expansionModel.onChange, this._flattenedData];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(
          /**
          * @return {?}
          */
          function () {
            _this26._expandedData.next(_this26._treeFlattener.expandFlattenedNodes(_this26._flattenedData.value, _this26.treeControl));

            return _this26._expandedData.value;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);

          this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

          this.treeControl.dataNodes = this._flattenedData.value;
        }
      }]);

      return NxTreeFlatDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Flat tree control.
     * Able to expand/collapse a subtree recursively for flattened tree.
     * @template F
     */


    var NxFlatTreeControl =
    /*#__PURE__*/
    function (_angular_cdk_tree__WE5) {
      _inherits(NxFlatTreeControl, _angular_cdk_tree__WE5);

      function NxFlatTreeControl() {
        _classCallCheck(this, NxFlatTreeControl);

        return _possibleConstructorReturn(this, _getPrototypeOf(NxFlatTreeControl).call(this,
        /**
        * @param {?} node
        * @return {?}
        */
        function (node) {
          return node.level;
        },
        /**
        * @param {?} node
        * @return {?}
        */
        function (node) {
          return node.expandable;
        }));
      }

      return NxFlatTreeControl;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=allianz-ngx-ndbx-tree.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/tree.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/tree.js ***!
    \***************************************************/

  /*! exports provided: BaseTreeControl, FlatTreeControl, NestedTreeControl, CdkNestedTreeNode, CdkTreeNodeOutletContext, CdkTreeNodeDef, CdkTreeNodePadding, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet, CdkTree, CdkTreeNode, getTreeNoValidDataSourceError, getTreeMultipleDefaultNodeDefsError, getTreeMissingMatchingNodeDefError, getTreeControlMissingError, getTreeControlFunctionsMissingError, CdkTreeModule, CdkTreeNodeToggle */

  /***/
  function node_modulesAngularCdkEsm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function () {
      return BaseTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function () {
      return FlatTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function () {
      return NestedTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function () {
      return CdkNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function () {
      return CdkTreeNodeOutletContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function () {
      return CdkTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function () {
      return CdkTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function () {
      return CDK_TREE_NODE_OUTLET_NODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function () {
      return CdkTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTree", function () {
      return CdkTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function () {
      return CdkTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function () {
      return getTreeNoValidDataSourceError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function () {
      return getTreeMultipleDefaultNodeDefsError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function () {
      return getTreeMissingMatchingNodeDefError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function () {
      return getTreeControlMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function () {
      return getTreeControlFunctionsMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function () {
      return CdkTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function () {
      return CdkTreeNodeToggle;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
     * @abstract
     * @template T
     */


    var BaseTreeControl =
    /*#__PURE__*/
    function () {
      function BaseTreeControl() {
        _classCallCheck(this, BaseTreeControl);

        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
      }
      /**
       * Toggles one single data node's expanded/collapsed state.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(BaseTreeControl, [{
        key: "toggle",
        value: function toggle(dataNode) {
          this.expansionModel.toggle(dataNode);
        }
        /**
         * Expands one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand(dataNode) {
          this.expansionModel.select(dataNode);
        }
        /**
         * Collapses one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapse",
        value: function collapse(dataNode) {
          this.expansionModel.deselect(dataNode);
        }
        /**
         * Whether a given data node is expanded or not. Returns true if the data node is expanded.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "isExpanded",
        value: function isExpanded(dataNode) {
          return this.expansionModel.isSelected(dataNode);
        }
        /**
         * Toggles a subtree rooted at `node` recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "toggleDescendants",
        value: function toggleDescendants(dataNode) {
          this.expansionModel.isSelected(dataNode) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
        }
        /**
         * Collapse all dataNodes in the tree.
         * @return {?}
         */

      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.expansionModel.clear();
        }
        /**
         * Expands a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expandDescendants",
        value: function expandDescendants(dataNode) {
          var _this$expansionModel;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, toBeProcessed);
        }
        /**
         * Collapses a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapseDescendants",
        value: function collapseDescendants(dataNode) {
          var _this$expansionModel2;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, toBeProcessed);
        }
      }]);

      return BaseTreeControl;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
     * @template T
     */


    var FlatTreeControl =
    /*#__PURE__*/
    function (_BaseTreeControl) {
      _inherits(FlatTreeControl, _BaseTreeControl);

      /**
       * Construct with flat tree data node functions getLevel and isExpandable.
       * @param {?} getLevel
       * @param {?} isExpandable
       */
      function FlatTreeControl(getLevel, isExpandable) {
        var _this27;

        _classCallCheck(this, FlatTreeControl);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(FlatTreeControl).call(this));
        _this27.getLevel = getLevel;
        _this27.isExpandable = isExpandable;
        return _this27;
      }
      /**
       * Gets a list of the data node's subtree of descendent data nodes.
       *
       * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
       * with correct levels.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(FlatTreeControl, [{
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var startIndex = this.dataNodes.indexOf(dataNode);
          /** @type {?} */

          var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
          // The level of descendants of a tree node must be greater than the level of the given
          // tree node.
          // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
          // If we reach a node whose level is greater than the level of the tree node, we hit a
          // sibling of an ancestor.

          for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
          }

          return results;
        }
        /**
         * Expands all data nodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
         * data nodes of the tree.
         * @return {?}
         */

      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this$expansionModel3;

          (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes));
        }
      }]);

      return FlatTreeControl;
    }(BaseTreeControl);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
     * @template T
     */


    var NestedTreeControl =
    /*#__PURE__*/
    function (_BaseTreeControl2) {
      _inherits(NestedTreeControl, _BaseTreeControl2);

      /**
       * Construct with nested tree function getChildren.
       * @param {?} getChildren
       */
      function NestedTreeControl(getChildren) {
        var _this28;

        _classCallCheck(this, NestedTreeControl);

        _this28 = _possibleConstructorReturn(this, _getPrototypeOf(NestedTreeControl).call(this));
        _this28.getChildren = getChildren;
        return _this28;
      }
      /**
       * Expands all dataNodes in the tree.
       *
       * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
       * data nodes of the tree.
       * @return {?}
       */


      _createClass(NestedTreeControl, [{
        key: "expandAll",
        value: function expandAll() {
          var _this29 = this,
              _this$expansionModel4;

          this.expansionModel.clear();
          /** @type {?} */

          var allNodes = this.dataNodes.reduce(
          /**
          * @param {?} accumulator
          * @param {?} dataNode
          * @return {?}
          */
          function (accumulator, dataNode) {
            return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this29.getDescendants(dataNode)), [dataNode]);
          }, []);

          (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes));
        }
        /**
         * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var descendants = [];

          this._getDescendants(descendants, dataNode); // Remove the node itself


          return descendants.splice(1);
        }
        /**
         * A helper function to get descendants recursively.
         * @protected
         * @param {?} descendants
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "_getDescendants",
        value: function _getDescendants(descendants, dataNode) {
          var _this30 = this;

          descendants.push(dataNode);
          /** @type {?} */

          var childrenNodes = this.getChildren(dataNode);

          if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(
            /**
            * @param {?} child
            * @return {?}
            */
            function (child) {
              return _this30._getDescendants(descendants, child);
            });
          } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /** @type {?} */
            Boolean)).subscribe(
            /**
            * @param {?} children
            * @return {?}
            */
            function (children) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var child = _step.value;

                  _this30._getDescendants(descendants, child);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });
          }
        }
      }]);

      return NestedTreeControl;
    }(BaseTreeControl);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a `CdkTreeNode` to its outlet.
     * Used primarily to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
    /**
     * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */

    var CdkTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function CdkTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, CdkTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    CdkTreeNodeOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeOutlet]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TREE_NODE_OUTLET_NODE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Context provided to the tree node component.
     * @template T
     */


    var CdkTreeNodeOutletContext =
    /**
     * @param {?} data
     */
    function CdkTreeNodeOutletContext(data) {
      _classCallCheck(this, CdkTreeNodeOutletContext);

      this.$implicit = data;
    };
    /**
     * Data node definition for the CdkTree.
     * Captures the node's template and a when predicate that describes when this node should be used.
     * @template T
     */


    var CdkTreeNodeDef =
    /**
     * \@docs-private
     * @param {?} template
     */
    function CdkTreeNodeDef(template) {
      _classCallCheck(this, CdkTreeNodeDef);

      this.template = template;
    };

    CdkTreeNodeDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeDef]',
        inputs: ['when: cdkTreeNodeDefWhen']
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an error to be thrown when there is no usable data.
     * \@docs-private
     * @return {?}
     */


    function getTreeNoValidDataSourceError() {
      return Error("A valid data source must be provided.");
    }
    /**
     * Returns an error to be thrown when there are multiple nodes that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTreeMultipleDefaultNodeDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching node defs for a particular set of data.
     * \@docs-private
     * @return {?}
     */


    function getTreeMissingMatchingNodeDefError() {
      return Error("Could not find a matching node definition for the provided node data.");
    }
    /**
     * Returns an error to be thrown when there are tree control.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlMissingError() {
      return Error("Could not find a tree control for the tree.");
    }
    /**
     * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlFunctionsMissingError() {
      return Error("Could not find functions for nested/flat tree in tree control.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * CDK tree component that connects with a data source to retrieve data of type `T` and renders
     * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
     * @template T
     */


    var CdkTree =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       */
      function CdkTree(_differs, _changeDetectorRef) {
        _classCallCheck(this, CdkTree);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Level of nodes
         */

        this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });
      }
      /**
       * Provides a stream containing the latest data array to render. Influenced by the tree's
       * stream of view window (what dataNodes are currently on screen).
       * Data source can be an observable of data array, or a data array to render.
       * @return {?}
       */


      _createClass(CdkTree, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._dataDiffer = this._differs.find([]).create(this.trackBy);

          if (!this.treeControl) {
            throw getTreeControlMissingError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._nodeOutlet.viewContainer.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          /** @type {?} */
          var defaultNodeDefs = this._nodeDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
          }

          this._defaultNodeDef = defaultNodeDefs[0];

          if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
          }
        } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
        //     and nested trees.

        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          } // Remove the all dataNodes if there is now no data source


          if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;

          if (this._nodeDefs) {
            this._observeRenderChanges();
          }
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this31 = this;

          /** @type {?} */
          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
          } else if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            dataStream = this._dataSource;
          } else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
          }

          if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this31.renderNodeChanges(data);
            });
          } else {
            throw getTreeNoValidDataSourceError();
          }
        }
        /**
         * Check for changes made in the data and render each change (node added/removed/moved).
         * @param {?} data
         * @param {?=} dataDiffer
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "renderNodeChanges",
        value: function renderNodeChanges(data) {
          var _this32 = this;

          var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
          var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
          var parentData = arguments.length > 3 ? arguments[3] : undefined;

          /** @type {?} */
          var changes = dataDiffer.diff(data);

          if (!changes) {
            return;
          }

          changes.forEachOperation(
          /**
          * @param {?} item
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
              _this32.insertNode(data[
              /** @type {?} */
              currentIndex],
              /** @type {?} */
              currentIndex, viewContainer, parentData);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              adjustedPreviousIndex);

              _this32._levels.delete(item.item);
            } else {
              /** @type {?} */
              var view = viewContainer.get(
              /** @type {?} */
              adjustedPreviousIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          });

          this._changeDetectorRef.detectChanges();
        }
        /**
         * Finds the matching node definition that should be used for this node data. If there is only
         * one node definition, it is returned. Otherwise, find the node definition that has a when
         * predicate that returns true with the data. If none return true, return the default node
         * definition.
         * @param {?} data
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getNodeDef",
        value: function _getNodeDef(data, i) {
          if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
          }
          /** @type {?} */


          var nodeDef = this._nodeDefs.find(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.when && def.when(i, data);
          }) || this._defaultNodeDef;

          if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
          }

          return nodeDef;
        }
        /**
         * Create the embedded view for the data node template and place it in the correct index location
         * within the data node view container.
         * @param {?} nodeData
         * @param {?} index
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "insertNode",
        value: function insertNode(nodeData, index, viewContainer, parentData) {
          /** @type {?} */
          var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view

          /** @type {?} */


          var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
          // Otherwise, use the level of parent node.

          if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
          } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level =
            /** @type {?} */
            this._levels.get(parentData) + 1;
          } else {
            context.level = 0;
          }

          this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet

          /** @type {?} */


          var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
          container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
          // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
          //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

          if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
          }
        }
      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
      }]);

      return CdkTree;
    }();

    CdkTree.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'cdk-tree',
        exportAs: 'cdkTree',
        template: "<ng-container cdkTreeNodeOutlet></ng-container>",
        host: {
          'class': 'cdk-tree',
          'role': 'tree'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
        // The view for `CdkTree` consists entirely of templates declared in other views. As they are
        // declared elsewhere, they are checked when their declaration points are checked.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
      }]
    }];
    /** @nocollapse */

    CdkTree.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    CdkTree.propDecorators = {
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      treeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkTreeNodeOutlet, {
          static: true
        }]
      }],
      _nodeDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeDef]
      }]
    };
    /**
     * Tree node for CdkTree. It contains the data in the tree node.
     * @template T
     */

    var CdkTreeNode =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _tree
       */
      function CdkTreeNode(_elementRef, _tree) {
        _classCallCheck(this, CdkTreeNode);

        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */

        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */

        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode =
        /** @type {?} */
        this;
      }
      /**
       * The tree node's data.
       * @return {?}
       */


      _createClass(CdkTreeNode, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          // If this is the last tree node being destroyed,
          // clear out the reference to avoid leaking memory.
          if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
          }

          this._dataChanges.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Focuses the menu item. Implements for FocusableOption.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_setRoleFromData",
        value: function _setRoleFromData() {
          var _this33 = this;

          if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
          } else {
            if (!this._tree.treeControl.getChildren) {
              throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */


            var childrenNodes = this._tree.treeControl.getChildren(this._data);

            if (Array.isArray(childrenNodes)) {
              this._setRoleFromChildren(
              /** @type {?} */
              childrenNodes);
            } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @param {?} children
              * @return {?}
              */
              function (children) {
                return _this33._setRoleFromChildren(children);
              });
            }
          }
        }
        /**
         * @protected
         * @param {?} children
         * @return {?}
         */

      }, {
        key: "_setRoleFromChildren",
        value: function _setRoleFromChildren(children) {
          this.role = children && children.length ? 'group' : 'treeitem';
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._data) {
            this._data = value;

            this._setRoleFromData();

            this._dataChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isExpanded",
        get: function get() {
          return this._tree.treeControl.isExpanded(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "level",
        get: function get() {
          return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        }
      }]);

      return CdkTreeNode;
    }();
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */


    CdkTreeNode.mostRecentTreeNode = null;
    CdkTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'cdk-tree-node',
        exportAs: 'cdkTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.aria-level]': 'role === "treeitem" ? level : null',
          '[attr.role]': 'role',
          'class': 'cdk-tree-node'
        }
      }]
    }];
    /** @nocollapse */

    CdkTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }];
    };

    CdkTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested node is a child of `<cdk-tree>`. It works with nested tree.
     * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
     * be added in the `cdkTreeNodeOutlet` in tree node template.
     * For example:
     *   ```html
     *   <cdk-nested-tree-node>
     *     {{node.name}}
     *     <ng-template cdkTreeNodeOutlet></ng-template>
     *   </cdk-nested-tree-node>
     *   ```
     * The children of node will be automatically added to `cdkTreeNodeOutlet`, the result dom will be
     * like this:
     *   ```html
     *   <cdk-nested-tree-node>
     *     {{node.name}}
     *      <cdk-nested-tree-node>{{child1.name}}</cdk-nested-tree-node>
     *      <cdk-nested-tree-node>{{child2.name}}</cdk-nested-tree-node>
     *   </cdk-nested-tree-node>
     *   ```
     * @template T
     */

    var CdkNestedTreeNode =
    /*#__PURE__*/
    function (_CdkTreeNode) {
      _inherits(CdkNestedTreeNode, _CdkTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       */
      function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this34;

        _classCallCheck(this, CdkNestedTreeNode);

        _this34 = _possibleConstructorReturn(this, _getPrototypeOf(CdkNestedTreeNode).call(this, _elementRef, _tree));
        _this34._elementRef = _elementRef;
        _this34._tree = _tree;
        _this34._differs = _differs;
        return _this34;
      }
      /**
       * @return {?}
       */


      _createClass(CdkNestedTreeNode, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this35 = this;

          this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

          if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
          }
          /** @type {?} */


          var childrenNodes = this._tree.treeControl.getChildren(this.data);

          if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(
            /** @type {?} */
            childrenNodes);
          } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this35.updateChildrenNodes(result);
            });
          }

          this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this35.updateChildrenNodes();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._clear();

          _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Add children dataNodes to the NodeOutlet
         * @protected
         * @param {?=} children
         * @return {?}
         */

      }, {
        key: "updateChildrenNodes",
        value: function updateChildrenNodes(children) {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (children) {
            this._children = children;
          }

          if (outlet && this._children) {
            /** @type {?} */
            var viewContainer = outlet.viewContainer;

            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
          } else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
          }
        }
        /**
         * Clear the children dataNodes.
         * @protected
         * @return {?}
         */

      }, {
        key: "_clear",
        value: function _clear() {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (outlet) {
            outlet.viewContainer.clear();

            this._dataDiffer.diff([]);
          }
        }
        /**
         * Gets the outlet for the current node.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNodeOutlet",
        value: function _getNodeOutlet() {
          var _this36 = this;

          /** @type {?} */
          var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
          // that we don't pick up the outlet of a child node by accident.

          return outlets && outlets.find(
          /**
          * @param {?} outlet
          * @return {?}
          */
          function (outlet) {
            return !outlet._node || outlet._node === _this36;
          });
        }
      }]);

      return CdkNestedTreeNode;
    }(CdkTreeNode);

    CdkNestedTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'cdk-nested-tree-node',
        exportAs: 'cdkNestedTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.role]': 'role',
          'class': 'cdk-tree-node cdk-nested-tree-node'
        },
        providers: [{
          provide: CdkTreeNode,
          useExisting: CdkNestedTreeNode
        }, {
          provide: CDK_TREE_NODE_OUTLET_NODE,
          useExisting: CdkNestedTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    CdkNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }];
    };

    CdkNestedTreeNode.propDecorators = {
      nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeOutlet, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     * @template T
     */

    var CdkTreeNodePadding =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _treeNode
       * @param {?} _tree
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _dir
       */
      function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this37 = this;

        _classCallCheck(this, CdkTreeNodePadding);

        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */

        this.indentUnits = 'px';
        this._indent = 40;

        this._setPadding();

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this37._setPadding(true);
          });
        } // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.


        _treeNode._dataChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this37._setPadding();
        });
      }
      /**
       * The level of depth of the tree node. The padding will be `level * indent` pixels.
       * @return {?}
       */


      _createClass(CdkTreeNodePadding, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * The padding indent value for the tree node. Returns a string with px numbers if not null.
         * @return {?}
         */

      }, {
        key: "_paddingIndent",
        value: function _paddingIndent() {
          /** @type {?} */
          var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
          /** @type {?} */

          var level = this._level == null ? nodeLevel : this._level;
          return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
        }
        /**
         * @param {?=} forceChange
         * @return {?}
         */

      }, {
        key: "_setPadding",
        value: function _setPadding() {
          var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var padding = this._paddingIndent();

          if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            var element = this._element.nativeElement;
            /** @type {?} */

            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */

            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';

            this._renderer.setStyle(element, paddingProp, padding);

            this._renderer.setStyle(element, resetProp, null);

            this._currentPadding = padding;
          }
        }
      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Set to null as the fallback value so that _setPadding can fall back to the node level if the
          // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
          // they set 0 explicitly.
          this._level =
          /** @type {?} */
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);

          this._setPadding();
        }
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         * @return {?}
         */

      }, {
        key: "indent",
        get: function get() {
          return this._indent;
        }
        /**
         * @param {?} indent
         * @return {?}
         */
        ,
        set: function set(indent) {
          /** @type {?} */
          var value = indent;
          /** @type {?} */

          var units = 'px';

          if (typeof indent === 'string') {
            /** @type {?} */
            var parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
          }

          this.indentUnits = units;
          this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._setPadding();
        }
      }]);

      return CdkTreeNodePadding;
    }();

    CdkTreeNodePadding.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodePadding]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodePadding.ctorParameters = function () {
      return [{
        type: CdkTreeNode
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePaddingIndent']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Node toggle to expand/collapse the node.
     * @template T
     */

    var CdkTreeNodeToggle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _tree
       * @param {?} _treeNode
       */
      function CdkTreeNodeToggle(_tree, _treeNode) {
        _classCallCheck(this, CdkTreeNodeToggle);

        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
      }
      /**
       * Whether expand/collapse the node recursively.
       * @return {?}
       */


      _createClass(CdkTreeNodeToggle, [{
        key: "_toggle",
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */
        value: function _toggle(event) {
          this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
          event.stopPropagation();
        }
      }, {
        key: "recursive",
        get: function get() {
          return this._recursive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTreeNodeToggle;
    }();

    CdkTreeNodeToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeToggle]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeToggle.ctorParameters = function () {
      return [{
        type: CdkTree
      }, {
        type: CdkTreeNode
      }];
    };

    CdkTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodeToggleRecursive']
      }],
      _toggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

    var CdkTreeModule = function CdkTreeModule() {
      _classCallCheck(this, CdkTreeModule);
    };

    CdkTreeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
        exports: EXPORTED_DECLARATIONS,
        declarations: EXPORTED_DECLARATIONS,
        providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=tree.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/content/content.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/content/content.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainContentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <div>\n        <div class=\"logo\"></div>\n    </div>\n    <div class=\"pathDefault\">\n        <span *ngIf=\"upperPath\" class=\"prePath\">></span>\n        <span *ngIf=\"upperPath\" class=\"path\">{{upperPath}}</span>\n        <span *ngIf=\"path\" class=\"prePath\">></span>\n        <span *ngIf=\"path\" class=\"path\">{{path}}</span>\n    </div>\n    <div *ngIf=\"!subMenus\" class=\"home\">\n        <div>???????????????</div>\n    </div>       \n    <div *ngIf=\"tabMenus\" class=\"tabDefault\" >\n        <div *ngFor=\"let tab of tabMenus; let idx = index;\" (click)=\"tabChanged(tab)\" class=\"tab\">\n            <div>\n            <input type=\"radio\" id=\"{{tab.web_function}}\" name=\"tab\" value=\"{{tab.web_function}}\"  [checked]=\"idx === 0\">\n                <label for=\"{{tab.web_function}}\">{{tab.web_func_display_text}}</label>             \n            </div>  \n        </div>\n    </div>\n    <div *ngIf=\"subMenus\">  \n        <div class=\"line\"> </div>  \n    </div>\n    <section class=\"carousel slide\" id=\"myCarousel\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item {{i==0?'active':''}}\" *ngFor=\"let chunkProducts of subMenusSplic;let i =index;\">\n            <div class=\"divBlock\">\n                <div  *ngFor=\"let slider of chunkProducts;\" (click)=\"RestApi(slider,'_blank')\">\n                        <img class=\"img-content\" [src]=\"slider['web_obj_display_image']\" alt=\"Carousel 1\">\n                        <div class=\"txt-content\">{{slider.web_obj_display_text}}</div>\n                </div>\n            </div>              \n        </div>\n\n    </div>\n    <div style=\"display: inline-block\" *ngIf=\"showIndicators==true\">\n        <ol class=\"carousel-indicators\"> \n            <li data-target=\"#myCarousel\" *ngFor=\"let li of subMenusSplic; let i = index;\" [attr.data-slide-to]=\"i\" [ngClass]=\"{'active' : i == 0}\" ></li>    \n        </ol>\n    </div>\n</section>\n    <div *ngIf=\"selMenuBK !=null && subMenus\"  class=\"menuBk\">\n        <img src='assets/images/content/{{selMenuBK}}.png' >\n    </div>        \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flexBlock\">\n    <div class=\"fb MenuBlock\">\n        <app-menu></app-menu>\n    </div>\n    <div class=\"fb ContentBlock\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/menu/menu.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/menu/menu.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"main\">\n  <div class=\"home\" (click)=\"home();\">\n    <div>\n      <img src='assets/images/icon-home.png' >\n    </div>\n  </div>\n  <div class=\"logout\" (click)=\"logout();\">\n    <div>\n      <img src='assets/images/icon-Logout.png' >\n    </div>  \n    <div class=\"font\" >??????</div>\n  </div>\n\n</div>\n<cdk-virtual-scroll-viewport itemSize=\"90\" class=\"v-scroll\">\n  <div class=\"menu\">\n    <div *cdkVirtualFor=\"let item of menuData\" >\n      <div class=\"menuItem\" \n        (click)=\"menuItemClick(item)\"\n      >\n      <img src='assets/images/object-icon/{{item.web_menu_display_icon}}.png' *ngIf=\"item.web_menu_display_icon\"><br>\n      {{item.web_func_display_text}}\n      </div>\n      <div *ngIf=\"item.children && item.expanded\" style=\"background-color: #fff;\">\n        <div *ngFor=\"let child of item.children;let idx=index;\"  (click)=\"childItemClick(item,child)\" class=\"childitem\">\n          <div>\n          <input type=\"radio\" id=\"{{child.web_function}}\" name=\"menu\" value=\"{{child.web_function}}\" [checked]=\"idx === 0\">\n          <label for=\"{{child.web_function}}\">{{child.web_function_short_name}}</label>\n          </div> \n        </div>\n      </div>\n    </div>\n  </div>\n</cdk-virtual-scroll-viewport>\n<div class=\"forgetPassword\" (click)=\"modifyPwd();\">\n  <div>\n    <img src=\"assets/images/forget-password.png\">????????????\n  </div>\n  \n</div>";
    /***/
  },

  /***/
  "./src/app/main/content/content.component.css":
  /*!****************************************************!*\
    !*** ./src/app/main/content/content.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainContentContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.top{\n    position: relative;\n}\n.tabDefault{\n    margin-top: 0%;\n    display:flex;\n    flex-direction: row; \n}\n.tab{\n    text-align: center;\n    width: 30%;\n    margin-left: -5%;\n    z-index: 1;\n}\n.tab:first-of-type{\n    width: 25%;\n    margin-left: 0%;\n    z-index: 99;\n}\n.tab>div input[type=\"radio\"]{\n    opacity: 0;\n    display: none;\n    width: 0;\n}\n.tab>div label{   \n    border-radius: 0px 42px 0px 0px;\n    border: 2px solid #009CC8;\n    background-color: #fff;\n    border-left: 0px;\n    display: block;\n    padding: 10px 20px;\n    z-index: 1;\n    font-size: 15px;\n  }\n.tab>div>input[type=\"radio\"]:checked+label{\n    background: transparent linear-gradient(180deg,#0CC1F1 0%, #0A7A9A 100%) 0% 0% no-repeat padding-box;\n    /* background: transparent linear-gradient(180deg, #0CC1F1 0%, #0A7A9A 100%) 0% 0% no-repeat padding-box; */\n    /* border: 2px solid #009CC8;\n    border-radius: 0px 42px 0px 0px; */\n    color: #FFFFFF;\n    z-index: -1;\n    font-size: 15px;\n  }\n/* .tab:first-of-type>div>input[type=\"radio\"]:checked+label{\n    background: transparent linear-gradient(180deg, #0CC1F1 0%, #0A7A9A 100%) 0% 0% no-repeat padding-box;\n    color: #FFFFFF;\n    z-index: 99;\n  } */\n.divBlock{\n    margin-top: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    width:90%;\n    height:90%;\n    display:inline-block;\n    /* text-align: center; */\n    position: relative;\n    z-index: 2;\n}\n.divBlock>div{\n    width:25%;\n    height: 50%;\n    display: inline-block;\n    z-index: 3;\n    text-align: center;\n    margin-bottom: 5%;\n    vertical-align: top;\n}\n.home{\n    background-image: url('homepage.png');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: 80% 80%;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0%;\n    width: 100%;\n    background-size: 60%;\n    z-index: -99;\n    opacity: 1;\n}\n.home>div{\n  color: #00428B;\n  position: fixed;\n  letter-spacing: NaNpx;\n  opacity: 1;\n  font-size: 40px;\n  top: 38%;\n  left: 40%;\n  font-weight: 900;\n}\n.logo{\n    width: 100%;\n    height: 100%;\n    background-image: url('Allianz_logo.png');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: 95% 5%;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0%;\n    width: 100%;\n    background-size: 15%;\n    z-index: -99;\n    opacity: 1;\n    /* border-bottom: chocolate 1px solid; */\n}\n.prePath\n{    \n    color: #0098C8;\n    font-weight: 900;\n    font-size: 25px;\n    opacity: 1;\n}\n.path{\n    margin-left: 1%;\n    margin-right: 1%;\n    text-align: center;\n    font-size: 25px;\n    font-weight: 900;\n    letter-spacing: 1.8px;\n    color:#00428B;\n}\n.pathDefault{\n    font-family: sans-serif;\n    margin-top: 8%;\n    margin-bottom: 2%;\n    margin-left: 5%;\n}\n.line{\n    width: 100%;\n    height: 8px;\n    background: #009CC8 0% 0% no-repeat padding-box;\n}\n.menuBk{\n    position: fixed;\n    top: 62%;\n    bottom: 0;\n    left: 65%;\n    z-index: 1;  \n}\n.menuBk>img{\n  width: 88%;\n}\n.img-content\n{\n  width: 50%;\n  height: auto;\n}\n.txt-content\n{\n  width: 100%;\n  height: auto;\n  margin-top: 1%;\n  font-size: 15px;\n}\nlabel{\n  margin-bottom: 0;\n}\n.carousel {\n  position: relative;\n}\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: 0s 0.6s opacity;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right {\n    transition: none;\n  }\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n  .carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  list-style: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n.carousel-indicators li {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 10px;\n  height: 10px;\n  /* margin-right: 3px;\n  margin-left: 3px; */\n  text-indent: -999px;\n  cursor: pointer;\n  /* background-color: #fff; */\n  background: #4890D9 0% 0% no-repeat padding-box;\n  background-clip: padding-box;\n  border: 5px solid transparent;\n  opacity: .5;\n  transition: opacity 0.6s ease;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n.carousel-indicators ol {\n  width: 100%;\n  height: 10%;\n  margin: 0;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  /* padding-top: 20px;\n  padding-bottom: 20px; */\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNFO0lBQ0UsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDQTtJQUNFLG9HQUFvRztJQUNwRywyR0FBMkc7SUFDM0c7c0NBQ2tDO0lBQ2xDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOzs7O0tBSUc7QUFDTDtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFDQUFvRTtJQUNwRSw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlDQUFnRTtJQUNoRSw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osVUFBVTtJQUNWLHdDQUF3QztBQUM1QztBQUNBOztJQUVJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBRUUsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUUzQixzQ0FBc0M7QUFFeEM7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjtBQUVBOztFQUdFLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUU1QixlQUFlO0FBQ2pCO0FBRUE7OztFQUdFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0U7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBRVYsYUFBYTtFQUViLG1CQUFtQjtFQUVuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0U7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTs7O0VBR0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFFQTtFQUNFLFFBQVE7QUFDVjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtDQUErQztFQUMvQywwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLG1NQUFtTTtBQUNyTTtBQUVBO0VBQ0UsbU1BQW1NO0FBQ3JNO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUVYLGFBQWE7RUFFYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsdUJBQXVCO0VBRXZCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaO3FCQUNtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQ0FBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYO3lCQUN1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGFiRGVmYXVsdHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG59XG4udGFie1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNSU7XG4gICAgei1pbmRleDogMTtcbn1cbi50YWI6Zmlyc3Qtb2YtdHlwZXtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICB6LWluZGV4OiA5OTtcbn1cbi50YWI+ZGl2IGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG59XG4gIC50YWI+ZGl2IGxhYmVseyAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA0MnB4IDBweCAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwOUNDODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC50YWI+ZGl2PmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVse1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzBDQzFGMSAwJSwgIzBBN0E5QSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzBDQzFGMSAwJSwgIzBBN0E5QSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7ICovXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzAwOUNDODtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNDJweCAwcHggMHB4OyAqL1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAvKiAudGFiOmZpcnN0LW9mLXR5cGU+ZGl2PmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVse1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwQ0MxRjEgMCUsICMwQTdBOUEgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHotaW5kZXg6IDk5O1xuICB9ICovXG4uZGl2QmxvY2t7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgd2lkdGg6OTAlO1xuICAgIGhlaWdodDo5MCU7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uZGl2QmxvY2s+ZGl2e1xuICAgIHdpZHRoOjI1JTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgei1pbmRleDogMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5ob21le1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250ZW50L2hvbWVwYWdlLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MCUgODAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xuICAgIHotaW5kZXg6IC05OTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmhvbWU+ZGl2e1xuICBjb2xvcjogIzAwNDI4QjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZXR0ZXItc3BhY2luZzogTmFOcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdG9wOiAzOCU7XG4gIGxlZnQ6IDQwJTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5sb2dve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQWxsaWFuel9sb2dvLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgNSU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNSU7XG4gICAgei1pbmRleDogLTk5O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogY2hvY29sYXRlIDFweCBzb2xpZDsgKi9cbn1cbi5wcmVQYXRoXG57ICAgIFxuICAgIGNvbG9yOiAjMDA5OEM4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG4ucGF0aHtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuOHB4O1xuICAgIGNvbG9yOiMwMDQyOEI7XG59XG4ucGF0aERlZmF1bHR7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmxpbmV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZDogIzAwOUNDOCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4ubWVudUJre1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYyJTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNjUlO1xuICAgIHotaW5kZXg6IDE7ICBcbn1cbi5tZW51Qms+aW1ne1xuICB3aWR0aDogODglO1xufVxuLmltZy1jb250ZW50XG57XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi50eHQtY29udGVudFxue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5sYWJlbHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsLnBvaW50ZXItZXZlbnQge1xuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcm91c2VsLWlubmVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jYXJvdXNlbC1pdGVtIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJvdXNlbC1pdGVtLW5leHQ6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpLFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLmNhcm91c2VsLWl0ZW0tcHJldjpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpLFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCxcbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDBzIDAuNnMgb3BhY2l0eTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCxcbiAgLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNSU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldjpob3ZlciwgLmNhcm91c2VsLWNvbnRyb2wtcHJldjpmb2N1cyxcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0OmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogMDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcbiAgZmxleDogMCAxIGF1dG87XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIC8qIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4OyAqL1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gIGJhY2tncm91bmQ6ICM0ODkwRDkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIG9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW46IDA7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAxNSU7XG4gIHotaW5kZXg6IDEwO1xuICAvKiBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7ICovXG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/content/content.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/main/content/content.component.ts ***!
    \***************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppMainContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
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


    var _service_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/menu.service */
    "./src/app/service/menu.service.ts");
    /* harmony import */


    var _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/common-utility/common-utility.module */
    "./src/app/shared/common-utility/common-utility.module.ts");
    /* harmony import */


    var _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/api-common/api-common.module */
    "./src/app/service/api-common/api-common.module.ts");

    var ContentComponent =
    /*#__PURE__*/
    function () {
      function ContentComponent(route, router, menuService, //private mstrLoginService: MstrLoginService,
      apiCommon, commonUtility) {
        var _this38 = this;

        _classCallCheck(this, ContentComponent);

        this.route = route;
        this.router = router;
        this.menuService = menuService;
        this.apiCommon = apiCommon;
        this.commonUtility = commonUtility;
        this.showIndicators = false;
        this.subMenuCnt = 0;
        this.iconPath = "assets/images/object-icon/";
        this.route.params.subscribe(function (params) {
          _this38.code = params["code"]; // this.selMenuBK= commonUtility.tranNull(this.commonUtility.getSessionValue("selMenuBK"));

          _this38.selMenuBK = _this38.commonUtility.getSessionValue("selMenuBK");

          if (_this38.selMenuBK == 'null') {
            _this38.selMenuBK = 'pic-Default';
          }

          if (_this38.code != null) {
            console.warn("content_A" + _this38.code);

            _this38.getTabMenu(_this38.code);
          } else {
            console.warn("content_B" + _this38.code); //this.subMenus = JSON.parse(sessionStorage.getItem("object"));
          } // this.menuService.getSubMenus(this.code)
          // .subscribe(subMenus=>this.subMenus= subMenus);

        }); // this.itemCount = this.subMenus.length;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //let code = this.route.snapshot.paramMap.get('code');
          console.log("content_init_" + this.code); // this.selMenuBK= commonUtility.tranNull(this.commonUtility.getSessionValue("selMenuBK"));

          this.selMenuBK = this.commonUtility.getSessionValue("selMenuBK");

          if (this.selMenuBK == 'null') {
            this.selMenuBK = 'pic-Default';
          }

          console.log("content_init_BK_" + this.selMenuBK);

          if (this.code != null) {
            this.getTabMenu(this.code);
          }
        }
      }, {
        key: "getTabMenu",
        value: function getTabMenu(code) {
          this.tabItem = JSON.parse(this.commonUtility.getSessionValue("currentMenu"));
          this.upperPath = this.tabItem.web_func_display_text;
          this.path = "";

          if (this.tabItem.children != null) {
            this.tabMenus = this.tabItem.children;
            this.tabMenus.sort(function (a, b) {
              return a.upper_display_order - b.upper_display_order;
            });
            this.tabChanged(this.tabMenus[0]); // this.getSubMenu(this.tabMenus[0].web_function);
          } else {
            this.tabMenus = null;
            this.getSubMenu(code);
          }
        }
      }, {
        key: "tabChanged",
        value: function tabChanged(code) {
          this.selTab = code.web_function;
          this.path = code.web_func_display_text;
          this.getSubMenu(code.web_function); // this.getSubMenu(${$event.tab})
          // this.messages.push(`Selected Index: ${$event.index} Label: ${$event.tab.label}`);
          // this.logMessage = this.messages.join('\n');
        }
      }, {
        key: "getSubMenu",
        value: function getSubMenu(code) {
          var _this39 = this;

          //const code = +this.route.snapshot.paramMap.get('code');
          console.log(this.route.snapshot.paramMap);
          console.warn(code + '_content');
          this.menuService.getSubMenus(code).subscribe(function (subMenus) {
            return _this39.subMenus = subMenus;
          });
          this.subMenus.sort(function (a, b) {
            return a.display_order - b.display_order;
          });
          this.subMenuCnt = 0;
          this.subMenus.forEach(function (obj) {
            _this39.subMenuCnt++;

            if (obj.web_obj_display_image != 'null' && obj.web_obj_display_image.toUpperCase() != 'X') {
              obj.web_obj_display_image = "".concat(_this39.iconPath).concat(obj.web_obj_display_image, ".png");
            } else {
              obj.web_obj_display_image = "".concat(_this39.iconPath, "icon-default.png");
            }
          });
          this.subMenusSplic = this.chunks();

          if (this.subMenuCnt > this.commonUtility.contentSize) {
            this.showIndicators = true;
          } else {
            this.showIndicators = false;
          } // menus=>this.menus=menus


          console.log("submenu_" + this.subMenuCnt + "_" + this.showIndicators);
        }
        /*   checkMstrNeedLogin(dashboardUseMode: string): boolean {
            var mstrSession: MstrSessionDetail;
            var dateNow: string;
            var needLogin: boolean = true;
            dateNow = this.commonUtility.Date + this.commonUtility.TimeStamp
            mstrSession = this.getMstrSession(dashboardUseMode);
            if (mstrSession != null) {
              if (mstrSession.sessionExpiredTime >= dateNow) {
                needLogin = false;
              }
            }
            return needLogin;
          } */

        /*   getMstrSession(dashboardUseMode: string): MstrSessionDetail {
            var mstrSession: MstrSessionDetail = null;
            switch (dashboardUseMode.toUpperCase()) {
              case "CURRENT USER_N":
              case "CURRENT USER":
                if (sessionStorage.getItem("CurrentSession") != null) {
                  mstrSession = JSON.parse(this.commonUtility.getSessionValue("CurrentSession"));
                }
                break;
              default:
                if (sessionStorage.getItem("SingleSession") != null) {
                  mstrSession = JSON.parse(this.commonUtility.getSessionValue("SingleSession"));
                }
                break;
            }
            return mstrSession;
          } */

        /* mstrLogin(menu: ObjectNode, target:string) {
          var mstrSession: MstrSessionDetail;
          var bolIsNeedLogin: boolean;
          var dashboardUseMode: string = menu.dashboard_use_mode;
          var msg: ModalOptions;
          var result: boolean = true;
          var now = new Date();
          now.setMinutes(now.getMinutes() + 8); // timestamp
          now = new Date(now); // Date object
             var urlLink: string = menu.web_obj_link_url;      //????????????
          var arrUrlParm: string[] = urlLink.split("&");    //??????array
             var mstrProject: string;
          var mstrPort: string;
             var url:string= "";
          console.log(target);
          bolIsNeedLogin = this.checkMstrNeedLogin(dashboardUseMode);
          arrUrlParm.forEach(parm => {
            var parmVal: string[] = parm.split("=")
            switch (parmVal[0].toUpperCase()) {
              case "PROJECT":
                mstrProject = parmVal[1];
                break;
              case "PORT":
                mstrPort = parmVal[1];
                break;
              default:
                break;
            };
          });
          if (bolIsNeedLogin) {
            this.mstrLoginService.mstrLogin(mstrProject, this.commonUtility.getSessionValue("loginUser"), dashboardUseMode)
              .subscribe(
                res => {
                  this.loadingService.hide();
                  switch (res.ResponseDetails.responseCode) {
                    case "000":
                      let mstrSession:MstrSessionDetail={
                        dashboardUseMode : dashboardUseMode,
                        sessionInfo:res.sessionInfo,
                        sessionState:res.sessionState,
                        sessionExpiredTime:this.commonUtility.formatDate(now)+this.commonUtility.formatTime(now),
                        iServer:res.iServer,
                        iisServer:res.iisServer
                      };
                      switch(dashboardUseMode.toUpperCase())
                      {
                        case "CURRENT USER_N":
                          case "CURRENT USER":
                            this.commonUtility.setSessionValue("CurrentSession",JSON.stringify(mstrSession));
                            break;
                          default:
                            this.commonUtility.setSessionValue("SingleSession",JSON.stringify(mstrSession));
                            break;
                      }
                      console.log("login");
                      console.log(mstrSession);
                      this.exexDoc(arrUrlParm,mstrSession,menu.web_obj_attribute,target);
                      result=true;
                      break;
                    case "008":
                      msg = {
                        headText: 'MSTR????????????',
                        txtContent: res.ReasonCode.map(
                          item =>
                            `${item.reasonMsg}(????????????${item.reasonCode})`
                        )
                          .join(' '),
                        type: ModalType.Confirm
                      };
                      this.modalService.open(msg,'sm');
                      result = false;
                      break;
                    default:
                      msg = {
                        headText: 'MSTR????????????',
                        txtContent: '??????????????????????????????????????????',
                        type: ModalType.Confirm
                      };
                      this.modalService.open(msg,'sm');
                      result = false;
                      break;
                  };
                },
                ()=>{
                  console.log('mstrlogin_oncomplete');
                  if (result)
                  {
                    console.log(mstrSession);
                  }
                }
              )
          }
          else {
            console.log("no login");
            mstrSession = this.getMstrSession(dashboardUseMode);
            this.exexDoc(arrUrlParm,mstrSession,menu.web_obj_attribute,target);
          }
        }
        */

        /*   exexDoc(arrUrlParm:string[], mstrSession:MstrSessionDetail, objAttribute:string, target:string ){
            var urlPrefix: string = this.commonUtility.getUrlPrefix();
            var rptUrl: string = "/microstrategy/asp/Main.aspx?";
            var dashboardUseMode= mstrSession.dashboardUseMode;
            var UrlParm: string = "";
            var domain:string = mstrSession.iisServer;
            var iServer:string=mstrSession.iServer;
            var mstrLoginSession ="";
            var msg: ModalOptions;
            var url:string= "";
            console.log("execDoc");
            // switch (envData.env) {
            //   case "10":
            //     domain = "113.196.86.112";
            //     break;
            // }
            switch (dashboardUseMode.toUpperCase()) {
              case "CURRENT USER_N":
                mstrLoginSession = mstrSession.sessionInfo;
                break;
              default:
                mstrLoginSession = mstrSession.sessionState;
                UrlParm = "Server=" + iServer + "&";
                break;
            }
            arrUrlParm.forEach(parm => {
              var parmVal: string[] = parm.split("=")
              switch (dashboardUseMode.toUpperCase()) {
                case "CURRENT USER_N":
                  switch (parmVal[0].toUpperCase()) {
                    case "CURRENTVIEWMEDIA":
                    case "VISMODE":
                      switch (objAttribute.toUpperCase()) {
                        case "DASHBOARD":
                          //UrlParm += "&share=1";
                          break;
                        default:
                          UrlParm += parm + "&";
                          break;
                      }
                      break;
                    case "PROJECT":
                    case "SERVER":
                    case "PORT":
                      break;
                    default:
                      UrlParm += parm + "&";
                      break;
                  }
                  break;
                case "CURRENT USER":
                case "SINGLE USER":
                  switch (parmVal[0].toUpperCase()) {
                    case "CURRENTVIEWMEDIA":
                    case "VISMODE":
                      switch (objAttribute.toUpperCase()) {
                        case "DASHBOARD":
                          //UrlParm += "&share=1";
                          break;
                        default:
                          UrlParm += parm + "&";
                          break;
                      }
                      break;
                    default:
                      UrlParm += parm + "&";
                      break;
                  }
                  break;
              }
        
            });
            switch (objAttribute.toUpperCase()) {
              case "DASHBOARD":
                UrlParm += "share=1&";
                break;
            }
            UrlParm += "hiddensections=header,path,dockTop,dockLeft,footer&";
            UrlParm += "mstrSmgr=" + mstrLoginSession;
            // this.modalService.open(msg,'lg');
            // console.log(urlPrefix + domain + rptUrl + UrlParm);
            //this.commonUtility.openUrl('', '_blank');
            url = urlPrefix + domain + rptUrl + UrlParm
            sessionStorage.setItem("objUrl",urlPrefix + domain + rptUrl + UrlParm );
            console.log(urlPrefix + domain + rptUrl + UrlParm);
            // this.commonUtility.openRouteUrl(url,'_blank');
            //this.openDoc();
            this.commonUtility.openUrl(urlPrefix + domain + rptUrl + UrlParm, target);
          } */

      }, {
        key: "RestApi",
        value: function RestApi(menu, target) {
          var apiId = "mstrRestApiPage";
          var ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
          var parm = "";
          var apiUrl = "".concat(ApiConfig.domain).concat(ApiConfig.path);
          parm = "?SystemCode=" + this.commonUtility.systemId;
          parm += "&Token=" + this.commonUtility.getSessionValue('authenticationToken');
          parm += "&ObjectId=" + menu.web_object;
          parm += "&accType=" + this.commonUtility.accType;
          console.log(apiUrl);
          this.commonUtility.openUrl(apiUrl + parm, target);
        }
      }, {
        key: "chunks",
        value: function chunks() {
          var results = [];
          results = [];
          console.log(this.subMenus.length);

          while (this.subMenus.length) {
            results.push(this.subMenus.splice(0, this.commonUtility.contentSize));
          }

          console.log(results);
          return results;
        }
      }, {
        key: "test",
        value: function test(parm) {
          console.log(parm);
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }, {
        type: _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_5__["ApiCommonModule"]
      }, {
        type: _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_4__["CommonUtilityModule"]
      }];
    };

    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/content/content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content.component.css */
      "./src/app/main/content/content.component.css")).default]
    })], ContentComponent);
    /***/
  },

  /***/
  "./src/app/main/main-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function srcAppMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
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


    var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/main/content/content.component.ts");

    var routes = [{
      path: '',
      component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
      children: [{
        path: ':code',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]
      }, {
        path: '',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]
      }]
    }];

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/main.component.css":
  /*!*****************************************!*\
    !*** ./src/app/main/main.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nbody{\n    overflow-y: hidden; /* Hide vertical scrollbar */\n    overflow-x: hidden; /* Hide horizontal scrollbar */\n  }\n.flexBlock{\n    width: 100%;\n    font-family: DFHei Std W14;\n    position: absolute;\n    top:0;\n    bottom: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: row;   \n}\n.flexBlock>.fb{\n    flex:11 auto;\n    width:30px;\n}\n.flexBlock>.MenuBlock{\n    background: #007AB3;\n    width:20%;\n}\n.flexBlock>.ContentBlock{\n    background-image: url('BG-curve.png');\n    background-repeat: no-repeat;\n    background-position: 100% 100%;\n    background-size: contain;\n    width: 80%;\n    padding: 0px;\n}\n.logo{\n    position: absolute; \n    right: 5%; \n    top: 5%;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCLEVBQUUsNEJBQTRCO0lBQ2hELGtCQUFrQixFQUFFLDhCQUE4QjtFQUNwRDtBQUNGO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFNBQVM7SUFDVCxPQUFPOztJQUVQLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLHFDQUFpRTtJQUNqRSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keXtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IC8qIEhpZGUgdmVydGljYWwgc2Nyb2xsYmFyICovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXG4gIH1cbi5mbGV4QmxvY2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IERGSGVpIFN0ZCBXMTQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgIFxufVxuLmZsZXhCbG9jaz4uZmJ7XG4gICAgZmxleDoxMSBhdXRvO1xuICAgIHdpZHRoOjMwcHg7XG59XG4uZmxleEJsb2NrPi5NZW51QmxvY2t7XG4gICAgYmFja2dyb3VuZDogIzAwN0FCMztcbiAgICB3aWR0aDoyMCU7XG59XG4uZmxleEJsb2NrPi5Db250ZW50QmxvY2t7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvQkctY3VydmUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLmxvZ297XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICByaWdodDogNSU7IFxuICAgIHRvcDogNSU7ICBcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
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


    var _service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/menu.service */
    "./src/app/service/menu.service.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(menuService) {
        _classCallCheck(this, MainComponent);

        this.menuService = menuService;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main.component.css")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
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


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _allianz_ngx_ndbx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @allianz/ngx-ndbx */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx.js");
    /* harmony import */


    var _allianz_ngx_ndbx_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/grid */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-grid.js");
    /* harmony import */


    var _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/icon */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-icon.js");
    /* harmony import */


    var _allianz_ngx_ndbx_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/menu */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-menu.js");
    /* harmony import */


    var _allianz_ngx_ndbx_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/sidebar */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-sidebar.js");
    /* harmony import */


    var _allianz_ngx_ndbx_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/action */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-action.js");
    /* harmony import */


    var _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/tree */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tree.js");
    /* harmony import */


    var _allianz_ngx_ndbx_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/tabs */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tabs.js");
    /* harmony import */


    var _allianz_ngx_ndbx_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/config */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-config.js");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/main/main-routing.module.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/main/menu/menu.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/main/content/content.component.ts");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts"); //allianz


    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_15__["ContentComponent"], _main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _allianz_ngx_ndbx__WEBPACK_IMPORTED_MODULE_4__["NxButtonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"], _allianz_ngx_ndbx_grid__WEBPACK_IMPORTED_MODULE_5__["NxGridModule"], _allianz_ngx_ndbx_icon__WEBPACK_IMPORTED_MODULE_6__["NxIconModule"], _allianz_ngx_ndbx_menu__WEBPACK_IMPORTED_MODULE_7__["NxMenuModule"], _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_10__["NxTreeModule"], _allianz_ngx_ndbx_tabs__WEBPACK_IMPORTED_MODULE_11__["NxTabsModule"], _allianz_ngx_ndbx_sidebar__WEBPACK_IMPORTED_MODULE_8__["NxSidebarModule"], _allianz_ngx_ndbx_action__WEBPACK_IMPORTED_MODULE_9__["NxActionModule"], _allianz_ngx_ndbx_config__WEBPACK_IMPORTED_MODULE_12__["NxExpertModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_13__["MainRoutingModule"]]
    })], MainModule);
    /***/
  },

  /***/
  "./src/app/main/menu/menu.component.css":
  /*!**********************************************!*\
    !*** ./src/app/main/menu/menu.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.menuItem{\n  background: #007AB3;\n  color: #FFFFFF;\n  text-align: center;\n  display: block;\n  font-size: 16px;\n  letter-spacing: 2px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.menuItem>img{\n  width: 24%;\n}\n.menuItem:hover{\n  background: #007AB3;\n  color: #FFFFFF;  \n}\n.childitem\n{\n  width: 100%; \n  background-color: #FFFFFF;\n  font-size: 15px;\n}\n.childitem>div\n{\n  text-align: center;\n}\n.childitem>div input[type=\"radio\"]{\n  opacity: 0;\n  display: none;\n  width: 0;\n}\n.childitem>div label{\n  display: block;\n  padding:10px 20px;\n  background-color: #FFFFFF;\n  border-bottom: 1px solid #007AB3;\n}\n.childitem>div input[type=\"radio\"]:checked+label{\n  display: block;\n  padding:10px 20px;\n  background-color: #D4CDCD;\n  color: #007AB3;\n}\n.top {\n  background: #007AB3;\n}\n.menu{\n  margin-top: 0%;\n  padding-top: 0%;\n}\n.main{\n  display: flex;\n  flex-direction: row; \n}\n.home{\n  margin-top: 7%;\n  margin-left: 5%;\n  /* top: 20%;\n  left: 10%;\n  width: 34px;\n  height: 30px; */\n  /* position: relative; */\n  /* UI Properties */\n}\n.home>div>img{\n  width: 85%;\n}\n.logout{\n  margin-top: 7%;\n  margin-left: 38%;\n  display: flex;\n  width:50%;\n  /* top: 20%;\n  left: 50%;\n  width: 37px;\n  height: 35px;\n  opacity: 1; */\n}\n.logout>div{\n  text-align: center;\n}\n.logout>div>img{\n  width: 70%;\n}\n.font{\n  /* margin-top: 10%;\n  margin-left: 2%; */\n  /* margin-top: 5%; */\n  top: 10%;\n  left: 85%;\n  /* UI Properties */\n  font: 16px DFHei Std;\n  letter-spacing: 0;\n  color: #FFFFFF;\n  opacity: 1;\n  margin-left: 1%;\n}\nlabel{\n  margin-bottom: 0;\n}\n.v-scroll{\n  height: 80%;\n  margin-top: 10%;\n  padding-top: 10%;\n}\n.forgetPassword{\n  position: relative;\n  display: flex;\n  margin-top: 15%;\n  width:100%;\n  text-align: left;\n}\n.forgetPassword>div>img{\n  padding-right: 3%;\n  width:24px;\n  margin-top: -3%;\n}\n.forgetPassword>div{\n  color: #fff;\n  font-size: 15px;\n  padding-top: 3%;\n  /* padding-left: 1%; */\n  width: 100%;\n  text-align: center;\n}\n.forgetPassword>div>span{\n  padding-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmOzs7aUJBR2U7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVDs7OztlQUlhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRTtvQkFDa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1lbnVJdGVte1xuICBiYWNrZ3JvdW5kOiAjMDA3QUIzO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWVudUl0ZW0+aW1ne1xuICB3aWR0aDogMjQlO1xufVxuLm1lbnVJdGVtOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjMDA3QUIzO1xuICBjb2xvcjogI0ZGRkZGRjsgIFxufVxuLmNoaWxkaXRlbVxue1xuICB3aWR0aDogMTAwJTsgXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jaGlsZGl0ZW0+ZGl2XG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGlsZGl0ZW0+ZGl2IGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDA7XG59XG4uY2hpbGRpdGVtPmRpdiBsYWJlbHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6MTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwN0FCMztcbn1cbi5jaGlsZGl0ZW0+ZGl2IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVse1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzoxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENENEQ0Q7XG4gIGNvbG9yOiAjMDA3QUIzO1xufVxuXG4udG9wIHtcbiAgYmFja2dyb3VuZDogIzAwN0FCMztcbn1cbi5tZW51e1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuLm1haW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxufVxuLmhvbWV7XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIC8qIHRvcDogMjAlO1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDMwcHg7ICovXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgLyogVUkgUHJvcGVydGllcyAqL1xufVxuLmhvbWU+ZGl2PmltZ3tcbiAgd2lkdGg6IDg1JTtcbn1cbi5sb2dvdXR7XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tbGVmdDogMzglO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDo1MCU7XG4gIC8qIHRvcDogMjAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG9wYWNpdHk6IDE7ICovXG59XG4ubG9nb3V0PmRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ291dD5kaXY+aW1ne1xuICB3aWR0aDogNzAlO1xufVxuLmZvbnR7XG4gIC8qIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDIlOyAqL1xuICAvKiBtYXJnaW4tdG9wOiA1JTsgKi9cbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDg1JTtcbiAgLyogVUkgUHJvcGVydGllcyAqL1xuICBmb250OiAxNnB4IERGSGVpIFN0ZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5sYWJlbHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi52LXNjcm9sbHtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmZvcmdldFBhc3N3b3Jke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgd2lkdGg6MTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3JnZXRQYXNzd29yZD5kaXY+aW1ne1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgd2lkdGg6MjRweDtcbiAgbWFyZ2luLXRvcDogLTMlO1xufVxuLmZvcmdldFBhc3N3b3JkPmRpdntcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMlO1xuICAvKiBwYWRkaW5nLWxlZnQ6IDElOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcmdldFBhc3N3b3JkPmRpdj5zcGFue1xuICBwYWRkaW5nLXRvcDogMyU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/menu/menu.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/menu/menu.component.ts ***!
    \*********************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMainMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/tree */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-tree.js");
    /* harmony import */


    var _class_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../class/modal */
    "./src/app/class/modal.ts");
    /* harmony import */


    var _service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/menu.service */
    "./src/app/service/menu.service.ts");
    /* harmony import */


    var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/modal/modal.service */
    "./src/app/shared/modal/modal.service.ts");
    /* harmony import */


    var _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/api-common/api-common.module */
    "./src/app/service/api-common/api-common.module.ts");
    /* harmony import */


    var _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/common-utility/common-utility.module */
    "./src/app/shared/common-utility/common-utility.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(menuService, commonUtility, modalService, apiCommon, routes, loadingService, appComponent) {
        _classCallCheck(this, MenuComponent);

        this.menuService = menuService;
        this.commonUtility = commonUtility;
        this.modalService = modalService;
        this.apiCommon = apiCommon;
        this.routes = routes;
        this.loadingService = loadingService;
        this.appComponent = appComponent;
        this.messages = [];

        this._hasChild = function (_, node) {
          return node.expandable;
        };

        this._treeControl = new _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__["NxFlatTreeControl"]();
        this._dataSource = new _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__["NxTreeFlatDataSource"](this._treeControl, this.menuData);

        if (sessionStorage.getItem("menu") != null || sessionStorage.getItem("object") != null) {
          this.menuData = JSON.parse(this.commonUtility.getSessionValue("menu"));
          console.log("constructor");
        }
      }

      _createClass(MenuComponent, [{
        key: "log",
        value: function log(value) {
          this.messages.push('New width value: ' + value);
          this.logMessage = this.messages.join('\n');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMenus();
        }
      }, {
        key: "getMenus",
        value: function getMenus() {
          var _this40 = this;

          if (sessionStorage.getItem("menu") == null || sessionStorage.getItem("object") == null) {
            var msg;
            this.menuService.getMenus().subscribe(function (res) {
              console.log('get Menu OK');
              console.log(res);

              _this40.loadingService.hide();

              switch (res.ReturnCode) {
                case 0:
                  sessionStorage.setItem("menu", JSON.stringify(res.ReturnResult.menu));
                  sessionStorage.setItem("object", JSON.stringify(res.ReturnResult.object));
                  _this40._treeControl = new _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__["NxFlatTreeControl"]();
                  _this40._dataSource = new _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__["NxTreeFlatDataSource"](_this40._treeControl, JSON.parse(_this40.commonUtility.getSessionValue("menu")));
                  _this40.menuData = JSON.parse(_this40.commonUtility.getSessionValue("menu")); // this.menuData.sort();

                  break;

                default:
                  msg = {
                    headText: '????????????',
                    txtContent: '?????????????????????????????????',
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Confirm
                  };

                  _this40.modalService.open(msg, 'sm');

                  break;
              }

              ;
            });
          } else {
            console.log("oninit");
            this.menuData = JSON.parse(this.commonUtility.getSessionValue("menu"));
            this._treeControl = new _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__["NxFlatTreeControl"]();
            this._dataSource = new _allianz_ngx_ndbx_tree__WEBPACK_IMPORTED_MODULE_3__["NxTreeFlatDataSource"](this._treeControl, JSON.parse(this.commonUtility.getSessionValue("menu")));
          }
        }
      }, {
        key: "menuItemClick",
        value: function menuItemClick(item) {
          this.menuData.forEach(function (allItem) {
            allItem.expanded = false;
          });
          item.expanded = true;
          sessionStorage.setItem("selMenuBK", item.web_menu_display_background);

          if (item.children) {
            this.childData = item.children;
            this.childData.sort(function (a, b) {
              return a.upper_display_order - b.upper_display_order;
            });
            this.childItemClick(item, this.childData[0]);
          } else {
            this.func(item);
          }
        }
      }, {
        key: "childItemClick",
        value: function childItemClick(item, child) {
          sessionStorage.setItem("currentMenu", JSON.stringify(child));
          console.log(child);
          this.func(child);
        }
      }, {
        key: "func",
        value: function func(item) {
          console.log(item.web_function);
          sessionStorage.setItem("currentMenu", JSON.stringify(item));
          this.routes.navigate(['/main', item.web_function]);
        }
      }, {
        key: "home",
        value: function home() {
          this.menuData.forEach(function (allItem) {
            allItem.expanded = false;
          });
          this.routes.navigateByUrl('/main');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.appComponent.logout(); // sessionStorage.clear();
          // this.routes.navigateByUrl('/');
          // this.commonUtility.logout();
        }
      }, {
        key: "modifyPwd",
        value: function modifyPwd() {
          var Page;
          var account = this.commonUtility.getSessionValue("loginUser");
          Page = this.apiCommon.getApiUrl("modifyPwdPage");
          this.commonUtility.modifyPwd(account, Page); // this.logout();
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _service_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
      }, {
        type: _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_9__["CommonUtilityModule"]
      }, {
        type: _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]
      }, {
        type: _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_8__["ApiCommonModule"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/main/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/service/menu.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/menu.service.ts ***!
    \*****************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppServiceMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
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


    var _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/api-common/api-common.module */
    "./src/app/service/api-common/api-common.module.ts");
    /* harmony import */


    var _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/common-utility/common-utility.module */
    "./src/app/shared/common-utility/common-utility.module.ts");
    /* harmony import */


    var _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts"); // import {menuData,ObjectData} from '../mock-data/menu';


    var MenuService =
    /*#__PURE__*/
    function () {
      function MenuService(apiCommon, commonUtility, loadingService, http) {
        _classCallCheck(this, MenuService);

        this.apiCommon = apiCommon;
        this.commonUtility = commonUtility;
        this.loadingService = loadingService;
        this.http = http;
        this.apiId = "mstrMenu";
      }

      _createClass(MenuService, [{
        key: "getMenus",
        value: function getMenus() {
          var _this41 = this;

          console.log(this.apiId);
          this.ApiConfig = this.apiCommon.getApiConfigByApiID(this.apiId);
          var apiUrl = "".concat(this.ApiConfig.domain).concat(this.ApiConfig.path);
          var userId = "";
          var accSource = "";
          console.log(apiUrl);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'UKEY': this.commonUtility.getSessionValue('authenticationToken'),
              'KeyId': this.ApiConfig.keyId
            })
          };
          this.loadingService.show();
          accSource = this.commonUtility.getSessionValue("accSource");

          switch (accSource) {
            case "STAFF":
              userId = this.commonUtility.getSessionValue("loginUser");
              break;

            default:
              userId = this.commonUtility.getSessionValue("agentId");
              break;
          }

          var rqbody = {
            UKEY: this.commonUtility.getSessionValue('authenticationToken'),
            WEB_SYSTEM_CODE: this.commonUtility.systemCode,
            USER_TYPE: accSource,
            USER_ID: userId
          };
          console.log(rqbody);
          return this.http.post(apiUrl, JSON.stringify(rqbody), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(90 * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log('error:', error);

            _this41.loadingService.hide();

            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {}

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }, {
        key: "getSubMenus",
        value: function getSubMenus(code) {
          var objData = JSON.parse(sessionStorage.getItem("object"));
          console.log(code + "_Service");
          console.log(code);
          console.log(objData);
          console.log(objData.filter(function (menu) {
            return menu.web_function == code;
          }));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(objData.filter(function (menu) {
            return menu.web_function == code;
          })); //return of (ObjectData.find(menu=>menu.web_function==code));
          //return of(HEROES.find(hero=>hero.id==id));
        }
      }]);

      return MenuService;
    }();

    MenuService.ctorParameters = function () {
      return [{
        type: _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_5__["ApiCommonModule"]
      }, {
        type: _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_6__["CommonUtilityModule"]
      }, {
        type: _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MenuService);
    /***/
  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map