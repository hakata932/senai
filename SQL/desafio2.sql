/*imagine que você está criando um sistema de rede social, onde os usuários podem criar várias postagens. 
E cada postagem está associada ao usuário que a publicou.

Faça uma consulta que mostre todos os usuários que fizeram uma postagem.
OBS: provavelmente estou usando a lógica errada para o problema, mas estou usando do que aprendi.*/

CREATE DATABASE rede_social;
CREATE TABLE usuarios(
	id int AUTO_INCREMENT PRIMARY KEY,
    usuario varchar(30) NOT NULL,
    idade int
); --apenas 3 valores, não precisa de mais que isso pro desafio
INSERT INTO usuarios (usuario, idade) VALUES ('cleitin', 18), ('vanessa', 19); --dois usuários, para mostrar suas postagens

CREATE TABLE postagens(
	id_post int AUTO_INCREMENT PRIMARY KEY,
    post varchar(100),
    id int,
    FOREIGN KEY(id) REFERENCES usuarios(id)
);
SELECT usuario, post from postagens INNER JOIN usuarios ON usuarios.id = postagens.id
WHERE post = 'qualquer coisa'; --O SQL retornará nenhum valor por não haver nenhum valor inserido em 'post', com a condição (=) da string ou não.

/*assumindo que queira que mostre o resultado de um post que teve o valor preenchido, faça o seguinte*/

INSERT INTO postagens (post, id) VALUES ('qualquer coisa', 1); --uma postagem do usuário 'cleitin'
SELECT usuario, post from postagens INNER JOIN usuarios ON usuarios.id = postagens.id
WHERE usuarios.id = 1; --O SQL retornará o valor.