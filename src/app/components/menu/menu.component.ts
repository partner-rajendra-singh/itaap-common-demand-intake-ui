import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Demand Intake',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus' },
                    { label: 'View', icon: 'pi pi-fw pi-search' },
                    { label: 'Report', icon: 'pi pi-fw pi-file-excel' }
                ]
            },
            {
                label: 'Menu 2',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Sub Menu 1', icon: 'pi pi-fw pi-align-left' },
                    { label: 'Sub Menu 2', icon: 'pi pi-fw pi-align-right' }
                ]
            },
            {
                label: 'Menu 3',
                icon: 'pi pi-fw pi-user'
            }
        ];


    }

}
