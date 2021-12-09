FROM node:16

RUN mkdir -p /home/kevin/Documents/DockerTesting/User_Settings_MS/node_modules && chown -R node:node /home/kevin/Documents/DockerTesting/

WORKDIR /home/kevin/Documents/DockerTesting/User_Settings_MS/
COPY package.json /home/kevin/Documents/DockerTesting/User_Settings_MS/
USER node
RUN npm install
RUN npm install --save dotenv
RUN npm install --save express


COPY --chown=node:node . .
EXPOSE 8087
CMD [ "node", "user_settings/user_settings_service.js" ]
