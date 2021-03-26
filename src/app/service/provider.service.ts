import {Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  URLAPI='http://srv-iso.italcar.intra:21007/m3api-rest/execute/CMS100MI/LstMatricules'
  URLAPIDATA='http://srv-iso.italcar.intra:21007/m3api-rest/execute/CRS610MI/GetBasicData'
  Mat: any[] = [];
 
constructor( private http: HttpClient) {}
mirec : any 
 x :any
nameValue:any

 /* async connexion(): Promise<any[]> {
    let params = new HttpParams();
    params = params.append('F_RFIA', '0');
    params = params.append('T_RFIA', '99999999');
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Basic TU1JTEFESTpTbG0xMjM0NQ==',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers':'*',
  });
  const options = { params: new HttpParams().set('F_RFIA', "0").set('T_RFIA', "9999999"), headers: headers };
    try {
      let response = await this.http.get(this.URLAPI,options).toPromise();

      for(var i=0; i<response['MIRecord'].length;i++){
        for ( var j=0 ; j<response['MIRecord'][i]['NameValue'].length;j++){
          if (response['MIRecord'][i]['NameValue'][2]['Value']!=""){
            console.log(response['MIRecord'][i]['NameValue'][2]['Value'])
        }}
          }      
     return response as any[] ;
    } catch (error) {
      await this.handleError(error);
    }
    
  }
    handleError(error: any) {
      throw new Error('Method not implemented.');
    }
getMat(){
  return this.connexion()
  
}*/
getMatricule(): Promise<any>{

return new Promise((resolve, reject) => {
  
    let params = new HttpParams();
    params = params.append('F_RFIA', '0');
    params = params.append('T_RFIA', '99999999');
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Basic TU1JTEFESTpTbG0xMjM0NQ==',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers':'*',
  });
  const options = { params: new HttpParams().set('F_RFIA', "0").set('T_RFIA', "9999999"), headers: headers };
   
    let response = this.http.get(this.URLAPI,options).toPromise().then(
      res => { // Success
       console.log(res)

        resolve(res['MIRecord']);
      },msg => { // Error
        reject(msg);
        }
    );

       
    
      
  });
  }
  getBasicData(val): Promise<any>{
    return new Promise((resolve, reject) => {
  
      let params = new HttpParams();
      const headers = new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': 'Basic TU1JTEFESTpTbG0xMjM0NQ==',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers':'*',
    });
    const options = { params: new HttpParams().set('CUNO', val), headers: headers };
     
      let response = this.http.get(this.URLAPIDATA,options).toPromise().then(
        res => { // Success
         console.log(res)
          resolve(res['MIRecord']);
        },msg => { // Error
          reject(msg);
          }
      );
  
         
      
        
    });
      
  }



}
    
    
    /*
    for(var i=0; i<response['MIRecord'].length;i++){
      for ( var j=0 ; j<response['MIRecord'][i]['NameValue'].length;j++){
      
        //  console.log(response['MIRecord'][i]['NameValue'][2]['Value'])
         // this.Mat.push(response['MIRecord'][i]['NameValue'][2]['Value']);
          
    }
        }   */  