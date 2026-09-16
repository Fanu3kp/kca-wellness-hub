(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "+F+A":
/*!********************************************************!*\
  !*** ./src/app/student/student-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: StudentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function() { return StudentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/bottom-nav/bottom-nav.component */ "szuZ");







class StudentDashboardComponent {
    constructor() {
        this.user = { firstName: 'John' };
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard', active: true },
            { label: 'Peer Counselling', route: '/student/peer-counselors', icon: 'users' },
            { label: 'Professional', route: '/student/professional-counselling', icon: 'calendar' },
            { label: 'Wellness', route: '/student/wellness', icon: 'heart' },
            { label: 'Chat', route: '/student/chat', icon: 'chat' }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home', active: true },
            { label: 'Chat', route: '/student/chat', icon: 'chat' },
            { label: 'Calendar', route: '/student/appointments', icon: 'calendar' },
            { label: 'Wellness', route: '/student/wellness', icon: 'heart' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
}
StudentDashboardComponent.ɵfac = function StudentDashboardComponent_Factory(t) { return new (t || StudentDashboardComponent)(); };
StudentDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 43, vars: 5, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg"], [1, "card-icon", "bg-primary-100", "text-primary"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "card-title"], [1, "card-text"], ["variant", "primary", "routerLink", "/student/peer-counselors", 1, "mt-4"], [1, "card-icon", "bg-secondary-100", "text-secondary"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["variant", "primary", "routerLink", "/student/professional-counselling", 1, "mt-4"], [1, "card-icon", "bg-accent-100", "text-accent"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["variant", "primary", "routerLink", "/student/wellness-resources", 1, "mt-4"], [3, "items"]], template: function StudentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your wellness dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Peer Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Connect with trained peer counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Browse Counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "polyline", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Professional Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Book appointments with guidance staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Wellness Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Articles, videos, and guided exercises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Explore Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-bottom-nav", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome back, ", ctx.user == null ? null : ctx.user.firstName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__["BottomNavComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .card-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4); }\n    .card-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }\n    .card-text[_ngcontent-%COMP%] { color: var(--color-gray-600); margin-bottom: var(--space-4); }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-6); }\n    .grid-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-dashboard',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Welcome back, {{ user?.firstName }}!</h1>
            <p class="page-description">Your wellness dashboard</p>
          </div>

          <div class="grid grid-3">
            <app-card variant="interactive" padding="lg">
              <div class="card-icon bg-primary-100 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 class="card-title">Peer Counselling</h3>
              <p class="card-text">Connect with trained peer counselors</p>
              <app-button variant="primary" class="mt-4" routerLink="/student/peer-counselors">Browse Counselors</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <div class="card-icon bg-secondary-100 text-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="card-title">Professional Counselling</h3>
              <p class="card-text">Book appointments with guidance staff</p>
              <app-button variant="primary" class="mt-4" routerLink="/student/professional-counselling">Book Appointment</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <div class="card-icon bg-accent-100 text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 class="card-title">Wellness Resources</h3>
              <p class="card-text">Articles, videos, and guided exercises</p>
              <app-button variant="primary" class="mt-4" routerLink="/student/wellness-resources">Explore Resources</app-button>
            </app-card>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-8); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .card-icon { width: 48px; height: 48px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4); }
    .card-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }
    .card-text { color: var(--color-gray-600); margin-bottom: var(--space-4); }
    .grid { display: grid; gap: var(--space-6); }
    .grid-3 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
    .mt-4 { margin-top: var(--space-4); }
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "3dIr":
/*!************************************************************!*\
  !*** ./src/app/student/quick-help/quick-help.component.ts ***!
  \************************************************************/
/*! exports provided: QuickHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickHelpComponent", function() { return QuickHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/wellness.model */ "EIi9");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");










function QuickHelpComponent_app_card_14__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 38);
} }
function QuickHelpComponent_app_card_14__svg_circle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 39);
} }
function QuickHelpComponent_app_card_14__svg_path_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 40);
} }
function QuickHelpComponent_app_card_14__svg_path_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 41);
} }
function QuickHelpComponent_app_card_14__svg_path_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 42);
} }
function QuickHelpComponent_app_card_14__svg_path_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 43);
} }
function QuickHelpComponent_app_card_14__svg_path_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 44);
} }
function QuickHelpComponent_app_card_14__svg_path_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 38);
} }
function QuickHelpComponent_app_card_14__svg_circle_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 39);
} }
function QuickHelpComponent_app_card_14__svg_path_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 45);
} }
function QuickHelpComponent_app_card_14__svg_path_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 46);
} }
function QuickHelpComponent_app_card_14__svg_path_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 47);
} }
function QuickHelpComponent_app_card_14__svg_path_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 41);
} }
function QuickHelpComponent_app_card_14__svg_path_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 48);
} }
function QuickHelpComponent_app_card_14__svg_path_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 38);
} }
function QuickHelpComponent_app_card_14__svg_circle_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 39);
} }
function QuickHelpComponent_app_card_14__svg_path_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 40);
} }
function QuickHelpComponent_app_card_14__svg_path_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 41);
} }
function QuickHelpComponent_app_card_14__svg_path_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 49);
} }
function QuickHelpComponent_app_card_14__svg_path_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 50);
} }
function QuickHelpComponent_app_card_14__svg_path_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 51);
} }
function QuickHelpComponent_app_card_14__svg_path_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 52);
} }
function QuickHelpComponent_app_card_14__svg_path_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 53);
} }
function QuickHelpComponent_app_card_14__svg_line_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 54);
} }
function QuickHelpComponent_app_card_14__svg_line_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 55);
} }
function QuickHelpComponent_app_card_14_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickHelpComponent_app_card_14_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const option_r1 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.selectOption(option_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuickHelpComponent_app_card_14__svg_path_4_Template, 1, 0, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuickHelpComponent_app_card_14__svg_circle_5_Template, 1, 0, "circle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuickHelpComponent_app_card_14__svg_path_6_Template, 1, 0, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuickHelpComponent_app_card_14__svg_path_7_Template, 1, 0, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuickHelpComponent_app_card_14__svg_path_8_Template, 1, 0, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuickHelpComponent_app_card_14__svg_path_9_Template, 1, 0, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuickHelpComponent_app_card_14__svg_path_10_Template, 1, 0, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuickHelpComponent_app_card_14__svg_path_11_Template, 1, 0, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuickHelpComponent_app_card_14__svg_circle_12_Template, 1, 0, "circle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuickHelpComponent_app_card_14__svg_path_13_Template, 1, 0, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuickHelpComponent_app_card_14__svg_path_14_Template, 1, 0, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuickHelpComponent_app_card_14__svg_path_15_Template, 1, 0, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuickHelpComponent_app_card_14__svg_path_16_Template, 1, 0, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, QuickHelpComponent_app_card_14__svg_path_17_Template, 1, 0, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuickHelpComponent_app_card_14__svg_path_18_Template, 1, 0, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuickHelpComponent_app_card_14__svg_circle_19_Template, 1, 0, "circle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuickHelpComponent_app_card_14__svg_path_20_Template, 1, 0, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuickHelpComponent_app_card_14__svg_path_21_Template, 1, 0, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QuickHelpComponent_app_card_14__svg_path_22_Template, 1, 0, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QuickHelpComponent_app_card_14__svg_path_23_Template, 1, 0, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuickHelpComponent_app_card_14__svg_path_24_Template, 1, 0, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, QuickHelpComponent_app_card_14__svg_path_25_Template, 1, 0, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuickHelpComponent_app_card_14__svg_path_26_Template, 1, 0, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, QuickHelpComponent_app_card_14__svg_line_27_Template, 1, 0, "line", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QuickHelpComponent_app_card_14__svg_line_28_Template, 1, 0, "line", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + option_r1.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", option_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "stress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "stress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "anxiety");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "anxiety");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "academic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "academic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "family");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "financial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "financial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "career");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "social");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "social");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "unsure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "unsure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "unsure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getPathwayLabel(option_r1.recommendedPathway));
} }
class QuickHelpComponent {
    constructor() {
        this.user = { firstName: 'John' };
        this.quickHelpOptions = _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QUICK_HELP_OPTIONS"].map(opt => (Object.assign(Object.assign({}, opt), { icon: this.getIconForCategory(opt.id), iconColor: this.getIconColor(opt.id) })));
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help', active: true },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book' }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help', active: true },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    getIconForCategory(category) {
        const icons = {
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].STRESS]: 'stress',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].ANXIETY_WORRY]: 'anxiety',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].ACADEMIC_PRESSURE]: 'academic',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].RELATIONSHIPS]: 'relationship',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].FAMILY_ISSUES]: 'family',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].FINANCIAL_CHALLENGES]: 'financial',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].CAREER_GUIDANCE]: 'career',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].FRIENDSHIP_SOCIAL]: 'social',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].SLEEP_WELLBEING]: 'sleep',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].GENERAL_SUPPORT]: 'support',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].NOT_SURE]: 'unsure',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].URGENT_HELP]: 'urgent'
        };
        return icons[category] || 'support';
    }
    getIconColor(category) {
        const colors = {
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].STRESS]: 'primary-100 text-primary',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].ANXIETY_WORRY]: 'warning-light text-warning',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].ACADEMIC_PRESSURE]: 'secondary-100 text-secondary',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].RELATIONSHIPS]: 'accent-100 text-accent',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].FAMILY_ISSUES]: 'primary-100 text-primary',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].FINANCIAL_CHALLENGES]: 'warning-light text-warning',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].CAREER_GUIDANCE]: 'secondary-100 text-secondary',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].FRIENDSHIP_SOCIAL]: 'accent-100 text-accent',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].SLEEP_WELLBEING]: 'primary-100 text-primary',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].GENERAL_SUPPORT]: 'secondary-100 text-secondary',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].NOT_SURE]: 'gray-100 text-gray',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["QuickHelpCategory"].URGENT_HELP]: 'error-light text-error'
        };
        return colors[category] || 'primary-100 text-primary';
    }
    getPathwayLabel(pathway) {
        return _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["SUPPORT_PATHWAYS"][pathway].title;
    }
    selectOption(option) {
        const pathway = _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["SUPPORT_PATHWAYS"][option.recommendedPathway];
        if (pathway) {
            window.location.href = pathway.actionRoute;
        }
    }
}
QuickHelpComponent.ɵfac = function QuickHelpComponent_Factory(t) { return new (t || QuickHelpComponent)(); };
QuickHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuickHelpComponent, selectors: [["app-quick-help"]], decls: 19, vars: 5, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "alert", "alert-info", 2, "margin-bottom", "var(--space-6)"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg", "class", "help-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-8"], ["variant", "outline", "routerLink", "/student/mood-checkin"], [3, "items"], ["variant", "interactive", "padding", "lg", 1, "help-card", 3, "click"], [1, "help-icon", 3, "ngClass"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], [3, "ngSwitch"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", 4, "ngSwitchCase"], ["cx", "9", "cy", "7", "r", "4", 4, "ngSwitchCase"], ["d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z", 4, "ngSwitchCase"], ["d", "M12 6v6l4 2", 4, "ngSwitchCase"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20", 4, "ngSwitchCase"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z", 4, "ngSwitchCase"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", 4, "ngSwitchCase"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87", 4, "ngSwitchCase"], ["d", "M16 3.13a4 4 0 0 1 0 7.75", 4, "ngSwitchCase"], ["d", "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z", 4, "ngSwitchCase"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2", 4, "ngSwitchCase"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", 4, "ngSwitchCase"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", 4, "ngSwitchCase"], ["d", "M12 8V12", 4, "ngSwitchCase"], ["d", "M12 16H12.01", 4, "ngSwitchCase"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z", 4, "ngSwitchCase"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13", 4, "ngSwitchCase"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17", 4, "ngSwitchCase"], [1, "help-title"], [1, "help-description"], ["variant", "primary", "size", "sm", 1, "mt-3"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"], ["d", "M12 6v6l4 2"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["d", "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"], ["d", "M12 8V12"], ["d", "M12 16H12.01"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"]], template: function QuickHelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quick Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select what you're experiencing to find the right support pathway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Not a diagnostic tool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This helps you find appropriate support options. For emergencies, please use Urgent Help. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuickHelpComponent_app_card_14_Template, 35, 30, "app-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Not sure? Try Mood Check-in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-bottom-nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quickHelpOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__["BottomNavComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__["BadgeComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .help-card[_ngcontent-%COMP%] { height: 100%; display: flex; flex-direction: column; cursor: pointer; transition: transform var(--transition-normal); }\n    .help-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); }\n    .help-icon[_ngcontent-%COMP%] { width: 56px; height: 56px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4); }\n    .help-title[_ngcontent-%COMP%] { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }\n    .help-description[_ngcontent-%COMP%] { color: var(--color-gray-600); margin: 0; flex: 1; font-size: var(--font-size-sm); }\n    .mt-3[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .mt-8[_ngcontent-%COMP%] { margin-top: var(--space-8); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-6); }\n    .grid-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickHelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quick-help',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Quick Help</h1>
            <p class="page-description">Select what you're experiencing to find the right support pathway</p>
          </div>

          <div class="alert alert-info" style="margin-bottom: var(--space-6);">
            <strong>Not a diagnostic tool.</strong> This helps you find appropriate support options. For emergencies, please use Urgent Help.
          </div>

          <div class="grid grid-3">
            <app-card 
              *ngFor="let option of quickHelpOptions" 
              variant="interactive" 
              padding="lg" 
              class="help-card"
              (click)="selectOption(option)"
            >
              <div class="help-icon" [ngClass]="'bg-' + option.iconColor">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <ng-container [ngSwitch]="option.icon">
                    <path *ngSwitchCase="'stress'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle *ngSwitchCase="'stress'" cx="9" cy="7" r="4"></circle>
                    <path *ngSwitchCase="'anxiety'" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path *ngSwitchCase="'anxiety'" d="M12 6v6l4 2"></path>
                    <path *ngSwitchCase="'academic'" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path *ngSwitchCase="'academic'" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    <path *ngSwitchCase="'relationship'" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    <path *ngSwitchCase="'family'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle *ngSwitchCase="'family'" cx="9" cy="7" r="4"></circle><path *ngSwitchCase="'family'" d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path *ngSwitchCase="'family'" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    <path *ngSwitchCase="'financial'" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path *ngSwitchCase="'financial'" d="M12 6v6l4 2"></path>
                    <path *ngSwitchCase="'career'" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    <path *ngSwitchCase="'social'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle *ngSwitchCase="'social'" cx="9" cy="7" r="4"></circle>
                    <path *ngSwitchCase="'sleep'" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path *ngSwitchCase="'sleep'" d="M12 6v6l4 2"></path>
                    <path *ngSwitchCase="'support'" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path *ngSwitchCase="'unsure'" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path *ngSwitchCase="'unsure'" d="M12 8V12"></path><path *ngSwitchCase="'unsure'" d="M12 16H12.01"></path>
                    <path *ngSwitchCase="'urgent'" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line *ngSwitchCase="'urgent'" x1="12" y1="9" x2="12" y2="13"></line><line *ngSwitchCase="'urgent'" x1="12" y1="17" x2="12.01" y2="17"></line>
                  </ng-container>
                </svg>
              </div>
              <h3 class="help-title">{{ option.label }}</h3>
              <p class="help-description">{{ option.description }}</p>
              <app-badge variant="primary" class="mt-3" size="sm">{{ getPathwayLabel(option.recommendedPathway) }}</app-badge>
            </app-card>
          </div>

          <div class="text-center mt-8">
            <app-button variant="outline" routerLink="/student/mood-checkin">
              Not sure? Try Mood Check-in
            </app-button>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-8); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .help-card { height: 100%; display: flex; flex-direction: column; cursor: pointer; transition: transform var(--transition-normal); }
    .help-card:hover { transform: translateY(-4px); }
    .help-icon { width: 56px; height: 56px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4); }
    .help-title { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }
    .help-description { color: var(--color-gray-600); margin: 0; flex: 1; font-size: var(--font-size-sm); }
    .mt-3 { margin-top: var(--space-3); }
    .mt-8 { margin-top: var(--space-8); }
    .text-center { text-align: center; }
    .grid { display: grid; gap: var(--space-6); }
    .grid-3 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  `]
            }]
    }], null, null); })();


/***/ }),

/***/ "4P0Y":
/*!************************************************************************!*\
  !*** ./src/app/student/wellness-journey/wellness-journey.component.ts ***!
  \************************************************************************/
/*! exports provided: WellnessJourneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessJourneyComponent", function() { return WellnessJourneyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_wellness_journey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/wellness-journey.service */ "z3i/");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/empty-state/empty-state.component */ "86d1");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");











function WellnessJourneyComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessJourneyComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const tab_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setActiveTab(tab_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === tab_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r6.label, " ");
} }
function WellnessJourneyComponent_div_56_div_6_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const checkin_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](checkin_r13.note);
} }
function WellnessJourneyComponent_div_56_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WellnessJourneyComponent_div_56_div_6_div_1_p_9_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const checkin_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + ctx_r12.getMoodColor(checkin_r13.mood));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getMoodEmoji(checkin_r13.mood));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, checkin_r13.createdAt, "MMM d, yyyy h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", checkin_r13.note);
} }
function WellnessJourneyComponent_div_56_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WellnessJourneyComponent_div_56_div_6_div_1_Template, 10, 7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r9.journey.moodCheckins, 0, 10));
} }
function WellnessJourneyComponent_div_56_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 50);
} }
function WellnessJourneyComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mood History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WellnessJourneyComponent_div_56_div_6_Template, 3, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WellnessJourneyComponent_div_56_ng_template_7_Template, 1, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.journey.moodCheckins.length > 0)("ngIfElse", _r10);
} }
function WellnessJourneyComponent_div_57_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-badge", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + ctx_r19.getSessionTypeColor(session_r20.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r19.getSessionTypeIcon(session_r20.type), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.formatSessionType(session_r20.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", session_r20.duration, " minutes \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, session_r20.completedAt, "MMM d, yyyy h:mm a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r19.getSessionTypeVariant(session_r20.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", session_r20.duration, " min");
} }
function WellnessJourneyComponent_div_57_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WellnessJourneyComponent_div_57_div_6_div_1_Template, 11, 10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r16.journey.quietSpaceSessions, 0, 10));
} }
function WellnessJourneyComponent_div_57_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 62);
} }
function WellnessJourneyComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quiet Space Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WellnessJourneyComponent_div_57_div_6_Template, 3, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WellnessJourneyComponent_div_57_ng_template_7_Template, 1, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.journey.quietSpaceSessions.length > 0)("ngIfElse", _r17);
} }
function WellnessJourneyComponent_div_58_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resource #", resource_r25.resourceId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", resource_r25.timeSpent, " minutes \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, resource_r25.completedAt, "MMM d, yyyy"), "");
} }
function WellnessJourneyComponent_div_58_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WellnessJourneyComponent_div_58_div_6_div_1_Template, 9, 6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r21.journey.resourcesCompleted, 0, 10));
} }
function WellnessJourneyComponent_div_58_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 71);
} }
function WellnessJourneyComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resources Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Browse Library");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WellnessJourneyComponent_div_58_div_6_Template, 3, 5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WellnessJourneyComponent_div_58_ng_template_7_Template, 1, 0, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.journey.resourcesCompleted.length > 0)("ngIfElse", _r22);
} }
function WellnessJourneyComponent_div_59_div_6_app_card_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const challenge_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", challenge_r29.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", challenge_r29.progress, "% complete");
} }
function WellnessJourneyComponent_div_59_div_6_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-badge", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WellnessJourneyComponent_div_59_div_6_app_card_1_div_13_Template, 5, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessJourneyComponent_div_59_div_6_app_card_1_Template_app_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const challenge_r29 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.startChallenge(challenge_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const challenge_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + challenge_r29.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", challenge_r29.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", challenge_r29.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](challenge_r29.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](challenge_r29.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](challenge_r29.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](challenge_r29.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", challenge_r29.progress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", challenge_r29.progress > 0 ? "Continue" : "Start Challenge", " ");
} }
function WellnessJourneyComponent_div_59_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WellnessJourneyComponent_div_59_div_6_app_card_1_Template, 17, 9, "app-card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.availableChallenges);
} }
function WellnessJourneyComponent_div_59_app_empty_state_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 91);
} }
function WellnessJourneyComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wellness Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessJourneyComponent_div_59_Template_app_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.viewChallenges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WellnessJourneyComponent_div_59_div_6_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WellnessJourneyComponent_div_59_app_empty_state_7_Template, 1, 0, "app-empty-state", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.availableChallenges.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.availableChallenges.length === 0);
} }
function WellnessJourneyComponent_div_60_app_card_4_app_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessJourneyComponent_div_60_app_card_4_app_button_10_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const insight_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return insight_r37.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insight_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r37.actionLabel);
} }
function WellnessJourneyComponent_div_60_app_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-badge", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WellnessJourneyComponent_div_60_app_card_4_app_button_10_Template, 2, 1, "app-button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insight_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + insight_r37.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", insight_r37.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", insight_r37.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r37.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r37.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r37.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r37.actionLabel);
} }
function WellnessJourneyComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Personal Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WellnessJourneyComponent_div_60_app_card_4_Template, 11, 7, "app-card", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.insights);
} }
class WellnessJourneyComponent {
    constructor(journeyService) {
        this.journeyService = journeyService;
        this.user = { firstName: 'John' };
        this.journey = {
            moodCheckins: [],
            quietSpaceSessions: [],
            resourcesCompleted: [],
            challengesCompleted: [],
            supportConversations: 0,
            appointmentsAttended: 0,
            personalActivities: []
        };
        this.availableChallenges = [];
        this.insights = [];
        this.activeTab = 'mood';
        this.tabs = [
            { id: 'mood', label: 'Mood History' },
            { id: 'quiet-space', label: 'Quiet Space' },
            { id: 'resources', label: 'Resources' },
            { id: 'challenges', label: 'Challenges' },
            { id: 'insights', label: 'Insights' }
        ];
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book' },
            { label: 'Journey', route: '/student/wellness-journey', icon: 'trending-up', active: true }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.journey = this.journeyService.getJourney();
        this.availableChallenges = this.journeyService.getAvailableChallenges();
        this.insights = this.journeyService.getInsights(this.journey);
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
    }
    getMoodEmoji(mood) {
        const emojis = {
            'great': '😄', 'good': '🙂', 'okay': '😐', 'low': '😔', 'stressed': '😰', 'very_low': '😢'
        };
        return emojis[mood] || '😐';
    }
    getMoodColor(mood) {
        const colors = {
            'great': 'success', 'good': 'primary', 'okay': 'warning', 'low': 'warning', 'stressed': 'error', 'very_low': 'error'
        };
        return colors[mood] || 'gray';
    }
    getSessionTypeIcon(type) {
        const icons = {
            'breathing': '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            'grounding': '<circle cx="12" cy="12" r="3"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path>',
            'relaxation': '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
            'reflection': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>'
        };
        return icons[type] || icons['breathing'];
    }
    getSessionTypeColor(type) {
        const colors = {
            'breathing': 'primary-100',
            'grounding': 'accent-100',
            'relaxation': 'secondary-100',
            'reflection': 'warning-light'
        };
        return colors[type] || 'primary-100';
    }
    getSessionTypeVariant(type) {
        const variants = {
            'breathing': 'primary',
            'grounding': 'accent',
            'relaxation': 'secondary',
            'reflection': 'warning'
        };
        return variants[type] || 'primary';
    }
    formatSessionType(type) {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
    viewChallenges() {
        console.log('View all challenges');
    }
    startChallenge(challenge) {
        console.log('Start challenge:', challenge.id);
    }
}
WellnessJourneyComponent.ɵfac = function WellnessJourneyComponent_Factory(t) { return new (t || WellnessJourneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_wellness_journey_service__WEBPACK_IMPORTED_MODULE_1__["WellnessJourneyService"])); };
WellnessJourneyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WellnessJourneyComponent, selectors: [["app-wellness-journey"]], decls: 62, vars: 14, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "stats-grid"], ["variant", "elevated", "padding", "md", 1, "stat-card"], [1, "stat-icon", "bg-primary-100"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "bg-accent-100"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "stat-icon", "bg-secondary-100"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], [1, "stat-icon", "bg-warning-light"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["role", "tablist", 1, "tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [3, "items"], ["role", "tab", 1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "section-header"], [1, "section-title"], ["variant", "outline", "size", "sm", "routerLink", "/student/mood-checkin"], ["class", "mood-timeline", 4, "ngIf", "ngIfElse"], ["emptyMood", ""], [1, "mood-timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-marker", 3, "ngClass"], [1, "timeline-content"], [1, "timeline-header"], [1, "mood-emoji"], [1, "timeline-date"], ["class", "timeline-note", 4, "ngIf"], [1, "timeline-note"], ["title", "No mood entries yet", "description", "Start tracking your mood to see your emotional patterns over time", "icon", "activity"], ["variant", "outline", "size", "sm", "routerLink", "/student/quiet-space"], ["class", "session-list", 4, "ngIf", "ngIfElse"], ["emptyQuiet", ""], [1, "session-list"], ["class", "session-item", 4, "ngFor", "ngForOf"], [1, "session-item"], [1, "session-icon", 3, "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], [1, "session-info"], [1, "text-sm", "text-gray-600"], ["size", "sm", 3, "variant"], ["title", "No sessions completed", "description", "Try a breathing exercise or grounding technique to get started", "icon", "moon"], ["variant", "outline", "size", "sm", "routerLink", "/student/wellness-resources"], ["class", "resource-list", 4, "ngIf", "ngIfElse"], ["emptyResources", ""], [1, "resource-list"], ["class", "resource-item", 4, "ngFor", "ngForOf"], [1, "resource-item"], [1, "resource-info"], ["variant", "secondary", "size", "sm"], ["title", "No resources completed", "description", "Explore articles, videos, and tools to start your learning journey", "icon", "book"], ["variant", "outline", "size", "sm", 3, "click"], ["class", "challenge-grid", 4, "ngIf"], ["title", "No challenges available", "description", "Check back soon for new wellness challenges", "icon", "target", 4, "ngIf"], [1, "challenge-grid"], ["variant", "elevated", "padding", "md", "class", "challenge-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "challenge-card"], [1, "challenge-header"], [1, "challenge-icon", 3, "ngClass"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], ["variant", "secondary", "size", "sm", 1, "ml-2"], [1, "mt-3"], [1, "text-sm", "text-gray-600", "mt-2"], ["class", "challenge-progress mt-4", 4, "ngIf"], [1, "challenge-actions", "mt-4"], ["variant", "primary", "size", "sm", 1, "w-full", 3, "click"], [1, "challenge-progress", "mt-4"], [1, "progress-bar"], [1, "progress-fill"], [1, "text-xs", "text-gray-500", "mt-1"], ["title", "No challenges available", "description", "Check back soon for new wellness challenges", "icon", "target"], [1, "grid", "grid-2"], ["variant", "elevated", "padding", "lg", "class", "insight-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "lg", 1, "insight-card"], [1, "insight-header"], [1, "insight-icon", 3, "ngClass"], [1, "mt-4"], [1, "text-gray-600", "mt-2"], ["variant", "ghost", "size", "sm", "class", "mt-4", 3, "click", 4, "ngIf"], ["variant", "ghost", "size", "sm", 1, "mt-4", 3, "click"]], template: function WellnessJourneyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wellness Journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Track your progress and celebrate your growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mood Check-ins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "polyline", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quiet Space Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polyline", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "polyline", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Resources Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polygon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Challenges Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, WellnessJourneyComponent_button_55_Template, 2, 3, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, WellnessJourneyComponent_div_56_Template, 9, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, WellnessJourneyComponent_div_57_Template, 9, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, WellnessJourneyComponent_div_58_Template, 9, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, WellnessJourneyComponent_div_59_Template, 8, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, WellnessJourneyComponent_div_60_Template, 5, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-bottom-nav", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.journey.moodCheckins.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.journey.quietSpaceSessions.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.journey.resourcesCompleted.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.journey.challengesCompleted.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "mood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "quiet-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__["BottomNavComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_8__["EmptyStateComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__["BadgeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .stats-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: repeat(2, 1fr); margin-bottom: var(--space-6); }\n    @media (min-width: 768px) { .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(4, 1fr); } }\n    .stat-card[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-3); }\n    .stat-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .stat-content[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .stat-value[_ngcontent-%COMP%] { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-gray-900); }\n    .stat-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .tab-content[_ngcontent-%COMP%] { animation: fadeIn var(--transition-normal); }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n    .section-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin: 0; }\n    .mood-timeline[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .timeline-item[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); position: relative; }\n    .timeline-item[_ngcontent-%COMP%]:not(:last-child)::before { content: ''; position: absolute; left: 11px; top: 32px; bottom: 0; width: 2px; background: var(--color-gray-200); }\n    .timeline-marker[_ngcontent-%COMP%] { width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; margin-top: 2px; }\n    .timeline-content[_ngcontent-%COMP%] { flex: 1; }\n    .timeline-header[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-1); }\n    .mood-emoji[_ngcontent-%COMP%] { font-size: var(--font-size-xl); }\n    .timeline-date[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-500); }\n    .timeline-note[_ngcontent-%COMP%] { margin: 0; font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .session-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-3); }\n    .session-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3); background: var(--color-gray-50); border-radius: var(--radius-lg); }\n    .session-icon[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .session-info[_ngcontent-%COMP%] { flex: 1; }\n    .session-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .resource-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-3); }\n    .resource-item[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; padding: var(--space-3); background: var(--color-gray-50); border-radius: var(--radius-lg); }\n    .resource-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .challenge-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .challenge-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .challenge-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .challenge-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; }\n    .challenge-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }\n    .ml-2[_ngcontent-%COMP%] { margin-left: var(--space-2); }\n    .challenge-progress[_ngcontent-%COMP%] { }\n    .progress-bar[_ngcontent-%COMP%] { height: 6px; background: var(--color-gray-200); border-radius: var(--radius-full); overflow: hidden; }\n    .progress-fill[_ngcontent-%COMP%] { height: 100%; background: var(--color-primary); border-radius: var(--radius-full); transition: width var(--transition-normal); }\n    .challenge-actions[_ngcontent-%COMP%] { margin-top: auto; }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); }\n    .grid-2[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-2[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .insight-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .insight-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; }\n    .insight-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }\n    .bg-secondary-100[_ngcontent-%COMP%] { background: var(--color-secondary-100); color: var(--color-secondary); }\n    .bg-accent-100[_ngcontent-%COMP%] { background: var(--color-accent-100); color: var(--color-accent); }\n    .bg-warning-light[_ngcontent-%COMP%] { background: var(--color-warning-light); color: var(--color-warning); }\n    .bg-success-light[_ngcontent-%COMP%] { background: var(--color-success-light); color: var(--color-success); }\n    .mt-1[_ngcontent-%COMP%] { margin-top: var(--space-1); }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-3[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mt-6[_ngcontent-%COMP%] { margin-top: var(--space-6); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WellnessJourneyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wellness-journey',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Wellness Journey</h1>
            <p class="page-description">Track your progress and celebrate your growth</p>
          </div>

          <div class="stats-grid">
            <app-card variant="elevated" padding="md" class="stat-card">
              <div class="stat-icon bg-primary-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div class="stat-content">
                <span class="stat-value">{{ journey.moodCheckins.length }}</span>
                <span class="stat-label">Mood Check-ins</span>
              </div>
            </app-card>

            <app-card variant="elevated" padding="md" class="stat-card">
              <div class="stat-icon bg-accent-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div class="stat-content">
                <span class="stat-value">{{ journey.quietSpaceSessions.length }}</span>
                <span class="stat-label">Quiet Space Sessions</span>
              </div>
            </app-card>

            <app-card variant="elevated" padding="md" class="stat-card">
              <div class="stat-icon bg-secondary-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div class="stat-content">
                <span class="stat-value">{{ journey.resourcesCompleted.length }}</span>
                <span class="stat-label">Resources Completed</span>
              </div>
            </app-card>

            <app-card variant="elevated" padding="md" class="stat-card">
              <div class="stat-icon bg-warning-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div class="stat-content">
                <span class="stat-value">{{ journey.challengesCompleted.length }}</span>
                <span class="stat-label">Challenges Completed</span>
              </div>
            </app-card>
          </div>

          <div class="tabs" role="tablist">
            <button *ngFor="let tab of tabs" role="tab" [class.active]="activeTab === tab.id" (click)="setActiveTab(tab.id)" class="tab-btn">
              {{ tab.label }}
            </button>
          </div>

          <div *ngIf="activeTab === 'mood'" class="tab-content">
            <div class="section-header">
              <h3 class="section-title">Mood History</h3>
              <app-button variant="outline" size="sm" routerLink="/student/mood-checkin">Add Entry</app-button>
            </div>
            <div class="mood-timeline" *ngIf="journey.moodCheckins.length > 0; else emptyMood">
              <div *ngFor="let checkin of journey.moodCheckins | slice:0:10" class="timeline-item">
                <div class="timeline-marker" [ngClass]="'bg-' + getMoodColor(checkin.mood)"></div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <span class="mood-emoji">{{ getMoodEmoji(checkin.mood) }}</span>
                    <span class="timeline-date">{{ checkin.createdAt | date:'MMM d, yyyy h:mm a' }}</span>
                  </div>
                  <p *ngIf="checkin.note" class="timeline-note">{{ checkin.note }}</p>
                </div>
              </div>
            </div>
            <ng-template #emptyMood>
              <app-empty-state title="No mood entries yet" description="Start tracking your mood to see your emotional patterns over time" icon="activity"></app-empty-state>
            </ng-template>
          </div>

          <div *ngIf="activeTab === 'quiet-space'" class="tab-content">
            <div class="section-header">
              <h3 class="section-title">Quiet Space Sessions</h3>
              <app-button variant="outline" size="sm" routerLink="/student/quiet-space">Start Session</app-button>
            </div>
            <div class="session-list" *ngIf="journey.quietSpaceSessions.length > 0; else emptyQuiet">
              <div *ngFor="let session of journey.quietSpaceSessions | slice:0:10" class="session-item">
                <div class="session-icon" [ngClass]="'bg-' + getSessionTypeColor(session.type)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="getSessionTypeIcon(session.type)"></svg>
                </div>
                <div class="session-info">
                  <h4>{{ formatSessionType(session.type) }}</h4>
                  <p class="text-sm text-gray-600">{{ session.duration }} minutes · {{ session.completedAt | date:'MMM d, yyyy h:mm a' }}</p>
                </div>
                <app-badge [variant]="getSessionTypeVariant(session.type)" size="sm">{{ session.duration }} min</app-badge>
              </div>
            </div>
            <ng-template #emptyQuiet>
              <app-empty-state title="No sessions completed" description="Try a breathing exercise or grounding technique to get started" icon="moon"></app-empty-state>
            </ng-template>
          </div>

          <div *ngIf="activeTab === 'resources'" class="tab-content">
            <div class="section-header">
              <h3 class="section-title">Resources Completed</h3>
              <app-button variant="outline" size="sm" routerLink="/student/wellness-resources">Browse Library</app-button>
            </div>
            <div class="resource-list" *ngIf="journey.resourcesCompleted.length > 0; else emptyResources">
              <div *ngFor="let resource of journey.resourcesCompleted | slice:0:10" class="resource-item">
                <div class="resource-info">
                  <h4>Resource #{{ resource.resourceId }}</h4>
                  <p class="text-sm text-gray-600">{{ resource.timeSpent }} minutes · {{ resource.completedAt | date:'MMM d, yyyy' }}</p>
                </div>
                <app-badge variant="secondary" size="sm">Completed</app-badge>
              </div>
            </div>
            <ng-template #emptyResources>
              <app-empty-state title="No resources completed" description="Explore articles, videos, and tools to start your learning journey" icon="book"></app-empty-state>
            </ng-template>
          </div>

          <div *ngIf="activeTab === 'challenges'" class="tab-content">
            <div class="section-header">
              <h3 class="section-title">Wellness Challenges</h3>
              <app-button variant="outline" size="sm" (click)="viewChallenges()">View All</app-button>
            </div>
            <div class="challenge-grid" *ngIf="availableChallenges.length > 0">
              <app-card *ngFor="let challenge of availableChallenges" variant="elevated" padding="md" class="challenge-card">
                <div class="challenge-header">
                  <div class="challenge-icon" [ngClass]="'bg-' + challenge.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="challenge.icon"></svg>
                  </div>
                  <div>
                    <app-badge [variant]="challenge.difficulty" size="sm">{{ challenge.difficulty }}</app-badge>
                    <app-badge variant="secondary" size="sm" class="ml-2">{{ challenge.duration }}</app-badge>
                  </div>
                </div>
                <h4 class="mt-3">{{ challenge.title }}</h4>
                <p class="text-sm text-gray-600 mt-2">{{ challenge.description }}</p>
                <div class="challenge-progress mt-4" *ngIf="challenge.progress > 0">
                  <div class="progress-bar">
                    <div class="progress-fill" [style.width.%]="challenge.progress"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">{{ challenge.progress }}% complete</p>
                </div>
                <div class="challenge-actions mt-4">
                  <app-button variant="primary" size="sm" class="w-full" (click)="startChallenge(challenge)">
                    {{ challenge.progress > 0 ? 'Continue' : 'Start Challenge' }}
                  </app-button>
                </div>
              </app-card>
            </div>
            <app-empty-state *ngIf="availableChallenges.length === 0" title="No challenges available" description="Check back soon for new wellness challenges" icon="target"></app-empty-state>
          </div>

          <div *ngIf="activeTab === 'insights'" class="tab-content">
            <h3 class="section-title">Personal Insights</h3>
            <div class="grid grid-2">
              <app-card *ngFor="let insight of insights" variant="elevated" padding="lg" class="insight-card">
                <div class="insight-header">
                  <div class="insight-icon" [ngClass]="'bg-' + insight.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="insight.icon"></svg>
                  </div>
                  <app-badge [variant]="insight.type" size="sm">{{ insight.type }}</app-badge>
                </div>
                <h4 class="mt-4">{{ insight.title }}</h4>
                <p class="text-gray-600 mt-2">{{ insight.description }}</p>
                <app-button *ngIf="insight.actionLabel" variant="ghost" size="sm" class="mt-4" (click)="insight.action()">{{ insight.actionLabel }}</app-button>
              </app-card>
            </div>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .stats-grid { display: grid; gap: var(--space-4); grid-template-columns: repeat(2, 1fr); margin-bottom: var(--space-6); }
    @media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
    .stat-card { display: flex; align-items: center; gap: var(--space-3); }
    .stat-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .stat-content { display: flex; flex-direction: column; }
    .stat-value { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-gray-900); }
    .stat-label { font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .tabs { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .tab-content { animation: fadeIn var(--transition-normal); }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin: 0; }
    .mood-timeline { display: flex; flex-direction: column; gap: var(--space-4); }
    .timeline-item { display: flex; gap: var(--space-4); position: relative; }
    .timeline-item:not(:last-child)::before { content: ''; position: absolute; left: 11px; top: 32px; bottom: 0; width: 2px; background: var(--color-gray-200); }
    .timeline-marker { width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; margin-top: 2px; }
    .timeline-content { flex: 1; }
    .timeline-header { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-1); }
    .mood-emoji { font-size: var(--font-size-xl); }
    .timeline-date { font-size: var(--font-size-sm); color: var(--color-gray-500); }
    .timeline-note { margin: 0; font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .session-list { display: flex; flex-direction: column; gap: var(--space-3); }
    .session-item { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3); background: var(--color-gray-50); border-radius: var(--radius-lg); }
    .session-icon { width: 44px; height: 44px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .session-info { flex: 1; }
    .session-info h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .resource-list { display: flex; flex-direction: column; gap: var(--space-3); }
    .resource-item { display: flex; align-items: center; justify-content: space-between; padding: var(--space-3); background: var(--color-gray-50); border-radius: var(--radius-lg); }
    .resource-info h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .challenge-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 768px) { .challenge-grid { grid-template-columns: repeat(2, 1fr); } }
    .challenge-card { display: flex; flex-direction: column; }
    .challenge-header { display: flex; align-items: flex-start; justify-content: space-between; }
    .challenge-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .ml-2 { margin-left: var(--space-2); }
    .challenge-progress { }
    .progress-bar { height: 6px; background: var(--color-gray-200); border-radius: var(--radius-full); overflow: hidden; }
    .progress-fill { height: 100%; background: var(--color-primary); border-radius: var(--radius-full); transition: width var(--transition-normal); }
    .challenge-actions { margin-top: auto; }
    .w-full { width: 100%; }
    .grid { display: grid; gap: var(--space-4); }
    .grid-2 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
    .insight-card { display: flex; flex-direction: column; }
    .insight-header { display: flex; align-items: flex-start; justify-content: space-between; }
    .insight-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
    .bg-secondary-100 { background: var(--color-secondary-100); color: var(--color-secondary); }
    .bg-accent-100 { background: var(--color-accent-100); color: var(--color-accent); }
    .bg-warning-light { background: var(--color-warning-light); color: var(--color-warning); }
    .bg-success-light { background: var(--color-success-light); color: var(--color-success); }
    .mt-1 { margin-top: var(--space-1); }
    .mt-2 { margin-top: var(--space-2); }
    .mt-3 { margin-top: var(--space-3); }
    .mt-4 { margin-top: var(--space-4); }
    .mt-6 { margin-top: var(--space-6); }
  `]
            }]
    }], function () { return [{ type: _core_services_wellness_journey_service__WEBPACK_IMPORTED_MODULE_1__["WellnessJourneyService"] }]; }, null); })();


