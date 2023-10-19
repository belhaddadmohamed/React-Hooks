import { useCallback, useState } from "react";
import Age from "./Age";
import Button from "./Button";
import Salary from "./Salary";

export default function Callback() {
    const [age, setAge] = useState(16)
    const [salary, setSalary] = useState(10000)

    const ageUp = useCallback(() => setAge(age + 1), [age])
    const salaryUP = useCallback(() => setSalary(salary + 1), [salary])

  return (
    <>
        <Age age={age} />
        <Salary salary={salary} />
        <Button text="Age Up"  fun={ageUp} />
        <Button text="Salary Up"  fun={salaryUP} />
    </>
  )
}
