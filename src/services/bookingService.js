import { Op } from "sequelize";
import db from "../models/index";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
    },
});

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
                    const { email, ...bookingData } = data;
                    await db.Booking.create({
                        ...bookingData,
                    });

                    const booking = await db.Doctor_Schedule.findOne({
                        where: {
                            id: data.schedule_id,
                        },
                        include: [
                            {
                                model: db.Doctor,
                                attributes: ["name"],
                            },
                            {
                                model: db.Clinic,
                                attributes: ["name"],
                            },
                            {
                                model: db.Time_Code,
                                as: "time",
                                attributes: ["value"],
                            },
                        ],
                    });

                    booking.status_id = 2;

                    await booking.save();

                    let mailOptions = {
                        from: process.env.MAIL_ADDRESS,
                        to: email,
                        subject:
                            "THỐNG BÁO XÁC NHẬN ĐẶT LỊCH KHÁM TRÊN NỀN TẢNG HEALTH GRADES",
                        text: "Đặt lịch khám thành công",
                        html: `<b>Hệ thống xin thông báo bạn đã đặt lịch khám thành công bác sĩ ${booking.Doctor.name} tại cơ sở yế ${booking.Clinic.name} vào khung giờ ${booking.time.value}</b>`,
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(`Error: ${error}`);
                        }
                        console.log(`Message Sent: ${info.response}`);
                    });

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
                                {
                                    model: db.Doctor,
                                    attributes: ["name"],
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
                                "id",
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
    handleGetUserBookingService: (user_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const userBooking = await db.User.findOne({
                    where: {
                        id: user_id,
                    },
                    attributes: {
                        exclude: ["password"],
                    },
                    include: [
                        {
                            model: db.Booking,
                            attributes: [
                                "id",
                                "schedule_id",
                                "patient_name",
                                "birth_date",
                                "reason",
                            ],
                            include: [
                                {
                                    model: db.Doctor_Schedule,
                                    include: [
                                        {
                                            model: db.Doctor,
                                        },
                                        {
                                            model: db.Time_Code,
                                            as: "time",
                                        },
                                        {
                                            model: db.Status_Code,
                                            as: "status",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                });

                if (!userBooking) {
                    resolve({
                        message: "Not found",
                        status: 404,
                    });
                } else {
                    resolve({
                        status: 200,
                        message: "OK",
                        data: userBooking,
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    },
    handlGetBookingDetailService: (booking_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const booking = await db.Booking.findOne({
                    where: {
                        id: booking_id,
                    },
                    include: [
                        {
                            model: db.User,
                        },
                        {
                            model: db.Doctor_Schedule,
                            include: [
                                {
                                    model: db.Doctor,
                                },
                                {
                                    model: db.Time_Code,
                                    as: "time",
                                    attributes: ["value"],
                                },
                                {
                                    model: db.Status_Code,
                                    as: "status",
                                    attributes: ["value"],
                                },
                            ],
                        },
                    ],
                });

                if (!booking) {
                    resolve({
                        status: 404,
                        message: "Not found",
                    });
                } else {
                    resolve({
                        status: 200,
                        message: "OK",
                        data: booking,
                    });
                }
            } catch (err) {
                reject(err);
            }
        });
    },
};

module.exports = bookingService;
