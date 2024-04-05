'use client'

import NextNProgressClient from '@/components/NextNProgress/page'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <NextUIProvider> */}
        {children}
      {/* </NextUIProvider> */}
    </>

  )
}