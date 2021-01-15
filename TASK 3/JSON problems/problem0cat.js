var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   
   //q1 Add height and weight to Fluffy
   cat.height = 10;
   cat.weight = 20;
   
   //q2 Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name = 'Fluffyy';
   
   //q3 List all the activities of Fluffyy’s catFriends.
   for(var i=0;i<cat.catFriends.length;i++){
   console.log(cat.catFriends[i].activities);
   }
       
   //q4 Print the catFriends names.
   for(var i=0;i<cat.catFriends.length;i++){
   console.log(cat.catFriends[i].name);
   }
   
   //q5 Print the total weight of catFriends
   var totalWeight = 0;
   for(i=0;i<cat.catFriends.length;i++){
   totalWeight += cat.catFriends[i].weight;
   }
   console.log(totalWeight);

   //q6 Print the total activities of all cats (op:6)
   for (key in cat) {
    if (key == "activities") {
      if (cat[key].length > 1) {
        for (i = 0; i < cat[key].length; i++) {
          console.log(cat[key][i])
        }
      }
    }
    if (key == "catFriends") {
      for (j = 0; j < cat[key].length; j++) {
        for (k = 0; k < cat[key][j].activities.length; k++) {
          console.log(cat[key][j].activities[k]);
        }
      }
    }
  }

  //q7 Add 2 more activities to bar & foo cats
  var newActivities = ["run", "sleep"];
  cat.catFriends[0].activities.push(...newActivities);
  cat.catFriends[1].activities.push(...newActivities);

  //q8 Update the fur color of bar
  cat.catFriends[0].furcolor='black';
   
   
   console.log(cat);