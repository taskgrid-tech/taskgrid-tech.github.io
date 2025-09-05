import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    observer.observe(element)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.unobserve(element)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { ref, isVisible, scrollY }
}

export function useParallax(speed: number = 0.5) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offsetY
}
