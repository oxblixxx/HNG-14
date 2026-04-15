## 🚀 Node.js API Deployment with Nginx, PM2, and SSL ----- TASK-2
### Overview

This project demonstrates how to deploy a simple Node.js API using Express, managed with PM2, reverse proxied with Nginx, and secured with SSL (Certbot).

### 1. Install Nginx

Update the package list and install Nginx:

```sh
sudo apt update -y
sudo apt install nginx -y
```

### 2. Install Node.js

Install Node.js using [NodeSource](https://nodesource.com/products/distributions):

```sh
sudo apt-get install -y curl
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
```

### 3. Install PM2

Install [PM2](npm install pm2 -g) globally to manage the Node.js process:

```sh
npm install pm2 -g
```

### 4. Project Setup
Navigate to the web directory, create a project folder and create project files:

```sh
cd /var/www/html
mkdir task-2
cd task-2
nano package.json
nano index.js
```

- Create [package.json](TASK-2/package.json)
- Create [index.js](TASK-2/index.js)

### 5. Install Dependencies

```sh
npm install
```

### 6. Start Application with PM2

```sh
pm2 start "node index.js" --name task-2
```

### 7. Allow Port for Testing

Temporarily allow port 3000 to confirm the app is running:

```sh
sudo ufw allow 3000
```
### 8. Configure Nginx Reverse Proxy

Navigate to Nginx configuration directory:

```sh
cd /etc/nginx/sites-available
```

Create a new configuration file:

```sh
sudo nano api.mustaphaops.online
```

- Create [api.mustaphaops.online](./TASK-2/api.mustaphaops.online)

Enable the site and restart Nginx:

```sh
sudo ln -s /etc/nginx/sites-available/task-2 /etc/nginx/sites-enabled
sudo systemctl restart nginx
```

### 9. Enable HTTPS with Certbot

Generate and configure SSL automatically:

```sh
sudo certbot --nginx -d api.mustaphaops.online
sudo systemctl restart nginx
```

### 10. Delete unused port

Delete unused port, which is a security measure.
```sh
sudo ufw status numbered
```
Locate the corresponding number for `3000`.

```sh
sudo ufw delete <number>
```
