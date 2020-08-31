import * as math from "mathjs";

export const RPE = math.round(
  math.multiply(
    math.matrix([
      [100, 95.5, 92.2, 89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9],
      [97.8, 93.9, 90.7, 87.8, 85, 82.4, 79.9, 77.4, 75.1, 72.3],
      [95.5, 92.2, 89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7],
      [93.9, 90.7, 87.8, 85, 82.4, 79.9, 77.4, 75.1, 72.3, 69.4],
      [92.2, 89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0],
      [90.7, 87.8, 85, 82.4, 79.9, 77.4, 75.1, 72.3, 69.4, 66.7],
      [89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 65.3],
      [87.8, 85, 82.4, 79.9, 77.4, 75.1, 72.3, 69.4, 66.7, 64],
      [86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 65.3, 62.6],
      [85.0, 82.4, 79.9, 77.4, 75.1, 72.3, 69.4, 66.7, 64.0, 61.3],
      [83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 65.3, 62.6, 59.9]
    ]),
    0.01
  ),
  2
);

type Matrix = typeof RPE;

export const VALID_RPE = [10,9.5,9,8.5,8,7.5,7,6.5,6,5.5,5];
export const VALID_REPS = [1,2,3,4,5,6,7,8,9,10];

function findPercentOf1RM(x:number,y:number){
  return RPE.get([y,x]) as number;
}

function calc1RM(x:number,y:number,weight:number){
  const percent = findPercentOf1RM(x,y);
  return Math.round(weight/percent);
}

function mround(number:number, roundTo:number){
  return roundTo * Math.round(number/roundTo);
}

function mroundMatrix(matrix:Matrix,roundTo:number){
  return matrix.map(a => mround(a,roundTo));
}

function createNewMatrixFrom1RM(oneRM:number,roundTo:number = 1){
  return mroundMatrix(math.multiply(RPE,oneRM),roundTo);
}

export function balanceRPEMatrix(x:number,y:number,weight:number,roundTo:number = 1){
  const oneRM = calc1RM(x,y,weight);
  return createNewMatrixFrom1RM(oneRM,roundTo);
}

