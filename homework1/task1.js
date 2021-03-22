import reverseString from "./reverseString";

const printOutput = (data)=>{
    process.stdout.write(data);
    process.stdout.write("\n\n\n");
    prompt();
}

const onReadData = (data)=>{
    const reversedString = reverseString(data);
    printOutput(reversedString);
}

const prompt = ()=>{
    process.stdout.write("Enter a text!\n");
}

const closeHandler = ()=>{
    console.info("exiting");
    process.exit(0);
}


prompt();
process.stdin.on('data',onReadData);

process.on('SIGTERM', closeHandler);
process.on('SIGINT', closeHandler);