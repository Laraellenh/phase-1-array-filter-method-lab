// in each case, return declares a new variable (sName, isItAMatch, Matches)

function findMatching(drivers, name) {
    return drivers.filter(sName => {
        return (sName.toUpperCase() === name.toUpperCase())
    })
}
// filter for the first less matching, regardless of case. Change B to b for example, at index 0 (first letter)
function fuzzyMatch(drivers, firsLetterofNameMatch) {
    return drivers.filter(isItAMatch =>
        isItAMatch.toLowerCase().indexOf(firsLetterofNameMatch.toLowerCase()) === 0
    );
}
// filter through the name value for matches
function matchName(drivers, matchname) {
    return drivers.filter((matches) => matches.name === matchname);
}