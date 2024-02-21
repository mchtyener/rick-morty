import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { myCustomMenuItems } from "./core/data/data";
import { Menu } from "./core/data/data";
import { MenuComponent } from "./layout/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myCustomMenuItems: Menu[] = myCustomMenuItems;
}
