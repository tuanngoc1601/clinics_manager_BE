import bookingService from "../services/bookingService";

const bookingController = {
    handleGetInfoBooking: async (req, res) => {
        const schedule_id = req.params.schedule_id;

        if (!schedule_id) {
            return res.status(400).json({
                message: "Invalid parameters",
            });
        }

        const response = await bookingService.handleGetInfoBookingService(
            schedule_id
        );

        return res.status(response.status).json({
            message: response.message,
            data: response.data,
        });
    },
    handleBookingSchedule: async (req, res) => {
        const data = req.body;

        if (!data) {
            return res.status(400).json({
                message: "Invalid booking schedule",
            });
        }

        const response = await bookingService.handleBookingScheduleService(
            data
        );

        return res.status(response.status).json({
            message: response.message,
        });
    },
};

module.exports = bookingController;