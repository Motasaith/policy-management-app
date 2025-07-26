const mongoose = require('mongoose');
const Policy = require('../models/Policy');
require('dotenv').config();

const samplePolicies = [
  {
    name: 'Ahmad Ali',
    CNIC: '12345-1234567-1',
    policyNumber: 'POL-2024-001',
    planType: 'Life Insurance',
    contactNumber: '0300-1234567',
    address: 'House 123, Street 45, Karachi, Pakistan',
    issueDate: new Date('2024-01-15')
  },
  {
    name: 'Fatima Khan',
    CNIC: '54321-7654321-2',
    policyNumber: 'POL-2024-002',
    planType: 'Health Insurance',
    contactNumber: '0301-2345678',
    address: 'Apartment 456, Block B, Lahore, Pakistan',
    issueDate: new Date('2024-02-10')
  },
  {
    name: 'Muhammad Hassan',
    CNIC: '11111-2222222-3',
    policyNumber: 'POL-2024-003',
    planType: 'Auto Insurance',
    contactNumber: '0302-3456789',
    address: 'Villa 789, Phase 2, Islamabad, Pakistan',
    issueDate: new Date('2024-03-05')
  },
  {
    name: 'Ayesha Malik',
    CNIC: '99999-8888888-4',
    policyNumber: 'POL-2024-004',
    planType: 'Home Insurance',
    contactNumber: '0303-4567890',
    address: 'House 321, Garden Town, Rawalpindi, Pakistan',
    issueDate: new Date('2024-03-20')
  },
  {
    name: 'Omar Zain',
    CNIC: '55555-6666666-5',
    policyNumber: 'POL-2024-005',
    planType: 'Travel Insurance',
    contactNumber: '0304-5678901',
    address: 'Flat 654, DHA Phase 1, Karachi, Pakistan',
    issueDate: new Date('2024-04-01')
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing policies
    await Policy.deleteMany({});
    console.log('Cleared existing policies');

    // Insert sample policies
    const insertedPolicies = await Policy.insertMany(samplePolicies);
    console.log(`Inserted ${insertedPolicies.length} sample policies:`);
    
    insertedPolicies.forEach(policy => {
      console.log(`- ${policy.name} (CNIC: ${policy.CNIC}, Policy: ${policy.policyNumber})`);
    });

    console.log('\n✅ Database seeded successfully!');
    console.log('\nYou can now test the application with these sample policies:');
    console.log('1. Search by CNIC: 12345-1234567-1 (Ahmad Ali)');
    console.log('2. Search by Policy Number: POL-2024-002 (Fatima Khan)');
    console.log('3. Search by CNIC: 11111-2222222-3 (Muhammad Hassan)');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
    process.exit(0);
  }
};

// Run the seed script
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
