(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "WRKP":
/*!****************************************************!*\
  !*** ./src/app/admin/admin-dashboard.component.ts ***!
  \****************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/card/card.component */ "L21D");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/button/button.component */ "VkHG");





class AdminDashboardComponent {
    constructor() {
        this.user = { firstName: 'Admin' };
        this.navItems = [
            { label: 'Dashboard', route: '/admin', icon: 'dashboard', active: true },
            { label: 'Users', route: '/admin/users', icon: 'users' },
            { label: 'Campuses', route: '/admin/campuses', icon: 'map-pin' },
            { label: 'Settings', route: '/admin/settings', icon: 'settings' }
        ];
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 31, vars: 3, consts: [[1, "app-layout"], [3, "navItems", "user", "sidebarOpen"], [1, "main-content-with-sidebar"], [1, "container"], [1, "page-header"], [1, "page-title"], [1, "page-description"], [1, "grid", "grid-3"], ["variant", "interactive", "padding", "lg"], [1, "card-title"], [1, "card-text"], ["variant", "primary", 1, "mt-4"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "System administration and management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Manage users, roles, and permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Manage Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Campus Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Configure campus settings and resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Manage Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "System Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Configure system-wide settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Settings");
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
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
            <h1 class="page-title">Admin Dashboard</h1>
            <p class="page-description">System administration and management</p>
          </div>

          <div class="grid grid-3">
            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">User Management</h3>
              <p class="card-text">Manage users, roles, and permissions</p>
              <app-button variant="primary" class="mt-4">Manage Users</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">Campus Management</h3>
              <p class="card-text">Configure campus settings and resources</p>
              <app-button variant="primary" class="mt-4">Manage Campuses</app-button>
            </app-card>

            <app-card variant="interactive" padding="lg">
              <h3 class="card-title">System Settings</h3>
              <p class="card-text">Configure system-wide settings</p>
              <app-button variant="primary" class="mt-4">Settings</app-button>
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

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard.component */ "WRKP");







class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"] }
                    ])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map