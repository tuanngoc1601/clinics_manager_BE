import express from "express";
import bookingController from "../controllers/bookingController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initBookingRoutes = (app) => {
    router.get(
        "/get-booking-info/:schedule_id",
        bookingController.handleGetInfoBooking
    );
    router.post(
        "/booking-schedule",
        authentication.verifyToken,
        bookingController.handleBookingSchedule
    );
    router.get(
        "/get-booking/:clinic_id",
        authentication.verifyToken,
        bookingController.handleGetBookingClinic
    );

    // admin routes
    router.get(
        "/get-patients/:clinic_id",
        authentication.verifyToken,
        bookingController.handleGetPatientClinics
    );
    router.put(
        "/confirm-booking/:booking_id",
        authentication.verifyToken,
        bookingController.handleConfirmBooking
    );
    router.get(
        "/get-booking-user/:user_id",
        authentication.verifyToken,
        bookingController.handleGetBookingUser
    );
    router.get(
        "/booking-detail/:booking_id",
        authentication.verifyToken,
        bookingController.handleGetBookingDetail
    );

    return app.use("/api/v1/booking", router);
};

module.exports = initBookingRoutes;
