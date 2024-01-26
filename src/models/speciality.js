"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Speciality extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Speciality.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Speciality",
            tableName: "specialities",
        }
    );

    Speciality.addHook("beforeSave", async (speciality) => {
        return (speciality.id = uuidv4());
    });

    return Speciality;
};
