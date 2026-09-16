(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_campus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/campus.service */ "cIAp");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/button/button.component */ "VkHG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/card/card.component */ "L21D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LandingComponent_app_card_99_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_app_card_99_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const campus_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCampus(campus_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campus_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.campusGradient[campus_r1.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campus_r1.phone);
} }
class LandingComponent {
    constructor(campusService) {
        this.campusService = campusService;
        this.campuses = [];
        this.campusGradient = {
            'ruaraka': 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            'town': 'linear-gradient(135deg, #16a34a, #15803d)',
            'kitengela': 'linear-gradient(135deg, #ea580c, #c2410c)'
        };
        this.navItems = [
            { label: 'Features', route: '#features', icon: 'book' },
            { label: 'Campuses', route: '#campuses', icon: 'map-pin' },
            { label: 'Login', route: '/auth/login', icon: 'log-in' },
            { label: 'Sign Up', route: '/auth/register', icon: 'user-plus' }
        ];
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.campuses = this.campusService.getCampuses();
    }
    selectCampus(campus) {
        this.campusService.setSelectedCampus(campus);
        // Navigate to campus selection or auth
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_campus_service__WEBPACK_IMPORTED_MODULE_1__["CampusService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 171, vars: 5, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content"], [1, "hero-section"], [1, "container"], [1, "hero-content"], [1, "hero-title"], [1, "text-primary"], [1, "hero-subtitle"], [1, "hero-actions"], ["variant", "primary", "size", "lg", "routerLink", "/auth/register"], ["variant", "outline", "size", "lg", "routerLink", "/campus-selection"], [1, "hero-visual"], ["aria-hidden", "true", 1, "hero-illustration"], ["viewBox", "0 0 400 350", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "50", "y", "50", "width", "300", "height", "250", "rx", "16", "fill", "var(--color-primary-50)", "stroke", "var(--color-primary-200)", "stroke-width", "2"], ["cx", "200", "cy", "120", "r", "40", "fill", "var(--color-primary-100)"], ["d", "M200 160 L200 250", "stroke", "var(--color-primary-300)", "stroke-width", "3", "stroke-linecap", "round"], ["cx", "140", "cy", "280", "r", "30", "fill", "var(--color-secondary-100)"], ["cx", "260", "cy", "280", "r", "30", "fill", "var(--color-accent-100)"], ["d", "M140 280 L140 310", "stroke", "var(--color-secondary-300)", "stroke-width", "3", "stroke-linecap", "round"], ["d", "M260 280 L260 310", "stroke", "var(--color-accent-300)", "stroke-width", "3", "stroke-linecap", "round"], [1, "features-section", "section"], [1, "section-header", "text-center"], [1, "section-title"], [1, "section-description"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg", 1, "feature-card"], [1, "feature-icon", "bg-primary-100", "text-primary"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "feature-title"], [1, "feature-description"], [1, "feature-icon", "bg-secondary-100", "text-secondary"], ["d", "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"], ["d", "M12 6v6l4 2"], [1, "feature-icon", "bg-accent-100", "text-accent"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["d", "M23 6l-7.5 7.5L12 14l-4.5 4.5L3 18"], ["d", "M17 18V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"], [1, "campuses-section", "section", "bg-gray-50"], ["variant", "hover", "padding", "lg", "class", "campus-card", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "cta-section", "section"], ["variant", "filled", 1, "cta-card", "text-center"], [1, "cta-title"], [1, "cta-description"], [1, "cta-actions"], ["variant", "secondary", "size", "lg", "routerLink", "/campus-selection"], [1, "footer"], [1, "footer-grid"], [1, "footer-brand"], [1, "footer-logo"], ["width", "40", "height", "40", "viewBox", "0 0 36 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "36", "height", "36", "rx", "8", "fill", "var(--color-primary-600)"], ["d", "M18 8L26 18L18 28", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "footer-links"], ["routerLink", "/campus-selection"], ["routerLink", "/auth/login"], ["routerLink", "/auth/register"], ["href", "#"], [1, "footer-contact"], [1, "footer-bottom"], ["variant", "hover", "padding", "lg", 1, "campus-card", 2, "cursor", "pointer", 3, "click"], [1, "campus-image"], [1, "campus-image-placeholder"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "1.5", "aria-hidden", "true"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "campus-content"], [1, "campus-name"], [1, "campus-location"], [1, "campus-description"], [1, "campus-details"], [1, "detail"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " KCA University Peer Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "& Wellness Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your trusted digital wellness platform connecting students, trained peer counselors, and professional guidance staff across all KCA University campuses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Get Started Free ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Explore Campuses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Comprehensive Wellness Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Designed specifically for KCA University students across Ruaraka, Town, and Kitengela campuses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Peer Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Connect with trained student peer counselors for active listening, academic support, and wellness guidance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Professional Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Book appointments with qualified guidance staff for professional mental health support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Wellness Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Access articles, videos, guided exercises, and self-help tools for mental wellbeing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "polyline", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Appointment Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Schedule virtual or in-person sessions with campus-specific availability and reminders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Secure Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Private messaging with typing indicators, read receipts, and supervisor escalation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Wellness Journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Track mood, complete challenges, and monitor your personal wellness progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "section", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Our Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Wellness support tailored to each KCA University campus location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, LandingComponent_app_card_99_Template, 23, 7, "app-card", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "section", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "app-card", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Ready to Start Your Wellness Journey?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Join thousands of KCA University students already benefiting from peer support, professional counselling, and wellness resources. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Create Free Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "app-button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Select Your Campus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "footer", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "svg", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "KCA Wellness Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Your trusted digital wellness platform for KCA University students.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Student Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Urgent Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Peer Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Professional Counselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Wellness Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Events & Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "KCA University, Thika Superhighway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Ruaraka, Nairobi, Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Email: wellness@kca.ac.ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Phone: +254 700 000 000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", null)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " KCA University. All rights reserved.");
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".app-layout[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .main-content[_ngcontent-%COMP%] {\n      flex: 1;\n      padding-top: var(--header-height);\n    }\n\n    .container[_ngcontent-%COMP%] {\n      width: 100%;\n      max-width: var(--max-width-container);\n      margin: 0 auto;\n      padding: 0 var(--space-4);\n    }\n\n    \n    .hero-section[_ngcontent-%COMP%] {\n      padding: var(--space-16) 0;\n      background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-50) 100%);\n    }\n\n    .hero-content[_ngcontent-%COMP%] {\n      max-width: 700px;\n    }\n\n    .hero-title[_ngcontent-%COMP%] {\n      font-size: var(--font-size-4xl);\n      font-weight: var(--font-weight-bold);\n      line-height: var(--line-height-tight);\n      color: var(--color-gray-900);\n      margin-bottom: var(--space-6);\n    }\n\n    .hero-subtitle[_ngcontent-%COMP%] {\n      font-size: var(--font-size-lg);\n      color: var(--color-gray-600);\n      line-height: var(--line-height-relaxed);\n      margin-bottom: var(--space-8);\n    }\n\n    .hero-actions[_ngcontent-%COMP%] {\n      display: flex;\n      gap: var(--space-4);\n      flex-wrap: wrap;\n    }\n\n    .hero-visual[_ngcontent-%COMP%] {\n      display: none;\n    }\n\n    @media (min-width: 768px) {\n      .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: var(--space-12);\n        align-items: center;\n      }\n\n      .hero-visual[_ngcontent-%COMP%] {\n        display: block;\n      }\n\n      .hero-illustration[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 500px;\n        margin: 0 auto;\n      }\n\n      .hero-illustration[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n      }\n    }\n\n    \n    .features-section[_ngcontent-%COMP%] {\n      padding: var(--space-16) 0;\n    }\n\n    .feature-card[_ngcontent-%COMP%] {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .feature-icon[_ngcontent-%COMP%] {\n      width: 56px;\n      height: 56px;\n      border-radius: var(--radius-xl);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: var(--space-4);\n    }\n\n    .feature-title[_ngcontent-%COMP%] {\n      font-size: var(--font-size-xl);\n      font-weight: var(--font-weight-semibold);\n      margin-bottom: var(--space-2);\n    }\n\n    .feature-description[_ngcontent-%COMP%] {\n      color: var(--color-gray-600);\n      margin: 0;\n      flex: 1;\n    }\n\n    \n    .campuses-section[_ngcontent-%COMP%] {\n      padding: var(--space-16) 0;\n    }\n\n    .campus-card[_ngcontent-%COMP%] {\n      overflow: hidden;\n      transition: transform var(--transition-normal), box-shadow var(--transition-normal);\n    }\n\n    .campus-card[_ngcontent-%COMP%]:hover {\n      transform: translateY(-4px);\n      box-shadow: var(--shadow-xl);\n    }\n\n    .campus-image[_ngcontent-%COMP%] {\n      margin: calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-5);\n      border-radius: var(--radius-xl) var(--radius-xl) 0 0;\n      overflow: hidden;\n    }\n\n    .campus-image-placeholder[_ngcontent-%COMP%] {\n      height: 160px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .campus-content[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .campus-name[_ngcontent-%COMP%] {\n      font-size: var(--font-size-xl);\n      font-weight: var(--font-weight-semibold);\n      margin-bottom: var(--space-1);\n    }\n\n    .campus-location[_ngcontent-%COMP%] {\n      font-size: var(--font-size-sm);\n      color: var(--color-primary-600);\n      font-weight: var(--font-weight-medium);\n      margin-bottom: var(--space-2);\n    }\n\n    .campus-description[_ngcontent-%COMP%] {\n      font-size: var(--font-size-sm);\n      color: var(--color-gray-600);\n      margin-bottom: var(--space-4);\n      flex: 1;\n    }\n\n    .campus-details[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: var(--space-2);\n      font-size: var(--font-size-sm);\n      color: var(--color-gray-500);\n    }\n\n    .detail[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: var(--space-2);\n    }\n\n    .detail[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n      flex-shrink: 0;\n      color: var(--color-gray-400);\n    }\n\n    \n    .cta-section[_ngcontent-%COMP%] {\n      padding: var(--space-16) 0;\n      background: var(--color-primary-600);\n    }\n\n    .cta-card[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.1);\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      backdrop-filter: blur(12px);\n      -webkit-backdrop-filter: blur(12px);\n    }\n\n    .cta-title[_ngcontent-%COMP%] {\n      font-size: var(--font-size-3xl);\n      font-weight: var(--font-weight-bold);\n      color: white;\n      margin-bottom: var(--space-4);\n    }\n\n    .cta-description[_ngcontent-%COMP%] {\n      font-size: var(--font-size-lg);\n      color: rgba(255, 255, 255, 0.9);\n      max-width: 600px;\n      margin: 0 auto var(--space-8);\n    }\n\n    .cta-actions[_ngcontent-%COMP%] {\n      display: flex;\n      gap: var(--space-4);\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n\n    .cta-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n      background: white;\n      color: var(--color-primary-600);\n    }\n\n    .cta-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n      background: var(--color-gray-100);\n    }\n\n    .cta-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n      border-color: white;\n      color: white;\n    }\n\n    .cta-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.1);\n    }\n\n    \n    .footer[_ngcontent-%COMP%] {\n      background: var(--color-gray-900);\n      color: var(--color-gray-300);\n      padding: var(--space-12) 0 var(--space-6);\n    }\n\n    .footer-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: var(--space-8);\n      margin-bottom: var(--space-8);\n    }\n\n    @media (min-width: 640px) {\n      .footer-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .footer-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 2fr 1fr 1fr 1fr;\n      }\n    }\n\n    .footer-logo[_ngcontent-%COMP%] {\n      margin-bottom: var(--space-3);\n    }\n\n    .footer-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: var(--font-size-xl);\n      font-weight: var(--font-weight-bold);\n      color: white;\n      margin-bottom: var(--space-2);\n    }\n\n    .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      color: var(--color-gray-400);\n      margin: 0;\n    }\n\n    .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-size: var(--font-size-base);\n      font-weight: var(--font-weight-semibold);\n      color: white;\n      margin-bottom: var(--space-4);\n    }\n\n    .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin-bottom: var(--space-2);\n    }\n\n    .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: var(--color-gray-400);\n      transition: color var(--transition-fast);\n    }\n\n    .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: white;\n    }\n\n    .footer-contact[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n      font-style: normal;\n      color: var(--color-gray-400);\n    }\n\n    .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: var(--space-1) 0;\n    }\n\n    .footer-bottom[_ngcontent-%COMP%] {\n      padding-top: var(--space-6);\n      border-top: 1px solid var(--color-gray-800);\n      text-align: center;\n      color: var(--color-gray-500);\n      font-size: var(--font-size-sm);\n    }\n\n    \n    .section-header[_ngcontent-%COMP%] {\n      margin-bottom: var(--space-10);\n    }\n\n    .section-title[_ngcontent-%COMP%] {\n      font-size: var(--font-size-3xl);\n      font-weight: var(--font-weight-bold);\n      margin-bottom: var(--space-2);\n    }\n\n    .section-description[_ngcontent-%COMP%] {\n      font-size: var(--font-size-lg);\n      color: var(--color-gray-600);\n      margin: 0;\n    }\n\n    .text-center[_ngcontent-%COMP%] {\n      text-align: center;\n    }\n\n    \n    .grid[_ngcontent-%COMP%] {\n      display: grid;\n      gap: var(--space-6);\n    }\n\n    .grid-3[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n\n    @media (min-width: 768px) {\n      .grid-3[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .grid-3[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(3, 1fr);\n      }\n    }\n\n    \n    .bg-gray-50[_ngcontent-%COMP%] {\n      background: var(--color-gray-50);\n    }\n\n    .text-primary[_ngcontent-%COMP%] {\n      color: var(--color-primary-600);\n    }\n\n    .bg-primary-100[_ngcontent-%COMP%] {\n      background: var(--color-primary-100);\n    }\n\n    .text-primary[_ngcontent-%COMP%] {\n      color: var(--color-primary-600);\n    }\n\n    .bg-secondary-100[_ngcontent-%COMP%] {\n      background: var(--color-secondary-100);\n    }\n\n    .text-secondary[_ngcontent-%COMP%] {\n      color: var(--color-secondary-600);\n    }\n\n    .bg-accent-100[_ngcontent-%COMP%] {\n      background: var(--color-accent-100);\n    }\n\n    .text-accent[_ngcontent-%COMP%] {\n      color: var(--color-accent-600);\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="null"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="container">
            <div class="hero-content">
              <h1 class="hero-title">
                KCA University Peer Counselling<br>
                <span class="text-primary">& Wellness Hub</span>
              </h1>
              <p class="hero-subtitle">
                Your trusted digital wellness platform connecting students, trained peer counselors, 
                and professional guidance staff across all KCA University campuses.
              </p>
              <div class="hero-actions">
                <app-button 
                  variant="primary" 
                  size="lg" 
                  routerLink="/auth/register"
                >
                  Get Started Free
                </app-button>
                <app-button 
                  variant="outline" 
                  size="lg" 
                  routerLink="/campus-selection"
                >
                  Explore Campuses
                </app-button>
              </div>
            </div>
            <div class="hero-visual">
              <div class="hero-illustration" aria-hidden="true">
                <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="50" width="300" height="250" rx="16" fill="var(--color-primary-50)" stroke="var(--color-primary-200)" stroke-width="2"/>
                  <circle cx="200" cy="120" r="40" fill="var(--color-primary-100)"/>
                  <path d="M200 160 L200 250" stroke="var(--color-primary-300)" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="140" cy="280" r="30" fill="var(--color-secondary-100)"/>
                  <circle cx="260" cy="280" r="30" fill="var(--color-accent-100)"/>
                  <path d="M140 280 L140 310" stroke="var(--color-secondary-300)" stroke-width="3" stroke-linecap="round"/>
                  <path d="M260 280 L260 310" stroke="var(--color-accent-300)" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="features-section section">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title">Comprehensive Wellness Support</h2>
              <p class="section-description">
                Designed specifically for KCA University students across Ruaraka, Town, and Kitengela campuses
              </p>
            </div>
            <div class="grid grid-3">
              <app-card variant="interactive" padding="lg" class="feature-card">
                <div class="feature-icon bg-primary-100 text-primary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Peer Counselling</h3>
                <p class="feature-description">
                  Connect with trained student peer counselors for active listening, academic support, and wellness guidance
                </p>
              </app-card>
              <app-card variant="interactive" padding="lg" class="feature-card">
                <div class="feature-icon bg-secondary-100 text-secondary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Professional Counselling</h3>
                <p class="feature-description">
                  Book appointments with qualified guidance staff for professional mental health support
                </p>
              </app-card>
              <app-card variant="interactive" padding="lg" class="feature-card">
                <div class="feature-icon bg-accent-100 text-accent">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Wellness Resources</h3>
                <p class="feature-description">
                  Access articles, videos, guided exercises, and self-help tools for mental wellbeing
                </p>
              </app-card>
              <app-card variant="interactive" padding="lg" class="feature-card">
                <div class="feature-icon bg-primary-100 text-primary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 class="feature-title">Appointment Booking</h3>
                <p class="feature-description">
                  Schedule virtual or in-person sessions with campus-specific availability and reminders
                </p>
              </app-card>
              <app-card variant="interactive" padding="lg" class="feature-card">
                <div class="feature-icon bg-secondary-100 text-secondary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Secure Chat</h3>
                <p class="feature-description">
                  Private messaging with typing indicators, read receipts, and supervisor escalation
                </p>
              </app-card>
              <app-card variant="interactive" padding="lg" class="feature-card">
                <div class="feature-icon bg-accent-100 text-accent">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M23 6l-7.5 7.5L12 14l-4.5 4.5L3 18"></path>
                    <path d="M17 18V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Wellness Journey</h3>
                <p class="feature-description">
                  Track mood, complete challenges, and monitor your personal wellness progress
                </p>
              </app-card>
            </div>
          </div>
        </section>

