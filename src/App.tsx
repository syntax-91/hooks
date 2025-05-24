import { useState } from 'react'
import { useDebounce } from './hooks/useDebounce'

function App() {
	const [inp, setInp] = useState('')
	const debaouncedInp = useDebounce(inp, 300)

	return (
		<>
			<input type='text' value={inp} onChange={e => setInp(e.target.value)} />
			<p>{debaouncedInp}</p>
		</>
	)
}

export default App
