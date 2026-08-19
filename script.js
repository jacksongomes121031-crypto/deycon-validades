/* =========================================================
   DEYCON
   CONTROLE DE VALIDADES • RED BULL

   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURAÇÃO GOOGLE APPS SCRIPT
========================================================= */

const URL_GOOGLE_SHEETS =
  "https://script.google.com/macros/s/AKfycby434oMp3w2bin-5Gpaf0_xIlClxRVMP5TLdm89cUixctxEe_-XT4_QbrWo6_Eetp-L/exec";


/* =========================================================
   EQUIPE / SUPERVISORES
========================================================= */

const equipes = {

  "ALESSANDRO J. VARELA HOLOSBACK": [
    "CARLA SOMENSI",
    "GRAZIELE LEAL PIRES",
    "MAHYANA DE ALMEIDA FINGER",
    "RONALDO BRANDAO OLIVEIRA"
  ],

  "CESAR MATHEUS MENDES": [
    "ADINALVA A.SPERANDIO3039",
    "DOUGLAS F DE SOUZA",
    "ELISABETE R.ALMEIDA 2533",
    "MICHELI L.BISCAIA 503172",
    "OSMAIR S.SANTOS 503043"
  ],

  "CLAUDIO ERZINGER": [
    "ADRIANA MARA DA SILVA",
    "BRUNA APARECIDA ARANTES 638",
    "BRUNA C.P.A.ROSARIO 503323",
    "CLAUDEMIR MOREIRA DA SILVA",
    "JOSE LUCZYNSKI",
    "LUGESMAIAN SANTANA 503520",
    "SIMONE ALVES DOS SANTOS",
    "VIVIANE OLIVEIRA ERZINGER"
  ],

  "DIEGO LUIZ ANTONIACOMI": [
    "DAIANE DE FATIMA TOLEDO",
    "DANIELE MOREIRA DE OLIVEIRA",
    "ELIANA MENDONCA DE OLIVEIRA",
    "FRANCIELE C.GASPAR503025",
    "LUSINALVA N.PEREIRA 1743",
    "RICARDO DOMINGUES",
    "VANIA ROSA MARTINEZ",
    "WILIAN CANDIDO MACIEL DE SOUZA"
  ],

  "JULIANO BERTOLDO": [
    "CLAUDIOMAR VIRGILIO MARTINS",
    "DOUGLAS MOREIRA DE CARVALHO",
    "NATHAN VIEIRA DOS SANTOS",
    "RAPHAEL PIRES RAMOS BERTOLDO",
    "RICARDO RAFAEL KINDINGER",
    "SIDNEY M. ATANAZIO 2207",
    "VALDIRENE S.ATANAZIO502868"
  ],

  "KATIA RIBEIRO PEREIRA": [
    "CARLOS HENRIQUE F.BARGINSKI",
    "CAROLINE DOS SANTOS PORTELLA",
    "JOELMA WOINAROSKI COELHO",
    "JOYCE DA SILVA",
    "MARLON DOS SANTOS RODRIGUES",
    "REGIANE C.DONATO 502780",
    "RICARDO RUPPEL",
    "ROBSON FERNANDO DE LORENA",
    "VANESSA ZAKRZEWSKI 504093"
  ],

  "LEANDRO CONTADOR": [
    "BRUNO A.DE OLIVEIRA GOMES",
    "CARLA DA SILVA CAPPUTE",
    "FERNANDO DUARTE BRANDAO",
    "JANETE DE SOUZA ARAUJO",
    "JEFFERSON RODRIGO GOMES SILVA",
    "JOMAR RIBEIRO DOS SANTOS",
    "RODRIGO JOSE DALLA PEGORARA",
    "RONE ALVES DE SOUZA 1739"
  ],

  "MARIA ANDREIA R. A. SANTOS": [
    "APARECIDO GONCALVES VALENTE",
    "CLEYDE S. KAWAHARA 772",
    "JOAO AUGUSTO KIVEL",
    "JOEL FIATCOSKI 502446",
    "LUCIANO CORDEIRO",
    "ROSLAINE RIBAS SANTANA",
    "VIVIANE OLIVEIRA ERZINGER"
  ],

  "SAMUEL GONCALVES": [
    "FERNANDA R.DE GODOY REOLON",
    "GISELE DA SILVA CASSEMIRO",
    "JUCY DE OLIVEIRA S.TEODORO",
    "MARCIA IACHECHEN LARA",
    "MIDIAN TENEDINI",
    "RONALDO M.M.JUNIOR 503177",
    "ROSANGELA DOS SANTOS",
    "ROSANGELA WOINAROSKI",
    "ROSEMARI DE SOUZA 502068"
  ]

};


