"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("status_codes", [
            {
                value: "active",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "pendding",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "booked",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "canceled",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "processing",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "done",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "closed",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("status_codes", null, {});
    },
};
