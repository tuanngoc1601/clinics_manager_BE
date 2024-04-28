"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("doctor_schedules", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            clinic_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            doctor_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            time_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            booking_date: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            status_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            price: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("doctor_schedules");
    },
};
