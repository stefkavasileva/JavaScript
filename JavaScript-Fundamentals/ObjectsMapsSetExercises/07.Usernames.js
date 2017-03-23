function main(input) {
    let usernames=new Set();
    for (let i = 0; i < input.length; i++) {
        usernames.add(input[i]);
    }
    let uniqueUsernames=Array.from(usernames)
        .sort(function sortOnArgLen(arg1,arg2)
    {
        if(arg1.length < arg2.length)
            return -1;
        if(arg1.length > arg2.length)
            return 1;
        if(arg1.length == arg2.length)
            return arg1.localeCompare(arg2);
    });


    console.log(uniqueUsernames.join("\n"));
}

