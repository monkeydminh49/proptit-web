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

![Span](./img/span.png)

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

![Div](./img/div.png)

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
<head>
</head>
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
    Image files: 
    <a href="https://github.com/monkeydminh49/proptit-web/tree/master/img">Địa chỉ tuyệt đối</a> |
    <a href="./img">Địa chỉ tương đối</a>
</p>
```

Kết quả:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <p>
        Image files: 
        <a href="https://github.com/monkeydminh49/proptit-web/tree/master/img">Địa chỉ tuyệt đối</a> |
        <a href="./img">Địa chỉ tương đối</a>
    </p>
</body>
</html>

**Địa chỉ mail và số điện thoại**

`href` nếu là email thì viết "mailto:youremail"

`href` là số điện thoại thì viết: "tel:phonenumber"

Ví dụ:

```HTML
<p>
    Email:  
        <a href="mailto:nguyendangminh49@gmail.com">nguyendangminh49@gmail.com</a> <br>
        Phone number:
        <a href="tel:0123456789">0123456789</a>
</p>
```

<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <p>
        Email:  
        <a href="mailto:nguyendangminh49@gmail.com">nguyendangminh49@gmail.com</a> <br>
        Phone number:
        <a href="tel:0123456789">0123456789</a>
    </p>
</body>
</html>

##### **Thuộc tính target**

Thuộc tính `target` được sử dụng để chỉ định cách thức mở liên kết.

Một số giá trị của thuộc tính `target`:

- _blank: mở liên kết trong một tab mới
- _self: mở liên kết trong cùng một tab

Ví dụ:

```HTML
<p>
    <a href="https://www.facebook.com/minhdunk/" target="_blank">Facebook</a>
</p>
```

Kết quả:

<!DOCTYPE html>
<html>
<body>
    <p>
        <a href="https://www.facebook.com/minhdunk/" target="_blank">Facebook</a>
    </p>
</body>
</html>

### **Thẻ `<audio>`**

Thẻ `<audio>` được dùng để tạo một "trình phát nhạc" cho trang web.

Ví dụ:

```HTML
<audio controls>
    <source src="./audio/bell.mp3">
</audio>
```

Kết quả:

<!DOCTYPE html>
<html>
<body>
    <audio controls>
        <source src="./audio/bell.mp3">
    </audio>
</body>
</html>

**Các thuộc tính được sử dụng trong thẻ <audio>**

| Thuộc tính | Mô tả                                                                       |
| ---------- | --------------------------------------------------------------------------- |
| src        | Xác định đường dẫn tới tập tin audio                                        |
| controls   | Hiển thị trình phát lên màn hình                                            |
| autoplay   | Tự động phát audio khi trang web được tải                                   |
| loop       | Lặp lại audio khi video kết thúc                                            |
| muted      | Tắt âm thanh của audio                                                      |
| preload    | Xác định việc tập tin âm thanh có được tải cùng với lúc tải trang hay không |

## **Semantic elements**

Hiện nay có rất nhiều website vẫn đang thiết kế dựa trên các mã HTML như sau:

```HTML
<div class=”header”> <div id=”footer”>
```

để tạo giao diện có menu điều hướng (nav), đầu trang (header) và cuối trang (footer).
Dưới đây, HTML5 cung cấp các phần tử semantic mới để xác định từng phần khác nhau của một trang web:

![Semantic elements](./img/semantic-elements.gif)

Bao gồm: `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>`.

### **1. Element `<section>`**

**Element `<section>`** đại diện cho một phần chung có trong tài liệu hoặc ứng dụng.

Cụ thể hơn, một section là một nhóm các nội dung có cùng chủ đề.

Ví dụ: trang chủ của một trang web có thể được chia thành các section như giới thiệu, nội dung, thông tin liên lạc, góp ý…

```HTML
<section>
    <h1>Giới thiệu</h1>
    <p>...</p>
</section>
<section>
    <h1>Nội dung</h1>
    <p>...</p>
</section>
<section>
    <h1>Thông tin liên lạc</h1>
    <p>...</p>
</section>
<section>
    <h1>Góp ý</h1>
    <p>...</p>
