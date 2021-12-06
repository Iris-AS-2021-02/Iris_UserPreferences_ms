# User Preferences MicroService

modify dockerfile and change this lines according to your files

RUN mkdir -p /home/kevin/Documents/DockerTesting/User_Settings_MS/node_modules && chown -R node:node /home/kevin/Documents/DockerTesting/

WORKDIR /home/kevin/Documents/DockerTesting/User_Settings_MS/
COPY package.json /home/kevin/Documents/DockerTesting/User_Settings_MS/

to build use:
sudo docker build . -t usersettingsms/nodeusersettingms


to run use:
sudo docker run --name nodeusersettingms -p 8087:8087 -d usersettingsms/nodeusersettingms

to check use:

sudo docker ps
