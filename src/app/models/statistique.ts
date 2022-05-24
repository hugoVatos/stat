export class Statistique {

  id?: string;
  title?: string;
  value?: string;
  updatedAt?: string;


  constructor(id: string, title: string, value: string, updatedAt: string) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.updatedAt = updatedAt;

  }

}