        <!-- Campuses Section -->
        <section class="campuses-section section bg-gray-50">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title">Our Campuses</h2>
              <p class="section-description">
                Wellness support tailored to each KCA University campus location
              </p>
            </div>
            <div class="grid grid-3">
              <app-card *ngFor="let campus of campuses" variant="hover" padding="lg" class="campus-card" (click)="selectCampus(campus.id)" style="cursor: pointer;">
                <div class="campus-image">
                  <div class="campus-image-placeholder" [style.background]="campusGradient[campus.id]">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                </div>
                <div class="campus-content">
                  <h3 class="campus-name">{{ campus.fullName }}</h3>
                  <p class="campus-location">{{ campus.location }}</p>
                  <p class="campus-description">{{ campus.description }}</p>
                  <div class="campus-details">
                    <span class="detail"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>{{ campus.address }}</span>
                    <span class="detail"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>{{ campus.phone }}</span>
                  </div>
                </div>
              </app-card>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section section">
          <div class="container">
            <app-card variant="filled" class="cta-card text-center">
              <h2 class="cta-title">Ready to Start Your Wellness Journey?</h2>
              <p class="cta-description">
                Join thousands of KCA University students already benefiting from peer support, 
                professional counselling, and wellness resources.
              </p>
              <div class="cta-actions">
                <app-button variant="primary" size="lg" routerLink="/auth/register">
                  Create Free Account
                </app-button>
                <app-button variant="secondary" size="lg" routerLink="/campus-selection">
                  Select Your Campus
                </app-button>
              </div>
            </app-card>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-logo">
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="8" fill="var(--color-primary-600)"/>
                  <path d="M18 8L26 18L18 28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>KCA Wellness Hub</h3>
              <p>Your trusted digital wellness platform for KCA University students.</p>
            </div>
            <div class="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a routerLink="/campus-selection">Campuses</a></li>
                <li><a routerLink="/auth/login">Student Login</a></li>
                <li><a routerLink="/auth/register">Register</a></li>
                <li><a href="#">Urgent Help</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Peer Counselling</a></li>
                <li><a href="#">Professional Counselling</a></li>
                <li><a href="#">Wellness Resources</a></li>
                <li><a href="#">Events & Gallery</a></li>
              </ul>
            </div>
            <div class="footer-contact">
              <h4>Contact Us</h4>
              <address>
                <p>KCA University, Thika Superhighway</p>
                <p>Ruaraka, Nairobi, Kenya</p>
                <p>Email: wellness&#64;kca.ac.ke</p>
                <p>Phone: +254 700 000 000</p>
              </address>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; {{ currentYear }} KCA University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
                styles: [`
    .app-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
      padding-top: var(--header-height);
    }

    .container {
      width: 100%;
      max-width: var(--max-width-container);
      margin: 0 auto;
      padding: 0 var(--space-4);
    }

    /* Hero Section */
    .hero-section {
      padding: var(--space-16) 0;
      background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-50) 100%);
    }

    .hero-content {
      max-width: 700px;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-tight);
      color: var(--color-gray-900);
      margin-bottom: var(--space-6);
    }

    .hero-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-gray-600);
      line-height: var(--line-height-relaxed);
      margin-bottom: var(--space-8);
    }

    .hero-actions {
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
    }

    .hero-visual {
      display: none;
    }

    @media (min-width: 768px) {
      .hero-section .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-12);
        align-items: center;
      }

      .hero-visual {
        display: block;
      }

      .hero-illustration {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      .hero-illustration svg {
        width: 100%;
        height: auto;
      }
    }

    /* Features Section */
    .features-section {
      padding: var(--space-16) 0;
    }

    .feature-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .feature-icon {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-4);
    }

    .feature-title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-2);
    }

    .feature-description {
      color: var(--color-gray-600);
      margin: 0;
      flex: 1;
    }

    /* Campuses Section */
    .campuses-section {
      padding: var(--space-16) 0;
    }

    .campus-card {
      overflow: hidden;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }

    .campus-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    .campus-image {
      margin: calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-5);
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
      overflow: hidden;
    }

    .campus-image-placeholder {
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .campus-content {
      display: flex;
      flex-direction: column;
    }

    .campus-name {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-1);
    }

    .campus-location {
      font-size: var(--font-size-sm);
      color: var(--color-primary-600);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--space-2);
    }

    .campus-description {
      font-size: var(--font-size-sm);
      color: var(--color-gray-600);
      margin-bottom: var(--space-4);
      flex: 1;
    }

    .campus-details {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      font-size: var(--font-size-sm);
      color: var(--color-gray-500);
    }

    .detail {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    .detail svg {
      flex-shrink: 0;
      color: var(--color-gray-400);
    }

    /* CTA Section */
    .cta-section {
      padding: var(--space-16) 0;
      background: var(--color-primary-600);
    }

    .cta-card {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .cta-title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      color: white;
      margin-bottom: var(--space-4);
    }

    .cta-description {
      font-size: var(--font-size-lg);
      color: rgba(255, 255, 255, 0.9);
      max-width: 600px;
      margin: 0 auto var(--space-8);
    }

    .cta-actions {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-actions .btn-primary {
      background: white;
      color: var(--color-primary-600);
    }

    .cta-actions .btn-primary:hover {
      background: var(--color-gray-100);
    }

    .cta-actions .btn-secondary {
      border-color: white;
      color: white;
    }

    .cta-actions .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Footer */
    .footer {
      background: var(--color-gray-900);
      color: var(--color-gray-300);
      padding: var(--space-12) 0 var(--space-6);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-8);
      margin-bottom: var(--space-8);
    }

    @media (min-width: 640px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .footer-grid {
        grid-template-columns: 2fr 1fr 1fr 1fr;
      }
    }

    .footer-logo {
      margin-bottom: var(--space-3);
    }

    .footer-brand h3 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-bold);
      color: white;
      margin-bottom: var(--space-2);
    }

    .footer-brand p {
      color: var(--color-gray-400);
      margin: 0;
    }

    .footer-links h4 {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: white;
      margin-bottom: var(--space-4);
    }

    .footer-links ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: var(--space-2);
    }

    .footer-links a {
      color: var(--color-gray-400);
      transition: color var(--transition-fast);
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-contact address {
      font-style: normal;
      color: var(--color-gray-400);
    }

    .footer-contact p {
      margin: var(--space-1) 0;
    }

    .footer-bottom {
      padding-top: var(--space-6);
      border-top: 1px solid var(--color-gray-800);
      text-align: center;
      color: var(--color-gray-500);
      font-size: var(--font-size-sm);
    }

    /* Section Header */
    .section-header {
      margin-bottom: var(--space-10);
    }

    .section-title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--space-2);
    }

    .section-description {
      font-size: var(--font-size-lg);
      color: var(--color-gray-600);
      margin: 0;
    }

    .text-center {
      text-align: center;
    }

    /* Grid */
    .grid {
      display: grid;
      gap: var(--space-6);
    }

    .grid-3 {
      grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
      .grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .grid-3 {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* Utility */
    .bg-gray-50 {
      background: var(--color-gray-50);
    }

    .text-primary {
      color: var(--color-primary-600);
    }

    .bg-primary-100 {
      background: var(--color-primary-100);
    }

    .text-primary {
      color: var(--color-primary-600);
    }

    .bg-secondary-100 {
      background: var(--color-secondary-100);
    }

    .text-secondary {
      color: var(--color-secondary-600);
    }

    .bg-accent-100 {
      background: var(--color-accent-100);
    }

    .text-accent {
      color: var(--color-accent-600);
    }
  `]
            }]
    }], function () { return [{ type: _core_services_campus_service__WEBPACK_IMPORTED_MODULE_1__["CampusService"] }]; }, null); })();


/***/ }),

/***/ "WMCE":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "JhD/");







class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map