import { Component, OnInit } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user-service";
import { Login } from "./login";

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})

// this component adds new users to the database and logs them in as well
export class UserLoginComponent implements OnInit{

    users: User[];
    currentUser: User;
    currentUserId: number;
    registerForm: User;
    loginForm: Login;
    link: string = "/user-home";
    toggleLink = false;

    constructor(private userService: UserService){
        this.users = [];
        this.currentUser = new User();
        this.currentUserId = 0;
        this.registerForm = new User();
        this.loginForm = new Login();
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((data: User[])=>{
            console.log(data);
            this.users = data;
        })
    }

    onSubmitAdd(addUserForm: any)
    {
        this.currentUser.id = this.currentUserId; // initialized as 0 since autogenerated on backend;
        this.currentUser.name = addUserForm.value.name;
        this.currentUser.username = addUserForm.value.username;
        this.currentUser.password = addUserForm.value.password;
        this.currentUser.email = addUserForm.value.email;
        this.currentUser.userType = "user"; // default setting as type user when account is created

        console.log(addUserForm.value);

        this.userService.addUser(this.currentUser).subscribe();
    }

    onSubmitLogin(userLoginForm: any){

        this.currentUser.id = 0;
        this.loginForm.username = userLoginForm.value.username;
        this.loginForm.password = userLoginForm.value.password;

        this.userService.loginUser(this.loginForm).subscribe((data: Login) => {
            this.currentUser = <User>data;
            console.log(this.currentUser);

            if (this.currentUser.id != 0)
                this.toggleLink = true;
            else
                alert("Username and password is invalid")
        })
    }

    go(): string {
        return this.link;
    }

    refresh()
    {
        window.location.reload();
    }

    resetForm()
    {
        this.registerForm = new User();
    } 
}