const rot13 = (str) => {
    const cleanAlpha =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ?!";
    const rotAlpha = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ?!";
    let code = "";
    for (let i = 0; i < str.length; i++) {
        const index = cleanAlpha.indexOf(str[i]);
        code += rotAlpha[index];
    }

    return code;
};
