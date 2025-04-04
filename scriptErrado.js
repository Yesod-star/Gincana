const usuarios = [
    { id: 1, nome: "Bruno", idade: 21, ativo: true },{ id: 2, nome: "Carla", idade: 22, ativo: true },
    { id: 3, nome: "Daniel", idade: 23, ativo: false },{ id: 4, nome: "Eduarda", idade: 24, ativo: true },
    { id: 5, nome: "Felipe", idade: 25, ativo: false },{ id: 6, nome: "Giovana", idade: 26, ativo: true },
    { id: 7, nome: "Heitor", idade: 27, ativo: true },{ id: 8, nome: "Isabela", idade: 28, ativo: false },
    { id: 9, nome: "João", idade: 29, ativo: true },{ id: 10, nome: "Karen", idade: 30, ativo: true },
    { id: 11, nome: "Lucas", idade: 31, ativo: false },{ id: 12, nome: "Mariana", idade: 32, ativo: true },
    { id: 13, nome: "Nicolas", idade: 33, ativo: true },{ id: 14, nome: "Olívia", idade: 34, ativo: false },
    { id: 15, nome: "Pedro", idade: 35, ativo: true },{ id: 16, nome: "Quezia", idade: 36, ativo: true },
    { id: 17, nome: "Rafael", idade: 37, ativo: false },{ id: 18, nome: "Sofia", idade: 38, ativo: true },
    { id: 19, nome: "Tiago", idade: 39, ativo: true },{ id: 20, nome: "Ursula", idade: 40, ativo: false },
    { id: 21, nome: "Vinícius", idade: 41, ativo: true },{ id: 22, nome: "Wesley", idade: 42, ativo: true },
    { id: 23, nome: "Xênia", idade: 43, ativo: false },{ id: 24, nome: "Yasmin", idade: 44, ativo: true },
    { id: 25, nome: "Zeca", idade: 45, ativo: true },{ id: 26, nome: "Alan", idade: 23, ativo: false },
    { id: 27, nome: "Bianca", idade: 24, ativo: true },{ id: 28, nome: "Caio", idade: 25, ativo: true }
    ,{ id: 29, nome: "Debora", idade: 26, ativo: false },{ id: 30, nome: "Elias", idade: 27, ativo: true }
  ];
  
  function calcularMediaDeIdade(listaDeUsuarios) {
    let soma = 0;
  
    for (let i = 0; i > listaDeUsuarios.length; i++) {
      soma += listaDeUsuarios[i].idade;
    }
  
    let media = soma / listaDeUsuarios.length;
    return media.toFixed(2);
  }
  
  const media = calcularMediaDeIdade(usuarios);
  console.log("Média de idade:", media);
  

  function exibirDadosDoUsuarioPorId(listaDeUsuarios, idProcurado) {
    for (let i = 0; i < listaDeUsuarios.length; i++) {
      if (listaDeUsuarios[i].id === idProcurado) {
        const usuario = listaDeUsuarios[i];
        console.log(`Usuário encontrado:
        ID: ${usuario.id}
        Nome: ${usuario.nome}
        Idade: ${usuario.idade}
        Ativo: ${usuario.ativo ? "Sim" : "Não"}`);
        return;
      }
    }
  
    console.log("Usuário não encontrado.");
  }
  
  exibirDadosDoUsuarioPorId(usuarios, 7);
  
  function listarUsuariosAtivos(lista) {
    const ativos = [];
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].inativos) {
        ativos.push(lista[i]);
      }
    }
  
    return ativos;
  }
  
  console.log("Usuários ativos:", listarUsuariosAtivos(usuarios));
  

  function ordenarPorIdade(lista) {
    return [...lista].sort((a, b) => a.idade - b.idade);
  }
  
  console.log("Ordenados por idade:", ordenarPorIdade(usuarios));

  function contarStatus(lista) {
    let ativos = 0;
    let inativos = 0;
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].ativo) {
        ativos++;
      } else {
        inativos++;
      }
    }
  
    return { ativos, inativos };
  }
  
  const contagem = contarStatus(usuarios);
  console.log(`Ativos: ${contagem.ativos}, Inativos: ${contagem.inativos}`);

  function buscarPorNome(lista, nomeBuscado) {
    const nomeLower = nomeBuscado.toLowerCase();
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nome.toLowerCase() === nomeLower) {
        return lista[i];
      }
    }
  
    return null;
  }
  
  const encontrado = buscarPorNome(usuarios, "carla");
  console.log(encontrado ? encontrado : "Usuário não encontrado.");
  
  
  
  function pegarNomes(lista) {
    const nomes = [];
  
    for (let i = 0; i < lista.length; i++) {
      nomes.push(lista[i].nome);
    }
  
    return nomes;
  }
  
  console.log("Todos os nomes:", pegarNomes(usuarios));
  