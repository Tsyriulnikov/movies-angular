import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title: string = 'My Card'
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa dolores doloribus enim error esse excepturi facere facilis in maxime nobis possimus quisquam recusandae repudiandae, rerum sed totam vel, voluptate?'
  imgUrl: string = 'https://static9.depositphotos.com/1594308/1110/i/450/depositphotos_11107478-stock-photo-fantasy.jpg'

  ngOnInit() {

  }

  changeTitle() {
    this.title = 'Change title'
  }

  // inputHandler(event: any) {
  inputHandler(value:string) {
    // const value = event.target.value
    this.title = value
  }
}
