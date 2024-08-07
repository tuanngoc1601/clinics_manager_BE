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
    handleGetBookingClinic: async (req, res) => {
        const clinic_id = req.params.clinic_id;

        if (!clinic_id) {
            return res.status(400).json({
                message: "Invalid parameter",
            });
        }

        const response = await bookingService.handleGetBookingClinicService(
            clinic_id
        );

        return res.status(response.status).json({
            message: response.message,
            data: response.data,
        });
    },
    handleGetPatientClinics: async (req, res) => {
        const clinic_id = req.params.clinic_id;

        if (!clinic_id) {
            return res.status(400).json({
                message: "Invalid parameter",
            });
        }

        const response = await bookingService.handleGetPatientClinicService(
            clinic_id
        );

        return res.status(response.status).json({
            message: response.message,
            data: response.data,
        });
    },
    handleConfirmBooking: async (req, res) => {
        const booking_id = req.params.booking_id;

        if (!booking_id) {
            return res.status(400).json({
                message: "Invalid parameters",
            });
        }

        const response = await bookingService.handleConfirmBookingService(
            booking_id
        );

        return res.status(response.status).json({
            message: response.message,
        });
    },
    handleGetBookingUser: async (req, res) => {
        const user_id = req.params.user_id;

        if (!user_id) {
            return res.status(400).json({
                message: "Invalid parameter",
            });
        }

        const bookingResp = await bookingService.handleGetUserBookingService(
            user_id
        );

        return res.status(bookingResp.status).json({
            message: bookingResp.message,
            data: bookingResp?.data,
        });
    },
    handleGetBookingDetail: async (req, res) => {
        const booking_id = req.params.booking_id;

        if (!booking_id) {
            return res.status(400).json({
                message: "Invalid parameters",
            });
        }

        const booking = await bookingService.handlGetBookingDetailService(
            booking_id
        );

        return res.status(booking.status).json({
            message: booking.message,
            data: booking?.data,
        });
    },
};

module.exports = bookingController;
