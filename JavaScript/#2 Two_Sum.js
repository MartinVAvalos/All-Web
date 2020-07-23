// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//Step One: Go through nums, and insert data into hash
//Step Two: If target-nums[index], return solution.
//          else, keep inserting

//Functions:
//Create insertToHash()
//Create checkSolution()
//Create isNine()
var HashTable = require('hash-table');
var hashTable = new HashTable();
let nums = [2, 7, 11, 15, -6, -2];
let target = 9;
let solutions = {
    x:[],
    y:[]
}

//Insert data from array to hash
insertToHash = () => {
    for(let i=0; i<nums.length; i++) {
        hashTable.insert(nums[i], i);

    }
}

//Checks for # of pairs and where it's located
checkSolutions = () => {
    let key1;
    let key2;
    let partOfPair;
    for(let i=0; i<nums.length; i++) {
        key1 = hashTable.search(nums[i]);
        //if key1 is null
        if(nums[key1] != null && nums[key1] != undefined) {
            partOfPair= completePairOperation(nums[key1]);

            key2 = hashTable.search(partOfPair);
            solutions.x.push(key1);
            solutions.y.push(key2);
            // hashTable.insert(num1, null);
            // hashTable.insert(num2, null);
            nums[key1] = null;
            nums[key2] = null;
            
        }        
    }
}

insertToHash();
checkSolutions();

for(let i=0; i<nums.length; i++) {
    console.log(`[${solutions.x[i]}, ${solutions.y[i]}]`);
}


// creates an object that holds a bunch of arrays
function completePairOperation(num) {
    return target - num;
}