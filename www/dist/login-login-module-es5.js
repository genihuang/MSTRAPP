function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n  <div class=\"root1\"></div>\n  <div class=\"root2\"></div>\n  <img src=\"assets/images/Allianz_logo.png\" class=\"logo\"/>\n\t<div class=\"LoginForm\">\n    <img src=\"assets/images/Allianz-EN.png\" class=\"logoEn\" />\n    <div class=\"appName\">安聯ｅ智慧</div>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onClickSubmit(loginForm.value)\">\n      <div class=\"LoginInputGroup\">\n        <div class=\"LoginInputGroup-prepend\">\n          <span class=\"LoginInputGroup-text\" id=\"basic-addon1\"><i class=\"fas fa-user-alt\"></i></span>\n        </div>\n        <div class=\"LoginInputGroup-cut\"><div></div></div>\n        \n        <input type=\"text\" class=\"form-control\" placeholder=\"使用者名稱\" id=\"account\" formControlName=\"account\">\n      </div>\n      <div class=\"LoginInputGroup\">\n        <div class=\"LoginInputGroup-prepend\">\n          <span class=\"LoginInputGroup-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n        </div>\n        <div class=\"LoginInputGroup-cut\"><div></div></div>\n        <input type=\"password\" class=\"form-control\" placeholder=\"密碼\" id=\"pwd\" formControlName=\"pwd\">\n       \n      </div>\n      <input class=\"btnLogin\" type=\"submit\" value=\"登入\"/>\n      <div class=\"forgetPassword\" (click)=\"forgetPassword();\">\n        <div>\n          <img src=\"assets/images/forget-password.png\">忘記密碼\n        </div>\n        \n      </div>\n    </form>\n  </div>\n  <div class=\"version\">{{appEnvironment}}版本：{{appVersion}}</div>\n  <div class=\"maintain\" *ngIf=\"isShowMaintain\">\n    <div class=\"title\">系統維護公告</div>\n    <div>「安聯ｅ智慧」將於{{showBeginTime}} 起到<br>\n      {{showEndTime}} 期間進行停機維護，屆時<br>\n      將無法登入使用。</div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css?family=Poppins');\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css');\nbody{\n  overflow-y: hidden; /* Hide vertical scrollbar */\n  overflow-x: hidden; /* Hide horizontal scrollbar */\n}\n.top{\n  position:relative;\n  font-family: DFHei Std W14;\n}\n.logo{\n  position: fixed; \n  right: 5%; \n  top: 5%;  \n}\n.LoginInputGroup {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  padding-bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.forgetPassword{\n  position: relative;\n  display: flex;\n  margin-top: 4%;\n  width:100%;\n  text-align: right;\n}\n.forgetPassword>div>img{\n  padding-right: 3%;\n  width:24px;\n  margin-top: -3%;\n}\n.forgetPassword>div{\n  color: #fff;\n  font-size: 15px;\n  padding-top: 3%;\n  padding-left: 1%;\n  width: 100%;\n}\n.forgetPassword>div>span{\n  padding-top: 3%;\n}\n.LoginInputGroup-prepend {\n  margin-right: -1px;\n  display: flex;\n}\n.LoginInputGroup-cut{\n  background-color:#fff\n}\n.LoginInputGroup-cut>div{\n  width: 2px;\n  height: 27px;\n  top: 3px;\n  background-color: #bdbdbd;\n  position: relative;\n}\n.LoginInputGroup>.LoginInputGroup-prepend>.LoginInputGroup-text {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.LoginInputGroup-text {\n  display: flex;\n  align-items: center;\n  padding: .375rem .75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #0f4d92;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: .25rem;\n}\n.LoginInputGroup>.form-control:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.LoginInputGroup>.form-control {\n  position: relative;\n  flex: 11 auto;\n  margin-bottom: 0;\n  width: 30%;\n}\n.LoginInputGroup>.form-control::-webkit-input-placeholder {\n  color: #007ab3;\n}\n.LoginInputGroup>.form-control::-moz-placeholder {\n  color: #007ab3;\n}\n.LoginInputGroup>.form-control::-ms-input-placeholder {\n  color: #007ab3;\n}\n.LoginInputGroup>.form-control::placeholder {\n  color: #007ab3;\n}\n.form-control {\n  display: block;\n  width: 80%;\n  padding: 0.6rem 1rem;\n  font-size: 15px;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border:solid 1px #fff;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\ninput {\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  outline:none;\n}\n.root1 { \n  width: 100%;\n  -webkit-clip-path: polygon(0 0, 0 100%, 45% 100%, 65% 0);\n          clip-path: polygon(0 0, 0 100%, 45% 100%, 65% 0);\n  background: #007ab3;\n  position: fixed;\n  margin: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\t\n  z-index:-1;\n}\n.root2{\n  background-image: url('Login-pic.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 90% 90%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-size: 40%;\n  z-index: -1;\n}\n.LoginForm{\n  margin-top:22%;\n  width:35%;\n  padding-left:13%;\n  text-align:center;\n}\n.btnLogin{\n  font-size: 15px;\n  width: 100%;\n  height: 40px;\n  background: #00428B 0% 0% no-repeat padding-box;\n  border: 0;\n  border-radius: 5px;\n  color:#fff;\n  opacity: 1;\n  margin-top: 8px;\n}\n.version{\n  color:#007ab3;\n  font-size: medium;\n  font-weight: 500;\n  position: fixed;\n  top:96%;\n  left: 88%;\n}\n.maintain{\n  color:#fff;\n  font-size: medium;\n  font-weight: 500;\n  position: fixed;\n  margin-bottom: 3%;\n  width: 30%;\n  top:84%; \n  left:10%;\n}\n.maintain>.title{\n  padding-bottom: 3%;\n}\n.logoEn{\n  width: 100%;\n  text-align:center\n}\n.appName{\n  font-size: 45px; \n  color: #fff; \n  font-weight: 700; \n  margin-bottom: 15%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7QUFDOUQseUZBQXlGO0FBQ3pGO0VBQ0Usa0JBQWtCLEVBQUUsNEJBQTRCO0VBQ2hELGtCQUFrQixFQUFFLDhCQUE4QjtBQUNwRDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUZBO0VBQ0UsY0FBYztBQUNoQjtBQUZBO0VBQ0UsY0FBYztBQUNoQjtBQUZBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFFQUFxRTtBQUN2RTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCx3REFBZ0Q7VUFBaEQsZ0RBQWdEO0VBQ2hELG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztFQUNULE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0NBQTBEO0VBQzFELDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0MsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWDtBQUNGO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucycpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjEyLjAvY3NzL2FsbC5taW4uY3NzJyk7XG5ib2R5e1xuICBvdmVyZmxvdy15OiBoaWRkZW47IC8qIEhpZGUgdmVydGljYWwgc2Nyb2xsYmFyICovXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xufVxuLnRvcHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBERkhlaSBTdGQgVzE0O1xufVxuLmxvZ297XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIHJpZ2h0OiA1JTsgXG4gIHRvcDogNSU7ICBcbn1cbi5Mb2dpbklucHV0R3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcmdldFBhc3N3b3Jke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICB3aWR0aDoxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb3JnZXRQYXNzd29yZD5kaXY+aW1ne1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgd2lkdGg6MjRweDtcbiAgbWFyZ2luLXRvcDogLTMlO1xufVxuLmZvcmdldFBhc3N3b3JkPmRpdntcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JnZXRQYXNzd29yZD5kaXY+c3BhbntcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuLkxvZ2luSW5wdXRHcm91cC1wcmVwZW5kIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLkxvZ2luSW5wdXRHcm91cC1jdXR7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZlxufVxuLkxvZ2luSW5wdXRHcm91cC1jdXQ+ZGl2e1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uTG9naW5JbnB1dEdyb3VwPi5Mb2dpbklucHV0R3JvdXAtcHJlcGVuZD4uTG9naW5JbnB1dEdyb3VwLXRleHQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uTG9naW5JbnB1dEdyb3VwLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzBmNGQ5MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG4uTG9naW5JbnB1dEdyb3VwPi5mb3JtLWNvbnRyb2w6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uTG9naW5JbnB1dEdyb3VwPi5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDExIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiAzMCU7XG59XG4uTG9naW5JbnB1dEdyb3VwPi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDdhYjM7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6c29saWQgMXB4ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xufVxuaW5wdXQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgb3V0bGluZTpub25lO1xufVxuLnJvb3QxIHsgXG4gIHdpZHRoOiAxMDAlO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDEwMCUsIDQ1JSAxMDAlLCA2NSUgMCk7XG4gIGJhY2tncm91bmQ6ICMwMDdhYjM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcdFxuICB6LWluZGV4Oi0xO1xufVxuLnJvb3Qye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvTG9naW4tcGljLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCUgOTAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MCU7XG4gIHotaW5kZXg6IC0xO1xufVxuLkxvZ2luRm9ybXtcbiAgbWFyZ2luLXRvcDoyMiU7XG4gIHdpZHRoOjM1JTtcbiAgcGFkZGluZy1sZWZ0OjEzJTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uYnRuTG9naW57XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzAwNDI4QiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjojZmZmO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4udmVyc2lvbntcbiAgY29sb3I6IzAwN2FiMztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjk2JTtcbiAgbGVmdDogODglO1xufVxuLm1haW50YWlue1xuICBjb2xvcjojZmZmO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgd2lkdGg6IDMwJTtcbiAgdG9wOjg0JTsgXG4gIGxlZnQ6MTAlO1xufVxuLm1haW50YWluPi50aXRsZXtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuLmxvZ29FbntcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246Y2VudGVyXG59XG4uYXBwTmFtZXtcbiAgZm9udC1zaXplOiA0NXB4OyBcbiAgY29sb3I6ICNmZmY7IFxuICBmb250LXdlaWdodDogNzAwOyBcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _class_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../class/modal */
    "./src/app/class/modal.ts");
    /* harmony import */


    var _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/common-utility/common-utility.module */
    "./src/app/shared/common-utility/common-utility.module.ts");
    /* harmony import */


    var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/modal/modal.service */
    "./src/app/shared/modal/modal.service.ts");
    /* harmony import */


    var _service_app_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../service/app-login.service */
    "./src/app/service/app-login.service.ts");
    /* harmony import */


    var _service_maintain_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../service/maintain.service */
    "./src/app/service/maintain.service.ts");
    /* harmony import */


    var _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/loading/loading.service */
    "./src/app/shared/loading/loading.service.ts");
    /* harmony import */


    var _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../service/api-common/api-common.module */
    "./src/app/service/api-common/api-common.module.ts");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared/modal/modal.component */
    "./src/app/shared/modal/modal.component.ts");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environment/environment */
    "./src/app/environment/environment.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      // rsbody:apiLoginData.resLogin;
      function LoginComponent(formBuilder, ngZone, router, route, commonUtility, apiCommon, loginService, maintainService, modalService, loadingService, ngbModalService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        this.commonUtility = commonUtility;
        this.apiCommon = apiCommon;
        this.loginService = loginService;
        this.maintainService = maintainService;
        this.modalService = modalService;
        this.loadingService = loadingService;
        this.ngbModalService = ngbModalService;
        this.appLastUpdateTime = "19110101";
        this.isShowMaintain = false;
        this.loginForm = this.formBuilder.group({
          account: '',
          pwd: ''
        });
        this.appVersion = _environment_environment__WEBPACK_IMPORTED_MODULE_13__["envData"].version;
        this.appEnvironment = commonUtility.getEnvironment();
        localStorage.removeItem("miantain");
        this.getMaintainData();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.addEventListener('deviceready', function () {
            window.CacheClear();
          });
          this.getMaintainData();
        }
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit(data) {
          var _this = this;

          var msg;
          var result = true;
          var isLoginSucess = false;

          if (data.accout == '' || data.pwd == '') {
            msg = {
              headText: '資料驗證',
              txtContent: '使用者名稱或密碼不得為空。',
              type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
            };
            this.modalService.open(msg, 'sm');
            result = false;
          } else {
            this.loginService.appLogin(data.account.toUpperCase(), data.pwd).subscribe(function (res) {
              _this.loadingService.hide();

              switch (res.ResponseDetails.responseCode) {
                case "000":
                  _this.commonUtility.TokenData = res.TokenData;
                  _this.commonUtility.loginUser = data.account.toUpperCase();
                  isLoginSucess = true;
                  result = true;
                  break;

                case "008":
                  msg = {
                    headText: '登入失敗',
                    txtContent: res.ReasonCode.map(function (item) {
                      return "".concat(item.reasonMsg, "(\u932F\u8AA4\u78BC\uFF1A").concat(item.reasonCode, ")");
                    }).join(' '),
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                  };

                  _this.modalService.open(msg, 'sm');

                  result = false;
                  break;
                //密碼已到期

                case "A01":
                  msg = {
                    headText: '登入失敗',
                    txtContent: res.ReasonCode.map(function (item) {
                      return "".concat(item.reasonMsg, "(\u932F\u8AA4\u78BC\uFF1A").concat(item.reasonCode, ")");
                    }).join(' '),
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                  };
                  modalRtn = _this.open(msg);
                  modalRtn.result.then(function (result) {
                    if (result == 'NEXT') {
                      isLoginSucess = false;

                      _this.modifyPwd(data.account.toUpperCase());
                    }
                  }, function (reason) {
                    console.log(reason);
                  });
                  result = false;
                  break;
                //密碼即將到期

                case "A02":
                  result = false;
                  var modalRtn;
                  msg = {
                    headText: '登入成功',
                    txtContent: res.ReasonCode.map(function (item) {
                      return "".concat(item.reasonMsg, "(\u932F\u8AA4\u78BC\uFF1A").concat(item.reasonCode, ")");
                    }).join(' '),
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].ModifyPwd
                  };
                  modalRtn = _this.open(msg);
                  modalRtn.result.then(function (result) {
                    switch (result) {
                      case "NEXT":
                        _this.commonUtility.TokenData = res.TokenData;
                        _this.commonUtility.loginUser = data.account.toUpperCase();
                        result = true;
                        isLoginSucess = true;
                        result = _this.versionCheck();

                        if (result) {
                          _this.ngZone.run(function () {
                            return _this.router.navigateByUrl('/main');
                          });
                        }

                        break;

                      default:
                        result = false;
                        isLoginSucess = false;

                        _this.modifyPwd(data.account.toUpperCase());

                        break;
                    }
                  }, function (reason) {
                    console.log(reason);
                  });
                  break;
                //首次登入

                case "A03":
                  msg = {
                    headText: '首次登入',
                    txtContent: res.ReasonCode.map(function (item) {
                      return "".concat(item.reasonMsg, "(\u932F\u8AA4\u78BC\uFF1A").concat(item.reasonCode, ")");
                    }).join(' '),
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                  };
                  modalRtn = _this.open(msg);
                  modalRtn.result.then(function (result) {
                    if (result == 'NEXT') {
                      isLoginSucess = false;

                      _this.modifyPwd(data.account.toUpperCase());
                    }
                  }, function (reason) {
                    console.log(reason);
                  });
                  result = false;
                  break;

                default:
                  msg = {
                    headText: '登入失敗',
                    txtContent: '資料異常，請聯絡系統管理員。',
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                  };

                  _this.modalService.open(msg, 'sm');

                  result = false;
                  break;
              }

              ;
            }, function (err) {
              console.log("error");
            }, function () {
              console.log('onComplete');

              if (result) {
                if (isLoginSucess) {
                  result = _this.versionCheck();
                }
              } else {
                _this.loginForm = _this.formBuilder.group({
                  account: '',
                  pwd: ''
                });
              }

              if (result) {
                _this.ngZone.run(function () {
                  return _this.router.navigateByUrl('/main');
                });
              }
            });
          }
        }
      }, {
        key: "getMaintainData",
        value: function getMaintainData() {
          var _this2 = this;

          var msg;
          var Result = true;
          this.maintainService.getMaintainData().subscribe(function (res) {
            _this2.loadingService.hide();

            _this2.commonUtility.setLocalValue("maintain", JSON.stringify(res));

            switch (res.po_GetMaintainData.ReturnCode) {
              case 0:
                if (res.po_GetMaintainData.MaintainData.IsMaintaining == "Y") {
                  msg = {
                    headText: '系統維護中',
                    txtContent: res.po_GetMaintainData.MaintainData.MaintainPeriodNow.map(function (item) {
                      return "\u7CFB\u7D71\u6B63\u5728\u9032\u884C\u7DAD\u8B77\uFF0C\u505C\u6A5F\u6642\u9593\u70BA".concat(item.Begin.substring(0, 4), "/").concat(item.Begin.substring(4, 6), "/").concat(item.Begin.substring(6, 8), "\n                 ").concat(item.Begin.substring(8, 10), ":").concat(item.Begin.substring(10, 12), "\n                \u81F3 ").concat(item.End.substring(0, 4), "/").concat(item.End.substring(4, 6), "/").concat(item.End.substring(6, 8), "\n                 ").concat(item.End.substring(8, 10), ":").concat(item.End.substring(10, 12), "\u3002");
                    }).join(' '),
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Block
                  };

                  _this2.modalService.open(msg, 'sm');
                } else {
                  if (res.po_GetMaintainData.MaintainData.MaintainPeriods.length > 0) {
                    res.po_GetMaintainData.MaintainData.MaintainPeriods.sort(function (a, b) {
                      return a > b ? -1 : 1;
                    });
                    var isImminent = false;
                    var imminentTime = 0;
                    var begin;
                    var beginY;
                    var beginM;
                    var beginD;
                    var beginH;
                    var beginMin;
                    var end;
                    var endY;
                    var endM;
                    var endD;
                    var endH;
                    var endMin;
                    var beginDate = new Date();
                    var endDate = new Date();
                    res.po_GetMaintainData.MaintainData.MaintainPeriods.forEach(function (maintainPeriods) {
                      begin = res.po_GetMaintainData.MaintainData.MaintainPeriods[0].Begin;
                      beginY = begin.substring(0, 4);
                      beginM = begin.substring(4, 6);
                      beginD = begin.substring(6, 8);
                      beginH = begin.substring(8, 10);
                      beginMin = begin.substring(10, 12);
                      end = res.po_GetMaintainData.MaintainData.MaintainPeriods[0].End;
                      endY = end.substring(0, 4);
                      endM = end.substring(4, 6);
                      endD = end.substring(6, 8);
                      endH = end.substring(8, 10);
                      endMin = begin.substring(10, 12);
                      beginDate = new Date(parseInt(beginY, 10), parseInt(beginM, 10) - 1, parseInt(beginD, 10), parseInt(beginH, 10), parseInt(beginMin, 10), 0, 0);
                      endDate = new Date(parseInt(endY, 10), parseInt(endM, 10) - 1, parseInt(endD, 10), parseInt(endH, 10), parseInt(endMin, 10), 0, 0);

                      if (imminentTime < beginDate.getTime() - new Date().getTime()) {
                        imminentTime = beginDate.getTime() - new Date().getTime();
                        _this2.showBeginTime = "".concat(beginY, "/").concat(beginM, "/").concat(beginD, " ").concat(beginH, ":").concat(beginMin);
                        _this2.showEndTime = "".concat(endY, "/").concat(endM, "/").concat(endD, " ").concat(endH, ":").concat(endMin);
                      }
                    });
                    console.log(imminentTime);

                    if (imminentTime <= 5 * 60 * 1000) {
                      isImminent = true;
                      _this2.isShowMaintain = true;
                    } else if (imminentTime <= 7 * 24 * 3600 * 1000) {
                      _this2.isShowMaintain = true;
                    }

                    if (isImminent) {
                      msg = {
                        headText: '停機公告',
                        txtContent: "\u7CFB\u7D71\u5373\u5C07\u65BC".concat(Math.ceil(imminentTime / (60 * 1000)), "\u5206\u5F8C\u9032\u884C\u505C\u6A5F\u7DAD\u8B77\uFF0C\u505C\u6A5F\u6642\u9593\u70BA\uFF1A").concat(_this2.showBeginTime, " \u81F3 ").concat(_this2.showEndTime, "\u3002"),
                        type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                      };

                      _this2.modalService.open(msg, 'sm');
                    }
                  }
                }

                break;

              case -1:
                msg = {
                  headText: '維護資訊',
                  txtContent: res.po_GetMaintainData.ReturnMessage,
                  type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                };

                _this2.modalService.open(msg, 'sm');

                Result = false;
                break;
            }
          }, function (err) {
            console.log("error");
          }, function () {
            console.log('onComplete');

            if (Result) {} else {}
          });
        }
      }, {
        key: "versionCheck",
        value: function versionCheck() {
          var _this3 = this;

          var msg;
          var needUpdate = false;
          var Result = true;
          var updateUrl;
          this.appVersion = _environment_environment__WEBPACK_IMPORTED_MODULE_13__["envData"].version;

          if (this.commonUtility.getLocalValue("appLastUpdateTime") != null) {
            this.appLastUpdateTime = this.commonUtility.getLocalValue("appLastUpdateTime");
          }

          this.loginService.versionCheck(this.appVersion, this.appLastUpdateTime).subscribe(function (res) {
            switch (res.ResponseDetails.responseCode) {
              case "000":
                var modalRtn;

                if (res.AppVersionStatus.NeedUpdate == "Y") {
                  needUpdate = true;
                } else {
                  if (_this3.appVersion == "" || _this3.appVersion != "" && res.AppVersionStatus.AppVersion.replace('.', '') > _this3.appVersion.replace('.', '')) {
                    needUpdate = true;
                  }
                }

                if (needUpdate) {
                  msg = {
                    headText: '更新資訊',
                    txtContent: '有新版本，請更新。',
                    type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                  }; // modalRtn=this.modalService.open(msg)

                  modalRtn = _this3.open(msg);
                  modalRtn.result.then(function (result) {
                    if (result == 'NEXT') {
                      console.log(res.AppVersionStatus.AppLink);
                      localStorage.removeItem("appLastUpdateTime");
                      _this3.appVersion = res.AppVersionStatus.AppVersion;
                      _this3.appLastUpdateTime = "".concat(_this3.commonUtility.Date).concat(_this3.commonUtility.TimeStamp);

                      _this3.commonUtility.openUrl(res.AppVersionStatus.AppLink, '_system');

                      console.log(updateUrl);
                    } else {
                      Result = false;
                    }
                  }, function (reason) {
                    console.log(reason);
                  });
                } else {
                  if (_this3.commonUtility.getLocalValue('appLastUpdateTime') == null) {
                    _this3.commonUtility.setLocalValue("appLastUpdateTime", _this3.appLastUpdateTime);
                  }
                }

                break;

              case "008":
                // const titleString = event.body.ReasonCode.map( item => `${item.reasonMsg}(錯誤碼：${item.reasonCode})` ).join(' ');
                msg = {
                  headText: '更新資訊',
                  txtContent: res.ReasonCode.map(function (item) {
                    return "".concat(item.reasonMsg, "(\u932F\u8AA4\u78BC\uFF1A").concat(item.reasonCode, ")");
                  }).join(' '),
                  type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                };

                _this3.modalService.open(msg, 'sm');

                Result = false;
                break;

              default:
                msg = {
                  headText: '更新資訊',
                  txtContent: '資料異常，請聯絡系統管理員。',
                  type: _class_modal__WEBPACK_IMPORTED_MODULE_5__["ModalType"].Confirm
                };

                _this3.modalService.open(msg, 'sm');

                Result = false;
                break;
            }

            ;
          }, function (err) {}, function () {
            if (needUpdate) {
              navigator['app'].exitApp();
            }

            console.log("versionCheck_Complete");
            console.log(updateUrl);
          });
          return Result;
        }
      }, {
        key: "forgetPassword",
        value: function forgetPassword() {
          var Page;
          Page = this.apiCommon.getApiUrl("forgetPwdPage");
          this.commonUtility.forgetPassword(Page);
        }
      }, {
        key: "modifyPwd",
        value: function modifyPwd(account) {
          var Page;
          Page = this.apiCommon.getApiUrl("modifyPwdPage");
          this.commonUtility.modifyPwd(account, Page);
        }
      }, {
        key: "open",
        value: function open(modalOptions) {
          var rtn;
          var modalRef = this.ngbModalService.open(_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], {
            scrollable: true,
            centered: true,
            size: 'sm' // keyboard: false,
            // backdrop: 'static'

          });
          var data = modalOptions;
          modalRef.componentInstance.fromParent = data; // console.log(modalRef.componentInstance.fromParent);

          return modalRef;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_common_utility_common_utility_module__WEBPACK_IMPORTED_MODULE_6__["CommonUtilityModule"]
      }, {
        type: _service_api_common_api_common_module__WEBPACK_IMPORTED_MODULE_11__["ApiCommonModule"]
      }, {
        type: _service_app_login_service__WEBPACK_IMPORTED_MODULE_8__["AppLoginService"]
      }, {
        type: _service_maintain_service__WEBPACK_IMPORTED_MODULE_9__["MaintainService"]
      }, {
        type: _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
      }, {
        type: _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _allianz_ngx_ndbx_formfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/formfield */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-formfield.js");
    /* harmony import */


    var _allianz_ngx_ndbx_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/message */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-message.js");
    /* harmony import */


    var _allianz_ngx_ndbx_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @allianz/ngx-ndbx/input */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx-input.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _allianz_ngx_ndbx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @allianz/ngx-ndbx */
    "./node_modules/@allianz/ngx-ndbx/fesm2015/allianz-ngx-ndbx.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginRoutingModule"], _allianz_ngx_ndbx_input__WEBPACK_IMPORTED_MODULE_6__["NxInputModule"], _allianz_ngx_ndbx_formfield__WEBPACK_IMPORTED_MODULE_4__["NxFormfieldModule"], _allianz_ngx_ndbx_message__WEBPACK_IMPORTED_MODULE_5__["NxMessageModule"], _allianz_ngx_ndbx__WEBPACK_IMPORTED_MODULE_9__["NxButtonModule"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/service/maintain.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/maintain.service.ts ***!
    \*********************************************/

  /*! exports provided: MaintainService */

  /***/
  function srcAppServiceMaintainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintainService", function () {
      return MaintainService;
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


    var MaintainService =
    /*#__PURE__*/
    function () {
      function MaintainService(apiCommon, commonUtility, loadingService, http) {
        _classCallCheck(this, MaintainService);

        this.apiCommon = apiCommon;
        this.commonUtility = commonUtility;
        this.loadingService = loadingService;
        this.http = http;
      }

      _createClass(MaintainService, [{
        key: "getMaintainData",
        value: function getMaintainData() {
          var _this4 = this;

          console.log("getMaintainData");
          var apiId = "maintainData";
          var pi_CommonData;
          this.ApiConfig = this.apiCommon.getApiConfigByApiID(apiId);
          var apiUrl = "".concat(this.ApiConfig.domain).concat(this.ApiConfig.path);
          console.log(apiId);
          console.log(apiUrl);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          this.loadingService.show();
          pi_CommonData = this.apiCommon.reqCommon;
          pi_CommonData.KeyId = this.ApiConfig.keyId;
          var pi_GetMaintainData = {
            Format: "1"
          };
          var rqbody = {
            pi_CommonData: pi_CommonData,
            pi_GetMaintainData: pi_GetMaintainData
          };
          console.log(rqbody);
          return this.http.post(apiUrl, JSON.stringify(rqbody), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(90 * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log('error:', error);

            _this4.loadingService.hide();

            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {// this.nativeService.alert({
              //   TITLE: '系統連線逾時',
              //   TYPE: 'CONFIRM',
              // }).subscribe(()=>{
              //   localStorage.clear();
              //   this.nativeService.close();
              // });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return MaintainService;
    }();

    MaintainService.ctorParameters = function () {
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

    MaintainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MaintainService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map