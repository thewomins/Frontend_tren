

class Tren{
    constructor(numero_serie,velocidad,asientos){
        this.numero_serie=numero_serie;
        this.velocidad=velocidad;
    }

    asignar_asientos(numero_asientos) {
        let array =[]
        for (let index = 0; index < numero_asientos; index++) {
            array.push({
                numero:index+1,
                estado:false
            })
        }
        this.asientos=array
    }
}

export {Tren};