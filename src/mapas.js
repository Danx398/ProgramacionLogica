/* Se contruye nuestro mapa el cual es un objeto */
const datos1 = new Map();
datos1.set('nombre','Daniel');
/* El .set asigna al mapa en la posición que corresponda para que se llene en automatico el valor
=> Es infinito, se puede llenar las veces que sea necesario
*/
datos1.set('edad','21');
datos1.set(1,"Holis");
console.log(datos1.get(1));
