import chefsModel from "../chefs/chefsModel.js";
import funcionariosModel from "../funcionarios/funcionariosModel.js";

chefsModel.hasMany(funcionariosModel, {
  foreignKey: "chef_id",
  as: "funcionarios",
});

funcionariosModel.belongsTo(chefsModel, {
  foreignKey: "chef_id",
  as: "chef",
});