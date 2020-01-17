import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class SharedModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faHamburger);
    }
}
