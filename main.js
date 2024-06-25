"use strict";
(self["webpackChunkitaap_demand_intake_ui"] = self["webpackChunkitaap_demand_intake_ui"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _intake_ui_components_view_demands_view_demands_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intake-ui/components/view-demands/view-demands.component */ 13437);
/* harmony import */ var _intake_ui_components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intake-ui/components/demand-intake/demand-intake.component */ 95595);
/* harmony import */ var _intake_ui_components_requirements_requirements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intake-ui/components/requirements/requirements.component */ 38533);
/* harmony import */ var _intake_ui_components_requester_requester_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intake-ui/components/requester/requester.component */ 88363);
/* harmony import */ var _intake_ui_components_solution_direction_solution_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intake-ui/components/solution-direction/solution-direction.component */ 45083);
/* harmony import */ var _intake_ui_components_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intake-ui/components/attachment/attachment.component */ 25415);
/* harmony import */ var _intake_ui_components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intake-ui/components/checklist/checklist.component */ 93787);
/* harmony import */ var _intake_ui_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intake-ui/components/introduction/introduction.component */ 35409);
/* harmony import */ var _intake_ui_components_demandmanager_demandmanager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intake-ui/components/demandmanager/demandmanager.component */ 47943);
/* harmony import */ var _intake_ui_components_ccb_ccb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./intake-ui/components/ccb/ccb.component */ 1115);
/* harmony import */ var _intake_ui_components_dmcrud_dmcrud_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./intake-ui/components/dmcrud/dmcrud.component */ 13859);
/* harmony import */ var _intake_ui_components_ccbcrud_ccbcrud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./intake-ui/components/ccbcrud/ccbcrud.component */ 59447);
/* harmony import */ var _intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./intake-ui/services/auth-guard.service */ 30690);
/* harmony import */ var _layout_main_app_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/main.app.layout.component */ 1036);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @azure/msal-angular */ 8653);
/* harmony import */ var _intake_ui_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./intake-ui/components/confirm/confirm.component */ 86811);
/* harmony import */ var _intake_ui_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./intake-ui/components/dashboard/dashboard.component */ 1499);
/* harmony import */ var _intake_ui_components_report_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./intake-ui/components/report/report.component */ 82613);
/* harmony import */ var _intake_ui_components_field_management_field_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./intake-ui/components/field-management/field-management.component */ 80793);
/* harmony import */ var _intake_ui_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./intake-ui/auth/login/login.component */ 9117);
/* harmony import */ var _intake_ui_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./intake-ui/auth/logout/logout.component */ 41079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
























const routes = [{
  path: 'login',
  component: _intake_ui_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__.LoginComponent
}, {
  path: '',
  component: _layout_main_app_layout_component__WEBPACK_IMPORTED_MODULE_13__.MainAppLayoutComponent,
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_20__.MsalGuard],
  children: [{
    path: 'dashboard',
    component: _intake_ui_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.DashboardComponent
  }, {
    path: 'view',
    component: _intake_ui_components_view_demands_view_demands_component__WEBPACK_IMPORTED_MODULE_0__.ViewDemandsComponent,
    canActivate: [_intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
  }, {
    path: 'report',
    component: _intake_ui_components_report_report_component__WEBPACK_IMPORTED_MODULE_16__.ReportComponent,
    canActivate: [_intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
  }, {
    path: 'dmcrud',
    component: _intake_ui_components_dmcrud_dmcrud_component__WEBPACK_IMPORTED_MODULE_10__.DMCRUDComponent,
    canActivate: [_intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
  }, {
    path: 'ccbcrud',
    component: _intake_ui_components_ccbcrud_ccbcrud_component__WEBPACK_IMPORTED_MODULE_11__.CCBCRUDComponent,
    canActivate: [_intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
  }, {
    path: 'fieldmgmt',
    component: _intake_ui_components_field_management_field_management_component__WEBPACK_IMPORTED_MODULE_17__.FieldManagementComponent,
    canActivate: [_intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
  }, {
    path: 'logout',
    component: _intake_ui_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__.LogoutComponent
  }, {
    path: 'demand-intake',
    component: _intake_ui_components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeComponent,
    canActivate: [_intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__.AuthGuard],
    children: [{
      path: '',
      component: _intake_ui_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__.IntroductionComponent
    }, {
      path: 'confirm',
      component: _intake_ui_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmComponent
    }, {
      path: 'introduction',
      component: _intake_ui_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__.IntroductionComponent
    }, {
      path: 'requester',
      component: _intake_ui_components_requester_requester_component__WEBPACK_IMPORTED_MODULE_3__.RequesterComponent
    }, {
      path: 'requirement',
      component: _intake_ui_components_requirements_requirements_component__WEBPACK_IMPORTED_MODULE_2__.RequirementsComponent
    }, {
      path: 'solution-direction',
      component: _intake_ui_components_solution_direction_solution_direction_component__WEBPACK_IMPORTED_MODULE_4__.SolutionDirectionComponent
    }, {
      path: 'checklist',
      component: _intake_ui_components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_6__.ChecklistComponent
    }, {
      path: 'attachment',
      component: _intake_ui_components_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_5__.AttachmentComponent
    }, {
      path: 'demandmanager',
      component: _intake_ui_components_demandmanager_demandmanager_component__WEBPACK_IMPORTED_MODULE_8__.DemandManagerComponent
    }, {
      path: 'ccb',
      component: _intake_ui_components_ccb_ccb_component__WEBPACK_IMPORTED_MODULE_9__.CCBComponent
    }, {
      path: 'introduction/:demandIntakeId',
      component: _intake_ui_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__.IntroductionComponent
    }, {
      path: 'requester/:demandIntakeId',
      component: _intake_ui_components_requester_requester_component__WEBPACK_IMPORTED_MODULE_3__.RequesterComponent
    }, {
      path: 'requirement/:demandIntakeId',
      component: _intake_ui_components_requirements_requirements_component__WEBPACK_IMPORTED_MODULE_2__.RequirementsComponent
    }, {
      path: 'solution-direction/:demandIntakeId',
      component: _intake_ui_components_solution_direction_solution_direction_component__WEBPACK_IMPORTED_MODULE_4__.SolutionDirectionComponent
    }, {
      path: 'checklist/:demandIntakeId',
      component: _intake_ui_components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_6__.ChecklistComponent
    }, {
      path: 'attachment/:demandIntakeId',
      component: _intake_ui_components_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_5__.AttachmentComponent
    }, {
      path: 'demandmanager/:demandIntakeId',
      component: _intake_ui_components_demandmanager_demandmanager_component__WEBPACK_IMPORTED_MODULE_8__.DemandManagerComponent
    }, {
      path: 'ccb/:demandIntakeId',
      component: _intake_ui_components_ccb_ccb_component__WEBPACK_IMPORTED_MODULE_9__.CCBComponent
    }]
  }, {
    path: 'demand-intake/:demandIntakeId',
    component: _intake_ui_components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeComponent,
    canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_20__.MsalGuard],
    children: [{
      path: '',
      component: _intake_ui_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__.IntroductionComponent
    }]
  }]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intake-ui/auth/auth.service */ 37440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




class AppComponent {
  constructor(primengConfig, authService, router) {
    this.primengConfig = primengConfig;
    this.authService = authService;
    this.router = router;
    this.title = 'itaap-demand-intake-ui';
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.router.navigate(['/login']);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _intake_ui_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intake-ui/services/demand-intake.service */ 96790);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intake-ui/auth/auth.service */ 37440);
/* harmony import */ var _intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intake-ui/services/auth-guard.service */ 30690);
/* harmony import */ var _layout_main_app_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/main.app.layout.module */ 95291);
/* harmony import */ var _intake_ui_intake_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intake-ui/intake-ui.module */ 73799);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @azure/msal-angular */ 8653);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @azure/msal-browser */ 57526);
/* harmony import */ var _intake_ui_auth_auth_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intake-ui/auth/auth-config */ 99812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [_intake_ui_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_2__.DemandIntakeService, primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService, _intake_ui_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuard, _intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__.HashLocationStrategy
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalInterceptor,
      multi: true
    }, {
      provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    }, {
      provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    }, {
      provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    }, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalService, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalGuard, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalBroadcastService],
    imports: [_layout_main_app_layout_module__WEBPACK_IMPORTED_MODULE_5__.MainAppLayoutModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _intake_ui_intake_ui_module__WEBPACK_IMPORTED_MODULE_6__.IntakeUIComponentsModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalModule.forRoot(MSALInstanceFactory(), MSALGuardConfigFactory(), MSALInterceptorConfigFactory())]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_layout_main_app_layout_module__WEBPACK_IMPORTED_MODULE_5__.MainAppLayoutModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _intake_ui_intake_ui_module__WEBPACK_IMPORTED_MODULE_6__.IntakeUIComponentsModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalModule]
  });
})();
function MSALInstanceFactory() {
  return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_14__.PublicClientApplication(_intake_ui_auth_auth_config__WEBPACK_IMPORTED_MODULE_7__.msalConfig);
}
function MSALGuardConfigFactory() {
  return _intake_ui_auth_auth_config__WEBPACK_IMPORTED_MODULE_7__.msalGuardConfig;
}
function MSALInterceptorConfigFactory() {
  return _intake_ui_auth_auth_config__WEBPACK_IMPORTED_MODULE_7__.msalInterceptorConfig;
}

/***/ }),

/***/ 99812:
/*!***********************************************!*\
  !*** ./src/app/intake-ui/auth/auth-config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msalConfig: () => (/* binding */ msalConfig),
/* harmony export */   msalGuardConfig: () => (/* binding */ msalGuardConfig),
/* harmony export */   msalInterceptorConfig: () => (/* binding */ msalInterceptorConfig)
/* harmony export */ });
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-browser */ 37395);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-browser */ 31436);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);


const msalConfig = {
  auth: {
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId,
    authority: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authority,
    redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.redirectUri
  },
  cache: {
    cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserCacheLocation.LocalStorage,
    // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    allowNativeBroker: false,
    // Disables native brokering support
    loggerOptions: {
      loggerCallback: (logLevel, message, piiEnabled) => {
        // console.log(message);
      },
      logLevel: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Info,
      piiLoggingEnabled: false
    }
  }
};
const msalInterceptorConfig = {
  interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__.InteractionType.Popup,
  protectedResourceMap: new Map([['https://graph.microsoft.com/v1.0/me', [_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope_default]], [_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/common/demand-intake/*', [_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope_demand_login]]])
};
const msalGuardConfig = {
  interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_1__.InteractionType.Popup,
  authRequest: {
    scopes: [_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope_demand_login, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope_default]
  }
};

/***/ }),

/***/ 37440:
/*!************************************************!*\
  !*** ./src/app/intake-ui/auth/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2435);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-browser */ 46385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-angular */ 8653);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ 70404);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);












class AuthService {
  constructor(http, router, msalAuthService, eventService, sanitizer, messageService) {
    this.http = http;
    this.router = router;
    this.msalAuthService = msalAuthService;
    this.eventService = eventService;
    this.sanitizer = sanitizer;
    this.messageService = messageService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    const userJson = localStorage.getItem('currentUser');
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(userJson !== null ? JSON.parse(userJson) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    console.log("AuthService : this.currentUser -> ", this.currentUserValue);
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  isDM() {
    return this.currentUserValue.role == "DEMAND_MANAGER";
  }
  isRequester() {
    return this.currentUserValue.role == "REQUESTER";
  }
  isCCB() {
    return this.currentUserValue.role == "CCB_MEMBER";
  }
  isAdmin() {
    return this.currentUserValue.isAdmin;
  }
  getCurrentUserRole() {
    if (this.isDM()) {
      return "DEMAND MANAGER";
    } else if (this.isCCB()) {
      return "CCB MEMBER";
    } else if (this.isAdmin()) {
      return "ADMIN";
    }
    return "REQUESTER";
  }
  ssoLogin(response) {
    let url = this.baseUrl + '/common/demand-intake/login';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': this.currentLoggedInUser.account.localAccountId + '.' + this.currentLoggedInUser.correlationId,
        'Authorization': `Bearer ${response.accessToken}`
      })
    };
    return this.http.post(url, response, headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
      // console.log("ssoLogin() Response :", user)
      // if (user && user.isAuthenticated) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      // }
      return user;
    }));
  }
  loginPopUp() {
    this.msalAuthService.loginPopup().subscribe({
      next: result => {
        this.getUserDataAndSilentToken();
        this.eventService.progressBarEvent.emit(true);
      },
      error: error => {
        console.error(error);
        this.eventService.progressBarEvent.emit(false);
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: 'Login Failed! : ' + error
        });
      }
    });
  }
  checkAccounts() {
    return this.msalAuthService.instance.getAllAccounts().length > 0;
  }
  loginSilently() {
    console.log('checkAccount : Token Received Login in Silently');
    this.getHandleRedirect().subscribe({
      next: result => {
        // console.log('Redirect Result:', result);
        this.currentLoggedInUser = result;
        this.getUserDataAndSilentToken();
      },
      error: error => console.error('Redirect Error:', error)
    });
  }
  getHandleRedirect() {
    return this.msalAuthService.handleRedirectObservable();
  }
  getUserDataAndSilentToken() {
    let popupRequest = {
      scopes: [src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope_demand_login],
      account: this.msalAuthService.instance.getAllAccounts()[0]
    };
    this.msalAuthService.instance.acquireTokenSilent(popupRequest).then(response => {
      console.log('getUserDataAndSilentToken() : SUCCESS : ', response.account.username);
      this.populateResponse(response);
    }).catch(error => {
      console.log('getUserDataAndSilentToken() : ERROR -> ', error);
      if (error instanceof _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__.InteractionRequiredAuthError) {
        this.msalAuthService.instance.acquireTokenPopup(popupRequest).then(response => {
          // console.log(response);
          this.populateResponse(response);
        });
      }
    });
  }
  populateResponse(response) {
    this.currentLoggedInUser = response;
    this.ssoLogin(response).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)()).subscribe(data => {
      this.getProfilePhoto();
      this.eventService.progressBarEvent.emit(true);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successful!'
      });
      this.router.navigate(['dashboard']);
      // this.router.navigateByUrl(this.router.url);
    }, error => {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.clear('retry');
      this.messageService.add({
        key: 'retry',
        severity: 'error',
        sticky: true,
        summary: 'Login Error',
        detail: error.message
      });
    });
  }
  getProfilePhoto() {
    const headers = {
      'Content-Type': 'image/jpeg',
      'Authorization': `Bearer ${this.currentLoggedInUser.accessToken}`
    };
    return this.http.get('https://graph.microsoft.com/v1.0/me/photo/$value', {
      headers,
      responseType: 'blob'
    }).subscribe(response => {
      console.log('getProfilePhoto() : SUCCESS -> ', response);
      const url = URL.createObjectURL(response);
      this.profilePhoto = this.sanitizer.bypassSecurityTrustUrl(url);
    }, error => {
      console.log('getProfilePhoto() : ERROR -> ', error);
    });
  }
  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.msalAuthService.instance.clearCache().then(r => {
      console.info("logout() : SUCCESS : Authenticated USER Cache Cleared");
    }, error => {
      console.info("logout() : ERROR : Authenticated USER Cache Clearing Error -> ", error);
    });
    window.location.reload();
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_9__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9117:
/*!*********************************************************!*\
  !*** ./src/app/intake-ui/auth/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ 37440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 53244);









function LoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 20)(8, "div", 21)(9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_ng_template_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onRetry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r3.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r3.detail);
  }
}
function LoginComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Signing In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_progressSpinner_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner", 24);
  }
}
class LoginComponent {
  constructor(eventService, messageService, authService) {
    this.eventService = eventService;
    this.messageService = messageService;
    this.authService = authService;
    this.title = 'itaap-demand-intake-ui';
    this.isProgressing = false;
  }
  ngOnInit() {
    this.eventService.progressBarEvent.subscribe(response => {
      this.isProgressing = response;
    });
    if (this.authService.checkAccounts()) {
      this.eventService.progressBarEvent.emit(true);
      this.authService.loginSilently();
    } else {
      console.log('checkAccount : Token not received. Please proceed with login.');
    }
  }
  ssoLogin() {
    this.messageService.clear('retry');
    this.eventService.progressBarEvent.emit(true);
    this.authService.getHandleRedirect().subscribe({
      next: result => {
        console.log('Redirect Result:', result);
        this.authService.loginPopUp();
      },
      error: error => console.error('Redirect Error:', error)
    });
  }
  onRetry() {
    this.messageService.clear('retry');
    this.eventService.progressBarEvent.emit(true);
    this.authService.populateResponse(this.authService.currentLoggedInUser);
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_0__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 23,
    vars: 5,
    consts: [["key", "retry"], ["pTemplate", "message"], [1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", 2, "border-radius", "53px"], [1, "text-center", "mb-5"], ["src", "assets/images/philips-logo.png", "alt", "Image", "height", "100", 1, "mb-3"], [1, "text-600", "text-xl", "font-medium", "mb-3"], [1, "text-900", "text-4xl", "font-medium", "mb-3"], [1, "text-900", "text-2xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], [1, "md:w-30rem"], ["pRipple", "", "styleClass", "w-full h-5rem", 3, "click", "disabled", "rounded"], [1, "w-full", "grid", "gap-3", "align-items-center", "justify-content-center"], ["class", "text-xl font-medium", 4, "ngIf"], ["styleClass", "w-3rem h-3rem", "strokeWidth", "8", "fill", "var(--surface-ground)", "aria-label", "Loading", "animationDuration", ".5s", 4, "ngIf"], [1, "flex", "flex-column", 2, "flex", "1"], [1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "font-size", "3rem"], [1, "grid", "p-fluid"], [1, "col-12"], ["type", "button", "icon", "pi pi-refresh", "pButton", "", "label", "Retry", 1, "p-button-danger", 3, "click"], [1, "text-xl", "font-medium"], ["styleClass", "w-3rem h-3rem", "strokeWidth", "8", "fill", "var(--surface-ground)", "aria-label", "Loading", "animationDuration", ".5s"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_ng_template_2_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "EADI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Demand Intake Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sign in to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "p-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_p_button_click_18_listener() {
          return ctx.ssoLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 0, "span", 15)(21, LoginComponent_span_21_Template, 2, 0, "span", 15)(22, LoginComponent_p_progressSpinner_22_Template, 1, 0, "p-progressSpinner", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isProgressing)("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isProgressing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isProgressing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isProgressing);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinner],
    encapsulation: 2
  });
}

/***/ }),

/***/ 41079:
/*!***********************************************************!*\
  !*** ./src/app/intake-ui/auth/logout/logout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 37440);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);







function LogoutComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogoutComponent_ng_template_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const cd_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](cd_r2.reject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogoutComponent_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const cd_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](cd_r2.accept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r3.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r3.message);
  }
}
class LogoutComponent {
  constructor(router, authService, confirmationService, messageService) {
    this.router = router;
    this.authService = authService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to Logout!',
      accept: () => {
        this.authService.logout();
        this.router.navigate(['login']);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 1000
        });
        this.router.navigate(['view']);
      }
    });
  }
  static #_ = this.ɵfac = function LogoutComponent_Factory(t) {
    return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    decls: 4,
    vars: 0,
    consts: [["cd", ""], ["pTemplate", "headless"], [1, "flex", "flex-column", "align-items-center", "p-5", "surface-overlay", "border-round"], [1, "border-circle", "bg-primary", "inline-flex", "justify-content-center", "align-items-center", "h-6rem", "w-6rem", "-mt-8"], [1, "pi", "pi-question", "text-5xl"], [1, "font-bold", "text-2xl", "block", "mb-2", "mt-4"], [1, "mb-0"], [1, "flex", "align-items-center", "gap-2", "mt-4"], ["pButton", "", "label", "No", 1, "p-button-outlined", "w-8rem", 3, "click"], ["pButton", "", "label", "Yes", 1, "w-8rem", 3, "click"]],
    template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-confirmDialog", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LogoutComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialog],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25415:
/*!*************************************************************************!*\
  !*** ./src/app/intake-ui/components/attachment/attachment.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttachmentComponent: () => (/* binding */ AttachmentComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2435);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ 47593);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/overlaypanel */ 34198);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/fileupload */ 13209);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmpopup */ 22346);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputgroup */ 64661);



























const _c0 = () => ({
  "min-width": "50rem"
});
function AttachmentComponent_p_fileUpload_11_ng_template_1_p_progressBar_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "p-progressBar", 42);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r2.uploadProgress)("showValue", false);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "div")(2, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttachmentComponent_p_fileUpload_11_ng_template_1_Template_p_button_onClick_2_listener($event) {
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const chooseCallback_r6 = ctx_r4.chooseCallback;
      const uploadCallback_r7 = ctx_r4.uploadCallback;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.choose($event, chooseCallback_r6, uploadCallback_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttachmentComponent_p_fileUpload_11_ng_template_1_Template_p_button_onClick_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](op_r8.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AttachmentComponent_p_fileUpload_11_ng_template_1_p_progressBar_9_Template, 1, 2, "p-progressBar", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const files_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rounded", true)("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rounded", true)("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_DRAG_DROP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", files_r9.length > 0);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alt", file_r10.name)("src", file_r10.objectURL, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_div_4_div_1_Template, 2, 2, "div", 43)(2, AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_div_4_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "p-badge", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", file_r10.type.startsWith("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !file_r10.type.startsWith("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](file_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.formatSize(file_r10.size));
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_div_4_Template, 9, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const files_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_PENDING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", files_r11);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alt", file_r12.name)("src", file_r12.objectURL, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_div_4_div_1_Template, 2, 2, "div", 43)(2, AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_div_4_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "p-badge", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", file_r12.type.startsWith("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !file_r12.type.startsWith("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](file_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.formatSize(file_r12.size));
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_div_4_Template, 9, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_COMPLETED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.uploadedFiles);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AttachmentComponent_p_fileUpload_11_ng_template_2_div_0_Template, 5, 2, "div", 43)(1, AttachmentComponent_p_fileUpload_11_ng_template_2_div_1_Template, 5, 2, "div", 43);
  }
  if (rf & 2) {
    const files_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", files_r11.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.uploadedFiles.length > 0);
  }
}
function AttachmentComponent_p_fileUpload_11_ng_template_3_Template(rf, ctx) {}
function AttachmentComponent_p_fileUpload_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-fileUpload", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onUpload", function AttachmentComponent_p_fileUpload_11_Template_p_fileUpload_onUpload_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onTemplatedUpload($event));
    })("uploadHandler", function AttachmentComponent_p_fileUpload_11_Template_p_fileUpload_uploadHandler_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.customUploadHandler());
    })("onSelect", function AttachmentComponent_p_fileUpload_11_Template_p_fileUpload_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onSelectedFiles($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AttachmentComponent_p_fileUpload_11_ng_template_1_Template, 10, 6, "ng-template", 32)(2, AttachmentComponent_p_fileUpload_11_ng_template_2_Template, 2, 2, "ng-template", 33)(3, AttachmentComponent_p_fileUpload_11_ng_template_3_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("url", ctx_r2.fileUploadUrl)("multiple", true)("headers", ctx_r2.httpHeaders)("maxFileSize", ctx_r2.attachmentMaxFileSize)("customUpload", true);
  }
}
function AttachmentComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_FILE_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_UPLOADED_BY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_ROLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_UPLOADED_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_SIZE"));
  }
}
function AttachmentComponent_ng_template_15_ng_template_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_ng_template_15_ng_template_5_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const attachment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onRowEditSave(attachment_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AttachmentComponent_ng_template_15_ng_template_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_ng_template_15_ng_template_5_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const attachment_r14 = ctx_r16.$implicit;
      const ri_r18 = ctx_r16.rowIndex;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onRowEditCancel(attachment_r14, ri_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AttachmentComponent_ng_template_15_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-inputGroup")(1, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AttachmentComponent_ng_template_15_ng_template_5_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const attachment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](attachment_r14.description, $event) || (attachment_r14.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AttachmentComponent_ng_template_15_ng_template_5_button_2_Template, 1, 0, "button", 65)(3, AttachmentComponent_ng_template_15_ng_template_5_button_3_Template, 1, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const attachment_r14 = ctx_r16.$implicit;
    const editing_r19 = ctx_r16.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", attachment_r14.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", editing_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", editing_r19);
  }
}
function AttachmentComponent_ng_template_15_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const attachment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", attachment_r14.description, " ");
  }
}
function AttachmentComponent_ng_template_15_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_ng_template_15_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const attachment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onRowEditInit(attachment_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AttachmentComponent_ng_template_15_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_ng_template_15_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const attachment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.downloadAttachment(attachment_r14.attachmentId, attachment_r14.fileName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AttachmentComponent_ng_template_15_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_ng_template_15_button_20_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const attachment_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.deleteAttachmentPopup($event, attachment_r14.attachmentId, attachment_r14.fileName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const editing_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", editing_r19);
  }
}
function AttachmentComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 55)(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td")(4, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AttachmentComponent_ng_template_15_ng_template_5_Template, 4, 3, "ng-template", 57)(6, AttachmentComponent_ng_template_15_ng_template_6_Template, 1, 1, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 59)(17, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AttachmentComponent_ng_template_15_button_18_Template, 1, 0, "button", 61)(19, AttachmentComponent_ng_template_15_button_19_Template, 1, 0, "button", 62)(20, AttachmentComponent_ng_template_15_button_20_Template, 1, 1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const attachment_r14 = ctx.$implicit;
    const editing_r19 = ctx.editing;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pEditableRow", attachment_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attachment_r14.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attachment_r14.uploadedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attachment_r14.uploaderRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 9, attachment_r14.uploadedDate, "MMM dd, yyyy hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.formatSize(attachment_r14.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !editing_r19 && !ctx_r2.isDeleteDisabled(attachment_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !editing_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isDeleteDisabled(attachment_r14));
  }
}
function AttachmentComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.fieldsService.getLabel("ATTACHMENTS_NOT_PRESENT"));
  }
}
function AttachmentComponent_p_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttachmentComponent_p_button_19_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r2.fieldsService.getLabel("NEXT_BUTTON"));
  }
}
function AttachmentComponent_p_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttachmentComponent_p_button_20_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.savePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r2.fieldsService.getLabel("SAVE_FOR_LATER"));
  }
}
function AttachmentComponent_p_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttachmentComponent_p_button_21_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.submitPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r2.submitDemandLabel);
  }
}
class AttachmentComponent {
  constructor(config, fieldsService, constants, demandIntakeService, router, messageService, authService, eventService, confirmationService) {
    this.config = config;
    this.fieldsService = fieldsService;
    this.constants = constants;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.messageService = messageService;
    this.authService = authService;
    this.eventService = eventService;
    this.confirmationService = confirmationService;
    this.attachmentInfo = [];
    this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders();
    this.attachmentMaxFileSize = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.attachmentMaxFileSize;
    this.hyperlinkDescription = '';
    this.hyperlink = '';
    this.files = [];
    this.uploadedFiles = [];
    this.totalSize = 0;
    this.totalSizePercent = 0;
    this.uploadProgress = 0;
    this.clonedAttachments = {};
    this.visibleAttachmentUpload = true;
    this.attachmentMaxFileSize = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.attachmentMaxFileSize;
    if (authService.isRequester()) {
      if (!this.eventService.isNewDemand && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM) {
        this.visibleNextButton = true;
        this.visibleAttachmentUpload = false;
      } else {
        this.visibleNextButton = false;
        if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
          this.visibleAttachmentUpload = false;
          this.visibleSubmitButton = false;
        } else {
          this.visibleSubmitButton = true;
        }
      }
    } else {
      if (authService.isDM() || authService.isCCB()) {
        if (this.eventService.isNewDemand && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand)) {
          this.visibleNextButton = false;
          this.visibleSubmitButton = true;
        } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DM_MODIFICATION || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_MODIFICATION)) {
          this.visibleNextButton = false;
          this.visibleSubmitButton = true;
        } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM) {
          this.visibleNextButton = true;
          this.visibleSubmitButton = false;
        } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT) {
          this.visibleNextButton = false;
          this.visibleSubmitButton = false;
        } else if (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT) {
          this.visibleNextButton = true;
          this.visibleSubmitButton = false;
        } else {
          this.visibleNextButton = false;
          this.visibleSubmitButton = false;
        }
      }
    }
    let dmList = this.demandIntakeService.demandInformation.solutionDirectionInfo.filter(item => item.dmEmail === this.authService.currentUserValue.email && (item.decision === 'APPROVED' || item.decision === 'REJECTED'));
    if (dmList.length > 0) {
      this.isDMActionDone = true;
    }
    if (authService.isDM()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_CCB && this.isDMActionDone || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DM_REJECTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_REJECTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_HOLD) {
        this.visibleAttachmentUpload = false;
      }
    } else if (authService.isCCB()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_REJECTED) {
        this.visibleAttachmentUpload = false;
      }
    }
    if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
    if (this.eventService.isStakeholderDemand && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
      this.visibleSubmitButton = false;
    }
  }
  ngOnInit() {
    this.submitDemandLabel = 'Raise Demand';
    if (this.demandIntakeService.getDemandInformation().introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DM_MODIFICATION || this.demandIntakeService.getDemandInformation().introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_MODIFICATION) {
      this.submitDemandLabel = 'Update Demand';
    }
    if (this.demandIntakeService.demandInformation.introduction.demandIntakeId == 0) {
      this.demandIntakeService.saveDemand().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe(response => {
        console.log("saveDemand() : Response -> ", response);
        this.demandIntakeService.demandInformation.introduction.demandIntakeId = response.demandIntakeId;
        this.getAllAttachmentsByDemandId();
        this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
        this.fileUploadUrl = this.demandIntakeService.getAttachmentUploadURL();
      }, error => {
        console.log("saveDemand() : ERROR -> ", error);
      });
    } else {
      this.getAllAttachmentsByDemandId();
      this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
      this.fileUploadUrl = this.demandIntakeService.getAttachmentUploadURL();
    }
  }
  isDeleteDisabled(attachment) {
    if (attachment.uploadedBy != this.authService.currentUserValue.email) {
      return true;
    }
    if (this.demandIntakeService.isNew) {
      return false;
    }
    if (this.authService.isRequester()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status && this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT') {
        return true;
      }
    } else if (this.authService.isDM()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_CCB && this.isDMActionDone || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DM_REJECTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_REJECTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_HOLD) {
        return true;
      }
    } else if (this.authService.isCCB()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_REJECTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DM_REJECTED) {
        return true;
      }
    }
    return false;
  }
  savePage() {
    if (this.files.length > 0) {
      this.uploadEvent(this.uploadCallback);
    }
    this.demandIntakeService.saveDemand().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe(response => {
      console.log("saveDemand() : Response -> ", response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: 'Demand Saved Successfully!'
      });
      this.router.navigate(['view']);
    }, error => {
      console.log("saveDemand() : ERROR -> ", error);
      this.messageService.add({
        key: 'error',
        severity: 'error',
        summary: 'Error',
        detail: 'Demand Failed to Save!'
      });
    });
  }
  submitPage() {
    if (this.files.length > 0) {
      this.uploadEvent(this.uploadCallback);
    }
    this.router.navigate(['demand-intake/confirm']);
  }
  prevPage() {
    if (this.authService.isRequester()) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        if (this.eventService.isMyDemand && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM) {
          this.router.navigate(['demand-intake/checklist/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
        } else {
          this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
        }
      }
    } else {
      if (this.eventService.isNewDemand || (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM)) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        this.router.navigate(['demand-intake/checklist/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }
  nextPage() {
    if (!this.eventService.isNewDemand) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/demandmanager']);
      } else {
        this.router.navigate(['demand-intake/demandmanager/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }
  getAllAttachmentsByDemandId() {
    this.clearAttachmentPane();
    this.demandIntakeService.getAllAttachmentsByDemandId(this.demandIntakeService.demandInformation.introduction.demandIntakeId).subscribe(response => {
      this.attachmentInfo = response;
      this.eventService.progressBarEvent.emit(false);
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Fetch Error',
        detail: 'Error Occurred while fetching attachments : ' + error
      });
      this.eventService.progressBarEvent.emit(false);
    });
  }
  clearAttachmentPane() {
    this.totalSize = 0;
    this.files.splice(0, this.files.length);
    this.uploadedFiles.splice(0, this.uploadedFiles.length);
  }
  deleteAttachmentPopup(event, index, fileName) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Do you want to delete the file [' + fileName + ']?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.deleteAttachment(index, fileName);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000
        });
      }
    });
  }
  deleteAttachment(index, fileName) {
    this.demandIntakeService.deleteAttachmentsById(index).subscribe(response => {
      console.log("deleteAttachment() : SUCCESS -> ", response);
      this.messageService.add({
        severity: 'info',
        summary: 'Success',
        detail: response.attachmentResponse,
        life: 3000
      });
      this.getAllAttachmentsByDemandId();
    }, error => {
      console.log("deleteAttachment() : ERROR -> ", error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'File : ' + fileName + ' : ' + error.statusText,
        life: 3000
      });
    });
  }
  updateAttachment(attachment) {
    this.demandIntakeService.updateDescAttachmentsById(attachment.attachmentId, attachment.description).subscribe(response => {
      console.log("updateAttachment() : SUCCESS -> ", response);
      this.messageService.add({
        severity: 'info',
        summary: 'Success',
        detail: response.attachmentResponse,
        life: 3000
      });
      this.getAllAttachmentsByDemandId();
    }, error => {
      console.log("updateAttachment() : ERROR -> ", error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'File : ' + attachment.fileName + ' : ' + error.statusText,
        life: 3000
      });
    });
  }
  downloadAttachment(index, fileName) {
    this.demandIntakeService.getAttachmentsById(index).subscribe(response => {
      const fileNameFromUrl = "file";
      if (fileNameFromUrl) {
        const contentType = response.headers.get("Content-Type");
        const blob = new Blob([response.body], {
          type: contentType
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
        link.remove();
        this.eventService.progressBarEvent.emit(false);
      } else {
        console.log("downloadAttachment() : ERROR -> Unable to extract file");
      }
    });
  }
  choose(event, callback, uploadCallback) {
    this.uploadCallback = uploadCallback;
    callback();
  }
  onRemoveTemplatingFile(event, file, removeFileCallback, index) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }
  onClearTemplatingUpload(clear) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }
  onTemplatedUpload(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
      life: 3000
    });
  }
  onSelectedFiles(event) {
    this.files = event.currentFiles;
    if (this.files.length > 0) {
      this.files.forEach(file => {
        this.totalSize += file.size;
      });
      if (this.totalSize > _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.attachmentMaxFileSize) {
        this.messageService.add({
          severity: 'error',
          summary: 'File Size Exceeded',
          detail: 'Total size of files should not exceed ' + this.formatSize(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.attachmentMaxFileSize) + '. Selected File size : ' + this.formatSize(this.totalSize)
        });
        this.clearAttachmentPane();
      } else {
        this.customUploadHandler();
      }
    }
  }
  uploadEvent(callback) {
    callback();
  }
  formatSize(bytes) {
    if (bytes) {
      const k = 1024;
      const dm = 3;
      const sizes = this.config.translation.fileSizeTypes;
      if (bytes === 0) {
        return `0 ${sizes[0]}`;
      }
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
      return `${formattedSize} ${sizes[i]}`;
    }
    return "";
  }
  customUploadHandler() {
    let formData = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      formData.append('files', this.files[i], this.files[i].name);
    }
    this.demandIntakeService.http.post(this.demandIntakeService.getAttachmentUploadURL(), formData, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
        'X-Correlation-ID': this.constants.x_correlation_id,
        'Authorization': this.authService.currentLoggedInUser.accessToken
      })
    }).subscribe(event => {
      switch (event.type) {
        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.UploadProgress:
          if (event.total) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          }
          break;
        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpEventType.Response:
          this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: event.body.attachmentResponse,
            life: 3000
          });
          this.uploadProgress = 0;
          this.uploadedFiles.push(...this.files);
          this.files.splice(0, this.files.length);
          this.getAllAttachmentsByDemandId();
          break;
      }
    }, error => {
      // Handle upload error
      console.error('Upload error:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Upload Error',
        detail: error
      });
    });
    // .subscribe((response) => {
    //   this.uploadedFiles.push(...this.files);
    //   this.files.splice(0, this.files.length);
    //   this.messageService.add({
    //     severity: 'info',
    //     summary: 'Success',
    //     detail: response.attachmentResponse,
    //     life: 3000
    //   });
    //   this.getAllAttachmentsByDemandId();
    // }, error => {
    //   this.messageService.add({ severity: 'error', summary: 'Upload Error', detail: error });
    // })
  }
  onRowEditInit(attachment) {
    this.clonedAttachments[attachment.attachmentId] = {
      ...attachment
    };
  }
  onRowEditSave(attachment) {
    delete this.clonedAttachments[attachment.attachmentId];
    this.updateAttachment(attachment);
  }
  onRowEditCancel(attachment, index) {
    this.attachmentInfo[index] = this.clonedAttachments[attachment.attachmentId];
    delete this.clonedAttachments[attachment.attachmentId];
  }
  saveHyperlink(event, op) {
    this.eventService.progressBarEvent.emit(true);
    this.demandIntakeService.insertHyperLink(this.hyperlinkDescription, this.hyperlink).subscribe(response => {
      console.log("saveHyperlink() : SUCCESS -> ", response);
      this.messageService.add({
        severity: 'info',
        summary: 'Success',
        detail: response.attachmentResponse,
        life: 3000
      });
      this.eventService.progressBarEvent.emit(false);
      op.toggle(event);
      this.resetHyperlinkDialog(event, op);
      this.getAllAttachmentsByDemandId();
    }, error => {
      console.log("saveHyperlink() : ERROR -> ", error);
      this.messageService.add({
        severity: 'error',
        summary: 'Not saved',
        detail: 'Hyperlink failed to save : ' + this.hyperlink + ' : ' + error.statusText,
        life: 3000
      });
      this.eventService.progressBarEvent.emit(false);
    });
  }
  resetHyperlinkDialog(event, op) {
    this.hyperlink = '';
    this.hyperlinkDescription = '';
    op.toggle(event);
  }
  static #_ = this.ɵfac = function AttachmentComponent_Factory(t) {
    return new (t || AttachmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_2__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_constants__WEBPACK_IMPORTED_MODULE_3__.Constants), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_6__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AttachmentComponent,
    selectors: [["app-attachment"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService])],
    decls: 43,
    vars: 11,
    consts: [["op", ""], ["key", "success"], ["key", "error"], [1, "grid", "p-fluid"], [1, "col-12"], [1, "font-bold", "text-xl", "mb-2"], [1, "ml-3", 3, "click"], [1, "p-link", "pi", "pi-refresh"], ["name", "files", 3, "url", "multiple", "headers", "maxFileSize", "customUpload", "onUpload", "uploadHandler", "onSelect", 4, "ngIf"], ["styleClass", "p-datatable-sm", "dataKey", "attachmentId", "editMode", "row", 3, "value", "tableStyle"], ["pTemplate", "header", 1, "mt-3"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "grid", "grid-nogutter", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["icon", "pi pi-angle-right", 3, "label", "onClick", 4, "ngIf"], ["iconPos", "right", 3, "label", "onClick", 4, "ngIf"], [1, "col-12", "p-fluid"], [1, "grid"], [1, "col-12", "grid"], [1, "col-4", "font-bold"], [1, "col-8", "flex", "justify-content-between"], [1, "font-bold"], [1, "col-12", "m-0", "p-0"], ["styleClass", "m-0"], [1, "col-4"], ["pInputText", "", "type", "text", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "col-8"], ["pInputText", "", "aria-describedby", "program-help", 1, "w-full", 3, "ngModelChange", "ngModel"], ["type", "button", "pButton", "", "icon", "pi pi-check", 1, "p-button-success", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-times", 1, "p-button-danger", 3, "click"], ["name", "files", 3, "onUpload", "uploadHandler", "onSelect", "url", "multiple", "headers", "maxFileSize", "customUpload"], ["pTemplate", "header"], ["pTemplate", "content"], ["pTemplate", "file"], [1, "w-full", "flex", "flex-wrap", "align-items-center", "justify-content-between"], ["icon", "pi pi-images", "label", "Select", 3, "onClick", "rounded", "outlined"], ["icon", "pi pi-plus", "label", "Add Hyperlink", 3, "onClick", "rounded", "outlined"], [1, "flex", "gap-3", "align-items-center", "justify-content-center", "flex-wrap"], [1, "pi", "pi-cloud-upload", "border-2", "border-circle", "p-2", "text-2xl", "text-400", "border-400"], [1, "text-600", "font-medium"], ["styleClass", "md:w-20rem h-1rem w-full md:ml-auto", 3, "value", "showValue", 4, "ngIf"], ["styleClass", "md:w-20rem h-1rem w-full md:ml-auto", 3, "value", "showValue"], [4, "ngIf"], [1, "flex", "flex-wrap", "p-0", "sm:p-5", "gap-5"], ["class", "card m-0 flex flex-wrap gap-3 border-1 surface-border align-items-center", 4, "ngFor", "ngForOf"], [1, "card", "m-0", "flex", "flex-wrap", "gap-3", "border-1", "surface-border", "align-items-center"], [1, "font-semibold"], ["value", "Pending", "severity", "warning"], ["role", "presentation", "width", "100", 3, "alt", "src"], [1, "pi", "pi-file", 2, "font-size", "4rem"], ["class", "card m-0 flex flex-wrap border-1 surface-border align-items-center gap-3", 4, "ngFor", "ngForOf"], [1, "card", "m-0", "flex", "flex-wrap", "border-1", "surface-border", "align-items-center", "gap-3"], ["value", "Completed", "severity", "success", 1, "mt-3"], [2, "width", "15%"], [3, "pEditableRow"], [1, "text-900", "font-semibold"], ["pTemplate", "input"], ["pTemplate", "output"], [1, "flex", "flex-end"], [1, "w-full", "align-text-end"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pInitEditableRow", "", "class", "p-button-rounded p-button-text mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", "class", "p-button-rounded p-button-success p-button-text mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "class", "p-button-rounded p-button-warning p-button-text", 3, "disabled", "click", 4, "ngIf"], ["pInputText", "", "placeholder", "Description", "type", "text", 3, "ngModelChange", "ngModel"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", "pSaveEditableRow", "", "class", "p-button-success", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", "pCancelEditableRow", "", "class", "p-button-danger", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", "pSaveEditableRow", "", 1, "p-button-success", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", "pCancelEditableRow", "", 1, "p-button-danger", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pInitEditableRow", "", 1, "p-button-rounded", "p-button-text", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", 1, "p-button-rounded", "p-button-success", "p-button-text", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", "p-button-text", 3, "click", "disabled"], ["colspan", "7"], ["icon", "pi pi-angle-right", 3, "onClick", "label"], ["iconPos", "right", 3, "onClick", "label"]],
    template: function AttachmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "p-toast")(1, "p-toast", 1)(2, "p-toast", 2)(3, "p-confirmPopup");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_Template_label_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.getAllAttachmentsByDemandId());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AttachmentComponent_p_fileUpload_11_Template, 4, 5, "p-fileUpload", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 4)(13, "p-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AttachmentComponent_ng_template_14_Template, 14, 6, "ng-template", 10)(15, AttachmentComponent_ng_template_15_Template, 21, 12, "ng-template", 11)(16, AttachmentComponent_ng_template_16_Template, 3, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13)(18, "p-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttachmentComponent_Template_p_button_onClick_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.prevPage());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, AttachmentComponent_p_button_19_Template, 1, 1, "p-button", 15)(20, AttachmentComponent_p_button_20_Template, 1, 1, "p-button", 16)(21, AttachmentComponent_p_button_21_Template, 1, 1, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p-overlayPanel", null, 0)(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 21)(30, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "p-divider", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 4)(35, "div", 3)(36, "div", 25)(37, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AttachmentComponent_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.hyperlinkDescription, $event) || (ctx.hyperlinkDescription = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 27)(39, "p-inputGroup")(40, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AttachmentComponent_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.hyperlink, $event) || (ctx.hyperlink = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_Template_button_click_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.saveHyperlink($event, op_r8));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AttachmentComponent_Template_button_click_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
          const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.resetHyperlinkDialog($event, op_r8));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.fieldsService.getLabel("ATTACHMENTS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleAttachmentUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.attachmentInfo)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("BACK_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleNextButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleSubmitButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.hyperlinkDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.hyperlink);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_14__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_17__.Divider, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.CellEditor, primeng_table__WEBPACK_IMPORTED_MODULE_18__.EditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_18__.InitEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SaveEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_18__.CancelEditableRow, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, primeng_badge__WEBPACK_IMPORTED_MODULE_20__.Badge, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_21__.OverlayPanel, primeng_fileupload__WEBPACK_IMPORTED_MODULE_22__.FileUpload, primeng_progressbar__WEBPACK_IMPORTED_MODULE_23__.ProgressBar, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_24__.ConfirmPopup, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_25__.InputGroup, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1115:
/*!***********************************************************!*\
  !*** ./src/app/intake-ui/components/ccb/ccb.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCBComponent: () => (/* binding */ CCBComponent)
/* harmony export */ });
/* harmony import */ var _enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/demand-intake-decision */ 5334);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fieldset */ 63148);



















function CCBComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("CCB_MEMBER_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_HEADER"));
  }
}
function CCBComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p-fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CCBComponent_ng_template_2_ng_template_3_Template, 3, 2, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 5)(6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "p-calendar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CCBComponent_ng_template_2_Template_p_calendar_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.ccbInfo.decisionDate, $event) || (ctx_r1.ccbInfo.decisionDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5)(11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7)(14, "p-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CCBComponent_ng_template_2_Template_p_dropdown_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDecision, $event) || (ctx_r1.selectedDecision = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function CCBComponent_ng_template_2_Template_p_dropdown_onChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onDecisionSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 5)(16, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 7)(19, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CCBComponent_ng_template_2_Template_textarea_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.ccbInfo.remarks, $event) || (ctx_r1.ccbInfo.remarks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 5)(21, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 7)(24, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CCBComponent_ng_template_2_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.ccbInfo.isCrossFunctional, $event) || (ctx_r1.ccbInfo.isCrossFunctional = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CCBComponent_ng_template_2_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.ccbInfo.isCrossFunctional, $event) || (ctx_r1.ccbInfo.isCrossFunctional = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_DECISION_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.ccbInfo.decisionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showIcon", true)("pTooltip", ctx_r1.fieldsService.getToolTip("CCB_MEMBER_DECISION_DATE"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_DECISION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r1.decisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDecision);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("CCB_MEMBER_DECISION"))("disabled", !ctx_r1.authService.isCCB() || ctx_r1.authService.isCCB() && ctx_r1.eventService.isMyDemand);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_REMARKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.ccbInfo.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("CCB_MEMBER_REMARKS"))("disabled", !ctx_r1.authService.isCCB() || ctx_r1.authService.isCCB() && ctx_r1.eventService.isMyDemand);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_DEMAND_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.ccbInfo.isCrossFunctional);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("CCB_MEMBER_FUNCTIONAL"))("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_FUNCTIONAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("CCB_MEMBER_CROSS_FUNCTIONAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.ccbInfo.isCrossFunctional);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("CCB_MEMBER_CROSS_FUNCTIONAL"));
  }
}
function CCBComponent_ng_template_3_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function CCBComponent_ng_template_3_p_button_2_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.submitPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r1.submitDemandLabel);
  }
}
function CCBComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function CCBComponent_ng_template_3_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CCBComponent_ng_template_3_p_button_2_Template, 1, 1, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r1.fieldsService.getLabel("BACK_BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.visibleSubmitButton);
  }
}
class CCBComponent {
  constructor(eventService, fieldsService, demandIntakeService, router, messageService, authService) {
    this.eventService = eventService;
    this.fieldsService = fieldsService;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.messageService = messageService;
    this.authService = authService;
    this.visibleSubmitButton = true;
  }
  ngOnInit() {
    this.submitDemandLabel = 'Submit Demand';
    if (this.demandIntakeService.getDemandInformation().introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_MODIFICATION || this.demandIntakeService.getDemandInformation().introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_MODIFICATION) {
      this.submitDemandLabel = 'Update Demand';
    }
    if (this.demandIntakeService.getDemandInformation().ccbInfo != null) {
      this.demandIntakeService.getDemandInformation().ccbInfo.decisionDate = new Date(this.demandIntakeService.getDemandInformation().ccbInfo.decisionDate);
      this.ccbInfo = this.demandIntakeService.getDemandInformation().ccbInfo;
      this.decisions = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision);
      this.selectedDecision = this.getStatusValue(this.demandIntakeService.getDemandInformation().ccbInfo.decision);
    }
    if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_REJECTED) {
      this.visibleSubmitButton = false;
    }
  }
  onDecisionSelect() {
    this.ccbInfo.decision = this.getStatusKey(this.selectedDecision);
    this.demandIntakeService.getDemandInformation().ccbInfo = this.ccbInfo;
  }
  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/demandmanager']);
    } else {
      this.router.navigate(['demand-intake/demandmanager/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }
  submitPage() {
    if (this.selectedDecision != '' && this.ccbInfo.remarks != '') {
      this.ccbInfo.decision = this.getStatusKey(this.selectedDecision);
      this.demandIntakeService.getDemandInformation().ccbInfo = this.ccbInfo;
      this.router.navigate(['demand-intake/confirm']);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill required fields!'
      });
    }
  }
  getStatusKey(value) {
    const index = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision).indexOf(value);
    return Object.keys(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision)[index];
  }
  getStatusValue(key) {
    const status = Object.keys(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision).indexOf(key);
    let s = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision)[status];
    return s;
  }
  static #_ = this.ɵfac = function CCBComponent_Factory(t) {
    return new (t || CCBComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_3__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CCBComponent,
    selectors: [["app-ccb"]],
    decls: 4,
    vars: 0,
    consts: [["pTemplate", "content"], ["pTemplate", "footer"], [1, "grid"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12"], ["pTemplate", "header"], [1, "col-3", "xs:col-3", "sm:col-3", "lg:col-3", "xl:col-3"], ["required", "", "for", "decisionDate", 1, "asterisk-if-mandatory"], [1, "col-9", "xs:col-9", "sm:col-9", "lg:col-9", "xl:col-9"], ["dateFormat", "dd/mm/yy", 3, "ngModelChange", "ngModel", "showIcon", "pTooltip", "disabled"], ["required", "", "for", "decision", 1, "asterisk-if-mandatory"], ["appendTo", "body", "placeholder", "Your decision", 3, "ngModelChange", "onChange", "options", "ngModel", "pTooltip", "disabled"], ["required", "", "for", "remarks", 1, "asterisk-if-mandatory"], ["rows", "2", "cols", "75", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip", "disabled"], [1, "asterisk-if-mandatory"], ["type", "radio", "name", "isCrossFunctional", "checked", "checked", 3, "ngModelChange", "ngModel", "pTooltip", "value"], ["type", "radio", "name", "isCrossFunctional", 3, "ngModelChange", "pTooltip", "ngModel", "value"], [1, "flex", "align-items-center", "gap-2", "px-2"], [1, "font-bold", 3, "pTooltip"], [1, "grid", "grid-nogutter", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "label", "onClick", 4, "ngIf"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "onClick", "label"]],
    template: function CCBComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CCBComponent_ng_template_2_Template, 32, 23, "ng-template", 0)(3, CCBComponent_ng_template_3_Template, 3, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_card__WEBPACK_IMPORTED_MODULE_11__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__.Dropdown, primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__.Fieldset],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59447:
/*!*******************************************************************!*\
  !*** ./src/app/intake-ui/components/ccbcrud/ccbcrud.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCBCRUDComponent: () => (/* binding */ CCBCRUDComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _models_approver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/approver */ 77566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin.service */ 5227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fieldset */ 63148);
















function CCBCRUDComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No CCB Members configured, please Add CCB Member!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CCBCRUDComponent_p_table_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Updated On");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CCBCRUDComponent_p_table_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "p-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CCBCRUDComponent_p_table_9_ng_template_2_Template_p_button_onClick_13_listener() {
      const ccb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.showUpdateCCBDialog(ccb_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ccb_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ccb_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("align-self-center approver-badge status-" + ctx_r2.demandIntakeService.getApproverStatusValue(ccb_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n", ccb_r2.status, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 6, ccb_r2.createdDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 9, ccb_r2.updatedDate, "MMM dd, yyyy"));
  }
}
function CCBCRUDComponent_p_table_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CCBCRUDComponent_p_table_9_ng_template_1_Template, 11, 0, "ng-template", 24)(2, CCBCRUDComponent_p_table_9_ng_template_2_Template, 14, 12, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.ccbList);
  }
}
class CCBCRUDComponent {
  constructor(demandIntakeService, messageService, eventService, adminService) {
    this.demandIntakeService = demandIntakeService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.adminService = adminService;
  }
  ngOnInit() {
    this.adminService.approver = new _models_approver__WEBPACK_IMPORTED_MODULE_0__.Approver();
    this.adminService.getAllCCB().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      this.ccbList = response;
      console.log('getAllCCB() : Response -> ', this.ccbList);
      this.eventService.progressBarEvent.emit(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.log('getAllCCB() : ERROR -> ', error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
    })).subscribe();
  }
  showAddCCBDialog() {
    this.adminService.setApprover(new _models_approver__WEBPACK_IMPORTED_MODULE_0__.Approver());
    this.visibleAddCCBDialog = true;
  }
  showUpdateCCBDialog(dm) {
    this.adminService.setApprover(dm);
    this.visibleUpdateCCBDialog = true;
  }
  closeAddCCBDialog() {
    this.visibleAddCCBDialog = false;
  }
  closeUpdateCCBDialog() {
    this.visibleUpdateCCBDialog = false;
  }
  onSubmit() {
    this.eventService.progressBarEvent.emit(true);
    if (this.adminService.validateApproverRequest()) {
      this.adminService.addApprover('CCB_MEMBER').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.first)()).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'CCB Member is added successfully!'
        });
        this.closeAddCCBDialog();
        this.ngOnInit();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add CCB Member!'
        });
        this.closeAddCCBDialog();
        this.ngOnInit();
      });
    } else {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill the all the fields!'
      });
    }
  }
  onUpdate() {
    this.eventService.progressBarEvent.emit(true);
    if (this.adminService.validateApproverRequest()) {
      this.adminService.updateApprover('CCB_MEMBER').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.first)()).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'CCB Member is updated successfully!'
        });
        this.closeUpdateCCBDialog();
        this.ngOnInit();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update CCB Member!'
        });
        this.closeUpdateCCBDialog();
        this.ngOnInit();
      });
    } else {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill the all the fields!'
      });
    }
  }
  static #_ = this.ɵfac = function CCBCRUDComponent_Factory(t) {
    return new (t || CCBCRUDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CCBCRUDComponent,
    selectors: [["app-ccbcrud"]],
    decls: 54,
    vars: 11,
    consts: [[1, "card", "grid"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12"], [1, "grid"], ["legend", "Add/Remove CCB Member"], [4, "ngIf"], [3, "value", 4, "ngIf"], ["label", "Add", "icon", "pi pi-plus", 3, "onClick"], ["header", "Add CCB Member", "modal", "true", 3, "visibleChange", "visible"], [1, "card", "flex", "flex-column", "px-8", "py-5", "gap-4"], [1, "inline-flex", "flex-column", "gap-2"], ["for", "email", 1, "font-semibold"], ["pInputText", "", "id", "email", "type", "email", "size", "40", 1, "p-2", 3, "ngModelChange", "blur", "ngModel"], ["for", "status", 1, "font-semibold"], [1, "flex", "flex-wrap", "gap-3"], [1, "flex", "align-items-center"], ["name", "status", "value", "ACTIVE", 3, "ngModelChange", "ngModel"], [1, "font-semibold"], ["name", "status", "value", "INACTIVE", 3, "ngModelChange", "ngModel"], [1, "flex", "align-items-center", "gap-2", "w-full"], ["label", "Save", "type", "submit", 3, "click"], ["label", "Cancel", 3, "click"], ["header", "Update CCB Member", "modal", "true", 3, "visibleChange", "visible"], ["pInputText", "", "id", "email", "type", "email", "size", "40", 1, "p-2", 3, "ngModelChange", "blur", "ngModel", "disabled"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["icon", "pi pi-user-edit", 3, "onClick"]],
    template: function CCBCRUDComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 1)(5, "p-fieldset", 3)(6, "div", 2)(7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CCBCRUDComponent_div_8_Template, 3, 0, "div", 4)(9, CCBCRUDComponent_p_table_9_Template, 3, 1, "p-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1)(11, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function CCBCRUDComponent_Template_p_button_onClick_11_listener() {
          return ctx.showAddCCBDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function CCBCRUDComponent_Template_p_dialog_visibleChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.visibleAddCCBDialog, $event) || (ctx.visibleAddCCBDialog = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CCBCRUDComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.email, $event) || (ctx.adminService.approver.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function CCBCRUDComponent_Template_input_blur_17_listener() {
          return ctx.eventService.checkEmailValue(ctx.adminService.approver.email);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9)(19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "p-radioButton", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CCBCRUDComponent_Template_p_radioButton_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 14)(27, "p-radioButton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CCBCRUDComponent_Template_p_radioButton_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18)(31, "p-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CCBCRUDComponent_Template_p_button_click_31_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CCBCRUDComponent_Template_p_button_click_32_listener() {
          return ctx.closeAddCCBDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p-dialog", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function CCBCRUDComponent_Template_p_dialog_visibleChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.visibleUpdateCCBDialog, $event) || (ctx.visibleUpdateCCBDialog = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 8)(35, "div", 9)(36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CCBCRUDComponent_Template_input_ngModelChange_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.email, $event) || (ctx.adminService.approver.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function CCBCRUDComponent_Template_input_blur_38_listener() {
          return ctx.eventService.checkEmailValue(ctx.adminService.approver.email);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 9)(40, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 13)(43, "div", 14)(44, "p-radioButton", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CCBCRUDComponent_Template_p_radioButton_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 14)(48, "p-radioButton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CCBCRUDComponent_Template_p_radioButton_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 18)(52, "p-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CCBCRUDComponent_Template_p_button_click_52_listener() {
          return ctx.onUpdate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CCBCRUDComponent_Template_p_button_click_53_listener() {
          return ctx.closeUpdateCCBDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ccbList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ccbList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx.visibleAddCCBDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx.visibleUpdateCCBDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_17__.RadioButton, primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__.Fieldset, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 93787:
/*!***********************************************************************!*\
  !*** ./src/app/intake-ui/components/checklist/checklist.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecklistComponent: () => (/* binding */ ChecklistComponent)
/* harmony export */ });
/* harmony import */ var _enums_refreshFrequency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/refreshFrequency */ 35482);
/* harmony import */ var _enums_loadStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/loadStrategy */ 36408);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/demand-reference-tool */ 12801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputgroup */ 64661);
/* harmony import */ var primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputgroupaddon */ 1525);























function ChecklistComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_WARNING"));
  }
}
function ChecklistComponent_p_tabPanel_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div", 10)(2, "div", 11)(3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 13)(6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_4_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.platformsCapabilityDef, $event) || (ctx_r0.eADIInfo.platformsCapabilityDef = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 11)(8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 13)(11, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_4_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.producerAndConsumerSystems, $event) || (ctx_r0.eADIInfo.producerAndConsumerSystems = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11)(13, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 13)(16, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_4_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.capabilityAPI, $event) || (ctx_r0.eADIInfo.capabilityAPI = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 13)(21, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_4_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModelDefinition, $event) || (ctx_r0.eADIInfo.dataModelDefinition = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 11)(23, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 13)(26, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_4_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.additionalInfo, $event) || (ctx_r0.eADIInfo.additionalInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_PLATFORM_CAPABILITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_INTEGRATION_PLATFORM_CAPABILITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.platformsCapabilityDef);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_P_AND_C_SYSTEM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.producerAndConsumerSystems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_INTEGRATION_P_AND_C_SYSTEM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_PCA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.capabilityAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_INTEGRATION_PCA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_DATA_MODEL_DEF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModelDefinition);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_INTEGRATION_DATA_MODEL_DEF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INTEGRATION_ADDITIONAL_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.additionalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_INTEGRATION_ADDITIONAL_INFO"));
  }
}
function ChecklistComponent_p_tabPanel_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div")(2, "div", 10)(3, "div", 11)(4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 13)(7, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.dataModelType, $event) || (ctx_r0.eADIInfo.dataModel.dataModelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.dataModelType, $event) || (ctx_r0.eADIInfo.dataModel.dataModelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.dataModelType, $event) || (ctx_r0.eADIInfo.dataModel.dataModelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 11)(19, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 13)(22, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.dataDomain, $event) || (ctx_r0.eADIInfo.dataModel.dataDomain = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11)(24, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 13)(27, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.modelName, $event) || (ctx_r0.eADIInfo.dataModel.modelName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 11)(29, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 13)(32, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.modelType, $event) || (ctx_r0.eADIInfo.dataModel.modelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.modelType, $event) || (ctx_r0.eADIInfo.dataModel.modelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.modelType, $event) || (ctx_r0.eADIInfo.dataModel.modelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 11)(44, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 13)(47, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.requestingProgram, $event) || (ctx_r0.eADIInfo.dataModel.requestingProgram = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 11)(49, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 13)(52, "p-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_p_checkbox_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.isAPIRelevant, $event) || (ctx_r0.eADIInfo.dataModel.isAPIRelevant = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 11)(54, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 13)(57, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.relevantITApplication, $event) || (ctx_r0.eADIInfo.dataModel.relevantITApplication = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 11)(59, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 13)(62, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_input_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.businessDataObject, $event) || (ctx_r0.eADIInfo.dataModel.businessDataObject = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 11)(64, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 13)(67, "p-checkbox", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_5_Template_p_checkbox_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataModel.isMappingReqProvided, $event) || (ctx_r0.eADIInfo.dataModel.isMappingReqProvided = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_DATA_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DEMAND_MODEL_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_NEW_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.dataModelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_NEW_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_EXISTING_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.dataModelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_EXISTING_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_TARGET_DATE_POSTPONEMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.dataModelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_TARGET_DATE_POSTPONEMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_DOMAIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.dataDomain);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_DOMAIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MODEL_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.modelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MODEL_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MODEL_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MODEL_TYPE_CONCEPTUAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.modelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MODEL_TYPE_CONCEPTUAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MODEL_TYPE_LOGICAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.modelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MODEL_TYPE_LOGICAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MODEL_TYPE_PHYSICAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.modelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MODEL_TYPE_PHYSICAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_REQUESTING_PROGRAM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_REQUESTING_PROGRAM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.requestingProgram);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_API_RELEVANT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.isAPIRelevant);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_API_RELEVANT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_RELEVANT_IT_APP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_RELEVANT_IT_APP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.relevantITApplication);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_BUSINESS_DATA_OBJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_BUSINESS_DATA_OBJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.businessDataObject);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DETAILED_MAPPING_PROVIDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataModel.isMappingReqProvided);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DETAILED_MAPPING_PROVIDED"));
  }
}
function ChecklistComponent_p_tabPanel_6_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_SOURCE_DETAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_SOURCE_DETAILS"));
  }
}
function ChecklistComponent_p_tabPanel_6_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATA_FEED_DETAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATA_FEED_DETAILS"));
  }
}
function ChecklistComponent_p_tabPanel_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div")(2, "div", 10)(3, "div", 11)(4, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 13)(7, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.dataDemandType, $event) || (ctx_r0.eADIInfo.adlL1.dataDemandType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.dataDemandType, $event) || (ctx_r0.eADIInfo.adlL1.dataDemandType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.dataDemandType, $event) || (ctx_r0.eADIInfo.adlL1.dataDemandType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p-fieldset", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChecklistComponent_p_tabPanel_6_ng_template_19_Template, 3, 2, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 13)(25, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.sourceSystemName, $event) || (ctx_r0.eADIInfo.adlL1.sourceSystemName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 11)(27, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 13)(30, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.kernelSid, $event) || (ctx_r0.eADIInfo.adlL1.kernelSid = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 11)(32, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 13)(35, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.database, $event) || (ctx_r0.eADIInfo.adlL1.database = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 11)(37, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 13)(40, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.module, $event) || (ctx_r0.eADIInfo.adlL1.module = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 11)(42, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 13)(45, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.instance, $event) || (ctx_r0.eADIInfo.adlL1.instance = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 11)(47, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 13)(50, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.tableName, $event) || (ctx_r0.eADIInfo.adlL1.tableName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 11)(52, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 13)(55, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.capability, $event) || (ctx_r0.eADIInfo.adlL1.capability = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 11)(57, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 13)(60, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.functionality, $event) || (ctx_r0.eADIInfo.adlL1.functionality = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 11)(62, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 13)(65, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function ChecklistComponent_p_tabPanel_6_Template_input_blur_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.eventService.checkEmailValue(ctx_r0.eADIInfo.adlL1.sourceEmail));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.sourceEmail, $event) || (ctx_r0.eADIInfo.adlL1.sourceEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 11)(67, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 13)(70, "p-checkbox", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_p_checkbox_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.additionalDocAttached, $event) || (ctx_r0.eADIInfo.adlL1.additionalDocAttached = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "p-fieldset", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, ChecklistComponent_p_tabPanel_6_ng_template_73_Template, 3, 2, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 10)(75, "div", 11)(76, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 13)(79, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_79_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.dataSetName, $event) || (ctx_r0.eADIInfo.adlL1.dataSetName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 11)(81, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 13)(84, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.dataSetOwner, $event) || (ctx_r0.eADIInfo.adlL1.dataSetOwner = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 11)(86, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 13)(89, "p-dropdown", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ChecklistComponent_p_tabPanel_6_Template_p_dropdown_onChange_89_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onFrequencySelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_p_dropdown_ngModelChange_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.selectedFrequency, $event) || (ctx_r0.selectedFrequency = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 11)(91, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 13)(94, "p-dropdown", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ChecklistComponent_p_tabPanel_6_Template_p_dropdown_onChange_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onLoadStrategySelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_p_dropdown_ngModelChange_94_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.selectedLoadStrategy, $event) || (ctx_r0.selectedLoadStrategy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 11)(96, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 13)(99, "textarea", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_textarea_ngModelChange_99_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.extractionlogic, $event) || (ctx_r0.eADIInfo.adlL1.extractionlogic = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 11)(101, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 13)(104, "textarea", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_textarea_ngModelChange_104_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.tableAccessInfo, $event) || (ctx_r0.eADIInfo.adlL1.tableAccessInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 11)(106, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 13)(109, "textarea", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_6_Template_textarea_ngModelChange_109_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL1.history, $event) || (ctx_r0.eADIInfo.adlL1.history = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_ADL_L1_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATA_DEMAND_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_NEW_DATA_ONBOARDING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.dataDemandType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_NEW_DATA_ONBOARDING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATA_SET_ENHANCEMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.dataDemandType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATA_SET_ENHANCEMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATA_SET_MODIFICATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.dataDemandType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATA_SET_MODIFICATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_SYSTEM_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_SYSTEM_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.sourceSystemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_KERNEL_SID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_KERNEL_SID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.kernelSid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATABASE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATABASE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.database);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_MODULE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_MODULE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_INSTANCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_INSTANCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.instance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_TABLE_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_TABLE_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.tableName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_CAPABILITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_CAPABILITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.capability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_FUNCTIONALITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_FUNCTIONALITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.functionality);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_POC_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_POC_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.sourceEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_ADDITIONAL_DOC_ATTACHED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true)("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_TABLE_COLUMN_ACCESS_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.additionalDocAttached);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATASET_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATASET_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.dataSetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATASET_OWNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATASET_OWNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.dataSetOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_DATA_REFRESH_FREQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.refreshFrequencies)("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_DATA_REFRESH_FREQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_LOAD_STRATEGY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.loadStrategies)("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_LOAD_STRATEGY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedLoadStrategy);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_INCREMENTAL_EXTRACTION_LOGIC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_INCREMENTAL_EXTRACTION_LOGIC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.extractionlogic);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_TABLE_COLUMN_ACCESS_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_TABLE_COLUMN_ACCESS_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.tableAccessInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L1_HISTORY_DATA_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L1_HISTORY_DATA_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL1.history);
  }
}
function ChecklistComponent_p_tabPanel_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div")(2, "div", 10)(3, "div", 11)(4, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 13)(7, "textarea", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_7_Template_textarea_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL2.architectureReview, $event) || (ctx_r0.eADIInfo.adlL2.architectureReview = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1)(9, "label")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11)(13, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 13)(16, "p-checkbox", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_7_Template_p_checkbox_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL2.certifiedDataModel, $event) || (ctx_r0.eADIInfo.adlL2.certifiedDataModel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11)(18, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 13)(21, "p-checkbox", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_7_Template_p_checkbox_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL2.existingDataModel, $event) || (ctx_r0.eADIInfo.adlL2.existingDataModel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 11)(23, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 13)(26, "p-checkbox", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_7_Template_p_checkbox_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL2.newDataModel, $event) || (ctx_r0.eADIInfo.adlL2.newDataModel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 11)(28, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 13)(31, "p-checkbox", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_7_Template_p_checkbox_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.adlL2.leadBioDataModel, $event) || (ctx_r0.eADIInfo.adlL2.leadBioDataModel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_ADL_L2_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L2_ARCHITECTURE_REVIEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L2_ARCHITECTURE_REVIEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL2.architectureReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L2_COMMON_DATA_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L2_CERTIFIED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL2.certifiedDataModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L2_CERTIFIED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L2_EXISTING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL2.existingDataModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L2_EXISTING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L2_NEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL2.newDataModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L2_NEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_L2_LEAD_BIO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.adlL2.leadBioDataModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_L2_LEAD_BIO"));
  }
}
function ChecklistComponent_p_tabPanel_8_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 106)(1, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_8_div_24_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.gold.aggregationInfo, $event) || (ctx_r0.eADIInfo.gold.aggregationInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.gold.aggregationInfo);
  }
}
function ChecklistComponent_p_tabPanel_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div")(2, "div", 10)(3, "div", 104)(4, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 106)(7, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_8_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.gold.kpiRequired, $event) || (ctx_r0.eADIInfo.gold.kpiRequired = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_8_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.gold.kpiRequired, $event) || (ctx_r0.eADIInfo.gold.kpiRequired = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 104)(14, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 106)(17, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_8_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.gold.aggregation, $event) || (ctx_r0.eADIInfo.gold.aggregation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_8_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.gold.aggregation, $event) || (ctx_r0.eADIInfo.gold.aggregation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ChecklistComponent_p_tabPanel_8_div_24_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 10)(26, "div", 106)(27, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 104)(30, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_8_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.gold.workbench, $event) || (ctx_r0.eADIInfo.gold.workbench = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_KPI_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.gold.kpiRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_GOLD_KPI_REQ_YES"))("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_KPI_REQ_YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_GOLD_KPI_REQ_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.gold.kpiRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_KPI_REQ_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_AGGREGATION_FROM_ADLL2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.gold.aggregation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_GOLD_AGGREGATION_FROM_ADLL2_YES"))("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_AGGREGATION_FROM_ADLL2_YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_GOLD_AGGREGATION_FROM_ADLL2_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.gold.aggregation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_AGGREGATION_FROM_ADLL2_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.eADIInfo.gold.aggregation == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_ADL_GOLD_CREATED_WORKBENCH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.gold.workbench);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_ADL_GOLD_CREATED_WORKBENCH"));
  }
}
function ChecklistComponent_p_tabPanel_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div", 10)(2, "div", 1)(3, "label", 116)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 11)(7, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 13)(10, "textarea", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_9_Template_textarea_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.mdm.bpdh, $event) || (ctx_r0.eADIInfo.mdm.bpdh = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 11)(12, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 13)(15, "textarea", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_9_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.mdm.pdh, $event) || (ctx_r0.eADIInfo.mdm.pdh = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11)(17, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13)(20, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_9_Template_textarea_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.mdm.fordh, $event) || (ctx_r0.eADIInfo.mdm.fordh = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_MDM_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MDM_PROVIDED_DETAILS_ON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MDM_BPDH_FIORI"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.mdm.bpdh);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MDM_BPDH_FIORI"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MDM_PDH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.mdm.pdh);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MDM_PDH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_MDM_FORDH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.mdm.fordh);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_MDM_FORDH"));
  }
}
function ChecklistComponent_p_tabPanel_10_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_div_45_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.reportTool, $event) || (ctx_r0.eADIInfo.ia.reportTool = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.reportTool);
  }
}
function ChecklistComponent_p_tabPanel_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div")(2, "div", 10)(3, "div", 11)(4, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 13)(7, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.location, $event) || (ctx_r0.eADIInfo.ia.location = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 11)(9, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 13)(12, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.newReportRequired, $event) || (ctx_r0.eADIInfo.ia.newReportRequired = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.newReportRequired, $event) || (ctx_r0.eADIInfo.ia.newReportRequired = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 11)(19, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 13)(22, "textarea", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_textarea_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.reportDescription, $event) || (ctx_r0.eADIInfo.ia.reportDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11)(24, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 13)(27, "textarea", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_textarea_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.reportUsage, $event) || (ctx_r0.eADIInfo.ia.reportUsage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 11)(29, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 13)(32, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.reportType, $event) || (ctx_r0.eADIInfo.ia.reportType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.reportType, $event) || (ctx_r0.eADIInfo.ia.reportType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 11)(39, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 13)(42, "p-dropdown", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ChecklistComponent_p_tabPanel_10_Template_p_dropdown_onChange_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onToolSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_p_dropdown_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.selectedTool, $event) || (ctx_r0.selectedTool = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, ChecklistComponent_p_tabPanel_10_div_45_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 11)(47, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 13)(50, "p-checkbox", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_p_checkbox_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.designReportAttached, $event) || (ctx_r0.eADIInfo.ia.designReportAttached = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 11)(52, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 142)(55, "p-inputGroup")(56, "p-inputGroupAddon")(57, "p-checkbox", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_p_checkbox_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.cdmConsumed, $event) || (ctx_r0.eADIInfo.ia.cdmConsumed = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ChecklistComponent_p_tabPanel_10_Template_p_checkbox_onChange_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onCDMChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.cdmConsumedText, $event) || (ctx_r0.eADIInfo.ia.cdmConsumedText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 11)(61, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 142)(64, "p-inputGroup")(65, "p-inputGroupAddon")(66, "p-checkbox", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_p_checkbox_ngModelChange_66_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.datasetConsumed, $event) || (ctx_r0.eADIInfo.ia.datasetConsumed = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ChecklistComponent_p_tabPanel_10_Template_p_checkbox_onChange_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onDatasetChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_10_Template_input_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.ia.datasetConsumedText, $event) || (ctx_r0.eADIInfo.ia.datasetConsumedText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_I_AND_A_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_LOCATION_OF_REPORT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_LOCATION_OF_REPORT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_NEW_REPORT_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_NEW_REPORT_REQ_YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.newReportRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_NEW_REPORT_REQ_YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_NEW_REPORT_REQ_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.newReportRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_NEW_REPORT_REQ_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_REPORT_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_REPORT_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.reportDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_REPORT_USAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.reportUsage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_REPORT_USAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_REPORT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_TEMPORARY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_TEMPORARY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_PERMANENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_PERMANENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_TOOL_PREFERENCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.referenceTools)("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_TOOL_PREFERENCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedTool);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedTool == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_DESIGN_ATTACHED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.designReportAttached);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_DESIGN_ATTACHED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_EXISTING_CDM_CONSUMED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.cdmConsumed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.cdmConsumedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_EXISTING_CDM_CONSUMED"))("disabled", ctx_r0.eADIInfo.ia.cdmConsumed == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_I_AND_A_EXISTING_DATASET_CONSUMED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.datasetConsumed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.ia.datasetConsumedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_I_AND_A_EXISTING_DATASET_CONSUMED"))("disabled", ctx_r0.eADIInfo.ia.datasetConsumed == false);
  }
}
function ChecklistComponent_p_tabPanel_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_DATA_CLEANING_SPOC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_DATA_CLEANING_SPOC"));
  }
}
function ChecklistComponent_p_tabPanel_11_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_BPO_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_BPO_INFO"));
  }
}
function ChecklistComponent_p_tabPanel_11_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_OTHER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_OTHER"));
  }
}
function ChecklistComponent_p_tabPanel_11_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 167)(1, "div", 11)(2, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 13)(5, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_div_63_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.market, $event) || (ctx_r0.eADIInfo.dataQuality.market = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_MARKET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.market);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_MARKET"));
  }
}
function ChecklistComponent_p_tabPanel_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div")(2, "p-fieldset", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChecklistComponent_p_tabPanel_11_ng_template_3_Template, 3, 2, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10)(5, "div", 11)(6, "label", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 13)(9, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.dataCleaningSpocName, $event) || (ctx_r0.eADIInfo.dataQuality.dataCleaningSpocName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 11)(11, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 13)(14, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.dataCleaningSpocEmail, $event) || (ctx_r0.eADIInfo.dataQuality.dataCleaningSpocEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function ChecklistComponent_p_tabPanel_11_Template_input_blur_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.eventService.checkEmailValue(ctx_r0.eADIInfo.dataQuality.dataCleaningSpocEmail));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p-fieldset", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChecklistComponent_p_tabPanel_11_ng_template_17_Template, 3, 2, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 10)(19, "div", 11)(20, "label", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13)(23, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.bpoName, $event) || (ctx_r0.eADIInfo.dataQuality.bpoName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 11)(25, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 13)(28, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function ChecklistComponent_p_tabPanel_11_Template_input_blur_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.eventService.checkEmailValue(ctx_r0.eADIInfo.dataQuality.bpoEmail));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.bpoEmail, $event) || (ctx_r0.eADIInfo.dataQuality.bpoEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p-fieldset", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ChecklistComponent_p_tabPanel_11_ng_template_31_Template, 3, 2, "ng-template", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 10)(33, "div", 11)(34, "label", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 13)(37, "textarea", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_textarea_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.exceptions, $event) || (ctx_r0.eADIInfo.dataQuality.exceptions = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 11)(39, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 13)(42, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.businessKPIImpacted, $event) || (ctx_r0.eADIInfo.dataQuality.businessKPIImpacted = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 11)(44, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 13)(47, "textarea", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_textarea_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.dataRuleDescription, $event) || (ctx_r0.eADIInfo.dataQuality.dataRuleDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 11)(49, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 13)(52, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.processPEPFInScope, $event) || (ctx_r0.eADIInfo.dataQuality.processPEPFInScope = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 11)(54, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 13)(57, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.requirementType, $event) || (ctx_r0.eADIInfo.dataQuality.requirementType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_11_Template_input_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.dataQuality.requirementType, $event) || (ctx_r0.eADIInfo.dataQuality.requirementType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, ChecklistComponent_p_tabPanel_11_div_63_Template, 6, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_DATA_CLEANING_SPOC_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_DATA_CLEANING_SPOC_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.dataCleaningSpocName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_DATA_CLEANING_SPOC_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_DATA_CLEANING_SPOC_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.dataCleaningSpocEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_BPO_INFO_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.bpoName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_BPO_INFO_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_BPO_INFO_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_BPO_INFO_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.bpoEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_EXCEPTIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_EXCEPTIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.exceptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_BUSINESS_KPI_IMPACTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_BUSINESS_KPI_IMPACTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.businessKPIImpacted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_DATA_RULE_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_DATA_RULE_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.dataRuleDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_PEPF_IN_SCOPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_PEPF_IN_SCOPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.processPEPFInScope);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_REQ_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_GLOBAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.requirementType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_GLOBAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_DATA_QUALITY_BU_MARKET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.dataQuality.requirementType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_DATA_QUALITY_BU_MARKET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.eADIInfo.dataQuality.requirementType == "BU/Market");
  }
}
function ChecklistComponent_p_tabPanel_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div", 10)(2, "div", 11)(3, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 13)(6, "textarea", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_12_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.informatica.etlRequirements, $event) || (ctx_r0.eADIInfo.informatica.etlRequirements = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_INFORMATICA_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_INFORMATICA_ETL_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_INFORMATICA_ETL_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.informatica.etlRequirements);
  }
}
function ChecklistComponent_p_tabPanel_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 9)(1, "div", 10)(2, "div", 11)(3, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 13)(6, "textarea", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ChecklistComponent_p_tabPanel_13_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.eADIInfo.azureSynapse.azureRequirements, $event) || (ctx_r0.eADIInfo.azureSynapse.azureRequirements = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("header", ctx_r0.fieldsService.getLabel("EADI_AZURE_SYNAPSE_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("EADI_AZURE_SYNAPSE_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("EADI_AZURE_SYNAPSE_REQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.eADIInfo.azureSynapse.azureRequirements);
  }
}
function ChecklistComponent_p_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function ChecklistComponent_p_button_16_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.savePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r0.fieldsService.getLabel("SAVE_FOR_LATER"));
  }
}
class ChecklistComponent {
  constructor(demandIntakeService, fieldsService, router, messageService, eventService) {
    this.demandIntakeService = demandIntakeService;
    this.fieldsService = fieldsService;
    this.router = router;
    this.messageService = messageService;
    this.eventService = eventService;
    this.visibleTabs = [];
    if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
  }
  ngOnInit() {
    // console.log("ChecklistComponent ", this.eventService.solutionDirectionValue);
    if (this.eventService.solutionDirectionValue.length == 0) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/solution-direction/']);
      } else {
        this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
    this.visibleTabs = this.eventService.solutionDirectionValue.filter(item => item.value);
    this.eADIInfo = this.demandIntakeService.getDemandInformation().eADIInfo;
    this.refreshFrequencies = Object.values(_enums_refreshFrequency__WEBPACK_IMPORTED_MODULE_0__.RefreshFrequency);
    this.referenceTools = Object.values(_enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__.DemandReferenceTool);
    if (this.demandIntakeService.getDemandInformation().eADIInfo.adlL1 != null && this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.frequency != '') {
      this.selectedFrequency = this.getFrequencyValue(this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.frequency);
    }
    if (this.demandIntakeService.getDemandInformation().eADIInfo.ia != null && this.demandIntakeService.getDemandInformation().eADIInfo.ia.reportTool != '') {
      this.selectedTool = this.getToolValue(this.demandIntakeService.getDemandInformation().eADIInfo.ia.reportTool);
    }
    this.loadStrategies = Object.values(_enums_loadStrategy__WEBPACK_IMPORTED_MODULE_1__.LoadStrategy);
    if (this.demandIntakeService.getDemandInformation().eADIInfo.adlL1 != null && this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.loadStrategy != '') {
      this.selectedLoadStrategy = this.getStrategyValue(this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.loadStrategy);
    }
  }
  onToolSelect() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.ia.reportTool = this.getToolKey(this.selectedTool);
    if (this.selectedTool == 'Other') {
      this.eADIInfo.ia.reportTool = this.otherTool;
    }
  }
  onLoadStrategySelect() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.loadStrategy = this.getStrategyKey(this.selectedLoadStrategy);
  }
  onFrequencySelect() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.frequency = this.getFrequencyKey(this.selectedFrequency);
  }
  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.frequency = this.getFrequencyKey(this.selectedFrequency);
    this.eADIInfo.adlL1.loadStrategy = this.getStrategyKey(this.selectedLoadStrategy);
    this.eADIInfo.adlL1.reportTool = this.getToolKey(this.selectedTool);
    if (this.selectedTool == 'Other') {
      this.eADIInfo.adlL1.reportTool = this.otherTool;
    }
    if (this.eventService.selectedEADITabIndex < this.visibleTabs.length - 1) {
      this.eventService.selectedEADITabIndex += 1;
    } else {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/attachment']);
      } else {
        this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }
  onTabChange(event) {
    this.eventService.selectedEADITabIndex = event.index;
  }
  onDatasetChange() {
    if (!this.eADIInfo.ia.datasetConsumed) {
      this.eADIInfo.ia.datasetConsumedText = "";
    }
  }
  onCDMChange() {
    if (!this.eADIInfo.ia.cdmConsumed) {
      this.eADIInfo.ia.cdmConsumedText = "";
    }
  }
  prevPage() {
    if (this.eventService.selectedEADITabIndex > 0) {
      this.eventService.selectedEADITabIndex -= 1;
    } else {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/solution-direction']);
      } else {
        this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }
  showTab(name) {
    let obj = this.eventService.solutionDirectionValue.find(item => item.solution === name);
    if (obj) {
      return obj.value;
    }
    ;
    return false;
  }
  getFrequencyKey(value) {
    const index = Object.values(_enums_refreshFrequency__WEBPACK_IMPORTED_MODULE_0__.RefreshFrequency).indexOf(value);
    return Object.keys(_enums_refreshFrequency__WEBPACK_IMPORTED_MODULE_0__.RefreshFrequency)[index];
  }
  getFrequencyValue(key) {
    const status = Object.keys(_enums_refreshFrequency__WEBPACK_IMPORTED_MODULE_0__.RefreshFrequency).indexOf(key);
    let s = Object.values(_enums_refreshFrequency__WEBPACK_IMPORTED_MODULE_0__.RefreshFrequency)[status];
    return s;
  }
  getStrategyKey(value) {
    const index = Object.values(_enums_loadStrategy__WEBPACK_IMPORTED_MODULE_1__.LoadStrategy).indexOf(value);
    return Object.keys(_enums_loadStrategy__WEBPACK_IMPORTED_MODULE_1__.LoadStrategy)[index];
  }
  getStrategyValue(key) {
    const status = Object.keys(_enums_loadStrategy__WEBPACK_IMPORTED_MODULE_1__.LoadStrategy).indexOf(key);
    let s = Object.values(_enums_loadStrategy__WEBPACK_IMPORTED_MODULE_1__.LoadStrategy)[status];
    return s;
  }
  getToolKey(value) {
    const index = Object.values(_enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__.DemandReferenceTool).indexOf(value);
    return Object.keys(_enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__.DemandReferenceTool)[index];
  }
  getToolValue(key) {
    const status = Object.keys(_enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__.DemandReferenceTool).indexOf(key);
    let tool = Object.values(_enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__.DemandReferenceTool)[status];
    if (!tool && !this.eventService.isNewDemand) {
      return _enums_demand_reference_tool__WEBPACK_IMPORTED_MODULE_3__.DemandReferenceTool.Other;
    }
    return tool;
  }
  savePage() {
    this.demandIntakeService.saveDemand().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.first)()).subscribe(response => {
      console.log("saveDemand() : Response -> ", response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: 'Demand Saved Successfully!'
      });
      this.router.navigate(['view']);
    }, error => {
      console.log("saveDemand() : ERROR -> ", error);
      this.messageService.add({
        key: 'error',
        severity: 'error',
        summary: 'Error',
        detail: 'Demand Failed to Save!'
      });
    });
  }
  static #_ = this.ɵfac = function ChecklistComponent_Factory(t) {
    return new (t || ChecklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_5__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_6__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ChecklistComponent,
    selectors: [["app-checklist"]],
    decls: 18,
    vars: 15,
    consts: [[1, "grid", "p-fluid"], [1, "col-12"], [4, "ngIf"], [3, "onChange", "activeIndex"], [3, "header", 4, "ngIf"], [1, "grid", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["iconPos", "right", 3, "label", "onClick", 4, "ngIf"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "onClick", "label"], [3, "header"], [1, "grid"], [1, "col-3"], ["for", "platformsCapabilityDef"], [1, "col-9"], ["id", "platformsCapabilityDef", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "pAndCSystems"], ["id", "title", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "philipsCapabilityApis"], ["id", "capabilityAPI", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "dataModelDefinition"], ["id", "dataModelDefinition", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "additionalInfo"], ["for", "dataModelType"], ["type", "radio", "id", "dm1", "name", "dataModelType", "checked", "checked", "tooltipPosition", "left", "value", "New Model", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dm1"], ["type", "radio", "id", "dm2", "name", "dataModelType", "tooltipPosition", "left", "value", "Change To Existing Model", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dm2"], ["type", "radio", "id", "dm3", "name", "dataModelType", "tooltipPosition", "left", "value", "Target Date Postponement", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dm3"], ["for", "dataDomain"], ["id", "dataDomain", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "modelName"], ["id", "modelName", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "modelType"], ["type", "radio", "id", "mt1", "name", "modelType", "checked", "checked", "tooltipPosition", "left", "value", "Conceptual", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "mt1"], ["type", "radio", "id", "mt2", "name", "modelType", "tooltipPosition", "left", "value", "Logical", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "mt2"], ["type", "radio", "id", "mt3", "name", "modelType", "tooltipPosition", "left", "value", "Physical", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "mt3"], ["for", "requestingProgram"], ["id", "requestingProgram", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "isAPIRelevant"], ["tooltipPosition", "left", "inputId", "isAPIRelevant", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "relevantITApplication"], ["id", "relevantITApplication", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "businessDataObject"], ["id", "businessDataObject", "type", "text", "pInputText", "", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "isMappingReqProvided"], ["tooltipPosition", "left", "inputId", "isMappingReqProvided", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "dataDemandType"], ["type", "radio", "id", "dt1", "name", "dataDemandType", "tooltipPosition", "left", "value", "New Data Set Onboarding", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dt1"], ["type", "radio", "id", "dt2", "name", "dataDemandType", "tooltipPosition", "left", "value", "Data Set Enhancement", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dt2"], ["type", "radio", "id", "dt3", "name", "dataDemandType", "tooltipPosition", "left", "value", "Data Set Modifications", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dt3"], [3, "toggleable"], ["pTemplate", "header"], ["required", "", "for", "sourceSystemName"], ["required", "", "id", "sourceSystemName", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "kernelSid"], ["required", "", "id", "kernelSid", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "database"], ["required", "", "id", "database", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "module"], ["required", "", "id", "module", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "for", "instance"], ["required", "", "id", "instance", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "tableName"], ["required", "", "id", "tableName", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "capability"], ["required", "", "id", "capability", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "functionality"], ["required", "", "id", "functionality", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "sourceEmail"], ["required", "", "id", "sourceEmail", "type", "email", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "blur", "ngModelChange", "pTooltip", "ngModel"], ["for", "additionalDocAttached"], ["tooltipPosition", "left", "inputId", "additionalDocAttached", 3, "ngModelChange", "binary", "pTooltip", "ngModel"], ["required", "", "for", "dataSetName"], ["required", "", "id", "dataSetName", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "dataSetOwner"], ["required", "", "id", "dataSetOwner", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "selectedFrequency"], ["appendTo", "body", "tooltipPosition", "left", "placeholder", "Select Refresh Frequency", 3, "onChange", "ngModelChange", "options", "pTooltip", "ngModel"], ["required", "", "for", "loadStrategy"], ["required", "", "for", "extractionlogic"], ["id", "extractionlogic", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "tableAccessInfo"], ["id", "tableAccessInfo", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "history"], ["id", "history", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], [1, "flex", "align-items-center", "gap-2", "px-2"], ["tooltipPosition", "left", 1, "font-bold", 3, "pTooltip"], ["required", "", "for", "architectureReview"], ["id", "architectureReview", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "certifiedDataModel"], ["tooltipPosition", "left", "inputId", "certifiedDataModel", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "existingDataModel"], ["tooltipPosition", "left", "inputId", "existingDataModel", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "newDataModel"], ["tooltipPosition", "left", "inputId", "newDataModel", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "leadBioDataModel"], ["tooltipPosition", "left", "inputId", "leadBioDataModel", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], [1, "col-8", "xs:col-8", "sm:col-8", "lg:col-8", "xl:col-8"], ["for", "kpiRequired", "required", "", 2, "width", "100px"], [1, "col-4", "xs:col-4", "sm:col-4", "lg:col-4", "xl:col-4"], ["type", "radio", "name", "kpiRequired", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip", "value"], ["type", "radio", "name", "kpiRequired", "checked", "checked", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["for", "aggregation", "required", "", 2, "width", "100px"], ["type", "radio", "name", "aggregation", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip", "value"], ["type", "radio", "name", "aggregation", "checked", "checked", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["class", "col-4 xs:col-4 sm:col-4 lg:col-4 xl:col-4", 4, "ngIf"], ["required", "", "for", "workbench"], ["required", "", "id", "workbench", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "id", "aggregationInfo", "type", "text", "pInputText", "", "placeholder", "Specify Aggregation Information", "size", "40", 3, "ngModelChange", "ngModel"], ["required", ""], ["required", "", "for", "bpdh"], ["id", "bpdh", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "for", "pdh"], ["id", "pdh", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "for", "fordh"], ["id", "fordh", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "for", "location"], ["required", "", "id", "location", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "90", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "newReportRequired", "required", "", 2, "width", "100px"], ["type", "radio", "name", "newReportRequired", "checked", "checked", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["type", "radio", "name", "newReportRequired", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["required", "", "for", "reportDescription"], ["id", "reportDescription", "rows", "3", "cols", "100", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "reportUsage"], ["id", "reportUsage", "rows", "3", "cols", "100", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "for", "reportType"], ["type", "radio", "id", "Temporary", "name", "reportType", "checked", "checked", "tooltipPosition", "left", "value", "Temporary", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "Temporary"], ["type", "radio", "id", "Permanent", "name", "reportType", "tooltipPosition", "left", "value", "Permanent", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "Permanent"], ["required", "", "for", "reportTool"], ["appendTo", "body", "tooltipPosition", "left", "placeholder", "Select Reference Tool", 3, "onChange", "ngModelChange", "options", "pTooltip", "ngModel"], ["for", "designReportAttached"], ["tooltipPosition", "left", "inputId", "designReportAttached", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "cdmConsumed"], [1, "col-6", "xs:col-6", "sm:col-6", "lg:col-6", "xl:col-6"], [3, "ngModelChange", "onChange", "ngModel", "binary"], ["type", "text", "pInputText", "", "pInputText", "", "placeholder", "Specify CDM", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip", "disabled"], ["for", "datasetConsumed"], ["type", "text", "pInputText", "", "pInputText", "", "placeholder", "Specify Dataset", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "pTooltip", "disabled"], ["id", "selectedTool", "type", "text", "pInputText", "", "placeholder", "Please Specify Reference Tool", "size", "70", 3, "ngModelChange", "ngModel"], ["required", "", "for", "name"], ["required", "", "id", "name", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "email"], ["required", "", "id", "email", "tooltipPosition", "left", "pInputText", "", "size", "70", "type", "email", 3, "ngModelChange", "blur", "pTooltip", "ngModel"], ["required", "", "id", "name", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "id", "email", "type", "email", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "blur", "ngModelChange", "pTooltip", "ngModel"], ["id", "description", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "businessKPIImpacted"], ["required", "", "id", "businessKPIImpacted", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "dataRuleDescription"], ["id", "dataRuleDescription", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "processPEPFInScope"], ["required", "", "id", "processPEPFInScope", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "70", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "requirementType", "required", "", 2, "width", "100px"], ["type", "radio", "id", "Global", "name", "approvedBudget", "checked", "checked", "tooltipPosition", "left", "value", "Global", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "Global"], ["type", "radio", "id", "BU/Market", "name", "approvedBudget", "tooltipPosition", "left", "value", "BU/Market", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "BU/Market"], ["class", "col-12", "style", "display: inline-flex;", 4, "ngIf"], [1, "col-12", 2, "display", "inline-flex"], ["for", "market", "required", ""], ["id", "market", "type", "text", "pInputText", "", "tooltipPosition", "left", "size", "60", 3, "ngModelChange", "ngModel", "pTooltip"], ["required", "", "for", "etlRequirements"], ["id", "reportDescription", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["required", "", "for", "azureRequirements"], ["id", "azureRequirements", "rows", "3", "cols", "78", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel"], ["iconPos", "right", 3, "onClick", "label"]],
    template: function ChecklistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChecklistComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-tabView", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ChecklistComponent_Template_p_tabView_onChange_3_listener($event) {
          return ctx.onTabChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChecklistComponent_p_tabPanel_4_Template, 27, 16, "p-tabPanel", 4)(5, ChecklistComponent_p_tabPanel_5_Template, 68, 44, "p-tabPanel", 4)(6, ChecklistComponent_p_tabPanel_6_Template, 110, 67, "p-tabPanel", 4)(7, ChecklistComponent_p_tabPanel_7_Template, 32, 21, "p-tabPanel", 4)(8, ChecklistComponent_p_tabPanel_8_Template, 31, 23, "p-tabPanel", 4)(9, ChecklistComponent_p_tabPanel_9_Template, 21, 11, "p-tabPanel", 4)(10, ChecklistComponent_p_tabPanel_10_Template, 69, 47, "p-tabPanel", 4)(11, ChecklistComponent_p_tabPanel_11_Template, 64, 36, "p-tabPanel", 4)(12, ChecklistComponent_p_tabPanel_12_Template, 7, 4, "p-tabPanel", 4)(13, ChecklistComponent_p_tabPanel_13_Template, 7, 4, "p-tabPanel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 5)(15, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function ChecklistComponent_Template_p_button_onClick_15_listener() {
          return ctx.prevPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChecklistComponent_p_button_16_Template, 1, 1, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function ChecklistComponent_Template_p_button_onClick_17_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showTab("integration") && !ctx.showTab("dataModelling") && !ctx.showTab("adlL1") && !ctx.showTab("adlL2") && !ctx.showTab("gold") && !ctx.showTab("mdm") && !ctx.showTab("ia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeIndex", ctx.eventService.selectedEADITabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("integration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("dataModelling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("adlL1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("adlL2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("gold"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("mdm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("ia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("dataQuality"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("informatica"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTab("azureSynapse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("BACK_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("NEXT_BUTTON"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabPanel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__.Checkbox, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextarea, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.Dropdown, primeng_fieldset__WEBPACK_IMPORTED_MODULE_20__.Fieldset, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_21__.InputGroup, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_22__.InputGroupAddon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 86811:
/*!*******************************************************************!*\
  !*** ./src/app/intake-ui/components/confirm/confirm.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmComponent: () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);










function ConfirmComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmComponent_ng_template_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const cd_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](cd_r2.reject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmComponent_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const cd_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](cd_r2.accept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r3.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r3.message);
  }
}
class ConfirmComponent {
  constructor(eventService, demandIntakeService, router, authService, confirmationService, messageService) {
    this.eventService = eventService;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.authService = authService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to submit the demand!',
      accept: () => {
        this.submitDemand();
      },
      reject: () => {
        // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 1000 });
        let path = 'demand-intake/attachment';
        if (this.authService.isDM()) {
          if (this.eventService.isNewDemand) {
            path = 'demand-intake/attachment';
          } else {
            path = 'demand-intake/demandmanager';
          }
        } else if (this.authService.isCCB()) {
          if (this.eventService.isNewDemand) {
            path = 'demand-intake/attachment';
          } else {
            path = 'demand-intake/ccb';
          }
        }
        this.router.navigate([path]);
      }
    });
  }
  submitDemand() {
    this.demandIntakeService.submitDemand().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(response => {
      console.log("submitDemand() : Response -> ", response);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Demand Submitted Successfully!'
      });
      this.router.navigate(['view']);
    }, error => {
      console.log("submitDemand() : ERROR -> ", error);
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'Demand Failed to Submit!'
      });
    });
  }
  static #_ = this.ɵfac = function ConfirmComponent_Factory(t) {
    return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_0__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ConfirmComponent,
    selectors: [["app-confirm"]],
    decls: 4,
    vars: 0,
    consts: [["cd", ""], ["pTemplate", "headless"], [1, "flex", "flex-column", "align-items-center", "p-5", "surface-overlay", "border-round"], [1, "border-circle", "bg-primary", "inline-flex", "justify-content-center", "align-items-center", "h-6rem", "w-6rem", "-mt-8"], [1, "pi", "pi-question", "text-5xl"], [1, "font-bold", "text-2xl", "block", "mb-2", "mt-4"], [1, "mb-0"], [1, "flex", "align-items-center", "gap-2", "mt-4"], ["pButton", "", "label", "No", 1, "p-button-outlined", "w-8rem", 3, "click"], ["pButton", "", "label", "Yes", 1, "w-8rem", 3, "click"]],
    template: function ConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-confirmDialog", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ConfirmComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.Toast, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1499:
/*!***********************************************************************!*\
  !*** ./src/app/intake-ui/components/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _models_all_demands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/all-demands */ 86457);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _models_view_demands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/view-demands */ 79723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/charts.service */ 58889);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/avatar */ 46095);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/scrollpanel */ 66831);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputgroup */ 64661);























const _c0 = () => ({
  width: "100%",
  height: "250px"
});
function DashboardComponent_div_17_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const demand_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.authService.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", demand_r2.requestedBy);
  }
}
function DashboardComponent_div_17_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 53);
  }
}
function DashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_17_Template_div_click_1_listener() {
      const demand_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.populateDemand(demand_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 43)(3, "p-tag", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 48)(13, "p-avatar", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, DashboardComponent_div_17_img_14_Template, 1, 2, "img", 50)(15, DashboardComponent_div_17_i_15_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const demand_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r2.demandIntakeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 8, demand_r2.requestedDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", demand_r2.requestedBy)("tooltipPosition", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.authService.profilePhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.authService.profilePhoto);
  }
}
function DashboardComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_33_Template_div_click_1_listener() {
      const demand_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.populateDemand(demand_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 54)(3, "p-tag", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 48)(13, "p-avatar", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const demand_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r5.demandIntakeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 7, demand_r5.requestedDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", demand_r5.requestedBy)("tooltipPosition", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.demandIntakeService.getDemandStatusValue(demand_r5.status));
  }
}
function DashboardComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_49_Template_div_click_1_listener() {
      const demand_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.populateDemand(demand_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 54)(3, "p-tag", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 48)(13, "p-avatar", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const demand_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r7.demandIntakeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 7, demand_r7.requestedDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", demand_r7.requestedBy)("tooltipPosition", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.demandIntakeService.getDemandStatusValue(demand_r7.status));
  }
}
function DashboardComponent_div_65_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const demand_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.demandIntakeService.getDemandStatusValue(demand_r9.status));
  }
}
function DashboardComponent_div_65_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const demand_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.demandIntakeService.getDemandStatusValue(demand_r9.status));
  }
}
function DashboardComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_div_65_Template_div_click_1_listener() {
      const demand_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.populateDemand(demand_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 54)(3, "p-tag", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 48)(13, "p-avatar", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, DashboardComponent_div_65_span_15_Template, 4, 1, "span", 61)(16, DashboardComponent_div_65_span_16_Template, 4, 1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const demand_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("severity", demand_r9.status == "ACCEPTED" ? "success" : "danger")("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", demand_r9.demandIntakeId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 9, demand_r9.requestedDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", demand_r9.requestedBy)("tooltipPosition", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", demand_r9.status != "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", demand_r9.status == "ACCEPTED");
  }
}
class DashboardComponent {
  constructor(eventService, demandIntakeService, fieldsService, chartsService, router, messageService, authService) {
    this.eventService = eventService;
    this.demandIntakeService = demandIntakeService;
    this.fieldsService = fieldsService;
    this.chartsService = chartsService;
    this.router = router;
    this.messageService = messageService;
    this.authService = authService;
    this.allDemands = new _models_all_demands__WEBPACK_IMPORTED_MODULE_0__.AllDemands();
    this.viewDemands = new _models_view_demands__WEBPACK_IMPORTED_MODULE_2__.ViewDemands();
    this.viewDraftDemands = [];
    this.viewPendingDemands = [];
    this.viewStakeholderDemands = [];
    this.viewCompletedDemands = [];
    this.todayDate = new Date();
    this.fromDate = new Date(new Date().getFullYear(), 0, 1);
    this.toDate = new Date();
  }
  ngOnInit() {
    this.documentStyle = getComputedStyle(document.documentElement);
    const textColor = this.documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');
    this.quarterOptions = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
    this.yearOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
    this.fetchAllFields();
    this.fetchAllDemands();
    this.updateChart();
    this.getQuarterlyChartData();
  }
  populateDemands() {
    this.viewDraftDemands = this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DRAFT === item.status).concat(this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DRAFT === item.status));
    this.viewPendingDemands = this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.PENDING_WITH_DM === item.status).concat(this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.PENDING_WITH_DM === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.PENDING_WITH_DM === item.status), this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_HOLD === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_HOLD === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_HOLD === item.status), this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_MODIFICATION === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_MODIFICATION === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_MODIFICATION === item.status), this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.PENDING_WITH_CCB === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.PENDING_WITH_CCB === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.PENDING_WITH_CCB === item.status), this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_HOLD === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_HOLD === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_HOLD === item.status), this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_MODIFICATION === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_MODIFICATION === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_MODIFICATION === item.status));
    this.viewStakeholderDemands = this.viewCurrentMyDemandsAsSH;
    this.viewCompletedDemands = this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_REJECTED === item.status || _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_REJECTED === item.status).concat(this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.ACCEPTED === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.ACCEPTED === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.ACCEPTED === item.status), this.viewCurrentMyDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_REJECTED === item.status || _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_REJECTED === item.status), this.viewCurrentPendingDemands.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_REJECTED === item.status || _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_REJECTED === item.status), this.viewCurrentMyDemandsAsSH.filter(item => _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DM_REJECTED === item.status || _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.CCB_REJECTED === item.status));
  }
  fetchAllFields() {
    this.fieldsService.getAllFields();
  }
  fetchAllDemands() {
    this.demandIntakeService.getViewAllDemands().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      this.eventService.progressBarEvent.emit(false);
      this.viewDemands = response;
      this.errorData = "";
      console.log('Dashboard getAllDemands(): Response -> ', this.allDemands);
      this.viewCurrentMyDemands = this.viewDemands.myDemands;
      this.viewCurrentMyDemandsAsSH = this.viewDemands.stakeholderDemands;
      this.viewCurrentPendingDemands = this.viewDemands.pendingDemands;
      this.populateDemands();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      console.log('Dashboard getAllDemands() : ERROR -> ', error);
      this.errorData = JSON.stringify(error.error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(error);
    })).subscribe();
  }
  populateDemand(demand) {
    this.demandIntakeService.getDemandByDemandId(demand.demandIntakeId).subscribe(response => {
      console.info("onDemandSelect() : SUCCESS : " + demand.demandIntakeId, response);
      this.demandIntakeService.setDemand(response, false);
      this.eventService.progressBarEvent.emit(false);
      this.router.navigate(['/demand-intake/introduction/' + demand.demandIntakeId]);
    }, error => {
      console.info("onDemandSelect() : ERROR : " + demand.demandIntakeId, error);
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Demand [' + demand.demandIntakeId + '] Failed to load : with error ' + error.statusText,
        life: 3000
      });
    });
  }
  updateChart() {
    this.chartsService.getYearlyChart(this.fromDate, this.toDate).subscribe(response => {
      this.eventService.progressBarEvent.emit(false);
      console.log(response);
      this.populateYearChartData(response);
    }, error => {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load data : ' + error.statusText,
        life: 3000
      });
    });
  }
  getQuarterlyChartData() {
    this.chartsService.getQuarterlyChart().subscribe(response => {
      this.eventService.progressBarEvent.emit(false);
      console.log(response);
      this.populateQuarterChartData(response);
    }, error => {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load data : ' + error.statusText,
        life: 3000
      });
    });
  }
  populateQuarterChartData(response) {
    this.quarterlyData = {
      labels: response.labels,
      datasets: [{
        borderWidth: 1,
        data: [response.data['Q1'], response.data['Q2'], response.data['Q3'], response.data['Q4']],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(46,217,191,0.2)', 'rgba(153, 102, 255, 0.2)'],
        hoverBackgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(46,217,191, 0.5)', 'rgba(153, 102, 255, 0.5)'],
        borderColor: ['rgba(54, 162, 235)', 'rgba(255, 159, 64)', 'rgba(46,217,191)', 'rgba(153, 102, 255)']
      }]
    };
  }
  populateYearChartData(response) {
    this.yearlyData = {
      labels: response.labels,
      datasets: [{
        type: 'bar',
        label: 'Demands',
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(46,217,191,0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(94,165,19,0.2)', 'rgba(205,32,32,0.2)'],
        borderColor: ['rgba(54, 162, 235)', 'rgba(255, 159, 64)', 'rgba(46,217,191)', 'rgba(153, 102, 255)', 'rgba(94,165,19)', 'rgba(205,32,32)'],
        borderWidth: 1,
        data: [response.data['Draft'], response.data['Pending'], response.data['On Hold'], response.data['Modification'], response.data['Accepted'], response.data['Rejected']]
      }]
    };
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_5__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_charts_service__WEBPACK_IMPORTED_MODULE_6__.ChartsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 98,
    vars: 36,
    consts: [[1, "col-12", "grid"], [1, "col-12", "md:col-6", "lg:col-3"], [1, "card", "border-none", "surface-border", "m-0", 2, "background", "linear-gradient(226.42deg, #077abb 8.93%, #153375 110.98%)", "border-bottom-left-radius", "inherit", "border-bottom-right-radius", "inherit"], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center"], ["size", "large", "shape", "circle", "styleclass", "demand-badge status-draft", 1, "p-element"], [1, "demand-badge", "status-draft", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "material-symbols-outlined", "p-avatar-icon"], [1, "text-white", "text-xl", "ml-2"], [1, "block", "text-white", "font-bold", "text-6xl"], [1, "card", "p-3", 2, "border-top-left-radius", "inherit", "border-top-right-radius", "inherit"], [4, "ngFor", "ngForOf"], [1, "card", "border-none", "surface-border", "m-0", 2, "background", "linear-gradient(226.42deg, #c5741f 8.93%, #673a13 110.98%)", "border-bottom-left-radius", "inherit", "border-bottom-right-radius", "inherit"], ["size", "large", "shape", "circle", "styleclass", "demand-badge status-ccb_hold", 1, "p-element"], [1, "demand-badge", "status-ccb_hold", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "card", "border-none", "surface-border", "m-0", 2, "background", "linear-gradient(226.42deg, #a51a1a 8.93%, #6d1414 110.98%)", "border-bottom-left-radius", "inherit", "border-bottom-right-radius", "inherit"], ["size", "large", "shape", "circle", "styleclass", "demand-badge status-dm_rejected", 1, "p-element"], [1, "demand-badge", "status-rejected", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "card", "border-none", "surface-border", "m-0", 2, "background", "linear-gradient(226.42deg, #15876a 8.93%, #093d30 110.98%)", "border-bottom-left-radius", "inherit", "border-bottom-right-radius", "inherit"], ["size", "large", "shape", "circle", "styleclass", "demand-badge status-accepted", 1, "p-element"], [1, "demand-badge", "status-accepted", "p-avatar", "p-component", "p-avatar-circle", "p-avatar-lg"], [1, "col-12"], [1, "grid"], [1, "col-12", "md:col-12", "lg:col-6"], [1, "card", "flex", "flex-wrap", "gap-3", "p-fluid", "h-full"], [1, "col-12", "grid", "gap-3"], [1, "flex-auto"], ["for", "from", 1, "font-bold", "block", "mb-2"], ["inputId", "from", "dateFormat", "M dd, yy", 3, "ngModelChange", "ngModel", "iconDisplay", "defaultDate", "maxDate", "showButtonBar", "showIcon"], ["for", "to", 1, "font-bold", "block", "mb-2"], ["dateFormat", "M dd, yy", "inputId", "to", 3, "ngModelChange", "ngModel", "iconDisplay", "showButtonBar", "showIcon", "minDate", "maxDate"], ["type", "button", "pButton", "", "icon", "pi pi-search", 1, "p-button-warning", 3, "click"], ["type", "bar", 3, "data", "options"], [1, "col-12", "md:col-12", "lg:col-3"], [1, "card", "flex", "flex-wrap", "gap-3", "p-fluid"], [1, "col-12", "grid", "gap-3", "align-text-center"], [1, "font-bold", "text-lg"], ["type", "doughnut", 3, "data", "options"], [1, "card", "h-full"], [1, "h-full", "w-full", "text-2xl", "font-medium", "align-content-center", "text-align-center"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 -960 960 960", "width", "48px", "fill", "#cb3737"], ["d", "m467.93-321.78 50.29-50.29-121.7-122.39v-175.13h-72.04v203.35l143.45 144.46Zm260.59 189.76v-87.26q75.77-36.56 120.96-106.56 45.19-69.99 45.19-154.6t-45.19-155.17q-45.19-70.55-120.96-106.11v-87.26q108.85 42 176.15 136.76 67.31 94.75 67.31 211.29 0 116.54-66.81 211.73-66.8 95.18-176.65 137.18Zm-369.28 22.24q-76.71 0-144.32-29.36-67.61-29.35-117.9-79.52-50.29-50.18-79.64-117.9Q-11.98-404.29-11.98-481t29.36-144.44q29.35-67.72 79.64-117.9 50.29-50.17 117.95-79.52 67.65-29.36 144.27-29.36 76.71 0 144.44 29.36 67.72 29.35 117.89 79.51 50.17 50.15 79.65 117.89 29.48 67.73 29.48 144.45 0 76.72-29.48 144.46-29.48 67.74-79.65 117.9-50.17 50.16-117.89 79.51-67.73 29.36-144.44 29.36Zm.24-77.55q121.09 0 207.5-85.73 86.41-85.74 86.41-208.22 0-121.13-86.63-207.38t-207.71-86.25q-122.44 0-207.96 86.46-85.52 86.47-85.52 207.6 0 122.48 85.73 208 85.74 85.52 208.18 85.52ZM359.24-481Z"], [1, "card-without-shadow", "mb-2", "flex", "flex-column", "w-full", "border-1", "surface-border", "px-2", "py-2", "hover:surface-ground", "cursor-pointer", 3, "click"], [1, "flex", "justify-content-between", "align-items-center", "mb-2"], [1, "mr-2", 3, "rounded"], [1, "text-900", "font-semibold", "text-sm"], [1, "pi", "pi-clock", "text-700", "mr-2"], [1, "text-800", "font-medium", "text-xl", "textOverflow", "mb-2"], [1, "flex", "justify-content-between", "align-items-center"], ["shape", "circle", 1, "p-element", 3, "pTooltip", "tooltipPosition"], [3, "src", "alt", 4, "ngIf"], ["class", "pi pi-user", 4, "ngIf"], [3, "src", "alt"], [1, "pi", "pi-user"], [1, "mb-2", "flex", "justify-content-between", "align-items-center"], ["severity", "warning", 1, "mr-2", 3, "rounded"], [1, "text-900", "font-semibold"], [1, "pi", "pi-hourglass", "text-sm", "mr-2"], [1, "text-500", "text-sm"], ["severity", "danger", 1, "mr-2", 3, "rounded"], [1, "mr-2", 3, "severity", "rounded"], ["class", "text-900 font-semibold", 4, "ngIf"], [1, "pi", "pi-times-circle", "text-sm", "mr-2"], [1, "pi", "pi-check-circle", "text-sm", "mr-2"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "p-avatar", 5)(7, "div", 6)(8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " edit_document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 4)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 10)(16, "p-scrollPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, DashboardComponent_div_17_Template, 16, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 1)(19, "div", 12)(20, "div", 3)(21, "div", 4)(22, "p-avatar", 13)(23, "div", 14)(24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " pending_actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 4)(29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 10)(32, "p-scrollPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, DashboardComponent_div_33_Template, 19, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 1)(35, "div", 15)(36, "div", 3)(37, "div", 4)(38, "p-avatar", 16)(39, "div", 17)(40, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " manage_accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "As a Stakeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 4)(45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 10)(48, "p-scrollPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, DashboardComponent_div_49_Template, 19, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 1)(51, "div", 18)(52, "div", 3)(53, "div", 4)(54, "p-avatar", 19)(55, "div", 20)(56, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, " task_alt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 4)(61, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 10)(64, "p-scrollPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, DashboardComponent_div_65_Template, 17, 12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 21)(67, "div", 22)(68, "div", 23)(69, "div", 24)(70, "div", 25)(71, "div", 26)(72, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "p-calendar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_Template_p_calendar_ngModelChange_74_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.fromDate, $event) || (ctx.fromDate = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 26)(76, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "p-inputGroup")(79, "p-calendar", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_Template_p_calendar_ngModelChange_79_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.toDate, $event) || (ctx.toDate = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_80_listener() {
          return ctx.updateChart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "p-chart", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 33)(84, "div", 34)(85, "div", 35)(86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Demands By Quarter");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 0)(89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "p-chart", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 33)(92, "div", 38)(93, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "Chart : Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.viewDraftDemands.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.viewDraftDemands);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.viewPendingDemands.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.viewPendingDemands);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.viewStakeholderDemands.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.viewStakeholderDemands);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.viewCompletedDemands.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.viewCompletedDemands);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconDisplay", "input")("defaultDate", ctx.fromDate)("maxDate", ctx.todayDate)("showButtonBar", true)("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("iconDisplay", "input")("showButtonBar", true)("showIcon", true)("minDate", ctx.fromDate)("maxDate", ctx.todayDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.yearlyData)("options", ctx.yearOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.quarterlyData)("options", ctx.quarterOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, primeng_calendar__WEBPACK_IMPORTED_MODULE_16__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.Tooltip, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, primeng_avatar__WEBPACK_IMPORTED_MODULE_20__.Avatar, primeng_tag__WEBPACK_IMPORTED_MODULE_21__.Tag, primeng_chart__WEBPACK_IMPORTED_MODULE_22__.UIChart, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_23__.ScrollPanel, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_24__.InputGroup, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 95595:
/*!*******************************************************************************!*\
  !*** ./src/app/intake-ui/components/demand-intake/demand-intake.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandIntakeComponent: () => (/* binding */ DemandIntakeComponent)
/* harmony export */ });
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/timeline */ 84357);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/steps */ 96997);














function DemandIntakeComponent_p_sidebar_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Demand Summary (", ctx_r1.demandIntakeService.demandInformation.introduction.demandIntakeId, " )");
  }
}
function DemandIntakeComponent_p_sidebar_1_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](event_r3.date);
  }
}
function DemandIntakeComponent_p_sidebar_1_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-card", 21)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Description Goes here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("header", event_r4.status);
  }
}
function DemandIntakeComponent_p_sidebar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-sidebar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function DemandIntakeComponent_p_sidebar_1_Template_p_sidebar_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.sidebarVisible2, $event) || (ctx_r1.sidebarVisible2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DemandIntakeComponent_p_sidebar_1_ng_template_1_Template, 3, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Demand Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 11)(7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9)(10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Requested By");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13)(16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Requested Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9)(23, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14)(26, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p-timeline", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DemandIntakeComponent_p_sidebar_1_ng_template_29_Template, 2, 1, "ng-template", 16)(30, DemandIntakeComponent_p_sidebar_1_ng_template_30_Template, 3, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx_r1.sidebarVisible2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.demandIntakeService.demandInformation.introduction.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.demandIntakeService.demandInformation.introduction.requestedBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 6, ctx_r1.demandIntakeService.demandInformation.requesterInfo.requestedDate, "MMM dd, yyyy hh:mm a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.demandIntakeService.getDemandStatusValue(ctx_r1.demandIntakeService.demandInformation.introduction.status), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.events);
  }
}
function DemandIntakeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemandIntakeComponent_div_5_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sidebarVisible2 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class DemandIntakeComponent {
  constructor(activatedRoute, router, messageService, demandIntakeService, eventService, authService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.messageService = messageService;
    this.demandIntakeService = demandIntakeService;
    this.eventService = eventService;
    this.authService = authService;
    this.sidebarVisible2 = false;
    const demandIntakeId = this.activatedRoute.snapshot.paramMap.get('demandIntakeId');
    this.eventService.currentDemandIntakeId = this.demandIntakeService.demandInformation.introduction.demandIntakeId;
    this.events = [{
      status: 'Drafted',
      date: '15/10/2020 10:30',
      actionBy: 'Pankaj',
      description: 'Draft description'
    }, {
      status: 'Stakeholder - X',
      date: '15/10/2020 10:30',
      actionBy: 'Pradnya',
      description: 'Stakeholder-X remarks'
    }, {
      status: 'Stakeholder - Y',
      date: '15/10/2020 10:30',
      actionBy: 'Sachin',
      description: 'Stakeholder-Y remarks'
    }, {
      status: 'Demand Raised',
      date: '15/10/2020 10:30',
      actionBy: 'Pankaj',
      description: 'Demand raising desc'
    }, {
      status: 'DM - ITaaP',
      date: '15/10/2020 10:30',
      actionBy: 'Lucy',
      description: 'DM-ItaaP remarks'
    }, {
      status: 'DM - ADL L1',
      date: '15/10/2020 10:30',
      actionBy: 'Rajendra',
      description: 'DM-ADL L1 remarks'
    }, {
      status: 'CCM Member',
      date: '15/10/2020 16:15',
      actionBy: 'Rakesh',
      description: 'CCB Member remarks'
    }];
  }
  ngOnInit() {
    // console.log("DemandIntakeComponent id ", this.eventService.currentDemandIntakeId);
    // console.log("DemandIntakeComponent isNewDemand ", this.eventService.isNewDemand);
    // this.demandIntakeService.saveDemand()
    //   .pipe(first())
    //   .subscribe(
    //     response => {
    //       console.log("saveDemand() : Response -> ", response)
    //     },
    //     error => {
    //       console.log("saveDemand() : ERROR -> ", error)
    //     });
    if (this.eventService.isNewDemand) {
      this.items = [{
        label: 'Introduction',
        routerLink: ['introduction'],
        visible: true
      }, {
        label: 'Requester',
        routerLink: 'requester',
        visible: true
      }, {
        label: 'Requirement',
        routerLink: 'requirement',
        visible: true
      }, {
        label: 'Solution Direction',
        routerLink: 'solution-direction',
        visible: false
      }, {
        label: 'EADI',
        routerLink: 'checklist',
        visible: false
      }, {
        label: 'Attachment',
        routerLink: 'attachment',
        visible: true
      }, {
        label: 'Demand Manager',
        routerLink: 'demandmanager',
        visible: !this.eventService.isNewDemand && !this.eventService.isMyDemand && (this.authService.isDM() || this.authService.isCCB())
      }, {
        label: 'CCB Member',
        routerLink: 'ccb',
        visible: !this.eventService.isNewDemand && !this.eventService.isMyDemand && this.authService.isCCB()
      }];
    } else {
      this.items = [{
        label: 'Introduction',
        routerLink: ['introduction/' + this.eventService.currentDemandIntakeId],
        visible: true
      }, {
        label: 'Requester',
        routerLink: ['/demand-intake/requester/' + this.eventService.currentDemandIntakeId],
        visible: true
      }, {
        label: 'Requirement',
        routerLink: ['/demand-intake/requirement/' + this.eventService.currentDemandIntakeId],
        visible: true
      }, {
        label: 'Solution Direction',
        routerLink: ['/demand-intake/solution-direction/' + this.eventService.currentDemandIntakeId],
        visible: !this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && (this.authService.isDM() || this.authService.isCCB()) || (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM
      }, {
        label: 'EADI',
        routerLink: ['/demand-intake/checklist/' + this.eventService.currentDemandIntakeId],
        visible: !this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && (this.authService.isDM() || this.authService.isCCB()) || (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM
      }, {
        label: 'Attachment',
        routerLink: ['/demand-intake/attachment/' + this.eventService.currentDemandIntakeId],
        visible: true
      }, {
        label: 'DM',
        routerLink: ['/demand-intake/demandmanager/' + this.eventService.currentDemandIntakeId],
        visible: !this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && (this.authService.isDM() || this.authService.isCCB()) || (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM
      }, {
        label: 'CCB',
        routerLink: ['/demand-intake/ccb/' + this.eventService.currentDemandIntakeId],
        visible: !this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.authService.isCCB() || (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_REJECTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.CCB_MODIFICATION) || !this.eventService.isMyDemand && this.authService.isDM() && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_CCB && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DM_HOLD
      }];
    }
    this.items = this.items.filter(item => item.visible);
    // console.log("this.items", this.items)
  }
  ngOnDestroy() {
    // console.log('Items destroyed1', this.subscription);
    if (this.subscription) {
      // console.log('Items destroyed2');
      this.subscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function DemandIntakeComponent_Factory(t) {
    return new (t || DemandIntakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DemandIntakeComponent,
    selectors: [["app-demand-intake"]],
    hostBindings: function DemandIntakeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("unloaded", function DemandIntakeComponent_unloaded_HostBindingHandler() {
          return ctx.ngOnDestroy();
        });
      }
    },
    decls: 8,
    vars: 4,
    consts: [["styleClass", "w-30rem", "position", "right", 3, "visible", "visibleChange", 4, "ngIf"], [1, "card", "grid"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12"], [3, "model", "readonly"], ["class", "col-1 xs:col-1 sm:col-1 lg:col-1 xl:col-1", 4, "ngIf"], [1, "card", "h-full"], ["styleClass", "w-30rem", "position", "right", 3, "visibleChange", "visible"], ["pTemplate", "header"], [1, "grid"], [1, "col-12", "xs:col-1", "sm:col-1", "lg:col-1", "xl:col-3"], [1, "block", "text-500", "font-medium", "mb-2"], [1, "justify-content-between", "textOverflow"], [1, "text-750", "font-medium", "text-xl"], [1, "col-12", "xs:col-1", "sm:col-1", "lg:col-1", "xl:col-2"], [1, "justify-content-between"], ["align", "right", 1, "w-full", "md:w-20rem", 3, "value"], ["pTemplate", "content"], ["pTemplate", "opposite"], [1, "flex", "align-items-center", "gap-2"], [1, "font-bold"], [1, "p-text-secondary"], [3, "header"], [1, "col-1", "xs:col-1", "sm:col-1", "lg:col-1", "xl:col-1"], ["type", "button", "icon", "pi pi-arrow-left", 1, "mr-2", 3, "click"]],
    template: function DemandIntakeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DemandIntakeComponent_p_sidebar_1_Template, 31, 9, "p-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-steps", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DemandIntakeComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.eventService.isNewDemand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx.items)("readonly", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, primeng_timeline__WEBPACK_IMPORTED_MODULE_11__.Timeline, primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__.Sidebar, primeng_steps__WEBPACK_IMPORTED_MODULE_13__.Steps, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 47943:
/*!*******************************************************************************!*\
  !*** ./src/app/intake-ui/components/demandmanager/demandmanager.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandManagerComponent: () => (/* binding */ DemandManagerComponent)
/* harmony export */ });
/* harmony import */ var _enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/demand-intake-decision */ 5334);
/* harmony import */ var _enums_approver_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/approver-domain */ 87609);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 26895);



















function DemandManagerComponent_p_tabView_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabView")(1, "p-tabPanel", 7)(2, "div", 8)(3, "div", 9)(4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 11)(7, "p-calendar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DemandManagerComponent_p_tabView_3_Template_p_calendar_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.demandManagerInfo.decisionDate, $event) || (ctx_r1.demandManagerInfo.decisionDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 9)(9, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 11)(12, "p-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DemandManagerComponent_p_tabView_3_Template_p_dropdown_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDecision, $event) || (ctx_r1.selectedDecision = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function DemandManagerComponent_p_tabView_3_Template_p_dropdown_onChange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onDecisionSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11)(17, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DemandManagerComponent_p_tabView_3_Template_textarea_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.demandManagerInfo.remarks, $event) || (ctx_r1.demandManagerInfo.remarks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("header", "Demand Manager (", ctx_r1.getDomainValueList(ctx_r1.domain), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("DEMAND_MANAGER_DECISION_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.demandManagerInfo.decisionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true)("pTooltip", ctx_r1.fieldsService.getToolTip("DEMAND_MANAGER_DECISION_DATE"))("showIcon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("DEMAND_MANAGER_DECISION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.decisions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDecision);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.dmActionDone)("pTooltip", ctx_r1.fieldsService.getToolTip("DEMAND_MANAGER_DECISION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("DEMAND_MANAGER_REMARKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("DEMAND_MANAGER_REMARKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.demandManagerInfo.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.dmActionDone);
  }
}
function DemandManagerComponent_p_tabView_4_p_tabPanel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabPanel", 7)(1, "div", 8)(2, "div", 9)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Decision Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 11)(6, "p-calendar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DemandManagerComponent_p_tabView_4_p_tabPanel_1_Template_p_calendar_ngModelChange_6_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r4.decisionDate, $event) || (item_r4.decisionDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 9)(8, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Decision By");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 11)(11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DemandManagerComponent_p_tabView_4_p_tabPanel_1_Template_input_ngModelChange_11_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r4.dmEmail, $event) || (item_r4.dmEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Decision");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 11)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9)(19, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 11)(22, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function DemandManagerComponent_p_tabView_4_p_tabPanel_1_Template_textarea_ngModelChange_22_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](item_r4.remarks, $event) || (item_r4.remarks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("header", "Demand Manager (", ctx_r1.getDomainValue(item_r4.solution), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", item_r4.decisionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true)("showIcon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", item_r4.dmEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r1.demandIntakeService.getDemandStatusValueInLower(item_r4.decision));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r4.decision, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", item_r4.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
  }
}
function DemandManagerComponent_p_tabView_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tabView");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DemandManagerComponent_p_tabView_4_p_tabPanel_1_Template, 23, 11, "p-tabPanel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.solutionDirectionList);
  }
}
function DemandManagerComponent_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function DemandManagerComponent_p_button_7_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r1.fieldsService.getLabel("NEXT_BUTTON"));
  }
}
function DemandManagerComponent_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function DemandManagerComponent_p_button_8_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.submitPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r1.submitDemandLabel);
  }
}
class DemandManagerComponent {
  constructor(eventService, fieldsService, demandIntakeService, router, messageService, authService) {
    this.eventService = eventService;
    this.fieldsService = fieldsService;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.messageService = messageService;
    this.authService = authService;
    this.domain = [];
    this.dmActionDone = false;
  }
  ngOnInit() {
    // console.log("DemandManagerComponent ", this.demandIntakeService.demandInformation)
    this.submitDemandLabel = 'Submit Demand';
    if (this.demandIntakeService.getDemandInformation().introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.DM_MODIFICATION || this.demandIntakeService.getDemandInformation().introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_MODIFICATION) {
      this.submitDemandLabel = 'Update Demand';
    }
    if (this.authService.isDM()) {
      let dmList = this.demandIntakeService.demandInformation.solutionDirectionInfo.filter(item => item.dmEmail === this.authService.currentUserValue.email && (item.decision === 'APPROVED' || item.decision === 'REJECTED'));
      if (dmList.length > 0) {
        this.dmActionDone = true;
        this.demandIntakeService.dmActionDone = true;
      }
      this.visibleNextButton = false;
      this.domain = this.authService.currentUserValue.domain;
      this.demandIntakeService.demandInformation.demandManagerInfo.domain = this.domain;
      if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_REJECTED) {
        this.visibleNextButton = true;
        this.visibleSubmitButton = false;
      } else if (this.demandIntakeService.getDemandInformation().introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.DM_REJECTED) {
        this.visibleNextButton = false;
        this.visibleSubmitButton = false;
      } else if (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.PENDING_WITH_CCB && !this.dmActionDone) {
        this.visibleSubmitButton = true;
      } else if (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.PENDING_WITH_CCB && this.dmActionDone) {
        this.visibleSubmitButton = false;
      } else if (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_REJECTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_HOLD)) {
        this.visibleNextButton = true;
        this.visibleSubmitButton = false;
      } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.PENDING_WITH_CCB) {
        this.visibleSubmitButton = false;
      } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_REJECTED) {
        this.visibleSubmitButton = false;
        this.visibleNextButton = true;
      } else {
        this.visibleSubmitButton = true;
      }
    } else {
      this.visibleSubmitButton = false;
      if (this.authService.isRequester() && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_REJECTED)) {
        this.visibleNextButton = true;
      } else if (this.authService.isRequester() && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.DM_MODIFICATION) {
        this.visibleNextButton = false;
        this.visibleSubmitButton = true;
      } else if (!this.eventService.isNewDemand && !this.eventService.isMyDemand && this.authService.isCCB() && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.PENDING_WITH_CCB || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_REJECTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_MODIFICATION)) {
        this.visibleNextButton = true;
      } else if (!this.eventService.isNewDemand && this.eventService.isMyDemand && this.authService.isCCB() && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.CCB_REJECTED)) {
        this.visibleNextButton = true;
      } else {
        this.visibleNextButton = false;
      }
    }
    if (this.demandIntakeService.getDemandInformation().demandManagerInfo && this.demandIntakeService.getDemandInformation().demandManagerInfo != null) {
      this.demandIntakeService.getDemandInformation().demandManagerInfo.decisionDate = new Date(this.demandIntakeService.getDemandInformation().demandManagerInfo.decisionDate);
      this.demandManagerInfo = this.demandIntakeService.getDemandInformation().demandManagerInfo;
      this.decisions = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision);
      this.selectedDecision = this.getDecisionValue(this.demandIntakeService.getDemandInformation().demandManagerInfo.decision);
    }
    this.solutionDirectionList = this.demandIntakeService.getDemandInformation().solutionDirectionInfo.filter(item => item.value);
    this.solutionDirectionList.forEach(item => {
      item.decisionDate = new Date(item.decisionDate);
    });
  }
  onDecisionSelect() {
    this.demandManagerInfo.decision = this.getDecisionKey(this.selectedDecision);
    this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
  }
  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/attachment']);
    } else {
      this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }
  nextPage() {
    this.demandManagerInfo.decision = this.getDecisionKey(this.selectedDecision);
    this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/ccb']);
    } else {
      this.router.navigate(['demand-intake/ccb/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }
  submitPage() {
    if (this.demandIntakeService.demandInformation.introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.DM_MODIFICATION || this.demandManagerInfo.decisionDate && this.selectedDecision != '' && this.demandManagerInfo.remarks != '') {
      if (this.demandIntakeService.demandInformation.introduction.status !== _enums_demand_status__WEBPACK_IMPORTED_MODULE_2__.DemandStatus.DM_MODIFICATION) {
        this.demandManagerInfo.decision = this.getDecisionKey(this.selectedDecision);
      }
      this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
      this.router.navigate(['demand-intake/confirm']);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill required fields!'
      });
    }
  }
  getDecisionValue(key) {
    const status = Object.keys(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision).indexOf(key);
    let s = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision)[status];
    return s;
  }
  getDecisionKey(value) {
    const index = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision).indexOf(value);
    return Object.keys(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeDecision)[index];
  }
  getDomainValue(key) {
    const status = Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_1__.ApproverDomain).indexOf(key);
    let s = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_1__.ApproverDomain)[status];
    return s;
  }
  getDomainValueList(keys) {
    let outputList = '';
    keys.forEach(key => {
      const index = Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_1__.ApproverDomain).indexOf(key);
      outputList += Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_1__.ApproverDomain)[index];
      outputList += ', ';
    });
    outputList = outputList.trim();
    outputList = outputList.slice(0, outputList.length - 1);
    return outputList;
  }
  static #_ = this.ɵfac = function DemandManagerComponent_Factory(t) {
    return new (t || DemandManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_4__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_5__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: DemandManagerComponent,
    selectors: [["app-demandmanager"]],
    decls: 9,
    vars: 5,
    consts: [[1, "grid", "p-fluid"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12"], [4, "ngIf"], [1, "grid", "grid-nogutter", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["icon", "pi pi-angle-right", 3, "label", "onClick", 4, "ngIf"], ["iconPos", "right", 3, "label", "onClick", 4, "ngIf"], [3, "header"], [1, "grid"], [1, "col-3", "xs:col-3", "sm:col-3", "lg:col-3", "xl:col-3"], ["required", "", "for", "decisionDate", 1, "asterisk-if-mandatory"], [1, "col-9", "xs:col-9", "sm:col-9", "lg:col-9", "xl:col-9"], ["dateFormat", "dd/mm/yy", "tooltipPosition", "left", 3, "ngModelChange", "ngModel", "disabled", "pTooltip", "showIcon"], ["required", "", "for", "decision", 1, "asterisk-if-mandatory"], ["tooltipPosition", "left", "placeholder", "Your decision", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "pTooltip"], ["required", "", "for", "remarks", 1, "asterisk-if-mandatory"], ["rows", "2", "cols", "75", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "pTooltip", "ngModel", "disabled"], [3, "header", 4, "ngFor", "ngForOf"], ["dateFormat", "dd/mm/yy", 3, "ngModelChange", "ngModel", "disabled", "showIcon"], ["required", "", "for", "dmEmail", 1, "asterisk-if-mandatory"], ["id", "project", "type", "text", "size", "60", "disabled", "true", 1, "text-base", "text-color", "surface-overlay", "p-2", "border-1", "border-solid", "surface-border", "border-round", "appearance-none", "outline-none", "focus:border-primary", 3, "ngModelChange", "ngModel"], ["rows", "2", "cols", "75", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "disabled"], ["icon", "pi pi-angle-right", 3, "onClick", "label"], ["iconPos", "right", 3, "onClick", "label"]],
    template: function DemandManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DemandManagerComponent_p_tabView_3_Template, 18, 16, "p-tabView", 2)(4, DemandManagerComponent_p_tabView_4_Template, 2, 1, "p-tabView", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function DemandManagerComponent_Template_p_button_onClick_6_listener() {
          return ctx.prevPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DemandManagerComponent_p_button_7_Template, 1, 1, "p-button", 5)(8, DemandManagerComponent_p_button_8_Template, 1, 1, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.authService.isDM());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.authService.isDM());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("BACK_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleNextButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleSubmitButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabPanel, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_17__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.Dropdown],
    encapsulation: 2
  });
}

/***/ }),

/***/ 13859:
/*!*****************************************************************!*\
  !*** ./src/app/intake-ui/components/dmcrud/dmcrud.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DMCRUDComponent: () => (/* binding */ DMCRUDComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/approver-domain */ 87609);
/* harmony import */ var _models_approver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/approver */ 77566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin.service */ 5227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fieldset */ 63148);


















function DMCRUDComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Demand Managers configured, please Add Demand Manager!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DMCRUDComponent_p_table_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Created On");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Updated On");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DMCRUDComponent_p_table_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td")(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function DMCRUDComponent_p_table_9_ng_template_2_Template_p_button_onClick_16_listener() {
      const dm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showUpdateDMDialog(dm_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dm_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](dm_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("align-self-center approver-badge status-" + ctx_r2.demandIntakeService.getApproverStatusValue(dm_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dm_r2.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getValue(dm_r2.domain));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 7, dm_r2.createdDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 10, dm_r2.updatedDate, "MMM dd, yyyy"));
  }
}
function DMCRUDComponent_p_table_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DMCRUDComponent_p_table_9_ng_template_1_Template, 13, 0, "ng-template", 28)(2, DMCRUDComponent_p_table_9_ng_template_2_Template, 17, 13, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.dmList);
  }
}
class DMCRUDComponent {
  constructor(demandIntakeService, messageService, eventService, adminService) {
    this.demandIntakeService = demandIntakeService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.adminService = adminService;
  }
  ngOnInit() {
    this.adminService.approver = new _models_approver__WEBPACK_IMPORTED_MODULE_1__.Approver();
    this.domains = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain);
    // this.selectedDomain = this.getValue(this.demandIntakeService.getDemandInformation().demandManagerInfo.domain);
    this.adminService.getAllDM().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.dmList = response;
      console.log('getAllDM() : Response -> ', this.dmList);
      this.eventService.progressBarEvent.emit(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.log('getAllDM() : ERROR -> ', error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
    })).subscribe();
  }
  getValue(key) {
    const status = Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain).indexOf(key);
    let s = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain)[status];
    return s;
  }
  getKey(value) {
    const index = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain).indexOf(value);
    return Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain)[index];
  }
  showAddDMDialog() {
    this.adminService.setApprover(new _models_approver__WEBPACK_IMPORTED_MODULE_1__.Approver());
    this.visibleAddDMDialog = true;
  }
  showUpdateDMDialog(dm) {
    this.selectedDomain = this.getValue(dm.domain);
    this.adminService.setApprover(dm);
    this.visibleUpdateDMDialog = true;
  }
  closeAddDMDialog() {
    this.visibleAddDMDialog = false;
  }
  closeUpdateDMDialog() {
    this.visibleUpdateDMDialog = false;
  }
  onSubmit() {
    this.eventService.progressBarEvent.emit(true);
    // console.log("this.selectedDomain", this.selectedDomain)
    // if (this.selectedDomain && this.selectedDomain != '') {
    if (this.adminService.validateApproverRequest()) {
      this.adminService.approver.domain = this.getKey(this.adminService.approver.domain);
      this.adminService.addApprover('DEMAND_MANAGER').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Demand Manager is added successfully!'
        });
        this.closeAddDMDialog();
        this.ngOnInit();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add Demand Manager!'
        });
        this.eventService.progressBarEvent.emit(false);
        this.closeAddDMDialog();
        this.ngOnInit();
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill the all the fields!'
      });
      this.eventService.progressBarEvent.emit(false);
    }
    // } else {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill the all the fields!' });
    //   this.eventService.progressBarEvent.emit(false);
    // }
  }
  onUpdate() {
    this.eventService.progressBarEvent.emit(true);
    if (this.adminService.validateApproverRequest()) {
      this.adminService.approver.domain = this.getKey(this.adminService.approver.domain);
      this.adminService.updateApprover('DEMAND_MANAGER').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Demand Manager is updated successfully!'
        });
        this.closeUpdateDMDialog();
        this.ngOnInit();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update Demand Manager!'
        });
        this.eventService.progressBarEvent.emit(false);
        this.closeUpdateDMDialog();
        this.ngOnInit();
      });
    } else {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill the all the fields!'
      });
    }
  }
  static #_ = this.ɵfac = function DMCRUDComponent_Factory(t) {
    return new (t || DMCRUDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_2__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DMCRUDComponent,
    selectors: [["app-dmcrud"]],
    decls: 66,
    vars: 15,
    consts: [[1, "card", "grid"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12"], [1, "grid"], ["legend", "Add/Remove Demand Manager"], [4, "ngIf"], [3, "value", 4, "ngIf"], ["label", "Add", "icon", "pi pi-plus", 3, "onClick"], ["header", "Add Demand Manager", "modal", "true", 3, "visibleChange", "visible"], [1, "card", "flex", "flex-column", "px-8", "py-5", "gap-4"], [1, "inline-flex", "flex-column", "gap-2"], ["for", "email", 1, "font-semibold"], ["pInputText", "", "id", "email", "type", "email", "size", "40", 3, "ngModelChange", "blur", "ngModel"], [1, "inline-flex", "flex-column", "gap-3"], ["for", "domain", 1, "font-semibold"], ["placeholder", "Your Domain", 3, "ngModelChange", "options", "ngModel"], ["for", "status", 1, "font-semibold"], [1, "flex", "flex-wrap", "gap-3"], [1, "flex", "align-items-center"], ["name", "status", "value", "ACTIVE", 3, "ngModelChange", "ngModel"], [1, "font-semibold"], ["name", "status", "value", "INACTIVE", 3, "ngModelChange", "ngModel"], [1, "flex", "align-items-center", "gap-3", "w-full"], ["label", "Save", "type", "submit", 3, "click"], ["label", "Cancel", 3, "click"], ["header", "Update Demand Manager", "modal", "true", 3, "visibleChange", "visible"], ["pInputText", "", "id", "email", "type", "email", "size", "40", 3, "ngModelChange", "blur", "ngModel", "disabled"], [1, "flex", "align-items-center", "gap-2", "w-full"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-900", "font-medium"], ["icon", "pi pi-user-edit", 3, "onClick"]],
    template: function DMCRUDComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 1)(5, "p-fieldset", 3)(6, "div", 2)(7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DMCRUDComponent_div_8_Template, 3, 0, "div", 4)(9, DMCRUDComponent_p_table_9_Template, 3, 1, "p-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 1)(11, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function DMCRUDComponent_Template_p_button_onClick_11_listener() {
          return ctx.showAddDMDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("visibleChange", function DMCRUDComponent_Template_p_dialog_visibleChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.visibleAddDMDialog, $event) || (ctx.visibleAddDMDialog = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.email, $event) || (ctx.adminService.approver.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DMCRUDComponent_Template_input_blur_17_listener() {
          return ctx.eventService.checkEmailValue(ctx.adminService.approver.email);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_p_dropdown_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.domain, $event) || (ctx.adminService.approver.domain = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 12)(23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "p-radioButton", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_p_radioButton_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 17)(31, "p-radioButton", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_p_radioButton_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21)(36, "p-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DMCRUDComponent_Template_p_button_click_36_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DMCRUDComponent_Template_p_button_click_37_listener() {
          return ctx.closeAddDMDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p-dialog", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("visibleChange", function DMCRUDComponent_Template_p_dialog_visibleChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.visibleUpdateDMDialog, $event) || (ctx.visibleUpdateDMDialog = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 8)(41, "div", 9)(42, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_input_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.email, $event) || (ctx.adminService.approver.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DMCRUDComponent_Template_input_blur_44_listener() {
          return ctx.eventService.checkEmailValue(ctx.adminService.approver.email);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 9)(46, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_p_dropdown_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.domain, $event) || (ctx.adminService.approver.domain = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 9)(50, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 16)(53, "div", 17)(54, "p-radioButton", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_p_radioButton_ngModelChange_54_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 17)(58, "p-radioButton", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DMCRUDComponent_Template_p_radioButton_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.adminService.approver.status, $event) || (ctx.adminService.approver.status = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 26)(63, "p-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DMCRUDComponent_Template_p_button_click_63_listener() {
          return ctx.onUpdate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DMCRUDComponent_Template_p_button_click_64_listener() {
          return ctx.closeUpdateDMDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dmList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dmList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("visible", ctx.visibleAddDMDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.domain);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("visible", ctx.visibleUpdateDMDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.domain);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.adminService.approver.status);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_dialog__WEBPACK_IMPORTED_MODULE_16__.Dialog, primeng_toast__WEBPACK_IMPORTED_MODULE_17__.Toast, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__.RadioButton, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.Dropdown, primeng_fieldset__WEBPACK_IMPORTED_MODULE_20__.Fieldset, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 80793:
/*!*************************************************************************************!*\
  !*** ./src/app/intake-ui/components/field-management/field-management.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldManagementComponent: () => (/* binding */ FieldManagementComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _models_approver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/approver */ 77566);
/* harmony import */ var _models_field_label_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/field-label-tooltip */ 8666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin.service */ 5227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fieldset */ 63148);

















const _c0 = () => ({
  "min-width": "50rem"
});
function FieldManagementComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Mandatory?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "tr")(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "p-columnFilter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-columnFilter", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "p-columnFilter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "p-columnFilter", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClearButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClearButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClearButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClearButton", false);
  }
}
function FieldManagementComponent_ng_template_31_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_ng_template_31_ng_template_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](field_r2.key, $event) || (field_r2.key = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", field_r2.key);
  }
}
function FieldManagementComponent_ng_template_31_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", field_r2.key, " ");
  }
}
function FieldManagementComponent_ng_template_31_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_ng_template_31_ng_template_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](field_r2.label, $event) || (field_r2.label = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", field_r2.label);
  }
}
function FieldManagementComponent_ng_template_31_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", field_r2.label, " ");
  }
}
function FieldManagementComponent_ng_template_31_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_ng_template_31_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](field_r2.tooltip, $event) || (field_r2.tooltip = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", field_r2.tooltip);
  }
}
function FieldManagementComponent_ng_template_31_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", field_r2.tooltip, " ");
  }
}
function FieldManagementComponent_ng_template_31_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_ng_template_31_ng_template_15_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](field_r2.mandatory, $event) || (field_r2.mandatory = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", field_r2.mandatory);
  }
}
function FieldManagementComponent_ng_template_31_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", field_r2.mandatory, " ");
  }
}
function FieldManagementComponent_ng_template_31_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FieldManagementComponent_ng_template_31_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.onRowEditInit(field_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FieldManagementComponent_ng_template_31_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FieldManagementComponent_ng_template_31_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const field_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.onRowEditSave(field_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FieldManagementComponent_ng_template_31_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FieldManagementComponent_ng_template_31_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const field_r2 = ctx_r9.$implicit;
      const ri_r11 = ctx_r9.rowIndex;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.onRowEditCancel(field_r2, ri_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FieldManagementComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 24)(1, "td")(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FieldManagementComponent_ng_template_31_ng_template_3_Template, 1, 1, "ng-template", 25)(4, FieldManagementComponent_ng_template_31_ng_template_4_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FieldManagementComponent_ng_template_31_ng_template_7_Template, 1, 1, "ng-template", 25)(8, FieldManagementComponent_ng_template_31_ng_template_8_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FieldManagementComponent_ng_template_31_ng_template_11_Template, 1, 1, "ng-template", 25)(12, FieldManagementComponent_ng_template_31_ng_template_12_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FieldManagementComponent_ng_template_31_ng_template_15_Template, 1, 1, "ng-template", 25)(16, FieldManagementComponent_ng_template_31_ng_template_16_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td")(18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, FieldManagementComponent_ng_template_31_button_19_Template, 1, 0, "button", 28)(20, FieldManagementComponent_ng_template_31_button_20_Template, 1, 0, "button", 29)(21, FieldManagementComponent_ng_template_31_button_21_Template, 1, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const editing_r12 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pEditableRow", field_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !editing_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", editing_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", editing_r12);
  }
}
class FieldManagementComponent {
  constructor(demandIntakeService, messageService, eventService, adminService) {
    this.demandIntakeService = demandIntakeService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.adminService = adminService;
    this.clonedField = {};
    this.field = new _models_field_label_tooltip__WEBPACK_IMPORTED_MODULE_1__.FieldMgmt();
  }
  ngOnInit() {
    this.adminService.approver = new _models_approver__WEBPACK_IMPORTED_MODULE_0__.Approver();
    this.loadTableData();
  }
  loadTableData() {
    this.adminService.getAllFields().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.fields = response;
      console.log('getAllFields() : Response -> ', this.fields);
      this.eventService.progressBarEvent.emit(false);
    })).subscribe();
  }
  onRowEditInit(field) {
    this.clonedField[field.key] = {
      ...field
    };
  }
  onRowEditCancel(field, index) {
    this.fields[index] = this.clonedField[field.key];
    delete this.clonedField[field.key];
  }
  onRowEditSave(field) {
    this.adminService.updateField(field).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      console.log('updateField() : Response -> ', response);
      this.loadTableData();
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Updated Key : ' + this.field.key
      });
    })).subscribe();
  }
  addField() {
    this.adminService.addField(this.field).subscribe(response => {
      console.log('addField() : Response -> ', response);
      this.loadTableData();
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Added Key : ' + this.field.key
      });
      this.resetField();
    }, error => {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Field could not be added : ' + error
      });
    });
  }
  resetField() {
    this.field = new _models_field_label_tooltip__WEBPACK_IMPORTED_MODULE_1__.FieldMgmt();
  }
  static #_ = this.ɵfac = function FieldManagementComponent_Factory(t) {
    return new (t || FieldManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_2__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FieldManagementComponent,
    selectors: [["app-field-management"]],
    decls: 32,
    vars: 10,
    consts: [[1, "card", "grid"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12"], [1, "grid"], ["legend", "Field Label/Tooltip Management"], [1, "p-inputgroup"], [1, "p-inputgroup-addon", 2, "background", "#3B82F6", "color", "white"], ["placeholder", "Enter Key", "type", "text", "pInputText", "", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter Label", "type", "text", "pInputText", "", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter Tooltip", "type", "text", "pInputText", "", 3, "ngModelChange", "ngModel"], [1, "p-inputgroup-addon"], ["inputId", "binary", 3, "ngModelChange", "binary", "ngModel"], ["pButton", "", "type", "button", "severity", "success", "label", "Save", "icon", "pi pi-check", 3, "click"], ["pButton", "", "type", "button", "severity", "danger", "label", "Cancel", "icon", "pi pi-times", 3, "click"], ["styleClass", "p-datatable-sm", "dataKey", "key", "editMode", "row", 3, "value", "paginator", "rows", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "15%"], [2, "width", "35%"], [2, "width", "40%"], [2, "width", "10%"], ["type", "text", "field", "key", 3, "showClearButton"], ["type", "text", "field", "label", 3, "showClearButton"], ["type", "text", "field", "tooltip", 3, "showClearButton"], ["type", "text", "field", "mandatory", 3, "showClearButton"], [3, "pEditableRow"], ["pTemplate", "input"], ["pTemplate", "output"], [1, "flex", "align-items-center", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", "class", "p-button-rounded p-button-text p-button-success mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["pInputText", "", "type", "text", 3, "ngModelChange", "ngModel"], ["pInputText", "", "type", "text", "required", "", 3, "ngModelChange", "ngModel"], ["pInputText", "", 3, "ngModelChange", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"]],
    template: function FieldManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 1)(5, "p-fieldset", 3)(6, "div", 2)(7, "div", 1)(8, "div", 4)(9, "span", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.field.key, $event) || (ctx.field.key = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 5)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.field.label, $event) || (ctx.field.label = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 5)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.field.tooltip, $event) || (ctx.field.tooltip = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 5)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Mandatory?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 9)(25, "p-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FieldManagementComponent_Template_p_checkbox_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.field.mandatory, $event) || (ctx.field.mandatory = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FieldManagementComponent_Template_button_click_26_listener() {
          return ctx.addField();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FieldManagementComponent_Template_button_click_27_listener() {
          return ctx.resetField();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 1)(29, "p-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, FieldManagementComponent_ng_template_30_Template, 21, 4, "ng-template", 14)(31, FieldManagementComponent_ng_template_31_Template, 22, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.field.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.field.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.field.mandatory);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.fields)("paginator", true)("rows", 10)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__.Checkbox, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.CellEditor, primeng_table__WEBPACK_IMPORTED_MODULE_14__.EditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.InitEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SaveEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.CancelEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.ColumnFilter, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__.Fieldset],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55905:
/*!************************************************************************************************!*\
  !*** ./src/app/intake-ui/components/graph/email-autocomplete/email-auto-complete.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailAutoCompleteComponent: () => (/* binding */ EmailAutoCompleteComponent)
/* harmony export */ });
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/avatar */ 46095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/demand-intake.service */ 96790);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/event.service */ 70404);
/* harmony import */ var _graph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graph.service */ 45423);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ 37440);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/admin.service */ 5227);















function EmailAutoCompleteComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "p-avatar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const assignee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](assignee_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](assignee_r1.email);
  }
}
class EmailAutoCompleteComponent {
  constructor(demandIntakeService, messageService, eventService, graphService, authService, http, adminService) {
    this.demandIntakeService = demandIntakeService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.graphService = graphService;
    this.authService = authService;
    this.http = http;
    this.adminService = adminService;
    this.allUsers = [];
  }
  ngOnInit() {}
  filterAssignee(event) {
    const filtered = [];
    const query = event.query;
    for (let i = 0; i < this.allUsers.length; i++) {
      const user = this.allUsers[i];
      if (user.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        filtered.push(this.authService.currentLoggedInUser.account.username);
      }
    }
    this.graphService.searchUser(query).subscribe(response => {
      console.log('getProfilePhoto() : SUCCESS -> ', response);
      for (let i = 0; i < response.value; i++) {
        const user = this.allUsers[i];
        if (user.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
          filtered.push(user.displayName);
        }
      }
    }, error => {
      console.log('getProfilePhoto() : ERROR -> ', error);
      const response = {
        "value": [{
          "businessPhones": ["7290080876"],
          "displayName": "Rajendra Singh",
          "givenName": "Rajendra",
          "jobTitle": null,
          "mail": null,
          "mobilePhone": null,
          "officeLocation": null,
          "preferredLanguage": "en",
          "surname": "Singh",
          "userPrincipalName": "nihilarians@nihilarians.onmicrosoft.com",
          "id": "c3b5799d-144b-441d-a9a8-b6c1c3a43d2d"
        }]
      };
      for (let i = 0; i < response.value.length; i++) {
        const user = response.value[i];
        if (user.displayName.toLowerCase().indexOf(query.toLowerCase()) != -1) {
          filtered.push(user.displayName);
        }
      }
    });
    this.filteredAssignee = filtered;
  }
  static #_ = this.ɵfac = function EmailAutoCompleteComponent_Factory(t) {
    return new (t || EmailAutoCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_0__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_graph_service__WEBPACK_IMPORTED_MODULE_2__.GraphService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EmailAutoCompleteComponent,
    selectors: [["app-email-autocomplete"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["placeholder", "Choose assignees", 3, "ngModelChange", "completeMethod", "ngModel", "suggestions", "styleClass"], ["pTemplate", "selectedItem"], [1, "flex", "align-items-center", "gap-3", "border-round"], ["icon", "pi pi-user", "styleClass", "mr-2", "shape", "circle"], [1, "grid"]],
    template: function EmailAutoCompleteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-autoComplete", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function EmailAutoCompleteComponent_Template_p_autoComplete_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.graphService.assignee, $event) || (ctx.graphService.assignee = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("completeMethod", function EmailAutoCompleteComponent_Template_p_autoComplete_completeMethod_0_listener($event) {
          return ctx.filterAssignee($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EmailAutoCompleteComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.graphService.assignee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("suggestions", ctx.filteredAssignee)("styleClass", "h-4rem");
      }
    },
    dependencies: [primeng_fieldset__WEBPACK_IMPORTED_MODULE_8__.FieldsetModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__.AutoCompleteModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__.AutoComplete, primeng_avatar__WEBPACK_IMPORTED_MODULE_10__.AvatarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_10__.Avatar, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45423:
/*!*************************************************************!*\
  !*** ./src/app/intake-ui/components/graph/graph.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphService: () => (/* binding */ GraphService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 47593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ 70404);








class GraphService {
  constructor(http, constants, router, authService, messageService, eventService) {
    this.http = http;
    this.constants = constants;
    this.router = router;
    this.authService = authService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  searchUser(query) {
    const headers = {
      'ConsistencyLevel': 'eventual',
      'Authorization': `Bearer ${this.authService.currentLoggedInUser.accessToken}`
    };
    return this.http.get(`https://graph.microsoft.com/v1.0/users?$search="displayName:${query}"`, {
      headers
    });
  }
  static #_ = this.ɵfac = function GraphService_Factory(t) {
    return new (t || GraphService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_1__.Constants), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: GraphService,
    factory: GraphService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 35409:
/*!*****************************************************************************!*\
  !*** ./src/app/intake-ui/components/introduction/introduction.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroductionComponent: () => (/* binding */ IntroductionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _models_architect_alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/architect-alignment */ 37396);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/panel */ 55222);




















function IntroductionComponent_div_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 29)(4, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IntroductionComponent_div_27_ng_template_2_Template_p_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.addAlignment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IntroductionComponent_div_27_ng_template_2_Template_p_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeAlignment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.fieldsService.getLabel("INTRODUCTION_ARCHITECT_ALIGNMENT_FIELDSET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.architectAlignmentInfo.length > 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.fieldsService.getLabel("ADD_BUTTON"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.architectAlignmentInfo.length < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.fieldsService.getLabel("REMOVE_BUTTON"), " ");
  }
}
function IntroductionComponent_div_27_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 1)(2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_div_27_div_12_Template_input_ngModelChange_2_listener($event) {
      const architectAlignment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](architectAlignment_r4.email, $event) || (architectAlignment_r4.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function IntroductionComponent_div_27_div_12_Template_input_blur_2_listener() {
      const architectAlignment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.eventService.checkEmailValue(architectAlignment_r4.email));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 4)(4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_div_27_div_12_Template_input_ngModelChange_4_listener($event) {
      const architectAlignment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](architectAlignment_r4.comment, $event) || (architectAlignment_r4.comment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const architectAlignment_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", architectAlignment_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("INTRODUCTION_ARCHITECT_ALIGNMENT_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", architectAlignment_r4.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("INTRODUCTION_ARCHITECT_ALIGNMENT_COMMENT"));
  }
}
function IntroductionComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "p-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, IntroductionComponent_div_27_ng_template_2_Template, 8, 5, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 0)(4, "div", 21)(5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "p-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, IntroductionComponent_div_27_div_12_Template, 5, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.architectAlignmentInfo);
  }
}
function IntroductionComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx_r1.fieldsService.getToolTip("INTRODUCTION_FIELDSET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.fieldsService.getLabel("INTRODUCTION_FIELDSET"), " ");
  }
}
function IntroductionComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "p-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function IntroductionComponent_div_43_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.savePage(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function IntroductionComponent_div_43_Template_p_button_onClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.validateIntroductionInfoAndSave(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r1.fieldsService.getLabel("SAVE_FOR_LATER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r1.fieldsService.getLabel("NEXT_BUTTON"));
  }
}
function IntroductionComponent_div_44_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function IntroductionComponent_div_44_p_button_1_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.validateIntroductionInfoAndSave(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r1.fieldsService.getLabel("NEXT_BUTTON"));
  }
}
function IntroductionComponent_div_44_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function IntroductionComponent_div_44_p_button_2_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", ctx_r1.fieldsService.getLabel("NEXT_BUTTON"));
  }
}
function IntroductionComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, IntroductionComponent_div_44_p_button_1_Template, 1, 1, "p-button", 39)(2, IntroductionComponent_div_44_p_button_2_Template, 1, 1, "p-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.demandIntakeService.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.demandIntakeService.isNew);
  }
}
class IntroductionComponent {
  constructor(eventService, authService, fieldsService, demandIntakeService, router, messageService) {
    this.eventService = eventService;
    this.authService = authService;
    this.fieldsService = fieldsService;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.messageService = messageService;
    if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
  }
  ngOnInit() {
    this.demandIntakeService.getDemandInformation().introduction.updatedBy = this.authService.currentUserValue.email;
    this.demandInfo = this.demandIntakeService.getDemandInformation().introduction;
    this.architectAlignmentInfo = this.demandIntakeService.getDemandInformation().architectAlignmentInfo;
    if (this.eventService.isNewDemand) {
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
    }
  }
  addAlignment() {
    this.architectAlignmentInfo.push(new _models_architect_alignment__WEBPACK_IMPORTED_MODULE_0__.ArchitectAlignment());
  }
  removeAlignment() {
    this.architectAlignmentInfo.pop();
  }
  nextPage() {
    let movenext = true;
    this.architectAlignmentInfo.forEach(item => {
      if (this.demandInfo.architectAligned && !this.eventService.checkEmailValue(item.email)) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Please fill alignment properly!'
        });
        movenext = false;
      }
    });
    let movenext1 = true;
    if (this.demandInfo.title != '' && this.demandInfo.description != '') {
      this.demandIntakeService.demandInformation.introduction = this.demandInfo;
    } else {
      movenext1 = false;
    }
    if (movenext && movenext1) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requester']);
      } else {
        this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill required fields!'
      });
    }
  }
  validateIntroductionInfoAndSave(saveAndNavigateToViewFlag) {
    // console.log("Introduction : ", this.demandIntakeService.demandInformation)
    let movenext = true;
    this.architectAlignmentInfo.forEach(item => {
      if (this.demandInfo.architectAligned && !this.eventService.checkEmailValue(item.email)) {
        movenext = false;
      }
    });
    let movenext1 = true;
    if (this.demandInfo.title != '' && this.demandInfo.description != '') {
      this.demandIntakeService.demandInformation.introduction = this.demandInfo;
    } else {
      movenext1 = false;
    }
    if (movenext && movenext1) {
      if (this.eventService.isNewDemand) {
        //this.router.navigate(['demand-intake/requester']);
        this.savePage(saveAndNavigateToViewFlag);
      } else {
        this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill required fields!'
      });
    }
  }
  savePage(saveAndNavigateToViewFlag) {
    if (this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.ACCEPTED && this.demandIntakeService.demandInformation.introduction.status != 'REJECTED') {
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
      this.demandIntakeService.saveDemand().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe(response => {
        console.log("saveDemand() : Response -> ", response);
        this.messageService.add({
          key: 'success',
          severity: 'success',
          summary: 'Success',
          detail: 'Demand Saved Successfully!'
        });
        // this.router.navigate(['view']);
        this.demandIntakeService.demandInformation.introduction.demandIntakeId = response.demandIntakeId;
        this.demandIntakeService.demandInformation.introduction.requestedBy = response.requestedBy;
        if (saveAndNavigateToViewFlag) {
          this.router.navigate(['view']);
        } else {
          this.router.navigate(['demand-intake/requester']);
        }
      }, error => {
        console.log("saveDemand() : ERROR -> ", error);
        this.messageService.add({
          key: 'error',
          severity: 'error',
          summary: 'Error',
          detail: 'Demand Failed to Save!'
        });
      });
    }
  }
  static #_ = this.ɵfac = function IntroductionComponent_Factory(t) {
    return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_4__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_5__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: IntroductionComponent,
    selectors: [["app-introduction"]],
    decls: 45,
    vars: 32,
    consts: [[1, "grid"], [1, "col-4"], [1, "asterisk-if-mandatory"], ["target", "_blank", "href", "https://share.philips.com/sites/STS020210604094742/Pages/ADLDemandFunnelGrid.aspx"], [1, "col-8"], ["type", "radio", "name", "isDocReferred", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["type", "radio", "name", "isDocReferred", "checked", "checked", 3, "ngModelChange", "pTooltip", "ngModel", "value"], [1, "asterisk-if-mandatory", "w-full"], ["type", "radio", "name", "architectAligned", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["type", "radio", "name", "architectAligned", "checked", "checked", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [3, "toggleable"], ["pTemplate", "header"], [1, "col-3", "align-content-center"], ["for", "title", 1, "asterisk-if-mandatory"], [1, "col-9", "align-content-center"], ["pInputText", "", "required", "", "id", "title", "type", "text", 1, "w-full", 3, "ngModelChange", "ngModel", "pTooltip", "escape"], ["for", "description", 1, "asterisk-if-mandatory"], ["id", "description", "rows", "3", "cols", "110", "pInputTextarea", "", 1, "w-full", 3, "ngModelChange", "ngModel", "pTooltip", "escape"], ["class", "flex justify-content-between", 4, "ngIf"], [1, "col-12", "grid", "p-fluid"], [1, "col-4", "font-bold"], [1, "col-8", "font-bold"], [1, "col-12", "m-0", "p-0"], ["styleClass", "m-0"], ["class", "grid p-fluid", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-center", "justify-content-between", "w-full"], [1, "font-bold"], [1, "grid", "gap-3"], [3, "click", "disabled"], [1, "grid", "p-fluid"], ["pInputText", "", "type", "email", 1, "w-full", 3, "ngModelChange", "blur", "ngModel", "pTooltip"], ["pInputText", "", "aria-describedby", "program-help", 1, "w-full", 3, "ngModelChange", "ngModel", "pTooltip"], [1, "flex", "align-items-center", "gap-2", "px-2"], [1, "font-bold", 3, "pTooltip"], [1, "flex", "justify-content-between"], ["iconPos", "left", 3, "onClick", "label"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "onClick", "label"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "label", "onClick", 4, "ngIf"]],
    template: function IntroductionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.demandInfo.isDocReferred, $event) || (ctx.demandInfo.isDocReferred = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.demandInfo.isDocReferred, $event) || (ctx.demandInfo.isDocReferred = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 1)(18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 4)(21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.demandInfo.architectAligned, $event) || (ctx.demandInfo.architectAligned = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.demandInfo.architectAligned, $event) || (ctx.demandInfo.architectAligned = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, IntroductionComponent_div_27_Template, 13, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 11)(29, "p-fieldset", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, IntroductionComponent_ng_template_30_Template, 3, 2, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 0)(32, "div", 14)(33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 16)(36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_Template_input_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.demandInfo.title, $event) || (ctx.demandInfo.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 14)(38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 16)(41, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function IntroductionComponent_Template_textarea_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.demandInfo.description, $event) || (ctx.demandInfo.description = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, IntroductionComponent_div_43_Template, 3, 2, "div", 20)(44, IntroductionComponent_div_44_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.fieldsService.getLabel("INTRODUCTION_EXISTING_DEMAND_CATALOG_START") + " ", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.fieldsService.getLabel("INTRODUCTION_EXISTING_DEMAND_CATALOG_END"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("INTRODUCTION_EXISTING_DEMAND_CATALOG_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.demandInfo.isDocReferred);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("INTRODUCTION_EXISTING_DEMAND_CATALOG_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("INTRODUCTION_EXISTING_DEMAND_CATALOG_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.demandInfo.isDocReferred);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("INTRODUCTION_EXISTING_DEMAND_CATALOG_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("INTRODUCTION_EXISTING_DEMAND_FOUND"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.fieldsService.getLabel("INTRODUCTION_ARCHITECT_ALIGNED"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("INTRODUCTION_ARCHITECT_ALIGNED_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.demandInfo.architectAligned);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("INTRODUCTION_ARCHITECT_ALIGNED_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("INTRODUCTION_ARCHITECT_ALIGNED_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.demandInfo.architectAligned);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("INTRODUCTION_ARCHITECT_ALIGNED_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.demandInfo.architectAligned);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.fieldsService.getLabel("INTRODUCTION_DEMAND_TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.demandInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("INTRODUCTION_DEMAND_TITLE"))("escape", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("INTRODUCTION_DEMAND_DESC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.demandInfo.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("INTRODUCTION_DEMAND_DESC"))("escape", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.visibleSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.visibleSaveButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_15__.Divider, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_17__.Toast, primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__.Fieldset, primeng_panel__WEBPACK_IMPORTED_MODULE_19__.Panel],
    encapsulation: 2
  });
}

/***/ }),

/***/ 82613:
/*!*****************************************************************!*\
  !*** ./src/app/intake-ui/components/report/report.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportComponent: () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _models_report_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/report-request */ 96213);
/* harmony import */ var _enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/demand-status-filter */ 51292);
/* harmony import */ var _enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/approver-domain */ 87609);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/demand-intake-decision */ 5334);
/* harmony import */ var _enums_requesterDomain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/requesterDomain */ 98295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/multiselect */ 92159);




















const _c0 = () => ({
  "min-width": "40rem"
});
function ReportComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "div", 22)(2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Raised By");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 24)(5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_div_8_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.reportInfo.raisedBy, $event) || (ctx_r1.reportInfo.raisedBy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("blur", function ReportComponent_div_8_Template_input_blur_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.eventService.checkEmailValue(ctx_r1.reportInfo.raisedBy));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reportInfo.raisedBy);
  }
}
function ReportComponent_ng_template_24_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r1.demandIntakeService.getDemandStatusValueInLower(ctx_r1.selectedDemandStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.demandIntakeService.getDemandStatusValue(ctx_r1.selectedDemandStatus), " ");
  }
}
function ReportComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReportComponent_ng_template_24_div_0_Template, 3, 3, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedDemandStatus);
  }
}
function ReportComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r1.demandIntakeService.getDemandStatusValueInLower(option_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.demandIntakeService.getDemandStatusValue(option_r3), " ");
  }
}
function ReportComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "div", 8)(2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Is Cross Functional?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 12)(5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_div_31_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.reportInfo.isCrossFunctional, $event) || (ctx_r1.reportInfo.isCrossFunctional = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_div_31_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.reportInfo.isCrossFunctional, $event) || (ctx_r1.reportInfo.isCrossFunctional = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reportInfo.isCrossFunctional);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reportInfo.isCrossFunctional);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", false);
  }
}
function ReportComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Result(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function ReportComponent_div_35_Template_p_button_onClick_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.exportExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function ReportComponent_div_36_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Demand Intake Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "p-sortIcon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-sortIcon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "p-sortIcon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Requested By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Requested Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "p-sortIcon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Is Cross Functional? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "p-sortIcon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ReportComponent_div_36_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 48)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const demand_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pSelectableRow", demand_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demand_r7.demandIntakeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demand_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r1.demandIntakeService.getDemandStatusValueInLower(demand_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.demandIntakeService.getDemandStatusValue(demand_r7.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demand_r7.requestedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 9, demand_r7.requestedDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](demand_r7.isCrossFunctional == true ? "Yes" : "No");
  }
}
function ReportComponent_div_36_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "td")(2, "td")(3, "td")(4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "You dont have any demand for provided search criteria!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ReportComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31)(1, "p-table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("selectionChange", function ReportComponent_div_36_Template_p_table_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDemand, $event) || (ctx_r1.selectedDemand = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ReportComponent_div_36_ng_template_2_Template, 19, 0, "ng-template", 33)(3, ReportComponent_div_36_ng_template_3_Template, 15, 12, "ng-template", 34)(4, ReportComponent_div_36_ng_template_4_Template, 7, 0, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.uiReportResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("selection", ctx_r1.selectedDemand);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c0))("paginator", true)("rows", 10);
  }
}
class ReportComponent {
  constructor(authService, demandIntakeService, router, messageService, eventService) {
    this.authService = authService;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.messageService = messageService;
    this.eventService = eventService;
    this.selectedSolutionDirectionList = '';
    this.reportResult = [];
    this.uiReportResult = [];
  }
  ngOnInit() {
    this.reportInfo = new _models_report_request__WEBPACK_IMPORTED_MODULE_0__.ReportRequest();
    this.demandStatusList = Object.keys(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_1__.DemandStatusFilter);
    this.selectedDemandStatus = _enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_1__.DemandStatusFilter.ALL;
    this.solutionDirectionList = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain);
  }
  onStatusChange() {
    // console.log("selectedDemandStatus", this.selectedDemandStatus)
    this.reportInfo.status = this.selectedDemandStatus;
  }
  generateReport() {
    this.eventService.progressBarEvent.emit(true);
    // console.log("generateReport ", this.reportInfo)
    if (this.authService.isRequester()) {
      this.reportInfo.raisedBy = this.authService.currentUserValue.email;
    }
    let temp = [];
    if (this.selectedSolutionDirectionList != '') {
      this.reportInfo.solutionDirectionList = this.selectedSolutionDirectionList;
      this.reportInfo.solutionDirectionList.forEach(item => {
        temp.push(this.getSDKey(item));
      });
      this.reportInfo.solutionDirectionList = temp;
    }
    // if (this.stakeholderList != '') {
    //   console.log("this.selectedSolutionDirectionList", this.selectedSolutionDirectionList)
    //   this.reportInfo.stakeholderList = this.stakeholderList.split(',');
    // }
    this.demandIntakeService.generateReport(this.reportInfo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(response => {
      console.log("generateReport() : Response -> ", response);
      this.reportResult = response;
      this.uiReportResult = this.reportResult;
      //Remove duplicates
      this.uiReportResult = [...new Map(this.uiReportResult.map(item => [item['demandIntakeId'], item])).values()];
      this.errorData = "";
      this.eventService.progressBarEvent.emit(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
      console.log('generateReport() : ERROR', error);
      this.errorData = JSON.stringify(error.error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(error);
    })).subscribe();
  }
  formatValues(reportResult) {
    reportResult.forEach(item => {
      item.status = this.getStatusValue(item.status);
      item.solution = this.getSolutionValue(item.solution);
      item.dmDecision = this.getDecisionValue(item.dmDecision);
      item.ccbDecision = this.getDecisionValue(item.ccbDecision);
      item.requesterDomain = this.getRequesterDomainValue(item.requesterDomain);
    });
    return reportResult;
  }
  getStatusValue(key) {
    const status = Object.keys(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_1__.DemandStatusFilter).indexOf(key);
    let s = Object.values(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_1__.DemandStatusFilter)[status];
    return s;
  }
  getSolutionValue(key) {
    const status = Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain).indexOf(key);
    let s = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain)[status];
    return s;
  }
  getDecisionValue(key) {
    const status = Object.keys(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeDecision).indexOf(key);
    let s = Object.values(_enums_demand_intake_decision__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeDecision)[status];
    return s;
  }
  getRequesterDomainValue(key) {
    const status = Object.keys(_enums_requesterDomain__WEBPACK_IMPORTED_MODULE_5__.RequesterDomain).indexOf(key);
    let s = Object.values(_enums_requesterDomain__WEBPACK_IMPORTED_MODULE_5__.RequesterDomain)[status];
    return s;
  }
  refreshReport() {
    this.reportResult = [];
    this.uiReportResult = [];
    this.reportInfo = new _models_report_request__WEBPACK_IMPORTED_MODULE_0__.ReportRequest();
    this.selectedDemandStatus = _enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_1__.DemandStatusFilter.ALL;
    this.selectedSolutionDirectionList = "";
  }
  getSDKey(value) {
    const index = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain).indexOf(value);
    return Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain)[index];
  }
  onSolutionChange() {
    let temp = [];
    if (this.selectedSolutionDirectionList != '') {
      this.reportInfo.solutionDirectionList = this.selectedSolutionDirectionList;
      this.reportInfo.solutionDirectionList.forEach(item => {
        temp.push(this.getSDKey(item));
      });
    }
    this.reportInfo.solutionDirectionList = temp;
  }
  exportExcel() {
    let downloadData = this.reportResult.map(object => ({
      ...object
    }));
    // let downloadData = this.reportResult;
    downloadData = this.formatValues(downloadData);
    __webpack_require__.e(/*! import() */ "node_modules_xlsx_xlsx_mjs").then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 13857)).then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(downloadData);
      const workbook = {
        Sheets: {
          'data': worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      this.saveAsExcelFile(excelBuffer);
    });
  }
  saveAsExcelFile(buffer) {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(data, 'Demand_Report_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  static #_ = this.ɵfac = function ReportComponent_Factory(t) {
    return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_7__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_8__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ReportComponent,
    selectors: [["app-report"]],
    decls: 37,
    vars: 13,
    consts: [[1, "col-12"], [1, "card", "border-none", "surface-border", "m-0", 2, "background", "linear-gradient(226.42deg, #077abb 8.93%, #153375 110.98%)", "border-bottom-left-radius", "inherit", "border-bottom-right-radius", "inherit"], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center"], [1, "text-white", "font-medium", "text-xl", "ml-2"], [1, "card", "border-none", "surface-border", "mb-5", 2, "border-top-left-radius", "inherit", "border-top-right-radius", "inherit"], [1, "col-12", "grid"], ["class", "col-12 grid", 4, "ngIf"], [1, "col-3", "xs:col-3", "sm:col-3", "lg:col-3", "xl:col-3"], ["required", "", 1, "asterisk-if-mandatory"], ["dateFormat", "dd/mm/yy", 3, "ngModelChange", "ngModel", "showIcon"], [1, "mr-3"], [1, "col-9", "xs:col-9", "sm:col-9", "lg:col-9", "xl:col-9"], ["placeholder", "Filter Demand", 3, "ngModelChange", "onChange", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["placeholder", "Please Select Solution Direction", 3, "ngModelChange", "onChange", "options", "ngModel"], [1, "grid", "grid-nogutter", "gap-3", "justify-content-start"], ["label", "Search", "icon", "pi pi-search", "iconPos", "right", 3, "onClick"], ["label", "Reset", "icon", "pi pi-refresh", "severity", "contrast", "iconPos", "right", 3, "click", "raised"], ["class", "card border-none surface-border m-0", "style", "background: linear-gradient(226.42deg, #077abb 8.93%, #153375 110.98%);border-bottom-left-radius: inherit;border-bottom-right-radius: inherit;", 4, "ngIf"], ["class", "card border-none surface-border m-0", "style", "border-top-left-radius: inherit;border-top-right-radius: inherit;", 4, "ngIf"], [1, "col-6", "xs:col-6", "sm:col-6", "lg:col-6", "xl:col-3"], ["for", "email"], [1, "col-8", "xs:col-8", "sm:col-8", "lg:col-8", "xl:col-8"], ["id", "email", "type", "email", 1, "text-base", "text-color", "surface-overlay", "p-2", "border-1", "w-full", "border-solid", "surface-border", "border-round", "appearance-none", "outline-none", "focus:border-primary", 3, "ngModelChange", "blur", "ngModel"], [4, "ngIf"], [1, "asterisk-if-mandatory"], ["type", "radio", "name", "isCrossFunctional", 3, "ngModelChange", "ngModel", "value"], ["type", "radio", "name", "isCrossFunctional", "checked", "checked", 3, "ngModelChange", "ngModel", "value"], ["label", "Download Report", "icon", "pi pi-download", "iconPos", "right", 3, "onClick"], [1, "card", "border-none", "surface-border", "m-0", 2, "border-top-left-radius", "inherit", "border-top-right-radius", "inherit"], ["styleClass", "p-datatable-sm", "selectionMode", "single", 3, "selectionChange", "value", "selection", "tableStyle", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pSortableColumn", "demandIntakeId"], ["field", "demandIntakeId"], ["pSortableColumn", "title"], ["field", "title"], ["pSortableColumn", "status"], ["field", "status"], ["pSortableColumn", "requestedBy"], ["field", "requestedBy"], ["pSortableColumn", "requestedDate"], ["field", "requestedDate"], ["pSortableColumn", "isCrossFunctional"], ["field", "isCrossFunctional"], [3, "pSelectableRow"]],
    template: function ReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Search Demand By");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ReportComponent_div_8_Template, 6, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8)(10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8)(13, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_Template_p_calendar_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.reportInfo.fromDate, $event) || (ctx.reportInfo.fromDate = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 8)(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 8)(18, "p-calendar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_Template_p_calendar_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.reportInfo.toDate, $event) || (ctx.reportInfo.toDate = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 8)(20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Demand Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 12)(23, "p-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_Template_p_dropdown_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.selectedDemandStatus, $event) || (ctx.selectedDemandStatus = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChange", function ReportComponent_Template_p_dropdown_onChange_23_listener() {
          return ctx.onStatusChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ReportComponent_ng_template_24_Template, 1, 1, "ng-template", 14)(25, ReportComponent_ng_template_25_Template, 2, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 8)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Solution Direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 12)(30, "p-multiSelect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ReportComponent_Template_p_multiSelect_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.selectedSolutionDirectionList, $event) || (ctx.selectedSolutionDirectionList = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChange", function ReportComponent_Template_p_multiSelect_onChange_30_listener() {
          return ctx.onSolutionChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, ReportComponent_div_31_Template, 13, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 17)(33, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function ReportComponent_Template_p_button_onClick_33_listener() {
          return ctx.generateReport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "p-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReportComponent_Template_p_button_click_34_listener() {
          return ctx.refreshReport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, ReportComponent_div_35_Template, 7, 0, "div", 20)(36, ReportComponent_div_36_Template, 5, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.authService.isRequester());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.reportInfo.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.reportInfo.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDemandStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.demandStatusList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.solutionDirectionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedSolutionDirectionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.authService.isRequester());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("raised", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.uiReportResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.uiReportResult);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_18__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_19__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_19__.SortIcon, primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.Dropdown, primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__.MultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 88363:
/*!***********************************************************************!*\
  !*** ./src/app/intake-ui/components/requester/requester.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequesterComponent: () => (/* binding */ RequesterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _enums_market__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/market */ 30089);
/* harmony import */ var _enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/businessUnit */ 45901);
/* harmony import */ var _models_spoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/spoc */ 78854);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/multiselect */ 92159);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/panel */ 55222);

























function RequesterComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_FIELDSET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_FIELDSET"));
  }
}
function RequesterComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_DEMAND_INFO_FIELDSET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_DEMAND_INFO_FIELDSET"));
  }
}
function RequesterComponent_label_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_PROJECT_NAME"));
  }
}
function RequesterComponent_label_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_PROJECT_NAME"));
  }
}
function RequesterComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_56_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.requesterInfo.domain, $event) || (ctx_r0.requesterInfo.domain = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.requesterInfo.domain);
  }
}
function RequesterComponent_p_tag_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-tag", 60);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r3)("rounded", true);
  }
}
function RequesterComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_64_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.otherMarket, $event) || (ctx_r0.otherMarket = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.otherMarket);
  }
}
function RequesterComponent_p_tag_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-tag", 62);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r5)("rounded", true);
  }
}
function RequesterComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_72_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.otherBusinessUnit, $event) || (ctx_r0.otherBusinessUnit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.otherBusinessUnit);
  }
}
function RequesterComponent_small_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_BUDGET_NOT_APPROVED_NOTE"));
  }
}
function RequesterComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_CLARITY_PROJECT_ID"));
  }
}
function RequesterComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_85_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.requesterInfo.clarityProjectId, $event) || (ctx_r0.requesterInfo.clarityProjectId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.requesterInfo.clarityProjectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_CLARITY_PROJECT_ID"));
  }
}
function RequesterComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_CONSUMPTION_PATTERN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_CONSUMPTION_PATTERN"));
  }
}
function RequesterComponent_ng_template_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 67)(1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 69)(4, "p-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RequesterComponent_ng_template_117_Template_p_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.addSpoc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RequesterComponent_ng_template_117_Template_p_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.removeSpoc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("REQUESTER_STAKEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.requesterInfo.spoc.length > 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.fieldsService.getLabel("ADD_BUTTON"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.requesterInfo.spoc.length < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.fieldsService.getLabel("REMOVE_BUTTON"), " ");
  }
}
function RequesterComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_129_Template_input_ngModelChange_2_listener($event) {
      const spoc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](spoc_r10.email, $event) || (spoc_r10.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("blur", function RequesterComponent_div_129_Template_input_blur_2_listener() {
      const spoc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.eventService.checkEmailValue(spoc_r10.email));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 74)(4, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_129_Template_input_ngModelChange_4_listener($event) {
      const spoc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](spoc_r10.role, $event) || (spoc_r10.role = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 76)(6, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_div_129_Template_input_ngModelChange_6_listener($event) {
      const spoc_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](spoc_r10.remarks, $event) || (spoc_r10.remarks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const spoc_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", spoc_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_STAKEHOLDER_EMAIL"))("disabled", ctx_r0.demandIntakeService.isCurrentLoggedUserStakeholder());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", spoc_r10.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_STAKEHOLDER_ROLE"))("disabled", ctx_r0.demandIntakeService.isCurrentLoggedUserStakeholder());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", spoc_r10.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("REQUESTER_STAKEHOLDER_REMARKS"))("disabled", ctx_r0.demandIntakeService.isCurrentLoggedUserStakeholder() && ctx_r0.authService.currentUserValue.email === spoc_r10.email);
  }
}
function RequesterComponent_p_button_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function RequesterComponent_p_button_132_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.savePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", ctx_r0.fieldsService.getLabel("SAVE_FOR_LATER"));
  }
}
class RequesterComponent {
  constructor(authService, demandIntakeService, fieldsService, router, messageService, eventService) {
    this.authService = authService;
    this.demandIntakeService = demandIntakeService;
    this.fieldsService = fieldsService;
    this.router = router;
    this.messageService = messageService;
    this.eventService = eventService;
    this.selectedBusinessUnit = [];
    if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
  }
  ngOnInit() {
    this.requesterInfo = this.demandIntakeService.getDemandInformation().requesterInfo;
    if (!this.requesterInfo.isAnotherRequester && this.eventService.isNewDemand) {
      this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy = this.authService.currentUserValue.email;
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
    } else {
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy;
    }
    this.marketList = Object.values(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market);
    this.businessUnitList = Object.values(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit);
    this.selectedMarket = this.getMarketValueArray(this.demandIntakeService.getDemandInformation().requesterInfo.market);
    this.selectedBusinessUnit = this.getBUValueArray(this.demandIntakeService.getDemandInformation().requesterInfo.businessUnit);
    this.demandIntakeService.getRequesterDomain().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      // console.log("getRequesterDomain() : Response -> ", response);
      this.domainList = response;
      this.selectedDomain = this.getSelectedDomain();
      this.eventService.progressBarEvent.emit(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      console.log('getRequesterDomain() : ERROR -> ', error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(error);
    })).subscribe();
  }
  requesterChange(event) {
    if (!this.requesterInfo.isAnotherRequester) {
      this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy = this.authService.currentUserValue.email;
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
    } else {
      this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy = this.requesterInfo.requestedBy;
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.requesterInfo.requestedBy;
    }
  }
  getSelectedDomain() {
    let platform = this.domainList.find(item => item.key === this.demandIntakeService.getDemandInformation().requesterInfo.domain);
    if (!platform && !this.eventService.isNewDemand) {
      return {
        key: 'Other',
        value: 'Other'
      };
    } else if (!platform) {
      return {
        key: '',
        value: ''
      };
    }
    return JSON.parse(JSON.stringify(platform));
  }
  onMarketSelect() {
    let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
    if (other) {
      const indexOther = this.selectedMarket.indexOf('Other');
      this.selectedMarket.splice(indexOther, 1);
      this.requesterInfo.market.push(this.otherMarket);
    }
    this.selectedMarket.forEach(item => this.requesterInfo.market.push(this.getMarketKey(item)));
    this.selectedMarket = Array.from(new Set(this.selectedMarket));
    this.requesterInfo.market = Array.from(new Set(this.requesterInfo.market));
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
  }
  onDomainSelect() {
    if (this.selectedDomain.key != 'Other') {
      this.requesterInfo.domain = this.selectedDomain.key;
    }
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
  }
  onBUSelect() {
    let other1 = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
    if (other1) {
      const indexOther = this.selectedBusinessUnit.indexOf('Other');
      this.selectedBusinessUnit.splice(indexOther, 1);
      this.requesterInfo.businessUnit.push(this.otherBusinessUnit);
    }
    this.selectedBusinessUnit.forEach(item => this.requesterInfo.businessUnit.push(this.getBUKey(item)));
    this.selectedBusinessUnit = Array.from(new Set(this.selectedBusinessUnit));
    this.requesterInfo.businessUnit = Array.from(new Set(this.requesterInfo.businessUnit));
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
  }
  addSpoc() {
    this.requesterInfo.spoc.push(new _models_spoc__WEBPACK_IMPORTED_MODULE_2__.Spoc());
  }
  removeSpoc() {
    this.requesterInfo.spoc.pop();
  }
  nextPage() {
    let movenext = true;
    this.requesterInfo.spoc.forEach(item => {
      if (item.role != '' && item.email == '' || item.role == '' && item.email != '') {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Please fill stakeholder(s) properly!'
        });
        movenext = false;
      }
    });
    let movenext1 = true;
    if ((this.requesterInfo.isDemandPOC || !this.requesterInfo.isDemandPOC && this.requesterInfo.project != '') && this.selectedMarket.length > 0 && this.selectedBusinessUnit.length > 0 && this.selectedDomain && this.requesterInfo.requestedDate && this.requesterInfo.requestedBy != '' && this.requesterInfo.requesterRole != '') {
      if (this.selectedDomain.key != 'Other') {
        this.requesterInfo.domain = this.selectedDomain.key;
      }
      let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
      if (other) {
        const indexOther = this.selectedMarket.indexOf('Other');
        this.selectedMarket.splice(indexOther, 1);
        this.requesterInfo.market.push(this.otherMarket);
      }
      this.selectedMarket.forEach(item => this.requesterInfo.market.push(this.getMarketKey(item)));
      this.selectedMarket = Array.from(new Set(this.selectedMarket));
      this.requesterInfo.market = Array.from(new Set(this.requesterInfo.market));
      this.demandIntakeService.demandInformation.requesterInfo.market = this.requesterInfo.market;
      let other1 = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
      if (other1) {
        const indexOther = this.selectedBusinessUnit.indexOf('Other');
        this.selectedBusinessUnit.splice(indexOther, 1);
        this.requesterInfo.businessUnit.push(this.otherBusinessUnit);
      }
      this.selectedBusinessUnit.forEach(item => this.requesterInfo.businessUnit.push(this.getBUKey(item)));
      this.selectedBusinessUnit = Array.from(new Set(this.selectedBusinessUnit));
      this.requesterInfo.businessUnit = Array.from(new Set(this.requesterInfo.businessUnit));
      this.demandIntakeService.demandInformation.requesterInfo.businessUnit = this.requesterInfo.businessUnit;
      this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
    } else {
      movenext1 = false;
    }
    if (movenext && movenext1) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill required fields!'
      });
    }
  }
  isOtherMarketSelected() {
    let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
    if (other && other.length > 0) {
      return true;
    }
    return false;
  }
  isOtherBUSelected() {
    let other = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
    if (other && other.length > 0) {
      return true;
    }
    return false;
  }
  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/introduction']);
    } else {
      this.router.navigate(['demand-intake/introduction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }
  savePage() {
    if (this.selectedDomain && this.selectedDomain.key != 'Other') {
      this.requesterInfo.domain = this.selectedDomain.key;
    }
    let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
    if (other) {
      const indexOther = this.selectedMarket.indexOf('Other');
      this.selectedMarket.splice(indexOther, 1);
      this.requesterInfo.market.push(this.otherMarket);
    }
    this.selectedMarket.forEach(item => this.requesterInfo.market.push(this.getMarketKey(item)));
    this.selectedMarket = Array.from(new Set(this.selectedMarket));
    this.requesterInfo.market = Array.from(new Set(this.requesterInfo.market));
    this.demandIntakeService.demandInformation.requesterInfo.market = this.requesterInfo.market;
    let other1 = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
    if (other1) {
      const indexOther = this.selectedBusinessUnit.indexOf('Other');
      this.selectedBusinessUnit.splice(indexOther, 1);
      this.requesterInfo.businessUnit.push(this.otherBusinessUnit);
    }
    this.selectedBusinessUnit.forEach(item => this.requesterInfo.businessUnit.push(this.getBUKey(item)));
    this.selectedBusinessUnit = Array.from(new Set(this.selectedBusinessUnit));
    this.requesterInfo.businessUnit = Array.from(new Set(this.requesterInfo.businessUnit));
    this.demandIntakeService.demandInformation.requesterInfo.businessUnit = this.requesterInfo.businessUnit;
    this.demandIntakeService.saveDemand().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)()).subscribe(response => {
      console.log("saveDemand() : Response -> ", response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: 'Demand Saved Successfully!'
      });
      this.router.navigate(['view']);
    }, error => {
      console.log("saveDemand() : ERROR -> ", error);
      this.messageService.add({
        key: 'error',
        severity: 'error',
        summary: 'Error',
        detail: 'Demand Failed to Save!'
      });
    });
  }
  getMarketValue(key) {
    const status = Object.keys(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market).indexOf(key);
    let s = Object.values(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market)[status];
    return s;
  }
  getMarketValueArray(array) {
    let output = [];
    array.forEach(key => {
      const status = Object.keys(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market).indexOf(key);
      let s = Object.values(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market)[status];
      if (s) {
        output.push(s);
      } else {
        output.push('Other');
        this.otherMarket = key;
      }
    });
    return output;
  }
  getBUValueArray(array) {
    let output = [];
    array.forEach(key => {
      const status = Object.keys(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit).indexOf(key);
      let s = Object.values(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit)[status];
      if (s) {
        output.push(s);
      } else {
        output.push('Other');
        this.otherBusinessUnit = key;
      }
    });
    return output;
  }
  getMarketKey(value) {
    const index = Object.values(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market).indexOf(value);
    return Object.keys(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market)[index];
  }
  getMarketKeyArray(array) {
    let output = [];
    array.forEach(value => {
      const index = Object.values(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market).indexOf(value);
      let s = Object.keys(_enums_market__WEBPACK_IMPORTED_MODULE_0__.Market)[index];
      output.push(s);
    });
    return output;
  }
  getBUKeyArray(array) {
    let output = [];
    array.forEach(value => {
      const index = Object.values(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit).indexOf(value);
      let s = Object.keys(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit)[index];
      output.push(s);
    });
    return output;
  }
  getBUValue(key) {
    const status = Object.keys(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit).indexOf(key);
    let s = Object.values(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit)[status];
    return s;
  }
  getBUKey(value) {
    const index = Object.values(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit).indexOf(value);
    return Object.keys(_enums_businessUnit__WEBPACK_IMPORTED_MODULE_1__.BusinessUnit)[index];
  }
  static #_ = this.ɵfac = function RequesterComponent_Factory(t) {
    return new (t || RequesterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_5__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_6__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_7__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: RequesterComponent,
    selectors: [["app-requester"]],
    decls: 134,
    vars: 93,
    consts: [[1, "grid"], [1, "col-12"], [3, "toggleable"], ["pTemplate", "header"], [1, "col-6", "align-content-center"], [1, "asterisk-if-mandatory"], ["type", "radio", "name", "isAnotherRequester", 3, "ngModelChange", "change", "pTooltip", "disabled", "ngModel", "value"], ["type", "radio", "name", "isAnotherRequester", "checked", "checked", 3, "ngModelChange", "change", "pTooltip", "disabled", "ngModel", "value"], [1, "col-3", "align-content-center"], ["for", "email", 1, "asterisk-if-mandatory"], [1, "col-9", "align-content-center"], ["pInputText", "", "id", "email", "type", "email", 1, "lg:w-6", "md:w-full", 3, "ngModelChange", "change", "blur", "ngModel", "pTooltip", "disabled"], ["for", "role", 1, "asterisk-if-mandatory"], ["pInputText", "", "id", "role", "type", "text", 1, "lg:w-6", "md:w-full", 3, "ngModelChange", "change", "ngModel", "pTooltip", "disabled"], ["for", "program"], ["pInputText", "", "id", "program", "type", "text", 1, "lg:w-6", "md:w-full", 3, "ngModelChange", "ngModel", "pTooltip"], ["type", "radio", 3, "ngModelChange", "ngModel", "pTooltip", "value"], ["type", "radio", "checked", "checked", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["for", "project", "class", "asterisk-if-mandatory", 4, "ngIf"], ["for", "project", 4, "ngIf"], ["pInputText", "", "id", "project", "type", "text", 1, "lg:w-6", "md:w-full", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "domain", 1, "asterisk-if-mandatory"], [1, "flex", "flex-wrap", "gap-3", "w-full"], ["appendTo", "body", "optionLabel", "value", "placeholder", "Please Select Domain/Platform", 3, "ngModelChange", "onChange", "options", "ngModel", "pTooltip"], [4, "ngIf"], ["for", "domain", "required", "", 1, "asterisk-if-mandatory"], ["placeholder", "Please Select Market", 3, "onChange", "ngModelChange", "options", "pTooltip", "ngModel"], [1, "flex", "align-items-center", "gap-2", "flex-wrap", "mt-2"], [3, "value", "rounded", 4, "ngFor", "ngForOf"], ["placeholder", "Please Select Business Unit", 3, "onChange", "ngModelChange", "options", "pTooltip", "ngModel"], ["severity", "success", 3, "value", "rounded", 4, "ngFor", "ngForOf"], ["type", "radio", "name", "approvedBudget", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["type", "radio", "name", "approvedBudget", "checked", "checked", 3, "ngModelChange", "pTooltip", "ngModel", "value"], ["class", "ml-3", 4, "ngIf"], ["class", "col-3 align-content-center", 4, "ngIf"], ["class", "col-9 align-content-center", 4, "ngIf"], [1, "col-12", "mt-5"], [1, "col-3", "xs:col-3", "sm:col-3", "lg:col-3", "xl:col-3"], [1, "col-9", "xs:col-9", "sm:col-9", "lg:col-9", "xl:col-9"], ["inputId", "cpAPI", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["inputId", "cpReport", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["inputId", "cpTransactionPlatform", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["inputId", "cpDataModel", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["inputId", "cpDataProduct", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], [1, "col-12", "grid", "p-fluid"], [1, "col-3", "font-bold"], [1, "col-2", "font-bold"], [1, "col-5", "font-bold"], [1, "col-12", "m-0", "p-0"], ["styleClass", "m-0"], ["class", "grid p-fluid", 4, "ngFor", "ngForOf"], [1, "grid", "grid-nogutter", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["iconPos", "right", 3, "label", "onClick", 4, "ngIf"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "onClick", "label"], [1, "flex", "align-items-center", "gap-2", "px-2"], [1, "font-bold", 3, "pTooltip"], ["for", "project", 1, "asterisk-if-mandatory"], ["for", "project"], ["pInputText", "", "id", "domain", "type", "text", "placeholder", "Please Specify Domain/Platform", 1, "w-full", 3, "ngModelChange", "ngModel"], [3, "value", "rounded"], ["id", "domain", "type", "text", "placeholder", "Please Specify Market", 1, "w-full", 3, "ngModelChange", "ngModel"], ["severity", "success", 3, "value", "rounded"], ["id", "domain", "type", "text", "placeholder", "Please Specify Business Unit", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "ml-3"], ["for", "clarityProjectId", 1, "asterisk-if-mandatory"], ["pInputText", "", "id", "clarityProjectId", "type", "text", 1, "lg:w-6", "md:w-full", 3, "ngModelChange", "ngModel", "pTooltip"], [1, "flex", "align-items-center", "justify-content-between", "w-full"], [1, "font-bold"], [1, "grid", "gap-3"], [3, "click", "disabled"], [1, "grid", "p-fluid"], [1, "col-3"], ["pInputText", "", "id", "spocEmail", "type", "email", "size", "30", "aria-describedby", "program-help", 1, "w-full", 3, "ngModelChange", "blur", "ngModel", "pTooltip", "disabled"], [1, "col-2"], ["pInputText", "", "id", "spocRole", "size", "30", "aria-describedby", "program-help", 1, "w-full", 3, "ngModelChange", "ngModel", "pTooltip", "disabled"], [1, "col-5"], ["pInputText", "", "id", "spocRemarks", "size", "60", "aria-describedby", "program-help", 1, "w-full", 3, "ngModelChange", "ngModel", "pTooltip", "disabled"], ["iconPos", "right", 3, "onClick", "label"]],
    template: function RequesterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "p-fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RequesterComponent_ng_template_4_Template, 3, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 0)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 4)(10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.isAnotherRequester, $event) || (ctx.requesterInfo.isAnotherRequester = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RequesterComponent_Template_input_change_10_listener($event) {
          return ctx.requesterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.isAnotherRequester, $event) || (ctx.requesterInfo.isAnotherRequester = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RequesterComponent_Template_input_change_13_listener($event) {
          return ctx.requesterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 10)(20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.requestedBy, $event) || (ctx.requesterInfo.requestedBy = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RequesterComponent_Template_input_change_20_listener($event) {
          return ctx.requesterChange($event);
        })("blur", function RequesterComponent_Template_input_blur_20_listener() {
          return ctx.eventService.checkEmailValue(ctx.requesterInfo.requestedBy);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 8)(22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 10)(25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.requesterRole, $event) || (ctx.requesterInfo.requesterRole = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RequesterComponent_Template_input_change_25_listener($event) {
          return ctx.requesterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 1)(27, "p-fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RequesterComponent_ng_template_28_Template, 3, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 0)(30, "div", 8)(31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 10)(34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.program, $event) || (ctx.requesterInfo.program = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 8)(36, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 10)(39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.isDemandPOC, $event) || (ctx.requesterInfo.isDemandPOC = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.isDemandPOC, $event) || (ctx.requesterInfo.isDemandPOC = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, RequesterComponent_label_46_Template, 2, 1, "label", 18)(47, RequesterComponent_label_47_Template, 2, 1, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 10)(49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.project, $event) || (ctx.requesterInfo.project = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 8)(51, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 10)(54, "div", 22)(55, "p-dropdown", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_dropdown_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.selectedDomain, $event) || (ctx.selectedDomain = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function RequesterComponent_Template_p_dropdown_onChange_55_listener() {
          return ctx.onDomainSelect();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, RequesterComponent_div_56_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 8)(58, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 10)(61, "p-multiSelect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function RequesterComponent_Template_p_multiSelect_onChange_61_listener() {
          return ctx.onMarketSelect();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_multiSelect_ngModelChange_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.selectedMarket, $event) || (ctx.selectedMarket = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, RequesterComponent_p_tag_63_Template, 1, 2, "p-tag", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, RequesterComponent_div_64_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 8)(66, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 10)(69, "p-multiSelect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function RequesterComponent_Template_p_multiSelect_onChange_69_listener() {
          return ctx.onBUSelect();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_multiSelect_ngModelChange_69_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.selectedBusinessUnit, $event) || (ctx.selectedBusinessUnit = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, RequesterComponent_p_tag_71_Template, 1, 2, "p-tag", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, RequesterComponent_div_72_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 8)(74, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 10)(77, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.approvedBudget, $event) || (ctx.requesterInfo.approvedBudget = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_input_ngModelChange_80_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.approvedBudget, $event) || (ctx.requesterInfo.approvedBudget = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, RequesterComponent_small_83_Template, 2, 1, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, RequesterComponent_div_84_Template, 3, 1, "div", 34)(85, RequesterComponent_div_85_Template, 2, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 36)(87, "p-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, RequesterComponent_ng_template_88_Template, 2, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 0)(90, "div", 37)(91, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 38)(94, "p-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_checkbox_ngModelChange_94_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.cpAPI, $event) || (ctx.requesterInfo.cpAPI = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 37)(96, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 38)(99, "p-checkbox", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_checkbox_ngModelChange_99_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.cpReport, $event) || (ctx.requesterInfo.cpReport = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 37)(101, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 38)(104, "p-checkbox", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_checkbox_ngModelChange_104_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.cpTransactionPlatform, $event) || (ctx.requesterInfo.cpTransactionPlatform = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 37)(106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 38)(109, "p-checkbox", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_checkbox_ngModelChange_109_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.cpDataModel, $event) || (ctx.requesterInfo.cpDataModel = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 37)(111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "div", 38)(114, "p-checkbox", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function RequesterComponent_Template_p_checkbox_ngModelChange_114_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.requesterInfo.cpDataProduct, $event) || (ctx.requesterInfo.cpDataProduct = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div", 1)(116, "p-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](117, RequesterComponent_ng_template_117_Template, 8, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "div", 0)(119, "div", 44)(120, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](127, "p-divider", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](129, RequesterComponent_div_129_Template, 7, 9, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 51)(131, "p-button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function RequesterComponent_Template_p_button_onClick_131_listener() {
          return ctx.prevPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](132, RequesterComponent_p_button_132_Template, 1, 1, "p-button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "p-button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function RequesterComponent_Template_p_button_onClick_133_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.fieldsService.getLabel("REQUESTER_DEMAND_OTHER_BEHALF"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_DEMAND_OTHER_BEHALF_YES"))("disabled", !ctx.authService.isRequester() && !ctx.eventService.isMyDemand);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.isAnotherRequester);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_DEMAND_OTHER_BEHALF_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_DEMAND_OTHER_BEHALF_NO"))("disabled", !ctx.authService.isRequester() && !ctx.eventService.isMyDemand);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.isAnotherRequester);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_DEMAND_OTHER_BEHALF_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.requestedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_EMAIL"))("disabled", ctx.eventService.isMyDemand && !ctx.requesterInfo.isAnotherRequester || !ctx.authService.isRequester() && !ctx.eventService.isMyDemand);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_ROLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.requesterRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_ROLE"))("disabled", !ctx.authService.isRequester() && !ctx.eventService.isMyDemand);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_PROGRAM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.program);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_PROGRAM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_IS_DEMAND_POC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.isDemandPOC);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_IS_DEMAND_POC_YES"))("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_IS_DEMAND_POC_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_IS_DEMAND_POC_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.isDemandPOC);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_IS_DEMAND_POC_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.requesterInfo.isDemandPOC);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.requesterInfo.isDemandPOC);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_PROJECT_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_DOMAIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.domainList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_DOMAIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedDomain && ctx.selectedDomain.key == "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_MARKET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.marketList)("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_MARKET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedMarket);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.selectedMarket);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isOtherMarketSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_BUSINESS_UNIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.businessUnitList)("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_BUSINESS_UNIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedBusinessUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.selectedBusinessUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isOtherBUSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_IS_BUDGET_APPROVED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_IS_BUDGET_APPROVED_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.approvedBudget);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_IS_BUDGET_APPROVED_YES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_IS_BUDGET_APPROVED_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.approvedBudget);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_IS_BUDGET_APPROVED_NO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.requesterInfo.approvedBudget && ctx.requesterInfo.isDemandPOC == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.requesterInfo.approvedBudget);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.requesterInfo.approvedBudget);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_VIA_API"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.cpAPI);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_VIA_API"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_VIA_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.cpReport);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_VIA_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_VIA_DOWNSTREAM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.cpTransactionPlatform);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_VIA_DOWNSTREAM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_VIA_DATA_MODEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.cpDataModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_VIA_DATA_MODEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_VIA_DATA_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.requesterInfo.cpDataProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("REQUESTER_VIA_DATA_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_STAKEHOLDER_EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_STAKEHOLDER_ROLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("REQUESTER_STAKEHOLDER_REMARKS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.requesterInfo.spoc);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("BACK_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.visibleSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("NEXT_BUTTON"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_20__.Divider, primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__.Checkbox, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.Toast, primeng_tag__WEBPACK_IMPORTED_MODULE_23__.Tag, primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.Dropdown, primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__.Fieldset, primeng_multiselect__WEBPACK_IMPORTED_MODULE_26__.MultiSelect, primeng_panel__WEBPACK_IMPORTED_MODULE_27__.Panel],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38533:
/*!*****************************************************************************!*\
  !*** ./src/app/intake-ui/components/requirements/requirements.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequirementsComponent: () => (/* binding */ RequirementsComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fieldset */ 63148);






















function RequirementsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("FUNCTIONAL_DESIRED_REQUESTED_GO_LIVE"));
  }
}
function RequirementsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.fieldsService.getLabel("FUNCTIONAL_DESIRED_FIRST_GO_LIVE"), " ");
  }
}
function RequirementsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "p-calendar", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_div_37_Template_p_calendar_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.requirementFunctionalInfo.bglDate, $event) || (ctx_r0.requirementFunctionalInfo.bglDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("numberOfMonths", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.requirementFunctionalInfo.bglDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("FUNCTIONAL_GO_LIVE_DATE"))("minDate", ctx_r0.eventService.goLiveMinDate)("showIcon", true);
  }
}
function RequirementsComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 83)(1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("NON_FUNCTIONAL_COMMON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.fieldsService.getLabel("NON_FUNCTIONAL_COMMON"), "");
  }
}
function RequirementsComponent_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 83)(1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("NON_FUNCTIONAL_DATA_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("NON_FUNCTIONAL_DATA_INFO"));
  }
}
function RequirementsComponent_div_177_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 85)(1, "div", 6)(2, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8)(5, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_div_177_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.requirementComplianceInfo.valgEntityId, $event) || (ctx_r0.requirementComplianceInfo.valgEntityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("COMPLIANCE_VALGENESIS_ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("COMPLIANCE_VALGENESIS_ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.requirementComplianceInfo.valgEntityId);
  }
}
function RequirementsComponent_div_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_div_183_Template_input_ngModelChange_2_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](item_r5.key, $event) || (item_r5.key = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 8)(4, "p-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_div_183_Template_p_checkbox_ngModelChange_4_listener($event) {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](item_r5.value, $event) || (item_r5.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", item_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
  }
}
function RequirementsComponent_p_button_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function RequirementsComponent_p_button_186_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.savePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", ctx_r0.fieldsService.getLabel("SAVE_FOR_LATER"));
  }
}
class RequirementsComponent {
  constructor(demandIntakeService, fieldsService, router, messageService, authService, eventService) {
    this.demandIntakeService = demandIntakeService;
    this.fieldsService = fieldsService;
    this.router = router;
    this.messageService = messageService;
    this.authService = authService;
    this.eventService = eventService;
    if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
  }
  ngOnInit() {
    // console.log("RequirementsComponent Init: ", this.demandIntakeService.demandInformation)
    this.requirementFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementFunctionalInfo;
    if (this.eventService.isNewDemand) {
      this.requirementFunctionalInfo.bglDate = this.eventService.goLiveMinDate;
    }
    this.requirementNonFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo;
    this.requirementComplianceInfo = this.demandIntakeService.getDemandInformation().requirementComplianceInfo;
  }
  onTabChange(event) {
    this.eventService.selectedRequirementsTabIndex = event.index;
  }
  nextPage() {
    if (this.requirementFunctionalInfo.statement != '' && this.requirementFunctionalInfo.scope != '' && this.requirementFunctionalInfo.businessValue != '' && this.requirementFunctionalInfo.goLiveApproach != '') {
      this.demandIntakeService.getDemandInformation().requirementFunctionalInfo = this.requirementFunctionalInfo;
      this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo = this.requirementNonFunctionalInfo;
      this.demandIntakeService.getDemandInformation().requirementComplianceInfo = this.requirementComplianceInfo;
      if (this.eventService.selectedRequirementsTabIndex < 2) {
        this.eventService.selectedRequirementsTabIndex += 1;
      } else {
        if (this.authService.isRequester()) {
          if (this.eventService.isNewDemand) {
            this.router.navigate(['demand-intake/attachment']);
          } else {
            if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM) {
              this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
            } else {
              this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
            }
          }
        } else {
          if (this.eventService.isNewDemand || (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.DRAFT || this.demandIntakeService.demandInformation.introduction.status == _enums_demand_status__WEBPACK_IMPORTED_MODULE_0__.DemandStatus.PENDING_WITH_DM)) {
            this.router.navigate(['demand-intake/attachment']);
          } else {
            this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
          }
        }
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill required fields!'
      });
    }
  }
  submitPage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Demand Saved!'
    });
  }
  prevPage() {
    if (this.eventService.selectedRequirementsTabIndex > 0) {
      this.eventService.selectedRequirementsTabIndex -= 1;
    } else {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requester']);
      } else {
        this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }
  savePage() {
    this.demandIntakeService.saveDemand().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.first)()).subscribe(response => {
      console.log("saveDemand() : Response -> ", response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: 'Demand Saved Successfully!'
      });
      this.router.navigate(['view']);
    }, error => {
      console.log("saveDemand() : ERROR -> ", error);
      this.messageService.add({
        key: 'error',
        severity: 'error',
        summary: 'Error',
        detail: 'Demand Failed to Save!'
      });
    });
  }
  static #_ = this.ɵfac = function RequirementsComponent_Factory(t) {
    return new (t || RequirementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_2__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RequirementsComponent,
    selectors: [["app-requirements"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService])],
    decls: 188,
    vars: 121,
    consts: [[1, "grid"], [1, "col-12"], [1, "col-12", "align-text-center"], [3, "onChange", "activeIndex"], [3, "header"], [1, "grid", "p-fluid"], [1, "col-3", "align-content-center"], ["for", "statement", 1, "asterisk-if-mandatory"], [1, "col-9", "align-content-center"], ["id", "statement", "rows", "2", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "scope", 1, "asterisk-if-mandatory"], [1, "col-9"], ["rows", "2", "cols", "75", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "businessValue", "required", "", 1, "asterisk-if-mandatory"], ["for", "goLiveApproach", "required", "", 1, "asterisk-if-mandatory"], ["type", "radio", "id", "glA1", "name", "goLiveApproach", "checked", "checked", "tooltipPosition", "left", "value", "oneTime", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "glA1"], ["type", "radio", "id", "glA2", "name", "goLiveApproach", "tooltipPosition", "left", "value", "phased", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "glA2"], ["class", "col-3 align-content-center", 4, "ngIf"], ["class", "col-9 align-content-center", 4, "ngIf"], ["for", "sourceDetails", 2, "width", "100px"], ["for", "targetDetails"], ["rows", "2", "cols", "75", "tooltipPosition", "left", "tooltipPosition", "left", "pInputTextarea", "", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "mappingRequirement"], [3, "toggleable"], ["pTemplate", "header"], ["for", "messageClassification"], ["pInputText", "", "id", "messageClassification", "size", "70", "placeholder", "Is the message structured for example XML or unstructured?", "tooltipPosition", "left", "aria-describedby", "messageClassification-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "messageSize"], ["pInputText", "", "id", "messageSize", "size", "70", "placeholder", "Size of the individual messages /dataset  exchanged. Provide the peak and average size of messages", "tooltipPosition", "left", "aria-describedby", "messageSize-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "volume"], ["pInputText", "", "id", "volume", "size", "70", "placeholder", "Volume of messages per time interval. Provide peak and average values along with the volume spread over the year (seasonal peaks etc)", "tooltipPosition", "left", "ia-describedby", "volume-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "timing"], ["pInputText", "", "id", "timing", "size", "70", "placeholder", "When are the messages exchanged?", "tooltipPosition", "left", "aria-describedby", "timing-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "maximumLatency"], ["pInputText", "", "id", "maximumLatency", "size", "70", "placeholder", "What is the expected throughput time for each transaction? (in mSec/Sec/Min/hour) What is the maximum acceptable delay in processing?", "tooltipPosition", "left", "aria-describedby", "maximumLatency-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "businessCriticality"], ["pInputText", "", "id", "businessCriticality", "size", "70", "placeholder", "What is the affordable downtime/unavailability for the solution? (in mSecs/Sec/Min/Hour)", "tooltipPosition", "left", "aria-describedby", "businessCriticality-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "dataPrivacy"], ["pInputText", "", "id", "dataPrivacy", "size", "70", "placeholder", "State if the data need to be signed/encrypted either for regulatory or due to organizational policies", "tooltipPosition", "left", "aria-describedby", "dataPrivacy-help", 3, "ngModelChange", "ngModel", "pTooltip"], [1, "text-xl", "font-bold"], ["for", "transformation"], ["tooltipPosition", "left", "inputId", "transformation", 3, "ngModelChange", "ngModel", "pTooltip", "binary"], ["for", "routing"], ["tooltipPosition", "left", "inputId", "routing", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "protocolConversion"], ["tooltipPosition", "left", "inputId", "protocolConversion", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "messageSequencng"], ["tooltipPosition", "left", "inputId", "messageSequencng", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "integrationItaap"], ["tooltipPosition", "left", "inputId", "integrationItaap", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "pesristenceAndArchiving"], ["tooltipPosition", "left", "inputId", "pesristenceAndArchiving", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "senderTechnicalDetails"], ["rows", "2", "cols", "75", "pInputTextarea", "", "placeholder", "State the technical aspects of the Sending system. Note: Please list what can be done, not what has been done in the past.", "tooltipPosition", "left", "aria-describedby", "senderTechnicalDetails-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["for", "receiverTechnicalDetails"], ["rows", "2", "cols", "75", "pInputTextarea", "", "placeholder", "State the technical aspects of the Receiving system. Note: Please list what can be done, not what has been done in the past.", "tooltipPosition", "left", "aria-describedby", "receiverTechnicalDetails-help", 3, "ngModelChange", "ngModel", "pTooltip"], ["styleClass", "mt-3", 3, "toggleable"], ["for", "refreshFrequency"], ["pInputText", "", "id", "refreshFrequency", "size", "70", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "dimentionType"], ["pInputText", "", "id", "dimentionType", "size", "70", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "snapshot"], ["pInputText", "", "id", "snapshot", "size", "70", "tooltipPosition", "left", 3, "ngModelChange", "pTooltip", "ngModel"], ["for", "sox"], ["tooltipPosition", "left", "inputId", "sox", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "security"], ["tooltipPosition", "left", "inputId", "security", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "privacy"], ["tooltipPosition", "left", "inputId", "privacy", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["for", "qms"], ["tooltipPosition", "left", "inputId", "qms", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["class", "col-12 xs:col-12 sm:col-12 lg:col-12 xl:col-12", "style", "display: inline-flex;", 4, "ngIf"], ["for", "qsia"], ["tooltipPosition", "left", "inputId", "qsia", 3, "ngModelChange", "binary", "ngModel", "pTooltip"], ["class", "col-9 align-content-center", "style", "display: inline-flex;", 4, "ngFor", "ngForOf"], [1, "grid", "grid-nogutter", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["iconPos", "right", 3, "label", "onClick", 4, "ngIf"], ["icon", "pi pi-angle-right", 3, "onClick", "label"], ["for", "requestDate", "required", "", 1, "asterisk-if-mandatory"], ["dateFormat", "M dd, yy", "tooltipPosition", "left", 3, "ngModelChange", "numberOfMonths", "ngModel", "pTooltip", "minDate", "showIcon"], [1, "flex", "align-items-center", "gap-2", "px-2"], ["tooltipPosition", "left", 1, "font-bold", 3, "pTooltip"], [1, "col-12", "xs:col-12", "sm:col-12", "lg:col-12", "xl:col-12", 2, "display", "inline-flex"], ["for", "valgEntityId"], ["pInputText", "", "id", "valgEntityId", "tooltipPosition", "left", "aria-describedby", "messageSize-help", 3, "ngModelChange", "pTooltip", "ngModel"], [1, "col-9", "align-content-center", 2, "display", "inline-flex"], [1, "col-4", "xs:col-4", "sm:col-4", "lg:col-4", "xl:col-4"], ["pInputText", "", "id", "program", "aria-describedby", "program-help", 3, "ngModelChange", "ngModel"], ["inputId", "program", 3, "ngModelChange", "ngModel", "binary"], ["iconPos", "right", 3, "onClick", "label"]],
    template: function RequirementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 0)(4, "div", 2)(5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p-tabView", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function RequirementsComponent_Template_p_tabView_onChange_7_listener($event) {
          return ctx.onTabChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p-tabPanel", 4)(9, "div", 5)(10, "div", 6)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8)(14, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.statement, $event) || (ctx.requirementFunctionalInfo.statement = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11)(19, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.scope, $event) || (ctx.requirementFunctionalInfo.scope = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 6)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11)(24, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.businessValue, $event) || (ctx.requirementFunctionalInfo.businessValue = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 6)(26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 11)(29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.goLiveApproach, $event) || (ctx.requirementFunctionalInfo.goLiveApproach = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.goLiveApproach, $event) || (ctx.requirementFunctionalInfo.goLiveApproach = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, RequirementsComponent_div_35_Template, 3, 1, "div", 19)(36, RequirementsComponent_div_36_Template, 3, 1, "div", 19)(37, RequirementsComponent_div_37_Template, 2, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 6)(39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 8)(42, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.sourceDetails, $event) || (ctx.requirementFunctionalInfo.sourceDetails = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 6)(44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11)(47, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.targetDetails, $event) || (ctx.requirementFunctionalInfo.targetDetails = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 6)(49, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 11)(52, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementFunctionalInfo.mappingRequirement, $event) || (ctx.requirementFunctionalInfo.mappingRequirement = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "p-tabPanel", 4)(54, "p-fieldset", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, RequirementsComponent_ng_template_55_Template, 3, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 5)(57, "div", 6)(58, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 8)(61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.msgClassification, $event) || (ctx.requirementNonFunctionalInfo.msgClassification = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 6)(63, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 8)(66, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_66_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.msgSize, $event) || (ctx.requirementNonFunctionalInfo.msgSize = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 6)(68, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 8)(71, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_71_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.volume, $event) || (ctx.requirementNonFunctionalInfo.volume = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 6)(73, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 8)(76, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_76_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.timing, $event) || (ctx.requirementNonFunctionalInfo.timing = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 6)(78, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 8)(81, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.maxLatency, $event) || (ctx.requirementNonFunctionalInfo.maxLatency = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 6)(83, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 8)(86, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_86_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.businessCriticality, $event) || (ctx.requirementNonFunctionalInfo.businessCriticality = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 6)(88, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 8)(91, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_91_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.dataPrivacy, $event) || (ctx.requirementNonFunctionalInfo.dataPrivacy = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "p-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 2)(95, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 6)(98, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 8)(101, "p-checkbox", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_101_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.transformation, $event) || (ctx.requirementNonFunctionalInfo.transformation = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 6)(103, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 8)(106, "p-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_106_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.routing, $event) || (ctx.requirementNonFunctionalInfo.routing = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 6)(108, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 8)(111, "p-checkbox", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_111_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.protocolConversion, $event) || (ctx.requirementNonFunctionalInfo.protocolConversion = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 6)(113, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 8)(116, "p-checkbox", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_116_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.msgSequencing, $event) || (ctx.requirementNonFunctionalInfo.msgSequencing = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 6)(118, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 8)(121, "p-checkbox", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_121_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.trackNTrace, $event) || (ctx.requirementNonFunctionalInfo.trackNTrace = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 6)(123, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 8)(126, "p-checkbox", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_126_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.persistence, $event) || (ctx.requirementNonFunctionalInfo.persistence = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 6)(128, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 8)(131, "textarea", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_131_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.senderTechnicalDetails, $event) || (ctx.requirementNonFunctionalInfo.senderTechnicalDetails = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 6)(133, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 8)(136, "textarea", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_textarea_ngModelChange_136_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.receiverTechnicalDetails, $event) || (ctx.requirementNonFunctionalInfo.receiverTechnicalDetails = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "p-fieldset", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, RequirementsComponent_ng_template_138_Template, 3, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 5)(140, "div", 6)(141, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 8)(144, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_144_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.refreshFrequency, $event) || (ctx.requirementNonFunctionalInfo.refreshFrequency = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 6)(146, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 8)(149, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_149_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.dimentionType, $event) || (ctx.requirementNonFunctionalInfo.dimentionType = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 6)(151, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "div", 8)(154, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_input_ngModelChange_154_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementNonFunctionalInfo.snapshot, $event) || (ctx.requirementNonFunctionalInfo.snapshot = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "p-tabPanel", 4)(156, "div", 0)(157, "div", 6)(158, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 8)(161, "p-checkbox", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_161_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementComplianceInfo.sox, $event) || (ctx.requirementComplianceInfo.sox = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "div", 6)(163, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "div", 8)(166, "p-checkbox", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_166_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementComplianceInfo.security, $event) || (ctx.requirementComplianceInfo.security = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 6)(168, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 8)(171, "p-checkbox", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_171_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementComplianceInfo.privacy, $event) || (ctx.requirementComplianceInfo.privacy = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 6)(173, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 8)(176, "p-checkbox", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_176_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementComplianceInfo.qms, $event) || (ctx.requirementComplianceInfo.qms = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](177, RequirementsComponent_div_177_Template, 6, 3, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 6)(179, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 8)(182, "p-checkbox", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RequirementsComponent_Template_p_checkbox_ngModelChange_182_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.requirementComplianceInfo.qsia, $event) || (ctx.requirementComplianceInfo.qsia = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](183, RequirementsComponent_div_183_Template, 5, 3, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 77)(185, "p-button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function RequirementsComponent_Template_p_button_onClick_185_listener() {
          return ctx.prevPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](186, RequirementsComponent_p_button_186_Template, 1, 1, "p-button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "p-button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function RequirementsComponent_Template_p_button_onClick_187_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_NOTE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeIndex", ctx.eventService.selectedRequirementsTabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("header", ctx.fieldsService.getLabel("FUNCTIONAL_TAB_PANEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fieldsService.getLabel("FUNCTIONAL_PROBLEM_STATEMENT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.statement);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_PROBLEM_STATEMENT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_DEMAND_SCOPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.scope);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_DEMAND_SCOPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_BUSINESS_VALUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.businessValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_BUSINESS_VALUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_GO_LIVE_APPROACH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_GO_LIVE_APPROACH_ONE_TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.goLiveApproach);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_GO_LIVE_APPROACH_ONE_TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_GO_LIVE_APPROACH_PHASED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.goLiveApproach);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_GO_LIVE_APPROACH_PHASED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requirementFunctionalInfo.goLiveApproach == "oneTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requirementFunctionalInfo.goLiveApproach == "phased");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requirementFunctionalInfo.goLiveApproach == "oneTime" || ctx.requirementFunctionalInfo.goLiveApproach == "phased");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_SOURCE_DETAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.sourceDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_SOURCE_DETAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_TARGET_DETAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.targetDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_TARGET_DETAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("FUNCTIONAL_MAPPING_REQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementFunctionalInfo.mappingRequirement);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("FUNCTIONAL_MAPPING_REQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("header", ctx.fieldsService.getLabel("NON_FUNCTIONAL_TAB_PANEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_MESSAGE_CLASSIFICATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.msgClassification);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_MESSAGE_CLASSIFICATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_MESSAGE_SIZE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.msgSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_MESSAGE_SIZE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_VOLUME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.volume);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_VOLUME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_TIMING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.timing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_TIMING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_MAXIMUM_LATENCY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.maxLatency);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_MAXIMUM_LATENCY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_BUSINESS_CRITICALITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.businessCriticality);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_BUSINESS_CRITICALITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_DATA_PRIVACY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.dataPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_DATA_PRIVACY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_QUALITY_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_TRANSFORMATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.transformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_TRANSFORMATION"))("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_ROUTING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.routing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_ROUTING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_PROTOCOL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.protocolConversion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_PROTOCOL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_MESSAGE_SEQUENCING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.msgSequencing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_MESSAGE_SEQUENCING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_TRACK_TRACE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.trackNTrace);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_TRACK_TRACE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_PERSISTENCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.persistence);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_PERSISTENCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_STD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.senderTechnicalDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_STD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_RTD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.receiverTechnicalDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_RTD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("toggleable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_REFRESH_FREQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_REFRESH_FREQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.refreshFrequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_DIMENTION_TYPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_DIMENTION_TYPE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.dimentionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("NON_FUNCTIONAL_SNAPSHOT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("NON_FUNCTIONAL_SNAPSHOT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementNonFunctionalInfo.snapshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("header", ctx.fieldsService.getLabel("COMPLIANCE_TAB_PANEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("COMPLIANCE_SOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementComplianceInfo.sox);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("COMPLIANCE_SOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("COMPLIANCE_SECURITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementComplianceInfo.security);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("COMPLIANCE_SECURITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("COMPLIANCE_PRIVACY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementComplianceInfo.privacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("COMPLIANCE_PRIVACY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("COMPLIANCE_QMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementComplianceInfo.qms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("COMPLIANCE_QMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requirementComplianceInfo.qms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("COMPLIANCE_QSIA"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.requirementComplianceInfo.qsia);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("COMPLIANCE_QSIA"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.requirementComplianceInfo.compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("BACK_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visibleSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("NEXT_BUTTON"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabPanel, primeng_divider__WEBPACK_IMPORTED_MODULE_16__.Divider, primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__.Checkbox, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextarea, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, primeng_fieldset__WEBPACK_IMPORTED_MODULE_20__.Fieldset],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45083:
/*!*****************************************************************************************!*\
  !*** ./src/app/intake-ui/components/solution-direction/solution-direction.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolutionDirectionComponent: () => (/* binding */ SolutionDirectionComponent)
/* harmony export */ });
/* harmony import */ var _models_solution_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/solution-direction */ 45272);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fields.service */ 74765);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checklist/checklist.component */ 93787);


















function SolutionDirectionComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx_r0.fieldsService.getToolTip("SOLUTION_DIRECTION_FIELDSET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.fieldsService.getLabel("SOLUTION_DIRECTION_FIELDSET"));
  }
}
function SolutionDirectionComponent_p_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function SolutionDirectionComponent_p_button_50_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.savePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx_r0.fieldsService.getLabel("SAVE_FOR_LATER"));
  }
}
class SolutionDirectionComponent {
  constructor(authService, fieldsService, demandIntakeService, router, messageService, eventService) {
    this.authService = authService;
    this.fieldsService = fieldsService;
    this.demandIntakeService = demandIntakeService;
    this.router = router;
    this.messageService = messageService;
    this.eventService = eventService;
    this.sdInfo = new _models_solution_direction__WEBPACK_IMPORTED_MODULE_0__.SolutionDirection();
    this.dmDomainList = [];
  }
  ngOnInit() {
    // console.log("SolutionDirectionComponent Init: ", this.demandIntakeService.demandInformation)
    if (this.demandIntakeService.getDemandInformation().introduction.status != _enums_demand_status__WEBPACK_IMPORTED_MODULE_1__.DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
    this.solutionDirectionInfo = this.demandIntakeService.getDemandInformation().solutionDirectionInfo;
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
    this.solutionDirectionInfo.forEach(item => {
      this.setLocalSD(item);
    });
    this.dmDomainList = this.authService.currentUserValue.domain;
  }
  setLocalSD(sd) {
    switch (sd.solution) {
      case 'integration':
        this.sdInfo.integration = sd.value;
        break;
      case 'dataModelling':
        this.sdInfo.dataModelling = sd.value;
        break;
      case 'adlL1':
        this.sdInfo.adlL1 = sd.value;
        break;
      case 'adlL2':
        this.sdInfo.adlL2 = sd.value;
        break;
      case 'gold':
        this.sdInfo.gold = sd.value;
        break;
      case 'mdm':
        this.sdInfo.mdm = sd.value;
        break;
      case 'ia':
        this.sdInfo.ia = sd.value;
        break;
      case 'dataQuality':
        this.sdInfo.dataQuality = sd.value;
        break;
      case 'informatica':
        this.sdInfo.informatica = sd.value;
        break;
      case 'azureSynapse':
        this.sdInfo.azureSynapse = sd.value;
        break;
    }
  }
  setDBSD() {
    this.solutionDirectionInfo.forEach(item => {
      if (item.solution === 'integration') {
        item.value = this.sdInfo.integration;
      } else if (item.solution === 'dataModelling') {
        item.value = this.sdInfo.dataModelling;
      } else if (item.solution === 'adlL1') {
        item.value = this.sdInfo.adlL1;
      } else if (item.solution === 'adlL2') {
        item.value = this.sdInfo.adlL2;
      } else if (item.solution === 'gold') {
        item.value = this.sdInfo.gold;
      } else if (item.solution === 'mdm') {
        item.value = this.sdInfo.mdm;
      } else if (item.solution === 'ia') {
        item.value = this.sdInfo.ia;
      } else if (item.solution === 'dataQuality') {
        item.value = this.sdInfo.dataQuality;
      } else if (item.solution === 'informatica') {
        item.value = this.sdInfo.informatica;
      } else if (item.solution === 'azureSynapse') {
        item.value = this.sdInfo.azureSynapse;
      }
    });
  }
  nextPage() {
    this.setDBSD();
    if (this.isAnySD()) {
      this.demandIntakeService.getDemandInformation().solutionDirectionInfo = this.solutionDirectionInfo;
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/checklist']);
      } else {
        this.router.navigate(['demand-intake/checklist/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please select at least one Solution Direction!'
      });
    }
  }
  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/requirement']);
    } else {
      this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }
  emitCheckList() {
    this.setDBSD();
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
  }
  isAnySD() {
    return this.dmDomainList.length == 0 || this.solutionDirectionInfo.filter(item => item.value).length > 0;
  }
  savePage() {
    this.demandIntakeService.saveDemand().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.first)()).subscribe(response => {
      console.log("saveDemand() : Response -> ", response);
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'Success',
        detail: 'Demand Saved Successfully!'
      });
      this.router.navigate(['view']);
    }, error => {
      console.log("saveDemand() : ERROR -> ", error);
      this.messageService.add({
        key: 'error',
        severity: 'error',
        summary: 'Error',
        detail: 'Demand Failed to Save!'
      });
    });
  }
  static #_ = this.ɵfac = function SolutionDirectionComponent_Factory(t) {
    return new (t || SolutionDirectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_fields_service__WEBPACK_IMPORTED_MODULE_3__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SolutionDirectionComponent,
    selectors: [["app-solution-direction"]],
    decls: 52,
    vars: 54,
    consts: [[1, "grid", "col-12"], [1, "col-12", "md:col-12", "lg:col-3", "h-full"], [3, "toggleable"], ["pTemplate", "header"], [1, "grid", "p-fluid"], [1, "col-12", "flex", "align-items-center", "gap-1"], ["inputId", "integration", 3, "ngModelChange", "onChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "integration"], ["inputId", "dataModelling", 3, "ngModelChange", "onChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "dataModelling"], ["inputId", "adlL1", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "adlL1"], ["inputId", "adlL2", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "adlL2"], ["inputId", "gold", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "gold"], ["inputId", "mdm", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "mdm"], ["inputId", "ia", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "ia"], ["inputId", "dataQuality", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "dataQuality"], ["inputId", "informatica", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "informatica"], ["inputId", "azureSynapse", 3, "onChange", "ngModelChange", "binary", "ngModel", "pTooltip", "disabled"], ["for", "azureSynapse"], [1, "col-12", "md:col-12", "lg:col-9"], [1, "col-12", "grid", "justify-content-between"], ["icon", "pi pi-angle-left", 3, "onClick", "label"], ["iconPos", "right", 3, "label", "onClick", 4, "ngIf"], ["icon", "pi pi-angle-right", "iconPos", "right", 3, "onClick", "label"], [1, "flex", "align-items-center", "gap-2", "px-2"], [1, "font-bold", 3, "pTooltip"], ["iconPos", "right", 3, "onClick", "label"]],
    template: function SolutionDirectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "p-fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SolutionDirectionComponent_ng_template_4_Template, 3, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "p-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.integration, $event) || (ctx.sdInfo.integration = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_7_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 5)(11, "p-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.dataModelling, $event) || (ctx.sdInfo.dataModelling = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_11_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 5)(15, "p-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_15_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.adlL1, $event) || (ctx.sdInfo.adlL1 = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 5)(19, "p-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_19_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.adlL2, $event) || (ctx.sdInfo.adlL2 = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 5)(23, "p-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_23_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.gold, $event) || (ctx.sdInfo.gold = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 5)(27, "p-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_27_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.mdm, $event) || (ctx.sdInfo.mdm = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 5)(31, "p-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_31_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.ia, $event) || (ctx.sdInfo.ia = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 5)(35, "p-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_35_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.dataQuality, $event) || (ctx.sdInfo.dataQuality = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 5)(39, "p-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_39_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.informatica, $event) || (ctx.sdInfo.informatica = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 5)(43, "p-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function SolutionDirectionComponent_Template_p_checkbox_onChange_43_listener() {
          return ctx.emitCheckList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SolutionDirectionComponent_Template_p_checkbox_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sdInfo.azureSynapse, $event) || (ctx.sdInfo.azureSynapse = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "app-checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 27)(49, "p-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function SolutionDirectionComponent_Template_p_button_onClick_49_listener() {
          return ctx.prevPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, SolutionDirectionComponent_p_button_50_Template, 1, 1, "p-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "p-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function SolutionDirectionComponent_Template_p_button_onClick_51_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toggleable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.integration);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_INTEGRATION"))("disabled", !ctx.demandIntakeService.getSDVisibility("integration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_INTEGRATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.dataModelling);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_DATA_MODELLING"))("disabled", !ctx.demandIntakeService.getSDVisibility("dataModelling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_DATA_MODELLING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.adlL1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_ADL_L1"))("disabled", !ctx.demandIntakeService.getSDVisibility("adlL1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_ADL_L1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.adlL2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_ADL_L2"))("disabled", !ctx.demandIntakeService.getSDVisibility("adlL2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_ADL_L2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.gold);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_GOLD"))("disabled", !ctx.demandIntakeService.getSDVisibility("gold"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_GOLD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.mdm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_MDM"))("disabled", !ctx.demandIntakeService.getSDVisibility("mdm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_MDM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.ia);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_IANDA"))("disabled", !ctx.demandIntakeService.getSDVisibility("ia"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_IANDA"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.dataQuality);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_DATA_QUALITY"))("disabled", !ctx.demandIntakeService.getSDVisibility("dataQuality"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_DATA_QUALITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.informatica);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_INFO_PWC"))("disabled", !ctx.demandIntakeService.getSDVisibility("informatica"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_INFO_PWC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sdInfo.azureSynapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pTooltip", ctx.fieldsService.getToolTip("SOLUTION_DIRECTION_AZURE_SYNAPSE"))("disabled", !ctx.demandIntakeService.getSDVisibility("azureSynapse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.fieldsService.getLabel("SOLUTION_DIRECTION_AZURE_SYNAPSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("BACK_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visibleSaveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", ctx.fieldsService.getLabel("NEXT_BUTTON"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.Checkbox, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_fieldset__WEBPACK_IMPORTED_MODULE_17__.Fieldset, _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_6__.ChecklistComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 13437:
/*!*****************************************************************************!*\
  !*** ./src/app/intake-ui/components/view-demands/view-demands.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewDemandsComponent: () => (/* binding */ ViewDemandsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _models_all_demands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/all-demands */ 86457);
/* harmony import */ var _enums_demand_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/demand-category */ 25163);
/* harmony import */ var _enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/demand-status-filter */ 51292);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/demand-status */ 7509);
/* harmony import */ var _models_view_demands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/view-demands */ 79723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ 37440);
/* harmony import */ var _services_demand_intake_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/demand-intake.service */ 96790);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputgroup */ 64661);
/* harmony import */ var primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputgroupaddon */ 1525);






















const _c0 = () => ({
  "min-width": "40rem"
});
function ViewDemandsComponent_ng_template_17_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r0.demandIntakeService.getDemandStatusValueInLower(ctx_r0.selectedDemandStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.demandIntakeService.getDemandStatusValue(ctx_r0.selectedDemandStatus), " ");
  }
}
function ViewDemandsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ViewDemandsComponent_ng_template_17_div_0_Template, 3, 3, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedDemandStatus);
  }
}
function ViewDemandsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r0.demandIntakeService.getDemandStatusValueInLower(option_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.demandIntakeService.getDemandStatusValue(option_r2), " ");
  }
}
function ViewDemandsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "My Demands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r0.viewCurrentMyDemands.length);
  }
}
function ViewDemandsComponent_div_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Demand Intake Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Request Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ViewDemandsComponent_div_24_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 27)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const demand_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", demand_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r4["demandIntakeId"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r4["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 7, demand_r4["requestedDate"], "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r0.demandIntakeService.getDemandStatusValueInLower(demand_r4["status"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.demandIntakeService.getDemandStatusValue(demand_r4["status"]), "");
  }
}
function ViewDemandsComponent_div_24_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "You dont have any demand!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ViewDemandsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("selectionChange", function ViewDemandsComponent_div_24_Template_p_table_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedIntroduction, $event) || (ctx_r0.selectedIntroduction = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onRowSelect", function ViewDemandsComponent_div_24_Template_p_table_onRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onDemandSelect($event, true, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ViewDemandsComponent_div_24_ng_template_2_Template, 12, 0, "ng-template", 13)(3, ViewDemandsComponent_div_24_ng_template_3_Template, 11, 10, "ng-template", 18)(4, ViewDemandsComponent_div_24_ng_template_4_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.viewCurrentMyDemands);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("selection", ctx_r0.selectedIntroduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0))("paginator", false)("rows", 10);
  }
}
function ViewDemandsComponent_p_tabPanel_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Pending Demands");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r0.viewCurrentPendingDemands.length);
  }
}
function ViewDemandsComponent_p_tabPanel_25_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Demand Intake Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Request Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Requested By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ViewDemandsComponent_p_tabPanel_25_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 27)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const demand_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", demand_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r6["demandIntakeId"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r6["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 8, demand_r6["requestedDate"], "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r6["requestedBy"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r0.demandIntakeService.getDemandStatusValueInLower(demand_r6["status"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.demandIntakeService.getDemandStatusValue(demand_r6["status"]), " ");
  }
}
function ViewDemandsComponent_p_tabPanel_25_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Hurray, you dont have any pending demand!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ViewDemandsComponent_p_tabPanel_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("selectionChange", function ViewDemandsComponent_p_tabPanel_25_div_2_Template_p_table_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedIntroduction, $event) || (ctx_r0.selectedIntroduction = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onRowSelect", function ViewDemandsComponent_p_tabPanel_25_div_2_Template_p_table_onRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onDemandSelect($event, false, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ViewDemandsComponent_p_tabPanel_25_div_2_ng_template_2_Template, 15, 0, "ng-template", 13)(3, ViewDemandsComponent_p_tabPanel_25_div_2_ng_template_3_Template, 13, 11, "ng-template", 18)(4, ViewDemandsComponent_p_tabPanel_25_div_2_ng_template_4_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.viewCurrentPendingDemands);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("selection", ctx_r0.selectedIntroduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0))("paginator", true)("rows", 10);
  }
}
function ViewDemandsComponent_p_tabPanel_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-tabPanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ViewDemandsComponent_p_tabPanel_25_ng_template_1_Template, 4, 1, "ng-template", 13)(2, ViewDemandsComponent_p_tabPanel_25_div_2_Template, 5, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.viewCurrentPendingDemands);
  }
}
function ViewDemandsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "My Demands as a Stakeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r0.viewCurrentMyDemandsAsSH.length);
  }
}
function ViewDemandsComponent_div_28_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Demand Intake Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Request Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Requested By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ViewDemandsComponent_div_28_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 27)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const demand_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pSelectableRow", demand_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r8["demandIntakeId"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r8["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 8, demand_r8["requestedDate"], "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](demand_r8["requestedBy"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("align-self-center demand-badge status-" + ctx_r0.demandIntakeService.getDemandStatusValueInLower(demand_r8["status"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.demandIntakeService.getDemandStatusValue(demand_r8["status"]), " ");
  }
}
function ViewDemandsComponent_div_28_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No demands as a stakeholder!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ViewDemandsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("selectionChange", function ViewDemandsComponent_div_28_Template_p_table_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedIntroduction, $event) || (ctx_r0.selectedIntroduction = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onRowSelect", function ViewDemandsComponent_div_28_Template_p_table_onRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onDemandSelect($event, false, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ViewDemandsComponent_div_28_ng_template_2_Template, 15, 0, "ng-template", 13)(3, ViewDemandsComponent_div_28_ng_template_3_Template, 13, 11, "ng-template", 18)(4, ViewDemandsComponent_div_28_ng_template_4_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.viewCurrentMyDemandsAsSH);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("selection", ctx_r0.selectedIntroduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0))("paginator", true)("rows", 10);
  }
}
class ViewDemandsComponent {
  constructor(authService, demandIntakeService, messageService, router, eventService) {
    this.authService = authService;
    this.demandIntakeService = demandIntakeService;
    this.messageService = messageService;
    this.router = router;
    this.eventService = eventService;
    this.allDemands = new _models_all_demands__WEBPACK_IMPORTED_MODULE_0__.AllDemands();
    this.viewDemands = new _models_view_demands__WEBPACK_IMPORTED_MODULE_4__.ViewDemands();
    this.isRequester = false;
    this.allCurrentMyDemands = [];
    this.allCurrentMyDemandsAsSH = [];
    this.allCurrentPendingDemands = [];
    this.viewCurrentMyDemands = [];
    this.viewCurrentMyDemandsAsSH = [];
    this.viewCurrentPendingDemands = [];
  }
  ngOnInit() {
    this.viewAllDemands();
    this.demandCategories = Object.values(_enums_demand_category__WEBPACK_IMPORTED_MODULE_1__.DemandCategory);
    this.selectedDemandCategory = _enums_demand_category__WEBPACK_IMPORTED_MODULE_1__.DemandCategory.ALL;
    this.demandStatusList = Object.keys(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_2__.DemandStatusFilter);
    this.selectedDemandStatus = _enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_2__.DemandStatusFilter.ALL;
    // console.log("ViewDemandsComponent isMyDemand", this.eventService.isMyDemand)
    this.isRequester = this.authService.isRequester();
    if (!this.isRequester) {
      this.eventService.selectedDemandTabIndex = 1;
    }
  }
  viewAllDemands() {
    this.eventService.progressBarEvent.emit(true);
    this.demandIntakeService.getViewAllDemands().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      console.log('View getAllDemands() : Response -> ', response);
      this.viewDemands = response;
      this.onCategoryChange();
      this.errorData = "";
      this.eventService.progressBarEvent.emit(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      console.log('View getAllDemands() : ERROR -> ', error);
      this.errorData = JSON.stringify(error.error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(error);
    })).subscribe();
  }
  onStatusChange() {
    this.selectedDemandCategory = 'ALL';
    this.allCurrentMyDemands = this.allDemands.myDemands;
    this.allCurrentMyDemandsAsSH = this.allDemands.stakeholderDemands;
    this.allCurrentPendingDemands = this.allDemands.pendingDemands;
    this.viewCurrentMyDemands = this.viewDemands.myDemands;
    this.viewCurrentMyDemandsAsSH = this.viewDemands.stakeholderDemands;
    this.viewCurrentPendingDemands = this.viewDemands.pendingDemands;
    if (this.selectedDemandStatus != 'ALL') {
      this.viewCurrentMyDemands = this.viewCurrentMyDemands.filter(item => this.selectedDemandStatus === item.status);
      this.viewCurrentMyDemandsAsSH = this.viewCurrentMyDemandsAsSH.filter(item => this.selectedDemandStatus === item.status);
      this.viewCurrentPendingDemands = this.viewCurrentPendingDemands.filter(item => this.selectedDemandStatus === item.status);
    }
  }
  onCategoryChange() {
    this.selectedDemandStatus = 'ALL';
    // console.log("Tab index -> category", this.eventService.selectedDemandTabIndex, this.selectedDemandCategory)
    let statusList;
    let myStatusList;
    if (this.authService.isRequester()) {
      statusList = [_enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DRAFT];
      myStatusList = [_enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DRAFT, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DM_MODIFICATION, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.CCB_MODIFICATION];
    } else if (this.authService.isDM()) {
      statusList = [_enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.PENDING_WITH_DM, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DM_HOLD, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.PENDING_WITH_CCB];
      myStatusList = [_enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DRAFT, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DM_MODIFICATION, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.CCB_MODIFICATION];
    } else if (this.authService.isCCB()) {
      statusList = [_enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.PENDING_WITH_CCB, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.CCB_HOLD];
      myStatusList = [_enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DRAFT, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.DM_MODIFICATION, _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.CCB_MODIFICATION];
    }
    //filtering demands
    this.allCurrentMyDemands = this.allDemands.myDemands;
    this.allCurrentMyDemandsAsSH = this.allDemands.stakeholderDemands;
    this.allCurrentPendingDemands = this.allDemands.pendingDemands;
    this.viewCurrentMyDemands = this.viewDemands.myDemands;
    this.viewCurrentMyDemandsAsSH = this.viewDemands.stakeholderDemands;
    this.viewCurrentPendingDemands = this.viewDemands.pendingDemands;
    if (this.selectedDemandCategory == _enums_demand_category__WEBPACK_IMPORTED_MODULE_1__.DemandCategory.ACTION_IN_PROGRESS) {
      this.viewCurrentMyDemands = this.viewCurrentMyDemands.filter(item => myStatusList.find(s => s == item.status));
      this.viewCurrentMyDemandsAsSH = this.viewCurrentMyDemandsAsSH.filter(item => myStatusList.find(s => s == item.status));
      this.viewCurrentPendingDemands = this.viewCurrentPendingDemands.filter(item => statusList.find(s => s == item.status));
      let actionInProgressList = [];
      if (this.authService.isDM()) {
        this.allCurrentPendingDemands.filter(item => item.introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.PENDING_WITH_CCB);
        this.allCurrentPendingDemands.forEach(demand => {
          if (demand.introduction.status !== _enums_demand_status__WEBPACK_IMPORTED_MODULE_3__.DemandStatus.PENDING_WITH_CCB) {
            actionInProgressList.push(demand);
          } else {
            let dmList = demand.solutionDirectionInfo.filter(item => {
              if (item.decision != null && item.dmEmail === this.authService.currentUserValue.email && item.decision !== 'APPROVED' && item.decision !== 'REJECTED') {
                actionInProgressList.push(demand);
              }
            });
          }
        });
        // console.log("actionInProgressList", actionInProgressList)
        this.allCurrentPendingDemands = actionInProgressList;
        // console.log("this.allCurrentPendingDemands 1", this.allCurrentPendingDemands)
      }
    } else if (this.selectedDemandCategory == _enums_demand_category__WEBPACK_IMPORTED_MODULE_1__.DemandCategory.ACTION_COMPLETED) {
      this.allCurrentMyDemands = this.allCurrentMyDemands.filter(item => !myStatusList.find(s => s == item.introduction.status));
      this.allCurrentMyDemandsAsSH = this.allCurrentMyDemandsAsSH.filter(item => !myStatusList.find(s => s == item.introduction.status));
      let actionDoneList = [];
      if (this.authService.isDM()) {
        this.allCurrentPendingDemands.forEach(demand => {
          let dmList = demand.solutionDirectionInfo.filter(item => item.dmEmail === this.authService.currentUserValue.email && (item.decision === 'APPROVED' || item.decision === 'REJECTED'));
          if (dmList.length > 0) {
            actionDoneList.push(demand);
          }
        });
        // console.log("actionDoneList", actionDoneList)
        this.allCurrentPendingDemands = actionDoneList;
        // console.log("thi s.allCurrentPendingDemands 1", this.allCurrentPendingDemands)
      } else {
        this.allCurrentPendingDemands = this.allCurrentPendingDemands.filter(item => !statusList.find(s => s == item.introduction.status));
      }
    }
  }
  onTabChange(event) {
    this.eventService.selectedDemandTabIndex = event.index;
  }
  onDemandSelect(event, isMyDemand, isStakeholderDemand) {
    // console.log("selectedDemand, isMyDemand, isStakeholderDemand", this.selectedDemand, isMyDemand, isStakeholderDemand)
    this.eventService.isMyDemand = isMyDemand;
    this.eventService.isStakeholderDemand = isStakeholderDemand;
    this.eventService.isNewDemand = false;
    this.eventService.solutionDirectionValue = new Array();
    // this.eventService.selectedDemandTabIndex = 0;
    this.eventService.selectedEADITabIndex = 0;
    this.eventService.selectedRequirementsTabIndex = 0;
    this.demandIntakeService.getDemandByDemandId(this.selectedIntroduction.demandIntakeId).subscribe(response => {
      console.info("onDemandSelect() : SUCCESS : " + this.selectedIntroduction.demandIntakeId, response);
      this.demandIntakeService.setDemand(response, false);
      this.eventService.progressBarEvent.emit(false);
      this.router.navigate(['/demand-intake/introduction/' + this.selectedIntroduction.demandIntakeId]);
    }, error => {
      console.info("onDemandSelect() : ERROR : " + this.selectedIntroduction.demandIntakeId, error);
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Demand [' + this.selectedDemand.introduction.demandIntakeId + '] Failed to load : with error ' + error.statusText,
        life: 3000
      });
    });
  }
  static #_ = this.ɵfac = function ViewDemandsComponent_Factory(t) {
    return new (t || ViewDemandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_6__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_7__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ViewDemandsComponent,
    selectors: [["app-view-demands"]],
    decls: 29,
    vars: 8,
    consts: [["key", "success"], ["key", "error"], [1, "col-12", "grid"], [1, "col-12", "md:col-12", "lg:col-12"], [1, "card", "m-0", 2, "border-bottom-left-radius", "inherit", "border-bottom-right-radius", "inherit"], [1, "flex", "gap-3", "align-items-center", "p-fluid"], ["styleClass", "w-full", "appendTo", "body", "placeholder", "Filter Demand", 3, "onChange", "ngModelChange", "options", "ngModel"], ["styleClass", "w-full", "placeholder", "Filter Demand", 3, "ngModelChange", "onChange", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["label", "Refresh", "icon", "pi pi-refresh", 3, "onClick"], [1, "card", 2, "border-top-left-radius", "inherit", "border-top-right-radius", "inherit"], [3, "onChange", "activeIndex"], ["pTemplate", "header"], [4, "ngIf"], [1, "flex", "flex-wrap", "gap-2"], ["severity", "success", 3, "value"], ["selectionMode", "single", 3, "selectionChange", "onRowSelect", "value", "selection", "tableStyle", "paginator", "rows"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pSortableColumn", "demandIntakeId", 2, "width", "15%"], ["field", "demandIntakeId"], [2, "width", "40%"], ["pSortableColumn", "requestedDate"], ["field", "requestedDate"], ["pSortableColumn", "status"], ["field", "status"], [3, "pSelectableRow"], [1, "text-900", "font-semibold"], ["colspan", "4", 1, "align-text-center"], ["pSortableColumn", "requestedBy"], ["field", "requestedBy"], ["colspan", "5", 1, "align-text-center"]],
    template: function ViewDemandsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-toast")(1, "p-toast", 0)(2, "p-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "p-inputGroup")(8, "p-inputGroupAddon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Filter Demand by your action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p-inputGroupAddon")(11, "p-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function ViewDemandsComponent_Template_p_dropdown_onChange_11_listener() {
          return ctx.onCategoryChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ViewDemandsComponent_Template_p_dropdown_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.selectedDemandCategory, $event) || (ctx.selectedDemandCategory = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p-inputGroup")(13, "p-inputGroupAddon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Filter Demand by status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p-inputGroupAddon")(16, "p-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ViewDemandsComponent_Template_p_dropdown_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.selectedDemandStatus, $event) || (ctx.selectedDemandStatus = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function ViewDemandsComponent_Template_p_dropdown_onChange_16_listener() {
          return ctx.onStatusChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ViewDemandsComponent_ng_template_17_Template, 1, 1, "ng-template", 8)(18, ViewDemandsComponent_ng_template_18_Template, 2, 3, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function ViewDemandsComponent_Template_p_button_onClick_19_listener() {
          return ctx.viewAllDemands();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 11)(21, "p-tabView", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function ViewDemandsComponent_Template_p_tabView_onChange_21_listener($event) {
          return ctx.onTabChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p-tabPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ViewDemandsComponent_ng_template_23_Template, 4, 1, "ng-template", 13)(24, ViewDemandsComponent_div_24_Template, 5, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, ViewDemandsComponent_p_tabPanel_25_Template, 3, 1, "p-tabPanel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p-tabPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ViewDemandsComponent_ng_template_27_Template, 4, 1, "ng-template", 13)(28, ViewDemandsComponent_div_28_Template, 5, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.demandCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDemandCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDemandStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.demandStatusList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeIndex", ctx.eventService.selectedDemandTabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.viewCurrentMyDemands);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isRequester);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.viewCurrentMyDemandsAsSH);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabPanel, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_18__.SortIcon, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, primeng_badge__WEBPACK_IMPORTED_MODULE_20__.Badge, primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__.Dropdown, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_22__.InputGroup, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_23__.InputGroupAddon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 47593:
/*!****************************************!*\
  !*** ./src/app/intake-ui/constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Constants: () => (/* binding */ Constants)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ 37440);




class Constants {
  constructor(authService) {
    this.authService = authService;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    this.contentType = 'application/json';
    this.x_correlation_id = this.authService.currentLoggedInUser.account.localAccountId + '.' + this.authService.currentLoggedInUser.correlationId;
    this.x_correlation_id = this.authService.currentLoggedInUser.account.localAccountId + '.' + this.authService.currentLoggedInUser.correlationId;
    this.headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': this.contentType,
        'X-Correlation-ID': this.authService.currentLoggedInUser.account.localAccountId + '.' + this.authService.currentLoggedInUser.correlationId,
        'Authorization': 'Bearer ' + this.authService.currentLoggedInUser.accessToken
      })
    };
  }
  static #_ = this.ɵfac = function Constants_Factory(t) {
    return new (t || Constants)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Constants,
    factory: Constants.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 87609:
/*!****************************************************!*\
  !*** ./src/app/intake-ui/enums/approver-domain.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApproverDomain: () => (/* binding */ ApproverDomain)
/* harmony export */ });
var ApproverDomain;
(function (ApproverDomain) {
  ApproverDomain["integration"] = "Integration/ITaaP";
  ApproverDomain["dataModelling"] = "Data Modelling";
  ApproverDomain["adlL1"] = "ADL L1";
  ApproverDomain["adlL2"] = "ADL L2";
  ApproverDomain["gold"] = "Gold";
  ApproverDomain["mdm"] = "MDM";
  ApproverDomain["ia"] = "I&A";
  ApproverDomain["dataQuality"] = "Data Quality";
  ApproverDomain["informatica"] = "Informatica PWC";
  ApproverDomain["azureSynapse"] = "Azure Synapse DWH";
})(ApproverDomain || (ApproverDomain = {}));

/***/ }),

/***/ 45901:
/*!*************************************************!*\
  !*** ./src/app/intake-ui/enums/businessUnit.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessUnit: () => (/* binding */ BusinessUnit)
/* harmony export */ });
var BusinessUnit;
(function (BusinessUnit) {
  BusinessUnit["Precision_Diagnosis"] = "Precision Diagnosis";
  BusinessUnit["Image_Guided_Therapy"] = "Image Guided Therapy";
  BusinessUnit["Enterprise_Informatics"] = "Enterprise Informatics";
  BusinessUnit["Monitoring"] = "Monitoring";
  BusinessUnit["Sleep_Respiratory_Care"] = "Sleep & Respiratory Care";
  BusinessUnit["Personal_Health"] = "Personal Health";
  BusinessUnit["Other"] = "Other";
})(BusinessUnit || (BusinessUnit = {}));

/***/ }),

/***/ 25163:
/*!****************************************************!*\
  !*** ./src/app/intake-ui/enums/demand-category.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandCategory: () => (/* binding */ DemandCategory)
/* harmony export */ });
var DemandCategory;
(function (DemandCategory) {
  DemandCategory["ALL"] = "All";
  DemandCategory["ACTION_COMPLETED"] = "Action Completed";
  DemandCategory["ACTION_IN_PROGRESS"] = "Pending for Your Action";
})(DemandCategory || (DemandCategory = {}));

/***/ }),

/***/ 5334:
/*!***********************************************************!*\
  !*** ./src/app/intake-ui/enums/demand-intake-decision.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandIntakeDecision: () => (/* binding */ DemandIntakeDecision)
/* harmony export */ });
var DemandIntakeDecision;
(function (DemandIntakeDecision) {
  DemandIntakeDecision["APPROVED"] = "Approve";
  DemandIntakeDecision["REJECTED"] = "Rejected";
  DemandIntakeDecision["ON_HOLD"] = "OnHold";
  DemandIntakeDecision["MODIFICATION"] = "Need Modification";
})(DemandIntakeDecision || (DemandIntakeDecision = {}));

/***/ }),

/***/ 12801:
/*!**********************************************************!*\
  !*** ./src/app/intake-ui/enums/demand-reference-tool.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandReferenceTool: () => (/* binding */ DemandReferenceTool)
/* harmony export */ });
var DemandReferenceTool;
(function (DemandReferenceTool) {
  DemandReferenceTool["Power_BI"] = "Power BI";
  DemandReferenceTool["Qlik"] = "Qlik";
  DemandReferenceTool["CRMA"] = "CRMA";
  DemandReferenceTool["Other"] = "Other";
})(DemandReferenceTool || (DemandReferenceTool = {}));

/***/ }),

/***/ 51292:
/*!*********************************************************!*\
  !*** ./src/app/intake-ui/enums/demand-status-filter.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandStatusFilter: () => (/* binding */ DemandStatusFilter)
/* harmony export */ });
var DemandStatusFilter;
(function (DemandStatusFilter) {
  DemandStatusFilter["ALL"] = "All";
  DemandStatusFilter["DRAFT"] = "Draft";
  DemandStatusFilter["PENDING_WITH_DM"] = "Pending with Demand Manager";
  DemandStatusFilter["DM_HOLD"] = "On Hold By DM";
  DemandStatusFilter["PENDING_WITH_CCB"] = "Pending with CCB";
  DemandStatusFilter["CCB_HOLD"] = "On Hold By CCB";
  DemandStatusFilter["ACCEPTED"] = "Accepted";
  DemandStatusFilter["DM_REJECTED"] = "DM Rejected";
  DemandStatusFilter["CCB_REJECTED"] = "CCB Rejected";
  DemandStatusFilter["DM_MODIFICATION"] = "DM Modification";
  DemandStatusFilter["CCB_MODIFICATION"] = "CCB Modification";
})(DemandStatusFilter || (DemandStatusFilter = {}));

/***/ }),

/***/ 7509:
/*!**************************************************!*\
  !*** ./src/app/intake-ui/enums/demand-status.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandStatus: () => (/* binding */ DemandStatus)
/* harmony export */ });
var DemandStatus;
(function (DemandStatus) {
  DemandStatus["DRAFT"] = "DRAFT";
  DemandStatus["PENDING_WITH_DM"] = "PENDING_WITH_DM";
  DemandStatus["DM_HOLD"] = "DM_HOLD";
  DemandStatus["PENDING_WITH_CCB"] = "PENDING_WITH_CCB";
  DemandStatus["CCB_HOLD"] = "CCB_HOLD";
  DemandStatus["ACCEPTED"] = "ACCEPTED";
  DemandStatus["DM_REJECTED"] = "DM_REJECTED";
  DemandStatus["CCB_REJECTED"] = "CCB_REJECTED";
  DemandStatus["DM_MODIFICATION"] = "DM_MODIFICATION";
  DemandStatus["CCB_MODIFICATION"] = "CCB_MODIFICATION";
})(DemandStatus || (DemandStatus = {}));

/***/ }),

/***/ 36408:
/*!*************************************************!*\
  !*** ./src/app/intake-ui/enums/loadStrategy.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadStrategy: () => (/* binding */ LoadStrategy)
/* harmony export */ });
var LoadStrategy;
(function (LoadStrategy) {
  LoadStrategy["FULL"] = "Full";
  LoadStrategy["INCREMENTAL"] = "Incremental";
  LoadStrategy["INCREMENTAL_CATCHUP_FULL"] = "Incremental With Catchup Full";
})(LoadStrategy || (LoadStrategy = {}));

/***/ }),

/***/ 30089:
/*!*******************************************!*\
  !*** ./src/app/intake-ui/enums/market.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Market: () => (/* binding */ Market)
/* harmony export */ });
var Market;
(function (Market) {
  Market["Global"] = "Global";
  Market["North_America"] = "North America";
  Market["Greater_China"] = "Greater China";
  Market["APAC"] = "APAC";
  Market["Indian_Subcontinent"] = "Indian Subcontinent";
  Market["Latin_America"] = "Latin America";
  Market["Middle_East_T\u00FCrkiye_Africa"] = "Middle East, T\u00FCrkiye & Africa";
  Market["Other"] = "Other";
})(Market || (Market = {}));

/***/ }),

/***/ 35482:
/*!*****************************************************!*\
  !*** ./src/app/intake-ui/enums/refreshFrequency.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshFrequency: () => (/* binding */ RefreshFrequency)
/* harmony export */ });
var RefreshFrequency;
(function (RefreshFrequency) {
  RefreshFrequency["REAL_TIME"] = "Real Time";
  RefreshFrequency["NEAR_REAL_TIME"] = "Near Real Time";
  RefreshFrequency["HOURLY"] = "Hourly";
  RefreshFrequency["EVENRY_TWO_HOURS"] = "Every 2 Hours";
  RefreshFrequency["EVENRY_FOUR_HOURS"] = "Every 4 Hours";
  RefreshFrequency["EVENRY_Six_HOURS"] = "Every 6 Hours";
  RefreshFrequency["DAILY"] = "Daily";
  RefreshFrequency["WEEKLY"] = "Weekly";
  RefreshFrequency["BI_WEEKLY"] = "Bi-Weekly";
  RefreshFrequency["MONTHLY"] = "Monthly";
  RefreshFrequency["QUARTERLY"] = "Quarterly";
  RefreshFrequency["CUSTOM"] = "Custom";
})(RefreshFrequency || (RefreshFrequency = {}));

/***/ }),

/***/ 98295:
/*!****************************************************!*\
  !*** ./src/app/intake-ui/enums/requesterDomain.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequesterDomain: () => (/* binding */ RequesterDomain)
/* harmony export */ });
var RequesterDomain;
(function (RequesterDomain) {
  RequesterDomain["Digital_IT"] = "Digital IT";
  RequesterDomain["Commercial_IT"] = "Commercial IT";
  RequesterDomain["SC_M_IT"] = "SC&M IT";
  RequesterDomain["Innovation_Engineering"] = "Innovation & Engineering";
  RequesterDomain["Group_Functions"] = "Group Functions";
  RequesterDomain["EADI"] = "EADI";
  RequesterDomain["Services_Solutions_IT"] = "Services Solutions IT";
  RequesterDomain["Hyper_Automation"] = "Hyperautomation";
  RequesterDomain["MA"] = "M&A";
  RequesterDomain["Software_Vendor_Management"] = "Software & Vendor Management";
})(RequesterDomain || (RequesterDomain = {}));

/***/ }),

/***/ 73799:
/*!***********************************************!*\
  !*** ./src/app/intake-ui/intake-ui.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntakeUIComponentsModule: () => (/* binding */ IntakeUIComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/confirmpopup */ 22346);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/listbox */ 69607);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/menubar */ 15728);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/splitter */ 71369);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/splitbutton */ 59520);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/autofocus */ 17159);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/message */ 99605);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/avatar */ 46095);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/blockui */ 42897);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/overlay */ 33576);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/overlaypanel */ 34198);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/fileupload */ 13209);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/timeline */ 84357);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/tree */ 18092);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/breadcrumb */ 65475);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/accordion */ 45206);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/editor */ 75439);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/inplace */ 32898);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/scrollpanel */ 66831);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/avatargroup */ 27952);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/chip */ 35678);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/tabmenu */ 94132);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _components_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/attachment/attachment.component */ 25415);
/* harmony import */ var _components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/demand-intake/demand-intake.component */ 95595);
/* harmony import */ var _components_requester_requester_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/requester/requester.component */ 88363);
/* harmony import */ var _components_requirements_requirements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/requirements/requirements.component */ 38533);
/* harmony import */ var _components_solution_direction_solution_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/solution-direction/solution-direction.component */ 45083);
/* harmony import */ var _components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checklist/checklist.component */ 93787);
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/introduction/introduction.component */ 35409);
/* harmony import */ var _components_demandmanager_demandmanager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/demandmanager/demandmanager.component */ 47943);
/* harmony import */ var _components_ccb_ccb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ccb/ccb.component */ 1115);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ 9117);
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/logout/logout.component */ 41079);
/* harmony import */ var _components_dmcrud_dmcrud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dmcrud/dmcrud.component */ 13859);
/* harmony import */ var _components_ccbcrud_ccbcrud_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ccbcrud/ccbcrud.component */ 59447);
/* harmony import */ var _components_view_demands_view_demands_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/view-demands/view-demands.component */ 13437);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/steps */ 96997);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/panelmenu */ 78635);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/multiselect */ 92159);
/* harmony import */ var primeng_stepper__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/stepper */ 41003);
/* harmony import */ var primeng_inputotp__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/inputotp */ 86507);
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/confirm/confirm.component */ 86811);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 1499);
/* harmony import */ var primeng_buttongroup__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/buttongroup */ 97937);
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/report/report.component */ 82613);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var _components_field_management_field_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/field-management/field-management.component */ 80793);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/inputgroup */ 64661);
/* harmony import */ var primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/inputgroupaddon */ 1525);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var _components_graph_email_autocomplete_email_auto_complete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/graph/email-autocomplete/email-auto-complete.component */ 55905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);


















































































class IntakeUIComponentsModule {
  static #_ = this.ɵfac = function IntakeUIComponentsModule_Factory(t) {
    return new (t || IntakeUIComponentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: IntakeUIComponentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, primeng_card__WEBPACK_IMPORTED_MODULE_23__.CardModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_24__.CalendarModule, primeng_button__WEBPACK_IMPORTED_MODULE_25__.ButtonModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_26__.ListboxModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_27__.RippleModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_28__.MenubarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__.InputTextModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_30__.TabViewModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_31__.SplitterModule, primeng_divider__WEBPACK_IMPORTED_MODULE_32__.DividerModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_33__.SplitButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_34__.CheckboxModule, primeng_table__WEBPACK_IMPORTED_MODULE_35__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_36__.ToolbarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_37__.DialogModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__.InputTextareaModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_39__.AutoFocusModule, primeng_toast__WEBPACK_IMPORTED_MODULE_40__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_41__.MessagesModule, primeng_message__WEBPACK_IMPORTED_MODULE_42__.MessageModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_43__.RadioButtonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_44__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_45__.AvatarModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_46__.BlockUIModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_47__.OverlayModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_48__.ConfirmDialogModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_49__.OverlayPanelModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_50__.FileUploadModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_51__.ConfirmPopupModule, primeng_tag__WEBPACK_IMPORTED_MODULE_52__.TagModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_53__.DropdownModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_54__.TimelineModule, primeng_tree__WEBPACK_IMPORTED_MODULE_55__.TreeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_56__.BreadcrumbModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_57__.AccordionModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_58__.SidebarModule, primeng_editor__WEBPACK_IMPORTED_MODULE_59__.EditorModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_60__.AutoCompleteModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_61__.InplaceModule, primeng_chart__WEBPACK_IMPORTED_MODULE_62__.ChartModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__.ScrollPanelModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_64__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_65__.ProgressSpinnerModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_66__.TabMenuModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_67__.InputNumberModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_68__.AvatarGroupModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_69__.SelectButtonModule, primeng_chip__WEBPACK_IMPORTED_MODULE_70__.ChipModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_71__.FieldsetModule, primeng_steps__WEBPACK_IMPORTED_MODULE_72__.StepsModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_73__.PanelMenuModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_74__.MultiSelectModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_65__.ProgressSpinnerModule, primeng_stepper__WEBPACK_IMPORTED_MODULE_75__.StepperModule, primeng_inputotp__WEBPACK_IMPORTED_MODULE_76__.InputOtpModule, primeng_buttongroup__WEBPACK_IMPORTED_MODULE_77__.ButtonGroupModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_79__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_80__.InputGroupAddonModule, primeng_panel__WEBPACK_IMPORTED_MODULE_81__.PanelModule, _components_graph_email_autocomplete_email_auto_complete_component__WEBPACK_IMPORTED_MODULE_18__.EmailAutoCompleteComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](IntakeUIComponentsModule, {
    declarations: [_components_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_0__.AttachmentComponent, _components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeComponent, _components_requester_requester_component__WEBPACK_IMPORTED_MODULE_2__.RequesterComponent, _components_requirements_requirements_component__WEBPACK_IMPORTED_MODULE_3__.RequirementsComponent, _components_solution_direction_solution_direction_component__WEBPACK_IMPORTED_MODULE_4__.SolutionDirectionComponent, _components_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_0__.AttachmentComponent, _components_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_5__.ChecklistComponent, _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__.IntroductionComponent, _components_demandmanager_demandmanager_component__WEBPACK_IMPORTED_MODULE_7__.DemandManagerComponent, _components_ccb_ccb_component__WEBPACK_IMPORTED_MODULE_8__.CCBComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__.LogoutComponent, _components_dmcrud_dmcrud_component__WEBPACK_IMPORTED_MODULE_11__.DMCRUDComponent, _components_ccbcrud_ccbcrud_component__WEBPACK_IMPORTED_MODULE_12__.CCBCRUDComponent, _components_view_demands_view_demands_component__WEBPACK_IMPORTED_MODULE_13__.ViewDemandsComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.DashboardComponent, _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmComponent, _components_report_report_component__WEBPACK_IMPORTED_MODULE_16__.ReportComponent, _components_field_management_field_management_component__WEBPACK_IMPORTED_MODULE_17__.FieldManagementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, primeng_card__WEBPACK_IMPORTED_MODULE_23__.CardModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_24__.CalendarModule, primeng_button__WEBPACK_IMPORTED_MODULE_25__.ButtonModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_26__.ListboxModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_27__.RippleModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_28__.MenubarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__.InputTextModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_30__.TabViewModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_31__.SplitterModule, primeng_divider__WEBPACK_IMPORTED_MODULE_32__.DividerModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_33__.SplitButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_34__.CheckboxModule, primeng_table__WEBPACK_IMPORTED_MODULE_35__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_36__.ToolbarModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_37__.DialogModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_38__.InputTextareaModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_39__.AutoFocusModule, primeng_toast__WEBPACK_IMPORTED_MODULE_40__.ToastModule, primeng_messages__WEBPACK_IMPORTED_MODULE_41__.MessagesModule, primeng_message__WEBPACK_IMPORTED_MODULE_42__.MessageModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_43__.RadioButtonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_44__.BadgeModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_45__.AvatarModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_46__.BlockUIModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_47__.OverlayModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_48__.ConfirmDialogModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_49__.OverlayPanelModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_50__.FileUploadModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_51__.ConfirmPopupModule, primeng_tag__WEBPACK_IMPORTED_MODULE_52__.TagModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_53__.DropdownModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_54__.TimelineModule, primeng_tree__WEBPACK_IMPORTED_MODULE_55__.TreeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_56__.BreadcrumbModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_57__.AccordionModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_58__.SidebarModule, primeng_editor__WEBPACK_IMPORTED_MODULE_59__.EditorModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_60__.AutoCompleteModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_61__.InplaceModule, primeng_chart__WEBPACK_IMPORTED_MODULE_62__.ChartModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__.ScrollPanelModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_64__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_65__.ProgressSpinnerModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_66__.TabMenuModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_67__.InputNumberModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_68__.AvatarGroupModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_69__.SelectButtonModule, primeng_chip__WEBPACK_IMPORTED_MODULE_70__.ChipModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_71__.FieldsetModule, primeng_steps__WEBPACK_IMPORTED_MODULE_72__.StepsModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_73__.PanelMenuModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_74__.MultiSelectModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_65__.ProgressSpinnerModule, primeng_stepper__WEBPACK_IMPORTED_MODULE_75__.StepperModule, primeng_inputotp__WEBPACK_IMPORTED_MODULE_76__.InputOtpModule, primeng_buttongroup__WEBPACK_IMPORTED_MODULE_77__.ButtonGroupModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_79__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_80__.InputGroupAddonModule, primeng_panel__WEBPACK_IMPORTED_MODULE_81__.PanelModule, _components_graph_email_autocomplete_email_auto_complete_component__WEBPACK_IMPORTED_MODULE_18__.EmailAutoCompleteComponent]
  });
})();

/***/ }),

/***/ 36239:
/*!*******************************************!*\
  !*** ./src/app/intake-ui/models/aldl1.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADLL1: () => (/* binding */ ADLL1)
/* harmony export */ });
class ADLL1 {
  constructor() {
    this.dataDemandType = '';
    this.sourceSystemName = '';
    this.kernelSid = '';
    this.database = '';
    this.module = '';
    this.instance = '';
    this.tableName = '';
    this.capability = '';
    this.functionality = '';
    this.sourceEmail = '';
    this.dataSetName = '';
    this.dataSetOwner = '';
    this.frequency = '';
    this.loadStrategy = '';
    this.extractionlogic = '';
    this.tableAccessInfo = '';
    this.history = '';
    this.additionalDocAttached = false;
  }
}

/***/ }),

/***/ 59722:
/*!*******************************************!*\
  !*** ./src/app/intake-ui/models/aldl2.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADLL2: () => (/* binding */ ADLL2)
/* harmony export */ });
class ADLL2 {
  constructor() {
    this.architectureReview = '';
    this.certifiedDataModel = false;
    this.existingDataModel = false;
    this.newDataModel = false;
    this.leadBioDataModel = false;
  }
}

/***/ }),

/***/ 86457:
/*!*************************************************!*\
  !*** ./src/app/intake-ui/models/all-demands.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllDemands: () => (/* binding */ AllDemands)
/* harmony export */ });
class AllDemands {}

/***/ }),

/***/ 77566:
/*!**********************************************!*\
  !*** ./src/app/intake-ui/models/approver.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Approver: () => (/* binding */ Approver)
/* harmony export */ });
class Approver {
  constructor() {
    this.email = '';
    this.status = '';
    this.role = '';
    this.domain = '';
    this.createdDate = new Date();
    this.updatedDate = new Date();
  }
}

/***/ }),

/***/ 37396:
/*!*********************************************************!*\
  !*** ./src/app/intake-ui/models/architect-alignment.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArchitectAlignment: () => (/* binding */ ArchitectAlignment)
/* harmony export */ });
class ArchitectAlignment {
  constructor() {
    this.email = '';
    this.comment = '';
  }
}

/***/ }),

/***/ 80322:
/*!***************************************************!*\
  !*** ./src/app/intake-ui/models/azure-synapse.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AzureSynapse: () => (/* binding */ AzureSynapse)
/* harmony export */ });
class AzureSynapse {
  constructor() {
    this.azureRequirements = '';
  }
}

/***/ }),

/***/ 53707:
/*!*****************************************!*\
  !*** ./src/app/intake-ui/models/ccb.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCB: () => (/* binding */ CCB)
/* harmony export */ });
class CCB {
  constructor() {
    this.decisionDate = new Date();
    this.decision = '';
    this.remarks = '';
    this.decisionBy = '';
    this.isCrossFunctional = false;
  }
}

/***/ }),

/***/ 42879:
/*!************************************************!*\
  !*** ./src/app/intake-ui/models/data-model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataModel: () => (/* binding */ DataModel)
/* harmony export */ });
class DataModel {
  constructor() {
    this.dataModelType = '';
    this.dataDomain = '';
    this.modelName = '';
    this.modelType = '';
    this.requestingProgram = '';
    this.isAPIRelevant = false;
    this.relevantITApplication = '';
    this.businessDataObject = '';
    this.isMappingReqProvided = false;
  }
}

/***/ }),

/***/ 33515:
/*!**************************************************!*\
  !*** ./src/app/intake-ui/models/data-quality.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataQuality: () => (/* binding */ DataQuality)
/* harmony export */ });
class DataQuality {
  constructor() {
    this.dataCleaningSpocName = '';
    this.dataCleaningSpocEmail = '';
    this.bpoName = '';
    this.bpoEmail = '';
    this.exceptions = '';
    this.businessKPIImpacted = '';
    this.dataRuleDescription = '';
    this.processPEPFInScope = '';
    this.requirementType = '';
    this.market = '';
  }
}

/***/ }),

/***/ 18980:
/*!********************************************!*\
  !*** ./src/app/intake-ui/models/demand.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Demand: () => (/* binding */ Demand)
/* harmony export */ });
/* harmony import */ var _architect_alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./architect-alignment */ 37396);
/* harmony import */ var _ccb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ccb */ 53707);
/* harmony import */ var _dm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dm */ 83960);
/* harmony import */ var _eadi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eadi */ 29102);
/* harmony import */ var _introduction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introduction */ 73675);
/* harmony import */ var _requester_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requester-info */ 78850);
/* harmony import */ var _requirement_compliance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requirement-compliance */ 81902);
/* harmony import */ var _requirement_functional__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requirement-functional */ 91360);
/* harmony import */ var _requirement_non_functional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requirement-non-functional */ 68398);









class Demand {
  constructor() {
    this.introduction = new _introduction__WEBPACK_IMPORTED_MODULE_4__.Introduction();
    this.architectAlignmentInfo = Array(new _architect_alignment__WEBPACK_IMPORTED_MODULE_0__.ArchitectAlignment());
    this.requesterInfo = new _requester_info__WEBPACK_IMPORTED_MODULE_5__.RequesterInfo();
    this.requirementFunctionalInfo = new _requirement_functional__WEBPACK_IMPORTED_MODULE_7__.RequirementFunctional();
    this.requirementNonFunctionalInfo = new _requirement_non_functional__WEBPACK_IMPORTED_MODULE_8__.RequirementNonFunctional();
    this.requirementComplianceInfo = new _requirement_compliance__WEBPACK_IMPORTED_MODULE_6__.RequirementCompliance();
    this.solutionDirectionInfo = [{
      solution: 'integration',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'dataModelling',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'adlL1',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'adlL2',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'gold',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'mdm',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'ia',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'dataQuality',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'informatica',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }, {
      solution: 'azureSynapse',
      value: false,
      dmEmail: '',
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }];
    this.eADIInfo = new _eadi__WEBPACK_IMPORTED_MODULE_3__.EADI();
    this.demandManagerInfo = new _dm__WEBPACK_IMPORTED_MODULE_2__.DM();
    this.ccbInfo = new _ccb__WEBPACK_IMPORTED_MODULE_1__.CCB();
    this.attachmentInfo = Array();
  }
}

/***/ }),

/***/ 83960:
/*!****************************************!*\
  !*** ./src/app/intake-ui/models/dm.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DM: () => (/* binding */ DM)
/* harmony export */ });
class DM {
  constructor() {
    this.decisionDate = new Date();
    this.decision = '';
    this.remarks = '';
    this.decisionBy = '';
    this.domain = [];
  }
}

/***/ }),

/***/ 29102:
/*!******************************************!*\
  !*** ./src/app/intake-ui/models/eadi.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EADI: () => (/* binding */ EADI)
/* harmony export */ });
/* harmony import */ var _aldl1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aldl1 */ 36239);
/* harmony import */ var _aldl2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aldl2 */ 59722);
/* harmony import */ var _azure_synapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./azure-synapse */ 80322);
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-model */ 42879);
/* harmony import */ var _data_quality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-quality */ 33515);
/* harmony import */ var _gold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gold */ 61573);
/* harmony import */ var _ia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ia */ 95957);
/* harmony import */ var _informatica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./informatica */ 24616);
/* harmony import */ var _mdm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mdm */ 7199);









class EADI {
  constructor() {
    this.platformsCapabilityDef = '';
    this.producerAndConsumerSystems = '';
    this.capabilityAPI = '';
    this.dataModelDefinition = '';
    this.demandDocAttached = '';
    this.additionalInfo = '';
    this.dataModel = new _data_model__WEBPACK_IMPORTED_MODULE_3__.DataModel();
    this.dataQuality = new _data_quality__WEBPACK_IMPORTED_MODULE_4__.DataQuality();
    this.adlL1 = new _aldl1__WEBPACK_IMPORTED_MODULE_0__.ADLL1();
    this.adlL2 = new _aldl2__WEBPACK_IMPORTED_MODULE_1__.ADLL2();
    this.ia = new _ia__WEBPACK_IMPORTED_MODULE_6__.IA();
    this.gold = new _gold__WEBPACK_IMPORTED_MODULE_5__.Gold();
    this.informatica = new _informatica__WEBPACK_IMPORTED_MODULE_7__.Informatica();
    this.mdm = new _mdm__WEBPACK_IMPORTED_MODULE_8__.MDM();
    this.azureSynapse = new _azure_synapse__WEBPACK_IMPORTED_MODULE_2__.AzureSynapse();
  }
}

/***/ }),

/***/ 8666:
/*!*********************************************************!*\
  !*** ./src/app/intake-ui/models/field-label-tooltip.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldMgmt: () => (/* binding */ FieldMgmt)
/* harmony export */ });
class FieldMgmt {
  constructor() {
    this.key = '';
    this.label = '';
    this.tooltip = '';
    this.mandatory = false;
  }
}

/***/ }),

/***/ 61573:
/*!******************************************!*\
  !*** ./src/app/intake-ui/models/gold.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gold: () => (/* binding */ Gold)
/* harmony export */ });
class Gold {
  constructor() {
    this.kpiRequired = false;
    this.aggregation = false;
    this.aggregationInfo = '';
    this.workbench = '';
  }
}

/***/ }),

/***/ 95957:
/*!****************************************!*\
  !*** ./src/app/intake-ui/models/ia.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IA: () => (/* binding */ IA)
/* harmony export */ });
class IA {
  constructor() {
    this.location = '';
    this.newReportRequired = false;
    this.reportDescription = '';
    this.designReportAttached = false;
    this.reportUsage = '';
    this.reportType = '';
    this.reportTool = '';
    this.cdmConsumed = false;
    this.cdmConsumedText = '';
    this.datasetConsumed = false;
    this.datasetConsumedText = '';
  }
}

/***/ }),

/***/ 24616:
/*!*************************************************!*\
  !*** ./src/app/intake-ui/models/informatica.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Informatica: () => (/* binding */ Informatica)
/* harmony export */ });
class Informatica {
  constructor() {
    this.etlRequirements = '';
  }
}

/***/ }),

/***/ 73675:
/*!**************************************************!*\
  !*** ./src/app/intake-ui/models/introduction.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Introduction: () => (/* binding */ Introduction)
/* harmony export */ });
class Introduction {
  constructor() {
    this.demandIntakeId = 0;
    this.title = '';
    this.description = '';
    this.requestedBy = '';
    this.isDocReferred = false;
    this.architectAligned = false;
    this.updatedBy = '';
    this.requestedDate = new Date();
  }
}

/***/ }),

/***/ 7199:
/*!*****************************************!*\
  !*** ./src/app/intake-ui/models/mdm.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDM: () => (/* binding */ MDM)
/* harmony export */ });
class MDM {
  constructor() {
    this.bpdh = '';
    this.pdh = '';
    this.fordh = '';
  }
}

/***/ }),

/***/ 96213:
/*!****************************************************!*\
  !*** ./src/app/intake-ui/models/report-request.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportRequest: () => (/* binding */ ReportRequest)
/* harmony export */ });
class ReportRequest {
  constructor() {
    this.raisedBy = '';
    // stakeholderList: string[] = [];
    this.fromDate = new Date();
    this.toDate = new Date();
    this.status = '';
    this.solutionDirectionList = [];
    this.isCrossFunctional = false;
  }
}

/***/ }),

/***/ 78850:
/*!****************************************************!*\
  !*** ./src/app/intake-ui/models/requester-info.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequesterInfo: () => (/* binding */ RequesterInfo)
/* harmony export */ });
/* harmony import */ var _spoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spoc */ 78854);

class RequesterInfo {
  constructor() {
    this.isAnotherRequester = false;
    this.requestedBy = '';
    this.requesterRole = '';
    this.program = '';
    this.isDemandPOC = false;
    this.project = '';
    this.domain = '';
    this.requestedDate = new Date();
    this.businessUnit = [];
    this.market = [];
    this.cpAPI = false;
    this.cpReport = false;
    this.cpTransactionPlatform = false;
    this.cpDataModel = false;
    this.cpDataProduct = false;
    this.approvedBudget = false;
    this.clarityProjectId = "";
    this.spoc = Array(new _spoc__WEBPACK_IMPORTED_MODULE_0__.Spoc());
  }
}

/***/ }),

/***/ 81902:
/*!************************************************************!*\
  !*** ./src/app/intake-ui/models/requirement-compliance.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequirementCompliance: () => (/* binding */ RequirementCompliance)
/* harmony export */ });
class RequirementCompliance {
  constructor() {
    this.sox = false;
    this.security = false;
    this.privacy = false;
    this.qms = false;
    this.valgEntityId = "";
    this.qsia = false;
    this.compliance = [{
      key: '',
      value: false
    }, {
      key: '',
      value: false
    }, {
      key: '',
      value: false
    }];
  }
}

/***/ }),

/***/ 91360:
/*!************************************************************!*\
  !*** ./src/app/intake-ui/models/requirement-functional.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequirementFunctional: () => (/* binding */ RequirementFunctional)
/* harmony export */ });
class RequirementFunctional {
  constructor() {
    this.statement = '';
    this.scope = '';
    this.businessValue = '';
    this.goLiveApproach = 'oneTime';
    this.bglDate = new Date();
    this.sourceDetails = '';
    this.targetDetails = '';
    this.mappingRequirement = '';
  }
}

/***/ }),

/***/ 68398:
/*!****************************************************************!*\
  !*** ./src/app/intake-ui/models/requirement-non-functional.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequirementNonFunctional: () => (/* binding */ RequirementNonFunctional)
/* harmony export */ });
class RequirementNonFunctional {
  constructor() {
    this.msgClassification = '';
    this.msgSize = '';
    this.volume = '';
    this.timing = '';
    this.maxLatency = '';
    this.businessCriticality = '';
    this.dataPrivacy = '';
    this.transformation = false;
    this.routing = false;
    this.protocolConversion = false;
    this.msgSequencing = false;
    this.trackNTrace = false;
    this.persistence = false;
    this.senderTechnicalDetails = '';
    this.receiverTechnicalDetails = '';
    this.refreshFrequency = '';
    this.dimentionType = '';
    this.snapshot = '';
  }
}

/***/ }),

/***/ 45272:
/*!********************************************************!*\
  !*** ./src/app/intake-ui/models/solution-direction.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolutionDirection: () => (/* binding */ SolutionDirection)
/* harmony export */ });
class SolutionDirection {
  constructor() {
    this.integration = false;
    this.dataModelling = false;
    this.adlL1 = false;
    this.adlL2 = false;
    this.gold = false;
    this.mdm = false;
    this.ia = false;
    this.dataQuality = false;
    this.informatica = false;
    this.azureSynapse = false;
  }
}

/***/ }),

/***/ 78854:
/*!******************************************!*\
  !*** ./src/app/intake-ui/models/spoc.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spoc: () => (/* binding */ Spoc)
/* harmony export */ });
class Spoc {
  constructor() {
    this.email = '';
    this.role = '';
    this.date = new Date();
    this.remarks = '';
  }
}

/***/ }),

/***/ 79723:
/*!**************************************************!*\
  !*** ./src/app/intake-ui/models/view-demands.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewDemands: () => (/* binding */ ViewDemands)
/* harmony export */ });
class ViewDemands {}

/***/ }),

/***/ 5227:
/*!*****************************************************!*\
  !*** ./src/app/intake-ui/services/admin.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _models_approver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/approver */ 77566);
/* harmony import */ var _enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/approver-domain */ 87609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ 47593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ 37440);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.service */ 70404);











class AdminService {
  constructor(http, constants, router, authService, messageService, eventService) {
    this.http = http;
    this.constants = constants;
    this.router = router;
    this.authService = authService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    this.approver = new _models_approver__WEBPACK_IMPORTED_MODULE_1__.Approver();
  }
  getAllDM() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/dm';
    return this.http.get(url, this.constants.headerOptions);
  }
  getAllCCB() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/ccb';
    return this.http.get(url, this.constants.headerOptions);
  }
  updateField(field) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field';
    return this.http.post(url, field, this.constants.headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      this.eventService.progressBarEvent.emit(false);
      return response;
    }));
  }
  addField(field) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field';
    return this.http.post(url, field, this.constants.headerOptions);
  }
  getAllFields() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field';
    return this.http.get(url, this.constants.headerOptions);
  }
  validateApproverRequest() {
    if (this.approver.email == '' || this.approver.status == '' || !this.eventService.checkEmailValue(this.approver.email)) {
      return false;
    }
    return true;
  }
  addApprover(role) {
    this.approver.role = role;
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/approver';
    return this.http.post(url, this.approver, this.constants.headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      console.log("addApprover() : Response -> ", response);
      this.eventService.progressBarEvent.emit(false);
      return response;
    }));
  }
  updateApprover(role) {
    this.approver.role = role;
    // console.log("upadate approver", this.approver)
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/approver';
    return this.http.patch(url, this.approver, this.constants.headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      console.log("updateApprover() : Response -> ", response);
      this.eventService.progressBarEvent.emit(false);
      return response;
    }));
  }
  getDMDomainValue(key) {
    const domain = Object.keys(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain).indexOf(key);
    let s = Object.values(_enums_approver_domain__WEBPACK_IMPORTED_MODULE_2__.ApproverDomain)[domain];
    return s;
  }
  setApprover(user) {
    this.approver.approverId = user.approverId;
    this.approver.email = user.email;
    this.approver.status = user.status;
    this.approver.role = user.role;
    this.approver.domain = this.getDMDomainValue(user.domain);
    this.approver.createdDate = user.createdDate;
    this.approver.updatedDate = user.updatedDate;
  }
  static #_ = this.ɵfac = function AdminService_Factory(t) {
    return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_3__.Constants), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: AdminService,
    factory: AdminService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30690:
/*!**********************************************************!*\
  !*** ./src/app/intake-ui/services/auth-guard.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 37440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.checkAuth(state);
  }
  canActivateChild(route, state) {
    return this.checkAuth(state);
  }
  checkAuth(state) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      currentUser.expireTime = new Date(currentUser.expireTime);
    }
    if (currentUser && currentUser.isAuthenticated && new Date().getTime() < currentUser.expireTime.getTime()) {
      return true;
    } else {
      // alert("Your token has expired, please login to continue.")
      this.router.navigate(['/login']);
      return false;
    }
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 58889:
/*!******************************************************!*\
  !*** ./src/app/intake-ui/services/charts.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsService: () => (/* binding */ ChartsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 47593);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.service */ 70404);






class ChartsService {
  constructor(http, constants, eventService) {
    this.http = http;
    this.constants = constants;
    this.eventService = eventService;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getYearlyChart(from, to) {
    let url = this.baseUrl + '/common/demand-intake/chart/year';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'fromDate': from.toString(),
        'toDate': to.toString()
      }
    };
    return this.http.get(url, headerOptions);
  }
  getQuarterlyChart() {
    let url = this.baseUrl + '/common/demand-intake/chart/quarterly';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      })
    };
    return this.http.get(url, headerOptions);
  }
  getStageChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'STAGEWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get(url, headerOptions);
  }
  getQuaterChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'QUATERWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get(url, headerOptions);
  }
  static #_ = this.ɵfac = function ChartsService_Factory(t) {
    return new (t || ChartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_1__.Constants), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ChartsService,
    factory: ChartsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96790:
/*!*************************************************************!*\
  !*** ./src/app/intake-ui/services/demand-intake.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemandIntakeService: () => (/* binding */ DemandIntakeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _models_demand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/demand */ 18980);
/* harmony import */ var _models_dm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/dm */ 83960);
/* harmony import */ var _models_ccb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ccb */ 53707);
/* harmony import */ var _models_eadi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/eadi */ 29102);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/demand-status-filter */ 51292);
/* harmony import */ var _models_architect_alignment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/architect-alignment */ 37396);
/* harmony import */ var _enums_demand_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/demand-status */ 7509);
/* harmony import */ var _models_spoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/spoc */ 78854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ 47593);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.service */ 37440);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event.service */ 70404);



















class DemandIntakeService {
  constructor(http, router, constants, authService, messageService, eventService) {
    this.http = http;
    this.router = router;
    this.constants = constants;
    this.authService = authService;
    this.messageService = messageService;
    this.eventService = eventService;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    this.demandInformation = new _models_demand__WEBPACK_IMPORTED_MODULE_1__.Demand();
    this.attachments = Array(5);
    this.dmActionDone = false;
  }
  isCurrentLoggedUserStakeholder() {
    let isSH = false;
    this.demandInformation.requesterInfo.spoc.forEach(spoc => {
      if (spoc.email === this.authService.currentUserValue.email) {
        isSH = true;
      }
    });
    return isSH;
  }
  getDemandInformation() {
    return this.demandInformation;
  }
  setDemandInformation(demandInformation) {
    this.demandInformation = demandInformation;
  }
  setDemand(demand, isNew) {
    this.isNew = isNew;
    if (isNew) {
      this.attachments = [];
      this.demandInformation = new _models_demand__WEBPACK_IMPORTED_MODULE_1__.Demand();
    } else {
      if (this.authService.isDM() || this.authService.isCCB()) {
        if (demand.demandManagerInfo == null) {
          demand.demandManagerInfo = new _models_dm__WEBPACK_IMPORTED_MODULE_2__.DM();
        }
        if (demand.demandManagerInfo.decisionDate != null) {
          demand.demandManagerInfo.decisionDate = new Date(demand.demandManagerInfo.decisionDate);
        }
        if (demand.solutionDirectionInfo.length == 0) {
          demand.solutionDirectionInfo = [{
            solution: 'integration',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'dataModelling',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'adlL1',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'adlL2',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'gold',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'mdm',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'ia',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'dataQuality',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'informatica',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }, {
            solution: 'azureSynapse',
            value: false,
            dmEmail: '',
            decisionDate: new Date(),
            decision: '',
            remarks: ''
          }];
        }
        if (demand.eADIInfo == null) {
          demand.eADIInfo = new _models_eadi__WEBPACK_IMPORTED_MODULE_4__.EADI();
        }
        if (this.authService.isCCB()) {
          if (demand.ccbInfo == null) {
            demand.ccbInfo = new _models_ccb__WEBPACK_IMPORTED_MODULE_3__.CCB();
          }
          if (demand.ccbInfo.decisionDate != null) {
            demand.ccbInfo.decisionDate = new Date(demand.ccbInfo.decisionDate);
          }
        }
      }
      if (demand.attachmentInfo == null) {
        demand.attachmentInfo = Array();
      }
      if (demand.architectAlignmentInfo == null) {
        demand.architectAlignmentInfo = Array(new _models_architect_alignment__WEBPACK_IMPORTED_MODULE_6__.ArchitectAlignment());
      }
      if (demand.requesterInfo.spoc.length == 0) {
        demand.requesterInfo.spoc = Array(new _models_spoc__WEBPACK_IMPORTED_MODULE_8__.Spoc());
      }
      demand.requesterInfo.requestedDate = new Date(demand.requesterInfo.requestedDate);
      demand.requirementFunctionalInfo.bglDate = new Date(demand.requirementFunctionalInfo.bglDate);
      this.demandInformation = demand;
    }
    // console.log("setDemand: ", this.demandInformation)
  }
  validateSpoc() {
    var result = true;
    this.demandInformation.requesterInfo.spoc.forEach(s => {
      if (s.role != '' && s.email == '' || s.role == '' && s.email != '') {
        result = false;
      } else if (!this.eventService.checkEmailValue(s.email)) {
        result = false;
      }
    });
    return result;
  }
  validateAlignement() {
    var result = true;
    this.demandInformation.architectAlignmentInfo.forEach(s => {
      if (!this.eventService.checkEmailValue(s.email)) {
        result = false;
      }
    });
    return result;
  }
  validateRequest(isSave) {
    // console.log("validateRequest ", isSave)
    if (isSave) {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '') {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Please fill required fields!'
        });
        this.router.navigate(['demand-intake/introduction']);
        return false;
      }
    } else {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '' || !this.validateAlignement()) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Please fill required fields!'
        });
        this.router.navigate(['demand-intake/introduction']);
        return false;
      } else if (this.demandInformation.requesterInfo.requestedBy == '' && this.demandInformation.requesterInfo.isDemandPOC && this.demandInformation.requesterInfo.project == '' && this.demandInformation.requesterInfo.requesterRole == '' || this.demandInformation.requesterInfo.market.length == 0 && this.demandInformation.requesterInfo.businessUnit.length == 0 && this.demandInformation.requesterInfo.domain == '' || !this.validateSpoc() || this.demandInformation.requesterInfo.approvedBudget && this.demandInformation.requesterInfo.clarityProjectId == '') {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Please fill required fields!'
        });
        this.router.navigate(['demand-intake/requester']);
        return false;
      } else if (this.demandInformation.requirementFunctionalInfo.statement == '' || this.demandInformation.requirementFunctionalInfo.scope == '' || this.demandInformation.requirementFunctionalInfo.businessValue == '' || this.demandInformation.requirementFunctionalInfo.goLiveApproach == '') {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: 'Please fill required fields!'
        });
        this.router.navigate(['demand-intake/requirement']);
        return false;
      }
      // if (this.authService.isDM() || this.authService.isCCB()) {
      //   let atleastOneSDSelected = this.demandInformation.solutionDirectionInfo.filter(item => item.value === true);
      //   let adlL1 = this.demandInformation.solutionDirectionInfo.find(item => item.solution === 'adlL1');
      //   let dataQuality = this.demandInformation.solutionDirectionInfo.find(item => item.solution === 'dataQuality');
      //
      //   if (this.authService.currentUserValue.domain.length > 0 && (atleastOneSDSelected.length == 0 || (adlL1 && adlL1.value && !this.eventService.checkEmailValue(this.demandInformation.eADIInfo.adlL1.sourceEmail)))) {
      //     this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
      //     this.router.navigate(['demand-intake/checklist']);
      //     return false;
      //   } else if (this.authService.currentUserValue.domain.length > 0 && (atleastOneSDSelected.length == 0 || (dataQuality && dataQuality.value && (!this.eventService.checkEmailValue(this.demandInformation.eADIInfo.dataQuality.bpoEmail) || !this.eventService.checkEmailValue(this.demandInformation.eADIInfo.dataQuality.dataCleaningSpocEmail))))) {
      //     this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
      //     this.router.navigate(['demand-intake/checklist']);
      //     return false;
      //   }
      // }
      if (this.authService.isDM() && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
        if (this.demandInformation.demandManagerInfo.decision == null || this.demandInformation.demandManagerInfo.remarks == '') {
          this.messageService.add({
            severity: 'warn',
            summary: 'Error',
            detail: 'Please fill required fields!'
          });
          this.router.navigate(['demand-intake/demandmanager']);
          return false;
        }
      } else if (this.authService.isCCB() && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
        if (this.demandInformation.ccbInfo.decision == '' || this.demandInformation.ccbInfo.remarks == '') {
          this.messageService.add({
            severity: 'warn',
            summary: 'Error',
            detail: 'Please fill required fields!'
          });
          this.router.navigate(['demand-intake/ccb']);
          return false;
        }
      }
    }
    return true;
  }
  saveDemand() {
    this.eventService.progressBarEvent.emit(true);
    console.log("saveDemand() : Request -> ", this.demandInformation);
    if (this.validateRequest(true)) {
      let url = this.baseUrl + '/common/demand-intake/save';
      return this.http.post(url, this.demandInformation, this.constants.headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
        this.eventService.progressBarEvent.emit(false);
        return response;
      }));
    } else {
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(false);
    }
  }
  submitDemand() {
    this.eventService.progressBarEvent.emit(true);
    console.log("submitDemand() : Request -> ", this.demandInformation);
    if (this.validateRequest(false)) {
      if (this.authService.isDM() && this.demandInformation.demandManagerInfo.decisionBy == '') {
        this.demandInformation.demandManagerInfo.decisionBy = this.authService.currentUserValue.email;
      }
      if (this.authService.isCCB() && this.demandInformation.ccbInfo.decisionBy == '') {
        this.demandInformation.ccbInfo.decisionBy = this.authService.currentUserValue.email;
      }
      let url = this.baseUrl + '/common/demand-intake/submit';
      return this.http.post(url, this.demandInformation, this.constants.headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
        this.eventService.progressBarEvent.emit(false);
        return response;
      }));
    } else {
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(false);
    }
  }
  getAllDemands() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/all';
    return this.http.get(url, this.constants.headerOptions);
  }
  getViewAllDemands() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/view';
    return this.http.get(url, this.constants.headerOptions);
  }
  getDemandByDemandId(demandId) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/' + demandId;
    return this.http.get(url, this.constants.headerOptions);
  }
  getAllAttachmentsByDemandId(demandId) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/attachment/fetch/all/' + demandId;
    return this.http.get(url, this.constants.headerOptions);
  }
  getAttachmentsById(fileId) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/attachment/download/' + fileId;
    return this.http.get(url, {
      responseType: 'blob',
      observe: 'response',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders({
        'X-Correlation-ID': this.constants.x_correlation_id
      })
    });
  }
  deleteAttachmentsById(fileId) {
    let url = this.baseUrl + '/common/demand-intake/attachment/delete/' + fileId;
    return this.http.get(url, this.constants.headerOptions);
  }
  updateDescAttachmentsById(fileId, desc) {
    let url = this.baseUrl + '/common/demand-intake/attachment/update/' + fileId + '?' + 'description=' + desc;
    return this.http.get(url, this.constants.headerOptions);
  }
  insertHyperLink(desc, hyperlink) {
    return this.http.get(this.getInsertHyperlinkURL(desc, hyperlink), this.constants.headerOptions);
  }
  getRequesterDomain() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/domain';
    return this.http.get(url, this.constants.headerOptions);
  }
  getInsertHyperlinkURL(desc, hyperlink) {
    return this.baseUrl + `/common/demand-intake/attachment/link/add/${this.demandInformation.introduction.demandIntakeId}` + '?' + `description=${desc}` + '&' + `hyperlink=${hyperlink}` + '&' + `uploaderRole=${this.authService.currentUserValue.role}`;
  }
  getAttachmentUploadURL() {
    return this.baseUrl + `/common/demand-intake/attachment/upload/${this.demandInformation.introduction.demandIntakeId}` + '?' + `uploadedBy=${this.authService.currentUserValue.email}` + '&' + `uploaderRole=${this.authService.currentUserValue.role}`;
  }
  generateReport(request) {
    let url = this.baseUrl + '/common/demand-intake/report';
    return this.http.post(url, request, this.constants.headerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
      this.eventService.progressBarEvent.emit(false);
      return response;
    }));
  }
  getDemandStatusValueInLower(demandStatus) {
    if (demandStatus != null) {
      return demandStatus.toLowerCase();
    }
    return "";
  }
  getApproverStatusValue(userStatus) {
    return userStatus.toLowerCase();
  }
  getDemandStatusValue(key) {
    const status = Object.keys(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_5__.DemandStatusFilter).indexOf(key);
    let s = Object.values(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_5__.DemandStatusFilter)[status];
    return s;
  }
  getDemandStatusKey(value) {
    const index = Object.values(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_5__.DemandStatusFilter).indexOf(value);
    return Object.keys(_enums_demand_status_filter__WEBPACK_IMPORTED_MODULE_5__.DemandStatusFilter)[index];
  }
  getSDVisibility(solution) {
    if (this.demandInformation.introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_7__.DemandStatus.ACCEPTED || this.demandInformation.introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_7__.DemandStatus.DM_REJECTED || this.demandInformation.introduction.status === _enums_demand_status__WEBPACK_IMPORTED_MODULE_7__.DemandStatus.CCB_REJECTED) {
      return false;
    }
    if (this.authService.currentUserValue.domain && this.authService.currentUserValue.domain.includes(solution)) {
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function DemandIntakeService_Factory(t) {
    return new (t || DemandIntakeService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_9__.Constants), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_17__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_11__.EventService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
    token: DemandIntakeService,
    factory: DemandIntakeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 70404:
/*!*****************************************************!*\
  !*** ./src/app/intake-ui/services/event.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventService: () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 17780);



class EventService {
  constructor(messageService) {
    this.messageService = messageService;
    this.progressBarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isNewDemand = true;
    this.isMyDemand = true;
    this.isStakeholderDemand = false;
    this.solutionDirectionValue = new Array();
    this.selectedDemandTabIndex = 0;
    this.selectedEADITabIndex = 0;
    this.selectedRequirementsTabIndex = 0;
    this.today = new Date();
    this.goLiveMinDate = new Date(this.today.setDate(this.today.getDate() + 1));
  }
  checkEmailList(email) {
    let list = email.split('\\s');
    let result = true;
    list.forEach(item => {
      if (!this.checkEmailValue(item)) {
        result = false;
      }
    });
    return result;
  }
  checkEmailValue(email) {
    if (email == '') {
      return true;
    }
    var regex = new RegExp("[A-Za-z0-9._%-]+@philips.com");
    var res = regex.test(email);
    if (!res) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please provide email under Philips domain!'
      });
    }
    return res;
  }
  static #_ = this.ɵfac = function EventService_Factory(t) {
    return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EventService,
    factory: EventService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 74765:
/*!******************************************************!*\
  !*** ./src/app/intake-ui/services/fields.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsService: () => (/* binding */ FieldsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 47593);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.service */ 70404);







class FieldsService {
  constructor(http, constants, eventService) {
    this.http = http;
    this.constants = constants;
    this.eventService = eventService;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  getStatusChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'STATUSWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get(url, headerOptions);
  }
  getStageChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'STAGEWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get(url, headerOptions);
  }
  getQuaterChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'QUATERWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get(url, headerOptions);
  }
  getAllFields() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field/all';
    this.http.get(url, this.constants.headerOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      this.eventService.progressBarEvent.emit(false);
      this.allFields = new Map(Object.entries(response));
      console.log('getAllFields() : Response -> ', this.allFields);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.log('getAllFields() : Error -> ', error);
      this.eventService.progressBarEvent.emit(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
    })).subscribe();
  }
  getLabel(key) {
    return this.allFields.get(key)?.label;
  }
  getToolTip(key) {
    return this.allFields.get(key)?.tooltip;
  }
  getFormattedMessage(input, replacement) {
    return input.replace(/\[key]/g, replacement);
  }
  static #_ = this.ɵfac = function FieldsService_Factory(t) {
    return new (t || FieldsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_1__.Constants), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: FieldsService,
    factory: FieldsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 53189:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/app.footer.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 27693);


class AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  static #_ = this.ɵfac = function AppFooterComponent_Factory(t) {
    return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppFooterComponent,
    selectors: [["app-footer"]],
    decls: 5,
    vars: 0,
    consts: [[1, "layout-footer"], [1, "flex", "align-items-center"], ["src", "assets/images/philips-logo.png", "alt", "Logo", "height", "29", 1, "mr-2"], [1, "font-medium", "ml-2"]],
    template: function AppFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "EADI Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 81557:
/*!*********************************************************!*\
  !*** ./src/app/layout/components/app.menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuComponent: () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var src_app_intake_ui_models_demand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/intake-ui/models/demand */ 18980);
/* harmony import */ var src_app_intake_ui_components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/intake-ui/components/demand-intake/demand-intake.component */ 95595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/app.layout.service */ 27693);
/* harmony import */ var _intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../intake-ui/auth/auth.service */ 37440);
/* harmony import */ var src_app_intake_ui_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/intake-ui/services/demand-intake.service */ 96790);
/* harmony import */ var src_app_intake_ui_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/intake-ui/services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.menuitem.component */ 41174);










function AppMenuComponent_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenuComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 5);
  }
}
function AppMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenuComponent_ng_container_1_li_2_Template, 1, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !item_r2.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r2.separator);
  }
}
class AppMenuComponent {
  constructor(router, layoutService, authService, demandIntakeService, eventService, injector) {
    this.router = router;
    this.layoutService = layoutService;
    this.authService = authService;
    this.demandIntakeService = demandIntakeService;
    this.eventService = eventService;
    this.injector = injector;
    this.model = [];
  }
  ngOnInit() {
    this.model = [{
      label: 'Home',
      icon: 'pi pi-fw pi-file',
      items: [{
        label: 'Dashboard',
        icon: 'pi pi-chart-pie',
        routerLink: ["/dashboard"]
      }],
      expanded: true
    }, {
      label: 'Demand',
      icon: 'pi pi-fw pi-file',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => this.newDemand()
      }, {
        label: 'View',
        icon: 'pi pi-fw pi-search',
        routerLink: ["/view"]
      }, {
        label: 'Report',
        icon: 'pi pi-fw pi-file-excel',
        routerLink: ["/report"],
        visible: true
      }],
      expanded: true
    }, {
      label: 'Configuration',
      icon: 'pi pi-fw pi-user',
      items: [{
        label: 'DM List',
        icon: 'pi pi-fw pi-align-left',
        routerLink: ["/dmcrud"]
      }, {
        label: 'CCB List',
        icon: 'pi pi-fw pi-align-right',
        routerLink: ["/ccbcrud"]
      }, {
        label: 'Field Management',
        icon: 'pi pi-fw pi-align-right',
        routerLink: ["/fieldmgmt"]
      }],
      expanded: true,
      visible: this.authService.isAdmin()
    }];
  }
  newDemand() {
    const componentRef = this.injector.get(src_app_intake_ui_components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeComponent);
    componentRef.ngOnDestroy();
    this.eventService.isNewDemand = true;
    this.eventService.isMyDemand = true;
    this.eventService.isStakeholderDemand = false;
    // console.log("MenuComponent1 isNewDemand, isMyDemand ", this.eventService.isNewDemand, this.eventService.isMyDemand);
    this.eventService.solutionDirectionValue = [];
    this.eventService.selectedDemandTabIndex = 0;
    this.eventService.selectedEADITabIndex = 0;
    this.eventService.selectedRequirementsTabIndex = 0;
    this.demandIntakeService.setDemand(new src_app_intake_ui_models_demand__WEBPACK_IMPORTED_MODULE_0__.Demand(), true);
    this.router.navigate(['/demand-intake/introduction']);
  }
  static #_ = this.ɵfac = function AppMenuComponent_Factory(t) {
    return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_intake_ui_services_demand_intake_service__WEBPACK_IMPORTED_MODULE_4__.DemandIntakeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_intake_ui_services_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppMenuComponent,
    selectors: [["app-menu"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_intake_ui_components_demand_intake_demand_intake_component__WEBPACK_IMPORTED_MODULE_1__.DemandIntakeComponent])],
    decls: 2,
    vars: 1,
    consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]],
    template: function AppMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.model);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_6__.AppMenuitemComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 41174:
/*!*************************************************************!*\
  !*** ./src/app/layout/components/app.menuitem.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuitemComponent: () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 27693);
/* harmony import */ var _service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.menu.service */ 69620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);









const _c0 = ["app-menuitem", ""];
const _c1 = () => ({
  paths: "exact",
  queryParams: "ignored",
  matrixParams: "ignored",
  fragment: "ignored"
});
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r0.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r0.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.class)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r0.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r4.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r0.submenuAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.item.items);
  }
}
class AppMenuitemComponent {
  constructor(layoutService, cd, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = "";
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(() => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    if (activeRoute) {
      this.menuService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  itemClick(event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    // execute command
    if (this.item.command) {
      this.item.command({
        originalEvent: event,
        item: this.item
      });
    }
    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({
      key: this.key
    });
  }
  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function AppMenuitemComponent_Factory(t) {
    return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppMenuitemComponent,
    selectors: [["", "app-menuitem", ""]],
    hostVars: 4,
    hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
      }
    },
    inputs: {
      item: "item",
      index: "index",
      root: "root",
      parentKey: "parentKey"
    },
    attrs: _c0,
    decls: 5,
    vars: 4,
    consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
    template: function AppMenuitemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0)(2, AppMenuitemComponent_a_2_Template, 5, 6, "a", 1)(3, AppMenuitemComponent_a_3_Template, 5, 15, "a", 2)(4, AppMenuitemComponent_ul_4_Template, 2, 2, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.root && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.item.visible !== false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, AppMenuitemComponent],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
    }
  });
}

/***/ }),

/***/ 31806:
/*!************************************************************!*\
  !*** ./src/app/layout/components/app.sidebar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebarComponent: () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 27693);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.component */ 81557);



class AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
  static #_ = this.ɵfac = function AppSidebarComponent_Factory(t) {
    return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppSidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 1,
    vars: 0,
    template: function AppSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu");
      }
    },
    dependencies: [_app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 13594:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/app.topbar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTopBarComponent: () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_intake_ui_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/intake-ui/enums/approver-domain */ 87609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.layout.service */ 27693);
/* harmony import */ var src_app_intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/intake-ui/auth/auth.service */ 37440);
/* harmony import */ var _intake_ui_services_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../intake-ui/services/fields.service */ 74765);
/* harmony import */ var src_app_intake_ui_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/intake-ui/services/event.service */ 70404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/avatar */ 46095);












const _c0 = ["menubutton"];
const _c1 = ["topbarmenubutton"];
const _c2 = ["topbarmenu"];
const _c3 = a0 => ({
  "layout-topbar-menu-mobile-active": a0
});
const _c4 = a0 => ({
  "text-primary-500": a0
});
function AppTopBarComponent_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 34);
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c4, s_r2 === ctx_r2.scale));
  }
}
function AppTopBarComponent_p_progressSpinner_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-progressSpinner", 35);
  }
}
function AppTopBarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.userRole);
  }
}
function AppTopBarComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.userRole, " | ", ctx_r2.dmDomainList, "");
  }
}
function AppTopBarComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppTopBarComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "p-avatar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.authService.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
class AppTopBarComponent {
  constructor(router, layoutService, authService, fieldsService, eventService) {
    this.router = router;
    this.layoutService = layoutService;
    this.authService = authService;
    this.fieldsService = fieldsService;
    this.eventService = eventService;
    this.user = '';
    this.username = '';
    this.userRole = '';
    this.isProgressing = false;
    this.dmDomainList = [];
    this.scales = [13, 14, 15, 16, 17];
  }
  get scale() {
    return this.layoutService.config.scale;
  }
  set scale(_val) {
    this.layoutService.config.scale = _val;
  }
  ngOnInit() {
    this.dmDomainList = [];
    this.user = this.authService.currentUserValue.email;
    this.username = this.authService.currentUserValue.name;
    this.userRole = this.authService.getCurrentUserRole();
    if (this.authService.isDM()) {
      this.authService.currentUserValue.domain.forEach(item => {
        this.dmDomainList.push(this.getDomainValue(item));
      });
    }
    this.eventService.progressBarEvent.subscribe(response => {
      this.isProgressing = response;
    });
  }
  enableLogOutTooltip() {}
  getDomainValue(key) {
    const status = Object.keys(src_app_intake_ui_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain).indexOf(key);
    let s = Object.values(src_app_intake_ui_enums_approver_domain__WEBPACK_IMPORTED_MODULE_0__.ApproverDomain)[status];
    return s;
  }
  logout(event) {
    this.router.navigate(['/logout']);
  }
  decrementScale() {
    this.scale--;
    this.applyScale();
  }
  incrementScale() {
    this.scale++;
    this.applyScale();
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }
  static #_ = this.ɵfac = function AppTopBarComponent_Factory(t) {
    return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_intake_ui_services_fields_service__WEBPACK_IMPORTED_MODULE_3__.FieldsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_intake_ui_services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppTopBarComponent,
    selectors: [["app-topbar"]],
    viewQuery: function AppTopBarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.menuButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.topbarMenuButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
    decls: 44,
    vars: 13,
    consts: [["menubutton", ""], ["topbarmenubutton", ""], ["topbarmenu", ""], [1, "layout-topbar", 2, "background", "#002b5c"], ["routerLink", "/view", 1, "layout-topbar-logo"], [1, "flex", 2, "align-self", "center", "align-items", "center"], ["src", "assets/images/philips-logo.png", "alt", "logo"], [2, "align-self", "center", "margin-left", "1rem"], [1, "text-color-white", "font-medium", "text-xl"], [1, "text-color-white", "font-medium", "text-lg"], [1, "flex"], [1, "p-link", "layout-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-bars", "text-color-white"], [1, "flex", "flex-column", "h-full", "align-items-center", "ml-2"], [1, "text-color-white", "font-medium"], [1, "flex", "h-full"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "click", "disabled"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "click", "disabled"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 2, "background", "#002b5c", 3, "ngClass"], [1, "flex", 2, "align-self", "center"], ["styleClass", "w-4rem h-4rem", "strokeWidth", "8", "fill", "var(--surface-ground)", "animationDuration", ".5s", 4, "ngIf"], [1, "mr-2", 2, "align-self", "center", "text-align", "end"], [1, "text-color-white", "text-md"], ["class", "text-color-white", 4, "ngIf"], ["style", "align-self: center;", 4, "ngIf"], [1, "ml-2", 2, "align-self", "center"], [1, "p-link", "layout-topbar-button", 3, "click"], ["title", "Sign Out", 3, "mouseover"], [1, "pi", "pi-sign-out", "text-color-white"], [1, "text-color-white"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], ["styleClass", "w-4rem h-4rem", "strokeWidth", "8", "fill", "var(--surface-ground)", "animationDuration", ".5s"], [2, "align-self", "center"], [1, "pi", "pi-user", "text-color-white", 2, "font-size", "1.5rem", "margin", "0.4rem", "margin-left", "1rem"], ["styleClass", "ml-2 border-2 surface-border", "shape", "circle", "size", "xlarge", 1, "p-element"], ["alt", "Profile Photo", 3, "src"]],
    template: function AppTopBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "a", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7)(6, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "EADI");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Demand Intake Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10)(11, "button", 11, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.layoutService.onMenuToggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Zoom In/Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.decrementScale());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AppTopBarComponent_i_20_Template, 1, 3, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.incrementScale());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 20, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.layoutService.showProfileSidebar());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 22, 2)(27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AppTopBarComponent_p_progressSpinner_28_Template, 1, 0, "p-progressSpinner", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 25)(30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AppTopBarComponent_div_34_Template, 2, 1, "div", 27)(35, AppTopBarComponent_div_35_Template, 2, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AppTopBarComponent_div_36_Template, 2, 0, "div", 28)(37, AppTopBarComponent_div_37_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 29)(39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.logout($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function AppTopBarComponent_Template_div_mouseover_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.enableLogOutTooltip());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.scales);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c3, ctx.layoutService.state.profileSidebarVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isProgressing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dmDomainList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dmDomainList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.authService.profilePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authService.profilePhoto);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinner, primeng_avatar__WEBPACK_IMPORTED_MODULE_11__.Avatar],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1036:
/*!*****************************************************!*\
  !*** ./src/app/layout/main.app.layout.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainAppLayoutComponent: () => (/* binding */ MainAppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.sidebar.component */ 31806);
/* harmony import */ var _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app.topbar.component */ 13594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../intake-ui/auth/auth.service */ 37440);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.footer.component */ 53189);













class MainAppLayoutComponent {
  constructor(sanitizer, authService, layoutService, renderer, router) {
    this.sanitizer = sanitizer;
    this.authService = authService;
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target) || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideProfileMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  ngOnInit() {
    console.log("MainAppLayoutInvoked");
  }
  static #_ = this.ɵfac = function MainAppLayoutComponent_Factory(t) {
    return new (t || MainAppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_intake_ui_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MainAppLayoutComponent,
    selectors: [["app-layout"]],
    viewQuery: function MainAppLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_components_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appSidebar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appTopbar = _t.first);
      }
    },
    decls: 10,
    vars: 1,
    consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-wrapper"], [1, "layout-sidebar"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]],
    template: function MainAppLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.containerClass);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, _components_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 95291:
/*!**************************************************!*\
  !*** ./src/app/layout/main.app.layout.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainAppLayoutModule: () => (/* binding */ MainAppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _main_app_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.app.layout.component */ 1036);
/* harmony import */ var _components_app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app.menuitem.component */ 41174);
/* harmony import */ var _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.topbar.component */ 13594);
/* harmony import */ var _components_app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app.footer.component */ 53189);
/* harmony import */ var _components_app_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.menu.component */ 81557);
/* harmony import */ var _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app.sidebar.component */ 31806);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/avatar */ 46095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);























const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
class MainAppLayoutModule {
  static #_ = this.ɵfac = function MainAppLayoutModule_Factory(t) {
    return new (t || MainAppLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MainAppLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_13__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.DropdownModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_20__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__.ProgressSpinnerModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_22__.AvatarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainAppLayoutModule, {
    declarations: [_components_app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent, _components_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AppTopBarComponent, _components_app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent, _components_app_menu_component__WEBPACK_IMPORTED_MODULE_4__.AppMenuComponent, _components_app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.AppSidebarComponent, _main_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainAppLayoutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_13__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.DropdownModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_20__.ProgressBarModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_21__.ProgressSpinnerModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_22__.AvatarModule],
    exports: [_main_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainAppLayoutComponent]
  });
})();

/***/ }),

/***/ 27693:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class LayoutService {
  constructor() {
    this.config = {
      ripple: true,
      inputStyle: 'outlined',
      menuMode: 'static',
      colorScheme: 'light',
      scale: 14
    };
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    };
    this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayOpen$ = this.overlayOpen.asObservable();
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config.menuMode === 'overlay';
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  static #_ = this.ɵfac = function LayoutService_Factory(t) {
    return new (t || LayoutService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LayoutService,
    factory: LayoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 69620:
/*!****************************************************!*\
  !*** ./src/app/layout/service/app.menu.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class MenuService {
  constructor() {
    this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  baseUrl: 'http://localhost:9002',
  redirectUri: 'http://localhost:4200',
  clientId: '7e0686bb-c210-4396-b7f0-2b7d008af0ac',
  authority: 'https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4',
  scope_default: 'https://graph.microsoft.com/.default',
  scope_demand_login: 'api://itaap-demand-intake-nonprod/demand_login',
  attachmentMaxFileSize: 26214400
};

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map