import express from "express";
import bookingController from "../controllers/bookingController";
// import authentication from "../middlewares/authentication";

let router = express.Router();

let initBookingRoutes = (app) => {
    router.get(
        "/get-booking-info/:schedule_id",
        bookingController.handleGetInfoBooking
    );
    router.post("/booking-schedule", bookingController.handleBookingSchedule);
    router.get(
        "/get-booking/:clinic_id",
        bookingController.handleGetBookingClinic
    );
    router.get(
        "/get-patients/:clinic_id",
        bookingController.handleGetPatientClinics
    );
    router.put(
        "/confirm-booking/:booking_id",
        bookingController.handleConfirmBooking
    );
    router.get(
        "/get-booking-user/:user_id",
        bookingController.handleGetBookingUser
    );

    return app.use("/api/v1/booking", router);
};

module.exports = initBookingRoutes;
