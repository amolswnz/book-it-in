<?php
/*
Template Name: Hotel Finder

* @package VRHotels Coporate
*/

get_header();
$blog_id = get_current_blog_id();
$hidemenu = false;
if ($blog_id != 1) {
	$hidemenu = true;
}
 ?>

	<!-- ****************************** MAIN Start ****************************** //-->

		<main id="main" class="clearfix" role="main">
			<div class="overlay"></div>

			<section class="mapbox content">

			<?php while ( have_posts() ) : the_post(); ?>
				<div class="hotel-finder-back-btn<?php if ($hidemenu) { echo ' show-back'; }?>">
					<a href="#">
						<span class="iconic" data-glyph="chevron-left" title="" aria-hidden="true"></span>
						<p>Back</p>
					</a>
				</div>
				<div class="hotel-finder-menu<?php if ($hidemenu) { echo ' hide-menu'; }?>">
					<span class="iconic" data-glyph="magnifying-glass" title="magnifying glass" aria-hidden="true"></span>
					<h1>Hotel Finder</h1>
					<p>Find your nearest VR Hotel or Resort for your next business trip or your perfect family getaway.</p>
					<?php
						$blog_id = get_current_blog_id();
					/*
						echo '<script> var get_latlong = "' . htmlspecialchars($_GET["latlong"]) . '";</script>
						';
						if($blog_id == 1) {
							$hotel_locations = get_terms('hotel_location');
							$lcount = 0;
							$hotels_addresspoints = '
							var addressPoints = [';
							echo '<div class="select-hotel-info">';
							echo '<label>Destination</label>';
							echo '<select data-placeholder="Select Hotel" class="hotel-finder-select" placeholder="Select Hotel...">';
							echo '<option value="">Select Hotel...</option>';
							foreach($hotel_locations as $hotel_location) {
								$hotels = new WP_Query(array(
									'post_type' => 'hotel',
									'post_per_page'=>-1,
									'taxonomy'=>'hotel_location',
									'term' => $hotel_location->slug,
								));
								$link = get_term_link(intval($hotel_location->term_id),'hotel_location');
								echo '<optgroup label="'. $hotel_location->name .'">';
								while ( $hotels->have_posts() ) {
									$hotels->the_post();
									$link = get_permalink($post->ID);
									$title = get_the_title();
									if (get_field('hotel_latLng')) {
										$hotels_addresspoints .= '[ ' . get_field('hotel_latLng') . ', "' . $title . '", "' . $hotel_location->slug . '", "' . site_url() . '/' . get_field('hotel_url') . '" ],';
										$option_value = get_field('hotel_latLng') . ', ' . $hotel_location->slug;
									}
									echo '<option value="' . $option_value . '">'.$title.'</option>';

								}
								echo '</optgroup>';
							}
							wp_reset_query();
							echo '</select>';
							echo '</div>';
							$hotels_addresspoints .= '];' ;
						}
						else {*/
							$blog_name = get_bloginfo('name');
						?>
							<select class="hotel-finder-select"<?php if($blog_id == 1) { ?>  data-placeholder="Select Hotel" <?php } ?> >
									<option value="-36.894, 174.694, heading" class="head">Auckland</option>
									<option value="-36.856325, 174.76142900000002, auckland" <?php if($blog_name == 'Ascotia Off Queen') { ?> selected <?php } ?> >Ascotia off Queen</option>
									<option value="-36.9653375, 174.7857998, auckland" <?php if($blog_name == 'Auckland Airport Kiwi Hotel') { ?> selected <?php } ?> >Auckland Airport Kiwi Hotel</option>
									<option value="-36.85228, 174.75993600000004, auckland" <?php if($blog_name == 'Auckland City Oaks') { ?> selected <?php } ?> >Auckland City Oaks</option>
									<option value="-36.845955, 174.76872600000002, auckland" <?php if($blog_name == 'Auckland Harbour Oaks') { ?> selected <?php } ?> >Auckland Harbour Oaks</option>
									<option value="-36.8153662, 174.78403349999996, auckland" <?php if($blog_name == 'Auckland Takapuna Oaks') { ?> selected <?php } ?> >Auckland Takapuna Oaks</option>
									<option value="-36.991403, 174.878712, auckland" <?php if($blog_name == 'Proximity Apartments') { ?> selected <?php } ?> >Proximity Apartments</option>
									<option value="-36.848096, 174.77114900000004, auckland" <?php if($blog_name == 'Quadrant Hotels &amp; Suites') { ?> selected <?php } ?> >Quadrant Hotels &amp; Suites</option>
									<option value="-36.856072, 174.761893, auckland" <?php if($blog_name == 'VR Queen Street') { ?> selected <?php } ?> >VR Queen Street</option>

									<option value="-38.102, 176.127, heading" class="head">Rotorua</option>
									<option value="-38.046496, 176.329591, rotorua" <?php if($blog_name == 'VR Rotorua Lake Resort') { ?> selected <?php } ?> >VR Rotorua Lake Resort</option>

									<option value="-37.768, 175.256, heading" class="head">Hamilton</option>
									<option value="-37.7885438, 175.28391929999998, hamilton" <?php if($blog_name == 'Hamilton City Oaks') { ?> selected <?php } ?> >Hamilton City Oaks</option>

									<option value="-45.047, 168.618, heading" class="head">Queenstown</option>
									<option value="-45.0322761, 168.65780140000004, queenstown" <?php if($blog_name == 'The Lofts Apartments') { ?> selected <?php } ?> >The Lofts Apartments</option>

									<option value="-35.495, 138.198, heading" class="head">South Australia</option>
									<option value="-35.49645605658415, 138.251953125, south-australia" <?php if($blog_name == 'Wirrina Hotel &amp; Golf Resort') { ?> selected <?php } ?> >Wirrina Hotel &amp; Golf Resort</option>
							</select>
						<?php
							$hotels_addresspoints = 'var addressPoints = [[ -36.856325, 174.76142900000002, "Ascotia off Queen", "auckland", "http://vrhotels.co.nz/ascotia-off-queen" ],[ -36.9653375, 174.7857998, "Auckland Airport Kiwi Hotel", "auckland", "http://vrhotels.co.nz/auckland-airport-kiwi-hotel" ],[ -36.85228, 174.75993600000004, "Auckland City Oaks", "auckland", "http://vrhotels.co.nz/auckland-city-oaks" ],[ -36.845955, 174.76872600000002, "Auckland Harbour Oaks", "auckland", "http://vrhotels.co.nz/auckland-harbour-oaks" ],[ -36.8153662, 174.78403349999996, "Auckland Takapuna Oaks", "auckland", "http://vrhotels.co.nz/auckland-takapuna-oaks" ],[ -36.991403, 174.878712, "Proximity Apartments", "auckland", "http://vrhotels.co.nz/proximity-apartments" ],[ -36.848096, 174.77114900000004, "Quadrant Hotels &amp; Suites", "auckland", "http://vrhotels.co.nz/quadrant-hotels-suites" ],[ -36.856072, 174.761893, "VR Queen Street", "auckland", "http://vrhotels.co.nz/vr-queen-street" ],[ -38.046496, 176.329591, "VR Rotorua Lake Resort", "rotorua", "http://vrrotorua.co.nz/" ],[ -37.7885438, 175.28391929999998, "Hamilton City Oaks", "hamilton", "http://vrhotels.co.nz/hamilton-city-oaks" ],[ -45.0322761, 168.65780140000004, "The Lofts Apartments", "queenstown", "http://vrhotels.co.nz/the-lofts-apartments" ],[ -35.49645605658415, 138.251953125, "Wirrina Hotel &amp; Golf Resort", "south-australia", "http://wirrinaresort.com.au/" ],];';
						/*}*/
						?>





					<h2 class="hidden-sm">Places of Interest</h2>
					<div class="wrapper-scroll hidden-sm">
						<ul id='attractions' class='reset-ul'>
							<li></li>
						</ul>
					</div>
				</div>

				<?php// get_template_part( 'content', 'listing-testimonials' ); ?>

				<div id='map'></div>
				<!-- <div id='zoom-level'>Zoom Level: </div> -->

				<script>
					//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
					//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
					//var addressPoints = [[ -36.856325, 174.76142900000002, "Ascotia off Queen" ],[ -36.85228, 174.75993600000004, "Auckland City Oaks" ],[ -36.9653375, 174.7857998, "Auckland Airport Kiwi Hotel" ],[ -36.845955, 174.76872600000002, "Auckland Harbour Oaks" ],[ -36.8153662, 174.78403349999996, "Auckland Takapuna Oaks" ],[ -36.855536, 174.764119, "Bianco off Queen" ],[ -36.991403, 174.878712, "Proximity Apartments" ],[ -36.848096, 174.77114900000004, "Quadrant Hotels &amp; Suites" ],[ -37.7885438, 175.28391929999998, "Hamilton City Oaks" ],[ -45.0322761, 168.65780140000004, "The Lofts Apartments" ],[ -35.49645605658415, 138.251953125, "Wirrina Hotel &amp; Golf Resort" ],];

