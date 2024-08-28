/* comandos para criar database (banco de dados*/
CREATE DATABASE senai;

/*comandos para criar tabela */

CREATE TABLE aluno (
    id int AUTO_INCREMENT primary key,
    nome varchar(255) not null,
    email varchar(255),
    idade int
);

/*comando para alterar um caractere dentro da tabela*/

ALTER TABLE aluno
CHANGE nome nome_pessoal varchar(255);

/*renomear nome da tabela*/

RENAME TABLE aluno TO alunos;

/*Comando para apagar um campo da tabela tabela*/

ALTER TABLE alunos DROP COLUMN nome;

/*adicionando campo após tabela criada*/

ALTER TABLE alunos
ADD descricao varchar(255);

/*inserindo valores dentro de uma tabela*/

INSERT INTO alunos (nome_pessoal, email) VALUES ("Joãozinho do Mato Souza", "joão@gmail.com");

/*Atualizando valores ou inserindo valores não preenchidos previamente em uma tabela já existente*/

UPDATE alunos
SET email = 'novoemail@gmail.com', nome_pessoal = 'novo nome'
WHERE id = 1;

/*Atualizando valores ou inserindo valores não preenchidos previamente enquanto se insere uma condição*/

UPDATE alunos
SET nome_pessoal = 'novo nome'
WHERE idade > 30;

/*Deletando dados de uma tabela exemplo:*/

DELETE FROM clientes WHERE id = 1

/*operador lógico em SQL*/

--SELECT estudantes FROM alunos WHERE estudantes = 'Cazaquistão' AND idade_dos_estudantes = 17;

--SELECT estudantes FROM alunos WHERE estudantes = 'Cazaquistão' OR idade_dos_estudantes = 16;

/*Operador NOT usado para negação de uma condição*/

SELECT * FROM usuarios WHERE NOT nome = 'teste2';

/*ordenação: o SQL permite organização das colunas na tabela em forma crescente ou decrescente com os seguintes comandos*/

SELECT nome FROM usuarios ORDER BY nome DESC; --decrescente.
SELECT nome FROM usuarios ORDER BY nome ASC;  --crescente, geralmente o SQL o faz por padrão caso não especifique ASC.

/*Exemplo prático de relacionamento*/

CREATE TABLE enderecos (
	endereco_id int AUTO_INCREMENT PRIMARY KEY,
    numero_rua int,
    nome_rua varchar(255),
    cidade varchar(255)
);
--o comando abaixo foi realizado dentro da tabela enderecos
CREATE TABLE usuarios (
	id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    endereco_id int,
    FOREIGN KEY(endereco_id) REFERENCES enderecos(endereco_id)
);