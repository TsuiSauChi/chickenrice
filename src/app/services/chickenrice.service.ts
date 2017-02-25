import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ChickenRiceService{
     http:any;
    rice: any;
    constructor(http:Http){
        this.http = http;
        this.rice="https://api.particle.io/v1/devices/53ff68066667574834542567/led?access_token=c65b9e24af468917638e24033e7a133a97c4f47d"
    }

    Retract(value){
          return this.http.get(this.rice)
            .map(res => res.json());
    }
}