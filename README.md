# CMA
A Contact Management Application

To start the Backend Application
1. clone the repo
2. cd CMA/manager
3. npm i (to install the npm dependency modules)
3. npm start (this will start the application in dev environment)

Config details:
Location --> CMA/manager/config
Data --> Dev/Prod server port and Database URL

Rest API's List
1. Create contact 
POST --> http://localhost:3333/contacts

Sample contact --> 
{
    "name": "Abdul",
    "groups": ["college", "Friends", "Family"],
    "work": {
    "email": ["abdul@gmail.com"],
    "phone": ["9712322518"]
    },
    "personal":{
    "email": ["abdul_personal@gmail.com"],
    "phone": ["9723492528"]
    }
}

2. a) List the contacts 
GET --> http://localhost:<port>/contacts/

b) List a particular contact
GET --> http://localhost:<port>/contacts/<contactId>

3. Update a particular contact
PUT --> http://localhost:<port>/contacts/<contactId>

4. Delete a particular contact
DELETE --> http://localhost:<port>/contacts/<contactId>

5. List the contacts of a Group
GET --> http://localhost:<port>/groups/<groupName>

6. Search contact with name
POST --> http://localhost:<port>/search/<search_word>

Sample data -->
{
	"search_value": "shankar.test@gmail.com"
}

Note : search_word can be name/email/phone

