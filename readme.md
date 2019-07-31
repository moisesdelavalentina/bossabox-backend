# Bossabox Backend VUTTR

Aplicação backend da API VUTTR (Very Useful Tools to Remember), essa aplicação é uma parte do desafio proposto pela Bossabox. Foi desenvolvida utilizando o Framework [laravel](https://laravel.com/).

## Executando a aplicação

Para executar a aplicação, é necessário a versão `7.2` ou superior da linguagem [PHP](https://www.php.net/downloads.php) e um banco de dados relacional como MYSQL ou Maria DB, também é necessário instalar o [Composer](https://getcomposer.org/download/) para gerenciar as dependências do projeto. Execute o comando `git clone https://github.com/moisesdelavalentina/bossabox-backend.git` para fazer o download da aplicação, navegue até a pasta do projeto e utilize o comando `composer install` para instalar as dependências. Após a instalação, execute `cp .env.example .env` para copiar o arquivo .env, arquivo esse que é utilizado para configurar as variaveis de ambiente. Abra o arquivo `.env` com qualquer editor de texto puro e configure as credenciais para acessar o banco de dados, como no exemplo a seguir:

```php
DB_CONNECTION=mysql #Banco de dados utilizado
DB_HOST=localhost   #Endereço do banco de dados
DB_PORT=3306        #Porta
DB_DATABASE=default #Nome do Banco
DB_USERNAME=root    #Nome do usuário 
DB_PASSWORD=root    #Senha de Acesso
```
Após configurar o acesso ao banco, utilize o comando `php artisan migrate` para criar as tabelas.
Utilize o comando `php artisan serve --port=3000`, abra o browser e navegue para o endereço: `http://localhost:3000/api-documentation`, para ter acesso a documentação da API.

## Rotas

A API está preparada para responder nas seguintes rotas:

* `GET /tools` : Lista de todos os itens cadastrados.
* `POST /tools` : Cadastra um novo item.
* `DELETE /tools/:id` : Apaga um item de acordo com o ID :id.
* `GET /tools?tag=:busca` : Lista os itens de acordo com uma tag especificada :tag.

## Exemplos de Requisição

### GET /tools

Requisição: 
```javascript
GET /tools
```
Resposta:
```javascript
[
    {
        "title": "Laravel",
        "link": "https://laravel.com/",
        "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
        "tags":[
            "php", 
            "framework", 
            "web", 
            "fullsatck"
        ]
    }
]
```

### POST /tools

Requisição:
```javascript
// POST /tools
// Content-Type: application/json
{
    "title": "Laravel",
    "link": "https://laravel.com/",
    "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
    "tags":[
        "php", 
        "framework", 
        "web", 
        "fullsatck"
    ]
}
```

Resposta:
```javascript
{
    "id":5
    "title": "Laravel",
    "link": "https://laravel.com/",
    "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
    "tags":[
        "php", 
        "framework", 
        "web", 
        "fullsatck"
    ]
}
```

### DELETE /tools/:id
Requisição:
```javascript
DELETE /tools/5
```

Resposta:
```javascript
// Status: 200 OK
{}
```


### GET /tools?tag=:busca

Requisição: 
```javascript
GET /tools?tag=framework
```
Resposta:
```javascript
[
    {
        "id":5
        "title": "Laravel",
        "link": "https://laravel.com/",
        "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
        "tags":[
            "php", 
            "framework", 
            "web", 
            "fullsatck"
        ]
    }
]
```