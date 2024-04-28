"use strict";
import { v4 as uuidv4 } from "uuid";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Doctor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Doctor.belongsTo(models.Clinic, { foreignKey: "clinic_id" });
            Doctor.belongsToMany(models.Speciality, {
                as: "specialities",
                through: "Doctor_Speciality",
                // foreignKey: "doctor_id",
            });
            Doctor.hasMany(models.Doctor_Schedule, { foreignKey: "doctor_id" });
        }
    }
    Doctor.init(
        {
            email: DataTypes.STRING,
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            address: DataTypes.STRING,
            gender: DataTypes.STRING,
            image: DataTypes.STRING,
            introduction: DataTypes.TEXT,
            clinic_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Doctor",
            tableName: "doctors",
        }
    );

    Doctor.addHook("beforeSave", async (doctor) => {
        return (doctor.id = uuidv4());
    });

    return Doctor;
};
