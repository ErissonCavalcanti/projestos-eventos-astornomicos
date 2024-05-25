export const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
  const anoAtual = dataAtual.getFullYear();

  const dataInicio = new Date(chuva.inicio + "/" + anoAtual);
  const dataFim = new Date(chuva.fim + "/" + anoAtual);

  if (dataInicio.getMonth() + 1 > dataFim.getMonth() + 1) {
    const anoFinal = dataFim.getFullYear();
    dataFim.setFullYear(anoFinal + 1);
  }

  return dataAtual >= dataInicio && dataAtual <= dataFim;
};

export const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
  const dataAtual = data;
  const anoAtual = dataAtual.getFullYear();
  const dataInicio = new Date(chuva.inicio + "/" + anoAtual);
  const dataFim = new Date(dataAtual);
  if (dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1) {
    const anoFinal = dataInicio.getFullYear();
    dataInicio.setFullYear(anoFinal + 1);
  }
  dataFim.setMonth(dataFim.getMonth() + 2);
  return dataAtual < dataInicio && dataInicio < dataFim;
};
