"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("doctors", [
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An",
                description:
                    "<p>Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương </p> <p>Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương </p> <p>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</strong></h2> <ul> <li>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</li> <li>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</li> <li>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</li> <li>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</li> <li>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</li> </ul> <h2><strong>Khám & điều trị</strong></h2> <ul> <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</li> <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</li> <li>Nội soi Tai Mũi Họng</li> <li>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</li> </ul> <p><strong>Các bệnh về tai</strong></p> <ul> <li>Ù tai, nghe kém, điếc đột ngột</li> <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li> <li>Vá màng nhĩ nội soi</li> <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li> </ul> <p><strong>Các bệnh mũi xoang</strong></p> <ul> <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li> <li>Viêm mũi ngạt tắc mũi mạn tính</li> <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li> <li>Nấm mũi xoang</li> <li>Đau đầu mạn tính do mũi xoang…</li> </ul> <p><strong>Các bệnh về họng thanh quản</strong></p> <ul> <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li> <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li> <li>Viêm amiđan cấp, mạn</li> <li>Nạo V.A</li> <li>Cắt Amidan</li> </ul>",
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Tai mũi họng tại Bệnh viện An Việt",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về Tai Mũi Họng </p> <p>Bệnh viện được trang bị những máy móc khám - điều trị hiện đại </p> <p>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/06/29/152850-logo-bv-an-viet.png",
                introduction:
                    "<h2><strong>Khám Tai mũi họng tại Bệnh viện An Việt</strong></h2> <ul> <li>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về Tai mũi họng</li> <li>Hỗ trợ đăng ký khám trực tuyến, đặt lịch khám bệnh</li> <li>Giảm thời gian chờ đợi, ưu tiên khám nhanh</li> <li>Bệnh viện được trang bị những máy móc khám - điều trị hiện đại</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</li> <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</li> <li>Nội soi Tai Mũi Họng</li> <li>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</li> </ul> <p><strong>Các bệnh về tai</strong></p> <ul> <li>Ù tai, nghe kém, điếc đột ngột</li> <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li> <li>Vá màng nhĩ nội soi</li> <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li> </ul> <p><strong>Các bệnh mũi xoang</strong></p> <ul> <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li> <li>Viêm mũi ngạt tắc mũi mạn tính</li> <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li> <li>Nấm mũi xoang</li> <li>Đau đầu mạn tính do mũi xoang…</li> </ul> <p><strong>Các bệnh về họng thanh quản</strong></p> <ul> <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li> <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li> <li>Viêm amiđan cấp, mạn</li> <li>Nạo V.A</li> <li>Cắt Amidan</li> </ul> <h2><strong>Bệnh viện An Việt</strong></h2> <p>Đội ngũ bác sĩ của bệnh viện An Việt đều là các bác sĩ nhiều năm kinh nghiệm và được bệnh nhân phản hồi tích cực về quá trình khám và điều trị. Bên cạnh đó, bệnh viện còn đầu tư cơ sở hạ tầng và trang thiết bị hỗ trợ thăm khám và điều trị hiệu quả cho người bệnh: Hệ thống nội soi tai mũi họng, máy chụp cắt lớp vi tính, phòng phẫu thuật đảm bảo vô trùng,...</p> <h3><strong>Danh sách bác sĩ khám Tai mũi họng tại Bệnh viện An Việt</strong></h3> <p>Người bệnh có thể được khám bởi một trong các bác sĩ sau:</p> <ul> <li>PGS.TS Nguyễn Thị Hoài An<ul> <li>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung Ương</li> <li>Giám Đốc Bệnh viện Đa khoa An Việt</li> <li>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</li> </ul> </li> <li>PGS.TS Đoàn Thị Hồng Hoa<ul> <li>Nguyên Phó Trưởng khoa Tai - Tai Thần Kinh, Bệnh viện Tai Mũi Họng Trung Ương</li> </ul> </li></ul>",
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Bùi Ngọc Lâm",
                description:
                    "<p>Gần 30 năm kinh nghiệm trong lĩnh vực Nam học, Tiết niệu </p> <p>Nguyên Trưởng khoa Khám ngoại, Bệnh viện Xanh Pôn </p> <p>Nguyên Chủ nhiệm Quân y E132 Bộ Tư lệnh thông tin liên lạc </p> <p>Bác sĩ nhận khám mọi lứa tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/19/093214-bs-lam-bv-an-viet.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Bùi Ngọc Lâm</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm trong lĩnh vực Nam học, Tiết niệu</li> <li>Nguyên Trưởng khoa Khám ngoại, Bệnh viện Xanh Pôn</li> <li>Nguyên Chủ nhiệm Quân y E132 Bộ Tư lệnh thông tin liên lạc</li> <li>Bác sĩ nhận khám mọi lứa tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Các bệnh lý về bao quy đầu</p> <ul> <li>Dài bao quy đầu</li> <li>Hẹp bao quy đầu</li> <li>Viêm bao quy đầu,…</li> </ul> <p>Bệnh về Tiết niệu</p> <ul> <li>Điều trị bệnh liên quan đến tiết niệu, thận, niệu quản, bàng quang</li> <li>Điều trị về tiền liệt tuyến, phì đại tiền liệt tuyến, đi tiểu ra máu</li> <li>Viêm bàng quang</li> <li>Tiểu không tự chủ</li> <li>Viêm đài bể thận</li> <li>Vôi hóa tuyến tiền liệt</li> </ul> <p>Bệnh Sinh dục nam giới</p> <ul> <li>Rối loạn cương dương, yếu sinh lý, suy giảm chức năng sinh dục</li> <li>Xuất tinh sớm, không xuất tinh, xuất tinh ngược</li> <li>Viêm tinh hoàn, viêm mào tinh hoàn</li> </ul> <p>Hiếm muộn cho nam giới</p> <ul> <li>Các bệnh lý liên quan đến hiếm muộn</li> <li>Xuất tinh kèm máu (máu lẫn trong tinh trùng)</li> <li>Xuất tinh xong xuất hiện máu (đi tiểu tiện ra máu)</li> <li>Ra máu sau xuất tinh (đi tiểu tiện ra máu, tự chảy máu)…</li> </ul> <p>Các vấn đề nam học của trẻ em</p> <ul> <li>Nong bao quy đầu và cắt bao quy đầu</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Nam học – Tiết niệu, Bệnh viện An Việt (Nay)</li> <li>Trưởng khoa Khám ngoại, Bệnh viện Xanh Pôn</li> <li>Phó khoa phòng Khám ngoại, Bệnh viện Xanh Pôn (1994 - 2013)</li> <li>Phòng kế hoạch tổng hợp Bệnh viện Xanh Pôn, Bệnh viện Xanh Pôn (1983 - 1994)</li> <li>Chủ nhiệm Quân y E132, Bộ Tư lệnh thông tin liên lạc (1983)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp chuyên ngành Ngoại – Tiết niệu, Đại học Quân Y Hà Nội (1996)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thư ký đầu ngành Hội Ngoại khoa Hà Nội (1995 - 2013)</li> </ul>",
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Phạm Mạnh Thân",
                description:
                    "<p>Gần 40 năm kinh nghiệm trong lĩnh vực Nhi khoa </p> <p>Hơn 30 năm công tác tại Bệnh viện Xanh Pôn </p> <p>Bác sĩ từng tu nghiệp tại Cộng hòa Pháp</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/19/095250-bs-pham-manh-than-nhi-khoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Phạm Mạnh Thân</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm trong lĩnh vực Nhi khoa</li> <li>Hơn 30 năm công tác tại Bệnh viện Xanh Pôn</li> <li>Bác sĩ từng tu nghiệp tại Cộng hòa Pháp</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nhi khoa tổng quát</li> <li>Nhi chuyên sâu (phổi, tiêu hoá, hô hấp, nội tiết, thận, thần kinh)</li> <li>Nhi khoa sơ sinh</li> <li>Các bệnh truyền nhiễm và tiêm chủng</li> <li>Dinh dưỡng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Nhi, Bệnh viện An Việt (Nay)</li> <li>Bác sĩ Nhi & kiêm Trưởng phòng kế hoạch tổng hợp, Bệnh viện Xanh Pôn (1992 - 2016)</li> <li>Bác sĩ Nội trú, Bệnh viện ST Charle charles - Montpellier - Cộng hoà Pháp (1991 – 1992)</li> <li>Bác sĩ chuyên khoa Nhi, Bệnh viện Xanh Pôn (1983 - 1991)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Nhi khoa, Đại học Y Hà Nội (1976 - 1982)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội Nhi khoa Hà Nội</li> </ul>",
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Lê Minh Châu",
                description:
                    "<p>40 năm kinh nghiệm trong lĩnh vực Sản phụ khoa, Vô sinh hiếm muộn nữ </p> <p>Nguyên Phó Trưởng khoa Khám bệnh, Bệnh viện Phụ sản Trung ương </p> <p>Trưởng khoa Sản phụ khoa, Bệnh viện An Việt</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/18/175733-bs-chau-bv-an-viet.jpg",
                introduction:
                    '<h2><strong>Tiến sĩ, Bác sĩ Lê Minh Châu</strong></h2> <ul> <li>40 năm kinh nghiệm trong lĩnh vực Sản phụ khoa, Vô sinh hiếm muộn nữ</li> <li>Nguyên Phó Trưởng khoa Khám Bệnh, Bệnh viện Phụ sản Trung ương</li> <li>Trưởng khoa Sản phụ khoa, Bệnh viện An Việt</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Mổ u xơ tử cung</li> <li>Mổ u nang buồng trứng</li> <li>Khám và điều trị lộ tuyến cổ tử cung</li> <li>Gỡ dịch thông vòi</li> <li>Polyp tử cung</li> <li>Viêm âm đạo, viêm cổ tử cung</li> <li>Vô sinh hiếm muộn</li> <li>Điều trị lạc nội mạc tử cung</li> <li>Sẹo xấu âm đạo</li> <li>Chỉnh sửa, phục hồi tầng sinh môn sau sinh</li> <li>Theo dõi nang trứng</li> <li>Điều trị rong kinh, rong huyết, tiền mãn kinh</li> <li>Theo dõi thai kỳ</li> <li>Khám vú và điều trị u vú lành tính bằng hút chân không (VABB)</li> <li>Phẫu thuật ung thư vú</li> <li>Theo dõi thai kì </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Phó Trưởng khoa Khám Bệnh tại Bệnh viện Phụ sản Trung ương</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Hà Nội (1982)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Tiến sĩ Lê Minh Châu tích cực tham gia nghiên cứu khoa học với nhiều đề tài khoa học đã được công bố như: "Nghiên cứu mối liên quan giữa chất lượng tinh trùng sau lọc rửa và tỉ lệ có thai bằng phương pháp bơm tinh trùng vào buồng tử cung", "Bơm tinh trùng vào buồng tử cung…"</li> <li>Tiến sĩ Châu cũng tích cực tham gia nghiên cứu khoa học đề tài cấp Bộ như đề tài “Đánh giá hiệu quả và tính an toàn của thuốc viên TADIMAX trong điều trị U xơ tử cung”,…</li> <li>Nghiên cứu hiệu quả điều trị khô âm đạo của viên uống SPACAPS ở phụ nữ tiền mãn kinh và mãn kinh…</li> <li>Bơm tinh trùng vào buồng tử cung: liên quan giữa tinh trùng và tỉ lệ có thai ở những cặp vô sinh do thiểu năng tinh trùng.</li> <li>Nghiên cứu hiệu quả của phương pháp bơm tinh trùng đã lọc rửa bằng kỹ thuật thang nồng độ vào buồng tử cung trong điều trị vô sinh tại Bệnh viện Phụ sản Trung ương.</li> </ul>',
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Phạm Đức Thịnh",
                description:
                    "<p>Bác sĩ Chuyên khoa Tâm thần </p> <p>Nguyên Phó Giám đốc Bệnh viện Tâm thần Trung Ương </p> <p>Bác sĩ nhận khám mọi lứa tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/10/03/105302bs-pham-duc-thinh.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Phạm Đức Thịnh</strong></h2> <ul> <li>Bác sĩ Chuyên khoa Tâm thần </li> <li>Nguyên Phó Giám đốc Bệnh viện Tâm thần Trung Ương</li> <li>Bác sĩ nhận khám mọi lứa tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Mất ngủ</li> <li>Rối loạn giấc ngủ</li> <li>Căng thẳng, stress</li> <li>Trầm cảm</li> <li>Tâm thần phân liệt</li> <li>Bệnh hoang tưởng</li> <li>Rối loạn cảm xúc </li> <li>Rối loạn căng thẳng sau chấn thương tâm lý </li> <li>Rối loạn lo âu</li> <li>Rối loạn lưỡng cực</li> <li>Rối loạn nhân cách</li> <li>Tư vấn và tạo điều kiện cho bệnh nhân tái thích ứng xã hội</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Viện trưởng Viện Pháp y, Bệnh viện Tâm thần Trung Ương</li> <li>Nguyên Phó Giám đốc Bệnh viện Tâm thần Trung Ương</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Lahabana, Cuba (1974)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa II, chuyên khoa Tâm thần (1994)</li> <li>Tốt nghiệp Tiến sĩ Y khoa (2003)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội đồng Giám định pháp y tâm thần, Bộ Y tế</li> <li>Thành viên Hội đồng Đánh giá luận án Tiến sĩ, Thạc sĩ, Học viện Quân Y</li> <li>Thành viên Hội đồng Thẩm định Chương trình Đào tạo chuyên ngành Khoa học Thần kinh (2017)</li> </ul>",
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Bùi Thị Minh Huệ",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong khám, điều trị khoa Sản - Phụ khoa</p> <p>Bác sĩ đang công tác tại bệnh viện Phụ sản Hà Nội</p> <p>Bác sĩ nhận khám mọi lứa tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/08/20/162730-untitled.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Bùi Thị Minh Huệ</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong khám, điều trị khoa Sản - Phụ khoa</li> <li>Bác sĩ đang công tác tại bệnh viện Phụ sản Hà Nội</li> <li>Bác sĩ nhận khám mọi lứa tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị các bệnh viêm nhiễm phụ khoa như: viêm âm đạo, viêm cổ tử cung, viêm lộ tuyến</li> <li>Rối loạn kinh nguyệt</li> <li>Sàng lọc, phát hiện ung thư sớm cổ tử cung</li> <li>Theo dõi thai kỳ, sàng lọc dị tật bẩm sinh</li> <li>Tư vấn kế hoạch hóa gia đình</li> <li>Tư vấn tiền hôn nhân</li> <li>...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị tại bệnh viện Đa khoa An Việt</li> <li>Bác sĩ từng có thời gian nghiên cứu, làm việc tại Pháp</li> <li>Bác sĩ điều trị tại bệnh viện Phụ sản Hà Nội</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Hà Nội chuyên ngành Phụ khoa (1988)</li> </ul>",
                clinic_id: "eeb6a4a7-f3c6-42b7-9560-d14189d51017",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Timothy Gallivan",
                description:
                    "<p>Bác sĩ có kinh nghiệm trên 20 năm trong trị liệu thần kinh cột sống</p> <p>Bác sĩ được nhận Chứng nhận Kỹ thuật trị liệu Kenedy - Phương pháp trị liệu cho người thoát vị đĩa đệm</p> <p>Bác sĩ nhận khám và điều trị cả trẻ em, người lớn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/09/28/113105dr-timothy-gallivan.png",
                introduction:
                    "<h2><strong>Bác sĩ Timothy Gallivan</strong></h2> <ul> <li>Bác sĩ có kinh nghiệm trên 20 năm trong trị liệu thần kinh cột sống</li> <li>Tốt nghiệp Trường Đại học Trị liệu Thần kinh Cột sống New York (1996)</li> <li>Ông từng làm việc về Trị liệu thần kinh cột sống tại Peru trong 2 năm </li> <li>Ông là bác sĩ đầu tiên ở khu vực Đông Nam Á đạt chứng nhận về phương pháp kéo dãn giảm áp cột sống Kennedy trong việc điều trị thoát vị đĩa đệm</li> </ul> <p>Bác sĩ Timothy từng tham gia chương trình tình nguyện và áp dụng Phương pháp trị liệu thần kinh cột sống để khám chữa chữa bệnh cho nhiều bệnh nhân ở các nước kém phát triển như Haiti, Ecuador, Jamaica và Cộng Hòa Dominica. Ông cũng là người mang những phương thức trị liệu phục hồi chức năng mơi đến với Việt Nam.</p> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Trị liệu thần kinh cột sống</li> <li>Thoát vị đĩa đệm</li> <li>Đau dây thần kinh tọa</li> <li>Đau đầu</li> <li>Chứng đau vai</li> <li>Đau khuỷu tay</li> <li>Đau cổ tay</li> <li>Cong vẹo cột sống</li> <li>Chấn thương cột sống</li> <li>Thoái hóa đốt sống cổ, lưng</li> <li>Đau thắt lưng</li> <li>Đau đầu gối</li> <li>Các chứng đau bàn chân</li> <li>Đau mắt cá</li> <li>Dị tật bàn chân bẹt ở trẻ em</li> </ul>",
                clinic_id: "fa53503f-f25b-48fa-91bb-80fae059d134",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Eric Balderree",
                description:
                    "<p>Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Life Chiropractic College - Hoa Kỳ</p> <p>Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật</p> <p>Bác sĩ nhận khám và điều trị cả trẻ em, người lớn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/02/18/152220-bac-si-eric-balderree.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Eric Balderree</strong></h2> <ul> <li>Bác sĩ Chuyên Khoa Trị Liệu Thần Kinh Cột Sống</li> <li>Cử nhân Khoa học về Vận động học, chuyên ngành Tiền vật lý trị liệu tại Đại học bang San Diego - Mỹ</li> <li>Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Đại học Life Chiropractic College - Mỹ (2010)</li> <li>Bác sĩ đã từng hành nghề ở Mỹ, Singapore và Indonesia.</li> <li>Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật.</li> </ul> <p>Bác sĩ Eric đề ra sứ mệnh cho bản thân là “<strong>Hướng dẫn, điều trị, và truyền cảm hứng cho càng nhiều gia đình càng tốt trong việc giữ vững sức khỏe tối ưu thông qua phương pháp tự nhiên về trị liệu thần kinh cột sống</strong>”.</p> <p>Bác sĩ Eric cho rằng việc dành thời gian để giải thích cho bệnh nhân về chẩn đoán bệnh là tối quan trọng, qua đó bệnh nhân có thể hiểu chính xác những nguyên nhân dẫn đến bệnh trạng của mình. Ông luôn đưa ra phác đồ điều trị cụ thể cho từng bệnh nhân và theo sát các bước trong tiến trình phục hồi cũng như trong giai đoạn phòng ngừa việc tái đau trở lại.</p> <p>Bác sĩ Eric là người yêu công việc chăm sóc bệnh nhân của mình. Ngoài ra, những lúc rãnh rỗi ông thích đi du lịch, lặn biển, tập thể dục, chơi bóng chày, và dành thời gian với gia đình của mình. Mục tiêu của Bác sĩ Eric là giúp bệnh nhân có được một cuộc sống không còn đau đớn và giúp cơ thể họ vận động hết khả năng vốn có với sức khỏe tối ưu.</p> <h2><strong>Bác sĩ khám và điều trị</strong></h2> <ul> <li>Thoát vị đĩa đệm</li> <li>Thoái hóa đốt sống cổ, lưng</li> <li>Đau dây thần kinh tọa</li> <li>Hội chứng rễ dây thần kinh</li> <li>Đau đầu</li> <li>Chứng đau vai</li> <li>Đau khuỷu tay</li> <li>Đau cổ tay</li> <li>Cong vẹo cột sống</li> <li>Đau thắt lưng</li> <li>Đau đầu gối</li> <li>Các chứng đau bàn chân</li> <li>Đau mắt cá</li> <li>Chấn thương thể thao</li> <li>Phục hồi chức năng</li> <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li> </ul>",
                clinic_id: "fa53503f-f25b-48fa-91bb-80fae059d134",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Hoisang Gong",
                description:
                    "<p>Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống</p> <p>Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao vùng cổ và thắt lưng tại Mỹ và Thái Lan</p> <p>Bác sĩ nhận khám và điều trị cả trẻ em, người lớn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/02/18/103854-bac-si-hoisang-gong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Hoisang Gong</strong></h2> <ul> <li>Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ</li> <li>Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống</li> <li>Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)</li> <li>Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng</li> </ul> <h2><strong>Tham gia các chuyên đề sức khỏe trên báo chí truyền hình</strong></h2> <ul> <li>Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Thoát vị đĩa đệm</li> <li>Thoái hóa cột sống</li> <li>Đau thần kinh tọa</li> <li>Đau thắt lưng</li> <li>Chấn thương thể thao</li> <li>Phục hồi chức năng</li> <li>Vẹo cột sống</li> <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li> <li>Đau đầu</li> <li>Đau vai</li> <li>Đau cổ tay, khuỷu tay</li> <li>Đau đầu gối</li> <li>Đau bàn chân</li> <li>Đau mắt cá chân</li> </ul>",
                clinic_id: "fa53503f-f25b-48fa-91bb-80fae059d134",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Marc Tafuro",
                description:
                    "<p>Bác sĩ có 20 năm kinh nghiệm Trị liệu thần kinh cột sống</p> <p>Bác sĩ có 5 năm làm giảng viên tại trường LACC</p> <p>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/11/22/094740-marc-bio.png",
                introduction:
                    "<h2><strong>Bác sĩ Marc Tafuro</strong></h2> <ul> <li>Bác sĩ có 20 năm kinh nghiệm Trị liệu thần kinh cột sống</li> <li>Bác sĩ có 5 năm làm giảng viên tại trường LACC</li> <li>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Thoát vị đĩa đệm</li> <li>Thoái hóa đốt sống cổ, lưng</li> <li>Đau dây thần kinh tọa</li> <li>Hội chứng rễ dây thần kinh</li> <li>Đau đầu</li> <li>Chứng đau vai</li> <li>Đau khuỷu tay</li> <li>Đau cổ tay</li> <li>Cong vẹo cột sống</li> <li>Đau thắt lưng</li> <li>Đau đầu gối</li> <li>Các chứng đau bàn chân</li> <li>Đau mắt cá</li> <li>Chấn thương thể thao</li> <li>Phục hồi chức năng</li> <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li> </ul> <h3><strong>Qúa trình công tác</strong></h3> <ul> <li>5 năm làm giảng viên tại trường LACC</li> <li>Thành viên đội y tế của đội tuyển Olympic Trung Quốc trong 2 kì 2018 - 2020</li> <li>Năm 2019, Bác sĩ vinh dự là diễn giả của Đại học Thể dục Thể Thao Bắc Kinh</li> <li>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</li> </ul> <h3><strong>Qúa trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Bang New York</li> <li>Tốt nghiệp trường Los Angeles College of Chiropractic (LACC) chuyên về Trị liệu thần kinh cột sống tại miền Nam bang California</li> </ul>",
                clinic_id: "fa53503f-f25b-48fa-91bb-80fae059d134",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Hứa Thúy Vi",
                description:
                    "<p>Giám đốc Phòng khám Chuyên khoa Nội An Phước</p> <p>Bác sĩ chuyên khoa Tiêu hóa - Gan mật - Nội soi tiêu hóa</p> <p>Hơn 15 năm công tác tại Bệnh viện Nhân dân 115</p> <p>Bác sĩ nhận khám cho bệnh nhân từ 15 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/09/17/104940-bs-vi.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Hứa Thúy Vi</strong></h2> <ul> <li>Giám đốc Phòng khám Chuyên khoa Nội An Phước</li> <li>Bác sĩ chuyên khoa Tiêu hóa - Gan mật - Nội soi tiêu hóa</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 15 tuổi trở lên</li> <li>Hơn 15 năm công tác tại Bệnh viện Nhân dân 115</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Giám đốc Phòng khám Chuyên khoa Nội An Phước (2018 - nay)</li> <li>Bác sĩ điều trị, khoa Tiêu hóa, Bệnh viện Nhân dân 115 (2004 - 2018)</li> <li>Bác sĩ nội soi tiêu hóa, khoa Nội soi, Bệnh viện Nhân dân 115 (2004 - 2018)</li> <li>Bác sĩ luân khoa, Bệnh viện Nhân dân 115 (2003 - 2004)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ chuyên ngành Nội tổng quát, Đại học Y dược TPHCM (2012)</li> <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y khoa Phạm Ngọc Thạch (2002)</li> <li>Chứng chỉ Nội soi đại tràng, Bệnh viện Chợ Rẫy (2015)</li> <li>Chứng chỉ Nội soi dạ dày - tá tràng, Bệnh viện Nhân dân 115 (2014)</li> <li>Chứng chỉ Siêu âm tổng quát thực hành, Bệnh viện Đại học Y dược TPHCM (2005)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Tiêu hóa - Gan mật</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị:</strong></p> <ul> <li>Viêm loét dạ dày: đau bụng, nôn ói, đầy bụng</li> <li>Viêm thực quản trào ngược: nghẹn, nuốt nghẹn, khó thở, ho kéo dài</li> <li>Nhiễm HP dạ dày: đau bụng, nôn ói, đầy bụng</li> <li>Loét thực quản: nuốt vướng</li> <li>Đầy bụng chưa rõ nguyên nhân: đầy, chướng bụng</li> <li>Đau bụng chưa rõ nguyên nhân: đau bụng</li> <li>Viêm đại tràng: rối loạn đi tiêu lúc táo bón lúc tiêu chảy</li> <li>Viêm ruột: đau bụng, tiêu lỏng, tiêu máu, sốt</li> <li>Hội chứng ruột kích thích: rối loạn đi tiêu lúc táo bón lúc tiêu chảy</li> <li>Bệnh Crohn: đau bụng, tiêu máu, sụt cân</li> <li>Rối loạn tiêu hoá: rối loạn đi tiêu</li> <li>Viêm gan siêu vi B tăng men gan, đầy bụng, vàng da, vàng mắt</li> <li>Viêm gan siêu vi C: có thể chưa có triệu chứng qua khám sức khoẻ</li> <li>Xơ gan do rượu: vàng da, vàng mắt, tiểu vàng</li> <li>Xơ gan do viêm gan siêu vi: vàng da, vàng mắt, tiểu vàng</li> <li>Viêm gan chưa rõ nguyên nhân: tăng men gan, ngứa, ăn kém</li> <li>Tăng men gan: tăng men gan, ngứa, ăn kém</li> <li>Dãn tĩnh mạch thực quản: tiêu phân đen, hoặc có tiền căn xơ gan trước đó</li></ul>",
                clinic_id: "bdfff819-69f9-45a8-81f2-6bcecaaf1986",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa I Lê Hoàng Phương Như",
                description:
                    "<p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tiêu hóa</p> <p>Bác sĩ Tiêu hóa tại Bệnh viện An Bình</p> <p>Từng công tác tại Bệnh viện Nguyễn Tri Phương</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/04/18/101319-bs-nhu.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa I Lê Hoàng Phương Như</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tiêu hóa</li> <li>Bác sĩ Tiêu hóa tại Bệnh viện An Bình</li> <li>Từng công tác tại Bệnh viện Nguyễn Tri Phương</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm loét dạ dày- tá tràng: đau thượng vị, ợ chua, đầy hơi khó tiêu, buồn nôn nôn ói + kết hợp nội soi tiêu hóa</li> <li>GERD: ợ trớ, ợ nóng, nuốt nghẹn, buồn nôn, nôn ói</li> <li>Viêm loét đại tràng: đau bụng dọc khung đại tràng, rối loạn chức năng đại tràng, thay đổi tính chất phân</li> <li>Viêm gan siêu vi B,C mạn: qua các xét nghiệm miễn dịch,chức năng gan</li> <li>Viêm gan cấp do siêu vi do thuốc, tự miễn:</li> <li>Xơ gan: hội chứng suy tế bào gan, hội chứng tăng áp cửa</li> <li>Nhiễm Helicobacter Pylori: clotest (+), test c13 (+)</li> <li>Xuất huyết tiêu hóa trên, dưới: tiêu phân đen/ tiêu máu đỏ, nôn ra máu/ dịch nâu đen</li> <li>Đái tháo đường</li> <li>Tăng huyết áp, suy tim, bệnh tim thiếu máu cục bộ</li> <li>Viêm phổi, viêm phế quản</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám và điều trị chuyên khoa Tiêu hóa, Phòng khám Nội An Phước</li> <li>Bác sĩ chuyên khoa Nội Tiêu hóa, Bệnh viện An Bình (2017 - Nay)</li> <li>Bác sĩ khoa Cấp cứu, Bệnh viện Nguyễn Tri Phương (2017)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I, Đại học Y khoa Phạm Ngọc Thạch (2021)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Dược TP. HCM (2016)</li> <li>Chứng chỉ Nội soi dạ dày, Bệnh viện Đại học Y Dược TP. HCM (2017)</li> <li>Chứng chỉ Nội soi đại tràng, Bệnh viện Chợ Rẫy (2021)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội Gan mật TP. HCM</li> <li>Thành viên Hội Tiêu hóa TP. HCM</li> <li>Thành viên Hội Nội soi tiêu hóa TP. HCM</li> </ul>",
                clinic_id: "bdfff819-69f9-45a8-81f2-6bcecaaf1986",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Tạ Thanh Hà",
                description:
                    "<p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tiêu hóa</p> <p>Hiện đang là bác sĩ chuyên khoa Nội Tiêu hóa, Bệnh viện An Bình</p> <p>Bác sĩ nhận khám từ 15 trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/04/20/105427-bs-thanh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Tạ Thanh Hà</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tiêu hóa</li> <li>Hiện đang là bác sĩ chuyên khoa Nội Tiêu hóa, Bệnh viện An Bình</li> <li>Bác sĩ nhận khám từ 15 trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm loét dạ dày tá tràng: đau thượng vị, đầy bụng, khó tiêu, buồn nôn hay nôn, ợ chua, ợ hơi,…</li> <li>Trào ngược dạ dày thực quản: ợ hơi, ợ nóng, ợ chua, buồn nôn, nôn, đau tức ngực và thượng vị, khó nuốt, ho, …</li> <li>Viêm loét đại tràng: đau bụng, tiêu chảy hoặc táo bón, tiêu máu, thiếu máu và mệt mỏi, …</li> <li>Hội chứng ruột kích thích: đau bụng, táo bón, tiêu chảy, trung tiện nhiều, cảm giác đi chưa hết phân,…</li> <li>Viêm gan siêu vi B,C: mệt mỏi, suy nhược, buồn nôn, chán ăn, đau hạ sườn p, vàng da, …</li> <li>Xơ gan: báng bụng, tuần hoàn bàng hệ, lách to, giãn tĩnh mạch thực quản, sao mạch, lòng bàn tay son, vàng da, phù, bầm máu ngoài da, ngứa, …</li> <li>Gan nhiễm mỡ: có thể không triệu chứng hoặc chán ăn, buồn nôn, mệt mỏi, …</li> <li>Tăng huyết áp: có thể không triệu chứng hoặc có đau đầu, hiếm hơn là chảy máu cam</li> <li>Rối loạn lipid máu: u vàng mí mắt, ở khuỷu hay đầu gối</li> <li>Đái tháo đường type 2: tiểu nhiều, hay bị khát, thèm ăn nhiều hơn và nhanh đói, bị giảm cân hoặc tăng cân bất thường, đau hoặc tê bàn tay, bàn chân, lâu lành vết thương và dễ nhiễm trùng,…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám và điều trị chuyên khoa Tiêu hóa, Phòng khám Nội An Phước</li> <li>Bác sĩ chuyên khoa Nội Tiêu hóa, Bệnh viện An Bình</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Khoa Phạm Ngọc Thạch (2018)</li> <li>Chứng chỉ Nội soi đại tràng, Bệnh viện Chợ Rẫy (2021)</li> <li>Chứng chỉ Nội soi dạ dày, Đại học Y Dược TP.HCM (2020)</li> </ul>",
                clinic_id: "bdfff819-69f9-45a8-81f2-6bcecaaf1986",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Phạm Hữu Nghị",
                description:
                    "<p>40 năm kinh nghiệm trong lĩnh vực Laser thẩm mỹ</p> <p>Nguyên Trưởng khoa Thực nghiệm, Bệnh viện Trung ương Quân đội 108</p> <p>Giám đốc phụ trách chuyên môn Phòng khám Laser thẩm mỹ Dr.Nghị</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/13/145626-bs-nghi.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Phạm Hữu Nghị</strong></h2> <ul> <li>40 năm kinh nghiệm trong lĩnh vực Laser thẩm mỹ</li> <li>Nguyên Trưởng khoa Thực nghiệm, Bệnh viện Trung ương Quân đội 108</li> <li>Giám đốc phụ trách chuyên môn Phòng khám Laser thẩm mỹ Dr.Nghị</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>U mạch máu trẻ em</li> <li>Dị dạng mao mạch</li> <li>Giãn mạch máu nhỏ</li> <li>Dị dạng tĩnh mạch</li> <li>Trị mụn trứng cá đa mô thức</li> <li>Điều trị mụn thịt</li> <li>Điều trị u mỡ vàng</li> <li>Điều trị u gai</li> <li>Điều trị nám</li> <li>Điều trị tàn nhang</li> <li>Điều trị bớt, chàm</li> <li>Tăng sắc tố sau viêm</li> <li>Đồi mồi</li> <li>Trẻ hóa da</li> <li>Sáng da</li> <li>Xóa nhăn</li> <li>Nâng cơ</li> <li>Điều trị sẹo lồi</li> <li>Điều trị sẹo rỗ</li> <li>Cắt mí bằng Laser Co2</li> <li>Phẫu thuật nâng mũi</li> <li>Xóa rạn da</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc chuyên môn Phòng khám Laser thẩm mỹ Dr.Nghị ( 2014 - nay)</li> <li>Trưởng khoa Thực nghiệm, Bệnh viện Trung ương Quân đội 108 (2013 - 2017)</li> <li>Ủy viên Ban Chấp hành Hội Phẫu thuật Tạo hình và Thẩm mỹ Việt Nam (2015)</li> <li>Công tác tại Bệnh viện Trung ương Quân đội 108 (1992 - 2017)</li> <li>Bác sĩ tại Quân đoàn 2 & Bệnh viện Quân y 354 (1981 - 1992 )</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Phong hàm Phó Giáo sư, Viện Nghiên cứu Khoa học Y Dược Lâm sàng 108, Bệnh viện Trung ương Quân đội 108 (2014)</li> <li>Phẫu thuật tạo hình và vi phẫu, Đại học Y Hà Nội (2005)</li> <li>Bảo vệ thành công luận án Tiến sĩ, Học viện Quân y (2002)</li> <li>Khoa Ngoại chung, Đại học Y Hà Nội (1988)</li> <li>Tốt nghiệp Bác sĩ, Học viện Quân Y (1981)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng nhận tác quyền Multi Light & Multi Layer, Cục bản quyền (2019)</li> <li>Chứng nhận quốc tế Giảng viên lâm sàng Phạm Hữu Nghị, Học viện Laha thế giới (2017)</li> <li>Chứng nhận quốc tế ứng dụng y tế và thẩm mỹ eCO2, Tập đoàn Lutronic – Tập đoàn hàng đầu thế giới trong việc sử dụng ánh sáng IPL và Laser trong sản xuất máy móc thẩm mỹ (2012)</li> <li>Chứng nhận quốc tế hoàn thành khóa đào tạo ứng dụng nhiệt độ, Công ty hàng đầu toàn cầu trong ngành thẩm mỹ - Thermage (2009)</li> <li>Chứng nhận quốc tế Chuyên gia Laser, Tập đoàn Lutronic (2007)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3>",
                clinic_id: "6c6364b5-d482-4226-b3b5-b9633fb08b2b",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Luke Hamman",
                description:
                    "<p>Tốt nghiệp Trường Đào tạo Chuyên khoa Thần kinh Cột sống Palmer - Hoa Kỳ</p> <p>Bác sĩ Chuyên khoa Trị liệu Thần kinh Cột sống từng làm việc tại Hoa Kỳ, Ấn Độ, Campuchia</p> <p>Bác sĩ nhận khám và điều trị cả trẻ em, người lớn, vận động viên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/03/04/094902-bac-si-luke-hamman0.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Luke Hamman</strong></h2> <ul> <li>Tốt nghiệp Trường Đào tạo Chuyên khoa Thần kinh Cột sống Palmer - Hoa Kỳ (2014)</li> <li>Bác sĩ Chuyên khoa Trị liệu Thần kinh Cột sống từng làm việc tại Hoa Kỳ, Ấn Độ, Campuchia</li> <li>Cử nhân Khoa học chuyên ngành Sinh học Con người, Trường Đại học bang Michigan (2012)</li> </ul> <p>BS. Luke không ngừng nâng cao kiến thức và tham dự những khóa học chuyên sâu và hội thảo Chuyên ngành Thần kinh Cột sống trong điều trị Chấn thương Thể Thao, sử dụng Băng dán Cơ trong thể thao, kỹ thuật nắn chỉnh Flexion-Distraction và kỹ thuật Graston.</p> <p>Bác sĩ Luke mang tới nhiều kĩ thuật để giúp những bệnh nhân đạt được sức khỏe tốt nhất. Bác sĩ tin rằng cột sống là bộ phận quan trọng nhất trong cơ thể và nếu cột sống có thể thực hiện tối đa chức năng thì cả cơ thể có thể hoạt động một cách tốt nhất. Bác sĩ sử dụng triết lý này khi nói chuyện và tư vấn cho bệnh nhân những lợi ích của Trị liệu Thần kinh Cột sống có thể mang lại cho tình trạng riêng biệt của họ.</p> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Thoát vị đĩa đệm</li> <li>Thoái hóa đốt sống cổ, lưng</li> <li>Đau dây thần kinh tọa</li> <li>Hội chứng rễ dây thần kinh</li> <li>Đau đầu</li> <li>Chứng đau vai</li> <li>Đau khuỷu tay</li> <li>Đau cổ tay</li> <li>Cong vẹo cột sống</li> <li>Đau thắt lưng</li> <li>Đau đầu gối</li> <li>Các chứng đau bàn chân</li> <li>Đau mắt cá</li> <li>Chấn thương thể thao</li> <li>Phục hồi chức năng</li> <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li> </ul>",
                clinic_id: "71f6fe72-3972-4db9-bad0-0fab78e38fab",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Tai Mũi Họng tại Phòng khám Đa Khoa An Thịnh",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về Tai Mũi Họng</p> <p>Phòng khám được trang bị những máy móc khám - điều trị hiện đại</p> <p>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/16/163207-3021283464955909525714496382350053846910688n.jpg",
                introduction:
                    "<h2><strong>Khám Tai Mũi Họng tại Phòng khám Đa Khoa An Thịnh</strong></h2> <ul> <li>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về Tai Mũi Họng</li> <li>Phòng khám được trang bị những máy móc khám - điều trị hiện đại</li> <li>Giảm thời gian chờ đợi, ưu tiên khám nhanh</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm tai giữa, thủng nhĩ, lấy dị vật tai, nạo vét sụn vành tai</li> <li>Điều trị viêm xoang, lấy dị vật mũi, điều trị V.A, Amidan</li> <li>Lấy dị vật trong miệng – họng, điều trị bỏng vùng miệng</li> <li>Điều trị u thanh quản, áp – xe vùng đầu cổ,…</li> </ul> <p><strong>Đội ngũ bác sĩ</strong></p> <p>Người bệnh có thể được khám bởi đội ngũ bác giỏi từng công tác tại các bệnh viện lớn như Bạch Mai, Đại Học Y, 198...</p>",
                clinic_id: "dcfe1a08-1bee-4320-bfe5-2f1f66d9b6e1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Sản Phụ Khoa tại Phòng Khám Đa Khoa An Thịnh",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm, công tác tại Bệnh viện Phụ Sản Hà Nội, Bệnh viện Phụ sản Trung Ương ...</p> <p>Hỗ trợ đăng ký khám trực tuyến, đặt lịch khám bệnh</p> <p>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/16/163207-3021283464955909525714496382350053846910688n.jpg",
                introduction:
                    "<h2><strong>Khám Sản Phụ khoa tại Phòng khám Đa Khoa An Thịnh</strong></h2> <ul> <li>Khám Sản phụ khoa với các bác sĩ chuyên khoa giỏi, từng công tác tại các bệnh viện lớn: Bệnh viện Phụ sản Hà Nội, Bệnh viện Phụ sản TW, Bệnh viện 198</li> <li>Đội ngũ bác sĩ được đào tạo bài bản tại các trường Đại học, Bệnh viện chuyên sâu về vấn đề Sản phụ khoa</li> </ul> <p>Là một trong số các chuyên khoa đầu tiên được thành lập, suốt gần 18 năm qua, Sản phụ khoa thực sự là chuyên khoa mũi nhọn của Phòng khám đa khoa An Thịnh. Phòng khám được hầu hết người dân Hà Nội và các khu vực lân cận biết tới bởi dịch vụ Sản phụ khoa chất lượng cao, uy tín, an toàn và hiệu quả.</p> <h3><strong>Đội ngũ bác sĩ khám sản phụ khoa tại Phòng khám Đa khoa An Thịnh</strong></h3> <p><strong>Bác sĩ Chuyên Khoa II Phạm Thị Thúy</strong></p> <ul> <li>Nhiều năm công tác tại Bệnh viện Phụ sản Hà Nội</li> <li>Bác sĩ đang khám tại Phòng khám Đa khoa An Thịnh</li> </ul> <p><strong>Ngoài ra,</strong> Phòng khám có nhiều bác sĩ giỏi chuyên khoa về sản phụ khoa sẽ trực tiếp thăm khám.</p> <h2><strong>Khám và điều trị</strong></h2> <p>- Khám và theo dõi thai định kỳ</p> <p>- Chẩn đoán và Tư vấn vô sinh hiếm muộn</p> <p>- Tầm soát ung thư cổ tử cung; Điều trị viêm lộ tuyến...</p> <p>- Các phương pháp ngừa thai; Cấy que, đặt vòng...</p> <p>- Theo dõi, hỗ trợ sinh sản;</p> <p>- Chẩn đoán và điều trị các bệnh lây nhiễm tình dục;</p> <p><strong>-</strong> Làm các thủ thuật: đốt điện cổ tử cung, đốt nang naboth, xoắn polyp cổ tử cung;</p> <p>- Các gói khám tiền hôn nhân;</p> <p>- Gói khám trước sinh và các gói khám quản lý thai.</p>",
                clinic_id: "dcfe1a08-1bee-4320-bfe5-2f1f66d9b6e1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Nội tại Phòng khám Đa khoa An Thinh",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm từng công tác tại các bệnh viện lớn như Bạch Mai, Nhi TW, 198...</p> <p>Hỗ trợ đăng ký khám trực tuyến, đặt lịch khám bệnh</p> <p>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/16/163207-3021283464955909525714496382350053846910688n.jpg",
                introduction:
                    "<h2><strong>Khám Nội tại Phòng khám Đa khoa An Thinh</strong></h2> <p>Đội ngũ bác sĩ giàu kinh nghiệm từng công tác tại các bệnh viện lớn như Bạch Mai, Nhi TW, 198...<br>Hỗ trợ đăng ký khám trực tuyến, đặt lịch khám bệnh<br>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p> <h3><strong>Đội ngũ Bác sĩ khám Nội tại Phòng khám Đa khoa An Thịnh</strong></h3> <p>Các bác sĩ Khám nội tại phòng khám gồm:</p> <p>Bs CK II Nguyễn Thị Hằng. CCHN 1163/HD-CCHN. Chuyên khoa Nội</p> <p>BS CKI Nguyễn Phùng 1249/HNO-CCHN . Chuyên khoa nội chung</p> <p><strong>Ngoài ra,</strong> Phòng khám có nhiều bác sĩ giỏi chuyên khoa Nội chung sẽ trực tiếp thăm khám.</p> <h2><strong>Khám và điều trị:</strong></h2> <ul> <li>Bệnh cơ xương khớp: tình trạng đau lưng, cổ, vai, gáy; viêm khớp dạng thấp; gout…</li> <li>Bệnh tiêu hóa, gan mật: viêm dạ dày; trào ngược dạ dày; viêm gan…</li> <li>Bệnh hô hấp: viêm phế quản cấp, viêm phổi, hen phế quản…</li> <li>Bệnh tim mạch: cao huyết áp, rối loạn nhịp tim…</li> <li>Bệnh miễn dịch, chuyển hóa: đái tháo đường, rối loạn lipid máu…</li> <li>Bệnh nội thần kinh: bệnh lý đau đầu, đau vai gáy; rối loạn tiền đình; sa sút trí tuệ…</li> </ul>",
                clinic_id: "dcfe1a08-1bee-4320-bfe5-2f1f66d9b6e1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Danh Nghiệp",
                description:
                    "<p>Có nhiều năm kinh nghiệm về chuyên khoa Chẩn đoán hình ảnh</p> <p>Hiện đang công tác tại Bệnh viện 198 - Bộ Công An</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/05/095110-nguyen-danh-nghiep.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Danh Nghiệp</strong></h2> <p>Có nhiều năm kinh nghiệm trong chuyên khoa Chẩn đoán hình ảnh, sàng lọc trước sinh</p> <p>Hiện đang công tác tại Khoa Chẩn đoán hình ảnh - Bênh viện 198 Bộ Công An</p> <h3><strong>Quá trình đào tạo</strong></h3> <p>Học tại Cathay General Hospital Đài Loan 2010</p> <p>Thạc sĩ y khoa Đại học Y Hà Nội 2013</p> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chẩn đoán trước sinh, theo dõi thai kỳ</li> <li>Tư vấn quản lý thai kỳ, tiền hôn nhân</li> <li>Siêu âm tim, mạch máu, ổ bụng, tuyến giáp, tuyến vú, siêu âm khớp</li> <li>Đọc kết quả chụp cắt lớp vi tính, MRI</li> <li>Chọc sinh tiết tế bào dưới hướng dẫn siêu âm</li> </ul>",
                clinic_id: "dcfe1a08-1bee-4320-bfe5-2f1f66d9b6e1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Thị Phương Thảo",
                description:
                    "<p>Bác sĩ Chẩn đoán hình ảnh, Bệnh viện Đa khoa Bảo Sơn</p> <p>Hơn 10 năm kinh nghiệm trong chẩn đoán hình ảnh, siêu âm thai</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/05/11/160408-bs-phuong-thao.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Thị Phương Thảo</strong></h2> <ul> <li>Bác sĩ Chẩn đoán hình ảnh, Bệnh viện Đa khoa Bảo Sơn</li> <li>Hơn 10 năm kinh nghiệm trong chẩn đoán hình ảnh, siêu âm thai</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Siêu âm thai</li> <li>Theo dõi thai kỳ và phát hiện dị tật bẩm sinh</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chẩn đoán hình ảnh, Bệnh viện Đa khoa Bảo Sơn 2 (2018 – đến nay)</li> <li>Bác sĩ Chẩn đoán hình ảnh, Bệnh viện Đồng Hơi – Quảng Bình (2007 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Chẩn đoán hình ảnh (2015)</li> <li>Tốt nghiệp Đại học Quân y (2007)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ định hướng chuyên khoa chuyên ngành Chẩn đoán hình ảnh (2008)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ cao cấp, Thầy thuốc ưu tú Phạm Thị Hồng Hoa",
                description:
                    "<p>Hơn 40 năm kinh nghiệm khám và điều trị về Nội tiết - Đái tháo đường - Tuyến giáp</p> <p>Nguyên Trưởng khoa Nội tiết - Đái tháo đường, Bệnh viện Bạch Mai</p> <p>Phó chủ tịch Hội Nội tiết và Đái tháo đường Việt Nam</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/06/26/121702-bs-pham-thi-hong-hoa.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ cao cấp, Thầy thuốc ưu tú Phạm Thị Hồng Hoa</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm khám và điều trị về Nội tiết - Đái tháo đường - Tuyến giáp</li> <li>Nguyên Trưởng khoa Nội tiết - Đái tháo đường Bệnh viện Bạch Mai</li> <li>Phó chủ tịch Hội Nội tiết và Đái tháo đường Việt Nam</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám và điều trị bệnh lý đái tháo đường</strong></p> <ul> <li>Tăng huyết áo</li> <li>Rối loạn mỡ máu</li> <li>Biến chứng tim mạch</li> <li>Biến chứng não,</li> <li>Biến chứng nhiễm trùng</li> <li>Cấp cứu tăng hạ đường máu</li> </ul> <p><strong>Khám và điều trị các bệnh lý tuyến giáp:</strong> </p> <ul> <li>Bướu nhân tuyển giáp, ung thư tuyến giáp</li> <li>Basedown, suy giáp, cường giáp, bệnh lý tuyến giáp tự miễn,...</li> </ul> <p><strong>Khám và điều trị các bệnh lý tuyến thượng thận</strong></p> <ul> <li>Cường, suy chức năng tuyến thượng thận</li> <li>Viêm cầu thận, biến chứng thận trong đái tháo đường</li> </ul> <p><strong>Khám và điều trị các bệnh lý u tuyến yên</strong></p> <ul> <li>Suy tuyến yên</li> <li>Cường tuyến yên</li> </ul> <p><strong>Khám và điều trị bệnh lý tuyến sinh dục:</strong> Buồng trứng đa nang, suy sinh dục thứ phát...</p> <p><strong>Các rối loạn chuyển hóa khác</strong></p> <ul> <li>Rối loạn mỡ máu</li> <li>Rối loạn axit uric... </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khám bệnh - Bệnh viện Đa khoa Bảo Sơn (2021 - Nay)</li> <li>Đơn vị Nội tiết - Đái tháo đường - Bệnh viện Đa khoa Quốc tế Vinmec (2011 - 2021)</li> <li>Trưởng khoa Nội tiết - Đái tháo đường, Bệnh viện Bạch Mai và kiêm nhiệm giảng dạy Đại học Y Hà Nội, Đại học Dược Hà Nội, Trung cấp Y Bạch Mai (1981-2011)</li> <li>Viện sốt rét ký sinh trùng Hà Nội (1977-1981)</li> <li>Từng tu nghiệp tại Cộng hòa Pháp và Nhật Bản</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Tiến sĩ Y khoa</li> <li>Tốt nghiệp trường Đại học Y Hà Nội</li> </ul> <h3><strong>Thành viên các Hội, Tổ chức chuyên môn</strong></h3> <ul> <li>Phó Chủ tịch Hội Nội tiết và Đái tháo đường Việt Nam</li> <li>Phó Chủ tịch Hội Nội tiết – Đái tháo đường Hà Nội</li> <li>Ủy viên Ban chấp hành Hội Y học Hà Nội</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa I Lê Thị Hồng",
                description:
                    "<p>Từng là bác sĩ tại Bộ Tổng tham mưu, Bộ Quốc Phòng</p> <p>30 năm kinh nghiệm trong khám và điều trị bệnh lý về Mắt</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/10/07/143727-bs-hong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa I Lê Thị Hồng</strong></h2> <ul> <li>Từng là bác sĩ tại Bộ Tổng tham mưu, Bộ Quốc Phòng</li> <li>30 năm kinh nghiệm trong khám và điều trị bệnh lý về Mắt</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám vá điều trị, Bệnh viện Đa khoa Bảo Sơn (2021 - nay)</li> <li>Bác sĩ tại Bộ Tổng tham mưu, Bộ Quốc Phòng (1990 - 2020)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Mắt, Học viện Quân Y (1997)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Học viện Quân Y (1990)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Mắt hột</li> <li>Khám, điều trị bệnh thiên đầu thống (glocom)</li> <li>Tật khúc xạ: cận thị, nhược thị, viễn thị, lão thị, loạn thị</li> <li>Hội chứng khô mắt</li> <li>Rối loạn ở hốc mắt</li> <li>Rối loạn tuyến lệ</li> <li>Tăng nhãn áp</li> <li>Các bệnh về mắt khác</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Đoàn Thị Lan",
                description:
                    "<p>Bác sĩ tư vấn dinh dưỡng cho phụ nữ mang thai và trẻ em</p> <p>Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn dinh dưỡng</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/10/07/145448-bs-lan.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Đoàn Thị Lan</strong></h2> <ul> <li>Bác sĩ tư vấn dinh dưỡng cho phụ nữ mang thai và trẻ em</li> <li>Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn dinh dưỡng</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Tư vấn dinh dưỡng cho phụ nữ mang thai, phụ nữ sau sinh</li> <li>Tư vấn dinh dưỡng cho trẻ từ 0 – 5 tuổi, giai đoạn sơ sinh, ăn dặm</li> <li>Tư vấn dinh dưỡng cho phụ nữ mắc đái tháo đường thai kỳ, tăng/sụt cân trong thời kỳ mang thai, thiếu vi chất…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám và điều trị, Bệnh viện Đa khoa Bảo Sơn</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội</li> <li>Chứng chỉ Dinh dưỡng lâm sàng và điều trị, Viện dinh dưỡng quốc gia</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Bá Phê",
                description:
                    "<p>Trưởng khoa Sản phụ khoa Bệnh viện Đa khoa Bảo Sơn 2</p> <p>Nguyên Phó trưởng Khoa Phụ ngoại, Bệnh viện Phụ sản Trung ương</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ) </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/05/11/152411-bs-phe.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Bá Phê</strong></h2> <ul> <li>Trưởng khoa Sản phụ khoa Bệnh viện Đa khoa Bảo Sơn 2</li> <li>Nguyên Phó trưởng Khoa Phụ ngoại, Bệnh viện Phụ sản Trung ương</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám thai và theo dõi thai kỳ</li> <li>Chẩn đoán trước sinh và quản lý thai</li> <li>Khám, điều trị u xơ, u nang, són tiểu, các rối loạn tiền mãn kinh, mãn kinh</li> <li>Siêu âm canh trứng, sản phụ khoa đường bụng và âm đạo</li> <li>Sàng lọc, chẩn đoán trước sinh, các bệnh lý di truyềnHỗ trợ sinh sản</li> <li>Khám và điều trị các bệnh lý phụ khoa</li> <li>Điều trị lộ tuyến cổ tử cung, cắt polip</li> <li>Soi cổ tử cung, lấy bệnh phẩm xét nghiệm</li> <li>Điều trị bệnh đàn ông, bệnh xã hội và vô sinh nam, nữ</li> <li>Khám, tư vấn và điều trị vô sinh, hiếm muộn</li> <li>Tư vấn phẫu thuật sản khoa</li> <li>Tư vấn các biện pháp kế hoạch hóa gia đình</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> <li>Cắt u vú lành tính</li> <li>Cắt polyp cổ tử cung</li> <li>Khâu phục hồi rách cổ tử cung, âm đạo</li> <li>Nong cổ tử cung</li> <li>Cắt chỉ khâu vòng cổ tử cung</li> <li>Chích áp xe tầng sinh môn</li> <li>Thủ thuật xoắn polyp cổ tử cung, âm đạo</li> <li>Điều trị tổn thương cổ tử cung bằng đốt điện, đốt nhiệt, đốt laser, áp lạnh...</li> <li>Cắt u thành âm đạo</li> <li>Lấy dị vật âm đạo</li> <li>Khâu rách cùng đồ âm đạo</li> <li>Làm lại thành âm đạo, tầng sinh môn</li> <li>Bóc nang tuyến Bartholin</li> <li>Sinh thiết cổ tử cung, âm hộ, âm đạo</li> <li>Cắt, đốt sùi mào gà Nong buồng tử cung</li> <li>Sinh thiết cổ tử cung, âm hộ, âm đạo</li> <li>Nong buồng tử cung</li> <li>Hút buồng tử cung</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Sản phụ khoa, Bệnh viện Đa khoa Bảo Sơn 2 (2019 – đến nay)</li> <li>Nguyên Phó trưởng Khoa Phụ ngoại, Bệnh viện Phụ sản Trung ương</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên ngành Hành chính học, Học viện Hành chính Quốc gia (2004)</li> <li>Tốt nghiệp Thạc sĩ Y học, Đại học Y Hà Nội (1999)</li> <li>Tốt nghiệp Chuyên ngành Tiếng Anh, Viện đại học Mở Hà Nội (1998)</li> <li>Tốt nghiệp Chuyên ngành Đa khoa Sản Ngoại, Đại học Y Hà Nội (1990)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BSCKI Vũ Huy Hiền",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm về khám và điều trị tiêu hóa </p> <p>Nguyên trưởng khoa thăm dò chức năng bệnh viện Đa khoa Đức Giang </p> <p>Bác sĩ nhận khám tù 16 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/10/04/150616-bs-vu-huy-huyen1.jpg",
                introduction:
                    "<h2><strong>BSCKI Vũ Huy Hiền</strong></h2> <ul> <li>Bác sĩ có nhiều năm kinh nghiệm về khám và điều trị tiêu hóa</li> <li>Nguyên trưởng khoa thăm dò chức năng bệnh viện Đa khoa Đức Giang</li> <li>Bác sĩ nhận khám tù 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nội soi chẩn đoán và điều trị ung thư sớm đường tiêu hóa trên và dưới</li> <li>Nội soi dạ dày, đại tràng</li> <li>Chẩn đoán và điều trị, cắt polyp đại tràng,</li> <li>Cắt hớt niêm mạc dạ dày, đại tràng (EMR, ESD),</li> <li>Nội soi mật tụy ngược dòng lấy sỏi, siêu âm nội soi…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Đa khoa Bảo Sơn 2 (09/2023 - nay)</li> <li>Giám đốc Trung tâm nội soi, Phòng khám khám T- Matsuoka (05/2023)</li> <li>Bác sĩ Trung tâm tiêu hóa, gan mật, tiết niệu, Bệnh viện Đa khoa Quốc tế Vinmec Times city Hà Nội (8/2019 - 4/2023)</li> <li>Trưởng khoa thăm dò chức năng, Bệnh viện Đa khoa Đức Giang (2011 - 2019)</li> <li>Bác sĩ trung tâm Nội soi dạ dày và đại tràng tại bệnh viện Bạch Mai (2007) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Khóa học EUS và ERCP 11/12/2018 – 12/08/2018, Thái Lan (2018)</li> <li>Tham dự khóa học Tầm soát ung thư dạ dày sớm, Trường Đại học Oita (12/2015)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I, Trường Đại học Y Hà Nội năm (2013)</li> <li>Tốt nghiệp Bác sĩ đa khoa Đại học Y Hải Phòng</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Văn Mão",
                description:
                    "<p>Hơn 40 năm kinh nghiệm trong khám và điều trị bệnh lý Tim mạch</p> <p>Nguyên Giám đốc Bệnh viện Tim Hà Nội</p> <p>Nguyên Phó chủ nhiệm khoa phẫu thuật Tim mạch - Lồng ngực, Bệnh viện Hữu nghị Việt Đức</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/06/04/120430-bs-mao.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Văn Mão</strong></h2> <ul> <li>Gần 50 năm kinh nghiệm trong khám và điều trị bệnh lý Tim mạch</li> <li>Nguyên Giám đốc Bệnh viện Tim Hà Nội</li> <li>Nguyên Phó chủ nhiệm khoa phẫu thuật Tim mạch - Lồng ngực, Bệnh viện Hữu nghị Việt Đức</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và tư vấn các bệnh lý ngoại khoa và tim mạch - lồng ngực</li> <li>Khám các bệnh lý tuyến giáp</li> <li>Phẫu thuật ngoại khoa, tim mạch, lồng ngực</li> <li>Phẫu thuật tuyến giáp: bướu, basedow, ung thư</li> <li>Phẫu thuật u trung thất các loại</li> <li>Phẫu thuật về phổi và màng phổi, thành ngực</li> <li>Phẫu thuật bệnh lý động mạch chủ bụng, động mạch ngoại vi</li> <li>Phẫu thuật bệnh lý suy tĩnh mạch chi dưới</li> <li>Phẫu thuật tiêu hóa: dạ dày, đại tràng, ruột, lách, trĩ...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc chuyên môn Bệnh viện Đa khoa Bảo Sơn 2 (03/2021 - đến nay)</li> <li>Phó Giám đốc chuyên môn kiêm Trưởng khoa Ngoại Bệnh viện Quốc tế Dolife (2018 - 03/2021)</li> <li>Giám đốc Bệnh viện Đông Đô (2012 - 2018)</li> <li>Giám đốc Bệnh viện Tim Hà Nội, Bí thư chi bộ Bệnh viện Tim Hà Nội (2005 - 2012)</li> <li>Phó Giám đốc Bệnh viện Tim Hà Nội (2003 - 2005)</li> <li>Phó chủ nhiệm khoa phẫu thuật Tim mạch - Lồng ngực Bệnh viện Hữu nghị Việt Đức (1998 - 2003)</li> <li>Giảng viên bộ môn Ngoại, Đại học Y Hà Nội</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ Y khoa Đại học Y Hà Nội (1995)</li> <li>Đào tạo 4 năm phẫu thuật tim và lồng ngực tại Pháp (1982 – 1983, 1988 – 1989, 1991 – 1992, 1997 – 1998)</li> <li>Tốt nghiệp Bác sĩ nội trú Bệnh viện Hữu nghị Việt Đức (1978)</li> <li>Tốt nghiệp Bác sĩ chuyên ngành Ngoại khoa Đại học Y Hà Nội (1975)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Lưu Thị Phương Thanh",
                description:
                    "<p>Hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa</p> <p>Tốt nghiệp Bác sĩ Chuyên khoa I Nhi khoa - Đại học Y Hà Nội</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/04/144133-bs-luu-thi-phuong-thanh-1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Lưu Thị Phương Thanh</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Nhi khoa - Đại học Y Hà Nội</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám và điều trị các bệnh lý về Nhi khoa:</p> <ul> <li>Bệnh lý sơ sinh</li> <li>Bệnh tiêu hóa</li> <li>Bệnh tuần hoàn</li> <li>Bệnh hô hấp</li> <li>Bệnh huyết học</li> <li>Bệnh thận - tiết niệu</li> <li>Bệnh thần kinh</li> <li>Bệnh ngoài da</li> <li>Bệnh xương khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nhi khoa - Bệnh viện Đa khoa Bảo Sơn (2019 - nay)</li> <li>Công tác tại Bệnh viện Hữu Nghị Lạc Việt (2014 - 2018)</li> <li>Công tác tại Phòng khám Đa khoa Bảo Sơn (2013 - 2014)</li> <li>Công tác tại khoa Sơ sinh - Bệnh viện trẻ em Hải Phòng (2012 - 2013)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I Nhi khoa - Đại học Y Hà Nội (2019)</li> <li>Bác sĩ Đa khoa - Đại học Y Hà Nội (2011)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Hoài Chân",
                description:
                    "<p>Gần 40 năm kinh nghiệm trong lĩnh vực Nhi khoa</p> <p>Bác sĩ từng công tác tại Bệnh viện Đa khoa Xanh Pôn, Bệnh viện Đa khoa Quốc tế Vinmec</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/07/094455-bs-hoai-chan.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Hoài Chân</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm trong lĩnh vực Nhi khoa</li> <li>Bác sĩ từng công tác tại Bệnh viện Đa khoa Xanh Pôn, Bệnh viện Đa khoa Quốc tế Vinmec</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Các bệnh lí hô hấp thường gặp:</strong></p> <ul> <li>Viêm phổi – Viêm phế quản: sốt, ho, thở mệt</li> <li>Hen suyễn: ho, khò khè, thở mệt</li> <li>Viêm tiểu phế quản: sốt, ho, khò khè, thở mệt</li> <li>Viêm thanh khí phế quản cấp: sốt, ho, khàn tiếng, thở rít</li> <li>Viêm họng: sốt, ho, đau họng, sổ mũi</li> </ul> <p><strong>Các bệnh lí tiêu hóa thường gặp:</strong></p> <ul> <li>Tiêu chảy cấp: tiêu chảy, sốt, ói</li> <li>Rối loạn tiêu hóa: tiêu chảy, sốt, ói</li> <li>Trào ngược dạ dày thực quản: ói, ói ra máu, trớ sữa </li> </ul> <p><strong>Các vấn đề về Thận - Nội tiết:</strong></p> <ul> <li>Rối loạn đi tiểu: tiểu dầm, tiểu lắt nhắt</li> <li>Dậy thì sớm</li> <li>Chậm tăng trưởng chiều cao </li> </ul> <p><strong>Các vấn đề khác về Nhi tổng quát:</strong></p> <ul> <li>Tư vấn dinh dưỡng</li> <li>Tư vấn chủng ngừa </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nhi khoa - Bệnh viện Đa khoa Bảo Sơn (nay)</li> <li>Nguyên Bác sĩ Nhi khoa - Bệnh viện Đa khoa Quốc tế Vinmec</li> <li>Nguyên Bác sĩ Nhi khoa - Bệnh viện Đa khoa Xanh Pôn</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II Nhi khoa - Đại học Y Hà Nội (2008)</li> <li>Bác sĩ Chuyên khoa I Nhi khoa - Đại học Y Hà Nội (1998)</li> <li>Tốt nghiệp Bác sĩ Đa khoa - Đại học Y Hà Nội (1985)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Hải An",
                description:
                    "<p>Nhiều năm kinh nghiệm khám và điều trị bệnh Da liễu</p> <p>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Da liễu - Đại học Y Hà Nội</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/05/160247-bs-hai-an.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Hải An</strong></h2> <ul> <li>Nhiều năm kinh nghiệm khám và điều trị bệnh Da liễu</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Da liễu - Đại học Y Hà Nội</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh da dị ứng: Mày đay, viêm da cơ địa, viêm da tiếp xúc, sẩn ngứa…</li> <li>Các bệnh da do vi khuẩn, nấm, ký sinh trùng: Viêm mô bào, viêm nang lông, chốc, chàm vi khuẩn, nấm, ghẻ…</li> <li>Các bệnh da do virus: Thủy đậu, zona thần kinh, mụn cóc, u mềm lây…</li> <li>Các bệnh lây qua đường tình dục: Lậu, giang mai, sùi mào gà, herpes sinh dục…</li> <li>Các bệnh da khác: U ống tuyến mồ hôi, u mềm treo, viêm da tiết bã, sẩn cục, dày sừng da dầu, dày sừng ánh sáng, bớt tuyến bã…</li> <li>Thẩm mỹ nội khoa: trứng cá, sẹo lõm trứng cá, sẹo lồi, tiêm Mesotherapy, tiêm Botulinum Toxin, phi kim trẻ hóa, công nghệ HIFU, laser CO2 Fractional, laser điều trị sắc tố…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Da liễu - Bệnh viện Đa khoa Bảo Sơn (2022 - Nay)</li> <li>Bác sĩ Da liễu - Phòng khám Da liễu Hà Nội (2019 - 2020)</li> <li>Bác sĩ Da liễu - Bệnh viện Đa khoa MEDLATEC (2017 - 2019)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Da liễu - Đại học Y Hà Nội (2022)</li> <li>Tốt nghiệp Bác sĩ Đa khoa - Học viện Quân Y (2015)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Nguyễn Văn Lý",
                description:
                    "<p>Nguyên Trưởng khoa Tai mũi họng, Bệnh viện Trung ương quân đội 108</p> <p>Ủy viên Ban chấp hành Hội Tai Mũi Họng Việt Nam</p> <p>Bác sĩ khám từ 14 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/06/26/121515-bs-nguyen-van-ly.jpg",
                introduction:
                    "<h2><strong>Tiến sỹ, Bác sỹ Nguyễn Văn Lý</strong></h2> <ul> <li>Nguyên Trưởng khoa Tai Mũi Họng, Bệnh viện Trung ương quân đội 108 (2000 – 2013)</li> <li>Ủy viên Ban chấp hành Hội Tai Mũi Họng Việt Nam</li> <li>Giảng viên sau đại học chuyên ngành Tai Mũi Họng – Học viện Quân y</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám chuyên khoa Tai Mũi Họng</p> <p><strong>Các bệnh về tai</strong></p> <ul> <li>Ù tai, nghe kém, điếc đột ngột</li> <li>Chẩy mủ tai, viêm tai giữa cấp, mạn.</li> <li>Vá màng nhĩ nội soi</li> <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li> </ul> <p><strong>Các bệnh mũi xoang</strong></p> <ul> <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch.</li> <li>Viêm mũi ngạt tắc mũi mạn tính</li> <li>Vêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li> <li>Nấm mũi xoang</li> <li>Đau đầu mạn tính do mũi xoang…</li> </ul> <p><strong>Các bệnh về họng thanh quản</strong></p> <ul> <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính. Đặc biệt những biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….) nạo VA</li> <li>Viêm amiđan cấp, mạn. </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Đa khoa Bảo Sơn 2</li> <li>Nguyên Trưởng khoa Tai Mũi Họng, Bệnh viện Trung ương quân đội 108 (2000 – 2013)</li> <li>Chuyên viên kỹ thuật, Cục Quân y</li> <li>Giảng viên Sau Đại học chuyên ngành Tai Mũi Họng, Học viện Quân y</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Theo học Chuyên khoa Tai Mũi Họng, Công hòa Dân chủ Đức (1987 - 1990)</li> <li>Học viên trường Học viện Quân Y</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Hữu Cốc",
                description:
                    "<p>Nguyên Phó Khoa Đẻ, Bệnh viện Phụ Sản Trung ương</p> <p>Nguyên giảng viên cao cấp - Phó trưởng Bộ môn Phụ Sản, Đại học Y Hà Nội</p> <p>Danh hiệu Thầy thuốc Ưu tú</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ) </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/092353-bsckii-nguyen-huu-coc.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Hữu Cốc</strong></h2> <ul> <li>Nguyên Phó Khoa Đẻ - Bệnh viện Phụ Sản Trung ương</li> <li>Nguyên Giảng viên cao cấp - Phó trưởng bộ môn Phụ Sản Đại học Y Hà Nội</li> <li>Danh hiệu Thầy thuốc Ưu tú</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám, điều trị</strong></h2> <ul> <li>Khám thai, theo dõi thai định kì</li> <li>Khám và điều trị các bệnh phụ khoa</li> <li>Tư vấn, chăm sóc sức khỏe phụ nữ tiền mãn kinh và sau mãn kinh</li> <li>Điều trị vô sinh và hiếm muộn</li> <li>Phát hiện sớm ung thư vú và ung thư cổ tử cung</li> <li>Siêu âm thai và theo dõi thai kỳ</li> <li>Khám và quản lý thai nghén</li> <li>Chẩn đoán trước sinh</li> <li>Double test, triple test </li> <li>Hỗ trợ sinh sản</li> <li>Sàng lọc, chẩn đoán trước sinh, các bệnh lý di truyền</li> <li>Phẫu thuật sản phụ khoa</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Đa khoa Bảo Sơn 2</li> <li>Công tác tại Bệnh viện Phụ Sản Trung ương (1977-2013)</li> <li>Có 36 năm kinh nghiệm công tác trong ngành Sản - Phụ khoa</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Hà Nội năm 1977</li> <li>Tu nghiệp tại Thái Lan về Chuyên ngành Sản phụ khoa </li> </ul> <h3><strong>Sách và các công trình nghiên cứu</strong></h3> <ul> <li>Viết sách giáo khoa, giáo trình giảng dạy về chuyên khoa Sản phụ khoa cho Đại học Y Hà Nội</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "TS. BS Nguyễn Khắc Đức",
                description:
                    "<p>Gần 40 năm công tác tại trường Đại học Y Hà Nội và Bệnh viện Hữu Nghị Việt Đức.</p> <p>Hơn 35 năm kinh nghiệm trong lĩnh vực phẫu thuật Gan mật tuỵ, Tiêu hoá</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/01/05/104629tien-si-bac-si-nguyen-khac-duc.jpg",
                introduction:
                    "<h2><strong>TS. BS Nguyễn Khắc Đức</strong></h2> <ul> <li>Gần 40 năm công tác tại trường Đại học Y Hà Nội và Bệnh viện Hữu Nghị Việt Đức.</li> <li>Hơn 35 năm kinh nghiệm trong lĩnh vực phẫu thuật Gan mật tuỵ, tiêu hoá</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><strong>Bệnh lí gan</strong><ul> <li>Nang gan</li> <li>Áp xe gan</li> <li>U gan ( phẫu thuật gan, đốt sóng cao tần, nút mạch)</li> </ul> </li> <li><strong>Bệnh lí đường mật</strong><ul> <li>Sỏi mật</li> <li>Sỏi trong gan</li> <li>Sỏi trong túi mật</li> <li>Nang đường mật</li> <li>Ung thư đường mật</li> </ul> </li> <li><strong>Bệnh lí của tụy</strong><ul> <li>Viêm tụy cấp </li> <li>Viêm tụy mãn </li> <li>U đầu tụy, thân tụy, đuôi tụy </li> </ul> </li> <li><strong>Phẫu thuật</strong><ul> <li>Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li> <li>Phẫu thuật nội soi trào ngược dạ dày thực quản </li> <li>Phẫu thuật nội soi ổ bụng.</li> <li>Phẫu thuật gan mật, đốt sóng cao tần, nút mạch</li> </ul> </li> <li><strong>Tổn thương do chấn thương gan mật tụy</strong></li> <li><strong>Bệnh lí nội khoa gan mật</strong><ul> <li>Xơ gan</li> <li>Viêm gan do virut</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Cán bộ giảng dạy lâm sàng, Bệnh viện Hữu Nghị Việt Đức</li> <li>Cán bộ giảng dạy lý thuyết, Bệnh viện Hữu nghị Việt Đức </li> <li>Phẫu thuật viên, Bệnh viện Việt Đức </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bảo vệ luận án Tiến sĩ, Đại học Y Hà Nội (2010)</li> <li>Học Nội trú FFI, Đại học Paris 6 Cộng hòa Pháp (1993 - 1994)</li> <li>Đào tạo tại viện trường Đại học Y Hà Nội (1987)</li> <li>Tốt nghiệp Đại học Y Hà Nội (1982)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "ThS.BSCKII Nguyễn Song Hào",
                description:
                    "<p>Hơn 20 năm kinh nghiệm khám và điều trị lĩnh vực Tai mũi họng</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/15/153630-bsi-hao.jpg",
                introduction:
                    "<h2><strong>ThS.BSCKII Nguyễn Song Hào</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm khám và điều trị lĩnh vực Tai mũi họng</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ù tai, đau tai, chảy máu tai</li> <li>Thủng màng nhĩ, điếc đột ngột</li> <li>Viêm tai giữa</li> <li>Amidan, V.A</li> <li>Viêm xoang</li> <li>Nghẹt mũi</li> <li>Hay bị chảy máu cam</li> <li>Đau cổ họng, khó nuốt</li> <li>Ho kéo dài</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Tai mũi họng - Bệnh viện Đa khoa Bảo Sơn (2022 - Nay)</li> <li>Nguyên Bác sĩ chuyên khoa Tai mũi họng - Bệnh viện Bắc Hà</li> <li>Nguyên Bác sĩ chuyên khoa Tai mũi họng - Bệnh viện Hồng Ngọc</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II - Đại học Y Hà Nội (2023)</li> <li>Thạc sĩ - Trường Đại học Y Hà Nội (2008 - 2010)</li> <li>Bác sĩ Đa khoa - Trường Đại học Y Hà Nội (1995 - 2001)</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Đỗ Thị Huệ",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản - Phụ khoa</p> <p>Nguyên Phó Trưởng khoa Khám bệnh - Bệnh viện Phụ sản Trung ương</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/04/141936-bs-do-thi-hue-1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Đỗ Thị Huệ</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản - Phụ khoa</li> <li>Nguyên Phó Trưởng khoa Khám bệnh - Bệnh viện Phụ sản Trung ương</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám bệnh, chữa bệnh chuyên khoa Phụ sản - Kế hoạch hóa gia đình</li> <li>Khám phụ khoa</li> <li>Quản lý thai nghén</li> <li>Điều trị vô sinh</li> <li>Mổ cấp cứu sản khoa, phụ khoa</li> <li>Mổ nội soi chửa ngoài tử cung, u nang buồng trứng, cắt hai phần phụ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Sản phụ khoa - Bệnh viện Đa khoa Bảo Sơn 2 (nay)</li> <li>Phó Trưởng khoa Khám bệnh - Bệnh viện Phụ sản Trung ương (2009 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II Sản Phụ Khoa - Đại học Y Hà Nội (2009)</li> <li>Bác sĩ Chuyên khoa I Khoa Sản - Đại học Y Hải Phòng (2003)</li> <li>Bác sĩ Đa khoa Ngoại sản - Đại học Y Hà Nội (1990)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Nghiên cứu về tỷ lệ đái tháo đường trên sản phụ đến khám và quản lý thai nghén tại Bệnh viện Phụ sản Trung ương</li> <li>Nghiên cứu tỷ lệ thai chết lưu trên sản phụ đến sinh tại Bệnh viện Phụ sản Trung ương hai giai đoạn</li> <li>Nghiên cứu tình hình mổ lấy thai tại Bệnh viện Phụ sản Trung ương</li> <li>Nghiên cứu tỷ lệ viêm nhiễm phụ khoa tại khoa Khám bệnh,Bệnh viện Phụ sản Trung ương</li> <li>Nghiên cứu về tư vấn dinh dưỡng cho phụ nữ có thai và cho con bú, bệnh lý<br>tim mạch, đái tháo đường, tiền sản giật,…</li> </ul>",
                clinic_id: "0a8e9048-2a1b-4428-9d72-2e01e9f0eb46",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Tâm lý học Nguyễn Thị Thúy Hằng",
                description:
                    "<p>Trưởng phòng, Chuyên viên Tham vấn học đường trường Marie Curie</p> <p>Quản lý, Chuyên viên Tham vấn học đường trường THCS Nguyễn Trường Tộ</p> <p>Nhiều năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực đánh giá, tham vấn tâm lý cho trẻ em, vị thành niên và tham vấn gia đình</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/141257-nguyen-thi-thuy-hang1.png",
                introduction:
                    "<h2><strong>Thạc sĩ Tâm lý học Nguyễn Thị Thúy Hằng</strong></h2> <ul> <li>Trưởng phòng, Chuyên viên Tham vấn học đường trường Marie Curie</li> <li>Quản lý, Chuyên viên Tham vấn học đường trường THCS Nguyễn Trường Tộ</li> <li>Nhiều năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực đánh giá, tham vấn tâm lý cho trẻ em, vị thành niên và tham vấn gia đình</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng phòng, Chuyên viên Tham vấn học đường trường Marie Curie (2019 - nay)</li> <li>Quản lý, Chuyên viên Tham vấn học đường trường THCS Nguyễn Trường Tộ (2019 - nay)</li> <li>Trưởng nhóm – Bộ phận Quản lí, Tổ chức Good Neighbors International tại Việt Nam (2017 - 2018)</li> <li>Giảng viên thỉnh giảng cho một số trường Đại học: Đại học Văn hóa, Đại học Công đoàn, Đại học Lao động – xã hội, Đại học Hòa Bình… về lĩnh vực bình đẳng giới và bạo lực trên cơ sở giới, kĩ năng giao tiếp và tự học ở bậc đại học…</li> <li>Tổ chức thành công các diễn đàn cho mạng lưới đối tác bạo lực trên cơ sở giới Việt Nam và Quốc tế: Môi trường an toàn cho trẻ em trong các tổ chức, Yêu thương đẩy lùi bạo lực…</li> <li>Giáo viên, Cán bộ Quản lí ca, Cán bộ Xã hội phụ trách Giáo dục – Đào tạo, Phòng Tư vấn và Hỗ trợ Phát triển Ngôi nhà Bình yên cho phụ nữ và trẻ em bị bạo lực gia đình và mua bán trở về Trung tâm Phụ nữ và Phát triển CWD Hội Liên hiệp phụ nữ Việt Nam VWU (2009 - 2017)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ Giáo dục học, Đại học Sư phạm Hà Nội</li> <li>Tốt nghiệp Đại học Sư phạm Hà Nội</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <p>Chuyên gia có thế mạnh về đánh giá tâm lý các vấn đề liên quan đến:</p> <ul> <li>Stress</li> <li>Lo âu</li> <li>Trầm cảm</li> <li>Nguy cơ tự tử</li> <li>Tham vấn trẻ em và gia đình</li> <li>Hỗ trợ giáo viên, phụ huynh về phương pháp dạy trẻ</li> <li>...</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Đánh giá IQ, EQ, rối loạn phát triển và các vấn đề tâm lý trẻ em từ 12 tháng - 18 tuổi",
                description:
                    "<p>Đánh giá trí tuệ IQ, EQ</p> <p>Đánh giá và tư vấn sự phát triển của trẻ em</p> <p>Đánh giá cấu trúc tâm lý nhân cách và định hướng nghề nghiệp</p> <p>Đánh giá lo âu, trầm cảm, giá trị bản thân, nghiện game và internet...</p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/141614-logo-brain.png",
                introduction:
                    "<h3><strong>1. Giới thiệu về dịch vụ đánh giá</strong></h3> <p>Sự phát triển với tốc độ nhanh và đầy biến động của thời đại 4.0, cùng với yêu cầu ngày càng cao của nhà trường và những bất cập trong thực tiễn giáo dục; Sự kì vọng của cha mẹ, thầy cô đang tạo ra những áp lực rất lớn và gây căng thẳng trong cuộc sống, học tập và quá trình phát triển của trẻ em. Mặt khác, sự hiểu biết của trẻ về bản thân mình cũng như kỹ năng sống của các em vẫn còn hạn chế trước những sức ép nói trên.</p> <p>Thực tế cho thấy trẻ em hiện nay dễ gặp những rối nhiễu cảm xúc (Lo âu, trầm cảm…), rối loạn phát triển (tự kỉ, chậm phát triển, khó khăn ngôn ngữ giao tiếp), các khó khăn học tập (như đọc, viết, tính toán…), những rối loạn về hành vi (chống đối, bỏ học, trộm cắp, hung tính…) mà bản thân không hề biết. Hậu quả là ngày càng có nhiều trẻ em gặp không ít khó khăn trong học tập, sinh hoạt, hòa nhập nhà trường và xã hội, thậm chí bỏ nhà, sống trong thế giới ảo, sử dụng chất kích thích, thực hiện hành vi xấu. Có nhiều trẻ đã từng tự làm đau mình như cắt tay, tự tử.</p> <p>Vì vậy, Viện Tâm lý Giáo dục Braincare triển khai Chương trình Đánh giá các Rối loạn Phát triển và Tâm lý trẻ em nhằm phát hiện sớm các trường hợp trẻ em gặp khó khăn và nhanh chóng hỗ trợ, can thiệp để các gia đình có cuộc sống tốt đẹp, hạnh phúc hơn.</p> <h3><strong>2. Lợi ích khi tham gia Chương trình Đánh giá Phát triển trẻ em</strong></h3> <ul> <li>Sử dụng các Bộ công cụ chẩn đoán, đánh giá tiên tiến nhất trên thế giới và Việt Nam nhằm phát hiện sớm các vấn đề khó khăn của trẻ em, từ đó tư vấn cho giáo viên, phụ huynh cách hỗ trợ, can thiệp cho trẻ càng sớm càng tốt.</li> <li>Việc chẩn đoán, đánh giá sớm các chỉ số IQ, EQ, các rối loạn phát triển, rối nhiễu tâm lý, cấu trúc tâm lý nhân cách cũng giúp cho cha mẹ có thể hiểu rõ hơn vấn đề của con, biết cách hỗ trợ, đồng hành cùng con phát triển điểm mạnh và khắc phục những hạn chế.</li> <li>Việc chẩn đoán, đánh giá các vấn đề tâm lý của trẻ còn giúp phát hiện và can thiệp sớm, giảm thiểu rủi ro và nguy cơ đối với trẻ, nhất là những vấn đề về lo âu, trầm cảm, ám ảnh sợ… đến việc học tập, sinh hoạt, cuộc sống của trẻ.</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Tâm lý Lê Thế Hanh",
                description:
                    "<p>Chuyên khoa Tâm lý học Lâm sàng</p> <p>Chuyên gia tham vấn tâm lý và trị liệu tâm lý, Trung tâm chăm sóc sức khỏe tinh thần BrainCare</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/140143-le-the-hanh1.png",
                introduction:
                    "<h2><strong>Thạc Sĩ Tâm lý học Lê Thế Hanh</strong></h2> <ul> <li>Chuyên khoa Tâm lý học Lâm sàng</li> <li>Chuyên gia tham vấn tâm lý và trị liệu tâm lý, Trung tâm chăm sóc sức khỏe tinh thần BrainCare</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chuyên gia tham vấn Tâm lý và Trị liệu Tâm lý, Trung tâm chăm sóc sức khỏe tinh thần BrainCare (10/2021 - nay)</li> <li>Giám sát chuyên môn, Đường dây nóng ngày mai (05/2021 - nay)</li> <li>Nhà tham vấn và Trị liệu Tâm lý, Không gian tâm lý Hà Thành - Sophia Psylad (03/2021 - 10/2021) </li> <li>Chuyên viên phòng tham vấn học đường, Trung tâm ứng dụng và thực hành tâm lý Bình Minh (05/2020 - 12/2020)</li> <li>Thực tập sinh khoa Tâm bệnh, Bệnh viện Nhi Trung ương (05/2019 - 08/2019)</li> <li>Thực tập sinh khoa Tâm lý, Bệnh viện Thần kinh Trung ương I (02/2019 - 05/2019)</li> <li>Trợ lý diễn giả, Trung tâm thực hành ứng dụng Tâm lý Mindalife (10/2018 - 01/2019)</li> <li>Thực tập sinh tham vấn học đường, Trường Trung học Cơ sở Ngô Sĩ Liên - Hà Nội (09/2017 - 01/2018)</li> </ul> <h3><strong>Chứng chỉ trong nước và ngoài nước</strong></h3> <ul> <li>Thạc sĩ Tâm lý học Lâm sàng (Định hướng ứng dụng), Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc Gia Hà Nội (2021) </li> <li>Cử nhân Tâm lý học, Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc Gia Hà Nội (2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ Tâm lý học Lâm sàng, Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc Gia Hà Nội (2018 -2020)</li> <li>Tâm lý học Lâm sàng, Trường Đại học Khoa học Xã hội và Nhân văn - Đại học Quốc Gia Hà Nội (2014 - 2018)</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Chuyên gia tâm lý Nguyễn Minh Phượng",
                description:
                    "<p>Hơn 15 năm kinh nghiệm công tác trong lĩnh vực giáo dục và giáo dục đặc biệt, bao gồm: đánh giá, can thiệp, trị liệu và tư vấn giáo dục cho trẻ em và thanh thiếu niên</p> <p>Hiện là Giảng viên - Trường Đại học Sư phạm Hà Nội</p> <p>Đánh giá rối loạn phát triển cho các con từ 15 tháng - 6 tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/19/092442-minh-phuong-braincare.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Chuyên gia tâm lý Nguyễn Minh Phượng</strong></h2> <ul> <li>Hơn 15 năm kinh nghiệm công tác trong lĩnh vực giáo dục và giáo dục đặc biệt, bao gồm: đánh giá, can thiệp, trị liệu và tư vấn giáo dục cho trẻ em và thanh thiếu niên</li> <li>Hiện là Giảng viên - Trường Đại học Sư phạm Hà Nội</li> <li>Đánh giá rối loạn phát triển cho các con từ 15 tháng - 6 tuổi</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <p>Chuyên gia sử dụng các thang đo, công cụ đánh giá hiện đại, chuyên sâu đã được chuẩn hóa ở Việt Nam (như: Thang đánh giá tâm lý phát triển Kyoto, WISC 4, PEP 3, RAVEN, M-CHAT...), Quan sát các biểu hiện hành vi của trẻ; trò chuyện với cha mẹ/người chăm sóc để tìm hiểu thêm thông tin và tư vấn về các vấn đề:</p> <ul> <li>Đánh giá chỉ số thông minh/trí tuệ: đánh giá xác định mức độ phát triển hiện tại của trẻ so với tuổi thực, từ đó xác định điểm mạnh và khó khăn, hạn chế của con để có phương pháp chăm sóc, giáo dục phù hợp, giúp con phát triển tối ưu</li> <li>Đánh giá sự phát triển về các lĩnh vực vận động, nhận thức và ngôn ngữ xã hội</li> <li>Các rối loạn phát triển ở trẻ em: tự kỉ, chậm nói, tăng động giảm chú ý (ADHD), chậm phát triển trí tuệ, rối loạn phổ tự kỉ, khó khăn về học tập, rối loạn cảm xúc hành vi,...</li> <li>Đánh giá trẻ khuyết tật ngôn ngữ (nói ngọng, nói lắp, mất ngôn ngữ, không có ngôn ngữ, rối loạn giọng điệu, chậm phát triển ngôn ngữ...)</li> <li>Tư vấn cho cha mẹ, nhà trường về các phương pháp chăm sóc, giáo dục phù hợp cho trẻ em</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chuyên gia tâm lý - Viện Tâm lý Giáo dục BrainCare</li> <li>Giảng viên - Trường Đại học Sư phạm Hà Nội</li> <li>Giảng dạy, tập huấn, bồi dưỡng chuyên môn cho giáo viên ở các địa phương về đánh giá, xây dựng kế hoạch giáo dục cá nhân, các phương pháp can thiệp, giáo dục trẻ có nhu cầu đặc biệt</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Chuyên gia Tâm lý Trương Hoàng Mai",
                description:
                    "<p>Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn, Trị liệu tâm lý</p> <p>Chuyên viên tham vấn tâm lý học đường tại các trường trên địa bàn Hà Nội</p> <p>Từng học tập và tu nghiệp nhiều năm tại nước Mỹ</p> <p>Tham vấn cho các con từ 6 tuổi - 18 tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/19/095233-cg-hoang-mai-braincare.jpg",
                introduction:
                    "<h2><strong>Chuyên gia tâm lý Trương Hoàng Mai</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn, trị liệu tâm lý</li> <li>Chuyên viên tham vấn tâm lý học đường tại các trường trên địa bàn Hà Nội</li> <li>Từng học tập và tu nghiệp nhiều năm tại nước Mỹ</li> <li>Tham vấn cho các con từ 6 tuổi - 18 tuổi</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <p>Chuyên gia sử dụng các thang đo đánh giá tâm lý; Đánh giá bằng các thang đo/test đã được chuẩn hoá; Liệu pháp tham vấn/trị liệu: CBT, DBT, Liệu pháp trị liệu bằng nghệ thuật, Hỏi chuyện lâm sàng, Lắng nghe thấu cảm, Tạo không gian và môi trường thấu hiểu giúp khách hàng bộc lộ và thể hiện bản thân để từ đó tư vấn các vấn đề:</p> <ul> <li>Đánh giá tâm lý, tham vấn, trị liệu các vấn đề sức khoẻ tâm thần trẻ em và trẻ vị thành niên</li> <li>Rối loạn trầm cảm, rối loạn lo âu, rối loạn căng thẳng ở thanh thiếu niên, rối loạn giấc ngủ, rối loạn ăn uống, rối loạn hành vi tự hại</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chuyên gia Tham vấn trị liệu tâm lý - Viện Tâm lý Giáo dục BrainCare</li> <li>Chuyên viên tham vấn tâm lý học đường - THCS - THPT Ban Mai, THCS Lê Quý Đôn - Hà Đông, Trường liên cấp Marie Curie</li> <li>Hỗ trợ tâm lý cho nhóm người yếu thế tại các tổ chức xã hội - Ethiopian Community Development Council và Arlington Street People's Assistance Network</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp danh dự chuyên ngành Tâm lý học Lâm sàng - Đại học George Mason (GMU)</li> <li>Tham gia các khoá tập huấn Hỗ trợ tâm lý cho học sinh THCS - tổ chức GNI</li> <li>Khoá tập huấn kỹ năng tham vấn/ trị liệu tâm lý bởi Giám đốc HTX xã hội Tư vấn Neul Pum – Choi Ok Soon tại GNI</li> <li>Khoá tập huấn Hỗ trợ tâm lý xã hội cho bệnh nhân mắc COVID-19 và gia đình - Trường Đại học Sư Phạm Hà Nội</li> <li>Khoá tập huấn “Phòng tránh bạo lực giới” trường đại học George Mason bởi tổ chức EVERFI</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Tâm lý học lâm sàng Đặng Minh Khuê",
                description:
                    "<p>Chuyên gia tham vấn trị liệu tậm lý tại Trung tâm chăm sóc sức khỏe tinh thần BrainCare</p> <p>Chuyên gia tham vấn trị liệu tậm lý lâm sàng Trẻ em và Vị thành niên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/135856-dang-minh-khue1.png",
                introduction:
                    "<h2><strong>Thạc sĩ Tâm lý lâm sàng Đặng Minh Khuê</strong></h2> <ul> <li>Chuyên gia tham vấn trị liệu tậm lý tại Trung tâm chăm sóc sức khỏe tinh thần BrainCare</li> <li>Chuyên gia tham vấn trị liệu tâm lý lâm sàng Trẻ em và Vị thành niên</li> </ul> <h3><strong>Quá trình Công tác</strong></h3> <ul> <li>Quản lý chuỗi dự án phát triển giáo dục tại Trung tâm Nghiên cứu và Truyền thông vì sự phát triển bền vững (2020 - 2021)</li> <li>Nhà tham vấn, trị liệu cho dự án Nâng cao nhận thức về sức khỏe tinh thần thông qua xây dựng và vận hành phòng tham vấn học đường Speak Out – GNI (2019 – 2020)</li> <li>Quản lý ca, hỗ trợ trẻ và các gia đình có hoàn cành khó khăn ở khu vực Long Biên (2018 - 2019)</li> <li>Thực hành tham vấn online và email tại tổ chức CCHIP và ứng dụng Carota</li> <li>Kiến tập và thực hành đánh giá, trị liệu tâm lý tại Bệnh viện Nhi Trung ương và Bệnh viện tâm thần Mai Hương, Ngôi nhà Bình yên…</li> </ul> <h3><strong>Quá trình Đào tạo</strong></h3> <ul> <li>Thạc sĩ Tâm lý học lâm sàng, Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Hà Nội (2021)</li> <li>Khóa tập huấn An toàn trên không gian mạng – CSDS (2021)</li> <li>Khóa tập huấn Bảo vệ trẻ em trên các kênh truyền thông – GNI (2021)</li> <li>Khóa tập huấn Bảo vệ trẻ em trên môi trường mạng– MSD (2021)</li> <li>Khóa tập huấn Tư duy ngôn ngữ tích cực – GNI (2020)</li> <li>Khóa tập huấn Kỹ năng tham vấn cơ bản và nâng cao - GoodNeighbors Internetional tại Vietnam (2019)</li> <li>Khóa tập huấn Đánh giá và Trị liệu trẻ có rối loạn phát triển theo mô hình ABC, Bệnh viện Nhi Trung Ương (2019)</li> <li>Khóa tập huấn tâm lý lâm sàng đào tạo bởi Bà Fabienne Delphine Jamsin và bà Delphine Jamsin, Viện Marie-Haps, Bỉ (2019)</li> <li>Cử nhân Tâm lý học Tham vấn, Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Hà Nội (2018)</li> <li>Khóa tập huấn “Đánh giá tâm lý xã hội” đào tạo bởi Bà Tuyết Brown, MSW, LICSW tại Khoa tâm lý học trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Hà Nội (2016)</li> <li>Khóa tập huấn “Giám sát thực hành ca tham vấn tâm lý” đào tạo bởi Bà Tuyết Brown, MSW, LICSW tại Khoa tâm lý học trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Hà Nội (2015)</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <ul> <li>Đánh giá tâm lý, tham vấn, trị liệu các vấn đề sức khỏe tâm thần trẻ em và trẻ vị thành niên; tham vấn giáo viên, phụ huynh về phương pháp hỗ trợ trẻ có các rối nhiễu, rối loạn</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Chuyên gia Tâm lý Nguyễn Thị Thanh Vân",
                description:
                    "<p>Thạc sĩ tham vấn và trị liệu tâm lý - IBAM (Ấn Độ)</p> <p>Chuyên gia tham vấn cao cấp về hôn nhân gia đình, nuôi dạy con, mối quan hệ cặp đôi.</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/141121-nguyen-thi-thanh-van1.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Chuyên gia Tâm lý Nguyễn Thị Thanh Vân</strong></h2> <ul> <li>Thạc sĩ tham vấn và trị liệu tâm lý - IBAM (Ấn Độ)</li> <li>Chuyên gia tham vấn cao cấp về hôn nhân gia đình, nuôi dạy con, mối quan hệ cặp đôi.</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chuyên gia tham vấn trị liệu tại Phòng tâm lý Phúc Ngân</li> <li>Chuyên gia tham vấn trị liệu tại Tổ chức Phi Chính phủ Blue Dragon (Rồng Xanh)</li> <li>Chuyên gia tham vấn trị liệu tại Tổ chức Nhà Tâm lý học Việt Nam</li> <li>Chuyên gia tham vấn trị liệu tại Trung tâm Tâm lý Nhất Tâm Minh</li> <li>Chuyên gia tham vấn trị liệu tại Trung tâm Tâm lý An Bình</li> <li>Hướng dẫn viên chương trình “Kỷ luật tích cực trong thực hành làm cha mẹ hàng ngày” tổ chức PDEP Việt Nam</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ tham vấn trị liệu tâm lý (Master Psychothepy and Counselling – IBAM) - Ấn Độ.</li> <li>Chứng chỉ nhà thực hành liệu pháp nhận thức hành vi</li> <li>Chứng chỉ hoàn thành khóa huấn luyện liệu pháp nhận thức hành vi cho Trầm cảm, lo âu, ám sợ.</li> <li>Chứng chỉ hoàn thành khóa huấn luyện “modern Effective therapy system – Trị liệu hệ thống hiện đại hiệu quả”</li> <li>Chứng chỉ “Hỗ trợ tâm lý dựa trên những hiểu biết về Rối loạn căng thẳng sau sang chấn” của tổ chức Blue Dragon Children’s Foundation</li> <li>Chứng chỉ “Ứng dụng liệu pháp thư giãn trong điều trị các rối loạn do Stress” – Hội tâm lý trị liệu Việt Nam</li> <li>Chứng chỉ Master Timeline Therapy – Hiệp hội ABN Hoa Kỳ</li> <li>Đã hoàn thành Khóa học Master thôi miên trị liệu</li> <li>Khóa học Hỗ trợ tâm lý khẩn cấp – Hội tâm lý trị liệu Việt Nam</li> <li>Chứng chỉ Master NLP</li> <li>Tham gia Khóa học Coach ICF</li> <li>Tham gia Khóa học Giao tiếp trắc ẩn</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <ul> <li>Hôn nhân gia đình, nuôi dạy con, mối quan hệ cặp đôi.</li> <li>Định hướng phát triển bản thân, tư vấn nghề nghiệp và sức khoẻ tinh thần trong công việc</li> <li>Tâm lý cho thanh thiếu niên về các khó khăn trong học tập, mối quan hệ, cuộc sống.</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ Tâm lý - Giáo dục Nguyễn Thắm",
                description:
                    "<p>Hơn 20 năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực trị liệu tâm lý, tham vấn tâm lý và giáo cho trẻ em và vị thành niên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/140413-nguyen-thi-tham1.png",
                introduction:
                    "<h2><strong>Tiến sĩ Tâm lý - Giáo dục Nguyễn Thắm</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực trị liệu tâm lý, tham vấn tâm lý và giáo cho trẻ em và vị thành niên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>5 năm làm việc tại Trung tâm phụ nữ và phát triển: Hỗ trợ đánh giá tâm lý, tham vấn và trị liệu tâm lý cho phụ nữ và trẻ em bị bạo lực gia đình, xâm hại tình dục, trẻ em có những rối nhiễu, sang chấn tâm lý.</li> <li>Hơn 15 năm giảng dạy cho sinh viên, học viên các lớp về các chủ đề liên quan đến giáo dục kĩ năng sống, đánh giá và trị liệu, can thiệp cho trẻ em có nhu cầu đặc biệt, trẻ em có sang chấn, rối nhiều tâm lý tại các Trường Đại học, Cao đẳng.</li> <li>Chuyên gia hỗ trợ cho Trung tâm nghiên cứu và ứng dụng tâm lý – giáo dục ở Hà Nội, Hải Phòng, Quảng Ninh, Thái Bình,… về lĩnh vực can thiệp, trị liệu tâm lý, tư vấn phụ huynh, đánh giá tâm lý các rối loạn phát triển cho trẻ em; lên chương trình và giảng dạy các lớp kĩ năng sống cho trẻ em</li> <li>Chuyên gia tâm lý cấp cao cho phòng tham vấn học đường của các trường công lập và tư thục trên địa bàn Hà Nội: Đánh giá vấn đề tâm lý của HS, lên kế hoạch can thiệp và trực tiếp trị liệu cho HS trầm cảm, lo âu, tăng động giảm tập trung, tự kỉ, nghiện game và các chất kích thích, bạo lực học đường, xâm hại tình dục,….</li> <li>Tác giả của nhiều tài liệu liên quan đến các vấn đề tâm lý giáo dục như: Sách Chú gấu con; Nghệ thuật làm cha mẹ trong phòng ngừa bạo lực gia đình với trẻ em; Giá trị sống trong mắt trẻ thơ; Sổ tay công cụ tham vấn học đường, Sổ tay xây dựng và vận hành phòng tham vấn trong ứng phó với bạo lực học đường,…</li> <li>Diễn giả chia sẻ một số nội dung liên quan đến hỗ trợ tâm lý cho trẻ em, hỗ trợ giáo viên, cha mẹ đồng hành cùng con ở các trường học ở Hà Nội, Thái Bình, Quảng Ninh, Thanh Hoá, Phú Thọ,…</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ, Tiến sĩ Tâm lý - Giáo dục, Trường Đại học Sư phạm Hà nội, Viện Khoa học giáo dục Việt Nam (2010)</li> <li>Tốt nghiệp trường Đại học Sư phạm Hà Nội, chuyên ngành Giáo dục đặc biệt (2002-2006); chuyên ngành Ngoại ngữ (2014-2016) </li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <p>Chuyên gia có thế mạnh về đánh giá và trị liệu, can thiệp cho trẻ em và các trẻ vị thành niên có nhu cầu đặc biệt, trẻ em có sang chấn, rối nhiều tâm lý</p>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ Tâm lý học Phạm Văn Tư",
                description:
                    "<p>Phó Trưởng Khoa Công tác xã hội, Trường Đại học Sư phạm Hà Nội</p> <p>Hơn 20 năm là chuyên gia đánh giá và trị liệu tâm lý cho phụ nữ, trẻ em, thanh thiếu niên liên quan đến trầm cảm, lo âu,…</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/140844-pham-van-tu1.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ Tâm lý học Phạm Văn Tư</strong></h2> <ul> <li>Phó trưởng Khoa Công tác xã hội, trường Đại học Sư phạm Hà Nội.</li> <li>Hơn 20 năm là chuyên gia đánh giá và trị liệu tâm lý cho phụ nữ, trẻ em, thanh thiếu niên liên quan đến trầm cảm, lo âu,…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chuyên gia cao cấp tập huấn, chia sẻ các chuyên đề “Sức khỏe sinh sản vi thành niên và giao tiếp học đường”, trường học hạnh phúc, giá trị sống, kĩ năng sống, kỉ luật không nước mắt, nghệ thuật đánh thức cảm xúc tích cực cho trẻ em,… cho các trường học, các công ty, đơn vị tổ chức.</li> <li>Hơn 20 năm là chuyên gia đánh giá và trị liệu tâm lý cho phụ nữ, trẻ em, thanh thiếu niên liên quan đến trầm cảm, lo âu,…</li> <li>Giảng viên, chuyên gia giảng dạy cho các trường Cao đẳng, Đại học về lĩnh vực liên quan đến tâm lý học đường, giáo dục giá trị sống, kĩ năng sống, quyền trẻ em,….</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tiến sĩ, chuyên ngành Tâm lý học, Đại học Sư phạm Hà Nội</li> <li>Phó trưởng Khoa Công tác xã hội, trường Đại học Sư phạm Hà Nội</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <p>Chuyên gia có thế mạnh về đánh giá và trị liệu tâm lý cho phụ nữ, trẻ em, thanh thiếu niên liên quan đến trầm cảm, lo âu,…</p>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Chuyên gia Tâm lý Hoàng Lê Thủy",
                description:
                    "<p>Chuyên gia Tâm lý học lâm sàng trẻ em và thanh thiếu niên</p> <p>Giảng viên kiêm nhiệm khoa tâm lý học Trường Đại học Khoa học Xã hội và Nhân văn</p> <p>Nhiều năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực trị liệu tâm lý, tham vấn tâm lý cho trẻ em, vị thành niên và tham vấn gia đình</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/01/11/140627-hoang-le-thuy1.jpg",
                introduction:
                    "<h2><strong>Chuyên gia Tâm lý Hoàng Lê Thủy</strong></h2> <ul> <li>Chuyên gia Tâm lý học lâm sàng trẻ em và thanh thiếu niên</li> <li>Giảng viên kiêm nhiệm khoa tâm lý học Đại học Khoa học Xã hội và Nhân văn</li> <li>Nhiều năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực trị liệu tâm lý, tham vấn tâm lý cho trẻ em, vị thành niên và tham vấn gia đình</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng ban Đường dây Tư vấn và Hỗ trợ trẻ em, Cục bảo vệ chăm sóc trẻ em, Bộ Lao động Thương binh xã hội (2010 - nay)</li> <li>Tham gia các lớp tập huấn TOT và đi đào tạo lại tại nhiều tỉnh về các chương trình “Làm cha mẹ”,“phòng chống xâm hại tình dục cho trẻ em”, “Quy trình can thiệp cho trẻ em bị xâm hại và có nguy cơ bị mua bán, bóc lột”, “rối loạn phát triển ở trẻ em” “các kỹ năng giảng dạy chủ động trong đào tạo, tập huấn”… (2015 - nay)</li> <li>Giảng dạy các lớp kĩ năng sống an toàn cho trẻ em, cán bộ tư vấn “Đường dây tư vấn và Hỗ trợ trẻ em” (2008 - 2010)</li> <li>Cộng tác viên các báo Hà Nội mới, Gia đình & Xã hội, truyền hình Vì trẻ em, chương trình Nhà tròn VTV6 (2004 - 2008)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp chuyên ngành Tâm lý học lâm sàng trẻ em và thanh thiếu niên Trường Đại học Khoa học Xã hội Nhân văn liên kết với Đại học Toulouse, Pháp</li> </ul> <h2><strong>Tư vấn và trị liệu</strong></h2> <p>Chuyên gia có thế mạnh về tham vấn trị liệu Tâm lý học lâm sàng trẻ em và thanh thiếu niên:</p> <ul> <li>Trầm cảm</li> <li>Lo âu</li> <li>Stress</li> <li>Khủng hoảng tuổi dậy thì</li> <li>Đánh giá phát triển trí tuệ của trẻ</li> <li>...</li> </ul>",
                clinic_id: "21c98ead-c412-4c8d-a0a3-a2047c8040d3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu tú, Bác sĩ chuyên khoa II Hồ Thị Hồng",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Nội khoa</p> <p>Nguyên Trưởng khoa Điều trị theo yêu cầu Bệnh viện Chợ Rẫy</p> <p>Giám đốc Trung tâm Ningen Dock Bernard</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/02/28/100909-bs-hong.png",
                introduction:
                    "<h2><strong>Thầy thuốc Ưu tú, Bác sĩ chuyên khoa II Hồ Thị Hồng</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Nội khoa</li> <li>Nguyên Trưởng khoa Điều trị theo yêu cầu Bệnh viện Chợ Rẫy</li> <li>Giám đốc Trung tâm Ningen Dock Bernard</li> <li>Thành viên Hiệp hội Ningen Dock Nhật Bản</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Tầm soát sức khỏe toàn diện</li> <li>Tầm soát ung thư, đột quỵ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Giám đốc chuyên môn Trung Tâm Y khoa Chuyên sâu Quốc tế Bernard</li> <li>Giám đốc Trung tâm Ningen Dock Bernard</li> <li>Nguyên Trưởng khoa Điều trị theo yêu cầu Bệnh viện Chợ Rẫy</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tu nghiệp chuyên sâu tại Pháp, Nhật Bản,… về lĩnh vực hồi sức cấp cứu, nội khoa chuyên sâu, ung thư học</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hiệp hội ningen Dock Nhật Bản</li> </ul>",
                clinic_id: "3c201b47-8bbc-465e-9397-8ea30b12709e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Thị Thanh Hà",
                description:
                    "<p>Gần 15 năm kinh nghiệm trong lĩnh vực Tim mạch </p> <p>Từng công tác tại khoa Hồi sức Tim và phẫu thuật Tim mạch tại Bệnh viện Chợ Rẫy </p> <p>Phó Giám Đốc Trung tâm Ningen Dock Bernad</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/07/11/141409-bs-thanh-ha1.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Thị Thanh Hà</strong></h2> <ul> <li>Gần 15 năm kinh nghiệm trong lĩnh vực Tim mạch</li> <li>Từng công tác tại khoa Hồi sức Tim và phẫu thuật Tim mạch tại Bệnh viện Chợ Rẫy</li> <li>Phó Giám Đốc Trung tâm Ningen Dock Bernad</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Thăm khám và điều trị các bệnh lý Tim mạch: <ul> <li>Van tim</li> <li>Mạch vành</li> <li>Rối loạn nhịp</li> <li>Siêu âm tim qua thực quản đánh giá các bệnh lý hở van tim khó </li> </ul> </li> <li>Chẩn đoán bệnh lý chuyển hóa và các yếu tố nguy cơ tim mạch </li> <li>Kiểm tra sức khỏe</li> <li>Chóng mặt</li> <li>Mệt mỏi</li> <li>Hoa mắt</li> <li>Kém ăn</li> <li>Giảm sút cân</li> <li>Khó ngủ</li> <li>Đau đầu</li> <li>Ngộ độc rượu</li> <li>Ngộ độc thức ăn</li> <li>Dị ứng</li> <li>Viêm da dị ứng</li> <li>Dị ứng thực phẩm</li> <li>Rối loạn miễn dịch</li> <li>Rối loạn chuyển hóa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Giám Đốc Trung tâm Ningen Dock Bernad</li> <li>Từng công tác tại khoa Hồi sức Tim và phẫu thuật Tim mạch tại Bệnh viện Chợ Rẫy</li> <li>Trung tâm kiểm tra Sức khỏe Chợ Rẫy Việt - Nhật (HECI)</li> </ul>",
                clinic_id: "3c201b47-8bbc-465e-9397-8ea30b12709e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Thị Đan Thi",
                description:
                    "<p>Hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Bác sĩ chuyên khoa Mắt tại trung tâm Bernard Healthcare</p> <p>Bác sĩ chuyên khoa Mắt tại Bệnh viện Mắt Tây Nguyên</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/11/171530-bs-dan-thi.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Thị Đan Thi</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</li> <li>Bác sĩ chuyên khoa Mắt tại trung tâm Bernard Healthcare</li> <li>Bác sĩ chuyên khoa Mắt tại Bệnh viện Mắt Tây Nguyên</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các bệnh lý về Mắt:</p> <ul> <li>Bệnh khúc xạ và điều tiết: cận thị, loạn thị , viễn thị</li> <li>Bệnh lý kết mạc, giác mạc, lệ đạo</li> <li>Bệnh lý đục thể thủy tinh</li> <li>Bệnh lý Glaucoma</li> <li>Bệnh lý pha lê thể, võng mạc</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Mắt, Trung tâm Y khoa Chuyên sâu Quốc tế Bernard</li> <li>Từng là Bác sĩ Chuyên khoa Mắt, Bệnh viện Mắt Tây Nguyên</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ Nhãn khoa, Trường Đại học Y khoa Phạm Ngọc Thạch</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học Tây Nguyên</li> <li>Chứng chỉ OCT, Bệnh viện Mắt TP.HCM</li> <li>Chứng chỉ siêu âm nhãn khoa, Bệnh viện Mắt TP.HCM</li> </ul>",
                clinic_id: "3c201b47-8bbc-465e-9397-8ea30b12709e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Tiến Hưng",
                description:
                    "<p>Nhiều năm kinh nghiệm trong lĩnh vực Răng Hàm Mặt</p> <p>Bác sĩ răng hàm mặt, khoa răng hàm mặt, trung tâm Bernard Healthcare</p> <p>Bác sĩ răng hàm mặt, khoa răng hàm mặt, Bệnh viện Nguyễn Tri Phương </p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/11/163911-bac-si-tien-hung.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Tiến Hưng</strong></h2> <ul> <li>Hiện đang công tác tại Khoa Răng hàm mặt, Bệnh viện Nguyễn Tri Phương</li> <li>Hiện đang công tác tại Khoa Răng hàm mặt, Trung tâm Y khoa Bernard Clinic</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các bệnh Chuyên khoa Răng hàm mặt:</p> <ul> <li>Nhổ răng</li> <li>Trám răng</li> <li>Các vấn đề về nội nha</li> <li>Phục hình răng</li> <li>Cạo vôi răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện đang công tác tại Khoa Răng hàm mặt, Bệnh viện Nguyễn Tri Phương</li> <li>Hiện đang công tác tại Khoa Răng hàm mặt, Trung tâm Y khoa Bernard Clinic</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa Răng hàm mặt, Trường Đại học Y Dược TP. HCM</li> </ul>",
                clinic_id: "3c201b47-8bbc-465e-9397-8ea30b12709e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Đoàn Trúc Quỳnh",
                description:
                    "<p>Hơn 10 năm kinh nghiệm tại Bệnh viện đầu ngành </p> <p>Giảng viên trường Đại Học Y Dược TP. HCM </p> <p>Chuyên gia thẩm định thuốc - Tiểu ban Dược lý, Cục Quản lý Dược</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/20/225006-bs-quynh.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Đoàn Trúc Quỳnh</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm tại Bệnh viện đầu ngành</li> <li>Giảng viên trường Đại Học Y Dược TP. HCM</li> <li>Chuyên gia thẩm định thuốc - Tiểu ban Dược lý, Cục Quản lý Dược</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Đái tháo đường</li> <li>Bướu nhân, nang tuyến giáp</li> <li>Cường chức năng tuyến giáp và bệnh Basedow</li> <li>Giảm năng tuyến giáp</li> <li>Viêm tuyến giáp</li> <li>Suy tuyến thượng thận</li> <li>Hội chứng Conn</li> <li>Hội chứng Cushing</li> <li>U tủy thượng thận</li> <li>Suy tuyến yên</li> <li>Đái tháo nhạt</li> <li>Rối loạn mỡ máu</li> <li>...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám và điều trị chuyên khoa Nội tiết - Thận, Trung tâm Y khoa Chuyên sâu Quốc tế Bernard</li> <li>Giảng viên khoa Y, Đại học Y dược TP.HCM</li> <li>Bác sĩ khoa Khám bệnh, Bệnh viện Đại học Y dược TP.HCM</li> </ul>",
                clinic_id: "3c201b47-8bbc-465e-9397-8ea30b12709e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu tú, Bác sĩ chuyên khoa II Từ Thị Mỹ Trang",
                description:
                    "<p>Hơn 40 năm kinh nghiệm trong lĩnh vực Nội Tổng quát</p> <p>Giám đốc chuyên môn Trung Tâm Y khoa Chuyên sâu Quốc tế Bernard (cơ sở 2)</p> <p>Nguyên Trưởng khoa Điều trị theo yêu cầu, Dịch vụ Quốc tế tại Bệnh viện Chợ Rẫy</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/02/28/111255-bs-trang.png",
                introduction:
                    "<h2><strong>Thầy thuốc ưu tú, Bác sĩ chuyên khoa II Từ Thị Mỹ Trang</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm trong lĩnh vực Nội Tổng quát</li> <li>Giám đốc chuyên môn Trung Tâm Y khoa Chuyên sâu Quốc tế Bernard (cơ sở 2)</li> <li>Nguyên Trưởng khoa Điều trị theo yêu cầu, Dịch vụ Quốc tế tại Bệnh viện Chợ Rẫy</li> <li>Chuyên gia cao cấp Ningen Dock tại Bernard</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Kiểm tra sức khỏe</li> <li>Chóng mặt</li> <li>Mệt mỏi</li> <li>Hoa mắt</li> <li>Kém ăn</li> <li>Giảm sút cân</li> <li>Khó ngủ</li> <li>Đau đầu</li> <li>Ngộ độc rượu</li> <li>Ngộ độc thức ăn</li> <li>Dị ứng</li> <li>Viêm da dị ứng</li> <li>Dị ứng thực phẩm</li> <li>Rối loạn miễn dịch</li> <li>Rối loạn chuyển hóa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Giám đốc chuyên môn Trung Tâm Y khoa Chuyên sâu Quốc tế Bernard (cơ sở 2)</li> <li>Chuyên gia cao cấp Trung tâm Ningen Dock Bernard</li> <li>Nguyên Trưởng khoa Dịch vụ Quốc tế, Bệnh viện Chợ Rẫy</li> <li>Nguyên Trưởng khoa điều trị theo yêu cầu, Bệnh viện Chợ Rẫy</li> </ul>",
                clinic_id: "3c201b47-8bbc-465e-9397-8ea30b12709e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu tú, Bác sĩ Chuyên khoa I Nguyễn Xuân Bích Huyên",
                description:
                    "<p>Nguyên Trưởng khoa Hô hấp, Bệnh viện Chợ Rẫy</p> <p>Trưởng phòng Chẩn đoán điều trị rối loạn giấc ngủ, Phòng khám Đa khoa CHAC</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/04/21/185740-bs-huyen.jpg",
                introduction:
                    "<h2><strong>Thầy thuốc Ưu tú, Bác sĩ chuyên khoa I Nguyễn Xuân Bích Huyên</strong></h2> <ul> <li>Nguyên Trưởng khoa Hô hấp, Bệnh viện Chợ Rẫy</li> <li>Trưởng phòng Chẩn đoán điều trị Rối loạn giấc ngủ, Phòng khám Đa khoa CHAC</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh lý về rối loạn giấc ngủ</li> <li>Viêm phổi</li> <li>Hen suyễn</li> <li>Bệnh phổi tắc nghẽn mạn tính (COPD)</li> <li>Viêm màng phổi (viêm phế mạc)</li> <li>Thuyên tắc phổi.</li> <li>Bệnh lý nội khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Trưởng phòng Chẩn đoán điều trị Rối loạn giấc ngủ, Phòng khám Đa khoa CHAC</li> <li>Nguyên Trưởng khoa Hô hấp, Bệnh viện Chợ Rẫy</li> <li>Bác sĩ khám và điều trị tại khoa Phổi - Thận, Bệnh viện Chợ Rẫy</li> </ul>",
                clinic_id: "d5a68b0d-7830-4554-9abe-8ab999b7ff73",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Bảo Huyền Tôn Nữ Thùy Trâm",
                description:
                    "<p>Hơn 15 năm kinh nghiệm trong lĩnh vực Nội Tổng quát</p> <p>Từng công tác tại Bệnh viện Đa khoa khu vực Thủ Đức</p> <p>Trưởng khoa tại Trung tâm Dinh dưỡng - Y học vận động Nutrihome</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/26/102843-3b329533a34c63123a5d.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Bảo Huyền Tôn Nữ Thùy Trâm</strong></h2> <ul> <li>Từng công tác tại Bệnh viện Đa khoa khu vực Thủ Đức</li> <li>Trưởng khoa tại Trung tâm Dinh dưỡng - Y học vận động Nutrihome</li> <li>Hơn 15 năm kinh nghiệm trong lĩnh vực Nội Tổng quát</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các vấn đề: </p> <ul> <li>Khám và điều trị các bệnh lý Nội khoa tổng quát</li> <li>Tư vấn chỉ định tiêm vaccine cho mọi đối tượng</li> <li>Khám, tư vấn thiết lập chế độ dinh dưỡng phù hợp cho phụ nữ trước và trong mang thai</li> <li>Khám, tư vấn, phân tích thành phần sữa mẹ, thiết lập chế độ dinh dưỡng cho mẹ cho con bú</li> <li>Khám, tư vấn thiết lập chế độ dinh dưỡng phù hợp cho trẻ tiền dậy thì và dậy thì</li> <li>Khám, tư vấn thiết lập chế độ dinh dưỡng phù hợp người lớn có bệnh lý Nội khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa tại Trung tâm Dinh dưỡng, Y học vận động Nutrihome (2019 - nay)</li> <li>Bác sĩ tại Trung tâm tiêm chủng VNVC Quận 2 (2017 - 2019)</li> <li>Bác sĩ khoa Nội tại Bệnh viện Đa khoa khu vực Thủ Đức (2008 - 2017)</li> <li>Bác sĩ phòng khám Nội tổng quát tại Bệnh viện Tỉnh Cà Mau (2005 - 2008) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Nội khoa, Trường Đại học Y khoa Phạm Ngọc Thạch</li> <li>Chứng chỉ dinh dưỡng lâm sàng tiết chế, Trường Đại học Y khoa Phạm Ngọc Thạch</li> </ul>",
                clinic_id: "d5a68b0d-7830-4554-9abe-8ab999b7ff73",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Trần Thị Kim Thu",
                description:
                    "<p>Gần 25 năm kinh nghiệm trong lĩnh vực Hô hấp - Phổi</p> <p>Bác sĩ khám và điều trị tại Bệnh viện Đại học Y Dược TP. HCM</p> <p>Giám đốc chuyên môn Phòng khám Đa khoa CHAC</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/22/141301-f3f4d7edf7e529bb70f4.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Trần Thị Kim Thu</strong></h2> <ul> <li>Gần 25 năm kinh nghiệm trong lĩnh vực Hô hấp - Phổi</li> <li>Bác sĩ khám và điều trị tại Bệnh viện Đại học Y Dược TP. HCM</li> <li>Giám đốc chuyên môn Phòng khám Đa khoa CHAC</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám và điều trị bệnh Nội Tổng quát – Hô hấp ở người lớn và trẻ em: </p> <ul> <li>Viêm phổi</li> <li>Hen suyễn</li> <li>Bệnh phổi tắc nghẽn mạn tính (COPD)</li> <li>Viêm màng phổi (viêm phế mạc)</li> <li>Thuyên tắc phổi</li> <li>Các bệnh lý khác về hô hấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Giám đốc chuyên môn Phòng khám Đa khoa CHAC (2011 - Nay)</li> <li>Bác sĩ tại Phòng khám Đa khoa Hạnh Phúc (Nay)</li> <li>Bác sĩ khám tại phòng khám Hen – COPD – Hậu Covid, Bệnh viện Đại học Y Dược TP. HCM (2002 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ chuyên ngành Lao và bệnh Phổi, Đại học Y Dược TP. HCM (2008)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch (1999)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Uỷ viên Ban chấp hành LCH Hen - Dị ứng - Miễn dịch lâm sàng TP. HCM</li> <li>Hội viên Hội Hô hấp TP. HCM</li> </ul>",
                clinic_id: "d5a68b0d-7830-4554-9abe-8ab999b7ff73",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Bạch Liễu",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong khám và điều trị các bệnh lý Tiêu hóa</p> <p>Từng công tác nhiều năm tại Bệnh viện Quân Y 103</p> <p>Nguyên giảng viên Học viện Quân Y</p> <p>Bác sĩ khám cho bệnh nhân trên 12 tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/08/10/144616-bs-lieu.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Thị Bạch Liễu</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong khám và điều trị các bệnh lý Tiêu hóa</li> <li>Từng công tác nhiều năm tại Bệnh viện Quân Y 103</li> <li>Nguyên giảng viên Học viện Quân Y</li> <li>Bác sĩ khám cho bệnh nhân trên 12 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các bệnh lý vể Tiêu hóa:</p> <ul> <li>Khám và điều trị các bệnh của dạ dày tá tràng như viêm loét dạ dày tá tràng, viêm loét thực quản.</li> <li>Phát hiện ung thư dạ dày, thực quản,...</li> <li>Khám và điều trị các bệnh của đại tràng như viêm đại tràng, bệnh trĩ, phát hiện ung thư đại tràng và thư vấn điều trị chuyên khoa.</li> <li>Khám và điều trị bệnh xơ gan, phòng ngừa biến chứng của xơ gan, hạn chế diễn tiến nặng của xơ gan.</li> <li>Các bệnh lý của gan, mật</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám và điều trị Nội Tiêu hóa, Bệnh viện Đa khoa Chữ Thập Xanh </li> <li>Bác sĩ điều trị tại Bệnh viện Quân Y 103 (1990 - 2021)</li> <li>Giảng viên Học viện Quân Y (1990 - 2021)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II chuyên ngành Nội Tiêu hóa, Học viện Quân Y (2010)</li> <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Nội chung, Học viện Quân Y (1996)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Học viện Quân Y (1990)</li> </ul>",
                clinic_id: "efabd1bb-8680-4451-bca2-0127b8ee3c02",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Kim Chi",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong Chuyên khoa Mắt</p> <p>Bác sĩ có nhiều chứng chỉ trong khám và điều trị về Mắt</p> <p>Bác sĩ Chuyên khoa Mắt, Bệnh viện Mắt Cao Thắng</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/091359-bac-sy-kim-chi-cao-thang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Thị Kim Chi</strong></h2> <ul> <li>Gần 20 năm kinh nghiệm trong Chuyên khoa Mắt</li> <li>Bác sĩ có nhiều chứng chỉ trong khám và điều trị về Mắt</li> <li>Bác sĩ Chuyên khoa Mắt, Bệnh viện Mắt Cao Thắng</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Mắt, Khoa Khám, Bệnh viện Mắt Cao Thắng (2003 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên ngành Chẩn đoán và điều trị một số bệnh lý tăng VEGF thường gặp, Bệnh viện Mắt TP. HCM (2017)</li> <li>Chứng chỉ Ứng dụng OCT A trong chẩn đoán các bệnh lý võng mạc, Bệnh viện Mắt TP. HCM (2017)</li> <li>Chứng chỉ Bệnh lý khô mắt & Bệnh lý Glaucoma, Bệnh viện Mắt TP. HCM (2016)</li> <li>Chứng chỉ Nidek Lasik System, Nidek Co., Ltd (2004)</li> <li>Chứng chỉ Didactic & surgical accreditation, Visian ICL (2004)</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Ung Thị Hoài Yên",
                description:
                    "<p>Gần 40 năm kinh nghiệm lĩnh vực Chuyên khoa Mắt</p> <p>Từng công tác tại Bệnh viện Nhân dân Gia Định</p> <p>Từng học tập và tham gia hội nghị tại nước ngoài: Singapore, Hàn Quốc</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/085802-bs-hoai-yen-cao-thang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Ung Thị Hoài Yên</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm lĩnh vực Chuyên khoa Mắt</li> <li>Từng công tác tại Bệnh viện Nhân dân Gia Định</li> <li>Từng học tập và tham gia hội nghị tại nước ngoài: Singapore, Hàn Quốc</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trợ lý Giám đốc Bệnh viện Tai Mũi Họng Sài Gòn – Phòng khám Đa khoa Quốc tế Sài Gòn</li> <li>Bác sĩ Chuyên khoa Mắt - Phòng khám Đa khoa Quốc tế Sài Gòn</li> <li>Bác sĩ Chuyên khoa Mắt, khoa Khám, Bệnh viện Mắt Cao Thắng (2018 - Nay)</li> <li>Trưởng khoa Mắt - Phòng khám Đa khoa An Khang (2018 - 2010)</li> <li>Bác sĩ Khoa Mắt - Bệnh viện Nhân dân Gia Định (2010 - 1989)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa cấp 2, chuyên ngành Mắt (2004)</li> <li>Bác sĩ Chuyên khoa cấp 1 chuyên ngành Mắt (1992)</li> <li>Bác sĩ Chuyên khoa Mắt (1995)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Bệnh lý kết giác mạc do miễn dịch - dị ứng, Bệnh viện Mắt TP. HCM (2018)</li> <li>Phẫu thuật mộng thịt</li> <li>Phẫu thuật Phaco</li> <li>Workshop tiêm Botulinum</li> <li>Hướng dẫn Bản đồ Giác mạc trong PT khúc xạ - Thực hành OCT Angiography</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Huỳnh Khánh Trang",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Trưởng khoa Mắt, khoa Lasik, Bệnh viện Mắt Cao Thắng</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/092159-bac-sy-huynh-khanh-trang-cao-thang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Huỳnh Khánh Trang</strong></h2> <ul> <li>Bác sĩ có gần 20 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</li> <li>Trưởng khoa Mắt, khoa Lasik, Bệnh viện Mắt Cao Thắng</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/ khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Mắt, Khoa Lasik, Bệnh viện Mắt Cao Thắng (2003 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên ngành Cập nhật kinh nghiệm điều trị các bệnh lý nhãn khoa, Bệnh viện Mắt Đà Nẵng (2018)</li> <li>Laser- Yag chuyên ngành nhãn khoa, Bệnh viện Chợ Rẫy (2017)</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Mai Phan Hoàng Yến",
                description:
                    "<p>10 năm kinh nghiệm trong Chuyên khoa Mắt</p> <p>Trưởng khoa Khám, Bệnh viện Mắt Cao Thắng</p> <p>Bác sĩ có nhiều chứng chỉ trong khám và điều trị các bệnh lý về Mắt</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/103805-bac-sy-hoang-yen-cao-thang.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Mai Phan Hoàng Yến</strong></h2> <ul> <li>10 năm kinh nghiệm trong Chuyên khoa Mắt</li> <li>Trưởng khoa Khám, Bệnh viện Mắt Cao Thắng</li> <li>Bác sĩ có nhiều chứng chỉ trong khám và điều trị các bệnh lý về Mắt</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khám, Bệnh viện Mắt Cao Thắng (2012 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên ngành Các khám nghiệm trong chẩn đoán glôcôm, Bệnh viện Mắt Trung ương (2019)</li> <li>Chuyên ngành PT cắt bè củng mạc trong ĐT glôcôm, Bệnh viện Mắt TP. HCM (2019)</li> <li>Chuyên ngành Laser - Yag chuyên ngành nhãn khoa, Bệnh viện Chợ Rẫy (2017)</li> <li>Chuyên ngành Tiếp cận toàn diện chẩn đoán & ĐT rối loạn chức năng tuyến Meibomius - Khô mắt, Bệnh viện Chợ Rẫy (2017)</li> <li>Chuyên ngành Nhãn áp & nhãn áp kế, Bệnh viện Trung ương Huế (2017)</li> <li>Chuyên ngành Bệnh lý giác mạc, Đại học Y dược TP. HCM (2016)</li> <li>Chuyên ngành Khúc xạ dành cho bác sĩ Chuyên khoa Mắt, Bệnh viện Mắt TP. HCM (2012)</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Mỹ Dung",
                description:
                    "<p>Hơn 20 năm kinh nghiệm trong Chuyên khoa Mắt</p> <p>Giám đốc Bệnh viện Mắt Cao Thắng</p> <p>Bác sĩ có nhiều chứng chỉ khám và điều trị các bệnh lý về Mắt trong và ngoài nước</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/110753-bac-sy-my-dung-cao-thang.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Mai Phan Hoàng Yến</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm trong Chuyên khoa Mắt</li> <li>Giám đốc Bệnh viện Mắt Cao Thắng</li> <li>Bác sĩ có nhiều chứng chỉ khám và điều trị các bệnh lý về Mắt trong và ngoài nước</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Bệnh viện, Bệnh viện Mắt Cao Thắng (2002 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thực tế lâm sàng trong Bệnh lý Nhãn Khoa, Bệnh viện Chợ rẫy (2019)</li> <li>Cập nhật Phẫu thuật Phaco nâng cao, Đại học Y Dược TP. HCM (2019)</li> <li>Chẩn đoán & điều trị bệnh lý Glocom, Đại học Y Dược TP. HCM (2015)</li> <li>Tạo hình thẩm mỹ & thần kinh nhãn khoa cơ bản. Thực hành tiêm Botulinum toxin A điều trị vùng mặt cơ bản, Bệnh viện Mắt TP. HCM (2013)</li> <li>Phẫu thuật Phaco, Bệnh viện Chợ rẫy (2011)</li> <li>Bổi dưỡng kỹ thuật về lé, Đại học Y Dược TP. HCM (2000)</li> <li>Giải phẫu & sinh lý học cơ quan thị giác, Đại học Y Dược TP. HCM (2000)</li> <li>Bệnh học nhãn nhi, Đại học Y Dược TP. HCM (2000)</li> <li>Bệnh học võng mạc & thị thần kinh, Đại học Y Dược TP. HCM (2000)</li> <li>Bệnh học thủy tinh thể, Đại học Y Dược TP. HCM (2000)</li> <li>Bệnh học hốc mắt, Đại học Y Dược TP. HCM (2000)</li> <li>Rối loạn vận nhãn- lé cơ năng, Đại học Y Dược TP. HCM (2000)</li> <li>Bệnh học Glaucoma, Đại học Y Dược TP. HCM (2000)</li> <li>Quang học của mắt & tật khúc xạ, Đại học Y Dược TP. HCM (2000)</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Trần Thị Thảo Ly",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong lĩnh vực Mắt</p> <p>Bác sĩ Chuyên khoa Mắt, khoa Khám, Bệnh viện Mắt Cao Thắng</p> <p>Bác sĩ có nhiều chứng chỉ khám và điều trị các bệnh lý về Mắt </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/114511-bac-sy-thao-ly-cao-thang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trần Thị Thảo Ly</strong></h2> <ul> <li>Gần 20 năm kinh nghiệm trong Chuyên khoa Mắt</li> <li>Bác sĩ Chuyên khoa Mắt, khoa Khám, Bệnh viện Mắt Cao Thắng</li> <li>Bác sĩ có nhiều chứng chỉ khám và điều trị các bệnh lý về Mắt</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Mắt, khoa Khám, Bệnh viện Mắt Cao Thắng (2014 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Dịch kính võng mạc, Bệnh viện Mắt Trung Ương (2021)</li> <li>Kỹ thuật điều trị Laser Quang Đông võng mạc, Bệnh viện Mắt TP. HCM (2019)</li> <li>Chẩn đoán & điều trị một số bệnh lý võng mạc tăng VEGF, Bệnh viện Mắt TP. HCM (2017)</li> <li>Laser-Yag chuyên ngành Nhãn khoa, Bệnh viện Chợ Rẫy (2017)</li> <li>Phẫu thuật Phaco, Đại học Y Dược TP. HCM (2013)</li> <li>Phẫu thuật viên Phaco, Đại học Y Dược TP. HCM (2011)</li> <li>Phẫu thuật thể thủy tinh đục ngoài bao - Đặt kính nội nhãn, Bệnh viện Mắt TP. HCM (2006)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Biến chứng Phaco dưới góc nhìn Bác sĩ dịch kính võng mạc, Tổng hội y học Việt Nam (2021)</li> <li>ANTI - VEGF trong điều trị các bệnh lý đáy mắt: Góc nhìn từ thực hiện lâm sàng, Hội nhãn khoa Việt Nam (2018)</li> <li>Chất lượng thị giác: Ưu tiên hàng đầu của bác sĩ Nhãn khoa, Hội Y học TP. HCM (2018)</li> <li>Sử dụng OZURDEX trong các bệnh lý võng mạc, Bệnh viện Mắt TP. HCM (2017)</li> <li>Tiếp cận toàn diện chẩn đoán & điều trị rối loạn chức năng tuyến Meibomius - Khô mắt, Bệnh viện Chợ Rẫy (2017)</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Xuân Hương",
                description:
                    "<p>15 năm kinh nghiệm trong Chuyên khoa Mắt</p> <p>Trưởng khoa Cận lâm sàng, Bệnh viện Mắt Cao Thắng</p> <p>Bác sĩ có nhiều chứng chỉ trong khám và điều trị các bệnh về Mắt</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/115539-bac-sy-xuan-huong-cao-thang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trần Thị Thảo Ly</strong></h2> <ul> <li>15 năm kinh nghiệm trong Chuyên khoa Mắt</li> <li>Trưởng khoa cận lâm sàng, Bệnh viện Mắt Cao Thắng</li> <li>Bác sĩ có nhiều chứng chỉ trong khám và điều trị các bệnh về Mắt</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám, điều trị tất cả các bệnh về mắt</p> <p><strong>Chuyên sâu về các bệnh lý: Dịch kính - võng mạc</strong></p> <ul> <li>Cắt dịch kính, bóc màng trước võng mạc</li> <li>Cắt dịch kính, khí nội nhãn điều trị lỗ hoàng điểm</li> <li>Cắt dịch kính, Laser nội nhãn, lấy dị vật nội nhãn</li> <li>Phẫu thuật bong võng mạc, cắt dịch kính, laser nội nhãn, dầu/khí nội nhãn</li> </ul> <p><strong>Phẫu thuật đặc biệt</strong></p> <ul> <li>Lấy thể thủy tinh sa, lệch bằng PP Phaco</li> <li>Phối hợp cắt dịch kính đặt IOL</li> <li>Phẫu thuật thủy tinh thể bằng PP phaco và femto đặt IOL</li> <li>Phẫu thuật viên Phaco độc lập</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Cận lâm sàng, Bệnh viện Mắt Cao Thắng (2013 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>PT võng mạc dịch kính cơ bản, Bệnh viện Mắt Đà Nẵng (2020)</li> <li>Kỹ thuật mổ Ấn độn điều trị Bong võng mạc, Bệnh viện Mắt TP. HCM (2020)</li> <li>Laser Bán phần trước, Bệnh viện Chợ Rẫy (2012)</li> <li>Phaco Căn bản, Bệnh viện Mắt TP. HCM (2009)</li> <li>Siêu âm trong nhãn khoa, Bệnh viện Mắt TP. HCM (2007)</li> </ul>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám mắt tại Bệnh viện Mắt Cao Thắng",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Bệnh viện được trang bị những máy móc khám - điều trị hiện đại</p> <p>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/11/02/140820-logo-mat-cao-thang.png",
                introduction:
                    "<h2><strong>Khám mắt tại Bệnh viện Mắt Cao Thắng</strong></h2> <ul> <li>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</li> <li>Hỗ trợ đăng ký khám trực tuyến, đặt lịch khám bệnh</li> <li>Giảm thời gian chờ đợi, ưu tiên khám nhanh</li> <li>Bệnh viện được trang bị những máy móc khám - điều trị hiện đại</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Dịch kính võng mạc</strong></p> <ul> <li>Bong võng mạc</li> <li>Thoái hóa võng mạc</li> <li>Thoái hóa dịch kính võng mạc</li> <li>Bệnh võng mạc đái tháo đường</li> <li>Bệnh thoái hóa hoàng điểm tuổi già</li> <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li> <li>Viêm màng bồ đào</li> <li>Viêm nội nhãn</li> <li>Xuất huyết dịch kính</li> </ul> <p><strong>Chấn thương</strong></p> <ul> <li>Chấn thương mắt</li> <li>Chấn thương mi</li> <li>Chấn thương lệ đạo</li> <li>Dị vật kết giác mạc</li> <li>Dị vật nội nhãn</li> </ul> <p><strong>Các bệnh lí về mắt</strong></p> <ul> <li>Mắt hột</li> <li>Khám, điều trị bệnh thiên đầu thống (glocom)</li> </ul> <p><strong>Tật khúc xạ</strong></p> <ul> <li>Cận thị</li> <li>Nhược thị</li> <li>Viễn thị</li> <li>Lão thị</li> <li>Loạn thị</li> </ul> <p><strong>Các rối loạn về mắt</strong></p> <ul> <li>Hội chứng khô mắt</li> <li>Rối loạn ở hốc mắt</li> <li>Rối loạn tuyến lệ</li> <li>Tăng nhãn áp</li> </ul> <p><strong>Các bệnh lí khác về mắt</strong></p> <ul> <li>Quặm mi</li> <li>Sa mí mắt</li> <li>Viêm kết mạc</li> <li>Lác mắt</li> <li>Mộng thịt</li> <li>Song thị</li> <li>Viêm giác mạc</li> <li>Viêm mi mắt</li> <li>Bong võng mạc</li> <li>Rách võng mạc</li> <li>Đục thủy tinh thể</li> </ul> <p><strong>Thủ thuật</strong> </p> <ul> <li>Lấy sạn vôi kết mạc</li> <li>Thông lệ đạo 1 mắt</li> <li>Tiêm cạnh nhãn cầu</li> <li>Khâu kết mạc</li> <li>Khâu vết thương da mi</li> </ul> <h2><strong>Bệnh viện Chuyên khoa Mắt Cao Thắng</strong></h2> <p>Bệnh viện Chuyên khoa Mắt Cao Thắng là một trong những cơ sở khám và điều trị về chuyên khoa Mắt có uy tín tại TP. Hồ Chí Minh. Năm 2009, bệnh viện đạt tiêu chuẩn JCI của Mỹ đánh dấu cột mốc là bệnh viện đầu tiên đạt được tiêu chuẩn này tại Việt Nam. Ngoài ra Bệnh viện còn là thành viên của WAEH (World Association of Eye Hospitals), thành viên của AAEH (Asean Association of Eye Hospitals).</p> <h3><strong>Danh sách bác sĩ khám Mắt tại Bệnh viện Mắt Cao Thắng</strong></h3> <p>Người bệnh được khám bởi một trong các bác sĩ sau:</p>",
                clinic_id: "d5e82496-807b-4e62-a8da-2aadb0b4aeee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Tại Trung Tâm Tiêu hóa Doctor Check",
                description:
                    "<p>Bác sĩ chuyên sâu khám tiêu hóa đến từ các Bệnh viện lớn như Đại Học Y Dược, Chợ Rẫy,...</p> <p>Chuyên sâu: Nội soi dạ dày không đau, đại tràng không đau, khám và điều trị bệnh lý tiêu hóa, tầm soát ung thư tiêu hóa,... và các bệnh lý tiêu hóa khác.</p> <p>Phòng khám không nhận khám nhi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/08/26/092249-doctor-check.jpg",
                introduction:
                    "<h2><strong>Khám Tại Trung Tâm Tiêu hóa Doctor Check</strong></h2> <ul> <li>Bác sĩ chuyên sâu khám tiêu hóa đến từ các Bệnh viện lớn như Đại Học Y Dược, Chợ Rẫy,...</li> <li>Chuyên sâu: Nội soi dạ dày không đau, đại tràng không đau, khám và điều trị bệnh lý tiêu hóa, tầm soát ung thư tiêu hóa,... và các bệnh lý tiêu hóa khác.</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám tiêu hóa và tầm soát ung thư tiêu hóa</li> <li>Các bệnh lý về dạ dày: Trào ngược dạ dày thực quản, đau dạ dày, viêm dạ dày lâu năm, đau rát vùng thượng vị, ợ nóng, ợ hơi, ợ chua, chướng bụng, đầy hơi, ăn nhanh no, nhiễm khuẩn HP (H. Pylori) </li> <li>Các bệnh lý về đại trực tràng: Tiêu chảy, táo bón, tiêu chảy xen kẽ táo bón, tiêu ra máu, đau bụng, chướng bụng, đầy hơi </li> <li>Nội soi ống tiêu hóa và cắt polyp qua nội soi</li> <li>Chẩn đoán hình ảnh tiêu hoá</li> <li>Thăm dò chức năng tiêu hoá</li> </ul> <h2><strong>Trung Tâm Nội Soi & Chẩn Đoán Bệnh Lý Tiêu Hóa Doctor Check</strong></h2> <p>Trung tâm nội soi và chẩn đoán bệnh lý Tiêu hoá Doctor Check là đơn vị chuyên sâu về nội soi tiêu hóa, 100% bác sĩ nội soi tại Doctor Check được tập huấn chuyên sâu về nội soi chẩn đoán bệnh lý ống tiêu hoá và tầm soát ung thư sớm của ống tiêu hóa.</p>",
                clinic_id: "dc4f5c0d7-4b32-4a93-8b7f-b9be7c469794",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Đặng Thị Như Quỳnh",
                description:
                    "<p>Nguyên Phó trưởng khoa Phẫu thuật, Bệnh viện Mắt Sài Gòn - Hà Nội </p> <p>Hiện tại là Phó Giám đốc chuyên môn Bệnh viện Mắt Quốc tế DND</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/04/04/185150bac-si-dang-thi-nhu-quynh.jpeg",
                introduction:
                    "<h2><strong>Thạc sĩ - Bác sĩ Đặng Thị Như Quỳnh</strong></h2> <ul> <li>Bác sĩ Chuyên ngành Nhãn khoa</li> <li>Phó Giám đốc chuyên môn Bệnh viện Mắt Quốc tế DND (2017 – nay)</li> <li>Trưởng Khoa Phẫu thuật Bệnh viện Mắt Quốc tế DND (2013 – nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Hà Nội (2005)</li> <li>Tốt nghiệp Thạc sĩ Nhãn khoa (2010) </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Giám đốc chuyên môn Bệnh viện Mắt Quốc tế DND (2017 – nay)</li> <li>Trưởng Khoa Phẫu thuật Bệnh viện Mắt Quốc tế DND (2013 – nay)</li> <li>Phó trưởng Khoa Phẫu thuật, Bệnh viện Mắt Quốc Tế DND (2011- 2013)</li> <li>Phó trưởng Khoa Phẫu thuật, Bệnh viện Mắt Sài Gòn - Hà Nội (2006 - 2010)</li> </ul> <h3><strong>Giải thưởng/Chứng nhận</strong></h3> <ul> <li>Chứng nhận tham gia khóa đào tạo phẫu thuật Phaco cơ bản</li> <li>Chứng chỉ phẫu thuật Lasik trên máy NIDEK</li> <li>Chứng nhận hoàn thành khóa học về công nghệ phẫu thuật ReLEx SMILE, ReLEx FLEX, Femto-Lasik trên hệ thống máy VISUMAX (CarlZeiss)</li> <li>Hoàn thành khóa học ESASO chuyên đề Dịch kính võng mạc tại Việt Nam</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Thế mạnh</strong></p> <ul> <li>Phẫu thuật Phaco</li> <li>Phuẫt thuật Tật khúc xạ</li> <li>Phẫu thuật Dịch kính võng mạc</li> <li>Phẫu thuật tạo hình vùng mắt</li> </ul>",
                clinic_id: "45a6b151-4613-4e48-bdc7-1aa7ea18d007",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Phạm Thị Hằng",
                description:
                    "<p>Nguyên Phó trưởng Khoa Khúc xạ – Lasik, Bệnh viện mắt Sài Gòn - Hà Nội </p> <p>Hiện là Trưởng Khoa Khúc xạ - Lasik, Bệnh viện Mắt Quốc tế DND</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/103325-ths-pham-thi-hang.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Phạm Thị Hằng</strong></h2> <ul> <li>Thạc sĩ chuyên ngành nhãn khoa</li> <li>Trưởng Khoa Khúc xạ - Lasik tại Bệnh viện mắt Quốc Tế DND</li> <li>Chứng chỉ phẫu thuật Lasik trên máy NIDEK</li> <li>Chứng nhận hoàn thành khóa học về công nghệ phẫu thuật ReLEx SMILE, ReLEx FLEX, Femto-Lasik trên hệ thống máy VISUMAX (CarlZeiss).</li> <li>Chứng chỉ điều chỉnh khúc xạ bằng kính Ortho-K</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Công tác tại Khoa Khúc xạ – Lasik, Bệnh viện mắt Sài Gòn - Hà Nội (2006 – 2008)</li> <li>Phó trưởng Khoa Khúc xạ – Lasik, Bệnh viện mắt Sài Gòn - Hà Nội (2008 - 2010)</li> <li>Phó trưởng Khoa Khúc xạ – Lasik, Bệnh viện mắt Quốc Tế DND (2011 - 2016)</li> <li>Trưởng Khoa Khúc xạ - Lasik, Bệnh viện Mắt Quốc tế DND (2017 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y khoa Thái Nguyên (2005)</li> <li>Tốt nghiệp Thạc sĩ Nhãn khoa (2010)</li> </ul> <h3><strong>Các chứng chỉ trong nước, ngoài nước</strong></h3> <ul> <li>Chứng chỉ phẫu thuật Lasik trên máy NIDEK</li> <li>Chứng nhận hoàn thành khóa học về công nghệ phẫu thuật ReLEx SMILE, ReLEx FLEX, Femto-Lasik trên hệ thống máy VISUMAX (CarlZeiss)</li> <li>Chứng chỉ điều chỉnh khúc xạ bằng kính Ortho-K</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Thế mạnh khám, điều trị và phẫu thuật Tật khúc xạ</strong></p> <p><strong>Tật khúc xạ</strong></p> <ul> <li>Cận thị</li> <li>Nhược thị</li> <li>Viễn thị</li> <li>Lão thị</li> <li>Loạn thị</li> </ul>",
                clinic_id: "45a6b151-4613-4e48-bdc7-1aa7ea18d007",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Đoàn Anh",
                description:
                    "<p>Từng công tác tại Bệnh viện Mắt Sài Gòn - Hà Nội</p> <p>Hiên tại là Phó trưởng khoa Đáy mắt, Bệnh Viện Mắt Quốc Tế DND</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/113030-ths-doan-anh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Đoàn Anh</strong></h2> <ul> <li>Phó trưởng Khoa Đáy mắt Bệnh Viện Mắt Quốc Tế DND</li> <li>Gần 10 năm kinh nghiệm trong điều trị các bệnh lí đáy mắt</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó trưởng Khoa Đáy mắt Bệnh Viện Mắt Quốc Tế DND (2011 - nay)</li> <li>Bác sĩ Khoa Đáy mắt, Bệnh viện Mắt Quốc tế DND (2011)</li> <li>Công tác tại Bệnh viện Mắt Sài Gòn - Hà Nội (2008 – 2010)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Dược Huế (2008)</li> <li>Tốt nghệp Thạc sĩ Nhãn khoa (2012)</li> </ul> <h3><strong>Chứng chỉ trong nước, ngoài nước</strong></h3> <ul> <li>Hoàn thành Khóa học chuyên đề Bệnh đục thể thủy tinh tại Bệnh viện Mắt Trung ương</li> <li>Hoàn thành Khóa học chuyên đề Mắt trẻ em tại Bệnh viện Mắt Trung ương</li> <li>Hoàn thành Khóa học chuyên đề Thần kinh nhãn khoa tại Bệnh viện Mắt Trung ương</li> <li>Hoàn thành khóa học theo chương trình đào tạo liên tục chuyên ngành chẩn đoán hình ảnh tại Bệnh Viện Mắt Trung ương (2014)</li> <li>Hoàn thành Khóa học lớp đào tạo chuyên đề Bệnh lý giác mạc tại Bệnh viện Mắt Trung ương</li> <li>Hoàn thành Khóa học về Cắt dịch kính tại Bệnh viện Mắt Trung ương</li> <li>Hoàn thành khóa học ESASO chuyên đề Dịch kính võng mạc tại Việt Nam (2016)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Các bệnh lý đáy mắt - võng mạc</strong></p> <ul> <li>Bệnh lý võng mạc cao huyết áp</li> <li>Tắc động mạch trung tâm võng mạc</li> <li>Tắc tĩnh mạch trung tâm võng mạc</li> <li>Viêm mạch máu võng mạc (Bệnh Eales)</li> <li>U mạch võng mạc</li> <li>Bong võng mạc</li> <li>Thoái hóa võng mạc</li> <li>Thoái hóa dịch kính võng mạc</li> <li>Bệnh võng mạc đái tháo đường</li> <li>Bệnh thoái hóa hoàng điểm tuổi già</li> <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li> <li>Viêm màng bồ đào</li> <li>Viêm nội nhãn</li> <li>Xuất huyết dịch kính</li> </ul>",
                clinic_id: "45a6b151-4613-4e48-bdc7-1aa7ea18d007",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Bùi Minh Ngọc",
                description:
                    "<p>Nguyên Trưởng khoa Đáy mắt, Bệnh viện Mắt Trung ương</p> <p>Hơn 30 năm kinh nghiệm trong điều trị các bệnh lí Đáy mắt</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/113320-bsckii-bui-minh-ngoc.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Bùi Minh Ngọc</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong điều trị các bệnh lí đáy mắt</li> <li>Nguyên Trưởng khoa Đáy mắt Bệnh viện Mắt Trung ương</li> <li>Được phong tặng danh hiệu Thầy thuốc Ưu tú</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Đáy mắt Bệnh viện Mắt Quốc tế DND (2011 - nay)</li> <li>Nguyên Trưởng khoa Đáy mắt Bệnh viện Mắt Trung ương (2000 - 2004)</li> <li>Nguyên Phó trưởng khoa Đáy mắt Bệnh viện Mắt Trung ương (1982 - 2000)</li> <li>Từng làm việc tại Khoa bán công Bệnh viện Mắt Trung ương (2005 - 2011)</li> <li>Nguyên Trưởng khoa Mắt Bệnh viện Đa khoa tỉnh Tuyên Quang (1974 - 1981)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II Chuyên ngành Nhãn khoa, Đại học Y Hà Nội</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Chuyên ngành Nhãn khoa, Đại học Y Hà Nội</li> <li>Học đại học Y Hà Nội (1967 - 1973)</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Được phong tặng danh hiệu Thầy thuốc Ưu tú (1998)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị các bệnh lí về đáy mắt</strong></p> <p><strong>Dịch kính võng mạc</strong></p> <ul> <li>Bong võng mạc</li> <li>Thoái hóa võng mạc</li> <li>Thoái hóa dịch kính võng mạc</li> <li>Bệnh võng mạc đái tháo đường</li> <li>Bệnh thoái hóa hoàng điểm tuổi già</li> <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li> <li>Viêm màng bồ đào</li> <li>Viêm nội nhãn</li> <li>Xuất huyết dịch kính</li> </ul>",
                clinic_id: "45a6b151-4613-4e48-bdc7-1aa7ea18d007",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Đinh Yên Lục",
                description:
                    "<p>Nguyên Phó trưởng Khoa Khám bệnh, Bệnh viện mắt Sài Gòn - Hà Nội</p> <p>Hiện là Trưởng khoa Khám bệnh, Bệnh viện mắt Quốc tế DND</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/103148-ths-dinh-yen-luc.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Đinh Yên Lục</strong></h2> <ul> <li>Thạc sĩ Chuyên ngành Nhãn khoa - Trưởng Khoa Khám bệnh</li> <li>Trưởng Khoa Khám bệnh, Bệnh viện Mắt Quốc tế DND (2011- nay)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Phó trưởng Khoa Khám bệnh, Bệnh viện mắt Sài Gòn - Hà Nội (2007-2010)</li> <li>Trưởng Khoa Khám bệnh, Bệnh viện Mắt Quốc tế DND (2011- nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ Nhãn khoa (2006)</li> <li>Học bệnh Võng mạc đái tháo đường, Bệnh viện Mắt Quốc gia Singapore (2008-2009)</li> </ul> <h3><strong>Giải thưởng/Chứng nhận:</strong></h3> <ul> <li>Phẫu thuật viên Phaco (Do Bệnh viện Y Dược Thành phố Hồ Chí Minh cấp)</li> <li>Phẫu thuật viên Dịch kính võng mạc (Do Bệnh viện Mắt Trung Ương cấp)</li> <li>Sáng kiến Tuổi trẻ thủ đô (2009)</li> </ul> <h3><strong>Khám và điều trị</strong></h3> <p><strong>Dịch kính võng mạc</strong></p> <ul> <li>Bong võng mạc</li> <li>Thoái hóa võng mạc</li> <li>Thoái hóa dịch kính võng mạc</li> <li>Bệnh võng mạc đái tháo đường</li> <li>Bệnh thoái hóa hoàng điểm tuổi già</li> <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li> <li>Viêm màng bồ đào</li> <li>Viêm nội nhãn</li> <li>Xuất huyết dịch kính</li> </ul>",
                clinic_id: "45a6b151-4613-4e48-bdc7-1aa7ea18d007",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ Vũ Thị Thanh Thủy",
                description:
                    "<p>Nguyên Trưởng khoa Cơ - Xương - Khớp, Bệnh viện Bạch Mai</p> <p>Chủ tịch Hội loãng xương Hà Nội </p> <p>Bác sĩ nhận bệnh nhân từ 18 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/12/31/161245-pgs-vu-thi-thanh-thuy.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Vũ Thị Thanh Thủy</strong></h2> <ul> <li>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa Cơ Xương khớp</li> <li>Bác sĩ từng công tác tại Bệnh viện Bạch Mai</li> <li>Nguyên Trưởng khoa Cơ Xương Khớp - Bệnh Viện Bạch Mai </li> <li>Chủ tịch Hội loãng xương Hà Nội</li> <li>Bác sĩ nhận bệnh nhân từ 18 tuổi trở lên</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Hà Nội năm 1976</li> <li>Bác sĩ Chuyên khoa cấp I năm 1987, chuyên khoa cấp II năm 1991</li> <li>Tiến sỹ Y khoa năm 1997</li> <li>Danh hiệu phó Giáo sư năm 2007</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Tu nghiệp tại Australia về Chuyên ngành Cơ Xương Khớp</li> <li>Tham gia các Hội thảo, đào tạo ngắn hạn về Chuyên ngành Cơ Xương Khớp tại nhiều quốc gia như Mỹ, Pháp, Đức, Indonesia, Thái Lan, Singapore, Malaysia</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ công tác tại Bệnh viện Bạch Mai (Năm 1976-2010)</li> <li>Nguyên trưởng khoa Cơ Xương Khớp - Bệnh Viện Bạch Mai</li> <li>Hiện nay là Trưởng khoa Cơ-Xương-Khớp - Bệnh viện Đông Đô</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Chủ biên cuốn sách: Bệnh lý Cơ Xương Khớp thường gặp</li> <li>Tác giả trên 50 bài báo khoa học về Chuyên ngành Cơ Xương Khớp</li> <li>Tác giả nhiều bài báo về Loãng xương</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Chủ tịch Hội Loãng xương Hà Nội</li> <li>Ủy viên Ban chấp hành Hội Thấp khớp học Việt Nam</li> <li>Thành viên Tổ chức Loãng xương thế giới</li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình</strong></h3> <ul> <li>Thường xuyên tư vấn trên truyền hình VTV2</li> <li>Đài Phát thanh tiếng nói Việt Nam về Cơ Xương Khớp</li> </ul>",
                clinic_id: "1ed3abc5-6ac7-42dd-92ff-359ca827064f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư, Tiến sĩ Nguyễn Lân Việt",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm về khám và điều trị bệnh lý Tim mạch </p> <p>Nguyên Viện trưởng Viện Tim Mạch Quốc Gia</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/10/24/143656-bs-lanviet.jpg",
                introduction:
                    "<h2><strong>Giáo sư, Tiến sĩ Nguyễn Lân Việt</strong></h2> <ul> <li>Phó Chủ tịch Hội Tim mạch Việt Nam</li> <li>Nguyên Hiệu trưởng trường Đại học Y Hà Nội</li> <li>Nguyên Viện trưởng Viện Tim mạch Quốc gia</li> <li>Phó Chủ tịch Hội đồng chuyên môn bảo vệ sức khỏe cán bộ miền Bắc trực thuộc Ban Bảo vệ sức khỏe Trung ương</li> <li>Tổng biên tập tạp chí Tim mạch học</li> <li>Nguyên trưởng bộ môn Tim mạch Đại học Y Hà Nội</li> <li>Chủ tịch Hội đồng cố vấn chuyên môn Bệnh viện Đông Đô</li> <li>Bác sĩ nhận khám mọi độ tuổi </li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh lý Tim Mạch</strong></p> <ul> <li>Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch</li> <li>Các bệnh Nội Tim mạch</li> <li>Rối loạn mỡ máu</li> <li>Bệnh van tim</li> <li>Bệnh cơ tim</li> <li>Khám bệnh mạch máu ngoại biên.</li> <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.</li> <li>Tư vấn sử dụng thuốc chống đông máu.</li> <li>Bệnh cao huyết áp</li> </ul> <p><strong>Bệnh mạch vành</strong></p> <ul> <li>Bệnh mạch vành</li> <li>Bệnh hẹp mạch vành</li> <li>Thiểu năng mạch vành</li> <li>Xơ vữa động mạch</li> <li>Điều trị bệnh mạch vành</li> </ul> <p><strong>Rối loạn mỡ máu</strong></p> <ul> <li>Bệnh mỡ máu cao</li> <li>Rối loạn mỡ máu</li> <li>Tư vấn, điều trị bệnh mỡ máu</li> <li>Rối loạn chuyển hóa</li> <li>Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li> </ul>",
                clinic_id: "1ed3abc5-6ac7-42dd-92ff-359ca827064f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Phạm Thị Hồng Thi",
                description:
                    "<p>Gần 40 năm kinh nghiệm khám và chẩn đoán các bệnh lý tim mạch</p> <p>Nguyên Trưởng khoa điều trị theo yêu cầu, Viện Tim mạch Việt Nam</p> <p>Phó Viện trưởng Viện Tim Mạch Việt Nam</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/05/31/112813-bs-thi-7990-1401246660.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Phạm Thị Hồng Thi</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm khám và chẩn đoán các bệnh lý tim mạch</li> <li>Nguyên Trưởng khoa điều trị theo yêu cầu, Viện Tim mạch Việt Nam</li> <li>Phó Viện trưởng Viện Tim Mạch Việt Nam</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại khoa Can thiệp tim mạch, Bệnh viện Đông Đô</li> <li>Giảng viên kiêm nhiệm bộ môn Tim-Thận-Khớp-Nội tiết, Học viện Quân Y</li> <li>Phó Bí thư Chi bộ Viện Tim mạch Việt Nam</li> <li>Phó Viện trưởng Viện Tim Mạch Việt Nam</li> <li>Nguyên trưởng khoa điều trị theo yêu cầu, Viện Tim mạch Việt Nam</li> </ul> <h3><strong>Sách, báo và các công trình nghiên cứu khoa học</strong></h3> <ul> <li>Phong hàm Giáo sư Y học</li> <li>Nghiên cứu đặc điểm lâm sàng và cận lâm sàng ở bệnh nhân hẹp van hai lá có huyết khối trong nhĩ trái trên siêu âm-Doppler tim (Chủ nhiệm đề tài, 2009)</li> <li>Đề tài nghiên cứu về bệnh mạch vành Đa quốc gia năm 2010-2015</li> <li>Dự án Nghiên cứu triển khai ghép tim trên người lấy từ người cho chết não (Thành viên tổ tuyển chọn và điều trị nội khoa bệnh nhân ghép tim</li> <li>Đề tài khoa học cấp Nhà nước 2009-2010)…</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh lý Tim Mạch</strong></p> <ul> <li>Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch</li> <li>Các bệnh Nội Tim mạch</li> <li>Rối loạn mỡ máu</li> <li>Bệnh van tim</li> <li>Bệnh cơ tim</li> <li>Khám bệnh mạch máu ngoại biên.</li> <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.</li> <li>Tư vấn sử dụng thuốc chống đông máu.</li> <li>Bệnh cao huyết áp</li> </ul>",
                clinic_id: "1ed3abc5-6ac7-42dd-92ff-359ca827064f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS Hoàng Trung Vinh",
                description:
                    "<p>Nhiều năm kinh nghiệm khám điều trị các vấn đề về Thận - Tim mạch - Nội tiết</p> <p>Nguyên Chủ nhiệm khoa Thận, Lọc máu - Bệnh viện Quân y 103 - Học viện Quân y</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/26/093910-pgs-vinh1.png",
                introduction:
                    "<h2><strong>PGS, TS Hoàng Trung Vinh</strong></h2> <ul> <li>Nhiều năm kinh nghiệm khám điều trị các vấn đề về Thận - Tim mạch - Nội tiết</li> <li>Nguyên Chủ nhiệm khoa Thận, Lọc máu - Bệnh viện Quân y 103 - Học viện Quân y</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh cầu thận mạn tính: do viêm, đái tháo đường type 1, type 2</li> <li>Các bệnh lý của đường tiết niệu</li> <li>Các bệnh nội tiết, đái tháo đường, gout, rối loạn chuyển hóa (mỡ máu cao, tăng acid uric)</li> <li>Các bệnh tăng huyết áp, huyết áp thấp, ngất</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Quốc tế DoLife (Nay)</li> <li>Nguyên Chủ nhiệm khoa Thận, Lọc máu - Bệnh viện Quân y 103 - Học viện Quân y</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS, TTUT Hà Hoàng Kiệm",
                description:
                    "<p>Chủ nhiệm Bộ môn Vật lý trị liệu và Phục hồi chức năng - Bệnh viện Quân y 103, Học viện Quân y Giảng viên Bộ môn Nội tại Học viện Quân y</p> <p>Giảng viên thỉnh giảng Bộ môn Nội - Đại học Y khoa Huế</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/26/093909-pgs-kiem1.png",
                introduction:
                    "<h2><strong>PGS, TS, TTUT Hà Hoàng Kiệm</strong></h2> <ul> <li>Chủ nhiệm Bộ môn Vật lý trị liệu và Phục hồi chức năng - Bệnh viện Quân y 103, Học viện</li> <li>Quân y Giảng viên Bộ môn Nội tại Học viện Quân y</li> <li>Giảng viên thỉnh giảng Bộ môn Nội - Đại học Y khoa Huế</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><strong>Vật lý trị liệu và phục hồi chức năng sau phẫu thuật Chấn thương chỉnh hình:</strong><ul> <li>Sau phẫu thuật tái tạo dây chằng khớp gối, nội soi khớp gối</li> <li>Sau phẫu thuật thay khớp háng, khớp gối nhân tạo</li> <li>Sau phẫu thuật nối gân gấp duỗi</li> <li>Sau phẫu thuật kết hợp xương</li> </ul> </li> <li><strong>Vật lý trị liệu và phục hồi chức năng cơ xương khớp do các chấn thương không cần phẫu thuật:</strong><ul> <li>Sau chấn thương, vỡ xương bánh chè</li> <li>Sau trật khớp</li> <li>Điều trị di chứng sau chấn thương gây cứng khớp: háng, gối, cổ chân, vai, khuỷu, cổ bàn ngón tay</li> <li>Điều trị phục hồi chức năng cho bệnh nhân: hội chứng vai gáy, viêm quanh khớp vai, vẹo cổ do tật cơ, viêm bao gân, các chứng đau do viêm khớp…</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Nội, tim, thận, khớp - Bệnh viện Quốc tế Dolife</li> <li>Chủ nhiệm Bộ môn Vật lý Trị liệu và Phục hồi Chức năng - Bệnh viện Quân y 103</li> <li>Công tác tại Bộ môn - Khoa Phục hồi chức năng - Học viện Quân y (2002-2010)</li> <li>Chủ nhiệm Bộ môn Phục hồi chức năng; giảng viên Bộ môn Nội - Học viện Quân y </li> <li>giảng viên thỉnh giảng Bộ môn Nội Đại học Y khoa Huế, Đại học Huế</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Vật lý trị liệu và phục hồi chức năng, Tự điều trị và dự phòng đau thắt lưng không dùng thuốc</li> <li>Sáng kiến kỹ thuật cấp Bộ Quốc phòng (2002)</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Giải nhất VIFOTECH về Khoa học Công Nghệ (2010)</li> <li>Giải thưởng Hồ Chí Minh về Khoa học và Công nghệ (2005)</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS, BSCKII Đoàn Văn Đệ",
                description:
                    "<p>Gần 50 năm kinh nghiệm khám và điều trị Tim - Thận - Khớp - Nội tiết</p> <p>Phó Chủ tịch Hội Thấp khớp học Việt Nam</p> <p>Nguyên Chủ nhiệm Bộ môn Tim - Thận - Khớp - Nội tiết, Bệnh viện Quân y 103</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/27/092150-pgs-de1.png",
                introduction:
                    "<h2><strong>PGS, TS, BSCKII Đoàn Văn Đệ</strong></h2> <ul> <li>Gần 50 năm kinh nghiệm khám và điều trị Tim - Thận - Khớp - Nội tiết</li> <li>Phó Chủ tịch Hội Thấp khớp học Việt Nam</li> <li>Nguyên Chủ nhiệm Bộ môn Tim - Thận - Khớp - Nội tiết, Bệnh viện Quân y 103</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khớp: Các bệnh khớp viêm, thoái hóa khớp, bệnh collagen, hội chứng đau thắt lưng, thoát vị đĩa đệm</li> <li>Nội tiết Đái tháo đường và rối loạn chuyển hóa</li> <li>Các biến chứng đái tháo đường, bệnh lý tuyến giáp</li> <li>Tim mạch: Các bệnh van tim, thiếu máu cục bộ cơ tim</li> <li>Thận: Hội chứng thận hư, hội chứng suy thận cấp, bệnh thận mạn tính, suy thận</li> <li>Các bệnh nội khoa khác bệnh lý tiêu hóa, gan, mật</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chủ tịch Hội Thấp khớp học Hà Nội (2012 - nay)</li> <li>Phó Chủ tịch Hội Thấp khớp học Việt Nam (2002 - nay)</li> <li>Giảng viên Bộ môn Tim - thận - khớp - nội tiết, Bệnh viện Quân Y 103 (2016 - 2019)</li> <li>Chủ nhiệm bộ môn Bộ môn Tim - thận - khớp - nội tiết, Bệnh viện Quân Y 103 (2008 - 2016)</li> <li>Phụ trách chủ nhiệm bộ môn Bộ môn khoa Khớp- nội tiết, Bệnh viện Quân Y 103 (2006 - 2008)</li> <li>Chủ nhiệm khoa Khoa Tim - thận - khớp - nội tiết, Bệnh viện Quân Y 103 (2001 - 2006)</li> <li>Phó Chủ nhiệm Bộ môn Tim -thận - khớp - nội tiết, Bệnh viện Quân Y 103 (1996 - 2001)</li> <li>Bác sĩ điều trị, giảng viên Khoa Tim -thận - khớp - nội tiết, Bệnh viện Quân Y 103 (1991 - 1996)</li> <li>Bác sĩ điều trị giảng viên Khoa Tim - thận - khớp - nội tiết, Bệnh viện Quân Y 103 (1980 - 1984)</li> <li>Bác sĩ điều trị học viên chuyên khoa cấp 1 Khoa Tim - thận - khớp - nội tiết, Bệnh viện Quân Y 103 (1978 - 1980)</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Danh hiệu Thầy thuốc Nhân dân (4/2021)</li> <li>Huân chương Bảo vệ Tổ quốc hạng 2 (2019)</li> <li>Danh hiệu Thầy thuốc ưu tú (2005)</li> <li>Học hàm Phó Giáo sư (2003)</li> <li>Huân chứng kháng chiến Hạng nhất (2003)</li> <li>Giải nhất hội thi sáng tạo tuổi trẻ ngành y dược khu vực phía bắc (1981)</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS, BS Đồng Khắc Hưng",
                description:
                    "<p>Nhiều năm kinh nghiệm về lĩnh vực Hô hấp - Phổi</p> <p>Nguyên Phó Giám đốc Bệnh viện Quân y 103</p> <p>Nguyên Phó Giám đốc Học viện Quân y</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/26/093911-pgs-hung1.png",
                introduction:
                    "<h2><strong>PGS, TS, BS Đồng Khắc Hưng</strong></h2> <ul> <li>Nhiều năm kinh nghiệm về lĩnh vực Hô hấp - Phổi</li> <li>Nguyên Phó Giám đốc Bệnh viện Quân y 103</li> <li>Nguyên Phó Giám đốc Học viện Quân y</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ho, khó thở, đau ngực, ho ra máu không rõ nguyên nhân</li> <li>Chẩn đoán điều trị bệnh phổi tắc nghẽn mạn tính, hen phế quản, viêm phổi, tràn dịch màng phổi, bệnh phổi kẽ</li> <li>Chẩn đoán ung thư sớm</li> <li>Điều trị tế bào gốc đối với các bệnh phổi mạn tính</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Quốc tế DoLife (Nay)</li> <li>Nguyên Phó Giám đốc Học viện Quân y</li> <li>Nguyên Phó Giám đốc Bệnh viện Quân y 103</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS, BSCKII Nguyễn Minh Hiện",
                description:
                    "<p>Gần 50 năm kinh nghiệm Nội Thần kinh, đặc biệt là đột quỵ não</p> <p>Phó Chủ tịch Hội đột quỵ Việt Nam, Chủ tịch hội đột quỵ miền Bắc</p> <p>Nguyên Trưởng khoa Đột quỵ não, Bệnh viện Quân Y 103</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/26/093910-pgs-hien1.png",
                introduction:
                    "<h2><strong>PGS, TS, BSCKII Nguyễn Minh Hiện</strong></h2> <ul> <li>Gần 50 năm kinh nghiệm nội Thần kinh, đặc biệt là đột quỵ não</li> <li>Phó Chủ tịch Hội đột quỵ Việt Nam, Chủ tịch hội đột quỵ miền Bắc</li> <li>Nguyên Trưởng khoa Đột quỵ não, Bệnh viện Quân Y 103</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><strong>Các bệnh lý Nội thần kinh:</strong> Chuyên gia tư vấn dự báo, dự phòng và điều trị đột quỵ não, tăng huyết áp…</li> <li><strong>Các bệnh lý thần kinh – cột sống</strong>:<ul> <li>Hội chứng cổ vai – cánh tay</li> <li>Hội chứng thắt lưng hông do thoái hóa cột sống</li> <li>Thoát vị đĩa đệm</li> <li>Parkinson...</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Chủ tịch Hội đột quỵ Việt Nam, Chủ tịch hội đột quỵ miền Bắc</li> <li>Bác sĩ Chuyên khoa Nội Thần kinh và Đột quỵ - Bệnh viện Đa khoa 16A Hà Đông</li> <li>Nguyên Trưởng khoa Đột quỵ não, Bệnh viện Quân Y 103</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS, BSCKII Nguyễn Hoàng Thanh",
                description:
                    "<p>Chuyên gia về chẩn đoán và điều trị hóa chất bệnh ung thư: Ung thư máu, Ung thư hạch, chẩn đoán điều trị chống độc,...</p> <p>Nguyên Trưởng khoa Bệnh Máu - Độc xạ và Bệnh Nghề nghiệp, Bệnh viện Quân Y 103</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/26/093911-pgs-thanh1.png",
                introduction:
                    "<h2><strong>PGS, TS, BSCKII Nguyễn Hoàng Thanh</strong></h2> <ul> <li>Chuyên gia về chẩn đoán và điều trị hóa chất bệnh ung thư: Ung thư máu, Ung thư hạch, chẩn đoán điều trị chống độc,...</li> <li>Nguyên Trưởng khoa Bệnh Máu - Độc xạ và Bệnh Nghề nghiệp, Bệnh viện Quân Y 103</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh về máu, độc</li> <li>Ung thư: nhất là ung thư máu, ung thư hạch</li> <li>Bệnh nghề nghiệp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Ung bướu, Bệnh Viện Quốc Tế DoLife (Nay)</li> <li>Nguyên Trưởng khoa Bệnh Máu - Độc xạ và Bệnh Nghề nghiệp, Bệnh viện Quân Y 103</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS, TS Trần Việt Tú",
                description:
                    "<p>Hơn 40 năm kinh nghiệm khám và điều trị Nội Tiêu hóa</p> <p>Nguyên Chủ nhiệm Bộ môn Nội Tiêu hóa, Học viện Quân Y</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/26/093910-pgs-tu1.png",
                introduction:
                    "<h2><strong>PGS, TS Trần Việt Tú</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm khám và điều trị Nội Tiêu hóa</li> <li>Nguyên Chủ nhiệm Bộ môn Nội Tiêu hóa, Học viện Quân Y</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><strong>Khám và điều trị dạ dày</strong><ul> <li>Đau thượng vị </li> <li>Viêm dạ dày</li> <li>Nhiễm Helicobacter pylori dạ dày (HP)</li> <li>Trào ngược dạ dày thực quản (Gerd)</li> <li>Polyp dạ dày </li> <li>Táo bón</li> <li>Khó nuốt</li> <li>Khó tiêu</li> <li>Ợ nóng, Ợ chua</li> <li>Táo bón</li> <li>Khám và điều trị dạ dày </li> </ul> </li> <li><strong>Khám và điều trị đại tràng, trực tràng</strong><ul> <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li> <li>Viêm đại tràng</li> <li>Viêm đại tràng màng giả</li> <li>Viêm loét đại tràng</li> <li>Đi ngoài ra máu </li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nhận chức danh Bác sĩ Cao cấp (2013)</li> <li>Nhận học hàm Phó Giáo sư (2008)</li> <li>Chủ nhiệm Bộ môn Nội Tiêu hóa, Học viện Quân Y (2007 - 2016)</li> <li>Phó Chủ nhiệm Bộ môn Nội Tiêu hóa, Học viện Quân Y (2003 - 2006)</li> <li>Bác sĩ điều trị, giảng viên bộ môn Nội Tiêu hóa, Học viện Quân Y (1982 - 2002)</li> <li>Bác sĩ điều trị (1979 - 1981)</li> </ul> <h3><strong>Các danh hiệu, phần thưởng, công trình nghiên cứu khoa học</strong></h3> <ul> <li>Là chủ nhiệm 04 đề tài cấp Bộ và tương đương, 07 đề tài cấp cơ sở, tham gia 04 đề tài cấp Nhà nước</li> </ul>",
                clinic_id: "294fb1aa-4486-47f5-8016-0b6a9826e8a8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí",
                description:
                    "<p>Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định</p> <p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp</p> <p>Bác sĩ nhận khám cho bệnh nhân từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/06/15/152136-bs-tri.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí</strong></h2> <ul> <li>Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định</li> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định (2010 - 2018)</li> <li>Bác sĩ khoa Hồi sức Nội, Bệnh viện Nhân dân Gia Định (2006 - 2009)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Nội khoa, Đại học Y Hà Nội (2020)</li> <li>Tốt nghiệp Thạc sĩ chuyên ngành Nội Tổng quát, Đại học Y khoa Phạm Ngọc Thạch (2014)</li> <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y Dược TP.HCM (2006)</li> <li>Chứng chỉ Sơ bộ Cơ xương khớp, Bệnh viện Chợ Rẫy (2014)</li> <li>Tu nghiệp chuyên môn tại các nước Hà Lan, Úc, Bồ Đào Nha, Dubai,...</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Tỷ lệ và đặc điểm của hội chứng chuyển hóa trên bệnh nhân gút, Tạp chí y học TP Hồ Chi Minh (2020)</li> <li>Đánh giá kết quả điều trị của Tocillizumab (Actemra) ở bệnh nhân viêm khớp dạng thấp, Tạp chí y học TP Hồ Chí Minh (2018)</li> <li>Tiến bộ liệu pháp sinh học trong bệnh khớp học, Tạp chí y học TP Hồ Chí Minh (2016)</li> <li>Tăng acid uric không triệu chứng, Tạp chí y học TP Hồ Chí Minh (2019)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các mặt bệnh:</p> <ul> <li>Viêm khớp, thoái hóa khớp: đau khớp, gai trong khớp,...</li> <li>Đau gót chân, gai gót chân</li> <li>Gai cột sống, thoái hóa cột sống: đau lưng cấp, mãn tính</li> <li>Hội chứng ống cổ tay, đau thần kinh tọa: tê tay, tê chân,...</li> <li>Viêm gân: ngón tay không co giãn được</li> <li>Viêm khớp dạng thấp</li> <li>Viêm cột sống dính khớp</li> <li>Lupus khớp</li> <li>Loãng xương</li> <li>Gout</li> <li>U hoạch dịch quanh khớp</li> <li>Dãn tĩnh mạch chân</li> <li>Viêm khớp vẩy nến</li> </ul>",
                clinic_id: "14250de6-0fce-48c4-a6a2-a5ef61f73b66",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Võ Thị Minh Hảo",
                description:
                    '<p>Bác sĩ Võ Minh Hảo tốt nghiệp Bác sĩ Chuyên khoa Răng Hàm Mặt, Đại học Y Hà Nội (2004 - 2010).</p> <p>Bác sĩ đầu tiên khởi xướng chương trình 8020 của Nhật Bản tại Việt Nam</p> <p>"Chương trình chăm sóc sức khỏe răng miệng xuyên suốt từ khi sinh ra đến khi cuối đời giúp bạn giữ được 20 răng gốc dù ở tuổi 80".</p>',
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/08/27/142222bac-si-vo-thi-minh-hao.jpg",
                introduction:
                    "<ul> <li>Bác sĩ Võ Minh Hảo là người giàu kinh nghiệm khám chữa bệnh về răng, tâm huyết vì sức khỏe răng miệng trẻ em.</li> <li>Triết lý khám chữa bệnh về răng cho người bệnh của bác sĩ Hảo là: “bảo tồn răng gốc, khởi nguồn vẻ đẹp” hướng đến sự chăm sóc bảo vệ sức khỏe răng miệng trọn đời.</li> <li>Bác sĩ Hảo cũng là người đầu tiên khởi xướng chương trình 8020 của Nhật Bản tại Việt Nam. Chương trình chăm sóc sức khỏe răng miệng xuyên suốt từ khi sinh ra đến khi cuối đời giúp bạn giữ được 20 răng gốc dù ở tuổi 80.</li> </ul> <h2><strong>Quá trình đào tạo về Nha khoa</strong></h2> <p>Bác sĩ Võ Minh Hảo tốt nghiệp Bác sĩ Chuyên khoa Răng Hàm Mặt, Đại học Y Hà Nội (2004 - 2010). </p> <p>Bác sĩ Hảo tham gia hoàn thiện cả lý thuyết và thực tế khám chữa bệnh ở nhiều lĩnh lực kỹ thuật Nha khoa khác nhau.</p> <ul> <li>Chứng chỉ cấy ghép Implant (2012)</li> <li>Chứng chỉ phục hình (2013 - 2014)</li> <li>Chứng chỉ Laser (2014)</li> <li>Chứng chỉ chỉnh nha (2013 - 2014)</li> <li>Chứng chỉ mặt dán sứ Veneer (2018)</li> <li>Chứng chỉ Invisalign (2017)</li> <li>Thẩm mỹ nội nha trong nha khoa (2017)</li> <li>Chứng chỉ Smile Design, Y company (12/2016)</li> <li>Chứng chỉ khớp cắn (2016)</li> </ul> <p>Quá trình đào tạo bài bản, cập nhật kiến thức thường xuyên và trải nghiệm thực tế khám chữa bệnh giúp bác sĩ có cái nhìn tổng thể, khách quan khi đứng trước một vấn đề răng miệng cụ thể của cả người lớn và trẻ em.</p> <h2><strong>Bác sĩ có quá trình công tác gắn bó với nha khoa trẻ em</strong></h2> <p>Bác sĩ Võ Minh Hảo thường xuyên có các hoạt động thăm khám và tư vấn răng miễn phí cho các trẻ. Qua đó góp phần nâng cao hiểu biết, nhận thức về chăm sóc sức khỏe răng miệng cho cộng đồng nói chung và các bạn trẻ nói riêng.</p> <p>Trong số hàng nghìn ca khám và điều trị răng mà người bệnh tìm đến, thì rất nhiều trong số đó là trẻ em gặp các vấn đề về răng như: răng sữa, răng sâu, răng lệch lạc, viêm lợi, nhiệt miệng...</p> <h2><strong>Ưu tiên tư vấn có hệ thống về răng trẻ em</strong></h2> <p>Phương châm của bác sĩ luôn dành sự ưu tiên hướng dẫn khách hàng phương pháp và cách thức bảo vệ sức khỏe răng miệng, ngoài điều trị hướng đến coi trọng phòng ngừa.</p> <p>Bác sĩ tư vấn kỹ cho người bệnh là các bạn trẻ hoặc phụ huynh hiểu rõ vấn đề chứ không chỉ tập trung điều trị.</p> <p>Giúp cho người bệnh nâng cao kỹ năng tự chăm sóc và bảo vệ sức khỏe răng miệng chủ động và lâu dài.</p>",
                clinic_id: "ab9a63cf-ed85-40e5-b44a-7e530f94b9d0",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Sản Phụ Khoa hệ thống Sản phụ khoa Dr.Marie",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm có thâm niên trên 25 năm kinh nghiệm và làm việc trong lĩnh vực chăm sóc sức khỏe cho phụ nữ</p> <p>Bác sĩ công từng công tác tại bệnh viện lớn như: 198, Bệnh viện Quận 7, Bệnh viện phụ sản khánh Hòa, Đà nẵng vv...</p> <p>Hệ thống phòng khám sạch sẽ, quy trình phòng chống nhiễm khuẩn nghiêm ngặt </p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/30/100428-dr-marie1.jpg",
                introduction:
                    "<h2><strong>Khám Sản Phụ Khoa tại hệ thống Sản phụ khoa Dr.Marie</strong></h2> <ul> <li>Đội ngũ bác sĩ giàu kinh nghiệm có thâm niên trên 25 năm công tác và làm việc trong lĩnh vực chăm sóc sức khỏe cho phụ nữ</li> <li>Bác sĩ công từng công tác tại bệnh viện lớn như: 198, Bệnh viện Quận 7, Bệnh viện phụ sản khánh Hòa, Đà Nẵng vv...</li> <li>Hệ thống phòng khám sạch sẽ, quy trình phòng chống nhiễm khuẩn nghiêm ngặt</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Khám chữa bệnh sản phụ khoa</li> <li>Các bệnh lý lây qua đường tình dục</li> <li>Siêu âm sản phụ khoa</li> <li>Cấy/tháo que tránh thai</li> <li>Đặt/tháo vòng tránh thai</li> <li>Viêm nhiễm phụ khoa</li> <li>Viêm lộ tuyến cổ tử cung</li> <li>Bartholin - Đặt vòng mirena</li> <li><strong>Hệ thống phòng khám sản phụ khoa Marie</strong> <strong>Stopes Việt Nam</strong> – Nay là Dr.Marie được xây dựng và kiểm định chất lượng bởi tổ chức MSI Reproductive Choices đến từ Anh Quốc. Dr.Marie là một trong những hệ thống phòng khám sản phụ khoa lớn nhất Việt Nam với 12 phòng khám tại 9 tỉnh thành phố.</li> <li>Đội ngũ nhân viên của Dr.Marie được đào tạo và kiểm định chất lượng cung cấp dịch vụ định kỳ, đảm bảo đáp ứng tiêu chuẩn chất lượng cao nhất của Tổ chức Y tế Thế giới WHO, Tổ chức MSI Reproductive Choices và Bộ Y tế Việt Nam. Với nguyên tắc lấy Khách hàng là trọng tâm, Dr.Marie đảm bảo cung cấp dịch vụ chất lượng, an toàn và bảo mật, chăm sóc sức khỏe phụ nữ toàn diện từ kỳ kinh nguyệt đầu tiên cho tới giai đoạn mãn kinh.</li> <li>Các phòng khám được nâng cấp về cơ sở vật chất, trang thiết bị và đội ngũ nhân viên được tập huấn liên tục theo các tiêu chuẩn lâm sàng và chăm sóc khách hàng ngặt nghèo của tổ chức. Phòng khám Dr.Marie diện mạo mới năng động, hiện đại, với các dich vụ đa dạng và toàn diện hơn cho phụ nữ mọi lứa tuổi.</li> </ul>",
                clinic_id: "1b85c60c-9c18-41c4-b7dd-b355ee003781",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Nguyễn Minh Hùng",
                description:
                    "<p>20 năm kinh nghiệm lĩnh vực Tim mạch</p> <p>Hiện là Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai</p> <p>Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/17/111943-bs-minh-hung-d4u.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Nguyễn Minh Hùng</strong></h2> <ul> <li>20 năm kinh nghiệm lĩnh vực Tim mạch</li> <li>Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai</li> <li>Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Các bệnh lý Nội Tim mạch:</strong></p> <ul> <li>Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)</li> <li>Tăng huyết áp, hạ huyết áp</li> <li>Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li> <li>Xơ vữa động mạch</li> <li>Điều trị bệnh mạch vành</li> <li>Bệnh van tim (Hẹp hở van tim)</li> <li>Bệnh cơ tim</li> <li>Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh</li> <li>Khám bệnh mạch máu ngoại biên</li> <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch</li> <li>Tư vấn sử dụng thuốc chống đông máu</li> <li>Tư vấn bệnh tăng huyết áp</li> <li>Điều trị bệnh tăng huyết áp</li> <li>Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tiến sĩ Y khoa - Đại học Y Hà Nội</li> <li>Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ</li> <li>Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia</li> <li>Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản</li> <li>3 công trình khoa học</li> <li>30 bài báo khoa học chuyên ngành</li> </ul>",
                clinic_id: "bd728f9f-4673-4128-8383-56b3827f59b4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nội trú Ngô Thị Thu Trang",
                description:
                    "<p>Gần 10 năm kinh nghiệm lĩnh vực Nội - Cơ xương khớp</p> <p>Hiện đang công tác tại khoa Nội I - Bệnh viện Đa khoa Xanh Pôn</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/17/161620-bs-thu-trang-d4u.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ nội trú Ngô Thị Thu Trang</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm lĩnh vực Nội - Cơ xương khớp</li> <li>Hiện đang công tác tại khoa Nội I - Bệnh viện Đa khoa Xanh Pôn </li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Các bệnh lý nội chung và cơ xương khớp:</strong></p> <ul> <li>Thoái hóa khớp gối</li> <li>Lupus ban đỏ hệ thống</li> <li>Xơ cứng bì toàn thể</li> <li>Viêm da cơ và Viêm đa cơ</li> <li>Bệnh gout</li> <li>Viêm khớp dạng Thấp</li> <li>Viêm cột sống dính khớp</li> <li>Thoát vị đĩa đệm cột sống</li> <li>Gai cột sống</li> <li>Đau thần kinh tọa</li> <li>Thoái hóa cột sống</li> <li>Viêm quanh khớp vai</li> <li>Loãng xương</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa Nội I - Bệnh viện Đa khoa Xanh Pôn </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Nội trú chuyên ngành Nội chung - Học viện Quân Y (2013)</li> <li>Bác sĩ Đa khoa - Học viện Quân Y (2010)</li> </ul>",
                clinic_id: "bd728f9f-4673-4128-8383-56b3827f59b4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Thế Mạnh",
                description:
                    "<p>Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần</p> <p>Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/18/112310-bs-manh-d4u.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Thế Mạnh</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần</li> <li>Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:</strong></p> <ul> <li>Các vấn đề tâm lý ở trẻ</li> <li>Tâm thần học liên quan đến sự phát triển của trẻ</li> <li>Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan</li> <li>Động kinh trẻ em và các vấn đề liên quan</li> </ul> <p><strong>Ngoài ra bác sĩ nhận khám và điều trị về:</strong></p> <ul> <li>Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ</li> <li>Rối loạn tiền đình</li> <li>Rối loạn thần kinh thực vật</li> <li>Trầm cảm</li> <li>Rối loạn lưỡng cực cảm xúc</li> <li>Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm</li> <li>Sa sút trí tuệ</li> <li>Rối loạn tăng động giảm chú ý (ADHD)</li> <li>Nghiện game</li> <li>Nghiện rượu, thuốc lá</li> <li>Nghiện ma túy tổng hợp</li> <li>Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân</li> <li>Khó tập trung công việc</li> <li>Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)</li> <li>Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)</li> <li>Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)</li> <li>Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)</li> <li>Tốt nghiệp Đại học Y Hà Nội (1998)</li> </ul>",
                clinic_id: "bd728f9f-4673-4128-8383-56b3827f59b4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Trần Lan Anh",
                description:
                    "<p>Gần 15 năm kinh nghiệm lĩnh vực Tim mạch</p> <p>Hiện đang công tác tại Bệnh viện Tim Hà Nội</p> <p>Từng công tác tại Bệnh viện đa khoa Xanh Pôn</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/08/105633-bs-lan-anh-d4u.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Trần Lan Anh</strong></h2> <ul> <li>Gần 15 năm kinh nghiệm lĩnh vực Tim mạch</li> <li>Hiện đang công tác tại Bệnh viện Tim Hà Nội</li> <li>Từng công tác tại Bệnh viện đa khoa Xanh Pôn</li> <li>Từng học tập và tu nghiệp ở nước ngoài: Pháp</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:</strong></p> <ul> <li>Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp</li> <li>Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo</li> <li>Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …</li> </ul> <p><strong>Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:</strong></p> <ul> <li>Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)</li> </ul> <p><strong>Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:</strong></p> <ul> <li>Bệnh lý thận - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )</li> <li>Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)</li> <li>Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)</li> <li>Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)</li> <li>Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)</li> <li>Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chương trình đào tạo sau đại học Việt Pháp (2012)</li> <li>Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)</li> <li>Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)</li> </ul>",
                clinic_id: "bd728f9f-4673-4128-8383-56b3827f59b4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Dr. Care Implant Clinic - Liệu pháp trồng răng không đau",
                description:
                    "<p>Phương pháp cấy ghép Implant không đau</p> <p>Tiết kiệm thời gian và chi phí, Kỹ thuật nha khoa tiên tiến, hiện đại và hiệu quả, ăn nhai và thẩm mỹ đạt 95% như răng thật </p> <p>Nha khoa Dr. Care cam kết không ảnh hưởng đến sức khỏe, dây thần kinh, không phát sinh chi phí khi điều trị, không đau</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/11/18/152805-bsi-dr-care.jpg",
                introduction:
                    "<h2><strong>Dr. Care Implant Clinic - Liệu pháp trồng răng không đau</strong></h2> <ul> <li>Phương pháp cấy ghép Implant không đau</li> <li>Tiết kiệm thời gian và chi phí, Kỹ thuật nha khoa tiên tiến, hiện đại và hiệu quả, ăn nhai và thẩm mỹ đạt 95% như răng thật</li> <li>Nha khoa Dr. Care cam kết không ảnh hưởng đến sức khỏe, dây thần kinh, không phát sinh chi phí khi điều trị, không đau</li> </ul> <p>Dr. Care cung cấp các dịch vụ trồng răng đa dạng, hiện đại, phù hợp với từng tình trạng mất răng riêng biệt. Đảm bảo mỗi khách hàng sau khi trồng răng xong sẽ lấy lại được nụ cười tự tin, trẻ trung như xưa.</p> <ul> <li>Trồng răng toàn hàm </li> <li>Trồng răng Implant thay thế 1 răng</li> <li>Trồng răng Implant thay thế 1 vài răng </li> <li>Trồng răng Implant thay và phục hình tức thì </li> </ul> <p>Phòng khám đầu tư máy móc công nghệ hiện đại nhất. Các bác sĩ được đào tạo chuyên sâu và có kinh nghiệm nhiều năm trong lĩnh vực trồng răng Implant. Tại nha khoa Dr. Care, khách hàng sẽ được trải nghiệm phòng khám hiện đại, sạch sẽ, tư vấn nhiệt tình, đội ngũ bác sĩ giỏi. </p> <h3><strong>Cấy ghép Implant là kỹ thuật nha khoa như thế nào?</strong></h3> <p>Trồng răng Implant là kỹ thuật đặt trụ Implant bằng Titanium vào xương hàm vùng mất răng để phục hình răng cố định.</p> <h3><strong>Ưu điểm vượt trội so với các phương pháp khác</strong></h3> <ul> <li>Tiết kiệm chi phí và thời gian: Trồng 1 lần dùng trọn đời, không ảnh hưởng theo thời gian vì tuổi thọ răng Implant rất cao, lên đến hơn 20 năm hoặc trọn đời</li> <li>Ăn nhai và thẩm mỹ đạt 95% như răng thật: Giúp bạn thoải mái khi ăn uống, khiến khuôn mặt đầy đặn và trẻ trung hơn.</li> <li>Áp dụng cho tất cả các trường hợp mất răng: Thời gian điều trị nhanh chóng, hạn chế đau đớn.</li> <li>Ngăn chặn tình trạng tiêu xương: Khi mất răng, hiện tượng tiêu xương hàm tự nhiên sẽ diễn ra nhanh hơn. Dẫn đến khuôn mặt của cô chú mất răng toàn hàm thường móm, biến dạng, gây thiếu tự tin khi giao tiếp và sinh hoạt với bạn bè.</li> </ul>",
                clinic_id: "1b85c60c-9c18-41c4-b7dd-b355ee003781",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám và tư vấn miễn phí tặng khách hàng trồng răng Implant tại Dr. Care",
                description:
                    "<p>Dr.Care là nha khoa trồng răng dành riêng cho người trung niên đầu tiên tại Việt Nam. Khách hàng trồng răng Implant khi đặt lịch khám trên ứng dụng BookingCare sẽ được hưởng 5 ưu đãi tại Nha khoa Dr.Care: miễn phí thăm khám, tư vấn, chụp phim 3D CT, xét nghiệm,...</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/11/18/152805-bsi-dr-care.jpg",
                introduction:
                    "<p><strong>Dr. Care đầu tư máy móc công nghệ hiện đại nhất. Các bác sĩ được đào tạo chuyên sâu và có kinh nghiệm nhiều năm trong lĩnh vực trồng răng Implant. Tại nha khoa Dr. Care, khách hàng sẽ được trải nghiệm phòng khám hiện đại, sạch sẽ, tư vấn nhiệt tình, đội ngũ bác sĩ giỏi.</strong> </p> <h3><strong>Quy trình trồng răng tại Dr. Care</strong></h3> <ul> <li><p><strong>Bước 1</strong>: <strong>Khám tổng quát và lập kế hoạch điều trị với phần mềm Implant Studio/Nobel Clinician (50 – 60 phút)</strong></p> <p>1. Bác sĩ trực tiếp khám tổng quát sức khỏe răng miệng.</p> <p>2. Chụp phim Cone Beam CT (3D) và lấy dấu hàm kỹ thuật số để khảo sát mật độ xương và tình trạng vùng mất răng chính xác tuyệt đối.</p> <p>3. Bác sĩ phân tích cụ thể với khách hàng tình trạng xương dựa trên kết quả chụp phim 3D để:</p> <p>- Lên kế hoạch điều trị các bệnh lý răng miệng.<br>- Lên kế hoạch đặt Implant chính xác (Thống nhất vị trí đặt, hướng, kích thước Implant).<br>4. Xét nghiệm máu, huyết áp để xác định tình trạng sức khỏe và đảm bảo khách hàng đủ điều kiện trồng răng.</p> </li> <li><p><strong>Bước 2: Thực hiện đặt trụ Implant với máng hướng dẫn phẫu thuật theo kế hoạch điều trị (20 – 30 phút)</strong></p> <p>1. Thực hiện sát trùng, gây tê vùng trồng răng Implant.</p> <p>2. Đặt trụ Implant với máng hướng dẫn phẫu thuật đảm bảo an toàn và chính xác đến từng milimet, đồng thời giúp quá trình trồng răng cho khách hàng nhẹ nhàng hơn.</p> <p>3. Đặt trụ lành thương.</p> <p>4. Gắn răng tạm để sử dụng (Tùy từng trường hợp).</p> </li> <li><p><strong>Bước 3: Tái khám và cắt chỉ sau 7 – 10 ngày (20 – 30 phút)</strong></p> <p>1. Chụp hình kiểm tra mức độ tích hợp xương và lành thương của trụ.</p> <p>2. Cắt chỉ.</p> </li> <li><p><strong>Bước 4: Tái khám kiểm tra và lấy dấu răng sứ trên Implant sau 3 tháng (20 – 30 phút)</strong></p> <p>1. Chụp hình kiểm tra.</p> <p>2. Lấy dấu trên Implant để làm răng sứ.</p> <p>3. Chọn màu sứ trên Implant để phù hợp với màu răng thật.</p> </li> <li><p><strong>Bước 5: Gắn Abutment & gắn răng sứ trên Implant sau 3 ngày (60 phút)</strong></p> <p>1. Thử Abutment.</p> <p>2. Gắn mão sứ tạo trên Implant.</p> </li> <li><p><strong>Bước 6</strong>: <strong>Gắn mão sứ chính thức trên Implant sau 3-5 ngày (60 phút)</strong></p> <p>1. Gắn mão sứ trên Implant: Kiểm tra lần cuối, kết thúc gắn răng trên Implant.</p> <p>2. Hướng dẫn khách hàng chăm sóc tại nhà.</p> <p>3. Hẹn lịch tái khám định kỳ 3-6 tháng hoặc 1 năm...</p> </li> </ul>",
                clinic_id: "1b85c60c-9c18-41c4-b7dd-b355ee003781",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Ngô Đức Trường",
                description:
                    "<p>Gần 30 năm kinh nghiệm về chuyên khoa Thần kinh - Cột sống</p> <p>Bác sĩ từng công tác tại Bệnh viện Phương Đông - 79 Thành Thái, P14, Q10, Tp. HCM</p> <p>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/12/11/105005bac-si-chuyen-khoa-i-ngo-duc-truong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Ngô Đức Trường</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm về chuyên khoa Thần kinh - Cột sống</li> <li>Bác sĩ từng công tác tại Bệnh viện Phương Đông - 79 Thành Thái, P14, Q10, Tp. HCM</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh lý thần kinh, các chứng đau dây thần kinh</li> <li>Các bệnh đau đầu, đau nửa đầu, nhức đầu, chóng mặt</li> <li>Hội chứng tiền đình</li> <li>Bệnh động kinh, mạch máu não, các bệnh về sa sút trí tuệ</li> <li>Chóng mặt, ù tai do hội chứng tiền đình Mất ngủ kéo dài, suy nhược thần kinh</li> <li>Rối loạn thần kinh thực vật: mệt mỏi, hồi hộp, vã mồ hôi, tụt huyết áp</li> <li>Đau thần kinh do zona</li> <li>Đau dây thần kinh mặt, hầu họng</li> <li>Mọi chứng bệnh thần kinh khác do sang chấn, tai nạn, nhiễm trùng, nhiễm độc</li> <li>Các bệnh lý liên quan đến tủy sống và thần kinh ngoại biên</li> <li>Tổn thương dây thần kinh số V, VII</li> <li>Phẫu thuật u não và u tủy sống</li> <li>Phẫu thuật vết thương và chấn thương dây thần kinh ngoại vi</li> <li>Đau thần kinh cổ vai cánh tay</li> <li>Điều trị các bệnh viêm, thoái hóa cột sống và xương khớp</li> <li>Phẫu thuật tạo hình chấn thương sọ não, cột sống, tủy sống</li> <li>Phẫu thuật thoát vị đĩa đệm cột sống cổ và thắt lưng</li> <li>Đau thần kinh chi dưới, đau thắt lưng cùng</li> <li>Liệt 2 chân, liệt 1/2 người</li> <li>Vận động tay chân khó khăn, không chính xác, run các chi, run toàn thân</li> <li>Liệt hầu họng, nói khó, nuốt nghẹn, sặc, liệt mắt nhìn đôi</li> <li>Tai biến mạch máu não do huyết áp cao, đái đường, giai đoạn mới, di chứng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa thần kinh, Bệnh viện Đa khoa Bình Thuận (1994 - 2008)</li> <li>Bác sĩ tại Bệnh viện Phương Đông – 79 Thành Thái, Phường 14, Quận 10, Tp. Hồ Chí Minh (2008 - 2009)</li> <li>Bác sĩ tham gia khám chữa bệnh tại Phòng khám Quốc tế EXSON (2009 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y Huế (1994)</li> <li>Tốt nghiệp bác sĩ chuyên khoa I Ngoại Thần kinh tại Đại học Y dược Tp. Hồ Chí Minh (2000)</li> </ul>",
                clinic_id: "30e57f96-a0c6-47c2-93c4-4cf13d47b9de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Trần Thị Ngoan",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Gan mật</p> <p>Từng công tác khoa nội Tiêu hóa, Bệnh viện Đa khoa Tỉnh Nam Định</p> <p>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/11/11/170257-bac-si-cki-tran-thi-ngoan.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trần Thị Ngoan</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Gan mật</li> <li>Từng công tác khoa nội Tiêu hóa, Bệnh viện Đa khoa Tỉnh Nam Định</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Trào ngược dạ dày, thực quản</li> <li>Hội chứng ruột kích thích </li> <li>Viêm loét thực quản</li> <li>Viêm loét dạ dày</li> <li>Viêm loét đại trực tràng </li> <li>Viêm tụy</li> <li>Viêm đường ống mật</li> <li>Polyp ống tiêu hóa</li> <li>Xơ gan </li> <li>Viêm gan mãn tính</li> <li>Áp xe gan </li> <li>Nhiễm trùng tiêu hóa </li> <li>Xuất huyết tiêu hóa do: Loét dạ dày, hành tá tràng, giãn vỡ tĩnh mạch thực quản, phình vị</li> <li>Trĩ</li> <li>Sảng rượu</li> <li>Và các bệnh tiêu hóa - Gan mật khác</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Nội tiêu hóa, Bệnh viện tỉnh Nam Định (2001 - 2019)</li> <li>Bác sĩ khoa Nội Tổng Quát, Bệnh viện Dệt tỉnh Nam Định (1990 - 2000)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Chuyên khoa I Nội Tổng Quát, Đại Học Y Dược Thái Bình (2003)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại Học Y Dược Thái Bình (1988)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ Nội soi Đại tràng, Bệnh viện Y học Cổ Truyền Trung ương (2016)</li> <li>Đào tạo Nội soi can thiệp, Bệnh viện tỉnh Nam Định (2012)</li> <li>Chứng chỉ nội soi thực quản, dạ dày, tá tràng, Bệnh viện Bạch Mai (2006)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Báo cáo Khoa học về tình hình bệnh xuất huyết tiêu hóa tại bệnh viện Đa khoa tỉnh Nam Định (T6/2021- T12/2012)</li> </ul>",
                clinic_id: "30e57f96-a0c6-47c2-93c4-4cf13d47b9de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Kim Ngôi",
                description:
                    "<p>Trên 30 năm kinh nghiệm về chuyên khoa Nội - Nội Tim mạch</p> <p>Nguyên Giám đốc Trung tâm Y tế huyện Chợ Gạo – Tiền Giang</p> <p>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/12/11/110950bac-si-chuyen-khoa-ii-nguyen-kim-khoi.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Kim Khôi</strong></h2> <ul> <li>Trên 30 năm kinh nghiệm về chuyên khoa Nội - Nội Tim mạch</li> <li>Nguyên Giám đốc Trung tâm Y tế huyện Chợ Gạo – Tiền Giang</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có thế mạnh khám và điều trị các bệnh lý nội tim mạch</p> <p><strong>Bệnh mạch vành</strong></p> <ul> <li>Bệnh mạch vành</li> <li>Bệnh hẹp mạch vành</li> <li>Thiểu năng mạch vành</li> <li>Xơ vữa động mạch</li> <li>Điều trị bệnh mạch vành</li> </ul> <p><strong>Huyết áp</strong></p> <ul> <li>Bệnh cao huyết áp</li> <li>Bệnh huyết áp thấp</li> </ul> <p><strong>Bệnh lý khác</strong></p> <ul> <li>Bệnh cơ tim</li> <li>Rối loạn nhịp tim</li> <li>Bệnh liên quan đến van tim nhân tạo, stent tim mạch</li> <li>Rối loạn chuyển hóa lipid</li> <li>Giãn tĩnh mạch</li> <li>Bác sĩ trực tiếp siêu âm tim cho các trường hợp bệnh nặng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Nội tổng quát tại Phòng khám Quốc Tế Exson (2016 - nay)</li> <li>Giám đốc Trung tâm Y tế huyện Chợ Gạo – Tiền Giang (2009 - 2016)</li> <li>Công tác tại khoa lây, Bệnh viện Chợ Gạo - Tiền Giang</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa hệ Nội, Đại học Y dược TP. Hồ Chí Minh (1987)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Nội Tổng quát, Đại học Y Dược TP. Hồ Chí Minh (1995)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa II Nội Tổng quát, Đại học Y Dược TP. Hồ Chí Minh (2005)</li> </ul>",
                clinic_id: "30e57f96-a0c6-47c2-93c4-4cf13d47b9de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Văn Ca",
                description:
                    "<p>Đang công tác khoa Nội Thần Kinh - Điện Cơ, Phòng khám Quốc Tế EXSON </p> <p>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/11/11/172721-bs-nguyen-van-ca.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Văn Ca</strong></h2> <ul> <li>Đang công tác khoa Nội Thần Kinh - Điện Cơ, Phòng khám Quốc Tế EXSON</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <h3><strong>Lĩnh vực chuyên sâu</strong></h3> <ul> <li>Các bệnh lý não - tủy thường gặp </li> <li>Bệnh thần kinh ngoại biên, bệnh cơ</li> <li>Đau đầu, đau thần kinh</li> <li>Thăm dò điện sinh lý thần kinh - cơ</li> <li>Các điện thế gợi</li> </ul> <p><strong>Các loại bệnh lý thần kinh khác:</strong> </p> <ul> <li>Các loại đau đầu: mất ngủ, đau do nguyên nhân thụ thể/ thần kinh/tâm lý</li> <li>Thần kinh ngoại biên</li> <li>Bệnh lý tủy sống (nội khoa): Viêm tủy ngang, viêm tủy hướng lên...</li> <li>Bệnh cơ và khớp thần kinh cơ: đau xơ xơ, viêm đa cơ, viêm da cơ, nhược cơ...</li> <li>Chẩn đoán điện sinh lý và thần kinh cơ: chẩn đoán bệnh lý rể cổ, thắt lưng, đa dây thần kinh, hội chứng ống cổ tay, tổn thương dây thần kinh có chấn thương, viêm, chèn ép </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Nội Thần Kinh - Điện Cơ, Phòng khám Quốc Tế EXSON (2016 - nay)</li> <li>Bác sĩ điều trị khoa Nội Tổng Quát, Bệnh viện Đa khoa Trung ương Quảng Nam (2014 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ Nội Khoa Thần Kinh, Đại học Y Dược Thành Phố Hồ Chí Minh (2020)</li> <li>Chứng chỉ Kiến tập Siêu âm Doppler xuyên sọ, Bệnh viện Nhân Dân 115 (2015)</li> <li>Chứng chỉ Điện cơ lâm sàng, Bệnh viện Đại học Y Khoa Phạm Ngọc Thạch (2015)</li> <li>Chứng chỉ Đo chức năng hô hấp và quản lý hen - COPD, Đại học Y Dược Thành Phố Hồ Chí Minh (2014)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Bệnh viện Đại học Y Dược Thái Bình </li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Đau Thần kinh ở bệnh nhân mắc hội chứng ống cổ tay - Tạp chí Y học Thành Phố Hồ Chí Minh tập 25, số 2</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội Thần kinh học Việt Nam </li> <li>Thành viên Hội Thần kinh học Thành Phố Hồ Chí Minh </li> <li>Thành viên Hội Thần kinh cơ và Chẩn đoán Điện Việt Nam</li> </ul>",
                clinic_id: "30e57f96-a0c6-47c2-93c4-4cf13d47b9de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Võ Xuân Sơn",
                description:
                    "<p>Bác sĩ từng công tác tại Khoa Ngoại Thần Kinh – Bệnh viện Chợ Rẫy</p> <p>Tốt nghiệp Tiến sĩ Y học, Đại học Y Dược TP. Hồ Chí Minh </p> <p>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/12/10/175048tien-si-bac-si-vo-xuan-son.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Võ Xuân Sơn</strong></h2> <ul> <li>Bác sĩ từng công tác tại Khoa Ngoại Thần Kinh – Bệnh viện Chợ Rẫy</li> <li>Tốt nghiệp Tiến sĩ Y học, Đại học Y Dược TP. Hồ Chí Minh </li> <li>Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có kinh nghiệm chuyên sâu trong khám và điều trị, phẫu thuật cột sống ít xâm lấn (xâm lấn tối thiểu. Bác sĩ đã từng thực hiện:</p> <ul> <li>500 ca nội soi cột sống</li> <li>Hơn 300 ca giải ép TLIF và nẹp vít qua da sextant</li> <li>Hơn 1000 ca tạo hình đốt sống và tạo hình gù bằng xi măng sinh học (vertebroplasty và kyphoplasty)</li> <li>Hơn 200 ca mổ đặt dụng cụ cho bệnh nhân loãng xương bằng vít rỗng có bổ sung xi măng sinh học (Omega)</li> </ul> <p>Hàng ngàn các trường hợp vi phẫu thuật khác như:</p> <ul> <li>Vi phẫu thuật giải ép ghép xương lối trước cho thoát vị đĩa đệm cột sống cổ (ACDF)</li> <li>Vi phẫu thuật đặt dụng cụ cho trượt đốt sống</li> <li>Vi phẫu thuật lấy u tủy</li> <li>Vi phẫu thuật tạo hình ống sống trong bệnh lí hẹp ống sống cổ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa Ngoại Thần Kinh – Bệnh viện Chợ Rẫy: bác sĩ trưởng kíp trực, phẫu thuật viên chính, đảm trách những ca mổ khó nhất, đặc biệt là trong lĩnh vực Phẫu thuật Cột sống – Tủy sống</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Y khoa, Đại học Y Dược TP. Hồ Chí Minh (1987)</li> <li>Tốt nghiệp Thạc sĩ Y học, Đại học Y Dược TP. Hồ Chí Minh (2000)</li> <li>Bảo vệ thành công luận án Tiến sĩ Y học cấp quốc gia, Đại học Y Dược TP. Hồ Chí Minh (2006)</li> <li>Bác sĩ Xuân Sơn đã tu nghiệp về Phẫu Thuật Cột Sống – Tủy Sống nhiều lần tại các bệnh viện lớn và các trường đại học hàng đầu tại Nhật Bản, Hoa Kì, Công Hòa Liên Bang Đức, Hàn Quốc…</li> </ul>",
                clinic_id: "30e57f96-a0c6-47c2-93c4-4cf13d47b9de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Phạm Văn Vững",
                description:
                    "<p>Giám đốc điều hành, Bệnh viện Đông Đô</p> <p>Phó Giám đốc, Bệnh viện Hữu Nghị</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/04/18/191228-bsck-ii-pham-van-vung-noi-ecohealth.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Phạm Văn Vững</strong></h2> <ul> <li>Giám đốc điều hành, Bệnh viện Đông Đô</li> <li>Phó giám đốc, Bệnh viện Hữu Nghị</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc điều hành, Bệnh viện Đông Đô</li> <li>Giám đốc chuyên môn, Bệnh viện Đông Đô</li> <li>Phó Giám đốc, Bệnh viện Hữu Nghị</li> <li>Trưởng khoa Điều trị theo yêu cầu, Trưởng khoa Nội A, Bệnh viện Hữu Nghị (11/2005 – 3/2012)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Nội tổng hợp, Đại học Y Hà Nội</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các vấn đề sức khỏe Nội khoa</li> <li>Rối loạn chuyển hóa Lipid</li> <li>Tim mạch</li> <li>Tiểu đường</li> </ul>",
                clinic_id: "42705641-2e5c-40da-b905-7001f64c6a22",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Vũ Duy Chinh",
                description:
                    "<p>Hơn 20 năm kinh nghiệm trong lĩnh vực Phục hồi chức năng</p> <p>Phó Giám đốc Trung tâm Y học tái tạo và trị liệu tế bào</p> <p>Bệnh viện Đa khoa Quốc tế Vinmec Times City</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/11/150958-ths-bs-vu-duy-chinh-phcn-ecohealth.jpg",
                introduction:
                    "<h3><strong>Thạc sĩ, Bác sĩ Vũ Duy Chinh</strong></h3> <ul> <li>Hơn 20 năm kinh nghiệm trong lĩnh vực Phục hồi chức năng</li> <li>Phó Giám đốc Trung tâm Y học tái tạo và trị liệu tế bào, Bệnh viện Đa khoa Quốc tế Vinmec Times City</li> <li>Phó Chủ nhiệm bộ môn Phục hồi chức năng, Đại học Y tế Hải Dương</li> <li>Một trong những bác sỹ lâm sàng đầu tiên của hệ thống Vinmec tham gia vào việc khám, tư vấn và ghép tế bào gốc điều trị một số bệnh lý: bại não, tự kỷ, thoát vị màng não tủy,…</li> </ul> <h3><strong>Khám và điều trị</strong></h3> <p>Bác sĩ có <strong>thế mạnh chuyên môn sâu</strong> về khám, tư vấn và điều trị phục hồi chức năng cho các bệnh nhân có tổn thương thần kinh, sau chấn thương, cơ-xương-khớp, sản, nhi,... </p> <h4><strong>Phục hồi chức năng cho các bệnh nhân có tổn thương thần kinh</strong></h4> <ul> <li>Chấn thương sọ não</li> <li>Tai biến mạch máu não</li> <li>Tổn thương tủy sống</li> <li>Tổn thương đám rối thần kinh cánh tay</li> <li>Đau thần kinh tọa</li> <li>Các bệnh lý có tổn thương thần kinh khác</li> </ul> <h4><strong>Phục hồi chức năng cho các bệnh nhân sau chấn thương, bệnh lý cơ xương khớp</strong></h4> <ul> <li>Chấn thương đụng dập phần mềm</li> <li>Gãy xương</li> <li>Tổn thương dây chằng chéo trước, chéo sau khớp gối</li> <li>Bệnh nhân sau phẫu thuật chỉnh hình, thay khớp háng, khớp gối</li> <li>Bệnh lý đau lưng, thoái hóa xương, khớp và cột sống…</li> </ul> <h4><strong>Phục hồi chức năng cho các bệnh lý trẻ em</strong></h4> <ul> <li>Bại não</li> <li>Chậm phát triển tinh thần, vận động</li> <li>Xơ hóa cơ ức đòn chũm</li> <li>Bàn chân bẹt, bàn chân khoèo bẩm sinh…</li> </ul> <p>Phục hồi chức năng cho các bệnh nhân rối loạn cơ tròn bàng quang, hậu môn, bệnh lý sàn chậu </p> <p>Phục hồi chức năng cho các bệnh nhân sau phẫu thuật lồng ngực, ổ bụng, bệnh lý hô hấp, tim mạch<strong>…</strong></p>",
                clinic_id: "42705641-2e5c-40da-b905-7001f64c6a22",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ Đỗ Duy Cường",
                description:
                    "<p>Giám đốc Trung tâm Bệnh Nhiệt đới, Bệnh viện Bạch Mai</p> <p>Chuyên gia đầu ngành về bệnh Truyền nhiễm</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/04/18/202514-pgs-ts-do-duy-cuong-noi-truyen-nhiem-ecohealth.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ Đỗ Duy Cường</strong></h2> <ul> <li>Giám đốc Trung tâm Bệnh Nhiệt đới, Bệnh viện Bạch Mai</li> <li>Chuyên gia đầu ngành về bệnh Truyền nhiễm</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Trung tâm Bệnh Nhiệt đới, Bệnh viện Bạch Mai</li> <li>Bác sĩ tại Bệnh viện Bạch Mai (2007)</li> <li>Tham gia triển khai các dự án cho người nhiễm HIV, Tổ chức Sức khỏe gia đình quốc tế (FHI) (2005)</li> <li>Bác sĩ trực tiếp điều trị bệnh Truyền nhiễm, Bệnh viện Bạch Mai</li> <li>Giảng viên bộ môn Truyền nhiễm, Trường Đại học Y Hà Nội</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ nội trú chuyên môn Truyền nhiễm, Đại học Y Hà Nội</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>HIV/ AIDS</li> <li>Viêm Gan B</li> <li>Bại liệt, cúm, dại, đậu mùa, dịch hạch</li> <li>Lao phổi</li> <li>Giang mai</li> <li>Lậu </li> <li>Sởi </li> <li>Tả</li> <li>Thủy đậu</li> <li>Sốt xuất huyết, sốt phát ban</li> <li>Tay chân miệng</li> <li>Tiêu chảy cấp</li> <li>Uốn ván</li> <li>Viêm gan virus (A,B,C,D,E)</li> <li>Viêm màng não mô cầu</li> </ul>",
                clinic_id: "42705641-2e5c-40da-b905-7001f64c6a22",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Trần Hùng Lâm",
                description:
                    "<p>Trên 15 năm kinh nghiệm thực hành cấy ghép Implant</p> <p>Giám đốc chuyên môn tại Nha khoa Elite Dental</p> <p>Phó Trưởng khoa Răng hàm mặt, Trưởng bộ môn Nha khoa Phục hồi và Thẩm mỹ trường Đại học Văn Lang</p> <p>Nhận khám cho khách hàng từ 18 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/10/07/154723-untitled.png",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Trần Hùng Lâm</strong></h2> <ul> <li>Trên 15 năm kinh nghiệm thực hành cấy ghép Implant</li> <li>Giám đốc chuyên môn tại Nha khoa Elite Dental</li> <li>Phó Trưởng khoa Răng hàm mặt, Trưởng bộ môn Nha khoa Phục hồi và Thẩm mỹ trường Đại học Văn Lang</li> <li>Nhận khám cho khách hàng từ 18 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Phẫu thuật cấy ghép Implant</li> <li>Phẫu thuật nha chu</li> <li>Tiểu phẫu cắt nướu</li> <li>Phục hình thẩm mỹ: Mặt dán sứ Veneer</li> <li>Mất răng đơn lẻ, mất răng toàn hàm</li> <li>Tiêu xương</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li><strong>Giám đốc chuyên môn tại Nha khoa Elite Dental (2012 - Nay)</strong></li> <li>Phó Trưởng khoa Răng Hàm Mặt, Trưởng bộ môn Nha khoa Phục hồi và Thẩm mỹ trường Đại học Văn Lang (2021 - Nay)</li> <li><strong>Giảng viên thỉnh giảng tại Đại học Y Hà Nội</strong></li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bảo vệ luận án Tiến Sĩ chuyên ngành Nha khoa loại Xuất Sắc - Đại học Marseille, Pháp (2008)</li> <li>Tốt nghiệp loại Giỏi Bác sĩ Răng Hàm Mặt – Đại học Y Dược TP. HCM (2002)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Thực hiện nghiên cứu với chủ đề “Theo dõi và ứng dụng kỹ thuật ProArch trên bệnh nhân mất răng toàn bộ” cùng với Giáo sư Michel Dard – Giám đốc nghiên cứu Y khoa toàn cầu của tập đoàn Straumann, Thuỵ Sĩ; giảng viên đại học Columbia, New York, USA</li> </ul> <h3><strong>Thành viên các hội tổ chức chuyên môn</strong></h3> <ul> <li>Phó Trưởng khoa Răng Hàm Mặt, Trưởng bộ môn Nha khoa Phục hồi và Thẩm mỹ trường Đại học Văn Lang</li> <li>Viện trưởng Viện Nghiên cứu và Phát triển kỹ năng thực hành nha khoa THL (THL Academy)</li> <li>Thành viên Hội Nha sĩ danh dự quốc tế (FICD)</li> <li>Tổng thư ký Hội cấy ghép nha khoa TP. HCM (HSDI)</li> <li>Thành viên Uỷ ban quốc tế Hội cấy ghép nha khoa Thái Lan</li> <li>Fellow ITI (International Team for Implantology)</li> <li>Điều phối viên CLB ITI vùng Đông Nam Á</li> <li>Chủ tịch CLB ITI TP. HCM;</li> <li>Tổng thư ký hội Cấy ghép nha khoa TP. HCM</li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình</strong></h3> <p><strong>Tham gia các chương trình</strong> </p> <ul> <li>Nhịp cầu Y Tế - THVL</li> <li>Y khoa hiện đại - VTV9</li> <li>Nụ cười ngày mới - HTV7</li> </ul>",
                clinic_id: "6798c955-c798-4d5a-9379-0121e63ee60e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Văn Thị Thu Thủy",
                description:
                    "<p>Gần 35 năm kinh nghiệm điều trị trong lĩnh vực Răng Hàm Mặt</p> <p>Từng công tác tại các bệnh viện lớn như: Bệnh viện Tân Bình, bệnh viện An Sinh</p> <p>Nhận khám từ 5 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/10/08/151952-untitled.png",
                introduction:
                    "<h2><strong>Bác sĩ Văn Thị Thu Thủy</strong></h2> <ul> <li>Gần 35 năm kinh nghiệm điều trị trong lĩnh vực Răng Hàm Mặt</li> <li>Từng công tác tại các bệnh viện lớn như: Bệnh viện Tân Bình, Bệnh viện An Sinh</li> <li>Nhận khám từ 5 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Điều trị tủy</li> <li>Mẻ, vỡ răng</li> <li>Nội nha</li> <li>Phục hình thẩm mỹ: Mặt dán sứ Veneer, mão sứ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ nha khoa tổng quát Nha khoa Thẩm mỹ, phòng khám Elite Dental (2012 - nay)</li> <li>Bác sĩ nha khoa tổng quát khoa Răng Hàm Mặt, Bệnh viện Tân Bình (2007 - 2012)</li> <li>Bác sĩ nha khoa tổng quát khoa Răng Hàm Mặt, Bệnh viện An Sinh (1991 - 2007)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa I, Đại học Y Dược TP. HCM</li> <li>Tốt nghiệp Bác sĩ Răng Hàm Mặt, Đại học Y Dược TP. HCM (1989)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li><strong>Có chứng chỉ Cấy ghép Nha khoa từ Đại học Y Dược TP. HCM</strong></li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình</strong></h3> <ul> <li>Tham gia Chương trình tư vấn sức khoẻ Nhịp Cầu Y Tế - Đài THVL</li> </ul>",
                clinic_id: "6798c955-c798-4d5a-9379-0121e63ee60e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Mắt tại Trung Tâm Mắt Trẻ em Fsec",
                description:
                    "<p>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về mắt</p> <p>Trung tâm được trang bị những máy móc khám - điều trị hiện đại</p> <p>Giảm thời gian chờ đợi, ưu tiên khám nhanh</p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/17/093731-fseclogo.png",
                introduction:
                    "<h2><strong>Khám Mắt tại Trung Tâm Mắt Trẻ em Fsec</strong></h2> <ul> <li>Đội ngũ bác sĩ giàu kinh nghiệm trong khám và điều trị các bệnh lý về mắt,</li> <li>Trung tâm được trang bị những máy móc khám - điều trị hiện đại</li> <li>Giảm thời gian chờ đợi, ưu tiên khám nhanh</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Phòng khám Mắt chuyên cung cấp các dịch vụ chăm sóc, thăm khám và điều trị các bệnh mắt:</p> <ul> <li>Kiểm tra sức khỏe mắt toàn diện với quy trình đặc thù cho từng đối tượng người lớn và trẻ em</li> <li>Khám mắt định kỳ giúp tầm soát các bệnh lý nhãn khoa tiềm ẩn</li> <li>Khám khúc xạ liệt điều tiết: phương pháp tốt nhất để biết được độ cận, viễn của trẻ một cách chính xác</li> <li>Khám và điều trị Nhược thị, tật lác/lé...</li> <li>Kiểm soát cận thị bằng kính Ortho-K</li> <li>Lấy dị vật..</li> </ul> <p><strong>Trung tâm Mắt Trẻ em Fsec</strong> được thành lập và vận hành bởi đội ngũ bác sĩ chuyên gia nhãn khoa và quản lý chuyên môn cao, giàu kinh nghiệm tại Việt Nam.</p> <h3><strong>Đội ngũ bác sĩ trực tiếp thăm khám và điều trị tại Trung tâm Mắt Trẻ em Fsec</strong></h3> <ul> <li><strong>Tiến sĩ, Bác sĩ Phạm Thị Minh Châu</strong></li> </ul> <p>+ Phó khoa Mắt Trẻ em, Bệnh viện mắt Trung ương.</p> <p>+ Chuyên gia trong lĩnh vực mắt trẻ em và khúc xạ, chuyên gia điều trị u nguyên bào võng mạc.</p> <ul> <li><p><strong>Tiến sĩ, Bác sĩ Hà Huy Thiên Thanh</strong></p> </li> <li><p>Bác sĩ chuyên về Tạo hình thẩm mỹ mắt, Thần kinh nhãn khoa, Nhãn khoa chung, Bệnh viện mắt Trung ương</p> </li> </ul> <p>+ Bác sĩ có gần 15 năm kinh nghiệm trong khám và điều trị các bệnh lý về nhãn khoa</p>",
                clinic_id: "6be231e0-3e44-4e8b-8adc-6536fafc2ca3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Hà Huy Thiên Thanh",
                description:
                    "<p>Bác sĩ có gần 15 năm kinh nghiệm trong khám và điều trị các bệnh lý về nhãn khoa</p> <p>Bác sĩ chuyên về Tạo hình thẩm mỹ mắt, Thần kinh nhãn khoa, Nhãn khoa chung</p> <p>Bác sĩ đang công tác tại Khoa Tạo hình thẩm mỹ Mắt và vùng mặt - Bệnh viện Mắt Trung Ương</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/13/141412-bs-ha-huy-thien-thanh.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Hà Huy Thiên Thanh</strong></h2> <ul> <li>Bác sĩ có gần 15 năm kinh nghiệm trong khám và điều trị các bệnh lý về nhãn khoa</li> <li>Bác sĩ chuyên về Tạo hình thẩm mỹ mắt, Thần kinh nhãn khoa, Nhãn khoa chung</li> <li>Bác sĩ đang công tác tại Khoa Tạo hình thẩm mỹ Mắt và vùng mặt - Bệnh viện Mắt Trung Ương</li> <li>Bác sĩ nhận khám bệnh nhân từ 6 tháng tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám - điều trị tổng quát các bệnh về mắt</li> <li>Điều trị U mi – hốc mắt</li> <li>Sụp mi</li> <li>Quặm mi</li> <li>Điều trị Chấn thương mắt</li> <li>Thần kinh nhãn khoa</li> <li>Tạo hình – thẩm mỹ mắt và vùng mặt</li> <li>Điều trị các tật khúc xạ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Khoa Tạo hình thẩm mỹ Mắt và vùng mặt - Bệnh viện Mắt Trung Ương (2019 - nay)</li> <li>Bác sĩ Khoa Chấn thương Mắt - Bệnh viện Mắt Trung Ương (2013 - 2019)</li> <li>Bác sĩ nội trú Phòng Đào tạo và quản lý khoa học (2011 - 2013)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tiến sĩ Chuyên ngành Nhãn khoa - Đại học Y Hà Nội (2023)</li> <li>Nghiên cứu sinh Chuyên ngành nhãn khoa - Đại học Y Hà Nội (2016 - 2023)</li> <li>Phẫu thuật tạo hình - thẩm mỹ cơ bản - Đại học Y Hà Nội (2021 - 2022)</li> <li>Bác sĩ nội trú CN nhãn khoa - Đại học Pierre & Marie Curie, Paris, CH Pháp (2011 – 2012)</li> <li>Bác sĩ nội trú CN nhãn khoa - Đại học Y Hà Nội (2009 - 2013)</li> <li>Bác sĩ đa khoa - Đại học Y Hà Nội (2003 - 2009)</li> </ul>",
                clinic_id: "6be231e0-3e44-4e8b-8adc-6536fafc2ca3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Đức Hiếu",
                description:
                    "<p>Bác sĩ có gần 10 năm kinh nghiệm về chuyên khoa Mắt</p> <p>Bác sĩ đang công tác tại Bệnh viện Mắt Trung Ương</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/14/112218-bs-nguyen-duc-hieu.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Đức Hiếu</strong></h2> <ul> <li>Bác sĩ có gần 10 năm kinh nghiệm về chuyên khoa Mắt</li> <li>Bác sĩ đang công tác tại Bệnh viện Mắt Trung Ương</li> <li>Bác sĩ nhận khám bệnh nhân từ 6 tháng tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm kết mạc: Mi sưng nề, nhiều rỉ mắt, chảy nước mắt, đỏ mắt, đau rát mắt...</li> <li>Viêm giác mạc: Mi sưng nề, cộm chói chảy nước mắt, đỏ mắt</li> <li>Tật khúc xạ: Nhìn mờ, nhoè, hay nheo mắt, nháy mắt, hay tiến sát vào vật để nhìn….</li> <li>Chắp: Mi sưng, ít đau, sờ thấy u cục ở mi mắt</li> <li>Lẹo: Mi sưng nề, đỏ tấy, đau nhức vùng mi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa Chẩn đoán hình ảnh - Bệnh viện Mắt Trung Ương (2020 - nay)</li> <li>Khoa Khám bệnh và điều trị ngoại trú - Bệnh viện Mắt Trung Ương (2017 - 2020)</li> <li>Khám ngoài giờ tại Phòng khám Mắt trẻ em Fsec</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ chuyên khoa định hướng mắt - Bệnh viện Mắt Trung Ương (2015 - 2016)</li> <li>Bác sĩ đa khoa - Đại học Y Hà Nội (2009-2015)</li> </ul> <p><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></p> <ul> <li>Hội nhãn khoa Hà Nội</li> <li>Câu lạc bộ Mắt trẻ em</li> </ul>",
                clinic_id: "6be231e0-3e44-4e8b-8adc-6536fafc2ca3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Thị Hà Minh",
                description:
                    "<p>Gần 10 năm kinh nghiệm khám và điều trị bệnh lý chuyên khoa Da liễu</p> <p>Bác sĩ đang công tác tại Bệnh viện Da liễu Trung ương</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/10/17/152754-ha-minh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Thị Hà Minh</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm khám và điều trị bệnh lý chuyên khoa Da liễu</li> <li>Bác sĩ đang công tác tại Bệnh viện Da liễu Trung ương</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Trứng cá: Mụn viêm, mụn bọc, da dầu</li> <li>Viêm da cơ địa: Da khô đỏ, bong vảy</li> <li>Rám má: Mảng tăng sắc tố vùng má 2 bên</li> <li>Khô da: Da khô, nhiều nếp nhăn</li> <li>Lão hóa da: Da khô sạm, nếp nhăn nhiều, tăng sắc tố</li> <li>Tăng tiết mồ hôi</li> <li>Bệnh da nhiễm khuẩn</li> <li>Bệnh da tự miễn</li> <li>Bệnh da bọng nước tự miễn</li> <li>Dày sừng nang lông</li> <li>Khám chữa các vấn đề tóc: rụng tóc</li> <li>Khám chữa các bệnh da liễu: viêm da cơ địa, viêm da tiếp xúc, viêm da dầu, vảy nến...</li> <li>Khám và điều trị da liễu thẩm mỹ: Sẹo lõm, sẹo lồi, lỗ chân lông to, tàn nhang, bạch biến</li> <li>Tạo hình khuôn mặt, đường nét cơ thể bằng Filler, Toxin, Chỉ</li> <li>Khám và tư vấn các bệnh xã hội</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Da Liễu Trung Ương (2013 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ Da Liễu, Đại học Y Hà Nội (2016 - 2018)</li> <li>Định hướng Chuyên khoa Da Liễu, Đại học Y Hà Nội (2012 - 2013)</li> <li>Bác sĩ đa khoa, Học viện Quân Y (2005 - 2011)</li> </ul>",
                clinic_id: "ced6b6e8-6d8a-4043-851c-a3d416306dfc",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Thùy Linh",
                description:
                    "<p>Gần 15 năm kinh nghiệm trong khám và điều trị về Da liễu</p> <p>Phó Trưởng khoa Điều trị bệnh da phụ nữ và trẻ em Bệnh viện Da liễu Trung ương</p> <p>Bác sĩ nhận bệnh nhân ở mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/10/17/152754-bs-linh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Thùy Linh</strong></h2> <ul> <li>Gần 15 năm kinh nghiệm trong khám và điều trị về Da liễu</li> <li>Phó Trưởng khoa Điều trị bệnh da phụ nữ và trẻ em Bệnh viện Da liễu Trung ương</li> <li>Bác sĩ nhận bệnh nhân ở mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Trứng cá: Mụn viêm, mụn bọc, da dầu</li> <li>Viêm da cơ địa: Da khô đỏ, bong vảy</li> <li>Rám má: Mảng tăng sắc tố vùng má 2 bên</li> <li>Khô da: Da khô, nhiều nếp nhăn</li> <li>Lão hóa da: Da khô sạm, nếp nhăn nhiều, tăng sắc tố</li> <li>Tăng tiết mồ hôi</li> <li>Bệnh da nhiễm khuẩn</li> <li>Bệnh da tự miễn</li> <li>Bệnh da bọng nước tự miễn</li> <li>Dày sừng nang lông</li> <li>Khám chữa các vấn đề tóc: rụng tóc</li> <li>Khám chữa các bệnh da liễu: viêm da cơ địa, viêm da tiếp xúc, viêm da dầu, vảy nến...</li> <li>Khám và điều trị da liễu thẩm mỹ: Sẹo lõm, sẹo lồi, lỗ chân lông to, tàn nhang, bạch biến</li> <li>Tạo hình khuôn mặt, đường nét cơ thể bằng Filler, Toxin, Chỉ</li> <li>Khám và tư vấn các bệnh xã hội</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Trưởng khoa, Bệnh viện Da liễu Trung ương (2016 - 2022)</li> <li>Bác sĩ, Bệnh viện Da liễu Trung Ương (2009 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên khoa II chuyên ngành Da liễu, Đại học Y Hà Nội (2020 - 2022)</li> <li>DFMSA chuyên khoa Da liễu, Đại học Paris 13 Bobigny, Cộng hòa Pháp (2014 - 2015)</li> <li>Cao học chuyên khoa Da liễu, Đại học Y Hà Nội (2011 - 2013)</li> <li>Định hướng chuyên khoa Da liễu, Đại học Y Hà Nội (2009 - 2010)</li> <li>Bác sĩ đa khoa, Đại học Y Hà Nội (2002 - 2008)</li> </ul>",
                clinic_id: "ced6b6e8-6d8a-4043-851c-a3d416306dfc",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Khám Da liễu tại Phòng khám Da liễu Thẩm Mỹ Fskin",
                description:
                    "<p>Đội ngũ bác sĩ giỏi, giàu kinh nghiệm lâu năm khám điều trị trong lĩnh vực Da liễu</p> <p>Các bác sĩ công tác tại Bệnh viện Da liễu Trung Ương</p> <p>Hệ thống trang thiết bị hiện đại đồng bộ phục vụ cho công tác chẩn đoán và điều trị hiệu quả</p>",
                address: "Hà Nội",
                gender: "other",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/10/26/142131-logofskin.png",
                introduction:
                    "<h2><strong>Khám Da liễu tại Phòng khám Da liễu Thẩm Mỹ Fskin</strong></h2> <ul> <li>Đội ngũ bác sĩ giỏi, giàu kinh nghiệm lâu năm khám điều trị trong lĩnh vực Da liễu</li> <li>Các bác sĩ công tác tại Bệnh viện Da liễu Trung Ương</li> <li>Hệ thống trang thiết bị hiện đại đồng bộ phục vụ cho công tác chẩn đoán và điều trị hiệu quả</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><p>Khám và điều trị các bệnh da liễu: </p> <ul> <li>Mụn: mụn trứng cá, mụn viêm, mụn mủ, mụn bọc, mụn ẩn, mụn đầu đen…</li> <li>Viêm da: viêm da cơ địa, viêm da tiếp xúc, viêm da dị ứng, tổ đỉa, mề đay, eczema, viêm da đầu, viêm lỗ chân lông…</li> <li>Nấm: nấm da, nấm móng, nấm tóc, nấm sinh dục…</li> <li>Virus: thủy đậu, Zona, Herpes, mụn hạt cơm…<br>Vẩy nến, khô da, dày da, rụng tóc, hói đầu, thủy đậu, lang ben, hắc lào…</li> </ul> </li> <li><p>Chăm sóc da chuyên sâu: </p> <ul> <li>Trị liệu da mặt chuyên nghiệp cho từng loại da: da dầu, lỗ chân lông to, da khô, da nhạy cảm, da hỗn hợp, da lão hóa....</li> <li>Trị liệu chuyên sâu: da mụn cấp độ nặng, da nhạy cảm – mẫn cảm, da vùng mắt...</li> <li>Chăm sóc và trị liệu khác: bổ sung collagen, jet peel...</li> <li>Massage toàn thân, tẩy da chết toàn thân</li> </ul> </li> <li><p>Thẩm mỹ công nghệ cao: </p> <ul> <li>Trẻ hóa da toàn diện với kỹ thuật thẩm mỹ nội khoa: filler, botox, căng chỉ, mesotherapy...</li> <li>Điều trị nám, tàn nhang, đồi mồi, tẩy nốt ruồi, quầng thâm, bạch biến, mụn thịt…</li> <li>Điều trị rạn da: vùng bụng, đùi, bắp chân, ngực… do tăng cân và sau sinh.</li> <li>Điều trị sẹo: sẹo rỗ do trứng cá, sẹo lõm, sẹo lồi, sẹo thâm…</li> <li>Xóa nếp nhăn: nếp chân chim, nhăn trán, nhăn cung mày, nhăn cổ, nhăn quanh miệng…</li> <li>Triệt lông công nghệ mới nhất: ria mép, tay, chân…</li> <li>Thu nhỏ lỗ chân lông, săn chắc da, sáng da, làm đồng đều sắc tố da…</li> </ul> </li> </ul>",
                clinic_id: "ced6b6e8-6d8a-4043-851c-a3d416306dfc",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Golden Healthcare
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Trương Thiện Niềm",
                description:
                    "<p>30 năm kinh nghiệm trong lĩnh vực Nội khoa</p> <p>Trưởng khoa Khám bệnh, Bệnh viện Gia An 115</p> <p>Nguyên Tổng Giám đốc Bệnh Viện Đa khoa Bạc Liêu – Sài Gòn</p> <p>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/02/105503-bs-niem.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Trương Thiện Niềm</strong></h2> <ul> <li>30 năm kinh nghiệm trong lĩnh vực Nội khoa</li> <li>Trưởng khoa Khám bệnh, Bệnh viện Gia An 115</li> <li>Nguyên Tổng Giám đốc Bệnh Viện Đa khoa Bạc Liêu – Sài Gòn</li> <li>Nguyên Phó Giám đốc chuyên môn, Bệnh viện Hoàn Mỹ Vinh</li> <li>Nguyên Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Vinmec Phú Quốc</li> <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các vấn đề Nội khoa Tổng quát: </p> <ul> <li>Tầm soát và phát hiện các bệnh lý tim mạch, huyết áp,...</li> <li>Tầm soát bệnh đái tháo đường</li> <li>Tầm soát bệnh thận, viêm gan siêu vi,…</li> <li>Các bệnh lý cơ xương khớp</li> <li>Các bệnh lý về hô hấp - phổi</li> <li>Các bệnh lý nội khoa khác</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Trưởng khoa Khám bệnh, Bệnh viện Gia An 115 (05/2018 - nay)</li> <li>Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Vinmec Phú Quốc (03/2017 - 03/2018)</li> <li>Phó Giám đốc chuyên môn, Bệnh viện Hoàn Mỹ Vinh (01/2015 - 02/2017)</li> <li>Tổng Giám đốc, chuyên gia tư vấn y tế, Công ty CP Bệnh viện Đa khoa Bạc Liêu – Sài Gòn (04/2012 - 12/2014)</li> <li>Phó Trưởng ban, Ban bảo vệ sức khỏe Cán bộ Tỉnh Bạc Liêu (01/1997 - 03/2012)</li> <li>Trưởng phòng khám Cán bộ, Ban bảo vệ sức khỏe Cán bộ Tỉnh Cà Mau (05/1994 - 12/1996)</li> <li>Bác sĩ điều trị khoa Khám bệnh, Bệnh viện huyện Cái Nước, Tỉnh Cà Mau (09/1992 - 04/1994)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên khoa II Nội chung - Học viện Quân Y (2009 - 2011)</li> <li>Chuyên khoa I Nội Lão khoa - Đại học Y Dược TP. HCM (2003)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược Cần Thơ (1992)</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Bác sĩ Phạm Huỳnh Quế Thanh",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong lĩnh vực Nội khoa - Lão khoa</p> <p>Từng là Bác sĩ điều trị tại khoa Lão - Bệnh viện Nguyễn Trãi</p> <p>Bác sĩ Lão khoa - Bệnh viện Gia An 115</p> <p>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/02/134715-bs-que-thanh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ Bác sĩ Phạm Huỳnh Quế Thanh</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong lĩnh vực Nội khoa - Lão khoa</li> <li>Từng là Bác sĩ điều trị tại khoa Lão - Bệnh viện Nguyễn Trãi</li> <li>Bác sĩ Lão khoa - Bệnh viện Gia An 115</li> <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các vấn đề Nội khoa - Lão khoa:</p> <ul> <li>Các bệnh lý tim mạch</li> <li>Thuyên tắc huyết khối tĩnh mạch sâu ở người cao tuổi</li> <li>Tăng huyết áp</li> <li>Tiểu đường</li> <li>Các bệnh lý hô hấp - phổi</li> <li>Các bệnh lý tiêu hóa</li> <li>Sa sút trí tuệ</li> <li>...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Lão khoa - Bệnh viện Gia An 115 (nay)</li> <li>Bác sĩ điều trị tại khoa Lão - Bệnh viện Nguyễn Trãi (2019 - nay)</li> <li>Bác sĩ điều trị tại khoa Nội - Bệnh viện Quận Tân Phú (2017 - 2018)</li> <li>Bác sĩ điều trị tại khoa Nội - Bệnh viện Quận 11 (2016 - 2017)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ Lão khoa - Đại học Y Dược TP. HCM (2014 - 2016)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược TP. HCM (2007 - 2013)</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Thị Thanh Xuân",
                description:
                    "<p>Hơn 20 năm kinh nghiệm lĩnh vực Nội Tim mạch</p> <p>Nguyên Phó Trưởng khoa Tim mạch - Bệnh viện 30/4 TP. HCM</p> <p>Hiện công tác tại Bệnh viện Gia An 115</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/10/110232-bs-cki-nguy-n-th-thanh-xu-n-1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Thị Thanh Xuân</strong></h2> <ul> <li>20 năm kinh nghiệm lĩnh vực Nội Tim mạch</li> <li>Nguyên Phó trưởng khoa Tim mạch - Bệnh viện 30/4 TP. HCM</li> <li>Hiện công tác tại Bệnh viện Gia An 115</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch:</p> <ul> <li>Xơ vữa – hẹp động mạch vành, động mạch cảnh</li> <li>Tai biến mạch máu não, suy tim</li> <li>Các bệnh tim bẩm sinh của trẻ em và người lớn</li> <li>Các bệnh về mạch máu; xơ vữa, phình động mạch chủ ngực, động mạch chủ bụng, can thiệp tim mạch và can thiệp mạch máu ngoại biên</li> <li>Nhịp tim không đều (loạn nhịp tim)</li> <li>Khuyết tật tim bẩm sinh</li> <li>Vấn đề về van tim</li> <li>Nhiễm trùng tim</li> <li>...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị khoa Nội - Bệnh viện Gia An 115 (2019 - Nay)</li> <li>Bác sĩ điều trị khoa Nội - Bệnh viện An Sinh TP. HCM (2017 - 2018)</li> <li>Phó Trưởng khoa Tim Mạch - Bệnh viện 30/4 TP. HCM (2015 - 2017)</li> <li>Bác sĩ điều trị tại khoa Nội Tim mạch Thận khớp - Bệnh viện 30/4 TP. HCM (2003 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên khoa I Nội tổng quát - Đại học Y Dược TP. HCM (2010 - 2012)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược Thái Bình (2002)</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Huỳnh Bích Thảo",
                description:
                    "<p>Gần 15 năm kinh nghiệm trong khám và điều trị Vật lý trị liệu - Phục hồi chức năng</p> <p>Trưởng khoa Vật lý trị liệu - Phục hồi chức năng, Bệnh viện Gia An 115</p> <p>Từng công tác tại các bệnh viện lớn: Bệnh viện Chợ Rẫy, Bệnh viện Ung Bướu TP. HCM, Bệnh viện Đại học Y dược TP. HCM</p> <p>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/06/28/103609-bs-thao.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Huỳnh Bích Thảo</strong></h2> <ul> <li>Gần 15 năm kinh nghiệm trong khám và điều trị Vật lý trị liệu - Phục hồi chức năng</li> <li>Trưởng khoa Vật lý trị liệu - Phục hồi chức năng, Bệnh viện Gia An 115</li> <li>Từng công tác tại các bệnh viện lớn: Bệnh viện Chợ Rẫy, Bệnh viện Ung Bướu TP. HCM, Bệnh viện Đại học Y dược TP. HCM</li> <li>Tham gia đào tạo Y khoa liên tục để bổi đắp và cập nhật kiến thức về Phục hồi chức năng</li> <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các bệnh lý về Vật lý trị liệu và Phục hồi chức năng:</p> <ul> <li>Phục hồi chức năng các bệnh lý, tổn thương hoặc sau phẫu thuật thần kinh, chấn thương chỉnh hình và cơ xương khớp, hô hấp - tim mạch, ung thư</li> <li>Phục hồi chức năng rối loạn nuốt</li> <li>Rối loạn giọng nói, liệt dây thanh, mất ngôn ngữ, các rối loạn giao tiếp do tổn thương thần kinh, nói lắp ở người lớn qua các giai đoạn cấp tính đến mạn tính</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Vật lý trị liệu - Phục hồi chức năng, Bệnh viện Gia An 115 (12/2020 - nay)</li> <li>Bác sĩ khoa Phục hồi chức năng, Bệnh viện Đại học Y dược TP. HCM (2010 - 2020)</li> <li>Bác sĩ tổ Vật lý trị liệu - Phục hồi chức năng, Bệnh viện Ung Bướu TP. HCM (2015 - 2020)</li> <li>Bác sĩ khoa Vật lý trị liệu - Phục hồi chức năng, Bệnh viện Chợ Rẫy (2009 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I Phục hồi chức năng - Đại học Y Dược TP. HCM (2018 - 2020)</li> <li>Chứng chỉ Âm ngữ trị liệu (3500 tiết) - Trường Đại học Y Khoa Phạm Ngọc Thạch phối hợp với Trinh Foundation Australia (2010 - 2020)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược TP. HCM (2002 - 2008)</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nội trú Đoàn Diệu Vi",
                description:
                    "<p>Hơn 10 năm kinh nghiệm trong khám và điều trị bệnh lý Tai mũi họng</p> <p>Bác sĩ Tai mũi họng - Bệnh viện Gia An 115</p> <p>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/06/28/140612-bs-vi.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nội trú Đoàn Diệu Vi</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm trong khám và điều trị bệnh lý Tai mũi họng</li> <li>Bác sĩ Tai mũi họng - Bệnh viện Gia An 115</li> <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các bệnh lý Tai Mũi Họng:</p> <ul> <li>Viêm tai giữa, thủng nhĩ, lấy dị vật tai, nạo vét sụn vành tai</li> <li>Điều trị viêm xoang</li> <li>Lấy dị vật mũi</li> <li>Điều trị V.A, Amidan</li> <li>Lấy dị vật trong miệng - họng</li> <li>Bỏng vùng miệng</li> <li>U thanh quản</li> <li>Áp - xe vùng đầu cổ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Tai mũi họng - Bệnh viện Gia An 115 (2019 - nay)</li> <li>Bác sĩ điều trị khoa Tai mũi họng - Bệnh viện C Đà Nẵng (2015 - 2019)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Nội trú Tai mũi họng - Đại học Y Dược Huế (2011- 2014)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược Huế (2005- 2011)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ khám và phẫu thuật nội soi tai mũi họng</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Kim Thanh",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong lĩnh vực Răng - Hàm - Mặt</p> <p>Tốt nghiệp Bác sĩ Chuyên khoa I Răng Hàm Mặt - Đại học Y Dược TP. HCM</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/06/28/153737-bs-thanh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Kim Thanh</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong lĩnh vực Răng - Hàm - Mặt</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Răng Hàm Mặt - Đại học Y Dược TP. HCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có chuyên môn sâu về khám và điều trị các bệnh lý: </p> <ul> <li>Nha khoa Tổng quát</li> <li>nha khoa thẩm mỹ</li> <li>Nha khoa dự phòng</li> <li>Đặc biệt ứng dụng nha khoa kỹ thuật cao như: Phẫu thuật cấy ghép Implant,…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Răng Hàm Mặt tại Bệnh viện Gia An 115 (2021 - nay)</li> <li>Bác sĩ Răng Hàm Mặt tại Phòng khám Đa khoa Vạn Phúc (2020 - 2021)</li> <li>Bác sĩ Răng Hàm Mặt tại Phòng khám Đa khoa Nhi khoa Nancy (2016 - 2019)</li> <li>Bác sĩ thực tập tại Bệnh viện Răng Hàm Mặt TP. HCM (2014 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I Răng Hàm Mặt - Đại học Y Dược TP. HCM (2016 - 2018)</li> <li>Bác sĩ Răng Hàm Mặt - Đại học Y Dược TP. HCM (2013)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ Đào tạo liên tục Kỹ năng cấp cứu cơ bản và cấp cứu Răng Hàm Mặt - Đại học Y Dược TP. HCM (2020)</li> <li>Chứng chỉ Chỉnh hình Răng Mặt - Đại học Y Dược TP. HCM (2017)</li> <li>Chứng chỉ Phục hồi thẩm mỹ nụ cười xâm lấn tối thiểu - Đại học Y Dược TP. HCM (2016)</li> <li>Chứng chỉ Cấy ghép nha khoa - Đại học Y Dược TP. HCM (2014)</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Kim Văn Trung",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong lĩnh vực Nội Tổng quát - Lão khoa - Cơ xương khớp</p> <p>Nguyên Trưởng phòng Kế hoạch tổng hợp, Nguyên Phó Trưởng khoa Nội khớp - Bệnh viện Nguyễn Tri Phương</p> <p>Nguyên Trưởng đơn vị Nội xương khớp - Bệnh viện Xuyên Á </p> <p>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/06/29/090016-bs-trung.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Kim Văn Trung</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Nội Tổng quát - Lão khoa - Cơ xương khớp</li> <li>Nguyên Trưởng phòng Kế hoạch tổng hợp - Bệnh viện Nguyễn Tri Phương</li> <li>Nguyên Phó Trưởng khoa Nội Khớp - Bệnh viện Nguyễn Tri Phương</li> <li>Nguyên Trưởng đơn vị Nội Xương Khớp - Bệnh viện Xuyên Á</li> <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các bệnh lý về Nội Tổng quát - Lão khoa - Cơ xương khớp:</p> <ul> <li>Bệnh lý cơ xương khớp: loãng xương, thoái hóa khớp, thoát vị đĩa đệm,...</li> <li>Bệnh lý nội lão khoa: Đái tháo đường, tăng huyết áp, rối loạn chuyển hóa lipid,...</li> <li>Các bệnh lý Nội khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nội Cơ Xương Khớp - Bệnh viện Gia An 115 (07/2020 - nay)</li> <li>Trưởng đơn vị Nội Xương Khớp - Bệnh viện Xuyên Á (2017 - 07/2020)</li> <li>Phó Trưởng khoa Nội Khớp - Bệnh viện Nguyễn Tri Phương (2014 - 2017)</li> <li>Trưởng phòng Kế hoạch tổng hợp - Bệnh viện Nguyễn Tri Phương (2012 - 2014)</li> <li>Bác sĩ khám và điều trị Nội khoa - Bệnh viện Nguyễn Trị Phương (1992 - 2012)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II chuyên ngành Lão khoa - Trường Đại học Y Dược TP. HCM (2009 - 2011)</li> <li>Bác sĩ Chuyên khoa I Lão khoa - Trường Đại học Y Dược TP. HCM</li> <li>Bác sĩ Đa khoa - Trường Đại học Y Dược TP. HCM (1986 - 1992)</li> </ul>",
                clinic_id: "90f424e3-32db-439e-a116-e1b53da0a2df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BSCKI Trần Thị Hồng Vân ",
                description:
                    "<p>Gần 10 năm kinh nghiệm về Da liễu</p> <p>Phó Giám đốc phụ trách chuyên môn Phòng khám chuyên khoa Da liễu GSV</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/09/28/095137-bs-van1.jpg",
                introduction:
                    "<h2><strong>BSCKI Trần Thị Hồng Vân</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm về Da liễu</li> <li>Phó Giám đốc phụ trách chuyên môn Phòng khám chuyên khoa Da liễu GSV</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Điều trị mụn</li> <li>Điều trị sẹo</li> <li>Điều trị nám và tăng sắc tố</li> <li>Điều trị đốm nâu, đồi mồi, tàn nhang</li> <li>Điều trị rụng tóc</li> <li>Chăm sóc da, trẻ hóa da</li> <li>Tiêm Filler – Botox: Tiêm môi, mũi, cằm, má,...</li> <li>Điều trị rạn da</li> <li>Điều trị U giãn mạch</li> <li>Xóa xăm</li> <li>Thu nhỏ lỗ chân lông</li> <li>Triệt lông</li> <li>Tẩy nốt ruồi</li> <li>Khám và điều trị bệnh da liễu: nấm, mụn cóc, u mềm lây, u ống tuyến mồ hôi, sùi mào gà,...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Giám đốc phụ trách chuyên môn, Phòng khám chuyên khoa Da liễu GSV (2021 - nay)</li> <li>Thực hành Bác sĩ Chuyên khoa I, Bệnh viện Da liễu Trung ương (2018 - 2020)</li> <li>Bác sĩ Da liễu Hải Dương (2015 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li><strong>Bác sĩ Chuyên khoa I Da liễu, Đại học Y Hà Nội (2018 - 2020)</strong></li> <li><strong>Định hướng Chuyên khoa Da liễu, Đại học Y Hà Nội (01/2016 - 10/2016)</strong></li> <li><strong>Bác sĩ Đa khoa, Đại học Y Dược Hải Phòng (2009 - 2015)</strong></li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li><strong>Kỹ thuật tiêm chất làm đầy trong thẩm mỹ, Bệnh viện Da liễu TP. HCM (2021)</strong></li> <li><strong>Kỹ thuật tiêm botulinum toxin trong thẩm mỹ, Bệnh viện Da liễu TP. HCM (2020)</strong></li> <li><strong>Chứng chỉ hành nghề Bác sĩ Da liễu Sở y tế Hải Dương (2017)</strong> </li> <li><strong>Thẩm mỹ và ứng dụng công nghệ laser, tế bào gốc trong Chuyên ngành Da liễu, Đại học Quốc gia Hà Nội (2017)</strong> </li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li><strong>Thành viên hội Da liễu Việt Nam</strong></li> </ul>",
                clinic_id: "44f81103-529d-43cf-b189-2899f8aba61a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BSCKI Bùi Văn Vương",
                description:
                    "<p>Bác sĩ có hơn 10 năm kinh nghiệm trong lĩnh vực Da liễu - Da liễu Thẩm mỹ</p> <p>Hiện đang là Giám đốc Phòng khám chuyên khoa Da liễu GSV</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/09/27/170703-bs-vuong.jpg",
                introduction:
                    "<h2><strong>BSCKI Bùi Văn Vương</strong></h2> <ul> <li>Bác sĩ có hơn 10 năm kinh nghiệm trong lĩnh vực Da liễu - Da liễu Thẩm mỹ</li> <li>Hiện đang là Giám đốc Phòng khám chuyên khoa Da liễu GSV</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Điều trị mụn</li> <li>Điều trị sẹo</li> <li>Điều trị nám và tăng sắc tố</li> <li>Điều trị đốm nâu, đồi mồi, tàn nhang</li> <li>Điều trị rụng tóc</li> <li>Chăm sóc da, trẻ hóa da</li> <li>Tiêm Filler – Botox: Tiêm môi, mũi, cằm, má,...</li> <li>Điều trị rạn da</li> <li>Điều trị U giãn mạch</li> <li>Xóa xăm</li> <li>Thu nhỏ lỗ chân lông</li> <li>Triệt lông</li> <li>Tẩy nốt ruồi</li> <li>Khám và điều trị bệnh da liễu: nấm, mụn cóc, u mềm lây, u ống tuyến mồ hôi, sùi mào gà,...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Chuyên môn Phòng khám chuyên khoa Da liễu GSV (2018 - nay)</li> <li>Bác sĩ Bệnh viện Đa khoa Quốc tế Thu Cúc (2012 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li><strong>Bác sĩ Chuyên khoa I Da liễu, Đại học Y Hà Nội (2018 - 2020)</strong></li> <li><strong>Bác sĩ Đa khoa, Đại học Y Thái Bình (2006 - 2012)</strong></li> </ul>",
                clinic_id: "44f81103-529d-43cf-b189-2899f8aba61a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Trần Thị Ánh Loan",
                description:
                    "<p>Gần 30 năm kinh nghiệm lĩnh vực Nội Tổng hợp, Tiêu hóa, Truyền nhiễm</p> <p>Nguyên Phó khoa Khoa Nội Tiêu Hóa - Bệnh viện Thống Nhất</p> <p>Bác sĩ nhận khám và điều trị từ 16 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/07/173737-anh-bs-anh-loan-sg-viet-uc.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Trần Thị Ánh Loan</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm lĩnh vực Nội tổng hợp, Tiêu hóa, Truyền nhiễm</li> <li>Nguyên Phó khoa Khoa Nội Tiêu Hóa - Bệnh viện Thống Nhất</li> <li>Bác sĩ nhận khám và điều trị từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh lý truyền nhiễm: Các bệnh lý nhiễm khuẩn, viêm màng não, thuỷ đậu, cúm, sốt xuất huyết, quai bị, HIV/AIDS</li> <li>Bệnh lý tiêu hóa - gan mật: bệnh lý ruột kích thích, viêm loét dạ dày, trào ngược dạ dày, thực quản, ....</li> <li>Bệnh nội tiết - tim mạch - hô hấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Khoa Nội Tổng Hợp - Phòng khám Nội Tổng Hợp - Phòng khám gia đình Sài Gòn Việt Úc (2019 - Nay)</li> <li>Phó khoa Khoa Nội Tiêu Hóa - Bệnh viện Thống Nhất (2018 - 2019)</li> <li>Bác sĩ Khoa Nội Nhiễm - Bệnh viện Thống Nhất (2004 - 2017)</li> <li>Bác sĩ Chuyên ngành Nhiễm - Phân viện Sốt Rét Ký Sinh Trùng và Côn Trùng TP. HCM (2000 - 2003)</li> <li>Bác sĩ - Trung Tâm Y Tế huyện Long Hồ, tỉnh Vĩnh Long (1995 - 1999)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II - Chuyên ngành Nội chung - Học Viện Quân Y (2017)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I - Chuyên khoa truyền nhiễm - Đại học Y Dược TP. Hồ Chí Minh (2000)</li> <li>Tốt nghiệp Bác sĩ đa khoa - Đại học Cần Thơ (1995)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Tham gia Hội Nghị Tiêu Hóa - Hàn Quốc (2018)</li> <li>Tham gia Hội Nghị Hô hấp - Thái Lan (2013)</li> <li>Tham gia Hội Nghị Gan mật - Singapore (2011)</li> <li>Tham gia Hội Nghị Gan mật ở Chicingmai -Thái Lan (2007)</li> <li>Tập huấn nghiên cứu SR Kháng thuốc - Thái Lan (2002)</li> </ul>",
                clinic_id: "0fef3233-9610-4898-8546-0aeb5c9a1f31",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Đỗ Xuân Hải",
                description:
                    "<p>Gần 40 năm kinh nghiệm lĩnh vực Tiêu hóa - Gan mật</p> <p>Nguyên Trưởng khoa Tiêu hóa - Bệnh viện 30/4 Bộ Công An</p> <p>Bác sĩ nhận khám và điều trị cho bệnh nhân từ 15 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/11/151129-do-xuan-hai-gan-tam-duc.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Đỗ Xuân Hải</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm lĩnh vực Tiêu hóa - Gan mật</li> <li>Nguyên Trưởng khoa Tiêu hóa - Bệnh viện 30/4 Bộ Công An</li> <li>Bác sĩ nhận khám và điều trị cho bệnh nhân từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám các bệnh lý Nội khoa</li> <li>Khám các bệnh lý Gan mật:<ul> <li>Viêm gan virus B,C</li> <li>Xơ gan</li> <li>Gan nhiễm mỡ</li> <li>Bệnh lý gan mật khác.</li> </ul> </li> <li>Khám các bệnh lý Tiêu hóa:<ul> <li>Viêm dạ dày</li> <li>Đại tràng, nhiễm khuẩn HP</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Nội Tiêu hóa, trực tiếp thực hiện kỹ thuật nội soi - Bệnh viện Quốc tế Queen (2016 - Nay)</li> <li>Trưởng khoa Nội Tiêu hóa - Phòng khám Gan Tâm Đức ( 2016 - Nay)</li> <li>Trưởng khoa Cán bộ cấp cao, Trưởng khoa Nội Tiêu hóa - Bệnh viện 30/4 Bộ Công An (1993 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa cấp I Nội Tổng quát - Trường Đại học Y Dược TP.HCM (1986 - 1988)</li> <li>Bác sĩ Chuyên khoa Nội - Nhi - Nhiễm - Trường Đại học Y Dược TP. HCM (1978 - 1984)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội Gan mật TP. HCM</li> </ul>",
                clinic_id: "8ed6a4ba-1b3f-4bd9-91d4-ba5d30515b6f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Lý Thị Mỹ Dung",
                description:
                    "<p>40 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Gan mật </p> <p>Nguyên Trưởng khoa Nội Tiêu hóa, Bệnh viện Nguyễn Tri Phương </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/07/17/151850bs-cki-ly-thi-my-dung.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Lý Thị Mỹ Dung</strong></h2> <ul> <li>Nguyên Trưởng khoa Nội Tiêu hóa, Bệnh viện Nguyễn Tri Phương</li> <li>26 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Gan mật, đặc biệt viêm gan B, C</li> <li>Thường xuyên tham gia các hội nghị về Tiêu hóa - Gan mật Chấu Á Thái Bình Dương tại các Mỹ, Hàn Quốc, Singapore...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Cố vấn Chuyên môn Phòng khám Gan Tâm Đức (2019 - nay)</li> <li>Trưởng khoa Nội Tiêu hóa, Phòng khám Đa khoa Quốc tế Exson </li> <li>Trưởng khoa Gan Mật Tiêu hoá và Bác sĩ khám tại Phòng khám VIP Bệnh viện Đại học Y dược Sing Mark, Phòng khám Đa khoa Viet Life,...</li> <li>Trưởng khoa Nội Tiêu hóa, Bệnh viện Nguyễn Tri Phương (1984 - 2013) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Chuyên khoa cấp 1, Học viện Quân Y năm 2002 </li> <li>Tốt nghiệp Chuyên ngành Y - Nội tổng quát, Đại học Y Dược Tp Hồ Chí Minh năm 1984</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Các bệnh lý dạ dày</strong></p> <ul> <li>Đau dạ dày</li> <li>Trào ngược dạ dày - thực quản</li> <li>Viêm hang vị dạ dày</li> <li>Viêm, loét dạ dày</li> <li>Viêm, loét tá tràng</li> <li>Viêm loét dạ dày, tá tràng có nhiễm vi khuẩn Helicobacter Pylori</li> <li>Xuất huyết tiêu hóa </li> </ul> <p><strong>Các bệnh lý về đại tràng, trực tràng</strong></p> <ul> <li>Viêm đại tràng</li> <li>Viêm loét đại tràng</li> <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li> <li>Bệnh trĩ, trĩ chảy máu</li> </ul> <p><strong>Các bệnh lý về gan, mật</strong> </p> <ul> <li>Sỏi túi mật </li> <li>Viêm tụy</li> <li>Viêm xơ đường mật</li> <li>Viêm xơ gan do rượu</li> <li>Viêm tắc đường mật</li> <li>Xơ gan</li> <li>Gan nhiễm mỡ</li> <li>Viêm gan B,C</li> </ul>",
                clinic_id: "8ed6a4ba-1b3f-4bd9-91d4-ba5d30515b6f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư, Tiến sĩ Hà Văn Quyết",
                description:
                    "<p>Chuyên gia trên 35 năm kinh nghiệm trong lĩnh vực bệnh lý Tiêu hóa</p> <p>Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa</p> <p>Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội</p> <p>Bác sĩ khám cho người bệnh từ 3 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/12/31/155650-gs-ha-van-quyet.jpg",
                introduction:
                    "<h2><strong>Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết</strong></h2> <ul> <li>Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa</li> <li>Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa</li> <li>Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa</li> <li>Chuyên ngành Ngoại – Phẫu thuật Nội soi Tiêu hóa, Ổ bụng & các bệnh lý hậu môn, trực tràng.</li> <li>Bác sĩ Nội trú Bệnh viện Việt Đức </li> <li>Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội </li> <li>Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội</li> <li>Nguyên Phó Giám đốc Bệnh viện Việt Đức.</li> <li>Bác sĩ khám cho người bệnh từ 3 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><p>Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật. </p> </li> <li><p>Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng</p> </li> <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li> <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày</li> <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li> <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại.</li> </ul> <p><strong>Khám và điều trị các bệnh lý dạ dày</strong></p> <ul> <li>Gắp dị vật đường tiêu hóa</li> <li>Đau dạ dày</li> <li>Chảy máu dạ dày </li> <li>Đau thượng vị </li> <li>Viêm dạ dày</li> <li>Loét dạ dày tá tràng</li> <li>Nhiễm Helicobacter pylori dạ dày (HP)</li> <li>Trào ngược dạ dày thực quản (Gerd)</li> <li>Tắc ruột </li> <li>Polyp dạ dày </li> <li>Chảy máu dạ dày </li> <li>Viêm dạ dày ruột Virus</li> <li>Viêm ruột thừa</li> <li>Polyp dạ dày</li> <li>Ung thư dạ dày</li> <li>Táo bón</li> <li>Khó nuốt</li> <li>Khó tiêu</li> <li>Ợ nóng, Ợ chua</li> <li>Táo bón</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Văn Nghị",
                description:
                    "<p>Hơn 15 năm kinh nghiệm lĩnh vực Nội tiết - Tuyến giáp</p> <p>Hiện đang công tác tại Bệnh viện Nội tiết Trung Ương</p> <p>Bác sĩ nhận khám trên 3 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/15/155618-1bsi-nghi-hung-viet.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Văn Nghị</strong></h2> <ul> <li>Hơn 15 năm kinh nghiệm lĩnh vực Nội tiết - Tuyến giáp</li> <li>Hiện đang công tác tại Bệnh viện Nội tiết Trung Ương</li> <li>Bác sĩ nhận khám trên 3 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>U tuyến giáp</li> <li>Ung thư tuyến giáp</li> <li>Suy tuyến giáp </li> <li>Basedow</li> <li>Viêm tuyến giáp</li> <li>Các loại u dưới da: u mỡ, u bã đậu,…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa Ngoại chung - Bệnh viện Nội tiết Trung Ương (2008 - Nay)</li> <li>Công tác tại Bệnh viện Hưng Việt (Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Thạc sĩ - Đại học Y Hà Nội (2016 - 2018)</li> <li>Đại học Y Hải Phòng (2001 - 2007)</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ. Bác sĩ Lê Anh Tuấn",
                description:
                    "<p>Có kinh nghiệm trong khám, chẩn đoán và điều trị Ung thư vú- phụ khoa, Ung thư đường tiêu hóa, ung thư đầu cổ..</p> <p>Bác sĩ nhận khám trên 3 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/20/155530-bs-le-anh-tuan1.png",
                introduction:
                    "<h2><strong>Thạc sĩ. Bác sĩ Lê Anh Tuấn</strong></h2> <ul> <li>Có kinh nghiệm trong khám, chẩn đoán và điều trị Ung thư vú- phụ khoa, Ung thư đường tiêu hóa, ung thư đầu cổ..</li> <li>Bác sĩ nhận khám trên 3 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám tầm soát ung thư</li> <li>Tư vấn điều trị hóa chất các bệnh lý ung thư đường tiêu hóa (dạ dày, đại tràng, gan, mật , tụy), phổi, vú, cổ tử cung, buồng trứng….</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Hoá Chất và Chăm sóc giảm nhẹ, Bệnh viện Ung Bướu Hưng Việt (2013 - nay)</li> </ul> <h3><strong>Quá trình Đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ chuyên ngành Ung Bướu, Đại học Y Hà Nội (2016)</li> <li>Tốt nghiệp Bác sĩ Đa Khoa, Đại học Y Hà Nội (2006)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên của Hội nội khoa Ung thư Châu Âu -European Society for Medical Oncology (ESMO)</li> <li>Thành viên củaTrung tâm Ung Bướu tích hợp -The Integrated Cancer Center (IOC)</li> <li>Thành viên Hội ung thư Việt Nam</li> <li>Thành viên Hội ung thư lâm sàng Hoa Kỳ - American Society of Clinical Oncology (ASCO)</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "THS. BS Trần Chí Dũng",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm về khám, điều trị, phẫu thuật Chuyên khoa Ung bướu đầu, mặt, cổ</p> <p>Hiện đang công tác tại Bệnh viện Ung Bướu Hưng Việt </p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/10/10/094507-bs-dung1.jpg",
                introduction:
                    "<h2><strong>THS. BS Trần Chí Dũng</strong></h2> <ul> <li>Bác sĩ có nhiều năm kinh nghiệm về khám, điều trị, phẫu thuật Chuyên khoa Ung bướu đầu, mặt, cổ</li> <li>Hiện đang công tác tại Bệnh viện Ung Bướu Hưng Việt</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Ung thư Tuyến giáp (phẫu thuật mở, nội soi) </li> <li>Ung thư Tuyến nước bọt </li> <li>Ung thư Khoang miệng</li> <li>Ung thư Thanh quản </li> <li>Ung thư Da và phần mềm có tạo hình vùng mặt cổ</li> <li>Các loại U dưới da: u mỡ, u bã đậu…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa Ngoại đầu cổ, Bệnh viện Ung Bướu Hà Nội (2010 - tháng 6/ 2023)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp trường Đại học Y Hà Nội</li> <li>Thạc sĩ Y khoa Chuyên ngành Ung thư</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ Nội soi Tuyến giáp</li> <li>Chứng chỉ đốt sóng cao tần Tuyến giáp</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên Hội Ung thư Việt Nam</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Bác sĩ Nguyễn Xuân Tuấn",
                description:
                    "<p>Bác sĩ nội trú chuyên ngành Ung bướu tại Bệnh viện Đại học Y Hà Nội và Bệnh viện K Trung Ương</p> <p>Bác sĩ đang công tác tại Bệnh viện Ung bướu Hưng Việt</p> <p>Bác sĩ nhận khám trên 3 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/12/15/104446-bs-nguyen-xuan-tuan.png",
                introduction:
                    '<h2><strong>Thạc sĩ Bác sĩ Nguyễn Xuân Tuấn</strong></h2> <ul> <li>Bác sĩ nội trú chuyên ngành Ung bướu tại Bệnh viện Đại học Y Hà Nội và Bệnh viện K Trung Ương</li> <li>Bác sĩ đang công tác tại Bệnh viện Ung bướu Hưng Việt</li> <li>Bác sĩ nhận khám trên 3 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám, tư vấn, điều trị các bệnh lý về ung bướu:</strong></p> <ul> <li>Khám, sàng lọc, phát hiện sớm ung thư</li> <li>Chần đoán, tư vấn và điều trị các bệnh ung thư</li> <li>Phẫu thuật viên ung thư tuyến giáp</li> <li>Phẫu thuật viên ung thư đầu mặt cổ</li> <li>Phẫu thuật viên u vú, ung thư vú</li> <li>Phẫu thuật viên phần mềm</li> <li>Các loại u dưới da: u mỡ, u bã đậu…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Ung bướu Hưng Việt</li> <li>Bác sĩ nội trú chuyên ngành Ung bướu, Bệnh viện Đại học Y Hà Nội (2019)</li> <li>Bác sĩ nội trú chuyên ngành Ung bướu, Bệnh viện K (2019)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Đào tạo nâng cao tại khoa Ung bướu, Bệnh viện Đại học Y Hà Nội (2021)</li> <li>Tốt nghiệp Đại học Y Hà Nội (2016)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên Hội Ung thư Việt Nam</li> <li>Đồng sáng lập CLB "Đồng hành cùng BN ung thư tuyến giáp và bệnh lý tuyến giáp"</li> </ul>',
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Bùi Tiến Dũng",
                description:
                    "<p>Phó Trưởng khoa Ung bướu, Bệnh viện Đa khoa tỉnh Vĩnh Phúc</p> <p>Bác sĩ được đào tạo chuyên sâu về lĩnh vực ung bướu</p> <p>Bác sĩ nhận khám trên 3 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/12/30/162036-bs-bui-tien-dung.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Bùi Tiến Dũng</strong></h2> <ul> <li>Phó Trưởng khoa Ung bướu, Bệnh viện Đa khoa tỉnh Vĩnh Phúc</li> <li>Bác sĩ được đào tạo chuyên sâu về lĩnh vực ung bướu</li> <li>Bác sĩ nhận khám trên 3 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ung thư gan và viêm gan B,C</li> <li>Ung thư phổi, phế quản</li> <li>Ung thư vú</li> <li>Ung thư tuyến giáp và điều trị RFA u tuyến giáp lành tính</li> <li>Ung thư dạ dày</li> <li>Ung thư đại trực tràng</li> <li>Ung thư bàng quang</li> <li>Ung thư tiền liệt tuyến</li> <li>Ung thư tử cung, buồng trứng</li> <li>Các bệnh về Hạch bạch huyết</li> <li>Các loại u dưới da: u mỡ, u bã đậu…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Trưởng khoa Ung bướu, Bệnh viện Đa khoa tỉnh Vĩnh Phúc (2016 - 2020)</li> <li>Bác sĩ khoa Nội Ung bướu, Bệnh viện Hữu Nghị Lạc Việt (2012 - 2014)</li> <li>Bác sĩ khoa ung bướu - Bệnh viện đa khoa tỉnh Vĩnh Phúc (2010 - 2012)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ Đại học Y Hà Nội (2016)</li> <li>Tốt nghiệp Đại học Y Hải Phòng (2010)</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu tú, Bác sĩ CKII Nguyễn Tiến Lãng",
                description:
                    "<p>Nguyên Trưởng khoa Ngoại chung – Bệnh viện Nội tiết Trung ương</p> <p>Gần 40 năm kinh nghiệm trong lĩnh vực Nội tiết, hơn 30 năm phẫu thuật tuyến giáp</p> <p>Bác sĩ nhận khám trên 3 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/22/111912-screenshot-from-2021-02-22-11-17-23.png",
                introduction:
                    "<h2><strong>Thầy thuốc Ưu tú, Bác sĩ CKII Nguyễn Tiến Lãng</strong></h2> <ul> <li>Nguyên Trưởng khoa Ngoại chung – Bệnh viện Nội tiết Trung ương</li> <li>Gần 40 năm kinh nghiệm trong lĩnh vực Nội tiết, hơn 30 năm phẫu thuật tuyến giáp</li> <li>Bác sĩ nhận khám trên 3 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ có thế mạnh về phẫu thuật ung thư tuyến giáp</strong></p> <p><strong>Khám, tư vấn, điều trị các bệnh lý tuyến giáp:</strong> </p> <ul> <li>Đái tháo đường</li> <li>Basedow</li> <li>Bướu cổ</li> <li>Cường cận giáp</li> <li>Suy giáp</li> <li>Cường giáp</li> <li>Suy tuyến yên</li> <li>Tăng đường huyết bệnh tiểu đường</li> <li>Hạ đường huyết ở bệnh tiểu đường</li> <li>Tiền tiểu đường</li> <li>Tiểu đường tuýp 1</li> <li>Tiểu đường tuýp 2</li> <li>U tuyến yên</li> <li>Ung thư tuyến giáp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Trưởng khoa Ngoại chung – Bệnh viện Nội tiết Trung ương</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thủ khoa Chuyên khoa II, Đại học Y Hà Nội (2008)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên Hội Phẫu thuật Ung thư Tuyến giáp</li> <li>Hội viên Hội Phẫu thuật Nội soi</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Vũ Hải",
                description:
                    "<p>Nguyên Trưởng khoa Khám bệnh, Bệnh viện K</p> <p>Gần 40 năm kinh nghiệm trong lĩnh vực Ung bướu, đặc biệt về các bệnh tuyến vú</p> <p>Thành viên Hội Ung thư Việt Nam</p> <p>Bác sĩ nhận khám trên 3 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/04/27/115715-bac-si-vu-hai-2.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Vũ Hải</strong></h2> <ul> <li>Nguyên Trưởng khoa Khám bệnh, Bệnh viện K Trung ương</li> <li>Gần 40 năm kinh nghiệm trong lĩnh vực Ung bướu, đặc biệt về các bệnh tuyến vú</li> <li>Thành viên Hội Ung thư Việt Nam</li> <li>Bác sĩ nhận khám trên 3 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị hầu hết các nhóm bệnh ung bướu. Tuy nhiên có thế mạnh trong thăm khám về tuyến vú, ung thư ở phụ nữ:</p> <ul> <li>Ung thư vú</li> <li>U xơ tử cung</li> <li>U nang bường trứng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khám bệnh, Bệnh viện K Trung ương (1998 - 2019)</li> <li>Bác sĩ khoa Ngoại, Bệnh viện Sơn Tây (1986 - 1998)</li> <li>Đại đội trưởng Quân Y, Trung đoàn 2T4 - Sư đoàn 355 - Lào Cai (1982 - 1986)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tiến sĩ Ngoại Ung bướu - Tiêu hóa, Học viện Quân Y (2003 - 2009)</li> <li>Thạc sĩ Y khoa (1998 - 2000)</li> <li>Bác sĩ Chuyên khoa I - Ngoại chung, Đại học Y Hà Nội (1986 - 1989)</li> <li>Bác sĩ Đa khoa, Đại học Y Hà Nội (1976-1982)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Tiến sĩ Y khoa, Học viện Quân Y (2009)</li> <li>Thạc sĩ Y khoa - Chuyên ngành Ngoại chung, Học viện Quân Y (2000)</li> <li>Bác sĩ Chuyên khoa cấp I - Ngoại chung, Đại học Y Hà Nội (1989)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội Ngoại khoa Việt Nam</li> <li>Thành viên Hội Ung thư Việt Nam</li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình...</strong></h3> <ul> <li>Bác sĩ được mời tham gia chuyên đề khám, chẩn đoán tư vấn về Ung bướu trên tuyền hình (chương trình Sức khỏe đời sống, VTV1) và có nhiều bài viết được đăng trên các trang báo Dân trí, Soha...</li> </ul>",
                clinic_id: "3493c127-d0a9-4f7d-8604-999d8b06a05f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu tú, Bác sĩ Cao cấp Hoàng Đình Lân",
                description:
                    "<p>Hơn 40 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Hậu môn Trực Tràng</p> <p>Chuyên gia đầu ngành về Hậu môn Trực tràng</p> <p>Nguyên chủ nhiệm khoa Ngoại – Bệnh viện Y học Cổ truyền Trung ương</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/09/04/093658bac-si-hoang-dinh-lan.jpg",
                introduction:
                    "<h2><strong>Thầy thuốc Ưu tú, Bác sĩ Cao cấp Hoàng Đình Lân</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Hậu môn Trực Tràng</li> <li>Chuyên gia đầu ngành về Hậu môn Trực tràng</li> <li>Nguyên chủ nhiệm khoa Ngoại – Bệnh viện Y học Cổ truyền Trung ương</li> <li>Hiện nay, Bác sĩ đang là Phó chủ tịch Hội Hậu môn Trực tràng – Kiêm tổng thư ký Hội Hậu môn Trực tràng Việt Nam</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 12 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Chẩn đoán và kết hợp các phương pháp điều trị từ đông y với tây y đạt kết quả cao cho các bệnh lý:</p> <ul> <li>Bệnh trĩ nội độ 1,2,3,4</li> <li>Bệnh trĩ ngoại</li> <li>Bệnh trĩ hỗn hợp</li> <li>Dị vật hậu môn</li> <li>Rò hậu môn, ngứa hậu môn</li> <li>Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó</li> <li>Polip hậu môn, Apxe hậu môn</li> <li>Tư vấn dự phòng tái phát bệnh trĩ sau phẫu thuật hoặc phòng ngừa bệnh trĩ khi có nguy cơ cao như táo bón, tiêu chảy, nghề nghiệp</li> <li>Tư vấn chế độ sinh hoạt đề phòng nguyên nhân gây bệnh như: đứng lâu, ngồi nhiều, ăn uống không điều độ, lỵ, táo bón kéo dài</li> <li>Tư vấn chế độ tập thể dục, dinh dưỡng vệ sinh cá nhân, làm việc cũng như các thực phẩm bổ sung cho bệnh nhân bệnh lý hậu môn, trực tràng, bệnh trĩ nội – ngoại</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Tiêu hóa, Bệnh Viện Đa khoa Hồng Phát</li> <li>Ủy viên ban chấp hành – Tổng biên tập tạp chí đại trực tràng Việt Nam</li> <li>Nguyên chủ nhiệm khoa Ngoại – Bệnh viện Y học Cổ truyền Trung ương</li> <li>Nguyên Phó bí thư Đảng ủy – Bệnh viện Y học Cổ truyền Trung ương</li> <li>Nguyên Phó Giám đốc Bệnh viện Nam Á</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Phó chủ tịch Hội Hậu môn Trực tràng – Kiêm tổng thư ký Hội Hậu môn Trực tràng Việt Nam</li> </ul>",
                clinic_id: "63c1de53-26dd-4260-8611-d78518313a97",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Trần Thị Tô Châu",
                description:
                    "<p>Phó Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</p> <p>Phó Chủ tịch Hội Loãng xương Hà Nội </p> <p>Bác sĩ nhận khám từ 18 tuổi trở lên </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/11/12/101556-bs-to-chau.png",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Trần Thị Tô Châu</strong></h2> <ul> <li>Phó Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</li> <li>Phó Chủ tịch hội Loãng xương Hà Nội</li> <li>Bác sĩ Chuyên khoa Cơ xương khớp </li> <li>Bác sĩ nhận khám từ 18 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</li> </ul> <h3><strong>Các hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Phó Chủ tịch hội Loãng xương Hà Nội</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh khớp tự miễn: viêm cột sống dính khớp, viêm khớp dạng thấp, viêm khớp tự phát tuổi thiếu niên, lupus ban đỏ hệ thống</li> <li>Bệnh khớp do thoái hóa khớp: Thoái hóa khớp thứ phát do chấn thương, thoái hóa nguyên phát khớp ngoại biên như khớp gối, khớp vai, thoái hóa cột sống thắt lưng, thoát vị đãi đệm</li> <li>Loãng xương</li> <li>Viêm khớp </li> <li>Và các bệnh lý Cơ xương khớp khác</li> </ul>",
                clinic_id: "63c1de53-26dd-4260-8611-d78518313a97",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư, Tiến sĩ Thái Hồng Quang",
                description:
                    "<p>Chuyên gia đầu ngành về Nội tiết - Đái tháo đường</p> <p>Nguyên Viện trưởng Bệnh viện 103 - Học viện Quân Y</p> <p>Chủ tịch Hội Nội tiết – Đái tháo đường Việt Nam</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/09/04/093422giao-su-thai-hong-quang.jpg",
                introduction:
                    "<h2><strong>Giáo sư, Tiến sĩ Thái Hồng Quang</strong></h2> <ul> <li>Chuyên gia đầu ngành về Nội tiết - Đái tháo đường</li> <li>Nguyên Viện trưởng Bệnh viện 103 - Học viện Quân Y</li> <li>Chủ tịch Hội Nội tiết – Đái tháo đường Việt Nam</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Viện trưởng Bệnh viện 103 – Học viện Quân Y</li> <li>Chủ nhiệm Bộ môn Nội – Học viện Quân Y</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y- Dược Hà Nội năm 1965</li> <li>Học chuyên ngành “Nội tiết” tại Học viện Y học Kirov Leningrad (Liên Xô cũ) (1967 - 1970)</li> <li>Bảo vệ thành công luận án Tiến sĩ Y học năm 1989 </li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Nhà nước phong học hàm Phó Giáo sư năm 1991</li> <li>Nhà nước phong học hàm Giáo sư năm 1996</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Chủ tịch Hội Nội tiết – Đái tháo đường Việt Nam.</li> <li>Chủ tịch Hội Nội tiết – Đái tháo đường Hà Nội.</li> <li>Uỷ viên Hội đồng khoa học Cục Quân Y (Phó tiểu ban Nội)</li> <li>Uỷ viên ban chấp hành Hội Nội khoa Việt Nam</li> <li>Uỷ viên Hội Tim mạch học Việt Nam</li> <li>Tổng biên tập Tạp chí “Nội tiết Đái tháo đường Việt Nam”</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Tác giả sách Bệnh nội tiết, Xuất bản ở Học viện Quân Y năm 1989</li> <li>Tác giả sáchThực hành lâm sàng bệnh Nội tiết, năm 2012</li> </ul>",
                clinic_id: "63c1de53-26dd-4260-8611-d78518313a97",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Ngọc Hưng",
                description:
                    "<p>Hơn 40 năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực khoa Ngoại Nhi và Chỉnh hình</p> <p>Nguyên Phó Trưởng khoa Ngoại, Bệnh viện Nhi Trung ương</p> <p>Nguyên Trưởng khoa Chỉnh hình, Bệnh viện Nhi Trung ương</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/08/04/160306-3260b8b21535d76b8e24.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Ngọc Hưng</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm làm việc chuyên sâu trong lĩnh vực khoa Ngoại Nhi và Chỉnh hình</li> <li>Nguyên Phó Trưởng khoa Ngoại, Bệnh viện Nhi Trung Ương</li> <li>Nguyên Trưởng khoa Chỉnh hình, Bệnh viện Nhi Trung Ương</li> <li>Bác sĩ nhận khám tất cả các độ tuổi, đặc biệt và thiên nhiều về bệnh nhân Nhi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Dị tật bẩm sinh về xương khớp</li> <li>Viêm tủy xương ở trẻ em</li> <li>Chấn thương chỉnh hình và cột sống Nhi</li> <li>Trật khớp háng bẩm sinh</li> <li>Khám và điều trị các bệnh lý về khớp đòi: tạo hình khớp, thay khớp, nội soi khớp, tái tạo dây chằng khớp</li> </ul> <h2><strong>Quá trình công tác</strong></h2> <ul> <li>Bác sĩ khoa Chỉnh hình, Bệnh viện Nhi Trung ương (01/2011 - Nay)</li> <li>Giáo viên kiêm nhiệm Đại học Y Hà Nội và Học viện Quân y (1984 - Nay)</li> <li>Trưởng khoa Chỉnh hình, Bệnh viện Nhi Trung ương (10/2004 - 12/2010)</li> <li>Phó Trưởng khoa Ngoại, Bệnh viện Nhi Trung ương (06/1998 - 09/2004)</li> <li>Bác sĩ khoa Ngoại, Bệnh viện Nhi Trung ương (10/1984 - 05/1998)</li> <li>Giảng viên Đại học Quân Y; Bác sĩ bộ môn khoa Chấn thương Học viện Quân Y (03/1979 - 09/1984)</li> </ul> <h2><strong>Quá trình đào tạo</strong></h2> <ul> <li>Nhận chức danh Phó Giáo sư của Hội đồng Chức danh Giáo sư Nhà nước (2004)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa II tại Học viện Quân Y (2001)</li> <li>Bảo vệ luận án Tiến sĩ tại Học viện Quân Y (1995)</li> <li>Tốt nghiệp Đại học (1979)</li> </ul>",
                clinic_id: "63c1de53-26dd-4260-8611-d78518313a97",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Mai Thị Anh Thư",
                description:
                    "<p>Bác sĩ có hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về mắt</p> <p>Trưởng Khoa Khám bệnh của Bệnh viện Mắt Hà Nội 2</p> <p>Bác sĩ chuyên khám và phẫu thuật điều trị đục thủy tinh thể và bệnh Glocom</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/03/163611-3-thsbs-mai-thi-anh-thu.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Mai Thị Anh Thư</strong></h2> <ul> <li>Trưởng Khoa Khám bệnh của Bệnh viện Mắt Hà Nội 2</li> <li>Bác sĩ chuyên khám và phẫu thuật điều trị đục thủy tinh thể và bệnh Glocom</li> <li>Bác sĩ có hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về mắt</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị các bệnh lý về đáy mắt</li> <li>Khám và điều trị các bệnh lý nội khoa, khúc xạ </li> <li>Phẫu thuật Phaco, điều trị bệnh đục thể thủy tinh</li> <li>Phẫu thuật Glocom</li> <li>Tham gia phẫu thuật trung phẫu, tiểu phẫu </li> <li>Chuyên sâu về phương pháp đo khúc xạ khách quan và chủ quan ở trẻ em </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khám bệnh của Bệnh viện Mắt Hà Nội 2</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chứng chỉ chẩn đoán hình ảnh nhãn khoa tại Đại học Y Hà Nội</li> <li>Chứng chỉ phẫu thuật Phaco</li> <li>Chứng chỉ khúc xạ - mài lắp kính tại Đại học Y Hà Nội</li> <li>Thạc sĩ chuyên ngành nhãn khoa Đại học Y Hà Nội</li> <li>Bác sĩ Đa khoa Đại học Y Hà Nội</li> </ul>",
                clinic_id: "3817b070-1549-41e1-b146-9c211f2e137a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Thị Thúy Nga",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong khám và điều trị các bệnh lý về mắt</p> <p>Phó Trưởng khoa Khúc xạ Bệnh viện Mắt Hà Nội 2</p> <p>Bác sĩ chuyên khám và Phẫu thuật, điều trị & kiểm soát tật khúc xạ</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/03/165611-4-bscki-nguyen-thi-thuy-nga.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Thị Thúy Nga</strong></h2> <ul> <li>Gần 20 năm kinh nghiệm trong khám và điều trị các bệnh lý về mắt</li> <li>Phó Trưởng khoa Khúc xạ Bệnh viện Mắt Hà Nội 2</li> <li>Bác sĩ chuyên khám và Phẫu thuật, điều trị & kiểm soát tật khúc xạ</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và chỉ định điều trị các bệnh lý nhãn khoa, đặc biệt là khúc xạ </li> <li>Tham gia phẫu thuật trung phẫu, phẫu thuật khúc xạ </li> <li>Có nhiều năm kinh nghiệm về chỉnh quang, chỉnh kính, tập nhược thị </li> <li>Khám chỉ định tư vấn kính tiếp xúc (cứng, mềm, kính chỉnh hình giác mạc) </li> <li>Chẩn đoán, kết luận kết quả siêu âm, đo thị trường, chụp OCT, chụp mạch huỳnh quang... </li> <li>Quang đông võng mạc bằng laser, dịch kính, bao sau, mống mắt</li> <li>Điều trị các bệnh lý võng mạc: bong võng mạc, võng mạc đái tháo đường,...</li> <li>Phẫu thuật Femto-Lasik</li> <li>Phẫu thuật Relex Smile</li> <li>Phẫu thuật điều trị lão thị Presbyond</li> <li>Cross Linking điều trị giác mạc chóp</li> <li>Kiểm soát cận thị ở trẻ em (Khám và tư vấn kính Ortho-K)</li> <li>Điều trị nhược thị</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Trưởng khoa Khúc xạ Bệnh viện Mắt Hà Nội 2</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chứng chỉ phẫu thuật khúc xạ</li> <li>Chứng chỉ thiết bị đo kiểm chẩn đoán tật khúc xạ mắt</li> <li>Chuyên khoa I Nhãn Khoa Đại học Y Hà Nội;</li> </ul>",
                clinic_id: "3817b070-1549-41e1-b146-9c211f2e137a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Lưu Thị Thiều Hoa",
                description:
                    "<p>Bác sĩ có hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Bác sĩ đang công tác tại Bệnh viện Mắt Hà Nội 2</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/03/172022-5-bscki-luu-thi-thieu-hoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Lưu Thị Thiều Hoa</strong></h2> <ul> <li>Bác sĩ có hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về mắt</li> <li>Bác sĩ chuyên phẫu thuật tạo hình thẩm mỹ mắt, mí và mi; phẫu thuật mộng, quặm</li> <li>Bác sĩ đang công tác tại Bệnh viện Mắt Hà Nội 2</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị các bệnh lý nội khoa chuyên ngành nhãn khoa </li> <li>Tham gia phẫu thuật trung phẫu, tiểu phẫu </li> <li>Thực hiện các kỹ thuật: soi bóng đồng tử, góc tiền phòng, đáy mắt... </li> <li>Đo khúc xạ kiểm tra và cắt kính</li> <li>Phẫu thuật thẩm mỹ mắt, bệnh lý lệ đạo</li> <li>Lắp mắt giả</li> <li>Phẫu thuật lác</li> <li>Phẫu thuật mộng, quặm</li> <li>Phẫu thuật ghép kết mạc rìa tự thân</li> <li>Phẫu thuật điều trị các bệnh tuyến lệ</li> <li>Phẫu thuật mổ u</li> <li>Phẫu thuật thẩm mỹ - tạo hình vùng mắt như: phẫu thuật sụp mi, phẫu thuật mí đôi, phẫu thuật nâng cung mày, phẫu thuật cắt da mi thừa, phẫu thuật cắt bọng mỡ mắt, phẫu thuật tạo hình mi...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chứng chỉ chẩn đoán hình ảnh do Bệnh viện Mắt Trung Ương cấp</li> <li>Chứng chỉ Thẩm mỹ mắt tại Bệnh viện Mắt Trung Ương</li> <li>Chứng chỉ Khúc Xạ - Mài lắp kính Đại học Y Hà Nội & Viện thị giác Brien Holden (Australia);</li> <li>Chứng nhận đào tạo chuyên ngành Phẫu thuật mộng ghép kết mạc rìa tự thân Bệnh viện Mắt TW;</li> <li>Bác sĩ chuyên khoa I chuyên ngành nhãn khoa Đại học Y Hà Nội;</li> <li>Bác sĩ Đa khoa Đại học Y Hà Nội;</li> </ul>",
                clinic_id: "3817b070-1549-41e1-b146-9c211f2e137a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Lê Thị Phương Thảo",
                description:
                    "<p>Bác sĩ có hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2</p> <p>Bác sĩ chuyên khoa Mắt Bệnh viện mắt Trung Ương</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/03/173735-6-bscki-le-thi-phuong-thao.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Lê Thị Phương Thảo</strong></h2> <ul> <li>Bác sĩ có hơn 10 năm kinh nghiệm trong khám và điều trị các bệnh lý về mắt</li> <li>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2, Bác sĩ chuyên khoa Mắt Bệnh viện mắt Trung Ương</li> <li>Bác sĩ chuyên khám và điều trị các bệnh lý về đáy mắt, phẫu thuật dịch kính võng mạc</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị các bệnh lý nội khoa chuyên ngành nhãn khoa</li> <li>Khám mắt tổng quát</li> <li>Khám, điều trị và phẫu thuật đáy mắt</li> <li>Thực hiện các kỹ thuật: soi bóng đồng tử, góc tiền phòng, đáy mắt...</li> <li>Đo khúc xạ kiểm tra và cắt kính</li> <li>Phẫu thuật dịch kính võng mạc</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Mắt Bệnh viện mắt Trung Ương</li> <li>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Đào tạo CME Tiêm nội nhãn</li> <li>Khóa học thực hành phẫu thuật thể thủy tinh trên máy mô phỏng (Simulator)</li> <li>Đào tạo CME Kỹ thuật lắp đặt kính Ortho-K</li> <li>Đào tạo CME Bệnh lý dịch kính võng mạc</li> <li>Đào tạo CME Phẫu thuật thẩm mĩ, tạo hình mắt</li> <li>Đào tạo CME Điều trị nội khoa võng mạc</li> <li>Đào tạo CME Chẩn đoán hình ảnh (OCT, thị trường) trong bệnh Glôcôm và dịch kính võng mạc</li> <li>Bác sĩ chuyên khoa I chuyên ngành nhãn khoa Đại học Y Hà Nội</li> <li>Bác sĩ chuyên khoa mắt - Bệnh viện Mắt Trung Ương</li> <li>Bác sĩ Đa khoa Đại học Y khoa Maxcova mang tên Sechenov (Y1) - Nga</li> </ul>",
                clinic_id: "3817b070-1549-41e1-b146-9c211f2e137a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Hoàng Thanh Nga",
                description:
                    "<p>Bác sĩ có hơn 15 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Bác sĩ chuyên khám và điều trị các bệnh lý trẻ em, đặc biệt là kiểm soát cận thị ở trẻ em</p> <p>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/03/180401-7-ths-bs-hoang-thanh-nga.jpg",
                introduction:
                    '<h2><strong>Thạc sĩ, Bác sĩ Hoàng Thanh Nga</strong></h2> <ul> <li>Bác sĩ có hơn 15 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</li> <li>Bác sĩ chuyên khám và điều trị các bệnh lý trẻ em, đặc biệt là kiểm soát cận thị ở trẻ em</li> <li>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị tất cả các bệnh lý nhãn khoa</li> <li>Kiểm soát cận thị ở trẻ em</li> <li>Khám và điều trị bệnh Glocom</li> <li>Khám, điều trị các bệnh đáy mắt</li> <li>Điều trị bệnh về Kết - giác mạc</li> <li>Điều trị các tật khúc xạ</li> <li>Phẫu thuật thẩm mỹ tạo hình mắt</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khám và phẫu thuật tại Bệnh viện Mắt Hà Nội 2</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chứng chỉ đào tạo liên tục chuyên đề OCT trong nhãn khoa (2022)</li> <li>Chứng chỉ về phẫu thuật tạo hình thẩm mỹ tại Bệnh viện Mắt TW (2014)</li> <li>Chứng chỉ đào tạo Glocom tại Đại học Y Thái Nguyên kết hợp Bệnh viện Mắt TW (2013)</li> <li>Bác sĩ đa khoa tại Đại học Y dược Thái Nguyên</li> <li>Chứng chỉ đào tạo khúc xạ tại Đài Loan (2009)</li> <li>Thạc sĩ chuyên ngành Nhãn khoa tại Đại học Y Hà Nội</li> </ul> <h3><strong>Giải thưởng và các công trình nghiên cứu</strong></h3> <ul> <li>Giải Nhất về đề tài nghiên cứu tại hội nghị khoa học công nghệ tuổi trẻ các trường Đại học, cao đẳng Y Dược Việt Nam lần thứ XVII</li> <li>Giải Nhì cuộc thi "Sáng tạo trẻ" của tỉnh Thái Nguyên năm 2015</li> </ul>',
                clinic_id: "3817b070-1549-41e1-b146-9c211f2e137a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ Hoàng Thị Minh Châu",
                description:
                    "<p>Bác sĩ có hơn 40 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</p> <p>Nguyên Phó Giám đốc, Nguyên Trưởng khoa Kết Giác mạc Bệnh viện Mắt Trung ương</p> <p>Hiện là Chủ tịch Hội đồng chuyên môn Bệnh viện Mắt Hà Nội 2</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/04/03/105007-1-pgs-ts-hoang-thi-minh-chau.jpg",
                introduction:
                    '<h2><strong>Phó Giáo sư, Tiến sĩ Hoàng Thị Minh Châu</strong></h2> <ul> <li>Bác sĩ có hơn 40 năm kinh nghiệm trong khám và điều trị các bệnh lý về Mắt</li> <li>Nguyên Phó Giám đốc, Nguyên Trưởng khoa Kết Giác mạc Bệnh viện Mắt Trung ương</li> <li>Hiện là Chủ tịch Hội đồng chuyên môn Bệnh viện Mắt Hà Nội 2</li> <li>Bác sĩ là một trong những chuyên gia hàng đầu nhãn khoa hàng đầu trong lĩnh vực kết giác mạc và đục thủy tinh thể</li> <li>Trực tiếp đào tạo hàng trăm bác sĩ phẫu thuật thể thuỷ tinh, cắt mộng, ghép giác mạc</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị tất cả các bệnh lý về mắt</strong></p> <ul> <li>Khám - điều trị tổng quát các bệnh về mắt</li> <li>Đục thủy tinh thể</li> <li>Ghép giác mạc</li> <li>Mộng mắt</li> <li>Nhận hội chẩn và điều trị tất cả các về bệnh mắt</li> </ul> <p><strong>Chuyên sâu về các bệnh lý: Kết - Giác mạc</strong></p> <ul> <li>Phẫu thuật ghép giác mạc</li> <li>Phẫu thuật Phaco điều trị đục thể thủy tinh</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chủ tịch Hội đồng chuyên môn Bệnh viện Mắt Hà Nội 2 (Nay)</li> <li>Nguyên Phó Giám đốc Bệnh viện Mắt Trung ương</li> <li>Nguyên Trưởng khoa Kết giác mạc - Bệnh viện Mắt Trung ương</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Phó Giáo sư, Tiến sĩ - Đại học Y Hà Nội</li> <li>Nghiên cứu sinh tại Việt Nam và Liên Xô</li> <li>Bác sĩ nội trú mắt - Đại học Y Hà Nội</li> </ul> <h3><strong>Nghiên cứu khoa học - Giải thưởng</strong></h3> <ul> <li>Nghiên cứu sinh tại Viện mắt Philatov (Ukraine, Liên xô cũ), chuyên đề ghép giác mạc</li> <li>Thành viên nhóm nghiên cứu đã được trao Giải thưởng Kovalevskaya, công trình nghiên cứu "Ứng dụng tế bào gốc trong điều trị bệnh bề mặt nhãn cầu"</li> <li>Công bố nhiều công trình nghiên cứu khoa học ứng dụng thành công vào điều trị lâm sàng</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Phó Chủ tịch Hội Nhãn khoa Việt Nam</li> <li>Chủ tịch Hội Nhãn khoa Hà Nội</li> </ul>',
                clinic_id: "3817b070-1549-41e1-b146-9c211f2e137a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Thị Thu Thủy",
                description:
                    "<p>Bác sĩ gần 25 năm kinh nghiệm về Nha khoa, trồng implant, răng sứ</p> <p>Bác sĩ từng công tác tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh</p> <p>Bác sĩ chuyên phục hình răng sứ, cấy ghép Implant, All On 4/All On 6...</p> <p>Bác sĩ nhận khám 12 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/21/152811-bs-thu-thuy-hh1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Thị Thu Thủy</strong></h2> <ul> <li>Bác sĩ gần 25 năm kinh nghiệm về Nha khoa, trồng implant, răng sứ</li> <li>Bác sĩ từng công tác tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh</li> <li>Bác sĩ chuyên phục hình răng sứ, cấy ghép Implant, All On 4/All On 6...</li> <li>Bác sĩ nhận khám 12 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chuyên gia tư vấn thẩm mỹ toàn hàm</li> <li>Phục hình răng sứ, mặt dán sứ Veneer, Hollywood Smile</li> <li>Cấy ghép Implant đơn và Implant toàn hàm (All On 4, All On 6,…)</li> <li>Điều trị cười hở lợi, phẫu thuật thẩm mỹ nướu</li> <li>Tư vấn phẫu thuật hàm mặt (Chỉnh hình cằm lệch, cằm dài, lẹm, 2 cằm; phẫu thuật hô-móm, thu gọn gò má, V-line,…)</li> <li>Nha khoa tổng quát</li> <li>Điều trị tủy, nha chu</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Nha khoa Hoa Hồng Phương Đông (2012 - Nay) </li> <li>Bác sĩ tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh (2000 - 2012) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa Răng Hàm Mặt, Đại học Y Dược TP. Hồ Chí Minh (12/09/2000) </li> </ul> <h3><strong>Chứng chỉ trong nước và nước ngoài</strong></h3> <ul> <li>Đào tạo liên tục - Cấy ghép Nha khoa, Bệnh viện Răng Hàm Mặt TP.HCM (28/06/2016 – 30/09/2016) </li> <li><strong>Cấy ghép All On 4, All On 4 Clinic, Melbourne (15 - 17/03/2016)</strong> </li> <li><strong>Phục hình cấy ghép Nha khoa, Hội Y Học TP.HCM (27 - 28/05/2016)</strong> </li> <li><strong>Đào tạo liên tục – Critical Issue in Implant Dentistry (Cấy ghép nha khoa), Đại học Harvard, Mỹ (25-27/07/2016)</strong></li> <li><strong>Thẩm mỹ trong cấy ghép Nha khoa, Hội Y Học TP.HCM (11/12/2015)</strong> </li> <li><strong>Hội nghị cấy ghép Nha khoa, Hội Y Học TP.HCM (2 - 13/12/2015)</strong></li> </ul>",
                clinic_id: "9234fb25-5d13-4f19-82b6-235c4e52abc2",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Trần Thanh Bình ",
                description:
                    "<p>Bác sĩ có hơn 25 năm kinh nghiệm về lĩnh vực Nha khoa, nội nha, trồng implant, răng sứ</p> <p>Bác sĩ từng công tác tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh </p> <p>Chuyên gia về chữa Tủy răng, cấy ghép Implant, Phục hình răng sứ</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/21/164115-bs-binh-hh1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trần Thanh Bình</strong></h2> <ul> <li>Bác sĩ có hơn 25 năm kinh nghiệm về lĩnh vực Nha khoa, nội nha, trồng implant, răng sứ</li> <li>Bác sĩ từng công tác tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh</li> <li>Chuyên gia về chữa Tủy răng, cấy ghép Implant, Phục hình răng sứ</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Phục hình răng sứ, mặt dán sứ Veneer, Hollywood Smile</li> <li>Cấy ghép Implant đơn và Implant toàn hàm (All On 4, All On 6,…)</li> <li>Điều trị cười hở lợi, phẫu thuật thẩm mỹ nướu</li> <li>Tư vấn phẫu thuật hàm mặt (Chỉnh hình cằm lệch, cằm dài, lẹm, 2 cằm; phẫu thuật hô-móm, thu gọn gò má, V-line,…)</li> <li>Nha khoa tổng quát</li> <li>Điều trị tủy, nha chu</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Công tác tại Nha khoa Hoa Hồng Phương Đông (2012 - Nay) </li> <li>Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh (1997 - 2012) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Răng Hàm Mặt, Đai học Y dược TP. Hồ Chí Minh (17-10-1999)</li> </ul>",
                clinic_id: "9234fb25-5d13-4f19-82b6-235c4e52abc2",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Lê Minh Đông",
                description:
                    "<p>Hơn 25 năm kinh nghiệm trong hoạt động khám và điều trị bệnh lý Tim mạch - Nội tiết - Tiêu hóa - Hô hấp</p> <p>Nguyên bác sĩ Nội khoa - Bệnh viện Nhân dân Gia Định</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/22/140859-470280c289ca57940edb.jpg",
                introduction:
                    "<p><h2><strong>Thạc sĩ, Bác sĩ Lê Minh Đông</strong></h2></p> <ul> <li>Hơn 25 năm kinh nghiệm trong hoạt động khám và điều trị bệnh lý Tim mạch - Nội tiết - Tiêu hóa - Hô hấp</li> <li>Nguyên bác sĩ Nội khoa - Bệnh viện Nhân dân Gia Định</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh lý Tim mạch – Nội tiết</li> <li>Bệnh lý Tiêu hóa</li> <li>Bệnh lý Hô hấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Y khoa, Phòng khám Đa khoa Hạnh Phúc (Nay)</li> <li>Bác sĩ điều trị Nội tổng hợp và Cấp cứu, Bệnh viện Hoàn Mỹ Sài Gòn (2017)</li> <li>Bác sĩ khoa Cấp cứu, Bệnh viện Nhân Dân Gia Định (2007 - 2017)</li> <li>Bác sĩ điều trị, Viện Y học dân tộc TP. HCM (2000 - 2007)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Cao học Nội tổng quát, Trường Đại học Y Dược TP. HCM (2016)</li> <li>Tốt nghiệp Bác sĩ Y khoa, Trường Đại học Y Dược TP. HCM (1998)</li> </ul> <h3><strong>Chứng chỉ trong và ngoài nước</strong></h3> <ul> <li>Chứng chỉ bác sĩ gia đình, chứng chỉ tâm lý, chứng chỉ đọc điện tâm đồ tại Đại học Y khoa Phạm Ngọc Thạch TP. HCM (2018)</li> <li>Chứng chỉ siêu âm bụng, Bệnh viện Đại học Y Dược TP. HCM (2012)</li> <li>Chứng chỉ cấp cứu Nội Ngoại khoa và thảm họa do Đại học Nantes Cộng hòa Pháp cấp (2010)</li> <li>Chứng chỉ cai nghiện ma túy, Trung tâm đào tạo cán bộ y tế (2004)</li> <li>Sơ bộ chuyên khoa Chấn thương Chỉnh hình, Bệnh viện Chợ Rẫy TP. HCM (2003)</li> </ul>",
                clinic_id: "1c12fd7a-31cc-4963-ab8a-73474c72ebbd",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Trần Thị Kim Thu",
                description:
                    "<p>Gần 25 năm kinh nghiệm trong lĩnh vực Hô hấp - Phổi</p> <p>Bác sĩ khám và điều trị tại Bệnh viện Đại học Y Dược TP. HCM</p> <p>Giám đốc chuyên môn Phòng khám Đa khoa CHAC</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/22/141301-f3f4d7edf7e529bb70f4.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Trần Thị Kim Thu</strong></h2> <ul> <li>Gần 25 năm kinh nghiệm trong lĩnh vực Hô hấp - Phổi</li> <li>Bác sĩ khám và điều trị tại Bệnh viện Đại học Y Dược TP. HCM</li> <li>Giám đốc chuyên môn Phòng khám Đa khoa CHAC</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám và điều trị bệnh Nội Tổng quát – Hô hấp ở người lớn và trẻ em: </p> <ul> <li>Viêm phổi</li> <li>Hen suyễn</li> <li>Bệnh phổi tắc nghẽn mạn tính (COPD)</li> <li>Viêm màng phổi (viêm phế mạc)</li> <li>Thuyên tắc phổi</li> <li>Các bệnh lý khác về hô hấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Giám đốc chuyên môn Phòng khám Đa khoa CHAC (2011 - Nay)</li> <li>Bác sĩ tại Phòng khám Đa khoa Hạnh Phúc (Nay)</li> <li>Bác sĩ khám tại phòng khám Hen – COPD – Hậu Covid, Bệnh viện Đại học Y Dược TP. HCM (2002 - Nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ chuyên ngành Lao và bệnh Phổi, Đại học Y Dược TP. HCM (2008)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch (1999)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Uỷ viên Ban chấp hành LCH Hen - Dị ứng - Miễn dịch lâm sàng TP. HCM</li> <li>Hội viên Hội Hô hấp TP. HCM</li> </ul>",
                clinic_id: "1c12fd7a-31cc-4963-ab8a-73474c72ebbd",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Huỳnh Hữu Hạnh",
                description:
                    "<p>Hơn 15 năm kinh nghiệm trong hoạt động khám và điều trị bệnh Tim mạch – Nội tiết – Tiêu hóa</p> <p>Nguyên bác sĩ khoa Nội Tim mạch - Bệnh viện Tim Tâm Đức</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/22/140549-1bb32e0df704295a7015.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Huỳnh Hữu Hạnh</strong></h2> <ul> <li>Hơn 15 năm kinh nghiệm trong hoạt động khám và điều trị bệnh Tim mạch – Nội tiết – Tiêu hóa</li> <li>Nguyên bác sĩ khoa Nội Tim mạch - Bệnh viện Tim Tâm Đức</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh lý Tim mạch – Nội tiết</li> <li>Bệnh lý Tiêu hóa</li> <li>Bệnh lý Cơ xương khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc điều hành, Phòng khám Đa khoa Hạnh Phúc (Nay)</li> <li>Phó Giám đốc Y khoa, Phòng khám Đa khoa Saigon Healthcare (2019 - 2022)</li> <li>Phó Giám đốc Y khoa, Phòng khám Đa khoa Đại Phước (2014 - 2019)</li> <li>Bác sĩ điều trị Nội Tim mạch, Phòng khám Đa khoa Nam Sài Gòn (2010 - 2014)</li> <li>Bác sĩ chuyên khoa Nội Tim mạch, Bệnh viện Tim Tâm Đức (2008 - 2010)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Chẩn đoán hình ảnh, Học viện Quân Y (2017)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Dược TP. HCM (2007)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Học chứng chỉ hô hấp ký tại Bệnh viện Đại học Y Dược TP. HCM (2019)</li> <li>Học chứng chỉ tiêm nội khớp tại ĐH Y Dược TP.HCM (2017)</li> <li>Học chứng chỉ điện tâm đồ và điều trị loạn nhịp tim tại Bệnh viện Tim Tâm Đức (2013)</li> <li>Học chứng chỉ siêu âm tim và bệnh lý tim mạch tại Viện Tim TP. HCM (2008)</li> </ul>",
                clinic_id: "1c12fd7a-31cc-4963-ab8a-73474c72ebbd",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BSCKI Đoàn Thanh Trúc",
                description:
                    "<p>14 năm kinh nghiệm khám và điều trị bệnh lý Sản phụ khoa</p> <p>Từng công tác tại các bệnh viện lớn như Bệnh viện Tân Phú, Bệnh viện Quốc tê Thái Hòa</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/12/20/091648-bs-truc--hanh-phuc.png",
                introduction:
                    "<h2><strong>BS CKI Đoàn Thanh Trúc</strong></h2> <ul> <li>14 năm kinh nghiệm khám và điều trị bệnh lý Sản phụ khoa</li> <li>Từng công tác tại các bệnh viện lớn như Bệnh viện Tân Phú, Bệnh viện Quốc tê Thái Hòa</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh</li> <li>Khám Phụ Khoa</li> <li>Khám thai sản</li> <li>Khám tiền hôn nhân, tiền sinh</li> <li>Kiểm tra phụ khoa</li> <li>Loạn dưỡng vú</li> <li>Rong kinh kéo dài</li> <li>U xơ tử cung, Viêm lộ tuyến</li> <li>Chẩn đoán trước sinh và quản lý thai</li> <li>Khám, điều trị các rối loạn tiền mãn kinh, mãn kinh</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Ung thư phụ khoa </li> <li>U nang buồng trứng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khám và điều trị Sản phụ khoa, Phòng khám Đa khoa Hạnh Phúc</li> <li>Bác sĩ khám và điều trị, Bệnh viện Tân Phú (2014-2019)</li> <li>Bác sĩ khám và điều trị, Bệnh viện Quốc tê Thái Hòa (2009-2014)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Sản phụ khoa, Đại học Phạm Ngọc Thạch</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Phạm Ngọc Thạch</li> </ul>",
                clinic_id: "1c12fd7a-31cc-4963-ab8a-73474c72ebbd",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Đặng Huỳnh Anh Thư",
                description:
                    "<p>Hơn 15 năm kinh nghiệm khám và điều trị bệnh Tim mạch – Hô hấp</p> <p>Bác sĩ điều trị chuyên khoa Tim mạch - Bệnh viện Đại học Y Dược TP. HCM</p> <p>Phó Trưởng bộ môn Sinh lý - Sinh lý bệnh Miễn dịch - Đại học Y Dược TP. HCM</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/22/141222-888e559842909ccec581.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Đặng Huỳnh Anh Thư</strong></h2> <ul> <li>Hơn 15 năm kinh nghiệm khám và điều trị bệnh Tim mạch – Hô hấp</li> <li>Bác sĩ điều trị chuyên khoa Tim mạch - Bệnh viện Đại học Y Dược TP. HCM</li> <li>Phó Trưởng bộ môn Sinh lý - Sinh lý bệnh Miễn dịch - Đại học Y Dược TP. HCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nội tim mạch:<ul> <li>Tăng huyết áp</li> <li>Rối loạn lipid máu</li> <li>Xơ vữa động mạch</li> <li>Bệnh động mạch vành</li> <li>Suy tim</li> <li>...</li> </ul> </li> <li>Hen và bệnh phổi tắc nghẽn mạn tính</li> <li>Bệnh hô hấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị chuyên khoa Tim mạch, Bệnh viện Đại học Y Dược TP. HCM (03/2013 – Nay)</li> <li>Bác sĩ điều trị các bệnh hô hấp mạn tính không lây và bác sĩ siêu âm tại Trung tâm chăm sóc sức khỏe cộng đồng CHAC TP. HCM (09/2010 – Nay)</li> <li>Giảng viên Bộ môn Sinh lý học, Đại học Y Dược TP. HCM (07/2010 – Nay)</li> <li>Bác sĩ điều trị Nội tim mạch – Bệnh viện Tim Tâm Đức TP. HCM (03/2008 – 07/2010)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học nghiên cứu sinh Hóa sinh Y học tại Đại học Y Dược TP. HCM (09/2017 – 2023)</li> <li>Học Chuyên khoa I Chẩn đoán hình ảnh tại Học viện Quân Y (09/2015 – 09/2017)</li> <li>Học Cao học Y học chức năng - chuyên ngành Sinh lý học tại Đại học Y Dược TP. HCM (09/2011 - 09/2013)</li> <li>Học lâm sàng tại khoa Thăm dò chức năng hô hấp tại Bệnh viện Đại học Y Dược TP. HCM (09/2010 – 05/2013)</li> <li>Học Đại học chuyên ngành Bác sĩ Đa khoa tại Đại học Y Dược TP. HCM (09/2001 - 09/2007)</li> </ul>",
                clinic_id: "1c12fd7a-31cc-4963-ab8a-73474c72ebbd",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Trần Quang Minh",
                description:
                    "<p>Bác sĩ chuyên khoa Mắt</p> <p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Mắt</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/12/22/154345-bs-minh-hikari.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Trần Quang Minh</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Mắt</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ chuyên khoa Mắt, Trung tâm Mắt Sài Gòn Hikari</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Thạc sĩ chuyên ngành Nhãn khoa, Đại học Y dược TP.HCM (2019)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược Cần Thơ (2010)</li> <li>Chứng chỉ Laser mống mắt và bao sau, Đại học Y khoa Phạm Ngọc Thạch (2021)</li> <li>Chứng chỉ OCT, Bệnh Viện Mắt TP.HCM (2021)</li> <li>Chứng chỉ phẫu thuật Phaco đục thủy tinh thể, Đại học Y dược TP.HCM (2020)</li> <li>Chứng chỉ siêu âm mắt, Bệnh Viện Mắt TP.HCM (2020)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị bệnh lý về Mắt:</p> <ul> <li>Cross Linking cho điều trị khúc xạ và bệnh lý giác mạc chóp</li> <li>Chỉnh hình giác mạc điều trị tật khúc xạ bằng phương pháp Ortho-K</li> <li>Điều trị nội khoa bệnh lý dịch kính – võng mạc: Võng mạc đái tháo đường</li> <li>Trung phẫu: phẫu thuật mộng thịt</li> <li>Laser YAG mống mắt, bao sau</li> <li>Kỹ năng siêu âm A/B thành thạo.</li> <li>Kỹ năng khám, tư vấn và đo khúc xạ thuần thục, quản lý cận thị</li> <li>Kỹ năng phẫu thuật tạo hình mí mắt bằng Laser CO2.</li> <li>Phẫu thuật viên chính Phaco đục thủy tinh thể</li> <li>Phẫu thuật khúc xạ Lasik, Femtosecond Lasik</li> <li>Cross Linking cho điều trị khúc xạ và bệnh lý giác mạc chóp</li> <li>Chỉnh hình giác mạc điều trị tật khúc xạ bằng phương pháp Ortho-K</li> </ul>",
                clinic_id: "45b8d172-4d12-44f4-bf3e-cf21170a69e2",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Đỗ Hải Đăng",
                description:
                    "<p>Hiện là Trưởng phòng khám Nha khoa Dr. Hải Đăng</p> <p>Hơn 15 năm kinh nghiệm trong lĩnh vực Nha khoa</p> <p>Bác sĩ nhận khám cho khách hàng từ 2 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/01/090138-drhai.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Đỗ Hải Đăng</strong></h2> <ul> <li>Hiện là Trưởng phòng khám Nha khoa Dr. Hải Đăng</li> <li>Hơn 15 năm kinh nghiệm trong lĩnh vực Nha khoa</li> <li>Bác sĩ nhận khám cho khách hàng từ 2 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li><p>Trưởng phòng khám tại Nha khoa Dr. Hải Đăng (2019 - nay) </p> </li> <li><p>Trưởng phòng khám tại Nha khoa quốc tế Dencos Luxury (2016 - 2019)</p> </li> <li>Trưởng phòng khám tại Nha khoa Kim (2015 - 2016)</li> <li>Trưởng phòng khám tại Nha khoa Quốc Tế Việt Pháp (2014 - 2015)</li> <li>Bác sĩ tại Nha khoa Úc Châu (2006 - 2014)</li> </ul> <h3><strong>Quá trình đào tạo:</strong></h3> <ul> <li>Tham gia nhiều khóa học chuyên sâu và hội thảo chuyên đề cấy ghép implant và phục hình thẩm mỹ tại Singapore, Mỹ…</li> <li>Tốt nghiệp Bác sĩ chuyên khoa Răng Hàm Mặt, Đại học Y Thái Bình</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nhổ răng sữa</li> <li>Hàn răng: Răng sâu</li> <li>Điều trị tủy: Răng đau, hỏng tủy, răng chết tủy…</li> <li>Nhổ răng: Răng mọc lệch, viêm, lung lay…</li> <li>Hàm tháo lắp: Mất răng</li> <li>Cấy ghép implant: Mất răng</li> <li>Răng sứ thẩm mỹ: Răng nhiễm màu, khấp khểnh…</li> <li>Chỉnh nha: Răng khấp khểnh, cắn ngược, cắn chéo…</li> </ul>",
                clinic_id: "81439b8d-644e-4154-87a7-964db79ac5df",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Đào Thị Thu Hiền",
                description:
                    "<p>Gần 40 năm kinh nghiệm trong lĩnh vực Sản phụ khoa - Vô sinh hiếm muộn</p> <p>Từng công tác 30 năm tại Bệnh viện Phụ sản Trung ương</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/27/095748-bs-hien.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Đào Thị Thu Hiền</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm trong lĩnh vực Sản phụ khoa - Vô sinh hiếm muộn</li> <li>Từng công tác 30 năm tại Bệnh viện Phụ sản Trung ương</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám thai, khám quản lý thai nghén</li> <li>Điều trị vô sinh hiếm muộn</li> <li>Khám phụ khoa viêm nhiễm</li> <li>Các bệnh lý khác thuộc về sản và phụ khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Phụ sản, Bệnh viện Đa khoa Hồng Hà (Nay)</li> <li>Bác sĩ tại Bệnh viện Phụ sản Trung ương (1984 - 2014)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Chuyên khoa II, Đại học Y Hà Nội (2005)</li> <li>Tốt nghiệp Chuyên khoa I, Đại học Y Hà Nội (2000)</li> <li>Bác sĩ Đa khoa, Đại học Y Hà Nội (1978 - 1984)</li> </ul>",
                clinic_id: "4c1ecefa-705a-4c50-bc69-2a470a486db4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Tiến Sơn",
                description:
                    "<p>Hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý Tai mũi họng và Ngoại khoa</p> <p>Hiện là Giám đốc Bệnh viện Đa khoa Hồng Hà</p> <p>Bác sĩ không nhận khám cho trẻ sơ sinh </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/27/135402-removalaitmp-63329d5aa257a.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Tiến Sơn</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý Tai mũi họng và Ngoại khoa</li> <li>Hiện là Giám đốc Bệnh viện Đa khoa Hồng Hà</li> <li>Bác sĩ không nhận khám cho trẻ sơ sinh</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám chữa bệnh chuyên khoa Ngoại</p> <p>Khám chữa bệnh chuyên khoa Tai mũi họng:</p> <ul> <li>Viêm mũi xoang cấp-mạn</li> <li>Polip mũi xoang</li> <li>Viêm mũi dị ứng</li> <li>Viêm mũi xuất tiết</li> <li>Viêm họng cấp- mạn tính</li> <li>Viêm thanh quản cấp- mạn</li> <li>Hạt xơ dây thanh</li> <li>Viêm amidan cấp-mạn</li> <li>Nhọt, áp xe tai ngoài</li> <li>Viêm tai giữa cấp-mạn</li> <li>Viêm tai ngoài</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Bệnh viện Đa khoa Hồng Hà (Nay)</li> <li>Phòng nghiệp vụ Y, Sở Y tế Sơn La (2015 - 2018)</li> <li>Phó Giám đốc Bệnh viện Đa khoa Mộc Châu (2001 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp bằng Thạc sĩ chuyên ngành Ngoại khoa, Đại học Y Hà Nội (2009)</li> <li>Định hướng chuyên khoa Tai mũi họng, Đại học Y Hà Nội (2001)</li> <li>Sinh viên Y khoa, Đại học Y Thái Nguyên (1994 - 2000)</li> </ul>",
                clinic_id: "4c1ecefa-705a-4c50-bc69-2a470a486db4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Văn Thìn",
                description:
                    "<p>Hơn 20 năm kinh nghiệm khám và điều trị bệnh lý Nội khoa - Nội tiêu hóa - Bệnh viêm gan</p> <p>Bác sĩ nhận khám cho bệnh nhân ở độ tuổi thanh thiếu niên trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/27/175244-removalaitmp-6332d52c86545.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Văn Thìn</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm khám và điều trị bệnh lý Nội khoa - Tiêu hóa - Bệnh viêm gan</li> <li>Bác sĩ nhận khám cho bệnh nhân ở độ tuổi thanh thiếu niên trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị bệnh lý về Nội khoa - Tiêu hóa - Bệnh viêm gan:</p> <ul> <li>Hội chứng ruột kích thích, trĩ nội độ I - II</li> <li>Hội chứng trào ngược dạ dày - thực quản</li> <li>Viêm - loét dạ dày, tá tràng</li> <li>Viêm gan do rượu, virus,...</li> <li>Viêm khớp do thoái hoá</li> <li>Rối loạn thần kinh tim</li> <li>Rối loạn tuần hoàn não</li> <li>Suy nhược cơ thể</li> <li>Cao huyết áp</li> <li>Rối loạn chuyển hoá mỡ, đạm,…</li> <li>Viêm phế quản - phổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Đa khoa Hồng Hà (2019 - Nay)</li> <li>Bác sĩ nội, siêu âm, Trung tâm Bác sĩ gia đình - Hà Nội (2009 - 2018)</li> <li>Bác sĩ khoa nội, nội nhi, khoa cấp cứu, Bệnh viện Mai Sơn, Đa khoa khu vực Sơn La (2001 - 2008)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ chuyên ngành Tiêu hoá, Học viện Quân Y (2006 - 2008)</li> <li>Bác sĩ Đa khoa, Đại học Y Dược Thái Nguyên (1994 - 2000)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ nội soi tiêu hoá, Bệnh viện Bạch Mai</li> <li>Chứng chỉ sử dụng máy thở, Bệnh viện Thanh Nhàn</li> <li>Chứng chỉ siêu âm tổng quát, Đại học Y Dược Thái Nguyên</li> <li>Chứng chỉ sơ bộ hồi sức cấp cứu, Học viện Quân Y</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Đánh giá tỉ lệ nhiễm virus HP của các bệnh nhân nội soi tiêu hoá tại khoa Khám bệnh Bệnh viện Đa khoa Hồng Hà từ 2018 - 2021 (2022)</li> <li>Đánh giá tỉ lệ nhiễm virus viêm gan B tại một khu vực cộng đồng dân cư Hà Đông (2008)</li> </ul>",
                clinic_id: "4c1ecefa-705a-4c50-bc69-2a470a486db4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Hà Thị Hồng Vân",
                description:
                    "<p>Gần 15 năm kinh nghiệm trong lĩnh vực Sản phụ khoa - Vô sinh hiếm muộn</p> <p>Tốt nghiệp Bác sĩ Chuyên khoa I Sản khoa tại Đại học Y Hà Nội</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/27/103655-removalaitmp-63326f699459c.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Hà Thị Hồng Vân</strong></h2> <ul> <li>Gần 15 năm kinh nghiệm trong lĩnh vực Sản phụ khoa - Vô sinh hiếm muộn</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Sản khoa tại Đại học Y Hà Nội</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám thai, khám quản lý thai nghén</li> <li>Điều trị vô sinh hiếm muộn: Mong con trên 1 năm</li> <li>Khám phụ khoa viêm nhiễm</li> <li>Các bệnh lý khác thuộc về sản và phụ khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Đa khoa Hồng Hà (2020 - Nay)</li> <li>Học viên tại Đại học Y Hà Nội (2018 - 2020)</li> <li>Phòng khám Sản phụ khoa Thai An (2011 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I Sản khoa, Đại học Y Hà Nội (2018 - 2020)</li> <li>Đinh hướng Chẩn đoán hình ảnh, Đại học Y Hà Nội (2009 - 2010)</li> <li>Bác sĩ Đa khoa, Đại học Y Dược Thái Nguyên (2002 - 2009)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Siêu âm Sản phụ khoa, Bệnh viện Phụ sản Trung ương (2020)</li> <li>Lâm sàng cơ bản IVF, Bệnh viện Đa khoa Tâm Anh (2020)</li> <li>Chứng chỉ IUI, Bệnh viện Phụ sản Trung ương (2019)</li> <li>Soi cổ tử cung (2017)</li> <li>Hỗ trợ sinh sản cơ bản, Đại Học Y Hà Nội (2016)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Nội tiết Sinh sản và Vô sinh TP. HCM (Hosrem)</li> </ul>",
                clinic_id: "4c1ecefa-705a-4c50-bc69-2a470a486db4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Đình Thuận",
                description:
                    "<p>Hơn 10 năm kinh nghiệm khám và điều trị bệnh lý Nam học</p> <p>Hiện nay bác sĩ đang công tác tại Bệnh viện Đa khoa Hồng Hà</p> <p>Bác sĩ nhận khám cho bệnh nhân từ 6 - 70 tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/27/105438-bs-thuan.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Đình Thuận</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm khám và điều trị bệnh lý Nam học</li> <li>Hiện nay bác sĩ đang công tác tại Bệnh viện Đa khoa Hồng Hà</li> <li>Bác sĩ nhận khám cho bệnh nhân từ 6 - 70 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Vô sinh nam</li> <li>Rối loạn cương dương</li> <li>Xuất tinh sớm</li> <li>Thoát vị bẹn</li> <li>...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Ngoại khoa, Bệnh viện Đa khoa Hồng Hà (2019 - Nay)</li> <li>Bác sĩ Ngoại khoa, Bệnh viện Vinmec Hạ Long (2016 - 2018)</li> <li>Bác sĩ Ngoại khoa, Bệnh viện Đa khoa Móng Cái, Quảng Ninh (2013 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên khoa Nam học, Bệnh viện Việt Đức và Bệnh viện Bình Dân (2020)</li> <li>Bác sĩ Chuyên khoa I, Đại học Y Hà Nội (2018 - 2020)</li> <li>Phẫu thuật cắt trĩ, Bệnh viện Đại học Y Dược TP. HCM (2017)</li> <li>Tiết niệu, nội soi cơ bản, Bệnh viện Việt Đức (2014 - 2015)</li> <li>Tiêu hóa, Bệnh viện Việt Đức (2011 - 2013)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Nam khoa chuyên sâu, Bệnh viện Bình Dân (2020)</li> <li>Nam khoa cơ bản, Bệnh viện Việt Đức (2019)</li> <li>Phẫu thuật nội soi tiêu hóa, Bệnh viện Trung ương Huế (2016)</li> <li>Phẫu thuật nội soi can thiệp qua đường niệu quản, Bệnh viện Việt Đức (2015)</li> <li>Phẫu thuật nội soi cơ bản, Bệnh viện Việt Đức (2013)</li> <li>Định hướng ngoại khoa, Đại học Y Hà Nội (2012)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên Hội Ngoại khoa Việt Nam</li> <li>Hội viên Hội Nam khoa và Y học giới tính Việt Nam</li> </ul>",
                clinic_id: "4c1ecefa-705a-4c50-bc69-2a470a486db4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "TTUT. BSCKII Trần Ngọc Cường",
                description:
                    "<p>Bác sĩ có hơn 35 năm kinh nghiệm trong lĩnh vực Sản phụ khoa </p> <p>Nguyên Trưởng khoa Phụ sản Bệnh viện Đa khoa Hà Đông </p> <p>Bác sĩ nhận khám trên 16 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/14/113247-bs-tran-ngoc-cuong1.jpg",
                introduction:
                    "<h2><strong>TTUT. BSCKII Trần Ngọc Cường</strong></h2> <ul> <li>Bác sĩ có hơn 35 năm kinh nghiệm trong lĩnh vực Sản phụ khoa</li> <li>Nguyên Trưởng khoa Phụ sản Bệnh viện Đa khoa Hà Đông</li> <li>Bác sĩ nhận khám trên 16 tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Theo dõi và quản lý thai sản</li> <li>Sàng lọc trước sinh (Siêu âm, NIPT - Doubletest -Tripbletest) </li> <li>Sàng lọc sau sinh (Phát hiện sớm các bệnh lý bẩm sinh) </li> <li>Đỡ đẻ thường tự nguyện </li> <li>Tư vấn và thực hiện các biện pháp kế hoạch hóa gia đình </li> <li>Điều trị các bệnh viêm nhiễm phụ khoa <ul> <li>Viêm âm đạo </li> <li>Viêm lộ tuyến cổ tử cung </li> <li>Viêm tuyến Bartholin </li> </ul> </li> <li>Điều trị Nội khoa và phẫu thuật các bệnh lý phụ khoa <ul> <li>U nang buồng trứng</li> <li>U xơ tử cung </li> <li>...</li> </ul> </li> <li>Tầm soát Ung thư sớm Cổ tử cung </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Phó Giám đốc Bệnh viện Đa khoa Hà Đông </li> <li>Nguyên Trưởng khoa Phụ sản Bệnh viện Đa khoa Hà Đông </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Giảng viên Quốc gia về Hồi sức Sơ sinh do Chuyên gia Mỹ đào tạo.</li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe</strong></h3> <ul> <li>Chủ 1 đề tài Nghiên cứu khoa học cấp Thành phố.</li> <li>Tham gia 2 đề tài cấp Thành phố.</li> <li>Chủ 5 đề tài cấp cơ sở</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Được tặng 8 bằng khen</li> <li>5 kỷ niệm chương</li> <li>Danh hiệu Thầy thuốc Ưu tú</li> <li>Danh hiệu công dân tiêu biểu Thủ đô</li> </ul>",
                clinic_id: "62da7a06-7e3a-4774-a291-bc61a9b5bb3d",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Thùy Dương",
                description:
                    "<p>Bác sĩ có hơn 15 năm kinh nghiệm khám chữa bệnh Chuyên khoa Nhi </p> <p>Trưởng khoa Nhi, Bệnh viện Đa khoa Hà Đông</p> <p>Bác sĩ nhận khám dưới 16 tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/21/094059-bs-thuy-duong1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Thị Thùy Dương</strong></h2> <ul> <li>Bác sĩ có hơn 15 năm kinh nghiệm khám chữa bệnh Chuyên khoa Nhi</li> <li>Trưởng khoa Nhi, Bệnh viện Đa khoa Hà Đông</li> <li>Bác sĩ nhận khám dưới 16 tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Các dịch vụ khám bệnh Chuyên khoa Nhi <ul> <li>Hô hấp </li> <li>Tai mũi họng </li> <li>Tiêu hóa </li> <li>Dinh dưỡng </li> <li>Da liễu </li> </ul> </li> <li>Và các bệnh lý Nhi khoa khác </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Nhi, Bệnh viện Đa khoa Hà Đông</li> </ul>",
                clinic_id: "62da7a06-7e3a-4774-a291-bc61a9b5bb3d",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu Tú Nguyễn Thị Ánh Hường",
                description:
                    "<p>Bác sĩ có 40 năm kinh nghiệm khám chữa bệnh Chuyên khoa Ngoại, Nam khoa </p> <p>Nguyên bác sĩ Chuyên khoa Ngoại, Bệnh viện Quân Y 103 </p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/14/160036-bs-nguyen-thi-anh-huong-1.jpg",
                introduction:
                    '<h2><strong>Thầy thuốc Ưu Tú Nguyễn Thị Ánh Hường</strong></h2> <ul> <li>Bác sĩ có 40 năm kinh nghiệm khám chữa bệnh Chuyên khoa Ngoại, Nam khoa</li> <li>Nguyên bác sĩ Chuyên khoa Ngoại, Bệnh viện Quân Y 103</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Các bệnh lý nam khoa</li> <li>Bệnh lý u tiết niêu: U tuyến tiền liệt, ung thư tuyến tiền liệt </li> <li>Các bệnh lý đường tiết niệu </li> <li>Các bệnh lý sỏi tiết niệu: Sỏi thận, sỏi bàng quang, niệu đạo </li> <li>Bệnh lý suy thận </li> <li>Tư vấn về ghép thận</li> </ul> <p><strong>Quá trình công tác</strong> </p> <ul> <li>Tiến sĩ, Bác sĩ khoa Ngoại Tiết niệu Bệnh viện 103 (1984 - nay)</li> <li>Học viên dài hạn 13 - Bác sĩ Nội trú Ngoại - Học Viện Quân Y (1978 - 1984)</li> <li>Nguyên bác sĩ khoa Ngoại, Bệnh viện Quân Y 103 </li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Thầy thuốc Ưu Tú (2010)</li> <li>Tiến sỹ Y khoa chuyên ngành Ngoại Tiết niệu với đề tài "Nghiên cứu phẫu thuật lấy thận ghép từ người cho sống" (2008)</li> <li>Giải thưởng nhà nước trong nhóm ghép thận</li> </ul>',
                clinic_id: "62da7a06-7e3a-4774-a291-bc61a9b5bb3d",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Nhân Dân, Phó Giáo Sư, Tiến Sĩ Mai Xuân Hiên",
                description:
                    "<p>Bác sĩ có 50 năm kinh nghiệm trong lĩnh vực Y Tế </p> <p>Nguyên Chủ nhiệm bộ môn, Khoa Hồi sức cấp cứu Học viện Quân y 103 </p> <p>Bác sĩ nhận khám từ 16 tuổi trở lên </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/11/170221-pgs-mai-xuan-hien-21.jpg",
                introduction:
                    '<h2><strong>Thầy thuốc Nhân Dân, Phó Giáo Sư, Tiến Sĩ Mai Xuân Hiên</strong></h2> <ul> <li>Bác sĩ có 50 năm kinh nghiệm trong lĩnh vực Y Tế</li> <li>Nguyên Chủ nhiệm bộ môn, Khoa Hồi sức cấp cứu Học viện Quân y 103</li> <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Hô hấp</li> <li>Tim mạch </li> <li>Tiêu hóa </li> <li>Tiết niệu</li> <li>Thần kinh</li> <li>Cơ xương khớp </li> <li>Nội tiết</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Chủ nhiệm bộ môn, Khoa Hồi sức cấp cứu Học viện Quân y 103</li> </ul> <h3><strong>Thành viên các hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Ủy viên Ban chấp hành Hội Hồi sức Cấp cứu và Chống độc Việt Nam </li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Được Nhà nước trao tặng danh hiệu "Thầy Thuốc Nhân Dân" năm 2020 </li> <li>Bộ Quốc Phòng công nhân danh hiệu" Nghiên cứu viên cao cấp" (2014) </li> <li>Được nhà nước trao tặng Huân chương Chiến công hạng Nhất, hạng Ba và Huân chương Bảo vệ Tổ quốc Hạng Nhì </li> <li>Được Nhà nước trao tặng Giải thưởng Hồ Chí Minh về tham gia đề tài Khoa học Công nghệ "Cụm công trình ghép tạng" và Bộ Y tế tặng thưởng "Huy chương vì sức khỏe nhân dân"</li> </ul>',
                clinic_id: "62da7a06-7e3a-4774-a291-bc61a9b5bb3d",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Thiện Thuật",
                description:
                    "<p>Bác sĩ có gần 40 năm kinh nghiệm khám chữa bệnh Chuyên khoa Nhi </p> <p>Nguyên Trưởng khoa Nhi, Bệnh viện Đa khoa Hà Đông</p> <p>Bác sĩ nhận khám dưới 16 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/21/094538-bs-nguyen-thien-thuat1.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Thiện Thuật</strong></h2> <ul> <li>Bác sĩ có gần hơn 35 năm kinh nghiệm khám chữa bệnh Chuyên khoa Nhi</li> <li>Nguyên Trưởng khoa Nhi, Bệnh viện Đa khoa Hà Đông</li> <li>Bác sĩ nhận khám dưới 16 tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Các dịch vụ khám bệnh Chuyên khoa Nhi <ul> <li>Hô hấp </li> <li>Tai mũi họng </li> <li>Tiêu hóa </li> <li>Dinh dưỡng </li> <li>Da liễu </li> </ul> </li> <li>Và các bệnh lý Nhi khoa khác </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Trưởng khoa Nhi, Bệnh viện Đa khoa Hà Đông</li> </ul>",
                clinic_id: "62da7a06-7e3a-4774-a291-bc61a9b5bb3d",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Bùi Gia Lượng",
                description:
                    "<p>Bác sĩ có gần 40 năm kinh nghiệm chữa bệnh Chuyên khoa ngoại </p> <p>Nguyên Phó Giám đốc Bệnh viện Đa khoa Hà Đông </p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/30/162226-bs-luong1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Bùi Gia Lượng</strong></h2> <ul> <li>Bác sĩ có gần 40 năm kinh nghiệm chữa bệnh Chuyên khoa ngoại</li> <li>Nguyên Phó Giám đốc, Bệnh viện Đa khoa Hà Đông</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Các bệnh lý về Tuyến giáp </li> <li>Các bệnh lý về Vú </li> <li>Các bệnh lý về xương, cột sống: Đau thoái hóa các xương, cột sống</li> <li>Chấn thương ngực, gãy xương sườn mức độ vừa </li> <li>Khám bệnh lý ngoại Nhi: Bệnh lý ống phúc tĩnh mạch, phình đại tràng bẩm sinh, trào ngược bí quang niệu quản...</li> <li>Bệnh lý dạ dày tá tràng: Viêm dạ dày, viêm loét dạ dày, u dạ dày </li> <li>Bệnh lý Đại trực tràng: U đại trực tràng, viêm loét</li> <li>Bệnh lý gan mật (Đau, HSF): Viêm túi mật, sỏi túi mật, polip, sỏi đường mật, sỏi gan</li> <li>Xử lý các vết thương, thay băng</li> <li>Xử lý các ca gãy xương không có chỉ định phẫu thuật</li> <li>Phẫu thuật cắt u dưới da (U bã đậu, u mỡ, u xơ, u bao hoạt dịch) </li> <li>Phẫu thuật cắt u dưới da, phần mềm, trĩ đơn búi, da thừa hậu môn, viêm tắc tĩnh mạch trĩ</li> <li>Nong bao quy đầu, phẫu thuật bao quy đầu khi có chỉ định</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Bệnh viện Thanh Oai (10/2014 - 03/2020)</li> <li>Công tác tại BV đa khoa Hà Đông (03/1985 - 09/2014)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Chuyên khoa II Ngoại khoa, Bệnh viện Quân Y (2011 - 2013)</li> <li>Học Phẫu thuật Ngoại nhi, Bệnh viện Nhi Trung ương (1993 - 1994)</li> <li>Học Chuyên khoa I Ngoại khoa, Đại học Y Hà Nội (1989 - 1991)</li> </ul>",
                clinic_id: "62da7a06-7e3a-4774-a291-bc61a9b5bb3d",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Lê Văn Hoài",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm trong lĩnh vực Ngoại Tổng quát </p> <p>Hiện là Giám đốc Bệnh viện Đa khoa Hồng Đức III </p> <p>Trưởng khoa Ngoại tổng quát Bệnh viện Hồng Đức III </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/21/140137-bs-le-van-doai-hd1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Lê Văn Hoài</strong></h2> <ul> <li>Bác sĩ có nhiều năm kinh nghiệm trong lĩnh vực Ngoại Tổng quát </li> <li>Hiện là Giám đốc Bệnh viện Đa khoa Hồng Đức III</li> <li>Trưởng khoa Ngoại Tổng quát Bệnh viện Hồng Đức III</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Áp xe gan</li> <li>Áp xe hậu môn trực tràng</li> <li>Nứt hậu môn</li> <li>Phì đại tuyến tiền liệt</li> <li>Rò hậu môn</li> <li>Sỏi niệu quản</li> <li>Sỏi ống mật chủ</li> <li>Thủng, loét dạ dày – tá tràng</li> <li>Tràn khí màng phổi tự phát</li> <li>Viêm túi thừa đại tràng</li> </ul>",
                clinic_id: "bc470ad3-361e-4278-b40a-500563634629",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Võ Thị Trúc Phương",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm khám và điều trị về lĩnh vực Y học Cổ truyền </p> <p>Trưởng khoa Y học Cổ truyền, Bệnh viện Hồng Đức III</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/06/21/142422-dongy-ths-bsvothitrucphuong.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Võ Thị Trúc Phương</strong></h2> <ul> <li>Bác sĩ có nhiều năm kinh nghiệm khám và điều trị về lĩnh vực Y học Cổ truyền</li> <li>Trưởng khoa Y học Cổ truyền, Bệnh viện Hồng Đức III</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><strong>Các vấn đề về cơ xương khớp:</strong> <ul> <li>Liệt thần kinh III, IV, VI</li> <li>Liệt dây thần kinh số VII ngoại biên, trung ương</li> <li>Đau khớp vai, gân cơ</li> <li>Hội chứng ống cổ tay, ngón tay bật</li> </ul> </li> <li><strong>Tiêu hóa gan - mật</strong><ul> <li>Hỗ trợ điều trị viêm gan siêu vi</li> <li>Viêm đại tràng mạn</li> <li>Hội chứng gan nhiễm mỡ</li> <li>Trĩ nội</li> </ul> </li> <li><strong>Hệ hô hấp</strong> <ul> <li>Cảm mạo</li> <li>Hen suyễn</li> <li>Viêm phế quản mạn</li> </ul> </li> <li><strong>Sinh dục - Tiết niệu</strong> <ul> <li>Rối loạn cường dương</li> <li>U xơ tiền luyệt tuyến</li> <li>Rối loạn kinh nguyệt</li> <li>Rối loạn tiền mãn kinh</li> </ul> </li> <li><strong>Da liễu</strong><ul> <li>Mụn</li> <li>Dị ứng</li> <li>Tổ đĩa</li> <li>Chàm</li> <li>Vẩy nến</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Công tác tại Bệnh viện Hồng Đức III (12/2018 - Nay)</li> <li>Công tác tại Trung Tâm y tế Huyện Gò Công Tây - Tiền Giang (2009 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Cao học Y học Cổ truyền (2016 - 2018)</li> </ul>",
                clinic_id: "bc470ad3-361e-4278-b40a-500563634629",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Bùi Trung Kiên",
                description:
                    "<p>Gần 15 năm kinh nghiệm khám và điều trị bệnh lý Tai mũi họng</p> <p>Từng công tác tại Bệnh viện Tân Sơn Nhất, Hiện đang công tác tại Bệnh viện Hồng Đức 3</p> <p>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/26/085319-bs-bui-trung-kien.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Bùi Trung Kiên</strong></h2> <ul> <li>Gần 15 năm kinh nghiệm khám và điều trị bệnh lý Tai mũi họng</li> <li>Từng công tác tại Bệnh viện Tân Sơn Nhất, hiện đang công tác tại Bệnh viện Hồng Đức 3</li> <li>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ù tai, đau tai, chảy máu tai</li> <li>Thủng màng nhĩ, điếc đột ngột</li> <li>Viêm tai giữa</li> <li>Amidan, V.A</li> <li>Viêm xoang</li> <li>Nghẹt mũi</li> <li>Hay bị chảy máu cam</li> <li>Đau cổ họng, khó nuốt</li> <li>Ho kéo dài</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Tai mũi họng, Phòng khám Đa khoa Việt Gia (2019 - Nay)</li> <li>Bác sĩ Tai mũi họng, Bệnh viện Hồng Đức (2015 - 2018)</li> <li>Bác sĩ Tai mũi họng, Bệnh viện Tân Sơn Nhất (2013 - 2014)</li> <li>Bác sĩ Tai mũi họng, Bệnh viện Phổ Quang (2009 - 2012)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II Tai mũi họng, Đại học Y khoa Phạm Ngọc Thạch (2019)</li> <li>Bác sĩ Chuyên khoa I Tai mũi họng, Đại học Y khoa Phạm Ngọc Thạch (2012)</li> <li>Tốt nghiệp Bác sĩ, Học viện Quân Y (2008)</li> </ul>",
                clinic_id: "bc470ad3-361e-4278-b40a-500563634629",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Phạm Văn Bùng",
                description:
                    "<p>Hơn 40 năm kinh nghiệm về lĩnh vực Ung bướu</p> <p>Từng công tác tại Bệnh viện Ung Bướu TP. HCM, Giảng viên khoa Y Đại Học Y dược TP. HCM bộ môn Phẫu Thuật Thực Hành</p> <p>Trưởng khoa Ung Bướu Bệnh viện đa khoa Hồng Đức III</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/26/120223-ub-tsbsckiiphamvanbung.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Phạm Văn Bùng</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm về lĩnh vực Ung bướu</li> <li>Từng công tác tại Bệnh viện Ung Bướu TP. HCM, Giảng viên khoa Y Đại Học Y dược TP. HCM bộ môn Phẫu Thuật Thực Hành</li> <li>Trưởng khoa Ung Bướu Bệnh viện đa khoa Hồng Đức III</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám và theo dõi định kỳ các bệnh ung bướu đã và đang điều trị khối u và ung thư như:</p> <ul> <li>Điều trị bệnh u bướu vùng đầu cổ</li> <li>Điều trị bệnh tuyến giáp</li> <li>Điều trị bệnh dạ dày</li> <li>Điều trị bệnh đại trực tràng</li> <li>Điều trị bệnh ung thư vú</li> <li>Điều trị bệnh ung thư</li> <li>Khám bệnh thoát bị bẹn</li> <li>Khám bệnh thoát vị thành bụng</li> <li>Khám các u bướu da mô mềm</li> <li>Theo dõi định kỳ các bệnh ung thư</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bệnh viện Ung Bướu TP. HCM</li> <li>Đại Học Y dược TP. HCM bộ môn Phẫu Thuật Thực Hành</li> <li>Ung Bướu bệnh viện đa khoa Hồng Đức III</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Năm 1981: Tốt nghiệp bác sĩ y khoa đại học y dược TP. HCM</li> <li>Năm 1985: Tốt nghiệp bác sĩ chuyên khoa I chuyên ngành Ung Bướu</li> <li>Năm 2003: Tốt nghiệp chuyên khoa II chuyên ngành Ung Bướu</li> <li>Năm 2011: Tốt nghiệp Tiến Sĩ Y Khoa chuyên ngành Ung Bướu</li> </ul>",
                clinic_id: "bc470ad3-361e-4278-b40a-500563634629",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Lý Ngọc Bích",
                description:
                    "<p>Bác sĩ chuyên khoa Nội soi Tiêu hoá</p> <p>Đang công tác Bệnh viện Đa khoa Hà Nội </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/17/155415-bs-bac-si-ly-ngoc-bich.png",
                introduction:
                    "<h2><strong>Bác sĩ Lý Ngọc Bích</strong></h2> <ul> <li>Bác sĩ chuyên khoa Nội soi Tiêu hoá</li> <li>Đang công tác Bệnh viện Đa khoa Hà Nội</li> </ul> <h2><strong>Quá trình đào tạo</strong></h2> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Bệnh viện 103 (2019)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Học viện Quân Y (2018)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <h3><strong>Khám và điều trị các bệnh lý dạ dày</strong></h3> <ul> <li>Gắp dị vật đường tiêu hóa</li> <li>Đau dạ dày</li> <li>Chảy máu dạ dày</li> <li>Đau thượng vị</li> <li>Viêm dạ dày</li> <li>Loét dạ dày tá tràng</li> <li>Nhiễm Helicobacter pylori dạ dày (HP)</li> <li>Trào ngược dạ dày thực quản (Gerd)</li> <li>Polyp dạ dày</li> <li>Chảy máu dạ dày</li> <li>Viêm dạ dày ruột Virus</li> <li>Viêm ruột thừa</li> <li>Polyp dạ dày</li> <li>Ung thư dạ dày</li> <li>Táo bón, khó nuốt, khó tiêu, ợ nóng, ợ chua</li> </ul> <h3><strong>Bệnh lý đại tràng, trực tràng, hậu môn</strong></h3> <ul> <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li> <li>Viêm đại tràng</li> <li>Viêm đại tràng màng giả</li> <li>Viêm loét đại tràng</li> <li>Bệnh trĩ, trĩ chảy máu, rò hậu môn</li> <li>Rò hậu môn, ngứa hậu môn</li> <li>Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó</li> <li>Áp xe hậu môn</li> <li>Đi ngoài ra máu</li> </ul>",
                clinic_id: "2876348b-8269-41f8-a4a9-d3daf12abcfe",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Thị Thu",
                description:
                    "<p>Bác sĩ Sản phụ khoa Kế hoạch hóa gia đình Bệnh viện Đa khoa Hà Nội</p> <p>Có gần 15 năm kinh nghiệm trong việc thăm khám và xử lý, điều trị những bệnh lý Sản phụ khoa</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/31/220231-bac-si-nguyen-thi-thu1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Thị Thu</strong></h2> <ul> <li>Bác sĩ Sản phụ khoa Kế hoạch hóa gia đình Bệnh viện Đa khoa Hà Nội</li> <li>Có gần 15 năm kinh nghiệm trong việc thăm khám và xử lý, điều trị những bệnh lý Sản phụ khoa</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> <li>Khám và điều trị các bệnh lý phụ khoa</li> <li>Điều trị lộ tuyến cổ tử cung, cắt polip</li> <li>Soi cổ tử cung, lấy bệnh phẩm xét nghiệm</li> <li>Khám, tư vấn và điều trị vô sinh, hiếm muộn</li> <li>Tư vấn phẫu thuật sản khoa</li> <li>Tư vấn các biện pháp kế hoạch hóa gia đình</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Sản phụ khoa Kế hoạch hóa gia đình Bệnh viện Đa khoa Hà Nội (2020 - nay)</li> <li>Nguyên bác sĩ chuyên khoa sản, Bệnh viện Đa khoa Medlatec (2016 - 2020)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp định hướng chuyên ngành bác sĩ Sản phụ khoa, Đại học Y Hà Nội (2016)</li> <li>Tốt nghiệp Bác sĩ đa, khoa Học viện Quân Y (2014)</li> </ul>",
                clinic_id: "2876348b-8269-41f8-a4a9-d3daf12abcfe",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Lê Bích Hường",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Ung bướu </p> <p>Trưởng khoa Ung bướu Bệnh viện Đa khoa Hà Nội</p> <p>Bác sĩ nhận khám từ 12 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/19/184032-bs-huong.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Lê Bích Hường</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Ung bướu</li> <li>Trưởng khoa Ung bướu Bệnh viện Đa khoa Hà Nội</li> <li>Thành viên Hội Ung thư Hà Nội</li> <li>Bác sĩ nhận khám từ 12 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Ung bướu Bệnh viện Đa khoa Hà Nội (2017 - nay)</li> <li>Bác sĩ chuyên khoa Bệnh viện Đa khoa Hà Nội (nay) </li> <li>Phó Trưởng khoa Khám bệnh, Bệnh viện Ung Bướu Hà Nội (2001 - 2016)</li> <li>Bác sĩ, Bệnh viện Thanh Nhàn (1992 - 2001)</li> </ul> <h3><strong>Khám, điều trị các bệnh</strong></h3> <ul> <li>Các bệnh liên quan về Ung bướu: ung thư vú, tuyến giáp, cổ tử cung, dạ dày, đại tràng,….</li> <li>Điều trị chăm sóc sau giảm nhẹ</li> <li>Khám Tầm soát ưng thư</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Ung Bướu, Chuyên khoa II Đại học Y Hà Nội (2000 - 2002)</li> <li>Ung Bướu, Chuyên khoa I Đại học Y Hà Nội (1996 - 1998)</li> <li>Bác sĩ Đa Khoa, Đại học Y Hà Nội (1988 - 1992)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Chương trình Quốc gia: Tham gia tầm soát Ung thư Cổ tử cung (2002 - 2004)</li> <li>Đề tài: Điều trị hóa chất bổ trợ cho bệnh nhân Ung thư vú giai đoạn 2-3 (1998 - 2000)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ hành nghề khám bệnh, chữa bệnh, Sở Y Tế (2013)</li> <li>Chứng chỉ định hướng Ung Thư, Sở Y Tế (2002)</li> </ul>",
                clinic_id: "2876348b-8269-41f8-a4a9-d3daf12abcfe",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Duy Phương",
                description:
                    "<p>Giám đốc Điều hành - Trung tâm Hiếm muộn & Y học giới tính Bệnh viện Đa khoa Hà Nội</p> <p>Bác sĩ Sản phụ khoa Kế hoạch hóa gia đình Bệnh viện Đa khoa Hà Nội</p> <p>Nhiều năm kinh nghiệm trong lĩnh vực Hỗ trợ sinh sản</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/19/202016-bs-nguyen-duy-phuong.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Duy Phương</strong></h2> <ul> <li>Giám đốc Điều hành - Trung tâm Hiếm muộn và Y học giới tính Bệnh viện Đa khoa Hà Nội</li> <li>Bác sĩ Sản phụ khoa Kế hoạch hóa gia đình Bệnh viện Đa khoa Hà Nội</li> <li>Nhiều năm kinh nghiệm trong lĩnh vực Hỗ trợ sinh sản</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám vô sinh hiếm muộn, </li> <li>Điều trị vô sinh hiếm muộn nội khoa, </li> <li>Điều trị vô sinh hiếm muộn phẫu thuật, </li> <li>Kỹ thuật thụ tinh nhân tạo IUI (bơm tinh trùng vào buồng tử cung)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện tại, Giám đốc Điều hành - Trung tâm Hiếm muộn và Y học giới tính Bệnh viện Đa khoa Hà Nội </li> <li>Nguyên Trưởng khoa Hỗ trợ Sinh sản, Bệnh viện Hỗ trợ sinh sản và Nam học Đức Phúc (2019 - 2020)</li> <li>Nguyên Trưởng khoa Sản phụ khoa – Nam khoa và Hỗ trợ sinh sản, Bệnh viện Medlatec (2017-2019)</li> <li>Từng công tác tại Bệnh viện Sản – Nhi Ninh Bình (2011-2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp chuyên ngành bác sĩ Sản – Phụ khoa, Đại học Y Thái Bình (2011)</li> </ul>",
                clinic_id: "2876348b-8269-41f8-a4a9-d3daf12abcfe",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Bác sĩ Đoàn Diệu Huyền",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong lĩnh vực Nội Tổng quát</p> <p>Từng công tác tại Học viện y học Phòng không, Không quân</p> <p>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/19/184619-bs-huyen.png",
                introduction:
                    "<h2><strong>Thạc sĩ Bác sĩ Đoàn Diệu Huyền</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong lĩnh vực Nội Tổng quát</li> <li>Từng công tác tại Học viện y học Phòng không, Không quân</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nội, khoa Khám bệnh, Bệnh viện Đa khoa Hà Nội (5/2021-nay) </li> <li>Bác sĩ Nội, khoa Khám bệnh, Học viện y học Phòng không, Không quân (2013-2021)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Học viện Quân Y (2010)</li> <li>Học viên Cao học, Đại học Y Hà Nội (2018-2020)</li> </ul> <h3><strong>Khám và điều trị</strong></h3> <ul> <li>Khám, tư vấn bệnh lý nội khoa ung bướu</li> <li>Tư vấn điều trị u nang tuyến giáp, u nang tuyến vú</li> </ul>",
                clinic_id: "2876348b-8269-41f8-a4a9-d3daf12abcfe",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Trọng Hiến",
                description:
                    "<p>Bác sĩ khoa Sức khỏe Tâm thần, Bệnh viện Lão khoa Trung ương</p> <p>Từng là giảng viên bộ môn Tâm thần, Đại học Y Hà Nội</p> <p>Từng công tác tại Bệnh viện Đa khoa Quốc tế Vinmec Hà Nội</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/10/18/095429thac-si-nguyen-trong-hien.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Trọng Hiến</strong></h2> <ul> <li>Bác sĩ khoa Sức khỏe Tâm thần, Bệnh viện Lão khoa Trung ương</li> <li>Từng là giảng viên bộ môn Tâm thần, Đại học Y Hà Nội</li> <li>Từng công tác tại Bệnh viện Đa khoa Quốc tế Vinmec Hà Nội</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám & điều trị các bệnh</strong></h2> <ul> <li>Trầm cảm</li> <li>Rối loạn lo âu</li> <li>Rối loạn hoảng sợ</li> <li>Tâm thần phân liệt</li> <li>Các rối loạn loạn thần</li> <li>Nghiện chất (rượu, ma túy, cần sa, ma túy đá…)</li> <li>Nghiện game, nghiện cờ bạc</li> <li>Rối loạn cảm xúc lưỡng cực</li> <li>Rối loạn giấc ngủ</li> <li>Rối loạn ăn uống</li> <li>Rối loạn chức năng tình dục</li> <li>Rối loạn nhân cách</li> <li>Rối loạn hành vi</li> <li>Rối loạn trí nhớ, sa sút trí tuệ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Sức khỏe Tâm thần, Bệnh viện Lão khoa Trung ương (2016 - nay)</li> <li>Giảng viên bộ môn Tâm thần, Đại học Y Hà Nội (2016 - 2020)</li> <li>Bác sĩ, Bệnh viện Đa khoa Quốc tế Vinmec Hà Nội (2016 - 2020)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên khoa Tâm thần, Bác sĩ chuyên khoa cấp II, Đại học Y Hà Nội (2020 - 2022)</li> <li>Bác sĩ Nội trú Chuyên ngành Tâm thần, Đại học Y Hà Nội (2016)</li> <li>Tốt nghiệp Bác sĩ Đa Khoa, Đại học Y Hà Nội (2013)</li> </ul>",
                clinic_id: "d6514c5a-16bc-4094-9037-c12c46bc0157",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Văn Phi",
                description:
                    "<p>Nhiều năm kinh nghiệm trong lĩnh vực Tâm thần</p> <p>Hiện đang là Phụ trách khoa Sức khỏe tâm thần, Bệnh viện Lão khoa</p> <p>Giảng viên - Giáo vụ Đại học bộ môn Tâm thần, Đại học Y Hà Nội</p> <p>Từng công tác tại Viện sức khỏe Tâm thần, Bệnh viện Bạch Mai</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/10/23/151821thac-si-nguyen-van-phi.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Văn Phi</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong lĩnh vực Tâm thần</li> <li>Hiện đang là Phụ trách khoa Sức khỏe tâm thần, Bệnh viện Lão khoa</li> <li>Giảng viên - Giáo vụ Đại học bộ môn Tâm thần, Đại học Y Hà Nội</li> <li>Từng công tác tại Viện sức khỏe Tâm thần, Bệnh viện Bạch Mai</li> <li>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có thế mạnh về tư vấn và trị liệu tâm lý, cũng như điều trị và tư vấn một số rối loạn tâm thần như:</p> <ul> <li>Các rối loạn giấc ngủ: Ngủ kém, mất ngủ, mộng du, hoảng sợ khi ngủ</li> <li>Các rối loạn cảm xúc: Trầm cảm, hưng cảm; Chán nản, thất vọng, tức giận, cáu gắt, lo lắng, căng thẳng, ý tưởng muốn chết</li> <li>Các rối loạn lo âu, liên quan stress: Lo âu, căng thẳng, dễ cáu gắt…</li> <li>Đau đầu: Đau đầu, đau nửa đầu</li> <li>Rối loạn thần kinh thực vật dạng cơ thể: Hồi hộp, lo lắng, khó thở, nóng ruột, vã mồ hôi…</li> <li>Rối loạn dạng cơ thể khác: Đau, khó chịu nhiều vị trí khám không có bệnh cơ thể</li> <li>Các rối loạn tình dục: Giảm ham muốn, rối loạn cương dương, rối loạn xuất tinh…</li> <li>Các rối loạn ăn uống: Chán ăn, ăn vô độ tâm thần</li> <li>Rối loạn nhận thức, sa sút trí tuệ: Suy giảm trí nhớ, trí tuệ, rối loạn hành vi</li> <li>Các rối loạn hành vi: Bướng bỉnh, chống đối, tăng động…</li> <li>Các rối loạn tâm thần trẻ em và thanh thiếu niên: Nóng giận, hành vi đập phá đồ đạc, không nghe lời bố mẹ, giảm sút kết quả học tập, bướng bỉnh…; Rối loạn phổ tự kỷ, chậm nói, chậm phát triển tâm thần</li> <li>Các rối loạn tâm thần liên quan đến sử dụng chất (cần sa, bóng cười, thuốc lắc, đá…)</li> <li>Tâm thần phân liệt, rối loạn hoang tưởng… : Cho rằng có người khác làm hại, nghe thấy tiếng nói trong đầu, cho rằng chồng/ vợ không chung thuỷ với mình</li> <li>Các rối loạn tâm thần liên quan đến sinh đẻ (trầm cảm sau sinh…): Buồn chán, thay đổi cảm xúc, rối loạn giấc ngủ liên quan thai nghén và sau sinh</li> <li>Các rối loạn tâm thần sau tổn thương não</li> <li>Rối loạn nhân cách loại ranh giới, rối loạn nhân cách phụ thuộc… : Cảm xúc thay đổi thất thường, thường xuyên suy nghĩ tiêu cực về bản thân, mất động lực sống, chán ghét bản thân, ít bạn bè, ít mối quan hệ …</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phụ trách khoa Sức khỏe tâm thần, Bệnh viện Lão khoa (11/2021 - Nay)</li></ul>",
                clinic_id: "d6514c5a-16bc-4094-9037-c12c46bc0157",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Hoàng Thị Bích",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong lĩnh vực Nội Cơ Xương Khớp</p> <p>Bác sĩ hiện đang công tác tại Bệnh viện Lão Khoa Trung ương</p> <p>Bác sĩ nhận khám bệnh nhân từ 18 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/02/172036-bs-bich-medi.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Hoàng Thị Bích</strong></h2> <ul> <li>Gần 20 năm kinh nghiệm trong lĩnh vực Nội cơ xương khớp</li> <li>Bác sĩ hiện đang công tác tại Bệnh viện Lão Khoa Trung ương</li> <li>Bác sĩ nhận khám bệnh nhân từ 18 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị chuyên sâu về Nội Cơ Xương Khớp:</p> <ul> <li>Loãng xương</li> <li>Gout</li> <li>Thoát vị đĩa đệm</li> <li>Viêm quanh khớp vai</li> <li>Bệnh lý phần mềm quanh khớp</li> <li>Thoái hóa khớp gối</li> <li>Thoái hóa đa khớp</li> <li>Viêm khớp dạng thấp</li> <li>Viêm cột sống dính khớp</li> <li>Viêm da cơ, viêm đa cơ</li> <li>Lupus ban đỏ hệ thống</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị - Bệnh viện Lão Khoa Trung ương (04/2016 - nay)</li> <li>Bác sĩ điều trị - Bệnh viện Hữu Nghị Đa khoa Nghệ An (08/2004 - 04/2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa cấp II Nội Xương Khớp - Đại học Y Hà Nội (2019 - 2021)</li> <li>Thạc sĩ Nội khoa - Đại học Y Hà Nội (2011 - 2013)</li> <li>Bác sĩ Đa Khoa - Đại học Y Hà Nội (1998 - 2004)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Bác sĩ gia đình - Đại Y Hà Nội (2022)</li> <li>Siêu âm khớp - Đại học Y Dược TP. HCM (2022)</li> <li>Siêu âm cơ bản - Bệnh viện Bạch Mai (2012)</li> <li>Tiêm khớp - Bệnh viện Bạch Mai (2012)</li> </ul>",
                clinic_id: "d6514c5a-16bc-4094-9037-c12c46bc0157",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Tôn Thị Hương Giang",
                description:
                    "<p>Hiện là Trưởng khoa Nội chung, Bệnh viện Lão khoa Trung ương</p> <p>Thành viên Hội Lão khoa Việt Nam</p> <p>Bác sĩ khám chuyên sâu về bệnh lý nội khoa</p> <p>Bác sĩ nhận khám từ 18 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/09/18/090625thac-si-bac-si-ton-thi-huong-giang.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Tôn Thị Hương Giang</strong></h2> <ul> <li>Trưởng khoa Nội chung, Bệnh viện Lão khoa Trung ương</li> <li>Tốt nghiệp Thạc sĩ Y khoa, Trường Đại học Y Hà Nội</li> <li>Bác sĩ nhận khám từ 18 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị chuyên sâu về nội khoa các bệnh lý</p> <ul> <li>Đái tháo đường</li> <li>Tăng huyết áp</li> <li>Loãng xương</li> <li>Thoái hóa khớp</li> <li>Rối loạn chuyển hóa lipid</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Lão khoa Trung ương (2000 - nay)</li> <li>Trưởng khoa Điều trị theo yêu cầu, Bệnh viện Lão khoa Trung ương (2006 - 2016)</li> <li>Trưởng khoa Nội chung, Bệnh viện Lão khoa Trung ương (2017 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Bác sĩ Đa khoa, Đại học Y Varna, Bun-ga-ri (1990 - 1996)</li> <li>Học cao học, Đại học Y Hà Nội (1997 - 1999)</li> <li>Học chuyên ngành Lão khoa, Khóa học liên trường đại học - Đại học Y Hà Nội và Đại học Strasbourg, Pháp (2010 - 2012)</li> </ul> <h3><strong>Thành viên các Hội khoa học, Tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội đồng khoa học của Bệnh viện Lão khoa Trung ương</li> <li>Thành viên Hội Lão khoa Việt Nam</li> </ul> <h3><strong>Than gia các chuyên đề sức khỏe trên báo chí, truyền hình</strong></h3> <ul> <li>Cố vấn chương trình Vui - Khỏe - Có ích, phát sóng trên VTV3 (2004 - 2009)</li> </ul>",
                clinic_id: "d6514c5a-16bc-4094-9037-c12c46bc0157",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGs.Ts. Bác sĩ Nguyễn Trọng Hưng",
                description:
                    "<p>Nguyên Trưởng khoa Tâm Thần kinh – Bệnh viện Lão Khoa Trung ương</p> <p>Giảng viên Cao cấp trường Đại học Y khoa Hà Nội</p> <p>Bác sĩ khám cho người bệnh từ 13 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/03/084302-pgs-nguyen-trong-hung.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Trọng Hưng</strong></h2> <ul> <li>Chuyên gia đầu ngành về Thần kinh và các bệnh Lão khoa</li> <li>Nguyên Trưởng khoa Tâm Thần kinh – Bệnh viện Lão Khoa Trung ương</li> <li>Bác sỹ Nội trú Chuyên nghành Thần kinh Đại học Lille – Cộng hòa Pháp</li> <li>Tu nghiệp chuyên sâu tại Bệnh viện Paris 6 - Cộng Hòa Pháp về Thần kinh học, Lão khoa, Lão học</li> <li>Phó Giáo sư Nguyễn Trọng Hưng đã tiến hành trao đổi kinh nghiệm và tu nghiệp tại nhiều quốc gia trên thế giới.</li> <li>Phó Giáo sư Hưng có gần 30 bài Báo cáo khoa học và Nghiên cứu được đăng trên các tạp chí uy tín trong và ngoài nước</li> <li>Bác sĩ khám cho người bệnh từ 13 tuổi trở lên</li> <li>Bác sĩ không nhận tư vấn cho người nhà khi không có bệnh nhân</li> </ul> <h2><strong>Khám & điều trị các bệnh</strong></h2> <ul> <li>Đau nhức đầu</li> <li>Giảm trí nhớ, giảm tập trung, giảm chú ý</li> <li>Mất ngủ</li> <li>Mất ngủ kéo dài</li> <li>Suy nhược thần kinh</li> <li>Các chứng lo âu, trầm cảm, rối loạn trí nhớ</li> </ul> <p><strong>Mất ngủ và rối loạn khác do thiếu ngủ</strong></p> <ul> <li>Rối loạn giấc ngủ: ngủ không ngon, không sâu giấc, tỉnh dậy bất chợt, …</li> <li>Mệt mỏi, buồn ngủ vào buổi sáng: ngủ gật vào ban ngày, làm việc không hiệu quả, kém tập trung, …</li> </ul> <p><strong>Rối loạn về hô hấp trong khi ngủ</strong></p> <ul> <li>Hội chứng ngừng thở khi ngủ</li> <li>Ngáy to: ngáy quá ồn ào, ảnh hưởng đến người xung quanh làm họ tỉnh giấc, khó chịu</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa Thần kinh</li> <li>Chuyên gia đầu ngành về Thần kinh và các bệnh Lão khoa</li> <li>Nguyên Trưởng khoa Tâm Thần kinh – Bệnh viện Lão Khoa Trung ương</li> <li>Nguyên Bác sỹ Khoa Thần kinh - Bệnh viện Bạch Mai</li> <li>Giảng viên Cao cấp trường Đại học Y khoa Hà Nội</li> <li>Giám đốc Trung tâm Đào tạo – Bệnh viện Lão Khoa Trung ương</li> <li>Thành viên Viện Hàn Lâm Thần kinh học Hoa Kỳ</li> </ul>",
                clinic_id: "abaa3651-c7e6-4ac4-be6b-79947ba99d81",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Duy Khánh",
                description:
                    "<p>Hiện là bác sĩ tại Trung tâm Nam học, Bệnh viện Việt Đức </p> <p>Nghiên cứu khoa học về Đánh giá kết quả điều trị ung thư tinh hoàn tại Bệnh viện Việt Đức giai đoạn 2007 - 2014.</p> <p>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/01/22/095108-bs-nguyen-duy-khanh.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Duy Khánh</strong></h2> <ul> <li>Hiện là bác sĩ tại Trung tâm Nam học, Bệnh viện Việt Đức</li> <li>Nghiên cứu khoa học về Đánh giá kết quả điều trị ung thư tinh hoàn tại Bệnh viện Việt Đức giai đoạn 2007 - 2014.</li> <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li><strong>Điều trị nội khoa:</strong> Bệnh vô sinh nam giới, mãn dục nam giới, suy sinh dục nam, rối loạn cương dương, rối loạn xuất, viêm đường tiết niệu – sinh dục, viêm – tổn thương da bộ phận sinh dục...</li> <li><strong>Điều trị ngoại khoa:</strong> Giãn tĩnh mạch tinh, tinh hoàn ẩn, đặt tinh hoàn giả, sinh thiết tinh hoàn – mào tinh hoàn, nang mào tinh hoàn – nang thừng tinh, tràn dịch màng tinh hoàn,…Các phẫu thuật trên dương vật: Phẫu thuật tạo hình trên dương vật: tạo hình niệu đạo – lỗ đái lệch thấp, mất đoạn niệu đạo, cong vẹo dương vật – xơ cứng vật hang, tạo hình dương vật, đặt vật giả dương vật, phẫu thuật điều trị rối loạn cương dương, rối loạn xuất tinh,…),phẫu thuật nối dương vật vi phẫu...</li> <li><strong>Các phẫu thuật điều trị vô sinh:</strong> Nối ống dẫn tinh - ống dẫn tinh vi phẫu, nối ống dẫn tinh – mào tinh hoàn vi phẫu, bộc lộ chụp ống dẫn tinh</li> <li><strong>Các phẫu thuật tiểu khung:</strong> Phẫu thuật cắt nang túi tinh, phẫu thuật cắt túi tinh điều trị bệnh lý túi tinh,…</li> <li><strong>Các phẫu thuật liên quan đến tiết niệu:</strong> Đốt giãn tĩnh mạch niệu đạo nội soi điều trị chảy máu niệu đạo khi cương, cắt xử lý vùng ụ núi – tuyến tiền liệt – cổ bàng quang nội soi điều trị rối loạn xuất tinh (không xuất tinh, khó xuất tinh,…)</li> <li><strong>Các phẫu thuật khác:</strong> Phẫu thuật định giới cho những trường hợp rối loạn biệt hoá giới tính, phẫu thuật điều trị vú to ở nam giới, …</li> </ul>",
                clinic_id: "abaa3651-c7e6-4ac4-be6b-79947ba99d81",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Lưu Phương",
                description:
                    "<p>Trưởng Phòng khám Đa khoa thuộc Bệnh viện Bộ Phát triển Nông nghiệp Nông thôn</p> <p>Hơn 40 năm kinh nghiệm trong lĩnh vực Tiêu hóa</p> <p>Bác sĩ nhận khám cho trẻ từ 2 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/06/19/174415-bs-nguyen-thi-luu-phuong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Lưu Phương</strong></h2> <ul> <li>Trưởng Phòng khám Đa khoa thuộc Bệnh viện Bộ Phát triển Nông nghiệp Nông thôn</li> <li>Hơn 40 năm kinh nghiệm khám chữa bệnh Tiêu hóa</li> <li>Bác sĩ nhận khám cho trẻ từ 2 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Khám và tư vấn bệnh lý nội chung thường gặp:</p> <ul> <li>Viêm loét dạ dày, đại tràng</li> <li>Rối loạn đại tràng, co thắt đại tràng</li> <li>Tăng huyết áp</li> <li>Đái tháo đường</li> <li>Tăng cholesterol máu (mỡ máu)</li> <li>Các viêm nhiễmđường hô hấp trên</li> <li>Các viêm nhiễm thông thường của cơ thể</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng Phòng khám Đa khoa thuộc Bệnh viện Bộ Phát triển Nông nghiệp Nông thôn<br>(1999 – 2009)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II chuyên ngành Nội tiêu hóa (2002)</li> <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Nội khoa (1993)</li> <li>Tốt nghiệp Đại học Y Hà Nội (1980)</li> </ul>",
                clinic_id: "abaa3651-c7e6-4ac4-be6b-79947ba99d81",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Tuyết Vân",
                description:
                    "<p>Bác sĩ từng công tác tại Khoa Khám bệnh, Bệnh viện Bạch Mai</p> <p>Gần 30 năm kinh nghiệm trong lĩnh vực tiêu hóa</p> <p>Bác sĩ nhận khám cho trẻ từ 15 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/05/15/085943bs-tuyet-van-meditec-1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Thị Tuyết Vân</strong></h2> <ul> <li>Bác sĩ từng công tác tại Khoa Khám bệnh, Bệnh viện Bạch Mai</li> <li>Hơn 15 năm kinh nghiệm trong lĩnh vực tiêu hóa</li> <li>Bác sĩ nhận khám cho trẻ từ 15 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Các bệnh lý thuộc dạ dày</strong></p> <ul> <li>Đau dạ dày</li> <li>Trào ngược dạ dày - thực quản</li> <li>Viêm hang vị dạ dày</li> <li>Viêm, loét dạ dày</li> <li>Viêm, loét tá tràng</li> <li>Polyp dạ dày, ung thư dạ dày …</li> <li>Đau thượng vị</li> <li>Khó nuốt</li> <li>Khó tiêu</li> </ul> <p><strong>Các bệnh lý về ruột</strong></p> <ul> <li>Hội chứng ruột kích thích</li> <li>Bệnh lý không dung nạp lactose</li> <li>Viêm đại tràng</li> <li>Polyp, ung thư đại tràng …</li> <li>Đi ngoài ra máu</li> <li>Nứt kẽ hậu môn, đại tiện khó</li> </ul> <p><strong>Khám và điều trị các bệnh lý gan, mật</strong></p> <ul> <li>Viêm xơ gan do rượu</li> <li>Gan nhiễm mỡ </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Khoa Khám bệnh, Bệnh viện Bạch Mai (1991 - 2005)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành Nội Tiêu hóa, Trường Đại học Y Hà Nội (2004)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Nội khoa, Trường Đại học Y Hà Nội (1998)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học Y Hà Nội (1991)</li> </ul> <h3><strong>Sách và công trình nghiên cứu</strong></h3> <ul> <li>Nghiên cứu thực trạng chẩn đoán bệnh tiêu hóa tại phòng khám nội bệnh viện Bạch Mai từ tháng 8-2003 đến tháng 7-2004</li> </ul>",
                clinic_id: "abaa3651-c7e6-4ac4-be6b-79947ba99d81",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo Sư, Tiến sĩ, Bác sĩ  Nguyễn Tiến Dũng",
                description:
                    "<p>Bác sĩ có gần 45 năm kinh nghiệm trong lĩnh vực Nhi khoa </p> <p>Nguyên Trưởng khoa Nhi, Bệnh viện Bạch Mai</p> <p>Phó chủ tịch Hội hô hấp Nhi Việt Nam</p> <p>Bác sĩ nhận khám từ sơ sinh đến 16 tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/11/21/104142-pgs-dung--nhi.jpg",
                introduction:
                    "<h2><strong>Phó Giáo Sư, Tiến sĩ, Bác sĩ Nguyễn Tiến Dũng</strong></h2> <ul> <li>Gần 45 năm kinh nghiệm trong lĩnh vực Nhi khoa</li> <li>Nguyên Trưởng khoa Nhi, Bệnh viện Bạch Mai</li> <li>Phó chủ tịch Hội hô hấp Nhi Việt Nam</li> <li>Bác sĩ nhận khám từ sơ sinh đến 16 tuổi</li> </ul> <h3><strong>Khám & điều trị</strong></h3> <ul> <li>Các bệnh Nội Nhi</li> <li>Bệnh hen suyễn</li> <li>Hen phế quản</li> <li>Tư vấn dinh dưỡng và cách chăm sóc trẻ...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Nhi, Bệnh viện Bạch Mai (2008 - 2015) </li> <li><strong>Giảng viên chương trình ARI (Nhiễm khuẩn hô hấp cấp trẻ em) của Quốc gia (2001 - 2006)</strong> </li> <li><strong>Công tác tại Bệnh viện Nhi Trung ương với vai trò bác sĩ nội trú (1985 - 1999)</strong> </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp trường Đại học Y Hà Nội (1979) </li> </ul> <h3><strong>Thành viên các hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Phó chủ tịch Hội hô hấp Nhi Việt Nam</li> <li>Ủy viên Hội đồng tư vấn Hội Bệnh phổi Nhi thế giới</li> </ul>",
                clinic_id: "f0bc5d41-5d97-481a-85fe-56b22f67e6be",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Tiến Thành",
                description:
                    "<p>Hơn 15 năm kinh nghiệm trong chuyên khoa Da liễu và thế mạnh chính về Laser sắc tố da</p> <p>Phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương</p> <p>Bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/24/155630-bs-thanh.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Tiến Thành</strong></h2> <ul> <li>Hơn 15 năm kinh nghiệm trong chuyên khoa Da liễu và thế mạnh chính về Laser sắc tố da</li> <li>Phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương</li> <li>Bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương</li> <li>Tham gia nhiều hoạt động báo hình và báo viết chính thống: Dân trí, Sức khoẻ đời sống, VnExpress, VTC, VTV1, VTV2, VTV3, Truyền hình Hà Nội,...</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Điều trị các bệnh lý Da liễu, Thẩm mỹ, Laser công nghệ cao người lớn, trẻ em:</strong></p> <ul> <li>Viêm da cơ địa, mày đay, nấm da, nấm móng, vảy nến,…</li> <li>Trứng cá, thâm mụn, sẹo lõm, sẹo lồi, sẹo xấu,…</li> <li>Zona, herpes, hạt cơm,…</li> <li>Điều trị các bệnh lây truyền qua đường tình dục: Sùi mào gà, u mềm lây, lậu, ghẻ,…</li> </ul> <p><strong>Thế mạnh trong điều trị thẩm mỹ nội khoa (không phẫu thuật):</strong></p> <ul> <li>Rụng tóc: rụng tóc mảng, rụng tóc kiểu hói, rụng tóc toàn thể, tóc mỏng, thưa, dễ gãy, phục hồi mái tóc trở nên khoẻ mạnh,…</li> <li>Điều trị bằng Laser công nghệ cao điều trị sắc tố: rám má, tàn nhang, bớt sắc tố, xoá xăm, trẻ hoá da (Ultherapy nâng cơ, xoá nhăn, phục hồi, căng bóng,...), rạn da bụng - chân, triệt lông</li> </ul> <p><strong>Tạo hình khuôn mặt không xâm lấn:</strong></p> <ul> <li>Nâng mũi, kéo dài cằm, thu gọn viền hàm,…</li> <li>Đặc biệt kinh nghiệm nhiều năm trong thẩm mỹ da, phục hồi những ca bệnh biến chứng nặng do điều trị hỏng ở nhiều nơi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương (2022 - Nay)</li> <li>Bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương (2015 - Nay)</li> <li>Phó Trưởng khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương (2019 - 2022)</li> <li>Phó Trưởng phòng Tổ chức cán bộ, Bệnh viện Da liễu Trung ương (2015 - 2018)</li> <li>Bác sĩ khoa Điều trị bệnh da nữ và trẻ em, Bệnh viện Da liễu Trung ương (2010 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II, Trường Đại học Y Hà Nội (2017 - 2019)</li> <li>Thạc sĩ Da liễu, Trường Đại học Y Hà Nội (2012 - 2014)</li> </ul>",
                clinic_id: "d81e735c-8e12-40d7-aeb6-e2f132d34c16",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Trần Thu Hà",
                description:
                    "<p>Nhiều năm kinh nghiệm trong lĩnh vực Da liễu - Thẩm mỹ da</p> <p>Từng là bác sĩ Da liễu tại Bệnh viện Trung ương Quân đội 108</p> <p>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/27/170414-1-bs-tran-thu-ha.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Trần Thu Hà</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong lĩnh vực Da liễu - Thẩm mỹ da</li> <li>Từng là bác sĩ Da liễu tại Bệnh viện Trung ương Quân đội 108</li> <li>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Mụn trứng cá</li> <li>Các bệnh da liễu: viêm da cơ địa, nấm da, mày đay, viêm nang lông, ghẻ, thủy đậu...</li> <li>Rụng tóc</li> <li>Rám má, tàn nhang</li> <li>Hạt cơm, nốt ruồi, u mềm lây, u tuyến mồ hôi, mụn thịt…</li> <li>Sẹo lồi, sẹo lõm, sẹo xấu</li> <li>Lão hóa da, chảy xệ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Da liễu - Phòng khám Chuyên khoa Da liễu Maia&Maia (2020 - Nay)</li> <li>Bác sĩ Da liễu - Bệnh viện Trung ương Quân đội 108 (2018 - 2019)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ da liễu - Bệnh viện Da liễu Trung ương (2017 - 2018)</li> <li>Bác sĩ Đa khoa - Học viện Quân y (2010 - 2016)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Laser tế bào gốc trong chuyên ngành Da liễu Thẩm mỹ - Đại học Quốc Gia Hà Nội khoa Y Dược (2019)</li> <li>Định hướng chuyên khoa Da liễu - Bệnh viện Da liễu Trung ương (2018)</li> </ul>",
                clinic_id: "d81e735c-8e12-40d7-aeb6-e2f132d34c16",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Trần Thị Yến Chi",
                description:
                    "<p>Gần 5 năm kinh nghiệm trong lĩnh vực Da liễu - Thẩm mỹ da</p> <p>Thế mạnh trong Điều trị Thẩm mỹ da Nội khoa</p> <p>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/28/093621-thiet-ke-chua-co-ten.png",
                introduction:
                    "<h2><strong>Bác sĩ Trần Thị Yến Chi</strong></h2> <ul> <li>Gần 5 năm kinh nghiệm trong lĩnh vực Da liễu - Thẩm mỹ da</li> <li>Thế mạnh trong Điều trị Thẩm mỹ da Nội khoa</li> <li>Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi</li> <li>Tham gia nhiều hoạt động báo hình và báo viết chính thống: Dân trí, Sức khoẻ đời sống, VnExpress, VTC, VTV1, VTV2, VTV3, Truyền hình Hà Nội,...</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Điều trị các bệnh lý Da liễu, Thẩm mỹ, Laser công nghệ cao người lớn và trẻ em</li> <li>Thế mạnh trong Điều trị Thẩm mỹ Nội khoa (không phẫu thuật)</li> <li>Tạo hình khuôn mặt không xâm lấn</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Da liễu tại Phòng khám chuyên khoa Da liêu Maia& Maia</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Được đào tạo tại Singapore (2022)</li> <li>Được đào tạo tại Thái Lan (2021)</li> <li>Được đào tạo tại Hàn Quốc (2020)</li> <li>Bệnh viện Da liễu Thành phố Hồ Chí Minh (2020)</li> <li>Bệnh viện Da liễu Trung Ương (2018)</li> <li>Học viện Quân y (2018)</li> <li>Đại học Y Hà Nội (2018)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Định hướng Chuyên khoa Da liễu, Bệnh viện Da liễu Trung Ương</li> <li>Ứng dụng Laser trong chuyên ngành Da liễu</li> <li>Tiêm Botulinum toxin, Chất làm đầy trong Thẩm mỹ da, Căng chỉ; Bệnh viện Da liễu Trung Ương, Bệnh viện Da liễu Tp. Hồ Chí Minh, Teoxane, Juvederm, Allegen, Restylen,...</li> <li>Liệu pháp Meso trong Thẩm mỹ da</li> <li>Chăm sóc da thẩm mỹ</li> </ul>",
                clinic_id: "d81e735c-8e12-40d7-aeb6-e2f132d34c16",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Chuyên khoa II Trà Anh Duy",
                description:
                    "<p>Hơn 15 năm kinh nghiệm khám các vấn đề sức khỏe nam giới</p> <p>Hiện đang công tác tại Bệnh viện Bình Dân</p> <p>Từng tu nghiệp tại nước ngoài: Singapore, Hoa Kì</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/01/03/162212-1-bs-duy-2022.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Chuyên khoa II Trà Anh Duy</strong></h2> <ul> <li>Hơn 15 năm kinh nghiệm khám các vấn đề sức khỏe nam giới</li> <li>Hiện đang công tác tại Bệnh viện Bình Dân</li> <li>Từng tu nghiệp tại nước ngoài: Singapore, Hoa Kì</li> <li>Thành viên của các Hiệp hội Niệu khoa trong nước và quốc tế</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Hẹp bao quy đầu</li> <li>Mãn dục nam</li> <li>Rối loạn cương dương</li> <li>Xuất tinh sớm</li> <li>Sùi mào gà</li> <li>Vô sinh - Hiếm muộn</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị khoa Nam học - Bệnh viện Bình Dân (2013 - Nay)</li> <li>Bác sĩ điều trị khoa Niệu A - Bệnh viện Bình Dân (2010 - 2013)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tiến sĩ Y học - Đại học Y Dược Thành phố Hồ Chí Minh (2021)</li> <li>Phẫu thuật Tạo hình Niệu đạo Nam giới - Đại học California, Irvine, Hoa Kỳ (2014)</li> <li>Bác sĩ nội trú Tiết niệu - Trường Tiết Niệu Châu Á và Hội Tiết niệu Châu Á (2010)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược Thành phố Hồ Chí Minh (2001 - 2007)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Tiết niệu - Thận học Việt Nam</li> <li>Hội Tiết niệu - Thận học TP. HCM</li> <li>Hội Y học giới tính Thế giới (ISSM)</li> <li>Hội Nội tiết sinh sản và vô sinh TP. HCM</li> <li>Hội Niệu khoa châu Á</li> <li>Hội Niệu khoa châu Âu</li> <li>Hội Niệu khoa Thế giới</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Bác sĩ Niệu khoa trẻ tiêu biểu châu Á (2015)</li> <li>Viên chức lãnh đạo, quản lý trẻ xuất sắc Bệnh viện Bình Dân (2015)</li> <li>Thầy thuốc trẻ tiêu biểu (2013)</li> </ul>",
                clinic_id: "b3a2f31b-51c0-412c-9465-7f82995f48ad",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Xuân Quang",
                description:
                    "<p>Giám đốc Trung tâm Da liễu tổng thể MD Medical</p> <p>Bác sĩ được đào tạo ngành Da liễu chuyên sâu ở trong nước và quốc tế (Đức, Singapore, Thái Lan)</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/04/19/152602-anh-bs-nguyen-xuan-quang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Xuân Quang</strong></h2> <ul> <li>Giám đốc Trung tâm Da liễu tổng thể MD Medical</li> <li>Bác sĩ được đào tạo ngành Da liễu chuyên sâu ở trong nước và quốc tế (Đức, Singapore, Thái Lan)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên ngành Dinh dưỡng - Tâm lí, Đại học Uni Los Angeles USA (2013-2014)</li> <li>Chuyên ngành Da liễu Thẩm mỹ, Đại học Bankok Thái Lan (2013-2014)</li> <li>Chuyên ngành Stem Sell, Đại học Quốc gia Singapore (2012-2013)</li> <li>Chuyên ngành DMP Bio Cosmetic Dr Spiller, Germany (2012-2013)</li> <li>Chuyên khoa Da liễu, Bệnh viện Da liễu Trung ương - Đại học Y Hà Nội (2011-2012)</li> <li>Chuyên ngành Phẫu thuật Tạo hình Thẩm mỹ, Bệnh viện Trung ương Quân đội 108 - Đại học Y Hà Nội (2009-2011)</li> </ul> <h3><strong>Thành viên các Tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hiệp hội Da liễu Quốc tế</li> <li>Thành viện Hiệp hội Da liễu Việt Nam</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Da nhạy cảm: đỏ, ngứa, giãn mao mạch, da quá khô, da quá dầu, mụn nước, sần, thô ráp, bong tróc, tăng sắc tố</li> <li>Mụn trứng cá: mụn ẩn, mụn đầu đen, mụn viêm, mụn bọc, nang</li> <li>Sẹo sau mụn: sẹo thâm, sẹo lõm</li> <li>Sẹo phì đại, sẹo lồi</li> <li>Lão hóa</li> <li>Rối loạn sắc tố</li> </ul>",
                clinic_id: "76c777e8-d71c-45ae-95b8-b2721333d2b9",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nội trú Kim Anh Tùng",
                description:
                    "<p>Bác sĩ đang công tác tại Bệnh viện Lão khoa Trung ương</p> <p>Chứng chỉ Phục hồi chức năng người bệnh ghép phổi, Hội phổi Pháp - Việt</p> <p>Bác sĩ nhận khám bệnh nhân từ 16 tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/31/152149-anh-bs-tung-myrehab.png",
                introduction:
                    "<h2><strong>Bác sĩ Nội trú Kim Anh Tùng</strong></h2> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Lão khoa Trung ương</li> <li>Chứng chỉ Phục hồi chức năng đột quỵ - Chương trình AVANT</li> <li>Chứng chỉ Phục hồi chức năng người bệnh ghép phổi, Hội phổi Pháp - Việt</li> <li>Bác sĩ nhận khám bệnh nhân từ 16 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Phục hồi chức năng cho bệnh nhân có bệnh lý thoái hóa thần kinh:</strong></p> <ul> <li>Parkinson</li> <li>Sa sút trí tuệ</li> </ul> <p><strong>Phục hồi chức năng bệnh lý tổn thương thần kinh:</strong> </p> <ul> <li>Chấn thương sọ não</li> <li>Tai biến mạch máu não</li> <li>Tổn thương tủy sống</li> <li>Tổn thương đám rối thần kinh cánh tay</li> <li>Đau thần kinh tọa</li> <li>Các bệnh lý thần kinh ngoại biên: Liệt dây thần kinh, viêm dây thần kinh ngoại vi; đau dây thần kinh</li> <li>Các bệnh lý thần kinh trung ương: Liệt nửa người do tai biến mạch máu não, chấn thương sọ não, đau đầu kéo dài, mất ngủ mạn tính, rối loạn tiền đình...</li> </ul> <p><strong>Phục hồi chức năng bệnh lý cơ xương khớp:</strong></p> <ul> <li>Chấn thương đụng dập phần mềm</li> <li>Gãy xương</li> <li>Tổn thương dây chằng chéo trước, chéo sau khớp gối</li> <li>Bệnh nhân sau phẫu thuật chỉnh hình, thay khớp háng, khớp gối</li> <li>Bệnh lý đau lưng, thoái hóa xương, khớp và cột sống…</li> <li>Viêm khớp vai, cứng khớp vai</li> <li>Cứng khớp sau chấn thương</li> <li>Đau thần kinh tọa, thoát vị đĩa đệm</li> <li>Vẹo cột sống</li> <li>Hội chứng cổ vai gáy, viêm quanh khớp vai, thoái hóa khớp</li> <li>Hội chứng ống cổ tay, viêm gân gấp, viêm điểm bám gân</li> <li>Viêm khớp dạng thấp</li> </ul> <p><strong>Phục hồi chức năng hô hấp - tim mạch:</strong></p> <ul> <li>Bệnh phổi tắc nghẽn mạn tính</li> <li>Hen phế quản, giãn phế quản</li> <li>Sau tràn dịch màng phổi, dày dính màng phổi</li> <li>Suy tim, sau đặt stent mạch vành</li> <li>Hậu covid</li> <li>Sau phẫu thuật lồng ngực - ổ bụng</li> </ul>",
                clinic_id: "0a0783e5-7cab-4e0a-b9b1-aee589209e49",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Thị Ngọc Lan (PHCN)",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong lĩnh vực Phục hồi chức năng</p> <p>Nguyên Bác sĩ chuyên khoa Phục hồi chức năng, Bệnh viện Trung ương Quân đội 108</p> <p>Bác sĩ nhận khám bệnh nhân từ 18 tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/31/150520-anh-bs-lan-myrehab.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Thị Ngọc Lan</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Phục hồi chức năng</li> <li>Nguyên Bác sĩ chuyên khoa Phục hồi chức năng, Bệnh viện Trung ương Quân đội 108</li> <li>Nguyên Bác sĩ chuyên khoa Phục hồi chức năng, Bệnh xá Bộ Quốc Phòng</li> <li>Bác sĩ nhận khám bệnh nhân từ 18 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chấn thương đụng dập phần mềm</li> <li>Tổn thương dây chằng chéo</li> <li>Bệnh nhân sau phẫu thuật chỉnh hình, thay khớp háng, khớp gối</li> <li>Bệnh lý đau lưng, thoái hóa xương, khớp và cột sống</li> <li>Viêm khớp vai, cứng khớp vai</li> <li>Cứng khớp sau chấn thương</li> <li>Gãy xương</li> <li>Điều trị thoát vị đĩa đệm, </li> <li>Điều trị thoái hóa cột sống cổ</li> <li>Gai cột sống, hẹp ống sống</li> <li>Chữa đau thần kinh tọa</li> <li>Chữa vẹo cột sống thường, phẫu thuật (sau phẫu thuật)</li> <li>Hội chứng cổ vai gáy, thoái hóa khớp</li> <li>Hội chứng ống cổ tay, viêm gân gấp, viêm điểm bám gân</li> <li>Viêm khớp dạng thấp</li> <li>Dị tật bàn chân bẹt</li> <li>Các chứng đau bàn chân</li> <li>Phục hồi chức năng cho bệnh nhân tổn thương thần kinh như chấn thương sọ não; tai biến mạch máu não; tổn thương tủy sống; tổn thương đám rối thần kinh canh tay; …</li> <li>Phục hồi chức năng sau phẫu thuật</li> <li>Các bệnh lý thần kinh ngoại biên: liệt dây thần kinh, viêm dây thần kinh ngoại vi; đau dây thần kinh; liệt mặt (dây VII ngoại vi)</li> <li>Khám, tư vấn và điều trị Phục hồi chức năng sau trật khớp, tổn thương thần kinh ngoại biên</li> </ul>",
                clinic_id: "0a0783e5-7cab-4e0a-b9b1-aee589209e49",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Bùi Thị Hồng Thúy",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong lĩnh vực Phục hồi chức năng</p> <p>Phó chủ nhiệm khoa Phục hồi chức năng, Bệnh viện Trung ương Quân đội 108</p> <p>Bác sĩ nhận khám bệnh nhân từ 16 tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/07/112835-bs-thuy.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Bùi Thị Hồng Thúy</strong></h2> <ul> <li>Gần 20 năm kinh nghiệm trong lĩnh vực Phục hồi chức năng</li> <li>Phó chủ nhiệm khoa Phục hồi chức năng, Bệnh viện Trung ương Quân đội 108</li> <li>Bác sĩ nhận khám bệnh nhân từ 16 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh lý Cơ - Xương - Khớp</li> <li>Phục hồi chức năng sau đột quỵ</li> <li>Điều trị thoái hóa đốt sống cổ</li> <li>Điều trị thoát vị đĩa đệm</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó chủ nhiệm khoa Phục hồi chức năng, Bệnh viện Trung ương Quân đội 108 (2006 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II Phục hồi chức năng, Đại học Y Hà Nội (2017 -2019)</li> <li>Bác sĩ Chuyên khoa I Vật lý trị liệu, Phục hồi chức năng, Học viện Quân Y (2010 - 2012)</li> <li>Bác sĩ Đa khoa, Đại học Y Hà Nội (1997 - 2003)</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Chiến sĩ thi đua (2019)</li> <li>Chiến sĩ thi đua (2010)</li> <li>Chiến sĩ thi đua (2008)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Đánh giá hiệu quả lâm sàng phục hồi vận động tay liệt sau đột quỵ não cấp bằng kích thích điện - Tạp chí Y dược lâm sàng 108 (2015)</li> <li>Hiệu quả phục hồi chức năng vận động khớp sau tập luyện tên hệ thống máy tập tích hợp của Hur (2013)</li> <li>Nghiên cứu tình trạng đau khớp vai và hiệu quả phục hồi chức năng khớp vai ở bệnh nhân liệt nửa người sau đột quỵ não (2010)</li> <li>Nghiên cứu hiệu quả giảm đau của phương pháp điện di Ketoprofen (biệt dược Fastumgel) (2010)</li> </ul>",
                clinic_id: "0a0783e5-7cab-4e0a-b9b1-aee589209e49",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Phạm Thế Hoàng",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm về lĩnh vực Chuyên khoa Mắt </p> <p>Bác sĩ từng công tác tại Bệnh viện Mắt Sài Gòn </p> <p>Hiện đang công tác tại Trung Tâm Mắt Công nghệ cao 3P Sài Gòn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/07/110317-bs-pham-the-hoang-3p1.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Phạm Thế Hoàng</strong></h2> <ul> <li>Bác sĩ có nhiều năm kinh nghiệm về lĩnh vực Chuyên khoa Mắt</li> <li>Bác sĩ từng công tác tại Bệnh viện Mắt Sài Gòn</li> <li>Hiện đang công tác tại Trung Tâm Mắt Công nghệ cao 3P Sài Gòn</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Tật khúc xạ </li> <li>Viêm - nhiễm trùng tại mắt </li> <li>Đục thủy tinh thể </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Điều trị, Trung Tâm Mắt Công nghệ cao 3P Sài Gòn (2023 - nay) </li> <li>Bác sĩ Điều trị, Bệnh viện Mắt Sài Gòn (2017 - 2023) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ Nhãn khoa, Đại học Y khoa Phạm Ngọc Thạch (2017 - 2019) </li> <li>Định hướng Nhãn khoa, Đại học Y Dược TP. HCM (2016 - 2017) </li> <li>Bác sĩ Đa khoa, Đại học Y dược Huế (2010 - 2016) </li> </ul> <h3><strong>Chứng chỉ trong nước và nước ngoài</strong></h3> <ul> <li>Chứng chỉ tiêm nội nhãn</li> <li>Chứng chỉ phẫu thuật Phaco</li> </ul>",
                clinic_id: "c2a7a211-11a8-4250-a5f6-6f2833d038ee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa II Huỳnh Tấn Phong",
                description:
                    "<p>Cố vấn chuyên môn Trung tâm Mắt Sài Gòn Hikari</p> <p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về mắt</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/12/22/154344-bs-phong.png",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa II Huỳnh Tấn Phong</strong></h2> <ul> <li>Cố vấn chuyên môn Trung tâm Mắt Sài Gòn Hikari</li> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về mắt</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Cố vấn chuyên môn kiêm bác sĩ khám và điều trị, Trung tâm Mắt Sài Gòn Hikari (2019 - nay)</li> <li>Nguyên Giám đốc chuyên môn, Bệnh viện Mắt Quốc tế Hoàn Mỹ Sài Gòn (2018 - 2019)</li> <li>Nguyên Trưởng khoa Mắt, Bệnh viện Quốc tế Hoàn Mỹ Đồng Nai (2015 - 2018)</li> <li>Nguyên Phó Giám đốc Bệnh viện Mắt Sài Gòn (chi nhánh Hà Nội) (2010 -2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II chuyên ngành Quản lý Y tế, Đại học Y tế Công cộng (2020)</li> <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Nhãn khoa, Đại học Y khoa Phạm Ngọc Thạch (2012)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM (2003)</li> <li>Chứng chỉ phẫu thuật dịch kính võng mạc, Đại học Y khoa Phạm Ngọc Thạch (2013)</li> <li>Chứng chỉ phẫu thuật Phaco đục thủy tinh thể, Đại học Y khoa Phạm Ngọc Thạch (2010)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có thế mạnh về phẫu thuật Phaco, Lasik,...</p> <ul> <li>Phẫu thuật viên chính Phaco đục thủy tinh thể</li> <li>Phẫu thuật khúc xạ Lasik, Femtosecond Lasik</li> <li>Cross Linking cho điều trị khúc xạ và bệnh lý giác mạc chóp</li> <li>Chỉnh hình giác mạc điều trị tật khúc xạ bằng phương pháp Ortho-K</li> <li>Điều trị nội khoa bệnh lý dịch kính – võng mạc: Võng mạc đái tháo đường</li> <li>Trung phẫu: phẫu thuật mộng thịt</li> <li>Laser YAG mống mắt, bao sau</li> <li>Kỹ năng siêu âm A/B thành thạo.</li> <li>Kỹ năng khám, tư vấn và đo khúc xạ thuần thục, quản lý cận thị</li> <li>Kỹ năng phẫu thuật tạo hình mí mắt bằng Laser CO2</li> </ul>",
                clinic_id: "c2a7a211-11a8-4250-a5f6-6f2833d038ee",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Trần Thị Tuyết Lan",
                description:
                    "<p>Hơn 40 năm kinh nghiệm trong khám, tư vấn và điều trị chuyên khoa Sản phụ khoa</p> <p>Nguyên Trưởng khoa Sản bênh viện Phụ sản Trung ương</p> <p>Bác sĩ Phụ trách khoa Sản, phòng khám Đa khoa Medelab</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/15/111400-bs-tuyet-lan1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Trần Thị Tuyết Lan</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm trong khám, tư vấn và điều trị chuyên khoa Sản phụ khoa</li> <li>Nguyên Trưởng khoa Sản bênh viện Phụ sản Trung ương</li> <li>Bác sĩ Phụ trách khoa Sản, phòng khám Đa khoa Medelab</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Điều trị và theo dõi thai kỳ, tư vấn nuôi con bằng sữa mẹ</li> <li>Điều trị các bệnh viêm nhiễm phụ khoa</li> <li>Điều trị vô sinh (hiếm muộn)</li> <li>Điều trị các bệnh do rối loạn nội tiết tố nữ</li> <li>Làm thủ thuật điều trị các bệnh thuộc lĩnh vực phụ khoa và kế hoạch hóa gia đình</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ phụ trách khoa Sản tại phòng khám Đa khoa MedeLab (2011 - Nay)</li> <li>Trưởng khoa tại Bệnh viện phụ sản Trung ương (2004 - 2011)</li> <li>Phó khoa tại Bệnh viện phụ sản Trung ương (2003 - 2004)</li> <li>Bác sĩ tại Bệnh viện phụ sản Trung ương (2000 - 2003)</li> <li>Trưởng khoa tại Bệnh viện phụ sản Nam Định (1990 - 2000)</li> <li>Bác sĩ tại Bệnh viện phụ sản Nam Định (1980 - 1990)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Bác sĩ Chuyên khoa II, Đại học Y Hà Nội (2003 - 2005)</li> <li>Học Bác sĩ Chuyên khoa I, Đại học Y Hà Nội (1999 - 2001)</li> <li>Học Y khoa, Đại học Y Hà Nội (1973 - 1979)</li> </ul> <h3><strong>Chứng chỉ trong và ngoài nước</strong></h3> <ul> <li>Chẩn đoán siêu âm trong phụ khoa, Viên bảo vệ bà mẹ và trẻ sơ sinh Trung Ương (2001)</li> <li>Chẩn đoán và điều trị vô sinh, Viên bảo vệ bà mẹ và trẻ sơ sinh Trung Ương (2001)</li> <li>Giảng viên quốc tế về nuôi con bằng sữa mẹ, Tổ chức y tế thế giới (1997)</li> </ul>",
                clinic_id: "a6203659-45c5-404e-94c2-b50157959140",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Võ Thị Kim Dung",
                description:
                    "<p>Hơn 30 năm kinh nghiệm khám và điều trị chuyên khoa Nội Cơ xương khớp</p> <p>Nguyên Phó Trưởng khoa Khoa cơ xương khớp bệnh viện Hữu Nghị</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên (dưới 15 tuổi hỏi ý kiến bác sĩ) </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/21/110559-bs-kim-dung.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Võ Thị Kim Dung</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm khám và điều trị chuyên khoa Nội Cơ xương khớp</li> <li>Nguyên Phó Trưởng khoa Khoa cơ xương khớp bệnh viện Hữu Nghị</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên (dưới 15 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Đau thần kinh tọa</li> <li>Thoát vị đĩa đệm</li> <li>Viêm khớp dạng thấp</li> <li>Viêm cột sống dính khớp</li> <li>Thoái hóa khớp, cột sống cổ, cột sống thắt lưng</li> <li>Viêm quanh khớp vai, điểm bám các gân</li> <li>Bệnh loãng xương</li> <li>Nội soi các khớp, yếu cơ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Công tác tại chuyên khoa Nội - Nội cơ xương khớp, Bệnh viện Hữu Nghị (Nay)</li> <li>Giữ chức vụ Phó trưởng khoa Khoa cơ xương khớp, Bệnh viện Hữu nghị (2000 - 02/2014)</li> <li>Bác sĩ điều trị Khoa lão khoa, Khoa cơ xương khớp, Bệnh viện Hữu Nghị (1983 - 02/2014)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Chuyên khoa cấp I Nội, Trường Đại học Y Hà Nội (1991 - 1992)</li> <li>Học chương trình tổ chức y tế, Bệnh viện thực hành số 13 Moskva Liên Xô cũ (1989 - 1990)</li> <li>Học Đại học Y khoa Rostov Liên Xô cũ, Đại học Y khoa Rostov Liên Xô cũ (1977 - 1983)</li> </ul>",
                clinic_id: "a6203659-45c5-404e-94c2-b50157959140",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Đinh Thị Ngọc Lan",
                description:
                    "<p>40 năm kinh nghiệm trong lĩnh vực khám, tư vấn và điều trị Nhãn khoa</p> <p>Bác sĩ đang công tác tại phòng khám Đa khoa Medelab</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/15/111400-bs-ngoc-lan.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Đinh Thị Ngọc Lan</strong></h2> <ul> <li>40 năm kinh nghiệm trong lĩnh vực khám, tư vấn và điều trị Nhãn khoa</li> <li>Bác sĩ đang công tác tại phòng khám Đa khoa Medelab</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm kết mạc cấp</li> <li>Viêm kết mạc thông thường</li> <li>Viêm giác mạc nông</li> <li>Chắp, sẹo mi mắt</li> <li>Viêm bờ mi</li> <li>Rối loạn điều tiết mắt</li> <li>Khô mắt</li> <li>Tật khúc xạ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa mắt tại Phòng Khám Medelab (2013 - nay)</li> <li>Bác sĩ tại Trung tâm Y tế Đường Sắt (1990- 2013)</li> <li>Bác sĩ - Giáo viên tại Trường Cao đẳng Y Nam Định (1982 - 1990)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Chuyên Khoa I, Đại Học Y Hà Nội (1996 - 1998)</li> <li>Học Chuyên khoa Mắt sơ bộ, Đại Học Y Dược Thái Bình (1984 - 1985)</li> <li>Học Bác sĩ, Đại Học Y Dược Thái Bình (1976 - 1982)</li> </ul>",
                clinic_id: "a6203659-45c5-404e-94c2-b50157959140",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Chuyên khoa II Kiều Thị Minh Nguyệt",
                description:
                    "<p>Gần 45 năm kinh nghiệm về Chuyên khoa Nội chung</p> <p>Nguyên Chủ nhiệm khoa nội tiêu hóa viện Y học Phòng không - Không quân</p> <p>Giám đốc Chuyên môn tại phòng khám Đa khoa Medelab</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/15/111400-bs-minh-nguyet.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Chuyên khoa II Kiều Thị Minh Nguyệt</strong></h2> <ul> <li>Gần 45 năm kinh nghiệm về Chuyên khoa Nội chung</li> <li>Nguyên Chủ nhiệm khoa nội tiêu hóa viện Y học Phòng không - Không quân</li> <li>Giám đốc Chuyên môn tại phòng khám Đa khoa Medelab</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nội tổng hợp đa khoa</li> <li>Bệnh dạ dày: HP(+), HP(-), hội chứng trào ngược</li> <li>Bệnh đại tràng: Viêm đại tràng</li> <li>Các bệnh lý về khớp: Viêm đa khớp dạng thấp, thoái hóa, tràn dịch khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc chuyên môn tại phòng khám Đa khoa Medelab (2012 - Nay)</li> <li>Bác sĩ tại Khoa khám bệnh, Bệnh viện 103 (1997 - 2012)</li> <li>Bác sĩ tại Học viện Quân Y (1993 - 1997)</li> <li>Chủ nhiêm khoa Khoa Nội I, Bệnh viện Quân Chủng Phòng Không - Không Quân(1979 - 1993)</li> <li>Bác sĩ, Bộ môn Nhi Đại Học Y Dược Thái Bình (1978 - 1978)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ chuyên khoa II, Học viện Quân Y (2007 - 2009)</li> <li>Bác sĩ chuyên khoa I, Học viện Quân Y (1995 - 1997)</li> <li>Thạc sĩ, Bộ Giáo Dục (1993- 1995)</li> <li>Bác sĩ, Đại Học Y Hà Nội (1972 - 1978)</li> </ul> <h3><strong>Thành viên Hội khoa học và tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên Hội Nội khoa</li> <li>Hội viên Thấp khớp học</li> <li>Hội viên Hội Tiêu hóa</li> </ul>",
                clinic_id: "a6203659-45c5-404e-94c2-b50157959140",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Trần Ngọc Lân",
                description:
                    "<p>Hơn 40 năm kinh nghiệm trong chuyên khoa Thận tiết niệu</p> <p>Nguyên trưởng khoa Thận lọc máu bệnh viện Hữu nghị Việt Xô</p> <p>Từng là Chuyên gia Y tế Vương Quốc Campuchia</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/20/154255-bs-ngoc-lan.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trần Ngọc Lân</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm trong chuyên khoa Thận tiết niệu</li> <li>Nguyên trưởng khoa Thận lọc máu bệnh viện Hữu nghị Việt Xô</li> <li>Từng là Chuyên gia Y tế Vương Quốc Campuchia</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh về Nội khoa</li> <li>Chuyên sâu Thận</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị tại Phòng khám Đa khoa Medelab (Nay)</li> <li>Bác sĩ Trưởng khoa Thận - Lọc máu Bệnh viện Hữu Nghị Việt Xô (1994 - 2012)</li> <li>Bác sĩ Phó trưởng khoa Thận - Lọc máu Bệnh viện Hữu Nghị Việt Xô (1992 – 1994)</li> <li>Bác sĩ khoa hồi sức cấp cứu Bệnh viện Hữu Nghị Việt Xô (1986 – 1992)</li> <li>Chuyên gia Y tế Vương Quốc Campuchia (1979 – 1986)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ về Bệnh học, Đại học Y Fukushima – Nhật Bản (1999 - 2000)</li> <li>Chuyên khoa I Nội, Đại học Y Hà Nội (1989 - 1991)</li> <li>Bác sĩ, Đại học Y Hà Nội (1973 – 1979)</li> </ul> <h3><strong>Chứng chỉ trong và ngoài nước</strong></h3> <ul> <li>Đào tạo liên tục kiến thức Thận Học – Hà Nội, Việt Nam (10/2009)</li> <li>Ghép thận và điều trị sau ghép, Jeju - Korea (10/2005)</li> <li>Chương trình Thận học, Kualalupur - Malaysia (8/1998)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Ủy viên BCH hội Thận – Lọc máu Nhi khoa Việt Nam và Hội Thận Học Việt Nam</li> </ul>",
                clinic_id: "a6203659-45c5-404e-94c2-b50157959140",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Trần Trọng Thắng",
                description:
                    "<p>Gần 30 năm kinh nghiệm lĩnh vực Cơ xương khớp</p> <p>Từng công tác tại Bệnh viện Xanh Pôn, Bệnh viện Phục hồi chức năng Hà Nội</p> <p>Bác sĩ nhận khám tất cả các độ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/13/173222-1bac-si-thang-1.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Trần Trọng Thắng</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm lĩnh vực Cơ xương khớp</li> <li>Từng công tác tại Bệnh viện Xanh Pôn, Bệnh viện Phục hồi chức năng Hà Nội</li> <li>Bác sĩ nhận khám tất cả các độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị bệnh thoái hóa khớp</li> <li>Chấn thương trong thể thao, sinh hoạt, tai nạn...</li> <li>Bệnh lý cột sống: thoát vị địa đệm, thoái hóa cột sống..</li> <li>Viêm bao quang khớp: viêm gân, bao hoạt dịch, dây chằng....</li> <li>Hồi phục sau phẫu thuật cơ xương khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc chuyên môn và quản lý điều hành - Phòng khám đa khoa MSC (2021 - Nay)</li> <li>Phó giám đốc và quản lý điều hành - Bệnh viện Phục hồi chức năng Hà Nội (2011 - 2021)</li> <li>Bác sĩ - Bệnh viện Xanh Pôn (1995 - 2011)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Định hướng chuyên khoa chuyên ngành Tâm Thần - Bộ Y Tế (2017)</li> <li>Khóa học quản lý bệnh viện - Bộ Y Tế (2015)</li> <li>Chuyên khoa II Cơ Xương Khớp - Đại học Y Hà Nội (2012 - 2014)</li> <li>Đa khoa - Đại học Y Hà Nội (1990 - 1995)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Đề tài cơ sở đánh giá kết quả điều trị viêm điểm bám gân bằng sóng xung kích (2014)</li> <li>Đề tài cấp Bộ về chế tạo và ứng dụng bàn tập phục hồi chức năng chi dưới trong điều trị gãy mâm chày (2013)</li> <li>Đề tài cơ sở đánh giá kết quả phục hồi chức năng sau mổ xơ cơ Delta (2006)</li> <li>Đề tài cơ sở đánh giá kết quả phẫu thuật xơ cơ detal tại bệnh viện Xanh Pôn (2005)</li> <li>Tham gia đề tài cấp thành phố: ứng dụng đinh đàn hồi Metaizeau trong điều trị gãy xương dài (2000)</li> </ul>",
                clinic_id: "9cb9cbd1-ae02-4b58-92f6-4ac727f146b8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Phạm Ngọc Trưởng",
                description:
                    "<p>Nguyên Phó Chủ nhiệm khoa Chấn thương Chình hình - Y học thể thao, Bệnh viện 198 Bộ Công an</p> <p>Giảng viên Trường Đại học Y Dược, Đại học Quốc gia Hà Nội</p> <p>Bác sĩ nhận khám bệnh nhân ở mọi đổ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/07/27/105426-bs-truong1.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Phạm Ngọc Trưởng</strong></h2> <ul> <li>Nguyên Phó Chủ nhiệm khoa Chấn thương Chình hình - Y học thể thao, Bệnh viện 198 Bộ Công an</li> <li>Giảng viên Trường Đại học Y Dược, Đại học Quốc gia Hà Nội</li> <li>Bác sĩ nhận khám bệnh nhân ở mọi đổ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Tiêm khớp</li> <li>Phẫu thuật nội soi khớp</li> <li>Phẫu thuật nội soi tái tạo dây chằng</li> <li>Điều trị viêm, rách gân cơ chóp xoay</li> <li>Trật khớp vai tái diễn</li> <li>Tổn thương sụn viên khớp vai</li> <li>Tennis Elbow, Golf Elbow</li> <li>Hội chứng De QuerVain </li> <li>Hội chứng ống cổ tay</li> <li>Hội chứng Trigger finger (Ngón tay lò xo)</li> <li>Bệnh lý gân, cơ, dây chẳng</li> <li>Và các chấn thương thể thao khác</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chấn thương chỉnh hình - Y học thể thao tại Phòng khám Đa khoa MSC (Nay)</li> <li>Giảng viên Trường Đại học Y Dược, Đại học Quốc gia Hà Nội (2022 - Nay)</li> <li>Phó Chủ nhiệm khoa Chấn thương Chình hình - Y học thể thao, Bệnh viện 198 Bộ Công an (09/2016 - 10/2022)</li> <li>Bác sĩ Chấn thương Chỉnh hình, Bệnh viện 198 Bộ Công an (05/2006 - 09/2016)</li> </ul> <h3><strong>Quá trình học tập</strong></h3> <ul> <li>Tiến sĩ Y học, Trường Đại học Y Hà Nội (2020)</li> <li>Thạc sĩ chuyên ngành Ngoại khoa Chấn thương khớp gối, Chỉnh hình, Học viện Quân Y Hà Nội (2013)</li> <li>Định hướng chuyên khoa Ngoại, Trường Đại học Y Hà Nội (2003)</li> <li>Bác sĩ Y Đa khoa, Trường Đại học Y Hà Nội (2002)</li> </ul> <h3><strong>Chứng chỉ trong và nước ngoài</strong></h3> <ul> <li>Chứng chỉ đào tạo y tế liên tục, Trường Đại học Y Hà Nội (2019)</li> <li>Kỹ thuật tiêm nội khớp Trường Đại học Y Dược TP. Hồ Chí Minh (2016)</li> <li>Tập huấn chuyên ngành Chấn thương Chỉnh hình, Hội viên Hội Chấn thương Chỉnh hình Việt Nam (2014)</li> <li>AAOS-VOA Visiting Scholar and Professional Development Program: ARTHROSCOPY with Dr. Pietro Tonino Hội Chấn Thương Chỉnh Hình Việt Nam (2010)</li> <li>Tu nghiệp thay khớp háng, khớp gối và phẫu thuật nội soi khớp, Bệnh viện Cathay, Đài Loan (2009)</li> <li>Đào tạo Chấn Thương Chỉnh Hình, Bệnh viện Chấn thương Chỉnh hình (HTO), TP. HCM (2006 - 2007)</li> </ul>",
                clinic_id: "9cb9cbd1-ae02-4b58-92f6-4ac727f146b8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Lê Thị Thu Hiền",
                description:
                    "<p>Phó Giám đốc, Trưởng khoa Hỗ trợ Sinh sản Bệnh viện Nam học và Hiếm muộn Hà Nội</p> <p>Hơn 10 năm kinh nghiệm, Chuyên gia về Hỗ trợ sinh sản và Thụ tinh trong ống nghiệm</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/10/29/154433bs-le-thi-thu-hien.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Lê Thị Thu Hiền</strong></h2> <ul> <li>Phó Giám đốc, Trưởng khoa Hỗ trợ Sinh sản Bệnh viện Nam học và Hiếm muộn Hà Nội</li> <li>Hơn 10 năm kinh nghiệm, Chuyên gia về Hỗ trợ sinh sản và Thụ tinh trong ống nghiệm</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <h3><strong>Hiếm muộn – Hỗ trợ sinh sản (Fertility – ART):</strong></h3> <ul> <li>Kiểm tra sức khỏe sinh sản; tư vấn kế hoạch thụ thai thành công</li> <li>Khám, điều trị, các bệnh lý vô sinh cho cả Nam và Nữ</li> <li>Vô sinh nam: không tinh trùng; tinh trùng ít, chết, dị dạng; không ống dẫn tinh; tắc ống dẫn tinh; rối loạn nội tiết; rối loạn sinh tinh; …</li> <li>Vô sinh nữ: rối loạn nội tiết, không phóng noãn, suy buồng trứng sớm, tắc ống dẫn trứng</li> <li>Kích thích rụng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất</li> <li>Thực hiện kỹ thuật Thụ thai nhân tạo (IUI)</li> <li>Thực hiện kỹ thuật Thụ tinh ống nghiệm (IVF, ICSI)</li> </ul> <h2><strong>Quá trình công tác</strong></h2> <ul> <li>Phó Giám đốc, Trưởng khoa Hỗ trợ Sinh sản Bệnh viện Nam học và Hiếm muộn Hà Nội (2009 - nay)</li> <li>Chuyên gia Hỗ trợ sinh sản và Thụ tinh trong ống nghiệm tại Bệnh viện Nam học và Hiếm muộn Hà Nội</li> </ul> <h2><strong>Quá trình đào tạo</strong></h2> <ul> <li>Tốt nghiệp Thạc sĩ Học viện Quân y (2011)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Thái Nguyên (2001)</li> <li>Tham gia nhiều khóa đào tạo về Hỗ trợ Sinh sản, Thụ tinh trong ống nghiệm tại khoa Y - Đại học Quốc gia Tp. Hồ Chí Minh</li> <li>Tham gia các khóa tập huấn trong chương trình hỗ trợ sinh sản của HOSREM và Bệnh viện Từ Dũ.</li> <li>Tham dự nhiều khóa học, các hội nghị Quốc tế về IVF tại Châu Âu, Châu Á, Nhật, Mỹ và các nước ASEAN</li> </ul>",
                clinic_id: "53858dba-8097-435d-96cb-a611a9223e77",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Phạm Văn Hưởng",
                description:
                    "<p>Trưởng khoa Khám bệnh, Bệnh viện Nam học và Hiếm muộn Hà Nội</p> <p>Nhiều năm kinh nghiệm về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/10/29/170030bs-pham-van-huong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Phạm Văn Hưởng</strong></h2> <ul> <li>Trưởng khoa Khám bệnh, Bệnh viện Nam học và Hiếm muộn Hà Nội</li> <li>Nhiều năm kinh nghiệm về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <h3><strong>Hiếm muộn – Hỗ trợ sinh sản (Fertility – ART):</strong></h3> <ul> <li>Khám, điều trị, phẫu thuật các bệnh lý vô sinh cho cả Nam và Nữ</li> <li>Kích thích rụng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất</li> <li>Thực hiện kỹ thuật Thụ thai nhân tạo (IUI)</li> <li>Thực hiện kỹ thuật Thụ tinh ống nghiệm (IVF, ICSI)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khám bệnh, Bác sĩ Khám bệnh tại Bệnh viện Nam học và Hiếm muộn Hà Nội (2011 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội (2010)</li> <li>Tham gia khóa đào tạo cơ bản về Hỗ trợ sinh sản tại Khoa Y – Đại học Quốc gia TP.Hồ Chí Minh (2012)</li> <li>Tham gia các khóa đào tạo nâng cao về hỗ trợ sinh sản, thụ tinh trong ống nghiệm trong và và ngoài nước như: Chương trình Hỗ trợ sinh sản của HOSREM và Bệnh viện Từ Dũ và các khóa đào tạo tại Châu Âu và Asean.</li> <li>Thường xuyên tham dự các hội nghị Quốc tế tại Châu Âu, Châu Á, Mỹ, Thụy Sỹ, Pháp; …</li> </ul>",
                clinic_id: "53858dba-8097-435d-96cb-a611a9223e77",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Anh Tú",
                description:
                    "<p>Bác sĩ đang công tác tại Bệnh viện Nam học Hiếm muộn Hà Nội</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/07/09/110128-bs-nguyen-anh-tu.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Anh Tú</strong></h2> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Nam học và Hiếm muộn Hà Nội (2015 - nay)</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Nam học và Giới tính (Andrology & Sexology):</strong></p> <ul> <li>Rối loạn cương dương (ED: Erectile Disfunction); rối loạn khoái cảm; rối loạn xuất tinh, không xuất tinh, xuất tinh sớm, xuất tinh ngược dòng; không quan hệ tình dục được; cương cứng liên tục…</li> <li>Những dị tật bẩm sinh Hệ sinh sản: bất thường về nhiễm sắc thể; lưỡng giới; tinh hoàn ẩn, lạc chỗ; dương vật dị dạng vẹo, xoắn, bé, có màng, tụt vào trong,…</li> <li>Bệnh mắc phải của Hệ sinh sản: chấn thương gẫy dương vật; xoắn tinh hoàn; tràn dịch màng tinh hoàn; khối u; viêm nhiễm bộ phận sinh dục…</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học Y Hà Nội</li> <li>Tốt nghiệp Sĩ quan Quân y, Học viện Quân Y</li> <li>Bác sĩ tham gia các khóa tập huấn, hội nghị, hội thảo, diễn đàn Quốc tế trong và ngoài nước về lĩnh vực Nam khoa và Y học giới tính và Hỗ trợ sinh sản</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ đào tạo Bệnh viện Hữu nghị Việt Đức và Bệnh viện Phụ sản Trung ương (2018)</li> <li>Chứng chỉ đào tạo Americal Association of Reproductive Medical (2017)</li> <li>Chứng chỉ đào tạo Standford Centre for Continuing Medical Education, Standford University (2016)</li> <li>Chứng chỉ đào tạo Harvard Medical School, Harvard University (2015)</li> </ul>",
                clinic_id: "53858dba-8097-435d-96cb-a611a9223e77",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Trịnh Văn Tam",
                description:
                    "<p>Bác sĩ khoa Hỗ trợ Sinh sản Bệnh viện Nam học và Hiếm muộn Hà Nội</p> <p>Chuyên gia về Hỗ trợ sinh sản và Thụ tinh trong ống ngiệm</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/07/09/112327-bs-trinh-van-tam.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Trịnh Văn Tam</strong></h2> <ul> <li>Bác sĩ khoa Hỗ trợ Sinh sản Bệnh viện Nam học và Hiếm muộn Hà Nội</li> <li>Chuyên gia về Hỗ trợ sinh sản và Thụ tinh trong ống ngiệm</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <h3><strong>Hiếm muộn – Hỗ trợ sinh sản (Fertility – ART):</strong></h3> <ul> <li>Khám, điều trị, phẫu thuật các bệnh lý vô sinh cho cả Nam và Nữ.</li> <li>Kích thích rụng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất.</li> <li>Làm thụ thai nhân tạo (IUI) bằng tinh trùng của Chồng hoặc từ Ngân hàng tinh trùng với chất lượng cao nhất.</li> <li>Thụ tinh ống nghiệm (IVF, ICSI).</li> </ul> <h2><strong>Quá trình công tác</strong></h2> <ul> <li>Bác sĩ về Hỗ trợ sinh sản và Thụ tinh trong ống nghiệm tại Bệnh viện Nam học và Hiếm muộn Hà Nội</li> </ul> <h2><strong>Quá trình đào tạo</strong></h2> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa tại Học viện Quân Y</li> <li>Tham gia các khóa đào tạo từ cơ bản đến nâng cao về Nam khoa tại Đại học Y Hà Nội; Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và ngoài nước như: Chương trình Hỗ trợ sinh sản của HOSREM và Bệnh viện Từ Dũ; Các khóa đào tạo tại Châu Âu và Asean.</li> <li>Hoàn thành khóa tập huấn Nội tiết sinh sản và Kích thích buồng trứng của HOSREM; khóa học điều trị Vô sinh Nữ tại Phụ sản Trung ương.</li> <li>Thường xuyên tham dự các hội nghị Quốc tế tại Châu Âu, Châu Á, Mỹ, Thụy Sỹ, Pháp...</li> </ul>",
                clinic_id: "53858dba-8097-435d-96cb-a611a9223e77",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Đào Văn Kiên",
                description:
                    "<p>Bác sĩ đang công tác tại Bệnh viện Nam học Hiếm muộn Hà Nội.</p> <p>Bác sĩ được đào tạo chuyên sâu về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và và ngoài nước.</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/07/10/092126-bs-dao-van-kien.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Đào Văn Kiên</strong></h2> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Nam học và Hiếm muộn Hà Nội.</li> <li>Bác sĩ được đào tạo chuyên sâu về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và và ngoài nước.</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám và điều trị bệnh lý hệ sinh sản Nam và Nữ:</strong></p> <ul> <li>Kiểm tra sức khỏe sinh sản; tư vấn kế hoạch thụ thai thành công</li> <li>Vô sinh nam: không tinh trùng; tinh trùng ít, chết, dị dạng; không ống dẫn tinh; tắc ống dẫn tinh; rối loạn nội tiết; rối loạn sinh tinh; …</li> <li>Vô sinh nữ: rối loạn nội tiết; không phóng noãn; suy buồng trứng sớm; tắc ống dẫn trứng;</li> </ul> <p><strong>Hiếm muộn – Hỗ trợ sinh sản (Fertility – ART):</strong></p> <ul> <li>Khám, điều trị, phẫu thuật các bệnh lý vô sinh cho cả Nam và Nữ</li> <li>Kích thích rụng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất</li> <li>Làm thụ thai nhân tạo (IUI)</li> <li>Thụ tinh ống nghiệm (IVF, ICSI)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Nam học và Hiếm muộn Hà Nội (2016 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên ngành Sản phụ khoa, Trường Đại học Y Hà Nội (2014)</li> <li>Tham gia các khóa đào tạo từ cơ bản đến nâng cao về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và và ngoài nước như: Chương trình Hỗ trợ sinh sản của HOSREM; Các khóa đào tạo tại Châu Âu và Asean (Thái Lan,…)</li> <li>Được đào tạo bài bản về khám và quản lý thai tại Bệnh viện Phụ Sản Trung Ương, hoàn thành chứng chỉ siêu âm thai nâng cao tại Đại học Y Hà Nội.</li> </ul>",
                clinic_id: "53858dba-8097-435d-96cb-a611a9223e77",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Phan Thị Bích Thuận",
                description:
                    "<p>Bác sĩ đang công tác tại Bệnh viện Nam học và Hiếm muộn Hà Nội.</p> <p>Bác sĩ được đào tạo chuyên sâu về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và và ngoài nước.</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/07/10/093656-bs-phan-thi-bich-thuan.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Phan Thị Bích Thuận</strong></h2> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Nam học và Hiếm muộn Hà Nội.</li> <li>Bác sĩ được đào tạo chuyên sâu về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và và ngoài nước.</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám và điều trị bệnh lý hệ sinh sản Nam và Nữ:</strong></p> <ul> <li>Kiểm tra sức khỏe sinh sản; tư vấn kế hoạch thụ thai thành công</li> <li>Vô sinh nam: không tinh trùng; tinh trùng ít, chết, dị dạng; không ống dẫn tinh; tắc ống dẫn tinh; rối loạn nội tiết; rối loạn sinh tinh; …</li> <li>Vô sinh nữ: rối loạn nội tiết; không phóng noãn; suy buồng trứng sớm; tắc ống dẫn trứng;</li> </ul> <p><strong>Hiếm muộn – Hỗ trợ sinh sản (Fertility – ART):</strong></p> <ul> <li>Khám, điều trị, các bệnh lý vô sinh cho cả Nam và Nữ</li> <li>Kích thích rụng trứng bằng phác đồ chuẩn, hiện đại, hiệu quả cao nhất</li> <li>Làm thụ thai nhân tạo (IUI)</li> <li>Thụ tinh ống nghiệm (IVF, ICSI)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ đang công tác tại Bệnh viện Nam học và Hiếm muộn Hà Nội (2018 - nay)</li> <li>Bác sĩ từng công tác tại Khoa Sản Bệnh viện Đa khoa tỉnh Phú Thọ (2016 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hải Phòng (2015)</li> <li>Tham gia nhiều các khóa đào tạo từ cơ bản đến nâng cao về Hỗ trợ sinh sản, Thụ tinh trong ống nghiệm ở trong và và ngoài nước như: Chương trình Hỗ trợ sinh sản của HOSREM và Bệnh viện Từ Dũ; Các khóa đào tạo tại Châu Âu và Asean.</li> <li>Thường xuyên tham dự các hội nghị Quốc tế tại Châu Âu, Châu Á, Mỹ, Thụy Sỹ, Pháp; … và Việt Nam</li> </ul>",
                clinic_id: "53858dba-8097-435d-96cb-a611a9223e77",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Lê Nhật Vinh",
                description:
                    "<p>Hơn 10 năm kinh nghiệm lĩnh vực Tai mũi họng</p> <p>Từng công tác tại Bệnh viện Thống Nhất</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Hà Nội",
                gender: "male",
                image: "Thành phố Hồ Chí Minh",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Lê Nhật Vinh</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm lĩnh vực Tai mũi họng</li> <li>Từng công tác tại Bệnh viện Thống Nhất, Bệnh viện Tai mũi họng TP. HCM</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm tai giữa: Đau tai, chảy dịch, nghe kém, ù tai</li> <li>Viêm mũi xoang: Đau đầu, ngạt mũi, chảy mủ</li> <li>Viêm mũi dị ứng: Hắt xì, chảy mũi, ngứa mũi, ngạt mũi</li> <li>Viêm họng: Đau rát họng, hôi miệng, vướng họng</li> <li>Viêm Amidan: Sốt, đau họng, ngủ ngáy</li> <li>Hội chứng trào ngược dạ dày thực quản: Vướng họng, thay đổi giọng nói</li> <li>Viêm mũi VA: Ngạt mũi, ngủ ngáy</li> <li>Viêm thanh quản: Khàn tiếng</li> <li>Hạt xơ thanh quản: Khàn tiếng, hụt hơi</li> <li>Dị vật đường thở: Khó thở</li> <li>Viêm đường phế quản: Ho, tức ngực, khó thở</li> <li>Hen phế quản: Ho, khó thở</li> <li>Viêm phổi: Sốt, ho, khó thở</li> <li>Nấm ống tai: Ngứa tai, ù tai</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Học Chuyên khoa II tại bệnh viện Tai mũi họng và khoa Tai mũi họng của Bệnh viện Nhân dân Gia Định, Bệnh viện Trưng Vương, Bệnh viện Thống Nhất, Bệnh viện Nhân dân 115, Bệnh viện Nhi đồng 1 (2019 - 2022)</li> <li>Bác sĩ điều trị, khoa Tai mũi họng, Bệnh viện Thống Nhất (2016 - 2022)</li> <li>Học Cao học tại Bệnh viện Tai mũi họng và khoa Tai mũi họng của Bệnh viện Nhân dân Gia Định, Bệnh viện Trưng Vương, Bệnh viện Thống Nhất, Bệnh viện Nhân dân 115, Bệnh viện Nhi đồng 1 (2013 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II Chuyên ngành Tai mũi họng, Đại học Y khoa Phạm Ngọc Thạch (2022)</li> <li>Thạc sĩ - Bác sĩ Chuyên ngành Tai mũi họng, Đại học Y khoa Phạm Ngọc Thạch (2015)</li> <li>Bác sĩ Đa khoa, Đại học Y Dược TP. HCM (2011)</li> </ul>",
                clinic_id: "d848154a-7425-4c3b-b347-2355a0b26509",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Trần Ngọc Mạnh",
                description:
                    "<p>Nhiều năm kinh nghiệm lĩnh vực Tai mũi họng</p> <p>Từng công tác tại Bệnh viện Huyện Bình Chánh, Bệnh viện Quân Dân Y Miền Đông</p> <p>Tốt nghiệp Bác sĩ Chuyên khoa I ngành Tai mũi họng, Đại học Y Dược TP. HCM</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/23/144458-le-nhat-vinh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trần Ngọc Mạnh</strong></h2> <ul> <li>Nhiều năm kinh nghiệm lĩnh vực Tai mũi họng</li> <li>Từng công tác tại Bệnh viện Huyện Bình Chánh, Bệnh viện Quân Dân Y Miền Đông</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I ngành Tai mũi họng, Đại học Y Dược TP. HCM</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm tai giữa: Đau tai, chảy dịch, nghe kém, ù tai</li> <li>Viêm mũi xoang: Đau đầu, ngạt mũi, chảy mủ</li> <li>Viêm mũi dị ứng: Hắt xì, chảy mũi, ngứa mũi, ngạt mũi</li> <li>Viêm họng: Đau rát họng, hôi miệng, vướng họng</li> <li>Viêm Amidan: Sốt, đau họng, ngủ ngáy</li> <li>Hội chứng trào ngược dạ dày thực quản: Vướng họng, thay đổi giọng nói</li> <li>Viêm mũi VA: Ngạt mũi, ngủ ngáy</li> <li>Viêm thanh quản: Khàn tiếng</li> <li>Hạt xơ thanh quản: Khàn tiếng, hụt hơi</li> <li>Dị vật đường thở: Khó thở</li> <li>Viêm đường phế quản: Ho, tức ngực, khó thở</li> <li>Hen phế quản: Ho, khó thở</li> <li>Viêm phổi: Sốt, ho, khó thở</li> <li>Nấm ống tai: Ngứa tai, ù tai</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị, khoa Tai mũi họng, Bệnh viện Đa khoa Quốc tế Nam Sài Gòn (2022 - Nay)</li> <li>Bác sĩ điều trị tại Phòng khám tư nhân Đa khoa Thuận Thảo (2019 - 2021)</li> <li>Bác sĩ điều trị, khoa Tai mũi họng, Bệnh viện Quân Dân Y Miền Đông (2019)</li> <li>Công tác tại Bệnh viện Huyện Bình Chánh (2016 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I ngành Tai mũi họng, Đại học Y Dược TP. HCM (2021)</li> <li>Bác sĩ Đa khoa Đại học Y Dược TP. HCM (2016)</li> </ul>",
                clinic_id: "d848154a-7425-4c3b-b347-2355a0b26509",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Võ Đăng Sơn",
                description:
                    "<p>Phó Giám đốc Chuyên môn, Bệnh viện Quốc tế Nam Sài Gòn</p> <p>Với hơn 20 năm kinh nghiệm trong việc khám, điều trị và thực hiện được hầu hết các phẫu thuật cấp cứu ổ bụng</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/03/04/162932-bs-vo-dang-son.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Võ Đăng Sơn</strong></h2> <ul> <li>Phó Giám đốc Chuyên môn tại Bệnh viện Quốc tế Nam Sài Gòn.</li> <li>Với hơn 20 năm kinh nghiệm trong việc khám, điều trị và thực hiện được hầu hết các phẫu thuật cấp cứu ổ bụng</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ăn uống kém, không ngon</li> <li>Rối loạn tiêu hóa, táo bón, trĩ</li> <li>Nhiễm vi khuẩn HP (Helicobacter pylori)</li> <li>Nội soi dạ dày, đại tràng, tiêu hóa</li> <li>Buồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi</li> <li>Co thắt thực quản, Hội chứng ruột kích thích</li> <li>Đau bụng, dạ dày, đại tràng, thượng vị</li> <li>Viêm đại tràng, dạ dày, tá tràng</li> <li>Ung thư dạ dày, U nang tuyến tụy</li> <li>Bệnh lý về gan, mật</li> </ul> <h3><strong>Quá trình Công tác</strong></h3> <ul> <li>Bác sĩ tại Bệnh viện Đa khoa Quốc tế Nam Sài Gòn (10/2020 - Nay)</li> <li>Bác sĩ khoa Ngoại Bệnh viện Hoàn Mỹ - Vạn Phúc 1, Bình Dương (10/2018 – 10/2020)</li> <li>Bác sĩ khoa Ngoại Bệnh viện Đa khoa Quốc Tế Becamex (2014 – 10/ 2018)</li> <li>Phó Trưởng khoa Ngoại Tổng hợp Bệnh viện Đa khoa thị xã Thuận An (2007 – 2014)</li> <li>Bác sĩ khoa Ngoại, Bệnh viện Đa khoa khu vực Nam Bình Thuận (2000 – 2007)</li> </ul> <h3><strong>Quá trình Đào tạo</strong></h3> <ul> <li>Học Chuyên khoa II tại Đại học Y Dược TP.HCM (2014 – 2016)</li> <li>Học Phẫu thuật nội soi ổ bụng tại Đại học Y Dược TP.HCM (2011)</li> <li>Học Chuyên khoa I tại Đại học Y Dược TP.HCM (2005 – 2007)</li> <li>Học Đại học tại Đại học Y Dược TP.HCM (1994 – 2000)</li> </ul>",
                clinic_id: "d848154a-7425-4c3b-b347-2355a0b26509",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Võ Thị Ngọc Thu",
                description:
                    "<p>30 năm kinh nghiệm trong khám và điều trị Nội khoa, Nội thần kinh</p> <p>Từng công tác tại nhiều bệnh viện lớn: Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp, Bệnh viện An Bình, Bệnh viện Nguyễn Trãi</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/08/20/185235-z36534081663342ecf0c4ed5f0d436d452c92c98f5417c.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Võ Thị Ngọc Thu</strong></h2> <ul> <li>30 năm kinh nghiệm trong khám và điều trị Nội khoa, Nội thần kinh</li> <li>Từng công tác tại nhiều bệnh viện lớn: Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp, Bệnh viện An Bình, Bệnh viện Nguyễn Trãi</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chẩn đoán và điều trị các bệnh lý Nội khoa thường gặp: Tăng huyết áp, đái tháo đường, tim mạch, hô hấp,…</li> <li>Chẩn đoán và điều trị các bệnh thần kinh cấp và mãn: Đột quỵ, tai biến mạch máu não, động kinh, bệnh dây thần kinh (do viêm hoặc do chèn ép,…)</li> <li>Kỹ năng thăm dò chức năng: điện não và điện cơ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ – Bệnh viện Đa khoa Quốc tế Nam Sài Gòn (2019 - Nay)</li> <li>Bác sĩ Nội Thần kinh – Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp (2018 - 2019)</li> <li>Bác sĩ Nội Thần kinh – Bệnh viện Nguyễn Trãi (2012 - 2018)</li> <li>Bác sĩ Nội Thần kinh – Bệnh viện An Bình (2006 - 2011)</li> <li>Bác sĩ Nội Thần kinh – Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp (1995 - 2005)</li> <li>Phó trạm, Trạm y tế Phường 01, Quận 08 (1992)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Đào tạo điện cơ tại Đại học Y Khoa Phạm Ngọc Thạch (2006)</li> <li>Đào tạo điện não tại Bệnh viện Chợ Rẫy (2005)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Nội Thần kinh (1999)</li> <li>Tốt nghiệp Bác sĩ Đa khoa (1992)</li> </ul>",
                clinic_id: "d848154a-7425-4c3b-b347-2355a0b26509",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Lê Văn Hiếu Nhân",
                description:
                    "<p>Hơn 20 năm kinh nghiệm chuyên khoa Ngoại Tiết niệu - Nam học</p> <p>Từng công tác tại khoa Ngoại Tiết niệu - Bệnh viện Bình Dân TP. HCM</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/08/02/085824-bs-nhan.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Lê Văn Hiếu Nhân</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm chuyên khoa Ngoại Tiết niệu - Nam học</li> <li>Từng công tác tại khoa Ngoại Tiết niệu - Bệnh viện Bình Dân TP. HCM</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Phẫu thuật sỏi niệu: sỏi thận, niệu quản, bàng quang, niệu đạo</li> <li>Chuyên gia tán sỏi niệu ngoài cơ thể</li> <li>Phẫu thuật bướu niệu: bướu thận, bướu bể thận - niệu quản, bàng quang, tuyến tiền liệt, niệu đạo, tinh hoàn</li> <li>Phẫu thuật tạo hình niệu: tạo hình hẹp niệu quản, hẹp niệu đạo; tạo hình bàng quang tân tạo bằng ruột trong bướu bàng quang; tạo hình mở rộng bàng quang bằng ruột trong bàng quang thần kinh, lao bàng quang</li> <li>Phẫu thuật niệu - thần kinh, niệu chức năng</li> <li>Phẫu thuật tiểu không kiểm soát</li> <li>Phẫu thuật dị tật bẩm sinh đường tiết niệu: Gồm hẹp khúc nối bể thận - niệu quản; hẹp khúc nối niệu quản-bàng quang; thận móng ngựa; thận-niệu quản đôi…</li> <li>Bệnh lý Nam khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị khoa Ngoại Tổng hợp - Bệnh viện Đa khoa Quốc tế Nam Sài Gòn (07/2022 - Nay)</li> <li>Bác sĩ Trưởng khoa Ngoại Tiết Niệu Bệnh viện ngoại khoa Sante TP. HCM (12/2021 - 7/2022)</li> <li>Bác sĩ Trưởng đơn vị tán sỏi ngoài cơ thể, Bệnh viện Bình Dân - TP. HCM (2013 - 12/2021)</li> <li>Bác sĩ khoa Ngoại Tiết niệu, Bệnh viện Bình Dân - TP. HCM (2001- 12/2021)</li> <li>Bác sĩ khoa Ngoại Tiết niệu - Trung tâm chuẩn đoán Y khoa Medic TP. HCM (1999 - 2001)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II Ngoại Tiết niệu, Đại học Y Dược TP. HCM (2013)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Ngoại Tiết niệu, Đại học Y Dược TP. HCM (2009)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Dược TP. HCM (1999)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ phẫu thuật nội soi ổ bụng nâng cao (2011)</li> <li>Chứng chỉ phẫu thuật nội soi nâng cao (2011)</li> </ul>",
                clinic_id: "d848154a-7425-4c3b-b347-2355a0b26509",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác Sĩ Nguyễn Mạnh Tiến",
                description:
                    "<p>Hơn 20 năm kinh nghiệm trong chuyên khoa Răng Hàm Mặt</p> <p>Trưởng khoa điều trị tại Nha khoa New Gate Thành viên của các hiệp hội nha sĩ quốc tế: Hiệp hội chỉnh hình răng hàm mặt tại Pháp, Hiệp hội nha sĩ Mĩ ADA </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/11/09/141302-bs-tien-1.png",
                introduction:
                    "<h2><strong>Bác Sĩ Nguyễn Mạnh Tiến</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm trong chuyên khoa Răng Hàm Mặt</li> <li>Trưởng khoa điều trị tại Nha khoa New Gate</li> <li>Thành viên của các hiệp hội nha sĩ quốc tế: Hiệp hội chỉnh hình răng hàm mặt tại Pháp, Hiệp hội nha sĩ Mĩ ADA</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chỉnh nha</li> <li>Trồng răng Implant</li> <li>Phục hình thẩm mỹ Veneer & răng sứ</li> <li>Tiểu phẫu răng miệng và điều trị nội nha</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li><strong>Đảm nhận vị trí Bác sĩ Trưởng khoa điều trị tại Nha khoa New Gate</strong></li> <li><strong>Cố vấn chuyên môn trung tâm chỉnh nha trong suốt Hi-Align</strong></li> <li>Tham gia giảng dạy tại Trung tâm Đào tạo Pitadent </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp ĐH Y Khoa Hà Nội, chuyên khoa Răng Hàm Mặt</li> <li>Tham gia các khoá đào tạo Răng Hàm Mặt chuyên sâu tại nhiều quốc gia trên thế giới như Pháp, Hàn Quốc</li> <li>Tham dự khoá đào tạo chuyên sâu và chứng nhận chính thức về điều trị chỉnh nha trong suốt Invisalign (Mỹ)</li> </ul> <h3><strong>Thành viên các hội tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hiệp hội chỉnh hình răng hàm mặt tại Pháp </li> <li>Thành viên hiệp hội cấy ghép implant ITI </li> <li>Thành viên hiệp hội nha sĩ Mĩ ADA </li> <li>Báo cáo viên các khóa đào tạo Chỉnh nha & Phục hình thẩm mỹ xâm lấn tối thiểu và Thiết kế nụ cười tại Việt Nam</li> </ul>",
                clinic_id: "e2a7a7c8-7fc3-4eee-8991-753e9f0cc0eb",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Hoàng Đạt",
                description:
                    "<p>Hơn 10 năm kinh nghiệm trong lĩnh vực cấy ghép Implant, dán sứ Veneer và phục hình răng sứ thẩm mỹ</p> <p>Sáng lập nha khoa quốc tế New Gate </p> <p>Từng công tác tại Bệnh viện Bạch Mai</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/11/09/141906-bs-dat-1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Hoàng Đạt</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm trong lĩnh vực cấy ghép Implant, dán sứ Veneer và phục hình răng sứ thẩm mỹ</li> <li>Sáng lập nha khoa quốc tế New Gate</li> <li>Từng công tác tại Bệnh viện Bạch Mai</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Cấy ghép Implant</li> <li>Dán sứ Veneer</li> <li>Phục hình răng sứ thẩm mỹ điển hình như: Design smile </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li><strong>Người đứng đầu của Trung tâm Đào tạo & Giảng dạy Pita Dent – Địa chỉ đào tạo chuyên sâu các Kỹ thuật Nha khoa dành riêng cho các Bác sĩ trên toàn quốc</strong></li> <li><strong>Sáng lập nha khoa quốc tế New Gate</strong> và là cố vấn chuyên môn của rất nhiều nha khoa lớn nhỏ khác</li> <li>Từng học tập và cộng tác tại Bệnh viện Bạch Mai</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Thái Bình</li> <li>Tu nghiệp tại Đại học Harvard Hoa Kỳ</li> <li>Từng học tập và nghiên cứu cùng với những chuyên gia hàng đầu trong lĩnh vực như GS.TS NoBulo Nhật Bản,Giáo sư : Fouad Khoury Đức, GS. TS Nelson Opperman Hoa Kỳ,ĐH Yonsei Hàn Quốc, GS.TS Nguyễn Xuân Thực – Phó trưởng khoa Răng Hàm Mặt (Bệnh viện Bạch Mai) và với rất nhiều vị Giáo sư, Bác sĩ nổi tiếng trong và ngoài nước</li> </ul>",
                clinic_id: "e2a7a7c8-7fc3-4eee-8991-753e9f0cc0eb",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Lê Hồng Anh",
                description:
                    "<p>Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao</p> <p>Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch</p> <p>BÁC SĨ NHẬN KHÁM BỆNH NHÂN TỪ 16 TUỔI TRỞ LÊN</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/07/16/103447-bs-hong-anh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Lê Hồng Anh</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao</li> <li>Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch</li> <li>Giám đốc chuyên môn tại Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn</li> <li>BÁC SĨ NHẬN KHÁM BỆNH NHÂN TỪ 16 TUỔI TRỞ LÊN</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Lao</li> <li>Lao kháng thuốc</li> <li>Hen</li> <li>COPD</li> <li>Ung Thư</li> <li>Các bệnh Phổi nghề nghiệp</li> <li>Các bệnh hô hấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc chuyên môn Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn (2016 - nay)</li> <li>Bác sĩ điều trị, Bệnh viện Phạm Ngọc Thạch (2001 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2014)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2007)</li> <li>Tốt nghiệp Bác sĩ Đa khoa Tổng quát, Đại học Y dược TP.HCM (1996)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Phổi Việt Nam</li> <li>Hội Hô Hấp TP.HCM</li> <li>Hội Hô Hấp Việt Nam</li> <li>Hội Hen - Dị ứng - Miễn dịch Lâm sàng TP.HCM</li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình…</strong></h3> <ul> <li>HTV9</li> <li>HTV7</li> <li>Báo Thanh Niên</li> </ul>",
                clinic_id: "070cd999-65cf-4e4c-8d07-1fb248d751b9",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nội trú Hoàng Văn Tâm",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong Chuyên khoa Da liễu</p> <p>Phó khoa điều trị nội trú ban ngày, Bệnh viện Da liễu Trung Ương</p> <p>Phó chủ tịch hội bác sĩ Da liễu trẻ Việt Nam</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/26/134727-bs-hoang-van-tam.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nội trú Hoàng Văn Tâm</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong Chuyên khoa Da liễu</li> <li>Phó khoa điều trị nội trú ban ngày, Bệnh viện Da liễu Trung Ương</li> <li>Phó chủ tịch hội bác sĩ Da liễu trẻ Việt Nam</li> </ul> <h2><strong>Khám và Điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị:</p> <ul> <li>Bạch biến: Đám giảm sắc tố</li> <li>Rám má: Đám tăng sắc tố ở mặt</li> <li>Trứng cá: Mụn ở mặt</li> <li>Viêm da cơ địa: Mụn, sần ở mặt, tay</li> <li>Vảy nến: Mảng đỏ, có vảy</li> <li>Lão hoá da: Da nhăn, chảy xệ</li> </ul> <h3><strong>Quá trình Công tác</strong></h3> <ul> <li>Phó khoa điều trị nội trú ban ngày, Bệnh viện Da liễu Trung Ương (2015)</li> </ul> <h3><strong>Quá trình Đào tạo</strong></h3> <ul> <li>Nghiên cứu sinh Da liễu, Đại học Y Hà Nội (2020 - Nay)</li> <li>Bác sĩ nội trú Da liễu, Đại học Y Hà Nội (2012 - 2015)</li> <li>Bác sĩ Đa khoa, Đại học Y Hà Nội (2006 - 2012)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ về phẫu thuật Da trong Da liễu, Bệnh viện Da liễu Trung Ương (2022)</li> <li>Thực hành tiêm filler trên xác, và người thật, Thái Lan (2018)</li> <li>Chứng chỉ laser, Bệnh viện Da liễu Trung Ương (2016)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Sách: chăm sóc da trọn đời tập 1 (2022)</li> <li>Sách: Hình ảnh lâm sàng, chẩn đoán và điều trị trong chuyên ngành Da liễu (2020)</li> <li>Sách: Bệnh học Da liễu (2020)</li> <li>Nghiên cứu: điều trị bệnh vảy nến bằng UVB dải hẹp (2015)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Phó chủ tịch hội bác sĩ Da liễu trẻ Việt Nam</li> </ul>",
                clinic_id: "8031035b-2ef5-4dea-8307-7f1c9c5d0b78",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BS CKI Lê Trần Mỹ Tú",
                description:
                    "<p>Nhiều năm kinh nghiệm trong lĩnh vực Da liễu</p> <p>Tốt nghiệp Bác sĩ Chuyên khoa I Da liễu - Đại học Y Khoa Phạm Ngọc Thạch</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/10/31/110801-bs-cam-tu-proskin.png",
                introduction:
                    "<h2><strong>BS CKI Lê Trần Mỹ Tú</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong lĩnh vực Da liễu</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Da liễu - Đại học Y Khoa Phạm Ngọc Thạch</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám và điều trị các bệnh lý về da cho người lớn và trẻ em:<ul> <li>Mụn</li> <li>Chàm</li> <li>Viêm da cơ địa</li> <li>Ngứa</li> <li>Nấm da</li> <li>Mồ hôi tay...</li> </ul> </li> <li>Chăm sóc da chuyên sâu:<ul> <li>Trẻ hoá da</li> <li>Phục hồi làn da sau điều trị như trị mụn, nám, sẹo, rỗ,...</li> </ul> </li> <li>Thẩm mỹ da kỹ thuật cao:<ul> <li>Trị sẹo</li> <li>Trị thâm</li> <li>Trị nám</li> <li>Tàn nhang</li> <li>Xoá nhăn</li> <li>Căng da</li> <li>Triệt lông</li> </ul> </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Da Liễu - Ðại Học Y Khoa Phạm Ngọc Thạch</li> </ul> <h3><strong>Chứng chỉ trong và ngoài nước</strong></h3> <ul> <li>Chứng chỉ Ứng dụng Laser và ánh sáng trong Da liễu - Bệnh viện Da liễu TP. HCM</li> <li>Chứng chỉ thủ thuật, tiểu phẫu da - Bệnh viện Da liễu TP. HCM</li> </ul>",
                clinic_id: "171e422b-72d8-438c-a571-ab331079d0a9",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Nguyễn Thị Nhật Ninh",
                description:
                    "<p>Hơn 30 năm kinh nghiệm khám và điều trị các bệnh lý Da liễu</p> <p>Nguyên Trưởng khoa Lâm Sàng 1, Bệnh viện Da Liễu TP. HCM</p> <p>Nguyên Phó Giám đốc phụ trách chuyên môn, Bệnh viện Da liễu Khánh Hòa</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/28/111655-bs-nhat-ninh.png",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Nguyễn Thị Nhật Ninh</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm khám và điều trị các bệnh lý Da liễu</li> <li>Nguyên Trưởng khoa Lâm Sàng 1, Bệnh Viện Da Liễu TP. HCM</li> <li>Nguyên Phó Giám đốc phụ trách chuyên môn, Bệnh viện Da liễu Khánh Hòa</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Mụn trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen</li> <li>Nám, sạm da: nám, sạm da mặt</li> <li>Bệnh chàm</li> <li>Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn</li> <li>Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa</li> <li>Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn</li> <li>Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa</li> <li>Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi</li> <li>Zona: mang mụn nước, 1 bên người, đau nhức</li> <li>Da nhờn, lỗ chân lông to</li> <li>Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân</li> <li>Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân</li> <li>Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng</li> <li>Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần</li> <li>Da đồi mồi: đốm nâu</li> <li>Pemphigus: bóng nước thân mình, niêm mạc</li> <li>Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp</li> <li>Xơ cứng bì: da cứng, không đều màu</li> <li>Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da</li> <li>Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang</li> <li>Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn</li> <li>Nấm móng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Da liễu tại Phòng khám Chuyên khoa Da liễu, Thẩm mỹ kỹ thuật cao PRO SKIN</li> <li>Nguyên Trưởng khoa Lâm sàng 1, Bệnh viện Da liễu TP. HCM</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Da liễu, Đại học Y Dược TP. HCM</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Dược TP. HCM</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên chi hội Da Liễu Hồ Chí Minh</li> <li>Hội viên Hội Da Liễu Việt Nam</li> </ul>",
                clinic_id: "171e422b-72d8-438c-a571-ab331079d0a9",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BSCKII Lê Hoàng Dũng",
                description:
                    "<p>Gần 10 năm kinh nghiệm về Chấn thương Chỉnh Hình </p> <p>Hiện đang công tác tại Khoa Chấn Thương Chỉnh Hình, Bệnh Viện Nguyễn Tri Phương </p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/12/20/170142-cchn-bs-dung1.jpg",
                introduction:
                    "<h2><strong>BSCKII Lê Hoàng Dũng</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm về Chấn thương Chỉnh Hình</li> <li>Hiện đang công tác tại Khoa Chấn Thương Chỉnh Hình, Bệnh Viện Nguyễn Tri Phương</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Điều trị không phẫu thuật các bệnh lý cơ xương khớp</li> <li>Giảm đau dùng thuốc tối thiểu</li> <li>Bảo tồn khớp thoái hóa </li> <li>Kết hợp xương điều trị gãy xương. </li> <li>Thay khớp gối.</li> <li>Thay khớp Háng, thay khớp Háng SuperPATH</li> <li>Thoái hóa khớp: Đau, lạo xạo khớp, hạn chế vận động</li> <li>Bong gân</li> <li>Gãy xương</li> <li>Chấn thương thể thao: Đứt dây chằng chéo khớp gối</li> <li>Bệnh lý cơ xương khớp</li> <li>Viêm gân cơ: Viêm chu vai, Ngón tay lò xo, Hội chứng ống cổ tay, Hội chứng De quevain, Hội chứng Tennis elbow, Viêm cân gan chân</li> <li>Nội soi tái tạo dây chằng chéo trước, chéo sau khớp gối, rách sụn chêm.</li> <li>Nội soi khớp vai khâu gân chóp xoay</li> <li>Nội soi khớp khuỷu, cổ tay, cổ chân</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Khoa Chấn Thương Chỉnh Hình, Bệnh viện Nguyễn Tri Phương (2017 - nay) </li> <li>Bác sĩ Bệnh viện Chợ Rẫy- Phnom Penh (2014 - 2016)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa cấp II, Chấn thương chỉnh hình, Trường Đại học Y Khoa Phạm Ngọc Thạch (2024)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa cấp I, Chấn thương chỉnh hình, Trường Đại học Y Dược TP. HCM (2018)</li> <li>Tốt nghiệp Y Đa khoa, Trường Đại học Y Dược TP. HCM (2014)</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Tu nghiệp chương trình Phẫu thuật nội soi khớp gối, Arthrex Singapore (2020)</li> <li>Kỹ thuật tiêm khớp - tiêm gân, Trường Đại học Y Dược TP. HCM (2020)</li> <li>Tu nghiệp chương trình phẫu thuật Chấn thương - Thay khớp - Nội soi khớp Bệnh viện LEECHUNTEK, Thành phố Suwon - Tỉnh Gyeonggi - Hàn Quốc (2019)</li> <li>Kỹ thuật Nội soi khớp, Trường Đại học Y Dược TP. HCM (2017)</li> <li>Kỹ thuật Thay khớp, Trường Đại học Y Dược TP. HCM (2017)</li> </ul>",
                clinic_id: "de1150f1-7e2f-4da0-b685-6e742ed3cefa",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Nguyễn Phú Hòa",
                description:
                    "<p>Hơn 20 năm kinh nghiệm lĩnh vực Nha khoa</p> <p>Từng công tác tại Viện Răng Hàm Mặt trung ương</p> <p>Từng học tập và tu nghiệp tại nước ngoài: Pháp</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/18/145752-nguyen-phu-hoa--nk-phu-hoa.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Nguyễn Phú Hòa</strong></h2> <ul> <li>Hơn 20 năm kinh nghiệm lĩnh vực Nha khoa</li> <li>Từng công tác tại Viện Răng Hàm Mặt trung ương</li> <li>Từng học tập và tu nghiệp tại nước ngoài: Pháp</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Niềng răng Invisalign</li> <li>Niềng răng mắc cài</li> <li>Trồng răng Implant</li> <li>Nhổ răng</li> <li>Bọc răng sứ thẩm mỹ</li> <li>Tẩy trắng răng</li> <li>Điều trị tủy răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc chuyên môn, Bác sĩ - Nha khoa Phú Hòa</li> <li>Nguyên bác sĩ – Giảng viên Đại Học Y Hà Nội</li> <li>Nguyên Bác sĩ - Viện Răng Hàm Mặt trung ương</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Tiến Sĩ - Răng Hàm Mặt - Đại Học Y Hà Nội (2015)</li> <li>Tốt nghiệp Thủ khoa cao học Việt Pháp khóa 1 Khoa Nha - Đại học Victor Segalen Bordeaux 2 (Cộng hòa Pháp) (2004)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hiệp hội Nha khoa Hoa Kỳ ADA – American Dental Association</li> <li>Thành viên Hiệp hội cấy ghép Implant Quốc Tế ICOI</li> </ul> <h3><strong>Tham gia các chuyên đề sức khỏe</strong></h3> <ul> <li>Chuyên gia của VOV2 – Cùng bạn sống khỏe</li> <li>Chuyên gia của VTV1 – Bản tin Y Tế 24h</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Bác sĩ Việt Nam đầu tiên và duy nhất đạt danh hiệu Bạch Kim 2016 và lên mức Kim Cương năm 2017, 2018, 2019, 2020, 2021 của Invisalign Hoa Kỳ</li> <li>Bác sĩ duy nhất tại Việt Nam được vinh danh Life Achievement - Người đặt nền móng chỉnh nha trong suốt tại Việt Nam (Do tập đoàn Invisalign Hoa Kỳ đề cử)</li> </ul>",
                clinic_id: "e6ad6903-c796-4ae8-9c90-39e08cac9ab9",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Dương Thu Trang",
                description:
                    "<p>Hơn 10 năm kinh nghiệm lĩnh vực Nha khoa</p> <p>Từng công tác tại Bệnh viện Đại Học Y Côn Minh, Trung Quốc</p> <p>Từng công tác tại Bệnh Viện Đa Khoa Vinmec</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/18/152431-dung-thu-trang-nk-phu-hoa.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Dương Thu Trang</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm lĩnh vực Nha khoa</li> <li>Từng công tác tại Bệnh viện Đại Học Y Côn Minh, Trung Quốc</li> <li>Từng công tác tại Bệnh Viện Đa Khoa Vinmec</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có chuyên môn trong lĩnh vực Chỉnh nha:</p> <ul> <li>Cắm ghép Implant</li> <li>Phục hình răng sứ</li> <li>Dán veneer</li> <li>Chỉnh hình răng</li> <li>Trám răng</li> <li>Nhổ răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nha khoa - Nha khoa Phú Hòa</li> <li>Bác sĩ chuyên khoa Răng hàm mặt - Bệnh Viện Đa Khoa Vinmec (2011 – 2018)</li> <li>Bác sĩ Răng hàm mặt - Bệnh viện Đại Học Y Côn Minh</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Cộng tác với chuyên gia Trung tâm nghiên cứu Tế bào gốc và công nghệ Gen – bệnh viện ĐKQT Vinmec nghiên cứu về tế bào gốc từ tủy răng sữa</li> <li>Tốt nghiệp Thạc sĩ Răng hàm mặt (2011)</li> <li>Nghiên cứu sinh chuyên sâu về Chỉnh Nha Thẩm Mỹ - Đại Học Y Côn Minh</li> <li>Tốt nghiệp đại học chuyên ngành RHM - Đại Học Y Côn Minh, Vân Nam, Trung Quốc (2008)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Nghiên cứu đề tài chuyên khoa: chỉnh nha bằng minivis, làm trắng răng bằng phủ/ dán veneer…</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Đạt danh hiệu bác sĩ hạng Gold - Tổ chức Invisalign Hoa Kỳ</li> </ul>",
                clinic_id: "e6ad6903-c796-4ae8-9c90-39e08cac9ab9",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư, Tiến sĩ Nguyễn Văn Thông",
                description:
                    "<p>Chủ tịch Hội Phòng chống đột quỵ khu vực miền Bắc</p> <p>Nguyên Giám đốc Trung tâm đột quỵ - Bệnh viện Trung ương Quân đội 108</p> <p>Hơn 35 năm kinh nghiệm khám, điều trị và nghiên cứu trong lĩnh vực Thần kinh</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/01/30/150934-bs-nguyenvanthong.jpg",
                introduction:
                    "<h2><strong>Giáo sư, Tiến sĩ Nguyễn Văn Thông</strong></h2> <ul> <li>Chủ tịch Hội Phòng chống đột quỵ khu vực miền Bắc</li> <li>Nguyên Giám đốc Trung tâm đột quỵ - Bệnh viện Trung ương Quân đội 108</li> <li>Hơn 35 năm kinh nghiệm khám, điều trị và nghiên cứu trong lĩnh vực Thần kinh</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Trung tâm đột quỵ, Bệnh viện Trung ương Quân đội 108 (2002)</li> <li>Phó Chủ nhiệm Khoa thần kinh, Bệnh viện Trung ương Quân đội 108 (1996)</li> <li>Bác sĩ điều trị tại Viện Quân y 108 (1985 -1989)</li> <li>Công tác tại Cục Nghiên cứu Bộ Tổng tham mưu (1979 - 1984)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa II (1995)</li> <li>Tốt nghiệp Phó Tiến sĩ khoa học y dược (1993)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Chuyên khoa Nội(1987)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Học viện Quân y (1979)</li> <li>Khoảng 11 năm học tập và nghiên cứu tại Philipine và Mỹ về chuyên khoa Thần kinh</li> </ul> <h3><strong>Sách và công trình nghiên cứu khoa học</strong></h3> <ul> <li>Chủ biên nhiều cuốn sách: Bệnh học Thần kinh (2013); Bệnh thoái hóa cột sống cổ (2009); Hướng dẫn chăm sóc người bệnh đột quỵ (2008);...</li> <li>Công bố 75 bài báo khoa học trên tạp chí y học trong nước và quốc tế</li> <li>15 cuốn sách chuyên khảo, giáo trình giảng dạy đại học và sau đại học</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Chủ tịch Hội Phòng chống đột quỵ khu vực miền Bắc</li> <li>Phó Chủ tịch Hội Phòng chống đột quỵ Việt Nam</li> <li>Ủy viên Hội Thần kinh Việt Nam</li> <li>Ủy viên Hội đồng chuyên môn chỉ đạo chương trình đào tạo điều trị đột quỵ, Bộ Y tế</li> </ul> <h2><strong>Khám và điều trị các bệnh</strong></h2> <p>Giáo sư khám, điều trị các bệnh lý chuyên khoa Nội Thần kinh</p> <ul> <li>Đau nhức đầu</li> <li>Mất ngủ kéo dài</li> <li>Suy nhược thần kinh.</li> <li>Đau dây thần kinh mặt, hầu họng</li> <li>Đau thần kinh cổ vai cánh tay</li> <li>Đau thần kinh chi dưới, đau thắt lưng cùng </li> <li>Đau thần kinh do zona</li> <li>Rối loạn thần kinh thực vật: mệt mỏi, hồi hộp, vã mồ hôi, tụt huyết áp </li> <li>Các chứng lo âu, trầm cảm, rối loạn trí nhớ</li> <li>Chóng mặt, ù tai do hội chứng tiền đình</li> <li>Liệt hầu họng, nói khó, nuốt nghẹn, sặc, liệt mắt nhìn đôi</li> <li>Liệt 2 chân, liệt 1/2 người</li></ul>",
                clinic_id: "c09e5fc8-c702-4957-8143-9585f699cb4c",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên Khoa II Nguyễn Thị Hương",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm trong khám và điều trị về xương khớp - Thận </p> <p>Bác sĩ đang công tác tại khoa Thận khớp bệnh viện 108</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/19/094444-bs-ckii-nguyen-thi-huong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên Khoa II Nguyễn Thị Hương</strong></h2> <ul> <li>Bác sĩ có nhiều năm kinh nghiệm trong khám và điều trị về xương khớp - Thận</li> <li>Bác sĩ đang công tác tại khoa Thận khớp, Bệnh viện 108</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh lý xương khớp </li> <li>khám nội chung </li> <li>Khám thận - khớp </li> </ul> <p><strong>Quá trình công tác</strong> </p> <ul> <li>Hiện tại bác sĩ đang công tác tại Bệnh viện Trung ương Quân đội 108</li> </ul>",
                clinic_id: "c09e5fc8-c702-4957-8143-9585f699cb4c",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Tống Thị Hiếu Tâm",
                description:
                    "<p>Gần 35 năm kinh nghiệm trong lĩnh vực Nhi khoa</p> <p>Hiện đang là chủ nhiệm khoa Nhi, Bệnh viện Trung ương Quận Đội 108 </p> <p>Bác sĩ nhận khám cho mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/03/14/103741-ts-tong-thi-hieu-tam1.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Tống Thị Hiếu Tâm</strong></h2> <ul> <li>Gần 35 năm kinh nghiệm trong lĩnh vực Nhi khoa</li> <li>Hiện đang là chủ nhiệm khoa Nhi, Bệnh viện Trung ương Quận Đội 108</li> <li>Bác sĩ nhận khám cho mọi độ tuổi</li> </ul> <h2 ><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Bác sĩ nhận khám và điều trị bệnh lý cho trẻ em và người lớn <ul> <li>Bệnh lý thần kinh</li> <li>Hô hấp</li> <li>Tiêu hóa</li> <li>Dinh dưỡng</li> <li>Tiết niệu</li> <li>Tim mạch </li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chủ nhiệm khoa Nhi, Bệnh viện Trung ương Quân Đội 108 (2010 - nay) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Đa khoa, Học viện Quân Y (1983-1989) </li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Đặc điểm lâm sàng, cận lâm sàng, nội soi phế quản ống mềm và chụp cắt lớp vi tính ở bệnh nhân lao phổi sau điều trị khỏi.</li> <li>Nghiên cứu tình trạng thiếu máu thiếu sắt trên bệnh nhân nhi điều trị nội trú tại Khoa nhi Bệnh viện trung ương Quân đội 108.</li> </ul>",
                clinic_id: "c09e5fc8-c702-4957-8143-9585f699cb4c",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Phạm Quang Tập",
                description:
                    "<p>Gần 35 năm kinh nghiệm trong lĩnh vực Ung Thư </p> <p>Hiện là Phó chủ nhiệm khoa Ung Thư Tổng hợp, Bệnh viện Trung Ương Quân đội 108 </p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/03/14/102650-ts-pham-quang-tap1.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Phạm Quang Tập</strong></h2> <ul> <li>Gần 35 năm kinh nghiệm trong lĩnh vưc Ung Thư</li> <li>Hiện là Phó chủ nhiệm khoa Ung Thư Tổng hợp, Bệnh viện Trung Ương Quân đội 108</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ung thư gan và viêm gan B,C</li> <li>Ung thư phổi, phế quản</li> <li>Ung thư vú</li> <li>Ung thư tuyến giáp và điều trị RFA u tuyến giáp lành tính</li> <li>Ung thư dạ dày</li> <li>Ung thư đại trực tràng</li> <li>Ung thư bàng quang</li> <li>Ung thư tiền liệt tuyến</li> <li>Ung thư tử cung, buồng trứng</li> <li>Các bệnh về Hạch bạch huyết</li> <li>Các loại u dưới da: u mỡ, u bã đậu…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại bệnh viện Trung ương Quân đội 108 (1997 - nay) </li> <li>chủ nhiệm Quân y tại Ban chỉ huy Biên phòng tỉnh Khánh Hòa (1989 - 1995) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Đào tạo Tiến sĩ, Học viện Quân Y (2007 - 2009) </li> <li>Thực tập sinh về ghép tế bào gốc tạo máu tại Cộng hòa Pháp (2006 - 2007) </li> <li>Đào tạo Thạc sĩ, Học viện Quân Y (2000 - 2002) </li> <li>Đào tạo Bác sĩ Chuyên khoa I, Học viện Quân Y (1995 -1997) </li> <li>Đào tạo Bác sĩ Đa khoa hệ chính qui, Học Viện Quân Y (1983 -1989)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu khoa học</strong></h3> <ul> <li>Nghiên cứu sự thay đổi của máu và tủy xương của nhân viên Xquang tiếp xúc với tia X. Luận văn Thạc sĩ</li> <li>Nghiên cứu sự thay đổi của hệ thống Enzyme Cytovhrome P450 ở người tiếp xúc TNT và tác dụng cúa thuốc Naturenz. Luận văn Tiến sĩ.</li> </ul>",
                clinic_id: "c09e5fc8-c702-4957-8143-9585f699cb4c",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Hữu Tùng",
                description:
                    "<p>Gần 25 năm kinh nghiệm trong lĩnh vực Tim mạch</p> <p>Trưởng khoa Tim mạch, Bệnh viện Quốc tế City</p> <p>Bác sĩ từng công tác tại Bệnh viện Tim TP. HCM, Bệnh viện Tim Tâm Đức</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/08/145900-nht.png",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Hữu Tùng</strong></h2> <ul> <li>Gần 25 năm kinh nghiệm trong lĩnh vực Tim mạch</li> <li>Trưởng khoa Tim mạch, Bệnh viện Quốc tế City</li> <li>Bác sĩ từng công tác tại Bệnh viện Tim TP. HCM, Bệnh viện Tim Tâm Đức</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị các vấn đề về tim mạch:</p> <ul> <li>Bệnh mạch vành: đau ngực trái, khó thở</li> <li>Nhồi máu cơ tim: đau ngực trái, khó thở</li> <li>Xơ vữa mạch máu: đau ngực, đau chân khi đi lại, tai biến mạch não</li> <li>Hẹp động mạch cảnh: đau đầu, chóng mặt, tai biến mạch não</li> <li>Đột quỵ: yếu tay chân, liệt mặt</li> <li>Tăng huyết áp: huyết áp cao, đau ngực, đau đầu</li> <li>Bệnh tim do đái tháo đường: đau ngực, khó thở</li> <li>Rối loạn lipid máu: tăng lipid máu, bệnh mạch vành, đột quỵ</li> <li>Tăng cholesterol máu gia đình: tăng LDL-C máu > 4.0 mmol/L, u vàng ở da, bệnh mạch vành</li> <li>Tăng triglycerid máu: triglycerid máu tăng cao, ăn khó tiêu, đau bụng, viêm tụy</li> <li>Rối loạn lipid máu hỗn hợp: tăng LDL-C máu, tăng triglycerid máu, bệnh mạch vành</li> <li>Bệnh động mạch chủ di truyền: tiền sử gia đình mắc bệnh hoặc động mạch chủ giãn vỡ sớm</li> <li>Bệnh tim bẩm sinh: thông liên nhĩ, thông liên thất, còn ống động mạch, hẹp phổi, Fallot</li> <li>Có tiếng thổi ở tim, khó thở, đau ngực</li> <li>Bệnh tim trẻ em: khó thở, đau ngực, tím tái, chậm lớn, hay bị viêm phổi tái phát </li> <li>Hở van hai lá: khó thở, đau ngực, mệt</li> <li>Hẹp van hai lá: khó thở, đau ngực, mệt</li> <li>Hở van động mạch chủ: khó thở, đau ngực, mệt</li> <li>Hẹp van động mạch chủ: khó thở, đau ngực, mệt</li> <li>Suy tim: khó thở, phù, mệt </li> <li>Rung nhĩ: hồi hộp, tim đập không đều</li> <li>Ngoại tâm thu thất: tim đập không đều</li> <li>Rối loạn tim nhanh: tim đập nhanh, hồi hộp, đánh trống ngực</li> <li>Suy giãn tĩnh mạch chi dưới: tê chân khi đứng, giãn mạch máu ở chân</li> <li>Tăng áp động mạch phổi: khó thở, đau ngực, mệt </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Trưởng khoa Tim mạch, Bệnh viện Quốc tế City (2013 - Nay)</li> <li>Bác sĩ tại Bệnh viện Tim Tâm Đức (2006 - 2012)</li> <li>Bác sĩ Viện Tim TP.HCM (2004 - 2006)</li> <li>Làm việc tại khoa Hỗ trợ sống nâng cao dành cho người lớn tại Bệnh viện Bà Rịa – Vũng Tàu (1999 - 2001)</li> </ul>",
                clinic_id: "5321a6bc-8b48-48db-be8c-5003c57eef5a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Hà Thị Kim Hồng",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong lĩnh vực Nội tiết - Nội khoa</p> <p>Nguyên Trưởng khoa Nội tiết, Bệnh viện Nhân dân 115</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/08/170641-bsck2-ha-thi-kim-hong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Hà Thị Kim Hồng</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Nội tiết</li> <li>Nguyên Trưởng khoa Nội tiết, Bệnh viện Nhân dân 115</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị bệnh lý Nội tiết - Đái tháo đường:</p> <ul> <li>Khám và điều trị bệnh lý đái tháo đường</li> <li>Khám và điều trị bệnh lý suy giáp</li> <li>Khám và điều trị bệnh lý cường giáp</li> <li>Khám bệnh lý bướu cổ</li> <li>Bệnh thượng thận</li> <li>Khám bệnh lý suy sinh dục</li> <li>Khám huyết áp, mỡ máu, gout</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Trưởng Khoa Khám sức khỏe tổng quát, Bệnh viện Quốc tế City (2015 - nay)</li> <li>Bác sĩ điều trị Khoa Nội tiết, Bệnh viện Nhân dân 115 (2010 - 2015)</li> <li>Nguyên Trưởng Khoa Nội tiết, Bệnh viện Nhân dân 115 (2004 - 2010)</li> <li>Nguyên Phó Trưởng Khoa Nội, Bệnh viện Nhân dân 115 (2004)</li> <li>Bác sĩ điều trị, Khoa Nội, Bệnh viện Nhân dân 115 (1993 - 2003)</li> <li>Bác sĩ điều trị, Khoa Nhi, Bệnh viện Nhân dân 115 (1991 - 1992)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TPHCM (1990)</li> <li>Bằng Nội tiết – Đái tháo đường – Dinh dưỡng, Liên trường Đại học Paris – Nord (2000)</li> <li>Tốt nghiệp BSCK I chuyên ngành Nội tiết, Đại học Y dược TPHCM (2001)</li> <li>Tốt nghiệp BSCK II chuyên ngành Nội tiết, Đại học Y dược TPHCM (2006)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Ủy viên Ban chấp hành hội Nội tiết và Đái tháo đường Việt Nam</li> <li>Ủy viên Ban chấp hành hội Nội tiết và Đái tháo đường TPHCM</li> </ul>",
                clinic_id: "5321a6bc-8b48-48db-be8c-5003c57eef5a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa II Lê Kim Sang",
                description:
                    "<p>Hơn 30 năm kinh nghiệm điều trị trong lĩnh vực nội soi và nội tiêu hóa</p> <p>Giảng viên tại các trường y như Trung Học Quân Y 2, Đại học Y Dược TPHCM và Đại học Y Khoa Phạm Ngọc Thạch.</p> <p>Bác sĩ tại Bệnh viện Quốc tế City</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/08/172143-bsckiile-kim-sang.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa II Lê Kim Sang</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm điều trị trong lĩnh vực nội soi và nội tiêu hóa</li> <li>Giảng viên tại các trường y như Trung Học Quân Y 2, Đại học Y Dược TPHCM và Đại học Y Khoa Phạm Ngọc Thạch.</li> <li>Bác sĩ tại Bệnh viện Quốc tế City</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị bệnh lý Tiêu hóa vá Nội soi tiêu hóa:</p> <ul> <li>Bệnh trĩ</li> <li>Nứt kẽ hậu môn</li> <li>Rò hậu môn</li> <li>Bệnh áp xe hậu môn</li> <li>U nhú hậu môm môn</li> <li>Polyp hậu môn</li> <li>U sùi mào gà hậu môn</li> <li>Bệnh trĩ tái phát</li> <li>Hẹp hậu môn </li> <li>Ngứa hậu môn</li> <li>Đau hậu môn vô căn</li> <li>Mất tự chủ hậu môn</li> <li>Rò trực tràng âm đạo</li> <li>Sa thành trước trực tràng</li> <li>Sa trực tràng</li> <li>Đứt cơ thắt hậu môn</li> <li>Viêm mủ đa nang lông</li> <li>Viêm nang lông</li> <li>Crohn hậu môn</li> <li>Táo bón</li> <li>Đại tiện khó, không hết phân</li> <li>Polyp đại tràng</li> <li>Polyp dạ dày</li> <li>Viêm đại tràng</li> <li>Viêm trực tràng thể xuất huyết</li> <li>Viêm loét trực tràng </li> <li>Viêm loét dạ dày – tá tràng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Trưởng khoa Tiêu hóa và Nội soi Tiêu hóa, Bệnh viện Quốc tế City (2020 - nay)</li> <li>Nguyên Trưởng Khoa Tiêu Hóa, Bệnh viện Trưng Vương (2007 - 2016)</li> <li>Giảng viên thỉnh giảng tại Đại học Y Khoa Phạm Ngọc Thạch (2013)</li> <li>Giảng viên trợ giảng cho Học viện Quân Y phía Nam. Tham gia giảng dạy cho trường Đại học Y Dược TPHCM chương trình thực hành dược lâm sàng (1997 - nay)</li> <li>Giảng viên thỉnh giảng cho trường Trung Học Quân Y 2 và tham gia giảng dạy tại trường Đại học Y Dược TPHCM (1990 - 2010)</li> <li>Nguyên Phó Trưởng Khoa Nội Tiêu Hóa, Bệnh viện Trưng Vương (1998 - 2006)</li> <li>Bác sĩ điều trị Khoa Nội Tiêu Hóa, Bệnh viện Trưng Vương (1987 - 1998)</li> </ul>",
                clinic_id: "5321a6bc-8b48-48db-be8c-5003c57eef5a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa I Nguyễn Xuân Tài",
                description:
                    "<p>Bác sĩ từng công tác tại Bệnh viện Nhi đồng 1, Bệnh viện Nhi đồng Thành phố</p> <p>Hiện là Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/09/142528-bsck1-nguyen-xuan-tai.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa I Nguyễn Xuân Tài</strong></h2> <ul> <li>Bác sĩ từng công tác tại Bệnh viện Nhi đồng 1, Bệnh viện Nhi đồng Thành phố</li> <li>Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ nhận khám và điều trị bệnh lý Nhi khoa:</p> <ul> <li>Bệnh lý thần kinh</li> <li>Hô hấp</li> <li>Tiêu hóa</li> <li>Dinh dưỡng</li> <li>Tiết niệu</li> <li>Tim mạch</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City (2019 - nay)</li> <li>Bác sĩ Hồi sức tích cực - chống độc Bệnh viện Nhi Đồng Thành phố (2017 - 2019)</li> <li>Bác sĩ luân khoa Bệnh viện Nhi Đồng 1 (2015 - 2017)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch (2014)</li> <li>Tốt nghiệp BSCKI chuyên ngành Nhi khoa, Đại học Y khoa Phạm Ngọc Thạch (2018)</li> </ul>",
                clinic_id: "5321a6bc-8b48-48db-be8c-5003c57eef5a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Trần Văn Bé Bảy",
                description:
                    "<p>Hơn 40 năm kinh nghiệm thăm khám và điều trị bệnh lý về Cơ - Xương - Khớp</p> <p>Nguyên Trưởng Bộ môn Chấn thương chỉnh hình, Đại học Y Dược TP.HCM</p> <p>Từng công tác nhiều năm tại khoa Cơ xương khớp, Bệnh viện Đại học Y dược TP.HCM</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/09/151143-bs-be-bay.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Trần Văn Bé Bảy</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm thăm khám và điều trị bệnh lý về Cơ - Xương - Khớp</li> <li>Nguyên Trưởng Bộ môn Chấn thương chỉnh hình, Đại học Y Dược TP.HCM</li> <li>Từng công tác nhiều năm tại khoa Cơ xương khớp, Bệnh viện Đại học Y dược TP.HCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các bệnh về Chấn thương chỉnh hình - Cơ xương khớp:</p> <ul> <li>Các bệnh về xương khớp: thoái hóa khớp gối, thoái hóa khớp háng,...</li> <li>Phẫu thuật vẹo cột sống</li> <li>Phẫu thuật thẩm mỹ ngón tay</li> <li>Phẫu thuật bàn chân</li> <li>Phẫu thuật kết hợp xương</li> <li>Bó bột</li> <li>Nẹp cánh bàn tay</li> <li>Áo nẹp lưng cao</li> <li>Đai vai chi trên</li> <li>Tiêm khớp</li> <li>Lấy nước dịch khớp...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ khoa Chấn thương chỉnh hình, Bệnh viện Quốc tế City</li> <li>Bác sĩ khoa Cơ xương khớp, Bệnh viện Đại học Y dược TP.HCM (1984 - 2003)</li> <li>Công tác và giữ chức vụ Trưởng Bộ môn Chấn thương chỉnh hình, Đại học Y Dược TP.HCM (1984 - 2003)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TP.HCM (1980)</li> <li>Tốt nghiệp Thạc sĩ, Đại học Y dược TP.HCM (1997)</li> </ul>",
                clinic_id: "5321a6bc-8b48-48db-be8c-5003c57eef5a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Trịnh Bạch Tuyết",
                description:
                    "<p>Gần 40 năm kinh nghiệm khám và điều trị các bệnh lý về Mắt</p> <p>Từng giữ nhiều vị trí quan trọng tại Bệnh viện Mắt như: Trưởng khoa Cườm Nước – Glaucoma và tạo hình thẩm mỹ, Trưởng khoa dịch vụ về mắt và tạo hình thẩm mỹ, Phó Trưởng khoa Chấn thương mắt và tạo hình thẩm mỹ</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/09/154054-bs-tuyet-cih.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Trịnh Bạch Tuyết</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm khám và điều trị các bệnh lý về Mắt</li> <li>Từng giữ nhiều vị trí quan trọng tại Bệnh viện Mắt như: Trưởng khoa Cườm Nước – Glaucoma và tạo hình thẩm mỹ, Trưởng khoa dịch vụ về mắt và tạo hình thẩm mỹ, Phó Trưởng khoa Chấn thương mắt và tạo hình thẩm mỹ</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Phẫu thuật tạo hình thẩm mỹ vùng mắt/hàm/mặt.</li> <li>Mộng thịt: ghép mộng xoay trên chính thân mộng, mộng áp MMC, mộng áp Ologen.</li> <li>Điều trị Cườm Nước (Glaucoma): chẩn đoán, điều trị & phẫu thuật: cắt bè củng mạc kết hợp Mcc, cắt bè củng mạc kết hợp ologen. Đặt Valve Ahmed. Shunt expresses... </li> <li>Điều trị cườm khô (đục thủy tinh thể): phẫu thuật Phaco: cơ bản và nâng cao. </li> <li>Điều trị các bệnh về đáy mắt: laser và kỹ thuật tiêm nội nhãn.</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Trưởng khoa Mắt, Bệnh viện Quốc Tế City (2016 - nay)</li> <li>Nguyên Trưởng khoa Cườm Nước – Glaucoma và tạo hình thẩm mỹ, Bệnh viện Mắt (2000 - 2015)</li> <li>Nguyên Trưởng khoa dịch vụ về mắt và tạo hình thẩm mỹ, Bệnh viện Mắt (1996 - 2000)</li> <li>Nguyên Phó trưởng khoa Chấn thương mắt và tạo hình thẩm mỹ, Bệnh viện Mắt (1991 - 1005)</li> <li>Bác sĩ chuyên khoa Giác mạc và tạo hình thẩm mỹ, Bệnh viện Mắt (1989 - 1990)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y dược TP.HCM (1985)</li> <li>Tốt nghiệp BSCKI chuyên ngành Nhãn khoa, Đại học Y dược TP.HCM (1989)</li> <li>Tốt nghiệp BSCKII chuyên ngành Nhãn khoa, Đại học Y dược TP.HCM (2003)</li> <li>Tham gia rất nhiều khóa học chuyên sâu về mắt tại Mỹ, Úc, Ấn Độ, Indonesia… </li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Báo cáo khoa học tại hội nghị AOS : update về PT CBCM + Ologen (2015)</li> <li>Báo cáo về khô mắt/ BN dùng thuốc điều trị Glaucoma tại Hồng Kông (2014)</li> <li>Báo cáo khoa học tại hội nghị AOS Thái Lan: CBCM+ Ologen (2013)</li> <li>Đánh giá về sự thay đổi chiều dày lớp sợi thần kinh võng mạc trên BN Glaucoma bằng OCT sau phẫu thuật Cắt bè cũng mạc (2009)</li> <li>Báo cáo tại hội nghị ngành toàn quốc đề tài: Mộng ghép xoay kết mạc trên chính thân mộng (2001 - 2003)</li> <li>Báo cáo tại AAO Mỹ đề tài PT CBCM + Ologen (1999)</li> <li>Báo cáo tại hội nghị ngành toàn quốc đề tài: Sụp mi (1991)</li> </ul>",
                clinic_id: "5321a6bc-8b48-48db-be8c-5003c57eef5a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Chuyên khoa I Trần Kinh Thành",
                description:
                    "<p>Gần 20 năm kinh nghiệm trong lĩnh vực Tiêu hóa</p> <p>Bác sĩ công tác nhiều năm tại Bệnh viện Nhân dân 115</p> <p>Bác sĩ nhận khám từ 16 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/09/05/110658-bs-tran-kinh-thanh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Chuyên khoa I Trần Kinh Thành</strong></h2> <ul> <li>Gần 20 năm kinh nghiệm trong lĩnh vực Tiêu hóa</li> <li>Bác sĩ công tác nhiều năm tại Bệnh viện Nhân dân 115</li> <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị:</strong></p> <p><strong>Khám, điều trị các bệnh lý về Tiêu hóa</strong></p> <ul> <li>Nội soi Tiêu hóa</li> <li>Bệnh lý tiêu hóa, ổ bụng, các bệnh lý hậu môn, trực tràng</li> <li>Bệnh lý dạ dày, tá tràng, ruột non</li> </ul> <p><strong>Bệnh lý đại tràng, trực tràng</strong></p> <ul> <li>Bệnh trĩ, trĩ chảy máu, rò hậu môn</li> <li>Bệnh u gan</li> <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li> </ul> <p><strong>Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày</strong></p> <ul> <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li> <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại</li> <li>Gắp dị vật đường tiêu hóa</li> <li>Các bệnh lý Tiêu hóa - gan mật</li> <li>Bệnh gan nhiễm mỡ</li> <li>Đau dạ dày</li> <li>Chảy máu dạ dày </li> <li>Đau thượng vị </li> <li>Viêm dạ dày</li> <li>Loét dạ dày tá tràng</li> <li>Nhiễm Helicobacter pylori dạ dày (HP)</li> <li>Trào ngược dạ dày thực quản (Gerd)</li> <li>Polyp dạ dày </li> <li>Viêm đại tràng</li> <li>Viêm đại tràng màng giả</li> <li>Viêm loét đại tràng</li> <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li> <li>Khó nuốt</li> <li>Khó tiêu</li> <li>Ợ nóng, Ợ chua</li> <li>Táo bón</li> <li>Cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ chuyên khoa Nội Tiêu hóa, Phòng khám Đa khoa Saigon Healthcare</li> <li>Bác sĩ điều trị, nội soi, khoa Nội Tiêu hóa, Bệnh viện Nhân dân 115 (2008 - nay)</li> <li>Bác sĩ Nội Tổng quát, Bệnh viện Nhân dân 115 (2006 - 2008)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ, Đại học Y dược TPHCM (2008 - 2010)</li> <li>Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch (1999 - 2005)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Nội soi Việt Nam</li> </ul>",
                clinic_id: "c36edcb0-004b-4cda-b3ee-043fc248766e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Huỳnh Thanh Hương",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa</p> <p>Bác sĩ từng công tác tại Bệnh viện Từ Dũ</p> <p>Bác sĩ nhận khám từ 16 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/09/04/220349-bs-huynh-thanh-huong-1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa II Huỳnh Thanh Hương</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa</li> <li>Bác sĩ từng công tác tại Bệnh viện Từ Dũ</li> <li>Bác sĩ phụ trách chuyên môn chuyên khoa Sản phụ khoa, Phòng khám Đa khoa Saigon Healthcare</li> <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Sản phụ khoa, Phòng khám Đa khoa Saigon Healthcare (2019 - nay)</li> <li>Bác sĩ Sản phụ khoa, Bệnh viện Từ Dũ (1987 - 2018)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II chuyên ngành Sản phụ khoa, Đại học Y dược TPHCM (2005)</li> <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Sản phụ khoa, Đại học Y dược TPHCM (1999)</li> <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TPHCM (1986)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị:</strong></p> <ul> <li>Khám thai, theo dõi thai định kì</li> <li>Khám và điều trị các bệnh phụ khoa</li> <li>Tư vấn, chăm sóc sức khỏe phụ nữ tiền mãn kinh và sau mãn kinh</li> <li>Điều trị vô sinh và hiếm muộn</li> <li>Phát hiện sớm ung thư vú và ung thư cổ tử cung</li> <li>Siêu âm thai và theo dõi thai kỳ</li> <li>Khám và quản lý thai nghén</li> <li>Chẩn đoán trước sinh</li> <li>Double test, triple test </li> <li>Hỗ trợ sinh sản</li> <li>Sàng lọc, chẩn đoán trước sinh, các bệnh lý di truyền</li> <li>Phẫu thuật sản phụ khoa</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> </ul>",
                clinic_id: "c36edcb0-004b-4cda-b3ee-043fc248766e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư, Tiến sĩ Nguyễn Đức Công",
                description:
                    "<p>40 năm kinh nghiệm trong khám và điều tri các bệnh lý về Tim mạch</p> <p>Nguyên Giám đốc Bệnh viện Thống Nhất</p> <p>Hiện đang công tác tại các trường: Đại học Y khoa Phạm Ngọc Thạch, khoa Y - Đại học Quốc gia TP.HCM, Đại học Y Dược TP.HCM</p> <p>Bác sĩ nhận khám từ 16 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/09/04/111154-bs-nguyen-duc-cong.jpg",
                introduction:
                    "<h2><strong>Giáo sư, Tiến sĩ Nguyễn Đức Công</strong></h2> <ul> <li>40 năm kinh nghiệm trong khám và điều tri các bệnh lý về Tim mạch</li> <li>Nguyên Giám đốc Bệnh viện Thống Nhất</li> <li>Hiện đang công tác tại các trường: Đại học Y khoa Phạm Ngọc Thạch, khoa Y - Đại học Quốc gia TP.HCM, Đại học Y Dược TP.HCM</li> <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh lý Tim mạch</strong></p> <ul> <li>Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch</li> <li>Các bệnh lý Nội Tim mạch</li> <li>Bệnh van tim</li> <li>Bệnh cơ tim</li> <li>Rối loạn nhịp tim</li> <li>Khám bệnh mạch máu ngoại biên.</li> <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.</li> <li>Tư vấn sử dụng thuốc chống đông máu.</li> </ul> <p><strong>Bệnh mạch vành</strong></p> <ul> <li>Bệnh mạch vành</li> <li>Xơ vữa động mạch</li> </ul> <p><strong>Rối loạn mỡ máu</strong></p> <ul> <li>Các thể bệnh của rối loạn mỡ máu</li> <li>Tư vấn, điều trị bệnh mỡ máu</li> <li>Rối loạn chuyển hóa</li> <li>Dinh dưỡng cho bệnh nhân rối loạn mỡ máu.</li> </ul> <p><strong>Huyết áp</strong></p> <ul> <li>Bệnh cao huyết áp</li> <li>Bệnh huyết áp thấp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Chủ tịch Hội đồng chuyên môn, Bác sĩ điều trị tại Phòng khám đa khoa Saigon Healthcare (2019 - nay)</li> <li>Chủ nhiệm Bộ môn Lão khoa, Đại học Y khoa Phạm Ngọc Thạch (2012 – nay)</li> <li>Phó Chủ nhiệm Bộ môn Nội, khoa Y, Đại học Quốc gia TP.HCM (2012 - nay)</li> <li>Phó chủ nhiệm Bộ môn Lão khoa, Đại học Y Dược TP.HCM (2010 - nay)</li> <li>Chủ tịch Hội đồng chuyên môn Bảo vệ chăm sóc sức khỏe cán bộ miền Nam (2010 - nay)</li> <li>Nguyên Giám đốc Bệnh viện Thống Nhất (2008 - 2019)</li> <li>Nguyên Phó chủ nhiệm Bộ môn Tim mạch, Học viện Quân Y (2006 - 2007)</li> </ul>",
                clinic_id: "c36edcb0-004b-4cda-b3ee-043fc248766e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Phan Vương Huy Đổng",
                description:
                    "<p>Hơn 30 năm kinh nghiệm khám và điều trị về Cơ xương khớp - Chấn thương chỉnh hình</p> <p>Bác sĩ từng công tác tại Khoa Y học thể thao, Bệnh viện Nhân dân 115</p> <p>Bác sĩ từng công tác tại Khoa Chi dưới, Bệnh viện Chấn thương chỉnh hình TP. HCM</p> <p>Bác sĩ nhận khám từ 16 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/10/02/171412-bs-phan-dong-huy-vuong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Phan Vương Huy Đổng</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm khám và điều trị về Cơ xương khớp - Chấn thương chỉnh hình</li> <li>Bác sĩ từng công tác tại Khoa Y học thể thao, Bệnh viện Nhân dân 115</li> <li>Bác sĩ từng công tác tại Khoa Chi dưới, Bệnh viện Chấn thương chỉnh hình TP.HCM</li> <li>Phó Chủ tịch Hội y học thể thao TP.HCM</li> <li>Đào tạo và huấn luyện nội soi khớp cho các Bác sĩ chuyên khoa tại Bệnh viện Nhân dân 115 (2005 - 2009)</li> <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chấn thương khớp gối, vai, cột sống (trong tai nạn sinh hoạt, chấn thương thể thao)</li> <li>Đứt dây chằng gối, dẹp rách sụn gối - trật khớp vai</li> <li>Chấn thương đứt dây chằng khớp gối</li> <li>Chấn thương rách đứt dây chằng cổ chân</li> <li>Chấn thương rách lật khớp vai</li> <li>Chấn thương rách gân khớp vai</li> <li>Các bệnh lý đặc biệt trong thể thao</li> <li>Bệnh thoái hóa cột sống, đĩa đệm, cổ tay</li> <li>Bệnh lý khớp gối</li> <li>Hội chứng Tennis Elbow (viêm lồi cầu ngoài xương cánh tay là chấn thương thường gặp ở người chơi tennis)</li> <li>Gai gót chân</li> <li>Bệnh lý gối lệch trục xương ( vẹo trong, vẹo ngoài )</li> <li>Thoái hóa khớp háng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Bộ môn Y học thể thao, Trường Đại học Y khoa Phạm Ngọc Thạch (1991 - 2018)</li> <li>Bác sĩ Khoa Y học thể thao, Bệnh viện Nhân dân 115 (2005 - 2011)</li> <li>Bác sĩ Khoa Chi dưới, Bệnh viện Chấn thương chỉnh hình TP.HCM (1991 - 2005)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I Chuyên khoa Chấn thương chỉnh hình, Trường Đại học Y dược TP.HCM (1993 - 1995)</li> <li>Bác sĩ Đa khoa, Trường Đại học Y dược TP.HCM (1984 - 1990)</li> <li>Chứng chỉ nội soi khớp tại Đai học Chulalongkorn Thái Lan</li> <li>Tập huấn về nội soi tại Singapore & Hàn Quốc</li> </ul>",
                clinic_id: "c36edcb0-004b-4cda-b3ee-043fc248766e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Thị Nhuần",
                description:
                    "<p>Gần 30 năm kinh nghiệm lĩnh vực Sản phụ khoa</p> <p>Nguyên Trưởng khoa Sản, Bệnh viện Quận 11</p> <p>Bác sĩ nhận khám từ 16 tuổi trở lên </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/03/31/110316-bs-nhuan.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Thị Nhuần</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm lĩnh vực Sản phụ khoa</li> <li>Nguyên Trưởng khoa Sản, Bệnh viện Quận 11</li> <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám thai và quản lí thai nghén</li> <li>Khám và điều trị các bệnh lý phụ khoa</li> <li>Rong kinh - rong huyết</li> <li>Các rối loạn tiền mãn kinh và mãn kinh</li> <li>Các bệnh lý phụ khoa như viêm nhiễm, lộ tuyến cổ tử cung, nấm âm đạo,...</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> <li>Ung thư phụ khoa </li> <li>U nang buồng trứng</li> <li>U xơ tử cung </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Sản phụ khoa, Phòng khám Đa khoa Saigon Healthcare (2019 - Nay)</li> <li>Nguyên Trưởng khoa Sản, Bệnh viện Quận 11 (2013 - 2017)</li> <li>Nguyên Phó khoa Sản, Bệnh viện Quận 11 (2007 - 2012)</li> <li>Nguyên Phó khoa Sản, Trung tâm Y tế Bệnh viện Quận 11 (1997 - 2007)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Thái Bình (1994)</li> </ul>",
                clinic_id: "c36edcb0-004b-4cda-b3ee-043fc248766e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ  Chuyên khoa I Võ Quang Thành",
                description:
                    "<p>Bác sĩ khoa Ngoại Thần kinh – Cột sống, Bệnh viện STO Phương Đông.</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/09/23/183038bs-vo-quang-thanh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Võ Quang Thành</strong></h2> <ul> <li>Bác sĩ khoa Ngoại Thần kinh – Cột sống, Bệnh viện STO Phương Đông.</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Ngoại Thần kinh – Cột sống, Bệnh viện STO Phương Đông (T3/2013 - nay)</li> <li>Bác sĩ thực tập khoa Ngoại Thần kinh, Bệnh viện Chợ Rẫy (2008 - 2010)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa - Học viện Quân Y (2008)</li> <li>Tốt nghiệp Bác sỹ Chuyên khoa cấp I Ngoại Thần kinh, Đại học Y dược TPHCM (2012)</li> <li>Tu nghiệp chuyên môn tại Hàn Quốc năm 2013</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có chuyên môn khám và điều trị:</p> <ul> <li>Các Bệnh lý Cơ xương khớp và Cột sống</li> <li>Thoái hoá xương khớp</li> <li>Viêm khớp</li> <li>Loãng xương</li> <li>Chấn thương xương khớp</li> <li>Đau cột sống lưng</li> <li>Đau vai gáy</li> <li>Điều trị giảm đau không cần phẫu thuật:</li> <li>Thoái hoá và thoát vị đĩa đệm giai đoạn sớm</li> <li>Tái tạo khớp trong bệnh lý thoái hoá</li> <li>Điều trị đau sau phẫu thuật</li> <li>Điều trị đau do viêm khớp</li> <li>Phong bế dây thần kinh chọn lọc</li> <li>Phong bế khớp</li> </ul> <p><strong>Điều trị phẫu thuật</strong></p> <ul> <li>Thoát vị đĩa đệm nặng</li> <li>Trượt đốt sống</li> <li>Vẹo cột sống</li> <li>Gãy cột sống</li> <li>Thay đĩa đệm nhân tạo cột sống</li> </ul>",
                clinic_id: "6421cb0a-a70c-4146-9229-b2f6783de4b7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Lê Đức Tố",
                description:
                    "<p>Là Giám đốc Bệnh viện STO Phương Đông</p> <p>Hơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật về chấn thương chỉnh hình</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/12/31/162154-ts-le-duc-to.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Lê Đức Tố</strong></h2> <ul> <li>Là Giám đốc Bệnh viện STO Phương Đông</li> <li>Hơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật, trong đó có 35.000 ca khám & phẫu thuật từ thiện cho trẻ em khuyết tật và người nghèo tại nhiều tỉnh thành của Việt Nam</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Sáng lập viên kiêm Giám đốc Bệnh viện STO Phương Đông (2007 đến nay)</li> <li>Nguyên sáng lập viên kiêm Giám đốc bệnh viện Sài Gòn ITO (2002)</li> <li>Giảng viên trường Đại học Y Thanh Hóa & Đại học Y Thái Bình (1968 – 1971)</li> <li>Chủ nhiệm liên bộ môn ngoại chấn thương chỉnh hình & phẫu thuật thực hành tại Đại học Y Thái Bình (1979)</li> <li>Phó chủ nhiệm khoa chấn thương chỉnh hình bệnh viện Việt Nam – Bungari (1979)</li> <li>Bác sĩ khoa chấn thương Bệnh viện Thống Nhất TPHCM</li> <li>Bác sĩ khoa điều trị Trung tâm chỉnh hình phục hồi chức năng trẻ khuyết tật vận động TP.HCM</li> <li>Bác sĩ là người đầu tiên đưa ra quy trình chẩn đoán & phẫu thuật hiệu quả nhất cho bệnh nhân bị xơ hóa cơ Delta (bệnh chim sệ cánh) và được Bộ y tế giao trọng trách tổ chức tập huấn & chuyển giao kỹ thuật mổ xơ hóa cơ Delta cho các cơ sở y tế ở nhiều địa phương như Thanh Hóa, Vĩnh Phúc, Hà Tĩnh, Nghệ An,… và trực tiếp phẫu thuật xơ hóa cơ Delta cho hàng nghìn trẻ em khắp các tỉnh thành Việt Nam (2006 – 2007)</li> <li>Phẫu thuật viên chính thức trong các chương trình phẫu thuật từ thiện giúp cho trẻ em khuyết tật & người nghèo của Việt Nam cho các tổ chức từ thiện quốc tế như SAP-VN (Hoa Kỳ), Bệnh viện AGAPE (Hàn Quốc), H4H (Australia), ESPOIR, ENFANTS, HOPE FOR VIETNAMESE CHILDREN (Pháp), mời làm phẫu thuật viên chính trong các chương trình phẫu thuật từ thiện giúp cho trẻ em khuyết tật & người nghèo của Việt Nam</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp trường Đại học Y Hà Nội (1968)</li> <li>Tốt nghiệp Phó tiến sỹ y khoa (1979 – Liên Xô)</li> <li>Tốt nghiệp Tiến sỹ khoa học (1997 – CHLB Nga)</li> </ul> <h3><strong>Chứng chỉ trong nước, ngoài nước</strong></h3> <ul> <li>Tu nghiệp chuyên môn tại Hoa Kỳ, Nhật Bản</li> <li>Chứng nhận hành nghề y tế tư nhân loại hình bệnh viện do Bộ y tế cấp năm 2007</li> <li>Chứng chỉ hành nghề khám chữa bệnh do Sở y tế TPHCM cấp năm 2013</li> </ul>",
                clinic_id: "6421cb0a-a70c-4146-9229-b2f6783de4b7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Đinh Văn Quỳnh",
                description:
                    "<p>Bác sĩ điều trị khoa Chấn thương Chỉnh hình, Bệnh viện STO Phương Đông.</p> <p>Hơn 10 năm kinh nghiệm phẫu thuật chấn thương cơ xương khớp.</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/09/23/175943bs-dinh-van-quynh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Đinh Văn Quỳnh</strong></h2> <ul> <li>Bác sĩ điều trị khoa Chấn thương Chỉnh hình, Bệnh viện STO Phương Đông</li> <li>Hơn 10 năm kinh nghiệm phẫu thuật chấn thương cơ xương khớp</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Chấn thương Chỉnh hình, Bệnh viện STO Phương Đông (2007 - nay)</li> <li>Bác sĩ Chấn thương chỉnh hình, Bệnh viện Chấn thương Chỉnh hình Sài Gòn ITO (2004 – 2007)</li> <li>Bác sĩ khoa Ngoại, Bệnh viện đa khoa Vạn Xuân TPHCM (2002 – 2004)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Thái Bình (2002)</li> <li>Bác sĩ Chuyên khoa I Chấn thương Chỉnh hình, Đại học Y dược TPHCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có chuyên môn khám và điều trị:</p> <p><strong>Khám & điều trị các loại bệnh lý sau</strong></p> <ul> <li>Viêm khớp</li> <li>Viêm xương - U xương</li> <li>Viêm thần kinh</li> <li>Loãng xương</li> <li>Thoái hóa khớp</li> </ul> <p><strong>Khám & điều trị các loại chấn thương</strong></p> <ul> <li>Gãy xương các loại</li> <li>Chấn thương cơ</li> <li>Vết thương phần mềm</li> <li>Bong gân - Trật khớp</li> <li>Chấn thương do chơi thể thao (đứt dây chằng chéo gối, rách sụn chêm gối,…vv…)</li> <li>Di chứng sau chấn thương xương (khớp giả, chậm liền xương,…vv..)</li> </ul> <p><strong>Phẫu thuật</strong></p> <ul> <li>Phẫu thuật nội soi khớp</li> <li>Phẫu thuật thay khớp nhân tạo</li> <li>Kết hợp xương kín dưới màn hình tăng sáng</li> </ul> <p><strong>Chỉnh hình các loại</strong></p> <ul> <li>Phẫu thuật chỉnh hình kỹ thuật cao</li> <li>Bại não</li> <li>Di chứng bỏng</li> <li>Di chứng chấn thương</li> <li>Di chứng sốt bại liệt</li> <li>Di tật bảm sinh cơ quan vận động</li> <li>Lõm lồng ngực</li> <li>Kéo dài chân tay</li> <li>Tăng chiều cao</li> </ul>",
                clinic_id: "6421cb0a-a70c-4146-9229-b2f6783de4b7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Nguyễn Đức Viên",
                description:
                    "<p>Hơn 20 năm gắn bó với nghề y, đã trực tiếp xử trí, phẫu thuật nhiều ca cấp cứu chấn thương cơ – xương - khớp</p> <p>Trưởng khoa Ngoại Thần kinh – Cột sống bệnh viện STO Phương Đông</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/12/31/172312-bsckii-nguyen-duc-vien.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Nguyễn Đức Viên</strong></h2> <ul> <li>Hơn 20 năm gắn bó với nghề y, đã trực tiếp xử trí, phẫu thuật nhiều ca cấp cứu chấn thương cơ – xương - khớp</li> <li>Trưởng khoa Ngoại Thần kinh – Cột sống bệnh viện STO Phương Đông</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Ngoại Thần kinh – Cột sống bệnh viện STO Phương Đông (tháng 6/2011-nay)</li> <li>Bác sĩ khoa Chấn thương chỉnh hình, Bệnh viện STO Phương Đông (2009 – 2011)</li> <li>Bác sĩ khoa Ngoại chấn thương – Bỏng, Bệnh viện Đa khoa tỉnh Bình Định (1992 – 2008)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Bác sĩ Đa khoa tại trường Đại học Y Huế (1991)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa I, trường Đại học Y dược thành phố Hồ Chí Minh (1999)</li> <li>Tốt nghiệp Bác sĩ Chuyên khoa II, trường Đại học Y dược thành phố Hồ Chí Minh (2009)</li> </ul> <h3><strong>Chứng chỉ trong nước và ngoài nước</strong></h3> <ul> <li>Chứng chỉ chuyên khoa sơ bộ phẫu thuật cột sống, Bệnh viện Chấn thương chỉnh hình thành phố Hồ Chí Minh (1995)</li> <li>Chứng chỉ bồi dưỡng kỹ thuật vi phẫu tạo hình bởi Bệnh viện Chấn thương chỉnh hình (2003)</li> <li>Chứng chỉ phẫu thuật nội soi khớp, Đại học Y dược thành phố Hồ Chí Minh (2009)</li> <li>Chứng chỉ hành nghề khám chữa bệnh do Sở Y tế thành phố Hồ Chí Minh cấp (2012)</li> </ul> <h3><strong>Thành tích đạt được</strong></h3> <ul> <li>Hơn 20 năm gắn bó với nghề y, đã trực tiếp xử trí, phẫu thuật nhiều ca cấp cứu chấn thương cơ – xương - khớp</li> <li>Luôn cầu tiến, học hỏi và đã trực tiếp phẫu thuật cơ xương khớp bằng phương pháp nội soi (từ 2008 đến nay)</li> <li>Cùng với đội ngũ bác sỹ Bệnh viện STO Phương Đông tham gia các chương trình khám từ thiện tại các tỉnh miền Đông, miền Tây Nam bộ</li> <li>Trực tiếp tham gia hàng chục ca phẫu thuật từ thiện cho trẻ em khuyết tật & bệnh nhân nghèo tại Bệnh viện STO Phương Đông</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các bệnh lý cơ xương khớp và các bệnh lý chấn thương.</p> <p><strong>Bệnh về Khớp</strong></p> <ul> <li>Gout, Viêm cột sống dính khớp, thoái hóa khớp, viêm khoanh khớp vai</li> <li>Đau khớp vai, đau vai gáy, Lupus ban đỏ, đau thắt lưng, đau xương khớp</li> <li>Thoát vị đĩa đệm, viêm khớp</li> </ul> <p><strong>Bệnh về Xương</strong></p> <ul> <li>Loãng xương, đau nhức xương</li></ul>",
                clinic_id: "6421cb0a-a70c-4146-9229-b2f6783de4b7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Bùi Thanh Tùng",
                description:
                    "<p>Trưởng khoa Khám bệnh, Bệnh viện STO Phương Đông</p> <p>Hơn 10 năm kinh nghiệm trong khám và điều trị Chấn thương Chỉnh hình </p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/11/22/143913-bs-doan-tung.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Bùi Thanh Tùng</strong></h2> <ul> <li>Trưởng khoa khám bệnh bệnh viện STO Phương Đông</li> <li>Hơn 10 năm kinh nghiệm trong khám và điều trị Chấn thương Chỉnh hình </li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khám bệnh, Bệnh viện STO Phương Đông (tháng 9/2011 đến nay)</li> <li>Bác sĩ khoa Chấn thương chỉnh hình, Bệnh viện STO Phương Đông (2008 – 2011)</li> <li>Bác sĩ khoa Chấn thương chỉnh hình, Bệnh viện tỉnh Cà Mau (2002 – 2008)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Ngoại Chấn thương Chình hình, Đại học Y dược Thành phố Hồ Chí Minh (2008)</li> <li>Tốt nghiệp Bác sĩ Đa khoa trường Đại học Y dược Thành phố Hồ Chí Minh (2000)</li> </ul> <h3><strong>Chứng chỉ trong nước, ngoài nước</strong></h3> <ul> <li>Chứng chỉ chuyên khoa sơ bộ chấn thương chỉnh hình (2003)</li> </ul> <h3><strong>Thành tích, giải thưởng</strong></h3> <ul> <li>Hơn 10 năm gắn bó với nghề y, đã trực tiếp xử trí, phẫu thuật nhiều ca cấp cứu chấn thương cơ - xương - khớp</li> <li>Trực tiếp phẫu thuật cơ xương khớp bằng phương pháp nội soi (từ 2008 đến nay)</li> <li>Cùng với đội ngũ bác sĩ bệnh viện STO Phương Đông tham gia các chương trình khám từ thiện tại các tỉnh miền Đông, miền Tây Nam bộ</li> <li>Trực tiếp tham gia hàng chục ca phẫu thuật từ thiện cho trẻ em khuyết tật & bệnh nhân nghèo tại bệnh viện STO Phương Đông</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh về Khớp</strong></p> <ul> <li>Đau khớp vai, đau vai gáy, đau thắt lưng, đau xương khớp</li> <li>Phẫu thuật tạo dây chằng chéo khớp gối </li> </ul> <p><strong>Bệnh về Xương</strong></p> <ul> <li>Đau nhức xương</li> <li>Chấn thương thể thao</li> </ul> <p><strong>Bệnh về Cơ</strong></p> <ul> <li>Chứng đau mỏi cơ</li> </ul>",
                clinic_id: "6421cb0a-a70c-4146-9229-b2f6783de4b7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Lê Đức Tố ",
                description:
                    "<p>Là Giám đốc Bệnh viện STO Phương Đông</p> <p>Hơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật về chấn thương chỉnh hình</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/12/31/162154-ts-le-duc-to.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Lê Đức Tố</strong></h2> <ul> <li>Là Giám đốc Bệnh viện STO Phương Đông</li> <li>Hơn 40 năm gắn bó với nghề y, đã thực hiện hàng trăm nghìn ca phẫu thuật, trong đó có 35.000 ca khám & phẫu thuật từ thiện cho trẻ em khuyết tật và người nghèo tại nhiều tỉnh thành của Việt Nam</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Sáng lập viên kiêm Giám đốc Bệnh viện STO Phương Đông (2007 đến nay)</li> <li>Nguyên sáng lập viên kiêm Giám đốc bệnh viện Sài Gòn ITO (2002)</li> <li>Giảng viên trường Đại học Y Thanh Hóa & Đại học Y Thái Bình (1968 – 1971)</li> <li>Chủ nhiệm liên bộ môn ngoại chấn thương chỉnh hình & phẫu thuật thực hành tại Đại học Y Thái Bình (1979)</li> <li>Phó chủ nhiệm khoa chấn thương chỉnh hình bệnh viện Việt Nam – Bungari (1979)</li> <li>Bác sĩ khoa chấn thương Bệnh viện Thống Nhất TPHCM</li> <li>Bác sĩ khoa điều trị Trung tâm chỉnh hình phục hồi chức năng trẻ khuyết tật vận động TP.HCM</li> <li>Bác sĩ là người đầu tiên đưa ra quy trình chẩn đoán & phẫu thuật hiệu quả nhất cho bệnh nhân bị xơ hóa cơ Delta (bệnh chim sệ cánh) và được Bộ y tế giao trọng trách tổ chức tập huấn & chuyển giao kỹ thuật mổ xơ hóa cơ Delta cho các cơ sở y tế ở nhiều địa phương như Thanh Hóa, Vĩnh Phúc, Hà Tĩnh, Nghệ An,… và trực tiếp phẫu thuật xơ hóa cơ Delta cho hàng nghìn trẻ em khắp các tỉnh thành Việt Nam (2006 – 2007)</li> <li>Phẫu thuật viên chính thức trong các chương trình phẫu thuật từ thiện giúp cho trẻ em khuyết tật & người nghèo của Việt Nam cho các tổ chức từ thiện quốc tế như SAP-VN (Hoa Kỳ), Bệnh viện AGAPE (Hàn Quốc), H4H (Australia), ESPOIR, ENFANTS, HOPE FOR VIETNAMESE CHILDREN (Pháp), mời làm phẫu thuật viên chính trong các chương trình phẫu thuật từ thiện giúp cho trẻ em khuyết tật & người nghèo của Việt Nam</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp trường Đại học Y Hà Nội (1968)</li> <li>Tốt nghiệp Phó tiến sỹ y khoa (1979 – Liên Xô)</li> <li>Tốt nghiệp Tiến sỹ khoa học (1997 – CHLB Nga)</li> </ul> <h3><strong>Chứng chỉ trong nước, ngoài nước</strong></h3> <ul> <li>Tu nghiệp chuyên môn tại Hoa Kỳ, Nhật Bản</li> <li>Chứng nhận hành nghề y tế tư nhân loại hình bệnh viện do Bộ y tế cấp năm 2007</li> <li>Chứng chỉ hành nghề khám chữa bệnh do Sở y tế TPHCM cấp năm 2013</li> </ul>",
                clinic_id: "6421cb0a-a70c-4146-9229-b2f6783de4b7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa I Trương Thị Khương",
                description:
                    "<p>Bác sĩ chuyên khoa Nội Tổng quát</p> <p>Từng công tác tại các bệnh viện lớn như Viện Tim TPHCM, BV Sài Gòn ITO</p> <p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tổng quát, đặc biệt là Nội Cơ xương khớp</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/26/140945-bs-cki-truong-thi-khuong--ck-noi-tong-quat.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa I Trương Thị Khương</strong></h2> <ul> <li>Bác sĩ chuyên khoa Nội Tổng quát</li> <li>Từng công tác tại các bệnh viện lớn như Viện Tim TPHCM, BV Sài Gòn ITO</li> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tổng quát, đặc biệt là Nội Cơ xương khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ điều trị tại Phòng khám Đa khoa SIHG (2019 - nay)</li> <li>Bác sĩ tại Bệnh viện Quốc tế Chấn thương chỉnh hình Sài Gòn - Sài Gòn ITO</li> <li>Bác sĩ tại Bệnh viện Quận 5</li> <li>Bác sĩ tại Viện Tim TPHCM</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I Nội Tổng quát, Đại học Y dược TPHCM (2015)</li> <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y khoa Phạm Ngọc Thạch (2011)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám vá điều trị các bệnh lý Nội khoa:</p> <ul> <li>Cơ xương khớp</li> <li>Nội Tổng quát</li> <li>Khám sức khỏe định kỳ theo nhu cầu</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Ánh Loan",
                description:
                    "<p>Từng công tác vị trí Bác sĩ Sản Phụ khoa tại các Phòng khám uy tín như Phòng khám Yersin, Phòng khám Exson,...</p> <p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Sản Phụ khoa</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/26/151931-bs-nguyen-anh-loan-ck-san-phu-khoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Ánh Loan</strong></h2> <ul> <li>Từng công tác vị trí Bác sĩ Sản Phụ khoa tại các Phòng khám uy tín như Phòng khám Yersin, Phòng khám Exson,...</li> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Sản Phụ khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Sản - Phụ khoa tại Phòng khám Đa khoa SIHG (2019 - nay)</li> <li>Nguyên Trưởng khoa Chăm sóc Sức khỏe sinh sản, Quản lý chương trình sức khoẻ bà mẹ và trẻ em – Kế hoạch hoá gia đình, Trung tâm Y tế Quận 5 (1992 - 2012)</li> <li>Cộng tác với nhiều Phòng khám Đa khoa trên địa bàn TPHCM (2016 - nay)</li> <li>Bác sĩ điều trị khoa Sản, Bệnh viện Chợ Gạo, Tiền Giang (1988 - 1992)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị:</p> <ul> <li>Bệnh lý sản phụ khoa</li> <li>Vô sinh, hiếm muộn</li> <li>Các bệnh lây nhiễm qua đường tình dục</li> <li>Polyp cổ tử cung, nang naboth cổ tử cung…</li> <li>Quản lý thai nghén, siêu âm thai, phát hiện dị tật bẩm sinh</li> <li>Điều trị bệnh lý thai</li> <li>Ung bướu vú, phụ khoa (u xơ tử cung, u nang buồng trứng, các khối u vùng âm đạo…)</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa I Lê Thúy Hoa",
                description:
                    "<p>Bác sĩ chuyên khoa Sản - Phụ khoa </p> <p>Nhiều năm công tác tại Bệnh viện Từ Dũ ở nhiều khoa, phòng khác nhau</p> <p>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản - Phụ khoa </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/26/144723-bs-cki-le-thuy-hoa-ck-san-phu-khoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa I Lê Thúy Hoa</strong></h2> <ul> <li>Bác sĩ chuyên khoa Sản - Phụ khoa</li> <li>Nhiều năm công tác tại Bệnh viện Từ Dũ ở nhiều khoa, phòng khác nhau</li> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản - Phụ khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Sản - Phụ khoa tại Phòng khám Đa khoa SIHG (2020 - nay)</li> <li>Bác sĩ Sản khoa, Phòng khám Vinmec Sài Gòn (2014 - 2020)</li> <li>Bác sĩ điều trị luân khoa tại Bệnh viện Từ Dũ (1991 - 2013)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa I Sản Phụ khoa, Đại học Y dược TPHCM (2003)</li> <li>Tốt nghiệp Bác sĩ, Đại học Y dược TPHCM (1983)</li> <li>Giấy chứng nhận Kỹ thuật Soi Cổ tử cung, đọc kết quả, chẩn đoán và điều trị, Bệnh viện Từ Dũ (2014)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các bệnh về:</p> <ul> <li>Bệnh lý sản phụ khoa</li> <li>Các bệnh lây nhiễm qua đường tình dục</li> <li>Polyp cổ tử cung, nang naboth cổ tử cung…</li> <li>Quản lý thai nghén, siêu âm thai, phát hiện dị tật bẩm sinh</li> <li>Điều trị bệnh lý thai</li> <li>Ung bướu vú, phụ khoa (u xơ tử cung, u nang buồng trứng, các khối u vùng âm đạo…)</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Đặng Thị Mỹ Liên",
                description:
                    "<p>Bác sĩ chuyên khoa Tai Mũi Họng</p> <p>Nhiều năm kinh nghiệm trong khám vá điều trị bệnh lý Tai Mũi Họng</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/26/154303-bs-cki-dang-thi-my-lien-ck-tai-mui-hong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Đặng Thị Mỹ Liên</strong></h2> <ul> <li>Bác sĩ chuyên khoa Tai Mũi Họng</li> <li>Nhiều năm kinh nghiệm trong khám vá điều trị bệnh lý Tai Mũi Họng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Tai Mũi Họng tại Phòng khám Đa khoa SIHG (2020 - nay)</li> <li>Bác sĩ điều trị tại Bệnh viện Đa khoa Anh Minh (2016 - 2020)</li> <li>Bác sĩ điều trị tại Bệnh viện Đa khoa tỉnh Phú Yên (2005 - 2010)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa I Tai Mũi Họng, Đại học Y dược TPHCM (2016)</li> <li>Tốt nghiệp lớp Định hướng chuyên khoa Tai Mũi Họng, Bệnh viện Chợ Rẫy (2012)</li> <li>Chứng chỉ Phẫu thuật Nội Soi đường mũi mở rộng: nền sọ và hốc mắt (2019)</li> <li>Chứng chỉ Phẫu thuật Nội soi mũi xoang cơ bản, Đại học Y dược TPHCM (2016)</li> <li>Chứng chỉ Cập nhật ứng dụng Coblator trong phẫu thuật điều trị bệnh lý Tai Mũi Họng, Bệnh viện Tai Mũi Họng (2016)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị bệnh lý Tai Mũi Họng:</p> <ul> <li>Ù tai, nghe kém, điếc đột ngột</li> <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li> <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li> <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li> <li>Viêm amiđan cấp, mạn</li> <li>...</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Huỳnh Kim Phượng",
                description:
                    "<p>Giám đốc Y khoa tại Phòng khám Singapore Indochina Healthcare Group (SIHG)</p> <p>Từng công tác tại Bệnh viện Chợ Rẫy</p> <p>Giảng viên y khoa tại các trường đại học y nổi tiếng như Đại học Y Dược TPHCM, Đại học Y dược Cần Thơ,...</p> <p>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Nội Tổng quát</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/01/150511-pgstsbs-huynh-kim-phuong--ck-noi-tong-quat.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ, Bác sĩ Huỳnh Kim Phượng</strong></h2> <ul> <li>Giám đốc Y khoa tại Phòng khám Singapore Indochina Healthcare Group (SIHG)</li> <li>Từng công tác tại Bệnh viện Chợ Rẫy</li> <li>Giảng viên y khoa tại các trường đại học y nổi tiếng như Đại học Y Dược TPHCM, Đại học Y dược Cần Thơ,...</li> <li>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Nội Tổng quát</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Y khoa tại Phòng khám Singapore Indochina Healthcare Group (SIHG) (2018 - nay)</li> <li>Giảng viên tại Đại học Y dược Cần Thơ (2019 - nay)</li> <li>Giảng viên tại Đại học Y dược TPHCM (2018 - nay)</li> <li>Nguyên Trưởng khoa Chăm sóc sức khỏe theo yêu cầu, Bệnh viện Chợ Rẫy (2007 - 2018)</li> <li>Bác sĩ khám và tư vấn điều trị tại Trung tâm Chăm sóc sức khỏe theo yêu cầu, Bệnh viện Chợ Rẫy (2002 - 2007)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Được công nhận học hàm Phó Giáo sư, chuyên ngành Nội khoa (2018)</li> <li>Tốt nghiệp Tiến sĩ chuyên ngành Nội khoa, Đại học Y dược TPHCM (2008)</li> <li>Tốt nghiệp Thạc sĩ chuyên ngành Nội khoa, Đại học Y dược TPHCM (1998)</li> <li>Tốt nghiệp Bác sĩ Nội Nhi nhiễm, Đại học Y dược TPHCM (1988)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>“Khảo sát tác dụng không mong muốn độc tim của phác đồ CHOP/RCHOP trong hóa trị Lymphoma không Hodgkin”, Bệnh viện Chợ Rẫy (2017)</li> <li>“Giá trị xét nghiệm tìm máu ẩn trong phân bằng phương pháp hóa miễn dịch trong tầm soát tiền ung thư đại trực tràng”, Tạp chí Y học TPHCM (2016)</li> <li>“Giá trị của Cyfra 21.1 trong chẩn đoán ung thư phổi”, Tạp chí Y học TPHCM (2015)</li> <li>“Đặc điểm bệnh lý của người kiểm tra sức khỏe tại Khoa Chăm sóc sức khỏe theo yêu cầu Bệnh viện Chợ Rẫy”, Tạp chí Y học TPHCM (2015)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị:</strong></p> <ul> <li>Bệnh lý tim mạch</li> <li>Nội Tổng Quát</li> <li>Khám sức khỏe định kỳ</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa II Nguyễn Kim Hoa",
                description:
                    "<p>Nguyên Phó Trưởng khoa Cấp cứu chống độc và Phó Trưởng khoa Dịch vụ yêu cầu khu N, Bệnh viện Từ Dũ</p> <p>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản - Phụ khoa</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/02/26/142421-bs-ckii-nguyen-kim-hoa-ck-san-phu-khoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa II Nguyễn Kim Hoa</strong></h2> <ul> <li>Nguyên Phó Trưởng khoa Cấp cứu chống độc và Phó Trưởng khoa Dịch vụ yêu cầu khu N, Bệnh viện Từ Dũ</li> <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản - Phụ khoa</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Sản - Phụ khoa tại Phòng khám Đa khoa SIHG (2020 - nay)</li> <li>Bác sĩ cộng tác tại Bệnh viện Đại học Y dược TPHCM (2017 - 2019)</li> <li>Nguyên Phó Trưởng khoa Cấp cứu chống độc và Phó Trưởng khoa Dịch vụ yêu cầu khu N, Bệnh viện Từ Dũ(1989 - 2017)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II Sản Phụ khoa, Đại học Y dược TPHCM (2008)</li> <li>Tốt nghiệp Bác sĩ chuyên khoa I Sản Phụ khoa, Đại học Y dược TPHCM (1999)</li> <li>Tốt nghiệp Bác sĩ hệ Ngoại Sản, Đại học Y dược TPHCM (1988)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Y Học TPHCM</li> <li>Hội Phụ sản TPHCM</li> <li>Hội Nội Tiết, Sinh Sản và Vô Sinh TPHCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị các vấn đề về lĩnh vực Sản - Phụ khoa:</p> <ul> <li>Bệnh lý sản phụ khoa</li> <li>Vô sinh, hiếm muộn</li> <li>Các bệnh lây nhiễm qua đường tình dục</li> <li>Làm thủ thuật lộ tuyến</li> <li>Polyp cổ tử cung, nang naboth cổ tử cung…</li> <li>Quản lý thai nghén, siêu âm thai, phát hiện dị tật bẩm sinh</li> <li>Điều trị bệnh lý thai</li> <li>...</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa II Dương Phương Mai",
                description:
                    "<p>Nguyên Trưởng khoa Kế hoạch hóa Gia đình, Bệnh viện Từ Dũ</p> <p>Hơn 40 năm kinh nghiệm trong lĩnh vực Sản Phụ Khoa và Hỗ trợ Sinh sản</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/07/28/114003-bs-mai.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa II Dương Phương Mai</strong></h2> <ul> <li>Nguyên Trưởng khoa Kế hoạch hóa Gia đình, Bệnh viện Từ Dũ</li> <li>Hơn 40 năm kinh nghiệm trong lĩnh vực Sản Phụ Khoa và Hỗ trợ Sinh sản</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Nguyên Trưởng khoa Kế hoạch hóa Gia đình, Bệnh viện Từ Dũ</li> <li>Nguyên Phó Giám đốc chuyên môn, Bệnh viện Phụ Sản Quốc Tế TP.HCM</li> <li>Hiện là Bác sĩ Sản phụ khoa, Phòng khám Đa khoa SIHG</li> <li>Tu nghiệp nhiều năm tại Pháp và Mỹ</li> <li>Giảng viên đào tạo sau đại học cho các bác sĩ khu vực phía Nam</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hiệp hội Nội tiết sinh sản và Vô sinh TP.HCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám thai, theo dõi thai định kì</li> <li>Khám và điều trị các bệnh phụ khoa</li> <li>Tư vấn, chăm sóc sức khỏe phụ nữ tiền mãn kinh và sau mãn kinh</li> <li>Điều trị vô sinh và hiếm muộn</li> <li>Phát hiện sớm ung thư vú và ung thư cổ tử cung</li> <li>Siêu âm thai và theo dõi thai kỳ</li> <li>Khám và quản lý thai nghén</li> <li>Chẩn đoán trước sinh</li> <li>Hỗ trợ sinh sản</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> </ul>",
                clinic_id: "b42ac3fd-59e7-4fa5-b452-1a3ab33089b1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ Lê Thị Hoa",
                description:
                    "<p>40 năm kinh nghiệm trong tham vấn tâm lí về quản lý, lãnh đạo; tình yêu - hôn nhân - gia đình; giáo dục trẻ: kĩ năng sống, học tập, định hướng cuộc đời</p> <p>Tốt nghiệp tiến sĩ tâm lí học từ năm 1988 tại Viện Hàn lâm Khoa học Moscow</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/09/222148-untitled.png",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ Lê Thị Hoa</strong></h2> <ul> <li>40 năm kinh nghiệm trong tham vấn tâm lí về quản lý, lãnh đạo; tình yêu - hôn nhân - gia đình; giáo dục trẻ: kĩ năng sống, học tập, định hướng cuộc đời</li> <li>Tốt nghiệp tiến sĩ tâm lí học từ năm 1988 tại Viện Hàn lâm Khoa học Moscow</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>40 năm kinh nghiệm trong tham vấn tâm lí về quản lý, lãnh đạo; tình yêu - hôn nhân - gia đình; giáo dục trẻ: kĩ năng sống, học tập, định hướng cuộc đời</li> <li>Cố vấn chuyên môn của Viện Tâm lí SUNNYCARE</li> <li>Nguyên là Hiệu trưởng trường Cán bộ Quản lý Giáo dục và Đào tạo Trung ương 2</li> <li>Cố vấn cấp cao tại Viện Sư phạm Kỹ Thuật TP.HCM</li> <li>Giảng viên thỉnh giảng Đại học Quốc gia TP.HCM, Đại học Sư phạm Kỹ thuật, Đại học Huế, Đại học Đà Nẵng</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Chuyên gia tư vấn tâm lí cá nhân và gia đình, được chứng nhận Nhà tham vấn toàn cầu Global Provider (Hoa Kỳ)</li> <li>Tốt nghiệp tiến sĩ tâm lí học từ năm 1988 tại Viện Hàn lâm Khoa học Moscow</li> </ul> <h2><strong>Tham vấn và trị liệu</strong></h2> <p>Tham vấn tâm lí về:</p> <ul> <li>Quản lý, lãnh đạo;</li> <li>Tình yêu - hôn nhân - gia đình</li> <li>Giáo dục trẻ: kĩ năng sống, học tập, định hướng cuộc đời</li> </ul>",
                clinic_id: "4e95938d-207c-488b-89b3-a2830741ef3b",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư Vũ Gia Hiền",
                description:
                    "<p>Chuyên gia tâm lý cá nhân và gia đình</p> <p>Cố vấn ngành của Viện Tâm Lý SUNNYCARE</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/09/222710-gs-vu-gia-hien.png",
                introduction:
                    "<h2><strong>Giáo sư Vũ Gia Hiền</strong></h2> <ul> <li>Chuyên gia tâm lý cá nhân và gia đình</li> <li>Cố vấn ngành của Viện Tâm Lý SUNNYCARE</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chuyên gia tham vấn trực tiếp tại Viện Tâm Lý SUNNYCARE</li> <li>Tư vấn viên trên Đài Phát thanh truyền hình FM Bình Dương</li> </ul> <h3><strong>Tư vấn và Trị liệu</strong></h3> <ul> <li>Tham vấn tình yêu hôn nhân gia đình</li> <li>Tham vấn cặp đôi, hướng nghiệp, định hướng cuộc sống</li> <li>Tham vấn, trị liệu các vấn đề liên quan đến tâm bệnh, các rối loạn tâm lý, định hướng cuộc đời</li> </ul>",
                clinic_id: "4e95938d-207c-488b-89b3-a2830741ef3b",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Chuyên gia Tâm lý Sunny Đặng Phương",
                description:
                    "<p>Nhà huấn luyện / giám sát nghiệp vụ cấp cao - SCS ( SUNNYCARE Career Supporter)</p> <p>Có khả năng tham vấn, trị liệu bằng nhiều phương pháp: Liệu pháp liệu pháp hành vi, Trị liệu Nghệ thuật, Liệu pháp mẫn cảm chuyển động nhãn cầu và tái nhận thức, Liệu pháp thư giãn, NLP...</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/11/204154-ts-sunny-dang-phuong.png",
                introduction:
                    "<h2><strong>Tiến sĩ, Chuyên gia Tâm lý Sunny Đặng Phương</strong></h2> <ul> <li>Nhà huấn luyện / giám sát nghiệp vụ cấp cao - SCS ( SUNNYCARE Career Supporter)</li> <li>Có khả năng tham vấn, trị liệu bằng nhiều phương pháp: Liệu pháp liệu pháp hành vi, Trị liệu Nghệ thuật, Liệu pháp mẫn cảm chuyển động nhãn cầu và tái nhận thức, Liệu pháp thư giãn, NLP...</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng Phòng Tham vấn Tâm Lý PCASE - Viện Tâm Lý giáo dục Pháp Luật (2010 - 2013)</li> <li>Giám đốc điều hành Viện Tâm Lý giáo dục Pháp Luật (2013 - 2016)</li> <li>Trưởng ban Tâm Lý giáo dục của Unesco Văn Hóa Thông tin truyền thông (2013 - 2016)</li> <li>Tổng giám đốc Viện Tâm Lý SUNNYCARE (2016 - nay)</li> <li>Giám đốc dự án kỹ năng sống và phát triển bản thân cho học sinh - SỐNG THÀNH CÔNG (2016 - nay)</li> <li>Nhà huấn luyện / giám sát nghiệp vụ cấp cao - SCS ( SUNNYCARE Career Supporter) (2016 - nay)</li> <li>Diễn giả các chuyên đề giáo dục kỹ năng sống, tâm lý gia đình, nuôi dạy con cái, nghiệp vụ Tham vấn và trị liệu tâm lý, quản trị sứ mệnh cuộc đời</li> <li>Chuyên gia tâm lý hàng tuần tại Kênh Tắt Đèn Cài Then của Đài truyền hình Quốc Hội, Kênh VOV giao thông 91.com.vn; Đài Tiếng Nói Nhân Dân TPHCM</li> <li>Tham gia viết bài và biên tập cho báo vnexpress, báo Phụ nữ Việt Nam, tập san Phụ nữ Thế Giới, báo Người Hà Nội,…</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp cử nhân Tâm lý học (Canada),</li> <li>Tốt nghiệp Thạc sỹ Tâm Lý Giáo dục; Tiến sĩ Tâm Lý học Lâm sàng, tham vấn trị liệu</li> <li>Có khả năng tham vấn, trị liệu bằng nhiều phương pháp: Liệu pháp liệu pháp hành vi, Trị liệu Nghệ thuật, Liệu pháp mẫn cảm chuyển động nhãn cầu và tái nhận thức, Liệu pháp thư giãn, NLP...</li> </ul> <h2><strong>Tham vấn và trị liệu</strong></h2> <ul> <li>Tâm lý học tình yêu, hôn nhân</li> <li>Tiền hôn nhân, LGBT</li> <li>Tâm lý bệnh, tâm lý tội phạm</li> <li>Tinh thần nhân sự, tâm lý quản lý</li> <li>Đắc nhân tâm (mối quan hệ gia đình và xã hội)</li> <li>Tạo động lực, phát triển đa văn hóa</li> <li>Các chứng hoang tưởng, loạn thần, trầm cảm, rối loạn ngôn ngữ và biểu cảm trôi chảy, sốc sau sang chấn, nghiện game, sơ cứu tâm lý cho các sự cố khẩn cấp của các cá nhân, tổ chức</li> </ul>",
                clinic_id: "4e95938d-207c-488b-89b3-a2830741ef3b",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ Tâm lý Sheronova Svitlana",
                description:
                    "<p>Chuyên gia tham vấn tâm lý tại SUNNYCARE</p> <p>Chuyên gia tham vấn bằng tiếng Anh, tiếng UKraina về các vấn đề rối loạn tâm lý: trầm cảm, lo âu, khủng hoảng</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/04/11/205033-ths-sheronova-svitlana.png",
                introduction:
                    "<h2><strong>Thạc sĩ Tâm lý Sheronova Svitlana</strong></h2> <ul> <li>Chuyên gia tham vấn tâm lý tại SUNNYCARE</li> <li>Chuyên gia tham vấn bằng tiếng Anh, tiếng UKraina</li> </ul> <h2><strong>Tham vấn và trị liệu</strong></h2> <p>Chuyên gia tham vấn, trị liệu bằng tiếng Anh, tiếng UKraina</p> <ul> <li>Rối loạn lo âu</li> <li>Can thiệp khủng hoảng</li> <li>Các vấn đề trị liệu cảm xúc, nhận thức – hành vi</li> <li>Hỗ trợ cải thiện các mối quan hệ, định hướng giá trị sống, quản trị nhân sự, các chương trình phát triển doanh nghiệp</li> </ul>",
                clinic_id: "4e95938d-207c-488b-89b3-a2830741ef3b",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Phan Thanh Hải",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Da liễu, đặc biệt là trị mụn, trị nám, trị sẹo</p> <p>Hiện là Bác sĩ điều trị tại Phòng khám Da liễu Sài Gòn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/06/01/143740-bs-hai.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Phan Thanh Hải</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Da liễu, đặc biệt là trị mụn, trị nám, trị sẹo</li> <li>Hiện là Bác sĩ điều trị tại Phòng khám Da liễu Sài Gòn</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ khám và điều trị:</p> <ul> <li>Trị mụn, thâm sau mụn</li> <li>Trị nám, tàn nhang</li> <li>Trị sẹo rỗ (lõm)</li> <li>Khám bệnh lý da liễu</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị, Phòng khám Da liễu Sài Gòn (2020 - nay)</li> <li>Bác sĩ điều trị, Bệnh viện Da liễu Thanh Hóa (2014 - 2020)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược Hải Phòng (2014)</li> <li>Chứng chỉ sơ bộ Da liễu, Đại học Y Hà Nội (2018)</li> </ul>",
                clinic_id: "01844229-02e9-4350-8295-46d319668026",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Nguyễn Xuân Bình",
                description:
                    "<p>Giám đốc Nha Khoa Sunshine Dental Clinic </p> <p>Chuyên gia Tiểu phẩu Nha khoa với hơn 10 năm kinh nghiệm</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/05/18/160215-bs-nguyen-xuan-binh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Nguyễn Xuân Bình</strong></h2> <ul> <li>Giám đốc Nha Khoa Sunshine Dental Clinic </li> <li>Chuyên gia Tiểu phẩu Nha khoa với hơn 10 năm kinh nghiệm</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc tại Nha khoa Công nghệ cao Sunshine Dental Clinic (2019 - nay)</li> <li>Bác sĩ tại Nha khoa Quốc tế Việt Đức</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Theo học Thạc sĩ Răng Hàm Mặt, Trường Đại học Y Hà Nội</li> <li>Tốt nghiệp Bác sĩ Răng Hàm Mặt, Trường Đại học Y Hà Nội</li> <li>Tốt nghiệp chuyên sâu Cắm ghép Implant, Trường Đại học Y Hà Nội</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ Bác sĩ chỉnh nha chuyên sâu POS của Hoa Kỳ (2018)</li> <li>Chứng chỉ Veneer nâng cao, Hội Răng Hàm Mặt Việt Nam (2018)</li> <li>Chứng chỉ Thẩm mỹ Nha khoa toàn hàm (2018)</li> <li>Chứng chỉ SSD Module I - Smile Design khớp cắn chuyên sâu (2017)</li> </ul> <h3><strong>Thành viên các Hội khoa học, Tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hiệp hội Implant Việt Nam</li> <li>Thành viên Hiệp hội Chỉnh nha POS Hoa Kỳ</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có kinh nghiệm chuyên sâu về tiểu phẫu nha khoa: Nhổ răng, cấy ghép Implant. Ngoài ra, bác sĩ còn khám và điều trị:</p> <p><strong>Trồng răng Implant</strong></p> <ul> <li>Mất 1 răng cửa hoặc răng hàm</li> <li>Mất nhiều răng liền kề hoặc không liền kề</li> <li>Mất răng 1 hàm hoặc 2 hàm</li> </ul> <p><strong>Nhổ răng</strong></p> <ul> <li>Răng sâu, viêm tủy, viêm chóp hoặc áp - xe nghiêm trọng, răng viêm nha chu, răng lung lay, răng thừa dị tật</li> <li>Răng mọc lệch: phổ biến nhất là răng nanh hàm trên và răng khôn</li> <li>Chấn thương: trong những trường hợp gãy răng, gãy chân răng, không thể chữa trị được bằng phương pháp trám răng hay phục hình</li> </ul> <p><strong>Niềng răng</strong></p> <ul> <li>Bệnh nhân răng hô, móm, khấp khểnh, răng thưa...</li> <li>Một số trường hợp bệnh nhân thiếu răng bẩm sinh hoặc mất răng hoặc răng mọc ngầm, bác sỹ chỉ định niềng răng để khắc phục</li> <li>Bệnh nhân bị sai lệch khớp cắn: khớp cắn hở, cắn chéo, cắn sâu, cắn đối đỉnh...</li> </ul> <p><strong>Viêm nha chu</strong></p> <ul> <li>Nướu sưng đỏ, dễ chảy máu và ấn vào có thể có nước mủ chảy ra</li> <li>Cao răng bám chặt xung quanh, có màu ngà vàng</li></ul>",
                clinic_id: "aa0f209b-7abe-49bf-bdd4-3331d44e30bc",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Thu Thủy",
                description:
                    "<p>Chuyên gia giàu kinh nghiệm trong lĩnh vực chỉnh nha công nghệ cao</p> <p>Tốt nghiệp Chuyên ngành Răng Hàm Mặt, Trường Đại học Y Hà Nội</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/05/18/151103-bs-nguyen-thu-thuy-bookingcare.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Thu Thủy</strong></h2> <ul> <li>Chuyên gia giàu kinh nghiệm trong lĩnh vực chỉnh nha công nghệ cao</li> <li>Tốt nghiệp Chuyên ngành Răng Hàm Mặt, Trường Đại học Y Hà Nội</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên môn Chỉnh nha tại Sunshine Dental Clinic (2019 - nay)</li> <li>Bác sĩ tại nha khoa Parkway</li> <li>Bác sĩ tại nha khoa Nguyễn Hà</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa Răng Hàm Mặt, Trường Đại học Y Hà Nội</li> <li>Bác sĩ thường xuyên tham gia các hội thảo về răng hàm mặt và chỉnh nha từ Invisalign, 3M,...cập nhật kiến thức, kỹ thuật tiên tiến nhất trong lĩnh vực chuyên môn.</li> </ul> <h3><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></h3> <ul> <li>Chứng chỉ Bác sĩ Chỉnh nha trong suốt Invisalign, Mỹ (2018)</li> <li>Chứng chỉ SPP module II Kỹ năng phục hình thẩm mỹ (2017)</li> <li>Chứng chỉ Veneer nâng cao, Hội Răng Hàm Mặt Việt Nam (2018)</li> <li>Theo học Chương trình Thạc sĩ Răng Hàm Mặt, Trường Đại học Y Hà Nội</li> <li>Hoàn thành khóa học chỉnh nha Bioprogressive của Giáo sư Nelson Oppermann (2018)</li> <li>Chứng chỉ RMO module I chỉnh nha</li> <li>Chứng chỉ RMO module II chỉnh nha</li> <li>Chứng chỉ RMO module III chỉnh nha</li> <li>Chứng chỉ RMO module IV chỉnh nha</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có thế mạnh trong lĩnh vực chỉnh nha công nghệ cao:</p> <ul> <li>Răng khấp khểnh</li> <li>Răng chen chúc</li> <li>Răng thưa</li> <li>Răng hô</li> <li>Răng móm</li> <li>Khớp cắn ngược</li> <li>Khớp cắn sâu</li> </ul>",
                clinic_id: "aa0f209b-7abe-49bf-bdd4-3331d44e30bc",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "THS. BS Trương Khánh Mỹ Hằng",
                description:
                    "<p>Bác sĩ có hơn 15 năm kinh nghiệm về lĩnh vực khám và điều trị Nhãn khoa</p> <p>Hiện đang là Giám đốc Chuyên môn Trung tâm Mắt Quốc Tế SunShine</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/09/165020-bs-hang-sunshine1.jpg",
                introduction:
                    "<h2><strong>THS. BS Trương Khánh Mỹ Hằng</strong></h2> <ul> <li>Bác sĩ có hơn 15 năm kinh nghiệm về lĩnh vực khám và điều trị Nhãn khoa</li> <li>Hiện đang là Giám đốc Chuyên môn Trung tâm Mắt Quốc Tế SunShine</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Điều trị tật khúc xạ: Cận – viễn – loạn</li> <li>Phẫu thuật đục thủy tinh thể: Đục thủy tinh thể</li> <li>Thẩm mỹ mắt: Tạo hình mi mắt, tạo nếp mi, quặm, sụp mi,..</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li><strong>Bác sĩ, Bệnh viện Đa Khoa Vạn Hạnh (2015 - 2022)</strong></li> <li><strong>Bác sĩ, Bệnh viện Đa Khoa khu vực Thủ Đức (2015 - 2022)</strong></li> <li><strong>Giảng Viên, Đại học Y Hải Phòng (2007 - 2015)</strong></li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li><strong>Thạc sĩ, Đại học Y Hà Nội (2013)</strong></li> <li><strong>Bác sĩ, Đại Học Y Hải Phòng (2006)</strong></li> </ul>",
                clinic_id: "9455ab05-923c-4f95-9047-4188370fd775",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "THS. BS Nguyễn Lê Thảo Chương",
                description:
                    "<p>Hơn 10 năm kinh nghiệm chuyên ngành Nhãn khoa. Thế mạnh chuyên sâu về Giác mạc và khúc xạ</p> <p>Trưởng khoa khúc xạ, Trung tâm mắt Quốc tế Sunshine</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/09/171132-bs-chuong-sunsine1.jpg",
                introduction:
                    "<h2><strong>THS. BS Nguyễn Lê Thảo Chương</strong></h2> <ul> <li>Hơn 10 năm kinh nghiệm chuyên ngành Nhãn khoa. Thế mạnh chuyên sâu về Giác mạc và khúc xạ</li> <li>Trưởng khoa khúc xạ, Trung tâm mắt Quốc tế Sunshine</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Điều trị tật khúc xạ: Cận – viễn – loạn</li> <li>Phẫu thuật khúc xạ: Cận – viễn – loạn</li> <li>Khám nhi: kiểm soát cận thị trẻ em </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Mắt, Bệnh viện An Sinh (2019 - 2022)</li> <li>Giảng Viên Viện nghiên cứu và đào tạo Y Dược An Sinh (2010 - 2018)</li> <li>Giảng Viên Viện nghiên cứu và đào tạo thị giác Hải Yến (2010 - 2018) </li> <li>Giảng Viên Đại học Y Dược Cần Thơ (2010 - 2018) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li><strong>Thạc sĩ Nhãn khoa, Đại Học Y Dược TP.HCM (2013)</strong></li> <li><strong>Bác sĩ, Đại học Y khoa (2010)</strong></li> </ul>",
                clinic_id: "9455ab05-923c-4f95-9047-4188370fd775",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Ngọc Tân",
                description:
                    "<p>15 năm kinh nghiệm trong lĩnh vực Nha khoa.</p> <p>Bác sĩ công tác tại Nha khoa Sài Gòn Center</p> <p>Bác sĩ nhận khám từ 8 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/14/084835-thiet-ke-chua-co-ten-2.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Ngọc Tân</strong></h2> <ul> <li>15 năm kinh nghiệm trong lĩnh vực Nha khoa.</li> <li>Bác sĩ công tác tại Nha khoa Sài Gòn Center.</li> <li>Chuyên môn cao về Chỉnh nha, Implant, Răng thẩm mỹ.</li> <li>Bác sĩ nhận khám từ 8 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Phẫu thuật trong miệng</li> <li>Cấy ghép Implant đơn lẻ</li> <li>Cấy ghép Implant toàn hàm kỹ thuật ALL ON 4, ALL ON 4, Zygoma Implant</li> <li>Phục hình răng</li> <li>Phục hình răng sứ, mặt dán sứ Veneer, Hollywood Smile</li> <li>Nha khoa tổng quát</li> <li>Mất răng đơn lẻ</li> <li>Mất răng toàn hàm</li> <li>Viêm nha chu</li> <li>Đau nhức răng</li> <li>Nhổ răng khôn</li> <li>Bọc răng sứ</li> <li>Dán răng sứ Veneer</li> <li>Tẩy trắng răng</li> <li>Trám răng</li> <li>Điều trị tủy răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Răng Hàm Mặt, Nha khoa Sài Gòn Center.</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Răng Hàm Mặt, Đại học Y dược.</li> </ul>",
                clinic_id: "c4927328-a474-4445-8f8b-a285c033d6de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Taxi",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong lĩnh vực Nha khoa.</p> <p>Bác sĩ công tác tại Nha khoa Sài Gòn Center</p> <p>Bác sĩ nhận khám từ 8 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/14/090355-thiet-ke-chua-co-ten-3.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Taxi</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong lĩnh vực Nha khoa.</li> <li>Bác sĩ công tác tại Nha khoa Sài Gòn Center</li> <li>Chuyên môn cao về Chỉnh nha, Implant.</li> <li>Bác sĩ nhận khám từ 8 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nha khoa tổng quát</li> <li>Nha khoa phục hình</li> <li>Cấy ghép Implant</li> <li>Điều trị tủy răng </li> <li>Điều trị răng sâu </li> <li>Điều trị mất răng</li> <li>Nhổ răng khôn </li> <li>Trám răng </li> <li>Điều trị viêm nướu, viêm nha chu </li> <li>Bọc răng sứ </li> <li>Dán răng sứ veneer </li> <li>Tẩy trắng răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Răng Hàm Mặt, Nha khoa Sài Gòn Center.</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Răng Hàm Mặt, Đại học Y dược.</li> </ul> <h3><strong>Chứng chỉ trong nước và nước ngoài</strong></h3> <ul> <li>Chứng chỉ đào tạo liên tục về Cấy ghép nha khoa Sở Y tế</li> <li>Chứng chỉ Nội nha nâng cao</li> <li>Chứng chỉ Phục hình thẩm mỹ</li> <li>Tham gia các khóa học về Nghệ thuật và Chụp ảnh Nha khoa</li> </ul>",
                clinic_id: "c4927328-a474-4445-8f8b-a285c033d6de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Trần Bảo Linh",
                description:
                    "<p>Gần 10 năm kinh nghiệm trong lĩnh vực Nha khoa.</p> <p>Bác sĩ công tác tại Nha khoa Sài Gòn Center</p> <p>Bác sĩ nhận khám từ 8 tuổi trở lên</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/11/14/090907-thiet-ke-chua-co-ten-4.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Trần Bảo Linh</strong></h2> <ul> <li>Gần 10 năm kinh nghiệm trong lĩnh vực Nha khoa.</li> <li>Bác sĩ công tác tại Nha khoa Sài Gòn Center</li> <li>Chuyên môn cao về Chỉnh nha, Implant, Răng thẩm mỹ</li> <li>Bác sĩ nhận khám từ 8 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Nha khoa tổng quát </li> <li>Nha khoa phục hình </li> <li>Phẫu thuật trong miệng </li> <li>Cấy ghép Implant</li> <li>Điều trị tủy răng </li> <li>Điều trị mất răng </li> <li>Nhổ răng khôn </li> <li>Trám răng </li> <li>Điều trị viêm nướu, viêm nha chu </li> <li>Bọc răng sứ </li> <li>Dán răng sứ veneer </li> <li>Tẩy trắng răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Răng Hàm Mặt, Nha khoa Sài Gòn Center.</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa Răng Hàm Mặt, Đại học Y dược.</li> </ul> <h3><strong>Chứng chỉ trong nước và nước ngoài</strong></h3> <ul> <li>Chứng chỉ hành nghề, Sở Y tế </li> <li>Chứng chỉ cấy ghép nha khoa. </li> <li>Chứng nhận đào tạo liên tục “Quy trình thực hiện Răng Hàm Mặt trong đại dịch Covid 19 (HOSA - 2019)” </li> <li>Chứng nhận đào tại liên tục “Cập nhật điều trị trong Nha khoa hiện đại” </li> <li>Chứng chỉ “Bio Brother, Nha khoa bảo tồn vật liệu sinh học Biodentine, Hội nghị Septodont 2021” </li> <li>Chứng chỉ phẫu thuật miệng</li> </ul>",
                clinic_id: "c4927328-a474-4445-8f8b-a285c033d6de",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "PGS. TS. BSCK II. TTƯT Vũ Văn Hòe",
                description:
                    "<p>Bác sĩ có 35 năm kinh nghiệm về vực Cột sống, thần kinh, cơ xương khớp</p> <p>Phó chủ tịch hội Phẫu thuật cột sống Việt Nam </p> <p>Bác sĩ nhận khám từ 7 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/02/02/144127-bs-hoe1.jpg",
                introduction:
                    "<h2><strong>PGS. TS. BSCK II. TTƯT Vũ Văn Hòe</strong></h2> <ul> <li>Bác sĩ có 35 năm kinh nghiệm về vực Cột sống, thần kinh, cơ xương khớp</li> <li>Phó chủ tịch hội Phẫu thuật cột sống Việt Nam</li> <li>Bác sĩ nhận khám từ 7 tuổi trở lên</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Các bệnh lý về cột sống</li> <li>Các bệnh lý liên quan đến thần kinh</li> <li>Các bệnh lý liên quan đến cơ xương khớp</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bộ môn Khoa Phẫu thuật thần kinh, Bệnh viện Quân y 103, Học viện Quân Y</li> <li>Nguyên Chủ nhiệm Bộ môn kiêm Chủ nhiệm Khoa</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa cấp II, Học viện Quân y (2010 - 2011)</li> <li>Tiến sỹ Y khoa, Hệ chính qui, Học viện Quân y (1996 - 2000)</li> <li>Cao học Phẫu thuật thần kinh, Hệ chính qui, Học viện Quân y (1993 - 1995) </li> <li>Bác sĩ Đa khoa, Hệ chính qui, Học viện Quân y (1982 - 1988)</li> <li>Đào tạo về vi phẫu thần kinh tại Fujita Health University Hospital, Nhật Bản. Tham dự nhiều khóa tập huấn kỹ thuật và các hội nghị quốc tế chuyên ngành tại các nước Mỹ, Pháp, Đức, Áo, Hàn Quốc, Singapore, Thái Lan, Philipine,…</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Phó chủ tịch hội Phẫu thuật Cột sống Việt Nam</li> <li>Ủy viên Ban chấp hành hội Phẫu thuật thần kinh Việt Nam</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Được tặng danh hiệu Thầy thuốc ưu tú (02/2014)</li> <li>Được công nhận đạt chuẩn chức danh Phó giáo sư (10/2011)</li> </ul>",
                clinic_id: "f60896ea-aadc-4f5d-ad96-b341f288e856",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ Đinh Ngọc Sơn",
                description:
                    "<p>Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống </p> <p>Hiện là Trưởng khoa Phẫu thuật Cột sống, Bệnh viện Việt Đức </p> <p>Bác sĩ nhận khám từ 7 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/06/07/112614pho-giao-su-tien-si-dinh-ngoc-son.jpg",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ Đinh Ngọc Sơn</strong></h2> <ul> <li>Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống</li> <li>Hiện là Trưởng khoa Phẫu thuật Cột sống, Bệnh viện Việt Đức</li> <li>Bác sĩ nhận khám từ 7 tuổi trở lên </li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh lý cột sống:</strong></p> <ul> <li>Thoái hóa cột sống</li> <li>Thoát vị đĩa đệm</li> <li>Thay đổi đĩa đệm theo tuổi</li> <li>Thoái hóa đĩa đệm</li> <li>Rách vòm sợi</li> <li>Lồi đĩa đệm</li> <li>Thoái hóa mỏm khớp</li> <li>Hẹp ống sống</li> <li>Trượt đốt sống</li> <li>Cong vẹo cột sống</li> <li>Gai cột sống</li> <li>Đau cổ vai gáy, tê bì 2 cánh tay</li> <li>Đau thắt lưng</li> </ul> <p><strong>Chấn thương, chỉnh hình</strong></p> <ul> <li>Chấn thương cột sống cổ</li> <li>Chấn thương cột sống ngực - thắt lưng</li> <li>Chấn thương cột sống vùng cùng cụt</li> <li>Tổn thương tủy sống mà không có bất thường XQ</li> <li>Gãy cột sống nhiều tầng</li> <li>Tổn thương xuyên thấu cột sống</li> <li>Chỉnh hình cột sống (vẹo cột sống, gù cột sống)</li> <li>Nội soi cột sống cổ, cột sống thắt lưng điều trị thoát vị đĩa đệm</li> <li>Phẫu thuật cột sống ít xâm lấn (MIS, XLIP, các can thiệp tối thiểu như tạo hình nhân nhày bằng song cao tần…)</li> <li>Bơm xi-măng vào thân đốt sống</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bảo vệ luận án Tiến sỹ, Đại học Y Hà Nội (2014) </li> <li>Tốt nghiệp Bác sĩ nội trú, Đại học Y Hà Nội (2003)</li> <li>Tốt nghiệp Bác sĩ, Đại học Y Hà Nội (1998)</li> </ul>",
                clinic_id: "f60896ea-aadc-4f5d-ad96-b341f288e856",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó giáo sư, Tiến sĩ, Bác sĩ Nguyễn Xuân Thành",
                description:
                    "<p>Là chuyên gia đầu ngành về gan mật</p> <p>Được phong tăng Danh hiệu thầy thuốc nhân dân</p> <p>Tham gia giảng dạy về bệnh lý gan mật tại Bệnh viện Quân Y 103</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2017/12/23/162751bac-si-nguyen-xuan-thanh.jpg",
                introduction:
                    "<h2><strong>Phó giáo sư, Tiến sĩ Nguyễn Xuân Thành</strong></h2> <ul> <li>Chuyên gia đầu ngành về bệnh lý Gan mật</li> <li>Bác sỹ điều trị, tham gia giảng dạy về bệnh lý gan mật tại Bệnh viện Quân y 103 và Bệnh viện Trung ương Quân đội 108.</li> <li>Thực tập và nghiên cứu tại khoa Nội tiêu hóa Đại học Y Shimane Nhật Bản dưới sự dẫn dắt của Giáo sư Shimada – Chuyên gia hàng đầu tại Nhật Bản về chẩn đoán và điều trị bệnh lý gan mật.</li> <li>PGS.TS Nguyễn Xuân Thành đã dành nhiều thời gian nghiên cứu và trực tiếp điều trị thành công các bệnh lý gan mật, đặc biệt là viêm gan virut. Rất nhiều nghiên cứu của Phó Giáo sư về gan được đăng trên tạp chí nước ngoài, được bạn bè Quốc tế công nhận.</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám và điều trị các bệnh lý về gan</strong></p> <ul> <li>Khám và điều trị bệnh viêm gan</li> <li>Khám và điều trị bệnh viêm gan B</li> <li>Khám và điều trị bệnh viêm gan C</li> <li>Khám và điều trị bệnh viêm gan A</li> <li>Khám và điều trị bệnh viêm gan do rượu</li> <li>Khám và điều trị bệnh viêm gan tự miễn</li> <li>Khám và điều trị bệnh xơ gan</li> <li>Khám và điều trị bệnh xơ gan do rượu</li> <li>Khám và điều trị bệnh xơ gan không do rượu</li> <li>Khám và điều trị bệnh xơ gan đường mật</li> <li>Khám và điều trị bệnh gan nhiễm mỡ</li> <li>Khám và điều trị áp xe gan</li> <li>Khám và điều trị các bệnh lý về gan khác như: sán lá gan, nóng gan, men gan cao.</li> </ul> <p><strong>Khám và điều trị các bệnh lý về mật</strong></p> <ul> <li>Khám và điều trị sỏi mật</li> <li>Khám và điều trị sỏi túi mật</li> <li>Khám và điều trị sỏi ống mật chủ</li> <li>Khám và điều trị sỏi đường mật</li> <li>Khám và điều trị viêm đường mật</li> <li>Khám và điều trị viêm túi mật</li> <li>Khám và điều trị polyp túi mật</li> <li>Khám và điều trị các bệnh lý về gan khác như: giun chui ống mật, bùn túi mật.</li> </ul>",
                clinic_id: "f60896ea-aadc-4f5d-ad96-b341f288e856",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó giáo sư, Tiến Sĩ, Bác sĩ CK II Nguyễn Văn Quýnh",
                description:
                    "<p>Nguyên Phó Chủ nhiệm Bộ môn Nội tim mạch, Bệnh viện Trung ương Quân đội 108</p> <p>Chuyên gia hàng đầu về nội tim mạch với hơn 30 năm kinh nghiệm</p> <p>Bác sĩ khám cho người bệnh từ 18 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/05/05/104945-nguyen-van-quynh-pgs.jpg",
                introduction:
                    "<h2><strong>Phó giáo sư, Tiến Sĩ, Thầy thuốc Nhân dân Nguyễn Văn Quýnh</strong></h2> <ul> <li>Chuyên gia hàng đầu về nội tim mạch với hơn 30 năm kinh nghiệm</li> <li>Nguyên Chủ nhiệm khoa Nội cán bộ A1– Bệnh viện Trung ương Quân đội 108</li> <li>Nguyên Phó Chủ nhiệm Bộ môn Nội tim mạch Bệnh viện Trung ương Quân đội 108</li> <li>Bác sĩ khám cho người bệnh từ 18 tuổi trở lên</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh lý tim mạch</strong></p> <ul> <li><p>Nhịp tim nhanh và huyết áp thấp </p> </li> <li><p>Khám, tư vấn, điều trị chuyên sâu các bệnh về tim mạch</p> </li> <li>Các bệnh lý nội tim mạch</li> <li>Rối loạn nhịp tim: Nhịp tim nhanh, nhịp tim chậm, nhịp tim thay đổi thất thường </li> <li>Nhồi máu cơ tim</li> <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch</li> <li>Tư vấn sử dụng thuốc chống đông máu</li> </ul> <p><strong>Bệnh mạch vành</strong></p> <ul> <li>Bệnh lý mạch vành</li> <li>Bệnh hẹp mạch vành</li> <li>Thiểu năng mạch vành</li> <li>Xơ vữa động mạch</li> <li><p>Điều trị bệnh mạch vành</p> <p><em>Các triệu chứng bệnh mạch vành:</em></p> </li> <li><p>Cơn đau thắt ngực là một trong các dấu hiệu hay gặp nhất</p> </li> <li>Đau giữa ngực, sau xương ức hay vùng trước tim</li> <li>Đau có thể lan lên cổ, ra hàm, ra cánh tay, thường gặp nhất là lan ra bên trái, đôi khi đau ở vùng thượng vị</li> <li>Cảm giác bó chặt, thắt nghẹt, đè ép</li> <li>Đôi khi chỉ là cảm giác khó chịu trong ngực</li> <li>Có trường hợp lan ra sau lưng, vùng cột sống</li> </ul> <p><strong>Rối loạn mỡ máu</strong></p> <ul> <li>Bệnh mỡ máu cao</li> <li>Tư vấn, điều trị bệnh mỡ máu</li> <li>Rối loạn mỡ máu</li> <li>Rối loạn chuyển hóa</li> <li>Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li> </ul> <p><strong>Huyết áp</strong></p> <ul> <li>Bệnh cao huyết áp</li> <li>Bệnh huyết áp thấp</li> <li>Tư vấn điều trị bệnh huyết áp</li> <li>Tai biến mạch máu não do cao huyết áp</li> </ul>",
                clinic_id: "f60896ea-aadc-4f5d-ad96-b341f288e856",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc Ưu tú, Bác sĩ Chuyên khoa II Phạm Huy Huyên",
                description:
                    "<p>Hơn 30 năm kinh nghiệm công tác trong lĩnh vực Thận tiết niệu</p> <p>Nguyên Trưởng khoa Phẫu thuật Tiết niệu, Bệnh viện Xanh Pôn</p> <p>Hiện là Phó Giám đốc, Phụ trách Ngoại thận tiết niệu tại Hệ thống Y tế Thu Cúc TCI</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/07/18/160559-161139-bs-huyen.png",
                introduction:
                    "<h2><strong>Thầy thuốc Ưu tú, Bác sĩ Chuyên khoa II Phạm Huy Huyên</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm công tác trong lĩnh vực Thận tiết niệu</li> <li>Nguyên Trưởng khoa Phẫu thuật Tiết niệu, Bệnh viện Xanh Pôn</li> <li>Hiện là Phó Giám đốc, Phụ trách Ngoại thận tiết niệu tại Hệ thống Y tế Thu Cúc TCI</li> </ul> <h2><strong>Khám và điều trị:</strong></h2> <ul> <li>Suy thận cấp</li> <li>Suy thận mạn do các nguyên nhân</li> <li>Các bệnh lý bệnh cầu thận</li> <li>Bệnh ống kẽ thận</li> <li>Sỏi thận - tiết niệu</li> <li>Hội chứng thận hư do viêm cầu thận</li> <li>Viêm thận Lupus</li> <li>Viêm bàng quang, nhiễm khuẩn tiết niệu cấp/mạn tính</li> <li>Cùng nhiều bệnh lý khác</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Phó Giám đốc, Phụ trách Ngoại thận tiết niệu tại Hệ thống Y tế Thu Cúc TCI</li> <li>Nguyên Trưởng khoa Phẫu thuật Tiết niệu, Bệnh viện Đa khoa Xanh Pôn</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Ủy viên ban chấp hành hội tiết niệu toàn quốc</li> <li>Phó chủ tịch hội tiết niệu phía Bắc</li> <li>Tổng thư ký hội thận học tiết niệu Hà Nội</li> </ul>",
                clinic_id: "f60896ea-aadc-4f5d-ad96-b341f288e856",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Ngô Thị Mai Xuân",
                description:
                    "<p>Nguyên Trưởng khoa Khám bệnh, Bệnh viện Thanh Nhàn</p> <p>Thành viên Hội Nội tiết Việt Nam </p> <p>Bác sĩ nhận khám cho người bệnh từ 18 tuổi trở lên </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/08/01/094419bac-si-chuyen-khoa-ii-ngo-thi-thanh-xuan.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Ngô Thị Mai Xuân</strong></h2> <ul> <li>Nguyên Trưởng khoa Khám bệnh, Bệnh viện Thanh Nhàn</li> <li>Thành viên Hội Nội - Nội tiết Việt Nam</li> <li>Bác sĩ nhận khám cho người bệnh từ 18 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ tại Phòng khám chuyên gia, Bệnh viện Thanh Nhàn (2015 - nay)</li> <li>Trưởng khoa Khám bệnh, Bệnh viện Thanh Nhàn (tháng 6/2008)</li> <li>Phó khoa Khám bệnh, Bệnh viện Thanh Nhàn (1997 - 2015)</li> <li>Bác sĩ tại khoa Nội cán bộ, Bệnh viện Thanh Nhàn (1985 - 1987)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học bác sĩ chuyên khoa II chuyên ngành Nội - Nội tiết, trường Đại học Y Hà Nội (2005 - 2007)</li> <li>Học bác sĩ chuyên khoa I chuyên ngành Nội, trường Đại học Y Hà Nội (1995 - 1998)</li> <li>Học bác sĩ Đa khoa, trường Đại học Y Hà Nội (1978 - 1984)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Đái tháo đường</li> <li>Basedow</li> <li>Suy giáp</li> <li>Viêm tuyến giáp</li> <li>Nhân tuyến giáp</li> <li>Suy tuyến yên </li> <li>U tuyến yên </li> <li>Viêm tuyến giáp</li> <li>Suy thượng thận</li> <li>U thượng thận</li> <li>Hội chứng Cushing </li> <li>Rối loạn Lipid máu</li> </ul>",
                clinic_id: "de5749de-b425-4b59-94bd-39dadb80530e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Hồ Văn Thành",
                description:
                    "<p>Có nhiều kinh nghiệm trong khám và điều trị lĩnh vực Sản phụ khoa</p> <p>Hiện đang công tác tại Bệnh viện Đa khoa Tâm Trí Sài Gòn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/08/115109-bsi-van-thanh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Hồ Văn Thành</strong></h2> <ul> <li>Có nhiều kinh nghiệm trong khám và điều trị lĩnh vực Sản phụ khoa</li> <li>Được đào tạo nhiều chứng chỉ Sản phụ khoa tại Bệnh viện Từ Dũ</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Khám thai và quản lí thai nghén</li> <li>Khám và điều trị các bệnh lý phụ khoa</li> <li>Rong kinh - rong huyết</li> <li>Các rối loạn tiền mãn kinh và mãn kinh</li> <li>Các bệnh lý phụ khoa như viêm nhiễm, lộ tuyến cổ tử cung, nấm âm đạo,...</li> <li>Cấy và rút que tránh thai Implanon</li> <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li> <li>Khám và tư vấn sức khỏe tiền hôn nhân</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Khoa Sản phụ khoa - Bệnh viện Đa khoa Tâm Trí Sài Gòn (2022 - Nay)</li> <li>Khoa Sản phụ khoa - Bệnh viện Đa khoa Xuyên Á Củ Chi (2018 - 2022)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Chuyên khoa I Sản phụ khoa - Đại học Y dược TP. HCM (2020)</li> <li>Tốt nghiệp Bác sĩ Đa khoa - Đại học Y dược TP. HCM (2016)</li> </ul> <h3><strong>Chứng chỉ đào tạo trong và ngoài nước</strong></h3> <ul> <li>Định hướng chuyên khoa Phụ sản, Bệnh viện Từ Dũ</li> <li>Phẫu thuật nội soi phụ khoa, Bệnh viện Từ Dũ</li> <li>Siêu âm Sản phụ khoa, Bệnh viện Từ Dũ</li> <li>Soi cổ tử cung, Đại học Y dược TP. HCM</li> <li>Bơm tinh trùng vào buồng tử cung, Bệnh viện Từ Dũ</li> <li>Cấy và rút que tránh thai Implanon, Bệnh viện Từ Dũ</li> </ul>",
                clinic_id: "a52a1d58-7685-430a-a706-94dbf85d89ca",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa II Cao Khả Anh",
                description:
                    "<p>Hơn 40 năm kinh nghiệm khám và điều trị Ngoại tổng quát, chuyên sâu Ngoại Tiêu hóa</p> <p>Từng là Phó giám đốc chuyên môn Bệnh viện Đa khoa Ninh Hòa - Khánh Hòa, Bệnh viện Tư Nhân Bình Dương</p> <p>Hiện là Trưởng khoa Ngoại - Bệnh viện Đa khoa Tâm Trí Sài Gòn</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/08/162409-bsi-kha-anh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa II Cao Khả Anh</strong></h2> <ul> <li>Hơn 40 năm kinh nghiệm khám và điều trị Ngoại tổng quát, chuyên sâu Ngoại Tiêu hóa</li> <li>Từng là Phó giám đốc chuyên môn Bệnh viện Đa khoa Ninh Hòa - Khánh Hòa, Bệnh viện Tư Nhân Bình Dương</li> <li>Hiện là Trưởng khoa Ngoại - Bệnh viện Đa khoa Tâm Trí Sài Gòn</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh trĩ</li> <li>Nứt kẽ hậu môn</li> <li>Rò hậu môn</li> <li>Bệnh áp xe hậu môn</li> <li>U nhú hậu môm</li> <li>Polyp hậu môn</li> <li>U sùi mào gà hậu môn</li> <li>Bệnh trĩ tái phát</li> <li>Hẹp hậu môn </li> <li>Ngứa hậu môn</li> <li>Đau hậu môn vô căn</li> <li>Mất tự chủ hậu môn</li> <li>Rò trực tràng âm đạo</li> <li>Sa thành trước trực tràng</li> <li>Sa trực tràng</li> <li>Đứt cơ thắt hậu môn</li> <li>Viêm mủ đa nang lông</li> <li>Viêm nang lông</li> <li>Crohn hậu môn</li> <li>Táo bón</li> <li>Đại tiện khó, không hết phân</li> <li>Polyp đại tràng</li> <li>Polyp dạ dày</li> <li>Viêm đại tràng</li> <li>Viêm trực tràng thể xuất huyết</li> <li>Viêm loét trực tràng </li> <li>Viêm loét dạ dày – tá tràng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng Khoa Ngoại - Bệnh viện Đa khoa Tâm Trí Sài Gòn (2019 - Nay)</li> <li>Phó Giám Đốc chuyên môn - Bệnh viện Tư Nhân Bình Dương (2018 - 2019)</li> <li>Phó Giám Đốc chuyên môn - Bệnh viện Đa khoa Ninh Hòa, Khánh Hòa (1993 - 2016)</li> <li>Bác sĩ điều trị chuyên khoa ngoại - Bệnh viện Tỉnh Khánh Hòa (1990 - 1992)</li> <li>Bác sĩ điều trị chuyên khoa ngoại - Bệnh viện Tỉnh Đắk Lắk (1981 - 1990)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II - Đại Học Y khoa Huế</li> <li>Bác sĩ Chuyên khoa I - Đại Học Y khoa Huế</li> <li>Bác sĩ Ngoại – Sản hệ chính quy - Đại Học Y khoa Huế (1981)</li> </ul>",
                clinic_id: "a52a1d58-7685-430a-a706-94dbf85d89ca",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Huy Hoàng",
                description:
                    "<p>8 năm kinh nghiệm chuyên sâu về khám, tư vấn, điều trị răng trẻ em </p> <p>Chuyên môn cao về Chỉnh nha, Implant, Răng thẩm mỹ</p> <p>Được đào tạo chỉnh nha tại Đại học Cologne – Đức</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/01/03/1251061703891378801220468860884537596359072224912.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Huy Hoàng</strong></h2> <ul> <li>Tốt nghiệp Đại học Y Hà Nội năm 2011</li> <li>8 năm kinh nghiệm chuyên sâu về khám, tư vấn, điều trị răng trẻ em </li> <li>Đào tạo chỉnh nha tại Đại học Cologne – Đức</li> <li>Chuyên môn cao về Chỉnh nha, implant, răng thẩm mỹ</li> <li>Bác sĩ chuyên sâu về chỉnh nha Invisalign Quốc tế</li> <li>Thành viên tổ chức Operation Smile</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Hà Nội chuyên khoa Răng Hàm Mặt (8/2005 - 06/2011)</li> <li>Hoàn thành khoá học về chỉnh nha cơ bản (4/2012 - 10/2012)</li> <li>Học tập và trao đổi lên kế hoạch điều trị để nâng cao về chỉnh nha cùng với GS.BS. Braumann, Giám đốc trung tâm chỉnh Nha Đại học Cologne, Thành phố Koln, Đức (8/2016 - 11/2016 )</li> <li>Được đào tạo bài bản từ lý thuyết đến thực hành để làm vener sứ răng tại Seadent và Bệnh viện Răng hàm mặt Thành phó Hồ Chí Minh (13/4/2017 - 13/4/2017)</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Khoa Phẫu thuật tạo hình hàm mặt tại Bệnh viện Hữu Nghị Việt Nam - Cu Ba (8/2011 - 2018)</li> <li>Bác sĩ Hoàng trực tiếp tham gia gần 1,000 ca mổ nhân đạo về khe hở môi cho trẻ em của tổ chức Operation Smile (Phẫu thuật nụ cười) phối hợp Bệnh viện Việt Nam - Cu Ba tổ chức.</li> <li>Bác sĩ trực tiếp tiến hành: Nhổ các răng 8, các răng ngầm khó trong xương, phẫu thuật bệnh lý và chấn thương vùng hàm mặt.</li> <li>Bác sĩ tham gia và trực tiếp làm phẫu thuật cắt đẩy xương hàm.</li> <li>Bác sĩ Hoàng từng có kinh nghiệm khám, điều trị 5 năm tại Nha khoa Hương Sơn & Nha khoa Imed (10/2011 - 08/2016)</li> <li>Bác sĩ sáng lập và phụ trách chuyên môn tại Phòng khám Nha khoa Trẻ.</li> </ul> <h3><strong>Tham gia các Hội khoa học, tổ chức</strong></h3> <ul> <li>Là tình nguyện viên của tổ chức Operation Smile, tham gia mổ nhân đạo cho các bé hở môi vòm của tốt chức (01/2012 - nay)</li> <li>Tham dự chương trình hội thảo của Operation Smile tại Mỹ về các vấn đề môi vòm đặc biệt chỉnh nha cho bệnh nhân bị khe hở môi vòm (5/2014)</li> <li>Là thành viên Hội Implant Việt Nam</li> <li>Là thành viên Hiệp hội Chỉnh nha Việt Nam</li> </ul>",
                clinic_id: "859f2ff0-4a3d-4aee-8586-6246ee948fb1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Thị Hồng",
                description:
                    "<p>Nhiều năm kinh nghiệm trong khám và điều trị khoa Da liễu</p> <p>Bác sĩ từng được đào tạo liên tục và thực hành khám tại Bệnh viện Da liễu Hồ Chí Minh</p> <p>Bác sĩ nhận khám mọi độ tuổi</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/08/094853-bs-hong.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Thị Hồng</strong></h2> <ul> <li>Nhiều năm kinh nghiệm trong khám và điều trị khoa Da liễu</li> <li>Bác sĩ từng được đào tạo liên tục và thực hành khám tại Bệnh viện Da liễu Hồ Chí Minh</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Khám và Điều trị chuyên sâu các bệnh lý da liễu</strong></p> <ul> <li>Mụn trứng cá, nám, sạm da, viêm da cơ địa, viêm da dị ứng, u mềm lây, herpes, zona, thủy đậu…</li> </ul> <p><strong>Thực hiện kỹ thuật laser thẩm mỹ</strong></p> <ul> <li>Tẩy nốt ruồi, tàng nhang, mụn cóc, u tuyến mồ hôi, u tuyến bã…</li> </ul> <p><strong>Thẩm mỹ nội khoa, làm đẹp không xâm lấn</strong></p> <ul> <li>Trị mụn, trị sẹo lỏm, sẹo lồi, sẹo xấu</li> <li>Trẻ hóa gương mặt, điều trị gương mặt chảy sệ, trẻ hóa đôi bàn tay</li> <li>Xóa nhăn trán, đuôi mắt, gian mày, thon gọn khuôn mặt</li> <li>Làm đầy thái dương, rảnh cười, xóa thâm mắt</li> <li>Tạo cằm V-line, sống mũi S-line, mắt 2 mí, má Baby, tai tài lộc, tạo môi căng mọng</li> <li>Tan mỡ nọng cằm</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ chuyên khoa Da liễu tại Phòng khám Da Liễu Táo Đỏ (06/2021- Nay)</li> <li>Bác sĩ chuyên khoa Da liễu tại Aqua Clinic (01/2021)</li> <li>Bác sĩ chuyên khoa Da liễu Thẩm mỹ viện Pamas Beauty (08/2020)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ thực hành khám và chữa bệnh da liễu 18 tháng Bệnh viên Da Liễu Hồ Chí Minh (11/2019 - 06/2021)</li> <li>Bác sĩ định hướng chuyên khoa Da Liễu Trường Đại học Y Dược Hà Nội (10/2018 - 04/2019)</li> <li>Bác sĩ Đa khoa Trường Đại học Y Dược Hải Phòng (09/2012 - 09/2018)</li> </ul> <h3><strong>Chứng chỉ trong và ngoài nước</strong></h3> <ul> <li>Đào tạo liên tục Thủ thuật cơ bản và tiểu phẫu da Bệnh viên Da Liễu Hồ Chí Minh (06/2019 - 09/2019)</li> <li>Đào tạo liên tục Ứng dụng laser và ánh sáng trong da liễu Bệnh viên Da Liễu Hồ Chí Minh (05/2019 - 08/2019)</li> <li>Định hướng chuyên khoa Da Liễu Trường Đại học Y Dược Hà Nội (10/2018 - 04/2019)</li> </ul>",
                clinic_id: "63d6fca7-136d-4ec4-8fcc-185a3d06f611",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "BSCKI  Dương Huy Khương",
                description:
                    "<p>Nhiều năm kinh nghiệm khám và điều trị các vấn đề Da liễu và Nội tổng quát </p> <p>Đào tạo, thực hành cập nhật chuyên môn liên tục tại các Bệnh viện hàng đầu trên cả nước</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2024/03/04/143901-anh-man-hinh-2024-03-04-luc-143852.png",
                introduction:
                    "<h2><strong>BSCKI Dương Huy Khương</strong></h2> <ul> <li>Nhiều năm kinh nghiệm khám và Điều trị các vấn đề Da liễu và Nội tổng quát</li> <li>Bác sĩ từng công tác tại Bệnh viện Nguyễn Tri Phương TP. HCM</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh lý về Da liễu: Mụn trứng cá, Rụng tóc, Mề đay, Viêm da cơ địa, Viêm da dị ứng, Thủy đậu , Herpes, Zona, Nấm, Bệnh lí lây truyền qua đường tình dục (STDs) ….. </li> <li>Thẩm mỹ Nội khoa không xâm lấn: </li> <li>Xóa U tuyến mồ hôi, ban vàng, nốt ruồi, mụn cóc, nám, tàn nhàng, trị sẹo… </li> <li>Trẻ hóa gương mặt, xóa nhăn, nâng cơ chống chảy xệ… </li> <li>Tạo hình nội khoa: cân chỉnh gương mặt, thon gọn hàm, làm đầy thái dương, rãnh cười, tạo hình môi, xóa mỡ nọng cằm,…. </li> <li>Trẻ hóa cổ, bàn tay,…. </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Đa khoa, Đại học Y dược TP. HCM</li> <li>Bác sĩ Chuyên khoa I Da liễu, Đại học Y dược TP. HCM</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phòng khám Chuyên khoa Da liễu Táo đỏ TP. HCM </li> <li>Bệnh viện Đa khoa Tâm Trí Sài gòn </li> <li>Bệnh viện Nguyễn Tri Phương, Bệnh viện Đa khoa Hạng I Thành phố Hồ Chí Minh</li> </ul> <h3><strong>Chứng chỉ trong và ngoài nước</strong></h3> <ul> <li>Tiêm chất làm đầy (Filler) trong thẩm mỹ da, Đại học Y dược Thành phố Hồ Chí Minh</li> <li>LASER, ánh sáng, sóng cao tầng và siêu âm hội tụ trong Da liễu và Thẩm mỹ da, Đại học Y dược Thành phố Hồ Chí Minh</li> <li>Căng chỉ cơ bản trong Thẩm mỹ da, Đại học Y dược Thành phố Hồ Chí Minh</li> <li>Sư phạm Y học cơ bản, Đại học Y Hà Nội </li> <li><p>Các chứng chỉ đào tạo liên tục trong Da liễu Thẩm mỹ… </p> </li> <li><p>Kinh nghiệm Hồi sức cấp cứu: Sốc phản vệ, Ngộ độc thuốc tê, cấp cứu cơ bản nâng cao.... </p> </li> <li><p>Kinh nghiệm xử trí biến chứng, tai biến trong Thẩm mỹ Nội và Ngoại khoa</p> </li> </ul>",
                clinic_id: "63d6fca7-136d-4ec4-8fcc-185a3d06f611",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Chuyên khoa I Bùi Văn Đức",
                description:
                    "<p>Nguyên Phó Chủ nhiệm bộ môn Da Liễu, Đại Học Y Dược TP.HCM</p> <p>Giảng viên Trường Đại học Y Dược TP.HCM</p> <p>Nhiều năm công tác tại khoa Da liễu, Bệnh viện Đại học Y Dược TP.HCM</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2021/01/14/153812-bs-bui-van-duc.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ chuyên khoa I Bùi Văn Đức</strong></h2> <ul> <li>Nguyên Phó Chủ nhiệm bộ môn Da Liễu, Đại Học Y Dược TP.HCM</li> <li>Giảng viên Trường Đại học Y Dược TP.HCM</li> <li>Nhiều năm công tác tại khoa Da liễu, Bệnh viện Đại học Y Dược TP.HCM</li> <li>Lĩnh vực chuyên sâu: Thẩm mỹ da, bệnh lý da liễu</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bác sĩ khám và điều trị:</strong></p> <ul> <li>Mụn trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen</li> <li>Nám, sạm da: nám, sạm da mặt</li> <li>Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn</li> <li>Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa</li> <li>Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn</li> <li>Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa</li> <li>Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi</li> <li>Zona: mang mụn nước, 1 bên người, đau nhức</li> <li>Da nhờn, lỗ chân lông to</li> <li>Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân</li> <li>Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân</li> <li>Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng</li> <li>Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần</li> <li>Da đồi mồi: đốm nâu</li> <li>Pemphigus: bóng nước thân mình, niêm mạc</li> <li>Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp</li> <li>Xơ cứng bì: da cứng, không đều màu</li> <li>Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da</li> <li>Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang</li> <li>Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn</li> <li>Nấm móng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ điều trị - Phòng khám Đa khoa Quốc tế Sài Gòn (2014 - Nay)</li> <li>Hiện là Bác sĩ chuyên khoa Da liễu, Phòng khám Da liễu Táo Đỏ</li> <li>Từng là Bác sĩ chuyên khoa Da liễu, Bệnh viện Đại học Y Dược TP.HCM</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ Chuyên khoa I, chuyên ngành Da liễu, Đại học Y Dược TP.HCM</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Dược TP.HCM</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên chi hội Da liễu Hồ Chí Minh</li> <li>Hội viên Hội Da liễu Việt Nam</li> </ul>",
                clinic_id: "63d6fca7-136d-4ec4-8fcc-185a3d06f611",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa I Vũ Thị Lan",
                description:
                    "<p>Gần 30 năm kinh nghiệm trong điều trị các bệnh lý về Mắt</p> <p>Hiện đang công tác tại khoa Mắt, Bệnh viện Hữu nghị Việt Xô</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/05/06/174553hinh-chup-tu-2019-05-06-17-39-49.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa I Vũ Thị Lan</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm trong điều trị các bệnh lý về Mắt</li> <li>Hiện đang công tác tại khoa Mắt, Bệnh viện Hữu nghị Việt Xô</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Chấn thương</strong></p> <ul> <li>Chấn thương mắt</li> <li>Chấn thương mi</li> <li>Chấn thương lệ đạo</li> <li>Dị vật kết giác mạc</li> <li>Dị vật nội nhãn</li> </ul> <p><strong>Dịch kính võng mạc</strong></p> <ul> <li>Bong võng mạc</li> <li>Thoái hóa võng mạc</li> <li>Thoái hóa dịch kính võng mạc</li> <li>Bệnh võng mạc đái tháo đường</li> <li>Bệnh thoái hóa hoàng điểm tuổi già</li> <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li> <li>Viêm màng bồ đào</li> <li>Viêm nội nhãn</li> <li>Xuất huyết dịch kính</li> </ul> <p><strong>Các bệnh lí về mắt</strong></p> <ul> <li>Mắt hột</li> <li>Khám, điều trị bệnh thiên đầu thống (glocom)</li> </ul> <p><strong>Tật khúc xạ</strong></p> <ul> <li>Cận thị</li> <li>Nhược thị</li> <li>Viễn thị</li> <li>Lão thị</li> <li>Loạn thị</li> </ul> <p><strong>Các rối loạn về mắt</strong></p> <ul> <li>Hội chứng khô mắt</li> <li>Rối loạn ở hốc mắt</li> <li>Rối loạn tuyến lệ</li> <li>Tăng nhãn áp</li> </ul> <p><strong>Các bệnh lí khác về mắt</strong></p> <ul> <li>Quặm mi</li> <li>Sa mí mắt</li> <li>Viêm kết mạc</li> <li>Lác mắt</li> <li>Mộng thịt</li> <li>Song thị</li> <li>Viêm giác mạc</li> <li>Viêm mi mắt</li> <li>Bong võng mạc</li> <li>Rách võng mạc</li> <li>Đục thủy tinh thể</li> </ul>",
                clinic_id: "b5ac7aca-eb6a-4a79-b0ad-9eaabe1e85b4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Hoàng Việt Nga",
                description:
                    "<p>Hơn 30 năm kinh nghiệm trong điều trị các bệnh lí về mắt </p> <p>Nguyên Phó trưởng khoa Chấn thương, Bệnh Viện Mắt Trung ương</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/03/23/165825bac-si-nga.png",
                introduction:
                    "<h2><strong>Thạc sĩ, bác sĩ Hoàng Việt Nga</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm trong điều trị các bệnh lí về mắt </li> <li>Nguyên Phó trưởng khoa Chấn thương, Bệnh Viện Mắt Trung ương</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Chấn thương</strong></p> <ul> <li>Chấn thương mắt</li> <li>Chấn thương mi</li> <li>Chấn thương lệ đạo</li> <li>Dị vật kết giác mạc</li> <li>Dị vật nội nhãn</li> </ul> <p><strong>Dịch kính võng mạc</strong></p> <ul> <li>Bong võng mạc</li> <li>Thoái hóa võng mạc</li> <li>Thoái hóa dịch kính võng mạc</li> <li>Bệnh võng mạc đái tháo đường</li> <li>Bệnh thoái hóa hoàng điểm tuổi già</li> <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li> <li>Viêm màng bồ đào</li> <li>Viêm nội nhãn</li> <li>Xuất huyết dịch kính</li> </ul> <p><strong>Các bệnh lí về mắt</strong></p> <ul> <li>Mắt hột</li> <li>Khám, điều trị bệnh thiên đầu thống (glocom)</li> </ul> <p><strong>Tật khúc xạ</strong></p> <ul> <li>Cận thị</li> <li>Nhược thị</li> <li>Viễn thị</li> <li>Lão thị</li> <li>Loạn thị</li> </ul> <p><strong>Các rối loạn về mắt</strong></p> <ul> <li>Hội chứng khô mắt</li> <li>Rối loạn ở hốc mắt</li> <li>Rối loạn tuyến lệ</li> <li>Tăng nhãn áp</li> </ul> <p><strong>Các bệnh lí khác về mắt</strong></p> <ul> <li>Quặm mi</li> <li>Sa mí mắt</li> <li>Viêm kết mạc</li> <li>Lác mắt</li> <li>Mộng thịt</li> <li>Song thị</li> <li>Viêm giác mạc</li> <li>Viêm mi mắt</li> <li>Bong võng mạc</li> <li>Rách võng mạc</li> <li>Đục thủy tinh thể</li> </ul>",
                clinic_id: "b5ac7aca-eb6a-4a79-b0ad-9eaabe1e85b4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Phó Giáo sư, Tiến sĩ Đinh Thị Thu Hương",
                description:
                    "<p>Hơn 30 năm kinh nghiệm lĩnh vực Tim mạch</p> <p>Phó viện trưởng Viện Tim mạch Việt Nam</p> <p>Bác sĩ nhận khám trên 16 tuổi</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/22/164028-pgsts-dinh-thi-thu-huong.png",
                introduction:
                    "<h2><strong>Phó Giáo sư, Tiến sĩ Đinh Thị Thu Hương</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm lĩnh vực Tim mạch</li> <li>Phó viện trưởng Viện Tim mạch Việt Nam</li> <li>Phó chủ nhiệm Bộ môn Tim mạch Đại học Y Hà Nội</li> <li>Từng tu nghiệp tại Pháp, Canada</li> <li>Bác sĩ nhận khám trên 16 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh lý về nhồi máu cơ tim, phình tách động mạch chủ</li> <li>Suy tim</li> <li>Siêu âm tim</li> <li>Tạo nhịp tim</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Chi ủy viên Chi bộ Bộ môn Nội, Phó Chủ nhiệm Bộ môn Tim mạch Trường Đại học Y Hà Nội, Trưởng phòng C6 Viện Tim mạch Việt Nam (2002 - Nay)</li> <li>Giảng viên, Bộ môn Tim mạch Trường Đại học Y Hà Nội/ Trưởng phòng C6 Viện Tim mạch Việt Nam (2000 - Nay)</li> <li>Phó viện trưởng Viện Tim mạch Việt Nam, Phó chủ nhiệm Bộ môn Tim mạch Đại học Y Hà Nội, Thường vụ Đảng ủy trường Đại học Y Hà Nội, Chủ tịch công đoàn trường Đại học Y Hà Nội (2008 - 2015)</li> <li>Giảng viên, Bộ môn Tim mạch Trường Đại học Y Hà Nội (1999 - 2000)</li> <li>Thực tập sinh tại Canada (1999)</li> <li>Giảng viên, Bộ môn Tim mạch Trường Đại học Y Hà Nội (1996 - 1999)</li> <li>Thực tập sinh tại Cộng hòa Pháp (1995 - 1996)</li> <li>Giảng viên, Bộ môn Tim mạch Trường Đại học Y Hà Nội (1993 - 1995)</li> <li>Thực tập sinh tại Cộng hòa Pháp (1991 - 1993)</li> <li>Giảng viên, Bộ môn Tim mạch Trường Đại học Y Hà Nội (1987 - 1991)</li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Huân chương Lao động hạng Ba</li> </ul>",
                clinic_id: "7daa62a4-e3cc-4704-8465-238883be1c37",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Giáo sư, Tiến sĩ Nguyễn Lân Việt",
                description:
                    "<p>Bác sĩ có nhiều năm kinh nghiệm về khám và điều trị bệnh lý Tim mạch </p> <p>Nguyên Viện trưởng Viện Tim Mạch Quốc Gia</p> <p>Bác sĩ nhận khám mọi độ tuổi </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/10/24/143656-bs-lanviet.jpg",
                introduction:
                    "<h2><strong>Giáo sư, Tiến sĩ Nguyễn Lân Việt</strong></h2> <ul> <li>Phó Chủ tịch Hội Tim mạch Việt Nam</li> <li>Nguyên Hiệu trưởng trường Đại học Y Hà Nội</li> <li>Nguyên Viện trưởng Viện Tim mạch Quốc gia</li> <li>Phó Chủ tịch Hội đồng chuyên môn bảo vệ sức khỏe cán bộ miền Bắc trực thuộc Ban Bảo vệ sức khỏe Trung ương</li> <li>Tổng biên tập tạp chí Tim mạch học</li> <li>Nguyên trưởng bộ môn Tim mạch Đại học Y Hà Nội</li> <li>Chủ tịch Hội đồng cố vấn chuyên môn Bệnh viện Đông Đô</li> <li>Bác sĩ nhận khám mọi độ tuổi </li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p><strong>Bệnh lý Tim Mạch</strong></p> <ul> <li>Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch</li> <li>Các bệnh Nội Tim mạch</li> <li>Rối loạn mỡ máu</li> <li>Bệnh van tim</li> <li>Bệnh cơ tim</li> <li>Khám bệnh mạch máu ngoại biên.</li> <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.</li> <li>Tư vấn sử dụng thuốc chống đông máu.</li> <li>Bệnh cao huyết áp</li> </ul> <p><strong>Bệnh mạch vành</strong></p> <ul> <li>Bệnh mạch vành</li> <li>Bệnh hẹp mạch vành</li> <li>Thiểu năng mạch vành</li> <li>Xơ vữa động mạch</li> <li>Điều trị bệnh mạch vành</li> </ul> <p><strong>Rối loạn mỡ máu</strong></p> <ul> <li>Bệnh mỡ máu cao</li> <li>Rối loạn mỡ máu</li> <li>Tư vấn, điều trị bệnh mỡ máu</li> <li>Rối loạn chuyển hóa</li> <li>Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li> </ul>",
                clinic_id: "7daa62a4-e3cc-4704-8465-238883be1c37",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Vũ Thái Hà",
                description:
                    "<p>Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương </p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/03/04/180640bac-si-vu-thai-ha.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Vũ Thái Hà</strong></h2> <ul> <li>16 năm kinh nghiệm trong chuyên ngành da liễu và laser – phẫu thuật trong da liễu</li> <li>10 năm kinh nghiệm nâng cơ, trẻ hóa da mặt bằng chỉ</li> <li>15 năm kinh nghiệm trong điều trị laser và trị liệu ánh sáng cho các tăng sắc tố, trẻ hóa da, sẹo lõm, sẹo lồi.</li> <li>15 năm kinh nghiệm trong điều trị bệnh da liễu như trứng cá, rụng tóc, vảy nến, viêm da cơ địa....</li> <li>10 năm kinh nghiệm trong tạo hình khuôn mặt và trẻ hóa da bằng Filler, botox, 5 năm kinh nghiệm trong liệu pháp mesotherapy điều trị rám má và trẻ hóa da, thon gọn cơ thể</li> <li>16 năm giảng dạy trong chuyên ngành Da liễu</li> <li>Kinh nghiệm trong điều trị chống lão hóa bằng RF, HIFU</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Viêm da cơ địa: Tổn thương da khô, ban đỏ kèm theo hiện tượng ngứa</li> <li>Viêm da tiếp xúc: Tổn thương vùng bị tiếp xúc, dát đỏ, mụn nước , có thể loét , kèm ngứa</li> <li>Viêm da dầu: Các mảng dát màu đỏ hồng, có vảy da trắng mỏng nhờn dính kèm ngứa ở nếp gấp, rãnh mũi má</li> <li>Mày đay: Sẩn phù, ngứa, phù mạch, nguyên nhân chủ yếu do dị ứng</li> <li>Zona: Ban đỏ, đám mụn nước ,vết loét, cảm giác ngứa rát dọc theo dây thần kinh</li> <li>Thủy đậu: Sốt, mụn nước to dịch trong lan toàn thân , sau vỡ vảy tiết, sẹo</li> <li>Nấm da: Mảng nổi nhẹ, có hình vòng hoặc bầu dục, có màu đỏ hoặc nâu, tróc vảy và gây ngứa</li> <li>U mềm lây: Nốt sẩn nhỏ, lõm trung tâm, rải rác toàn thân, không ngứa, không đau</li> <li>Viêm hạch lan tỏa</li> <li>Bớt sắc tố: Nốt, mảng tăng sắc tố khu trú hoặc lan tỏa trên cơ thể, bề mặt phẳng, màu nâu, đen , xanh. Không đau , không ngứa rát.</li> <li>Nám da: Dát tăng sắc tố màu nâu, xanh đen đối xứng 2 bên mặt, bằng phẳng, bờ không đều, không teo da, không ngứa.</li> <li>Trứng cá: Mụn nhân trắng đen, mụn viêm , mụn nang, mụn bọc</li> <li>Sẹo lõm: Tổn thương lõm sâu xuống dưới bề mặt da, màu đậm hoặc cùng màu da, không đau. Sẹo đáy nhọn, sẹo đáy hộp, sẹo đáy tròn</li> <li>Sẹo lồi: Tổn thương nổi gồ trên bề mặt da, không đau, màu trùng màu da hoặc đậm hơn</li> <li>Lão hóa da: Da bị chảy xệ, trùng nhão không được săn chắc. Nhiều nếp nhăn vùng trán, đuôi mắt, rãnh mũi má</li> <li>Rụng tóc: Tóc rụng thành chỏm hoặc nhiều sợi , sợi tóc mỏng xơ dễ gãy</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (2016 - nay)</li> </ul>",
                clinic_id: "8b8022b1-e0d8-4f64-bfde-c7de825e1c31",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Phạm Hồng Đức",
                description:
                    "<p>Bác sĩ nắn chỉnh răng, Nha khoa Thúy Đức</p> <p>Thành viên hội nắn chỉnh răng Hoa Kỳ AAO</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2019/03/05/105417thac-si-bac-si-pham-hong-duc.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Phạm Hồng Đức</strong></h2> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nha tổng quát, Nha khoa Thúy Đức (2011 - 2015)</li> <li>Bác sĩ nắn chỉnh răng, Nha khoa Thúy Đức (2015 - nay)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Răng Hàm Mặt, Đại Học Y Hà Nội (2005 - 2011)</li> <li>Thạc sĩ Răng Hàm Mặt, Trường Bordeux-Sgalen (2011 - 2012)</li> </ul> <h3><strong>Chứng chí trong nước và nước ngoài</strong></h3> <ul> <li>Chứng chỉ cấy ghép Implant, Trường Đại học Y hà Nội (2011)</li> <li>Chứng chỉ Chỉnh nha mặt lưỡi, Thái Lan (2014)</li> <li>Chứng chỉ Chỉnh nha tổng quát, Mỹ (2014)</li> <li>Chứng chỉ Cơ sinh học chỉnh nha, Italy (2015)</li> <li>Chứng chỉ Chỉnh nha Invisalign, Mỹ (2015)</li> </ul> <h3><strong>Sách và công trình ngniên cứu</strong></h3> <ul> <li>1001 Bí kíp lâm sàng trong chỉnh nha (2015)</li> <li>Các ca lâm sàng trong chỉnh nha (2015)</li> <li>Cơ sinh học trong chỉnh nha (2016)</li> </ul> <h3><strong>Thành viên các Hội khoa học, Tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên hội nắn chỉnh răng thế giới IAO</li> <li>Thành viên hội nắn chỉnh răng Hoa Kỳ AAO</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ chuyên sâu về nắn chỉnh răng:</p> <ul> <li>Răng hô</li> <li>Răng khấp khểnh, móm, khớp cắn ngược, …</li> <li>Răng không đều, khớp cắn lệch,…</li> </ul>",
                clinic_id: "b3f1b400-f33a-4387-a51a-5c86fa9ff13e",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Chuyên khoa I Trần Thịnh",
                description:
                    "<p>Gần 40 năm khám và điều trị chuyên khoa Da liễu</p> <p>Hơn 27 năm nghiên cứu và điều trị các bệnh da liễu bằng laser</p> <p>Nguyên Trưởng khoa Lâm Sàng A - Bệnh viện Da liễu</p> <p>Tiến sĩ có nhận khám cho nguời nước ngoài</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/07/25/110659-bs-tran-thinh1.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Trần Thịnh</strong></h2> <ul> <li>Gần 40 năm khám và điều trị chuyên khoa Da liễu</li> <li>Hơn 27 năm nghiên cứu và điều trị các bệnh da liễu bằng laser</li> <li>Nguyên Trưởng khoa Lâm Sàng A - Bệnh viện Da liễu</li> <li>Giảng viên Đại học - Chuyên ngành Da liễu</li> <li>Tiến sĩ có nhận khám cho nguời nước ngoài</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Mụn trứng cá</li> <li>Nám</li> <li>Dị ứng</li> <li>Sẹo</li> <li>Các loại bệnh về da</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Giám đốc Phòng khám Chuyên khoa Da liễu Trần Thịnh (Nay)</li> <li>Phó Chánh Văn phòng Ủy ban AIDS, Sở Y tế TP. HCM (2001 - 2015)</li> <li>Bác sĩ điều trị phòng khám, phòng điều trị LASER CO2, Đại học Da Liễu TP. HCM (1999 - 2000)</li> <li>Bác sĩ phụ trách kiểm soát bệnh lây lan qua đường tình dục và AIDS, Đại học Da Liễu TP. HCM (1993 - 1999)</li> <li>Bác sĩ phụ trách phòng vi tính, phòng chỉ đạo tuyến, Đại học Da Liễu TP. HCM (1991 - 1993)</li> <li>Nguyên Trưởng khoa Lâm Sàng A - Bệnh viện Da liễu (1989 - 1991)</li> <li>Bác sĩ phòng Khoa học - Kỹ thuật Khoa Y, Đại học Y Dược TP. HCM (1986 - 1989)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp chuyên ngành Da Liễu, Đại học Y Dược TP. HCM (1980 - 1986)</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li>Phẫu thuật thảm mỹ tạo hình - Thẩm mỹ nội khoa (06/2011)</li> <li>Sách mụn trứng cá - Phương pháp giúp bạn có làn da đẹp (1997)</li> </ul>",
                clinic_id: "484d73c4-8866-4294-a7ab-9b9ca12ae1f3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Ngọc Quỳnh",
                description:
                    "<p>Hơn 10 năm cống hiến trong lĩnh vực răng sứ thẩm mỹ </p> <p>Từ tu nghiệp, học tập chuyên sâu về lĩnh vực phục hình tại Cuba</p> <p>Từng công tác tại Bệnh viện răng hàm mặt</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/02/162531-bac-si--le-ngoc-quynh.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Ngọc Quỳnh</strong></h2> <ul> <li>Hơn 10 năm cống hiến trong lĩnh vực răng sứ thẩm mỹ</li> <li>Từ tu nghiệp, học tập chuyên sâu về lĩnh vực phục hình tại Cuba</li> <li>Từng công tác tại Bệnh viện răng hàm mặt</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chuyên phục hình răng sứ thẩm mỹ theo xu hướng bảo tồn răng thật tối đa</li> <li>Nha khoa tổng quát</li> <li>Nhổ răng khôn</li> <li>Nha khoa trẻ em</li> <li>Điều trị tủy răng</li> <li>Trồng răng giả phục hình mất răng</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Từng công tác tại: Bệnh viện răng hàm mặt – Bệnh Viện Thẩm mỹ, Trung tâm Phòng khám đa khoa, Bệnh viện đa khoa tại Hà Nội và TP. Hồ Chí Minh</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp chính quy Bác sĩ chuyên khoa Răng Hàm Mặt Đại học Y Khoa Lahabana Cuba</li> <li>Tốt nghiệp chính quy Bác sĩ phục hình răng Trường Đại Học Y Khoa Sancti Spiritus Cuba</li> <li>Tham gia nhiều khóa học nâng cao về chuyên môn phục hình răng, nha khoa thẩm mỹ tại các cơ sở đầu ngành tổ chức</li> </ul>",
                clinic_id: "2bfa9272-5753-44da-9ed1-b7b5bc079252",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Võ Thị Kim Dung",
                description:
                    "<p>Hơn 30 năm kinh nghiệm khám và điều trị chuyên khoa Nội Cơ xương khớp</p> <p>Nguyên Phó Trưởng khoa Khoa cơ xương khớp bệnh viện Hữu Nghị</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên (dưới 15 tuổi hỏi ý kiến bác sĩ) </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/09/21/110559-bs-kim-dung.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Võ Thị Kim Dung</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm khám và điều trị chuyên khoa Nội Cơ xương khớp</li> <li>Nguyên Phó Trưởng khoa Khoa cơ xương khớp bệnh viện Hữu Nghị</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên (dưới 15 tuổi hỏi ý kiến bác sĩ)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Đau thần kinh tọa</li> <li>Thoát vị đĩa đệm</li> <li>Viêm khớp dạng thấp</li> <li>Viêm cột sống dính khớp</li> <li>Thoái hóa khớp, cột sống cổ, cột sống thắt lưng</li> <li>Viêm quanh khớp vai, điểm bám các gân</li> <li>Bệnh loãng xương</li> <li>Nội soi các khớp, yếu cơ</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Công tác tại chuyên khoa Nội - Nội cơ xương khớp, Bệnh viện Hữu Nghị (Nay)</li> <li>Giữ chức vụ Phó trưởng khoa Khoa cơ xương khớp, Bệnh viện Hữu nghị (2000 - 02/2014)</li> <li>Bác sĩ điều trị Khoa lão khoa, Khoa cơ xương khớp, Bệnh viện Hữu Nghị (1983 - 02/2014)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Chuyên khoa cấp I Nội, Trường Đại học Y Hà Nội (1991 - 1992)</li> <li>Học chương trình tổ chức y tế, Bệnh viện thực hành số 13 Moskva Liên Xô cũ (1989 - 1990)</li> <li>Học Đại học Y khoa Rostov Liên Xô cũ, Đại học Y khoa Rostov Liên Xô cũ (1977 - 1983)</li> </ul>",
                clinic_id: "613f5dc1-7830-4f8e-9963-5c9442c6fe20",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Tiến sĩ, Bác sĩ Boris Fattakhov",
                description:
                    "<p>Hơn 30 năm kinh nghiệm lĩnh vực Nhãn khoa, thực hiện hơn 40000 ca phẫu thuật mắt thành công</p> <p>Phó Giám Đốc Chuyên Môn của Bệnh Viện Mắt Quốc Tế Việt Nga</p> <p>Nguyên trưởng khoa Laser và khúc xạ – Viện nghiên cứu khoa học các bệnh về mắt thành phố UFA, Liên Bang Nga</p>",
                address: "Hà Nội",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/01/16/095626-bac-si-boris-viet-nga.jpg",
                introduction:
                    "<h2><strong>Tiến sĩ, Bác sĩ Boris Fattakhov</strong></h2> <ul> <li>Hơn 30 năm kinh nghiệm lĩnh vực Nhãn khoa, thực hiện hơn 40000 ca phẫu thuật mắt thành công</li> <li>Phó Giám Đốc Chuyên Môn của Bệnh Viện Mắt Quốc Tế Việt Nga</li> <li>Nguyên trưởng khoa Laser và khúc xạ – Viện nghiên cứu khoa học các bệnh về mắt thành phố UFA, Liên Bang Nga</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Phẫu thuật mắt các phương pháp: Phaco, Crosslinking, Glaucoma, Lasik</li> <li>Chuyên phẫu thuật bệnh lý đục thủy tinh thể/ cườm khô</li> <li>Khám và chữa các bệnh lý tổng quát về mắt</li> <li>Chữa và phẫu thuật tất cả các bệnh lý đáy mắt/ võng mạc</li> <li>Nhận hội chẩn và điều trị tất cả các về bệnh mắt</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phó Giám Đốc Chuyên Môn của Bệnh Viện Mắt Quốc Tế Việt Nga</li> <li><strong>Trưởng Khoa Khúc Xạ của Bệnh Viện Mắt Quốc Tế Việt - Nga</strong> </li> <li>Nguyên trưởng khoa Laser và khúc xạ – Viện nghiên cứu khoa học các bệnh về mắt thành phố UFA,Liên Bang Nga (1988 - 2013) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Đại học Y Quốc gia Baskir</li> </ul> <h3><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></h3> <ul> <li><strong>Nghiên cứu - Luận án “Sử dụng vi khuẩn trong điều trị nhiễm trùng vết thương mắt”</strong></li> <li><strong>Phát minh “Cơ chế chữa lành cấu trúc bên trong mắt khi bị chấn thương”</strong></li> <li><strong>Phát minh “Những phương pháp điều trị các bệnh lệ đạo sử dụng công nghệ laser” trong đó có phương pháp “Laser nội soi tiếp khẩu tuyến lệ mũi”</strong></li> </ul> <h3><strong>Giải thưởng</strong></h3> <ul> <li>Thầy thuốc ưu tú Bashkortostan (2011)</li> <li>Được Bộ Y tế Liên Bang Nga trao tặng danh hiệu “Bác sỹ tâm huyết trong nhiều năm” (2010)</li> </ul>",
                clinic_id: "01607339-7232-4f5f-b1e8-838ae47d5bcc",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ chuyên khoa II Trần Dư Đông",
                description:
                    "<p>Bác sĩ chuyên khoa Ngoại Tổng quát</p> <p>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Ngoại, Sản</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/12/18/171443-bac-si-chuyen-khoa-ii-tran-du-dong-ngoai-khoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ chuyên khoa II Trần Dư Đông</strong></h2> <ul> <li>Bác sĩ chuyên khoa Ngoại Tổng quát</li> <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Ngoại </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ Ngoại tổng quát, Phòng Khám Đa Khoa Vigor Health (2020 - nay)</li> <li>Nguyên Giám Đốc Bệnh Viện Quận 7 (2017 - 2020)</li> <li>Nguyên Phó Giám Đốc Trung Tâm Y Tế Quận 7 (2002 - 2007)</li> <li>Nguyên Trưởng khoa Ngoại Trung Tâm Y Tế Quận 7 (1994 - 2002)</li> <li>Bác sĩ Ngoại Sản, Trung Tâm Y Tế Lộc Ninh, Bình Phước (1990 - 1992)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Ngoại Tổng quát, Đại học Y dược TPHCM (2016)</li> <li>Tốt nghiệp Bác sĩ chuyên khoa I, chuyên ngành Ngoại Tổng quát, Đại học Y dược TPHCM (1994)</li> <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Huế (1989)</li> </ul> <h2><strong>Khám và điều trị:</strong></h2> <ul> <li>Thực hiện thủ thuật cắt trĩ</li> <li>Khám và điều trị bệnh lý về chuyên khoa Ngoại</li> <li>Xương khớp</li> <li>Tiểu phẫu rạch u bã đậu</li> <li>Bướu mỡ nhỏ</li> </ul>",
                clinic_id: "5d612d50-f4c1-4af2-a803-a10bbbcda50f",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Luyện Thị Ngọc Dung",
                description:
                    "<p>Hiện là bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ </p> <p>Thành viên Hội Nội tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh </p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2018/07/04/151903bac-si-luyen-thi-ngoc.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Luyện Thị Ngọc Dung</strong></h2> <ul> <li>Hiện là bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ</li> <li>Thành viên Hội Nội tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ (2016 - nay) </li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thực hành lâm sàng trong Hỗ trợ sinh sản (IVF), Bệnh viện Từ Dữ (2015 - 2016) </li> <li>Học bác sĩ Định hướng Chuyên khoa Sản phụ khoa, trường Đại học Y Hà Nội (2014 - 2015) </li> <li>Học bác sĩ Đa khoa, trường Đại học Y Hà Nội (2008 - 2014) </li> </ul> <h3><strong>Thành viên Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Thành viên Hội Nột tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh </li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Điều trị bệnh vô sinh nữ giới, nam giới </li> <li>Theo dõi nang tự nhiên </li> <li>Kích thích buồng trứng </li> <li>Bơm tinh trùng vào buồng tử cung IUI </li> <li>Thụ tinh trong ống nghiệm IVF </li> <li>Giảm thiểu thai </li> <li>Điều trị dự phòng sảy thai, lưu thai liên tiếp </li> <li>Chấn đoán sớm bệnh lý về thai </li> <li>Điều trị bệnh lý viêm nhiễm phụ khoa</li> </ul>",
                clinic_id: "5ffa5e07-315f-4833-8ef4-5958161cc2bb",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Chuyên khoa I Trần Nguyễn Khánh Minh",
                description:
                    "<p>Bác sĩ được đào tạo chuyên sâu trong lĩnh vực Tâm thần kinh</p> <p>Tốt nghiệp Bác sĩ Nội trú Bộ môn Tâm thần - Đại học Y Dược TP. HCM</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/08/01/164516-bskhanh-minh.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Chuyên khoa I Trần Nguyễn Khánh Minh</strong></h2> <ul> <li>Bác sĩ được đào tạo chuyên sâu trong lĩnh vực Tâm thần kinh</li> <li>Tốt nghiệp Bác sĩ Nội trú Bộ môn Tâm thần - Đại học Y Dược TP. HCM</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Chẩn đoán, tư vấn và điều trị các bệnh lý tâm thần:<ul> <li>Người trưởng thành: trầm cảm, hưng cảm, lo âu, mất ngủ, loạn thần (hoang tưởng, ảo giác, hành vi vô tổ chức, ngôn ngữ vô tổ chức), triệu chứng cơ thể (đau đầu, đau mỏi cơ, cồn cào ở dạ dày, hồi hộp, mệt mỏi), các rối loạn tâm thần do sử dụng chất</li> <li>Người cao tuổi: Sảng, Alzheimer, trầm cảm, hưng cảm, loạn thần, lo âu, mất ngủ, mệt mỏi, triệu chứng cơ thể, các rối loạn tâm thần do sử dụng chất</li> </ul> </li> <li>Hướng dẫn tuân thủ điều trị:<ul> <li>Tư vấn cách sử dụng các thuốc chống trầm cảm, giải lo âu, chống loạn thần</li> <li>Hướng dẫn tác dụng phụ của thuốc, cách xử trí các tác dụng phụ</li> </ul> </li> <li>Theo dõi diễn tiến của bệnh:<ul> <li>Tư vấn nhận biết các triệu chứng của bệnh</li> <li>Cung cấp thông tin về diễn tiến của bệnh, diễn tiến của quá trình điều trị</li> <li>Hướng dẫn thay đổi lối sống phù hợp với bệnh</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Hiện là Bác sĩ chuyên khoa Tâm thần, Trung tâm Y khoa Vạn Hạnh</li> <li>Bác sĩ Nội trú Bộ môn Tâm thần - Đại học Y Dược TP. HCM. Học tập và thực hành tại Đơn vị Tâm Thần - khoa Nội Thần kinh - Bệnh viện Nguyễn Tri Phương và Bệnh viện Tâm thần TP. HCM (11/2018 - 05/2021)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Thạc sĩ Nội khoa (Tâm thần) - Đại học Y Dược TP. HCM (2019 - 2021)</li> <li>Bác sĩ Nội trú Tâm thần - Đại học Y Dược TP. HCM (2018 - 2021)</li> <li>Bác sĩ Đa khoa - Đại học Y Dược TP. HCM (2012 - 2018)</li> </ul> <h3><strong>Đào tạo liên tục</strong></h3> <ul> <li>Chứng chỉ online EPM “Essential Pain Management” về quản lý đau (2022)</li> <li>Chương trình đào tạo liên tục (CME): Phân tích số liệu nâng cao (2021)</li> <li>Chương trình đào tạo liên tục (CME): Chăm sóc bệnh rối loạn cương & rối loạn lo âu trong giai đoạn đại dịch Covid-19 bùng nổ (2021)</li> <li>Hội thảo trực tuyến “Tối ưu hóa hiệu quả điều trị rối loạn cảm xúc cho bệnh nhân tâm thần thời kì Covid-19” (2021)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội viên Hội Y học giấc ngủ Việt Nam (06/2021 - Nay)</li> </ul>",
                clinic_id: "6e655ba0-6488-4cf0-9245-cbcd0b5202aa",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thầy thuốc ưu tú, Tiến sĩ, Bác sĩ Nguyễn Trọng Minh",
                description:
                    "<p>Trên 30 kinh nghiệm lĩnh vực Tai Mũi Họng </p> <p>Nguyên Giảng viên tại Đại học Y dược TP. HCM, Bệnh viện Chợ Rẫy, Học viện Quân Y, Đại học Y khoa Phạm Ngọc Thạch TP. HCM </p> <p>Từng tu nghiệp nhiều năm tại Hoa Kỳ, Singapore</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "male",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/02/09/164634-bsi-minh-viet-healthcare.jpg",
                introduction:
                    "<h2><strong>Thầy thuốc ưu tú, Tiến sĩ, Bác sĩ Nguyễn Trọng Minh</strong></h2> <ul> <li>Trên 30 kinh nghiệm lĩnh vực Tai Mũi Họng</li> <li>Nguyên Giảng viên tại Đại học Y dược TP. HCM, Bệnh viện Chợ Rẫy, Học viện Quân Y, Đại học Y khoa Phạm Ngọc Thạch TP. HCM</li> <li>Từng tu nghiệp nhiều năm tại Hoa Kỳ, Singapore</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Các bệnh về tai:<ul> <li>Ù tai, nghe kém, điếc đột ngột, phẫu thuật chữa điếc</li> <li>Chảy mủ tai, viêm tai giữa cấp, mạn</li> <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín</li> </ul> </li> <li>Các bệnh mũi xoang:<ul> <li>Viêm Mũi xoang dị ứng, viêm mũi vận mạch</li> <li>Viêm mũi ngạt tắc mũi mạn tính</li> <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li> <li>Nấm mũi xoang</li> <li>Đau đầu mãn tính do mũi xoang</li> </ul> </li> <li>Các bệnh về họng thanh quản:<ul> <li>Khàn tiếng, mất tiếng, viêm thanh quản cấp, mạn, polyp thanh quản, hạt xơ dây thanh<br>Viêm họng hạt</li> <li>Những trường hợp ngủ dậy miệng đắng, hơi thở hôi, hay mắc mắc vướng vướng ở họng, hay đằng hắng, khịt khạc, có đờm mạn tính ở họng.</li> </ul> </li> </ul> <h3><strong>Quá trình Công tác</strong></h3> <ul> <li>Phó Giám đốc, phụ trách khoa Tai mũi họng - Phòng khám Đa khoa Quốc tế Việt Healthcare (Nay)</li> <li>Khoa Tai mũi họng - Bệnh viện Chợ Rẫy </li> <li>Giảng viên lâm sàng Y5 - Đại học Y dược TP. HCM (1999 - 2020)</li> <li>Giảng viên lớp Định hướng Chuyên khoa Tai mũi họng - Bệnh viện Chợ Rẫy (2000 - 2020)</li> <li>Giảng viên lớp Bác sĩ Quân Y - Học viện Quân Y (2007 - 2020)</li> <li>Giảng viên Đại học Y khoa Phạm Ngọc Thạch TP. HCM (2009 - 2020)</li> </ul> <h3><strong>Quá trình Đào tạo</strong></h3> <ul> <li>Tiến sĩ Y học Tai mũi họng (2009)</li> <li>Tu nghiệp tại Hoa Kỳ (1997, 2005); Singapore (1998, 1999)</li> <li>Tốt nghiệp Thạc sĩ Y học chuyên ngành Tai mũi họng - Đại học Y Dược TP. HCM (1995 - 1997)</li> <li>Tốt nghiệp Chuyên khoa I chuyên ngành Tai mũi họng (1989 - 1991)</li> <li>Tốt nghiệp Đại học Y Dược TP. HCM (1980 - 1986)</li> </ul>",
                clinic_id: "3ddefa84-96b0-4fdb-b954-8869150bd361",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Vũ Thị Thanh Bình",
                description:
                    "<p>Bác sĩ có 40 năm kinh nghiệm trong khám và điều trị Tai Mũi Họng</p> <p>Nguyên Trưởng khoa liên chuyên khoa Tai mũi họng - Mắt - Răng hàm mặt, Bệnh viện Xây Dựng thuộc Bộ Xây Dựng Hà Nội</p> <p>Bác sĩ nhận khám từ 2 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/08/15/160338-bs-hoang-thanh-binh-vrr1.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Vũ Thị Thanh Bình</strong></h2> <ul> <li>Bác sĩ có 40 năm kinh nghiệm trong khám và điều trị Tai Mũi Họng</li> <li>Nguyên Trưởng khoa liên chuyên khoa Tai mũi họng - Mắt - Răng hàm mặt, Bệnh viện Xây Dựng thuộc Bộ Xây Dựng Hà Nội</li> <li>Bác sĩ nhận khám từ 2 tuổi trở lên</li> </ul> <h2><strong>Nhận khám và điều trị</strong></h2> <ul> <li>Các bệnh về tai<ul> <li>Ù tai, nghe kém, điếc đột ngột</li> <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li> <li>Viêm ống tai ngoài</li> <li>Viêm tai xương chũm</li> <li>Chàm tai</li> <li>Viêm sụn vành tai</li> <li>U dây thần kinh thính giác</li> <li>Rối loạn mạch máu tai</li> </ul> </li> <li>Các bệnh mũi xoang<ul> <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li> <li>Viêm mũi ngạt tắc mũi mạn tính</li> <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li> <li>Nấm mũi xoang</li> <li>Đau đầu mạn tính do mũi xoang…</li> </ul> </li> <li>Các bệnh về họng thanh quản<ul> <li>Viêm VA, viêm mũi họng mạn tính</li> <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li> <li>Viêm amiđan cấp, mạn</li> </ul> </li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Phòng khám Đa khoa Quốc Tế Việt - Nga (2021 - nay) </li> <li>Nguyên Trưởng khoa liên chuyên khoa Tai mũi họng - Mắt - Răng hàm mặt, Bệnh viện Xây Dựng thuộc bộ Xây Dựng Hà Nội (2000 - 2012) </li> <li>Giảng Viên bộ môn Tai - mũi - họng, Đại học y Thái Bình (1981 - 1999)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Chuyên khoa I Tai-mũi-họng, Đại học y Hà Nội (1991)</li> <li>Học Chuyên khoa định hướng Tai - mũi - họng (1981)</li> <li>Tốt nghiệp Đại Học y khoa hệ Chính quy, Đại học y Thái Bình (1980)</li> </ul> <h3><strong>Thành viên các Hội khoa học và tổ chức chuyên môn</strong></h3> <ul> <li>Hiện đang là thành viên của hội Tai - Mũi - Họng Hà Nội</li> </ul>",
                clinic_id: "dd47c821-5d4c-4eca-94ce-7add0b12f8b6",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Đào Thị Ngọc Anh",
                description:
                    "<p>Gần 40 năm kinh nghiệm khám và điều trị bệnh lý Tai mũi họng</p> <p>Từng công tác nhiều năm tại Bệnh viện Đại học Y dược TP. HCM</p> <p>Nguyên Trưởng khoa Tai mũi họng, Bệnh viện Hai Bà Trưng Hà Nội</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/09/110903-bs-ngoc-anh.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Đào Thị Ngọc Anh</strong></h2> <ul> <li>Gần 40 năm kinh nghiệm khám và điều trị bệnh lý Tai mũi họng</li> <li>Từng công tác nhiều năm tại Bệnh viện Đại học Y dược TP. HCM</li> <li>Nguyên Trưởng khoa Tai mũi họng, Bệnh viện Hai Bà Trưng Hà Nội</li> <li>Bác sĩ nhận khám bệnh nhân ở mọi lứa tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Ù tai, đau tai, chảy máu tai</li> <li>Thủng màng nhĩ, điếc đột ngột</li> <li>Viêm tai giữa</li> <li>Amidan, V.A</li> <li>Viêm xoang</li> <li>Nghẹt mũi</li> <li>Hay bị chảy máu cam</li> <li>Đau cổ họng, khó nuốt</li> <li>Ho kéo dài</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Tai mũi họng, Phòng khám Đa khoa Việt Gia (2008 - Nay)</li> <li>Bác sĩ Tai mũi họng, Bệnh viện Đại học Y dược TP. HCM (1989 - 2007)</li> <li>Trưởng khoa Tai mũi họng, Bệnh viện Hai Bà Trưng Hà Nội (1984 - 1989)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa I Tai mũi họng, Đại học Y dược TP. HCM</li> <li>Bác sĩ Đa khoa, Đại học Y Hà Nội</li> </ul>",
                clinic_id: "e5bd5c45-ce54-4046-896b-ca54e9c239f7",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Nguyễn Thị Thu Hiền",
                description:
                    "<p>Nhiều năm kinh nghiệm lĩnh vực Nha khoa</p> <p>Tốt nghiệp Khoa Răng hàm mặt - Đại học Y Hà Nội</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2023/05/23/104801-bsi-hien-win-smile.png",
                introduction:
                    "<h2><strong>Bác sĩ Nguyễn Thị Thu Hiền</strong></h2> <ul> <li>Nhiều năm kinh nghiệm lĩnh vực Nha khoa</li> <li>Tốt nghiệp Khoa Răng hàm mặt - Đại học Y Hà Nội</li> <li>Bác sĩ nhận khám và điều trị cho đối tượng từ 10 đến 50 tuổi</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <p>Bác sĩ có thế mạnh chuyên môn về Phục hình thẩm mỹ. Ngoài ra bác sĩ còn thực hiện khám và điều trị:</p> <ul> <li>Viêm lợi: Sưng đỏ vùng lợi, cao răng mảng bám nhiều</li> <li>Viêm tủy: Đau răng bị viêm tủy hoặc vùng lân cận</li> <li>Đau răng số 8</li> <li>Sâu răng, gãy thân răng: có tổn thương tổ chức cứng có tổn thương sâu hoặc không do sâu</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ - Nha khoa Win Smile (2023)</li> <li>Bác sĩ - Nha khoa Hana (2020 - 2023)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Răng hàm mặt - Đại học Y Hà Nội (2008 - 2014)</li> </ul>",
                clinic_id: "3d719753-39b7-48ed-afe4-722c7207cc99",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Bác sĩ Chuyên khoa I Trương Thị Tuyết Hoa",
                description:
                    "<p>Gần 30 năm kinh nghiệm lĩnh vực Nội Tổng quát - Da liễu</p> <p>Hiện công tác tại Phòng khám Bệnh viện Đại học Y Dược 1</p> <p>Từng công tác tại Bệnh viện Trưng Vương</p> <p>Bác sĩ nhận khám từ 15 tuổi trở lên, không nhận khám Da liễu Thẩm mỹ</p>",
                address: "Thành phố Hồ Chí Minh",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2022/12/14/104636-bs-truong-thi-tuyet-hoa.jpg",
                introduction:
                    "<h2><strong>Bác sĩ Chuyên khoa I Trương Thị Tuyết Hoa</strong></h2> <ul> <li>Gần 30 năm kinh nghiệm lĩnh vực Nội Tổng quát - Da liễu</li> <li>Hiện công tác tại Phòng khám Bệnh viện Đại học Y Dược 1</li> <li>Từng công tác tại Bệnh viện Trưng Vương</li> <li>Bác sĩ nhận khám từ 15 tuổi trở lên</li> <li>Bác sĩ không nhận khám Da liễu Thẩm mỹ</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh da dị ứng: Mày đay, viêm da cơ địa, viêm da tiếp xúc, sẩn ngứa…</li> <li>Các bệnh da do vi khuẩn, nấm, ký sinh trùng: Viêm mô bào, viêm nang lông, chốc, chàm vi khuẩn, nấm, ghẻ…</li> <li>Các bệnh da do virus: Thủy đậu, zona thần kinh, mụn cóc, u mềm lây…</li> <li>Các bệnh da khác: Trứng cá, rụng tóc, u ống tuyến mồ hôi, u mềm treo, viêm da tiết bã, sẩn cục, dày sừng da dầu, dày sừng ánh sáng, bớt tuyến bã…</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Bác sĩ Nội Tổng quát – Da liễu, Phòng khám Bệnh viện Đại học Y Dược 1 (2019 - Nay)</li> <li>Bác sĩ Nội Tổng quát – Da liễu, Phòng khám Phước An (2015 - 2018)</li> <li>Bác sĩ Nội Tổng quát – Da liễu, Bệnh viện Trưng Vương TP. HCM (1997 - 2015)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Học Chuyên khoa I Chuyên ngành Da liễu (2006 - 2008)</li> <li>Học Bác sĩ Đa khoa Trường Đại học Y Dược TP. HCM (1991 - 1997)</li> </ul> <h3><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></h3> <ul> <li>Hội Gan Mật</li> <li>Hội Nội tiết</li> </ul>",
                clinic_id: "fc770f2e-5a5d-4113-924a-86e119f711e3",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                email: "doctor123@gmail.com",
                name: "Thạc sĩ, Bác sĩ Chuyên khoa II Hà Thị Việt Nga",
                description:
                    "<p>Trưởng khoa Nội, Bệnh viện Y học Cổ truyền Trung ương</p> <p>Gần 20 năm kinh nghiệm trong lĩnh vực Y học Cổ truyền</p> <p>Bác sĩ nhận bệnh nhân từ 10 tuổi trở lên</p>",
                address: "Hà Nội",
                gender: "female",
                image: "https://cdn.bookingcare.vn/fo/w256/2020/06/10/111720-bs-ha-thi-viet-nga.jpg",
                introduction:
                    "<h2><strong>Thạc sĩ, Bác sĩ Chuyên khoa II Hà Thị Việt Nga</strong></h2> <ul> <li>Trưởng khoa Nội, Bệnh viện Y học Cổ truyền Trung ương</li> <li>Gần 20 năm kinh nghiệm trong lĩnh vực Y học Cổ truyền</li> <li>Bác sĩ nhận bệnh nhân từ 10 tuổi trở lên</li> </ul> <h3><strong>Quá trình công tác</strong></h3> <ul> <li>Trưởng khoa Nội, Bệnh việnY học Cổ truyền Trung ương (2016 - nay)</li> <li>Phó Trưởng khoa Nội, Bệnh viện Y học Cổ truyền Trung ương (2015 - 2016)</li> <li>Bác sĩ khoa Nội, Bệnh viện Y học Cổ truyền Trung ương (2010 - 2015)</li> <li>Bác sĩ khoa Khám bệnh, Bệnh viện E Hà Nội (2003 - 2010)</li> </ul> <h3><strong>Quá trình đào tạo</strong></h3> <ul> <li>Bác sĩ Chuyên khoa II Nội chung, Học viện Quân (2013-2015)</li> <li>Bác sĩ định hướng Y học Cổ truyền, Bệnh viện Y học Cổ truyền Trung ương (2010)</li> <li>Thạc sĩ Nội chung, Trường Đại học Y Hà Nội (2005 - 2008)</li> <li>Bác sĩ đa khoa, Trường Đại học Y Hà Nội (1991 - 1997)</li> </ul> <h2><strong>Khám và điều trị</strong></h2> <ul> <li>Bệnh lý hô hấp : Viêm phế quản, viêm phổi, COPD, hen phế quản…</li> <li>Bệnh lý đường tiêu hóa : Viêm loét dạ dày - hành tá tràng, viêm đại tràng, viêm gan, áp xe gan,</li> <li>Bệnh lý tim mạch : Tăng HA, suy tim, bệnh lý van tim, thiểu năng vành…</li> <li>Bệnh lý chuyển hóa : Đái tháo đường, Basedow, …</li> <li>Bệnh lý cơ xương khớp : Thoát vị đĩa đệm, thoái hóa khớp, đau lưng, đau vai gáy, sưng đau các khớp xương…</li> <li>Bệnh lý thần kinh : Tai biến mạch máu não, thiểu năng tuần hoán não, đau đầu…</li> </ul>",
                clinic_id: "4ae9247b-cc21-40ca-b719-002704e13b9b",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("doctors", null, {});
    },
};
