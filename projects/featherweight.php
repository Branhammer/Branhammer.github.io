<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Steven Branhams Portfolio">
        <meta name="author" content="Steven Branham">
        <link rel="icon" href="">
		<title>Branhammer: Owlet</title>

		<link href="../css/my_style.css" rel="stylesheet">
		<script src="../js/project-focus.js"></script>
	</head>

<body>

	<?php 
		$nav = file_get_contents('../nav.php');
		$search = 'src="';
		$replace = 'src="../';
		$nav = str_replace($search, $replace, $nav);
		$search = 'href="';
		$replace = 'href="../';
		$nav = str_replace($search, $replace, $nav);
		echo $nav;
	?>

	<div id="lightswitch-container">
		<div id="lightswitch">
			<img id="light-img" src="../img/lighton-01.png" onclick="lightswitch()">
			<img id="text-img" src="../img/texton-01.png" onclick="textswitch()">
		</div>
	</div>
	<!-- <div id="lightswitch-pointer"><div>Change Background</div></div> -->

	
	<div id="project-head">
		<div id="project-head-pic">
			<img src="../img/design/owlet/header.jpg">
		</div>
		<div id="project-head-title">
			Owlet
		</div>
		<div id="project-head-description">
			<p>
				Owlet is a new tech company that builds baby monitoring devices. These arn't your old school static-laden walkie talkie style monitors, Owlet baby monitors are smart. Like hospitals, Owlet monitors use pulse oximetry technology to monitor the heart rate and oxygen levels of infants. Real-time data is relayed to smart phone of parents. With that information, parents are better equiped to face SIDS and other infant threatening health conditions. 
			</p>
		</div>
	</div>

	<div class="my-container" style="margin-top: 450px; width:100%; left:0px;">

		<div class="project-highlight">
			<div class="project-high-image">
				<img src="../img/design/owlet/socks-master_01.png">
			</div>
			<div class="project-high-text">
				<div class="shrink">
					<div class="shrinkwrap">
						<div class="shrinktext">
							<p>
								I've known the founders of Owlet for quite some time. When it came time to put together ideas for thier kickstarter rewards I had been milling around thier office working on developing ideas for my own venture. Kurt, Owlet CEO, knew that I wanted to develop my Illustrator skills asked if I'd help with the t-shirt designs. 
							</p>
							<p>
								I set out to find good themes and ideas for a shirt. The pictures above are some of my orginal brainstorm ideas. I used the sketches to get votes from everybody on the Owlet team and the got to work on digitizing the concepts. The following are some of designs I layed out in illustrator.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="project-highlight">
			<div class="project-high-image">
				<img src="../img/design/owlet/youth-shirts_01.png">
			</div>
			<div class="project-high-text">
				<div class="shrink">
					<div class="shrinkwrap">
						<div class="shrinktext">
							<p>
								Update required... stay tuned :) Bacon!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="project-highlight">
			<div class="project-high-image">
				<img src="../img/design/owlet/wifi-t-shirts-01.png">
			</div>
			<div class="project-high-text">
				<div class="shrink">
					<div class="shrinkwrap">
						<div class="shrinktext">
							<p>
								Update required... stay tuned :) Bacon!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="project-highlight">
			<div class="project-high-image">
				<img src="../img/design/owlet/save-babies-01.png">
			</div>
			<div class="project-high-text">
				<div class="shrink">
					<div class="shrinkwrap">
						<div class="shrinktext">
							<p>
								Update required... stay tuned :) Bacon!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="project-highlight">
			<div class="project-high-image">
				<img src="../img/design/owlet/super-t-shirt-01.png">
			</div>
			<div class="project-high-text">
				<div class="shrink">
					<div class="shrinkwrap">
						<div class="shrinktext">
							<p>
								Update required... stay tuned :) Bacon!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php
          include '../../footer.php';
     	?>