/* =========================================================
   PRODUTOS
========================================================= */

const produtos = [

  {
    nome: "Red Bull Energy Drink",
    tamanhos: [
      "250 ml",
      "355 ml",
      "473 ml"
    ]
  },

  {
    nome: "Red Bull Sugarfree",
    tamanhos: [
      "250 ml",
      "355 ml"
    ]
  },

  {
    nome: "Red Bull Zero",
    tamanhos: [
      "250 ml",
      "355 ml",
      "473 ml"
    ]
  },

  {
    nome: "Red Bull The White Edition",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Summer Edition",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Summer Edition Sugarfree",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Tropical Edition",
    tamanhos: [
      "250 ml",
      "473 ml"
    ]
  },

  {
    nome: "Red Bull The Melancia Edition",
    tamanhos: [
      "250 ml",
      "473 ml"
    ]
  },

  {
    nome: "Red Bull The Pêssego Edition",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Cereja Edition",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Melão Edition",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Amora Edition Sugarfree",
    tamanhos: [
      "250 ml"
    ]
  },

  {
    nome: "Red Bull The Pomelo Edition Sugarfree",
    tamanhos: [
      "250 ml",
      "473 ml"
    ]
  },
   
 {
    nome: "Red Bull Ice Sugarfree",
    tamanhos: [
      "250 ml"
    ]
  },

   {
    nome: "Red Bull Maçã SugarFree",
    tamanhos: [
      "250 ml"
    ]
  },
   
   {
    nome: "Red Bull Nectarina SugarFree",
    tamanhos: [
      "250 ml"
    ]
  },
   
];


/* =========================================================
   ELEMENTOS
========================================================= */

const supervisor =
  document.getElementById("supervisor");

const vendedor =
  document.getElementById("vendedor");

const cnpj =
  document.getElementById("cnpj");

const cliente =
  document.getElementById("cliente");

const areaProdutos =
  document.getElementById("produtos");

const mensagemBox =
  document.getElementById("mensagem");


/* =========================================================
   VERIFICAR ELEMENTOS
========================================================= */

if (!supervisor) {
  console.error("Elemento #supervisor não encontrado.");
}

if (!vendedor) {
  console.error("Elemento #vendedor não encontrado.");
}

if (!cnpj) {
  console.error("Elemento #cnpj não encontrado.");
}

if (!cliente) {
  console.error("Elemento #cliente não encontrado.");
}

if (!areaProdutos) {
  console.error("Elemento #produtos não encontrado.");
}

if (!mensagemBox) {
  console.error("Elemento #mensagem não encontrado.");
}


/* =========================================================
   CARREGAR SUPERVISORES
========================================================= */

if (supervisor) {

  Object.keys(equipes).forEach(
    nome => {

      const option =
        document.createElement("option");

      option.value =
        nome;

      option.textContent =
        nome;

      supervisor.appendChild(option);

    }
  );

}


/* =========================================================
   SUPERVISOR → VENDEDOR
========================================================= */

if (supervisor) {

  supervisor.addEventListener(
    "change",
    function () {

      vendedor.innerHTML = `
        <option value="">
          Selecione o vendedor
        </option>
      `;

      vendedor.disabled = true;

      if (!this.value) {

        atualizarProcesso(1);

        return;

      }

      const lista =
        equipes[this.value];

      if (!lista) {
        return;
      }

      lista.forEach(
        nome => {

          const option =
            document.createElement("option");

          option.value =
            nome;

          option.textContent =
            nome;

          vendedor.appendChild(option);

        }
      );

      vendedor.disabled = false;

      atualizarProcesso(1);

    }
  );

}


/* =========================================================
   MÁSCARA CNPJ
========================================================= */

