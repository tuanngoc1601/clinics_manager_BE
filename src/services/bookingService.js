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
};

module.exports = bookingService;
