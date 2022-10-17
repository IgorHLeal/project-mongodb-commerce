const totalProdutos = db.produtos.count();

db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos
  }
);

db.resumoProdutos.find(
  {},
  {
    franquia: 1,
    totalProdutos: 1,
    _id: 0,
  },
);

/* Refatorando requisito:
Adicionando uma constante;
Resolução encontrada em uma thread de Airel Ribeiro: https://trybecourse.slack.com/archives/C02TH6V3MC5/p1666034996028089?thread_ts=1666034775.825169&cid=C02TH6V3MC5 */