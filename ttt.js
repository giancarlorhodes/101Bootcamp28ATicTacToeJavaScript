//import { Player, isDraw } from "./common";

function isDraw(parmMap)
{

    // const valuesMap = new Map([
    // ["1,1", document.getElementById("1,1").innerHTML],
    // ["1,2", document.getElementById("1,2").innerHTML],
    // ["1,3", document.getElementById("1,3").innerHTML],

    // ["2,1", document.getElementById("2,1").innerHTML],
    // ["2,2", document.getElementById("2,2").innerHTML],
    // ["2,3", document.getElementById("2,3").innerHTML],

    // ["3,1", document.getElementById("3,1").innerHTML],
    // ["3,2", document.getElementById("3,2").innerHTML],
    // ["3,3", document.getElementById("3,3").innerHTML]
    // ]);

    const map = parmMap;

    const myIterator = parmMap.values();

    let _current = "";
    for (const item of myIterator)
    {
        if (item !== "X" && item !== "O")
        {
        return false;
        }
    }
    return true; // all cells are filled with X or O
}

// to run test, 
function unitTests()
{
    const map1 = new Map([
        ["1,1", "1,1"],
        ["1,2", "1,2"],
        ["1,3", "1,3"],

        ["2,1", "2,1"],
        ["2,2", "2,2"],
        ["2,3", "2,3"],

        ["3,1", "3,1"],
        ["3,2", "3,2"],
        ["3,3", "3,3"]
    ]);

    console.log("unit test #1 - new board and not a draw: " + isDraw(map1));

    const map2 = new Map([
        ["1,1", "1,1"],
        ["1,2", "O"],
        ["1,3", "O"],
    
        ["2,1", "2,1"],
        ["2,2", "X"],
        ["2,3", "2,3"],
    
        ["3,1", "3,1"],
        ["3,2", "X"],
        ["3,3", "3,3"]
        ]);
    
    console.log("unit test #2 - not a draw: " + isDraw(map2));

    const map3 = new Map([
        ["1,1", "X"],
        ["1,2", "O"],
        ["1,3", "O"],
    
        ["2,1", "O"],
        ["2,2", "X"],
        ["2,3", "X"],
    
        ["3,1", "O"],
        ["3,2", "X"],
        ["3,3", "O"]
        ]);
    
    console.log("unit test #3 - draw: " + isDraw(map3));

}


export { isDraw, unitTests };