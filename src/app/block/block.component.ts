import {Component} from '@angular/core';

const sha256 = require('sha256');

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  hashVal = '';
  block = '1';
  nonce = '72608';
  data = '';
  maximumNonce = 500000;
  constructor() {
    this.hashVal = sha256(this.block + this.nonce + this.data);
  }

  private generateHash(): void {
    this.hashVal = sha256(this.block + this.nonce + this.data);
  }

  private checkValid(hashVal): boolean {
    return hashVal.substr(0, 4) === '0000';
  }
  mine() {
    for (let i = 0; i <= this.maximumNonce; i++) {
      this.nonce = i.toString(10);
      this.hashVal = sha256(this.block + this.nonce + this.data);
      if (this.checkValid(this.hashVal)) {
        break;
      }
    }
  }
}