</section>
```

### **2. Element `<article>`**

**Element `<article>`** đại diện cho một phần độc lập, có thể tái sử dụng trong một tài liệu hoặc ứng dụng.

Cụ thể hơn, một article là một phần tử có thể tự đứng một mình, có thể được xuất bản độc lập với các phần khác của tài liệu hoặc ứng dụng.

Ví dụ: một bài viết trên blog, một bài báo, một bài thảo luận, một bài thơ, một bài hướng dẫn, một bài đánh giá…

```HTML
<article>
    <h1>CLB Lập Trình PTIT</h1>
   <p>CLB Lập Trình PTIT là một trong những CLB học thuật được thành lập sớm nhất tại Học viện. CLB có một bề dày truyền thống đáng tự hào, một truyền thống được xây dựng và ngày càng lớn mạnh qua từng thế hệ, từng giải thưởng, từng thành tựu mà CLB đã đạt được.</p> <br>
   <a herf="https://proptit.com/phong-truyen-thong/">Phòng truyền thống CLB Lập Trình PTIT</a>
</article>
<article>
    <h1>Bài viết 2</h1>
    <p>...</p>
</article>
<article>
    <h1>Bài viết 3</h1>
    <p>...</p>
</article>
```

Kết quả:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
<article>
    <h1>CLB Lập Trình PTIT</h1>
   <p>CLB Lập Trình PTIT là một trong những CLB học thuật được thành lập sớm nhất tại Học viện. CLB có một bề dày truyền thống đáng tự hào, một truyền thống được xây dựng và ngày càng lớn mạnh qua từng thế hệ, từng giải thưởng, từng thành tựu mà CLB đã đạt được.</p>
   Cre: <a href="https://proptit.com/phong-truyen-thong/">Phòng truyền thống CLB Lập Trình PTIT</a>
</article>
<article>
    <h1>Bài viết 2</h1>
    <p>...</p>
</article>
<article>
    <h1>Bài viết 3</h1>
    <p>...</p>
</article>
</body>

### **3. Element `<header>`**

**Element `<header>`** xác định phần đầu của một trang tài liệu hay phần đầu của một đoạn. Nó được sử dụng như một containter chứa nội dung giới thiệu hoặc mở đầu.

Có thể sử dụng một hoặc nhiều phần tử <header> trong một tài liệu.

```HTML
<header>
    <h1>CLB Lập Trình PTIT</h1>
    <p>...</p>
</header>
```

### **4. Element `<footer>`**

**Element `<footer>`** xác định phần cuối của một trang tài liệu hay phần cuối của một đoạn. Nó được sử dụng như một containter chứa nội dung chú thích hoặc thông tin liên hệ.

```HTML
<footer>
    <p>Liên hệ với chúng tôi</p>
    <p>Số điện thoại: 085 872 4654</p>
    <p>Email: clblaptrinhptit@gmail.com</p>
    <p>Website: proptit.com</p> 
</footer>
```

### **5. Element `<nav>`**

**Element `<nav>`** xác định một khu vực điều hướng trong một tài liệu, bao gồm một tập hợp các liên kết.

```HTML
<nav>
    <a href="/">TRANG CHỦ</a>
    <a href="/dao-tao/"">ĐÀO TẠO</a>
    <a href="/su-kien/">SỰ KIỆN</a>
    <a href="/phong-truyen-thong/">PHÒNG TRUYỀN THỐNG</a>
</nav>
```

![nav](./img/nav.png)

### **6. Element `<main>`**

**Thẻ `<main>`** xác định phần thân của trang, nó thường được dùng để chứa các nội dung chính của trang web.

```HTML
<main>
    <h1>HỌC LÀM WEBSITE BẮT ĐẦU TỪ ĐÂU?</h1>
    <p>Chúng tôi khẳng định với bạn rằng: "Bạn hoàn toàn có thể học và làm được website" nếu kiên trì mỗi ngày dành ra một vài giờ để học. Tùy vào mức độ chăm chỉ, tuy nhiên tối đa không quá sáu tháng bạn sẽ có thể bắt đầu tự làm được website.</p>
