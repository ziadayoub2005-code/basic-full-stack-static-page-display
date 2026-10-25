/**
 * Database Configuration (MEAN Environment Setup)
 * 
 * Note: Per project requirements, this application functions as a static page display
 * without requiring active database interactions. This module demonstrates environment
 * readiness for MongoDB should future phases require database persistence.
 */

function checkDatabaseConfig() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.log('ℹ️  Database Note: No MONGODB_URI detected.');
    console.log('   Running in Pure Static Mode (zero DB interaction required).');
    return {
      connected: false,
      mode: 'static_standalone',
      message: 'Pure static mode active - no database dependency'
    };
  }

  return {
    connected: false,
    mode: 'mongodb_configured',
    message: 'MongoDB URI provided and ready for connection'
  };
}

module.exports = {
  checkDatabaseConfig
};
