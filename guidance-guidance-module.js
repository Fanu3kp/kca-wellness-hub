(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guidance-guidance-module"],{

/***/ "9A6j":
/*!**********************************************************!*\
  !*** ./src/app/guidance/guidance-dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: GuidanceDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidanceDashboardComponent", function() { return GuidanceDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/button/button.component */ "VkHG");





class GuidanceDashboardComponent {
    constructor() {
        this.user = { firstName: 'Dr. James' };
        this.navItems = [
            { label: 'Dashboard', route: '/guidance', icon: 'dashboard', active: true },
            { label: 'Escalations', route: '/guidance/escalations', icon: 'alert-triangle' },
            { label: 'Appointments', route: '/guidance/appointments', icon: 'calendar' },
            { label: 'Reports', route: '/guidance/reports', icon: 'bar-chart' }
        ];
    }
}
GuidanceDashboardComponent.ɵfac = function GuidanceDashboardComponent_Factory(t) { return new (t || GuidanceDashboardComponent)(); };
GuidanceDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuidanceDashboardComponent, selectors: [["app-guidance-dashboard"]], decls: 31, vars: 3, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg"], [1, "card-title"], [1, "card-text"], ["variant", "primary", 1, "mt-4"]], template: function GuidanceDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Guidance & Counselling Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Professional counseling management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Escalations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Review escalated cases from peer counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View Escalations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Manage your professional appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Manage Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Peer Supervision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Supervise and support peer counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Supervise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .card-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-2); }\n    .card-text[_ngcontent-%COMP%] { color: var(--color-gray-600); margin-bottom: var(--space-4); }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-6); }\n    .grid-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidanceDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guidance-dashboard',
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
            <h1 class="page-title">Guidance & Counselling Dashboard</h1>
            <p class="page-description">Professional counseling management</p>
          </div>

          <div class="grid grid-3">
            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Escalations</h3>
              <p class="card-text">Review escalated cases from peer counselors</p>
              <app-button variant="primary" class="mt-4">View Escalations</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Appointments</h3>
              <p class="card-text">Manage your professional appointments</p>
              <app-button variant="primary" class="mt-4">Manage Appointments</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Peer Supervision</h3>
              <p class="card-text">Supervise and support peer counselors</p>
              <app-button variant="primary" class="mt-4">Supervise</app-button>
            </app-card>
          </div>
        </div>
      </main>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); }
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

/***/ "Lg+S":
/*!**************************************************************************!*\
  !*** ./src/app/guidance/appointments/guidance-appointments.component.ts ***!
  \**************************************************************************/
