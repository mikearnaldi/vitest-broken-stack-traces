export const nestedFunction = () => {
  return new Error().stack;
}

export function firstFunction() {
  return nestedFunction();
}

test("Should mention correct stack", () => {
    const [a, b] = [firstFunction(), firstFunction()] as const
    
    console.log(a)
    console.log(b)
})