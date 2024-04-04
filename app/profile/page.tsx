import { getProfile } from '@/lib/data'
import React from 'react'

const profile = () => {
    const user = getProfile()
  return (
    <div>
<div className="grid grid-cols-4 gap-4">
  <div>01</div>

  <div>09</div>
</div>
    </div>
  )
}

export default profile