import { useEffect } from 'react'
import type { TKeyboardKeys } from './types'

//работает)

export function useKeyboard(key: TKeyboardKeys, callback: () => void) {
	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (key.toLowerCase() === e.key.toLowerCase()) {
				callback()
			}
		}

		document.addEventListener('keydown', handleKey)
		return () => document.removeEventListener('keydown', handleKey)
	}, [key, callback])
}