if (cnpj) {

  cnpj.addEventListener(
    "input",
    function () {

      let valor =
        this.value.replace(/\D/g, "");

      valor =
        valor.substring(0, 14);

      if (valor.length > 12) {

        valor =
          valor.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2}).*/,
            "$1.$2.$3/$4-$5"
          );

      }

      else if (valor.length > 8) {

        valor =
          valor.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/,
            "$1.$2.$3/$4"
          );

      }

      else if (valor.length > 5) {

        valor =
          valor.replace(
            /^(\d{2})(\d{3})(\d{0,3}).*/,
            "$1.$2.$3"
          );

      }

      else if (valor.length > 2) {

        valor =
          valor.replace(
            /^(\d{2})(\d{0,3}).*/,
            "$1.$2"
          );

      }

      this.value =
        valor;

    }
  );

}


/* =========================================================
   EVENTOS
========================================================= */

if (vendedor) {

  vendedor.addEventListener(
    "change",
    function () {

      if (this.value) {
        atualizarProcesso(2);
      }

    }
  );

}


if (cnpj) {

  cnpj.addEventListener(
    "input",
    function () {

      if (
        this.value.replace(/\D/g, "").length === 14
      ) {

        atualizarProcesso(2);

      }

    }
  );

}


if (cliente) {

  cliente.addEventListener(
    "input",
    function () {

      if (this.value.trim()) {
        atualizarProcesso(3);
      }

    }
  );

}


/* =========================================================
   ADICIONAR PRODUTO
========================================================= */

function adicionarProduto() {

  if (!areaProdutos) {
    return;
  }

  const div =
    document.createElement("div");

  div.className =
    "produto";

  div.innerHTML = `

    <div class="produto-topo">

      <div class="produto-identificacao">

        <div class="produto-icone">
          🥤
        </div>

        <div>

          <strong>
            Novo produto
          </strong>

          <small>
            Informe os dados da validade
          </small>

        </div>

      </div>

      <button
        type="button"
        class="remover"
        title="Remover produto"
      >
        ×
      </button>

    </div>

    <label>
      Produto / Sabor
    </label>

    <select class="produtoNome">

      <option value="">
        Selecione o produto
      </option>

      ${produtos
        .map(
          (produto, index) => `
            <option value="${index}">
              ${produto.nome}
            </option>
          `
        )
        .join("")
      }

    </select>

    <label>
      Tamanho
    </label>

    <select
      class="produtoTamanho"
      disabled
    >

      <option value="">
        Selecione primeiro o produto
      </option>

    </select>

    <div class="produto-grid">

      <div>

        <label>
          Validade
        </label>

        <div class="data-input">

          <span class="data-icone">
            📅
          </span>

          <input
            type="date"
            class="validade"
          >

        </div>

      </div>

      <div class="quantidade-box">

        <label>
          Quantidade
        </label>

        <input
          type="number"
          class="quantidade"
          min="1"
          step="1"
          inputmode="numeric"
          placeholder="Ex.: 10"
        >

        <span>
          UN.
        </span>

      </div>

    </div>
  `;


  const selectProduto =
    div.querySelector(".produtoNome");

  const selectTamanho =
    div.querySelector(".produtoTamanho");

  const validade =
    div.querySelector(".validade");

  const quantidade =
    div.querySelector(".quantidade");


  /* =======================================================
     PRODUTO → TAMANHO
  ======================================================= */

  selectProduto.addEventListener(
    "change",
    function () {

      selectTamanho.innerHTML = `
        <option value="">
          Selecione o tamanho
        </option>
      `;

      selectTamanho.disabled = true;

      if (this.value === "") {
        return;
      }

      const produto =
        produtos[
          Number(this.value)
        ];

      if (!produto) {
        return;
      }

      produto.tamanhos.forEach(
        tamanho => {

          const option =
            document.createElement("option");

          option.value =
            tamanho;

          option.textContent =
            tamanho;

          selectTamanho.appendChild(option);

        }
      );

      selectTamanho.disabled = false;

    }
  );


  /* =======================================================
     REMOVER
  ======================================================= */

  div
    .querySelector(".remover")
    .addEventListener(
      "click",
      () => {

        div.remove();

      }
    );


  /* =======================================================
     EVENTOS
  ======================================================= */

  validade.addEventListener(
    "change",
    () => atualizarProcesso(3)
  );

  quantidade.addEventListener(
    "input",
    () => atualizarProcesso(3)
  );


  areaProdutos.appendChild(div);

}


