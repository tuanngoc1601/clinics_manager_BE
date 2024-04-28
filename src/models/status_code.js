"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Status_Code extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Status_Code.hasMany(models.Doctor_Schedule, { as: "status", foreignKey: "status_id" });
        }
    }
    Status_Code.init(
        {
            value: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Status_Code",
            tableName: "status_codes",
        }
    );

    return Status_Code;
};
