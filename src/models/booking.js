"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Booking.belongsTo(models.User, { foreignKey: "user_id" });
            Booking.belongsTo(models.Doctor_Schedule, { foreignKey: "schedule_id" });
        }
    }
    Booking.init(
        {
            user_id: DataTypes.STRING,
            schedule_id: DataTypes.STRING,
            patient_name: DataTypes.STRING,
            gender: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            birth_date: DataTypes.DATE,
            province: DataTypes.STRING,
            district: DataTypes.STRING,
            address: DataTypes.STRING,
            reason: DataTypes.STRING,
            your_self: DataTypes.BOOLEAN,
            scheduler_name: DataTypes.STRING,
            scheduler_phone: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Booking",
            tableName: "bookings",
        }
    );

    return Booking;
};
