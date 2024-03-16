import initAuthRoutes from "./auth";
import initSpecialityRoutes from "./speciality";
import initClinicRoutes from "./clinic";
import initDoctorRoutes from "./doctor";

export const initWebRoutes = (app) => {
    initAuthRoutes(app);
    initSpecialityRoutes(app);
    initClinicRoutes(app);
    initDoctorRoutes(app);
};
