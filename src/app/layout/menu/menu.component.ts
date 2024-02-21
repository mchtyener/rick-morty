import {Component, Input} from '@angular/core';
import {Menu} from "../../core/data/data";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() item!: Menu  //bunun yerine signal ile de yapabilirdik
}