</main>
```

## **HTML text fundamentals**

### **1. Element `<h1> - <h6>`**

**Element `<h1> - <h6>`** xác định tiêu đề của một trang hoặc một đoạn văn bản.

```HTML
<h1>Đây là tiêu đề h1</h1>
<h2>Đây là tiêu đề h2</h2>
<h3>Đây là tiêu đề h3</h3>
<h4>Đây là tiêu đề h4</h4>
<h5>Đây là tiêu đề h5</h5>
<h6>Đây là tiêu đề h6</h6>
```

Kết quả:
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>Đây là tiêu đề h1</h1>
    <h2>Đây là tiêu đề h2</h2>
    <h3>Đây là tiêu đề h3</h3>
    <h4>Đây là tiêu đề h4</h4>
    <h5>Đây là tiêu đề h5</h5>
    <h6>Đây là tiêu đề h6</h6>
</body>
</html>

### **2. Element `<p>`**

**Element `<p>`** xác định một đoạn văn bản.

```HTML
<p>Đây là một đoạn văn bản.</p>
```

**Các thẻ được dùng với thẻ `<p>`**

Những thẻ được dùng trong thẻ `<p>` bao gồm: 

* Thẻ liên kết `<a></a>`
* Thẻ `<img/>` (image): hiển thị một hình ảnh
* Thẻ `<span></span>`: dùng để nhóm các inline
* Thẻ `<strong></strong>`: được dùng để đánh dấu, nhấn mạnh text
* Thẻ `<em></em>`: được dùng để nhấn mạnh nội dung văn bản
* Thẻ `<br></br>`: dùng để ngắt đoạn văn bản 

**Các thẻ không được dùng với thẻ `<p>`**

Những thẻ có thể dùng với thẻ `<p>` bên trên đều thuộc nhóm thẻ inline, còn lại không thể chứa được các nhóm thẻ block. 

Nhóm các thẻ block bao gồm:

* Thẻ xác định danh sách: `<ul>`, `<ol>`, `<dl>`, ...
* Thẻ xác định bố cục trang web: `<div>`, `<header>`, `<section>`, ...
* Thẻ xác định bố cục nội dung: `<article>`, `<h1> - <h6>`, ...

### **3. Thẻ `<ol>`tạo danh sách có thứ tự**
Thẻ `<ol>` (ordered list) dùng để tạo danh sách có thứ tự, mỗi phần tử trong danh sách được định nghĩa bằng thẻ `<li>`

Đây là một ví dụ về danh sách có thứ tự:

```HTML
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>C#</li>
</ol>
```

Kết quả:
<!DOCTYPE html>
<html>
<head>
<body>
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>C#</li>
    </ol>
</body>
</head>
</html>

Các phần tử trong danhh sách `<ol>` tự động được đánh chỉ số : 1, 2, 3 ...

**Thiết lập chỉ số `<ol>` thuộc tính `type` và `start`**

Thuộc tính **type** của `<ol>` gán bằng 1, a, A, i để thiết lập một số kiểu đánh số:

* a : dùng chữ thường để đánh chỉ số (a, b, c ...)
* A : dùng chữ in để đánh chỉ số (A, B, C ...)
* i : hoặc I đánh theo số la mã (i, ii, iii ...)
* 1 : kiểu mặc định (dùng số 1,2,3,...)

Thuộc tính **start** của `<ol>` gán bằng số nguyên, để thiết lập giá trị chỉ số của phần tử đầu tiên, mặc định là 1 (phần tử tiếp theo tăng giá trị 1 đơn vị). Trong vị dụ sau, bạn thử thay đổi thuộc tính start và type để xem kết quả trực tiếp. Ngoài ra bạn cũng thử cho thuộc tính reversed, kể cả thử cho thuộc tính value của `<li>`.

```HTML
<ol type="i" start="3">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Lập trình C#</li>
    <li>Lập trình PHP</li>
