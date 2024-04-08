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
                label: 'Menu 1',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'Sub Menu 1', icon: 'pi pi-fw pi-plus' },
                    { label: 'Sub Menu 2', icon: 'pi pi-fw pi-trash' },
                    { label: 'Sub Menu 3', icon: 'pi pi-fw pi-external-link' }
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
