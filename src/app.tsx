import { styler } from './styles'
export function App() {
  styler()
  return (
    <main class="p-2rem h-mm-100vh">
      <article>
        <header>
          <h1 class="family-poppins text-4xl text-primary-500">Hello World!</h1>
          <button class="btn bg-neutral-100 hover:bg-neutral-300 text-neutral-900">Click Me</button>
        </header>
      </article>
    </main>
  )
}
