const sum = require("./sum")

test('adds 1 + 2 to equal 3',() =>{
    expect(sum(1, 2)).toBe(3);
})

test('2더하기 2는 4',() =>{
    expect(2+2).toBe(4);
})

test("객체 할당 테스트",() =>{
    const data={one:1}
    data["two"]=2
    expect(data).toEqual({one:1,two:2})
})

test("양수 더하기", () =>{
    for (let a =1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})
test("null", () =>{
    const n = null;
    expect(n).toBeNull();
    // expect(n).not.toBeNull();
    // expect(n).toBedefined();
    // expect(n).toBeUndefined();
    expect(n).not.toBeUndefined();
    // expect(n).toBeTruthy();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

})

test("zero",() => {
    const z = 0;
    expect(z).toBe(0);
    expect(z).toBeFalsy();
    expect(z).not.toBeTruthy();
    expect(z).not.toBeNull();
    expect(z).not.toBeUndefined();
    // expect(z).toBeTruthy();
    // expect(z).toBeGreaterThan(0);
})


//Using matchers

test("two plus two",() =>{
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBeCloseTo(4, 1);
    expect(value).toEqual(4);
})

test("adding floating point numbers",() =>{
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3, 0.01);
})

//정규표현식
test("there is no I in team",() =>{
    const message = "This team doesn't exist";
    expect(message).toMatch(/team/);
    expect(message).toContain("doesn't exist");
})
test("there is no I in team",() =>{
    expect ("team").not.toMatch(/I/)
})

test("but there is a 'stop' in Christopher",() =>{
    expect("Christoph").toMatch(/Christop/)
})

const shoppingList = [
    "diaper",
    "kleenex",
    "paper towels",
    "batteries",
    "milk",
];
test ("the shopping list has milk on it",() =>{
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");  //set은 es6에서 새로 생긴 함수
})
async function fetchData() {
    return "peanut butter";
}

test("the data is peanut butter",() =>{
    return fetchData().then((data)=>{
        expect(data).toBe("peanut butter");
    });
})

test("the fetch falis with an error", async() =>{
    try {
        await fetchData()
    }catch(error) {    
        expect(error).toMatch("error");
    }
})

function initalizeCityDatabase() {}

function clearCityDatabase() {}

beforeEach(() =>{
    initalizeCityDatabase();
})

afterEach(()=>{
    clearCityDatabase();
})

function isCity(city) {
    return city==="Vienna";
}

test("city database has Vienna", () =>{
    expect(isCity("Vienna")).toBe("Vienna");
})

test("city database does not have Oslo", () =>{
    expect(isCity("Oslo")).not.toBeFalsy("Oslo");
})