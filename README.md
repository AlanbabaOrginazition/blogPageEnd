# hot-ts-server

#### 项目介绍
{**以下是码云平台说明，您可以替换为您的项目简介**
码云是开源中国推出的基于 Git 的代码托管平台（同时支持 SVN）。专为开发者提供稳定、高效、安全的云端软件开发协作平台
无论是个人、团队、或是企业，都能够用码云实现代码托管、项目管理、协作开发。企业项目请看 [https://gitee.com/enterprises](https://gitee.com/enterprises)}

#### 软件架构
软件架构说明


#### nodejs调试

1. 运行npm run dev-debug;
2. 打开谷歌浏览器，输入地址 chrome://inspect/#devices，点击chrome://inspect/#devices
3. 进入Sources进行断点调试
4. 或者使用本项目中的launch.json,进行vscode调试

#### 使用说明

1. 安装yarn, npm install yarn -g
2. yarn install: 安装所有包, yarn add [moduleName]: 添加包, yarn remove [moduleName]: 删除包, yarn update [moduleName]: 更新包
3. npm run dev启动服务器, npm run dev-debug启动服务器(调试模式)
4. npm run build编译生产环境代码
5. npm run server 使用forever启动服务器, npm run stop 停止服务器进程

### https证书创建过程(mac系统)
1. 构建私钥private.pem  
openssl genrsa -out private.pem 1024  
参数说明  
genrsa——使用RSA算法产生私钥  
-out——输出文件的路径  
1024——指定私钥长度  
2. 生成CRS证书签名  
openssl req -new -key private.pem -out csr.pem  -subj "/C=CN/ST=myprovince/L=mycity/O=myorganization/OU=mygroup/CN=myname"  
参数说明:  
req——执行证书签发命令  
-new——新证书签发请求  
-key——指定私钥路径  
-out——输出的csr文件的路径  
-subj——证书相关的用户信息(subject的缩写)
3. 自签发证书文件(cer文件)  
openssl x509 -req -days 365 -sha1 -extensions v3_ca -signkey private.pem -in csr.pem -out ca.cer  
参数说明：  
x509——生成x509格式证书  
-req——输入csr文件  
-days——证书的有效期（天）  
-sha1——证书摘要采用sha1算法  
-extensions——按照openssl.cnf文件中配置的v3_ca项添加扩展  
-signkey——签发证书的私钥  
-in——要输入的csr文件  
-out——输出的cer证书文件  
4. 大功告成
