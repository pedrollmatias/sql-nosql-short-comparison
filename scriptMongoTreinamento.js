// Dropando as collections caso existam
db.empregados.drop();
db.departamentos.drop();
db.cursos.drop();

// Criando as collections ("tabelas")
db.createCollection('empregados');
db.createCollection('departamentos');
db.createCollection('cursos');

// Inserindo dados nas collections
// Empregados
const empregados = [
  {
    nu_empregado: 1,
    nm_sobrenome: 'Jones',
    nm_empregado: 'Elizabeth Barbara',
    dt_nascimento: new Date('1944-01-05'),
    te_endereco: '26 Agnews Terrace, Shamrock Bay',
    nu_telefone: '212 337 2288',
    historico: [
      {
        nm_cargo: 'Accounts Manager',
        dt_inicio: new Date('1972-02-11'),
        dt_fim: null,
        salario: 30000,
      },
      {
        nm_cargo: 'Assistant Accounts Manager',
        dt_inicio: new Date('1976-01-12'),
        dt_fim: new Date('1976-01-12'),
        salario: 22000,
      },
      {
        nm_cargo: 'Accountant',
        dt_inicio: new Date('1968-03-10'),
        dt_fim: new Date('1972-02-11'),
        salario: 15000,
      },
      {
        nm_cargo: 'Junior Accountant',
        dt_inicio: new Date('1964-04-09'),
        dt_fim: new Date('1968-03-10'),
        salario: 6000,
      },
    ]
  },
  {
    nu_empregado: 2,
    nm_sobrenome: 'Smith',
    nm_empregado: 'Robert',
    dt_nascimento: new Date('1947-02-07'),
    te_endereco: '18 Marsh Street, Tollcross, Edinburgh',
    nu_telefone: '031 732 8972',
    historico: [
      {
        nm_cargo: 'Assistant Accounts Manager',
        dt_inicio: new Date('1976-05-08'),
        dt_fim: null,
        salario: 25000
      },
      {
        nm_cargo: 'Accountant',
        dt_inicio: new Date('1971-06-07'),
        dt_fim: new Date('1976-05-08'),
        salario: 16000
      },
      {
        nm_cargo: 'Junior Accountant',
        dt_inicio: new Date('1967-07-06'),
        dt_fim: new Date('1971-06-07'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 3,
    nm_sobrenome: 'White',
    nm_empregado: 'Allan',
    dt_nascimento: new Date('1961-05-05'),
    te_endereco: '6 Remote Place, North Berwick',
    nu_telefone: '121 555 6622',
    historico: [
      {
        nm_cargo: 'Accountant',
        dt_inicio: new Date('1984-08-05'),
        dt_fim: null,
        salario: 16000
      },
      {
        nm_cargo: 'Junior Accountant',
        dt_inicio: new Date('1981-09-04'),
        dt_fim: new Date('1984-08-05'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 4,
    nm_sobrenome: 'Reid',
    nm_empregado: 'Gordon',
    dt_nascimento: new Date('1963-08-10'),
    te_endereco: '9 Noble Road, Penicuik',
    nu_telefone: '629 424 6713',
    historico: [
      {
        nm_cargo: 'Accountant',
        dt_inicio: new Date('1989-10-05'),
        dt_fim: null,
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 5,
    nm_sobrenome: 'MacCallan',
    nm_empregado: 'Claire',
    dt_nascimento: new Date('1958-09-18'),
    te_endereco: '25 Crisis Avenue, Leith, Edinburgh',
    nu_telefone: '031 337 4166',
    historico: [
      {
        nm_cargo: 'Accountant',
        dt_inicio: new Date('1980-11-02'),
        dt_fim: null,
        salario: 16000
      },
      {
        nm_cargo: 'Junior Accountant',
        dt_inicio: new Date('1978-12-01'),
        dt_fim: new Date('1980-11-02'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 6,
    nm_sobrenome: 'Murphy',
    nm_empregado: 'Brian Charles',
    dt_nascimento: new Date('1954-06-30'),
    te_endereco: '9 Roberts Street, Biggar',
    nu_telefone: '331 229 4147',
    historico: [
      {
        nm_cargo: 'Accountant',
        dt_inicio: new Date('1980-01-12'),
        dt_fim: null,
        salario: 16000
      },
      {
        nm_cargo: 'Junior Accountant',
        dt_inicio: new Date('1974-02-11'),
        dt_fim: new Date('1980-01-12'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 7,
    nm_sobrenome: 'Gibson',
    nm_empregado: 'James',
    dt_nascimento: new Date('1948-03-09'),
    te_endereco: '11 Depressed Way, Glasgow',
    nu_telefone: '041 447 8001',
    historico: [
      {
        nm_cargo: 'Admin Manager',
        dt_inicio: new Date('1980-03-10'),
        dt_fim: null,
        salario: 30000
      },
      {
        nm_cargo: 'Assistant Admin Manager',
        dt_inicio: new Date('1974-04-09'),
        dt_fim: new Date('1980-03-10'),
        salario: 22000
      },
      {
        nm_cargo: 'Senior Admin Assistant',
        dt_inicio: new Date('1968-12-01'),
        dt_fim: new Date('1974-04-09'),
        salario: 16000
      },
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1960-05-07'),
        dt_fim: new Date('1968-12-01'),
        salario: 10000
      },
    ]
  },
  {
    nu_empregado: 8,
    nm_sobrenome: 'Andrews',
    nm_empregado: 'John',
    dt_nascimento: new Date('1958-01-02'),
    te_endereco: '73 Long Road, Lengthitown',
    nu_telefone: '70 229 7213',
    historico: [
      {
        nm_cargo: 'Assistant Admin Manager',
        dt_inicio: new Date('1980-03-10'),
        dt_fim: null,
        salario: 20000
      },
      {
        nm_cargo: 'Senior Admin Assistant',
        dt_inicio: new Date('1977-04-09'),
        dt_fim: new Date('1980-03-10'),
        salario: 12000
      },
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1976-12-01'),
        dt_fim: new Date('1977-04-09'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 9,
    nm_sobrenome: 'Wright',
    nm_empregado: 'Audrey Mary',
    dt_nascimento: new Date('1958-01-02'),
    te_endereco: '10 Nile Terrace, Polwarth, Edinburgh',
    nu_telefone: '031 424 7092',
    historico: [
      {
        nm_cargo: 'Senior Admin Assistant',
        dt_inicio: new Date('1988-07-10'),
        dt_fim: null,
        salario: 14000
      },
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1982-06-08'),
        dt_fim: new Date('1988-07-10'),
        salario: 10000
      },
    ]
  },
  {
    nu_empregado: 10,
    nm_sobrenome: 'Reagan',
    nm_empregado: 'Anne',
    dt_nascimento: new Date('1961-08-17'),
    te_endereco: '82 Longstone Road, Longstone, Edinburgh',
    nu_telefone: '031 111 2799',
    historico: [
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1986-09-06'),
        dt_fim: null,
        salario: 12000
      },
      {
        nm_cargo: 'Junior Admin Assistant',
        dt_inicio: new Date('1983-09-22'),
        dt_fim: new Date('1986-09-06'),
        salario: 6000
      },
    ]
  },
  {
    nu_empregado: 11,
    nm_sobrenome: 'North',
    nm_empregado: 'Annabel',
    dt_nascimento: new Date('1962-09-01'),
    te_endereco: '35 Marchmont Terrace, Marchmont, Edinburgh',
    nu_telefone: '031 447 2266',
    historico: [
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1982-03-13'),
        dt_fim: null,
        salario: 15000
      },
      {
        nm_cargo: 'Junior Admin Assistant',
        dt_inicio: new Date('1980-10-23'),
        dt_fim: new Date('1982-03-13'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 12,
    nm_sobrenome: 'South',
    nm_empregado: 'Todd James',
    dt_nascimento: new Date('1959-02-28'),
    te_endereco: '10 Shandon Road, Merchiston, Edinburgh',
    nu_telefone: '031 333 1008',
    historico: [
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1982-02-26'),
        dt_fim: null,
        salario: 15000
      },
      {
        nm_cargo: 'Junior Admin Assistant',
        dt_inicio: new Date('1977-01-03'),
        dt_fim: new Date('1982-02-26'),
        salario: 6500
      },
    ]
  },
  {
    nu_empregado: 13,
    nm_sobrenome: 'East',
    nm_empregado: 'Ian',
    dt_nascimento: new Date('1942-05-13'),
    te_endereco: '47 Colinton Road, Craighlochart, Edinburgh',
    nu_telefone: '031 424 5665',
    historico: [
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1988-04-17'),
        dt_fim: null,
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 14,
    nm_sobrenome: 'West',
    nm_empregado: 'Jack',
    dt_nascimento: new Date('1946-06-15'),
    te_endereco: '15 South West Gardens, Peebles',
    nu_telefone: '466 3176',
    historico: [
      {
        nm_cargo: 'Admin Assistant',
        dt_inicio: new Date('1985-11-14'),
        dt_fim: null,
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 15,
    nm_sobrenome: 'Allen',
    nm_empregado: 'Ester',
    dt_nascimento: new Date('1955-02-27'),
    te_endereco: '10 Troon Street, Leith, Edinburgh',
    nu_telefone: '031 424 2907',
    historico: [
      {
        nm_cargo: 'Senior Systems Analyst',
        dt_inicio: new Date('1988-08-21'),
        dt_fim: null,
        salario: 35000
      },
      {
        nm_cargo: 'Systems Analyst',
        dt_inicio: new Date('1986-02-09'),
        dt_fim: new Date('1988-08-21'),
        salario: 31000
      },
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1984-01-17'),
        dt_fim: new Date('1986-02-09'),
        salario: 25000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1980-05-13'),
        dt_fim: new Date('1984-01-17'),
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 16,
    nm_sobrenome: 'Brunell',
    nm_empregado: 'Liza',
    dt_nascimento: new Date('1962-08-18'),
    te_endereco: '8 Commercial Street, Tollcross, Edinburgh',
    nu_telefone: '031 424 1656',
    historico: [
      {
        nm_cargo: 'Systems Analyst',
        dt_inicio: new Date('1991-04-25'),
        dt_fim: null,
        salario: 30000
      },
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1986-11-16'),
        dt_fim: new Date('1991-04-25'),
        salario: 21000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1984-10-01'),
        dt_fim: new Date('1986-11-16'),
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 17,
    nm_sobrenome: 'Robertson',
    nm_empregado: 'David Andrew',
    dt_nascimento: new Date('1960-08-07'),
    te_endereco: '9 North Loan,South Queensferry',
    nu_telefone: '031 447 8213',
    historico: [
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1988-01-17'),
        dt_fim: null,
        salario: 21000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1984-10-01'),
        dt_fim: new Date('1988-01-17'),
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 18,
    nm_sobrenome: 'Robinson',
    nm_empregado: 'Allan',
    dt_nascimento: new Date('1961-06-09'),
    te_endereco: '31 Newall Terrace, Hawick',
    nu_telefone: '229 0854',
    historico: [
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1988-09-23'),
        dt_fim: null,
        salario: 22000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1984-10-01'),
        dt_fim: new Date('1988-09-23'),
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 19,
    nm_sobrenome: 'Roberts',
    nm_empregado: 'Robert',
    dt_nascimento: new Date('1959-01-01'),
    te_endereco: '7 Peebles Road,Melrose',
    nu_telefone: '402 9213',
    historico: [
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1988-09-23'),
        dt_fim: null,
        salario: 22000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1984-10-01'),
        dt_fim: new Date('1988-09-23'),
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 20,
    nm_sobrenome: 'Murray',
    nm_empregado: 'James',
    dt_nascimento: new Date('1964-03-06'),
    te_endereco: '40 Blackhall Loan,Biggar',
    nu_telefone: '121 444 4580',
    historico: [
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1988-09-23'),
        dt_fim: null,
        salario: 22000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1984-10-01'),
        dt_fim: new Date('1988-09-23'),
        salario: 16000
      },
    ]
  },
  {
    nu_empregado: 21,
    nm_sobrenome: 'Bryce',
    nm_empregado: 'Anne',
    dt_nascimento: new Date('1965-09-13'),
    te_endereco: '22 Forresthill Place, Greyfriars, Edinburgh',
    nu_telefone: '031 402 6666'
    ,
    historico: [
      {
        nm_cargo: 'Analyst Programmer',
        dt_inicio: new Date('1991-12-13'),
        dt_fim: null,
        salario: 25000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1989-09-11'),
        dt_fim: new Date('1991-12-13'),
        salario: 21000
      },
    ]
  },
  {
    nu_empregado: 22,
    nm_sobrenome: 'Cowan',
    nm_empregado: 'Audrey',
    dt_nascimento: new Date('1940-04-03'),
    te_endereco: '12 Down Street, Brayend',
    nu_telefone: '228 9321',
    historico: [
      {
        nm_cargo: 'Communications Manager',
        dt_inicio: new Date('1985-08-03'),
        dt_fim: null,
        salario: 36000
      },
      {
        nm_cargo: 'Senior Communications Engineer',
        dt_inicio: new Date('1977-06-21'),
        dt_fim: new Date('1985-08-03'),
        salario: 26000
      },
      {
        nm_cargo: 'Communications Engineer',
        dt_inicio: new Date('1975-05-13'),
        dt_fim: new Date('1977-06-21'),
        salario: 12000
      },
      {
        nm_cargo: 'Electrical Engineer',
        dt_inicio: new Date('1966-02-08'),
        dt_fim: new Date('1975-05-13'),
        salario: 8000
      },
    ]
  },
  {
    nu_empregado: 23,
    nm_sobrenome: 'Stevenson',
    nm_empregado: 'John David',
    dt_nascimento: new Date('1954-12-12'),
    te_endereco: '16 Rubber Road,Stampingham',
    nu_telefone: '337 6262',
    historico: [
      {
        nm_cargo: 'Senior Communications Engineer',
        dt_inicio: new Date('1985-08-03'),
        dt_fim: null,
        salario: 18000
      },
      {
        nm_cargo: 'Communications Engineer',
        dt_inicio: new Date('1979-06-21'),
        dt_fim: new Date('1985-08-03'),
        salario: 9000
      },
      {
        nm_cargo: 'Software Engineer',
        dt_inicio: new Date('1977-02-14'),
        dt_fim: new Date('1979-06-21'),
        salario: 5000
      },
    ]
  },
  {
    nu_empregado: 24,
    nm_sobrenome: 'Dickson',
    nm_empregado: 'William',
    dt_nascimento: new Date('1950-01-06'),
    te_endereco: '11 Newplace Road, Newton',
    nu_telefone: '041 444 6730',
    historico: [
      {
        nm_cargo: 'Communications Engineer',
        dt_inicio: new Date('1985-10-08'),
        dt_fim: null,
        salario: 15000
      },
      {
        nm_cargo: 'Electrical Engineer',
        dt_inicio: new Date('1980-05-06'),
        dt_fim: new Date('1985-10-08'),
        salario: 13000
      },
    ]
  },
  {
    nu_empregado: 25,
    nm_sobrenome: 'Brownlie',
    nm_empregado: 'Matthew',
    dt_nascimento: new Date('1954-05-14'),
    te_endereco: '80 Cowan Road, Shandon, Edinburgh',
    nu_telefone: '031 228 4141',
    historico: [
      {
        nm_cargo: 'Communications Engineer',
        dt_inicio: new Date('1988-10-01'),
        dt_fim: null,
        salario: 19000
      },
      {
        nm_cargo: 'Software Engineer',
        dt_inicio: new Date('1985-08-25'),
        dt_fim: new Date('1988-10-01'),
        salario: 16000
      },
      {
        nm_cargo: 'Systems Programmer',
        dt_inicio: new Date('1983-01-29'),
        dt_fim: new Date('1985-08-25'),
        salario: 11000
      },
      {
        nm_cargo: 'Programmer',
        dt_inicio: new Date('1980-09-14'),
        dt_fim: new Date('1983-01-29'),
        salario: 9000
      },
    ]
  },
  {
    nu_empregado: 26,
    nm_sobrenome: 'Gordon',
    nm_empregado: 'Mark',
    dt_nascimento: new Date('1960-02-12'),
    te_endereco: '10 Whyte Place, North Berwick',
    nu_telefone: '424 1024',
    historico: [
      {
        nm_cargo: 'Communications Engineer',
        dt_inicio: new Date('1988-03-13'),
        dt_fim: null,
        salario: 19500
      },
      {
        nm_cargo: 'Software Engineer',
        dt_inicio: new Date('1985-08-30'),
        dt_fim: new Date('1988-03-13'),
        salario: 17000
      },
      {
        nm_cargo: 'Trainee Engineer',
        dt_inicio: new Date('1982-09-13'),
        dt_fim: new Date('1985-08-30'),
        salario: 11000
      },
      {
        nm_cargo: 'Electronic Engineer',
        dt_inicio: new Date('1980-09-01'),
        dt_fim: new Date('1982-09-13'),
        salario: 9000
      },
    ]
  },
  {
    nu_empregado: 27,
    nm_sobrenome: 'Kennedy',
    nm_empregado: 'Luke',
    dt_nascimento: new Date('1952-07-26'),
    te_endereco: '14 Bucket Street, Musselburgh',
    nu_telefone: '031 414 7312',
    historico: [
      {
        nm_cargo: 'Senior Chief Engineer',
        dt_inicio: new Date('1990-11-01'),
        dt_fim: null,
        salario: 25000
      },
      {
        nm_cargo: 'Chief Engineer',
        dt_inicio: new Date('1986-06-20'),
        dt_fim: new Date('1990-11-01'),
        salario: 17000
      },
      {
        nm_cargo: 'Mechanical Engineer',
        dt_inicio: new Date('1981-04-19'),
        dt_fim: new Date('1986-06-20'),
        salario: 11000
      },
      {
        nm_cargo: 'Graduate Engineer',
        dt_inicio: new Date('1975-09-13'),
        dt_fim: new Date('1981-04-19'),
        salario: 6000
      },
    ]
  },
  {
    nu_empregado: 28,
    nm_sobrenome: 'Grant',
    nm_empregado: 'Lynn',
    dt_nascimento: new Date('1956-07-12'),
    te_endereco: '3 Dey Terrace, Selkirk',
    nu_telefone: '337 8911',
    historico: [
      {
        nm_cargo: 'Chief Engineer',
        dt_inicio: new Date('1989-07-06'),
        dt_fim: null,
        salario: 29000
      },
      {
        nm_cargo: 'Civil Engineer',
        dt_inicio: new Date('1984-04-17'),
        dt_fim: new Date('1989-07-06'),
        salario: 17000
      },
      {
        nm_cargo: 'Trainee Engineer',
        dt_inicio: new Date('1978-12-10'),
        dt_fim: new Date('1984-04-17'),
        salario: 12000
      },
      {
        nm_cargo: 'Graduate Engineer',
        dt_inicio: new Date('1978-09-01'),
        dt_fim: new Date('1978-12-10'),
        salario: 3000
      },
    ]
  },
  {
    nu_empregado: 29,
    nm_sobrenome: 'MacDonald',
    nm_empregado: 'Elizabeth',
    dt_nascimento: new Date('1968-09-03'),
    te_endereco: '23 Neidpath Road, Peebles',
    nu_telefone: '444 8998',
    historico: [
      {
        nm_cargo: 'Electrical Engineer',
        dt_inicio: new Date('1986-02-09'),
        dt_fim: null,
        salario: 17000
      },
      {
        nm_cargo: 'Graduate Engineer',
        dt_inicio: new Date('1980-10-03'),
        dt_fim: new Date('1986-02-09'),
        salario: 14000
      },
    ]
  },
  {
    nu_empregado: 30,
    nm_sobrenome: 'MacDugle',
    nm_empregado: 'Shirley',
    dt_nascimento: new Date('1964-10-09'),
    te_endereco: '8 Rosebank Terrace, Shandon, Edinburgh',
    nu_telefone: '031 447 1189',
    historico: [
      {
        nm_cargo: 'Senior Electrical Engineer',
        dt_inicio: new Date('1992-04-30'),
        dt_fim: null,
        salario: 22000
      },
      {
        nm_cargo: 'Electrical Engineer',
        dt_inicio: new Date('1987-03-06'),
        dt_fim: new Date('1992-04-30'),
        salario: 17000
      },
    ]
  },
  {
    nu_empregado: 31,
    nm_sobrenome: 'Douglas',
    nm_empregado: 'Chris',
    dt_nascimento: new Date('1955-06-23'),
    te_endereco: '19 High Street, Livingston',
    nu_telefone: '031 229 6792',
    historico: [
      {
        nm_cargo: 'Senior Mechanical Engineer',
        dt_inicio: new Date('1987-05-30'),
        dt_fim: null,
        salario: 22000
      },
      {
        nm_cargo: 'Mechanical Engineer',
        dt_inicio: new Date('1980-06-06'),
        dt_fim: new Date('1987-05-30'),
        salario: 17000
      },
    ]
  },
  {
    nu_empregado: 32,
    nm_sobrenome: 'Christie',
    nm_empregado: 'Malcolm',
    dt_nascimento: new Date('1959-07-25'),
    te_endereco: '11 Rounders Park, Polwarth, Edinburgh',
    nu_telefone: '031 424 8406',
    historico: [
      {
        nm_cargo: 'Systems Engineer',
        dt_inicio: new Date('1991-03-01'),
        dt_fim: null,
        salario: 19000
      },
      {
        nm_cargo: 'Electronics Engineer',
        dt_inicio: new Date('1989-10-31'),
        dt_fim: new Date('1991-03-01'),
        salario: 18000
      },
    ]
  }
];
db.empregados.insert(empregados);

// Departamentos
const deptos = [
  {
    nm_depto: 'accounts',
    nm_localizacao: 'floor 3',
    nu_setor: 1,
    empregados: [
      {
        nu_empregado: 1,
        nm_sobrenome: 'Jones',
        nm_empregado: 'Elizabeth Barbara',
      },
      {
        nu_empregado: 2,
        nm_sobrenome: 'Smith',
        nm_empregado: 'Robert',
        dt_nascimento: new Date('1947-02-07'),
      },
      {
        nu_empregado: 3,
        nm_sobrenome: 'White',
        nm_empregado: 'Allan',
      },
      {
        nu_empregado: 4,
        nm_sobrenome: 'Reid',
        nm_empregado: 'Gordon',
      },
      {
        nu_empregado: 5,
        nm_sobrenome: 'MacCallan',
        nm_empregado: 'Claire',
      },
      {
        nu_empregado: 6,
        nm_sobrenome: 'Murphy',
        nm_empregado: 'Brian Charles',
      }
    ]
  },
  {
    nm_depto: 'administration',
    nm_localizacao: 'floor 2',
    nu_setor: 1,
    empregados: [
      {
        nu_empregado: 7,
        nm_sobrenome: 'Gibson',
        nm_empregado: 'James',
      },
      {
        nu_empregado: 8,
        nm_sobrenome: 'Andrews',
        nm_empregado: 'John',
      },
      {
        nu_empregado: 9,
        nm_sobrenome: 'Wright',
        nm_empregado: 'Audrey Mary',
      },
      {
        nu_empregado: 10,
        nm_sobrenome: 'Reagan',
        nm_empregado: 'Anne',
      },
      {
        nu_empregado: 11,
        nm_sobrenome: 'North',
        nm_empregado: 'Annabel',
      },
      {
        nu_empregado: 12,
        nm_sobrenome: 'South',
        nm_empregado: 'Todd James',
      },
      {
        nu_empregado: 13,
        nm_sobrenome: 'East',
        nm_empregado: 'Ian',
      },
    ]
  },

  {
    nm_depto: 'software design',
    nm_localizacao: 'floor 1',
    nu_setor: 2,
    empregados: [
      {
        nu_empregado: 14,
        nm_sobrenome: 'West',
        nm_empregado: 'Jack',
      },
      {
        nu_empregado: 15,
        nm_sobrenome: 'Allen',
        nm_empregado: 'Ester',
      },
      {
        nu_empregado: 16,
        nm_sobrenome: 'Brunell',
        nm_empregado: 'Liza',
      },
      {
        nu_empregado: 17,
        nm_sobrenome: 'Robertson',
        nm_empregado: 'David Andrew',
      },
      {
        nu_empregado: 18,
        nm_sobrenome: 'Robinson',
        nm_empregado: 'Allan',
      },
      {
        nu_empregado: 19,
        nm_sobrenome: 'Roberts',
        nm_empregado: 'Robert',
      },
      {
        nu_empregado: 20,
        nm_sobrenome: 'Murray',
        nm_empregado: 'James',
      },
      {
        nu_empregado: 21,
        nm_sobrenome: 'Bryce',
        nm_empregado: 'Anne',
      }
    ]
  },
  {
    nm_depto: 'communications',
    nm_localizacao: 'floor 4',
    nu_setor: 3,
    empregados: [
      {
        nu_empregado: 22,
        nm_sobrenome: 'Cowan',
        nm_empregado: 'Audrey',
      },
      {
        nu_empregado: 23,
        nm_sobrenome: 'Stevenson',
        nm_empregado: 'John David',
      },
      {
        nu_empregado: 24,
        nm_sobrenome: 'Dickson',
        nm_empregado: 'William',
      },
      {
        nu_empregado: 25,
        nm_sobrenome: 'Brownlie',
        nm_empregado: 'Matthew',
      },
      {
        nu_empregado: 26,
        nm_sobrenome: 'Gordon',
        nm_empregado: 'Mark',
      }
    ]
  },
  {
    nm_depto: 'engineering',
    nm_localizacao: 'floor 5',
    nu_setor: 7,
    empregados: [
      {
        nu_empregado: 27,
        nm_sobrenome: 'Kennedy',
        nm_empregado: 'Luke',
      },
      {
        nu_empregado: 28,
        nm_sobrenome: 'Grant',
        nm_empregado: 'Lynn',
      },
      {
        nu_empregado: 29,
        nm_sobrenome: 'MacDonald',
        nm_empregado: 'Elizabeth',
      },
      {
        nu_empregado: 30,
        nm_sobrenome: 'MacDugle',
        nm_empregado: 'Shirley',
      },
      {
        nu_empregado: 31,
        nm_sobrenome: 'Douglas',
        nm_empregado: 'Chris',
      },
      {
        nu_empregado: 32,
        nm_sobrenome: 'Christie',
        nm_empregado: 'Malcolm',
      }
    ]
  },
];
db.departamentos.insert(deptos);

// Cursos
const cursos = [
  {
    nu_curso: 1,
    nm_curso: 'Basic Accounting',
    dt_curso: '11-01-1989',
    alunos: [
      {
        nu_empregado: 1,
        nm_sobrenome: 'Jones',
        nm_empregado: 'Elizabeth Barbara',
      },
      {
        nu_empregado: 2,
        nm_sobrenome: 'Smith',
        nm_empregado: 'Robert',
        dt_nascimento: new Date('1947-02-07'),
      },
    ]
  },
  {
    nu_curso: 2,
    nm_curso: 'Further Accounting',
    dt_curso: '25-01-1989',
    alunos: [
      {
        nu_empregado: 1,
        nm_sobrenome: 'Jones',
        nm_empregado: 'Elizabeth Barbara',
      },
      {
        nu_empregado: 2,
        nm_sobrenome: 'Smith',
        nm_empregado: 'Robert',
        dt_nascimento: new Date('1947-02-07'),
      },
    ]
  },
  {
    nu_curso: 3,
    nm_curso: 'Issues In Administration',
    dt_curso: '27-09-1988',
    alunos: [
      {
        nu_empregado: 7,
        nm_sobrenome: 'Gibson',
        nm_empregado: 'James',
      },
      {
        nu_empregado: 8,
        nm_sobrenome: 'Andrews',
        nm_empregado: 'John',
      },
    ]
  },
  {
    nu_curso: 4,
    nm_curso: 'More Administration',
    dt_curso: '16-10-1988',
    alunos: [
      {
        nu_empregado: 8,
        nm_sobrenome: 'Andrews',
        nm_empregado: 'John',
      },
    ]
  },
  {
    nu_curso: 5,
    nm_curso: 'Ada',
    dt_curso: '01-11-1988',
    alunos: [
      {
        nu_empregado: 14,
        nm_sobrenome: 'West',
        nm_empregado: 'Jack',
      },
      {
        nu_empregado: 15,
        nm_sobrenome: 'Allen',
        nm_empregado: 'Ester',
      },
      {
        nu_empregado: 19,
        nm_sobrenome: 'Roberts',
        nm_empregado: 'Robert',
      },
    ]
  },
  {
    nu_curso: 6,
    nm_curso: 'Introduction To Ingres',
    dt_curso: '05-02-1989',
    alunos: [
      {
        nu_empregado: 14,
        nm_sobrenome: 'West',
        nm_empregado: 'Jack',
      },
      {
        nu_empregado: 15,
        nm_sobrenome: 'Allen',
        nm_empregado: 'Ester',
      },
      {
        nu_empregado: 19,
        nm_sobrenome: 'Roberts',
        nm_empregado: 'Robert',
      },
    ]
  },
  {
    nu_curso: 7,
    nm_curso: 'New Topologies',
    dt_curso: '10-03-1989',
    alunos: [
      {
        nu_empregado: 21,
        nm_sobrenome: 'Bryce',
        nm_empregado: 'Anne',
      },
      {
        nu_empregado: 22,
        nm_sobrenome: 'Cowan',
        nm_empregado: 'Audrey',
      },
    ]
  },
  {
    nu_curso: 8,
    nm_curso: 'LANs',
    dt_curso: '12-12-1988',
    alunos: [
      {
        nu_empregado: 22,
        nm_sobrenome: 'Cowan',
        nm_empregado: 'Audrey',
      },
    ]
  },
  {
    nu_curso: 9,
    nm_curso: 'Structural Stress Analysis',
    dt_curso: '20-02-1989',
    alunos: []
  },
  {
    nu_curso: 10,
    nm_curso: 'Taffic Flow Analysis',
    dt_curso: '24-10-1988',
    alunos: [
      {
        nu_empregado: 7,
        nm_sobrenome: 'Gibson',
        nm_empregado: 'James',
      },
    ]
  },
];
db.cursos.insert(cursos);