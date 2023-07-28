import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeckComponent } from './components/deck/deck.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'slide/1', pathMatch: 'full' },
  { path: 'slide/:id', component: DeckComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
