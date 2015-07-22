<!DOCTYPE html>
<html lang="en">
     <head>
         <meta charset="utf-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <meta name="description" content="Steven Branhams Portfolio Home">
         <meta name="author" content="Steven Branham">
         <link rel="icon" href="">

         <title>Branhammer</title>

         <link href="css/bootstrap.css" rel="stylesheet">
         <link href="css/my_style.css" rel="stylesheet">

     </head>

<body>.
     
     <?php
          include 'nav.php';
     ?>

     <!-- CONTENT ================================================ -->

    <div class="my-container" style="margin-top: 100px;">
    	<div class="about">
    		<div class="section-title" style="padding-top:0px;">About Me</div>
    		<p>
    		Hello, I'm Steven Branham. I am an Electrical Engineering student at Brigham Young University. When I'm not working on engineering course work, I am thinking about new ventures. I'm always really excited about creating products that help other people. I'm constantly reevaluting my experience and talents trying to find ways to produce value. I believe that the right attitude and work ethic can dramatically improve the world. I'm looking to make my own little dent in the world.   
    		</p>
    		<p>As far as hobbies go, I have done a fair share of exciting things and I love them all. Most recently I have been addicted to sport climbing. You can check out the climbs I have done most recently in the feed below.
    		</p>
    	</div>
		<div class="my-feed"> <!-- Website for feed: http://feed.mikle.com/ -->
			<!-- start feedwind code -->
			<script type="text/javascript">
				document.write('<script type="text/javascript" src="' + ('https:' == document.location.protocol ? 'https://' : 'http://') + 'feed.mikle.com/js/rssmikle.js"><\/script>');
			</script>
			<script type="text/javascript">
				(function() {
					var params = {
						rssmikle_url: "http://www.mountainproject.com/scripts/RSS.php?type=userTicks&userId=107436828",
						rssmikle_frame_width: "400",
						rssmikle_frame_height: "350",
						rssmikle_target: "_blank",
						rssmikle_font: "Arial, Helvetica, sans-serif",
						rssmikle_font_size: "12",
						responsive: "off",
						rssmikle_css_url: "",
						text_align: "center",
						text_align2: "center",
						corner: "on",
						autoscroll: "on",
						scrolldirection: "up",
						scrollstep: "4",
						mcspeed: "20",
						sort: "New",
						rssmikle_border: "solid",
						stylesheet: "css/myStyle",
						rssmikle_title: "on",
						rssmikle_title_sentence: "What I've been Climbing",
						rssmikle_title_link: "http://www.mountainproject.com/u/steven-branham//107436828",
						rssmikle_title_bgcolor: "#f37521",
						rssmikle_title_color: "#FFFFFF",
						rssmikle_title_bgimage: "",
						rssmikle_item_bgcolor: "rgba(0,0,0,0)",
						rssmikle_item_bgimage: "",
						rssmikle_item_title_length: "100",
						rssmikle_item_title_color: "#f37521",
						rssmikle_item_border_bottom: "on",
						rssmikle_item_description: "on",
						rssmikle_item_description_length: "200",
						rssmikle_item_description_color: "#666666",
						rssmikle_item_date: "gl1",
						rssmikle_timezone: "Etc/GMT",
						datetime_format: "%b %e, %Y",
						rssmikle_item_description_tag: "off",
						rssmikle_item_description_image_scaling: "off",
						article_num: "10",
						rssmikle_item_podcast: "off"};
						feedwind_show_widget_iframe(params);})();
			</script>
			<div style="font-size:10px; text-align:center; width:300;">
				<a href="http://feed.mikle.com/" target="_blank" style="color:#CCCCCC;">RSS Feed Widget</a>
				<!--Please display the above link in your web page according to Terms of Service.-->
			</div><!-- end feedwind code -->
		</div>

	<?php
    	include 'footer.php';
    ?>