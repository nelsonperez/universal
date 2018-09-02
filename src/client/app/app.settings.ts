import { Injectable } from '@angular/core';
import { Settings } from './models/setting.interface';

@Injectable()
export class AppSettings {

    settings: Settings = new Settings('Octopus', 'blue', ['Provincia de Mendoza']);
}
