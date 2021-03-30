import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../app/service/provider.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})

export class Tab1Page  implements OnInit{
MatBasicData: any[] = [];
Mat: any[] = [];
LISTMat:  any[]  ;
PHNO=""
ITNO=""
CUNM=""
CUA1=""
CUA3=""
SERN=""
test = false;
someString:any

  constructor(public authService: ProviderService) {}
  /* <input  class="form-check-input" type="checkbox" name="a" [(ngModel)]="isa" (change)="onchange($event)">
      <input  class="form-check-input" type="checkbox" name="b" [(ngModel)]="isb" (change)="onchange($event)"> */
//onchange(e){
 // if(this.isa && e.target.name==a){
    //this.isb=false}else{this.isa=false}}
 
  ngOnInit() {
    
 this.LISTMat=null;
 this.test = false;
    this.authService.getMatricule().then(value =>{
     // this.response = value;
    console.log(value)
     for(var i=0; i<value.length;i++){
      for ( var j=0 ; j<['NameValue'].length;j++){
       // "LICUNO"
        
    
          this.Mat.push({
            'CUNO': value[i]['NameValue'][3]['Value'],
            'SERN' : value[i]['NameValue'][1]['Value'],
            'ITNO' : value[i]['NameValue'][0]['Value'],
            'RFIA' : value[i]['NameValue'][2]['Value'],
           })
          
    }
        }
      
    })
    
  }


  filterinitializlistmat(ev:any){
    if (ev.length=!0){
      this.LISTMat = this.Mat;
      console.log('++++++')

      console.log(this.LISTMat)
      const val = ev.target.value;
      
      if(val && val.trim() != '')
      {
        this.LISTMat=this.LISTMat.filter((item)=>{    
          //trim elimine les espaces
          return (item.RFIA.toLowerCase().indexOf(val.toLowerCase())>-1);
        })
        console.log(val)
      } 
      else {
        this.LISTMat=null;
      }
    }
  
  }
  
  selectVal(val){
    alert('you have select matricule'+val)
    this.authService.getBasicData(val).then(value =>{
      // this.response = value;
      console.log( 'fdddddddddfff')

      console.log(this.MatBasicData)

       for ( var j=0 ; j<['NameValue'].length;j++){
        // console.log(i,j)
           this.MatBasicData.push({
            
             
             'CUNO': value[j]['NameValue'][3]['Value'],
             'CUNM': value[j]['NameValue'][4]['Value'],
             'CONO': value[j]['NameValue'][0]['Value'],
             'PHNO': value[j]['NameValue'][10]['Value'],
             'CUA3': value[j]['NameValue'][7]['Value'],  
            })
           
          
         }
          this.CUNM=this.MatBasicData[0]['CUNM']
          this.CUA3=this.MatBasicData[0]['CUA3']
          this.PHNO=this.MatBasicData[0]['PHNO']

          

          this.SERN=this.Mat[1]['SERN']
          this.ITNO=this.Mat[0]['ITNO']

          

          
          console.log( 'ffffffffffffffff')

        console.log( this.MatBasicData[0]['CUNO'])
     })
     this.MatBasicData = []; //vider le t bleau 
     
     
  }
 
  //nrecuperiw el valeur mta el cuno mta el rfia selctionné w nabathouh en parametre
authentifcate(val) {
  console.log('Customer selctionné'+val)}
  
  /*
  isItemAvailable = false;
     items = [];

     initializeItems(){
         this.items = ["Ram","gopi", "dravid"];
     }

     getItems(ev: any) {
         // Reset items back to all of the items
         this.initializeItems();

         // set val to the value of the searchbar
         const val = ev.target.value;

         // if the value is an empty string don't filter the items
         if (val && val.trim() !== '') {
             this.isItemAvailable = true;
             this.items = this.items.filter((item) => {
                 return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
             })
         } else {
             this.isItemAvailable = false;
         }
     }

}
function x(x: any) {
  throw new Error('Function not implemented.');
}*/}

