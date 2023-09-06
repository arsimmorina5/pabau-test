 export interface Interns {
  name: string;
  age: number;
  skills: string[];
}

export interface Juniors {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: Date;
  domain: Domain;
}

export enum Domain {
  Web = "Web",
  Connect = "Connect",
  Backend = "Backend",
}

export interface Company {
  Interns: Interns[];
  Juniors: Juniors[];
  Country: string;
}


