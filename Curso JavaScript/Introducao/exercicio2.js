function retornarNumerosPares(x, y) {
  var numerosPares = "";
  while (x <= y) {
    if (x % 2 === 0) {
      numerosPares += x + ",";
    }
    x++;
  }

  console.log(numerosPares.substring(0, numerosPares.length - 1));
}

retornarNumerosPares(1, 100);
