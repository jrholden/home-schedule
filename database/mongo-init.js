print('mongo-init.js script started');

// Define the database
const db = db.getSiblingDB('home_schedule');

// Create and populate the users collection
db.createCollection('users');
db.users.insertMany([
  { username: 'jholden', password: 'Password1', role:'superadmin' }
]);
print('Inserted users into the users collection');

// Create and populate the items collection
db.createCollection('items');
db.items.insertMany([
  { name: 'Test Item 1', dateInfo: 'Test Date', itemInfo: 'TestInfo' },
  { name: 'Test Item 2', dateInfo: 'Test Date2', itemInfo: 'TestInfo2' },
  { name: 'Test Item 3', dateInfo: 'Test Date3', itemInfo: 'TestInfo3' }
]);
print('Inserted items into the items collection');

// Create and populate the tasks collection
db.createCollection('tasks');
db.tasks.insertMany([
  { title: 'Test Task 1', dateInfo: 'Test Date', taskInfo: 'TestInfo' }
]);
print('Inserted tasks into the tasks collection');

print('mongo-init.js script completed');