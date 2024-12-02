import { styler } from './styles'
export function App() {
  styler()
  return (
    <main class="p-2rem h-mm-100vh">
      <article>
        <header>
          <h1 class="family-poppins text-4xl text-neutral-50 fw-500 lh-1 ls--0.040em">
            Hello World!
          </h1>
          <div class="mt-2rem d-flex gap-1rem">
            <button class="btn bg-neutral-100 hover:bg-neutral-300 text-neutral-900">
              See Example
            </button>
            <button class="btn btn-line hover:bgc-transparent text-neutral-100">Learn More</button>
          </div>
        </header>
      </article>
    </main>
  )
}
