# Safeguard Global Demo

## 📦 Build & Execution Instructions

This repository contains end-to-end tests for the **recruitment page**.

### Installation
1. **Clone this repository**
   ```bash
   git clone https://github.com/Thrillhouse555/SafeguardGlobal.git

2. **Install dependencies**   
    ```bash    
    npm install    

### Execution

Run the full suite (Candidate + Vacancy tests):

    ```bash
    npm run cy:recruitment     

This command will launch Cypress and execute all E2E tests for both candidates and vacancies.

### Future Improvements

If given more time, I would focus on:

– Verify with more tests that candidate and vacancy workflows are integrating end-to-end with eachother but also with other features.    
– Add a richer set of candidate and vacancy data to improve test coverage.
- Increase the data fields for the candidate and vacancy fixtures are using.
- More test scenarios around the search functionality (resetting, missing entries, field isolation .etc)


### Trade-offs

**Hiring Manager Workaround**

- Due to not knowing how to create new Hiring Managers, a workaround was implemented to use the Admin user for all new vacancy entries.
- This was necessary because previously created Hiring Manager entries were being updated or deleted unexpectedly.
- A proper solution would involve figuring out how users create/delete Hiring Managers to ensure tests are independent and repeatable.
- Hiring manager workaround scripts have been commented (and original script commented out).

