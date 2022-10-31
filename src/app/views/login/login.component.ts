import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',[Validators.required,Validators.minLength(3
      )]),
    password: new FormControl('', Validators.required)
  })
  onSubmit(){
    let usuario = String(this.usuarioLogin.value.usuario);
    let password = String(this.usuarioLogin.value.password);
    if(this.validarEntradas(usuario,password)){
      this.router.navigate(['/cliente']);
    }
    else{
      alert("Campos invalidos!!");
    }
    
    
  }
  validarEntradas(correo:string , password:string){
    if(correo == null  || password == null)
      return false;
    else
      return true;
  }
}
