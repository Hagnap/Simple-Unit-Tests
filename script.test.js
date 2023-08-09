const units = require("./script")

test("Capitalizes the first letter of a string.", () => {
    expect(units.capitalize("test")).toBe("Test");
});

test("Reverse a string", () => {
    expect(units.reverseString("test")).toBe("tset");
});


test("Adding two numbers", () => {
    expect(units.Calculator(3,5,"+")).toBe(8);
});

test("Subtracting b from a", () => {
    expect(units.Calculator(3,5,"-")).toBe(-2);
});


test("Subtracting b from a", () => {
    expect(units.Calculator(3,5,"-")).toBe(-2);
});


test("Multiplying two numbers", () => {
    expect(units.Calculator(3,-5,"*")).toBe(-15);
});


test("Dividing b from a", () => {
    expect(units.Calculator(15,-3,"/")).toBe(-5);
});

test("Use a Ceasar Cipher to encrypt a message",() => {
    expect(units.encryptCeasarCipher("This is a test", 5)).toBe("Ymnx nx f yjxy");
});

test("Use a Ceasar Cipher to encrypt a message",() => {
    expect(units.encryptCeasarCipher("xyz", 5)).toBe("cde");
});

test("Use a Ceasar Cipher to encrypt a message",() => {
    expect(units.encryptCeasarCipher("xyz", -5)).toBe("stu");
});

test("Use a Ceasar Cipher to encrypt a message",() => {
    expect(units.encryptCeasarCipher("This is a test", 10)).toBe("Drsc sc k docd");
});

test("Use a Ceasar Cipher to encrypt a message",() => {
    expect(units.encryptCeasarCipher("abc", -5)).toBe("vwx");
});

test("Use a Ceasar Cipher to encrypt a message",() => {
    expect(units.encryptCeasarCipher("This is a COMPLEX test! How crazy!", -10)).toBe("Jxyi yi q SECFBUN juij! Xem shqpo!");
});

test("This analyzes an array", () => {
    expect(units.analyzeArray([0,1,2,3,4,5,6,7,8,9])).toEqual(
        {
            average:4.5,
            min:0,
            max:9,
            length:10

        }
    )
});