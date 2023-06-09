import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './login/user-login.component';
import { UserHomeComponent } from './home/user-home.component';
import { AdminHomeComponent } from './home/admin-home.component';
import { AdminSignUpComponent } from './sign-up/admin-sign-up.component';
import { CreateQuestionComponent } from './question/create-question.component';
import { SearchQuestionComponent } from './question/search-question.component';
import { CreatedQuestionComponent } from './question/created-question.component';
import { PendingQuestionComponent } from './question/pending-question.component';
import { CreateAnswerComponent } from './answer/create-answer.component';
import { CreatedAnswerComponent } from './answer/created-answer.component';
import { PendingAnswerComponent } from './answer/pending-answer.component';
import { ApprovedAnswerComponent } from './answer/approved-answer.component';
import { ChatComponent } from './chat/chat.component';
import { UserToUserChatComponent } from './chat/user-to-user-chat.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

/* router paths throughout application
implimented by Joshua Gardner */

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'admin-sign-up', component: AdminSignUpComponent},
  {path: 'create-question', component: CreateQuestionComponent},
  {path: 'search-question', component: SearchQuestionComponent},
  {path: 'created-question', component: CreatedQuestionComponent},
  {path: 'pending-question', component: PendingQuestionComponent},
  {path: 'create-answer', component: CreateAnswerComponent},
  {path: 'created-answer', component: CreatedAnswerComponent},
  {path: 'pending-answer', component: PendingAnswerComponent},
  {path: 'approved-answer', component: ApprovedAnswerComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'user-to-user-chat', component: UserToUserChatComponent},
  {path: '**', component: NoPageFoundComponent},
    
  /* Playing with concept of utilizing parent/ children routing 
  Joshua Gardner 
  */

  /* {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, 
    children: [
      {path: 'user-login', component: UserLoginComponent, 
        children: [
          {path: 'create-question', component: CreateQuestionComponent}, 
          {path: 'search-question', component: SearchQuestionComponent}, 
          {path: 'chat', component: ChatComponent},
        ]
      }, 
      {path: 'admin-sign-up', component: AdminSignUpComponent, 
        children: [
          {path: 'pending-question', component: PendingQuestionComponent},
          {path: 'pending-answer', component: PendingAnswerComponent},
      ]}, 
    ]
  } */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
