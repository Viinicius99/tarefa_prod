// app.js - Aplicação Restaurante & Música (Semana 1 com dados falsos)

// Copilot, me explique esta classe. O que é um 'constructor'?
/* 
O constructor é um método especial que é executado automaticamente quando criamos uma nova instância da classe.
Ele inicializa as propriedades do objeto com os valores passados como parâmetros.
É como se fosse o "molde" inicial do objeto.
*/
class Restaurante {
  constructor(nome, tipo, avaliacao, endereco) {
    this.nome = nome;
    this.tipo = tipo;
    this.avaliacao = avaliacao;
    this.endereco = endereco;
    this.pratos = [];
  }

  // Copilot, por que este método 'adicionarPrato' é útil?
  /*
  Este método permite adicionar pratos ao restaurante de forma organizada.
  Ele mantém o encapsulamento da classe, ou seja, controla como os dados são modificados.
  É melhor que acessar diretamente o array 'pratos' porque podemos adicionar validações.
  */
  adicionarPrato(prato) {
    this.pratos.push(prato);
  }

  // Copilot, o que é 'this' neste contexto?
  /*
  'this' se refere à instância atual da classe Restaurante.
  Quando criamos um objeto com 'new Restaurante()', 'this' aponta para esse objeto específico.
  É como dizer "este restaurante" em particular, não todos os restaurantes.
  */
  render() {
    return `
      <div class="card">
        <h3>${this.nome}</h3>
        <p><strong>Tipo:</strong> ${this.tipo}</p>
        <p><strong>Avaliação:</strong> ${this.avaliacao}/5 ⭐</p>
        <p><strong>Endereço:</strong> ${this.endereco}</p>
        <div class="pratos">
          <h4>Pratos Disponíveis:</h4>
          ${this.pratos.map(prato => prato.render()).join('')}
        </div>
      </div>
    `;
  }
}

// Copilot, me explique esta classe Prato e sua relação com Restaurante
/*
A classe Prato representa um item do cardápio. Ela é independente mas pode ser associada a um Restaurante.
Isso demonstra o conceito de composição em POO - um restaurante "tem" pratos.
Cada prato tem suas próprias propriedades e comportamentos.
*/
class Prato {
  constructor(nome, preco, descricao, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.categoria = categoria;
  }

  render() {
    return `
      <div class="prato">
        <h5>${this.nome} - R$ ${Number(this.preco).toFixed(2)}</h5>
        <p>${this.descricao}</p>
        <span class="categoria">${this.categoria}</span>
      </div>
    `;
  }
}

// Copilot, explique estas classes de música e como elas se relacionam
/*
Similar ao padrão Restaurante-Prato, temos Artista-Musica.
Um artista pode ter várias músicas, demonstrando novamente o conceito de composição.
Isso mostra como POO nos permite modelar relacionamentos do mundo real no código.
*/
class Artista {
  constructor(nome, genero, nacionalidade) {
    this.nome = nome;
    this.genero = genero;
    this.nacionalidade = nacionalidade;
    this.musicas = [];
  }

  adicionarMusica(musica) {
    this.musicas.push(musica);
  }

  render() {
    return `
      <div class="card">
        <h3>${this.nome}</h3>
        <p><strong>Gênero:</strong> ${this.genero}</p>
        <p><strong>Nacionalidade:</strong> ${this.nacionalidade}</p>
        <div class="musicas">
          <h4>Músicas:</h4>
          ${this.musicas.map(musica => musica.render()).join('')}
        </div>
      </div>
    `;
  }
}

class Musica {
  constructor(titulo, duracao, album, ano) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.album = album;
    this.ano = ano;
  }

  render() {
    return `
      <div class="musica">
        <h5>🎵 ${this.titulo}</h5>
        <p><strong>Álbum:</strong> ${this.album} (${this.ano})</p>
        <p><strong>Duração:</strong> ${this.duracao}</p>
      </div>
    `;
  }
}

