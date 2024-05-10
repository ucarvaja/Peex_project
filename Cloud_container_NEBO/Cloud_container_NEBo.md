# Cloud Container NEBo task

## steps
- Create Parent image with alpine using Dokerfile.parent
- Create a New Image that uses previous image as base using Dokerfile.newimage
    - New Image installs Nginx and adds custom index.html to be served on port 80
    - The new image is labeled as felipe8617/nebo_container:v1
    - New Image is pushed to Dockerhub and can be pulled

## Image is pushed to registry

![pushed_image](/Images/NCC_pushing_imaga_to_registry.png)

![image_on_registry](/Images/NCC_image_on_registry.png)

## Image is pulled from registry

![ulling_image](/Images/NCC_downloading_image.png)

## Container can be access from web browser on port 8080

![acces_container](/Images/NCC_cointainer_access.png)


### Notes

- Requires a [default.conf](https://github.com/ucarvaja/Peex_project/blob/main/Cloud_container_NEBO/Dockerfile.newimage) file that need to copied to /etc/nginx/http.d/default.conf
- [Dockerfile Parent Image](https://github.com/ucarvaja/Peex_project/blob/main/Cloud_container_NEBO/Dockerfile.parent)
- [Dockerfile New image](https://github.com/ucarvaja/Peex_project/blob/main/Cloud_container_NEBO/default.conf)

    