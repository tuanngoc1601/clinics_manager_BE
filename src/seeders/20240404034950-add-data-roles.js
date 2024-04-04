"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("roles", [
            {
                role_name: "manager",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                role_name: "doctor",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("roles", null, {});
    },
};
