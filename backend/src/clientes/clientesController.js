import clientesModel from "./clientesModel.js";

export const cadastrarClientes = async(req, res) => {
    const {nome, email, senha} = req.body

    if(!nome || !email || !senha){
        res.status(404).json({mensgem: "Todos os campos devem ser preenchidos!"})
        return
    }

    const novoCliente = {
        nome,
        email,
        senha
    }

    try {
        const clientes = await clientesModel.create(novoCliente);

        res.status(201).json({mensagem: "Cliente cadastrado com sucesso!"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Internal server error"})

    }
};
export const listarClientes = async(req, res) => {
    try {
        const clientes = await clientesModel.findAll();

        res.status(200).json({clientes});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Internal server error"})

    }
};
export const atualizarClientes = async(req, res) => {
    const {id} = req.params;
    const {nome, email, senha} = req.body;

    if(!id){
        res.status(400).json({mensagem: "Id inválido!"})
        return
    };

    if(!nome|| !email || !senha){
        res.status(400).json({mensagem: "Todos os campos devem ser preenchidos!"})
        return
    }

    try {
        const clientes = await clientesModel.findByPk(id);
        if(!clientes){
            res.status(404).json({erro: "Cliente não encontrado!", mensagem: "Cliente não existe ou desativado"})
            return
        }

        if(nome !== undefined){
            clientes.nome = nome
        }
         if(email !== undefined){
            clientes.email = email
        }
         if(senha !== undefined){
            clientes.senha = senha
        }
        await clientes.save();
        res.status(200).json({mensagem: "Cliente atualizado com sucesso!"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Internal server error"})
    }
};
export const loginCliente = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    res.status(400).json({ mensagem: "Email e senha são obrigatórios!" });
    return;
  }

  try {
    const cliente = await clientesModel.findOne({ where: { email } });

    if (!cliente) {
      res.status(404).json({ mensagem: "Cliente não encontrado!" });
      return;
    }

    if (cliente.senha !== senha) {
      res.status(401).json({ mensagem: "Senha incorreta!" });
      return;
    }

    res.status(200).json({ mensagem: "Login realizado com sucesso!", cliente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};