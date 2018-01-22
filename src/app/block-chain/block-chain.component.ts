import {Component} from '@angular/core';
import {Block} from '../../Block';
import {BlockComponent} from '../block/block.component';

const sha256 = require('sha256');

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.css']
})
export class BlockChainComponent {
  blockList: Block[] = [];
  maximumNonce = 50000;

  constructor() {
    this.blockList.push({
      block: '1',
      nonce: '11316',
      data: '',
      previous: '0000000000000000000000000000000000000000000000000000000000000000',
      // hashVal: ''
    });
    this.blockList.push({
      block: '2',
      nonce: '35230',
      data: '',
      previous: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf',
      // hashVal: ''
    });
    this.blockList.push({
      block: '3',
      nonce: '12937',
      data: '',
      previous: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19',
      // hashVal: ''
    });
    this.blockList.push({
      block: '4',
      nonce: '35990',
      data: '',
      previous: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf',
      // hashVal: ''
    });
    this.blockList.push({
      block: '5',
      nonce: '56265',
      data: '',
      previous: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83',
      // hashVal: ''
    });
  }

  getHashVal(_block: Block) {
    return sha256(this.getAllTextValue(_block));
  }

  private generateHash(_block: Block): void {
    // return sha256(this.getAllTextValue(_block));
  }

  private checkValid(_block: Block): boolean {
    return this.getHashVal(_block).substr(0, 4) === '0000';
  }

  private getAllTextValue(_block: Block) {
    return _block.block + _block.nonce + _block.data + _block.previous;
  }

  mine(block: Block) {
    for (let i = 0; i <= this.maximumNonce; i++) {
      block.nonce = i.toString(10);
      // this.hashVal = sha256(this.getAllTextValue());
      if (this.checkValid(block)) {
        break;
      }
    }
  }
}
