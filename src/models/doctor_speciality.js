"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Doctor_Speciality extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Doctor_Speciality.init(
        {
            doctor_id: DataTypes.STRING,
            speciality_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Doctor_Speciality",
            tableName: "doctors_specialities",
        }
    );

    Doctor_Speciality.addHook("beforeSave", async (doctor_speciality) => {
        return (doctor_speciality.id = uuidv4());
    });

    return Doctor_Speciality;
};
