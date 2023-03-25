import Header from '../Header/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className={`container`}>
        {children}
      </main>
    </>
  )
}