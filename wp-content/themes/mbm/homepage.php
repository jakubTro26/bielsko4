<?php
// Template Name: Homepage
if(!is_user_logged_in()){
    wp_redirect(home_url().'/logowanie');
    exit;
}
get_header();
?>
<section class="homepage">
    <div class="homepage__container">
        <?php
            $buttons = get_field('menu');
            if($buttons):
                foreach ($buttons as $button):
        ?>
        <div class="homepage__column">
            <a class="homepage__item" href="<?= $button['link'] ?>">
                <div class="homepage__button">
                    <img src="<?= $button['ico'] ?>">
                </div>
                <span class="homepage__name">
                    <?= $button['text'] ?>
                </span>
            </a>
        </div>
        <?php
                endforeach;
            endif;
        ?>
    </div>
</section>
<?php
get_footer();
?>