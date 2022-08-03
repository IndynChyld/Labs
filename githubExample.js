function main(nums){
    let regex = /\+404[ -]\d{3}[ -]\d{4}\b/g;
    let validPhones = [];
    let validNumber = regex.exec(nums);


    while(validNumber!= null){
        validPhones.push(validNumber);
        validNumber = regex.exec(nums);
    }
    console.log(validPhones.join(', '));
}

main(`+404 222 2222, 404-222-2222, +404/222/2222, +404-222 2222, +404 222-2222, +404-222-
222, +404-222-22222, +404-222-2222`);