</ol>
``` 

Kết quả:

<!DOCTYPE html>
<html>
<head>
<body>
    <ol type="i" start="3">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Lập trình C#</li>
        <li>Lập trình PHP</li>
    </ol>
</body>
</head>
</html>

Thuộc tính **reversed** bằng true thì chỉ số đánh từ lớn xuống nhỏ.

### **4. Thẻ `<ul>` tạo danh sách không có thứ tự**
Cách tạo danh sách không có thứ tự tương tự như tạo danh sách có thứ tự chỉ thay thẻ `<ol>` bằng thẻ `<ul>` (unordered list)

Đây là một ví dụ về danh sách không có thứ tự:

```HTML
<ul type="circle">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>C#</li>
</ul>
```

<!DOCTYPE html>
<html>
<head>
<body>
    <ul type="circle">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>C#</li>
    </ul>
</body>
</head>
</html>

Các phần tử trong danhh sách ul mặc định được đánh dấu đầu dòng bằng ký hiệu hình tròn. Thuộc tính type của `<ul>` cho phép thay đổi ký hiệu này bằng các giá trị: `circle`, `disc` hoặc `square`.

---

## **Các thẻ liên quan đến Form**

**HTML Form là gì?**

Một HTML Form là một phần của trang web có chứa các điều khiển như các trường văn bản, các trường mật khẩu, các checkbox, các radio button, submit button, các menu...

HTML Form là phương tiện cho người dùng nhập dữ liệu được gửi đến máy chủ để xử lý.

**Khai báo HTML Form**

```HTML
<form action="server url" method="get|post">  
  ...
</form>
```

Thẻ `<form>` cơ bản có hai thuộc tính cần lưu tâm là `action` và `method`:

* Thuộc tính `action` trong form: thuộc tính để thiết lập URL sẽ nhận dữ liệu, là địa chỉ mà dữ liệu của form gửi đến (submit đến, post đến). Thiếu tham số này thì `action` bằng URL đang truy cập (tức gửi thông tin form đến server theo địa chỉ đang truy cập). Web server nhận được dữ liệu, xử lý và trả về nội dung nào đó.

* Thuộc tính `method` trong form: thuộc tính để thiết lập HTTP `Method`, xem thêm HTTP Request Message thường có giá trị bằng get hoặc post. Nếu không viết thuộc tính này thì `method` mặc định của form là get

Sử dụng `method="get"` thì khi submit dữ liệu được biểu diễn (encoding) thông qua URL (người dùng thấy rõ dữ liệu trên thanh địa chỉ trình duyệt khi nó gửi đi). Sử dụng `method="post"` thì khi submit biểu diễn trong nội dung của Http Request gửi đến Server và là ẩn với người dùng. Sử dụng post an toàn hơn.

**Các thẻ HTML sử dụng trong Form**

| Thẻ          | Mô tả                                                                     |
| ------------ | ------------------------------------------------------------------------- |
| `<form>`     | Định nghĩa một HTML Form để nhập liệu từ phía người dùng.                 |
| `<input>`    | Định nghĩa một điền khiển nhập liệu dự vào thuộc tính type của nó.        |
| `<textarea>` | Định nghĩa ô nhập văn bản có thể nhập nhiều dòng.                         |
| `<label>`    | Định nghĩa nhãn cho các input.                                            |
| `<fieldset>` | Nhóm các phần tử liên quan.                                               |
| `<legend>`   | Định nghĩa mô tả cho thẻ `<fieldset>`.                                    |
| `<select>`   | Định nghĩa một danh sách drop-down.                                       |
| `<optgroup>` | Định nghĩa một nhóm các tùy chọn liên quan thành một danh sách drop-down. |
| `<option>`   | Định nghĩa một option trong một danh sách drop-down.                      |
| `<button>`   | Định nghĩa một nút có thể click.                                          |

---

### **1. Thẻ `<label>`**

Đây được xem là một cách tốt hơn để hiển thị nhãn trong form. Vì nó tạo được trải nghiệm thân thiện hơn cho người dùng/trình duyệt/bộ phân tích mã nguồn.

Khi click vào thẻ label, nó sẽ focus vào ô nhập text tương ứng. Để làm được như vậy, cần có thuộc tính `for` trong thẻ label phải giống với thuộc tính `id` trong thẻ input.

```HTML
<form>  
  <label for="firstname">First Name: </label>  
  <input type="text" id="firstname" name="firstname"/> <br/>  
  <label for="lastname">Last Name: </label>  
  <input type="text" id="lastname" name="lastname"/> <br/>  
