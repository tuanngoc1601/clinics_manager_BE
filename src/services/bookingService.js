import { Op } from "sequelize";
import db from "../models/index";

const bookingService = {
    handleGetInfoBookingService: (schedule_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const bookingInfo = await db.Doctor_Schedule.findOne({
                    where: {
                        id: schedule_id,
                    },
                    include: [
                        {
                            model: db.Doctor,
                            attributes: ["name", "image"],
                        },
                        {
                            model: db.Clinic,
                            attributes: ["name"],
                        },
                        {
                            model: db.Time_Code,
                            attributes: ["value"],
                            as: "time",
                        },
                    ],
                });

                if (!bookingInfo) {
                    resolve({
                        status: 404,
                        message: "booking infomation not found",
                    });
                } else {
                    resolve({
                        status: 200,
                        message: "Ok",
                        data: bookingInfo,
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    handleBookingScheduleService: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const item = await db.Doctor_Schedule.findOne({
                    where: {
                        id: data.schedule_id,
                        status_id: {
                            [Op.not]: 1,
                        },
                    },
                });

                if (item) {
                    resolve({
                        status: 203,
                        message: "schedule is booked!",
                    });
                } else {
                    await db.Booking.create({
                        ...data,
                    });

                    const booking = await db.Doctor_Schedule.findOne({
                        where: {
                            id: data.schedule_id,
                        },
                    });

                    booking.status_id = 2;

                    await booking.save();

                    resolve({
                        status: 201,
                        message: "Ok",
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    handleGetBookingClinicService: (clinic_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const bookings = await db.Booking.findAll({
                    include: [
                        {
                            model: db.Doctor_Schedule,
                            where: {
                                clinic_id: clinic_id,
                            },
                            include: [
                                {
                                    model: db.Status_Code,
                                    attributes: ["value"],
                                    as: "status",
                                },
                            ],
                        },
                        {
                            model: db.User,
                            attributes: [
                                "firstName",
                                "lastName",
                                "email",
                                "phoneNumber",
                            ],
                        },
                    ],
                });

                resolve({
                    status: 200,
                    data: bookings,
                    message: "Ok",
                });
            } catch (err) {
                reject(err);
            }
        });
    },
    handleGetPatientClinicService: (clinic_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const patients = await db.Booking.findAll({
                    attributes: [
                        "schedule_id",
                        "patient_name",
                        "phone_number",
                        "birth_date",
                        "address",
                        "reason",
                    ],
                    group: ["user_id"],
                    include: [
                        {
                            model: db.User,
                            attributes: [
                                "firstName",
                                "lastName",
                                "email",
                                "phoneNumber",
                                "address",
                                "gender",
                            ],
                        },
                    ],
                });

                resolve({
                    status: 200,
                    message: "OK",
                    data: patients,
                });
            } catch (err) {
                reject(err);
            }
        });
    },
    handleConfirmBookingService: (booking_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const booking = await db.Booking.findOne({
                    where: {
                        id: booking_id,
                    },
                });

                if (!booking) {
                    resolve({
                        status: 404,
                        message: "Not found",
                    });
                } else {
                    const schedule = await db.Doctor_Schedule.findOne({
                        where: {
                            id: booking.schedule_id,
                        },
                    });

                    if (!schedule) {
                        resolve({
                            status: 403,
                            message: "Confirm failed",
                        });
                    } else {
                        schedule.status_id = 3;

                        await schedule.save();

                        resolve({
                            status: 200,
                            message: "Ok",
                        });
                    }
                }
            } catch (err) {
                reject(err);
            }
        });
    },
};

module.exports = bookingService;
