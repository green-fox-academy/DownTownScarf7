export{};
'use strict';

// default list
let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

// first task
function getNameAndBalance(list:any[]):void{
  let dataList:string[] = [];
  list.forEach(elem => {
    dataList = [];
    dataList.push(elem.client_name);
    dataList.push(elem.balance);
    console.log(dataList);
  });
}

// second task
function transferAmount(accList:any[], accFrom:number, accTo:number, amount:number):void{
  let accFromBal:number = 0, accToBal:number = 0, accFromCheck:boolean = false, accToCheck:boolean = false;
  // check if accs exist
  accList.forEach(elem => {
    if (accFrom == elem.account_number) {
      accFromCheck = true;
    } else if (accTo == elem.account_number) {
      accToCheck = true;
    }
  });
  // proceed if accs exist
  if (accFromCheck && accToCheck){
    accList.forEach(elem => {
      if (accFrom == elem.account_number) {
        elem.balance -= amount;
      } else if (accTo == elem.account_number) {
        elem.balance += amount;
      }
    });
    console.log(`Transferred ${amount} amount from ${accFrom} to ${accTo}.`);
  } else if (!accFromCheck) {
    console.log(`ERROR: "${accFrom}" is not found!`);
  } else if (!accToCheck) {
    console.log(`ERROR: "${accTo}" is not found!`);
  } else {
    console.log(`ERROR: "${accFrom}" and "${accTo}" is not found!`);
  }
}


getNameAndBalance(accounts);
transferAmount(accounts, 43546731, 23456311, 500);
getNameAndBalance(accounts);

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]
/*
export = {
  getNameAndBalance,
  transferAmount,
  accounts
};
*/
