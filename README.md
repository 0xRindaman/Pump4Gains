# Pump4Gains Bot

Pump4Gains is an automated bot for interacting with Curvance on the Monad testnet network

## Installation

Follow these steps to install and set up the bot:

### 1. Clone the Repository
```sh
git clone https://github.com/0xRindaman/Pump4Gains.git
cd Pump4Gains
```

### 2. Install Dependencies
```sh
npm install
```

## Configuration

### 1. Get Your Private Key from Curvance
To use the Pump4Gains bot, you need to export your private key from Curvance.

#### Steps:
1. Visit the following link: [Curvance Monad](https://monad.curvance.com/monad)
2. Open your browser's developer console (`F12` or `Ctrl+Shift+I`)
3. Navigate to the **Network** tab
4. Refresh the page
5. Look for the request labeled **wallet**
6. Click on it and check the response to find your Curvance private key

### 2. Edit the `.env` File
Create or modify the `.env` file in the project root directory and add your private key:
```
PRIVATE_KEY=your_private_key_here
```

## Running the Bot
Once configured, you can start the bot by running:
```sh
npm start
```
---
### Disclaimer
This bot is provided **as-is** without any guarantees. Use at your own risk.