var attractionAddressPoints = [

[-36.848449 , 174.762191 , "Sky Tower",                                  "auckland" ],
[-36.860384 , 174.777822 , "Auckland Museum",                            "auckland" ],
[-36.8514   , 174.7663   , "Auckland Art Gallery",                       "auckland" ],
[-36.850452 , 174.767661 , "Albert Park",                                "auckland" ],
[-36.852338 , 174.769107 , "University of Auckland",                     "auckland" ],
[-36.845638 , 174.817318 , "Kelly Tarton's",                             "auckland" ],
[-36.842263 , 174.767786 , "Queen's Wharf",                              "auckland" ],
[-36.84846  , 174.763332 , "Civic Theatre",                              "auckland" ],
[-36.852344 , 174.763146 , "Aotea Square",                               "auckland" ],
[-36.868164 , 174.725903 , "Western Springs",                            "auckland" ],
[-36.876006 , 174.764849 , "Mt. Eden Domain",                            "auckland" ],
[-36.85293  , 174.763326 , "Auckland Town Hall",                         "auckland" ],
[-36.846696 , 174.775162 , "Vector Arena",                               "auckland" ],
[-36.892861 , 174.787354 , "ASB Showgrounds",                            "auckland" ],
[-36.892166 , 174.789317 , "Cornwall Park",                              "auckland" ],
[-36.864113 , 174.719685 , "Auckland Zoo",                               "auckland" ],
[-36.867505 , 174.727153 , "MOTAT ( Museum of Transport & Technology )", "auckland" ],
[-36.84846  , 174.763332 , "SkyCity Casino",                             "auckland" ],
[-36.874954 , 174.744756 , "Eden Park Stadium",                          "auckland" ],
[-36.842203 , 174.7637   , "Voyager - NZ Maritime Museum",               "auckland" ],
[-36.842996 , 174.761586 , "Viaduct Harbour",                            "auckland" ],
[-36.84846  , 174.763332 , "University Clock Tower",                     "auckland" ],
[-36.850565 , 174.78589  , "Parnell Rose Gardens",                       "auckland" ],
[-36.906038 , 174.776999 , "Stardome Observatory",                       "auckland" ],
[-36.860165 , 174.774951 , "Wintergarden",                               "auckland" ],
[-36.844971 , 174.770709 , "Britomart Transport Centre",                 "auckland" ],
[-36.918288 , 174.812369 , "Mt. Smart Stadium",                          "auckland" ],
[-36.848248 , 174.831773 , "Mission Bay",                                "auckland" ],
[-36.897775 , 174.809024 , "Ellerslie Race Course",                      "auckland" ],

[-36.993922, 174.883074, "Rainbows End",                                 "auckland" ],
[-36.994102, 174.87266 , "Westfield Shopping Centre, Manukau",           "auckland" ],
[-37.014719, 174.908138, "Auckland Botanic Gardens",                     "auckland" ],
[-36.998971, 174.887474, "Vodafone Events Centre",                       "auckland" ],
[-37.008248, 174.785036, "Auckland International Airport",               "auckland" ],
[-37.129699, 174.800674, "Spookers",                                     "auckland" ],

[-36.826502, 174.806275, "Devonport",                                     "northshore" ],
[-36.828908, 174.809298, "Navy Museum",                                   "northshore" ],
[-36.828908, 174.809298, "Hauraki Gulf Maritime Park",                    "northshore" ],
[-36.635659, 174.657512, "Snowplanet",                                    "northshore" ],

[-37.804979, 175.305202, "Hamilton Gardens",                            "hamilton" ],
[-37.773143, 175.214507, "Hamilton Zoo",                                "hamilton" ],
[-38.059426, 175.437557, "Riff Raff",                                   "hamilton" ],
[-37.78719 , 175.283328, "Skycity Casino, Hamilton",                    "hamilton" ],
[-37.788149, 175.281136, "Hamilton City Council",                       "hamilton" ],
[-37.789962, 175.285911, "Waikato Museum",                              "hamilton" ],
[-37.788108, 175.282572, "Hamilton City Library",                       "hamilton" ],
[-37.788089, 175.28164 , "i-Site Hamilton",                             "hamilton" ],
[-37.865367, 175.334855, "Hamilton International Airport",              "hamilton" ],

[-38.124358, 176.30894,   "Hell's Gate",                            "rotorua" ],
[-38.137808, 176.250165,  "Polynesian Spa",                         "rotorua" ],
[-38.135645, 176.259005,  "Rotorua Museum",                         "rotorua" ],
[-38.159898, 176.26442,   "Whakarewarewa Thermal Village",          "rotorua" ],
[-38.163513, 176.250529,  "Te Puia",                                "rotorua" ],
[-38.150697, 176.279787,  "Redwoods Whakarewarewa Forest",          "rotorua" ],
[-38.136302, 176.25821,   "Blue Baths",                             "rotorua" ],
[-38.136302, 176.25821,   "Government Gardens",                     "rotorua" ],
[-38.136916, 176.256014,  "Tamaki Maori Village",                   "rotorua" ],
[-38.116667, 176.416667,  "Lake Okataina",                          "rotorua" ],
[-38.133437, 176.244429,  "Kuirau Park",                            "rotorua" ],
[-38.106508, 176.221097,  "Mitai Maori Village",                    "rotorua" ],
[-38.107336, 176.221379,  "Rainbow Springs Kiwi Wildlife Park",     "rotorua" ],
[-38.12775,  176.248364,  "St Faith's Anglican Church",             "rotorua" ],
[-38.016994, 176.344981,  "Okere Falls",                            "rotorua" ],
[-38.078054, 176.266646,  "Lake Rotorua",                           "rotorua" ],
[-38.193499, 176.330071,  "Blue Lake (Lake Tikitapu)",              "rotorua" ],
[-38.250369, 176.471694,  "Green Lake",                             "rotorua" ],
[-38.039806, 176.346525,  "Lake Rotoiti",                           "rotorua" ],
[-38.1086,   176.22226,   "Skyline Gondola Rotorua",                "rotorua" ],
[-38.132795, 176.150872,  "Paradise Valley Springs Wildlife Park",  "rotorua" ],
[-38.135668, 176.253743,  "i-Site Rotorua",                         "rotorua" ],
[-38.109353, 176.317367,  "Rotorua International Airport",          "rotorua" ],


[-45.028716, 168.65626,   "Skyline Gondola",                   "queenstown" ],
[-45.33013,  168.711828,  "The Kingston Flyer",                "queenstown" ],
[-45.030149, 168.657515,  "Kiwi Birdlife Park",                "queenstown" ],
[-45.033186, 168.661115,  "Underwater Observatory",            "queenstown" ],
[-45.012327, 168.915224,  "Gibbston Valley Wines",             "queenstown" ],
[-45.020972, 168.739923,  "Milford Sound Scenic Flights",      "queenstown" ],
[-44.927491, 168.736029,  "Coronet Peak",                      "queenstown" ],
[-43.471667, 171.526667,  "Mt. Hutt",                          "queenstown" ],
[-45.15,     168.833333,  "The Remarkables",                   "queenstown" ],
[-44.634795, 168.897223,  "Treble Cone",                       "queenstown" ],
[-44.892849, 169.093323,  "Snow Park NZ",                      "queenstown" ],
[-44.882175, 169.003618,  "Cardrona",                          "queenstown" ],
[-45.020972, 168.739923,  "Queenstown International Airport",  "queenstown" ],
[-44.509637, 169.133207,  "Lake Wanaka",                       "queenstown" ],

];

					<?php echo $hotels_addresspoints; ?>
					// simple map without any marker and disable zoom controls (+/-)
				    var map = L.mapbox.map('map', 'dhruvraniga.ik43n6a8', { zoomControl: false })
				        .setView([-38.135, 157.104], 5);
				        // position the new zoomContro
				        new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

					var selectedMarker = null;

