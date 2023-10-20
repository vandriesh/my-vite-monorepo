/// <reference types="vite/client" />
//import * as dotenv from 'dotenv';
import tinyInvariant from 'tiny-invariant';

//dotenv.config();

export class ConfigService {
  static get(key: string) {
    if (typeof import.meta !== 'undefined') {
      return import.meta.env[key];
    } else {
      //return process.env[key];
    }
  }

  static getVarThatMustExist(key: string) {
    let envVar;
    if (typeof import.meta !== 'undefined') {
      envVar = import.meta.env[key];
    }

    tinyInvariant(envVar, `variable ${key} must exist`);

    return envVar;
  }


  static getApiUrl(): string {
    return this.getVarThatMustExist('VITE_API_URL') as string;
  }
}
