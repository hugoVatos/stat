export class Statistique {

  libelle? : string;
  pourcent? : string;
  code?: string;

  constructor(libelle : string, pourcent : string, code : string) {
    this.libelle = libelle;
    this.pourcent = pourcent;
    this.code = code;
  }
}


