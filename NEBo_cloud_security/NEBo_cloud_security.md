# NEBo Task Cloud Security

## Schema 

![schema](/Images/NEBo_cloud_Security.jpg)

## SCM Management

### Creating SSH base 4096

![Key_4096](/Images/Creating_ssh_keys_4096.png)

### Adding Key to Github

![github_key](/Images/Adding_to_github.png)

### Configure Github file

![config_file_github](/Images/Config_file.png)

### Testing Connection to github

![Testing_github](/Images/Testing_connection.png)

### Key is used 

![Used_key](/Images/Key_is_used.png)


## Cloud Security: access ec2 non root

###  Creating Ec2

![creating_ec2](/Images/Creating_ec2_instance.png)

### Creating New User (NEbo_user)

![New_user](/Images/creating_NEbo_user.png)

### Grant Root Permissions

![root_permissions](/Images/Adding_root_permissions.png)

### Configure SSHD

![ssh_config](/Images/Configure_sshd.png)

[see_configfile]()

### Testing connection with NEbo_user

![test_connection_ec2_user](/Images/Testing_connection_ec2.png)


## Notes

- Connection to ec2 with NEBo_user requires to create directory .ssh/authorized_keys with chmod 600 and 744 respectively.
- [Root access](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managing-users.html) is enabled by default on EC2, but can be disabled changing ec2-user password on the ec2 with root user. 