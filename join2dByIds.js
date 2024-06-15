// var join = function(arr1, arr2) {
//   // Create a map to hold merged objects by id
//   const mergedById = new Map();

//   // Helper function to merge two objects with the same id
//   const mergeObjects = (obj1, obj2) => {
//     for (const key in obj2) {
//       obj1[key] = obj2[key];
//     }
//     return obj1;
//   };

//   // Add all objects from arr1 to the map
//   arr1.forEach(obj => mergedById.set(obj.id, obj));

//   // Merge or add objects from arr2
//   arr2.forEach(obj => {
//     if (mergedById.has(obj.id)) {
//       // If id exists, merge the objects
//       mergedById.set(obj.id, mergeObjects(mergedById.get(obj.id), obj));
//     } else {
//       // If id does not exist, add the object from arr2
//       mergedById.set(obj.id, obj);
//     }
//   });

//   // Return a sorted array based on id
//   return Array.from(mergedById.values()).sort((a, b) => a.id - b.id);
// };

var join = function(arr1, arr2) {
  // Create a map to hold merged objects by id
  const mergedById = new Map();

  // Helper function to merge two objects with the same id
  const mergeObjects = (obj1, obj2) => {
    for (const key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;
  };

  // Add all objects from arr1 to the map
  arr1.forEach(obj => mergedById.set(obj.id, obj));

  // Merge or add objects from arr2
  arr2.forEach(obj => {
    if (mergedById.has(obj.id)) {
      // If id exists, merge the objects
      mergedById.set(obj.id, mergeObjects(mergedById.get(obj.id), obj));
    } else {
      // If id does not exist, add the object from arr2
      mergedById.set(obj.id, obj);
    }
  });

  // Return a sorted array based on id
  return Array.from(mergedById.values()).sort((a, b) => a.id - b.id);
};