</form>
```

Kết quả:

<!DOCTYPE html>
<html>
<head>
<body>
    <form>  
        <label for="firstname">First Name: </label>  
        <input type="text" id="firstname" name="firstname"/> <br/>  
        <label for="lastname">Last Name: </label>  
        <input type="text" id="lastname" name="lastname"/> <br/>  
    </form>
</body>
</head>
</html>

---

### **2. Thẻ `<input>`**

Thẻ `<input>` trong HTML được sử dụng để biểu diễn một trường input nơi mà người dùng có thể **nhập được dữ liệu**.

Cấu trúc:

```HTML
<form action="#">
<input type="" />
</form>
```

Ví dụ:

```HTML
<form action="#">
<ul>
<li>Họ tên: <input type="text" value="" size="25" /></li>
<li>Email: <input type="text" value="" size="25" /></li>
<li>Ngày sinh: <input type="text" value="" size="8" /></li>
</ul>
<p><input type="submit" value="Gửi ngay" /></p>
</form>
```

Kết quả:
<!DOCTYPE html>
<html>
<head>
<body>
    <form action="#">
        <ul>
        <li>Họ tên: <input type="text" value="" size="25" /></li>
        <li>Email: <input type="text" value="" size="25" /></li>
        </ul>
        <p><input type="submit" value="Gửi ngay" /></p>
    </form>
</body>
</head>
</html>


Dạng của `<input />` có thể có rất nhiều dạng khác nhau, chúng tùy thuộc vào thuộc tính tùy chọn type, có thể là text, một checkbox, một trường password, một button radio, một button, …

Lời khuyên: Sử dụng tag <label> để tạo nhãn cho các thành phần `<input />`

**Thuộc tính của thẻ `<input>`**

| Thuộc tính  | Mô tả                                                                      |
| ----------- | -------------------------------------------------------------------------- |
| type        | Xác định kiểu của input.                                                   |
| name        | Xác định tên của input.                                                    |
| value       | Xác định giá trị của input.                                                |
| size        | Xác định kích thước của input.                                             |
| maxlength   | Xác định số ký tự tối đa mà người dùng có thể nhập vào input.              |
| readonly    | Xác định input có chỉ được đọc hay không.                                  |
| disabled    | Xác định input có bị vô hiệu hóa hay không.                                |
| action      | Xác định đường dẫn đến trang xử lý dữ liệu khi người dùng nhấn nút submit. |
| placeholder | Xác định văn bản mô tả cho input.                                          |

**Các loại (type) `<input/>` trong HTML**

Các thẻ input trong html đều giống nhau về cấu trúc và chỉ khác nhau về type. Chính type này sẽ quyết định kiểu của input. Có đến hơn 20 type khác nhau. Có một số type input chỉ được hỗ trợ trong HTML5 mà thôi. 

Các type dưới đây là type được tất cả các trình duyệt thông dụng hỗ trợ.

**1. Nhập text**

```HTML
<input name="hoten" type="text" />
```

Kết quả:

<input name="hoten" type="text" /><br/>

**2. Nhập password**

```HTML
<input name="psw" type="password" />
```

Kết quả:

<input name="psw" type="password" /><br/>

**3. File đính kèm**

```HTML
<input type="file" name="anh">
```

Kết quả:

<input type="file" name="anh"><br/>

**4. Button reset**

```HTML
<form action="#">
    Thành phố: <input type="text" name="thành phố"><br/>
    Nơi cư trú: <input type="text" name="nơi cư trú"><br/>
    <input type="reset" value="Reset">
</form>
```

Kết quả:

<form action="#">
    Thành phố: <input type="text" name="thành phố"><br/>
    Nơi cư trú: <input type="text" name="nơi cư trú"><br/>
    <input type="reset" value="Reset">
</form><br/>

**5. Button submit**

```HTML
<form action="#">
    Tên trường học: <input name="tentruonghoc" type="text" /><br />
    Giáo viên chủ nhiệm: <input name="giaovienchunhiem" type="text" /><br />
    <input type="submit" value="Send" />
</form>
```

Kết quả:

<form action="#">
    Tên trường học: <input name="tentruonghoc" type="text" /><br />
    Giáo viên chủ nhiệm: <input name="giaovienchunhiem" type="text" /><br />
    <input type="submit" value="Send" />
</form>
<br/>

**6. Ẩn input**

```HTML
<form action="#">
    Họ tên đầy đủ: <input type="text" name="hotendaydu"><br>
    <input type="hidden" name="quocgia" value="Hàn Quốc">
    <input type="submit" value="Submit">
