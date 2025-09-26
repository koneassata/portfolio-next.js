import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <section
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Mes projets</h1>

        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            padding: '30px',
            margin: '0 auto',
          }}
        >
          {/* Projet 1 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <a href="https://to-do-list-blond-ten-97.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/cc.png" alt="Projet 1" width={300} height={200} />
              <h2 style={{ marginTop: '1rem' }}>Projet 1</h2>
            </a>
            <p>application permettant de créer une tâche et faire sa description .</p>
          </div>

          {/* Projet 2 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <a href="https://todo-app-chi-taupe-20.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/cv.png" alt="Projet 2" width={300} height={200} />
              <h2 style={{ marginTop: '1rem' }}>Projet 2</h2>
            </a>
            <p>Une application permettant créer, d'ajouter et de supprimer une tâche.</p>
          </div>

          {/* Projet 3 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <a href="https://restaurant-blue-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/gb.png" alt="Projet 3" width={300} height={200} />
              <h2 style={{ marginTop: '1rem' }}>Projet 3</h2>
            </a>
            <p>Une application pour afficher toutes les informations concernant un joueur.</p>
          </div>

          {/* Projet 4 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <a href="https://user-list-app-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/vb.png" alt="Projet 4" width={300} height={200} />
              <h2 style={{ marginTop: '1rem' }}>Projet 4</h2>
            </a>
            <p>Une application pour une liste d'utilisateurs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
