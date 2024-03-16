"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("doctors_specialities", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            doctor_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            speciality_id: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("doctors_specialities");
    },
};
