import initAuthRoutes from "./auth";
import initSpecialityRoutes from "./speciality";
import initClinicRoutes from "./clinic";
import initDoctorRoutes from "./doctor";
import initScheduleRoutes from "./schedule";
import initBookingRoutes from "./booking";

export const initWebRoutes = (app) => {
    initAuthRoutes(app);
    initSpecialityRoutes(app);
    initClinicRoutes(app);
    initDoctorRoutes(app);
    initScheduleRoutes(app);
    initBookingRoutes(app);
};