/***/ }),

/***/ "Bv6x":
/*!******************************************************!*\
  !*** ./src/app/core/services/quiet-space.service.ts ***!
  \******************************************************/
/*! exports provided: QuietSpaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuietSpaceService", function() { return QuietSpaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QuietSpaceService {
    constructor() {
        this.breathingExercises = [
            {
                id: 'box-breathing',
                name: 'Box Breathing',
                description: 'Equal counts for inhale, hold, exhale, hold. Used by Navy SEALs for calm under pressure.',
                icon: '<path d="M8 22h8"></path><path d="M12 18v-8"></path><path d="M8 10h8"></path><path d="M12 2v8"></path>',
                iconColor: 'primary-100',
                inhale: 4,
                hold: 4,
                exhale: 4,
                cycles: 4,
                difficulty: 'beginner'
            },
            {
                id: '4-7-8-breathing',
                name: '4-7-8 Breathing',
                description: 'Inhale for 4, hold for 7, exhale for 8. Natural tranquilizer for the nervous system.',
                icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                iconColor: 'accent-100',
                inhale: 4,
                hold: 7,
                exhale: 8,
                cycles: 4,
                difficulty: 'beginner'
            },
            {
                id: 'coherent-breathing',
                name: 'Coherent Breathing',
                description: 'Slow, rhythmic breathing at 5-6 breaths per minute. Optimizes heart rate variability.',
                icon: '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
                iconColor: 'secondary-100',
                inhale: 5,
                hold: 0,
                exhale: 5,
                cycles: 6,
                difficulty: 'intermediate'
            },
            {
                id: 'alternate-nostril',
                name: 'Alternate Nostril Breathing',
                description: 'Balances left and right brain hemispheres. Reduces anxiety and improves focus.',
                icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
                iconColor: 'warning-light',
                inhale: 4,
                hold: 4,
                exhale: 6,
                cycles: 5,
                difficulty: 'intermediate'
            },
            {
                id: 'breath-of-fire',
                name: 'Breath of Fire',
                description: 'Rapid, rhythmic breathing to energize and clear the mind. Advanced practice.',
                icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                iconColor: 'error-light',
                inhale: 1,
                hold: 0,
                exhale: 1,
                cycles: 30,
                difficulty: 'advanced'
            }
        ];
        this.ambientSounds = [
            {
                id: 'rain',
                name: 'Gentle Rain',
                description: 'Soft rainfall on leaves and ground',
                category: 'Nature',
                duration: 'Loop',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                audioUrl: 'assets/sounds/rain.mp3'
            },
            {
                id: 'ocean-waves',
                name: 'Ocean Waves',
                description: 'Rhythmic waves rolling onto shore',
                category: 'Nature',
                duration: 'Loop',
                icon: '<path d="M2 16c0-4 4-6 8-6s8 2 8 6"></path><path d="M2 12c0-4 4-6 8-6s8 2 8 6"></path><path d="M2 8c0-4 4-6 8-6s8 2 8 6"></path>',
                iconColor: 'secondary-100',
                audioUrl: 'assets/sounds/ocean.mp3'
            },
            {
                id: 'forest-ambience',
                name: 'Forest Ambience',
                description: 'Birds, wind, and distant wildlife',
                category: 'Nature',
                duration: 'Loop',
                icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>',
                iconColor: 'accent-100',
                audioUrl: 'assets/sounds/forest.mp3'
            },
            {
                id: 'white-noise',
                name: 'White Noise',
                description: 'Consistent frequency masking background sounds',
                category: 'Focus',
                duration: 'Loop',
                icon: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                iconColor: 'gray-100',
                audioUrl: 'assets/sounds/white-noise.mp3'
            },
            {
                id: 'brown-noise',
                name: 'Brown Noise',
                description: 'Deeper, more soothing than white noise',
                category: 'Focus',
                duration: 'Loop',
                icon: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                iconColor: 'secondary-100',
                audioUrl: 'assets/sounds/brown-noise.mp3'
            },
            {
                id: 'campfire',
                name: 'Campfire',
                description: 'Crackling fire with gentle night sounds',
                category: 'Comfort',
                duration: 'Loop',
                icon: '<path d="M10 22c0-3 2-5 5-5s5 2 5 5"></path><path d="M15 17c0-2 2-4 5-4s5 2 5 4"></path><path d="M5 17c0-2 2-4 5-4s5 2 5 4"></path>',
                iconColor: 'warning-light',
                audioUrl: 'assets/sounds/campfire.mp3'
            }
        ];
        this.groundingTechniques = [
            {
                id: '5-4-3-2-1',
                name: '5-4-3-2-1 Sensory Grounding',
                description: 'Classic grounding technique using all five senses to anchor in the present moment.',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                difficulty: 'beginner',
                steps: [
                    { title: '5 Things You See', instruction: 'Look around and name 5 things you can see. Notice details like colors, shapes, textures.', duration: 30 },
                    { title: '4 Things You Feel', instruction: 'Notice 4 things you can physically feel. Your feet on the floor, clothes on skin, air temperature.', duration: 30 },
                    { title: '3 Things You Hear', instruction: 'Listen for 3 distinct sounds. Near or far, loud or quiet.', duration: 30 },
                    { title: '2 Things You Smell', instruction: 'Notice 2 smells. If none, recall 2 favorite scents.', duration: 20 },
                    { title: '1 Thing You Taste', instruction: 'Notice 1 taste. Take a sip of water or notice the taste in your mouth.', duration: 15 }
                ]
            },
            {
                id: 'body-scan',
                name: 'Body Scan Grounding',
                description: 'Systematically bring awareness to each part of the body from toes to head.',
                icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
                iconColor: 'accent-100',
                difficulty: 'beginner',
                steps: [
                    { title: 'Feet & Legs', instruction: 'Bring attention to your feet. Notice pressure, temperature, tingling. Move up through calves, knees, thighs.', duration: 60 },
                    { title: 'Hips & Torso', instruction: 'Notice sensations in hips, pelvis, lower back, abdomen, chest. Breath moving the belly.', duration: 60 },
                    { title: 'Arms & Hands', instruction: 'Bring awareness to shoulders, upper arms, elbows, forearms, wrists, hands, fingers.', duration: 60 },
                    { title: 'Neck & Head', instruction: 'Notice neck, throat, jaw, face, scalp. Release any tension you find.', duration: 60 }
                ]
            },
            {
                id: 'cognitive-grounding',
                name: 'Cognitive Grounding',
                description: 'Use mental exercises to redirect focus from distressing thoughts to neutral facts.',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'secondary-100',
                difficulty: 'intermediate',
                steps: [
                    { title: 'Name the Date', instruction: 'Say today\'s date, day of the week, month, year, and time out loud.', duration: 15 },
                    { title: 'Location Check', instruction: 'Name where you are: building, room, city, country.', duration: 15 },
                    { title: 'Category Game', instruction: 'Name 10 items in a category (e.g., fruits, countries, car brands).', duration: 30 },
                    { title: 'Math Countdown', instruction: 'Count backward from 100 by 7s (100, 93, 86, 79...).', duration: 30 },
                    { title: 'Describe an Object', instruction: 'Pick an object and describe it in detail: color, texture, weight, use, origin.', duration: 30 }
                ]
            },
            {
                id: 'movement-grounding',
                name: 'Movement Grounding',
                description: 'Use physical movement to discharge nervous energy and reconnect with the body.',
                icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
                iconColor: 'warning-light',
                difficulty: 'intermediate',
                steps: [
                    { title: 'Stomp Feet', instruction: 'Stand and stomp each foot firmly on the ground 10 times. Feel the impact.', duration: 20 },
                    { title: 'Wall Push', instruction: 'Push against a wall with hands for 10 seconds. Release. Repeat 3 times.', duration: 30 },
                    { title: 'Shoulder Rolls', instruction: 'Roll shoulders forward 10 times, then backward 10 times.', duration: 20 },
                    { title: 'Hand Press', instruction: 'Press palms together firmly at chest height for 10 seconds. Release. Repeat.', duration: 20 },
                    { title: 'Walk Mindfully', instruction: 'Walk slowly around the room, feeling each foot contact the floor.', duration: 60 }
                ]
            }
        ];
    }
    getBreathingExercises() {
        return [...this.breathingExercises];
    }
    getBreathingExerciseById(id) {
        return this.breathingExercises.find(e => e.id === id);
    }
    getAmbientSounds() {
        return [...this.ambientSounds];
    }
    getAmbientSoundById(id) {
        return this.ambientSounds.find(s => s.id === id);
    }
    getGroundingTechniques() {
        return [...this.groundingTechniques];
    }
    getGroundingTechniqueById(id) {
        return this.groundingTechniques.find(t => t.id === id);
    }
}
QuietSpaceService.ɵfac = function QuietSpaceService_Factory(t) { return new (t || QuietSpaceService)(); };
QuietSpaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuietSpaceService, factory: QuietSpaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuietSpaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EIi9":
/*!***********************************************!*\
  !*** ./src/app/core/models/wellness.model.ts ***!
  \***********************************************/
