import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // Contenedores generales
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 40,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  // Encabezados (Large Titles estilo iOS)
  headerContainer: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignment: 'center',
    marginBottom: 20,
  },
  editText: {
    fontSize: 17,
    color: '#0A84FF',
    fontWeight: '500',
  },

  // Tarjetas y Grupos de Formularios (Estilo Ajustes iOS)
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  input: {
    height: 52,
    fontSize: 17,
    color: '#FFFFFF',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#38383A',
  },

  // Textos y etiquetas de campos
  label: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  fieldContainer: {
    paddingVertical: 12,
  },
  fieldLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 2,
  },
  fieldValue: {
    fontSize: 17,
    color: '#FFFFFF',
  },

  // Botones principales y secundarios
  button: {
    backgroundColor: '#0A84FF',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0A84FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.4,
  },
  cancelButton: {
    backgroundColor: '#2C2C2E',
  },
  cancelButtonText: {
    color: '#0A84FF',
    fontSize: 17,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF453A',
  },
  deleteButtonText: {
    color: '#FF453A',
    fontSize: 17,
    fontWeight: '600',
  },

  // Elementos de la lista y botón flotante
  listContainer: {
    paddingBottom: 100,
  },
  cardItem: {
    backgroundColor: '#1C1C1E',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignment: 'center',
    marginBottom: 12,
  },
  nombre: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  ciudad: {
    fontSize: 14,
    color: '#8E8E93',
  },
  chevron: {
    fontSize: 22,
    color: '#48484A',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 35,
    right: 20,
    backgroundColor: '#0A84FF',
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignment: 'center',
    shadowColor: '#0A84FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  floatingButtonText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '300',
    marginTop: -2,
    textAlign: 'center',
  },

  // Estados vacíos
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignment: 'center',
    paddingBottom: 60,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  emptySubText: {
    fontSize: 15,
    color: '#8E8E93',
  },
});