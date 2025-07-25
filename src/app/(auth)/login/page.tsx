'use client'
import React, { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  return (
    <div className="pt-[50px]">login</div>
  )
}