import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RequirementComponent } from './components/requirement/requirement.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DemandIntakeComponent } from './components/demand-intake/demand-intake.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { RequesterComponent } from './components/requester/requester.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { DropdownModule } from 'primeng/dropdown';
import { DemandIntakeService } from './services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { SolutionDirectionComponent } from './components/solution-direction/solution-direction.component';
import { NfrComponent } from './components/nfr/nfr.component';
import { ComplianceComponent } from './components/compliance/compliance.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { WipComponent } from './components/wip/wip.component';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RequirementComponent,
    DemandIntakeComponent,
    RequesterComponent,
    RequirementsComponent,
    SolutionDirectionComponent,
    NfrComponent,
    ComplianceComponent,
    AttachmentComponent,
    ChecklistComponent,
    IntroductionComponent,
    WipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    CardModule,
    RadioButtonModule,
    FieldsetModule,
    InputTextModule,
    CheckboxModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    DropdownModule,
    FileUploadModule
  ],
  providers: [DemandIntakeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
