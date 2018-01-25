import {Component} from '@angular/core';

const sha256 = require('sha256');

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent {
  data: string;

  constructor() {
    this.data = '';
  }

  generateHash(): string {
    return sha256(this.data);
  }
}
