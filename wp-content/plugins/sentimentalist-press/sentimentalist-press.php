<?php
/*
Plugin Name: The Sentimentalist Press
Plugin URI: http://www.thesentimentalistatl.com/#press
Description: Press plugin for The Sentimentalist
Version: 1.0
Author: Evan Goodberry
Author URI: http://www.someweather.com
 */

add_action('init', 'press_register');
add_action("admin_init", "admin_init");
add_action('save_post', 'save_details');

function press_register() {

  $labels = array(
    'name' => _x('Press', 'post type general name'),
    'singular_name' => _x('Press Item', 'post type singular name'),
    'add_new' => _x('Add New', 'press item'),
    'add_new_item' => __('Add New Press Item'),
    'edit_item' => __('Edit Press Item'),
    'new_item' => __('New Press Item'),
    'view_item' => __('View Press Item'),
    'search_items' => __('Search Press'),
    'not_found' =>  __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','thumbnail')
  );

  register_post_type( 'press' , $args );
}

function admin_init(){
  add_meta_box("date_meta", "Date of Publication", "date_meta", "press", "normal", "low");
  add_meta_box("link_meta", "Link to Article (optional)", "link_meta", "press", "normal", "low");
}

function date_meta() {
  global $post;
  $custom = get_post_custom($post->ID);
  $date = $custom["date"][0];
  ?>
  <input type="text" name="date" value="<?php echo $date ?>" />
  <?php
}

function link_meta() {
  global $post;
  $custom = get_post_custom($post->ID);
  $link = $custom["link"][0];
  ?>
  <input type="text" name="link" value="<?php echo $link ?>" />
  <?php
}

function save_details() {
  global $post;

  update_post_meta($post->ID, "date", $_POST["date"]);
  update_post_meta($post->ID, "link", $_POST["link"]);
}

?>
