const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;             // only 1 can be default
export { doublePi, triplePi };   // others must be in braces 
 