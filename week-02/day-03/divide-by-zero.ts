export{};
'use strict';
// this doesn't really raise an exception
function UserException(msg){
  this.msg = msg;
  this.name = '- UserException';
}
function div(num:number):void{
  try {
    if (num === 0){
      throw new UserException(`Can't divide by ${num}`);
    } else {
      console.log(10 / num);
    }
  }
  catch(e){
    console.log(e.msg, e.name);
  }
}
div(0);
