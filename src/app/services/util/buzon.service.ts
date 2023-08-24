import { Injectable } from '@angular/core';

export interface ConfigBuzon {
  id?: string;
  nombre?: string;
  imagen?: string;
  visible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BuzonService {

  constructor() { }

  

}
