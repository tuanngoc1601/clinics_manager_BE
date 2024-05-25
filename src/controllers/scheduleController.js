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
            doctorId,
            dateString
        );

        return res.status(200).json({
            message: "OK",
            data: response,
        });
    },
    handleGetAllTimeCode: async (req, res) => {
        const response = await scheduleService.handleGetAllTimeCodeService();
        return res.status(200).json({
            data: response,
            message: "Ok",
        });
    },
    handleAddScheduleTimeDoctor: async (req, res) => {
        const data = req.body;

        if (!data) {
            return res.status(400).json({
                message: "Missing inputs parameter!",
            });
        }

        const response =
            await scheduleService.handleAddScheduleTimeDoctorService(data);

        return res.status(201).json(response);
    },
    handleDeleteScheduleTimeDoctor: async (req, res) => {
        const data = req.body;

        if (!data) {
            return res.status(400).json({
                message: "Missing inputs parameter",
            });
        }

        const response = await scheduleService.handleDeleteScheduleTimeDoctorService(data);

        return res.status(200).json(response);
    },
};

module.exports = scheduleController;
