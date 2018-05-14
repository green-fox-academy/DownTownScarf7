/*
#################### Commands of the day! ####################
//////////////////////////////////////////////////////////////

function <NAME>(<ARGUMENTS>: <TYPE> = <VALUE>):<RETURN TYPE> {
  <COMMANDS>;
  return <VALUE, IF ANY>;
}
<NAME>(<ARGUMENTS>);

//////////////////////////////////////////////////////////////

let <NAME>: <TYPES IN ARRAY>[] = [<VALUE>, <VALUE>, <VALUE>];
<NAME>.<ATTRIBUTE>
.push(<VALUE>)                         - add elements to the end, returns length
.pop()                                 - remove last element and return it
.shift()                               - remove first element and return it
.unshift()                             - add elements to the beginning returns length
.indexOf(<VALUE>)                      - returns the index of searched value
.slice(<BEGIN INDEX>, <END INDEX>)     - copy a portion
.map(<FUNC>{});                        - calls a function on every element
.forEach(<FUNC>{});                    - calls a function for every element
.splice(<BEGIN INDEX>, <DELETE COUNT>) - adds or removes elements
.filter(<FUNC>{});                     - filters based on function
.concat(<ARRAY>)                       - merges arrays
.every(<FUNC>{});                      - returns true if every element passes the function
.some(<FUNC>{});                       - returns true if at least one element passes the function

//////////////////////////////////////////////////////////////

.forEach((<NAME VALUE>, <INDEX VALUE>) => {
  <FUNCTION CODE>;
});

//////////////////////////////////////////////////////////////
##############################################################
*/