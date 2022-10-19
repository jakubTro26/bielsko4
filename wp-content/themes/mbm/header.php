<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <title><?php wp_title(); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body class="<?= body_class() ?>">
    <header>
        <div class="header__container">
            <a href="<?= bloginfo('url') ?>" class="header__logo">
                <img src="<?= get_field('logo', 36); ?>">
            </a>
            <div class="header__right">
                <?php global $current_user; wp_get_current_user(); ?>
                <?php if ( is_user_logged_in() ) { 
                    echo '<span>Witaj ' . $current_user->display_name . '</span>'; 
                    echo '<a class="header__logout" href="' . wp_logout_url( home_url()) . '" title="Logout">Wyloguj się</a>';
                } ?>
            </div>
        </div>
    </header>