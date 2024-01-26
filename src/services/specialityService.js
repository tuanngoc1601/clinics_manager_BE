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
};

module.exports = specialityService;
