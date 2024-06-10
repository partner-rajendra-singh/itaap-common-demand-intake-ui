import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { MainAppLayoutComponent } from './main.app.layout.component';
import { AppMenuitemComponent } from './components/app.menuitem.component';
import { AppTopBarComponent } from './components/app.topbar.component';
import { AppFooterComponent } from './components/app.footer.component';
import { AppMenuComponent } from './components/app.menu.component';
import { AppSidebarComponent } from './components/app.sidebar.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {AvatarModule} from "primeng/avatar";

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    MainAppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    AvatarModule
  ],
  exports: [MainAppLayoutComponent]
})
export class MainAppLayoutModule { }
