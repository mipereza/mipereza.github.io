mensajeArray = new Array();
mensajeArray.push({title: 'Mateo 25:40', text:"40. Y respondiendo el Rey, les dirá: De cierto os digo que en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis."});
mensajeArray.push({title: 'Juan 13:34', text:"34. Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis los unos a los otros."});
mensajeArray.push({title: 'Efesios 4:32', text:"32. Más bien, sed benignos los unos con los otros, misericordiosos, perdonándoos los unos a los otros, como también Dios os perdonó a vosotros en Cristo."});
mensajeArray.push({title: 'Mateo 20:28', text:"28. Así como el Hijo del Hombre no vino para ser servido, sino para servir y para dar su vida en rescate por muchos."});
mensajeArray.push({title: '1 Timoteo 5:8', text:"8. Porque si alguno no provee para los suyos, y mayormente para los de su casa, ha negado la fe y es peor que un incrédulo."});
mensajeArray.push({title: 'Lucas 22:27', text:"27. Porque, ¿cuál es mayor, el que se sienta a la mesa o el que sirve? ¿No es el que se sienta a la mesa? Sin embargo, yo estoy entre vosotros como el que sirve."});
mensajeArray.push({title: 'Tito 3:8', text:"8. Palabra fiel es esta, y en estas cosas quiero que insistas con firmeza, para que los que creen en Dios procuren ocuparse en buenas obras. Estas cosas son buenas y útiles a los hombres."});

number = new Date();
number = number.getDay() % mensajeArray.length;

document.getElementById("verseTitle").innerHTML = mensajeArray[number].title;
document.getElementById("verseText").innerHTML = mensajeArray[number].text;