import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'search-question',
    templateUrl: './search-question.component.html',
    styleUrls: ['./search-question.component.css']
})

export class SearchQuestionComponent implements OnInit{
    
    UserId = 0;
    username = "";
    userType = "";
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute){

    }

    ngOnInit(): void {
        this.UserId = this.activatedRoute.snapshot.params['p1'];
        this.username = this.activatedRoute.snapshot.params['p2'];
        this.userType = this.activatedRoute.snapshot.params['p3'];
    }

    goCreateQuestion(){
        this.router.navigate(['create-question', {p1: this.UserId, p2: this.username, p3: this.userType}]);
    }

    goSearchQuestion(){
        this.router.navigate(['search-question', {p1: this.UserId, p2: this.username, p3: this.userType}]);
    }

    goChat(){
        this.router.navigate(['chat', {p1: this.UserId, p2: this.username, p3: this.userType}]);
    }

    goSignOut(){
        this.router.navigate(['home', {p1: null, p2: null, p3: null}]);
    }
}