/*! exports provided: QuickHelpCategory, SupportPathway, QUICK_HELP_OPTIONS, SUPPORT_PATHWAYS, ResourceCategory, MOOD_EMOJIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickHelpCategory", function() { return QuickHelpCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPathway", function() { return SupportPathway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICK_HELP_OPTIONS", function() { return QUICK_HELP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_PATHWAYS", function() { return SUPPORT_PATHWAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceCategory", function() { return ResourceCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_EMOJIS", function() { return MOOD_EMOJIS; });
var QuickHelpCategory;
(function (QuickHelpCategory) {
    QuickHelpCategory["STRESS"] = "stress";
    QuickHelpCategory["ANXIETY_WORRY"] = "anxiety_worry";
    QuickHelpCategory["ACADEMIC_PRESSURE"] = "academic_pressure";
    QuickHelpCategory["RELATIONSHIPS"] = "relationships";
    QuickHelpCategory["FAMILY_ISSUES"] = "family_issues";
    QuickHelpCategory["FINANCIAL_CHALLENGES"] = "financial_challenges";
    QuickHelpCategory["CAREER_GUIDANCE"] = "career_guidance";
    QuickHelpCategory["FRIENDSHIP_SOCIAL"] = "friendship_social";
    QuickHelpCategory["SLEEP_WELLBEING"] = "sleep_wellbeing";
    QuickHelpCategory["GENERAL_SUPPORT"] = "general_support";
    QuickHelpCategory["NOT_SURE"] = "not_sure";
    QuickHelpCategory["URGENT_HELP"] = "urgent_help";
})(QuickHelpCategory || (QuickHelpCategory = {}));
var SupportPathway;
(function (SupportPathway) {
    SupportPathway["PEER_COUNSELOR"] = "peer_counselor";
    SupportPathway["GUIDANCE_STAFF"] = "guidance_staff";
    SupportPathway["WELLNESS_RESOURCE"] = "wellness_resource";
    SupportPathway["QUIET_SPACE"] = "quiet_space";
    SupportPathway["CAREER_GUIDANCE"] = "career_guidance";
    SupportPathway["ACADEMIC_SUPPORT"] = "academic_support";
    SupportPathway["URGENT_HELP"] = "urgent_help";
})(SupportPathway || (SupportPathway = {}));
const QUICK_HELP_OPTIONS = [
    {
        id: QuickHelpCategory.STRESS,
        label: 'Stress',
        description: 'Feeling overwhelmed, pressured, or unable to cope',
        icon: 'stress',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.ANXIETY_WORRY,
        label: 'Anxiety/Worry',
        description: 'Persistent worry, nervousness, or panic feelings',
        icon: 'anxiety',
        recommendedPathway: SupportPathway.GUIDANCE_STAFF
    },
    {
        id: QuickHelpCategory.ACADEMIC_PRESSURE,
        label: 'Academic Pressure',
        description: 'Coursework, exams, grades, or study difficulties',
        icon: 'academic',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.RELATIONSHIPS,
        label: 'Relationships',
        description: 'Romantic relationship concerns or difficulties',
        icon: 'relationship',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.FAMILY_ISSUES,
        label: 'Family Issues',
        description: 'Family conflicts, expectations, or home situation',
        icon: 'family',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.FINANCIAL_CHALLENGES,
        label: 'Financial Challenges',
        description: 'Money worries, fees, or financial stress',
        icon: 'financial',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.CAREER_GUIDANCE,
        label: 'Career Guidance',
        description: 'Career choices, internships, or future planning',
        icon: 'career',
        recommendedPathway: SupportPathway.CAREER_GUIDANCE
    },
    {
        id: QuickHelpCategory.FRIENDSHIP_SOCIAL,
        label: 'Friendship/Social Issues',
        description: 'Making friends, loneliness, or social anxiety',
        icon: 'social',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.SLEEP_WELLBEING,
        label: 'Sleep/Wellbeing',
        description: 'Sleep problems, fatigue, or general wellness',
        icon: 'sleep',
        recommendedPathway: SupportPathway.QUIET_SPACE
    },
    {
        id: QuickHelpCategory.GENERAL_SUPPORT,
        label: 'General Support',
        description: 'Just need someone to talk to or listen',
        icon: 'support',
        recommendedPathway: SupportPathway.PEER_COUNSELOR
    },
    {
        id: QuickHelpCategory.NOT_SURE,
        label: 'I\'m Not Sure What I Need',
        description: 'Unsure about my feelings or what would help',
        icon: 'unsure',
        recommendedPathway: SupportPathway.WELLNESS_RESOURCE
    },
    {
        id: QuickHelpCategory.URGENT_HELP,
        label: 'Urgent Help',
        description: 'Crisis situation, immediate safety concern',
        icon: 'urgent',
        recommendedPathway: SupportPathway.URGENT_HELP
    }
];
const SUPPORT_PATHWAYS = {
    [SupportPathway.PEER_COUNSELOR]: {
        pathway: SupportPathway.PEER_COUNSELOR,
        title: 'Talk to a Peer Counselor',
        description: 'Connect with a trained student peer counselor for supportive listening and guidance',
        icon: 'peer-counselor',
        actionLabel: 'Find Peer Counselor',
        actionRoute: '/student/peer-counselors'
    },
    [SupportPathway.GUIDANCE_STAFF]: {
        pathway: SupportPathway.GUIDANCE_STAFF,
        title: 'Professional Counselling',
        description: 'Book a session with a qualified guidance and counselling professional',
        icon: 'professional',
        actionLabel: 'Book Appointment',
        actionRoute: '/student/professional-counselling'
    },
    [SupportPathway.WELLNESS_RESOURCE]: {
        pathway: SupportPathway.WELLNESS_RESOURCE,
        title: 'Wellness Resources',
        description: 'Explore self-help articles, videos, and guided exercises',
        icon: 'resources',
        actionLabel: 'Browse Resources',
        actionRoute: '/student/wellness-resources'
    },
    [SupportPathway.QUIET_SPACE]: {
        pathway: SupportPathway.QUIET_SPACE,
        title: 'Quiet Space',
        description: 'Access calming exercises, breathing techniques, and relaxation tools',
        icon: 'quiet-space',
        actionLabel: 'Enter Quiet Space',
        actionRoute: '/student/quiet-space'
    },
    [SupportPathway.CAREER_GUIDANCE]: {
        pathway: SupportPathway.CAREER_GUIDANCE,
        title: 'Career Guidance',
        description: 'Get support with career planning, CV writing, and job search',
        icon: 'career',
        actionLabel: 'Career Resources',
        actionRoute: '/student/career-guidance'
    },
    [SupportPathway.ACADEMIC_SUPPORT]: {
        pathway: SupportPathway.ACADEMIC_SUPPORT,
        title: 'Academic Support',
        description: 'Access study tips, tutoring referrals, and academic resources',
        icon: 'academic-support',
        actionLabel: 'Academic Help',
        actionRoute: '/student/academic-support'
    },
    [SupportPathway.URGENT_HELP]: {
        pathway: SupportPathway.URGENT_HELP,
        title: 'Urgent Help',
        description: 'Immediate crisis support and emergency contacts',
        icon: 'urgent',
        actionLabel: 'Get Help Now',
        actionRoute: '/urgent-help'
    }
};
var ResourceCategory;
(function (ResourceCategory) {
    ResourceCategory["MENTAL_HEALTH"] = "mental_health";
    ResourceCategory["STRESS_MANAGEMENT"] = "stress_management";
    ResourceCategory["ACADEMIC_SUCCESS"] = "academic_success";
    ResourceCategory["RELATIONSHIPS"] = "relationships";
    ResourceCategory["SLEEP_WELLNESS"] = "sleep_wellness";
    ResourceCategory["MINDFULNESS"] = "mindfulness";
    ResourceCategory["CRISIS_SUPPORT"] = "crisis_support";
    ResourceCategory["CAREER_GUIDANCE"] = "career_guidance";
})(ResourceCategory || (ResourceCategory = {}));
const MOOD_EMOJIS = [
    { id: 'great', emoji: '😄', label: 'Great', value: 5, color: '#10B981' },
    { id: 'good', emoji: '🙂', label: 'Good', value: 4, color: '#3B82F6' },
    { id: 'okay', emoji: '😐', label: 'Okay', value: 3, color: '#F59E0B' },
    { id: 'low', emoji: '😔', label: 'Low', value: 2, color: '#F97316' },
    { id: 'stressed', emoji: '😰', label: 'Stressed', value: 1, color: '#EF4444' },
    { id: 'very_low', emoji: '😢', label: 'Very Low', value: 0, color: '#7F1D1D' }
];


/***/ }),

/***/ "G2Ft":
/*!************************************************************!*\
  !*** ./src/app/core/services/wellness-resource.service.ts ***!
  \************************************************************/
/*! exports provided: ResourceCategory, WellnessResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceCategory", function() { return ResourceCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessResourceService", function() { return WellnessResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ResourceCategory;
(function (ResourceCategory) {
    ResourceCategory["MENTAL_HEALTH"] = "mental_health";
    ResourceCategory["STRESS_MANAGEMENT"] = "stress_management";
    ResourceCategory["ACADEMIC_SUCCESS"] = "academic_success";
    ResourceCategory["RELATIONSHIPS"] = "relationships";
    ResourceCategory["SLEEP_WELLNESS"] = "sleep_wellness";
    ResourceCategory["MINDFULNESS"] = "mindfulness";
    ResourceCategory["CRISIS_SUPPORT"] = "crisis_support";
    ResourceCategory["CAREER_GUIDANCE"] = "career_guidance";
})(ResourceCategory || (ResourceCategory = {}));
class WellnessResourceService {
    constructor() {
        this.resources = [
            {
                id: 'res-001',
                title: 'Understanding Anxiety: A Student\'s Guide',
                description: 'Learn the signs of anxiety, how it affects academic performance, and practical coping strategies tailored for university students.',
                category: ResourceCategory.MENTAL_HEALTH,
                format: 'article',
                duration: '8 min read',
                views: 12450,
                tags: ['anxiety', 'coping', 'mental health', 'students'],
                author: 'Dr. Sarah Mwangi',
                publishDate: new Date('2024-01-15'),
                isFeatured: true
            },
            {
                id: 'res-002',
                title: '5-Minute Breathing Exercise for Exam Stress',
                description: 'Quick guided breathing technique to calm your nervous system before or during exams.',
                category: ResourceCategory.STRESS_MANAGEMENT,
                format: 'video',
                duration: '5 min',
                views: 8920,
                tags: ['breathing', 'exam stress', 'quick relief'],
                author: 'Wellness Team',
                publishDate: new Date('2024-02-10'),
                isFeatured: true
            },
            {
                id: 'res-003',
                title: 'Study Smarter, Not Harder: Evidence-Based Techniques',
                description: 'Discover scientifically proven study methods that improve retention and reduce study time.',
                category: ResourceCategory.ACADEMIC_SUCCESS,
                format: 'article',
                duration: '12 min read',
                views: 15670,
                tags: ['study tips', 'productivity', 'learning'],
                author: 'Prof. James Omondi',
                publishDate: new Date('2024-01-28'),
                isFeatured: false
            },
            {
                id: 'res-004',
                title: 'Building Healthy Relationships in University',
                description: 'Navigate friendships, romantic relationships, and roommate dynamics with confidence.',
                category: ResourceCategory.RELATIONSHIPS,
                format: 'podcast',
                duration: '25 min',
                views: 6780,
                tags: ['relationships', 'friendships', 'communication', 'boundaries'],
                author: 'Counselling Center',
                publishDate: new Date('2024-03-05'),
                isFeatured: false
            },
            {
                id: 'res-005',
                title: 'Sleep Hygiene for Better Academic Performance',
                description: 'Practical tips to improve sleep quality and wake up refreshed for early morning classes.',
                category: ResourceCategory.SLEEP_WELLNESS,
                format: 'article',
                duration: '10 min read',
                views: 9340,
                tags: ['sleep', 'academic performance', 'health'],
                author: 'Dr. Grace Wanjiku',
                publishDate: new Date('2024-02-20'),
                isFeatured: true
            },
            {
                id: 'res-006',
                title: 'Introduction to Mindfulness Meditation',
                description: 'Step-by-step guide to starting a mindfulness practice with guided audio sessions.',
                category: ResourceCategory.MINDFULNESS,
                format: 'video',
                duration: '15 min',
                views: 11200,
                tags: ['mindfulness', 'meditation', 'beginner'],
                author: 'Mindfulness Coach',
                publishDate: new Date('2024-03-12'),
                isFeatured: false
            },
            {
                id: 'res-007',
                title: 'Crisis Support: What to Do When You Need Immediate Help',
                description: 'Emergency contacts, crisis lines, and immediate steps for mental health emergencies.',
                category: ResourceCategory.CRISIS_SUPPORT,
                format: 'tool',
                duration: '3 min read',
                views: 4560,
                tags: ['crisis', 'emergency', 'helplines', 'safety'],
                author: 'KCA Wellness Hub',
                publishDate: new Date('2024-01-10'),
                isFeatured: true
            },
            {
                id: 'res-008',
                title: 'Career Planning Workshop: From Degree to Dream Job',
                description: 'Comprehensive guide to CV building, interview preparation, and networking for KCA graduates.',
                category: ResourceCategory.CAREER_GUIDANCE,
                format: 'worksheet',
                duration: '45 min',
                views: 7890,
                tags: ['career', 'CV', 'interviews', 'networking', 'jobs'],
                author: 'Career Services',
                publishDate: new Date('2024-02-28'),
                isFeatured: false
            },
            {
                id: 'res-009',
                title: 'Managing Financial Stress as a Student',
                description: 'Budgeting tips, scholarship resources, and financial planning for university life.',
                category: ResourceCategory.STRESS_MANAGEMENT,
                format: 'article',
                duration: '12 min read',
                views: 5670,
                tags: ['financial stress', 'budgeting', 'scholarships'],
                author: 'Financial Aid Office',
                publishDate: new Date('2024-03-18'),
                isFeatured: false
            },
            {
                id: 'res-010',
                title: 'Digital Wellbeing: Balancing Screen Time and Studies',
                description: 'Strategies to reduce digital overwhelm and create healthy technology boundaries.',
                category: ResourceCategory.MENTAL_HEALTH,
                format: 'video',
                duration: '18 min',
                views: 8230,
                tags: ['digital wellbeing', 'screen time', 'focus', 'productivity'],
                author: 'Tech Wellness Team',
                publishDate: new Date('2024-03-22'),
                isFeatured: false
            },
            {
                id: 'res-011',
                title: 'Peer Support: How to Help a Friend in Crisis',
                description: 'Learn the V-A-R method (Validate, Appreciate, Refer) for supporting peers effectively.',
                category: ResourceCategory.MENTAL_HEALTH,
                format: 'worksheet',
                duration: '20 min',
                views: 4320,
                tags: ['peer support', 'crisis', 'helping others'],
                author: 'Peer Counselling Program',
                publishDate: new Date('2024-02-14'),
                isFeatured: false
            },
            {
                id: 'res-012',
                title: 'Mindful Eating for Stress Reduction',
                description: 'Audio-guided mindful eating practice to reduce stress eating and improve nutrition awareness.',
                category: ResourceCategory.MINDFULNESS,
                format: 'podcast',
                duration: '12 min',
                views: 3890,
                tags: ['mindful eating', 'nutrition', 'stress eating'],
                author: 'Nutrition Services',
                publishDate: new Date('2024-03-30'),
                isFeatured: false
            }
        ];
        this.academyCourses = [
            {
                id: 'course-001',
                title: 'Foundations of Mental Wellness',
                description: 'Build a strong foundation for mental health with evidence-based practices including CBT basics, emotional regulation, and resilience building.',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                level: 'beginner',
                duration: '4 weeks',
                lessons: 12,
                enrolled: 2340,
                progress: 0,
                instructor: 'Dr. Sarah Mwangi',
                tags: ['CBT', 'resilience', 'emotional regulation', 'mental health basics']
            },
            {
                id: 'course-002',
                title: 'Stress Management Mastery',
                description: 'Comprehensive toolkit for identifying stress triggers, developing healthy coping mechanisms, and maintaining balance during high-pressure periods.',
                icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
                iconColor: 'warning-light',
                level: 'intermediate',
                duration: '6 weeks',
                lessons: 18,
                enrolled: 1890,
                progress: 0,
                instructor: 'Prof. James Omondi',
                tags: ['stress', 'coping', 'time management', 'burnout prevention']
            },
            {
                id: 'course-003',
                title: 'Academic Excellence Toolkit',
                description: 'Master study techniques, time management, exam preparation, and academic writing skills for university success.',
                icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                iconColor: 'secondary-100',
                level: 'beginner',
                duration: '5 weeks',
                lessons: 15,
                enrolled: 3120,
                progress: 0,
                instructor: 'Academic Support Center',
                tags: ['study skills', 'time management', 'exams', 'academic writing']
            },
            {
                id: 'course-004',
                title: 'Healthy Relationships & Communication',
                description: 'Develop skills for building and maintaining healthy relationships, setting boundaries, and effective communication.',
                icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                iconColor: 'accent-100',
                level: 'intermediate',
                duration: '4 weeks',
                lessons: 10,
                enrolled: 1560,
                progress: 0,
                instructor: 'Counselling Center',
                tags: ['relationships', 'communication', 'boundaries', 'conflict resolution']
            },
            {
                id: 'course-005',
                title: 'Sleep Science for Students',
                description: 'Understand the science of sleep, optimize your sleep schedule, and overcome common sleep challenges in university life.',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                level: 'beginner',
                duration: '3 weeks',
                lessons: 8,
                enrolled: 2100,
                progress: 0,
                instructor: 'Dr. Grace Wanjiku',
                tags: ['sleep', 'circadian rhythm', 'insomnia', 'energy management']
            },
            {
                id: 'course-006',
                title: 'Mindfulness-Based Stress Reduction (MBSR)',
                description: 'Complete 8-week MBSR program adapted for students with guided meditations, body scans, and mindful movement practices.',
                icon: '<circle cx="12" cy="12" r="3"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path>',
                iconColor: 'accent-100',
                level: 'advanced',
                duration: '8 weeks',
                lessons: 24,
                enrolled: 980,
                progress: 0,
                instructor: 'Certified MBSR Teacher',
                tags: ['mindfulness', 'MBSR', 'meditation', 'body scan', 'stress reduction']
            }
        ];
    }
    getResources() {
        return [...this.resources].sort((a, b) => {
            if (a.isFeatured && !b.isFeatured)
                return -1;
            if (!a.isFeatured && b.isFeatured)
                return 1;
            return b.views - a.views;
        });
    }
    getAcademyCourses() {
        return [...this.academyCourses].sort((a, b) => b.enrolled - a.enrolled);
    }
    getResourceById(id) {
        return this.resources.find(r => r.id === id);
    }
    getCourseById(id) {
        return this.academyCourses.find(c => c.id === id);
    }
    getResourcesByCategory(category) {
        return this.resources.filter(r => r.category === category);
    }
    getResourcesByFormat(format) {
        return this.resources.filter(r => r.format === format);
    }
    searchResources(query) {
        const lowerQuery = query.toLowerCase();
        return this.resources.filter(r => r.title.toLowerCase().includes(lowerQuery) ||
            r.description.toLowerCase().includes(lowerQuery) ||
            r.tags.some(t => t.toLowerCase().includes(lowerQuery)));
    }
    getFeaturedResources(limit = 3) {
        return this.resources
            .filter(r => r.isFeatured)
            .sort((a, b) => b.views - a.views)
            .slice(0, limit);
    }
    getPopularResources(limit = 5) {
        return [...this.resources]
            .sort((a, b) => b.views - a.views)
            .slice(0, limit);
    }
    getRecentResources(limit = 5) {
        return [...this.resources]
            .sort((a, b) => new Date(b.publishDate || 0).getTime() - new Date(a.publishDate || 0).getTime())
            .slice(0, limit);
    }
}
WellnessResourceService.ɵfac = function WellnessResourceService_Factory(t) { return new (t || WellnessResourceService)(); };
WellnessResourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WellnessResourceService, factory: WellnessResourceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WellnessResourceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qizq":
/*!****************************************************************************!*\
  !*** ./src/app/student/wellness-resources/wellness-resources.component.ts ***!
  \****************************************************************************/
/*! exports provided: WellnessResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessResourcesComponent", function() { return WellnessResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/wellness.model */ "EIi9");
/* harmony import */ var _core_services_wellness_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/wellness-resource.service */ "G2Ft");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/empty-state/empty-state.component */ "86d1");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");












function WellnessResourcesComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r6.label);
} }
function WellnessResourcesComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fmt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fmt_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fmt_r7.label);
} }
function WellnessResourcesComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const tab_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setActiveResourceTab(tab_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.activeResourceTab === tab_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r8.label, " ");
} }
function WellnessResourcesComponent_div_26_app_card_1_app_badge_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-badge", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r15);
} }
function WellnessResourcesComponent_div_26_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_26_app_card_1_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const resource_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openResource(resource_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-badge", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "polyline", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WellnessResourcesComponent_div_26_app_card_1_app_badge_22_Template, 2, 1, "app-badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + ctx_r11.getCategoryColor(resource_r13.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r11.getCategoryIcon(resource_r13.category), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r11.getFormatVariant(resource_r13.format));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resource_r13.format);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resource_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resource_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r13.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r13.views.toLocaleString(), " views ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", resource_r13.tags.slice(0, 3));
} }
function WellnessResourcesComponent_div_26_app_empty_state_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 45);
} }
function WellnessResourcesComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WellnessResourcesComponent_div_26_app_card_1_Template, 23, 9, "app-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WellnessResourcesComponent_div_26_app_empty_state_2_Template, 1, 0, "app-empty-state", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.filteredResources);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.filteredResources.length === 0);
} }
function WellnessResourcesComponent_div_27_app_card_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", course_r19.progress, "%");
} }
function WellnessResourcesComponent_div_27_app_card_7_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", course_r19.progress, "% complete");
} }
function WellnessResourcesComponent_div_27_app_card_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-badge", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WellnessResourcesComponent_div_27_app_card_7_div_18_Template, 2, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WellnessResourcesComponent_div_27_app_card_7_p_19_Template, 2, 1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_27_app_card_7_Template_app_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const course_r19 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.openCourse(course_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + course_r19.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", course_r19.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", course_r19.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r19.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", course_r19.lessons, " lessons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", course_r19.enrolled.toLocaleString(), " enrolled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r19.progress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r19.progress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r19.progress > 0 ? "Continue Learning" : "Start Course", " ");
} }
function WellnessResourcesComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wellness Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Structured courses to build lasting wellbeing skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WellnessResourcesComponent_div_27_app_card_7_Template, 22, 12, "app-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.academyCourses);
} }
function WellnessResourcesComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Self-Help Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.openTool("thought-record"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Thought Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CBT-based tool to identify and reframe unhelpful thoughts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.openTool("gratitude"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gratitude Journal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Daily gratitude practice with prompts and reminders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.openTool("values"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "polygon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Values Clarification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Discover what matters most to guide decisions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.openTool("coping"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rect", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Coping Plan Builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Create personalized crisis and coping plans");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.openTool("sleep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sleep Hygiene Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Assess and improve your sleep habits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.openTool("boundaries"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Boundary Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Practice saying no and setting healthy limits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "app-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WellnessResourcesComponent_div_28_Template_app_card_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.openTool("stress"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "circle", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Stress Audit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Identify stress sources and build resilience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WellnessResourcesComponent {
    constructor(resourceService) {
        this.resourceService = resourceService;
        this.user = { firstName: 'John' };
        this.resources = [];
        this.filteredResources = [];
        this.academyCourses = [];
        this.searchQuery = '';
        this.selectedCategory = '';
        this.selectedFormat = '';
        this.activeResourceTab = 'library';
        this.categories = [
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MENTAL_HEALTH, label: 'Mental Health' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].STRESS_MANAGEMENT, label: 'Stress Management' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].ACADEMIC_SUCCESS, label: 'Academic Success' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].RELATIONSHIPS, label: 'Relationships' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].SLEEP_WELLNESS, label: 'Sleep Wellness' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MINDFULNESS, label: 'Mindfulness' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].CRISIS_SUPPORT, label: 'Crisis Support' },
            { value: _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].CAREER_GUIDANCE, label: 'Career Guidance' }
        ];
        this.formats = [
            { value: 'article', label: 'Article' },
            { value: 'video', label: 'Video' },
            { value: 'podcast', label: 'Podcast' },
            { value: 'tool', label: 'Tool' },
            { value: 'worksheet', label: 'Worksheet' }
        ];
        this.resourceTabs = [
            { id: 'library', label: 'Resource Library' },
            { id: 'academy', label: 'Wellness Academy' },
            { id: 'tools', label: 'Self-Help Tools' }
        ];
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book', active: true }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.resources = this.resourceService.getResources();
        this.academyCourses = this.resourceService.getAcademyCourses();
        this.filteredResources = [...this.resources];
    }
    setActiveResourceTab(tabId) {
        this.activeResourceTab = tabId;
    }
    filterResources() {
        this.filteredResources = this.resources.filter(r => {
            const matchesSearch = !this.searchQuery ||
                r.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                r.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                r.tags.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));
            const matchesCategory = !this.selectedCategory || r.category === this.selectedCategory;
            const matchesFormat = !this.selectedFormat || r.format === this.selectedFormat;
            return matchesSearch && matchesCategory && matchesFormat;
        });
    }
    getCategoryIcon(category) {
        const icons = {
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MENTAL_HEALTH]: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].STRESS_MANAGEMENT]: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].ACADEMIC_SUCCESS]: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].RELATIONSHIPS]: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].SLEEP_WELLNESS]: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MINDFULNESS]: '<circle cx="12" cy="12" r="3"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].CRISIS_SUPPORT]: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].CAREER_GUIDANCE]: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>'
        };
        return icons[category] || icons[_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MENTAL_HEALTH];
    }
    getCategoryColor(category) {
        const colors = {
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MENTAL_HEALTH]: 'primary-100',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].STRESS_MANAGEMENT]: 'warning-light',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].ACADEMIC_SUCCESS]: 'secondary-100',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].RELATIONSHIPS]: 'accent-100',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].SLEEP_WELLNESS]: 'primary-100',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].MINDFULNESS]: 'accent-100',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].CRISIS_SUPPORT]: 'error-light',
            [_core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["ResourceCategory"].CAREER_GUIDANCE]: 'secondary-100'
        };
        return colors[category] || 'primary-100';
    }
    getFormatVariant(format) {
        const variants = {
            'article': 'secondary',
            'video': 'primary',
            'podcast': 'accent',
            'tool': 'warning',
            'worksheet': 'success'
        };
        return variants[format] || 'secondary';
    }
    openResource(resource) {
        console.log('Open resource:', resource.id);
    }
    openCourse(course) {
        console.log('Open course:', course.id);
    }
    openTool(toolId) {
        console.log('Open tool:', toolId);
    }
}
WellnessResourcesComponent.ɵfac = function WellnessResourcesComponent_Factory(t) { return new (t || WellnessResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_wellness_resource_service__WEBPACK_IMPORTED_MODULE_2__["WellnessResourceService"])); };
WellnessResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WellnessResourcesComponent, selectors: [["app-wellness-resources"]], decls: 30, vars: 13, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "resource-toolbar"], [1, "search-box"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search resources...", 1, "search-input", 3, "ngModel", "ngModelChange", "input"], [1, "filter-group"], [1, "filter-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["role", "tablist", 1, "tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "resource-grid", 4, "ngIf"], ["class", "academy-section", 4, "ngIf"], ["class", "tools-section", 4, "ngIf"], [3, "items"], [3, "value"], ["role", "tab", 1, "tab-btn", 3, "click"], [1, "resource-grid"], ["variant", "interactive", "padding", "md", "class", "resource-card", 3, "click", 4, "ngFor", "ngForOf"], ["title", "No resources found", "description", "Try adjusting your search or filters", "icon", "search", 4, "ngIf"], ["variant", "interactive", "padding", "md", 1, "resource-card", 3, "click"], [1, "resource-header"], [1, "resource-icon", 3, "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], ["size", "sm", 3, "variant"], [1, "resource-title"], [1, "resource-description"], [1, "resource-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "resource-tags"], ["variant", "secondary", "size", "xs", 4, "ngFor", "ngForOf"], ["variant", "secondary", "size", "xs"], ["title", "No resources found", "description", "Try adjusting your search or filters", "icon", "search"], [1, "academy-section"], [1, "academy-header"], [1, "section-title"], [1, "text-gray-600"], [1, "grid", "grid-2"], ["variant", "elevated", "padding", "lg", "class", "course-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "lg", 1, "course-card"], [1, "course-header"], [1, "course-icon", 3, "ngClass"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], ["variant", "secondary", "size", "sm", 1, "ml-2"], [1, "mt-4"], [1, "text-gray-600", "text-sm", "mt-2"], [1, "course-meta", "mt-4"], ["class", "progress-bar mt-4", 4, "ngIf"], ["class", "text-xs text-gray-500 mt-1", 4, "ngIf"], ["variant", "primary", 1, "mt-4", "w-full", 3, "click"], [1, "progress-bar", "mt-4"], [1, "progress-fill"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "tools-section"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg", 1, "tool-card", 3, "click"], [1, "tool-icon", "bg-primary-100"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4a2 2 0 1 1 4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4z"], ["d", "M5 10h14"], ["d", "M5 14h14"], ["d", "M5 18h14"], [1, "tool-icon", "bg-accent-100"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "tool-icon", "bg-secondary-100"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "tool-icon", "bg-warning-light"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["d", "M8 21h8"], ["d", "M12 17v4"], ["d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"], ["d", "M12 6v6l4 2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"]], template: function WellnessResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wellness Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Articles, videos, podcasts, and self-help tools for your wellbeing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WellnessResourcesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchQuery = $event; })("input", function WellnessResourcesComponent_Template_input_input_14_listener() { return ctx.filterResources(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WellnessResourcesComponent_Template_select_ngModelChange_16_listener($event) { return ctx.selectedCategory = $event; })("change", function WellnessResourcesComponent_Template_select_change_16_listener() { return ctx.filterResources(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "All Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WellnessResourcesComponent_option_19_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WellnessResourcesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.selectedFormat = $event; })("change", function WellnessResourcesComponent_Template_select_change_20_listener() { return ctx.filterResources(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All Formats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WellnessResourcesComponent_option_23_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WellnessResourcesComponent_button_25_Template, 2, 3, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WellnessResourcesComponent_div_26_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WellnessResourcesComponent_div_27_Template, 8, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WellnessResourcesComponent_div_28_Template, 71, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-bottom-nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resourceTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeResourceTab === "library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeResourceTab === "academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeResourceTab === "tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__["BottomNavComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__["BadgeComponent"], _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__["EmptyStateComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .resource-toolbar[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; }\n    .search-box[_ngcontent-%COMP%] { flex: 1; min-width: 200px; position: relative; }\n    .search-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { position: absolute; left: var(--space-3); top: 50%; transform: translateY(-50%); color: var(--color-gray-400); }\n    .search-input[_ngcontent-%COMP%] { width: 100%; padding: var(--space-2) var(--space-3) var(--space-2) var(--space-10); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); }\n    .search-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .filter-group[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); }\n    .filter-select[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); background: white; }\n    .filter-select[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); }\n    .tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .resource-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 640px) { .resource-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .resource-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .resource-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; height: 100%; }\n    .resource-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-3); }\n    .resource-icon[_ngcontent-%COMP%] { width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }\n    .resource-title[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-2); line-height: 1.4; }\n    .resource-description[_ngcontent-%COMP%] { color: var(--color-gray-600); font-size: var(--font-size-sm); margin: 0 0 var(--space-3); flex: 1; }\n    .resource-meta[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); }\n    .resource-tags[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-top: var(--space-3); }\n    .academy-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .course-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .course-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; }\n    .course-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }\n    .ml-2[_ngcontent-%COMP%] { margin-left: var(--space-2); }\n    .course-meta[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .progress-bar[_ngcontent-%COMP%] { height: 6px; background: var(--color-gray-200); border-radius: var(--radius-full); overflow: hidden; }\n    .progress-fill[_ngcontent-%COMP%] { height: 100%; background: var(--color-primary); border-radius: var(--radius-full); transition: width var(--transition-normal); }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .tools-section[_ngcontent-%COMP%] { }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); }\n    .grid-2[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    .grid-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-2[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 640px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .tool-card[_ngcontent-%COMP%] { text-align: center; cursor: pointer; }\n    .tool-icon[_ngcontent-%COMP%] { width: 56px; height: 56px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); }\n    .tool-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }\n    .tool-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: var(--font-size-sm); margin: 0; }\n    .text-xs[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .mt-1[_ngcontent-%COMP%] { margin-top: var(--space-1); }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-3[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mt-6[_ngcontent-%COMP%] { margin-top: var(--space-6); }\n    .mt-8[_ngcontent-%COMP%] { margin-top: var(--space-8); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WellnessResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wellness-resources',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Wellness Resources</h1>
            <p class="page-description">Articles, videos, podcasts, and self-help tools for your wellbeing</p>
          </div>

          <div class="resource-toolbar">
            <div class="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" [(ngModel)]="searchQuery" placeholder="Search resources..." class="search-input" (input)="filterResources()">
            </div>
            <div class="filter-group">
              <select [(ngModel)]="selectedCategory" (change)="filterResources()" class="filter-select">
                <option value="">All Categories</option>
                <option *ngFor="let cat of categories" [value]="cat.value">{{ cat.label }}</option>
              </select>
              <select [(ngModel)]="selectedFormat" (change)="filterResources()" class="filter-select">
                <option value="">All Formats</option>
                <option *ngFor="let fmt of formats" [value]="fmt.value">{{ fmt.label }}</option>
              </select>
            </div>
          </div>

          <div class="tabs" role="tablist">
            <button *ngFor="let tab of resourceTabs" role="tab" [class.active]="activeResourceTab === tab.id" (click)="setActiveResourceTab(tab.id)" class="tab-btn">
              {{ tab.label }}
            </button>
          </div>

          <div *ngIf="activeResourceTab === 'library'" class="resource-grid">
            <app-card *ngFor="let resource of filteredResources" variant="interactive" padding="md" class="resource-card" (click)="openResource(resource)">
              <div class="resource-header">
                <div class="resource-icon" [ngClass]="'bg-' + getCategoryColor(resource.category)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="getCategoryIcon(resource.category)"></svg>
                </div>
                <app-badge [variant]="getFormatVariant(resource.format)" size="sm">{{ resource.format }}</app-badge>
              </div>
              <h4 class="resource-title">{{ resource.title }}</h4>
              <p class="resource-description">{{ resource.description }}</p>
              <div class="resource-meta">
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {{ resource.duration }}
                </span>
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  {{ resource.views.toLocaleString() }} views
                </span>
              </div>
              <div class="resource-tags">
                <app-badge *ngFor="let tag of resource.tags.slice(0, 3)" variant="secondary" size="xs">{{ tag }}</app-badge>
              </div>
            </app-card>
            <app-empty-state *ngIf="filteredResources.length === 0" title="No resources found" description="Try adjusting your search or filters" icon="search"></app-empty-state>
          </div>

          <div *ngIf="activeResourceTab === 'academy'" class="academy-section">
            <div class="academy-header">
              <h3 class="section-title">Wellness Academy</h3>
              <p class="text-gray-600">Structured courses to build lasting wellbeing skills</p>
            </div>
            <div class="grid grid-2">
              <app-card *ngFor="let course of academyCourses" variant="elevated" padding="lg" class="course-card">
                <div class="course-header">
                  <div class="course-icon" [ngClass]="'bg-' + course.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="course.icon"></svg>
                  </div>
                  <div>
                    <app-badge [variant]="course.level" size="sm">{{ course.level }}</app-badge>
                    <app-badge variant="secondary" size="sm" class="ml-2">{{ course.duration }}</app-badge>
                  </div>
                </div>
                <h4 class="mt-4">{{ course.title }}</h4>
                <p class="text-gray-600 text-sm mt-2">{{ course.description }}</p>
                <div class="course-meta mt-4">
                  <span class="meta-item">{{ course.lessons }} lessons</span>
                  <span class="meta-item">{{ course.enrolled.toLocaleString() }} enrolled</span>
                </div>
                <div class="progress-bar mt-4" *ngIf="course.progress > 0">
                  <div class="progress-fill" [style.width.%]="course.progress"></div>
                </div>
                <p class="text-xs text-gray-500 mt-1" *ngIf="course.progress > 0">{{ course.progress }}% complete</p>
                <app-button variant="primary" class="mt-4 w-full" (click)="openCourse(course)">
                  {{ course.progress > 0 ? 'Continue Learning' : 'Start Course' }}
                </app-button>
              </app-card>
            </div>
          </div>

          <div *ngIf="activeResourceTab === 'tools'" class="tools-section">
            <h3 class="section-title">Self-Help Tools</h3>
            <div class="grid grid-3">
              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('thought-record')">
                <div class="tool-icon bg-primary-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4a2 2 0 1 1 4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4z"></path><path d="M5 10h14"></path><path d="M5 14h14"></path><path d="M5 18h14"></path></svg>
                </div>
                <h4>Thought Record</h4>
                <p class="text-gray-600">CBT-based tool to identify and reframe unhelpful thoughts</p>
              </app-card>

              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('gratitude')">
                <div class="tool-icon bg-accent-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <h4>Gratitude Journal</h4>
                <p class="text-gray-600">Daily gratitude practice with prompts and reminders</p>
              </app-card>

              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('values')">
                <div class="tool-icon bg-secondary-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <h4>Values Clarification</h4>
                <p class="text-gray-600">Discover what matters most to guide decisions</p>
              </app-card>

              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('coping')">
                <div class="tool-icon bg-warning-light">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                </div>
                <h4>Coping Plan Builder</h4>
                <p class="text-gray-600">Create personalized crisis and coping plans</p>
              </app-card>

              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('sleep')">
                <div class="tool-icon bg-primary-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                </div>
                <h4>Sleep Hygiene Checker</h4>
                <p class="text-gray-600">Assess and improve your sleep habits</p>
              </app-card>

              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('boundaries')">
                <div class="tool-icon bg-accent-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                </div>
                <h4>Boundary Setting</h4>
                <p class="text-gray-600">Practice saying no and setting healthy limits</p>
              </app-card>

              <app-card variant="interactive" padding="lg" class="tool-card" (click)="openTool('stress')">
                <div class="tool-icon bg-secondary-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h4>Stress Audit</h4>
                <p class="text-gray-600">Identify stress sources and build resilience</p>
              </app-card>
            </div>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .resource-toolbar { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; }
    .search-box { flex: 1; min-width: 200px; position: relative; }
    .search-box svg { position: absolute; left: var(--space-3); top: 50%; transform: translateY(-50%); color: var(--color-gray-400); }
    .search-input { width: 100%; padding: var(--space-2) var(--space-3) var(--space-2) var(--space-10); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); }
    .search-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .filter-group { display: flex; gap: var(--space-3); }
    .filter-select { padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); background: white; }
    .filter-select:focus { outline: none; border-color: var(--color-primary); }
    .tabs { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .resource-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 640px) { .resource-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .resource-grid { grid-template-columns: repeat(3, 1fr); } }
    .resource-card { display: flex; flex-direction: column; height: 100%; }
    .resource-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-3); }
    .resource-icon { width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .resource-title { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-2); line-height: 1.4; }
    .resource-description { color: var(--color-gray-600); font-size: var(--font-size-sm); margin: 0 0 var(--space-3); flex: 1; }
    .resource-meta { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); }
    .resource-tags { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-top: var(--space-3); }
    .academy-header { margin-bottom: var(--space-6); }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }
    .text-gray-600 { color: var(--color-gray-600); }
    .course-card { display: flex; flex-direction: column; }
    .course-header { display: flex; align-items: center; justify-content: space-between; }
    .course-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .ml-2 { margin-left: var(--space-2); }
    .course-meta { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .progress-bar { height: 6px; background: var(--color-gray-200); border-radius: var(--radius-full); overflow: hidden; }
    .progress-fill { height: 100%; background: var(--color-primary); border-radius: var(--radius-full); transition: width var(--transition-normal); }
    .w-full { width: 100%; }
    .tools-section { }
    .grid { display: grid; gap: var(--space-4); }
    .grid-2 { grid-template-columns: 1fr; }
    .grid-3 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
    .tool-card { text-align: center; cursor: pointer; }
    .tool-icon { width: 56px; height: 56px; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); }
    .tool-card h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }
    .tool-card p { font-size: var(--font-size-sm); margin: 0; }
    .text-xs { font-size: var(--font-size-xs); }
    .mt-1 { margin-top: var(--space-1); }
    .mt-2 { margin-top: var(--space-2); }
    .mt-3 { margin-top: var(--space-3); }
    .mt-4 { margin-top: var(--space-4); }
    .mt-6 { margin-top: var(--space-6); }
    .mt-8 { margin-top: var(--space-8); }
  `]
            }]
    }], function () { return [{ type: _core_services_wellness_resource_service__WEBPACK_IMPORTED_MODULE_2__["WellnessResourceService"] }]; }, null); })();


/***/ }),

/***/ "Rcaj":
/*!****************************************************************************************!*\
  !*** ./src/app/student/peer-counselor-directory/peer-counselor-directory.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PeerCounselorDirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorDirectoryComponent", function() { return PeerCounselorDirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/user.model */ "PQuL");
/* harmony import */ var _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/peer-counselor.service */ "vaJ0");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/empty-state/empty-state.component */ "86d1");












function PeerCounselorDirectoryComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", area_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r4);
} }
function PeerCounselorDirectoryComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campus_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", campus_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r5);
} }
function PeerCounselorDirectoryComponent_app_card_24_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Virtual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PeerCounselorDirectoryComponent_app_card_24_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "polygon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const counselor_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", counselor_r6.rating.toFixed(1), " ");
} }
function PeerCounselorDirectoryComponent_app_card_24_app_badge_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r12 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.formatSupportArea(area_r12));
} }
function PeerCounselorDirectoryComponent_app_card_24_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const counselor_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getNextAvailable(counselor_r6));
} }
function PeerCounselorDirectoryComponent_app_card_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PeerCounselorDirectoryComponent_app_card_24_span_9_Template, 6, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PeerCounselorDirectoryComponent_app_card_24_span_10_Template, 4, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PeerCounselorDirectoryComponent_app_card_24_app_badge_12_Template, 2, 1, "app-badge", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PeerCounselorDirectoryComponent_app_card_24_div_13_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorDirectoryComponent_app_card_24_Template_app_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const counselor_r6 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.viewProfile(counselor_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorDirectoryComponent_app_card_24_Template_app_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const counselor_r6 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.requestSession(counselor_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Request Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const counselor_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (counselor_r6.avatarUrl || "assets/images/avatars/default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", counselor_r6.firstName, " ", counselor_r6.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", counselor_r6.program, " \u00B7 Year ", counselor_r6.yearOfStudy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", counselor_r6.virtualSupportAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", counselor_r6.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", counselor_r6.supportAreas.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", counselor_r6.availability.length);
} }
function PeerCounselorDirectoryComponent_app_empty_state_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 44);
} }
class PeerCounselorDirectoryComponent {
    constructor(peerCounselorService) {
        this.peerCounselorService = peerCounselorService;
        this.user = { firstName: 'John' };
        this.counselors = [];
        this.filteredCounselors = [];
        this.searchQuery = '';
        this.selectedArea = '';
        this.selectedCampus = '';
        this.supportAreas = Object.values(_core_models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"]);
        this.campuses = ['Ruaraka', 'Town', 'Kitengela'];
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book' },
            { label: 'Peer Counselors', route: '/student/peer-counselors', icon: 'users', active: true }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.counselors = this.peerCounselorService.getCounselors();
        this.filteredCounselors = [...this.counselors];
    }
    filterCounselors() {
        this.filteredCounselors = this.counselors.filter(c => {
            var _a;
            const matchesSearch = !this.searchQuery ||
                c.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                c.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) || ((_a = c.studentId) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(this.searchQuery.toLowerCase()));
            const matchesArea = !this.selectedArea || c.supportAreas.includes(this.selectedArea);
            const matchesCampus = !this.selectedCampus || c.campus === this.selectedCampus.toLowerCase();
            return matchesSearch && matchesArea && matchesCampus;
        });
    }
    formatSupportArea(area) {
        return area.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    getNextAvailable(counselor) {
        if (!counselor.availability.length)
            return 'No availability set';
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const next = counselor.availability[0];
        return `Next: ${days[next.dayOfWeek]} ${next.startTime} - ${next.endTime} (${next.isVirtual ? 'Virtual' : 'In-person'})`;
    }
    viewProfile(counselor) {
        console.log('View profile:', counselor.id);
    }
    requestSession(counselor) {
        console.log('Request session with:', counselor.id);
    }
}
PeerCounselorDirectoryComponent.ɵfac = function PeerCounselorDirectoryComponent_Factory(t) { return new (t || PeerCounselorDirectoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__["PeerCounselorService"])); };
PeerCounselorDirectoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeerCounselorDirectoryComponent, selectors: [["app-peer-counselor-directory"]], decls: 27, vars: 11, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "toolbar"], [1, "search-box"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search counselors...", 1, "search-input", 3, "ngModel", "ngModelChange", "input"], [1, "filter-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "counselor-grid"], ["variant", "elevated", "padding", "md", "class", "counselor-card", 4, "ngFor", "ngForOf"], ["title", "No counselors found", "description", "Try adjusting your search or filters", "icon", "users", 4, "ngIf"], [3, "items"], [3, "value"], ["variant", "elevated", "padding", "md", 1, "counselor-card"], [1, "counselor-header"], [1, "avatar"], [1, "counselor-info"], [1, "text-sm", "text-gray-600"], [1, "counselor-meta"], ["class", "meta-badge", 4, "ngIf"], [1, "support-areas"], ["variant", "secondary", "size", "sm", 4, "ngFor", "ngForOf"], ["class", "availability-preview", 4, "ngIf"], [1, "counselor-actions", "mt-4"], ["variant", "outline", "size", "sm", 1, "w-full", 3, "click"], ["variant", "primary", "size", "sm", 1, "w-full", "mt-2", 3, "click"], [1, "meta-badge"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["d", "M8 21h8"], ["d", "M12 17v4"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], ["variant", "secondary", "size", "sm"], [1, "availability-preview"], [1, "text-xs", "text-gray-500"], ["title", "No counselors found", "description", "Try adjusting your search or filters", "icon", "users"]], template: function PeerCounselorDirectoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Peer Counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Connect with trained student peer counselors for supportive listening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeerCounselorDirectoryComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchQuery = $event; })("input", function PeerCounselorDirectoryComponent_Template_input_input_14_listener() { return ctx.filterCounselors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeerCounselorDirectoryComponent_Template_select_ngModelChange_15_listener($event) { return ctx.selectedArea = $event; })("change", function PeerCounselorDirectoryComponent_Template_select_change_15_listener() { return ctx.filterCounselors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "All Support Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PeerCounselorDirectoryComponent_option_18_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeerCounselorDirectoryComponent_Template_select_ngModelChange_19_listener($event) { return ctx.selectedCampus = $event; })("change", function PeerCounselorDirectoryComponent_Template_select_change_19_listener() { return ctx.filterCounselors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PeerCounselorDirectoryComponent_option_22_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PeerCounselorDirectoryComponent_app_card_24_Template, 19, 10, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PeerCounselorDirectoryComponent_app_empty_state_25_Template, 1, 0, "app-empty-state", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-bottom-nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedArea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportAreas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCampus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCounselors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredCounselors.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__["BottomNavComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_9__["BadgeComponent"], _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_10__["EmptyStateComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .toolbar[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; }\n    .search-box[_ngcontent-%COMP%] { flex: 1; min-width: 200px; position: relative; }\n    .search-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { position: absolute; left: var(--space-3); top: 50%; transform: translateY(-50%); color: var(--color-gray-400); }\n    .search-input[_ngcontent-%COMP%] { width: 100%; padding: var(--space-2) var(--space-3) var(--space-2) var(--space-10); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); }\n    .search-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .filter-select[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); background: white; min-width: 180px; }\n    .filter-select[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); }\n    .counselor-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 640px) { .counselor-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .counselor-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .counselor-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .counselor-header[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); margin-bottom: var(--space-3); }\n    .avatar[_ngcontent-%COMP%] { width: 56px; height: 56px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .counselor-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .counselor-meta[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); margin-bottom: var(--space-3); }\n    .meta-badge[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: var(--space-1); font-size: var(--font-size-xs); color: var(--color-gray-600); padding: var(--space-1) var(--space-2); background: var(--color-gray-100); border-radius: var(--radius-full); }\n    .support-areas[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-bottom: var(--space-3); }\n    .availability-preview[_ngcontent-%COMP%] { margin-bottom: var(--space-3); }\n    .counselor-actions[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); margin-top: auto; }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-xs[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .text-gray-500[_ngcontent-%COMP%] { color: var(--color-gray-500); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorDirectoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peer-counselor-directory',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Peer Counselors</h1>
            <p class="page-description">Connect with trained student peer counselors for supportive listening</p>
          </div>

          <div class="toolbar">
            <div class="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" [(ngModel)]="searchQuery" placeholder="Search counselors..." class="search-input" (input)="filterCounselors()">
            </div>
            <select [(ngModel)]="selectedArea" (change)="filterCounselors()" class="filter-select">
              <option value="">All Support Areas</option>
              <option *ngFor="let area of supportAreas" [value]="area">{{ area }}</option>
            </select>
            <select [(ngModel)]="selectedCampus" (change)="filterCounselors()" class="filter-select">
              <option value="">All Campuses</option>
              <option *ngFor="let campus of campuses" [value]="campus">{{ campus }}</option>
            </select>
          </div>

          <div class="counselor-grid">
            <app-card *ngFor="let counselor of filteredCounselors" variant="elevated" padding="md" class="counselor-card">
              <div class="counselor-header">
                <div class="avatar" [style.background-image]="'url(' + (counselor.avatarUrl || 'assets/images/avatars/default.svg') + ')'"></div>
                <div class="counselor-info">
                  <h4>{{ counselor.firstName }} {{ counselor.lastName }}</h4>
                  <p class="text-sm text-gray-600">{{ counselor.program }} · Year {{ counselor.yearOfStudy }}</p>
                </div>
              </div>
              <div class="counselor-meta">
                <span class="meta-badge" *ngIf="counselor.virtualSupportAvailable">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                  Virtual
                </span>
                <span class="meta-badge" *ngIf="counselor.rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  {{ counselor.rating.toFixed(1) }}
                </span>
              </div>
              <div class="support-areas">
                <app-badge *ngFor="let area of counselor.supportAreas.slice(0, 3)" variant="secondary" size="sm">{{ formatSupportArea(area) }}</app-badge>
              </div>
              <div class="availability-preview" *ngIf="counselor.availability.length">
                <span class="text-xs text-gray-500">{{ getNextAvailable(counselor) }}</span>
              </div>
              <div class="counselor-actions mt-4">
                <app-button variant="outline" size="sm" class="w-full" (click)="viewProfile(counselor)">View Profile</app-button>
                <app-button variant="primary" size="sm" class="w-full mt-2" (click)="requestSession(counselor)">Request Session</app-button>
              </div>
            </app-card>
            <app-empty-state *ngIf="filteredCounselors.length === 0" title="No counselors found" description="Try adjusting your search or filters" icon="users"></app-empty-state>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .toolbar { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; }
    .search-box { flex: 1; min-width: 200px; position: relative; }
    .search-box svg { position: absolute; left: var(--space-3); top: 50%; transform: translateY(-50%); color: var(--color-gray-400); }
    .search-input { width: 100%; padding: var(--space-2) var(--space-3) var(--space-2) var(--space-10); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); }
    .search-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .filter-select { padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); background: white; min-width: 180px; }
    .filter-select:focus { outline: none; border-color: var(--color-primary); }
    .counselor-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 640px) { .counselor-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .counselor-grid { grid-template-columns: repeat(3, 1fr); } }
    .counselor-card { display: flex; flex-direction: column; }
    .counselor-header { display: flex; gap: var(--space-3); margin-bottom: var(--space-3); }
    .avatar { width: 56px; height: 56px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .counselor-info h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .counselor-meta { display: flex; gap: var(--space-3); margin-bottom: var(--space-3); }
    .meta-badge { display: inline-flex; align-items: center; gap: var(--space-1); font-size: var(--font-size-xs); color: var(--color-gray-600); padding: var(--space-1) var(--space-2); background: var(--color-gray-100); border-radius: var(--radius-full); }
    .support-areas { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-bottom: var(--space-3); }
    .availability-preview { margin-bottom: var(--space-3); }
    .counselor-actions { display: flex; flex-direction: column; gap: var(--space-2); margin-top: auto; }
    .w-full { width: 100%; }
    .mt-2 { margin-top: var(--space-2); }
    .mt-4 { margin-top: var(--space-4); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-xs { font-size: var(--font-size-xs); }
    .text-gray-500 { color: var(--color-gray-500); }
    .text-gray-600 { color: var(--color-gray-600); }
  `]
            }]
    }], function () { return [{ type: _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__["PeerCounselorService"] }]; }, null); })();


