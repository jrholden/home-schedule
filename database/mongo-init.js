print('mongo-init.js script started');

// Define the database
const db = db.getSiblingDB('home_schedule');

// Create and populate the users collection
db.createCollection('users');
db.users.insertMany([
  { username: 'jholden', password: 'Password1', role: 'superadmin' }
]);
print('Inserted users into the users collection');

// Create and populate the items collection
db.createCollection('items');
db.items.insertMany([
  {
    _id: ObjectId('67bdff58557cd3ac186935d7'),
    title: 'Pay Property Tax',
    startDate: ISODate('2025-02-12T00:00:00-04:00'),
    endDate: ISODate('2025-02-12T00:00:00-04:00'),
    itemType: 'Financial',
    createdAt: ISODate('2025-02-25T17:35:20.452Z'),
    updatedAt: ISODate('2025-02-25T17:35:20.452Z'),
    __v: 0
  },
  {
    _id: ObjectId('67be006741e9fefb62176a03'),
    title: 'Cut Grass',
    startDate: ISODate('2025-02-13T00:00:00-04:00'),
    endDate: ISODate('2025-02-13T00:00:00-04:00'),
    itemType: 'Maintenance',
    createdAt: ISODate('2025-02-25T17:39:51.659Z'),
    updatedAt: ISODate('2025-02-25T17:39:51.659Z'),
    __v: 0
  },
  {
    _id: ObjectId('67be010b41e9fefb62176a0a'),
    title: 'Install Security Cameras',
    startDate: ISODate('2025-02-06T00:00:00-04:00'),
    endDate: ISODate('2025-02-06T00:00:00-04:00'),
    itemType: 'Security + Safety',
    createdAt: ISODate('2025-02-25T17:42:35.019Z'),
    updatedAt: ISODate('2025-02-25T17:42:35.019Z'),
    __v: 0
  },
]);
print('Inserted items into the items collection');

// Create and populate the tasks collection
db.createCollection('tasks');
db.tasks.insertMany([
  { title: 'Test Task 1', dateInfo: 'Test Date', taskInfo: 'TestInfo' }
]);
print('Inserted tasks into the tasks collection');

print('mongo-init.js script completed');