declare module "zero-fill"{
	function zeroFill(width:number, num:number, pad?:string|number):string
    function zeroFill(width:number):{(num:number, pad?:string|number):string}
	export {zeroFill}
}
