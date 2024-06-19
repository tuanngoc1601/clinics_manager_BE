"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Doctor_Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Doctor_Schedule.belongsTo(models.Doctor, {
                foreignKey: "doctor_id",
            });
            Doctor_Schedule.belongsTo(models.Clinic, {
                foreignKey: "clinic_id",
            });
            Doctor_Schedule.belongsTo(models.Time_Code, {
                as: "time",
                foreignKey: "time_id",
            });
            Doctor_Schedule.belongsTo(models.Status_Code, {
                as: "status",
                foreignKey: "status_id",
            });
            Doctor_Schedule.hasMany(models.Booking, {
                foreignKey: "schedule_id",
            });
        }
    }
    Doctor_Schedule.init(
        {
            clinic_id: DataTypes.STRING,
            doctor_id: DataTypes.STRING,
            time_id: DataTypes.INTEGER,
            booking_date: DataTypes.STRING,
            status_id: DataTypes.INTEGER,
            price: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: "Doctor_Schedule",
            tableName: "doctor_schedules",
        }
    );

    return Doctor_Schedule;
};
