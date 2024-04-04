"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Schedule_Code extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Schedule_Code.init(
        {
            type: DataTypes.STRING,
            value: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Schedule_Code",
            tableName: "schedule_codes",
        }
    );

    return Schedule_Code;
};
