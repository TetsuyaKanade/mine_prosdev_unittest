const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    
    if(grade>=95 && grade<=100)
    {
      return "O";
    }
    
    else if(grade>=90.00&& grade<=94.99)
    {
      return "V";
    }
    else if(grade>=85.00&& grade<=89.99)
    {
      return "G";
    }
    else if(grade>=80.00&& grade<=84.99)
    {
      return "S";
    }
    else if(grade>=75.00&& grade<=79.99)
    {
      return "N";
    }
    else if(grade<=74.99)
    {
      return "D";
    }

  }
}

module.exports = functions;
