First I test things localy but deploy image and run container on my docker Desktop
1.docker build -t my-node-app . 
2.docker run -p 3000:3000 my-node-app
Verify:
http://localhost:3000

Push Image to Azure Container Registry (ACR)
1.create container Registory
azure portal->Container registries->create container registory
2.create wep app service with container 
azure portal->create APP service ->select container option to publish at the place of code->fill container tab (port should be same which is mentioned in node application,image and tag should be correct)
3.deploy image on portal localy
az acr login --name <container-registory>
docker tag <img-name> <container-login-service>/<img-name>:<tag> //ex-docker tag my-node-app myacr.azurecr.io/my-node-app:v1
docker push <container-login-service>/<img-name>:<tag> //ex docker push myacr.azurecr.io/my-node-app:v1
<tag>
Now the image is stored in Azure.

Internally Azure performs something similar to:

Pull Image
     ↓
Create Container
     ↓
Start Node Process
     ↓
Expose Website

Conceptually:
docker pull myacr.azurecr.io/my-node-app:v1
docker run my-node-app:v1

Important- add this in app service env variable WEBSITES_PORT = 3000