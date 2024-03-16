import db from "../models/index";

const doctorService = {
    handleGetDoctorDetailService: (doctorId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const doctor = await db.Doctor.findOne({
                    where: {
                        id: doctorId,
                    },
                    include: [
                        {
                            model: db.Clinic,
                            attributes: ["name", "address"],
                            required: true,
                        },
                    ],
                });

                if (!doctor) {
                    resolve(null);
                }

                resolve(doctor);
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = doctorService;
