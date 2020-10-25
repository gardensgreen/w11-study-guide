"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "HairColors",
            [
                {
                    color: "Auburn",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    color: "Black",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    color: "Blonde",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    color: "Brown",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    color: "Other",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    color: "Red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    color: "White",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("HairColors", null, {});
    },
};
