"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Clinic.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            introduction: DataTypes.TEXT,
            avatar: DataTypes.STRING,
            image: DataTypes.STRING,
            address: DataTypes.STRING,
            keyWord: DataTypes.STRING,
            technique: DataTypes.TEXT,
            equipment: DataTypes.TEXT,
            location: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Clinic",
            tableName: "clinics",
        }
    );

    Clinic.addHook("beforeSave", async (clinic) => {
        return (clinic.id = uuidv4());
    });

    return Clinic;
};
