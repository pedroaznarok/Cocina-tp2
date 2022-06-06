import Plato from "./Plato";

export function getPlatosJSON(){

    let datos:Plato[] = [{
		id: 1,
		nombre: "Pizza Especial",
		precio: 120,
		rubro: "Comidas",
		imagenPath: "pizza-especial.jpg",
		ingredientes: [{
			idIngrediente: 1,
			nombre: "harina",
			cantidad: 200.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 2,
			nombre: "huevos",
			cantidad: 2.0,
			unidadMedida: "unidades"
		}, {
			idIngrediente: 3,
			nombre: "queso",
			cantidad: 300.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 4,
			nombre: "salsa tomate",
			cantidad: 300.0,
			unidadMedida: "mililitros"
		}, {
			idIngrediente: 5,
			nombre: "jamon cocido",
			cantidad: 150.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 9,
			nombre: "agua",
			cantidad: 500.0,
			unidadMedida: "mililitro"
		}]
	},
	{
		id: 2,
		nombre: "Empanadas Docena",
		precio: 140,
		rubro: "Comidas",
		imagenPath: "empanadas.jpg",
		ingredientes: [{
			idIngrediente: 1,
			nombre: "harina",
			cantidad: 3.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 2,
			nombre: "huevos",
			cantidad: 2.0,
			unidadMedida: "unidades"
		}, {
			idIngrediente: 6,
			nombre: "carne molida",
			cantidad: 300.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 9,
			nombre: "agua",
			cantidad: 500.0,
			unidadMedida: "mililitro"
		}, {
			idIngrediente: 10,
			nombre: "cebolla",
			cantidad: 2.0,
			unidadMedida: "unidades"
		}]
	},
	{
		id: 3,
		nombre: "Lomo Completo",
		precio: 150,
		rubro: "Comidas",
		imagenPath: "lomo-completo.jpg",
		ingredientes: [{
			idIngrediente: 1,
			nombre: "harina",
			cantidad: 200.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 2,
			nombre: "huevos",
			cantidad: 1.0,
			unidadMedida: "unidades"
		}, {
			idIngrediente: 3,
			nombre: "queso",
			cantidad: 300.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 4,
			nombre: "salsa tomate",
			cantidad: 444.0,
			unidadMedida: "mililitros"
		}, {
			idIngrediente: 5,
			nombre: "jamon cocido",
			cantidad: 555.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 6,
			nombre: "carne molida",
			cantidad: 666.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 7,
			nombre: "tomate",
			cantidad: 777.0,
			unidadMedida: "unidades"
		}, {
			idIngrediente: 8,
			nombre: "lechuga",
			cantidad: 888.0,
			unidadMedida: "unidad"
		}, {
			idIngrediente: 9,
			nombre: "agua",
			cantidad: 500.0,
			unidadMedida: "mililitro"
		}]
	},
	{
		id: 4,
		nombre: "Mini Hamburguesa",
		precio: 100,
		rubro: "Comidas",
		imagenPath: "hamburguesa.jpg",
		ingredientes: [{
			idIngrediente: 1,
			nombre: "harina",
			cantidad: 3.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 2,
			nombre: "huevos",
			cantidad: 2.0,
			unidadMedida: "unidades"
		}, {
			idIngrediente: 6,
			nombre: "carne molida",
			cantidad: 500.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 7,
			nombre: "tomate",
			cantidad: 250.0,
			unidadMedida: "unidades"
		}, {
			idIngrediente: 8,
			nombre: "lechuga",
			cantidad: 300.0,
			unidadMedida: "unidad"
		}, {
			idIngrediente: 9,
			nombre: "agua",
			cantidad: 500.0,
			unidadMedida: "mililitro"
		}]
	},
	{
		id: 5,
		nombre: "Cerveza Deibeer",
		precio: 140,
		rubro: "Bebidas",
		imagenPath: "cerveza.jpg",
		ingredientes: [{
			idIngrediente: 1,
			nombre: "harina",
			cantidad: 2.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 9,
			nombre: "agua",
			cantidad: 900.0,
			unidadMedida: "mililitro"
		}, {
			idIngrediente: 11,
			nombre: "cebada",
			cantidad: 300.0,
			unidadMedida: "gramos"
		}, {
			idIngrediente: 12,
			nombre: "lupulo",
			cantidad: 300.0,
			unidadMedida: "gramos"
		}]
	}
    ];
	
	return datos
	
}

