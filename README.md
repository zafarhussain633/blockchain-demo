# blockchain-demo
a simple blockchain proj to connect blockchain network from react appication  . it also contain hardhat etheriam blockchain backend


# Steps to run the project

# for blockchain hardhat 
1. navigate to contract folder by:  **cd contract**
2. run:   **npm install**
3. run deploye contract:  **npx hardhat run scripts/deploy.js**
4. run blockchain network by:   **npx hardhat node**   after running this command you will se below screenshot 
5. copy any private key and import it in meta mask ![image](https://user-images.githubusercontent.com/37826183/232208271-2c907a93-2b5f-49dd-8e25-77ae803535af.png)
note : make sure you have meta mask installed in your browser . and you have imported  http://localhost:8545/  in meta mask 


# here is how to setup meta mask 
once meta mask is intalled in browser.
1.visit:  chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#settings/networks/add-popular-custom-network
2. click add manual network ![image](https://user-images.githubusercontent.com/37826183/232209436-8fb2d4ae-2bd2-4538-a059-0288986488b7.png)
3. add fill these details: ![image](https://user-images.githubusercontent.com/37826183/232209590-4889f6f6-b527-4fbc-a7db-c670bd249017.png)
4. then click on save 
5. click on import account and paste private key ![image](https://user-images.githubusercontent.com/37826183/232209701-9143d78e-9ed8-4a8e-ad09-1d2f75d11a20.png)


# for react app 
1. navigate to client folder by:  **cd client**
2. run: **npm install**
3  run: **npm start**

now your  project should be running.
