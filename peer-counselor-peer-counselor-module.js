(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["peer-counselor-peer-counselor-module"],{

/***/ "HMkp":
/*!**********************************************************************!*\
  !*** ./src/app/peer-counselor/peer-counselor-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: PeerCounselorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorDashboardComponent", function() { return PeerCounselorDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/bottom-nav/bottom-nav.component */ "szuZ");






class PeerCounselorDashboardComponent {
    constructor() {
        this.user = { firstName: 'Jane' };
        this.navItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'dashboard', active: true },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' }
        ];
        this.bottomNavItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'home', active: true },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
    }
}
PeerCounselorDashboardComponent.ɵfac = function PeerCounselorDashboardComponent_Factory(t) { return new (t || PeerCounselorDashboardComponent)(); };
PeerCounselorDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeerCounselorDashboardComponent, selectors: [["app-peer-counselor-dashboard"]], decls: 32, vars: 4, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg"], [1, "card-title"], [1, "card-text"], ["variant", "primary", 1, "mt-4"], [3, "items"]], template: function PeerCounselorDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Peer Counselor Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manage your peer counseling activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Support Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View and manage incoming support requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Active Conversations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Continue your ongoing conversations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Open Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Complete your training modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Continue Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-bottom-nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_4__["BottomNavComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .card-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }\n    .card-text[_ngcontent-%COMP%] { color: var(--color-gray-600); margin-bottom: var(--space-4); }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-6); }\n    .grid-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peer-counselor-dashboard',
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
            <h1 class="page-title">Peer Counselor Dashboard</h1>
            <p class="page-description">Manage your peer counseling activities</p>
          </div>

          <div class="grid grid-3">
            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Support Requests</h3>
              <p class="card-text">View and manage incoming support requests</p>
              <app-button variant="primary" class="mt-4">View Requests</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Active Conversations</h3>
              <p class="card-text">Continue your ongoing conversations</p>
              <app-button variant="primary" class="mt-4">Open Chat</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Training</h3>
              <p class="card-text">Complete your training modules</p>
              <app-button variant="primary" class="mt-4">Continue Training</app-button>
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

/***/ "NSX/":
/*!****************************************************************************!*\
  !*** ./src/app/peer-counselor/profile/peer-counselor-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: PeerCounselorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorProfileComponent", function() { return PeerCounselorProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/user.model */ "PQuL");
/* harmony import */ var _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/peer-counselor.service */ "vaJ0");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");











