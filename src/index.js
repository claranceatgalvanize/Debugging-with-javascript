const speciesNames = data => {
  let result = [];
    for (let i = 0; i < data.length; i++) {
      let bug = data[i]; // current obj
      result.push(bug.species); // add key of current obj to result.
    }
  return result;
} 

function speciesByFamily (data) {
  var result = {}

  for (var i = 0; i < data.length; i++) {
    var bug = data[i]
    
    if (result[bug.family]) {
      result[bug.family].push(bug)
    } else {
      result[bug.family] = [ bug ]
    }
  }

  return result;
}

function getFamilyCount (data) {
  let count = {};
  const families = speciesByFamily(data) // rename const variable
  for (let family in families) {
    count[family] = families[family].length;
  }

  return count;
}

function findById (data, id) {
  let result = null;

  for (let i = 0; i < data.length; i++) {
    let bug = data[i]
    if (bug.id === id) {
      result = bug
    }
  }

  return result
}

module.exports = {
  speciesNames,
  speciesByFamily,
  getFamilyCount,
  findById
}
