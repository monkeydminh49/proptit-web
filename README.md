# proptit-web

# BUỔI 1: NHẬP MÔN WEB: CÁC KIẾN THỨC CƠ BẢN VỀ HTML

## Website là gì?

Website còn gọi là trang web hoặc trang mạng, là một tập hợp trang thông tin có chứa các dạng hình ảnh, văn bản, video, audio..được lưu trữ trên web sever (máy chủ) và người dùng có thể truy cập từ xa thông qua internet.

## Cách thức hoạt động của một Website

![How Website works](./img/how_website_works.png)

1. Đầu tiên người dùng nhập vào trình duyệt một địa chỉ có dạng: [https://proptit.com](https://proptit.com), thực ra bạn chỉ cần gõ “proptit.com” là trình duyệt sẽ tự hiểu và đổi thành đường dẫn ở trên.
2. Trình duyệt gửi yêu cầu đến máy chủ DNS.
3. Hệ thống DNS trả kết quả phân tích tên miền trong đường dẫn đã gửi là proptit.vn, nó có địa chỉ máy chủ là 199.36.158.100 (cái này lúc đăng ký người ta đã gán sẵn, máy chủ DNS chỉ cần nhớ thôi).
4. Sau khi nhận được địa chỉ IP – nơi lấy dữ liệu, trình duyệt sẽ tìm đến địa chỉ IP đã nhận – tức máy chủ chứa nội dung website.
5. Máy chủ web nhận được yêu cầu truy xuất nội dung website và nó gửi một tập hợp các file bao gồm HTML, CSS , các tập tin đa phương tiện khác như âm thanh, hình ảnh (nếu có) cho trình duyệt;
6. Trình duyệt “dịch” các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình.

## Cấu trúc căn bản một trang HTML

HTML viết tắt của cụm từ **Hypertext Markup Language** là ngôn ngữ đánh dấu siêu văn bản hay nói cách khác là ngôn ngữ để viết ra các siêu văn bản. HTML sử dụng các phần tử được gọi là thẻ (tag) để đánh dấu các khối nội dung, ví dụ để đánh dấu là tiêu đề chúng ta có các thẻ `<h1>`, `<h2>`..., để đánh dấu đoạn văn bản có thẻ `<p>`... Ngôn ngữ này sẽ được các trình duyệt đọc và hiển thị nội dung siêu văn bản lên màn hình chứ không phải mã nguồn sẽ được hiển thị.

![Basic HTML Structure](./img/HTML_Basic_Format.png)

Đầu tiên, trước khi khai báo các thẻ khác trong HTML chúng ta cần khai báo dạng tài liệu bằng thẻ `<!DOCTYPE>`, cách khai báo này là khác nhau cho các phiên bản HTML.

Tiếp theo, toàn bộ nội dung trong thẻ `<htm>` chính là nội dung siêu văn bản. Trong nội dung này chúng ta nhìn bố cục sẽ có hai phần:

Phần đầu được khai báo bằng thẻ `<head>`. Trong phần này, chúng ta có thể khai báo một số vấn đề như:
Tiêu đề của văn bản
Văn bản sử dụng bảng mã ký tự nào
Các thông tin thêm cho văn bản chính (metadata) như thông tin tác giả, mô tả bài viết, từ khóa bài viết…
Các file css, javascript có thể chèn vào tại đây.
Phần nội dung được khai báo bằng thẻ `<body>`, đây là phần sẽ hiển thị trên trình duyệt.

## Block and Inline elements

Các phần tử trong HTML được phân chia làm 2 loại: **Block elements** (Các phần tử khối) và **Inline elements** (Các phần tử nội tuyến).

### Block elements

<div style="border: 1px solid blue">Hello World</div>
<p style="border-bottom: 2px solid red">Cùng tìm hiểu về block element và inline element.</p>
