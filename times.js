const fs = require('fs');
const csv = require('csv-parser');

const resultados = [];

fs.createReadStream('times_campeonato.csv')
  .pipe(csv())
  .on('data', (data) => resultados.push(data))
  .on('end', () => {
    console.log("Times do Campeonato Brasileiro:\n");

    resultados.forEach((time) => {
      console.log(`Série ${time.serie} - ${time.time}`);
    });
  });