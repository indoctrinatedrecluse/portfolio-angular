import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  arrowPath: string;
  arrowAltString: string;

  constructor() {
    this.arrowPath = "/assets/contact/down.jpg";
    this.arrowAltString = " v ";
  }

  ngOnInit(): void {
  }
}
