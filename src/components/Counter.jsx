import { useState } from "preact/hooks";

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <span class="text-yellow-400 text-2xl mr-2">{counter}</span>
      <button class="font-bold border px-4 py-2 text-xl rounded-lg mr-2 bg-yellow-100 text-yellow-800" onClick={() => setCounter(counter => counter + 1)}>+</button>
      <button class="font-bold border px-4 py-2 text-xl rounded-lg bg-yellow-100 text-yellow-800" onClick={() => setCounter(counter => counter - 1)}>-</button>
    </>
  )
}