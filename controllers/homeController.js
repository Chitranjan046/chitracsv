const File = require("../models/csv");

// Arrow function for the home controller
module.exports.home = async (req, res) => {
  try {
    // Fetch all files from the File model
    let files = await File.find({});

    // Render the 'home' view and pass the files and title as variables
    return res.render('home', {
      files: files,
      title: "Home"
    });
  } catch (error) {
    // Handle and log any errors that occur
    console.log('Error in homeController/home:', error);
    return;
  }
};
