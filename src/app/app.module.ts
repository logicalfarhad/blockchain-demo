import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BlockChainComponent} from './block-chain/block-chain.component';
import {BlockComponent} from './block/block.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HashComponent} from './hash/hash.component';

const appRoutes: Routes = [
  {
    path: 'hash',
    // redirectTo: '/hash', pathMatch: 'full'
    component: HashComponent
  },
  {
    path: 'block',
    component: BlockComponent
  },
  {
    path: 'blockChain',
    component: BlockChainComponent
  },
  {
    path: '',
    redirectTo: '/hash', pathMatch: 'full'
  },

  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BlockChainComponent,
    BlockComponent,
    PageNotFoundComponent,
    HashComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
