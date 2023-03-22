import { useState } from "react";

function Detective() {
  const [sherlock] = useState("психопат");
  return (
    <>
      <div>Шерлок - {sherlock}</div>
    </>
  );
}
export default Detective;