//=============================
					L.mapbox.featureLayer('dhruvraniga.ik43n6a8').on('ready', function(e) {
					//Group all hotel markers
					var attractionMarkers = new L.MarkerClusterGroup({
						showCoverageOnHover: false,
						maxClusterRadius: 50,
						animateAddingMarkers: true,
						disableClusteringAtZoom: 13,
						iconCreateFunction: function(cluster) {
							var childcount = cluster.getChildCount();
					    	return new L.DivIcon({
					    		//html: childcount + '<img src="<?php echo get_template_directory_uri(); ?>/assets/images/map-pin.png" />' + '',
					    		html: '<div class="count">' + childcount + '</div>',
					    		iconSize: L.point(40, 40),
					    		iconAnchor: L.point(20, 20),
					    		className: 'attraction-pin'
							});
						}
					});

					// adding Hotel Pins/Markers according to the lat/long values saved in the Hotel section in WP CMS
					for (var i = 0; i < attractionAddressPoints.length; i++) {
						var a = attractionAddressPoints[i];
						var title = a[2];
						var marker = L.marker(new L.LatLng(a[0], a[1]), {
							icon: L.icon({
								className: a[3],
								iconUrl: '<?php echo get_template_directory_uri(); ?>/assets/images/map-pin-attractions.png',
								iconRetinaUrl: '<?php echo get_template_directory_uri(); ?>/assets/images/map-pin-attractions.png',
								iconSize: [21, 30],
								iconAnchor: [11, 32],
								popupAnchor: [0, -32],
						}),
						    title: title
						});
						marker.bindPopup(title);
						attractionMarkers.addLayer(marker);
					}

					map.addLayer(attractionMarkers);

//=============================
					//Group all hotel markers
					var hotelMarkers = new L.MarkerClusterGroup({
						showCoverageOnHover: false,
						maxClusterRadius: 50,
						animateAddingMarkers: true,
						disableClusteringAtZoom: 13,
						iconCreateFunction: function(cluster) {
							var childcount = cluster.getChildCount();
					    	return new L.DivIcon({
					    		//html: childcount + '<img src="<?php echo get_template_directory_uri(); ?>/assets/images/map-pin.png" />' + '',
					    		html: '<div class="count">' + childcount + '</div>',
					    		iconSize: L.point(40, 40),
					    		iconAnchor: L.point(20, 20),
					    		className: 'vrhotels-pin'
							});
						}
					});

					// adding Hotel Pins/Markers according to the lat/long values saved in the Hotel section in WP CMS
					for (var i = 0; i < addressPoints.length; i++) {
						var a = addressPoints[i];
						var title = '<strong>' + a[2] + '</strong><br/>';
						title += '<a href="' + a[4] + '">Visit website</a>';
						var marker = L.marker(new L.LatLng(a[0], a[1]), {
							icon: L.icon({
								className: a[3],
								iconUrl: '<?php echo get_template_directory_uri(); ?>/assets/images/map-pin.png',
								iconRetinaUrl: '<?php echo get_template_directory_uri(); ?>/assets/images/map-pin.png',
								iconSize: [26, 42],
								iconAnchor: [13, 41],
								popupAnchor: [0, -49],
								shadowUrl:'<?php echo get_template_directory_uri(); ?>/assets/images/map-pin-shadow.png',
								shadowRetinaUrl: '<?php echo get_template_directory_uri(); ?>/assets/images/map-pin-shadow.png',
								shadowSize: [58, 59],
								shadowAnchor: [13, 48]
						}),
						    title: title
						});
						marker.bindPopup(title);
						hotelMarkers.addLayer(marker);
					}

					map.addLayer(hotelMarkers);

					// center marker on screen
					hotelMarkers.on('click', function (marker) {
				    	console.log(marker.layer);
				    	map.panTo(marker.layer.getLatLng());
					});

					// when clicked on a markercluster
					hotelMarkers.on('clusterclick', function (a) {
					    console.log('cluster ' + a.layer.getAllChildMarkers().length);
					});


					function showAttractions(selectedMarker) {
						// For each marker, consider whether it is currently visible by comparing
						// with the current map bounds.
						var inBounds = [];

						attractionMarkers.eachLayer(function(marker) {
									var mc = marker.getLatLng();
									var smc = selectedMarker.getLatLng();

							//console.log("marker: " + marker.options.icon.options.className);
							//console.log("selectedMarker: " + selectedMarker.options.icon.options.className);

							if (marker.options.icon.options.className == selectedMarker.options.icon.options.className) {
								inBounds.push({
									html: '<li><a class="attraction-marker" href="#" data-value="'+marker.getLatLng()+'"><span class="marker-symbol"></span>' + marker.options.title + '</a><small>' + (mc.distanceTo(smc).toFixed(1)*0.001).toFixed(1) + ' km</small></li>' ,
									distance: (mc.distanceTo(smc).toFixed(1)*0.001).toFixed(1)
								});
							}
/*
								var markerCoord = marker.feature.geometry.coordinates;
								var markerSymbol = marker.feature.properties['marker-symbol'];

								if(selectedMarker != null) {
									var mc = marker.getLatLng();
									var smc = selectedMarker.getLatLng();
									inBounds.push('<li><span class="letter">' + markerSymbol + '</span>' + marker.options.title + '<small>' + (mc.distanceTo(smc).toFixed(0)*0.001).toFixed(0) + ' km</small></li>');
									//(fc.distanceTo(c)).toFixed(0) + 'm'
								}
*/

						});
						sorted = [];
						for (var k in inBounds) {
							sorted.push(inBounds[k]);
						}
						sorted.sort(function (a,b) {
							return a.distance - b.distance;
						});
						$('#attractions').html('');
						for (var i = 0; i < sorted.length; i++) {
							var html = sorted[i].html;
							$('#attractions').append(html);
						}
					}
					$('.hotel-finder-select').change(function () {
						console.log('$(this).val(): ' + $(this).val());
						var str = $(this).val();
						var latLang = str.split(',');
						//map.setZoom( latLang[2] );
						//map.setZoom( 13 );
						if (latLang[2] == " heading") {
							map.setView( [latLang[0], latLang[1]], 11);
									showAttractions(selectedMarker);
							console.log(' heading: ' + latLang[2]);
						} else {

							hotelMarkers.eachLayer(function(marker) {
								if (marker.getLatLng().toString() === L.latLng( latLang[0], latLang[1] ).toString() ) {
									//map.panTo( marker.gfetLatLng() );
									//map.zoomPanTo( marker.getLatLng(), latLang[2] )
									map.setView( [latLang[0], latLang[1]], 13);
									//map.setZoom(13);
									marker.openPopup();
									//console.log(marker.getLatLng().toString());
									selectedMarker = marker;
									console.log('should open popup');
									console.log ("selected: " + str);
									showAttractions(selectedMarker);
									marker.openPopup();
								}
										/*<option value="-36.894, 174.694, auckland-heading">Auckland</option>
										<option value="-36.894, 174.694, rotorua-heading">Rotorua</option>
										<option value="-37.768, 175.256, hamilton-heading">Hamilton</option>
										<option value="-45.047, 168.618, queenstown-heading">Queenstown</option>
										<option value="-36.894, 174.694, south-australia-heading">South Australia</option>*/
							});
						}
						$('.hotel-finder-menu').addClass('hide-menu');
						$('.hotel-finder-back-btn').addClass('show-back');


					});

					$(document).on("click", "a.attraction-marker", function(e) {

						var value = $(this).data('value');
						var regExp = /\(([^)]+)\)/;
						var matches = regExp.exec(value);
						var LatLng = matches[1].split(",");

						attractionMarkers.eachLayer(function(marker) {
							console.log(marker.getLatLng());
							if (marker.getLatLng().toString() === L.latLng( LatLng[0], LatLng[1] ).toString() ) {
								map.setView( [LatLng[0], LatLng[1]], 13);
								marker.openPopup();
							}
						});
						e.preventDefault();

					});

					$('.hotel-finder-back-btn').click(function(e){
						$('.hotel-finder-menu').removeClass('hide-menu');
						$(this).removeClass('show-back');
						e.preventDefault();
					});

				$(document).ready(function(e) {
					$('.hotel-finder-select').selectOrDie({ size: 8 });

					//var control = $select[0].selectize;

					console.log('$(".hotel-finder-select").val(): '+$('.hotel-finder-select').val());
					if ($('.hotel-finder-select').val()) {
						var str = $('.hotel-finder-select').val();
						var latLang = str.split(',');
						hotelMarkers.eachLayer(function(marker) {
							if (marker.getLatLng().toString() === L.latLng( latLang[0], latLang[1] ).toString() ) {
								//map.panTo( marker.gfetLatLng() );
								//map.zoomPanTo( marker.getLatLng(), latLang[2] )
								map.setView( [latLang[0], latLang[1]], 13);
								//map.setZoom(13);
								marker.openPopup();
								//console.log(marker.getLatLng().toString());
								selectedMarker = marker;
								console.log(latLang[0] + latLang[1]);
								console.log ("selected: " + str);
								showAttractions(selectedMarker);
							}
						});
					}
/*
					if(get_latlong) {
						var str = get_latlong;
						var latLang = str.split(',');
						hotelMarkers.eachLayer(function(marker) {
							if (marker.getLatLng().toString() === L.latLng( latLang[0], latLang[1] ).toString() ) {
								//map.panTo( marker.gfetLatLng() );
								//map.zoomPanTo( marker.getLatLng(), latLang[2] )
								map.setView( [latLang[0], latLang[1]], 13);
								//map.setZoom(13);
								marker.openPopup();
								console.log(marker.getLatLng().toString());
								selectedMarker = marker;
								console.log('latLang[0] + latLang[1]: '+ latLang[0] + latLang[1]);
								console.log ("selected: " + str);
								showAttractions(selectedMarker);
							}
						});
					}
*/
				});
});
					// Show Zoom level
					map.on('zoomend', function(){
					   // document.getElementById('zoom-level').innerHTML = 'Zoom Level: ' + map.getZoom();
						/*if (map.getZoom() >= 14) {
							attractionMarkers.setFilter(function() { return true; });
						}
						else {
							attractionMarkers.setFilter(function() { return false; });
						}*/

					});

				//document.getElementById('left').onclick = function(e)  { e.preventDefault(); map.panBy([-100, 0]); };
				</script>
			<?php endwhile; // end of the loop. ?>

			</section>

		</main>

	<!-- ****************************** MAIN End ****************************** //-->

<?php get_footer(); ?>
