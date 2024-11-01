// backend/controllers/propertyController.js

// Sample data structure for demonstration
const properties = [];

// Create a new property
export const createProperty = (req, res) => {
  const property = req.body;
  properties.push(property); // This will later be replaced with a database call
  res.status(201).json({ message: 'Property created', property });
};

// Get all properties
export const getProperties = (req, res) => {
  res.status(200).json(properties); // This will later pull from the database
};

// Get a property by ID
export const getPropertyById = (req, res) => {
  const propertyId = req.params.id;
  const property = properties.find(p => p.id === propertyId); // Replace with database query later

  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
};

// Update a property by ID
export const updateProperty = (req, res) => {
  const propertyId = req.params.id;
  const index = properties.findIndex(p => p.id === propertyId);

  if (index !== -1) {
    properties[index] = { ...properties[index], ...req.body };
    res.status(200).json({ message: 'Property updated', property: properties[index] });
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
};

// Delete a property by ID
export const deleteProperty = (req, res) => {
  const propertyId = req.params.id;
  const index = properties.findIndex(p => p.id === propertyId);

  if (index !== -1) {
    properties.splice(index, 1);
    res.status(200).json({ message: 'Property deleted' });
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
};
