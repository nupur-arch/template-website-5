export type Category="Modalidades"|"Prática"|"Equipamentos"|"Calendários"|"Cultura";
export type Article={id:string;slug:string;title:string;dek:string;category:Category;topic:string;image?:string;time:string;author:string;published:string;body:string};
export type Team={id:string;name:string;short:string;color:string;logo?:string};
export type Player={id:string;name:string;teamId:string;position:string;goals:number};
export type Match={id:string;homeId:string;awayId:string;homeScore?:number;awayScore?:number;status:"Final"|"Live"|"Upcoming";date:string;venue:string;scorer?:string};
export type Standing={teamId:string;played:number;won:number;drawn:number;lost:number;gd:number;points:number};
