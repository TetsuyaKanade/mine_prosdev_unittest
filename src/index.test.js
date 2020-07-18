const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Letter Score should be "O" when student scores 95-100' , () => {
  it('When user has a score of 95 then it should return "O"', () => {
    // Arrange
    
    const expectedGrade="O";
    // Act
    const grade= gradeClassifier(95);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 100 then it should return "O"', () => {
    // Arrange
    
    const expectedGrade="O";
    // Act
    const grade= gradeClassifier(100);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


});

describe('Letter Score should be "V" when student scores 90.00-94.99', () => {
  it('When user has a score of 90 then it should return "V', () => {
    // Arrange
    
    const expectedGrade="V";
    // Act
    const grade= gradeClassifier(90);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 94.99 then it should return "V"', () => {
    // Arrange
    
    const expectedGrade="V";
    // Act
    const grade= gradeClassifier(94.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


});

describe('Letter Score should be "G" when student scores 85.00-89.99', () => {
  it('When user has a score of 85 then it should return "G', () => {
    // Arrange
    
    const expectedGrade="G";
    // Act
    const grade= gradeClassifier(85);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 89.99 then it should return "G"', () => {
    // Arrange
    
    const expectedGrade="G";
    // Act
    const grade= gradeClassifier(89.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


});

describe('Letter Score should be "S" when student scores 80.00-84.99', () => {
  it('When user has a score of 80 then it should return "S"', () => {
    // Arrange
    
    const expectedGrade="S";
    // Act
    const grade= gradeClassifier(80);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 84.99 then it should return "S"', () => {
    // Arrange
    
    const expectedGrade="S";
    // Act
    const grade= gradeClassifier(84.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


});

describe('Letter Score should be "N" when student score 75.00-79.99', () => {
  it('When user has a score of 75 then it should return "N', () => {
    // Arrange
    
    const expectedGrade="N";
    // Act
    const grade= gradeClassifier(75);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 79.99 then it should return "N"', () => {
    // Arrange
    
    const expectedGrade="N";
    // Act
    const grade= gradeClassifier(79.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


});

describe('Letter Score should be "D" when student score 74.99 and below', () => {
  it('When user has a score of 60 then it should return "D', () => {
    // Arrange
    
    const expectedGrade="D";
    // Act
    const grade= gradeClassifier(60);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });

  it('When user has a score of 74.99 then it should return "D"', () => {
    // Arrange
    
    const expectedGrade="D";
    // Act
    const grade= gradeClassifier(74.99);
    // Assert
    expect(grade).toEqual(expectedGrade);
  });


});