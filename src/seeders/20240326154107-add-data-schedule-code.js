"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("schedule_codes", [
            {
                type: "time",
                value: "07:30 - 08:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "08:00 - 08:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "08:30 - 09:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "09:00 - 09:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "09:30 - 10:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "10:00 - 10:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "10:30 - 11:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "11:00 - 11:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "13:30 - 14:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "14:00 - 14:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "14:30 - 15:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "15:00 - 15:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "15:30 - 16:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "16:00 - 16:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "16:30 - 17:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "17:00 - 17:30",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "time",
                value: "17:30 - 18:00",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "active",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "pendding",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "booked",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "canceled",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "processing",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "done",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "status",
                value: "closed",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "booking",
                value: "test",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "booking",
                value: "surgery",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                type: "booking",
                value: "general",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("schedule_codes", null, {});
    },
};
