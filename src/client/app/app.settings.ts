import { Injectable } from '@angular/core';
import { Settings } from './models/index';

@Injectable()
export class AppSettings {

    settings: Settings = new Settings('Octopus', 'octopus', ['Provincia de Mendoza']);
}