</form>
```

Kết quả:

<form action="#">
    Họ tên đầy đủ: <input type="text" name="hotendaydu"><br>
    <input type="hidden" name="quocgia" value="Hàn Quốc">
    <input type="submit" value="Submit">
</form>
<br/>

**7. Radio button**

```HTML
<form action="#">
    <input name="quequan" type="radio" value="Bình Định" />Bình Định<br />
    <input name="quequan" type="radio" value="Gia Lai" />Gia Lai<br />
    <input name="gioitinh" type="radio" value="Phú Yên" />Phú Yên<br />
</form>
```

Kết quả:
<form action="#">
    <input name="quequan" type="radio" value="Bình Định" />Bình Định<br />
    <input name="quequan" type="radio" value="Gia Lai" />Gia Lai<br />
    <input name="gioitinh" type="radio" value="Phú Yên" />Phú Yên<br />
</form><br/>


**8. Checkbox**

```HTML
<form action="#">
    <input name="thethao" type="checkbox" value="Tennis" />Tennis<br />
    <input name="thethao" type="checkbox" value="Quần vợt" />Quần vợt<br />
    <input name="thethao" type="checkbox" value="Bóng rổ" />Bóng rổ<br />
    <input name="thethao" type="checkbox" value="Bóng bàn" />Bóng bàn<br />
    <input name="thethao" type="checkbox" value="Karate" />Karate
</form>
```

Kết quả:

<form action="#">
    <input name="thethao" type="checkbox" value="Tennis" />Tennis<br />
    <input name="thethao" type="checkbox" value="Quần vợt" />Quần vợt<br />
    <input name="thethao" type="checkbox" value="Bóng rổ" />Bóng rổ<br />
    <input name="thethao" type="checkbox" value="Bóng bàn" />Bóng bàn<br />
    <input name="thethao" type="checkbox" value="Karate" />Karate
</form><br/>

---

### **3. Thẻ `<textarea>`**

Thẻ `<textarea>` dùng để tạo ra phần tử HTML cho phép nhập nhiều dòng chữ (nhấn Enter xuống dòng). Sử dụng thẻ này, khi cần nhập dữ liệu dài như nhận các phản hồi, viết nội dung ...

```HTML
<form action="https://httpbin.org/anything" method="post">
    <label for="content">Nhập nội dung cần tư vấn:</label><br>
    <textarea id="content" name="content" rows="5" cols="20">
        TextArea là phần tử ...
        <p>Đây là thẻ P</p>
    </textarea><br>
    <input type="submit" value="Gửi">
</form>
```

Kết quả:

<form action="https://httpbin.org/anything" method="post">
    <label for="content">Nhập nội dung cần tư vấn:</label><br>
    <textarea id="content" name="content" rows="2" cols="30"> TextArea là phần tử ...
        <p>Đây là thẻ P</p></textarea><br>
    <input type="submit" value="Gửi">
</form><br/>

Thẻ `<textarea>` khác với `<input>` nó không có thuộc tính giá trị value, toàn bộ nội dung giữa đóng và mở thẻ `<textarea>` là dữ liệu của phần tử.

Kể cả mã HTML trong thẻ `<textarea>` đều được coi là dữ liệu text của nó. Ví dụ trên, viết thẻ p trong nội dung.

**Các thuộc tính `<textarea>`**

Tương tự như các control khác trong FORM, có thuộc tính name và value, kể cả disabled, placeholder giống như thẻ `<input>`, ngoài ra có các thuộc tính riêng sau:

* `cols` : Thuộc tính thiết lập độ rộng của `control`, theo độ rộng ký tự trung bình. Mặc định `cols="20"`.

* `rows` : Thuộc tính thiết lập số dòng của `<textarea>` Mặc định `rows="2"`.

---

**4. Thẻ `<button>`**

Thẻ `<button>` trong HTML được sử dụng để tạo các nút có thể click bên trong form trên trang web của bạn. Bạn có thể đặt nội dung như văn bản hoặc hình ảnh vào bên trong thẻ `<button>........</button>`.

Nên luôn chỉ định thuộc tính type cho một thẻ `<button>`. Vì các trình duyệt sử dụng kiểu mặc định khác nhau cho phần tử button.

Thẻ `<button>` có thể được sử dụng bên trong hoặc bên ngoài form.

**Bên trong form**, nó có tác dụng như một nút gửi hoặc reset form.

**Bên ngoài form**, nó có thể gọi hàm JavaScript để thực hiện một nhiệm vụ nào đó.

***Ví dụ thẻ button:***

```HTML
<button name="button" type="button">Click Here</button>
```

Kết quả:

<button name="button" type="button">Click Here</button><br/>

***Ví dụ thẻ button: gọi hàm JavaScript***

Trong ví dụ này, khi click nút `click here` trình duyệt sẽ hiển thị thông báo với nội dung "hello html button":

```HTML
<button name="button" value="OK" type="button" onclick="hello()">Click Here</button>  
<script>  
  function hello(){  
    alert("hello html button");  
  }  
