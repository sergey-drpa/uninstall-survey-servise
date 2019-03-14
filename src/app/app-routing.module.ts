import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardsComponent} from './boards/boards.component';
import {BoardsEditComponent} from './boards-edit/boards-edit.component';
import {BoardsDetailComponent} from './boards-detail/boards-detail.component';
import {BoardsCreateComponent} from './boards-create/boards-create.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    data: { title: 'Boards List' }
  },
  {
    path: 'boards-details/:id',
    component: BoardsDetailComponent,
    data: { title: 'Boards Details' }
  },
  {
    path: 'boards-create',
    component: BoardsCreateComponent,
    data: { title: 'Create Boards' }
  },
  {
    path: 'boards-edit/:id',
    component: BoardsEditComponent,
    data: { title: 'Edit Boards' }
  },
  /*{
    path: 'quiz',
    component: QuizComponent,
    data: { title: 'Quiz' }
  },*/
  { path: '',
    component: QuizComponent,
    data: { title: 'Tab Suspender Uninstall Survey' }
    /*redirectTo: '/quiz',
    pathMatch: 'full'*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
