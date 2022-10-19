<?php
show_admin_bar(false);


function enqueueStyles() {
    wp_enqueue_style('OpenSans', 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap', false);
    wp_enqueue_style('main-style', get_template_directory_uri() . '/css/custom.css', array(), '1.0');
}
add_action('wp_enqueue_scripts', 'enqueueStyles');
function enqueueScripts()
{
    wp_enqueue_script('jquery');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/js/custom.js', array(), '2.1', true);
}
add_action('wp_enqueue_scripts', 'enqueueScripts');

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');

add_theme_support('woocommerce');

add_action('admin_menu', 'remove_options', 999);
function remove_options()
{
    remove_menu_page('edit-comments.php');
    remove_menu_page('edit.php');
}

/* secure functions */

remove_action('wp_head', 'wp_generator');
function my_secure_generator($generator, $type)
{
    return '';
}

add_filter('the_generator', 'my_secure_generator', 10, 2);

function my_remove_src_version($src)
{
    global $wp_version;

    $version_str = '?ver=' . $wp_version;
    $offset = strlen($src) - strlen($version_str);

    if ($offset >= 0 && strpos($src, $version_str, $offset) !== FALSE)
        return substr($src, 0, $offset);

    return $src;
}

add_filter('script_loader_src', 'my_remove_src_version');
add_filter('style_loader_src', 'my_remove_src_version');
add_filter('xmlrpc_enabled', '__return_false');

/* end secure functions */



add_filter( 'woocommerce_billing_fields' , 'additional_billing_fields' );

function additional_billing_fields( $fields ) {
     $fields['billing_nip'] = array(
        'label'     => __('nip', 'woocommerce'),
        'placeholder'   => _x('nip', 'placeholder', 'woocommerce'),
        'required'  => false,
        'class'     => array('form-row-wide'),
        'clear'     => true
     );

     return $fields;
}

add_filter('woocommerce_admin_billing_fields', 'add_woocommerce_admin_billing_fields');
function add_woocommerce_admin_billing_fields($billing_fields) {

    $billing_fields['billing_nip'] = array( 'label' => __('nip', 'woocommerce'));

    return $billing_fields;
}

add_filter( 'woocommerce_customer_meta_fields', 'filter_add_customer_meta_fields', 10, 1 );
function filter_add_customer_meta_fields( $fields ) {
    

    // echo '<div>';
    // var_dump(debug_backtrace());
    // echo '</div>';
    //dumping

    $fields['billing']['fields']['nip'] = array(
        'label'       => __( 'NIP', 'woocommerce' ),
        'description' => '',
        'priority' => $fields['billing']['billing_company']['priority'] + 1,
    );  
    return $fields;
}

add_filter( 'woocommerce_ajax_get_customer_details' , 'add_custom_fields_to_ajax_customer_details', 10, 3 );
function add_custom_fields_to_ajax_customer_details( $data, $customer, $user_id ) {
   
        $data['billing']['billing_nip'] = $customer->get_meta('nip');
  

    return $data;
}