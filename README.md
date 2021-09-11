# Cadastro de Carro

**RF** => Requisitos Funcionais
    Deve ser possível cadastrar um novo carro. 
    Deve ser possível listar todas as categorias

**RN** => Regra de Negócio
    Não deve ser possível cadastrar um carro já existente.
    O carro deve ser cadastrado, por padrão, com disponibilidade.
    * O usuário responsável pelo cadastro deve ser um administrador

# Listagem de Carros

**RF**
    Deve ser possível listar todos os carros disponíveis.
    Deve ser possível listar todos os carros disponíveis pelo nome da categoria
    Deve ser possível listar todos os carros disponíveis pelo nome da marca
    Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
    Usuário não precisa estar logado no sistema

# Cadastro de Especificação no Carro

**RF**
    Deve ser possível cadastrar uma especificação para um carro
    Deve ser possível listar todas as especificações
    Deve ser possível listar todos os carros

**RN**
    Não deve ser possível cadastrar uma especificação para um carro não cadastrado
    Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
    O usuário responsável pelo cadastro deve ser um administrador 


# Cadastro de Imagens do Carro

**RF**
    Deve ser possível cadastrar a imagem do carro
    Deve ser possível listar todos os carros

**RNF**
    Utilizar o multer para upload de arquivos

**RN**
    O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
    O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguer de Carro

**RF**
    Deve ser possível cadastrar um aluguer

**RN**
    O aluguer deve ter duração mínima de 24h
    Não deve ser possível cadastrar um novo aluguer caso já exista um aberto para o mesmo usuário
    Não deve ser possível cadastrar um novo aluguer caso já exista um aberto para o mesmo carro