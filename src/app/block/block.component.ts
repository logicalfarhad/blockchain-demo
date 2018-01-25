import {Component} from '@angular/core';
import {Block} from '../../Block';

const sha256 = require('sha256');

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  maximumNonce = 500000;
  _block: Block;

  constructor() {
    this._block = new Block('1', '72608', '');
  }

  generateHash(): string {
    return sha256(this.getAllTextValue());
  }

  checkValid(): boolean {
    return this.generateHash().substr(0, 4) === '0000';
  }

  mine() {
    for (let i = 0; i <= this.maximumNonce; i++) {
      this._block.nonce = i.toString(10);
      if (this.checkValid()) {
        break;
      }
    }
  }

  private getAllTextValue() {
    return this._block.block + this._block.nonce + this._block.data;
  }
}
