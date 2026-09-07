import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Favoritos');
  const [liked, setLiked] = useState(false);

  const categories = ['Favoritos', 'Frente al mar', 'Cabañas', 'Piscina', 'Casas del árbol'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* === BÚSQUEDA Y ENCABEZADO (<TextInput> & <Pressable>) === */}
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="¿A dónde quieres ir?"
              placeholderTextColor="#A3A3A3"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Pressable
              style={({ pressed }) => [
                styles.filterBtn,
                { opacity: pressed ? 0.6 : 1 },
              ]}
            >
              <Text style={{ fontSize: 12 }}>🎛️</Text>
            </Pressable>
          </View>

          {/* === FILTROS DE CATEGORÍA (<Pressable>) === */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((item) => {
              const isActive = activeCategory === item;
              return (
                <Pressable
                  key={item}
                  onPress={() => setActiveCategory(item)}
                  style={({ pressed }) => [
                    styles.chip,
                    isActive ? styles.chipActive : styles.chipInactive,
                    { opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isActive ? styles.chipTextActive : styles.chipTextInactive,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* === TARJETA PRINCIPAL DE PROPIEDAD (<Image> Remota 1) === */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
                }}
                style={styles.propertyImage}
              />
              {/* Botón de me gusta / favoritos (<Pressable>) */}
              <Pressable
                onPress={() => setLiked(!liked)}
                style={({ pressed }) => [
                  styles.heartBtn,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                <Text style={{ fontSize: 16 }}>{liked ? '❤️' : '🤍'}</Text>
              </Pressable>
            </View>

            <View style={styles.cardInfo}>
              <View style={styles.rowBetween}>
                <Text style={styles.propertyTitle}>Villa Paraíso Beach</Text>
                <Text style={styles.ratingText}>★ 4.96</Text>
              </View>
              <Text style={styles.locationText}>Santa Marta, Colombia</Text>
              <Text style={styles.dateText}>10–15 de oct. • Anfitrión profesional</Text>

              <View style={styles.priceRow}>
                <Text style={styles.priceText}>$450.000 COP</Text>
                <Text style={styles.perNightText}> / noche</Text>
              </View>
            </View>
          </View>
        </View>

        {/* === SECCIÓN DE ANFITRÓN / AVATAR DE PERFIL (<Image> Remota 2) === */}
        <View style={styles.hostContainer}>
          <View style={styles.hostCard}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
              }}
              style={styles.hostAvatar}
            />
            <View style={styles.hostInfo}>
              <Text style={styles.hostName}>Anfitrión: Camila</Text>
              <Text style={styles.hostSubtext}>Superanfitriona • 5 años hospedando</Text>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.contactBtn,
                { opacity: pressed ? 0.6 : 1 },
              ]}
            >
              <Text style={styles.contactBtnText}>Contactar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ESTILOS ESTÁNDAR (Sin requerir NativeWind / className)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 16,
    backgroundColor: '#171717',
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    paddingTop: Platform.OS === 'android' ? 16 : 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#404040',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
  filterBtn: {
    backgroundColor: '#404040',
    padding: 8,
    borderRadius: 20,
  },
  categoriesContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  chip: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: '#E11D48',
    borderColor: '#E11D48',
  },
  chipInactive: {
    backgroundColor: '#262626',
    borderColor: '#404040',
  },
  chipText: {
    fontSize: 12,
    fontWeight: '700',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  chipTextInactive: {
    color: '#A3A3A3',
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#262626',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333',
  },
  imageWrapper: {
    position: 'relative',
  },
  propertyImage: {
    width: '100%',
    height: 260,
  },
  heartBtn: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#404040',
  },
  cardInfo: {
    padding: 18,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  propertyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  locationText: {
    color: '#A3A3A3',
    fontSize: 14,
    marginTop: 4,
  },
  dateText: {
    color: '#737373',
    fontSize: 12,
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 12,
  },
  priceText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  perNightText: {
    color: '#A3A3A3',
    fontSize: 12,
  },
  hostContainer: {
    paddingHorizontal: 16,
  },
  hostCard: {
    backgroundColor: '#262626',
    padding: 14,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040',
  },
  hostAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E11D48',
  },
  hostInfo: {
    marginLeft: 12,
    flex: 1,
  },
  hostName: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  hostSubtext: {
    color: '#A3A3A3',
    fontSize: 11,
    marginTop: 2,
  },
  contactBtn: {
    backgroundColor: '#E11D48',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  contactBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
