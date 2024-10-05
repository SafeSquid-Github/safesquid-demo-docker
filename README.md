# SafeSquid Demo

### Prerequisites

- Docker
- Docker Compose

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/SafeSquid-GitHub/safesquid-demo-docker.git
   cd safesquid-demo-docker
   ```

2. **Run the Applications:**

   - Start the applications using Docker Compose:

     a. If you plan on editing your `hosts` file:

     ```bash
     docker compose up -f hosts-docker-compose.yml    # use the --build flag when running for the first time
     ```

     b. If you plan on changing your preferred DNS resolver:

     ```bash
     docker compose up -f dns-docker-compose.yml    # use the --build flag when running for the first time
     ```

   - Import the root certificate in your browser to access the applications over HTTPS. The root certificate is generated by Caddy and stored in the `caddy_data/caddy/pki/authorities/local/root.crt` file.

     - **Chrome:**

       - Open Chrome and go to `chrome://settings/security`.
       - Click on "Manage certificates".
       - Go to the "Trusted Root Certification Authorities" tab and click on "Import".
       - Select the `root.crt` file from the `caddy_data/caddy/pki/authorities/local/` directory.
       - Click "Next" > "Next" > "Finish".

     - **Firefox:**

       - Open Firefox and go to `about:preferences#privacy`.
       - Scroll down to the "Certificates" section and click on "View Certificates".
       - Go to the "Authorities" tab and click on "Import".
       - Select the `root.crt` file from the `caddy_data/caddy/pki/authorities/local/` directory.
       - Check all the boxes and click "OK".

3. **Finally, Choose one of the two options below to set up DNS to resolve correctly:**

   a. **Option 1: Edit the Local DNS file**

   - Add the following entries to your `/etc/hosts` or (`C:\Windows\System32\drivers\etc\hosts` for Windows) file:

     ```
     # for csrf demo
     127.0.0.1 bankease.com
     127.0.0.1 hiking.com
     127.0.0.1 twitter.com

     # for phishing demo
     127.0.0.1 infinity.iciciibank.com
     127.0.0.1 infoman.com

     # for crypto-mining demo
     127.0.0.1 tictactoe.com

     # for malware
     127.0.0.1 code.vsstudio.com
     ```

   - **Note:**
     - You may need to run the text editor as an administrator to save the changes.
     - You might want to comment out these entries after you are done with the demo.

   b. **Option 2: Change the preferred DNS resolver on your OS**

   - Change the preferred DNS resolver on your OS to `127.0.0.1` and use `1.1.1.1` as a fallback.

     - **Windows:**

       - Open the Control Panel.
       - Go to "Network and Internet".
       - Go to "Network and Sharing Center".
       - Click on "Change adapter settings".
       - Right-click on your network adapter and select "Properties".
       - Select "Internet Protocol Version 4 (TCP/IPv4)" and click on "Properties".
       - Select "Use the following DNS server addresses" and enter `127.0.0.1` as the "Preferred DNS server" and `1.1.1.1` as the "Alternate DNS server".
       - Click "OK".

   - Disable the "Use secure DNS" option in the browser.

   - Open the browser as a Guest profile so that cached DNS settings do not interfere with the demo.

**Note:** I recommend using Google Chrome for all simulations, as it tends to have minimal security restrictions by default, making it ideal for testing attack simulations.