/* =========================================================
   COLETAR PRODUTOS
========================================================= */

function coletarProdutos() {

  const lista = [];

  document
    .querySelectorAll(".produto")
    .forEach(
      item => {

        const produtoSelect =
          item.querySelector(".produtoNome");

        const tamanhoSelect =
          item.querySelector(".produtoTamanho");

        const validade =
          item.querySelector(".validade");

        const quantidade =
          item.querySelector(".quantidade");


        if (
          produtoSelect.value === "" &&
          tamanhoSelect.value === "" &&
          validade.value === "" &&
          quantidade.value === ""
        ) {

          return;

        }


        const produto =
          produtos[
            Number(produtoSelect.value)
          ];


        lista.push({

          produto:
            produto
              ? produto.nome
              : "",

          tamanho:
            tamanhoSelect.value,

          validade:
            validade.value,

          quantidade:
            quantidade.value
              ? Number(quantidade.value)
              : 0

        });

      }
    );


  return lista;

}


/* =========================================================
   VALIDAR PRODUTOS
========================================================= */

function validarProdutos() {

  const itens =
    document.querySelectorAll(".produto");


  if (itens.length === 0) {

    return {
      valido: false,
      mensagem:
        "Adicione pelo menos um produto."
    };

  }


  for (
    let i = 0;
    i < itens.length;
    i++
  ) {

    const item =
      itens[i];

    const produto =
      item
        .querySelector(".produtoNome")
        .value;

    const tamanho =
      item
        .querySelector(".produtoTamanho")
        .value;

    const validade =
      item
        .querySelector(".validade")
        .value;

    const quantidade =
      item
        .querySelector(".quantidade")
        .value;


    const vazio =
      !produto &&
      !tamanho &&
      !validade &&
      !quantidade;


    if (vazio) {
      continue;
    }


    if (!produto) {

      return {
        valido: false,
        mensagem:
          `Selecione o produto do item ${i + 1}.`
      };

    }


    if (!tamanho) {

      return {
        valido: false,
        mensagem:
          `Selecione o tamanho do item ${i + 1}.`
      };

    }


    if (!validade) {

      return {
        valido: false,
        mensagem:
          `Informe a validade do item ${i + 1}.`
      };

    }


    if (
      !quantidade ||
      Number(quantidade) <= 0
    ) {

      return {
        valido: false,
        mensagem:
          `Informe uma quantidade válida no item ${i + 1}.`
      };

    }

  }


  const produtosValidos =
    coletarProdutos()
      .filter(
        item =>
          item.produto &&
          item.tamanho &&
          item.validade &&
          Number(item.quantidade) > 0
      );


  if (produtosValidos.length === 0) {

    return {
      valido: false,
      mensagem:
        "Preencha pelo menos um produto completo."
    };

  }


  return {

    valido: true,

    produtos:
      produtosValidos

  };

}


/* =========================================================
   SALVAR
========================================================= */

