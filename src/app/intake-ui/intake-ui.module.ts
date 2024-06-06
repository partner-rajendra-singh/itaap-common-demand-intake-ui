import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoFocusModule} from 'primeng/autofocus';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {BlockUIModule} from 'primeng/blockui';
import {OverlayModule} from 'primeng/overlay';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FileUploadModule} from 'primeng/fileupload';
import {TimelineModule} from 'primeng/timeline';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagModule} from 'primeng/tag';
import {TreeModule} from 'primeng/tree';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {AccordionModule} from 'primeng/accordion';
import {EditorModule} from 'primeng/editor';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InplaceModule} from 'primeng/inplace';
import {ChartModule} from 'primeng/chart';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputNumberModule} from 'primeng/inputnumber';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ChipModule} from 'primeng/chip';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AttachmentComponent} from './components/attachment/attachment.component';
import {DemandIntakeComponent} from './components/demand-intake/demand-intake.component';
import {RequesterComponent} from './components/requester/requester.component';
import {RequirementsComponent} from './components/requirements/requirements.component';
import {SolutionDirectionComponent} from './components/solution-direction/solution-direction.component';
import {ChecklistComponent} from './components/checklist/checklist.component';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {WipComponent} from './components/wip/wip.component';
import {DemandManagerComponent} from './components/demandmanager/demandmanager.component';
import {CCBComponent} from './components/ccb/ccb.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ChartComponent} from './components/chart/chart.component';
import {DMCRUDComponent} from './components/dmcrud/dmcrud.component';
import {CCBCRUDComponent} from './components/ccbcrud/ccbcrud.component';
import {ViewDemandsComponent} from './components/view-demands/view-demands.component';
import {FieldsetModule} from 'primeng/fieldset';
import {StepsModule} from 'primeng/steps';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MultiSelectModule} from 'primeng/multiselect';
import {StepperModule} from 'primeng/stepper';
import {InputOtpModule} from 'primeng/inputotp';
import {ConfirmComponent} from './components/confirm/confirm.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ButtonGroupModule} from "primeng/buttongroup";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    AttachmentComponent,
    DemandIntakeComponent,
    RequesterComponent,
    RequirementsComponent,
    SolutionDirectionComponent,
    AttachmentComponent,
    ChecklistComponent,
    IntroductionComponent,
    WipComponent,
    DemandManagerComponent,
    CCBComponent,
    LoginComponent,
    LogoutComponent,
    ChartComponent,
    DMCRUDComponent,
    CCBCRUDComponent,
    ViewDemandsComponent,
    DashboardComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    ListboxModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    SplitterModule,
    DividerModule,
    SplitButtonModule,
    CheckboxModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextareaModule,
    AutoFocusModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    BadgeModule,
    AvatarModule,
    BlockUIModule,
    OverlayModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    FileUploadModule,
    ConfirmPopupModule,
    TagModule,
    DropdownModule,
    TimelineModule,
    TreeModule,
    BreadcrumbModule,
    AccordionModule,
    SidebarModule,
    EditorModule,
    AutoCompleteModule,
    InplaceModule,
    ChartModule,
    ScrollPanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TabMenuModule,
    InputNumberModule,
    AvatarGroupModule,
    SelectButtonModule,
    ChipModule,
    FieldsetModule,
    StepsModule,
    PanelMenuModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    StepperModule,
    InputOtpModule,
    ButtonGroupModule,
    TooltipModule
  ]
})
export class IntakeUIComponentsModule {
}

