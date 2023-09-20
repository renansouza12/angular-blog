import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  photoCover:string = "";
  contentTitle!:string;
  contentDescription!:string;

  private id:string  | null = "0";

  constructor(private router:ActivatedRoute){}

  ngOnInit():void{
    this.router.paramMap.subscribe(value =>  this.id = value.get("id"))
    this.setValuesToComponents(this.id)
  }
  

  setValuesToComponents(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0];

    

    this.contentTitle  = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
