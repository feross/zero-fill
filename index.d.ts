declare module "zero-fill"{
    export default function zeroFill(width:number, num:number, pad?:string|number):string;
    export default function zeroFill(width:number):{(num:number, pad?:string|number):string};
}
