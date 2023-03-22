import { useState } from "react";

function Detective() {
  const [sherlok] = useState("психопат");
  return (
    <>
      <div>Шерлок - {sherlok}</div>
    </>
  );
}
export default Detective;
