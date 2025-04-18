import Image from 'next/image';

export default function HomePage() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenue sur mon portfolio !</h1>
      <Image
        src="/1645180608618.jpeg" // chemin correct relatif au dossier public
        alt="Photo de profil"
        width={200}
        height={200}
        style={{ borderRadius: '50%' }}
      />
      <p>Je suis développeuse web passionnée, spécialisée en React, Next.js et JavaScript.</p>
      <p>Découvrez mes projets, mon parcours et contactez-moi !</p>
    </section>
  );
}
