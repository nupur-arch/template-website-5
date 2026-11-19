export const sections=[
  {slug:"modalidades",name:"Modalidades",topics:["quadra","pista"]},
  {slug:"pratica",name:"Prática",topics:["iniciação","treinamento"]},
  {slug:"equipamentos",name:"Equipamentos",topics:["escolha","manutenção"]},
  {slug:"calendarios",name:"Calendários",topics:["competições","inscrições"]},
  {slug:"cultura",name:"Cultura",topics:["clubes","comunidades"]},
] as const;
export const siteConfig={name:"Esporte no Ritmo",shortName:"ER",defaultRoute:"/",language:"pt-BR",categories:sections.map(s=>s.name),sections,leagues:[{id:"quadra",name:"Quadra"},{id:"pista",name:"Pista"}]} as const;
