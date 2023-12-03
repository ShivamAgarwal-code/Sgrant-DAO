# Welcome to SGrant DAO


### What is our main idea?

SGrant DAO is the first DAO Community for Scientists and researchers.

Researchers from around the world can become a DAO member and share their researches, studies and a lot more!

We want to create a decentralized and community-driven world of scientists and researchers without third-party elements.

---

### Which features does SGrant DAO offer?

SGrant DAO offers a variety of features:

- enter a community full of researchers and scientists
- publish your researches and studies
- apply for grants for your projects
- earn special community- and publishing-NFTs
- participate as a non-DAO member
- donate grants to researchers and scientists

---

### How did we manage the project?

In order to come up with this idea, Shivam Agarwal individually brainstormed. The direction was clear - Medicine and/or science. 

After the second session we came up with the idea of this project and its name - SGrant DAO. SGrant is latin and means 'knowledge’—knowledge in sciences.

We have set up a GitHub repository and began planning using Notion. First we wrote the smart contracts to come up with the logic behind the DAO. Soon we needed some first visualizations in order to keep going creating more ideas, logic and the dependend components.

We met up via various online meeting tools to discuss, collaborate and even learn from one another!

---

### How can someone join the DAO?

In order for someone to join the DAO, he/she has to click the "Join DAO"-Button on our homepage. A register form will appear where you can paste your name, bio, field of research and maybe even previous researches. After pasting your information, hit the "Submit Proposal"-button to start the joining-proposal.

The first 50 people can join the DAO directly after paying the inital deposit of 0.05 Ether. After the 50 first members, members can only join after being voted by te other DAO members into the DAO.

---

## Technologies used in SGrant DAO

We have used several technologies to build this decentralized autonomous organization:

### Polygon

All of our smart contracts are deployed on the Polygon Mumbai Testnet and so our infrastructure and interactions run on Polygon. Total 5 of them are there , that manages all the backend code including DAO , Voting, grants, Researches and members. Interaction with the contracts is done with help of wagmi.js and ethers.js. We intend to launch the platform on Polygon Main chain after feedback and presentation. Testing is done well for all the contracts , to ensure they are secured and working properly.


### IPFS/Web3.storage
All Data storage and querying is done via IPFS with help of Web3.storage SDKs and docs on the website.
**Web3.Storage** is used for storing all sort of Data including user profile, grants request and researches on **IPFS**, done with the help of the SDK provided and stored in JSON format.
The querying of the data is done with CID Gateway links and then rendered in Frontend. The CIDs are stored in contract to avoid data tampering. We take the input of the data from the user, pack it in JSON file and then upload the files  IPFS via web3.storage. IPFS is also used to store our NFTs metadata compatible for ERC721 . 

Website is currently up and working on the provided links of vercel and Spheron, can be tested according to the docs provided on the website. Also, Backend Flow is added in the presentation.


### Chainlink

**Chainlink** Keepers are being used to end the voting for members entry request and grants request. Created 2  *Time based trigger upkeeps* for Members Contract and Grants Contract. These upkeeps runs once in 2 days and close all the open requests if so available in the contract . This is done in order to remove all discrepancies related to one person control. Docs were referred extensively for getting more info about keepers and the contracts are made chainlink keepers compatible too. The keepers are runnig as follows and they check all the open voterequest and close them,if the voting peroid is over.


### Spheron

We use Spheron to finally deploy our decentralized autonomous organization on IPFS (decentralized storage) so in order to make out platform fully decentralized and compatible with web3.

---

## Smart Contracts

All of our smart contracts are written in Solidity.

They have currently been published on Polygon Mumbai Testnet due to testing and presentational reasons. 

In the smart contracts themselves you can find dev comments and explanations.
<br /><br /><br />
**ContributorNFT.sol** - manages the contributor NFT and status

**DAOFunds.sol** - manages the funds of the DAO

**DAOMember.sol** - manages the proccess of some joining the DAO

**Grants.sol** - manages the proposal for someone apply for grants

**MemberNFT.sol** - manages the member NFT and status

**VotingOnProposal.sol** - manages the votings on proposals in general

**Whitelist.sol** - manages the inital whitelist before the DAO only accepts new mebers through votings

---


---

## Frontend

For the UI and design we have used Next.js to setup our project easily and build/design it with the help of JavaScript, React and HTML/CSS.

<br /><br /><br />

### Frontend folders in our project:

**constants** - important file with different constants to call in other programs

**pages** - all of our different frontend webpages

**public** - public files like images etc.

**src** - assets like images and single components of the different webpages

**styles** - CSS styling files
<br /><br /><br />
### Other important files:

**.env** - important API-keys for deployment

**.gitignore** - lets GitHub ignore several files like sensible data

**next.config.js** - configuration of Next.js

---

## Backend

In our backend folder you can find everything that’s working behind the scenes of Sgrant DAO!
<br /><br /><br />
### Backend folders in our project:

**constant** - NFT (meta-)data

**contracts** - Solidity Smart Contracts

**scripts** - deployment scripts for the Smart Contracts
<br /><br /><br />
### Other important files:

**.gitignore** - lets GitHub ignore several files like sensible data

**README.md** - Smart Contract Addresses

**hardhat.config.js** - HardHat configuration file

---

## Wallet Connection

You can connect your wallet with the help of **RainbowKit**. It gives better control and UX than web3modal.

Look at the docs of RainbowKit on how to use it: [https://www.rainbowkit.com/docs/introduction](https://www.rainbowkit.com/docs/introduction)

---
