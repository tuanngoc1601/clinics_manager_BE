"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("time_codes", [
            {
                value: "07:30 - 08:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "08:00 - 08:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "08:30 - 09:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "09:00 - 09:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "09:30 - 10:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "10:00 - 10:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "10:30 - 11:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "11:00 - 11:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "13:30 - 14:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "14:00 - 14:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "14:30 - 15:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "15:00 - 15:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "15:30 - 16:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "16:00 - 16:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "16:30 - 17:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "17:00 - 17:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                value: "17:30 - 18:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("time_codes", null, {});
    },
};
