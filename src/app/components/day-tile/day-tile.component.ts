import { Component, OnInit ,Input} from '@angular/core';
import { IDayTile } from "../../models/day-tile";

@Component({
  selector: 'app-day-tile',
  templateUrl: './day-tile.component.html',
  styleUrls: ['./day-tile.component.css']
})
export class DayTileComponent implements OnInit {
@Input() daytile:IDayTile;
  constructor() { }

  ngOnInit() {
  }

}
