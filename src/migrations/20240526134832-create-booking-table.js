"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("bookings", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            schedule_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            patient_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            gender: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            phone_number: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            birth_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            province: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            district: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            reason: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            your_self: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            },
            scheduler_name: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            scheduler_phone: {
                allowNull: true,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("bookings");
    },
};
