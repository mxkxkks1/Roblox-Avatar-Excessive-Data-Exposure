// open your browser developer console on roblox avatar
// Paste and run the following script:

(async () => {
  const userId = 1; // Replace with ur target user ID
  const url = `https://avatar.roblox.com/v1/users/${userId}/avatar`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  console.log("Avatar API Response:");
  console.log(JSON.stringify(data, null, 2));
  
  // Check for potentially excessive data
  const sensitiveFields = [
    "bodyColors",
    "scales", 
    "playerAvatarType",
    "emotes",
    "defaultShirtApplied",
    "defaultPantsApplied",
    "defaultShirtAssetId", 
    "defaultPantsAssetId"
  ];
  
  console.log("\nPotentially excessive data:");
  sensitiveFields.forEach(field => {
    if (data[field]) {
      console.log(`${field}: ${JSON.stringify(data[field])}`);
    }
  });
})();
