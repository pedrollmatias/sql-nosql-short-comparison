// Consultas em NoSQL
// 1) Selecionar o nome e sobrenome dos empregados que já tiveram cargo “Accountant”.
db.empregados.find({ 'historico.nm_cargo': 'Accountant' }, { nm_sobrenome: 1, nm_empregado: 1 }).pretty();

// 2) Selecionar o nome do departamento e a quantidade de empregados por departamento,
// apresentando o resultado em ordem crescente de nome de departamento.
db.departamentos.aggregate(
  { $project: { nm_depto: '$nm_depto', count: { $size: '$empregados' } } },
  { $sort: { nm_depto: 1 } }
).pretty();

// 3) Selecionar o nome e sobrenome dos empregados que ocuparam um cargo com salario maior que 25000.
db.empregados.find({ 'historico.salario': { $gt: 25000 } }, { nm_sobrenome: 1, nm_empregado: 1 }).pretty();

// Operações de atualização
// 4) Operacao de atualizacao
db.empregados.updateMany({ 'historico.nm_cargo': 'Software Engineer' }, { $set: { 'historico.$.salario': 320000 } });
// Verificacao
db.empregados.find({ 'historico.nm_cargo': 'Software Engineer' }).pretty();

// 5) Operacao de remocao
db.empregados.update({ nu_empregado: 8 }, { $set: { historico: [] } });
// Verificacao
db.empregados.find({ nu_empregado: 8 }).pretty();