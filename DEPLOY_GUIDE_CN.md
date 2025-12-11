# 网站部署指南 (Nginx)

该指南将帮助你将生成的静态网站 (`dist` 目录) 部署到你自己的服务器上。

## 1. 准备工作

*   **服务器**: 一台安装了 Linux (如 Ubuntu, CentOS) 的服务器。
*   **Web 服务器软件**: Nginx (已安装)。
*   **构建产物**: 本地项目目录下的 `dist` 文件夹 (运行 `npm run build` 生成)。

## 2. 上传文件

你需要将本地 `dist` 目录中的**所有内容**上传到服务器上的指定目录。
通常我们将其放在 `/var/www/your-website` 或类似的路径下。

**示例 (使用 SCP 命令):**

```bash
# 在你本地电脑的项目根目录下执行
# 将 dist 目录下的内容上传到服务器的 /var/www/my-website 目录
scp -r dist/* user@your_server_ip:/var/www/my-website/
```

*注意：请确保服务器上的目录已创建，并且你有写入权限。*

## 3. 配置 Nginx

你需要修改或创建一个新的 Nginx 配置文件来指向你的网站目录。

1.  **进入 Nginx 配置目录**: 通常在 `/etc/nginx/sites-available/` 或 `/etc/nginx/conf.d/`。
2.  **创建配置文件**: 例如 `my-website.conf`。

**配置文件示例:**

```nginx
server {
    listen 80;
    server_name your-domain.com; # 将此处替换为你的域名或服务器 IP

    root /var/www/my-website; # 指向你上传文件的目录
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 可选: 开启 gzip 压缩以提高加载速度
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

3.  **启用配置 (如果使用 sites-available)**:
    ```bash
    ln -s /etc/nginx/sites-available/my-website.conf /etc/nginx/sites-enabled/
    ```

## 4. 测试并重启 Nginx

在重启之前，务必检查配置是否有语法错误。

```bash
# 检查配置
sudo nginx -t

# 如果显示 "successful" 或 "ok"，则重启 Nginx
sudo systemctl restart nginx
# 或者
sudo service nginx restart
```

## 5. 验证

打开浏览器，访问你的域名或 IP 地址，你应该能看到你的网站。

## 常见问题

*   **403 Forbidden**: 检查 `/var/www/my-website` 目录及其文件的权限。Nginx 用户 (通常是 `www-data` 或 `nginx`) 需要有读取权限。
    *   修复命令: `sudo chmod -R 755 /var/www/my-website`
*   **404 Not Found**: 检查 `root` 路径是否正确，以及文件是否确实上传成功。
