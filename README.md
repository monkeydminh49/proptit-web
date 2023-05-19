# proptit-web

# **BUỔI 1: NHẬP MÔN WEB: CÁC KIẾN THỨC CƠ BẢN VỀ HTML**

## **Website là gì?**

Website còn gọi là trang web hoặc trang mạng, là một tập hợp trang thông tin có chứa các dạng hình ảnh, văn bản, video, audio..được lưu trữ trên web sever (máy chủ) và người dùng có thể truy cập từ xa thông qua internet.

## **Cách thức hoạt động của một Website**

![How Website works](./img/how_website_works.png)

1. Đầu tiên người dùng nhập vào trình duyệt một địa chỉ có dạng: [https://proptit.com](https://proptit.com), thực ra bạn chỉ cần gõ “proptit.com” là trình duyệt sẽ tự hiểu và đổi thành đường dẫn ở trên.
2. Trình duyệt gửi yêu cầu đến máy chủ DNS.
3. Hệ thống DNS trả kết quả phân tích tên miền trong đường dẫn đã gửi là proptit.vn, nó có địa chỉ máy chủ là 199.36.158.100 (cái này lúc đăng ký người ta đã gán sẵn, máy chủ DNS chỉ cần nhớ thôi).
4. Sau khi nhận được địa chỉ IP – nơi lấy dữ liệu, trình duyệt sẽ tìm đến địa chỉ IP đã nhận – tức máy chủ chứa nội dung website.
5. Máy chủ web nhận được yêu cầu truy xuất nội dung website và nó gửi một tập hợp các file bao gồm HTML, CSS , các tập tin đa phương tiện khác như âm thanh, hình ảnh (nếu có) cho trình duyệt;
6. Trình duyệt “dịch” các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình.

## **Cấu trúc căn bản một trang HTML**

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

## **Block and Inline elements**

Các phần tử trong HTML được phân chia làm 2 loại: **Block elements** (Các phần tử khối) và **Inline elements** (Các phần tử nội tuyến).

### **Block elements**

Các Block element (phần tử khối) khi hiển thị trên trình duyệt chúng sẽ tự động thêm các ngắt dòng (line break) vào phía trước và phía sau nó. Khi gọi 2 block elements ra thì mỗi element sẽ chiếm 1 dòng và width của các element này sẽ full luôn dòng đó.

```HTML
<div style="border: 1px solid blue">Hello World</div>

<p style="border-bottom: 2px solid red">Cùng tìm hiểu về block element và inline element.</p>
```

![Block elements](./img/block_elements.png)

Danh sách các Block element thường dùng:

| Col1           | Col2           | Col3       | Col4        |
| -------------- | -------------- | ---------- | ----------- |
| `<address>`    | `<figcaption>` | `<hgroup>` | `<article>` |
| `<figure>`     | `<hr>`         | `<aside>`  | `<li>`      |
| `<blockquote>` | `<form>`       | `<main>`   | `<details>` |
| `<h1> - <h6>`  | `<nav>`        | `<dialog>` | `<ol>`      |
| `<p>`          | `<dd>`         | `<div>`    | `<pre>`     |
| `<dl>`         | `<section>`    | `<table>`  | `<dt>`      |
| `<fieldset>`   | `<header>`     | `<ul>`     | `<footer>`  |

### **Inline elements**

Các Inline element (phần tử nội tuyến) thường xuất hiện trong một đoạn văn (sentence), khi hiển thị trên trình duyệt nó không tự động thêm các ngắt dòng (line break) vào phía trước và phía sau của nó.

```HTML
<a href="#" style="border: 1px solid blue;">Hello World</a>

<span style="border-bottom: 2px solid red;">Đây là inline element.</span>
```

![Inline elements](./img/inline_elements.png)

Danh sách các Inline element thường dùng:

| Col 1        | Col 2      | Col 3       | Col 4     |
| ------------ | ---------- | ----------- | --------- |
| `<a>`        | `<abbr>`   | `<acronym>` | `<b>`     |
| `<bdo>`      | `<big>`    | `<button>`  | `<cite>`  |
| `<code>`     | `<dfn>`    | `<em>`      | `<i>`     |
| `<img>`      | `<input>`  | `<kbd>`     | `<label>` |
| `<map>`      | `<object>` | `<output>`  | `<q>`     |
| `<samp>`     | `<script>` | `<select>`  | `<small>` |
| `<span>`     | `<strong>` | `<sub>`     | `<sup>`   |
| `<textarea>` | `<time>`   | `<tt>`      | `<var>`   |

## **Thẻ `<div>` và `<span>`**

### **Thẻ `<span> </span>`**

Thẻ `<span>` là thẻ khá đặc biệt trong HTML, theo mặc định thì thẻ `<span>` được thêm vào đoạn văn nhưng không làm thay đổi thuộc tính cũng như hiển thị của đoạn văn đó. Vì vậy chúng được gọi là thẻ trung tính trong HTML. Sự thay đổi của chúng chỉ được thay đổi khi chúng ta tác động chúng bằng CSS. Một điều quan trọng nữa là thẻ `<span>` là một thẻ **inline**

Điểm mạnh của thẻ này chính là tính chất trung tính của chúng. Nó chỉ bị thay đổi khi chúng ta tác động bằng CSS. 

Ví dụ:

```HTML
<span style="color: red; ">Màu đỏ, </span>
<span style="color: blue; ">Màu xanh nước biển, </span>
<span style="color: violet; ">Màu tím </span>
```

Kết quả:

<!DOCTYPE html>
 <html lang="en">
 <head
     <meta charset="UTF-8">
     <title>The span, div trong HTML</title>
 </head
 <body
     <span></span>
     <span style="color: red; ">Màu đỏ, </span>
     <span style="color: blue; ">Màu xanh nước biển, </span>
     <span style="color: violet; ">Màu tím </span>
 </body>
 </html>

### **Thẻ `<div> </div>`**

Không giống như thẻ `<span>` được dùng cho các thành phần nội tuyến, thẻ `<div>` được sử dụng để định nghĩa một khu vực trong trang web của bạn. Không đặc biệt như thẻ `<a>`,`<img>`,`<ul>`… dùng để hiển thị link, ảnh, danh sách.nhưng thẻ `<div>` lại có chức năng rất lớn trong việc thiết kế website như: Phân chia hoặc gộp các thẻ, khu vực khác nhau để tiện cho việc quản lý cũng như css cho chúng.

Theo mặc định thì thẻ `<div>` là một thẻ **block**, thẻ `<div>` thường được sử dụng kết hợp với CSS để tùy chỉnh layout cho trang web.

Ví dụ:

```HTML
<div style="width: 100px; margin: 0 auto;">
    <div style="border: 1px solid #DDD; height: 10@px;">Header</div>
    <div style="border: 1px solid #DDD; height: 40@px;">Main-content</div>
    <div style="border: 1px solid #DDD; height: 10@px;">Footer</div>
</div>

```

Kết quả:

<!DOCTYPE htm1>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thẻ span, div trong HTML</title>
</head>
<body>
    <div></div>
    <div style="width: 500px; margin: 0 auto; border: 1px solid green;">
        <div style="border: 1px solid #DDD; height: 20px;">Header</div>
        <div style="border: 1px solid #DDD; height: 40px;">Main content</div>
        <div style="border: 1px solid #DDD; height: 20px;">Footer</div>
    </div>
</body>
</html>

## **Các thẻ liên quan đến table trong HTML**

### **Thẻ `<table>`, `<tr>`, `<td>`, `<th>`**

Thẻ `<table>` được sử dụng để tạo ra một bảng trong HTML. Một bảng được tạo ra bởi các thẻ `<table>` và kết thúc bởi thẻ `</table>`. Mỗi hàng của bảng được tạo ra bởi thẻ `<tr>` và kết thúc bởi thẻ `</tr>`. Mỗi cột của bảng được tạo ra bởi thẻ `<td>` và kết thúc bởi thẻ `</td>`. Thẻ `<th>` được sử dụng để tạo ra một ô tiêu đề trong bảng.

### **Thẻ `<caption>`**

Thẻ `<caption>` được sử dụng để tạo ra một tiêu đề cho bảng. Thẻ `<caption>` được đặt bên trong thẻ `<table>` và nó chỉ có thể xuất hiện một lần trong một bảng.


Ví dụ:

```HTML
<table border="1">
    <caption>Danh sách sinh viên</caption>
    <tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Điểm</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Nguyễn Văn A</td>
        <td>9.0</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Nguyễn Văn B</td>
        <td>8.0</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Nguyễn Văn C</td>
        <td>7.0</td>
    </tr>
</table>
```

Kết quả:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thẻ caption trong HTML</title>
</head>

<body>
    <table border="1">
        <caption>Danh sách sinh viên</caption>
        <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Điểm</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>9.0</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Nguyễn Văn B</td>
            <td>8.0</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Nguyễn Văn C</td>
            <td>7.0</td>
        </tr>
    </table>

</body>
</html>

## **Thẻ `<img>`, `<video>`, `<link>`, `<audio>`**

### **Thẻ `<img>` - chèn hình ảnh vào văn bản**

Thẻ img chỉ có thẻ mở mà không có thẻ đóng

Cú pháp như sau :

```HTML
<img src="picture.png" width="400" height="100" border="1" alt="Mô tả về hình ảnh">
```

Trong đó :

 * src=”picture.png” là đường dẫn hình ảnh trong website
 * width : chiều rộng hình ảnh
 * height : chiều cao hình ảnh
 * height : chborder : đường viền xung quanh hình ảnh
 * height : chalt : Mô tả về hình ảnh. 

### **Thẻ `<video>`**

Thẻ `<video>` được dùng để tạo một "trình xem phim" cho trang web.

Để tạo một trình xem phim thì thẻ `<video>` cần phải được sử dụng kết hợp với thẻ `<source>` để xác định tập tin video mà bạn muốn phát.

 Ví dụ:

```HTML
<video controls>
    <source src="../file/bunny.mp4">
</video>
``` 

Kết quả:

<!DOCTYPE html>
<html>
<body>
    <video controls>
        <source src="./video/bunny.mp4">
    </video>
</body>
</html>

#### **Các thuộc tính được sử dụng trong thẻ `<video>`**

Thẻ `<video>` có chín thuộc tính cơ bản.

Dưới đây là bảng mô tả sơ lược về chín thuộc tính đó:

| Thuộc tính | Mô tả                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| src        | Xác định đường dẫn tới tập tin video                                     |
| autoplay   | Tự động phát video khi trang web được tải                                |
| controls   | Hiển thị các nút điều khiển video                                        |
| loop       | Lặp lại video khi video kết thúc                                         |
| muted      | Tắt âm thanh của video                                                   |
| poster     | Hiển thị một hình ảnh khi video đang tải                                 |
| preload    | Xác định xem video có nên được tải ngay khi trang web được tải hay không |
| height     | Chiều cao của video                                                      |
| width      | Chiều rộng của video                                                     |

### **Thẻ `<a>` tạo liên kết**

Các liên kết - link là một phần không thể thiếu cho mọi trang web. Ta có thể thêm link dạng text(văn bản) hay dạng ảnh mà người dùng bấm chuột vào nó để chuyển hướng đến một trang web khác, một file khác.

Thẻ `<a>` (anchor - mỏ neo) được dùng để tạo ra các liên kết, với thuộc tính href được thiết lập là siêu liên kết (hyperlink) trỏ tới các trang, các file, địa chỉ email, bất kỳ loại địa chỉ URL nào ... Nội dung trong thẻ `<a>` có thể là text, hình ảnh ... cho biết trang được liên kết đến.

Ví dụ:

```HTML
<p>
    - Facebook: <a href="https://www.facebook.com/minhdunk/">Nguyễn Đăng Minh</a> <br>
    - Github: <a href="https://github.com/monkeydminh49">monkeydminh49</a>
</p>
```

Kết quả:

<!DOCTYPE html>
<html>
<body>
<p>
    - Facebook: <a href="https://www.facebook.com/minhdunk/">Nguyễn Đăng Minh</a> <br>
    - Github: <a href="https://github.com/monkeydminh49">monkeydminh49</a>
</p>
</body>
</html>

#### **Một số thuộc tính của thẻ `<a>`**

##### **Thuộc tính href**

Thuộc tính `href` (hyperlink reference) để chỉ ra địa chỉ đích mà link mở ra.

Địa chỉ URL chỉ ra trong href có thể là địa chỉ tuyệt đối hoặc địa chỉ tương đối.

Ví dụ:

```HTML
<p>
    <a href="https://github.com/monkeydminh49/proptit-web/tree/master/img">Địa chỉ tuyệt đối</a> <br>
    <a href="../img">Địa chỉ tương đối</a>
</p>
```

Kết quả:

<!DOCTYPE html>
<html>
<body>
    <p>
        <a href="https://github.com/monkeydminh49/proptit-web/tree/master/img">Địa chỉ tuyệt đối</a> <br>
        <a href="../img">Địa chỉ tương đối</a>
    </p>
</body>
</html>