</script>
```

Kết quả:

<button name="button" value="OK" type="button" onclick="hello()">Click Here</button>  
<script>  
  function hello(){  
    alert("hello html button");  
  }  
</script>

***Ví dụ thẻ button: Submit Form***

Trong ví dụ này, khi click nút `Submit`, các thông tin trong form sẽ được gửi đến máy chủ.

```HTML
<form>  
    Enter Name:<input type="text" name="name"/><br/>  
    <button>Submit</button>  
</form> 
``` 

Kết quả:

<form>  
    Enter Name:<input type="text" name="name"/><br/>  
    <button>Submit</button>  
</form> <br/>

***Ví dụ thẻ button trong HTML: Reset Form***

Trong ví dụ này, khi bạn click vào nút resut thì những phần tử trong form được reset về giá trị ban đầu.

```HTML
<form>  
    Enter Name: <input type="text" name="name"/><br/>  
    <button type="reset">reset</button>  
</form>
```

Kết quả:

<form>  
    Enter Name:<input type="text" name="name"/><br/>  
    <button type="reset">Reset</button>  
</form><br/>

**Các thuộc tính của thẻ button trong HTML**

Thẻ `<button>` hỗ trợ toàn bộ thuộc tính chung như các thẻ HTML khác và một số thuộc tính bổ xung trong bảng sau:

| Thuộc tính     | Mô tả                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| autofocus      | Chỉ định rằng một nút sẽ tự động focus trong khi tải trang.                                              |
| disabled       | Chỉ định một button sẽ bị vô hiệu hóa.                                                                   |
| form           | Chỉ định button này thuộc về một hoặc nhiều form.                                                        |
| formaction     | Được sử dụng cho kiểu submit. Nó chị định rằng dữ liệu của form sẽ được gửi đi đâu khi form được submit. |
| formmethod     | Chỉ đinh dữ liệu của form được gửi như thế nào.                                                          |
| formenctype    | Nó chỉ định cách dữ liệu của form nên được mã hóa trước khi gửi nó tới máy chủ.                          |
| formnovalidate | Chỉ định rằng dữ liệu của form nên được kiểm tra tính hợp lệ khi submit.                                 |
| formtarget     | Chỉ định dữ liệu trả về sẽ được hiển thị ở đâu sau khi submit form.                                      |
| name           | Chỉ định tên của button.                                                                                 |
| type           | Chỉ định kiểu của button.                                                                                |
| value          | Chỉ định giá trị của button.                                                                             |

---

## **Một số thẻ khác**

### **1. Element `<br>`**

**Element `<br>`** xác định một dòng xuống dòng.

```HTML
<p>Đây là một đoạn văn bản.<br>Đây là một dòng mới.</p>
```

<p>Đây là một đoạn văn bản.<br>Đây là một dòng mới.</p>

### **2. Element `<hr>`**

**Element `<hr>`** xác định một đường ngang.

```HTML
<p>Đây là một đoạn văn bản.</p>
<hr>
<p>Đây là một đoạn văn bản.</p>
```

<p>Đây là một đoạn văn bản.</p>
<hr>
<p>Đây là một đoạn văn bản.</p>

### **3. Element `<b>`**

**Element `<b>`** xác định một văn bản in đậm.

```HTML
<p>Đây là một đoạn văn bản <b>in đậm</b>.</p>
```

<p>Đây là một đoạn văn bản <b>in đậm</b>.</p>

### **4. Element `<strong>`**

**Element `<strong>`** xác định một văn bản quan trọng.

```HTML
<p>Đây là một đoạn văn bản <strong>quan trọng</strong>.</p>
```

<p>Đây là một đoạn văn bản <strong>quan trọng</strong>.</p>

### **5. Element `<i>`**

**Element `<i>`** xác định một văn bản in nghiêng.

```HTML
<p>Đây là một đoạn văn bản <i>in nghiêng</i>.</p>
```

<p>Đây là một đoạn văn bản <i>in nghiêng</i>.</p>

### **6. Element `<em>`**

**Element `<em>`** xác định một văn bản nhấn mạnh.

```HTML
<p>Đây là một đoạn văn bản <em>nhấn mạnh</em>.</p>
```

<p>Đây là một đoạn văn bản <em>nhấn mạnh</em>.</p>

### **7. Element `<mark>`**

**Element `<mark>`** xác định một văn bản được đánh dấu.

```HTML
<p>Đây là một đoạn văn bản <mark>được đánh dấu</mark>.</p>
```

<p>Đây là một đoạn văn bản <mark>được đánh dấu</mark>.</p>

### **8. Element `<small>`**

**Element `<small>`** xác định một văn bản nhỏ.

```HTML
<p>Đây là một đoạn văn bản <small>nhỏ</small>.</p>
```

<p>Đây là một đoạn văn bản <small>nhỏ</small>.</p>

### **9. Element `<del>`**

**Element `<del>`** xác định một văn bản bị xóa.

```HTML
<p>Đây là một đoạn văn bản <del>bị xóa</del>.</p>
```

<p>Đây là một đoạn văn bản <del>bị xóa</del>.</p>

### **10. Element `<ins>`**

**Element `<ins>`** xác định một văn bản được thêm vào.

```HTML
<p>Đây là một đoạn văn bản <ins>được thêm vào</ins>.</p>
```

<p>Đây là một đoạn văn bản <ins>được thêm vào</ins>.</p>

### **11. Element `<sub>`**

**Element `<sub>`** xác định một văn bản dưới chân.

```HTML
<p>Đây là một đoạn văn bản <sub>dưới chân</sub>.</p>
```

<p>Đây là một đoạn văn bản <sub>dưới chân</sub>.</p>

### **12. Element `<sup>`**

**Element `<sup>`** xác định một văn bản trên đầu.

```HTML
<p>Đây là một đoạn văn bản <sup>trên đầu</sup>.</p>
```

<p>Đây là một đoạn văn bản <sup>trên đầu</sup>.</p>

### **13. Element `<q>`**

**Element `<q>`** xác định một đoạn văn bản trích dẫn.

```HTML
<p>Đây là một đoạn văn bản <q>trích dẫn</q>.</p>
```

<p>Đây là một đoạn văn bản <q>trích dẫn</q>.</p>

### **14. Element `<blockquote>`**

**Element `<blockquote>`** xác định một đoạn văn bản trích dẫn dài.

```HTML
<blockquote>
    <p>Đây là một đoạn văn bản trích dẫn dài.</p>
    <p>Đây là một đoạn văn bản trích dẫn dài.</p>
    <p>Đây là một đoạn văn bản trích dẫn dài.</p>
