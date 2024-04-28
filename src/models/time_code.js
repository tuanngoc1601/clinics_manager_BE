"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Time_Code extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Time_Code.hasMany(models.Doctor_Schedule, { as: "time", foreignKey: "time_id" });
        }
    }
    Time_Code.init(
        {
            value: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Time_Code",
            tableName: "time_codes",
        }
    );

    return Time_Code;
};
