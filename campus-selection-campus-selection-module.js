(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campus-selection-campus-selection-module"],{

/***/ "L1wD":
/*!*************************************************************!*\
  !*** ./src/app/campus-selection/campus-selection.module.ts ***!
  \*************************************************************/
/*! exports provided: CampusSelectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusSelectionModule", function() { return CampusSelectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _campus_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campus-selection.component */ "W+ir");







class CampusSelectionModule {
}
CampusSelectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CampusSelectionModule });
CampusSelectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CampusSelectionModule_Factory(t) { return new (t || CampusSelectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _campus_selection_component__WEBPACK_IMPORTED_MODULE_4__["CampusSelectionComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampusSelectionModule, { declarations: [_campus_selection_component__WEBPACK_IMPORTED_MODULE_4__["CampusSelectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampusSelectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_campus_selection_component__WEBPACK_IMPORTED_MODULE_4__["CampusSelectionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _campus_selection_component__WEBPACK_IMPORTED_MODULE_4__["CampusSelectionComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "W+ir":
/*!****************************************************************!*\
  !*** ./src/app/campus-selection/campus-selection.component.ts ***!
  \****************************************************************/
/*! exports provided: CampusSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusSelectionComponent", function() { return CampusSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_campus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/campus.service */ "cIAp");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/card/card.component */ "L21D");






function CampusSelectionComponent_app_card_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CampusSelectionComponent_app_card_18_Template_app_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const campus_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCampus(campus_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
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
} }
class CampusSelectionComponent {
    constructor(campusService) {
        this.campusService = campusService;
        this.campuses = [];
        this.campusGradient = {
            'ruaraka': 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            'town': 'linear-gradient(135deg, #16a34a, #15803d)',
            'kitengela': 'linear-gradient(135deg, #ea580c, #c2410c)'
        };
        this.navItems = [
            { label: 'Login', route: '/auth/login', icon: 'log-in' },
            { label: 'Sign Up', route: '/auth/register', icon: 'user-plus' }
        ];
    }
    ngOnInit() {
        this.campuses = this.campusService.getCampuses();
    }
    selectCampus(campus) {
        this.campusService.setSelectedCampus(campus);
    }
}
CampusSelectionComponent.ɵfac = function CampusSelectionComponent_Factory(t) { return new (t || CampusSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_campus_service__WEBPACK_IMPORTED_MODULE_1__["CampusService"])); };
CampusSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampusSelectionComponent, selectors: [["app-campus-selection"]], decls: 19, vars: 4, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content"], [1, "hero-section"], [1, "container"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], [1, "campuses-section", "section"], [1, "section-header", "text-center"], [1, "section-title"], [1, "section-description"], [1, "grid", "grid-3"], ["variant", "hover", "padding", "lg", "class", "campus-card", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["variant", "hover", "padding", "lg", 1, "campus-card", 2, "cursor", "pointer", 3, "click"], [1, "campus-image"], [1, "campus-image-placeholder"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "1.5", "aria-hidden", "true"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "campus-content"], [1, "campus-name"], [1, "campus-location"], [1, "campus-description"]], template: function CampusSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select Your Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Choose your KCA University campus to access personalized wellness support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Our Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Wellness support tailored to each KCA University campus location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CampusSelectionComponent_app_card_18_Template, 13, 5, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("user", null)("sidebarOpen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campuses);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: [".app-layout[_ngcontent-%COMP%] { min-height: 100vh; display: flex; flex-direction: column; }\n    .main-content[_ngcontent-%COMP%] { flex: 1; padding-top: var(--header-height); }\n    .container[_ngcontent-%COMP%] { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }\n    .hero-section[_ngcontent-%COMP%] { padding: var(--space-16) 0; background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-50) 100%); }\n    .hero-title[_ngcontent-%COMP%] { font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-4); }\n    .hero-subtitle[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); }\n    .campuses-section[_ngcontent-%COMP%] { padding: var(--space-16) 0; }\n    .campus-card[_ngcontent-%COMP%] { overflow: hidden; cursor: pointer; transition: transform var(--transition-normal); }\n    .campus-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); }\n    .campus-image[_ngcontent-%COMP%] { margin: calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-5); border-radius: var(--radius-xl) var(--radius-xl) 0 0; overflow: hidden; }\n    .campus-image-placeholder[_ngcontent-%COMP%] { height: 160px; display: flex; align-items: center; justify-content: center; }\n    .campus-content[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\n    .campus-name[_ngcontent-%COMP%] { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-1); }\n    .campus-location[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-primary-600); font-weight: var(--font-weight-medium); margin-bottom: var(--space-2); }\n    .campus-description[_ngcontent-%COMP%] { font-size: var(--font-size-sm); color: var(--color-gray-600); }\n    .section-header[_ngcontent-%COMP%] { margin-bottom: var(--space-10); }\n    .section-title[_ngcontent-%COMP%] { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }\n    .section-description[_ngcontent-%COMP%] { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }\n    .text-center[_ngcontent-%COMP%] { text-align: center; }\n    .grid[_ngcontent-%COMP%] { display: grid; gap: var(--space-6); }\n    .grid-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n    @media (min-width: 768px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1024px) { .grid-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampusSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campus-selection',
                template: `
    <div class="app-layout">
      <app-navbar 
        [navItems]="navItems"
        [user]="null"
        [sidebarOpen]="false"
      ></app-navbar>

      <main class="main-content">
        <section class="hero-section">
          <div class="container">
            <div class="hero-content">
              <h1 class="hero-title">Select Your Campus</h1>
              <p class="hero-subtitle">
                Choose your KCA University campus to access personalized wellness support
              </p>
            </div>
          </div>
        </section>

        <section class="campuses-section section">
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
                </div>
              </app-card>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
                styles: [`
    .app-layout { min-height: 100vh; display: flex; flex-direction: column; }
    .main-content { flex: 1; padding-top: var(--header-height); }
    .container { width: 100%; max-width: var(--max-width-container); margin: 0 auto; padding: 0 var(--space-4); }
    .hero-section { padding: var(--space-16) 0; background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-50) 100%); }
    .hero-title { font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-4); }
    .hero-subtitle { font-size: var(--font-size-lg); color: var(--color-gray-600); }
    .campuses-section { padding: var(--space-16) 0; }
    .campus-card { overflow: hidden; cursor: pointer; transition: transform var(--transition-normal); }
    .campus-card:hover { transform: translateY(-4px); }
    .campus-image { margin: calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-5); border-radius: var(--radius-xl) var(--radius-xl) 0 0; overflow: hidden; }
    .campus-image-placeholder { height: 160px; display: flex; align-items: center; justify-content: center; }
    .campus-content { display: flex; flex-direction: column; }
    .campus-name { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-1); }
    .campus-location { font-size: var(--font-size-sm); color: var(--color-primary-600); font-weight: var(--font-weight-medium); margin-bottom: var(--space-2); }
    .campus-description { font-size: var(--font-size-sm); color: var(--color-gray-600); }
    .section-header { margin-bottom: var(--space-10); }
    .section-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--space-2); }
    .section-description { font-size: var(--font-size-lg); color: var(--color-gray-600); margin: 0; }
    .text-center { text-align: center; }
    .grid { display: grid; gap: var(--space-6); }
    .grid-3 { grid-template-columns: 1fr; }
    @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
  `]
            }]
    }], function () { return [{ type: _core_services_campus_service__WEBPACK_IMPORTED_MODULE_1__["CampusService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=campus-selection-campus-selection-module.js.map