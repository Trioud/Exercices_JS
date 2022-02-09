const { print_z, sum, simple_maths, MyString, doAdd, createGreeter, generator, identity_equal, myFirstPromise } = require("./exercices");

test('Simple Display', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    print_z();
    expect(consoleSpy).toHaveBeenCalledWith('z');
});

// SPY ON MATH
test('Simple addition', () => {
    expect(sum(10.2, 20.2)).toBe(30.4);
});

test('Simple addition with operator', () => {
    expect(simple_maths(10, 20, '+')).toBe(30);
    expect(simple_maths(20, 20, '-')).toBe(0);
    expect(simple_maths(30, 2, '*')).toBe(60);
});

test('Concat String', () => {
    const parent = new MyString();
    expect(parent.concat("test", "hello")).toBe("testhello");
})

test('UpperCase String',  () => {
    const parent = new MyString();
    expect(parent.upper_case("feafea")).toBe("FEAFEA");
})

test('Lower Case String', () => {
    const parent = new MyString();
    expect(parent.lower_case("GROSSEQUESTION")).toBe("grossequestion");
})

test('Basic Constructor', () => {
    const parent = new MyString("It works !");
    expect(parent.string).toBe("It works !");
})

test('Simple callback', () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
});

test('Simple Closure', () => {
    const mock = createGreeter("Hello");
    const consoleSpy = jest.spyOn(console, 'log');
    mock("January");
    expect(consoleSpy).toHaveBeenCalledWith("Hello, January");
})

test('Simple Generator', () => {
    const mock = generator();
    expect(mock.next().value).toBe("Hello");
    expect(mock.next().value).toBe("Bonjour");
    expect(mock.next().value).toBe("Buongiorno");
    expect(mock.next().value).toBe(undefined);
})

test('Equal or not Equal ? That is the question', () => {
    expect(identity_equal(2, 2)).toBe(true);
    expect(identity_equal(2, "2")).toBe(false);
})

test('My first Promise', () => {
    return myFirstPromise().then(data => {
        expect(data).toBe('Resolve')
    })
    .catch((data) => {
        expect(data).toBe('Reject');
    })
})