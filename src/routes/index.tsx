import { createFileRoute } from '@tanstack/react-router'
import example from './example.json'

export const Route = createFileRoute('/')({
  loader: () => {
    return { example }
  },
  component: App,
})

function App() {
  return <pre>Anything</pre>
}
