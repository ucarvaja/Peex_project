# Cloud Storage NEBo Task

## Schema

![s3_schema](/Images/NCS_NEBo_cloud_storage_schema.jpg)

## VPC with private and public subnet

![vpc](/Images/NCS_VPC_2_sunets.png)


## Creating S3 Bucket

![s3_bucket](/Images/NCS_crating_s3.png)

### Empty S3

![empty_s3](/Images/NCS_empty_s3.png)

## EC2 in private subnet and Public Subnet

![ec2_private](/Images/NCS_ec2_private_subnet.png)

## Creating Endpoint for private ec2 with s3 service

![endpoint](/Images/NCS_ednpoint_for_private_ec2%20.png)


## Creating and attaching IAM role for S3

![IAM_role](/Images/NCS_Creating_IAM_Role_s3.png)

![attach_role](/Images/NCS_attaching_IAM_s3_role.png)


## Ec2 public has access to s3

![public_s3_access](/Images/NCS_access_s3_public_ec2.png)

## Ec2 private has accesss to s3

![private_s3_access](/Images/NCS_access_s3_private_ec2.png)

## Uploading file from ec2 private to s3

![ec2_to_S3](/Images/NCS_uploading_private_to_s3.png)

![private_to_s3](/Images/NCS_uploading_file_from_private_ec2.png)


## Notes

- To perform this task it's required a VPC with a private and public sunbnets 
- To access s3 bucket it's needed an edpoint with S3 service name and an IAM role with s3 permissions
- S3 must be blocked for public access