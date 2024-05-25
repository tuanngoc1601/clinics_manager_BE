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
                            attributes: ["id", "value"],
                            as: "time",
                        },
                        {
                            model: db.Status_Code,
                            attributes: ["value"],
                            as: "status",
                        },
                    ],
                    order: [[{ model: db.Time_Code, as: "time" }, "id", "ASC"]],
                });

                resolve(schedules);
            } catch (e) {
                reject(e);
            }
        });
    },
    handleGetAllTimeCodeService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const timeCode = await db.Time_Code.findAll();
                resolve(timeCode);
            } catch (e) {
                reject(e);
            }
        });
    },
    handleAddScheduleTimeDoctorService: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.sequelize.transaction(async (t) => {
                    const { times, ...other } = data;
                    for (let i = 0; i < data.times.length; i++) {
                        await db.Doctor_Schedule.create(
                            {
                                ...other,
                                time_id: times[i],
                                status_id: 1,
                                price: 300000,
                            },
                            {
                                transaction: t,
                            }
                        );
                    }
                });

                resolve(result);
            } catch (err) {
                console.error("Transaction failed to initialize:", err);
                reject(err);
            }
        });
    },
    handleDeleteScheduleTimeDoctorService: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.sequelize.transaction(async (t) => {
                    const { times, ...other } = data;
                    for (let i = 0; i < times.length; i++) {
                        await db.Doctor_Schedule.destroy(
                            {
                                where: {
                                    ...other,
                                    time_id: times[i],
                                    status_id: 1,
                                },
                            },
                            {
                                transaction: t,
                            }
                        );
                    }
                });

                resolve(result);
            } catch (err) {
                console.error("Transaction failed to initialize:", err);
                reject(err);
            }
        });
    },
};

module.exports = scheduleService;
