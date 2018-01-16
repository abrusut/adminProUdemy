import { Injectable } from '@angular/core';
import { Usuario } from "../../models/usuario.model";
import { HttpClient } from "@angular/common/http";
import {URL_SERVICIOS} from "../../config/config";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class UsuarioService {

  usuario:Usuario;
  token:string;

  constructor(public http:HttpClient, public router:Router) {
    console.log("Servicio de usuarios");
    this.cargarStorage();
  }

  cargarStorage(){
    if( localStorage.getItem('token') )
    {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token = ' ';
      this.usuario = null;
    }
  }

  estaLogueado(){
    return ( this.token && this.token.length > 5 )? true : false;
  }

  saveLocalStorage(id:string, token:string, usuario:Usuario){
    this.usuario = usuario;
    this.token = token;
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  loginGoogle(token:string)
  {
    let url:string = URL_SERVICIOS + '/login/google';

    return this.http.post(url,{ token })
      .map( (resp:any) => {
        this.saveLocalStorage(resp.id, resp.token, resp.usuario);
        return true;
      });
  }

  logout()
  {
    this.usuario = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  login(usuario:Usuario, recordar:boolean = false)
  {
    if( recordar ){
      localStorage.setItem('email',usuario.email);
    }else{
      localStorage.removeItem('email');
    }

    let url:string = URL_SERVICIOS + '/login';

    return this.http.post(url,usuario)
      .map( (resp:any) => {
        this.saveLocalStorage(resp.id, resp.token, resp.usuario);
        return true;
      });
  }


  crearUsuario(usuario:Usuario){
    let url:string = URL_SERVICIOS + '/usuario';

    return this.http.post(url,usuario)
      .map( (resp:any) => {
        return resp.usuario;
      });
  }

}
