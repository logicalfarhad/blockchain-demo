import {Component} from '@angular/core';

const sha256 = require('sha256');

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent {
  hashVal = '';
  data = '';

  constructor() {
    this.hashVal = sha256(this.data);
  }
  private generateHash(): void {
    this.hashVal = sha256(this.data);
  }
}
