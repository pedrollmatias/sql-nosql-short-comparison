-- e) consultas em SQL
--1) Selecionar o nome e sobrenome dos empregados que já tiveram cargo “Accountant”.
select e.nm_empregado, e.nm_sobrenome
from empregado e inner join historico_emprego h ON e.nu_empregado = h.nu_empregado
where h.nm_cargo = 'Accountant';

--2) Selecionar o nome do departamento e a quantidade de empregados por departamento,
--   apresentando o resultado em ordem crescente de nome de departamento.
select d.nm_depto, count(e.nu_depto)
from departamento d inner join empregado e ON d.nu_depto = e.nu_depto
group by d.nm_depto
order by d.nm_depto asc;

--3) Selecionar o nome e sobrenome dos empregados que ocuparam um cargo por 3 anos.
select distinct e.nm_empregado, e.nm_sobrenome
from empregado e inner join historico_emprego h ON e.nu_empregado = h.nu_empregado
where (h.dt_fim - h.dt_inicio)/365 = 3;


-- f) Operacao de atualizacao
UPDATE HISTORICO_EMPREGO
SET salario = 32000
WHERE nm_cargo = 'Software Engineer';
-- verificacao
select * from HISTORICO_EMPREGO
ORDER BY nu_empregado, dt_inicio;


-- g) Operacao de remocao
DELETE FROM HISTORICO_EMPREGO
WHERE nu_empregado = 8;
-- verificacao
select * from HISTORICO_EMPREGO;