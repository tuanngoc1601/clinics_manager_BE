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
        const clinic_id = req.params.clinic_id;``

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
};

module.exports = doctorController;
