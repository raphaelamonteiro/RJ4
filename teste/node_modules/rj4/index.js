/**
 * Define uma Empresa.
 */
class Empresa {
  razaoSocial;
  nomeFantasia;
  endereco;
  clientes;
  telefones;

  #cnpj;

  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.endereco = endereco;
    this.#cnpj = cnpj;
    this.clientes = new Set();
    this.telefones = new Set();
  }

  razaoSocialUpper() {
    return this.razaoSocial.toUpperCase();
  }
  nomeFantasiaUpper() {
    return this.nomeFantasia.toUpperCase();
  }
  enderecoUpper() {
    return this.endereco.toUpperCase();
  }
  razaoSocialLower() {
    return this.razaoSocial.toLowerCase();
  }
  nomeFantasiaLower() {
    return this.nomeFantasia.toLowerCase();
  }
  enderecoLower() {
    return this.endereco.toLowerCase();
  }

  addCliente(cliente) {
    this.clientes.add(cliente);
    return this;
  }

  addTelefone(telefone) {
    this.telefones.add(telefone);
    return this;
  }

  get cnpj() {
    return this.#cnpj;
  }

  detalhe() {
    let text = `Razão Social: ${ this.razaoSocial }\n` +
      `Nome Fantasia: ${ this.nomeFantasia }\n` +
      `-----------------------\n`;
    this.clientes.forEach((cliente) => text += cliente.detalhe());
    return text;
  }
}

/**
 * Define um Cliente.
 */
class Cliente {
  nome;
  endereco;
  telefones;
  #cpf;

  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefones = new Set();
    this.#cpf = cpf;
  }

  addTelefone(telefone) {
    this.telefones.add(telefone);
    return this;
  }

  nomeUpper() {
    return this.nome.toUpperCase();
  }
  enderecoUpper() {
    return this.endereco.toUpperCase();
  }
  telefonesUpper() {
    return this.telefones.toUpperCase();
  }
  nomeLower() {
    return this.nome.toLowerCase();
  }
  enderecoLower() {
    return this.endereco.toLowerCase();
  }
  telefonesLower() {
    return this.telefones.toLowerCase();
  }

  get cpf() {
    return this.#cpf;
  }
  set cpf(cpf) {
    this.#cpf = cpf;
    return this;
  }

  detalhe() {
    let text;
    text = `Nome: ${ this.nome }\n`;
    text += this.endereco.detalhe();
    this.telefones.forEach((telefone) => text += telefone.detalhe())
    text += '\n';
    return text;
  }
}


/**
 * Define um Telefone.
 */
class Telefone {
  ddd;
  numero;

  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }

  dddUpper() {
    return this.ddd.toUpperCase();
  }
  numeroUpper() {
    return this.numero.toUpperCase();
  }
  dddLower() {
    return this.ddd.toLowerCase();
  }
  numeroLower() {
    return this.numero.toLowerCase();
  }

  detalhe() {
    return `ddd: ${ this.ddd } numero ${ this.numero }\n`;
  }
}

/**
 * Define um Endereço.
 */
class Endereco {
  estado;
  cidade;
  rua;
  numero;

  constructor(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }

  estadoUpper() {
    return this.estado.toUpperCase();
  }
  cidadeUpper() {
    return this.cidade.toUpperCase();
  }
  ruaUpper() {
    return this.rua.toUpperCase();
  }
  numeroUpper() {
    return this.numero.toUpperCase();
  }
  estadoLower() {
    return this.estado.toLowerCase();
  }
  cidadeLower() {
    return this.cidade.toLowerCase();
  }
  ruaLower() {
    return this.rua.toLowerCase();
  }
  numeroLower() {
    return this.numero.toLowerCase();
  }

  detalhe() {
    return `Estado: ${ this.estado } cidade: ${ this.cidade } rua: ${ this.rua } número: ${ this.numero }\n`;
  }
}


export {
  Empresa,
  Cliente,
  Telefone,
  Endereco,
};