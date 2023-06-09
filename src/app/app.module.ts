import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 

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

// Additions to base app.module.ts made by Joshua Gardner

@NgModule({
  declarations: [
    AppComponent, HomeComponent, UserHomeComponent, AdminHomeComponent,
    UserLoginComponent, AdminSignUpComponent, CreateQuestionComponent, 
    SearchQuestionComponent, CreatedQuestionComponent, PendingQuestionComponent, 
    CreateAnswerComponent, CreatedAnswerComponent, PendingAnswerComponent, 
    ApprovedAnswerComponent, ChatComponent, UserToUserChatComponent, NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
