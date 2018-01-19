import { Component } from '@angular/core';
const sha256 = require('sha256');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlockChain demo';
  demo = sha256('BlockChain demo');
  hash = sha256('h');
  textValue = 'initial value';
  log = '';
}