// Dados falsos para primeira semana (serão substituídos por MongoDB na semana 2)
// Copilot, por que usar dados falsos inicialmente é uma boa prática?
/*
Usar dados falsos (mock data) permite desenvolver e testar a interface sem depender do banco de dados.
Isso acelera o desenvolvimento e permite trabalhar no front-end e back-end em paralelo.
É uma prática comum no desenvolvimento ágil.
*/
function criarDadosFalsos() {
  const restaurantes = [];

  // Restaurante 1
  const rest1 = new Restaurante("Bistro Italiano", "Italiana", 4.5, "Rua das Flores, 123");
  rest1.adicionarPrato(new Prato("Spaghetti Carbonara", 28.9, "Massa com molho cremoso e bacon", "Prato Principal"));
  rest1.adicionarPrato(new Prato("Risotto de Cogumelos", 32.5, "Arroz arbóreo com cogumelos frescos", "Prato Principal"));
  rest1.adicionarPrato(new Prato("Tiramisu", 15.9, "Sobremesa italiana tradicional", "Sobremesa"));
  restaurantes.push(rest1);

  // Restaurante 2
  const rest2 = new Restaurante("Sushi House", "Japonesa", 4.8, "Av. Central, 456");
  rest2.adicionarPrato(new Prato("Combo Sashimi", 45.9, "Variados peixes frescos", "Prato Principal"));
  rest2.adicionarPrato(new Prato("Temaki Salmão", 18.9, "Cone de alga com salmão", "Entrada"));
  rest2.adicionarPrato(new Prato("Mochi", 12.9, "Doce japonês de arroz", "Sobremesa"));
  restaurantes.push(rest2);

  // Restaurante 3
  const rest3 = new Restaurante("Churrascaria Gaúcha", "Brasileira", 4.3, "Rua do Campo, 789");
  rest3.adicionarPrato(new Prato("Picanha na Brasa", 55.9, "Corte nobre grelhado no ponto", "Prato Principal"));
  rest3.adicionarPrato(new Prato("Farofa Especial", 8.9, "Farofa com bacon e linguiça", "Acompanhamento"));
  rest3.adicionarPrato(new Prato("Pudim de Leite", 14.9, "Sobremesa cremosa tradicional", "Sobremesa"));
  restaurantes.push(rest3);

  const artistas = [];

  // Artista 1
  const artista1 = new Artista("João Silva", "MPB", "Brasileiro");
  artista1.adicionarMusica(new Musica("Canção do Mar", "3:45", "Horizontes", 2020));
  artista1.adicionarMusica(new Musica("Vento Sul", "4:12", "Horizontes", 2020));
  artista1.adicionarMusica(new Musica("Tarde de Domingo", "3:28", "Horizontes", 2020));
  artistas.push(artista1);

  // Artista 2
  const artista2 = new Artista("Maria Santos", "Jazz", "Brasileira");
  artista2.adicionarMusica(new Musica("Blue Moon", "5:23", "Noites de Jazz", 2019));
  artista2.adicionarMusica(new Musica("Autumn Leaves", "4:55", "Noites de Jazz", 2019));
  artista2.adicionarMusica(new Musica("Summertime", "6:10", "Clássicos do Jazz", 2021));
  artistas.push(artista2);

  // Artista 3
  const artista3 = new Artista("Carlos Rock", "Rock Nacional", "Brasileiro");
  artista3.adicionarMusica(new Musica("Liberdade", "4:33", "Revolução", 2018));
  artista3.adicionarMusica(new Musica("Cidade Grande", "3:57", "Revolução", 2018));
  artista3.adicionarMusica(new Musica("Sonhos", "5:22", "Novo Mundo", 2022));
  artistas.push(artista3);

  return { restaurantes, artistas };
}

// Gerenciamento da aplicação
// Copilot, explique este padrão de gerenciamento de estado
/*
Esta é uma implementação simples de gerenciamento de estado.
Mantemos os dados centralizados e controlamos qual "view" está ativa.
É um padrão similar ao que frameworks como React usam, mas de forma simplificada.
*/
class App {
  constructor() {
    this.dados = criarDadosFalsos();
    this.viewAtual = 'restaurante';
    this.inicializar();
  }

  inicializar() {
    this.configurarEventListeners();
    this.renderizar();
  }

  configurarEventListeners() {
    document.getElementById('btn-restaurante').addEventListener('click', () => {
      this.viewAtual = 'restaurante';
      this.renderizar();
      this.atualizarBotoes();
    });

    document.getElementById('btn-musica').addEventListener('click', () => {
      this.viewAtual = 'musica';
      this.renderizar();
      this.atualizarBotoes();
    });
  }

  atualizarBotoes() {
    const btnRestaurante = document.getElementById('btn-restaurante');
    const btnMusica = document.getElementById('btn-musica');

    // estado visual simples
    btnRestaurante.classList.remove('active');
    btnMusica.classList.remove('active');
    if (this.viewAtual === 'restaurante') {
      btnRestaurante.classList.add('active');
    } else {
      btnMusica.classList.add('active');
    }
  }

  renderizar() {
    const mainContent = document.getElementById('main-content');

    if (this.viewAtual === 'restaurante') {
      mainContent.innerHTML = `
        <h2>🍽️ Restaurantes</h2>
        <p>Explore nossa seleção de restaurantes com os melhores pratos!</p>
        <div class="grid">
          ${this.dados.restaurantes.map(rest => rest.render()).join('')}
        </div>
      `;
    } else {
      mainContent.innerHTML = `
        <h2>🎵 Artistas e Músicas</h2>
        <p>Descubra artistas incríveis e suas melhores músicas!</p>
        <div class="grid">
          ${this.dados.artistas.map(artista => artista.render()).join('')}
        </div>
      `;
    }
  }
}

// Inicializar aplicação quando DOM estiver carregado
// Copilot, por que usar DOMContentLoaded é importante?
/*
DOMContentLoaded garante que todo o HTML foi carregado antes de executar o JavaScript.
Isso evita erros de tentar acessar elementos que ainda não existem na página.
É uma boa prática de desenvolvimento web.
*/
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Aplicação iniciada!');
  new App();
});