/***/ }),

/***/ "Xk41":
/*!****************************************************************!*\
  !*** ./src/app/student/mood-checkin/mood-checkin.component.ts ***!
  \****************************************************************/
/*! exports provided: MoodCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodCheckinComponent", function() { return MoodCheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/wellness.model */ "EIi9");
/* harmony import */ var _core_services_mood_checkin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/mood-checkin.service */ "f8xI");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");












function MoodCheckinComponent_div_9_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodCheckinComponent_div_9_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const mood_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectMood(mood_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mood_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mood_r5.emoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mood_r5.label);
} }
function MoodCheckinComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How are you feeling right now?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tap an emoji to log your mood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MoodCheckinComponent_div_9_button_7_Template, 5, 4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.moodEmojis);
} }
function MoodCheckinComponent_div_10_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodCheckinComponent_div_10_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const factor_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.toggleFactor(factor_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const factor_r11 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r8.selectedFactors.includes(factor_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", factor_r11.label, " ");
} }
function MoodCheckinComponent_div_10_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r14);
} }
function MoodCheckinComponent_div_10_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r15);
} }
function MoodCheckinComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What's influencing your mood? (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MoodCheckinComponent_div_10_button_10_Template, 2, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Energy Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoodCheckinComponent_div_10_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.energyLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MoodCheckinComponent_div_10_span_17_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stress Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoodCheckinComponent_div_10_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.stressLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MoodCheckinComponent_div_10_span_24_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Notes (Private, Encrypted)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoodCheckinComponent_div_10_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodCheckinComponent_div_10_Template_app_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.resetMood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodCheckinComponent_div_10_Template_app_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.submitMood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Save Mood Entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedMood.emoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedMood.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.moodFactors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.energyLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.energyLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.stressLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.stressLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.submitting);
} }
function MoodCheckinComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mood Saved!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your entry has been recorded privately.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodCheckinComponent_div_11_Template_app_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.resetMood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log Another Mood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoodCheckinComponent_app_card_16__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 64);
} }
function MoodCheckinComponent_app_card_16__svg_path_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 65);
} }
function MoodCheckinComponent_app_card_16__svg_path_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 66);
} }
function MoodCheckinComponent_app_card_16__svg_path_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 67);
} }
function MoodCheckinComponent_app_card_16__svg_path_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 68);
} }
function MoodCheckinComponent_app_card_16__svg_circle_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 69);
} }
function MoodCheckinComponent_app_card_16__svg_line_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 70);
} }
function MoodCheckinComponent_app_card_16__svg_line_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 71);
} }
function MoodCheckinComponent_app_card_16_app_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodCheckinComponent_app_card_16_app_button_18_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const insight_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return insight_r24.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insight_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r24.actionLabel);
} }
function MoodCheckinComponent_app_card_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MoodCheckinComponent_app_card_16__svg_path_4_Template, 1, 0, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoodCheckinComponent_app_card_16__svg_path_5_Template, 1, 0, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MoodCheckinComponent_app_card_16__svg_path_6_Template, 1, 0, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MoodCheckinComponent_app_card_16__svg_path_7_Template, 1, 0, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MoodCheckinComponent_app_card_16__svg_path_8_Template, 1, 0, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MoodCheckinComponent_app_card_16__svg_circle_9_Template, 1, 0, "circle", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MoodCheckinComponent_app_card_16__svg_line_10_Template, 1, 0, "line", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MoodCheckinComponent_app_card_16__svg_line_11_Template, 1, 0, "line", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-badge", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MoodCheckinComponent_app_card_16_app_button_18_Template, 2, 1, "app-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insight_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + insight_r24.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.type === "trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", insight_r24.badgeVariant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r24.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r24.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r24.actionLabel);
} }
class MoodCheckinComponent {
    constructor(moodService) {
        this.moodService = moodService;
        this.user = { firstName: 'John' };
        this.moodEmojis = _core_models_wellness_model__WEBPACK_IMPORTED_MODULE_1__["MOOD_EMOJIS"];
        this.selectedMood = null;
        this.submitted = false;
        this.submitting = false;
        this.energyLevel = 3;
        this.stressLevel = 3;
        this.notes = '';
        this.selectedFactors = [];
        this.moodFactors = [
            { id: 'academic', label: 'Academic' },
            { id: 'social', label: 'Social' },
            { id: 'sleep', label: 'Sleep' },
            { id: 'health', label: 'Health' },
            { id: 'financial', label: 'Financial' },
            { id: 'family', label: 'Family' },
            { id: 'weather', label: 'Weather' },
            { id: 'other', label: 'Other' }
        ];
        this.energyLabels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];
        this.stressLabels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];
        this.insights = [
            { type: 'pattern', title: 'Weekly Pattern', description: 'Your mood tends to dip on Sundays. Consider planning relaxing activities.', iconColor: 'primary-100', badgeVariant: 'primary', actionLabel: 'View Details', action: () => { } },
            { type: 'trend', title: 'Improving Trend', description: 'Average mood improved 12% over the last 2 weeks. Keep it up!', iconColor: 'success-light', badgeVariant: 'success', actionLabel: 'View Chart', action: () => { } },
            { type: 'trigger', title: 'Common Triggers', description: 'Academic deadlines and poor sleep correlate with lower moods.', iconColor: 'warning-light', badgeVariant: 'warning', actionLabel: 'See Resources', action: () => { } }
        ];
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity', active: true },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book' }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity', active: true },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    ngOnInit() { }
    selectMood(mood) {
        this.selectedMood = mood;
    }
    toggleFactor(factorId) {
        const index = this.selectedFactors.indexOf(factorId);
        if (index > -1) {
            this.selectedFactors.splice(index, 1);
        }
        else {
            this.selectedFactors.push(factorId);
        }
    }
    submitMood() {
        this.submitting = true;
        const entry = {
            id: Date.now().toString(),
            userId: 'current-user',
            timestamp: new Date(),
            mood: this.selectedMood,
            factors: this.selectedFactors,
            energyLevel: this.energyLevel,
            stressLevel: this.stressLevel,
            notes: this.notes,
            isPrivate: true
        };
        this.moodService.saveMoodEntry(entry).subscribe({
            next: () => {
                this.submitted = true;
                this.submitting = false;
            },
            error: () => {
                this.submitting = false;
            }
        });
    }
    resetMood() {
        this.selectedMood = null;
        this.submitted = false;
        this.energyLevel = 3;
        this.stressLevel = 3;
        this.notes = '';
        this.selectedFactors = [];
    }
}
MoodCheckinComponent.ɵfac = function MoodCheckinComponent_Factory(t) { return new (t || MoodCheckinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_mood_checkin_service__WEBPACK_IMPORTED_MODULE_2__["MoodCheckinService"])); };
MoodCheckinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoodCheckinComponent, selectors: [["app-mood-checkin"]], decls: 18, vars: 8, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], ["class", "mood-selection", 4, "ngIf"], ["class", "mood-details animate-fade-in", 4, "ngIf"], ["class", "success-state text-center animate-fade-in", 4, "ngIf"], [1, "mt-10"], [1, "section-title"], [1, "grid", "grid-2"], ["variant", "elevated", "padding", "md", 4, "ngFor", "ngForOf"], [3, "items"], [1, "mood-selection"], [1, "text-center", "mb-8"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-600"], [1, "mood-grid"], ["type", "button", "class", "mood-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "mood-btn", 3, "click"], [1, "mood-emoji"], [1, "mood-label"], [1, "mood-details", "animate-fade-in"], [1, "selected-mood-display"], [1, "mood-emoji-large"], [1, "mt-3"], [1, "form-section", "mt-6"], [1, "form-label"], [1, "factor-chips"], ["type", "button", "class", "factor-chip", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "slider-container"], ["type", "range", "min", "1", "max", "5", 1, "slider", 3, "ngModel", "ngModelChange"], [1, "slider-labels"], [4, "ngFor", "ngForOf"], ["rows", "4", "placeholder", "What's on your mind? This is completely private...", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-actions", "mt-8"], ["variant", "outline", 3, "click"], ["variant", "primary", 3, "loading", "click"], ["type", "button", 1, "factor-chip", 3, "click"], [1, "success-state", "text-center", "animate-fade-in"], [1, "success-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["points", "20 6 9 17 4 12"], [1, "mt-4"], [1, "text-gray-600", "mt-2"], ["variant", "primary", 1, "mt-6", 3, "click"], ["variant", "outline", "routerLink", "/student/wellness-journey", 1, "mt-3", "ml-3"], ["variant", "elevated", "padding", "md"], [1, "insight-header"], [1, "insight-icon", 3, "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 3v18h18", 4, "ngIf"], ["d", "M19 9l-7 7-7-7", 4, "ngIf"], ["d", "M18 20V10", 4, "ngIf"], ["d", "M12 20V4", 4, "ngIf"], ["d", "M6 20v-6", 4, "ngIf"], ["cx", "12", "cy", "12", "r", "10", 4, "ngIf"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12", 4, "ngIf"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16", 4, "ngIf"], ["size", "sm", 3, "variant"], [1, "text-sm", "text-gray-600", "mt-1"], ["variant", "ghost", "size", "sm", "class", "mt-3", 3, "click", 4, "ngIf"], ["d", "M3 3v18h18"], ["d", "M19 9l-7 7-7-7"], ["d", "M18 20V10"], ["d", "M12 20V4"], ["d", "M6 20v-6"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["variant", "ghost", "size", "sm", 1, "mt-3", 3, "click"]], template: function MoodCheckinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mood Check-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Track your emotional wellbeing with private, encrypted entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MoodCheckinComponent_div_9_Template, 8, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MoodCheckinComponent_div_10_Template, 34, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MoodCheckinComponent_div_11_Template, 12, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recent Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MoodCheckinComponent_app_card_16_Template, 19, 14, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-bottom-nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedMood);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedMood && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.insights);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__["BottomNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_10__["BadgeComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mb-8[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-3[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mt-6[_ngcontent-%COMP%] { margin-top: var(--space-6); }\n    .mt-8[_ngcontent-%COMP%] { margin-top: var(--space-8); }\n    .mt-10[_ngcontent-%COMP%] { margin-top: var(--space-10); }\n    .ml-3[_ngcontent-%COMP%] { margin-left: var(--space-3); }\n    .text-xl[_ngcontent-%COMP%] { font-size: var(--font-size-xl); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .font-semibold[_ngcontent-%COMP%] { font-weight: var(--font-weight-semibold); }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }\n    .form-label[_ngcontent-%COMP%] { display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--space-2); color: var(--color-gray-700); }\n    .form-input[_ngcontent-%COMP%] { width: 100%; padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }\n    .form-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .form-section[_ngcontent-%COMP%] { }\n    .form-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); justify-content: flex-end; }\n    .mood-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); }\n    @media (max-width: 640px) { .mood-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .mood-btn[_ngcontent-%COMP%] { padding: var(--space-6) var(--space-4); border: 2px solid var(--color-gray-200); border-radius: var(--radius-xl); background: white; cursor: pointer; transition: all var(--transition-fast); display: flex; flex-direction: column; align-items: center; gap: var(--space-2); }\n    .mood-btn[_ngcontent-%COMP%]:hover { border-color: var(--color-primary); transform: translateY(-2px); box-shadow: var(--shadow-md); }\n    .mood-btn.selected[_ngcontent-%COMP%] { border-color: var(--color-primary); background: var(--color-primary-50); }\n    .mood-emoji[_ngcontent-%COMP%] { font-size: var(--font-size-4xl); }\n    .mood-emoji-large[_ngcontent-%COMP%] { font-size: 80px; }\n    .mood-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }\n    .factor-chips[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-2); }\n    .factor-chip[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-full); background: white; font-size: var(--font-size-sm); cursor: pointer; transition: all var(--transition-fast); }\n    .factor-chip[_ngcontent-%COMP%]:hover { border-color: var(--color-primary); }\n    .factor-chip.selected[_ngcontent-%COMP%] { border-color: var(--color-primary); background: var(--color-primary-100); color: var(--color-primary); }\n    .slider-container[_ngcontent-%COMP%] { }\n    .slider[_ngcontent-%COMP%] { width: 100%; height: 8px; border-radius: var(--radius-full); background: var(--color-gray-200); appearance: none; }\n    .slider[_ngcontent-%COMP%]::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; border-radius: 50%; background: var(--color-primary); cursor: pointer; }\n    .slider-labels[_ngcontent-%COMP%] { display: flex; justify-content: space-between; margin-top: var(--space-2); font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .selected-mood-display[_ngcontent-%COMP%] { text-align: center; padding: var(--space-6); }\n    .success-state[_ngcontent-%COMP%] { padding: var(--space-10); }\n    .success-icon[_ngcontent-%COMP%] { color: var(--color-success); margin-bottom: var(--space-4); }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); }\n    .grid-2[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-2[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .insight-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; }\n    .insight-icon[_ngcontent-%COMP%] { width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }\n    .bg-warning-light[_ngcontent-%COMP%] { background: var(--color-warning-light); color: var(--color-warning); }\n    .bg-accent-100[_ngcontent-%COMP%] { background: var(--color-accent-100); color: var(--color-accent); }\n    .animate-fade-in[_ngcontent-%COMP%] { animation: fadeIn var(--transition-normal); }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoodCheckinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mood-checkin',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Mood Check-in</h1>
            <p class="page-description">Track your emotional wellbeing with private, encrypted entries</p>
          </div>

          <div *ngIf="!selectedMood" class="mood-selection">
            <div class="text-center mb-8">
              <h2 class="text-xl font-semibold mb-2">How are you feeling right now?</h2>
              <p class="text-gray-600">Tap an emoji to log your mood</p>
            </div>

            <div class="mood-grid">
              <button 
                *ngFor="let mood of moodEmojis"
                type="button"
                class="mood-btn"
                [class.selected]="false"
                (click)="selectMood(mood)"
              >
                <span class="mood-emoji">{{ mood.emoji }}</span>
                <span class="mood-label">{{ mood.label }}</span>
              </button>
            </div>
          </div>

          <div *ngIf="selectedMood && !submitted" class="mood-details animate-fade-in">
            <div class="selected-mood-display">
              <span class="mood-emoji-large">{{ selectedMood.emoji }}</span>
              <h3 class="mt-3">{{ selectedMood.label }}</h3>
            </div>

            <div class="form-section mt-6">
              <label class="form-label">What's influencing your mood? (Optional)</label>
              <div class="factor-chips">
                <button 
                  type="button"
                  *ngFor="let factor of moodFactors"
                  class="factor-chip"
                  [class.selected]="selectedFactors.includes(factor.id)"
                  (click)="toggleFactor(factor.id)"
                >
                  {{ factor.label }}
                </button>
              </div>
            </div>

            <div class="form-section mt-6">
              <label class="form-label">Energy Level</label>
              <div class="slider-container">
                <input 
                  type="range" 
                  min="1" max="5" 
                  [(ngModel)]="energyLevel"
                  class="slider"
                >
                <div class="slider-labels">
                  <span *ngFor="let label of energyLabels">{{ label }}</span>
                </div>
              </div>
            </div>

            <div class="form-section mt-6">
              <label class="form-label">Stress Level</label>
              <div class="slider-container">
                <input 
                  type="range" 
                  min="1" max="5" 
                  [(ngModel)]="stressLevel"
                  class="slider"
                >
                <div class="slider-labels">
                  <span *ngFor="let label of stressLabels">{{ label }}</span>
                </div>
              </div>
            </div>

            <div class="form-section mt-6">
              <label class="form-label">Notes (Private, Encrypted)</label>
              <textarea 
                [(ngModel)]="notes"
                rows="4"
                class="form-input"
                placeholder="What's on your mind? This is completely private..."
              ></textarea>
            </div>

            <div class="form-actions mt-8">
              <app-button variant="outline" (click)="resetMood()">Back</app-button>
              <app-button variant="primary" (click)="submitMood()" [loading]="submitting">
                Save Mood Entry
              </app-button>
            </div>
          </div>

          <div *ngIf="submitted" class="success-state text-center animate-fade-in">
            <div class="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 class="mt-4">Mood Saved!</h3>
            <p class="text-gray-600 mt-2">Your entry has been recorded privately.</p>
            <app-button variant="primary" (click)="resetMood()" class="mt-6">Log Another Mood</app-button>
            <app-button variant="outline" routerLink="/student/wellness-journey" class="mt-3 ml-3">View Journey</app-button>
          </div>

          <div class="mt-10">
            <h3 class="section-title">Recent Insights</h3>
            <div class="grid grid-2">
              <app-card *ngFor="let insight of insights" variant="elevated" padding="md">
                <div class="insight-header">
                  <div class="insight-icon" [ngClass]="'bg-' + insight.iconColor">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path *ngIf="insight.type === 'pattern'" d="M3 3v18h18"></path><path *ngIf="insight.type === 'pattern'" d="M19 9l-7 7-7-7"></path>
                      <path *ngIf="insight.type === 'trend'" d="M18 20V10"></path><path *ngIf="insight.type === 'trend'" d="M12 20V4"></path><path *ngIf="insight.type === 'trend'" d="M6 20v-6"></path>
                      <circle *ngIf="insight.type === 'trigger'" cx="12" cy="12" r="10"></circle><line *ngIf="insight.type === 'trigger'" x1="12" y1="8" x2="12" y2="12"></line><line *ngIf="insight.type === 'trigger'" x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <app-badge [variant]="insight.badgeVariant" size="sm">{{ insight.type }}</app-badge>
                </div>
                <h4 class="mt-3">{{ insight.title }}</h4>
                <p class="text-sm text-gray-600 mt-1">{{ insight.description }}</p>
                <app-button *ngIf="insight.actionLabel" variant="ghost" size="sm" class="mt-3" (click)="insight.action()">{{ insight.actionLabel }}</app-button>
              </app-card>
            </div>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-8); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .text-center { text-align: center; }
    .mb-8 { margin-bottom: var(--space-8); }
    .mt-2 { margin-top: var(--space-2); }
    .mt-3 { margin-top: var(--space-3); }
    .mt-4 { margin-top: var(--space-4); }
    .mt-6 { margin-top: var(--space-6); }
    .mt-8 { margin-top: var(--space-8); }
    .mt-10 { margin-top: var(--space-10); }
    .ml-3 { margin-left: var(--space-3); }
    .text-xl { font-size: var(--font-size-xl); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-gray-600 { color: var(--color-gray-600); }
    .font-semibold { font-weight: var(--font-weight-semibold); }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }
    .form-label { display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--space-2); color: var(--color-gray-700); }
    .form-input { width: 100%; padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
    .form-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .form-section { }
    .form-actions { display: flex; gap: var(--space-4); justify-content: flex-end; }
    .mood-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); }
    @media (max-width: 640px) { .mood-grid { grid-template-columns: repeat(2, 1fr); } }
    .mood-btn { padding: var(--space-6) var(--space-4); border: 2px solid var(--color-gray-200); border-radius: var(--radius-xl); background: white; cursor: pointer; transition: all var(--transition-fast); display: flex; flex-direction: column; align-items: center; gap: var(--space-2); }
    .mood-btn:hover { border-color: var(--color-primary); transform: translateY(-2px); box-shadow: var(--shadow-md); }
    .mood-btn.selected { border-color: var(--color-primary); background: var(--color-primary-50); }
    .mood-emoji { font-size: var(--font-size-4xl); }
    .mood-emoji-large { font-size: 80px; }
    .mood-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }
    .factor-chips { display: flex; flex-wrap: wrap; gap: var(--space-2); }
    .factor-chip { padding: var(--space-2) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-full); background: white; font-size: var(--font-size-sm); cursor: pointer; transition: all var(--transition-fast); }
    .factor-chip:hover { border-color: var(--color-primary); }
    .factor-chip.selected { border-color: var(--color-primary); background: var(--color-primary-100); color: var(--color-primary); }
    .slider-container { }
    .slider { width: 100%; height: 8px; border-radius: var(--radius-full); background: var(--color-gray-200); appearance: none; }
    .slider::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; border-radius: 50%; background: var(--color-primary); cursor: pointer; }
    .slider-labels { display: flex; justify-content: space-between; margin-top: var(--space-2); font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .selected-mood-display { text-align: center; padding: var(--space-6); }
    .success-state { padding: var(--space-10); }
    .success-icon { color: var(--color-success); margin-bottom: var(--space-4); }
    .grid { display: grid; gap: var(--space-4); }
    .grid-2 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
    .insight-header { display: flex; align-items: center; justify-content: space-between; }
    .insight-icon { width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
    .bg-warning-light { background: var(--color-warning-light); color: var(--color-warning); }
    .bg-accent-100 { background: var(--color-accent-100); color: var(--color-accent); }
    .animate-fade-in { animation: fadeIn var(--transition-normal); }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `]
            }]
    }], function () { return [{ type: _core_services_mood_checkin_service__WEBPACK_IMPORTED_MODULE_2__["MoodCheckinService"] }]; }, null); })();


/***/ }),

/***/ "buJY":
/*!****************************************************************************************!*\
  !*** ./src/app/student/professional-counselling/professional-counselling.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalCounsellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalCounsellingComponent", function() { return ProfessionalCounsellingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/professional-counselling.service */ "TSJh");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/empty-state/empty-state.component */ "86d1");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ "ajRT");












function ProfessionalCounsellingComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campus_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", campus_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r8);
} }
function ProfessionalCounsellingComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", spec_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r9);
} }
function ProfessionalCounsellingComponent_app_card_23_app_badge_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r14);
} }
function ProfessionalCounsellingComponent_app_card_23_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Virtual sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfessionalCounsellingComponent_app_card_23_div_25_app_badge_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDCF9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfessionalCounsellingComponent_app_card_23_div_25_app_badge_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-badge", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfessionalCounsellingComponent_app_card_23_div_25_app_badge_4_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r15.getDayName(slot_r16.dayOfWeek), " ", slot_r16.startTime, "-", slot_r16.endTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slot_r16.isVirtual);
} }
function ProfessionalCounsellingComponent_app_card_23_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next available:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfessionalCounsellingComponent_app_card_23_div_25_app_badge_4_Template, 3, 4, "app-badge", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const counsellor_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", counsellor_r10.availability.slice(0, 3));
} }
function ProfessionalCounsellingComponent_app_card_23_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfessionalCounsellingComponent_app_card_23_app_badge_11_Template, 2, 1, "app-badge", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfessionalCounsellingComponent_app_card_23_div_18_Template, 7, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polyline", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfessionalCounsellingComponent_app_card_23_div_25_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_app_card_23_Template_app_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const counsellor_r10 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.viewProfile(counsellor_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_app_card_23_Template_app_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const counsellor_r10 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.openBookingModal(counsellor_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Book Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const counsellor_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (counsellor_r10.avatarUrl || "assets/images/avatars/professional-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", counsellor_r10.firstName, " ", counsellor_r10.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](counsellor_r10.professionalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", counsellor_r10.campusName, " Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", counsellor_r10.specialization.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", counsellor_r10.yearsExperience, " years exp.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", counsellor_r10.virtualSupportAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("KES ", counsellor_r10.sessionFee, "/session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", counsellor_r10.availability.length);
} }
function ProfessionalCounsellingComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-empty-state", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfessionalCounsellingComponent_div_28_app_card_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appt_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r23.notes);
} }
function ProfessionalCounsellingComponent_div_28_app_card_1_app_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_div_28_app_card_1_app_button_29_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const appt_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.joinVirtualSession(appt_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfessionalCounsellingComponent_div_28_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-badge", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "polyline", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfessionalCounsellingComponent_div_28_app_card_1_div_23_Template, 5, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_div_28_app_card_1_Template_app_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const appt_r23 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.rescheduleAppointment(appt_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_div_28_app_card_1_Template_app_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const appt_r23 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.cancelAppointment(appt_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfessionalCounsellingComponent_div_28_app_card_1_app_button_29_Template, 2, 0, "app-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appt_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (appt_r23.counsellorAvatar || "assets/images/avatars/professional-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r23.counsellorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r23.counsellorTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r22.getStatusVariant(appt_r23.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r23.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 12, appt_r23.date, "EEEE, MMM d, yyyy"), " at ", appt_r23.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r22.getLocationIcon(appt_r23.isVirtual), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r23.isVirtual ? "Virtual Session" : appt_r23.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r23.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r23.isVirtual && appt_r23.status === "confirmed");
} }
function ProfessionalCounsellingComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfessionalCounsellingComponent_div_28_app_card_1_Template, 30, 15, "app-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.upcomingAppointments);
} }
function ProfessionalCounsellingComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-empty-state", 71);
} }
function ProfessionalCounsellingComponent_app_modal_32_div_1_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", slot_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r35, " ");
} }
function ProfessionalCounsellingComponent_app_modal_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Session Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.bookingData.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Initial Consultation (60 min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Follow-up Session (45 min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Crisis Session (30 min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Preferred Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.bookingData.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Preferred Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.bookingData.time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select a date first");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfessionalCounsellingComponent_app_modal_32_div_1_option_21_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Session Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.bookingData.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Virtual (Video Call)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.bookingData.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "In-Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Notes (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_textarea_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.bookingData.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_app_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.closeBookingModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfessionalCounsellingComponent_app_modal_32_div_1_Template_app_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.confirmBooking(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Confirm Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.bookingData.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.bookingData.date)("min", ctx_r33.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.bookingData.time)("disabled", !ctx_r33.bookingData.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.getAvailableSlots(ctx_r33.selectedCounsellor, ctx_r33.bookingData.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.bookingData.mode)("disabled", !(ctx_r33.selectedCounsellor == null ? null : ctx_r33.selectedCounsellor.virtualSupportAvailable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.bookingData.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.bookingData.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fee: KES ", ctx_r33.selectedCounsellor.sessionFee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r33.bookingLoading);
} }
function ProfessionalCounsellingComponent_app_modal_32_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProfessionalCounsellingComponent_app_modal_32_Template_app_modal_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.closeBookingModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfessionalCounsellingComponent_app_modal_32_div_1_Template, 46, 12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r7.bookingModalOpen)("title", "Book Session with " + ((ctx_r7.selectedCounsellor == null ? null : ctx_r7.selectedCounsellor.firstName) + " " + (ctx_r7.selectedCounsellor == null ? null : ctx_r7.selectedCounsellor.lastName)))("size", "lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.selectedCounsellor);
} }
class ProfessionalCounsellingComponent {
    constructor(counsellingService) {
        this.counsellingService = counsellingService;
        this.user = { firstName: 'John' };
        this.counsellors = [];
        this.filteredCounsellors = [];
        this.upcomingAppointments = [];
        this.selectedCampus = '';
        this.selectedSpecialization = '';
        this.campuses = ['Ruaraka', 'Town', 'Kitengela'];
        this.specializations = [
            'Anxiety & Depression',
            'Academic Stress',
            'Trauma & PTSD',
            'Relationship Issues',
            'Career Counselling',
            'Substance Abuse',
            'Eating Disorders',
            'Grief & Loss',
            'Family Therapy',
            'LGBTQ+ Support'
        ];
        this.bookingModalOpen = false;
        this.selectedCounsellor = null;
        this.bookingData = {
            type: 'initial',
            date: '',
            time: '',
            mode: 'virtual',
            notes: ''
        };
        this.bookingLoading = false;
        this.today = new Date().toISOString().split('T')[0];
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book' },
            { label: 'Professional Counselling', route: '/student/professional-counselling', icon: 'user-check', active: true }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon' },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.counsellors = this.counsellingService.getCounsellors();
        this.filteredCounsellors = [...this.counsellors];
        this.upcomingAppointments = this.counsellingService.getUpcomingAppointments();
    }
    filterCounsellors() {
        this.filteredCounsellors = this.counsellors.filter(c => {
            const matchesCampus = !this.selectedCampus || c.campusName === this.selectedCampus;
            const matchesSpec = !this.selectedSpecialization || c.specialization.includes(this.selectedSpecialization);
            return matchesCampus && matchesSpec;
        });
    }
    getDayName(dayOfWeek) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[dayOfWeek];
    }
    getStatusVariant(status) {
        const variants = {
            'confirmed': 'success',
            'pending': 'warning',
            'cancelled': 'error',
            'completed': 'secondary'
        };
        return variants[status] || 'secondary';
    }
    viewProfile(counsellor) {
        console.log('View profile:', counsellor.id);
    }
    openBookingModal(counsellor) {
        this.selectedCounsellor = counsellor;
        this.bookingData = { type: 'initial', date: '', time: '', mode: 'virtual', notes: '' };
        this.bookingModalOpen = true;
    }
    closeBookingModal() {
        this.bookingModalOpen = false;
        this.selectedCounsellor = null;
    }
    getAvailableSlots(counsellor, date) {
        if (!date)
            return [];
        const day = new Date(date).getDay();
        return counsellor.availability
            .filter(s => s.dayOfWeek === day)
            .map(s => `${s.startTime} - ${s.endTime} (${s.isVirtual ? 'Virtual' : 'In-person'})`);
    }
    confirmBooking() {
        this.bookingLoading = true;
        setTimeout(() => {
            var _a;
            this.bookingLoading = false;
            this.closeBookingModal();
            console.log('Booking confirmed for:', (_a = this.selectedCounsellor) === null || _a === void 0 ? void 0 : _a.id);
        }, 1000);
    }
    rescheduleAppointment(appt) {
        console.log('Reschedule:', appt.id);
    }
    cancelAppointment(appt) {
        console.log('Cancel:', appt.id);
    }
    joinVirtualSession(appt) {
        console.log('Join virtual session:', appt.id);
    }
    getLocationIcon(isVirtual) {
        if (isVirtual) {
            return '<rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path>';
        }
        return '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0"></path><circle cx="12" cy="10" r="3"></circle>';
    }
}
ProfessionalCounsellingComponent.ɵfac = function ProfessionalCounsellingComponent_Factory(t) { return new (t || ProfessionalCounsellingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"])); };
ProfessionalCounsellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessionalCounsellingComponent, selectors: [["app-professional-counselling"]], decls: 33, vars: 13, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "alert", "alert-info", 2, "margin-bottom", "var(--space-6)"], [1, "toolbar"], [1, "filter-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "counsellor-grid"], ["variant", "elevated", "padding", "lg", "class", "counsellor-card", 4, "ngFor", "ngForOf"], ["class", "text-center py-12", 4, "ngIf"], [1, "mt-10"], [1, "section-title"], ["class", "appointment-list", 4, "ngIf", "ngIfElse"], ["emptyAppointments", ""], [3, "items"], [3, "isOpen", "title", "size", "close", 4, "ngIf"], [3, "value"], ["variant", "elevated", "padding", "lg", 1, "counsellor-card"], [1, "counsellor-header"], [1, "avatar"], [1, "counsellor-info"], [1, "text-sm", "text-gray-600"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "specializations"], ["variant", "secondary", "size", "sm", 4, "ngFor", "ngForOf"], [1, "counsellor-meta"], [1, "meta-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], ["class", "meta-item", 4, "ngIf"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["class", "availability-preview", 4, "ngIf"], [1, "counsellor-actions", "mt-6"], ["variant", "outline", "size", "sm", 1, "w-full", 3, "click"], ["variant", "primary", "size", "sm", 1, "w-full", "mt-2", 3, "click"], ["variant", "secondary", "size", "sm"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["d", "M8 21h8"], ["d", "M12 17v4"], [1, "availability-preview"], [1, "text-xs", "text-gray-500", "mb-2"], [1, "availability-slots"], ["variant", "secondary", "size", "xs", "class", "slot-badge", 4, "ngFor", "ngForOf"], ["variant", "secondary", "size", "xs", 1, "slot-badge"], ["class", "ml-1", 4, "ngIf"], [1, "ml-1"], [1, "text-center", "py-12"], ["title", "No counsellors found", "description", "Try adjusting your filters", "icon", "users"], [1, "appointment-list"], ["variant", "elevated", "padding", "md", "class", "appointment-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "appointment-card"], [1, "appointment-header"], [1, "appointment-counsellor"], [1, "avatar-sm"], ["size", "sm", 3, "variant"], [1, "appointment-details"], [1, "detail-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], ["class", "detail-item", 4, "ngIf"], [1, "appointment-actions", "mt-4"], ["variant", "outline", "size", "sm", 3, "click"], ["variant", "secondary", "size", "sm", 1, "ml-2", 3, "click"], ["variant", "primary", "size", "sm", "class", "ml-auto", 3, "click", 4, "ngIf"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["variant", "primary", "size", "sm", 1, "ml-auto", 3, "click"], ["title", "No upcoming appointments", "description", "Book a session with a professional counsellor to get started", "icon", "calendar"], [3, "isOpen", "title", "size", "close"], ["class", "booking-form", 4, "ngIf"], [1, "booking-form"], [1, "form-group"], [1, "form-label"], [1, "form-input", 3, "ngModel", "ngModelChange"], ["value", "initial"], ["value", "followup"], ["value", "crisis"], ["type", "date", 1, "form-input", 3, "ngModel", "min", "ngModelChange"], [1, "form-input", 3, "ngModel", "disabled", "ngModelChange"], [1, "radio-group"], [1, "radio-label"], ["type", "radio", "name", "mode", "value", "virtual", 3, "ngModel", "disabled", "ngModelChange"], ["type", "radio", "name", "mode", "value", "in-person", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "What would you like to discuss?", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "modal-actions"], ["variant", "outline", 3, "click"], ["variant", "primary", 3, "loading", "click"]], template: function ProfessionalCounsellingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Professional Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Book sessions with qualified guidance and counselling professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confidential & Professional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " All sessions are confidential. Counsellors are licensed professionals bound by ethical guidelines. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_Template_select_ngModelChange_14_listener($event) { return ctx.selectedCampus = $event; })("change", function ProfessionalCounsellingComponent_Template_select_change_14_listener() { return ctx.filterCounsellors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfessionalCounsellingComponent_option_17_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessionalCounsellingComponent_Template_select_ngModelChange_18_listener($event) { return ctx.selectedSpecialization = $event; })("change", function ProfessionalCounsellingComponent_Template_select_change_18_listener() { return ctx.filterCounsellors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All Specializations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfessionalCounsellingComponent_option_21_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfessionalCounsellingComponent_app_card_23_Template, 31, 11, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfessionalCounsellingComponent_div_24_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Your Upcoming Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfessionalCounsellingComponent_div_28_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfessionalCounsellingComponent_ng_template_29_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-bottom-nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfessionalCounsellingComponent_app_modal_32_Template, 2, 4, "app-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCampus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedSpecialization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specializations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCounsellors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredCounsellors.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.upcomingAppointments.length > 0)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookingModalOpen);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__["BottomNavComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__["BadgeComponent"], _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__["EmptyStateComponent"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .toolbar[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; }\n    .filter-select[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); background: white; min-width: 200px; }\n    .filter-select[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); }\n    .counsellor-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .counsellor-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .counsellor-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .counsellor-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .counsellor-header[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); }\n    .avatar[_ngcontent-%COMP%] { width: 72px; height: 72px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .avatar-sm[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .counsellor-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .specializations[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-bottom: var(--space-4); }\n    .counsellor-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-4); margin-bottom: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid var(--color-gray-100); }\n    .meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .availability-preview[_ngcontent-%COMP%] { margin-bottom: var(--space-4); }\n    .availability-slots[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-1); }\n    .slot-badge[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .ml-1[_ngcontent-%COMP%] { margin-left: var(--space-1); }\n    .counsellor-actions[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); margin-top: auto; }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mt-6[_ngcontent-%COMP%] { margin-top: var(--space-6); }\n    .mt-10[_ngcontent-%COMP%] { margin-top: var(--space-10); }\n    .ml-2[_ngcontent-%COMP%] { margin-left: var(--space-2); }\n    .ml-auto[_ngcontent-%COMP%] { margin-left: auto; }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }\n    .appointment-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .appointment-card[_ngcontent-%COMP%] { }\n    .appointment-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-4); }\n    .appointment-counsellor[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); }\n    .appointment-details[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4); }\n    .detail-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .appointment-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); }\n    .booking-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-1); }\n    .form-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }\n    .form-input[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }\n    .form-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .radio-group[_ngcontent-%COMP%] { display: flex; gap: var(--space-6); }\n    .radio-label[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); cursor: pointer; font-size: var(--font-size-sm); }\n    .radio-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + span[_ngcontent-%COMP%] { color: var(--color-gray-400); }\n    .modal-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-2); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-xs[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .text-gray-500[_ngcontent-%COMP%] { color: var(--color-gray-500); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .py-12[_ngcontent-%COMP%] { padding-top: var(--space-12); padding-bottom: var(--space-12); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessionalCounsellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-professional-counselling',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Professional Counselling</h1>
            <p class="page-description">Book sessions with qualified guidance and counselling professionals</p>
          </div>

          <div class="alert alert-info" style="margin-bottom: var(--space-6);">
            <strong>Confidential & Professional.</strong> All sessions are confidential. Counsellors are licensed professionals bound by ethical guidelines.
          </div>

          <div class="toolbar">
            <select [(ngModel)]="selectedCampus" (change)="filterCounsellors()" class="filter-select">
              <option value="">All Campuses</option>
              <option *ngFor="let campus of campuses" [value]="campus">{{ campus }}</option>
            </select>
            <select [(ngModel)]="selectedSpecialization" (change)="filterCounsellors()" class="filter-select">
              <option value="">All Specializations</option>
              <option *ngFor="let spec of specializations" [value]="spec">{{ spec }}</option>
            </select>
          </div>

          <div class="counsellor-grid">
            <app-card *ngFor="let counsellor of filteredCounsellors" variant="elevated" padding="lg" class="counsellor-card">
              <div class="counsellor-header">
                <div class="avatar" [style.background-image]="'url(' + (counsellor.avatarUrl || 'assets/images/avatars/professional-default.svg') + ')'"></div>
                <div class="counsellor-info">
                  <h3>{{ counsellor.firstName }} {{ counsellor.lastName }}</h3>
                  <p class="text-sm text-gray-600">{{ counsellor.professionalTitle }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ counsellor.campusName }} Campus</p>
                </div>
              </div>

              <div class="specializations">
                <app-badge *ngFor="let spec of counsellor.specialization.slice(0, 4)" variant="secondary" size="sm">{{ spec }}</app-badge>
              </div>

              <div class="counsellor-meta">
                <div class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  <span>{{ counsellor.yearsExperience }} years exp.</span>
                </div>
                <div class="meta-item" *ngIf="counsellor.virtualSupportAvailable">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
                  <span>Virtual sessions</span>
                </div>
                <div class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>KES {{ counsellor.sessionFee }}/session</span>
                </div>
              </div>

              <div class="availability-preview" *ngIf="counsellor.availability.length">
                <p class="text-xs text-gray-500 mb-2">Next available:</p>
                <div class="availability-slots">
                  <app-badge *ngFor="let slot of counsellor.availability.slice(0, 3)" variant="secondary" size="xs" class="slot-badge">
                    {{ getDayName(slot.dayOfWeek) }} {{ slot.startTime }}-{{ slot.endTime }}
                    <span *ngIf="slot.isVirtual" class="ml-1">📹</span>
                  </app-badge>
                </div>
              </div>

              <div class="counsellor-actions mt-6">
                <app-button variant="outline" size="sm" class="w-full" (click)="viewProfile(counsellor)">View Profile</app-button>
                <app-button variant="primary" size="sm" class="w-full mt-2" (click)="openBookingModal(counsellor)">Book Session</app-button>
              </div>
            </app-card>
            <div *ngIf="filteredCounsellors.length === 0" class="text-center py-12">
              <app-empty-state title="No counsellors found" description="Try adjusting your filters" icon="users"></app-empty-state>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="section-title">Your Upcoming Appointments</h3>
            <div class="appointment-list" *ngIf="upcomingAppointments.length > 0; else emptyAppointments">
              <app-card *ngFor="let appt of upcomingAppointments" variant="elevated" padding="md" class="appointment-card">
                <div class="appointment-header">
                  <div class="appointment-counsellor">
                    <div class="avatar-sm" [style.background-image]="'url(' + (appt.counsellorAvatar || 'assets/images/avatars/professional-default.svg') + ')'"></div>
                    <div>
                      <h4>{{ appt.counsellorName }}</h4>
                      <p class="text-sm text-gray-600">{{ appt.counsellorTitle }}</p>
                    </div>
                  </div>
                  <app-badge [variant]="getStatusVariant(appt.status)" size="sm">{{ appt.status }}</app-badge>
                </div>
                <div class="appointment-details">
                  <div class="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{{ appt.date | date:'EEEE, MMM d, yyyy' }} at {{ appt.time }}</span>
                  </div>
                  <div class="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="getLocationIcon(appt.isVirtual)"></svg>
                    <span>{{ appt.isVirtual ? 'Virtual Session' : appt.location }}</span>
                  </div>
                  <div class="detail-item" *ngIf="appt.notes">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
                    <span>{{ appt.notes }}</span>
                  </div>
                </div>
                <div class="appointment-actions mt-4">
                  <app-button variant="outline" size="sm" (click)="rescheduleAppointment(appt)">Reschedule</app-button>
                  <app-button variant="secondary" size="sm" (click)="cancelAppointment(appt)" class="ml-2">Cancel</app-button>
                  <app-button *ngIf="appt.isVirtual && appt.status === 'confirmed'" variant="primary" size="sm" class="ml-auto" (click)="joinVirtualSession(appt)">Join Session</app-button>
                </div>
              </app-card>
            </div>
            <ng-template #emptyAppointments>
              <app-empty-state title="No upcoming appointments" description="Book a session with a professional counsellor to get started" icon="calendar"></app-empty-state>
            </ng-template>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>

      <app-modal 
        *ngIf="bookingModalOpen"
        [isOpen]="bookingModalOpen"
        [title]="'Book Session with ' + (selectedCounsellor?.firstName + ' ' + selectedCounsellor?.lastName)"
        [size]="'lg'"
        (close)="closeBookingModal()"
      >
        <div *ngIf="selectedCounsellor" class="booking-form">
          <div class="form-group">
            <label class="form-label">Session Type</label>
            <select [(ngModel)]="bookingData.type" class="form-input">
              <option value="initial">Initial Consultation (60 min)</option>
              <option value="followup">Follow-up Session (45 min)</option>
              <option value="crisis">Crisis Session (30 min)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Preferred Date</label>
            <input type="date" [(ngModel)]="bookingData.date" class="form-input" [min]="today">
          </div>
          <div class="form-group">
            <label class="form-label">Preferred Time</label>
            <select [(ngModel)]="bookingData.time" class="form-input" [disabled]="!bookingData.date">
              <option value="">Select a date first</option>
              <option *ngFor="let slot of getAvailableSlots(selectedCounsellor, bookingData.date)" [value]="slot">
                {{ slot }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Session Mode</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="mode" [(ngModel)]="bookingData.mode" value="virtual" [disabled]="!selectedCounsellor?.virtualSupportAvailable">
                <span>Virtual (Video Call)</span>
              </label>
              <label class="radio-label">
                <input type="radio" name="mode" [(ngModel)]="bookingData.mode" value="in-person">
                <span>In-Person</span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <textarea [(ngModel)]="bookingData.notes" rows="3" class="form-input" placeholder="What would you like to discuss?"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Fee: KES {{ selectedCounsellor.sessionFee }}</label>
          </div>
          <div class="modal-actions">
            <app-button variant="outline" (click)="closeBookingModal()">Cancel</app-button>
            <app-button variant="primary" (click)="confirmBooking()" [loading]="bookingLoading">Confirm Booking</app-button>
          </div>
        </div>
      </app-modal>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .toolbar { display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; }
    .filter-select { padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-sm); background: white; min-width: 200px; }
    .filter-select:focus { outline: none; border-color: var(--color-primary); }
    .counsellor-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 768px) { .counsellor-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .counsellor-grid { grid-template-columns: repeat(3, 1fr); } }
    .counsellor-card { display: flex; flex-direction: column; }
    .counsellor-header { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); }
    .avatar { width: 72px; height: 72px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .avatar-sm { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .counsellor-info h3 { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .specializations { display: flex; flex-wrap: wrap; gap: var(--space-1); margin-bottom: var(--space-4); }
    .counsellor-meta { display: flex; flex-wrap: wrap; gap: var(--space-4); margin-bottom: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid var(--color-gray-100); }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .availability-preview { margin-bottom: var(--space-4); }
    .availability-slots { display: flex; flex-wrap: wrap; gap: var(--space-1); }
    .slot-badge { font-size: var(--font-size-xs); }
    .ml-1 { margin-left: var(--space-1); }
    .counsellor-actions { display: flex; flex-direction: column; gap: var(--space-2); margin-top: auto; }
    .w-full { width: 100%; }
    .mt-2 { margin-top: var(--space-2); }
    .mt-4 { margin-top: var(--space-4); }
    .mt-6 { margin-top: var(--space-6); }
    .mt-10 { margin-top: var(--space-10); }
    .ml-2 { margin-left: var(--space-2); }
    .ml-auto { margin-left: auto; }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }
    .appointment-list { display: flex; flex-direction: column; gap: var(--space-4); }
    .appointment-card { }
    .appointment-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-4); }
    .appointment-counsellor { display: flex; gap: var(--space-3); }
    .appointment-details { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4); }
    .detail-item { display: flex; align-items: center; gap: var(--space-2); font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .appointment-actions { display: flex; align-items: center; gap: var(--space-2); }
    .booking-form { display: flex; flex-direction: column; gap: var(--space-4); }
    .form-group { display: flex; flex-direction: column; gap: var(--space-1); }
    .form-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }
    .form-input { padding: var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
    .form-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .radio-group { display: flex; gap: var(--space-6); }
    .radio-label { display: flex; align-items: center; gap: var(--space-2); cursor: pointer; font-size: var(--font-size-sm); }
    .radio-label input:disabled + span { color: var(--color-gray-400); }
    .modal-actions { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-2); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-xs { font-size: var(--font-size-xs); }
    .text-gray-500 { color: var(--color-gray-500); }
    .text-gray-600 { color: var(--color-gray-600); }
    .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
    .text-center { text-align: center; }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
  `]
            }]
    }], function () { return [{ type: _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"] }]; }, null); })();


/***/ }),

/***/ "ejW6":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-dashboard.component */ "+F+A");
/* harmony import */ var _quick_help_quick_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick-help/quick-help.component */ "3dIr");
/* harmony import */ var _mood_checkin_mood_checkin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mood-checkin/mood-checkin.component */ "Xk41");
/* harmony import */ var _quiet_space_quiet_space_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiet-space/quiet-space.component */ "sQsT");
/* harmony import */ var _wellness_resources_wellness_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wellness-resources/wellness-resources.component */ "Qizq");
/* harmony import */ var _peer_counselor_directory_peer_counselor_directory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./peer-counselor-directory/peer-counselor-directory.component */ "Rcaj");
/* harmony import */ var _wellness_journey_wellness_journey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wellness-journey/wellness-journey.component */ "4P0Y");
/* harmony import */ var _professional_counselling_professional_counselling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./professional-counselling/professional-counselling.component */ "buJY");














