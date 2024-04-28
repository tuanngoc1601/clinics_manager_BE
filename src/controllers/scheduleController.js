import scheduleService from "../services/scheduleService";

const scheduleController = {
    handleGetScheduleDoctor: async (req, res) => {
        const doctorId = req.params.doctorId;
        const dateString = req.params.dateString;

        if (!doctorId || !dateString) {
            return res.status(400).json({
                message: "Missing inputs parameter!",
            });
        }

        const response = await scheduleService.handleGetScheduleDoctorService(
            doctorId, dateString
        );

        return res.status(200).json({
            message: "OK",
            data: response,
        });
    },
};

module.exports = scheduleController;
