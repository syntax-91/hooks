import { useEffect, useState } from 'react'

export function useDebounce<T>(input: T, delay: number): T {
	const [value, setValue] = useState<T>(input)

	useEffect(() => {
		const t = setTimeout(() => {
			setValue(input)
		}, delay)

		return () => clearTimeout(t)
	}, [input, delay])

	return value
}
