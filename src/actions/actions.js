// Funktioner:

// Spara fil i filsystemet

// Öppna fil (endast txt filer?)

// Returnera textinnehållet från öppnad fil

/**
 * Action types
 * */
export const ALTER_HAIKU = 'ALTER_HAIKU'

// More constants here if needed.

/**
 *
 * action creators
 */
export function alterHaiku(haiku) {
   return { type: ALTER_HAIKU, haiku }
}
