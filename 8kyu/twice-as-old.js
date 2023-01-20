// Check if dad is twice as old his son
const twiceAsOld = (dadAge, sonAge) => {
  const sum = Math.abs(dadAge - sonAge * 2)

  if (sum === 0) {
    return console.log(`The father is twice as old his son`)
  } 

  console.log(`The father will be twice as old his son in ${sum} years`)
}

twiceAsOld(20, 1);