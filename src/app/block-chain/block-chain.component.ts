import { Component} from '@angular/core';
import { Block } from '../../Block';
import {BlockComponent} from '../block/block.component';
@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.css']
})
export class BlockChainComponent {
  blockList:Block[] = [];
  constructor() {
      this.blockList.push({block: '1', nonce: '11316',data:'', previous: '0000000000000000000000000000000000000000000000000000000000000000'})
      this.blockList.push({block: '2', nonce: '35230',data:'', previous: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'})
      this.blockList.push({block: '3', nonce: '12937',data:'', previous: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'})
      this.blockList.push({block: '4', nonce: '35990',data:'', previous: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'})
      this.blockList.push({block: '5', nonce: '56265',data:'', previous: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'})
  }  
}
