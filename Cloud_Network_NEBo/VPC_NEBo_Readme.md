# NEBo task Cloud Network

## VPC schema

![VPC schema](/Images/Subnet_schema.jpg)


## Creating VPC on AWS

![creating VPC](/Images/Creating_VPC.png)

![custom CIDR blocks](/Images/Custom_CIDR_Blocks.png)

![VPC review](/Images/VPC_review.png)

![VPC created](/Images/VPC_created.png)

![VPC overview](/Images/Creating_VPC.png)


### VPC subntes

![VPC subnets](/Images/VPC_subnets.png)

## EC2 on public subnet

![EC2 Public](/Images/ec2_public_subnet.png)

## EC2 on Private subnet

![Ec2 Private](/Images/ec2_private_subnet.png)



![ssh to public ec2](/Images/ssh_to_ec2_public.png)

## SSh from Public to Private ec2

![ssh public to private](/Images/ssh_public_to%20private%20subnet.png)


## Notes

- Connections between instances stablished using SSH.
- 2 subnets 1 AZ.
- VM1 deployed to subnet private is not accessible from public hosts
- VM2 deployed to subnet public is accessible from public hosts
- VM2 is able to connect to VM1
