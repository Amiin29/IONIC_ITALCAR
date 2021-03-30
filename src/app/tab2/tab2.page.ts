import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Parechocs:items[];
  Etatoptique:items[];
  Glaceporte:items[];
  AileAVD:items[];
  RetroD:items[];
  Enjolivers:items[];
  Suspension:items[];
  EtatFaisceaux:items[];
  NiveauHulies:items[];
  EtatdesGaines:items[];
  Etancheite:items[];
  EtancheiteFreins:items[];
  EtatEchappement:items[];
  FonctionnementAv:items[];
  FonctionnementFeux:items[];
  FeuxArriere:items[];
  Clignotants:items[];
  Divers:items[];
  constructor() {}
  ngOnInit(){
    this.getitems();
    //console.log( this.Parechocs[1]['value'])
   
  }
  getitems(){
    
    this.FonctionnementAv=[
      {id:1,value:"Bon FonctionnementAv",name:"Bon",isselected:false},{id:2,value:"mauvais FonctionnementAv",name:"Mauvais",isselected:false}]
    this.FonctionnementFeux=[
      {id:1,value:"Bon FonctionnementFeux",name:"Bon",isselected:false},{id:2,value:"mauvais FonctionnementFeux",name:"Mauvais",isselected:false}]
    this.FeuxArriere=[
      {id:1,value:"Bon FeuxArriere",name:"Bon",isselected:false},{id:2,value:"mauvais FeuxArriere",name:"Mauvais",isselected:false}]
    this.Clignotants=[
      {id:1,value:"Bon Clignotants",name:"Bon",isselected:false},{id:2,value:"mauvais Clignotants",name:"Mauvais",isselected:false}]
    this.Divers=[
      {id:1,value:"Bon Divers",name:"Bon",isselected:false},{id:2,value:"mauvais Divers",name:"Mauvais",isselected:false}]
    this.EtancheiteFreins=[
      {id:1,value:"Bon EtancheiteFreins",name:"Bon",isselected:false},{id:2,value:"mauvais EtancheiteFreins",name:"Mauvais",isselected:false}]
      this.EtatEchappement=[
      {id:1,value:"Bon EtatEchappement",name:"Bon",isselected:false},{id:2,value:"mauvais EtatEchappement",name:"Mauvais",isselected:false}]
    this.Parechocs=[
      {id:1,value:"Bon Parechocs",name:"Bon",isselected:false},{id:2,value:"mauvais Parechocs",name:"Mauvais",isselected:false}]
    this.Etatoptique=[
      {id:1,value:"Bon Etatoptique",name:"Bon",isselected:false},{id:2,value:"mauvais Etatoptique",name:"Mauvais",isselected:false}]
        this.Glaceporte=[
      {id:1,value:"Bon Glaceporte",name:"Bon",isselected:false},{id:2,value:"mauvais Glaceporte",name:"Mauvais",isselected:false}]
    this.AileAVD=[
      {id:1,value:"Bon AileAVD",name:"Bon",isselected:false},{id:2,value:"mauvais AileAVD",name:"Mauvais",isselected:false}]  
    this.RetroD=[
      {id:1,value:"Bon RetroD",name:"Bon",isselected:false},{id:2,value:"mauvais RetroD",name:"Mauvais",isselected:false}]             
    this.Enjolivers=[
      {id:1,value:"Bon Enjolivers",name:"Bon",isselected:false},{id:2,value:"mauvais Enjolivers",name:"Mauvais",isselected:false}]               
    this.Suspension=[
      {id:1,value:"Bon Suspension",name:"Bon",isselected:false},{id:2,value:"mauvais Suspension",name:"Mauvais",isselected:false}]                  
    this.EtatFaisceaux=[
      {id:1,value:"Bon EtatFaisceaux",name:"Bon",isselected:false},{id:2,value:"mauvais EtatFaisceaux",name:"Mauvais",isselected:false}]                   
    this.NiveauHulies=[
      {id:1,value:"Bon NiveauHulies",name:"Bon",isselected:false},{id:2,value:"mauvais NiveauHulies",name:"Mauvais",isselected:false}]                     
    this.EtatdesGaines=[
      {id:1,value:"Bon EtatdesGaines",name:"Bon",isselected:false},{id:2,value:"mauvais EtatdesGaines",name:"Mauvais",isselected:false}]          
    this.Etancheite=[
      {id:1,value:"Bon Etancheite",name:"Bon",isselected:false},{id:2,value:"mauvais Etancheite",name:"Mauvais",isselected:false}]
                          
                                                                                                              

  } 
   
  onchange(){
    if (this.Parechocs[1]['isselected']==true && this.Parechocs[2]['isselected']==false){
      console.log( this.Parechocs[1]['value'])

    }else{console.log( this.Parechocs)}

   // 
   // console.log(this.Etatoptique)
  }
}
class items{
  value:string
  id:number;
  name:string
  isselected:boolean;
}