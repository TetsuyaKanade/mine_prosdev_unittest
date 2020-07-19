const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Letter Score should be "O:Oustanding" when student scores 95-100' , () => {
  
  it('When user has a score of 100 then it should return "O:Oustanding"', () => {
    // Arrange
    
    const expectedGrade="O:Oustanding";
    // Act
    const grade= gradeClassifier(100);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


  it('When user has a score of 99 then it should return "O:Oustanding"', () => {
    // Arrange
    
    const expectedGrade="O:Oustanding";
    // Act
    const grade= gradeClassifier(99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 98 then it should return "O:Oustanding"', () => {
    // Arrange
    
    const expectedGrade="O:Oustanding";
    // Act
    const grade= gradeClassifier(98);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 97 then it should return "O:Oustanding"', () => {
    // Arrange
    
    const expectedGrade="O:Oustanding";
    // Act
    const grade= gradeClassifier(97);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 96 then it should return "O:Oustanding"', () => {
    // Arrange
    
    const expectedGrade="O:Oustanding";
    // Act
    const grade= gradeClassifier(96);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 95.01 then it should return "O:Oustanding"', () => {
    // Arrange
    
    const expectedGrade="O:Oustanding";
    // Act
    const grade= gradeClassifier(95.01);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

});


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FOR V 90-94.99//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

describe('Letter Score should be "V:Very Good" when student scores 90.00-94.99', () => {

  it('When user has a score of 94.99 then it should return "V:Very Good"', () => {
    // Arrange
    
    const expectedGrade="V:Very Good";
    // Act
    const grade= gradeClassifier(94.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 93.5 then it should return "V:Very Good"', () => {
    // Arrange
    
    const expectedGrade="V:Very Good";
    // Act
    const grade= gradeClassifier(93.5);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 92.8 then it should return "V:Very Good"', () => {
    // Arrange
    
    const expectedGrade="V:Very Good";
    // Act
    const grade= gradeClassifier(92.8);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 91.02 then it should return "V:Very Good"', () => {
    // Arrange
    
    const expectedGrade="V:Very Good";
    // Act
    const grade= gradeClassifier(91.02);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


  it('When user has a score of 90 then it should return "V:Very Good"', () => {
    // Arrange
    
    const expectedGrade="V:Very Good";
    // Act
    const grade= gradeClassifier(90);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

});



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FOR G 85.00-89.99///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

describe('Letter Score should be "G:Good" when student scores 85.00-89.99', () => {
  it('When user has a score of 89.99 then it should return "G:Good"', () => {
    // Arrange
    
    const expectedGrade="G:Good";
    // Act
    const grade= gradeClassifier(89.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 88.94 then it should return "G:Good"', () => {
    // Arrange
    
    const expectedGrade="G:Good";
    // Act
    const grade= gradeClassifier(88.94);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 87.65 then it should return "G:Good"', () => {
    // Arrange
    
    const expectedGrade="G:Good";
    // Act
    const grade= gradeClassifier(87.65);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


  it('When user has a score of 86.42 then it should return "G:Good"', () => {
    // Arrange
    
    const expectedGrade="G:Good";
    // Act
    const grade= gradeClassifier(86.42);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 85 then it should return "G:Good"', () => {
    // Arrange
    
    const expectedGrade="G:Good";
    // Act
    const grade= gradeClassifier(85);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

});


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FOR S 80.00-84.99///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

describe('Letter Score should be "S:Satisfactory" when student scores 80.00-84.99', () => {

  it('When user has a score of 84.99 then it should return "S:Satisfactory"', () => {
    // Arrange
    
    const expectedGrade="S:Satisfactory";
    // Act
    const grade= gradeClassifier(84.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 83.21 then it should return "S:Satisfactory"', () => {
    // Arrange
    
    const expectedGrade="S:Satisfactory";
    // Act
    const grade= gradeClassifier(83.21);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 82.64 then it should return "S:Satisfactory"', () => {
    // Arrange
    
    const expectedGrade="S:Satisfactory";
    // Act
    const grade= gradeClassifier(82.64);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 81.98 then it should return "S:Satisfactory"', () => {
    // Arrange
    
    const expectedGrade="S:Satisfactory";
    // Act
    const grade= gradeClassifier(81.98);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 80 then it should return "S:Satisfactory"', () => {
    // Arrange
    
    const expectedGrade="S:Satisfactory";
    // Act
    const grade= gradeClassifier(80);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FOR N 75.00-79.99///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

describe('Letter Score should be "N:Needs Improvement" when student score 75.00-79.99', () => {

  it('When user has a score of 79.99 then it should return "N:Needs Improvement"', () => {
    // Arrange
    
    const expectedGrade="N:Needs Improvement";
    // Act
    const grade= gradeClassifier(79.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 78.87 then it should return "N:Needs Improvement"', () => {
    // Arrange
    
    const expectedGrade="N:Needs Improvement";
    // Act
    const grade= gradeClassifier(78.87);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 77.77 then it should return "N:Needs Improvement"', () => {
    // Arrange
    
    const expectedGrade="N:Needs Improvement";
    // Act
    const grade= gradeClassifier(77.77);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


  it('When user has a score of 76.54 then it should return "N:Needs Improvement"', () => {
    // Arrange
    
    const expectedGrade="N:Needs Improvement";
    // Act
    const grade= gradeClassifier(76.54);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 75 then it should return "N:Needs Improvement"', () => {
    // Arrange
    
    const expectedGrade="N:Needs Improvement";
    // Act
    const grade= gradeClassifier(75);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

});



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FOR D 74.99 and below///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

describe('Letter Score should be "D:Did not Meet Expectation" when student score 74.99 and below', () => {
  it('When user has a score of 74.99 then it should return "D:Did not Meet Expectation"', () => {
    // Arrange
    
    const expectedGrade="D:Did not Meet Expectation";
    // Act
    const grade= gradeClassifier(74.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 73.21 then it should return "D:Did not Meet Expectation"', () => {
    // Arrange
    
    const expectedGrade="D:Did not Meet Expectation";
    // Act
    const grade= gradeClassifier(73.21);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 72.12 then it should return "D:Did not Meet Expectation"', () => {
    // Arrange
    
    const expectedGrade="D:Did not Meet Expectation";
    // Act
    const grade= gradeClassifier(72.12);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 71.98 then it should return "D:Did not Meet Expectation"', () => {
    // Arrange
    
    const expectedGrade="D:Did not Meet Expectation";
    // Act
    const grade= gradeClassifier(71.98);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 70 then it should return "D:Did not Meet Expectation"', () => {
    // Arrange
    
    const expectedGrade="D:Did not Meet Expectation";
    // Act
    const grade= gradeClassifier(70);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 0 then it should return "D:Did not Meet Expectation"', () => {
    // Arrange
    
    const expectedGrade="D:Did not Meet Expectation";
    // Act
    const grade= gradeClassifier(0);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  


});