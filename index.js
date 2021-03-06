var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  while(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift(0)}.`;
  }
}

function currentLine(katzDeliLine){
  var lineMessage = "The line is currently: "
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  } else{
    for(var i = 0; i < katzDeliLine.length-1; i++){
      lineMessage += `${i+1}. ${katzDeliLine[i]}, `
    }
      lineMessage += `${katzDeliLine.length}. ${katzDeliLine[i]}`
    return lineMessage
  //"The line is currently: 1. Ada 2. Grace"
  }
}
