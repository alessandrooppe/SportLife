'use client'
import Button from "@/components/buttons/buttons";
import { useState } from "react";

export default function Calculator() {
  const [protein, setProtein] = useState<number>(0);

  return (
    <div>
      Chi siamo!
      <Button label="pippo1"></Button>
    </div>
  );
}
