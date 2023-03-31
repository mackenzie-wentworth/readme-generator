# README Generator

## Link to GitHub Repository: 
To view the GitHub repository for "README Generator", please visit the following link: https://github.com/mackenzie-wentworth/readme-generator/tree/main


## Description
Need help creating a professional README file for your developer project? Look no further! The README Generator is here to help guide you so that you can build a high-quality README for your repository. 

Including a high-quality README gives viewers a preview of key information pertaining to your project repository. Further, doing so allows you the opportunity to showcase all the major compenents that went into the development process, as well as serving as a resource for future potential collaboration and inquiries.

This README Generator walks you through basic best practices so that you can generate your own README file. Let's get started!

---

## Installation
In order to utilize the README Generator for your own use, please be sure you have the following already installed:
* An open source code editor, such as [VS Code](https://code.visualstudio.com/)
* [Git Bash](https://www.educative.io/answers/how-to-install-git-bash-in-windows) or [Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH) (to use in [Git](https://github.com/git-guides/install-git) command line)
* [Node.js](https://nodejs.org/en)

### *Steps to Set Up Environment:*
1. From within the "README Generator" respository on GitHub, click the "Code" button and copy the `SSH URL` to your clipboard.

2. Using the command line in your terminal, type the following `git clone` command and paste the `SSH URL` you just copied:  

    ```bash
        git clone [github ssh url]
    ```

3. Open the cloned "README Generator" repository in VS Code. Then within VS Code, open a new terminal and type the following `npm` command to install the [Node Package Manager](https://www.npmjs.com/):

    ```bash
        npm init -y
    ```

4. Next, type in the following `npm` command to install the npm [Inquirer Package](https://www.npmjs.com/package/inquirer):

    ```bash
        npm i inquirer@8.2.4
    ```

---

## Usage
After you've installed all necessary packages, you are now ready to start creating your own README file! Please continue to the instructions and demonstration video below. 

### *How to Use README Generator:*
1. In VS Code, right-click on the `index.js` file from the directory menu to 'open in integrated terminal'
2. In the terminal, type the following command:

    ```bash
        node index.js
    ```

3. You will then be greeted to follow a series of prompts so that you can input key information about your project.  

    >**NOTE**: The answers that you enter in response to each prompt will display to your README file exactly as you type them.

4. Once you've answered all prompts in the terminal, you will see your new README file under the `dist` folder in the directory menu.

### *Video Demonstration:*

### *What To Include In Your README?:*
If you need further guidance on what to include in the sections of your README file, please visit the following resources: 
* The Full-Stack Blog - https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
* Great Learning - https://www.mygreatlearning.com/blog/readme-file/

---

## Questions?
If you have any questions, please see my contact information below to reach me for inquiries:
* **GitHub**: mackenzie-wentworth, at https://github.com/mackenzie-wentworth
* **Email**: mwentworth28@gmail.com
