import express from "express";
import doctorController from "../controllers/doctorController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initDoctorRoutes = (app) => {
    router.get(
        "/get-doctor-by-id/:doctorId",
        doctorController.handleGetDoctorDetail
    );

    // admin routes
    router.get(
        "/get-all-doctor-clinic/:clinic_id",
        authentication.verifyToken,
        doctorController.handleGetDoctorClinic
    );
    router.put(
        "/update-doctor-info/:doctor_id",
        authentication.verifyToken,
        doctorController.handleUpdateDoctorInfo
    );
    router.delete(
        "/delete-doctor",
        authentication.verifyToken,
        doctorController.handleDeleteDoctor
    );

    return app.use("/api/v1/doctor", router);
};

module.exports = initDoctorRoutes;