async function salvar() {

  const botao =
    document.querySelector(".btn-confirmar");


  /* =======================================================
     SUPERVISOR
  ======================================================= */

  if (!supervisor.value) {

    mostrarMensagem(
      "Selecione o supervisor.",
      "erro"
    );

    supervisor.focus();

    return;

  }


  /* =======================================================
     VENDEDOR
  ======================================================= */

  if (!vendedor.value) {

    mostrarMensagem(
      "Selecione o vendedor.",
      "erro"
    );

    vendedor.focus();

    return;

  }


  /* =======================================================
     CNPJ
  ======================================================= */

  const cnpjValor =
    cnpj.value.trim();

  const numerosCnpj =
    cnpjValor.replace(/\D/g, "");


  if (numerosCnpj.length !== 14) {

    mostrarMensagem(
      "Digite um CNPJ válido com 14 números.",
      "erro"
    );

    cnpj.focus();

    return;

  }


  /* =======================================================
     CLIENTE
  ======================================================= */

  const clienteValor =
    cliente.value.trim();


  if (!clienteValor) {

    mostrarMensagem(
      "Digite o nome do cliente.",
      "erro"
    );

    cliente.focus();

    return;

  }


  /* =======================================================
     PRODUTOS
  ======================================================= */

  const resultadoProdutos =
    validarProdutos();


  if (!resultadoProdutos.valido) {

    mostrarMensagem(
      resultadoProdutos.mensagem,
      "erro"
    );

    return;

  }


  /* =======================================================
     REGISTRO
  ======================================================= */

  const registro = {

    dataRegistro:
      new Date().toLocaleString("pt-BR"),

    supervisor:
      supervisor.value,

    vendedor:
      vendedor.value,

    cnpj:
      cnpjValor,

    cliente:
      clienteValor,

    produtos:
      resultadoProdutos.produtos

  };


  /* =======================================================
     BACKUP LOCAL
  ======================================================= */

  try {

    let registros =
      JSON.parse(
        localStorage.getItem(
          "deycon_registros"
        ) || "[]"
      );


    registros.push(registro);


    localStorage.setItem(
      "deycon_registros",
      JSON.stringify(registros)
    );

  }

  catch (erro) {

    console.warn(
      "Não foi possível salvar backup local.",
      erro
    );

  }


  /* =======================================================
     BOTÃO
  ======================================================= */

  const textoOriginal =
    botao
      ? botao.innerHTML
      : "";


  if (botao) {

    botao.disabled = true;

    botao.innerHTML = `
      <span class="check">⏳</span>
      <span>ENVIANDO...</span>
    `;

  }


  /* =======================================================
     ENVIAR PARA GOOGLE SHEETS
  ======================================================= */

  try {

    if (!URL_GOOGLE_SHEETS) {

      throw new Error(
        "A URL do Google Apps Script não foi configurada."
      );

    }


    /*
      IMPORTANTE:

      Não usamos no-cors aqui.
      O Apps Script recebe o POST
      diretamente pelo doPost().
    */

    const resposta =
      await fetch(
        URL_GOOGLE_SHEETS,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "text/plain;charset=utf-8"
          },

          body:
            JSON.stringify(registro)
        }
      );


    if (!resposta.ok) {

      throw new Error(
        "O Google Apps Script retornou erro HTTP " +
        resposta.status
      );

    }


    mostrarMensagem(
      "✓ Registro enviado com sucesso para a planilha!",
      "sucesso"
    );


    limparFormulario();

  }


  catch (erro) {

    console.error(
      "ERRO AO ENVIAR:",
      erro
    );


    mostrarMensagem(
      "Não foi possível enviar para a planilha. O cadastro ficou salvo no aparelho como backup.",
      "erro"
    );

  }


  finally {

    if (botao) {

      botao.disabled =
        false;

      botao.innerHTML =
        textoOriginal;

    }

  }

}


/* =========================================================
   LIMPAR FORMULÁRIO
========================================================= */

function limparFormulario() {

  cnpj.value = "";

  cliente.value = "";

  areaProdutos.innerHTML = "";

  adicionarProduto();

  atualizarProcesso(1);

}


/* =========================================================
   MENSAGEM
========================================================= */

function mostrarMensagem(
  texto,
  tipo
) {

  if (!mensagemBox) {

    alert(texto);

    return;

  }


  mensagemBox.textContent =
    texto;


  mensagemBox.className =
    `mensagem ${tipo}`;


  setTimeout(
    () => {

      mensagemBox.textContent =
        "";

      mensagemBox.className =
        "mensagem";

    },
    5000
  );

}


/* =========================================================
   PROCESSO VISUAL
========================================================= */

function atualizarProcesso(
  etapa
) {

  const itens =
    document.querySelectorAll(
      ".processo-item"
    );


  itens.forEach(
    item => {

      item.classList.remove(
        "ativo"
      );

    }
  );


  if (etapa <= 1) {

    itens[0]
      ?.classList
      .add("ativo");

  }


  else if (etapa === 2) {

    itens[0]
      ?.classList
      .add("ativo");

    itens[1]
      ?.classList
      .add("ativo");

  }


  else {

    itens.forEach(
      item => {

        item.classList.add(
          "ativo"
        );

      }
    );

  }

}


/* =========================================================
   PRODUTO INICIAL
========================================================= */

adicionarProduto();


/* =========================================================
   PROCESSO INICIAL
========================================================= */

atualizarProcesso(1);
