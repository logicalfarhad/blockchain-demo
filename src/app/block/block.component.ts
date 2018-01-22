import { Component } from '@angular/core';
import { Block } from '../../Block';

const sha256 = require('sha256');

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  hashVal = '';
  maximumNonce = 500000;
  _block: Block;
  constructor() {
    this._block = new Block('1', '72608', '');
    this.hashVal = sha256(this.getAllTextValue());
  }

  private generateHash(): void {
    this.hashVal = sha256(this.getAllTextValue());
  }
  private getAllTextValue() {
    return this._block.block + this._block.nonce + this._block.data;
  }
  private checkValid(hashVal): boolean {
    return hashVal.substr(0, 4) === '0000';
  }
  mine() {
    for (let i = 0; i <= this.maximumNonce; i++) {
      this._block.nonce = i.toString(10);
      this.hashVal = sha256(this.getAllTextValue());
      if (this.checkValid(this.hashVal)) {
        break;
      }
    }
  }
}
