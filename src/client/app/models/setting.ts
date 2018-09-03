export class Settings {

  name: string;
  theme: string;
  provinciasHabilitadas: Array<string>;

  constructor(name: string, theme: string, provinciasHabilitadas: Array<string>) {
      this.name = name;
      this.theme = theme;
      this.provinciasHabilitadas = provinciasHabilitadas;
   }
}
