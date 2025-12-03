
import funcionariosModel from "./funcionariosModel.js";

export const cadastrarFuncionarios = async(req, res) => {
    const {nome, nome_truck_trabalho, email, senha} = req.body

    if(!nome || !nome_truck_trabalho || !email || !senha){
        res.status(404).json({mensagem: "Todos os campods devem ser preenchidos!"})
        return
    }

    const novoFuncionario = {
        nome,
        nome_truck_trabalho,
        email,
        senha
    }

    try {
        const funcionario = await funcionariosModel.create(novoFuncionario);

        res.status(201).json({mensagem: "Funcionário cadastrado com sucesso!"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Internal server error"})
    }
};

export const listarFuncionarios = async(req, res) => {

    try {
        const funcionarios = await funcionariosModel.findAll();

        res.status(200).json({funcionarios})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "internal srver error"})
    }
};

export const loginFuncionarios = async (req, res) => {
  const { email, senha, nome_truck_trabalho } = req.body;

  if (!email || !senha || !nome_truck_trabalho) {
    return res.status(400).json({
      mensagem: "Email, senha e nome do truck de trabalho são obrigatórios!"
    });
  }

  try {
    const funcionario = await funcionariosModel.findOne({ where: { email } });

    if (!funcionario) {
      return res.status(404).json({ mensagem: "Funcionário não encontrado!" });
    }

    if (funcionario.senha !== senha) {
      return res.status(401).json({ mensagem: "Senha incorreta!" });
    }

    if (funcionario.nome_truck_trabalho !== nome_truck_trabalho) {
      return res.status(401).json({ mensagem: "Nome do truck de trabalho incorreto!" });
    }

    return res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      funcionario
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};