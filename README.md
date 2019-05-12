# CMA
A Contact Management Application

Rest API's

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
GET --> http://localhost:3333/contacts/

b) List a particular contact
GET --> http://localhost:3333/contacts/<contactId>

3. Update a particular contact
PUT --> http://localhost:3333/contacts/<contactId>

4. Delete a particular contact
DELETE --> http://localhost:3333/contacts/<contactId>

5. List the contacts of a Group
GET --> http://localhost:3333/groups/<groupName>