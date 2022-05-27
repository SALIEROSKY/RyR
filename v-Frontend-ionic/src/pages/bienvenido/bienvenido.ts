import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPersonalesAdultosPage } from '../datos-personales-adultos/datos-personales-adultos';
import { BienvenidoAdminPage } from '../bienvenido-admin/bienvenido-admin';
import { UsuariosPage } from '../usuarios/usuarios';
import { UsuariosListadosPage } from '../usuarios-listados/usuarios-listados';
import { SitiosDeAcopioPage } from '../sitios-de-acopio/sitios-de-acopio';
import { SitiosListadosPage } from '../sitios-listados/sitios-listados';
import { RolesDeUsuarioPage } from '../roles-de-usuario/roles-de-usuario';
import { TipoMaterialPage } from '../tipo-material/tipo-material';
import { MaterialPage } from '../material/material';
import { TipoMultimediaPage } from '../tipo-multimedia/tipo-multimedia';
import { MultimediaPage } from '../multimedia/multimedia';

@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html'
})
export class BienvenidoPage {

  constructor(public navCtrl: NavController) {
  }
  goToDatosPersonalesAdultos(params){
    if (!params) params = {};
    this.navCtrl.push(DatosPersonalesAdultosPage);
  }goToBienvenidoAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoAdminPage);
  }goToBienvenido(params){
    if (!params) params = {};
    this.navCtrl.push(BienvenidoPage);
  }goToUsuarios(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosPage);
  }goToUsuariosListados(params){
    if (!params) params = {};
    this.navCtrl.push(UsuariosListadosPage);
  }goToSitiosDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosDeAcopioPage);
  }goToSitiosListados(params){
    if (!params) params = {};
    this.navCtrl.push(SitiosListadosPage);
  }goToRolesDeUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(RolesDeUsuarioPage);
  }goToTipoMaterial(params){
    if (!params) params = {};
    this.navCtrl.push(TipoMaterialPage);
  }goToMaterial(params){
    if (!params) params = {};
    this.navCtrl.push(MaterialPage);
  }goToTipoMultimedia(params){
    if (!params) params = {};
    this.navCtrl.push(TipoMultimediaPage);
  }goToMultimedia(params){
    if (!params) params = {};
    this.navCtrl.push(MultimediaPage);
  }
}
