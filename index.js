import colecao_Chuva_meteoros from "./data/chuva-de-meteoros.js";
import {
  verificaChuvaVisivelPorData,
  verificaChuvaVisivelProximos2Meses,
} from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date(25/3/2022);

const chuvasVisiveisHoje = colecao_Chuva_meteoros.filter((chuva) =>
  verificaChuvaVisivelPorData(chuva, dataAtual)
);

const chuvasVisiveisProximos2Meses = colecao_Chuva_meteoros.filter((chuva) =>
  verificaChuvaVisivelProximos2Meses(chuva, dataAtual)
);

console.log('Chuva de meteoros');


if (chuvasVisiveisHoje.length > 0) {
  console.log("CHUVAS QUE PODEM SER VISTAS HOJE");

  console.log(chuvasVisiveisHoje);

} else {
  console.log("\nNão há chuvas passando Hoje");
}

console.log("CHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES");
console.log(chuvasVisiveisProximos2Meses);
