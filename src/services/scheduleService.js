import db from "../models/index";

const scheduleService = {
    handleGetScheduleDoctorService: (doctorId, dateString) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schedules = await db.Doctor_Schedule.findAll({
                    where: {
                        doctor_id: doctorId,
                        booking_date: dateString,
                    },
                    attributes: [
                        "id",
                        "clinic_id",
                        "doctor_id",
                        "booking_date",
                        "price",
                    ],
                    include: [
                        {
                            model: db.Time_Code,
                            attributes: ["value"],
                            as: "time",
                        },
                        {
                            model: db.Status_Code,
                            attributes: ["value"],
                            as: "status",
                        },
                    ],
                });

                resolve(schedules);
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = scheduleService;
