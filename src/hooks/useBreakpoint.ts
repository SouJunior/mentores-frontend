import { useEffect, useState } from 'react'

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(0)

  useEffect(() => {
    const calcWindowWidth = () => {
      setBreakpoint(window.innerWidth)
    }

    window.addEventListener('resize', calcWindowWidth)

    return () => window.removeEventListener('resize', calcWindowWidth)
  }, [])

  return breakpoint
}
