export interface ToolPlan {name:string;price:number;features:string[]}
export interface ToolPricing {startingPrice:number;currency:string;billingPeriod:string;plans:ToolPlan[]}
export interface ToolFeatures {btwAangifte:boolean;facturen:boolean;bankKoppeling:boolean;urenRegistratie:boolean;projectAdministratie:boolean;offertes:boolean;mobileApp:boolean;api:boolean}
export interface ToolScore {overall:number;easeOfUse:number;features:number;support:number;valueForMoney:number}
export interface Tool {id:string;name:string;slug:string;tagline:string;description:string;website:string;logo:string;category:string;pricing:ToolPricing;features:ToolFeatures;scores:ToolScore;pros:string[];cons:string[];affiliateUrl:string;badge:string|null}
