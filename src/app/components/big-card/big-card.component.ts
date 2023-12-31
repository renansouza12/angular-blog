import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss',
  './big-card.responsive.component.scss']
})
export class BigCardComponent {

  @Input()
  photoCover!:string;
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription = "";

  @Input() id:string = "0";
}
