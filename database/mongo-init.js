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
    _id: ObjectId('67c5fb64cae4bd875f7616b9'),
    title: 'Pay Property Tax',
    itemType: 'Financial',
    dateInfo: {
      startDate: ISODate('2025-03-21T03:00:00.000Z'),
      endDate: ISODate('2025-03-21T03:00:00.000Z')
    },
    itemInfo: { owner: 'JordanForNow', groupId: 'NoSuchThingAsGroupsYet' },
    createdAt: ISODate('2025-03-03T18:56:36.872Z'),
    updatedAt: ISODate('2025-03-03T18:56:36.872Z'),
    __v: 0
  },
  {
    _id: ObjectId('67c5fb73cae4bd875f7616bc'),
    title: 'Replace Water Filter',
    itemType: 'Maintenance',
    dateInfo: {
      startDate: ISODate('2025-03-26T03:00:00.000Z'),
      endDate: ISODate('2025-03-26T03:00:00.000Z')
    },
    itemInfo: { owner: 'JordanForNow', groupId: 'NoSuchThingAsGroupsYet' },
    createdAt: ISODate('2025-03-03T18:56:51.410Z'),
    updatedAt: ISODate('2025-03-03T18:56:51.410Z'),
    __v: 0
  },
  {
    _id: ObjectId('67c5fb86cae4bd875f7616bf'),
    title: 'Appointment for Window Repair',
    itemType: 'Maintenance',
    dateInfo: {
      startDate: ISODate('2025-03-28T03:00:00.000Z'),
      endDate: ISODate('2025-03-28T03:00:00.000Z')
    },
    itemInfo: { owner: 'JordanForNow', groupId: 'NoSuchThingAsGroupsYet' },
    createdAt: ISODate('2025-03-03T18:57:10.565Z'),
    updatedAt: ISODate('2025-03-03T18:57:10.565Z'),
    __v: 0
  }
]);
print('Inserted items into the items collection');

// Create and populate the tasks collection
db.createCollection('tasks');
db.tasks.insertMany([
  { title: 'Test Task 1', dateInfo: 'Test Date', taskInfo: 'TestInfo' }
]);
print('Inserted tasks into the tasks collection');

print('mongo-init.js script completed');