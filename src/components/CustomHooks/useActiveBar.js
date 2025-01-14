import { useState } from "react";
export default function useActiveBar() {
    
  const [active, setActive] = useState(0);

  function handleActive(index) {
    setActive(index);
  }
  return { active, handleActive };
}
