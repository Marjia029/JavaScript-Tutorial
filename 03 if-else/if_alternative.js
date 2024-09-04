// Ternary operator
    let age = 32;
    //let result;
    // if (age > 18) {
    //   result = 'Adult';
    // } else {
    //   result = 'Kid'
    // }
    let result = age > 18 ? 'Adult' : 'Kid';
    console.log(result);

    // Guard operator
    let value = 0;
    let finalvalue = value || 18;
    console.log(value);
    console.log(finalvalue);

    // Default operator
    let number;
    let finalnumber = number ?? 18;
    console.log(number);
    console.log(finalnumber);