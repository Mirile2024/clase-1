
export default function SectionContactos() {
  return (
    <section id="contacto" class="section">
    <h2>Contacto</h2>
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" placeholder="Tu nombre"/>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Tu correo electrónico"/>

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
      
      <input type="submit" value="Enviar"/>
    </form>
  </section>

  )
}
