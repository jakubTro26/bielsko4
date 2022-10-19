<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', "weblide2_msnew" );


/** MySQL database username */

define( 'DB_USER', "weblide2_mbmzam" );


/** MySQL database password */

define( 'DB_PASSWORD', "-]y-IMbc24YNHac7" );


/** MySQL hostname */

define( 'DB_HOST', "localhost" );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'hI{K58E.x6HUV?K*P/.,yufc<AHmkoMr*X`Vd^R#/ug/`D4KY$~}Q$ANZ7+*)O.p' );

define( 'SECURE_AUTH_KEY',  '!7w4Pp5L)il`9Zk=p(t_j^LzcL:Xk`,K;L_^$:M>i4I_ g}KG)D~sYZJ%ums/6T0' );

define( 'LOGGED_IN_KEY',    'oN:uNpgs>vBwi[cK*<TM:~L>A]lqmj[Y0i4mP`)BTCBuT-[cnQEeV1la<GB}ocFg' );

define( 'NONCE_KEY',        '+Ri< e9jnK,tD?Mor!L^A=:3AihEN)^&n4I)jB]vvE#^ pyp9!o@3P1ma@pIX@fh' );

define( 'AUTH_SALT',        'de~(vC. C1 zsQJIgzW7!L2?>1If$RoQjB:;M!YcwHjrN =;K&ie.=9VC+*AYcT ' );

define( 'SECURE_AUTH_SALT', 's{MdiHQ6jFAR.(h^yGy)e=SUTPR=hu)aA]weJ}-B]5pe_(n`zK^N=];$wjO4w^+*' );

define( 'LOGGED_IN_SALT',   'yD#u5)DCeBd_SpPD@HX!&CIHpb0kxb Ba+v45_<G<YC(K|O#Pyf^B:QHv(xl kl7' );

define( 'NONCE_SALT',       '%{(4}b$W({f)f[[I0Z)Iuu7/R${>MTd?.Lsq}HR97S$eR@TFi5}U]k+Kj23}I=3|' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */




// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );


/* Add any custom values between this line and the "stop editing" line. */




/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

