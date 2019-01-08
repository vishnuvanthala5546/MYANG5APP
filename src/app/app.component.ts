import {Component, ElementRef, HostListener, Renderer} from '@angular/core';
import {createHostListener} from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MYANG5APP';

  constructor() {

  }
}
