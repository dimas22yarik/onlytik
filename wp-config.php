<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'onlytik_db' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#3D.jSqiN*1LdDc*X%*|4KD StU.r0nTGSP[?-NBLbEckVg>j t]A[+0eY*hM*t6' );
define( 'SECURE_AUTH_KEY',  '|Wj^lAbP=6UVcz|cp(*0u>eMA[R6NM#Gu_;nR&o!fWwkG!4wF~vYdZU%u-nT]&gT' );
define( 'LOGGED_IN_KEY',    ') j:]|Ggqg#&7;A[Wg|^i4I&z ,TGXG73TF #,2OP%cV/^hI:L?6D)VM!MuE&o8v' );
define( 'NONCE_KEY',        'oESlwT2=Zu{sYe:szp!Iya.-G7kJ=~R>l0@$P9az-;pHKnwZUF/.F;5i?{WXT.VH' );
define( 'AUTH_SALT',        '6qp`%3G@12AzoP_twXofW%7xMWKE[H+SE<$C;=4%&q-NHXI8`@P43*qF.7Y`y2{T' );
define( 'SECURE_AUTH_SALT', '!|>pJGJ%|VTj;iA7dY%p).ClZ<;PAD+ic{b$74ZX;2Tw&/4`7Cma*LuBE:m-c0)x' );
define( 'LOGGED_IN_SALT',   'rTzEZoAcm2oAw?.?|XM@B=mcb]XSYGT#R,ukVKB?|;-qEwI1]K}7%=BvR:M@Fh5X' );
define( 'NONCE_SALT',       'U2$0Mg -_nF*saf%yO9G9,p}L:gheK%)_m}mF 8#.K^AxQ:k_8r{&A{}}$kAh 1s' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
