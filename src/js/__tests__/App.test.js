import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import 'jest-canvas-mock'

afterEach(cleanup)

describe('Checking if App is working properly', () => {
    const mockMediaDevices = {
        getUserMedia: jest.fn().mockResolvedValue('fake value'),
    };
    Object.defineProperty(window.navigator, 'mediaDevices', {
        writable: true,
        value: mockMediaDevices,
    });

    window.HTMLMediaElement.prototype.play = () => {}

    test('should have video screen', () => {
        render(<App />)
        expect(screen.getByTestId('video')).toBeInTheDocument
    })

    test('should have result screen', () => {
        render(<App />)
        expect(screen.getByTestId('canvas')).toBeInTheDocument
    })

    test('should have take photo button', () => {
        render(<App />)
        expect(screen.getByTestId('snap')).toBeInTheDocument
    })

    test('should work on clicking take photo button', () => {
        render(<App />)
        
        expect(screen.getByTestId('snap')).toBeInTheDocument
        
        expect(fireEvent.click(screen.getByTestId('snap'))).toBe(true)

    })
})