export function getPlatoXId(id:number){

    let datos:Plato = new Plato();
    if(id == 1){
        datos = {id:1,nombre:"Pizza Especial",precio:120,rubro:"Comidas",imagenPath:"pizza-especial.jpg",ingredientes:[{idIngrediente:1,nombre:"harina",cantidad:200.0,unidadMedida:"gramos"},{idIngrediente:2,nombre:"huevos",cantidad:2.0,unidadMedida:"unidades"},{idIngrediente:3,nombre:"queso",cantidad:300.0,unidadMedida:"gramos"},{idIngrediente:4,nombre:"salsa tomate",cantidad:300.0,unidadMedida:"mililitros"},{idIngrediente:5,nombre:"jamon cocido",cantidad:150.0,unidadMedida:"gramos"},{idIngrediente:9,nombre:"agua",cantidad:500.0,unidadMedida:"mililitro"}]}
		return datos;
	}else if(id == 2){
        datos = {id:2,nombre:"Empanadas Docena",precio:140,rubro:"Comidas",imagenPath:"empanadas.jpg",ingredientes:[{idIngrediente:1,nombre:"harina",cantidad:3.0,unidadMedida:"gramos"},{idIngrediente:2,nombre:"huevos",cantidad:2.0,unidadMedida:"unidades"},{idIngrediente:6,nombre:"carne molida",cantidad:300.0,unidadMedida:"gramos"},{idIngrediente:9,nombre:"agua",cantidad:500.0,unidadMedida:"mililitro"},{idIngrediente:10,nombre:"cebolla",cantidad:2.0,unidadMedida:"unidades"}]}
		return datos;
	}else if(id == 3){
        datos = {id:3,nombre:"Lomo Completo",precio:150,rubro:"Comidas",imagenPath:"lomo-completo.jpg",ingredientes:[{idIngrediente:1,nombre:"harina",cantidad:200.0,unidadMedida:"gramos"},{idIngrediente:2,nombre:"huevos",cantidad:1.0,unidadMedida:"unidades"},{idIngrediente:3,nombre:"queso",cantidad:300.0,unidadMedida:"gramos"},{idIngrediente:4,nombre:"salsa tomate",cantidad:444.0,unidadMedida:"mililitros"},{idIngrediente:5,nombre:"jamon cocido",cantidad:555.0,unidadMedida:"gramos"},{idIngrediente:6,nombre:"carne molida",cantidad:666.0,unidadMedida:"gramos"},{idIngrediente:7,nombre:"tomate",cantidad:777.0,unidadMedida:"unidades"},{idIngrediente:8,nombre:"lechuga",cantidad:888.0,unidadMedida:"unidad"},{idIngrediente:9,nombre:"agua",cantidad:500.0,unidadMedida:"mililitro"}]}
		return datos;
	}else if(id == 4){
        datos = {id:4,nombre:"Mini Hamburguesa",precio:100,rubro:"Comidas",imagenPath:"hamburguesa.jpg",ingredientes:[{idIngrediente:1,nombre:"harina",cantidad:3.0,unidadMedida:"gramos"},{idIngrediente:2,nombre:"huevos",cantidad:2.0,unidadMedida:"unidades"},{idIngrediente:6,nombre:"carne molida",cantidad:500.0,unidadMedida:"gramos"},{idIngrediente:7,nombre:"tomate",cantidad:250.0,unidadMedida:"unidades"},{idIngrediente:8,nombre:"lechuga",cantidad:300.0,unidadMedida:"unidad"},{idIngrediente:9,nombre:"agua",cantidad:500.0,unidadMedida:"mililitro"}]}
		return datos;
	}else if(id == 5){
        datos = {id:5,nombre:"Cerveza Deibeer",precio:140,rubro:"Bebidas",imagenPath:"cerveza.jpg",ingredientes:[{idIngrediente:1,nombre:"harina",cantidad:2.0,unidadMedida:"gramos"},{idIngrediente:9,nombre:"agua",cantidad:900.0,unidadMedida:"mililitro"},{idIngrediente:11,nombre:"cebada",cantidad:300.0,unidadMedida:"gramos"},{idIngrediente:12,nombre:"lupulo",cantidad:300.0,unidadMedida:"gramos"}]}
		return datos;
	}else{
		return datos;
	}
    
}

export async function getPlatosJSONFetch(){
	let urlServer = 'http://localhost:8084/api/platos';
	let response = await fetch(urlServer, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log("Test");
	console.log("Test");
	console.log("Test");
	console.log("Test");
	return await response.json();
}

export async function getPlatosXIdFetch(id:number){
	let urlServer = 'http://localhost:8084/api/platosxid/'+id;
	let response = await fetch(urlServer, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log(response);
	return await response.json();
}