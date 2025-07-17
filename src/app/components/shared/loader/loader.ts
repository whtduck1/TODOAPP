import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader {
  @Input() visible = false;
}
