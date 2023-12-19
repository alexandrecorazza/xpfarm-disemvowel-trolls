const { disemvowel } = require("../src/index");

test("should pass a sample test", () => {
    expect(disemvowel('Ths wbst s fr lsrs LL!')).toBe('Ths wbst s fr lsrs LL!');
});