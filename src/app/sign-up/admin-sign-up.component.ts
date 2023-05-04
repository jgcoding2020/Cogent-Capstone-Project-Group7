import { Component, OnInit } from "@angular/core";
import { Admin } from "./admin";
import { AdminService } from "./admin.service";
import { Login } from "./login";
import { Router } from "@angular/router";

@Component({
    selector: 'admin-sign-up',
    templateUrl: './admin-sign-up.component.html',
    styleUrls: ['./admin-sign-up.component.css']
})

export class AdminSignUpComponent implements OnInit {
    
    admins: Admin[];
    currentAdmin: Admin;
    currentAdminId: number;
    registerForm: Admin;
    loginForm: Login;

    constructor(private router: Router, private adminService: AdminService){
        this.admins = [];
        this.currentAdmin = new Admin();
        this.currentAdminId = 0;
        this.registerForm = new Admin();
        this.loginForm = new Login();
    }

    ngOnInit(): void {
        this.adminService.getAdmins().subscribe((data: Admin[])=>{
            this.admins = data;
        })
    }

    onSubmitAdd(addUserForm: any)
    {
        let username = addUserForm.value.username;

        for (let i = 0; i < this.admins.length; i++){
            if (username == this.admins[i].username){
                username = null;
            }
        }

        this.currentAdmin.id = this.currentAdminId; // initialized as 0 since autogenerated on backend;
        this.currentAdmin.name = addUserForm.value.name;
        this.currentAdmin.username = addUserForm.value.username;
        this.currentAdmin.password = addUserForm.value.password;
        this.currentAdmin.email = addUserForm.value.email;
        this.currentAdmin.userType = "admin"; // default setting as type user when account is created

        console.log(username);
        
        if (username == null)
            alert("This username already exists, please choose another.")
        else {
            this.adminService.addAdmin(this.currentAdmin).subscribe();
            alert("You have successfully created an account!!!")
        }
    }

    onSubmitLogin(userLoginForm: any){

        this.currentAdmin.id = 0;
        this.loginForm.username = userLoginForm.value.username;
        this.loginForm.password = userLoginForm.value.password;

        this.adminService.loginAdmin(this.loginForm).subscribe((data: Login) => {
            this.currentAdmin = <Admin>data;
            console.log(this.currentAdmin);

            if (this.currentAdmin.id != 0 && this.currentAdmin.userType == "admin")
                //this.router.navigate(['admin-home', {p1: this.currentAdmin.id, p2: this.currentAdmin.username, p3: this.currentAdmin.userType}])
                this.router.navigate(['pending-question', {p1: this.currentAdmin.id, p2: this.currentAdmin.username, p3: this.currentAdmin.userType}])
            else {
                alert("Username and password is invalid for an admin")
            }
                
        })
    }

    refresh()
    {
        window.location.reload();
    }

    resetForm()
    {
        this.registerForm = new Admin();
    } 
}