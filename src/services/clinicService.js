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
};

module.exports = clinicService;