/*! exports provided: GuidanceAppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidanceAppointmentsComponent", function() { return GuidanceAppointmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/professional-counselling.service */ "TSJh");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ "ajRT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function GuidanceAppointmentsComponent_button_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r5.count);
} }
function GuidanceAppointmentsComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const tab_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setActiveTab(tab_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GuidanceAppointmentsComponent_button_14_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === tab_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r5.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r5.count > 0);
} }
function GuidanceAppointmentsComponent_div_15_app_card_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appt_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r11.location);
} }
function GuidanceAppointmentsComponent_div_15_app_card_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appt_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r11.notes);
} }
function GuidanceAppointmentsComponent_div_15_app_card_1_app_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_div_15_app_card_1_app_button_38_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const appt_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.joinSession(appt_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceAppointmentsComponent_div_15_app_card_1_app_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_div_15_app_card_1_app_button_39_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const appt_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.editAppointment(appt_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceAppointmentsComponent_div_15_app_card_1_app_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_div_15_app_card_1_app_button_40_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const appt_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.cancelAppointment(appt_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceAppointmentsComponent_div_15_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-badge", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date & Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GuidanceAppointmentsComponent_div_15_app_card_1_div_33_Template, 5, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GuidanceAppointmentsComponent_div_15_app_card_1_div_34_Template, 5, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_div_15_app_card_1_Template_app_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const appt_r11 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.viewDetails(appt_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GuidanceAppointmentsComponent_div_15_app_card_1_app_button_38_Template, 2, 0, "app-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GuidanceAppointmentsComponent_div_15_app_card_1_app_button_39_Template, 2, 0, "app-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, GuidanceAppointmentsComponent_div_15_app_card_1_app_button_40_Template, 2, 0, "app-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const appt_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (appt_r11.studentAvatar || "assets/images/avatars/student-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r11.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", appt_r11.studentProgram, " \u00B7 Year ", appt_r11.studentYear, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r10.getStatusVariant(appt_r11.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r11.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 17, appt_r11.date, "EEEE, MMM d, yyyy"), " at ", appt_r11.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", appt_r11.duration, " minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r11.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appt_r11.isVirtual ? "Virtual" : "In-Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r11.location && !appt_r11.isVirtual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r11.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r11.isVirtual && appt_r11.status === "confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r11.status !== "completed" && appt_r11.status !== "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appt_r11.status !== "completed" && appt_r11.status !== "cancelled");
} }
function GuidanceAppointmentsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuidanceAppointmentsComponent_div_15_app_card_1_Template, 41, 20, "app-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredAppointments);
} }
function GuidanceAppointmentsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No appointments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeTab === "upcoming" ? "No upcoming appointments" : "No " + ctx_r3.activeTab + " appointments");
} }
function GuidanceAppointmentsComponent_app_modal_18_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", student_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", student_r32.name, " (", student_r32.program, ")");
} }
function GuidanceAppointmentsComponent_app_modal_18_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_div_55_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.newAppointment.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.newAppointment.location);
} }
function GuidanceAppointmentsComponent_app_modal_18_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function GuidanceAppointmentsComponent_app_modal_18_Template_app_modal_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.closeCreateModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.newAppointment.studentId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GuidanceAppointmentsComponent_app_modal_18_option_8_Template, 2, 3, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.newAppointment.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.newAppointment.time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duration (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.newAppointment.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.newAppointment.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Initial Consultation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Follow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Crisis Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.newAppointment.isVirtual = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Virtual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.newAppointment.isVirtual = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "In-Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, GuidanceAppointmentsComponent_app_modal_18_div_55_Template, 4, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceAppointmentsComponent_app_modal_18_Template_textarea_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.newAppointment.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "app-button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_app_modal_18_Template_app_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.closeCreateModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "app-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_app_modal_18_Template_app_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.createAppointment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r4.createModalOpen)("title", "Create New Appointment")("size", "lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.availableStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.date)("min", ctx_r4.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.isVirtual)("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.isVirtual)("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.newAppointment.isVirtual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAppointment.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r4.creating);
} }
class GuidanceAppointmentsComponent {
    constructor(counsellingService) {
        this.counsellingService = counsellingService;
        this.user = { firstName: 'Dr. James' };
        this.allAppointments = [];
        this.filteredAppointments = [];
        this.activeTab = 'upcoming';
        this.tabs = [
            { id: 'upcoming', label: 'Upcoming', count: 0 },
            { id: 'past', label: 'Past', count: 0 },
            { id: 'cancelled', label: 'Cancelled', count: 0 }
        ];
        this.createModalOpen = false;
        this.creating = false;
        this.today = new Date().toISOString().split('T')[0];
        this.newAppointment = {
            studentId: '',
            date: '',
            time: '',
            duration: 60,
            type: 'followup',
            isVirtual: true,
            location: '',
            notes: ''
        };
        this.availableStudents = [
            { id: 'STU-2024-001', name: 'Alice Njeri', program: 'Computer Science' },
            { id: 'STU-2024-002', name: 'Brian Otieno', program: 'Business Administration' },
            { id: 'STU-2024-003', name: 'Catherine Muthoni', program: 'Psychology' },
            { id: 'STU-2024-004', name: 'David Kimani', program: 'Engineering' },
            { id: 'STU-2024-005', name: 'Esther Wanjiku', program: 'Law' }
        ];
        this.navItems = [
            { label: 'Dashboard', route: '/guidance', icon: 'dashboard' },
            { label: 'Escalations', route: '/guidance/escalations', icon: 'alert-triangle' },
            { label: 'Appointments', route: '/guidance/appointments', icon: 'calendar', active: true },
            { label: 'Supervision', route: '/guidance/supervision', icon: 'users' },
            { label: 'Reports', route: '/guidance/reports', icon: 'bar-chart' }
        ];
    }
    ngOnInit() {
        this.allAppointments = this.counsellingService.getAllAppointments();
        this.updateTabCounts();
        this.filterAppointments();
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
        this.filterAppointments();
    }
    filterAppointments() {
        const now = new Date();
        this.filteredAppointments = this.allAppointments.filter(a => {
            const apptDate = new Date(a.date);
            switch (this.activeTab) {
                case 'upcoming':
                    return apptDate >= now && a.status !== 'cancelled';
                case 'past':
                    return apptDate < now || a.status === 'completed';
                case 'cancelled':
                    return a.status === 'cancelled';
                default:
                    return true;
            }
        }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    updateTabCounts() {
        const now = new Date();
        this.tabs[0].count = this.allAppointments.filter(a => new Date(a.date) >= now && a.status !== 'cancelled').length;
        this.tabs[1].count = this.allAppointments.filter(a => new Date(a.date) < now || a.status === 'completed').length;
        this.tabs[2].count = this.allAppointments.filter(a => a.status === 'cancelled').length;
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
    viewDetails(appt) {
        console.log('View appointment:', appt.id);
    }
    joinSession(appt) {
        console.log('Join virtual session:', appt.id);
    }
    editAppointment(appt) {
        console.log('Edit appointment:', appt.id);
    }
    cancelAppointment(appt) {
        this.counsellingService.cancelAppointment(appt.id);
        this.allAppointments = this.counsellingService.getAllAppointments();
        this.updateTabCounts();
        this.filterAppointments();
    }
    openCreateModal() {
        this.createModalOpen = true;
        this.newAppointment = {
            studentId: '',
            date: this.today,
            time: '10:00',
            duration: 60,
            type: 'followup',
            isVirtual: true,
            location: '',
            notes: ''
        };
    }
    closeCreateModal() {
        this.createModalOpen = false;
    }
    createAppointment() {
        var _a, _b;
        this.creating = true;
        const appointment = Object.assign(Object.assign({}, this.newAppointment), { id: 'appt-' + Date.now(), studentName: (_a = this.availableStudents.find(s => s.id === this.newAppointment.studentId)) === null || _a === void 0 ? void 0 : _a.name, studentProgram: (_b = this.availableStudents.find(s => s.id === this.newAppointment.studentId)) === null || _b === void 0 ? void 0 : _b.program, studentYear: 2, status: 'confirmed', counsellorId: 'gs-001' });
        this.counsellingService.bookAppointment(appointment).then(() => {
            this.creating = false;
            this.closeCreateModal();
            this.allAppointments = this.counsellingService.getAllAppointments();
            this.updateTabCounts();
            this.filterAppointments();
        });
    }
}
GuidanceAppointmentsComponent.ɵfac = function GuidanceAppointmentsComponent_Factory(t) { return new (t || GuidanceAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"])); };
GuidanceAppointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuidanceAppointmentsComponent, selectors: [["app-guidance-appointments"]], decls: 19, vars: 7, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "page-description"], ["variant", "primary", 3, "click"], ["role", "tablist", 1, "filter-tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "appointments-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [3, "isOpen", "title", "size", "close", 4, "ngIf"], ["role", "tab", 1, "tab-btn", 3, "click"], ["class", "badge", 4, "ngIf"], [1, "badge"], [1, "appointments-list"], ["variant", "elevated", "padding", "md", "class", "appointment-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "appointment-card"], [1, "appointment-header"], [1, "appointment-student"], [1, "avatar"], [1, "text-sm", "text-gray-600"], ["size", "sm", 3, "variant"], [1, "appointment-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-row", 4, "ngIf"], [1, "appointment-actions", "mt-4"], ["variant", "outline", "size", "sm", 3, "click"], ["variant", "primary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "secondary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "error", "size", "sm", "class", "ml-auto", 3, "click", 4, "ngIf"], ["variant", "primary", "size", "sm", 3, "click"], ["variant", "secondary", "size", "sm", 3, "click"], ["variant", "error", "size", "sm", 1, "ml-auto", 3, "click"], [1, "text-center", "py-12"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "mt-4"], [1, "text-gray-600", "mt-2"], [3, "isOpen", "title", "size", "close"], [1, "create-form"], [1, "form-group"], [1, "form-label"], ["required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row"], ["type", "date", "required", "", 1, "form-input", 3, "ngModel", "min", "ngModelChange"], ["type", "time", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-input", 3, "ngModel", "ngModelChange"], ["value", "30"], ["value", "45"], ["value", "60"], ["value", "90"], ["value", "initial"], ["value", "followup"], ["value", "crisis"], ["value", "assessment"], [1, "radio-group"], [1, "radio-label"], ["type", "radio", "name", "mode", 3, "ngModel", "value", "ngModelChange"], ["class", "form-group", 4, "ngIf"], ["rows", "3", "placeholder", "Appointment notes...", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "modal-actions"], ["variant", "outline", 3, "click"], ["variant", "primary", 3, "loading", "click"], [3, "value"], ["type", "text", "placeholder", "Room/Building", 1, "form-input", 3, "ngModel", "ngModelChange"]], template: function GuidanceAppointmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Manage your professional counseling appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceAppointmentsComponent_Template_app_button_click_11_listener() { return ctx.openCreateModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GuidanceAppointmentsComponent_button_14_Template, 3, 4, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GuidanceAppointmentsComponent_div_15_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GuidanceAppointmentsComponent_ng_template_16_Template, 8, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GuidanceAppointmentsComponent_app_modal_18_Template, 65, 17, "app-modal", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredAppointments.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createModalOpen);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__["BadgeComponent"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .header-content[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .filter-tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .badge[_ngcontent-%COMP%] { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }\n    .appointments-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .appointment-card[_ngcontent-%COMP%] { }\n    .appointment-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-4); }\n    .appointment-student[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); }\n    .avatar[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .appointment-details[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4); }\n    .detail-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; padding: var(--space-2) 0; border-bottom: 1px solid var(--color-gray-100); }\n    .detail-row[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n    .detail-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-500); }\n    .detail-value[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-900); text-align: right; }\n    .appointment-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .ml-auto[_ngcontent-%COMP%] { margin-left: auto; }\n    .form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-1); }\n    .form-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }\n    .form-input[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }\n    .form-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .radio-group[_ngcontent-%COMP%] { display: flex; gap: var(--space-6); }\n    .radio-label[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); cursor: pointer; font-size: var(--font-size-sm); }\n    .modal-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-4); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .py-12[_ngcontent-%COMP%] { padding-top: var(--space-12); padding-bottom: var(--space-12); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mx-auto[_ngcontent-%COMP%] { margin-left: auto; margin-right: auto; }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidanceAppointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guidance-appointments',
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
            <div class="header-content">
              <div>
                <h1 class="page-title">Appointments</h1>
                <p class="page-description">Manage your professional counseling appointments</p>
              </div>
              <app-button variant="primary" (click)="openCreateModal()">New Appointment</app-button>
            </div>
          </div>

          <div class="filter-tabs" role="tablist">
            <button *ngFor="let tab of tabs" role="tab" [class.active]="activeTab === tab.id" (click)="setActiveTab(tab.id)" class="tab-btn">
              {{ tab.label }} <span class="badge" *ngIf="tab.count > 0">{{ tab.count }}</span>
            </button>
          </div>

          <div class="appointments-list" *ngIf="filteredAppointments.length > 0; else emptyState">
            <app-card *ngFor="let appt of filteredAppointments" variant="elevated" padding="md" class="appointment-card">
              <div class="appointment-header">
                <div class="appointment-student">
                  <div class="avatar" [style.background-image]="'url(' + (appt.studentAvatar || 'assets/images/avatars/student-default.svg') + ')'"></div>
                  <div>
                    <h4>{{ appt.studentName }}</h4>
                    <p class="text-sm text-gray-600">{{ appt.studentProgram }} · Year {{ appt.studentYear }}</p>
                  </div>
                </div>
                <app-badge [variant]="getStatusVariant(appt.status)" size="sm">{{ appt.status }}</app-badge>
              </div>
              <div class="appointment-details">
                <div class="detail-row">
                  <span class="detail-label">Date & Time</span>
                  <span class="detail-value">{{ appt.date | date:'EEEE, MMM d, yyyy' }} at {{ appt.time }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Duration</span>
                  <span class="detail-value">{{ appt.duration }} minutes</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Type</span>
                  <span class="detail-value">{{ appt.type }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Mode</span>
                  <span class="detail-value">{{ appt.isVirtual ? 'Virtual' : 'In-Person' }}</span>
                </div>
                <div class="detail-row" *ngIf="appt.location && !appt.isVirtual">
                  <span class="detail-label">Location</span>
                  <span class="detail-value">{{ appt.location }}</span>
                </div>
                <div class="detail-row" *ngIf="appt.notes">
                  <span class="detail-label">Notes</span>
                  <span class="detail-value">{{ appt.notes }}</span>
                </div>
              </div>
              <div class="appointment-actions mt-4">
                <app-button variant="outline" size="sm" (click)="viewDetails(appt)">View</app-button>
                <app-button variant="primary" size="sm" (click)="joinSession(appt)" *ngIf="appt.isVirtual && appt.status === 'confirmed'">Join Session</app-button>
                <app-button variant="secondary" size="sm" (click)="editAppointment(appt)" *ngIf="appt.status !== 'completed' && appt.status !== 'cancelled'">Edit</app-button>
                <app-button variant="error" size="sm" (click)="cancelAppointment(appt)" class="ml-auto" *ngIf="appt.status !== 'completed' && appt.status !== 'cancelled'">Cancel</app-button>
              </div>
            </app-card>
          </div>
          <ng-template #emptyState>
            <div class="text-center py-12">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <h3 class="mt-4">No appointments</h3>
              <p class="text-gray-600 mt-2">{{ activeTab === 'upcoming' ? 'No upcoming appointments' : 'No ' + activeTab + ' appointments' }}</p>
            </div>
          </ng-template>
        </div>
      </main>

      <app-modal 
        *ngIf="createModalOpen"
        [isOpen]="createModalOpen"
        [title]="'Create New Appointment'"
        [size]="'lg'"
        (close)="closeCreateModal()"
      >
        <div class="create-form">
          <div class="form-group">
            <label class="form-label">Student</label>
            <select [(ngModel)]="newAppointment.studentId" class="form-input" required>
              <option value="">Select student</option>
              <option *ngFor="let student of availableStudents" [value]="student.id">{{ student.name }} ({{ student.program }})</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Date</label>
              <input type="date" [(ngModel)]="newAppointment.date" class="form-input" [min]="today" required>
            </div>
            <div class="form-group">
              <label class="form-label">Time</label>
              <input type="time" [(ngModel)]="newAppointment.time" class="form-input" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Duration (min)</label>
              <select [(ngModel)]="newAppointment.duration" class="form-input">
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
                <option value="90">90</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Type</label>
              <select [(ngModel)]="newAppointment.type" class="form-input">
                <option value="initial">Initial Consultation</option>
                <option value="followup">Follow-up</option>
                <option value="crisis">Crisis Session</option>
                <option value="assessment">Assessment</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Mode</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="mode" [(ngModel)]="newAppointment.isVirtual" [value]="true">
                <span>Virtual</span>
              </label>
              <label class="radio-label">
                <input type="radio" name="mode" [(ngModel)]="newAppointment.isVirtual" [value]="false">
                <span>In-Person</span>
              </label>
            </div>
          </div>
          <div class="form-group" *ngIf="!newAppointment.isVirtual">
            <label class="form-label">Location</label>
            <input type="text" [(ngModel)]="newAppointment.location" class="form-input" placeholder="Room/Building">
          </div>
          <div class="form-group">
            <label class="form-label">Notes</label>
            <textarea [(ngModel)]="newAppointment.notes" rows="3" class="form-input" placeholder="Appointment notes..."></textarea>
          </div>
          <div class="modal-actions">
            <app-button variant="outline" (click)="closeCreateModal()">Cancel</app-button>
            <app-button variant="primary" (click)="createAppointment()" [loading]="creating">Create</app-button>
          </div>
        </div>
      </app-modal>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .header-content { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .filter-tabs { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .badge { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }
    .appointments-list { display: flex; flex-direction: column; gap: var(--space-4); }
    .appointment-card { }
    .appointment-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-4); }
    .appointment-student { display: flex; gap: var(--space-3); }
    .avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .appointment-details { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4); }
    .detail-row { display: flex; justify-content: space-between; padding: var(--space-2) 0; border-bottom: 1px solid var(--color-gray-100); }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { font-size: var(--font-size-sm); color: var(--color-gray-500); }
    .detail-value { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-900); text-align: right; }
    .appointment-actions { display: flex; gap: var(--space-2); }
    .ml-auto { margin-left: auto; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
    .form-group { display: flex; flex-direction: column; gap: var(--space-1); }
    .form-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }
    .form-input { padding: var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
    .form-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .radio-group { display: flex; gap: var(--space-6); }
    .radio-label { display: flex; align-items: center; gap: var(--space-2); cursor: pointer; font-size: var(--font-size-sm); }
    .modal-actions { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-4); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-gray-600 { color: var(--color-gray-600); }
    .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mt-4 { margin-top: var(--space-4); }
  `]
            }]
    }], function () { return [{ type: _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"] }]; }, null); })();


/***/ }),

/***/ "PM5f":
/*!************************************************************************!*\
  !*** ./src/app/guidance/supervision/guidance-supervision.component.ts ***!
  \************************************************************************/
/*! exports provided: GuidanceSupervisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidanceSupervisionComponent", function() { return GuidanceSupervisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/professional-counselling.service */ "TSJh");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ "ajRT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










function GuidanceSupervisionComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const tab_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setActiveTab(tab_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeTab === tab_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r5.label, " ");
} }
function GuidanceSupervisionComponent_div_56_app_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-badge", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sessions This Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Avg Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Supervision");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_56_app_card_4_Template_app_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const pc_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.viewCounselorDetails(pc_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_56_app_card_4_Template_app_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const pc_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.scheduleSupervision(pc_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Schedule Supervision");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pc_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (pc_r9.avatarUrl || "assets/images/avatars/counselor-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", pc_r9.firstName, " ", pc_r9.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", pc_r9.studentId, " \u00B7 ", pc_r9.program, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r8.getTrainingStatusVariant(pc_r9.trainingStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.formatTrainingStatus(pc_r9.trainingStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pc_r9.sessionsThisMonth || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((pc_r9.rating == null ? null : pc_r9.rating.toFixed(1)) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pc_r9.lastSupervision ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 11, pc_r9.lastSupervision, "MMM d, yyyy") : "Never");
} }
function GuidanceSupervisionComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Supervised Peer Counselors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GuidanceSupervisionComponent_div_56_app_card_4_Template, 32, 14, "app-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.supervisedCounselors);
} }
function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Focus Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r17.focusAreas.join(", "));
} }
function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r17.notes);
} }
function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_20_Template_app_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const session_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.startSession(session_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_20_Template_app_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const session_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.rescheduleSession(session_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_20_Template_app_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const session_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.cancelSession(session_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_21_Template_app_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const session_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.viewNotes(session_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceSupervisionComponent_div_57_div_3_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-badge", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_18_Template, 5, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_19_Template, 5, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_20_Template, 7, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GuidanceSupervisionComponent_div_57_div_3_app_card_1_div_21_Template, 3, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + (session_r17.counselorAvatar || "assets/images/avatars/counselor-default.svg") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r17.counselorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, session_r17.date, "EEEE, MMM d, yyyy"), " at ", session_r17.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r16.getSessionStatusVariant(session_r17.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", session_r17.duration, " min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r17.focusAreas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r17.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r17.status === "scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r17.status === "completed");
} }
function GuidanceSupervisionComponent_div_57_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuidanceSupervisionComponent_div_57_div_3_app_card_1_Template, 22, 15, "app-card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.supervisionSessions);
} }
function GuidanceSupervisionComponent_div_57_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No supervision sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schedule your first supervision session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceSupervisionComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Supervision Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GuidanceSupervisionComponent_div_57_div_3_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GuidanceSupervisionComponent_div_57_ng_template_4_Template, 8, 0, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.supervisionSessions.length > 0)("ngIfElse", _r14);
} }
function GuidanceSupervisionComponent_div_58_div_3_app_card_1_app_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_58_div_3_app_card_1_app_button_24_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const review_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.reviewCase(review_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Review Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceSupervisionComponent_div_58_div_3_app_card_1_app_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_div_58_div_3_app_card_1_app_button_25_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const review_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.viewCaseDetails(review_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceSupervisionComponent_div_58_div_3_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "polyline", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GuidanceSupervisionComponent_div_58_div_3_app_card_1_app_button_24_Template, 2, 0, "app-button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GuidanceSupervisionComponent_div_58_div_3_app_card_1_app_button_25_Template, 2, 0, "app-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r38.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", review_r38.studentProgram, " \u00B7 Referred by ", review_r38.peerCounselorName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r37.getPriorityVariant(review_r38.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r38.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r38.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 10, review_r38.submittedAt, "MMM d, yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r38.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r38.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r38.status !== "pending");
} }
function GuidanceSupervisionComponent_div_58_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuidanceSupervisionComponent_div_58_div_3_app_card_1_Template, 26, 13, "app-card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.caseReviews);
} }
function GuidanceSupervisionComponent_div_58_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polyline", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No pending case reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All caught up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceSupervisionComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Case Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GuidanceSupervisionComponent_div_58_div_3_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GuidanceSupervisionComponent_div_58_ng_template_4_Template, 8, 0, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.caseReviews.length > 0)("ngIfElse", _r35);
} }
function GuidanceSupervisionComponent_app_modal_59_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pc_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pc_r49.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", pc_r49.firstName, " ", pc_r49.lastName, "");
} }
function GuidanceSupervisionComponent_app_modal_59_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", area_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r50);
} }
function GuidanceSupervisionComponent_app_modal_59_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function GuidanceSupervisionComponent_app_modal_59_Template_app_modal_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.closeScheduleModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Peer Counselor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceSupervisionComponent_app_modal_59_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.newSession.counselorId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select counselor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GuidanceSupervisionComponent_app_modal_59_option_8_Template, 2, 3, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceSupervisionComponent_app_modal_59_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.newSession.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceSupervisionComponent_app_modal_59_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.newSession.time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Duration (minutes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceSupervisionComponent_app_modal_59_Template_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.newSession.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Focus Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceSupervisionComponent_app_modal_59_Template_select_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.newSession.focusAreas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GuidanceSupervisionComponent_app_modal_59_option_34_Template, 2, 2, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Session Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuidanceSupervisionComponent_app_modal_59_Template_textarea_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.newSession.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_app_modal_59_Template_app_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.closeScheduleModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_app_modal_59_Template_app_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.createSupervisionSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r4.scheduleModalOpen)("title", "Schedule Supervision Session")("size", "lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newSession.counselorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.supervisedCounselors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newSession.date)("min", ctx_r4.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newSession.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newSession.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newSession.focusAreas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.focusAreaOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newSession.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r4.scheduling);
} }
class GuidanceSupervisionComponent {
    constructor(counsellingService) {
        this.counsellingService = counsellingService;
        this.user = { firstName: 'Dr. James' };
        this.supervisedCounselors = [];
        this.supervisionSessions = [];
        this.caseReviews = [];
        this.activeTab = 'counselors';
        this.tabs = [
            { id: 'counselors', label: 'Counselors' },
            { id: 'sessions', label: 'Sessions' },
            { id: 'reviews', label: 'Case Reviews' }
        ];
        this.scheduleModalOpen = false;
        this.scheduling = false;
        this.today = new Date().toISOString().split('T')[0];
        this.newSession = {
            counselorId: '',
            date: '',
            time: '',
            duration: 60,
            focusAreas: [],
            notes: ''
        };
        this.focusAreaOptions = [
            'Case Review', 'Skill Development', 'Ethics', 'Boundary Management',
            'Crisis Intervention', 'Cultural Competency', 'Self-Care', 'Documentation'
        ];
        this.upcomingSessions = 0;
        this.completedThisMonth = 0;
        this.pendingReviews = 0;
        this.navItems = [
            { label: 'Dashboard', route: '/guidance', icon: 'dashboard' },
            { label: 'Escalations', route: '/guidance/escalations', icon: 'alert-triangle' },
            { label: 'Appointments', route: '/guidance/appointments', icon: 'calendar' },
            { label: 'Supervision', route: '/guidance/supervision', icon: 'users', active: true },
            { label: 'Reports', route: '/guidance/reports', icon: 'bar-chart' }
        ];
    }
    ngOnInit() {
        this.supervisedCounselors = this.counsellingService.getSupervisedCounselors('gs-001');
        this.supervisionSessions = this.counsellingService.getSupervisionSessions('gs-001');
        this.caseReviews = this.counsellingService.getCaseReviews('gs-001');
        this.updateStats();
    }
    updateStats() {
        this.upcomingSessions = this.supervisionSessions.filter(s => s.status === 'scheduled').length;
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        this.completedThisMonth = this.supervisionSessions.filter(s => s.status === 'completed' && new Date(s.date) >= startOfMonth).length;
        this.pendingReviews = this.caseReviews.filter(r => r.status === 'pending').length;
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
    }
    getTrainingStatusVariant(status) {
        const variants = {
            'not_started': 'secondary',
            'in_progress': 'warning',
            'completed': 'success',
            'certified': 'primary'
        };
        return variants[status] || 'secondary';
    }
    formatTrainingStatus(status) {
        return (status === null || status === void 0 ? void 0 : status.replace('_', ' ')) || 'Not Started';
    }
    getSessionStatusVariant(status) {
        const variants = {
            'scheduled': 'primary',
            'completed': 'success',
            'cancelled': 'error',
            'rescheduled': 'warning'
        };
        return variants[status] || 'secondary';
    }
    getPriorityVariant(priority) {
        const variants = {
            'Low': 'success',
            'Medium': 'warning',
            'High': 'error',
            'Critical': 'error'
        };
        return variants[priority] || 'secondary';
    }
    viewCounselorDetails(pc) {
        console.log('View counselor:', pc.id);
    }
    scheduleSupervision(pc) {
        this.newSession.counselorId = pc.id;
        this.openScheduleModal();
    }
    openScheduleModal() {
        this.scheduleModalOpen = true;
        this.newSession = {
            counselorId: '',
            date: this.today,
            time: '10:00',
            duration: 60,
            focusAreas: [],
            notes: ''
        };
    }
    closeScheduleModal() {
        this.scheduleModalOpen = false;
    }
    createSupervisionSession() {
        var _a, _b, _c;
        this.scheduling = true;
        const session = Object.assign(Object.assign({}, this.newSession), { id: 'sup-' + Date.now(), counsellorId: 'gs-001', counselorName: ((_a = this.supervisedCounselors.find(c => c.id === this.newSession.counselorId)) === null || _a === void 0 ? void 0 : _a.firstName) + ' ' + ((_b = this.supervisedCounselors.find(c => c.id === this.newSession.counselorId)) === null || _b === void 0 ? void 0 : _b.lastName), counselorAvatar: (_c = this.supervisedCounselors.find(c => c.id === this.newSession.counselorId)) === null || _c === void 0 ? void 0 : _c.avatarUrl, status: 'scheduled', createdAt: new Date() });
        this.counsellingService.createSupervisionSession(session);
        this.supervisionSessions = this.counsellingService.getSupervisionSessions('gs-001');
        this.updateStats();
        this.scheduling = false;
        this.closeScheduleModal();
    }
    startSession(session) {
        session.status = 'in_progress';
        console.log('Start session:', session.id);
    }
    rescheduleSession(session) {
        console.log('Reschedule session:', session.id);
    }
    cancelSession(session) {
        session.status = 'cancelled';
        console.log('Cancel session:', session.id);
    }
    viewNotes(session) {
        console.log('View notes:', session.id);
    }
    reviewCase(review) {
        console.log('Review case:', review.id);
    }
    viewCaseDetails(review) {
        console.log('View case details:', review.id);
    }
}
GuidanceSupervisionComponent.ɵfac = function GuidanceSupervisionComponent_Factory(t) { return new (t || GuidanceSupervisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"])); };
GuidanceSupervisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuidanceSupervisionComponent, selectors: [["app-guidance-supervision"]], decls: 60, vars: 12, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "header-content"], [1, "page-title"], [1, "page-description"], ["variant", "primary", 3, "click"], [1, "supervision-overview", "mb-8"], [1, "grid", "grid-4"], ["variant", "elevated", "padding", "md", 1, "stat-card"], [1, "stat-icon", "bg-primary-100"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "bg-success-light"], ["points", "20 6 9 17 4 12"], [1, "stat-icon", "bg-warning-light"], ["d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"], ["d", "M12 6v6l4 2"], [1, "stat-icon", "bg-accent-100"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["role", "tablist", 1, "tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [3, "isOpen", "title", "size", "close", 4, "ngIf"], ["role", "tab", 1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "section-title", "mb-4"], [1, "counselor-grid"], ["variant", "elevated", "padding", "lg", "class", "supervised-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "lg", 1, "supervised-card"], [1, "counselor-header"], [1, "avatar"], [1, "counselor-info"], [1, "text-sm", "text-gray-600"], ["size", "sm", 1, "mt-1", 3, "variant"], [1, "counselor-meta"], [1, "meta-item"], [1, "meta-label"], [1, "meta-value"], [1, "counselor-actions", "mt-4"], ["variant", "outline", "size", "sm", 1, "w-full", 3, "click"], ["variant", "primary", "size", "sm", 1, "w-full", "mt-2", 3, "click"], ["class", "sessions-list", 4, "ngIf", "ngIfElse"], ["emptySessions", ""], [1, "sessions-list"], ["variant", "elevated", "padding", "md", "class", "session-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "session-card"], [1, "session-header"], [1, "session-counselor"], [1, "avatar-sm"], ["size", "sm", 3, "variant"], [1, "session-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-row", 4, "ngIf"], ["class", "session-actions mt-4", 4, "ngIf"], [1, "session-actions", "mt-4"], ["variant", "primary", "size", "sm", 3, "click"], ["variant", "outline", "size", "sm", 1, "ml-2", 3, "click"], ["variant", "error", "size", "sm", 1, "ml-auto", 3, "click"], ["variant", "outline", "size", "sm", 3, "click"], [1, "text-center", "py-12"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "mt-4"], [1, "text-gray-600", "mt-2"], ["class", "reviews-list", 4, "ngIf", "ngIfElse"], ["emptyReviews", ""], [1, "reviews-list"], ["variant", "elevated", "padding", "md", "class", "review-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "review-card"], [1, "review-header"], [1, "review-student"], [1, "review-summary", "mt-3"], [1, "review-meta"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "review-actions", "mt-4"], ["variant", "primary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "outline", "size", "sm", 3, "click", 4, "ngIf"], [3, "isOpen", "title", "size", "close"], [1, "schedule-form"], [1, "form-group"], [1, "form-label"], ["required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row"], ["type", "date", "required", "", 1, "form-input", 3, "ngModel", "min", "ngModelChange"], ["type", "time", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-input", 3, "ngModel", "ngModelChange"], ["value", "30"], ["value", "45"], ["value", "60"], ["value", "90"], ["multiple", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "Preparation notes...", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "modal-actions"], ["variant", "outline", 3, "click"], ["variant", "primary", 3, "loading", "click"], [3, "value"]], template: function GuidanceSupervisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Peer Supervision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Supervise and support peer counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceSupervisionComponent_Template_app_button_click_11_listener() { return ctx.openScheduleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Schedule Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Supervised Counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "polyline", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Upcoming Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Completed This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polyline", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pending Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, GuidanceSupervisionComponent_button_55_Template, 2, 3, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, GuidanceSupervisionComponent_div_56_Template, 5, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, GuidanceSupervisionComponent_div_57_Template, 6, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, GuidanceSupervisionComponent_div_58_Template, 6, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, GuidanceSupervisionComponent_app_modal_59_Template, 44, 13, "app-modal", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.supervisedCounselors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcomingSessions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completedThisMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pendingReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTab === "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scheduleModalOpen);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_6__["BadgeComponent"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectMultipleControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .header-content[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .supervision-overview[_ngcontent-%COMP%] { }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); }\n    .grid-4[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n    @media (min-width: 768px) { .grid-4[_ngcontent-%COMP%] { grid-template-columns: repeat(4, 1fr); } }\n    .stat-card[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-4); }\n    .stat-icon[_ngcontent-%COMP%] { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }\n    .stat-value[_ngcontent-%COMP%] { display: block; font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }\n    .stat-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .tab-content[_ngcontent-%COMP%] { animation: fadeIn var(--transition-normal); }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }\n    .counselor-grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .counselor-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    .supervised-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .counselor-header[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); }\n    .avatar[_ngcontent-%COMP%] { width: 56px; height: 56px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .avatar-sm[_ngcontent-%COMP%] { width: 40px; height: 40px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }\n    .counselor-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .counselor-meta[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); padding: var(--space-4); background: var(--color-gray-50); border-radius: var(--radius-lg); margin-bottom: var(--space-4); }\n    .meta-item[_ngcontent-%COMP%] { text-align: center; }\n    .meta-label[_ngcontent-%COMP%] { display: block; font-size: var(--font-size-xs); color: var(--color-gray-500); margin-bottom: var(--space-1); }\n    .meta-value[_ngcontent-%COMP%] { font-weight: var(--font-weight-semibold); color: var(--color-gray-900); }\n    .counselor-actions[_ngcontent-%COMP%] { margin-top: auto; }\n    .w-full[_ngcontent-%COMP%] { width: 100%; }\n    .ml-2[_ngcontent-%COMP%] { margin-left: var(--space-2); }\n    .ml-auto[_ngcontent-%COMP%] { margin-left: auto; }\n    .sessions-list[_ngcontent-%COMP%], .reviews-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .session-card[_ngcontent-%COMP%], .review-card[_ngcontent-%COMP%] { }\n    .session-header[_ngcontent-%COMP%], .review-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-4); }\n    .session-counselor[_ngcontent-%COMP%], .review-student[_ngcontent-%COMP%] { display: flex; gap: var(--space-3); }\n    .session-details[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4); }\n    .detail-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; padding: var(--space-2) 0; border-bottom: 1px solid var(--color-gray-100); }\n    .detail-row[_ngcontent-%COMP%]:last-child { border-bottom: none; }\n    .detail-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-500); }\n    .detail-value[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-900); text-align: right; }\n    .session-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .review-summary[_ngcontent-%COMP%] { color: var(--color-gray-700); margin: 0; }\n    .review-meta[_ngcontent-%COMP%] { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); margin: var(--space-3) 0; }\n    .meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); }\n    .review-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }\n    .form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-1); }\n    .form-label[_ngcontent-%COMP%] { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }\n    .form-input[_ngcontent-%COMP%] { padding: var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }\n    .form-input[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }\n    .modal-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-4); }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mx-auto[_ngcontent-%COMP%] { margin-left: auto; margin-right: auto; }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }\n    .mb-8[_ngcontent-%COMP%] { margin-bottom: var(--space-8); }\n    .py-12[_ngcontent-%COMP%] { padding-top: var(--space-12); padding-bottom: var(--space-12); }\n    .bg-primary-100[_ngcontent-%COMP%] { background: var(--color-primary-100); color: var(--color-primary); }\n    .bg-success-light[_ngcontent-%COMP%] { background: var(--color-success-light); color: var(--color-success); }\n    .bg-warning-light[_ngcontent-%COMP%] { background: var(--color-warning-light); color: var(--color-warning); }\n    .bg-accent-100[_ngcontent-%COMP%] { background: var(--color-accent-100); color: var(--color-accent); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidanceSupervisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guidance-supervision',
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
            <div class="header-content">
              <div>
                <h1 class="page-title">Peer Supervision</h1>
                <p class="page-description">Supervise and support peer counselors</p>
              </div>
              <app-button variant="primary" (click)="openScheduleModal()">Schedule Session</app-button>
            </div>
          </div>

          <div class="supervision-overview mb-8">
            <div class="grid grid-4">
              <app-card variant="elevated" padding="md" class="stat-card">
                <div class="stat-icon bg-primary-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                </div>
                <div>
                  <span class="stat-value">{{ supervisedCounselors.length }}</span>
                  <span class="stat-label">Supervised Counselors</span>
                </div>
              </app-card>
              <app-card variant="elevated" padding="md" class="stat-card">
                <div class="stat-icon bg-success-light">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <span class="stat-value">{{ upcomingSessions }}</span>
                  <span class="stat-label">Upcoming Sessions</span>
                </div>
              </app-card>
              <app-card variant="elevated" padding="md" class="stat-card">
                <div class="stat-icon bg-warning-light">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                </div>
                <div>
                  <span class="stat-value">{{ completedThisMonth }}</span>
                  <span class="stat-label">Completed This Month</span>
                </div>
              </app-card>
              <app-card variant="elevated" padding="md" class="stat-card">
                <div class="stat-icon bg-accent-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </div>
                <div>
                  <span class="stat-value">{{ pendingReviews }}</span>
                  <span class="stat-label">Pending Reviews</span>
                </div>
              </app-card>
            </div>
          </div>

          <div class="tabs" role="tablist">
            <button *ngFor="let tab of tabs" role="tab" [class.active]="activeTab === tab.id" (click)="setActiveTab(tab.id)" class="tab-btn">
              {{ tab.label }}
            </button>
          </div>

          <div *ngIf="activeTab === 'counselors'" class="tab-content">
            <h3 class="section-title mb-4">Supervised Peer Counselors</h3>
            <div class="counselor-grid">
              <app-card *ngFor="let pc of supervisedCounselors" variant="elevated" padding="lg" class="supervised-card">
                <div class="counselor-header">
                  <div class="avatar" [style.background-image]="'url(' + (pc.avatarUrl || 'assets/images/avatars/counselor-default.svg') + ')'"></div>
                  <div class="counselor-info">
                    <h4>{{ pc.firstName }} {{ pc.lastName }}</h4>
                    <p class="text-sm text-gray-600">{{ pc.studentId }} · {{ pc.program }}</p>
                    <app-badge [variant]="getTrainingStatusVariant(pc.trainingStatus)" size="sm" class="mt-1">{{ formatTrainingStatus(pc.trainingStatus) }}</app-badge>
                  </div>
                </div>
                <div class="counselor-meta">
                  <div class="meta-item">
                    <span class="meta-label">Sessions This Month</span>
                    <span class="meta-value">{{ pc.sessionsThisMonth || 0 }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Avg Rating</span>
                    <span class="meta-value">{{ pc.rating?.toFixed(1) || 'N/A' }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">Last Supervision</span>
                    <span class="meta-value">{{ pc.lastSupervision ? (pc.lastSupervision | date:'MMM d, yyyy') : 'Never' }}</span>
                  </div>
                </div>
                <div class="counselor-actions mt-4">
                  <app-button variant="outline" size="sm" class="w-full" (click)="viewCounselorDetails(pc)">View Details</app-button>
                  <app-button variant="primary" size="sm" class="w-full mt-2" (click)="scheduleSupervision(pc)">Schedule Supervision</app-button>
                </div>
              </app-card>
            </div>
          </div>

          <div *ngIf="activeTab === 'sessions'" class="tab-content">
            <h3 class="section-title mb-4">Supervision Sessions</h3>
            <div class="sessions-list" *ngIf="supervisionSessions.length > 0; else emptySessions">
              <app-card *ngFor="let session of supervisionSessions" variant="elevated" padding="md" class="session-card">
                <div class="session-header">
                  <div class="session-counselor">
                    <div class="avatar-sm" [style.background-image]="'url(' + (session.counselorAvatar || 'assets/images/avatars/counselor-default.svg') + ')'"></div>
                    <div>
                      <h4>{{ session.counselorName }}</h4>
                      <p class="text-sm text-gray-600">{{ session.date | date:'EEEE, MMM d, yyyy' }} at {{ session.time }}</p>
                    </div>
                  </div>
                  <app-badge [variant]="getSessionStatusVariant(session.status)" size="sm">{{ session.status }}</app-badge>
                </div>
                <div class="session-details">
                  <div class="detail-row">
                    <span class="detail-label">Duration</span>
                    <span class="detail-value">{{ session.duration }} min</span>
                  </div>
                  <div class="detail-row" *ngIf="session.focusAreas.length">
                    <span class="detail-label">Focus Areas</span>
                    <span class="detail-value">{{ session.focusAreas.join(', ') }}</span>
                  </div>
                  <div class="detail-row" *ngIf="session.notes">
                    <span class="detail-label">Notes</span>
                    <span class="detail-value">{{ session.notes }}</span>
                  </div>
                </div>
                <div class="session-actions mt-4" *ngIf="session.status === 'scheduled'">
                  <app-button variant="primary" size="sm" (click)="startSession(session)">Start Session</app-button>
                  <app-button variant="outline" size="sm" (click)="rescheduleSession(session)" class="ml-2">Reschedule</app-button>
                  <app-button variant="error" size="sm" (click)="cancelSession(session)" class="ml-auto">Cancel</app-button>
                </div>
                <div class="session-actions mt-4" *ngIf="session.status === 'completed'">
                  <app-button variant="outline" size="sm" (click)="viewNotes(session)">View Notes</app-button>
                </div>
              </app-card>
            </div>
            <ng-template #emptySessions>
              <div class="text-center py-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <h3 class="mt-4">No supervision sessions</h3>
                <p class="text-gray-600 mt-2">Schedule your first supervision session</p>
              </div>
            </ng-template>
          </div>

          <div *ngIf="activeTab === 'reviews'" class="tab-content">
            <h3 class="section-title mb-4">Case Reviews</h3>
            <div class="reviews-list" *ngIf="caseReviews.length > 0; else emptyReviews">
              <app-card *ngFor="let review of caseReviews" variant="elevated" padding="md" class="review-card">
                <div class="review-header">
                  <div class="review-student">
                    <h4>{{ review.studentName }}</h4>
                    <p class="text-sm text-gray-600">{{ review.studentProgram }} · Referred by {{ review.peerCounselorName }}</p>
                  </div>
                  <app-badge [variant]="getPriorityVariant(review.priority)" size="sm">{{ review.priority }}</app-badge>
                </div>
                <p class="review-summary mt-3">{{ review.summary }}</p>
                <div class="review-meta">
                  <span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {{ review.submittedAt | date:'MMM d, yyyy' }}
                  </span>
                  <span class="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                    {{ review.category }}
                  </span>
                </div>
                <div class="review-actions mt-4">
                  <app-button variant="primary" size="sm" (click)="reviewCase(review)" *ngIf="review.status === 'pending'">Review Now</app-button>
                  <app-button variant="outline" size="sm" (click)="viewCaseDetails(review)" *ngIf="review.status !== 'pending'">View Details</app-button>
                </div>
              </app-card>
            </div>
            <ng-template #emptyReviews>
              <div class="text-center py-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                <h3 class="mt-4">No pending case reviews</h3>
                <p class="text-gray-600 mt-2">All caught up!</p>
              </div>
            </ng-template>
          </div>
        </div>
      </main>

      <app-modal 
        *ngIf="scheduleModalOpen"
        [isOpen]="scheduleModalOpen"
        [title]="'Schedule Supervision Session'"
        [size]="'lg'"
        (close)="closeScheduleModal()"
      >
        <div class="schedule-form">
          <div class="form-group">
            <label class="form-label">Peer Counselor</label>
            <select [(ngModel)]="newSession.counselorId" class="form-input" required>
              <option value="">Select counselor</option>
              <option *ngFor="let pc of supervisedCounselors" [value]="pc.id">{{ pc.firstName }} {{ pc.lastName }}</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Date</label>
              <input type="date" [(ngModel)]="newSession.date" class="form-input" [min]="today" required>
            </div>
            <div class="form-group">
              <label class="form-label">Time</label>
              <input type="time" [(ngModel)]="newSession.time" class="form-input" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Duration (minutes)</label>
            <select [(ngModel)]="newSession.duration" class="form-input">
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
              <option value="90">90</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Focus Areas</label>
            <select [(ngModel)]="newSession.focusAreas" class="form-input" multiple>
              <option *ngFor="let area of focusAreaOptions" [value]="area">{{ area }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Session Notes</label>
            <textarea [(ngModel)]="newSession.notes" rows="3" class="form-input" placeholder="Preparation notes..."></textarea>
          </div>
          <div class="modal-actions">
            <app-button variant="outline" (click)="closeScheduleModal()">Cancel</app-button>
            <app-button variant="primary" (click)="createSupervisionSession()" [loading]="scheduling">Schedule</app-button>
          </div>
        </div>
      </app-modal>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .header-content { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .supervision-overview { }
    .grid { display: grid; gap: var(--space-4); }
    .grid-4 { grid-template-columns: repeat(2, 1fr); }
    @media (min-width: 768px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
    .stat-card { display: flex; align-items: center; gap: var(--space-4); }
    .stat-icon { width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .stat-value { display: block; font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-primary); }
    .stat-label { font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .tabs { display: flex; gap: var(--space-1); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .tab-content { animation: fadeIn var(--transition-normal); }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .section-title { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-4); }
    .counselor-grid { display: grid; gap: var(--space-4); grid-template-columns: 1fr; }
    @media (min-width: 768px) { .counselor-grid { grid-template-columns: repeat(2, 1fr); } }
    .supervised-card { display: flex; flex-direction: column; }
    .counselor-header { display: flex; gap: var(--space-4); margin-bottom: var(--space-4); }
    .avatar { width: 56px; height: 56px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .avatar-sm { width: 40px; height: 40px; border-radius: 50%; background: var(--color-primary-100); background-size: cover; background-position: center; flex-shrink: 0; }
    .counselor-info h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .counselor-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); padding: var(--space-4); background: var(--color-gray-50); border-radius: var(--radius-lg); margin-bottom: var(--space-4); }
    .meta-item { text-align: center; }
    .meta-label { display: block; font-size: var(--font-size-xs); color: var(--color-gray-500); margin-bottom: var(--space-1); }
    .meta-value { font-weight: var(--font-weight-semibold); color: var(--color-gray-900); }
    .counselor-actions { margin-top: auto; }
    .w-full { width: 100%; }
    .ml-2 { margin-left: var(--space-2); }
    .ml-auto { margin-left: auto; }
    .sessions-list, .reviews-list { display: flex; flex-direction: column; gap: var(--space-4); }
    .session-card, .review-card { }
    .session-header, .review-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-4); }
    .session-counselor, .review-student { display: flex; gap: var(--space-3); }
    .session-details { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-4); }
    .detail-row { display: flex; justify-content: space-between; padding: var(--space-2) 0; border-bottom: 1px solid var(--color-gray-100); }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { font-size: var(--font-size-sm); color: var(--color-gray-500); }
    .detail-value { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-900); text-align: right; }
    .session-actions { display: flex; gap: var(--space-2); }
    .review-summary { color: var(--color-gray-700); margin: 0; }
    .review-meta { display: flex; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); margin: var(--space-3) 0; }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); }
    .review-actions { display: flex; gap: var(--space-2); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
    .form-group { display: flex; flex-direction: column; gap: var(--space-1); }
    .form-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-700); }
    .form-input { padding: var(--space-2) var(--space-3); border: 1px solid var(--color-gray-300); border-radius: var(--radius-lg); font-size: var(--font-size-base); }
    .form-input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-100); }
    .modal-actions { display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-4); }
    .text-sm { font-size: var(--font-size-sm); }
    .text-gray-600 { color: var(--color-gray-600); }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mt-4 { margin-top: var(--space-4); }
    .mb-8 { margin-bottom: var(--space-8); }
    .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
    .bg-primary-100 { background: var(--color-primary-100); color: var(--color-primary); }
    .bg-success-light { background: var(--color-success-light); color: var(--color-success); }
    .bg-warning-light { background: var(--color-warning-light); color: var(--color-warning); }
    .bg-accent-100 { background: var(--color-accent-100); color: var(--color-accent); }
  `]
            }]
    }], function () { return [{ type: _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"] }]; }, null); })();


/***/ }),

/***/ "Qvjo":
/*!************************************************************************!*\
  !*** ./src/app/guidance/escalations/guidance-escalations.component.ts ***!
  \************************************************************************/
/*! exports provided: GuidanceEscalationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidanceEscalationsComponent", function() { return GuidanceEscalationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/professional-counselling.service */ "TSJh");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/badge/badge.component */ "Y/gL");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "VkHG");








