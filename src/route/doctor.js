import express from "express";
import doctorController from "../controllers/doctorController";
// import authentication from "../middlewares/authentication";

let router = express.Router();

let initDoctorRoutes = (app) => {
    router.get(
        "/get-doctor-by-id/:doctorId",
        doctorController.handleGetDoctorDetail
    );
    router.get("/get-all-doctor-clinic/:clinic_id", doctorController.handleGetDoctorClinic);

    return app.use("/api/v1/doctor", router);
};

module.exports = initDoctorRoutes;
