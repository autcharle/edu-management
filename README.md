# Thông tin nhóm Group-03
| MSSV | Họ và Tên |
| :---: | :---: |
| 20120116 | Phạm Lê Quốc Khánh |
| 20120303 | Phạm Phúc An Khang |
| 20120313 | Phan Tấn Kiệt |
| 1712891 | Trần Thuý Tuyền |
# Giới thiệu project quản lí học sinh
Trong thời đại 4.0, nhu cầu số hóa các quy trình nghiệp vụ đã trở thành xu thế. Vì vậy, việc dành thời gian, tài chính để phát triển phần mềm quản lý trở thành nhu cầu thiết yếu. Ở môi trường giáo dục, quy trình quản lý phức tạp tạo động lực số hóa và công nghệ hoá. Dự án phát triển phần mềm quản lý học sinh được bắt đầu với yêu cầu thu thập từ khảo sát thị trường và từ chính khách hàng.
# Môi trường thực thi
- Hệ điều hành Windows 10, Windows 11
- Framework: MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) 
# Hướng dẫn chạy project

**1. Cài đặt Nodejs trên Windows**
Tải và cài đặt [Node.js tại trang web chính thức](https://nodejs.org/).

Cài đặt `yarn` từ `npm`
```
npm install yarn --global yarn install
```
Và hãy chắc rằng bạn cũng cài đặt `git`.

**2. Clone project**
```
git clone https://github.com/autcharle/student-tracker.git
```
Chuyển đến thư mục chứa project
```
cd student-tracker
```
**4. Cài đặt các dependency**
```
yarn install
```  
**5. Chạy chương trình**  
Khởi chạy frontend
```
yarn run start
```  
Khởi chạy backend
```
yarn run start:server
```  
**8. Đăng nhập và sử dụng**
  

# Hướng dẫn deploy project lên Heroku

## Deploy frontend
1. Cài đặt react-scripts
`yarn add react-script`

2. Từ thư mục frontend tạo thư mục public và chuyển file index.html vào

3. Xoá những script có liên quan đến vite.js như vite.config.js và trong package.json.

4. Thay scripts trong package.json bằng đoạn code sau:
```
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0"
  },
```
5. Chạy lệnh để sau đây để built project
`npm run build`

6. Chạy lệnh sau đây để kiểm tra frontend đã chạy được trên local hay không
`npm start`

7. Cài đặt Heroku CLI. Bạn có thể tải trên website của Heroku.

6. Mở terminal đăng nhập vào Heroku và chuyển đến thư mục frontend.
`heroku login`
`cd frontend/`

8. Cài đặt Git repository bằng cách chạy dòng lệnh:
`git init`

9. Tạo Heroku app:
`heroku create`

10. Chuyển sang Heroku stack 20
`heroku stack:set heroku-20 -a`

11. Thiết lập buildpack
`heroku buildpacks:add https://github.com/mars/create-react-app-buildpack <your-heroku-app-name>`

12. Commit thay đổi:
`git add .`
`git commit -m "Initial commit"`

13. Deploy lên Heroku:
`git push heroku master`

14. Khi hàn thành mở app bằng lệnh:
`heroku open`

## Deploy server
1. Chuyển đến thư mục server.
`cd server/.`

2. Thay scripts trong package.json bằng đoạn code sau:
```
  "scripts": {
    "start": "node src/index.js"
}
```

3 Cài đặt Git repository bằng cách chạy dòng lệnh:
`git init`

4. Tạo Heroku app:
`heroku create`

5. Commit thay đổi:
`git add .`
`git commit -m "Initial commit"`

6. Deploy lên Heroku:
`git push heroku master`

# Video demo
- [Video demo đồ án](https://youtu.be/zjVZrykHoE4)

# Website 
- https://frontend-st-hcmus.herokuapp.com/
  
# Current status
- Tra cứu học sinh
- Tra cứu lớp
- Tra cứu bảng điểm
- Tra cứu báo cáo
- Xem quy định
- Tiếp nhận học sinh
- Thay đổi quy định
- Lập danh sách lớp
- Nhập điểm

# Future work
- Nhập nhiều giá trị
- Xuất file báo cáo
- Giao diện người dùng

# Tham khảo
Cody Seibert, Mern Todo, (2022), GitHub repository, [https://github.com/codyseibert/mern-todo](https://github.com/codyseibert/mern-todo)
