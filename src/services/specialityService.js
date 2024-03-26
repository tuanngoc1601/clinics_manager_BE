import db from "../models/index";

const specialityService = {
    handleGetAllSpecialitiesService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const allSpecialities = await db.Speciality.findAll({
                    raw: true,
                });

                resolve(allSpecialities);
            } catch (e) {
                reject(e);
            }
        });
    },

    handleGetSpecialityDetailService: (specialityId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const speciality = await db.Speciality.findOne({
                    where: {
                        id: specialityId,
                    },
                    include: [
                        {
                            model: db.Doctor,
                            as: "doctors",
                            attributes: [
                                "id",
                                "name",
                                "address",
                                "image",
                                "description",
                            ],
                            through: {
                                attributes: [],
                            },
                            include: [
                                {
                                    model: db.Clinic,
                                    attributes: ["name", "address"],
                                    required: true,
                                },
                            ],
                        },
                    ],
                });

                resolve(speciality);
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = specialityService;
