const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  const { name, email, phone, date, time } = JSON.parse(event.body);

  // Connect to MongoDB Atlas
  const uri = 'mongodb+srv://mongo3112010:mon1210@clusterelite.dsou0rk.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();

    // Access the MongoDB collection and insert the form data
    const collection = client.db('mongo311210').collection('collection1');
    await collection.insertOne({ name, email, phone, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred' })
    };
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};