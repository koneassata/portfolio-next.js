export default function ContactPage() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // pour occuper toute la hauteur de la page
        backgroundColor: '#f5f5f5', // optionnel, juste pour le style
      }}
    >
      <form
        action="#"
        method="POST"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '500px',
          width: '100%',
          padding: '2rem',
          margin: '1rem',
          backgroundColor: 'white', // optionnel
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // optionnel
          borderRadius: '8px', // optionnel
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Contactez-moi</h1>
        <label>
          Nom :
          <input type="text" name="name" required />
        </label>
        <label>
          Email :
          <input type="email" name="email" required />
        </label>
        <label>
          Message :
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
