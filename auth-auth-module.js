(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "ZGml");








class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                        { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class RegisterComponent {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.role = '';
        this.campus = '';
        this.navItems = [];
    }
    onSubmit() {
        // Register handled by auth service
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 62, vars: 10, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content"], [1, "container"], ["variant", "elevated", "padding", "lg", 1, "auth-card"], [1, "auth-header", "text-center"], [1, "auth-title"], [1, "auth-subtitle"], [1, "auth-form", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "firstName", 1, "form-label"], ["id", "firstName", "type", "text", "placeholder", "John", "name", "firstName", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "lastName", 1, "form-label"], ["id", "lastName", "type", "text", "placeholder", "Doe", "name", "lastName", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "placeholder", "student@kca.ac.ke", "name", "email", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "placeholder", "Create a password", "name", "password", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "type", "password", "placeholder", "Confirm your password", "name", "confirmPassword", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "role", 1, "form-label"], ["id", "role", "name", "role", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "student"], ["value", "peer_counselor"], ["for", "campus", 1, "form-label"], ["id", "campus", "name", "campus", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", "ruaraka"], ["value", "town"], ["value", "kitengela"], [1, "form-actions"], ["type", "submit", "variant", "primary", "block", ""], [1, "auth-footer", "text-center"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Join KCA Wellness Hub today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "I am a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_35_listener($event) { return ctx.role = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Peer Counselor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_45_listener($event) { return ctx.campus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Select campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ruaraka Main Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Town Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Kitengela Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "app-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", null)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.campus);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); display: flex; align-items: center; justify-content: center; padding-bottom: var(--space-6); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: 440px; margin: 0 auto; padding: 0 var(--space-4); }\n    .auth-card[_ngcontent-%COMP%] { width: 100%; }\n    .auth-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .auth-title[_ngcontent-%COMP%] { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .auth-subtitle[_ngcontent-%COMP%] { color: var(--color-gray-600); margin: 0; }\n    .auth-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-5); }\n    .form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); }\n    .form-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }\n    .form-input[_ngcontent-%COMP%] { padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }\n    .form-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .form-actions[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .auth-footer[_ngcontent-%COMP%] { margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--color-gray-100); }\n    .auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--color-primary-600); font-weight: var(--font-weight-medium); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="null"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content">
        <div class="container">
          <app-card variant="elevated" padding="lg" class="auth-card">
            <div class="auth-header text-center">
              <h1 class="auth-title">Create Account</h1>
              <p class="auth-subtitle">Join KCA Wellness Hub today</p>
            </div>

            <form class="auth-form" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="firstName">First Name</label>
                  <input 
                    id="firstName" 
                    type="text" 
                    class="form-input" 
                    placeholder="John"
                    [(ngModel)]="firstName"
                    name="firstName"
                    required
                  >
                </div>
                <div class="form-group">
                  <label class="form-label" for="lastName">Last Name</label>
                  <input 
                    id="lastName" 
                    type="text" 
                    class="form-input" 
                    placeholder="Doe"
                    [(ngModel)]="lastName"
                    name="lastName"
                    required
                  >
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  class="form-input" 
                  placeholder="student@kca.ac.ke"
                  [(ngModel)]="email"
                  name="email"
                  required
                >
              </div>

              <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <input 
                  id="password" 
                  type="password" 
                  class="form-input" 
                  placeholder="Create a password"
                  [(ngModel)]="password"
                  name="password"
                  required
                >
              </div>

              <div class="form-group">
                <label class="form-label" for="confirmPassword">Confirm Password</label>
                <input 
                  id="confirmPassword" 
                  type="password" 
                  class="form-input" 
                  placeholder="Confirm your password"
                  [(ngModel)]="confirmPassword"
                  name="confirmPassword"
                  required
                >
              </div>

              <div class="form-group">
                <label class="form-label" for="role">I am a</label>
                <select 
                  id="role" 
                  class="form-input" 
                  [(ngModel)]="role"
                  name="role"
                  required
                >
                  <option value="">Select role</option>
                  <option value="student">Student</option>
                  <option value="peer_counselor">Peer Counselor</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="campus">Campus</label>
                <select 
                  id="campus" 
                  class="form-input" 
                  [(ngModel)]="campus"
                  name="campus"
                  required
                >
                  <option value="">Select campus</option>
                  <option value="ruaraka">Ruaraka Main Campus</option>
                  <option value="town">Town Campus</option>
                  <option value="kitengela">Kitengela Campus</option>
                </select>
              </div>

              <div class="form-actions">
                <app-button type="submit" variant="primary" block>Create Account</app-button>
              </div>
            </form>

            <div class="auth-footer text-center">
              <p>Already have an account? <a routerLink="/auth/login">Sign in</a></p>
            </div>
          </app-card>
        </div>
      </main>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content { flex: 1; padding-top: var(--header-height); display: flex; align-items: center; justify-content: center; padding-bottom: var(--space-6); }
    .container { width: 100%; max-width: 440px; margin: 0 auto; padding: 0 var(--space-4); }
    .auth-card { width: 100%; }
    .auth-header { margin-bottom: var(--space-8); }
    .auth-title { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .auth-subtitle { color: var(--color-gray-600); margin: 0; }
    .auth-form { display: flex; flex-direction: column; gap: var(--space-5); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
    .form-group { display: flex; flex-direction: column; gap: var(--space-2); }
    .form-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }
    .form-input { padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
    .form-input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .form-actions { margin-top: var(--space-2); }
    .auth-footer { margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--color-gray-100); }
    .auth-footer a { color: var(--color-primary-600); font-weight: var(--font-weight-medium); }
    .text-center { text-align: center; }
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LoginComponent {
    constructor() {
        this.email = '';
        this.password = '';
        this.navItems = [];
    }
    onSubmit() {
        // Login handled by auth service
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 5, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content"], [1, "container"], ["variant", "elevated", "padding", "lg", 1, "auth-card"], [1, "auth-header", "text-center"], [1, "auth-title"], [1, "auth-subtitle"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "placeholder", "student@kca.ac.ke", "name", "email", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "placeholder", "Enter your password", "name", "password", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", "variant", "primary", "block", ""], [1, "auth-footer", "text-center"], ["routerLink", "/auth/register"], [1, "demo-hint"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign in to your KCA Wellness Hub account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Demo: student@kca.ac.ke / password123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", null)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); display: flex; align-items: center; justify-content: center; padding-bottom: var(--space-6); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: 400px; margin: 0 auto; padding: 0 var(--space-4); }\n    .auth-card[_ngcontent-%COMP%] { width: 100%; }\n    .auth-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .auth-title[_ngcontent-%COMP%] { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .auth-subtitle[_ngcontent-%COMP%] { color: var(--color-gray-600); margin: 0; }\n    .auth-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-5); }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); }\n    .form-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }\n    .form-input[_ngcontent-%COMP%] { padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }\n    .form-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .form-actions[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .auth-footer[_ngcontent-%COMP%] { margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--color-gray-100); }\n    .auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--color-primary-600); font-weight: var(--font-weight-medium); }\n    .demo-hint[_ngcontent-%COMP%] { font-size: var(--font-size-xs); color: var(--color-gray-500); margin-top: var(--space-2); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="null"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content">
        <div class="container">
          <app-card variant="elevated" padding="lg" class="auth-card">
            <div class="auth-header text-center">
              <h1 class="auth-title">Welcome Back</h1>
              <p class="auth-subtitle">Sign in to your KCA Wellness Hub account</p>
            </div>

            <form class="auth-form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  class="form-input" 
                  placeholder="student@kca.ac.ke"
                  [(ngModel)]="email"
                  name="email"
                  required
                >
              </div>

              <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <input 
                  id="password" 
                  type="password" 
                  class="form-input" 
                  placeholder="Enter your password"
                  [(ngModel)]="password"
                  name="password"
                  required
                >
              </div>

              <div class="form-actions">
                <app-button type="submit" variant="primary" block>Sign In</app-button>
              </div>
            </form>

            <div class="auth-footer text-center">
              <p>Don't have an account? <a routerLink="/auth/register">Sign up</a></p>
              <p class="demo-hint">Demo: student@kca.ac.ke / password123</p>
            </div>
          </app-card>
        </div>
      </main>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content { flex: 1; padding-top: var(--header-height); display: flex; align-items: center; justify-content: center; padding-bottom: var(--space-6); }
    .container { width: 100%; max-width: 400px; margin: 0 auto; padding: 0 var(--space-4); }
    .auth-card { width: 100%; }
    .auth-header { margin-bottom: var(--space-8); }
    .auth-title { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .auth-subtitle { color: var(--color-gray-600); margin: 0; }
    .auth-form { display: flex; flex-direction: column; gap: var(--space-5); }
    .form-group { display: flex; flex-direction: column; gap: var(--space-2); }
    .form-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }
    .form-input { padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
    .form-input:focus { outline: none; border-color: var(--color-primary-500); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .form-actions { margin-top: var(--space-2); }
    .auth-footer { margin-top: var(--space-6); padding-top: var(--space-4); border-top: 1px solid var(--color-gray-100); }
    .auth-footer a { color: var(--color-primary-600); font-weight: var(--font-weight-medium); }
    .demo-hint { font-size: var(--font-size-xs); color: var(--color-gray-500); margin-top: var(--space-2); }
    .text-center { text-align: center; }
  `]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map