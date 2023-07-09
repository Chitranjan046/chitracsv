const mongoose = require('mongoose');

// Define the file schema
const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String
    },
    filePath: {
      type: String
    },
    file: {
      type: String
    }
  },
  {
    timestamps: { options: { timeZone: 'Asia/Kolkata' } }
  }
);

// Create the 'files' model based on the file schema

// Export the 'File' model

module.exports = mongoose.model('File', fileSchema);