</blockquote>
```

<blockquote>
    <p>Đây là một đoạn văn bản trích dẫn dài.</p>
    <p>Đây là một đoạn văn bản trích dẫn dài.</p>
    <p>Đây là một đoạn văn bản trích dẫn dài.</p>
</blockquote>

### **15. Element `<abbr>`**

**Element `<abbr>`** xác định một từ viết tắt.

```HTML
<p>Đây là một đoạn văn bản <abbr title="World Wide Web">WWW</abbr>.</p>
```

<p>Đây là một đoạn văn bản <abbr title="World Wide Web">WWW</abbr>.</p>

### **16. Element `<address>`**

**Element `<address>`** xác định thông tin liên hệ của tác giả/proprietor của một trang web hoặc một phần của trang web.

```HTML
<address>
    <p>Địa chỉ: 123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh</p>
    <p>Điện thoại: 0123456789</p>
</address>
```

<address>
    <p>Địa chỉ: 123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh</p>
    <p>Điện thoại: 0123456789</p>
</address>

### **17. Element `<cite>`**

**Element `<cite>`** xác định một tài liệu được trích dẫn.

```HTML
<p>Đây là một đoạn văn bản <cite>trích dẫn</cite>.</p>
```

<p>Đây là một đoạn văn bản <cite>trích dẫn</cite>.</p>
