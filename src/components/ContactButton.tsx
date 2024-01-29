import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ContactButton() {
  return (
    <Link href="/contact" className="hidden md:block">
      <Button>
        Contact
      </Button>
    </Link>
  )
}
