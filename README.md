Iov42_SauceDemo

Iov42_SauceDemo is a Cypress automation project designed for testing the frontend and backend functionalities of the SauceDemo application. It includes:

1.Implemented TDD approach. 
2.Covered 47 frontend test cases for e2e functionality. 
3.API testing NOT POSSIBLE as application is purely frontend-based with client-side rendering and no server calls are made for any actions. 
4.Visual regression testing integrated with Percy.io
5.Detailed test HTML and json reporting using MochaAwesome Reporter 

TEST COVERAGE: 
Covered both positive and negative cases.   
1. User Authentication test - UI,login/logout flows - Test case total: 19
2. Product Catalog and filtering -  UI and filtering -  Test case total: 12
3. Add to cart,Remove from Cart,Checkout and Order Confirmation - UI and functionality validation - Test case total: 9
4. Error handling and Edge case scenarios - Forced wait and altered DOM -  Test case total: 6
5. Stress testing case: 1

VISUAL COVERAGE:  Key UI screens are captured using Percy snapshots:
Login Page
Inventory Page (After Login and error messages)
Cart Page (After Adding Item) and cart Badges
Checkout Page 1, 2 and successful checkout.  

Trade-offs: No backend API calls are captured because SauceDemo is client-side rendered.
Limitations Due to Time Constraints: Limited cross-browser testing due to time constraints. Tested mostly in chrome and headless run using Electron.  

Setup and Installation
1️⃣ Clone the Repository
git clone https://github.com/charuraghu01/Iov42_SauceDemo.git
cd Iov42_SauceDemo

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the root directory:
Add your username, password and do .gitignore for security reason.  

4️⃣ Add percy token to run Percy test.  
PERCY_TOKEN=your-percy-token-here
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1️⃣ Run All Cypress Tests
npx cypress run
Note: Mochaawesome reporter is installed and configured in cypress.config.js. Hence reports will be atomatically merged for each suite and stored in the provided path.  

2️⃣ Run a Specific Test File
npx cypress run --spec "cypress/e2e/<filename>"
   
3️⃣ Run Cypress Tests in the Browser (GUI Mode)
npx cypress open

4️⃣ Run Cypress with Percy for Visual Testing
npx percy exec -- npx cypress run

Percy Visual Reports
Percy snapshots are uploaded to the Percy Dashboard: https://percy.io/bad996c6/web/Iov42_SauceDemo_Visual_Regression_Test-8f174357

🔄 Basic Git Commands for Project Management
🔹 Clone the Repository
git clone https://github.com/charuraghu01/Iov42_SauceDemo.git
🔹 Check Current Branch
git branch
🔹 Create a New Branch
git checkout -b feature/new-feature
🔹 Switch to an Existing Branch
git checkout main
🔹 Pull Latest Changes
git pull origin main
🔹 Add Changes and Commit
git add .
git commit -m "Added new feature"
🔹 Push Changes to GitHub
git push origin feature/new-feature
🔹 Merge Feature Branch into main
git checkout main
git merge feature/new-feature
git push origin main
🔹 Delete a Local Branch
git branch -d feature/new-feature
🔹 Delete a Remote Branch
git push origin --delete feature/new-feature

🚀 CI/CD Integration Suggestions
GitHub Actions or Jenkins can be used to automate tests on each pull request.

🤝 Contributing
1.Fork the repository
2.Create a new branch
git checkout -b feature/your-feature-name

3.Commit your changes
git commit -m "Added feature XYZ"

4.Push to your branch
git push origin feature/your-feature-name

5.Create a Pull Request


🙌 Acknowledgements
Cypress - Testing framework
Percy - Visual testing platform
MochaAwesome - Test reporting tool

🎉 Author
Charumathi

🚀 Final Thoughts
This project provides end-to-end automation for SauceDemo.
Includes Percy visual regression testing.
MochaAwesome reports for detailed test insights.
my approach to store frequently changing selectors and reusable functions seperately.  
Basic Git workflow to help new contributors.

✅ Try running the tests and let me know if you have any feedback! 🚀 
Reach me @ charumath@gmail.com

Let me know if you need further modifications! 🚀
Use it wisely, and may your tests always pass on the first run! ✅🔥 











   

