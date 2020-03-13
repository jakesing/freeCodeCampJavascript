function checkCashRegister(price, cash, cid) {
  let result = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
  let changeDue = parseFloat((cash - price).toFixed(2));
  let denoms = [.01, .05, .10, .25, 1.00, 5.00, 10.00, 20.00, 100.00]
  let denomNames = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"]
  let startingMoney = {}
  //populate money
    for(let i in denoms){
      startingMoney[denoms[i]] = cid[i][1];
    }
  //calculate available change:
  let totalChange = 0;
  for(let i in startingMoney){
    totalChange += startingMoney[i];
  }

  let changeGiven = {}
  
  if(changeDue == totalChange){
    result.status = 'CLOSED';
    result.change = cid;  
    return result 
  }

  //calculate how to return change:
  //find largest denom that is smaller than change due
  for(let i = 8; i >= 0; i--){
    if(denoms[i] <= changeDue){
    //use all of that denom until/unless it meets the total change due - DONT GO BELOW ZERO!
      if(startingMoney[denoms[i]] <= changeDue){
        changeGiven[denoms[i]] = parseFloat(startingMoney[denoms[i]].toFixed(2));
        changeDue -= startingMoney[denoms[i]].toFixed(2);
      }
      else{
        //need to take multiples of the denom until change due would go below zero:
        changeGiven[denoms[i]] = 0
        for(let j = 0; parseFloat(changeDue.toFixed(2)) >= denoms[i] && parseFloat(changeDue.toFixed(2)) > 0; j++ ){
          console.log("Iter " + j + ", denom: " + denoms[i])
          changeDue = changeDue.toFixed(2)
          changeDue -= parseFloat(denoms[i].toFixed(2));
          changeGiven[denoms[i]] += parseFloat(denoms[i].toFixed(2))
          console.log(changeDue)
          console.log(parseFloat(denoms[i].toFixed(2)))
        }
      }
    }
  }

  //track how much we used and how much is left, store in change given object
  if(changeDue.toFixed(2) == .01 && startingMoney[denoms[0]] - changeGiven[denoms[0]] > 0){
      changeDue = 0.00;
      changeGiven[denoms[0]] += 0.01
  }

  //see if we have enough change
  if(totalChange < changeDue || changeDue != 0.00){
    result.status = 'INSUFFICIENT_FUNDS',
    result.change = [];
  }
  
  else if(changeDue == totalChange){
    result.status = 'CLOSED';
    result.change = cid;   
  }
  else{
    result.status = 'OPEN';
    result.change = [];
    console.log([denomNames[0], changeGiven[denoms[0]]])
    for(let i = 8; i >= 0; i --){
      if(changeGiven[denoms[i]] > 0.00){
      result.change.push([denomNames[i], changeGiven[denoms[i]]])
        } 
    }
  }
  console.log(result)
  return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])