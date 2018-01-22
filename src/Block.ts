export class Block{
    block:string;
    nonce:string;
    data:string;
    previous:string;
    constructor(_block,_nonce,_data){
        this.block = _block;
        this.nonce = _nonce;
        this.data = _data;
        this.previous = '';
    }
}