function PeerCounselorProfileComponent_app_badge_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-badge", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formatSupportArea(area_r5));
} }
function PeerCounselorProfileComponent_app_badge_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-badge", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r6);
} }
function PeerCounselorProfileComponent_div_53_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slot_r8.location);
} }
function PeerCounselorProfileComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-badge", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeerCounselorProfileComponent_div_53_div_1_span_7_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getDayName(slot_r8.dayOfWeek));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", slot_r8.startTime, " - ", slot_r8.endTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", slot_r8.isVirtual ? "primary" : "secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slot_r8.isVirtual ? "Virtual" : "In-Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slot_r8.location);
} }
function PeerCounselorProfileComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeerCounselorProfileComponent_div_53_div_1_Template, 8, 6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.counselor == null ? null : ctx_r2.counselor.availability);
} }
function PeerCounselorProfileComponent_p_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No availability set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PeerCounselorProfileComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polyline", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cert_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Issued: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 2, cert_r11.issuedDate, "MMM d, yyyy"), "");
} }
class PeerCounselorProfileComponent {
    constructor(peerCounselorService) {
        this.peerCounselorService = peerCounselorService;
        this.user = { firstName: 'Jane' };
        this.counselor = null;
        this.trainingProgress = 65;
        this.completedModules = 8;
        this.totalModules = 12;
        this.completedHours = 24;
        this.certificates = [];
        this.navItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'dashboard' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user', active: true }
        ];
        this.bottomNavItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'home' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user', active: true }
        ];
    }
    ngOnInit() {
        this.counselor = this.peerCounselorService.getCounselorById('pc-001');
        this.certificates = this.peerCounselorService.getCertificates();
    }
    getTrainingStatusVariant(status) {
        const variants = {
            [_core_models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].NOT_STARTED]: 'secondary',
            [_core_models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].IN_PROGRESS]: 'warning',
            [_core_models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].COMPLETED]: 'success',
            [_core_models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED]: 'primary'
        };
        return variants[status || _core_models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].NOT_STARTED];
    }
    formatTrainingStatus(status) {
        return (status === null || status === void 0 ? void 0 : status.replace('_', ' ')) || 'Not Started';
    }
    formatSupportArea(area) {
        return area.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    getDayName(dayOfWeek) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[dayOfWeek];
    }
    editProfile() {
        console.log('Edit profile');
    }
    manageAvailability() {
        console.log('Manage availability');
    }
    viewCertificates() {
        console.log('View certificates');
    }
}
PeerCounselorProfileComponent.ɵfac = function PeerCounselorProfileComponent_Factory(t) { return new (t || PeerCounselorProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__["PeerCounselorService"])); };
PeerCounselorProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeerCounselorProfileComponent, selectors: [["app-peer-counselor-profile"]], decls: 85, vars: 25, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "profile-grid"], ["variant", "elevated", "padding", "lg", 1, "profile-card"], [1, "profile-header", "text-center"], [1, "avatar-large"], [1, "mt-4"], [1, "text-gray-600"], [1, "mt-2", 3, "variant"], [1, "profile-stats", "mt-6"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "profile-section", "mt-6"], [1, "section-title"], [1, "support-areas"], ["variant", "secondary", "size", "sm", "class", "mr-2 mb-2", 4, "ngFor", "ngForOf"], [1, "languages"], ["variant", "primary", "size", "sm", "class", "mr-2 mb-2", 4, "ngFor", "ngForOf"], ["class", "availability-list", 4, "ngIf"], ["class", "text-gray-600", 4, "ngIf"], [1, "profile-actions", "mt-6"], ["variant", "primary", 1, "w-full", 3, "click"], ["variant", "outline", 1, "w-full", "mt-2", 3, "click"], ["variant", "elevated", "padding", "lg", 1, "stats-card"], [1, "section-title", "mb-4"], [1, "progress-overview", "mb-6"], [1, "progress-circle-container"], ["viewBox", "0 0 100 100", 1, "progress-circle"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke", "var(--color-gray-200)", "stroke-width", "10"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke", "var(--color-primary)", "stroke-width", "10", "stroke-dasharray", "283", 1, "progress-ring"], [1, "progress-text"], [1, "progress-details"], [1, "text-sm", "text-gray-600"], [1, "certificates-section"], [1, "mb-3"], ["class", "certificate-item mb-3 p-3 bg-gray-50 rounded-lg", 4, "ngFor", "ngForOf"], [1, "training-actions", "mt-6"], ["variant", "primary", "routerLink", "/peer-counselor/academy", 1, "w-full"], [3, "items"], ["variant", "secondary", "size", "sm", 1, "mr-2", "mb-2"], ["variant", "primary", "size", "sm", 1, "mr-2", "mb-2"], [1, "availability-list"], ["class", "availability-item", 4, "ngFor", "ngForOf"], [1, "availability-item"], [1, "day"], [1, "time"], ["size", "xs", 3, "variant"], ["class", "location", 4, "ngIf"], [1, "location"], [1, "certificate-item", "mb-3", "p-3", "bg-gray-50", "rounded-lg"], [1, "cert-header"], [1, "cert-icon", "bg-warning-light"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], [1, "font-medium"], [1, "text-xs", "text-gray-600"]], template: function PeerCounselorProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manage your peer counselor profile and settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-badge", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Support Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PeerCounselorProfileComponent_app_badge_44_Template, 2, 1, "app-badge", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PeerCounselorProfileComponent_app_badge_49_Template, 2, 1, "app-badge", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PeerCounselorProfileComponent_div_53_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, PeerCounselorProfileComponent_p_54_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "app-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorProfileComponent_Template_app_button_click_56_listener() { return ctx.editProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorProfileComponent_Template_app_button_click_58_listener() { return ctx.manageAvailability(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Manage Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "app-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Training Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Certificates Earned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, PeerCounselorProfileComponent_div_78_Template, 12, 5, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "app-button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Continue Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "app-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorProfileComponent_Template_app_button_click_82_listener() { return ctx.viewCertificates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "View All Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-bottom-nav", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ((ctx.counselor == null ? null : ctx.counselor.avatarUrl) || "assets/images/avatars/counselor-default.svg") + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.counselor == null ? null : ctx.counselor.firstName, " ", ctx.counselor == null ? null : ctx.counselor.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counselor == null ? null : ctx.counselor.studentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx.getTrainingStatusVariant(ctx.counselor == null ? null : ctx.counselor.trainingStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatTrainingStatus(ctx.counselor == null ? null : ctx.counselor.trainingStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counselor == null ? null : ctx.counselor.rating == null ? null : ctx.counselor.rating.toFixed(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counselor == null ? null : ctx.counselor.totalSessions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counselor == null ? null : ctx.counselor.languages == null ? null : ctx.counselor.languages.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counselor == null ? null : ctx.counselor.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counselor == null ? null : ctx.counselor.supportAreas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counselor == null ? null : ctx.counselor.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counselor == null ? null : ctx.counselor.availability == null ? null : ctx.counselor.availability.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.counselor == null ? null : ctx.counselor.availability == null ? null : ctx.counselor.availability.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dashoffset", 283 - 283 * ctx.trainingProgress / 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.trainingProgress, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.completedModules, " of ", ctx.totalModules, " modules completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.completedHours, " hours of training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_9__["BottomNavComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .profile-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-6); grid-template-columns: 1fr; }\n    @media (min-width: 1024px) { .profile-grid[_ngcontent-%COMP%] { grid-template-columns: 2fr 1fr; } }\n    .profile-card[_ngcontent-%COMP%] { }\n    .profile-header[_ngcontent-%COMP%] { }\n    .avatar-large[_ngcontent-%COMP%] { width: 100px; height: 100px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; margin: 0 auto; }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mt-2[_ngcontent-%COMP%] { margin-top: var(--space-2); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mt-6[_ngcontent-%COMP%] { margin-top: var(--space-6); }\n    .mr-2[_ngcontent-%COMP%] { margin-right: var(--space-2); }\n    .mb-2[_ngcontent-%COMP%] { margin-bottom: var(--space-2); }\n    .mb-3[_ngcontent-%COMP%] { margin-bottom: var(--space-3); }\n    .mb-4[_ngcontent-%COMP%] { margin-bottom: var(--space-4); }\n    .mb-6[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }\n    .profile-stats[_ngcontent-%COMP%] { display: flex; justify-content: center; gap: var(--space-8); padding-top: var(--space-4); border-top: 1px solid var(--color-gray-200); }\n    .stat[_ngcontent-%COMP%] { text-align: center; }\n    .stat-value[_ngcontent-%COMP%] { display: block; font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }\n    .stat-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .support-areas[_ngcontent-%COMP%], .languages[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-2); }\n    .availability-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-3); }\n    .availability-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--color-gray-50); border-radius: var(--radius-lg); }\n    .day[_ngcontent-%COMP%] { font-weight: var(--font-weight-medium); min-width: 80px; }\n    .time[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .location[_ngcontent-%COMP%] { font-size: var(--font-size-xs); color: var(--color-gray-500); margin-left: auto; }\n    .progress-circle-container[_ngcontent-%COMP%] { position: relative; width: 80px; height: 80px; margin: 0 auto; }\n    .progress-circle[_ngcontent-%COMP%] { width: 100%; height: 100%; transform: rotate(-90deg); }\n    .progress-ring[_ngcontent-%COMP%] { transition: stroke-dashoffset 0.5s ease; }\n    .progress-text[_ngcontent-%COMP%] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-primary); }\n    .progress-details[_ngcontent-%COMP%] { text-align: center; margin-top: var(--space-3); }\n    .certificate-item[_ngcontent-%COMP%] { }\n    .cert-header[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); align-items: center; }\n    .cert-icon[_ngcontent-%COMP%] { width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .font-medium[_ngcontent-%COMP%] { font-weight: var(--font-weight-medium); }\n    .text-xs[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .bg-warning-light[_ngcontent-%COMP%] { background: var(--color-warning-light); color: var(--color-warning); }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }\n    .bg-error-light[_ngcontent-%COMP%] { background: var(--color-error-light); color: var(--color-error); }\n    .bg-secondary-100[_ngcontent-%COMP%] { background: var(--color-secondary-100); color: var(--color-secondary); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peer-counselor-profile',
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
            <h1 class="page-title">My Profile</h1>
            <p class="page-description">Manage your peer counselor profile and settings</p>
          </div>

          <div class="profile-grid">
            <app-card variant="elevated" padding="lg" class="profile-card">
              <div class="profile-header text-center">
                <div class="avatar-large" [style.background-image]="'url(' + (counselor?.avatarUrl || 'assets/images/avatars/counselor-default.svg') + ')'"></div>
                <h2 class="mt-4">{{ counselor?.firstName }} {{ counselor?.lastName }}</h2>
                <p class="text-gray-600">{{ counselor?.studentId }}</p>
                <app-badge [variant]="getTrainingStatusVariant(counselor?.trainingStatus)" class="mt-2">{{ formatTrainingStatus(counselor?.trainingStatus) }}</app-badge>
              </div>

              <div class="profile-stats mt-6">
                <div class="stat">
                  <span class="stat-value">{{ counselor?.rating?.toFixed(1) }}</span>
                  <span class="stat-label">Rating</span>
                </div>
                <div class="stat">
                  <span class="stat-value">{{ counselor?.totalSessions }}</span>
                  <span class="stat-label">Sessions</span>
                </div>
                <div class="stat">
                  <span class="stat-value">{{ counselor?.languages?.length }}</span>
                  <span class="stat-label">Languages</span>
                </div>
              </div>

              <div class="profile-section mt-6">
                <h3 class="section-title">About Me</h3>
                <p class="text-gray-600">{{ counselor?.bio }}</p>
              </div>

              <div class="profile-section mt-6">
                <h3 class="section-title">Support Areas</h3>
                <div class="support-areas">
                  <app-badge *ngFor="let area of counselor?.supportAreas" variant="secondary" size="sm" class="mr-2 mb-2">{{ formatSupportArea(area) }}</app-badge>
                </div>
              </div>

              <div class="profile-section mt-6">
                <h3 class="section-title">Languages</h3>
                <div class="languages">
                  <app-badge *ngFor="let lang of counselor?.languages" variant="primary" size="sm" class="mr-2 mb-2">{{ lang }}</app-badge>
                </div>
              </div>

              <div class="profile-section mt-6">
                <h3 class="section-title">Availability</h3>
                <div class="availability-list" *ngIf="counselor?.availability?.length">
                  <div *ngFor="let slot of counselor?.availability" class="availability-item">
                    <span class="day">{{ getDayName(slot.dayOfWeek) }}</span>
                    <span class="time">{{ slot.startTime }} - {{ slot.endTime }}</span>
                    <app-badge [variant]="slot.isVirtual ? 'primary' : 'secondary'" size="xs">{{ slot.isVirtual ? 'Virtual' : 'In-Person' }}</app-badge>
                    <span *ngIf="slot.location" class="location">{{ slot.location }}</span>
                  </div>
                </div>
                <p *ngIf="!counselor?.availability?.length" class="text-gray-600">No availability set</p>
              </div>

              <div class="profile-actions mt-6">
                <app-button variant="primary" class="w-full" (click)="editProfile()">Edit Profile</app-button>
                <app-button variant="outline" class="w-full mt-2" (click)="manageAvailability()">Manage Availability</app-button>
              </div>
            </app-card>

            <app-card variant="elevated" padding="lg" class="stats-card">
              <h3 class="section-title mb-4">Training Progress</h3>
              <div class="progress-overview mb-6">
                <div class="progress-circle-container">
                  <svg viewBox="0 0 100 100" class="progress-circle">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-gray-200)" stroke-width="10"></circle>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-primary)" stroke-width="10" stroke-dasharray="283" [attr.stroke-dashoffset]="283 - (283 * trainingProgress / 100)" class="progress-ring"></circle>
                  </svg>
                  <span class="progress-text">{{ trainingProgress }}%</span>
                </div>
                <div class="progress-details">
                  <p>{{ completedModules }} of {{ totalModules }} modules completed</p>
                  <p class="text-sm text-gray-600">{{ completedHours }} hours of training</p>
                </div>
              </div>

              <div class="certificates-section">
                <h4 class="mb-3">Certificates Earned</h4>
                <div *ngFor="let cert of certificates" class="certificate-item mb-3 p-3 bg-gray-50 rounded-lg">
                  <div class="cert-header">
                    <div class="cert-icon bg-warning-light">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    </div>
                    <div>
                      <p class="font-medium">{{ cert.title }}</p>
                      <p class="text-xs text-gray-600">Issued: {{ cert.issuedDate | date:'MMM d, yyyy' }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="training-actions mt-6">
                <app-button variant="primary" class="w-full" routerLink="/peer-counselor/academy">Continue Training</app-button>
                <app-button variant="outline" class="w-full mt-2" (click)="viewCertificates()">View All Certificates</app-button>
              </div>
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
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .profile-grid { display: grid; gap: var(--space-6); grid-template-columns: 1fr; }
    @media (min-width: 1024px) { .profile-grid { grid-template-columns: 2fr 1fr; } }
    .profile-card { }
    .profile-header { }
    .avatar-large { width: 100px; height: 100px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; margin: 0 auto; }
    .text-center { text-align: center; }
    .mt-2 { margin-top: var(--space-2); }
    .mt-4 { margin-top: var(--space-4); }
    .mt-6 { margin-top: var(--space-6); }
    .mr-2 { margin-right: var(--space-2); }
    .mb-2 { margin-bottom: var(--space-2); }
    .mb-3 { margin-bottom: var(--space-3); }
    .mb-4 { margin-bottom: var(--space-4); }
    .mb-6 { margin-bottom: var(--space-6); }
    .w-full { width: 100%; }
    .section-title { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }
    .profile-stats { display: flex; justify-content: center; gap: var(--space-8); padding-top: var(--space-4); border-top: 1px solid var(--color-gray-200); }
    .stat { text-align: center; }
    .stat-value { display: block; font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }
    .stat-label { font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .support-areas, .languages { display: flex; flex-wrap: wrap; gap: var(--space-2); }
    .availability-list { display: flex; flex-direction: column; gap: var(--space-3); }
    .availability-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--color-gray-50); border-radius: var(--radius-lg); }
    .day { font-weight: var(--font-weight-medium); min-width: 80px; }
    .time { color: var(--color-gray-600); }
    .location { font-size: var(--font-size-xs); color: var(--color-gray-500); margin-left: auto; }
    .progress-circle-container { position: relative; width: 80px; height: 80px; margin: 0 auto; }
    .progress-circle { width: 100%; height: 100%; transform: rotate(-90deg); }
    .progress-ring { transition: stroke-dashoffset 0.5s ease; }
    .progress-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-primary); }
    .progress-details { text-align: center; margin-top: var(--space-3); }
    .certificate-item { }
    .cert-header { display: flex; gap: var(--space-3); align-items: center; }
    .cert-icon { width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .font-medium { font-weight: var(--font-weight-medium); }
    .text-xs { font-size: var(--font-size-xs); }
    .text-gray-600 { color: var(--color-gray-600); }
    .bg-warning-light { background: var(--color-warning-light); color: var(--color-warning); }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
    .bg-error-light { background: var(--color-error-light); color: var(--color-error); }
    .bg-secondary-100 { background: var(--color-secondary-100); color: var(--color-secondary); }
  `]
            }]
    }], function () { return [{ type: _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__["PeerCounselorService"] }]; }, null); })();


/***/ }),

/***/ "OtPB":
/*!*********************************************************!*\
  !*** ./src/app/peer-counselor/peer-counselor.module.ts ***!
  \*********************************************************/
/*! exports provided: PeerCounselorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorModule", function() { return PeerCounselorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _peer_counselor_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./peer-counselor-dashboard.component */ "HMkp");
/* harmony import */ var _requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests/support-requests.component */ "Tq7Q");
/* harmony import */ var _chat_peer_counselor_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/peer-counselor-chat.component */ "s+kd");
/* harmony import */ var _academy_peer_counselor_academy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./academy/peer-counselor-academy.component */ "xUQ1");
/* harmony import */ var _profile_peer_counselor_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/peer-counselor-profile.component */ "NSX/");











class PeerCounselorModule {
}
PeerCounselorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PeerCounselorModule });
PeerCounselorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PeerCounselorModule_Factory(t) { return new (t || PeerCounselorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _peer_counselor_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["PeerCounselorDashboardComponent"] },
                { path: 'requests', component: _requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__["SupportRequestsComponent"] },
                { path: 'chat', component: _chat_peer_counselor_chat_component__WEBPACK_IMPORTED_MODULE_6__["PeerCounselorChatComponent"] },
                { path: 'academy', component: _academy_peer_counselor_academy_component__WEBPACK_IMPORTED_MODULE_7__["PeerCounselorAcademyComponent"] },
                { path: 'profile', component: _profile_peer_counselor_profile_component__WEBPACK_IMPORTED_MODULE_8__["PeerCounselorProfileComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PeerCounselorModule, { declarations: [_peer_counselor_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["PeerCounselorDashboardComponent"],
        _requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__["SupportRequestsComponent"],
        _chat_peer_counselor_chat_component__WEBPACK_IMPORTED_MODULE_6__["PeerCounselorChatComponent"],
        _academy_peer_counselor_academy_component__WEBPACK_IMPORTED_MODULE_7__["PeerCounselorAcademyComponent"],
        _profile_peer_counselor_profile_component__WEBPACK_IMPORTED_MODULE_8__["PeerCounselorProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _peer_counselor_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["PeerCounselorDashboardComponent"],
                    _requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__["SupportRequestsComponent"],
                    _chat_peer_counselor_chat_component__WEBPACK_IMPORTED_MODULE_6__["PeerCounselorChatComponent"],
                    _academy_peer_counselor_academy_component__WEBPACK_IMPORTED_MODULE_7__["PeerCounselorAcademyComponent"],
                    _profile_peer_counselor_profile_component__WEBPACK_IMPORTED_MODULE_8__["PeerCounselorProfileComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _peer_counselor_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["PeerCounselorDashboardComponent"] },
                        { path: 'requests', component: _requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__["SupportRequestsComponent"] },
                        { path: 'chat', component: _chat_peer_counselor_chat_component__WEBPACK_IMPORTED_MODULE_6__["PeerCounselorChatComponent"] },
                        { path: 'academy', component: _academy_peer_counselor_academy_component__WEBPACK_IMPORTED_MODULE_7__["PeerCounselorAcademyComponent"] },
                        { path: 'profile', component: _profile_peer_counselor_profile_component__WEBPACK_IMPORTED_MODULE_8__["PeerCounselorProfileComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Tq7Q":
/*!***********************************************************************!*\
  !*** ./src/app/peer-counselor/requests/support-requests.component.ts ***!
  \***********************************************************************/
/*! exports provided: SupportRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRequestsComponent", function() { return SupportRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/peer-counselor.service */ "vaJ0");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");









function SupportRequestsComponent_button_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.count);
} }
function SupportRequestsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportRequestsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const tab_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setActiveTab(tab_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupportRequestsComponent_button_10_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === tab_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r4.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.count > 0);
} }
function SupportRequestsComponent_div_11_app_card_1_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r10.category, " ");
} }
function SupportRequestsComponent_div_11_app_card_1_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r10.urgency, " ");
} }
function SupportRequestsComponent_div_11_app_card_1_app_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportRequestsComponent_div_11_app_card_1_app_button_25_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const request_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.acceptRequest(request_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportRequestsComponent_div_11_app_card_1_app_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportRequestsComponent_div_11_app_card_1_app_button_26_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const request_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.startChat(request_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportRequestsComponent_div_11_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "polyline", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SupportRequestsComponent_div_11_app_card_1_span_18_Template, 4, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SupportRequestsComponent_div_11_app_card_1_span_19_Template, 6, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportRequestsComponent_div_11_app_card_1_Template_app_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const request_r10 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.viewDetails(request_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SupportRequestsComponent_div_11_app_card_1_app_button_25_Template, 2, 0, "app-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SupportRequestsComponent_div_11_app_card_1_app_button_26_Template, 2, 0, "app-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportRequestsComponent_div_11_app_card_1_Template_app_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const request_r10 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.escalateRequest(request_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Escalate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (request_r10.studentAvatar || "assets/images/avatars/student-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r10.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", request_r10.studentProgram, " \u00B7 Year ", request_r10.studentYear, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r9.getStatusVariant(request_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 13, request_r10.createdAt, "MMM d, yyyy h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r10.urgency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r10.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r10.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r10.status === "accepted");
} }
function SupportRequestsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SupportRequestsComponent_div_11_app_card_1_Template, 29, 16, "app-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredRequests);
} }
function SupportRequestsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No requests found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeTab === "pending" ? "No pending requests at the moment" : "No " + ctx_r3.activeTab + " requests");
} }
class SupportRequestsComponent {
    constructor(peerCounselorService) {
        this.peerCounselorService = peerCounselorService;
        this.user = { firstName: 'Jane' };
        this.allRequests = [];
        this.filteredRequests = [];
        this.activeTab = 'pending';
        this.statusTabs = [
            { id: 'pending', label: 'Pending', count: 0 },
            { id: 'accepted', label: 'Accepted', count: 0 },
            { id: 'completed', label: 'Completed', count: 0 },
            { id: 'escalated', label: 'Escalated', count: 0 }
        ];
        this.navItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'dashboard' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox', active: true },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
        this.bottomNavItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'home' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox', active: true },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.allRequests = this.peerCounselorService.getSupportRequests();
        this.updateTabCounts();
        this.filterRequests();
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
        this.filterRequests();
    }
    filterRequests() {
        this.filteredRequests = this.allRequests.filter(r => r.status === this.activeTab);
    }
    updateTabCounts() {
        this.statusTabs.forEach(tab => {
            tab.count = this.allRequests.filter(r => r.status === tab.id).length;
        });
    }
    getStatusVariant(status) {
        const variants = {
            'pending': 'warning',
            'accepted': 'primary',
            'completed': 'success',
            'escalated': 'error'
        };
        return variants[status] || 'secondary';
    }
    viewDetails(request) {
        console.log('View request details:', request.id);
    }
    acceptRequest(request) {
        this.peerCounselorService.acceptRequest(request.id);
        this.allRequests = this.peerCounselorService.getSupportRequests();
        this.updateTabCounts();
        this.filterRequests();
    }
    startChat(request) {
        console.log('Start chat with:', request.studentId);
    }
    escalateRequest(request) {
        this.peerCounselorService.escalateRequest(request.id);
        this.allRequests = this.peerCounselorService.getSupportRequests();
        this.updateTabCounts();
        this.filterRequests();
    }
}
SupportRequestsComponent.ɵfac = function SupportRequestsComponent_Factory(t) { return new (t || SupportRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_1__["PeerCounselorService"])); };
SupportRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportRequestsComponent, selectors: [["app-support-requests"]], decls: 15, vars: 7, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], ["role", "tablist", 1, "filter-tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "requests-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [3, "items"], ["role", "tab", 1, "tab-btn", 3, "click"], ["class", "badge", 4, "ngIf"], [1, "badge"], [1, "requests-list"], ["variant", "elevated", "padding", "md", "class", "request-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "request-card"], [1, "request-header"], [1, "student-info"], [1, "avatar"], [1, "text-sm", "text-gray-600"], ["size", "sm", 3, "variant"], [1, "request-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["class", "meta-item", 4, "ngIf"], [1, "request-message"], [1, "request-actions", "mt-4"], ["variant", "outline", "size", "sm", 3, "click"], ["variant", "primary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "secondary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "ghost", "size", "sm", 1, "ml-auto", 3, "click"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["variant", "primary", "size", "sm", 3, "click"], ["variant", "secondary", "size", "sm", 3, "click"], [1, "text-center", "py-12"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "mt-4"], [1, "text-gray-600", "mt-2"]], template: function SupportRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Support Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manage incoming support requests from students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SupportRequestsComponent_button_10_Template, 3, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SupportRequestsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SupportRequestsComponent_ng_template_12_Template, 7, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-bottom-nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredRequests.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_4__["BottomNavComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__["BadgeComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .filter-tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .badge[_ngcontent-%COMP%] { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }\n    .requests-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .request-card[_ngcontent-%COMP%] { }\n    .request-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-3); }\n    .student-info[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); }\n    .avatar[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .request-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); margin-bottom: var(--space-3); }\n    .meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); }\n    .request-message[_ngcontent-%COMP%] { color: var(--color-gray-700); margin: 0 0 var(--space-4); line-height: 1.5; }\n    .request-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .ml-auto[_ngcontent-%COMP%] { margin-left: auto; }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .text-gray-700[_ngcontent-%COMP%] { color: var(--color-gray-700); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .py-12[_ngcontent-%COMP%] { padding-top: var(--space-12); padding-bottom: var(--space-12); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mx-auto[_ngcontent-%COMP%] { margin-left: auto; margin-right: auto; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportRequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support-requests',
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
            <h1 class="page-title">Support Requests</h1>
            <p class="page-description">Manage incoming support requests from students</p>
          </div>

          <div class="filter-tabs" role="tablist">
            <button *ngFor="let tab of statusTabs" role="tab" [class.active]="activeTab === tab.id" (click)="setActiveTab(tab.id)" class="tab-btn">
              {{ tab.label }} <span class="badge" *ngIf="tab.count > 0">{{ tab.count }}</span>
            </button>
          </div>

          <div class="requests-list" *ngIf="filteredRequests.length > 0; else emptyState">
            <app-card *ngFor="let request of filteredRequests" variant="elevated" padding="md" class="request-card">
              <div class="request-header">
                <div class="student-info">
                  <div class="avatar" [style.background-image]="'url(' + (request.studentAvatar || 'assets/images/avatars/student-default.svg') + ')'"></div>
                  <div>
                    <h4>{{ request.studentName }}</h4>
                    <p class="text-sm text-gray-600">{{ request.studentProgram }} · Year {{ request.studentYear }}</p>
                  </div>
                </div>
                <app-badge [variant]="getStatusVariant(request.status)" size="sm">{{ request.status }}</app-badge>
              </div>
              <div class="request-meta">
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {{ request.createdAt | date:'MMM d, yyyy h:mm a' }}
                </span>
                <span class="meta-item" *ngIf="request.category">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  {{ request.category }}
                </span>
                <span class="meta-item" *ngIf="request.urgency">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  {{ request.urgency }}
                </span>
              </div>
              <p class="request-message">{{ request.message }}</p>
              <div class="request-actions mt-4">
                <app-button variant="outline" size="sm" (click)="viewDetails(request)">Details</app-button>
                <app-button variant="primary" size="sm" (click)="acceptRequest(request)" *ngIf="request.status === 'pending'">Accept</app-button>
                <app-button variant="secondary" size="sm" (click)="startChat(request)" *ngIf="request.status === 'accepted'">Chat</app-button>
                <app-button variant="ghost" size="sm" (click)="escalateRequest(request)" class="ml-auto">Escalate</app-button>
              </div>
            </app-card>
          </div>
          <ng-template #emptyState>
            <div class="text-center py-12">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <h3 class="mt-4">No requests found</h3>
              <p class="text-gray-600 mt-2">{{ activeTab === 'pending' ? 'No pending requests at the moment' : 'No ' + activeTab + ' requests' }}</p>
            </div>
          </ng-template>
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
    .filter-tabs { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .badge { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }
    .requests-list { display: flex; flex-direction: column; gap: var(--space-4); }
    .request-card { }
    .request-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-3); }
    .student-info { display: flex; gap: var(--space-3); }
    .avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .request-meta { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); margin-bottom: var(--space-3); }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); }
    .request-message { color: var(--color-gray-700); margin: 0 0 var(--space-4); line-height: 1.5; }
    .request-actions { display: flex; gap: var(--space-2); }
    .ml-auto { margin-left: auto; }
    .text-sm { font-size: var(--font-size-sm); }
    .text-gray-600 { color: var(--color-gray-600); }
    .text-gray-700 { color: var(--color-gray-700); }
    .mt-4 { margin-top: var(--space-4); }
    .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
  `]
            }]
    }], function () { return [{ type: _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_1__["PeerCounselorService"] }]; }, null); })();


