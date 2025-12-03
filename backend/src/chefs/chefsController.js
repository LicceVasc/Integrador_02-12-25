
import chefsModel from "./chefsModel.js";

export const cadastrarChef = async(req, res) => {
    const { nome, nome_truck, email, senha} = req.body;

    if(!nome || !nome_truck || !email || !senha){
        res.status(404).json({mensagem: "Todos os campos devem ser preenchidos!"})
        return
    }

    const novoChef = {
        nome,
        nome_truck,
        email,
        senha
    }

    try {
        const chef = await chefsModel.create(novoChef);

        res.status(201).json({mensagem: "Chef cadastrado com sucesso!", chef})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Internal server error"})
    }
};
export const listarChefs = async(req, res) => {
 
    try {
        const chefs = await chefsModel.findAll();
        
        if(!chefs){
            res.status(400).json({mensagem: "Nenhum chef cadastrado!"})
            return
        }

        res.status(200).json({chefs})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "internal server error"})
    }
}
export const loginChef = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    res.status(404).json({ mensagem: "Todos os campos devem ser preenchidos!" });
    return;
  }

  try {
    const chef = await chefsModel.findOne({ where: { email } });

    if (!chef) {
      res.status(400).json({ mensagem: "Chef não encontrado!" });
      return;
    }

    if (chef.senha !== senha) {
      res.status(401).json({ mensagem: "Senha incorreta!" });
      return;
    }

    res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      chef,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensagem: "Internal server error" });
  }
};