<?php
// Template Name: Login
if(is_user_logged_in()){
    wp_redirect(home_url());
    exit;
}
get_header();
?>
<section class="login">
    <div class="login__container">
        <div class="login__form">
            <div class="login__text"><?= get_field('login_text', 36); ?></div>
        <?php
            if (have_posts()) : while (have_posts()) : the_post();
                    the_content();
                endwhile;
            endif;
            ?>
        </div>
    </div>
    <div class="login__image">
        <img src="<?= get_field('login_bg', 36); ?>">
    </div>
</section>
<?php
get_footer();
?>