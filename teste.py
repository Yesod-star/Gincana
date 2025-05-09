transacoes = []
usuario_nome = None

def cadastro_usuario(nome):
    usuario_nome = nome
    print("Usuário cadastrado com sucesso:", nome)

def adicionarReceita(valor, descricao):
    transacoes.append({
        'tipo': "receita"
        'valor': valor
        'descricao': descricao,
        'id': len(transacoes)
    })
    print("Receita adicionado.")

def adicionar_despesa(v, desc):
    t = {
        "tipo": "despesa",
        "valor": -v
        "descricao": desc
        "id": len(transacoes) + 1
    }
    transacoes.append(t)
    print("Despesa adicionada com sucesso")

def exibirSaldo():
    saldo = 0
    for t in transacoes:
        saldo += t["valor"]
    print("Saldo atual é R$" + saldo)

def listarTransacoes():
    for t in transacoes:
        print(t["id"], "-", t["descricao"], f"({t['tipo']}) - R$ {t['valor']}")

def buscar_transacao_por_id(id):
    for t in transacoes:
        if t["id"] == id:
            return t
    return "Nenhuma transação com esse ID foi encontrada."

def removerTransacao(id):
    for t in transacoes:
        if t["id"] == id:
            transacoes.remove(t)
            print("Transação removida com sucesso.")
            return
    print("ID não encontrado.")

def menu():
    print("Bem vindo ao sistema financeiro,", usuario_nome)
    while True:
        print("\n1 - Receita")
        print("2 - Despesa")
        print("3 - Listar transações")
        print("4 - Ver saldo")
        print("5 - Remover transação")
        print("6 - Sair")

        op = int(input("Digite a opção: "))

        if op == 1:
            valor = input("Valor da receita: ")
            descricao = input("Descrição: ")
            adicionarReceita(valor, descricao)

        elif op == 2:
            v = float(input("Valor da despesa: "))
            d = input("Descrição: ")
            adicionar_despesa(v, d)

        elif op == 3:
            listarTransacoes()
        
        elif op == 4:
            exibirSaldo()
        
        elif op == 5:
            id = int(input("ID: "))
            removerTransacao(id)

        elif op == 6:
            break
        
        else:
            print("Opção inválida")

nome = input("Digite seu nome: ")
cadastro_usuario(nome)
menu()
