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
                        {
                            model: db.Speciality,
                            as: "specialities",
                            attributes: ["id", "name"],
                            through: {
                                attributes: [],
                            },
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
    handleGetDoctorClinicService: (clinic_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await db.Doctor.findAll({
                    where: {
                        clinic_id: clinic_id,
                    },
                    raw: true,
                });

                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    },
    handleUpdateDoctorInfo: (doctor_id, info) => {
        return new Promise(async (resolve, reject) => {
            try {
                const doctor = await db.Doctor.findOne({
                    where: {
                        id: doctor_id,
                    },
                });

                if (!doctor) {
                    resolve({
                        status: 404,
                        message: "doctor not found",
                    });
                }

                doctor.email = info.email;
                doctor.name = info.name;
                doctor.address = info.address;
                doctor.description = info.description;
                doctor.introduction = info.introduction;

                await doctor.save();

                resolve({
                    status: 200,
                    message: "OK",
                });
            } catch (err) {
                reject(err);
            }
        });
    },
    hanldeDeleteDoctorService: (doctor_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const doctor = await db.Doctor.findOne({
                    where: {
                        id: doctor_id,
                    },
                });

                if (!doctor) {
                    resolve({
                        status: 404,
                        message: "Not found!",
                    });
                } else {
                    await doctor.destroy();

                    resolve({
                        status: 200,
                        message: "Ok",
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    },
};

module.exports = doctorService;
