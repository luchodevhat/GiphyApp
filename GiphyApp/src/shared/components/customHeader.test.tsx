import {describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {CustomHeader} from './customHeader'

describe('customHeader', () => {
  test('should render title properly', () => {   
    render(<CustomHeader title="Test Title" description="Test Description" />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title')
    })

    test('should render description properly', () => {   
    render(<CustomHeader title="Test Title" description="Test Description" />)
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    })

    test('should not render description when not provided', () => {   
    render(<CustomHeader title="Test Title" />)
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument()
    })

})