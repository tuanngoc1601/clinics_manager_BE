import db from "../models/index";

const clinicService = {
    handleGetAllClinicsService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const allClinics = await db.Clinic.findAll({
                    raw: true,
                });

                resolve(allClinics);
            } catch (e) {
                reject(e);
            }
        });
    },
    handleGetClinicDetailService: (clinicId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const clinic = await db.Clinic.findOne({
                    where: { id: clinicId },
                    include: [
                        {
                            model: db.Doctor,
                            attributes: [
                                "id",
                                "name",
                                "image",
                                "description",
                                "address",
                            ],
                        },
                    ],
                });

                if (clinic) {
                    resolve(clinic);
                } else {
                    resolve(null);
                }
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = clinicService;
