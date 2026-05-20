import { Component,inject,OnInit,ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../../services/persona.service';
import { SexoService } from '../../../services/sexo.service';
import { TipoDocumentoService } from '../../../services/tipo-documento.service';
import { UbigeoService } from '../../../services/ubigeo.service';
import { PersonaRequest } from '../../../model/api/request/persona-request';
import { PersonaResponse } from '../../../model/api/response/persona-response';
import { Sexo } from '../../../model/sexo';
import { TipoDocumento } from '../../../model/tipo-documento';
import { Ubigeo } from '../../../model/ubigeo';

@Component({
  selector: 'app-registrar-persona',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registrar-persona.html',
  styleUrl: './registrar-persona.scss',
})
export class RegistrarPersona implements OnInit{
  title='Registrar Persona';
  personaArray:PersonaResponse[]=[];
  personaForm:FormGroup;
  sexoArray:Sexo[]=[];
  tipoDocumentoArray:TipoDocumento[]=[];
  ubigeoArray:Ubigeo[]=[];

  private personaService = inject(PersonaService);
  private tipoDocumentoService=inject(TipoDocumentoService);
  private sexoService=inject(SexoService);
  private ubigeoService=inject(UbigeoService);
  private cdr=inject(ChangeDetectorRef);

  constructor(){
    this.personaForm=new FormGroup({
      idPersona:new FormControl(0),
      apellidoPaterno:new FormControl('',[Validators.required]),
      apellidoMaterno:new FormControl('',[Validators.required]),
      nombres:new FormControl('',[Validators.required]),
      idSexo:new FormControl('',[Validators.required]),
      fechaNacimiento:new FormControl('',[Validators.required]),
      idTipoDocumento:new FormControl('',[Validators.required]),
      numDocumento:new FormControl('',[Validators.required]),
      telefono:new FormControl('',[Validators.required]),
      direccion:new FormControl('',[Validators.required]),
      idUbigeo:new FormControl('',[Validators.required]),
    });
  }//end constructor



  ngOnInit(): void {
    this.getSexo();
    this.getTipoDocumento();
    this.getUbigeo();
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe((result:PersonaResponse[]) => {
      console.log('Result',result);
      this.personaArray = result;
      console.log('Array',this.personaArray);
    });
  }

  getSexo():void{
    this.sexoService.getSexo().subscribe((result:Sexo[])=>{
      this.sexoArray=result;
    });
  }

  setSexo(event:Event):void {
    const inputChangeValue=(event.target as HTMLInputElement).value;
    this.personaForm.controls['idSexo'].setValue(inputChangeValue);

  }

  getTipoDocumento():void{
    this.tipoDocumentoService.getTipoDocumento().subscribe((result:TipoDocumento[])=>{
      this.tipoDocumentoArray=result;
    });
  }

  setTipoDocumento(event: Event):void {
    const inputChangeValue = (event.target as HTMLInputElement).value;
    this.personaForm.controls['idTipoDocumento'].setValue(inputChangeValue);
  }

  getUbigeo():void{
    this.ubigeoService.getUbigeo().subscribe((result:Ubigeo[])=>{
      this.ubigeoArray=result;
    });
  }
  setUbigeo(event:Event):void {
    const inputChangeValue=(event.target as HTMLInputElement).value;
    this.personaForm.controls['idUbigeo'].setValue(inputChangeValue);
  }

  registrarPersona(){

  }

  editarPersona(persona:PersonaResponse){

  }
  eliminarPersona(persona:PersonaResponse){

  }

}
