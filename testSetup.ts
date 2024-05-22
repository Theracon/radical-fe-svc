import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Run after each test
afterEach(() => {
  // reset jsdom (which is simulating the browser)
  cleanup()
})
