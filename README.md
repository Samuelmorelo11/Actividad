# Réplica UI Airbnb Mobile (Dark Mode)

Proyecto desarrollado en **React Native**, **Expo** y **TypeScript**, estilizado con **NativeWind** (Tailwind CSS) siguiendo los estándares de componentes Core.

---

## 🎨 Diseño Replicado
Se maquetó la pantalla principal de descubrimiento de **Airbnb Mobile** bajo un estilo Dark Mode contemporáneo, integrando:
* **Header de búsqueda:** Barra interactiva con entrada de datos e icono de filtros.
* **Scroll Horizontal de Categorías:** Chips interactivos para filtrar ubicaciones.
* **Tarjeta de Alojamiento:** Imagen principal de alta resolución con datos de tarifa, puntuación y botón de favoritos.
* **Perfil de Anfitrión:** Tarjeta flotante con avatar en formato circular y botón directo de contacto.

---

## 🛠️ Cumplimiento de Requisitos Técnicos
* **Contenedor Principal:** Implementación de `SafeAreaView` para protección de bordes y `ScrollView` para desplazamiento vertical.
* **Entrada de datos:** Componente `<TextInput>` funcional con manejo de estado en la barra de búsqueda.
* **Imágenes Remotas:**
  1. `<Image>` principal del alojamiento vía Unsplash.
  2. `<Image>` de avatar circular para la foto del anfitrión.
* **Componentes de Interacción (`<Pressable>`):**
  1. Botón de filtros rápidos en la barra superior.
  2. Filtros de categoría con cambio dinámico de estilo y opacidad.
  3. Botón de "Me Gusta" (favoritos) sobre la tarjeta.
  4. Botón de contacto con el anfitrión.
* **Estilos:** Exclusivamente con clases de **NativeWind**, omitiendo el uso de `StyleSheet.create()`.

---
