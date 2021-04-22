var ArrangeAlphabets = (input) => {
    var inputAphabets = input.replace(/[0-9]/g, '')
    var splitInput = inputAphabets.split("");
    var output = [];

    for (let i = 0; i < input.length; i++) {
        var result;
        if (input[i] >= '0' && input[i] <= '9') {
            output.push(input[i]);
        } else {
            result = splitInput.pop();
            output.push(result);
        }
    }

    return output.join("");
}

console.log(ArrangeAlphabets("4ZI72DUA9W3"));