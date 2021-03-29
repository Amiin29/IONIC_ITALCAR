import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Presence:items[];
  operations:items[];
  Essai:items[];
  gamme:items[];
  points:items[];
  travaux:items[];
  Huilemoteur:items[];
  Liquidefrein:items[];
  Huileboite:items[];
  Liquiderefroidissement:items[];
  Liquidedirection:items[];
  Etanchetie:items[];
  Liquidelaveglace:items[];
  Batterie:items[];
  Liquidelave:items[];
  Lecturememoires:items[];
  HauteurPedale:items[];
  MontreBord:items[];
  VoyantsSecurite:items[];
  Antibrouillard:items[];
  FeuxReculeEclaireur:items[];
  FeuxStop:items[];
  Clignotants:items[];
  Feuxcroissement:items[];
  Feuxposition:items[];
  CourseFrein:items[];
  pressionPneux:items[];
  PassageVitesses:items[];
  PropreteVehicule:items[];
  TemperatureMoteur:items[];
  TenueLigne:items[];
  TenueFreinage:items[];
  EtatSouffletsdirection:items[];
  EtatSouffletsrotules:items[];
  EtatSouffletstransmissions:items[];
  Etanchetiemoteur:items[];
  Etanchetieboite:items[];
  Etanchetiefreins:items[];
  Etanchetierefroidissement:items[];
  Etanchetiecircuit:items[];
  Etanchetiedirection:items[];
  Etanchetieamortisseurs:items[];
      ngOnInit(){
        this.getitems();
      }
getitems(){
  this.Presence=[{id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]

this.Etanchetieamortisseurs=[{id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetiedirection=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetiecircuit=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetierefroidissement=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetiefreins=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetieboite=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.EtatSouffletstransmissions=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetiemoteur=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.EtatSouffletsrotules=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.EtatSouffletsdirection=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.TenueFreinage=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.TemperatureMoteur=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.TenueLigne=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.PassageVitesses=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.MontreBord=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.PropreteVehicule=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.pressionPneux=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.CourseFrein=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.HauteurPedale=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.VoyantsSecurite=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.FeuxReculeEclaireur=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Antibrouillard=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Clignotants=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.FeuxStop=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Feuxcroissement=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Liquidelave=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Feuxposition=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Lecturememoires=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Essai=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Batterie=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.gamme=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.points=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Etanchetie=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Liquidelaveglace=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.operations=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.travaux=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Liquiderefroidissement=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Liquidefrein=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Liquidedirection=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Huilemoteur=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        this.Huileboite=[
          {id:1,value:"Bon presence",name:"Bon",isselected:false},{id:2,value:"mauvais presence",name:"Mauvais",isselected:false}]
        
        
      }
      ajout(){
        console.log( '++++'+this.Presence[1]['value'])

      }
  onchange(){
    console.log( this.Presence)
    /*console.log( this.Essai)
    console.log( this.gamme)
    console.log( this.operations)
    console.log( this.points)
    console.log( this.travaux)
    console.log( this.Huilemoteur)
      console.log( this.Liquidefrein)
        console.log( this.Huileboite)
          console.log( this.Liquiderefroidissement)
            console.log( this.Liquidedirection)
              console.log( this.Etanchetie)
                console.log( this.Liquidelaveglace)
                  console.log( this.Batterie)
                    console.log( this.Liquidelave)
                      console.log( this.Lecturememoires)
                        console.log( this.HauteurPedale)
                          console.log( this.MontreBord)
                            console.log( this.VoyantsSecurite)
                              console.log( this.Antibrouillard)
                                console.log( this.FeuxReculeEclaireur)
                                  console.log( this.FeuxStop)
                                    console.log( this.Clignotants)
                                      console.log( this.Feuxcroissement)
                                        console.log( this.Feuxposition)
                                          console.log( this.CourseFrein)
                                            console.log( this.pressionPneux)
                                              console.log( this.PassageVitesses)
                                                console.log( this.PropreteVehicule)
                                                  console.log( this.TemperatureMoteur)
                                                    console.log( this.TenueLigne)
                                                      console.log( this.TenueFreinage)
                                                        console.log( this.EtatSouffletsdirection)
                                                          console.log( this.EtatSouffletsrotules)
                                                            console.log( this.EtatSouffletstransmissions)
                                                              console.log( this.Etanchetiemoteur)
                                                                console.log( this.Etanchetieboite)
                                                                  console.log( this.Etanchetiefreins)
                                                                    console.log( this.Etanchetierefroidissement)
                                                                      console.log( this.Etanchetiecircuit)
                                                                        console.log( this.Etanchetiedirection)
                                                                          console.log( this.Etanchetieamortisseurs)
  */}
  
}
class items{
  value:string
  id:number;
  name:string
  isselected:boolean;
}