class StudentModule {
}
StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentModule });
StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentModule_Factory(t) { return new (t || StudentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["StudentDashboardComponent"] },
                { path: 'dashboard', component: _student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["StudentDashboardComponent"] },
                { path: 'quick-help', component: _quick_help_quick_help_component__WEBPACK_IMPORTED_MODULE_5__["QuickHelpComponent"] },
                { path: 'mood-checkin', component: _mood_checkin_mood_checkin_component__WEBPACK_IMPORTED_MODULE_6__["MoodCheckinComponent"] },
                { path: 'quiet-space', component: _quiet_space_quiet_space_component__WEBPACK_IMPORTED_MODULE_7__["QuietSpaceComponent"] },
                { path: 'wellness-resources', component: _wellness_resources_wellness_resources_component__WEBPACK_IMPORTED_MODULE_8__["WellnessResourcesComponent"] },
                { path: 'peer-counselors', component: _peer_counselor_directory_peer_counselor_directory_component__WEBPACK_IMPORTED_MODULE_9__["PeerCounselorDirectoryComponent"] },
                { path: 'wellness-journey', component: _wellness_journey_wellness_journey_component__WEBPACK_IMPORTED_MODULE_10__["WellnessJourneyComponent"] },
                { path: 'professional-counselling', component: _professional_counselling_professional_counselling_component__WEBPACK_IMPORTED_MODULE_11__["ProfessionalCounsellingComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentModule, { declarations: [_student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["StudentDashboardComponent"],
        _quick_help_quick_help_component__WEBPACK_IMPORTED_MODULE_5__["QuickHelpComponent"],
        _mood_checkin_mood_checkin_component__WEBPACK_IMPORTED_MODULE_6__["MoodCheckinComponent"],
        _quiet_space_quiet_space_component__WEBPACK_IMPORTED_MODULE_7__["QuietSpaceComponent"],
        _wellness_resources_wellness_resources_component__WEBPACK_IMPORTED_MODULE_8__["WellnessResourcesComponent"],
        _peer_counselor_directory_peer_counselor_directory_component__WEBPACK_IMPORTED_MODULE_9__["PeerCounselorDirectoryComponent"],
        _wellness_journey_wellness_journey_component__WEBPACK_IMPORTED_MODULE_10__["WellnessJourneyComponent"],
        _professional_counselling_professional_counselling_component__WEBPACK_IMPORTED_MODULE_11__["ProfessionalCounsellingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["StudentDashboardComponent"],
                    _quick_help_quick_help_component__WEBPACK_IMPORTED_MODULE_5__["QuickHelpComponent"],
                    _mood_checkin_mood_checkin_component__WEBPACK_IMPORTED_MODULE_6__["MoodCheckinComponent"],
                    _quiet_space_quiet_space_component__WEBPACK_IMPORTED_MODULE_7__["QuietSpaceComponent"],
                    _wellness_resources_wellness_resources_component__WEBPACK_IMPORTED_MODULE_8__["WellnessResourcesComponent"],
                    _peer_counselor_directory_peer_counselor_directory_component__WEBPACK_IMPORTED_MODULE_9__["PeerCounselorDirectoryComponent"],
                    _wellness_journey_wellness_journey_component__WEBPACK_IMPORTED_MODULE_10__["WellnessJourneyComponent"],
                    _professional_counselling_professional_counselling_component__WEBPACK_IMPORTED_MODULE_11__["ProfessionalCounsellingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["StudentDashboardComponent"] },
                        { path: 'dashboard', component: _student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["StudentDashboardComponent"] },
                        { path: 'quick-help', component: _quick_help_quick_help_component__WEBPACK_IMPORTED_MODULE_5__["QuickHelpComponent"] },
                        { path: 'mood-checkin', component: _mood_checkin_mood_checkin_component__WEBPACK_IMPORTED_MODULE_6__["MoodCheckinComponent"] },
                        { path: 'quiet-space', component: _quiet_space_quiet_space_component__WEBPACK_IMPORTED_MODULE_7__["QuietSpaceComponent"] },
                        { path: 'wellness-resources', component: _wellness_resources_wellness_resources_component__WEBPACK_IMPORTED_MODULE_8__["WellnessResourcesComponent"] },
                        { path: 'peer-counselors', component: _peer_counselor_directory_peer_counselor_directory_component__WEBPACK_IMPORTED_MODULE_9__["PeerCounselorDirectoryComponent"] },
                        { path: 'wellness-journey', component: _wellness_journey_wellness_journey_component__WEBPACK_IMPORTED_MODULE_10__["WellnessJourneyComponent"] },
                        { path: 'professional-counselling', component: _professional_counselling_professional_counselling_component__WEBPACK_IMPORTED_MODULE_11__["ProfessionalCounsellingComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "f8xI":
/*!*******************************************************!*\
  !*** ./src/app/core/services/mood-checkin.service.ts ***!
  \*******************************************************/
/*! exports provided: MoodCheckinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodCheckinService", function() { return MoodCheckinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_wellness_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/wellness.model */ "EIi9");




class MoodCheckinService {
    constructor() {
        this.storageKey = 'kca_mood_entries';
    }
    saveMoodEntry(entry) {
        const entries = this.getStoredEntries();
        entries.unshift(entry);
        this.saveEntries(entries);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(entry);
    }
    getMoodEntries(userId = 'current-user') {
        const entries = this.getStoredEntries().filter(e => e.userId === userId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(entries);
    }
    getMoodEntriesForPeriod(userId, days) {
        const entries = this.getStoredEntries().filter(e => e.userId === userId);
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        const filtered = entries.filter(e => new Date(e.timestamp) >= cutoff);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(filtered);
    }
    getMoodEmojis() {
        return _models_wellness_model__WEBPACK_IMPORTED_MODULE_2__["MOOD_EMOJIS"];
    }
    getMoodEmojiById(id) {
        return _models_wellness_model__WEBPACK_IMPORTED_MODULE_2__["MOOD_EMOJIS"].find(e => e.id === id);
    }
    getAverageMood(userId, days = 7) {
        const entries = this.getStoredEntries()
            .filter(e => e.userId === userId)
            .slice(0, days);
        if (entries.length === 0)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(3);
        const sum = entries.reduce((acc, e) => acc + e.mood.value, 0);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(sum / entries.length);
    }
    getMoodTrend(userId, days = 14) {
        const entries = this.getStoredEntries()
            .filter(e => e.userId === userId)
            .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
            .slice(-days);
        const trend = entries.map(e => ({
            date: new Date(e.timestamp).toISOString().split('T')[0],
            value: e.mood.value
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(trend);
    }
    getMoodDistribution(userId) {
        const entries = this.getStoredEntries().filter(e => e.userId === userId);
        const distribution = {};
        entries.forEach(e => {
            distribution[e.mood.id] = (distribution[e.mood.id] || 0) + 1;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(distribution);
    }
    getStoredEntries() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        }
        catch (_a) {
            return [];
        }
    }
    saveEntries(entries) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(entries));
        }
        catch (e) {
            console.warn('Failed to save mood entries to localStorage', e);
        }
    }
}
MoodCheckinService.ɵfac = function MoodCheckinService_Factory(t) { return new (t || MoodCheckinService)(); };
MoodCheckinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoodCheckinService, factory: MoodCheckinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoodCheckinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sQsT":
/*!**************************************************************!*\
  !*** ./src/app/student/quiet-space/quiet-space.component.ts ***!
  \**************************************************************/
/*! exports provided: QuietSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuietSpaceComponent", function() { return QuietSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_quiet_space_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/quiet-space.service */ "Bv6x");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function QuietSpaceComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const tab_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setActiveTab(tab_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === tab_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", tab_r5.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r5.label);
} }
function QuietSpaceComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_12_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.toggleBreathing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_12_div_1_Template_app_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.prevExercise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_12_div_1_Template_app_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleBreathing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_12_div_1_Template_app_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.nextExercise(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("breathe-in", ctx_r8.breathPhase === "inhale")("breathe-out", ctx_r8.breathPhase === "exhale")("hold", ctx_r8.breathPhase === "hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getPhaseLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.breathCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r8.isBreathing ? "secondary" : "primary")("icon", ctx_r8.isBreathing ? "pause" : "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.isBreathing ? "Pause" : "Start", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.currentExercise.description);
} }
function QuietSpaceComponent_div_12_app_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_12_app_card_3_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const exercise_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.selectExercise(exercise_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exercise_r15 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r9.currentExercise == null ? null : ctx_r9.currentExercise.id) === exercise_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + exercise_r15.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", exercise_r15.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exercise_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", exercise_r15.inhale, "s in \u00B7 ", exercise_r15.hold, "s hold \u00B7 ", exercise_r15.exhale, "s out \u00B7 ", exercise_r15.cycles, " cycles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", exercise_r15.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exercise_r15.difficulty);
} }
function QuietSpaceComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuietSpaceComponent_div_12_div_1_Template, 16, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuietSpaceComponent_div_12_app_card_3_Template, 9, 11, "app-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentExercise);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.breathingExercises);
} }
function QuietSpaceComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_13_div_1_Template_app_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.prevSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_13_div_1_Template_app_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.toggleSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_13_div_1_Template_app_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.nextSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuietSpaceComponent_div_13_div_1_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.soundVolume = $event; })("input", function QuietSpaceComponent_div_13_div_1_Template_input_input_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.updateVolume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("playing", ctx_r18.isSoundPlaying);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.currentSound.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.currentSound.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r18.isSoundPlaying ? "pause" : "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.isSoundPlaying ? "Pause" : "Play", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.soundVolume);
} }
function QuietSpaceComponent_div_13_app_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_13_app_card_3_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const sound_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.selectSound(sound_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sound_r26 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r19.currentSound == null ? null : ctx_r19.currentSound.id) === sound_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + sound_r26.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", sound_r26.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sound_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", sound_r26.category, " \u00B7 ", sound_r26.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", sound_r26.category.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sound_r26.category);
} }
function QuietSpaceComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuietSpaceComponent_div_13_div_1_Template, 25, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuietSpaceComponent_div_13_app_card_3_Template, 9, 9, "app-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentSound);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ambientSounds);
} }
function QuietSpaceComponent_div_14_div_1_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r32.duration, " seconds ");
} }
function QuietSpaceComponent_div_14_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuietSpaceComponent_div_14_div_1_div_12_div_8_Template, 5, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r33 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r32.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r32.instruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r32.duration);
} }
function QuietSpaceComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuietSpaceComponent_div_14_div_1_div_12_Template, 9, 4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_14_div_1_Template_app_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.startGrounding(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + ctx_r29.currentGrounding.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r29.currentGrounding.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.currentGrounding.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r29.currentGrounding.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.currentGrounding.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.currentGrounding.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.currentGrounding.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r29.isGrounding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.isGrounding ? "In Progress..." : "Start Exercise", " ");
} }
function QuietSpaceComponent_div_14_app_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_14_app_card_3_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const technique_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.selectGrounding(technique_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technique_r38 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r30.currentGrounding == null ? null : ctx_r30.currentGrounding.id) === technique_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + technique_r38.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", technique_r38.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technique_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", technique_r38.steps.length, " steps \u00B7 ", ctx_r30.getTotalDuration(technique_r38), "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", technique_r38.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technique_r38.difficulty);
} }
function QuietSpaceComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuietSpaceComponent_div_14_div_1_Template, 15, 9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuietSpaceComponent_div_14_app_card_3_Template, 9, 9, "app-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentGrounding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.groundingTechniques);
} }
function QuietSpaceComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quick Relief Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_15_Template_app_card_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.openRelief("panic"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Panic Attack Aid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Guided 5-4-3-2-1 grounding for acute anxiety");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-badge", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Emergency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_15_Template_app_card_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.openRelief("overwhelm"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "line", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "line", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Overwhelm Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Box breathing + cognitive reset for racing thoughts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-badge", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_15_Template_app_card_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.openRelief("sleep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sleep Wind-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Progressive relaxation + ambient sounds for sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-badge", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "10 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuietSpaceComponent_div_15_Template_app_card_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.openRelief("focus"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "line", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Focus Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Brief mindfulness to regain concentration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-badge", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "3 min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuietSpaceComponent {
    constructor(quietSpaceService) {
        this.quietSpaceService = quietSpaceService;
        this.user = { firstName: 'John' };
        this.tabs = [
            { id: 'breathing', label: 'Breathing', icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>' },
            { id: 'sounds', label: 'Sounds', icon: '<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>' },
            { id: 'grounding', label: 'Grounding', icon: '<circle cx="12" cy="12" r="3"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path>' },
            { id: 'quick-relief', label: 'Quick Relief', icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>' }
        ];
        this.activeTab = 'breathing';
        this.breathingExercises = [];
        this.currentExercise = null;
        this.isBreathing = false;
        this.breathPhase = 'inhale';
        this.breathCount = 0;
        this.ambientSounds = [];
        this.currentSound = null;
        this.isSoundPlaying = false;
        this.soundVolume = 50;
        this.groundingTechniques = [];
        this.currentGrounding = null;
        this.isGrounding = false;
        this.navItems = [
            { label: 'Dashboard', route: '/student/dashboard', icon: 'dashboard' },
            { label: 'Quick Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood Check-in', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet Space', route: '/student/quiet-space', icon: 'moon', active: true },
            { label: 'Resources', route: '/student/wellness-resources', icon: 'book' }
        ];
        this.bottomNavItems = [
            { label: 'Home', route: '/student/dashboard', icon: 'home' },
            { label: 'Help', route: '/student/quick-help', icon: 'help' },
            { label: 'Mood', route: '/student/mood-checkin', icon: 'activity' },
            { label: 'Quiet', route: '/student/quiet-space', icon: 'moon', active: true },
            { label: 'Profile', route: '/student/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.breathingExercises = this.quietSpaceService.getBreathingExercises();
        this.ambientSounds = this.quietSpaceService.getAmbientSounds();
        this.groundingTechniques = this.quietSpaceService.getGroundingTechniques();
        this.selectExercise(this.breathingExercises[0]);
        this.selectSound(this.ambientSounds[0]);
        this.selectGrounding(this.groundingTechniques[0]);
    }
    ngOnDestroy() {
        this.stopBreathing();
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
        this.stopBreathing();
        this.stopSound();
    }
    selectExercise(exercise) {
        this.currentExercise = exercise;
        this.resetBreathing();
    }
    toggleBreathing() {
        if (this.isBreathing) {
            this.stopBreathing();
        }
        else {
            this.startBreathing();
        }
    }
    startBreathing() {
        this.isBreathing = true;
        this.runBreathCycle();
    }
    stopBreathing() {
        this.isBreathing = false;
        if (this.breathTimer) {
            clearTimeout(this.breathTimer);
            this.breathTimer = null;
        }
        this.resetBreathing();
    }
    resetBreathing() {
        var _a;
        this.breathPhase = 'inhale';
        this.breathCount = ((_a = this.currentExercise) === null || _a === void 0 ? void 0 : _a.cycles) || 0;
    }
    runBreathCycle() {
        if (!this.isBreathing || !this.currentExercise)
            return;
        const phases = [
            { phase: 'inhale', duration: this.currentExercise.inhale * 1000 },
            { phase: 'hold', duration: this.currentExercise.hold * 1000 },
            { phase: 'exhale', duration: this.currentExercise.exhale * 1000 }
        ];
        const runPhase = (index) => {
            if (!this.isBreathing)
                return;
            if (index >= phases.length) {
                this.breathCount--;
                if (this.breathCount <= 0) {
                    this.stopBreathing();
                    return;
                }
                runPhase(0);
                return;
            }
            this.breathPhase = phases[index].phase;
            this.breathTimer = setTimeout(() => runPhase(index + 1), phases[index].duration);
        };
        runPhase(0);
    }
    prevExercise() {
        const idx = this.breathingExercises.findIndex(e => { var _a; return e.id === ((_a = this.currentExercise) === null || _a === void 0 ? void 0 : _a.id); });
        const prev = this.breathingExercises[(idx - 1 + this.breathingExercises.length) % this.breathingExercises.length];
        this.selectExercise(prev);
    }
    nextExercise() {
        const idx = this.breathingExercises.findIndex(e => { var _a; return e.id === ((_a = this.currentExercise) === null || _a === void 0 ? void 0 : _a.id); });
        const next = this.breathingExercises[(idx + 1) % this.breathingExercises.length];
        this.selectExercise(next);
    }
    getPhaseLabel() {
        switch (this.breathPhase) {
            case 'inhale': return 'Breathe In';
            case 'hold': return 'Hold';
            case 'exhale': return 'Breathe Out';
        }
    }
    selectSound(sound) {
        this.currentSound = sound;
        this.isSoundPlaying = false;
    }
    toggleSound() {
        this.isSoundPlaying = !this.isSoundPlaying;
    }
    stopSound() {
        this.isSoundPlaying = false;
    }
    prevSound() {
        const idx = this.ambientSounds.findIndex(s => { var _a; return s.id === ((_a = this.currentSound) === null || _a === void 0 ? void 0 : _a.id); });
        const prev = this.ambientSounds[(idx - 1 + this.ambientSounds.length) % this.ambientSounds.length];
        this.selectSound(prev);
    }
    nextSound() {
        const idx = this.ambientSounds.findIndex(s => { var _a; return s.id === ((_a = this.currentSound) === null || _a === void 0 ? void 0 : _a.id); });
        const next = this.ambientSounds[(idx + 1) % this.ambientSounds.length];
        this.selectSound(next);
    }
    updateVolume() { }
    selectGrounding(technique) {
        this.currentGrounding = technique;
    }
    startGrounding() {
        this.isGrounding = true;
        setTimeout(() => this.isGrounding = false, this.getTotalDuration(this.currentGrounding) * 1000);
    }
    getTotalDuration(technique) {
        return technique.steps.reduce((sum, step) => sum + (step.duration || 0), 0);
    }
    openRelief(type) {
        console.log('Open quick relief:', type);
    }
}
QuietSpaceComponent.ɵfac = function QuietSpaceComponent_Factory(t) { return new (t || QuietSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_quiet_space_service__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceService"])); };
QuietSpaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuietSpaceComponent, selectors: [["app-quiet-space"]], decls: 17, vars: 9, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], ["role", "tablist", 1, "tool-tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "breathing-section", 4, "ngIf"], ["class", "sounds-section", 4, "ngIf"], ["class", "grounding-section", 4, "ngIf"], ["class", "quick-relief-section", 4, "ngIf"], [3, "items"], ["role", "tab", 1, "tab-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], [1, "breathing-section"], ["class", "breathing-exercise", 4, "ngIf"], [1, "exercise-grid", "mt-8"], ["variant", "interactive", "padding", "md", "class", "exercise-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "breathing-exercise"], [1, "breathing-circle", 3, "click"], [1, "breath-text"], [1, "phase-label"], [1, "phase-count"], [1, "breathing-controls"], ["variant", "outline", "size", "sm", "icon", "chevron-left", 3, "click"], [3, "variant", "icon", "click"], ["variant", "outline", "size", "sm", "icon", "chevron-right", "iconRight", "", 3, "click"], [1, "exercise-description"], ["variant", "interactive", "padding", "md", 1, "exercise-card", 3, "click"], [1, "exercise-icon", 3, "ngClass"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], [1, "text-sm", "text-gray-600"], ["size", "sm", 1, "mt-2", 3, "variant"], [1, "sounds-section"], ["class", "sound-player", 4, "ngIf"], [1, "sounds-grid", "mt-8"], ["variant", "interactive", "padding", "md", "class", "sound-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "sound-player"], [1, "sound-wave"], [1, "wave-bar"], [1, "sound-info"], [1, "sound-controls"], ["variant", "outline", "size", "sm", "icon", "skip-back", 3, "click"], ["variant", "primary", "size", "lg", 3, "icon", "click"], ["variant", "outline", "size", "sm", "icon", "skip-forward", "iconRight", "", 3, "click"], ["type", "range", "min", "0", "max", "100", 1, "volume-slider", 3, "ngModel", "ngModelChange", "input"], [1, "volume-labels"], ["variant", "interactive", "padding", "md", 1, "sound-card", 3, "click"], [1, "sound-icon", 3, "ngClass"], [1, "grounding-section"], ["class", "grounding-exercise", 4, "ngIf"], [1, "grounding-grid", "mt-8"], ["variant", "interactive", "padding", "md", "class", "grounding-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "grounding-exercise"], [1, "grounding-header"], [1, "grounding-icon", 3, "ngClass"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], ["size", "sm", 3, "variant"], [1, "grounding-description"], [1, "grounding-steps"], ["class", "grounding-step", 4, "ngFor", "ngForOf"], ["variant", "primary", 1, "mt-6", 3, "loading", "click"], [1, "grounding-step"], [1, "step-number"], [1, "step-content"], ["class", "step-timer", 4, "ngIf"], [1, "step-timer"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["variant", "interactive", "padding", "md", 1, "grounding-card", 3, "click"], [1, "quick-relief-section"], [1, "section-title"], [1, "grid", "grid-2"], ["variant", "interactive", "padding", "lg", 1, "relief-card", 3, "click"], [1, "relief-icon", "bg-error-light"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-gray-600"], ["variant", "error", "size", "sm", 1, "mt-2"], [1, "relief-icon", "bg-warning-light"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["variant", "warning", "size", "sm", 1, "mt-2"], [1, "relief-icon", "bg-primary-100"], ["d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"], ["d", "M12 6v6l4 2"], ["variant", "primary", "size", "sm", 1, "mt-2"], [1, "relief-icon", "bg-secondary-100"], ["variant", "secondary", "size", "sm", 1, "mt-2"]], template: function QuietSpaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quiet Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Calming tools for grounding, breathing, and relaxation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuietSpaceComponent_button_10_Template, 4, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuietSpaceComponent_div_12_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuietSpaceComponent_div_13_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuietSpaceComponent_div_14_Template, 4, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuietSpaceComponent_div_15_Template, 51, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-bottom-nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "breathing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "sounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "grounding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "quick-relief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_4__["BottomNavComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__["BadgeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .tool-tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-2); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; white-space: nowrap; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .tab-content[_ngcontent-%COMP%] { animation: fadeIn var(--transition-normal); }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n    .breathing-exercise[_ngcontent-%COMP%] { text-align: center; max-width: 400px; margin: 0 auto var(--space-8); }\n    .breathing-circle[_ngcontent-%COMP%] { width: 200px; height: 200px; border-radius: 50%; margin: 0 auto var(--space-6); background: radial-gradient(circle at center, var(--color-primary-100) 0%, var(--color-primary-200) 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: transform 4s ease-in-out, box-shadow 4s ease-in-out; box-shadow: 0 0 0 0 var(--color-primary-200); }\n    .breathing-circle.breathe-in[_ngcontent-%COMP%] { transform: scale(1.3); box-shadow: 0 0 40px 20px var(--color-primary-200); }\n    .breathing-circle.breathe-out[_ngcontent-%COMP%] { transform: scale(0.8); box-shadow: 0 0 0 0 var(--color-primary-200); }\n    .breathing-circle.hold[_ngcontent-%COMP%] { box-shadow: 0 0 20px 10px var(--color-primary-200); }\n    .phase-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); text-transform: uppercase; letter-spacing: 0.1em; }\n    .phase-count[_ngcontent-%COMP%] { font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }\n    .breathing-controls[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; }\n    .exercise-description[_ngcontent-%COMP%] { text-align: center; color: var(--color-gray-600); margin-top: var(--space-4); }\n    .exercise-grid[_ngcontent-%COMP%], .sounds-grid[_ngcontent-%COMP%], .grounding-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 640px) { .exercise-grid[_ngcontent-%COMP%], .sounds-grid[_ngcontent-%COMP%], .grounding-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .exercise-grid[_ngcontent-%COMP%], .sounds-grid[_ngcontent-%COMP%], .grounding-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .exercise-card[_ngcontent-%COMP%], .sound-card[_ngcontent-%COMP%], .grounding-card[_ngcontent-%COMP%] { cursor: pointer; }\n    .exercise-icon[_ngcontent-%COMP%], .sound-icon[_ngcontent-%COMP%], .grounding-icon[_ngcontent-%COMP%], .relief-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-3); }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }\n    .bg-secondary-100[_ngcontent-%COMP%] { background: var(--color-secondary-100); color: var(--color-secondary); }\n    .bg-accent-100[_ngcontent-%COMP%] { background: var(--color-accent-100); color: var(--color-accent); }\n    .bg-warning-light[_ngcontent-%COMP%] { background: var(--color-warning-light); color: var(--color-warning); }\n    .bg-error-light[_ngcontent-%COMP%] { background: var(--color-error-light); color: var(--color-error); }\n    .sound-player[_ngcontent-%COMP%] { text-align: center; max-width: 400px; margin: 0 auto var(--space-8); }\n    .sound-wave[_ngcontent-%COMP%] { display: flex; gap: 4px; align-items: flex-end; height: 60px; justify-content: center; margin-bottom: var(--space-4); }\n    .wave-bar[_ngcontent-%COMP%] { width: 8px; background: var(--color-primary); border-radius: 4px; transition: height 0.1s ease; }\n    .wave-bar[_ngcontent-%COMP%]:nth-child(1) { height: 20%; animation: wave 1s ease-in-out infinite; }\n    .wave-bar[_ngcontent-%COMP%]:nth-child(2) { height: 40%; animation: wave 1s ease-in-out infinite 0.1s; }\n    .wave-bar[_ngcontent-%COMP%]:nth-child(3) { height: 60%; animation: wave 1s ease-in-out infinite 0.2s; }\n    .wave-bar[_ngcontent-%COMP%]:nth-child(4) { height: 80%; animation: wave 1s ease-in-out infinite 0.3s; }\n    .wave-bar[_ngcontent-%COMP%]:nth-child(5) { height: 50%; animation: wave 1s ease-in-out infinite 0.4s; }\n    .sound-wave.playing[_ngcontent-%COMP%]   .wave-bar[_ngcontent-%COMP%] { animation-play-state: running; }\n    .sound-wave[_ngcontent-%COMP%]   .wave-bar[_ngcontent-%COMP%] { animation-play-state: paused; }\n    @keyframes wave { 0%, 100% { height: 20%; } 50% { height: 80%; } }\n    .sound-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin-bottom: var(--space-1); }\n    .sound-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--color-gray-600); font-size: var(--font-size-sm); }\n    .sound-controls[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); justify-content: center; margin: var(--space-4) 0; }\n    .volume-slider[_ngcontent-%COMP%] { width: 100%; max-width: 300px; }\n    .volume-labels[_ngcontent-%COMP%] { display: flex; justify-content: space-between; max-width: 300px; margin: 0 auto; font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .grounding-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: var(--space-4); margin-bottom: var(--space-4); }\n    .grounding-description[_ngcontent-%COMP%] { color: var(--color-gray-600); margin-bottom: var(--space-6); }\n    .grounding-steps[_ngcontent-%COMP%] { text-align: left; }\n    .grounding-step[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid var(--color-gray-100); }\n    .grounding-step[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n    .step-number[_ngcontent-%COMP%] { width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); flex-shrink: 0; }\n    .step-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-1); }\n    .step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--color-gray-600); font-size: var(--font-size-sm); margin: 0; }\n    .step-timer[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); margin-top: var(--space-2); font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); }\n    .grid-2[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-2[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .relief-card[_ngcontent-%COMP%] { text-align: center; }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-3[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mt-6[_ngcontent-%COMP%] { margin-top: var(--space-6); }\n    .mt-8[_ngcontent-%COMP%] { margin-top: var(--space-8); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuietSpaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiet-space',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">Quiet Space</h1>
            <p class="page-description">Calming tools for grounding, breathing, and relaxation</p>
          </div>

          <div class="tool-tabs" role="tablist">
            <button 
              *ngFor="let tab of tabs"
              role="tab"
              [class.active]="activeTab === tab.id"
              (click)="setActiveTab(tab.id)"
              class="tab-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="tab.icon"></svg>
              <span>{{ tab.label }}</span>
            </button>
          </div>

          <div class="tab-content">
            <div *ngIf="activeTab === 'breathing'" class="breathing-section">
              <div class="breathing-exercise" *ngIf="currentExercise">
                <div class="breathing-circle" [class.breathe-in]="breathPhase === 'inhale'" [class.breathe-out]="breathPhase === 'exhale'" [class.hold]="breathPhase === 'hold'" (click)="toggleBreathing()">
                  <div class="breath-text">
                    <span class="phase-label">{{ getPhaseLabel() }}</span>
                    <span class="phase-count">{{ breathCount }}</span>
                  </div>
                </div>
                <div class="breathing-controls">
                  <app-button variant="outline" (click)="prevExercise()" size="sm" icon="chevron-left">Previous</app-button>
                  <app-button [variant]="isBreathing ? 'secondary' : 'primary'" (click)="toggleBreathing()" [icon]="isBreathing ? 'pause' : 'play'">
                    {{ isBreathing ? 'Pause' : 'Start' }}
                  </app-button>
                  <app-button variant="outline" (click)="nextExercise()" size="sm" icon="chevron-right" iconRight>Next</app-button>
                </div>
                <p class="exercise-description">{{ currentExercise.description }}</p>
              </div>

              <div class="exercise-grid mt-8">
                <app-card *ngFor="let exercise of breathingExercises" variant="interactive" padding="md" class="exercise-card" (click)="selectExercise(exercise)" [class.active]="currentExercise?.id === exercise.id">
                  <div class="exercise-icon" [ngClass]="'bg-' + exercise.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="exercise.icon"></svg>
                  </div>
                  <h4>{{ exercise.name }}</h4>
                  <p class="text-sm text-gray-600">{{ exercise.inhale }}s in · {{ exercise.hold }}s hold · {{ exercise.exhale }}s out · {{ exercise.cycles }} cycles</p>
                  <app-badge [variant]="exercise.difficulty" size="sm" class="mt-2">{{ exercise.difficulty }}</app-badge>
                </app-card>
              </div>
            </div>

            <div *ngIf="activeTab === 'sounds'" class="sounds-section">
              <div class="sound-player" *ngIf="currentSound">
                <div class="sound-wave" [class.playing]="isSoundPlaying">
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                  <div class="wave-bar"></div>
                </div>
                <div class="sound-info">
                  <h3>{{ currentSound.name }}</h3>
                  <p>{{ currentSound.description }}</p>
                </div>
                <div class="sound-controls">
                  <app-button variant="outline" size="sm" icon="skip-back" (click)="prevSound()">Previous</app-button>
                  <app-button variant="primary" size="lg" [icon]="isSoundPlaying ? 'pause' : 'play'" (click)="toggleSound()">
                    {{ isSoundPlaying ? 'Pause' : 'Play' }}
                  </app-button>
                  <app-button variant="outline" size="sm" icon="skip-forward" iconRight (click)="nextSound()">Next</app-button>
                </div>
                <input type="range" min="0" max="100" [(ngModel)]="soundVolume" class="volume-slider" (input)="updateVolume()">
                <div class="volume-labels">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              <div class="sounds-grid mt-8">
                <app-card *ngFor="let sound of ambientSounds" variant="interactive" padding="md" class="sound-card" (click)="selectSound(sound)" [class.active]="currentSound?.id === sound.id">
                  <div class="sound-icon" [ngClass]="'bg-' + sound.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="sound.icon"></svg>
                  </div>
                  <h4>{{ sound.name }}</h4>
                  <p class="text-sm text-gray-600">{{ sound.category }} · {{ sound.duration }}</p>
                  <app-badge [variant]="sound.category.toLowerCase()" size="sm" class="mt-2">{{ sound.category }}</app-badge>
                </app-card>
              </div>
            </div>

            <div *ngIf="activeTab === 'grounding'" class="grounding-section">
              <div class="grounding-exercise" *ngIf="currentGrounding">
                <div class="grounding-header">
                  <div class="grounding-icon" [ngClass]="'bg-' + currentGrounding.iconColor">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="currentGrounding.icon"></svg>
                  </div>
                  <div>
                    <h3>{{ currentGrounding.name }}</h3>
                    <app-badge [variant]="currentGrounding.difficulty" size="sm">{{ currentGrounding.difficulty }}</app-badge>
                  </div>
                </div>
                <p class="grounding-description">{{ currentGrounding.description }}</p>
                <div class="grounding-steps">
                  <div *ngFor="let step of currentGrounding.steps; let i = index" class="grounding-step">
                    <div class="step-number">{{ i + 1 }}</div>
                    <div class="step-content">
                      <h4>{{ step.title }}</h4>
                      <p>{{ step.instruction }}</p>
                      <div class="step-timer" *ngIf="step.duration">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {{ step.duration }} seconds
                      </div>
                    </div>
                  </div>
                </div>
                <app-button variant="primary" class="mt-6" (click)="startGrounding()" [loading]="isGrounding">
                  {{ isGrounding ? 'In Progress...' : 'Start Exercise' }}
                </app-button>
              </div>

              <div class="grounding-grid mt-8">
                <app-card *ngFor="let technique of groundingTechniques" variant="interactive" padding="md" class="grounding-card" (click)="selectGrounding(technique)" [class.active]="currentGrounding?.id === technique.id">
                  <div class="grounding-icon" [ngClass]="'bg-' + technique.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="technique.icon"></svg>
                  </div>
                  <h4>{{ technique.name }}</h4>
                  <p class="text-sm text-gray-600">{{ technique.steps.length }} steps · {{ getTotalDuration(technique) }}s</p>
                  <app-badge [variant]="technique.difficulty" size="sm" class="mt-2">{{ technique.difficulty }}</app-badge>
                </app-card>
              </div>
            </div>

            <div *ngIf="activeTab === 'quick-relief'" class="quick-relief-section">
              <h3 class="section-title">Quick Relief Tools</h3>
              <div class="grid grid-2">
                <app-card variant="interactive" padding="lg" class="relief-card" (click)="openRelief('panic')">
                  <div class="relief-icon bg-error-light">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  </div>
                  <h4>Panic Attack Aid</h4>
                  <p class="text-gray-600">Guided 5-4-3-2-1 grounding for acute anxiety</p>
                  <app-badge variant="error" size="sm" class="mt-2">Emergency</app-badge>
                </app-card>

                <app-card variant="interactive" padding="lg" class="relief-card" (click)="openRelief('overwhelm')">
                  <div class="relief-icon bg-warning-light">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <h4>Overwhelm Reset</h4>
                  <p class="text-gray-600">Box breathing + cognitive reset for racing thoughts</p>
                  <app-badge variant="warning" size="sm" class="mt-2">2 min</app-badge>
                </app-card>

                <app-card variant="interactive" padding="lg" class="relief-card" (click)="openRelief('sleep')">
                  <div class="relief-icon bg-primary-100">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                  </div>
                  <h4>Sleep Wind-down</h4>
                  <p class="text-gray-600">Progressive relaxation + ambient sounds for sleep</p>
                  <app-badge variant="primary" size="sm" class="mt-2">10 min</app-badge>
                </app-card>

                <app-card variant="interactive" padding="lg" class="relief-card" (click)="openRelief('focus')">
                  <div class="relief-icon bg-secondary-100">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  </div>
                  <h4>Focus Reset</h4>
                  <p class="text-gray-600">Brief mindfulness to regain concentration</p>
                  <app-badge variant="secondary" size="sm" class="mt-2">3 min</app-badge>
                </app-card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .tool-tabs { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-2); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; white-space: nowrap; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .tab-content { animation: fadeIn var(--transition-normal); }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .breathing-exercise { text-align: center; max-width: 400px; margin: 0 auto var(--space-8); }
    .breathing-circle { width: 200px; height: 200px; border-radius: 50%; margin: 0 auto var(--space-6); background: radial-gradient(circle at center, var(--color-primary-100) 0%, var(--color-primary-200) 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: transform 4s ease-in-out, box-shadow 4s ease-in-out; box-shadow: 0 0 0 0 var(--color-primary-200); }
    .breathing-circle.breathe-in { transform: scale(1.3); box-shadow: 0 0 40px 20px var(--color-primary-200); }
    .breathing-circle.breathe-out { transform: scale(0.8); box-shadow: 0 0 0 0 var(--color-primary-200); }
    .breathing-circle.hold { box-shadow: 0 0 20px 10px var(--color-primary-200); }
    .phase-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); text-transform: uppercase; letter-spacing: 0.1em; }
    .phase-count { font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }
    .breathing-controls { display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; }
    .exercise-description { text-align: center; color: var(--color-gray-600); margin-top: var(--space-4); }
    .exercise-grid, .sounds-grid, .grounding-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 640px) { .exercise-grid, .sounds-grid, .grounding-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .exercise-grid, .sounds-grid, .grounding-grid { grid-template-columns: repeat(3, 1fr); } }
    .exercise-card, .sound-card, .grounding-card { cursor: pointer; }
    .exercise-icon, .sound-icon, .grounding-icon, .relief-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-3); }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
    .bg-secondary-100 { background: var(--color-secondary-100); color: var(--color-secondary); }
    .bg-accent-100 { background: var(--color-accent-100); color: var(--color-accent); }
    .bg-warning-light { background: var(--color-warning-light); color: var(--color-warning); }
    .bg-error-light { background: var(--color-error-light); color: var(--color-error); }
    .sound-player { text-align: center; max-width: 400px; margin: 0 auto var(--space-8); }
    .sound-wave { display: flex; gap: 4px; align-items: flex-end; height: 60px; justify-content: center; margin-bottom: var(--space-4); }
    .wave-bar { width: 8px; background: var(--color-primary); border-radius: 4px; transition: height 0.1s ease; }
    .wave-bar:nth-child(1) { height: 20%; animation: wave 1s ease-in-out infinite; }
    .wave-bar:nth-child(2) { height: 40%; animation: wave 1s ease-in-out infinite 0.1s; }
    .wave-bar:nth-child(3) { height: 60%; animation: wave 1s ease-in-out infinite 0.2s; }
    .wave-bar:nth-child(4) { height: 80%; animation: wave 1s ease-in-out infinite 0.3s; }
    .wave-bar:nth-child(5) { height: 50%; animation: wave 1s ease-in-out infinite 0.4s; }
    .sound-wave.playing .wave-bar { animation-play-state: running; }
    .sound-wave .wave-bar { animation-play-state: paused; }
    @keyframes wave { 0%, 100% { height: 20%; } 50% { height: 80%; } }
    .sound-info h3 { margin-bottom: var(--space-1); }
    .sound-info p { color: var(--color-gray-600); font-size: var(--font-size-sm); }
    .sound-controls { display: flex; gap: var(--space-4); justify-content: center; margin: var(--space-4) 0; }
    .volume-slider { width: 100%; max-width: 300px; }
    .volume-labels { display: flex; justify-content: space-between; max-width: 300px; margin: 0 auto; font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .grounding-header { display: flex; align-items: flex-start; gap: var(--space-4); margin-bottom: var(--space-4); }
    .grounding-description { color: var(--color-gray-600); margin-bottom: var(--space-6); }
    .grounding-steps { text-align: left; }
    .grounding-step { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid var(--color-gray-100); }
    .grounding-step:last-child { border-bottom: none; }
    .step-number { width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); flex-shrink: 0; }
    .step-content h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-1); }
    .step-content p { color: var(--color-gray-600); font-size: var(--font-size-sm); margin: 0; }
    .step-timer { display: flex; align-items: center; gap: var(--space-1); margin-top: var(--space-2); font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }
    .grid { display: grid; gap: var(--space-4); }
    .grid-2 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
    .relief-card { text-align: center; }
    .mt-2 { margin-top: var(--space-2); }
    .mt-3 { margin-top: var(--space-3); }
    .mt-4 { margin-top: var(--space-4); }
    .mt-6 { margin-top: var(--space-6); }
    .mt-8 { margin-top: var(--space-8); }
  `]
            }]
    }], function () { return [{ type: _core_services_quiet_space_service__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceService"] }]; }, null); })();


/***/ }),

/***/ "z3i/":
/*!***********************************************************!*\
  !*** ./src/app/core/services/wellness-journey.service.ts ***!
  \***********************************************************/
/*! exports provided: WellnessJourneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessJourneyService", function() { return WellnessJourneyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "PQuL");



class WellnessJourneyService {
    constructor() {
        this.mockJourney = {
            moodCheckins: [
                { id: 'mc-1', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].GREAT, note: 'Finished exams early!', createdAt: new Date('2024-03-20T09:30:00') },
                { id: 'mc-2', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].GOOD, note: 'Good study session with friends', createdAt: new Date('2024-03-19T14:00:00') },
                { id: 'mc-3', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].OKAY, note: 'Tired but productive', createdAt: new Date('2024-03-18T18:30:00') },
                { id: 'mc-4', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].STRESSED, note: 'Upcoming deadline pressure', createdAt: new Date('2024-03-17T11:00:00') },
                { id: 'mc-5', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].GOOD, note: 'Exercise helped clear my mind', createdAt: new Date('2024-03-16T16:45:00') },
                { id: 'mc-6', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].LOW, note: 'Missing home', createdAt: new Date('2024-03-15T20:00:00') },
                { id: 'mc-7', mood: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].OKAY, note: 'Regular day', createdAt: new Date('2024-03-14T12:00:00') }
            ],
            quietSpaceSessions: [
                { id: 'qs-1', type: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceType"].BREATHING, duration: 5, completedAt: new Date('2024-03-20T08:00:00') },
                { id: 'qs-2', type: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceType"].GROUNDING, duration: 10, completedAt: new Date('2024-03-19T20:30:00') },
                { id: 'qs-3', type: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceType"].RELAXATION, duration: 15, completedAt: new Date('2024-03-18T22:00:00') },
                { id: 'qs-4', type: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceType"].BREATHING, duration: 3, completedAt: new Date('2024-03-17T12:00:00') },
                { id: 'qs-5', type: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["QuietSpaceType"].REFLECTION, duration: 12, completedAt: new Date('2024-03-16T09:00:00') }
            ],
            resourcesCompleted: [
                { resourceId: 'res-001', completedAt: new Date('2024-03-20'), timeSpent: 8 },
                { resourceId: 'res-005', completedAt: new Date('2024-03-18'), timeSpent: 10 },
                { resourceId: 'res-003', completedAt: new Date('2024-03-15'), timeSpent: 12 },
                { resourceId: 'res-006', completedAt: new Date('2024-03-12'), timeSpent: 15 }
            ],
            challengesCompleted: [
                { challengeId: 'ch-001', completedAt: new Date('2024-03-10') },
                { challengeId: 'ch-003', completedAt: new Date('2024-02-28') }
            ],
            supportConversations: 8,
            appointmentsAttended: 3,
            personalActivities: [
                { id: 'pa-1', type: 'exercise', description: 'Morning jog - 30 min', duration: 30, createdAt: new Date('2024-03-20T06:30:00') },
                { id: 'pa-2', type: 'social', description: 'Coffee with friends', duration: 60, createdAt: new Date('2024-03-19T15:00:00') },
                { id: 'pa-3', type: 'mindfulness', description: 'Evening meditation', duration: 15, createdAt: new Date('2024-03-18T21:00:00') }
            ]
        };
        this.availableChallenges = [
            {
                id: 'ch-001',
                title: '7-Day Mood Tracking',
                description: 'Log your mood every day for a week to build self-awareness',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                difficulty: 'beginner',
                duration: '7 days',
                progress: 100
            },
            {
                id: 'ch-002',
                title: 'Daily Breathing Practice',
                description: 'Complete a 5-minute breathing exercise every day for 14 days',
                icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                iconColor: 'accent-100',
                difficulty: 'beginner',
                duration: '14 days',
                progress: 40
            },
            {
                id: 'ch-003',
                title: 'Gratitude Journaling',
                description: 'Write 3 things you\'re grateful for each day for 21 days',
                icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                iconColor: 'warning-light',
                difficulty: 'intermediate',
                duration: '21 days',
                progress: 100
            },
            {
                id: 'ch-004',
                title: 'Digital Detox Challenge',
                description: 'Reduce screen time by 30% for 7 days',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'secondary-100',
                difficulty: 'intermediate',
                duration: '7 days',
                progress: 0
            },
            {
                id: 'ch-005',
                title: 'Sleep Schedule Reset',
                description: 'Wake up and sleep at the same time for 14 days',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                difficulty: 'advanced',
                duration: '14 days',
                progress: 25
            }
        ];
    }
    getJourney() {
        return Object.assign(Object.assign({}, this.mockJourney), { moodCheckins: [...this.mockJourney.moodCheckins].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()), quietSpaceSessions: [...this.mockJourney.quietSpaceSessions].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()), resourcesCompleted: [...this.mockJourney.resourcesCompleted].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()), challengesCompleted: [...this.mockJourney.challengesCompleted].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()), personalActivities: [...this.mockJourney.personalActivities].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) });
    }
    getAvailableChallenges() {
        return [...this.availableChallenges];
    }
    getChallengeById(id) {
        return this.availableChallenges.find(c => c.id === id);
    }
    getInsights(journey) {
        const insights = [];
        if (journey.moodCheckins.length >= 7) {
            const recentMoods = journey.moodCheckins.slice(0, 7);
            const moodValues = recentMoods.map(m => this.getMoodValue(m.mood));
            const avgMood = moodValues.reduce((a, b) => a + b, 0) / moodValues.length;
            const prevMoods = journey.moodCheckins.slice(7, 14);
            if (prevMoods.length > 0) {
                const prevValues = prevMoods.map(m => this.getMoodValue(m.mood));
                const prevAvg = prevValues.reduce((a, b) => a + b, 0) / prevValues.length;
                if (avgMood > prevAvg) {
                    insights.push({
                        type: 'trend',
                        title: 'Mood Improving',
                        description: 'Your average mood has improved over the past week compared to the week before.',
                        icon: '<path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path>',
                        iconColor: 'success-light',
                        actionLabel: 'View Chart',
                        action: () => { }
                    });
                }
            }
        }
        if (journey.quietSpaceSessions.length > 0) {
            const totalMinutes = journey.quietSpaceSessions.reduce((sum, s) => sum + s.duration, 0);
            insights.push({
                type: 'achievement',
                title: 'Mindfulness Practice',
                description: `You've completed ${journey.quietSpaceSessions.length} quiet space sessions totaling ${totalMinutes} minutes of calm.`,
                icon: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                iconColor: 'accent-100',
                actionLabel: 'Continue Practice',
                action: () => { }
            });
        }
        if (journey.resourcesCompleted.length >= 5) {
            insights.push({
                type: 'pattern',
                title: 'Active Learner',
                description: `You've completed ${journey.resourcesCompleted.length} wellness resources. Keep expanding your toolkit!`,
                icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line>',
                iconColor: 'secondary-100',
                actionLabel: 'Browse More',
                action: () => { }
            });
        }
        if (journey.challengesCompleted.length > 0) {
            insights.push({
                type: 'achievement',
                title: 'Challenge Completer',
                description: `You've completed ${journey.challengesCompleted.length} wellness challenge(s). Great commitment to growth!`,
                icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                iconColor: 'warning-light',
                actionLabel: 'View Challenges',
                action: () => { }
            });
        }
        const moodCounts = {};
        journey.moodCheckins.forEach(m => {
            moodCounts[m.mood] = (moodCounts[m.mood] || 0) + 1;
        });
        const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0];
        if (topMood) {
            insights.push({
                type: 'pattern',
                title: 'Most Common Mood',
                description: `Your most frequent mood recently has been "${topMood[0].replace('_', ' ')}" (${topMood[1]} times).`,
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'primary-100',
                actionLabel: 'Explore Patterns',
                action: () => { }
            });
        }
        return insights.slice(0, 4);
    }
    getMoodValue(mood) {
        const values = {
            [_models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].GREAT]: 5,
            [_models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].GOOD]: 4,
            [_models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].OKAY]: 3,
            [_models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].LOW]: 2,
            [_models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].STRESSED]: 1,
            [_models_user_model__WEBPACK_IMPORTED_MODULE_1__["MoodLevel"].VERY_LOW]: 0
        };
        return values[mood] || 3;
    }
    addMoodCheckin(checkin) {
        this.mockJourney.moodCheckins.unshift(checkin);
    }
    addQuietSpaceSession(session) {
        this.mockJourney.quietSpaceSessions.unshift(session);
    }
    addResourceCompletion(completion) {
        this.mockJourney.resourcesCompleted.unshift(completion);
    }
    addChallengeCompletion(completion) {
        this.mockJourney.challengesCompleted.unshift(completion);
    }
    incrementSupportConversations() {
        this.mockJourney.supportConversations++;
    }
    incrementAppointmentsAttended() {
        this.mockJourney.appointmentsAttended++;
    }
    addPersonalActivity(activity) {
        this.mockJourney.personalActivities.unshift(activity);
    }
}
WellnessJourneyService.ɵfac = function WellnessJourneyService_Factory(t) { return new (t || WellnessJourneyService)(); };
WellnessJourneyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WellnessJourneyService, factory: WellnessJourneyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WellnessJourneyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=student-student-module.js.map