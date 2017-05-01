declare module "zero-fill"{
    export function zeroFill(width:number, num:number, pad?:string|number):string;
    export function zeroFill(width:number):{(num:number, pad?:string|number):string};
}


