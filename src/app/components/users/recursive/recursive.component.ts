import {Component, Input, OnInit} from '@angular/core';
export class ChildItems {
  name: any;
  fieldType: any;
  subCategories: ChildItems[];
}
@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.css']
})
export class RecursiveComponent implements OnInit {

  @Input() items: ChildItems;
  constructor() { }

  ngOnInit(): void {
  }

}
