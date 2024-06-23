"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Admin.belongsTo(models.Clinic, { foreignKey: "clinic_id" });
        }
    }
    Admin.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            gender: DataTypes.STRING,
            clinic_id: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Admin",
            tableName: "admins",
        }
    );

    return Admin;
};