function GuidanceEscalationsComponent_button_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.count);
} }
function GuidanceEscalationsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceEscalationsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const tab_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setActiveTab(tab_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GuidanceEscalationsComponent_button_10_span_2_Template, 2, 1, "span", 12);
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
function GuidanceEscalationsComponent_div_11_app_card_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Peer Counselor Notes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", esc_r10.peerNotes, " ");
} }
function GuidanceEscalationsComponent_div_11_app_card_1_app_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceEscalationsComponent_div_11_app_card_1_app_button_35_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const esc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.assignToSelf(esc_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assign to Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceEscalationsComponent_div_11_app_card_1_app_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceEscalationsComponent_div_11_app_card_1_app_button_36_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const esc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.scheduleAppointment(esc_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Schedule Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceEscalationsComponent_div_11_app_card_1_app_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceEscalationsComponent_div_11_app_card_1_app_button_37_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const esc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.resolveEscalation(esc_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark Resolved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GuidanceEscalationsComponent_div_11_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polyline", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "line", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GuidanceEscalationsComponent_div_11_app_card_1_div_31_Template, 4, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuidanceEscalationsComponent_div_11_app_card_1_Template_app_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const esc_r10 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.viewDetails(esc_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GuidanceEscalationsComponent_div_11_app_card_1_app_button_35_Template, 2, 0, "app-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GuidanceEscalationsComponent_div_11_app_card_1_app_button_36_Template, 2, 0, "app-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, GuidanceEscalationsComponent_div_11_app_card_1_app_button_37_Template, 2, 0, "app-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esc_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](esc_r10.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", esc_r10.studentProgram, " \u00B7 Year ", esc_r10.studentYear, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("variant", ctx_r9.getStatusVariant(esc_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](esc_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 13, esc_r10.createdAt, "MMM d, yyyy h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", esc_r10.peerCounselorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", esc_r10.urgency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", esc_r10.reason, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", esc_r10.peerNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", esc_r10.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", esc_r10.status === "assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", esc_r10.status !== "resolved");
} }
function GuidanceEscalationsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GuidanceEscalationsComponent_div_11_app_card_1_Template, 38, 16, "app-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredEscalations);
} }
function GuidanceEscalationsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No escalations found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeTab === "pending" ? "No pending escalations at the moment" : "No " + ctx_r3.activeTab + " escalations");
} }
class GuidanceEscalationsComponent {
    constructor(counsellingService) {
        this.counsellingService = counsellingService;
        this.user = { firstName: 'Dr. James' };
        this.allEscalations = [];
        this.filteredEscalations = [];
        this.activeTab = 'pending';
        this.statusTabs = [
            { id: 'pending', label: 'Pending Review', count: 0 },
            { id: 'assigned', label: 'Assigned', count: 0 },
            { id: 'in_progress', label: 'In Progress', count: 0 },
            { id: 'resolved', label: 'Resolved', count: 0 }
        ];
        this.navItems = [
            { label: 'Dashboard', route: '/guidance', icon: 'dashboard' },
            { label: 'Escalations', route: '/guidance/escalations', icon: 'alert-triangle', active: true },
            { label: 'Appointments', route: '/guidance/appointments', icon: 'calendar' },
            { label: 'Supervision', route: '/guidance/supervision', icon: 'users' },
            { label: 'Reports', route: '/guidance/reports', icon: 'bar-chart' }
        ];
    }
    ngOnInit() {
        this.allEscalations = this.counsellingService.getEscalations();
        this.updateTabCounts();
        this.filterEscalations();
    }
    setActiveTab(tabId) {
        this.activeTab = tabId;
        this.filterEscalations();
    }
    filterEscalations() {
        this.filteredEscalations = this.allEscalations.filter(e => e.status === this.activeTab);
    }
    updateTabCounts() {
        this.statusTabs.forEach(tab => {
            tab.count = this.allEscalations.filter(e => e.status === tab.id).length;
        });
    }
    getStatusVariant(status) {
        const variants = {
            'pending': 'warning',
            'assigned': 'primary',
            'in_progress': 'secondary',
            'resolved': 'success'
        };
        return variants[status] || 'secondary';
    }
    viewDetails(esc) {
        console.log('View escalation:', esc.id);
    }
    assignToSelf(esc) {
        this.counsellingService.assignEscalation(esc.id, 'gs-001');
        this.allEscalations = this.counsellingService.getEscalations();
        this.updateTabCounts();
        this.filterEscalations();
    }
    scheduleAppointment(esc) {
        console.log('Schedule appointment for:', esc.id);
    }
    resolveEscalation(esc) {
        this.counsellingService.resolveEscalation(esc.id);
        this.allEscalations = this.counsellingService.getEscalations();
        this.updateTabCounts();
        this.filterEscalations();
    }
}
GuidanceEscalationsComponent.ɵfac = function GuidanceEscalationsComponent_Factory(t) { return new (t || GuidanceEscalationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"])); };
GuidanceEscalationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuidanceEscalationsComponent, selectors: [["app-guidance-escalations"]], decls: 14, vars: 6, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], ["role", "tablist", 1, "filter-tabs"], ["role", "tab", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "escalations-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], ["role", "tab", 1, "tab-btn", 3, "click"], ["class", "badge", 4, "ngIf"], [1, "badge"], [1, "escalations-list"], ["variant", "elevated", "padding", "md", "class", "escalation-card", 4, "ngFor", "ngForOf"], ["variant", "elevated", "padding", "md", 1, "escalation-card"], [1, "escalation-header"], [1, "escalation-info"], [1, "text-sm", "text-gray-600"], ["size", "sm", 3, "variant"], [1, "escalation-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "escalation-reason"], ["class", "escalation-notes", 4, "ngIf"], [1, "escalation-actions", "mt-4"], ["variant", "outline", "size", "sm", 3, "click"], ["variant", "primary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "secondary", "size", "sm", 3, "click", 4, "ngIf"], ["variant", "success", "size", "sm", "class", "ml-auto", 3, "click", 4, "ngIf"], [1, "escalation-notes"], ["variant", "primary", "size", "sm", 3, "click"], ["variant", "secondary", "size", "sm", 3, "click"], ["variant", "success", "size", "sm", 1, "ml-auto", 3, "click"], [1, "text-center", "py-12"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "mx-auto", "text-gray-300"], [1, "mt-4"], [1, "text-gray-600", "mt-2"]], template: function GuidanceEscalationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Escalations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Review and manage escalated cases from peer counselors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GuidanceEscalationsComponent_button_10_Template, 3, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GuidanceEscalationsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GuidanceEscalationsComponent_ng_template_12_Template, 9, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", ctx.user)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredEscalations.length > 0)("ngIfElse", _r2);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _shared_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content-with-sidebar[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .page-header[_ngcontent-%COMP%] { margin-bottom: var(--space-6); }\n    .page-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .page-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .filter-tabs[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }\n    .tab-btn[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }\n    .tab-btn[_ngcontent-%COMP%]:hover { color: var(--color-gray-900); }\n    .tab-btn.active[_ngcontent-%COMP%] { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }\n    .badge[_ngcontent-%COMP%] { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }\n    .escalations-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: var(--space-4); }\n    .escalation-card[_ngcontent-%COMP%] { }\n    .escalation-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-3); }\n    .escalation-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }\n    .escalation-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); margin-bottom: var(--space-3); }\n    .meta-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--space-1); }\n    .escalation-reason[_ngcontent-%COMP%] { background: var(--color-gray-50); padding: var(--space-3); border-radius: var(--radius-lg); margin-bottom: var(--space-3); font-size: var(--font-size-sm); }\n    .escalation-notes[_ngcontent-%COMP%] { background: var(--color-primary-50); padding: var(--space-3); border-radius: var(--radius-lg); margin-bottom: var(--space-3); font-size: var(--font-size-sm); }\n    .escalation-actions[_ngcontent-%COMP%] { display: flex; gap: var(--space-2); }\n    .ml-auto[_ngcontent-%COMP%] { margin-left: auto; }\n    .text-sm[_ngcontent-%COMP%] { font-size: var(--font-size-sm); }\n    .text-gray-600[_ngcontent-%COMP%] { color: var(--color-gray-600); }\n    .py-12[_ngcontent-%COMP%] { padding-top: var(--space-12); padding-bottom: var(--space-12); }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .mx-auto[_ngcontent-%COMP%] { margin-left: auto; margin-right: auto; }\n    .mt-4[_ngcontent-%COMP%] { margin-top: var(--space-4); }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidanceEscalationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guidance-escalations',
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
            <h1 class="page-title">Escalations</h1>
            <p class="page-description">Review and manage escalated cases from peer counselors</p>
          </div>

          <div class="filter-tabs" role="tablist">
            <button *ngFor="let tab of statusTabs" role="tab" [class.active]="activeTab === tab.id" (click)="setActiveTab(tab.id)" class="tab-btn">
              {{ tab.label }} <span class="badge" *ngIf="tab.count > 0">{{ tab.count }}</span>
            </button>
          </div>

          <div class="escalations-list" *ngIf="filteredEscalations.length > 0; else emptyState">
            <app-card *ngFor="let esc of filteredEscalations" variant="elevated" padding="md" class="escalation-card">
              <div class="escalation-header">
                <div class="escalation-info">
                  <h4>{{ esc.studentName }}</h4>
                  <p class="text-sm text-gray-600">{{ esc.studentProgram }} · Year {{ esc.studentYear }}</p>
                </div>
                <app-badge [variant]="getStatusVariant(esc.status)" size="sm">{{ esc.status }}</app-badge>
              </div>
              <div class="escalation-meta">
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {{ esc.createdAt | date:'MMM d, yyyy h:mm a' }}
                </span>
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  {{ esc.peerCounselorName }}
                </span>
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  {{ esc.urgency }}
                </span>
              </div>
              <div class="escalation-reason">
                <strong>Reason:</strong> {{ esc.reason }}
              </div>
              <div class="escalation-notes" *ngIf="esc.peerNotes">
                <strong>Peer Counselor Notes:</strong> {{ esc.peerNotes }}
              </div>
              <div class="escalation-actions mt-4">
                <app-button variant="outline" size="sm" (click)="viewDetails(esc)">View Details</app-button>
                <app-button variant="primary" size="sm" (click)="assignToSelf(esc)" *ngIf="esc.status === 'pending'">Assign to Me</app-button>
                <app-button variant="secondary" size="sm" (click)="scheduleAppointment(esc)" *ngIf="esc.status === 'assigned'">Schedule Session</app-button>
                <app-button variant="success" size="sm" (click)="resolveEscalation(esc)" class="ml-auto" *ngIf="esc.status !== 'resolved'">Mark Resolved</app-button>
              </div>
            </app-card>
          </div>
          <ng-template #emptyState>
            <div class="text-center py-12">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto text-gray-300"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              <h3 class="mt-4">No escalations found</h3>
              <p class="text-gray-600 mt-2">{{ activeTab === 'pending' ? 'No pending escalations at the moment' : 'No ' + activeTab + ' escalations' }}</p>
            </div>
          </ng-template>
        </div>
      </main>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content-with-sidebar { flex: 1; padding-top: var(--header-height); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .page-header { margin-bottom: var(--space-6); }
    .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .page-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .filter-tabs { display: flex; gap: var(--space-2); background: var(--color-gray-100); padding: var(--space-1); border-radius: var(--radius-xl); margin-bottom: var(--space-6); overflow-x: auto; }
    .tab-btn { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-4); border: none; background: transparent; border-radius: var(--radius-lg); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-gray-600); cursor: pointer; transition: all var(--transition-fast); }
    .tab-btn:hover { color: var(--color-gray-900); }
    .tab-btn.active { background: white; color: var(--color-primary); box-shadow: var(--shadow-sm); }
    .badge { background: var(--color-primary); color: white; font-size: var(--font-size-xs); padding: 1px 6px; border-radius: var(--radius-full); }
    .escalations-list { display: flex; flex-direction: column; gap: var(--space-4); }
    .escalation-card { }
    .escalation-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: var(--space-3); }
    .escalation-info h4 { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); margin: 0 0 var(--space-1); }
    .escalation-meta { display: flex; flex-wrap: wrap; gap: var(--space-4); font-size: var(--font-size-xs); color: var(--color-gray-500); margin-bottom: var(--space-3); }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); }
    .escalation-reason { background: var(--color-gray-50); padding: var(--space-3); border-radius: var(--radius-lg); margin-bottom: var(--space-3); font-size: var(--font-size-sm); }
    .escalation-notes { background: var(--color-primary-50); padding: var(--space-3); border-radius: var(--radius-lg); margin-bottom: var(--space-3); font-size: var(--font-size-sm); }
    .escalation-actions { display: flex; gap: var(--space-2); }
    .ml-auto { margin-left: auto; }
    .text-sm { font-size: var(--font-size-sm); }
    .text-gray-600 { color: var(--color-gray-600); }
    .py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
    .text-center { text-align: center; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mt-4 { margin-top: var(--space-4); }
  `]
            }]
    }], function () { return [{ type: _core_services_professional_counselling_service__WEBPACK_IMPORTED_MODULE_1__["ProfessionalCounsellingService"] }]; }, null); })();


/***/ }),

/***/ "hOlS":
/*!*********************************************!*\
  !*** ./src/app/guidance/guidance.module.ts ***!
  \*********************************************/
/*! exports provided: GuidanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidanceModule", function() { return GuidanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _guidance_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guidance-dashboard.component */ "9A6j");
/* harmony import */ var _escalations_guidance_escalations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./escalations/guidance-escalations.component */ "Qvjo");
/* harmony import */ var _appointments_guidance_appointments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointments/guidance-appointments.component */ "Lg+S");
/* harmony import */ var _supervision_guidance_supervision_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supervision/guidance-supervision.component */ "PM5f");










class GuidanceModule {
}
GuidanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuidanceModule });
GuidanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuidanceModule_Factory(t) { return new (t || GuidanceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _guidance_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["GuidanceDashboardComponent"] },
                { path: 'escalations', component: _escalations_guidance_escalations_component__WEBPACK_IMPORTED_MODULE_5__["GuidanceEscalationsComponent"] },
                { path: 'appointments', component: _appointments_guidance_appointments_component__WEBPACK_IMPORTED_MODULE_6__["GuidanceAppointmentsComponent"] },
                { path: 'supervision', component: _supervision_guidance_supervision_component__WEBPACK_IMPORTED_MODULE_7__["GuidanceSupervisionComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuidanceModule, { declarations: [_guidance_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["GuidanceDashboardComponent"],
        _escalations_guidance_escalations_component__WEBPACK_IMPORTED_MODULE_5__["GuidanceEscalationsComponent"],
        _appointments_guidance_appointments_component__WEBPACK_IMPORTED_MODULE_6__["GuidanceAppointmentsComponent"],
        _supervision_guidance_supervision_component__WEBPACK_IMPORTED_MODULE_7__["GuidanceSupervisionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _guidance_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["GuidanceDashboardComponent"],
                    _escalations_guidance_escalations_component__WEBPACK_IMPORTED_MODULE_5__["GuidanceEscalationsComponent"],
                    _appointments_guidance_appointments_component__WEBPACK_IMPORTED_MODULE_6__["GuidanceAppointmentsComponent"],
                    _supervision_guidance_supervision_component__WEBPACK_IMPORTED_MODULE_7__["GuidanceSupervisionComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _guidance_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["GuidanceDashboardComponent"] },
                        { path: 'escalations', component: _escalations_guidance_escalations_component__WEBPACK_IMPORTED_MODULE_5__["GuidanceEscalationsComponent"] },
                        { path: 'appointments', component: _appointments_guidance_appointments_component__WEBPACK_IMPORTED_MODULE_6__["GuidanceAppointmentsComponent"] },
                        { path: 'supervision', component: _supervision_guidance_supervision_component__WEBPACK_IMPORTED_MODULE_7__["GuidanceSupervisionComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=guidance-guidance-module.js.map