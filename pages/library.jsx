export default function Auth() {
  return (
    <main style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Login / Register Page</h1>
      <p>Auth functionality coming soon.</p>
    </main>
  );
}
import Navbar from '../components/Navbar';

const papers = [
  { title: "Maths Methods 2023 Exam", file: "/papers/maths-2023.pdf" },
  { title: "English ATAR 2022 Paper", file: "/papers/english-2022.pdf" },
  { title: "Chemistry 2023 Exam", file: "/papers/chemistry-2023.pdf" },
];

export default function Library() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '40px' }}>
        <h1>📚 Practice Paper Library</h1>
        <ul>
          {papers.map((paper, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <a href={paper.file} target="_blank" rel="noopener noreferrer">
                {paper.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
