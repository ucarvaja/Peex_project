#!/bin/bash

# Update packages to the latest version
yum update -y

# Create a user named 'script-user' with password 'script123'
# (Note: using passwords in this way is not secure, consider more secure methods for production)
useradd script-user
echo script123 | passwd --stdin script-user

# Install httpd (Apache)
yum install -y httpd

# Configure Apache to listen on ports 8080 and 8090
echo "Listen 8080
Listen 8090" > /etc/httpd/conf.d/listen.conf

# Create a basic index.html with a header, a title saying 'Welcome New User'
# and a GIF extracted from a webpage
cat <<EOF > /var/www/html/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome New User</title>
</head>
<body>
    <h1>Welcome New User</h1>
    <iframe src="https://giphy.com/embed/eti1qm33pRbaw" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/south-park-eti1qm33pRbaw">via GIPHY</a></p>
</body>
</html>
EOF

# Start and enable the httpd service
systemctl start httpd
systemctl enable httpd

# Download a static webpage from an S3 bucket on AWS with wget
wget https://peex-scripting.s3.amazonaws.com/a3.zip -O /tmp/a3.zip

# Unzip the a3.zip file excluding the __MACOSX metadata
unzip /tmp/a3.zip -x "__MACOSX/*" -d /tmp/

# Move the static webpage to the Apache directory to be served on port 8090
mkdir -p /var/www/a3
cp -r /tmp/a3/academy/* /var/www/a3/

# Create a new VirtualHost configuration file to serve the content on port 8090
cat <<EOF > /etc/httpd/conf.d/a3.conf
<VirtualHost *:8090>
    DocumentRoot /var/www/a3
    <Directory /var/www/a3>
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
EOF

# Restart the httpd service to apply changes
systemctl restart httpd
