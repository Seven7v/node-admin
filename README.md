# 使用 node 实现后台

### 准备工作

首先需要在本地安装mysql

[mysql安装地址](https://www.mysql.com/downloads/)

安装后需要进行mysql初始化  这里会提示你登录密码，需要保存登录密码先登入数据库。登入后再修改密码

```
mysqld --initialize
```

执行成功后会生成data文件夹，就是初始化的内容。

如果提示报错，mysql命令不可用，可以在安装的mysql文件夹下的bin中吊起终端执行。所有的mysql都要替换成`./mysql`

```
./mysqld --initialize
```

启动 MySQL

```
systemctl start mysqld
```

查看 MySQL 运行状态

```
systemctl status mysqld
```

需要给mysql设置密码，在项目中连接时需要配置的密码(我忘记我是不是这么配置的了)

```
mysqladmin -u root password "new_password";
```

执行  输入设置好的密码就可以使用了

```
./mysql -u root -p
Enter password:*******
```

项目中安装mysql

```
npm i mysql2
```

在database中使用并连接，下面有对应代码

## 页面代码

安装了nodemon `package.json`中可以使用nodemon启动项目

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development nodemon ./src/main.ts"
  },
```


启动项目
npm start

克隆 [vue3-ts-admin](https://github.com/Seven7v/vue3-Ts-admin) 运行即可使用