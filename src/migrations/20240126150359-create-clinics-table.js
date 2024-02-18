"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("clinics", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            introduction: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            avatar: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            image: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            address: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            keyWord: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            technique: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            equipment: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            location: {
                allowNull: true,
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable("clinics");
    },
};