/***/ }),

/***/ "s+kd":
/*!**********************************************************************!*\
  !*** ./src/app/peer-counselor/chat/peer-counselor-chat.component.ts ***!
  \**********************************************************************/
/*! exports provided: PeerCounselorChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorChatComponent", function() { return PeerCounselorChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/chat.service */ "il7l");
/* harmony import */ var _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/peer-counselor.service */ "vaJ0");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function PeerCounselorChatComponent_div_11_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conv_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conv_r7.unreadCount);
} }
function PeerCounselorChatComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorChatComponent_div_11_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const conv_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.selectConversation(conv_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PeerCounselorChatComponent_div_11_div_1_span_12_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conv_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r6.activeConversation == null ? null : ctx_r6.activeConversation.id) === conv_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (conv_r7.avatar || "assets/images/avatars/student-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("online", conv_r7.isOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conv_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, conv_r7.lastMessageTime, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conv_r7.lastMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conv_r7.unreadCount > 0);
} }
function PeerCounselorChatComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeerCounselorChatComponent_div_11_div_1_Template, 13, 13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.conversations);
} }
function PeerCounselorChatComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No active conversations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accept a support request to start chatting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PeerCounselorChatComponent_div_14_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("own", msg_r15.isOwn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("own", msg_r15.isOwn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r15.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, msg_r15.timestamp, "HH:mm"));
} }
function PeerCounselorChatComponent_div_14_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PeerCounselorChatComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PeerCounselorChatComponent_div_14_div_17_Template, 7, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PeerCounselorChatComponent_div_14_div_18_Template, 4, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeerCounselorChatComponent_div_14_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.newMessage = $event; })("keyup.enter", function PeerCounselorChatComponent_div_14_Template_input_keyup_enter_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.sendMessage(); })("focus", function PeerCounselorChatComponent_div_14_Template_input_focus_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onInputFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorChatComponent_div_14_Template_app_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (ctx_r3.activeConversation.avatar || "assets/images/avatars/student-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeConversation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("online", ctx_r3.activeConversation.isOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeConversation.isOnline ? "Online" : "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.activeConversation.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.activeConversation.typing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.newMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.newMessage.trim());
} }
function PeerCounselorChatComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select a conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose a conversation from the list to start messaging");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PeerCounselorChatComponent {
    constructor(chatService, peerCounselorService) {
        this.chatService = chatService;
        this.peerCounselorService = peerCounselorService;
        this.user = { firstName: 'Jane' };
        this.conversations = [];
        this.activeConversation = null;
        this.newMessage = '';
        this.navItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'dashboard' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat', active: true },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
        this.bottomNavItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'home' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat', active: true },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book' },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.conversations = this.chatService.getConversationsForCounselor('pc-001');
    }
    ngOnDestroy() { }
    selectConversation(conv) {
        this.activeConversation = conv;
        this.chatService.markAsRead(conv.id);
        conv.unreadCount = 0;
    }
    sendMessage() {
        if (!this.newMessage.trim() || !this.activeConversation)
            return;
        this.chatService.sendMessage(this.activeConversation.id, this.newMessage, 'text');
        this.newMessage = '';
        setTimeout(() => {
            this.scrollToBottom();
        }, 100);
    }
    onInputFocus() {
        if (this.activeConversation) {
            this.chatService.startTyping(this.activeConversation.id, 'pc-001');
            setTimeout(() => this.chatService.stopTyping(this.activeConversation.id, 'pc-001'), 2000);
        }
    }
    scrollToBottom() {
        const container = document.querySelector('.chat-messages');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }
}
PeerCounselorChatComponent.ɵfac = function PeerCounselorChatComponent_Factory(t) { return new (t || PeerCounselorChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__["PeerCounselorService"])); };
PeerCounselorChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeerCounselorChatComponent, selectors: [["app-peer-counselor-chat"]], decls: 18, vars: 8, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container-fluid", "p-0", "h-100"], [1, "chat-layout", "h-100"], [1, "chat-sidebar"], [1, "sidebar-header"], ["variant", "ghost", "size", "sm", "icon", "plus"], ["class", "conversation-list", 4, "ngIf", "ngIfElse"], ["emptyConversations", ""], ["class", "chat-main", 4, "ngIf", "ngIfElse"], ["noConversationSelected", ""], [3, "items"], [1, "conversation-list"], ["class", "conversation-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "conversation-item", 3, "click"], [1, "conv-avatar"], [1, "status-indicator"], [1, "conv-info"], [1, "conv-header"], [1, "conv-time"], [1, "conv-preview"], ["class", "unread-badge", 4, "ngIf"], [1, "unread-badge"], [1, "empty-state", "text-center", "p-6"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "mt-3", "text-gray-600"], [1, "text-sm", "text-gray-500"], [1, "chat-main"], [1, "chat-header"], [1, "chat-header-info"], [1, "avatar"], [1, "text-sm"], [1, "chat-header-actions"], ["variant", "ghost", "size", "sm", "icon", "phone"], ["variant", "ghost", "size", "sm", "icon", "video"], ["variant", "ghost", "size", "sm", "icon", "more-vertical"], [1, "chat-messages"], ["messagesContainer", ""], ["class", "message", 3, "own", 4, "ngFor", "ngForOf"], ["class", "typing-indicator", 4, "ngIf"], [1, "chat-input-area"], [1, "input-wrapper"], ["type", "text", "placeholder", "Type a message...", 1, "message-input", 3, "ngModel", "ngModelChange", "keyup.enter", "focus"], ["variant", "primary", "icon", "send", 3, "disabled", "click"], [1, "input-actions"], ["variant", "ghost", "size", "sm", "icon", "attach-file"], ["variant", "ghost", "size", "sm", "icon", "image"], ["variant", "ghost", "size", "sm", "icon", "mic"], [1, "message"], [1, "message-bubble"], [1, "message-time"], [1, "typing-indicator"], [1, "chat-placeholder"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], [1, "mt-4"], [1, "text-gray-600"]], template: function PeerCounselorChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aside", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Conversations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PeerCounselorChatComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PeerCounselorChatComponent_ng_template_12_Template, 7, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PeerCounselorChatComponent_div_14_Template, 27, 10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PeerCounselorChatComponent_ng_template_15_Template, 7, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-bottom-nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conversations.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeConversation)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_6__["BottomNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container-fluid[_ngcontent-%COMP%] { width: 100%; padding: 0; }\n    .chat-layout[_ngcontent-%COMP%] { display: flex; height: calc(100vh - var(--header-height) - var(--bottom-nav-height)); }\n    .chat-sidebar[_ngcontent-%COMP%] { width: 320px; border-right: 1px solid var(--color-gray-200); background: white; display: flex; flex-direction: column; }\n    .sidebar-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); border-bottom: 1px solid var(--color-gray-200); }\n    .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin: 0; }\n    .conversation-list[_ngcontent-%COMP%] { flex: 1; overflow-y: auto; padding: var(--space-2); }\n    .conversation-item[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); padding: var(--space-3); border-radius: var(--radius-lg); cursor: pointer; transition: background var(--transition-fast); position: relative; }\n    .conversation-item[_ngcontent-%COMP%]:hover { background: var(--color-gray-50); }\n    .conversation-item.active[_ngcontent-%COMP%] { background: var(--color-primary-50); }\n    .conv-avatar[_ngcontent-%COMP%] { position: relative; width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .status-indicator[_ngcontent-%COMP%] { position: absolute; bottom: 2px; right: 2px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; background: var(--color-gray-400); }\n    .status-indicator.online[_ngcontent-%COMP%] { background: var(--color-success); }\n    .conv-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n    .conv-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-1); }\n    .conv-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin: 0; }\n    .conv-time[_ngcontent-%COMP%] { font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .conv-preview[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-600); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n    .unread-badge[_ngcontent-%COMP%] { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }\n    .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; }\n    .chat-main[_ngcontent-%COMP%] { flex: 1; display: flex; flex-direction: column; background: var(--color-gray-50); }\n    .chat-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); border-bottom: 1px solid var(--color-gray-200); background: white; }\n    .chat-header-info[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); }\n    .chat-header-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] { width: 40px; height: 40px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; }\n    .chat-header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .chat-header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: var(--font-size-xs); color: var(--color-gray-500); margin: 0; }\n    .chat-header-info[_ngcontent-%COMP%]   p.online[_ngcontent-%COMP%] { color: var(--color-success); }\n    .chat-header-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .chat-messages[_ngcontent-%COMP%] { flex: 1; overflow-y: auto; padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-3); }\n    .message[_ngcontent-%COMP%] { display: flex; }\n    .message.own[_ngcontent-%COMP%] { justify-content: flex-end; }\n    .message-bubble[_ngcontent-%COMP%] { max-width: 70%; padding: var(--space-3) var(--space-4); border-radius: var(--radius-xl); background: white; box-shadow: var(--shadow-sm); position: relative; }\n    .message.own[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] { background: var(--color-primary); color: white; border-bottom-right-radius: var(--radius-sm); }\n    .message[_ngcontent-%COMP%]:not(.own)   .message-bubble[_ngcontent-%COMP%] { border-bottom-left-radius: var(--radius-sm); }\n    .message-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0 0 var(--space-1); line-height: 1.5; }\n    .message-time[_ngcontent-%COMP%] { font-size: var(--font-size-xs); color: var(--color-gray-500); display: block; text-align: right; }\n    .message.own[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] { color: rgba(255,255,255,0.7); }\n    .typing-indicator[_ngcontent-%COMP%] { display: flex; gap: 3px; padding: var(--space-2); color: var(--color-gray-500); }\n    .typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { width: 6px; height: 6px; border-radius: 50%; background: currentColor; animation: bounce 1.4s infinite ease-in-out both; }\n    .typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) { animation-delay: -0.32s; }\n    .typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) { animation-delay: -0.16s; }\n    @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }\n    .chat-input-area[_ngcontent-%COMP%] { padding: var(--space-4); border-top: 1px solid var(--color-gray-200); background: white; }\n    .input-wrapper[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); margin-bottom: var(--space-2); }\n    .message-input[_ngcontent-%COMP%] { flex: 1; padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-full); font-size: var(--font-size-base); }\n    .message-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .input-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); justify-content: flex-end; }\n    .chat-placeholder[_ngcontent-%COMP%] { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-gray-500); }\n    .chat-placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin: 0; color: var(--color-gray-700); }\n    .chat-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: var(--space-2) 0 0; }\n    .p-6[_ngcontent-%COMP%] { padding: var(--space-6); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mx-auto[_ngcontent-%COMP%] { margin-left: auto; margin-right: auto; }\n    .mt-3[_ngcontent-%COMP%] { margin-top: var(--space-3); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-xs[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .text-gray-500[_ngcontent-%COMP%] { color: var(--color-gray-500); }\n    .text-gray-300[_ngcontent-%COMP%] { color: var(--color-gray-300); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peer-counselor-chat',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="user"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content-with-sidebar">
        <div class="container-fluid p-0 h-100">
          <div class="chat-layout h-100">
            <aside class="chat-sidebar">
              <div class="sidebar-header">
                <h2>Conversations</h2>
                <app-button variant="ghost" size="sm" icon="plus">New</app-button>
              </div>
              <div class="conversation-list" *ngIf="conversations.length > 0; else emptyConversations">
                <div *ngFor="let conv of conversations" 
                     class="conversation-item" 
                     [class.active]="activeConversation?.id === conv.id"
                     (click)="selectConversation(conv)">
                  <div class="conv-avatar" [style.background-image]="'url(' + (conv.avatar || 'assets/images/avatars/student-default.svg') + ')'">
                    <span class="status-indicator" [class.online]="conv.isOnline"></span>
                  </div>
                  <div class="conv-info">
                    <div class="conv-header">
                      <h4>{{ conv.name }}</h4>
                      <span class="conv-time">{{ conv.lastMessageTime | date:'HH:mm' }}</span>
                    </div>
                    <p class="conv-preview">{{ conv.lastMessage }}</p>
                    <span class="unread-badge" *ngIf="conv.unreadCount > 0">{{ conv.unreadCount }}</span>
                  </div>
                </div>
              </div>
              <ng-template #emptyConversations>
                <div class="empty-state text-center p-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <p class="mt-3 text-gray-600">No active conversations</p>
                  <p class="text-sm text-gray-500">Accept a support request to start chatting</p>
                </div>
              </ng-template>
            </aside>

            <div class="chat-main" *ngIf="activeConversation; else noConversationSelected">
              <div class="chat-header">
                <div class="chat-header-info">
                  <div class="avatar" [style.background-image]="'url(' + (activeConversation.avatar || 'assets/images/avatars/student-default.svg') + ')'"></div>
                  <div>
                    <h3>{{ activeConversation.name }}</h3>
                    <p class="text-sm" [class.online]="activeConversation.isOnline">{{ activeConversation.isOnline ? 'Online' : 'Offline' }}</p>
                  </div>
                </div>
                <div class="chat-header-actions">
                  <app-button variant="ghost" size="sm" icon="phone">Call</app-button>
                  <app-button variant="ghost" size="sm" icon="video">Video</app-button>
                  <app-button variant="ghost" size="sm" icon="more-vertical"></app-button>
                </div>
              </div>
              <div class="chat-messages" #messagesContainer>
                <div *ngFor="let msg of activeConversation.messages" class="message" [class.own]="msg.isOwn">
                  <div class="message-bubble" [class.own]="msg.isOwn">
                    <p>{{ msg.content }}</p>
                    <span class="message-time">{{ msg.timestamp | date:'HH:mm' }}</span>
                  </div>
                </div>
                <div *ngIf="activeConversation.typing" class="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div class="chat-input-area">
                <div class="input-wrapper">
                  <input type="text" [(ngModel)]="newMessage" placeholder="Type a message..." class="message-input" (keyup.enter)="sendMessage()" (focus)="onInputFocus()">
                  <app-button variant="primary" icon="send" (click)="sendMessage()" [disabled]="!newMessage.trim()"></app-button>
                </div>
                <div class="input-actions">
                  <app-button variant="ghost" size="sm" icon="attach-file"></app-button>
                  <app-button variant="ghost" size="sm" icon="image"></app-button>
                  <app-button variant="ghost" size="sm" icon="mic"></app-button>
                </div>
              </div>
            </div>
            <ng-template #noConversationSelected>
              <div class="chat-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <h3 class="mt-4">Select a conversation</h3>
                <p class="text-gray-600">Choose a conversation from the list to start messaging</p>
              </div>
            </ng-template>
          </div>
        </div>
      </main>

      <app-bottom-nav [items]="bottomNavItems"></app-bottom-nav>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }
    .container-fluid { width: 100%; padding: 0; }
    .chat-layout { display: flex; height: calc(100vh - var(--header-height) - var(--bottom-nav-height)); }
    .chat-sidebar { width: 320px; border-right: 1px solid var(--color-gray-200); background: white; display: flex; flex-direction: column; }
    .sidebar-header { display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); border-bottom: 1px solid var(--color-gray-200); }
    .sidebar-header h2 { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin: 0; }
    .conversation-list { flex: 1; overflow-y: auto; padding: var(--space-2); }
    .conversation-item { display: flex; gap: var(--space-3); padding: var(--space-3); border-radius: var(--radius-lg); cursor: pointer; transition: background var(--transition-fast); position: relative; }
    .conversation-item:hover { background: var(--color-gray-50); }
    .conversation-item.active { background: var(--color-primary-50); }
    .conv-avatar { position: relative; width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .status-indicator { position: absolute; bottom: 2px; right: 2px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; background: var(--color-gray-400); }
    .status-indicator.online { background: var(--color-success); }
    .conv-info { flex: 1; min-width: 0; }
    .conv-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-1); }
    .conv-header h4 { font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin: 0; }
    .conv-time { font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .conv-preview { font-size: var(--font-size-sm); color: var(--color-gray-600); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .unread-badge { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }
    .empty-state p { margin: 0; }
    .chat-main { flex: 1; display: flex; flex-direction: column; background: var(--color-gray-50); }
    .chat-header { display: flex; align-items: center; justify-content: space-between; padding: var(--space-4); border-bottom: 1px solid var(--color-gray-200); background: white; }
    .chat-header-info { display: flex; gap: var(--space-3); }
    .chat-header-info .avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; }
    .chat-header-info h3 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .chat-header-info p { font-size: var(--font-size-xs); color: var(--color-gray-500); margin: 0; }
    .chat-header-info p.online { color: var(--color-success); }
    .chat-header-actions { display: flex; gap: var(--space-2); }
    .chat-messages { flex: 1; overflow-y: auto; padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-3); }
    .message { display: flex; }
    .message.own { justify-content: flex-end; }
    .message-bubble { max-width: 70%; padding: var(--space-3) var(--space-4); border-radius: var(--radius-xl); background: white; box-shadow: var(--shadow-sm); position: relative; }
    .message.own .message-bubble { background: var(--color-primary); color: white; border-bottom-right-radius: var(--radius-sm); }
    .message:not(.own) .message-bubble { border-bottom-left-radius: var(--radius-sm); }
    .message-bubble p { margin: 0 0 var(--space-1); line-height: 1.5; }
    .message-time { font-size: var(--font-size-xs); color: var(--color-gray-500); display: block; text-align: right; }
    .message.own .message-time { color: rgba(255,255,255,0.7); }
    .typing-indicator { display: flex; gap: 3px; padding: var(--space-2); color: var(--color-gray-500); }
    .typing-indicator span { width: 6px; height: 6px; border-radius: 50%; background: currentColor; animation: bounce 1.4s infinite ease-in-out both; }
    .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
    .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
    @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
    .chat-input-area { padding: var(--space-4); border-top: 1px solid var(--color-gray-200); background: white; }
    .input-wrapper { display: flex; gap: var(--space-2); margin-bottom: var(--space-2); }
    .message-input { flex: 1; padding: var(--space-3) var(--space-4); border: 1px solid var(--color-gray-300); border-radius: var(--radius-full); font-size: var(--font-size-base); }
    .message-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .input-actions { display: flex; gap: var(--space-2); justify-content: flex-end; }
    .chat-placeholder { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-gray-500); }
    .chat-placeholder h3 { font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); margin: 0; color: var(--color-gray-700); }
    .chat-placeholder p { margin: var(--space-2) 0 0; }
    .p-6 { padding: var(--space-6); }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mt-3 { margin-top: var(--space-3); }
    .text-gray-600 { color: var(--color-gray-600); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-xs { font-size: var(--font-size-xs); }
    .text-gray-500 { color: var(--color-gray-500); }
    .text-gray-300 { color: var(--color-gray-300); }
  `]
            }]
    }], function () { return [{ type: _core_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_2__["PeerCounselorService"] }]; }, null); })();


/***/ }),

/***/ "xUQ1":
/*!****************************************************************************!*\
  !*** ./src/app/peer-counselor/academy/peer-counselor-academy.component.ts ***!
  \****************************************************************************/
/*! exports provided: PeerCounselorAcademyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorAcademyComponent", function() { return PeerCounselorAcademyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/peer-counselor.service */ "vaJ0");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/bottom-nav/bottom-nav.component */ "szuZ");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");









function PeerCounselorAcademyComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorAcademyComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const tab_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setActiveTab(tab_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === tab_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r4.label, " ");
} }
function PeerCounselorAcademyComponent_div_42_app_card_4_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", module_r8.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", module_r8.progress, "%");
} }
function PeerCounselorAcademyComponent_div_42_app_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "polyline", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polyline", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PeerCounselorAcademyComponent_div_42_app_card_4_div_24_Template, 5, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorAcademyComponent_div_42_app_card_4_Template_app_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const module_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.startModule(module_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + module_r8.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", module_r8.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", module_r8.required ? "primary" : "secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r8.required ? "Required" : "Optional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r7.getDifficultyVariant(module_r8.difficulty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r8.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r8.duration, " hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r8.lessons, " lessons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", module_r8.progress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", module_r8.progress === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r8.progress === 100 ? "Completed" : module_r8.progress > 0 ? "Continue" : "Start Module", " ");
} }
function PeerCounselorAcademyComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Required Training Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeerCounselorAcademyComponent_div_42_app_card_4_Template, 28, 13, "app-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.requiredModules);
} }
function PeerCounselorAcademyComponent_div_43_app_card_4_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", module_r14.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", module_r14.progress, "%");
} }
function PeerCounselorAcademyComponent_div_43_app_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-badge", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Elective");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "polyline", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polyline", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PeerCounselorAcademyComponent_div_43_app_card_4_div_24_Template, 5, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorAcademyComponent_div_43_app_card_4_Template_app_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const module_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.startModule(module_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bg-" + module_r14.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", module_r14.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r13.getDifficultyVariant(module_r14.difficulty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r14.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r14.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r14.duration, " hours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r14.lessons, " lessons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", module_r14.progress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", module_r14.progress === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", module_r14.progress === 100 ? "Completed" : module_r14.progress > 0 ? "Continue" : "Enroll", " ");
} }
function PeerCounselorAcademyComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Elective Modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeerCounselorAcademyComponent_div_43_app_card_4_Template, 28, 11, "app-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.electiveModules);
} }
function PeerCounselorAcademyComponent_div_44_div_3_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polyline", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polyline", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeerCounselorAcademyComponent_div_44_div_3_app_card_1_Template_app_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const cert_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.downloadCertificate(cert_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cert_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Issued: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 5, cert_r23.issuedDate, "MMM d, yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r23.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Expires: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 8, cert_r23.expiryDate, "MMM d, yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", cert_r23.certificateId, "");
} }
function PeerCounselorAcademyComponent_div_44_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeerCounselorAcademyComponent_div_44_div_3_app_card_1_Template, 25, 11, "app-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.certificates);
} }
function PeerCounselorAcademyComponent_div_44_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polyline", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No certificates yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Complete required training modules to earn certificates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PeerCounselorAcademyComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Earned Certificates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PeerCounselorAcademyComponent_div_44_div_3_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeerCounselorAcademyComponent_div_44_ng_template_4_Template, 11, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.certificates.length > 0)("ngIfElse", _r20);
} }
class PeerCounselorAcademyComponent {
    constructor(peerCounselorService) {
        this.peerCounselorService = peerCounselorService;
        this.user = { firstName: 'Jane' };
        this.activeTab = 'required';
        this.tabs = [
            { id: 'required', label: 'Required' },
            { id: 'elective', label: 'Elective' },
            { id: 'certificates', label: 'Certificates' }
        ];
        this.requiredModules = [];
        this.electiveModules = [];
        this.certificates = [];
        this.trainingProgress = 65;
        this.completedModules = 8;
        this.totalModules = 12;
        this.completedHours = 24;
        this.certificatesEarned = 3;
        this.currentStreak = 12;
        this.navItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'dashboard' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book', active: true },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
        this.bottomNavItems = [
            { label: 'Dashboard', route: '/peer-counselor', icon: 'home' },
            { label: 'Requests', route: '/peer-counselor/requests', icon: 'inbox' },
            { label: 'Chat', route: '/peer-counselor/chat', icon: 'chat' },
            { label: 'Training', route: '/peer-counselor/academy', icon: 'book', active: true },
            { label: 'Profile', route: '/peer-counselor/profile', icon: 'user' }
        ];
    }
    ngOnInit() {
        this.requiredModules = this.peerCounselorService.getRequiredTrainingModules();
        this.electiveModules = this.peerCounselorService.getElectiveTrainingModules();
        this.certificates = this.peerCounselorService.getCertificates();
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
    }
    getDifficultyVariant(difficulty) {
        const variants = {
            'beginner': 'success',
            'intermediate': 'warning',
            'advanced': 'error'
        };
        return variants[difficulty] || 'secondary';
    }
    startModule(module) {
        console.log('Start module:', module.id);
    }
    downloadCertificate(cert) {
        console.log('Download certificate:', cert.certificateId);
    }
}
PeerCounselorAcademyComponent.ɵfac = function PeerCounselorAcademyComponent_Factory(t) { return new (t || PeerCounselorAcademyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_1__["PeerCounselorService"])); };
PeerCounselorAcademyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeerCounselorAcademyComponent, selectors: [["app-peer-counselor-academy"]], decls: 46, vars: 15, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "training-overview", "mb-8"], ["variant", "elevated", "padding", "lg"], [1, "overview-header"], [1, "overview-progress"], [1, "progress-circle"], ["viewBox", "0 0 100 100"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke", "var(--color-gray-200)", "stroke-width", "10"], ["cx", "50", "cy", "50", "r", "45", "fill", "none", "stroke", "var(--color-primary)", "stroke-width", "10", "stroke-dasharray", "283", 1, "progress-ring"], [1, "progress-text"], [1, "text-gray-600"], [1, "overview-stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], ["role", "tablist", 1, "tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [3, "items"], ["role", "tab", 1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "section-title", "mb-4"], [1, "module-grid"], ["variant", "elevated", "padding", "lg", "class", "module-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "lg", 1, "module-card"], [1, "module-header"], [1, "module-icon", 3, "ngClass"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "innerHTML"], ["size", "sm", 3, "variant"], ["size", "sm", 1, "ml-2", 3, "variant"], [1, "mt-4"], [1, "text-gray-600", "text-sm", "mt-2"], [1, "module-meta", "mt-4"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["class", "progress-bar-custom mt-4", 4, "ngIf"], [1, "module-actions", "mt-4"], ["variant", "primary", 1, "w-full", 3, "disabled", "click"], [1, "progress-bar-custom", "mt-4"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-label"], ["variant", "secondary", "size", "sm"], ["variant", "outline", 1, "w-full", 3, "disabled", "click"], ["class", "certificate-grid", 4, "ngIf", "ngIfElse"], ["noCertificates", ""], [1, "certificate-grid"], ["variant", "elevated", "padding", "lg", "class", "certificate-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "lg", 1, "certificate-card"], [1, "certificate-header"], [1, "cert-icon", "bg-warning-light"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], [1, "text-sm", "text-gray-600"], [1, "text-gray-600", "mt-4"], [1, "certificate-meta", "mt-4"], ["variant", "outline", "size", "sm", 1, "mt-4", "w-full", 3, "click"], [1, "text-center", "py-12"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], [1, "text-gray-600", "mt-2"]], template: function PeerCounselorAcademyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Training Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Complete your peer counselor training and professional development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Overall Training Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hours Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Day Streak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PeerCounselorAcademyComponent_button_41_Template, 2, 3, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PeerCounselorAcademyComponent_div_42_Template, 5, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PeerCounselorAcademyComponent_div_43_Template, 5, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PeerCounselorAcademyComponent_div_44_Template, 6, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-bottom-nav", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-dashoffset", 283 - 283 * ctx.trainingProgress / 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.trainingProgress, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.completedModules, " of ", ctx.totalModules, " modules completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.completedHours, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.certificatesEarned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentStreak);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "elective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bottomNavItems);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_5__["BottomNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__["BadgeComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); padding-bottom: calc(var(--space-6) + var(--bottom-nav-height)); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .training-overview[_ngcontent-%COMP%] { }\n    .overview-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-6); }\n    .overview-progress[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-6); }\n    .progress-circle[_ngcontent-%COMP%] { position: relative; width: 100px; height: 100px; flex-shrink: 0; }\n    .progress-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 100%; height: 100%; transform: rotate(-90deg); }\n    .progress-ring[_ngcontent-%COMP%] { transition: stroke-dashoffset 0.5s ease; }\n    .progress-text[_ngcontent-%COMP%] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }\n    .overview-stats[_ngcontent-%COMP%] { display: flex; gap: var(--space-8); }\n    .stat[_ngcontent-%COMP%] { text-align: center; }\n    .stat-value[_ngcontent-%COMP%] { display: block; font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }\n    .stat-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .tab-content[_ngcontent-%COMP%] { animation: fadeIn var(--transition-normal); }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }\n    .module-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .module-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .module-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .module-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .module-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; }\n    .module-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }\n    .ml-2[_ngcontent-%COMP%] { margin-left: var(--space-2); }\n    .module-meta[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); }\n    .module-actions[_ngcontent-%COMP%] { margin-top: auto; }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .certificate-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .certificate-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .certificate-card[_ngcontent-%COMP%] { }\n    .certificate-header[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); }\n    .cert-icon[_ngcontent-%COMP%] { width: 56px; height: 56px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .certificate-meta[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }\n    .bg-secondary-100[_ngcontent-%COMP%] { background: var(--color-secondary-100); color: var(--color-secondary); }\n    .bg-accent-100[_ngcontent-%COMP%] { background: var(--color-accent-100); color: var(--color-accent); }\n    .bg-warning-light[_ngcontent-%COMP%] { background: var(--color-warning-light); color: var(--color-warning); }\n    .bg-success-light[_ngcontent-%COMP%] { background: var(--color-success-light); color: var(--color-success); }\n    .bg-error-light[_ngcontent-%COMP%] { background: var(--color-error-light); color: var(--color-error); }\n    .bg-gray-100[_ngcontent-%COMP%] { background: var(--color-gray-100); color: var(--color-gray-600); }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mb-8[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .py-12[_ngcontent-%COMP%] { padding-top: var(--space-12); padding-bottom: var(--space-12); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mx-auto[_ngcontent-%COMP%] { margin-left: auto; margin-right: auto; }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-xs[_ngcontent-%COMP%] { font-size: var(--font-size-xs); }\n    .progress-bar-custom[_ngcontent-%COMP%] { }\n    .progress-track[_ngcontent-%COMP%] { height: 6px; background: var(--color-gray-200); border-radius: var(--radius-full); overflow: hidden; }\n    .progress-fill[_ngcontent-%COMP%] { height: 100%; background: var(--color-primary); border-radius: var(--radius-full); transition: width var(--transition-normal); }\n    .progress-label[_ngcontent-%COMP%] { display: block; text-align: right; font-size: var(--font-size-xs); color: var(--color-gray-500); margin-top: var(--space-1); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorAcademyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peer-counselor-academy',
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
            <h1 class="page-title">Training Academy</h1>
            <p class="page-description">Complete your peer counselor training and professional development</p>
          </div>

          <div class="training-overview mb-8">
            <app-card variant="elevated" padding="lg">
              <div class="overview-header">
                <div class="overview-progress">
                  <div class="progress-circle">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-gray-200)" stroke-width="10"></circle>
                      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-primary)" stroke-width="10" stroke-dasharray="283" [attr.stroke-dashoffset]="283 - (283 * trainingProgress / 100)" class="progress-ring"></circle>
                    </svg>
                    <span class="progress-text">{{ trainingProgress }}%</span>
                  </div>
                  <div>
                    <h3>Overall Training Progress</h3>
                    <p class="text-gray-600">{{ completedModules }} of {{ totalModules }} modules completed</p>
                  </div>
                </div>
                <div class="overview-stats">
                  <div class="stat">
                    <span class="stat-value">{{ completedHours }}h</span>
                    <span class="stat-label">Hours Completed</span>
                  </div>
                  <div class="stat">
                    <span class="stat-value">{{ certificatesEarned }}</span>
                    <span class="stat-label">Certificates</span>
                  </div>
                  <div class="stat">
                    <span class="stat-value">{{ currentStreak }}</span>
                    <span class="stat-label">Day Streak</span>
                  </div>
                </div>
              </div>
            </app-card>
          </div>

          <div class="tabs" role="tablist">
            <button *ngFor="let tab of tabs" role="tab" [class.active]="activeTab === tab.id" (click)="setActiveTab(tab.id)" class="tab-btn">
              {{ tab.label }}
            </button>
          </div>

          <div *ngIf="activeTab === 'required'" class="tab-content">
            <h3 class="section-title mb-4">Required Training Modules</h3>
            <div class="module-grid">
              <app-card *ngFor="let module of requiredModules" variant="elevated" padding="lg" class="module-card">
                <div class="module-header">
                  <div class="module-icon" [ngClass]="'bg-' + module.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="module.icon"></svg>
                  </div>
                  <div>
                    <app-badge [variant]="module.required ? 'primary' : 'secondary'" size="sm">{{ module.required ? 'Required' : 'Optional' }}</app-badge>
                    <app-badge [variant]="getDifficultyVariant(module.difficulty)" size="sm" class="ml-2">{{ module.difficulty }}</app-badge>
                  </div>
                </div>
                <h4 class="mt-4">{{ module.title }}</h4>
                <p class="text-gray-600 text-sm mt-2">{{ module.description }}</p>
                <div class="module-meta mt-4">
                  <span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {{ module.duration }} hours
                  </span>
<span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {{ module.lessons }} lessons
                  </span>
                </div>
                <div class="progress-bar-custom mt-4" *ngIf="module.progress > 0">
                  <div class="progress-track">
                    <div class="progress-fill" [style.width.%]="module.progress"></div>
                  </div>
                  <span class="progress-label">{{ module.progress }}%</span>
                </div>
                <div class="module-actions mt-4">
                  <app-button variant="primary" class="w-full" (click)="startModule(module)" [disabled]="module.progress === 100">
                    {{ module.progress === 100 ? 'Completed' : module.progress > 0 ? 'Continue' : 'Start Module' }}
                  </app-button>
                </div>
              </app-card>
            </div>
          </div>

          <div *ngIf="activeTab === 'elective'" class="tab-content">
            <h3 class="section-title mb-4">Elective Modules</h3>
            <div class="module-grid">
              <app-card *ngFor="let module of electiveModules" variant="elevated" padding="lg" class="module-card">
                <div class="module-header">
                  <div class="module-icon" [ngClass]="'bg-' + module.iconColor">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [innerHTML]="module.icon"></svg>
                  </div>
                  <div>
                    <app-badge variant="secondary" size="sm">Elective</app-badge>
                    <app-badge [variant]="getDifficultyVariant(module.difficulty)" size="sm" class="ml-2">{{ module.difficulty }}</app-badge>
                  </div>
                </div>
                <h4 class="mt-4">{{ module.title }}</h4>
                <p class="text-gray-600 text-sm mt-2">{{ module.description }}</p>
                <div class="module-meta mt-4">
                  <span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {{ module.duration }} hours
                  </span>
<span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {{ module.lessons }} lessons
                  </span>
                </div>
                <div class="progress-bar-custom mt-4" *ngIf="module.progress > 0">
                  <div class="progress-track">
                    <div class="progress-fill" [style.width.%]="module.progress"></div>
                  </div>
                  <span class="progress-label">{{ module.progress }}%</span>
                </div>
                <div class="module-actions mt-4">
                  <app-button variant="outline" class="w-full" (click)="startModule(module)" [disabled]="module.progress === 100">
                    {{ module.progress === 100 ? 'Completed' : module.progress > 0 ? 'Continue' : 'Enroll' }}
                  </app-button>
                </div>
              </app-card>
            </div>
          </div>

          <div *ngIf="activeTab === 'certificates'" class="tab-content">
            <h3 class="section-title mb-4">Earned Certificates</h3>
            <div class="certificate-grid" *ngIf="certificates.length > 0; else noCertificates">
              <app-card *ngFor="let cert of certificates" variant="elevated" padding="lg" class="certificate-card">
                <div class="certificate-header">
                  <div class="cert-icon bg-warning-light">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4>{{ cert.title }}</h4>
                    <p class="text-sm text-gray-600">Issued: {{ cert.issuedDate | date:'MMM d, yyyy' }}</p>
                  </div>
                </div>
                <p class="text-gray-600 mt-4">{{ cert.description }}</p>
                <div class="certificate-meta mt-4">
                  <span class="meta-item">Expires: {{ cert.expiryDate | date:'MMM d, yyyy' }}</span>
                  <span class="meta-item">ID: {{ cert.certificateId }}</span>
                </div>
                <app-button variant="outline" size="sm" class="mt-4 w-full" (click)="downloadCertificate(cert)">Download</app-button>
              </app-card>
            </div>
            <ng-template #noCertificates>
              <div class="text-center py-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <h3 class="mt-4">No certificates yet</h3>
                <p class="text-gray-600 mt-2">Complete required training modules to earn certificates</p>
              </div>
            </ng-template>
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
    .training-overview { }
    .overview-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-6); }
    .overview-progress { display: flex; align-items: center; gap: var(--space-6); }
    .progress-circle { position: relative; width: 100px; height: 100px; flex-shrink: 0; }
    .progress-circle svg { width: 100%; height: 100%; transform: rotate(-90deg); }
    .progress-ring { transition: stroke-dashoffset 0.5s ease; }
    .progress-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }
    .overview-stats { display: flex; gap: var(--space-8); }
    .stat { text-align: center; }
    .stat-value { display: block; font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }
    .stat-label { font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .tabs { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .tab-content { animation: fadeIn var(--transition-normal); }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }
    .module-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 768px) { .module-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .module-grid { grid-template-columns: repeat(3, 1fr); } }
    .module-card { display: flex; flex-direction: column; }
    .module-header { display: flex; align-items: flex-start; justify-content: space-between; }
    .module-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .ml-2 { margin-left: var(--space-2); }
    .module-meta { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); }
    .module-actions { margin-top: auto; }
    .w-full { width: 100%; }
    .certificate-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 768px) { .certificate-grid { grid-template-columns: repeat(2, 1fr); } }
    .certificate-card { }
    .certificate-header { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); }
    .cert-icon { width: 56px; height: 56px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .certificate-meta { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
    .bg-secondary-100 { background: var(--color-secondary-100); color: var(--color-secondary); }
    .bg-accent-100 { background: var(--color-accent-100); color: var(--color-accent); }
    .bg-warning-light { background: var(--color-warning-light); color: var(--color-warning); }
    .bg-success-light { background: var(--color-success-light); color: var(--color-success); }
    .bg-error-light { background: var(--color-error-light); color: var(--color-error); }
    .bg-gray-100 { background: var(--color-gray-100); color: var(--color-gray-600); }
    .mt-4 { margin-top: var(--space-4); }
    .mb-8 { margin-bottom: var(--space-8); }
    .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .text-gray-600 { color: var(--color-gray-600); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-xs { font-size: var(--font-size-xs); }
    .progress-bar-custom { }
    .progress-track { height: 6px; background: var(--color-gray-200); border-radius: var(--radius-full); overflow: hidden; }
    .progress-fill { height: 100%; background: var(--color-primary); border-radius: var(--radius-full); transition: width var(--transition-normal); }
    .progress-label { display: block; text-align: right; font-size: var(--font-size-xs); color: var(--color-gray-500); margin-top: var(--space-1); }
  `]
            }]
    }], function () { return [{ type: _core_services_peer_counselor_service__WEBPACK_IMPORTED_MODULE_1__["PeerCounselorService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=peer-counselor-peer-counselor-module.js.map