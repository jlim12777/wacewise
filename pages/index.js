export default function Home() {
  return (
    <main style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>🚀 Welcome to WACEwise</h1>
      <p>Your deployment is now working!</p>
    </main>
  );
}
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Link href="/">Home</Link>
      <Link href="/library">Library</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/auth">Login</Link>
    </nav>
  );
}
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1>🚀 Welcome to WACEwise</h1>
        <p>Your deployment is now working!</p>
      </main>
    </>
  );
}
