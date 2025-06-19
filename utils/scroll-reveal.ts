"use client"

export function setupScrollReveal() {
  if (typeof window !== "undefined") {
    const revealElements = document.querySelectorAll(".reveal")

    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    // Use passive event listener to improve performance
    window.addEventListener("scroll", reveal, { passive: true })

    // Initial check with a small delay to prevent auto-scroll
    setTimeout(() => {
      reveal()
    }, 100)

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }
}
