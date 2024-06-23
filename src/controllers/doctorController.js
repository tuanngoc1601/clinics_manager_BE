import doctorService from "../services/doctorService";

const doctorController = {
    handleGetDoctorDetail: async (req, res) => {
        const doctorId = req.params.doctorId;

        if (!doctorId) {
            return res.status(400).json({
                message: "Missing inputs parameter!",
            });
        }

        const response = await doctorService.handleGetDoctorDetailService(
            doctorId
        );

        if (!response)
            return res.status(403).json({ message: "Not found clinic!" });

        return res.status(200).json({
            message: "OK",
            data: response,
        });
    },
    handleGetDoctorClinic: async (req, res) => {
        const clinic_id = req.params.clinic_id;

        if (!clinic_id) {
            return res.status(404).json({
                message: "Invalid parameter",
            });
        }

        const response = await doctorService.handleGetDoctorClinicService(
            clinic_id
        );

        return res.status(200).json({
            message: "OK",
            data: response,
        });
    },
    handleUpdateDoctorInfo: async (req, res) => {
        const doctor_id = req.params.doctor_id;
        const info = req.body;

        if (!doctor_id || !info) {
            return res.status(400).json({
                message: "Missing input parameters",
            });
        }

        const response = await doctorService.handleUpdateDoctorInfo(
            doctor_id,
            info
        );

        return res.status(response.status).json({
            message: response.message,
        });
    },
    handleDeleteDoctor: async (req, res) => {
        const doctor_id = req.body.doctor_id;

        if (!doctor_id) {
            return res.status(400).json({
                message: "Missing input parameter",
            });
        }

        const response = await doctorService.hanldeDeleteDoctorService(
            doctor_id
        );

        return res.status(response.status).json({
            message: response.message,
        });
    },
};

module.exports = doctorController;
