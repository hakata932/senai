CREATE DATABASE senai;
CREATE TABLE alunos(
	id int AUTO_INCREMENT PRIMARY KEY,
    nomes varchar(255) NOT NULL,
    idade int NOT NULL,
    curso varchar(255)
);

INSERT INTO alunos (nomes, idade, curso) VALUES ('Carlos', 18, 'Informática'),
('Armando', 23, 'Padeiro'),
('Maria', 26, 'Estética'),
('João', 34, 'Informática'),
('Ronaldo', 25, 'Redes'),
('Rebeca', 19, 'Programação'),
('Frederico', 29, 'Mecânica');
--Sete alunos

SELECT nomes FROM alunos; --exibe todos os alunos da tabela

SELECT nomes FROM alunos WHERE idade > 20; --exibe todos os alunos da tabela com idade maior que 20 anos

UPDATE alunos SET idade = 24 WHERE id = 2; --Alterou a idade do Armando de 23 anos para 24

DELETE FROM alunos WHERE id = 1; --Deletou Carlos da tabela

SELECT nomes FROM alunos ORDER BY nomes ASC; --Nome dos alunos na lista em ordem crescente de seus nomes

SELECT idade FROM alunos WHERE idade > 19 AND idade < 31; --consulta que retorna os alunos entre 20 e 30 anos de idade