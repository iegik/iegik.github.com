<?php
/* Placehold transparent image
 * image.php/{title}-{width}x{height}-{hexcolor}.[png|jpeg|gif|webp|xbm|wbmp|gd|gd2]
 *
 * @require: php_gd2, 
 */

header('Last-Modified: ' . gmdate('D, d M Y H:i:s T', filemtime(__FILE__)));

if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && 
    strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) >= filemtime(__FILE__))
{
    header('HTTP/1.0 304 Not Modified');
    exit;
}

function hex2rgb($hex) {
	$rgb = str_split($hex,strlen($hex)>4?2:1);
	count($rgb)-1?:$rgb = str_split('cccc',1);
	strlen($hex)>4?array_walk($rgb,function($val,$key) use(&$rgb){ 
		$rgb[$key] = hexdec($val);
	}):array_walk($rgb,function($val,$key) use(&$rgb){ 
		$rgb[$key] = hexdec($val.(count($val)<2?'0':''));
	});
	if(isset($rgb[3])){
		$rgb[3] = round(($rgb[3]/255)*100)/100;
	}
	return $rgb;
}
function rgb2hex($rgb) {
	$rgb1 = array(($rgb[0]<16?'0':'').dechex($rgb[0]),($rgb[1]<16?'0':'').dechex($rgb[1]),($rgb[2]<16?'0':'').dechex($rgb[2]));
	if(isset($rgb[3])){
		$rgb1[3] = (round($rgb[3]*255)<16?'0':'').dechex(round($rgb[3]*255));
	}
	return join('',$rgb1);
 	//return join('',dechex(($rgb[0]<<16)|($rgb[1]<<8)|$rgb[2]));
}
function invertRGB($rgb) {
	$rgb1 = array(255-$rgb[0],255-$rgb[1],255-$rgb[2]);
	if(isset($rgb[3])){
		$rgb1[3] = 1-$rgb[3];
	}
 	return $rgb1;
}

$uri = @$_GET?:@$_POST;
if(!@$uri)preg_match('/(\d+)x(\d+)?(-[0-9a-fA-F]{3,8})?(\.\w+)?/',$_SERVER['PATH_INFO'],$uri, PREG_OFFSET_CAPTURE);

header("X-uri: ".json_encode($uri));
header("X-PATH_INFO: ".json_encode($_SERVER['PATH_INFO']));


// Width
$w = (int) (@$uri['w']?:@$uri[1][0]?:100);
// Height
$h = (int) (@$uri['h']?:@$uri[2][0]?:100);
// Title
preg_match('/^\/([\w\s\:]+)?/',urldecode($_SERVER['PATH_INFO']),$text, PREG_OFFSET_CAPTURE);
$text = (string) (@$uri['t']?:@$text[1][0]?:$w."x".$h);
header("X-text: ".json_encode($text));

// Color
$hex = (string) substr(@$uri['c']?:@$uri[3][0],1);
$rgb = hex2rgb($hex);
if($rgb[3]==1){array_pop($rgb);}
$fgrgb = invertRGB($rgb);

if(isset($rgb[3])){
	$fgrgb[3] = 0.5;
}
$fghex = rgb2hex($fgrgb);

// mime-type
$m = (string) (@$uri['m']?:substr(@$uri[4][0],1)?:'png');

header("Content-Type: image/".$m);
$image = @imagecreatetruecolor($w, $h) or die("Cannot Initialize new GD image stream");
$image = @imagecreate($w, $h) or die("Cannot Initialize new GD image stream");

$bg = ($m=='jpg'||$m=='webp'||!isset($rgb[3]))?imagecolorallocate($image,$rgb[0], $rgb[1], $rgb[2]):imagecolorallocatealpha($image,$rgb[0], $rgb[1], $rgb[2],127-round($rgb[3]*127));
$fg = ($m=='jpg'||$m=='webp'||!isset($rgb[3]))?imagecolorallocate($image,$fgrgb[0], $fgrgb[1], $fgrgb[2]):imagecolorallocatealpha($image,$fgrgb[0], $fgrgb[1], $fgrgb[2],127-round($fgrgb[3]*127));

//imagealphablending($image,false);
//imagesavealpha($image,true);
//imagefill($image,0,0,$bg);
$font = 'Anonymous.ttf';

$fontSize = $w/2/strlen($text);
$capHeight = $fontSize;
$descenderHeight = $capHeight*1/2;
$letterWidth = (int)($capHeight);
$letterHeight = $capHeight+$descenderHeight;
$letterSpace = (int)($capHeight*8/2);
$lineSpace = $descenderHeight;

$x = $w/2-strlen($text)*$letterWidth/2;
$y = $h/2+$capHeight/2;
$textWidth = strlen($text)*($letterWidth+$letterSpace);
if($letterWidth+$x <= $w && $capHeight+$y <= $h){
	imagettftext($image, $fontSize, 0, $x, $y, $fg, $font, $text);
}

$fontSize = 1;
$capHeight = 5 * $fontSize;
$descenderHeight = $capHeight*0.5;
$letterWidth = (int)($capHeight*8/6);
$letterHeight = $capHeight+$descenderHeight;
$letterSpace = 2;
$lineSpace = $descenderHeight;


$y += $letterHeight+$lineSpace;
$text = "x = 4x4px";
$textWidth = strlen($text)*($letterWidth+$letterSpace);
if($w >= $x+$textWidth && $h >= $y+$letterHeight+$lineSpace && true){
	imagestring($image, $fontSize, $x, $y, $text , $fg);
}

$y += $letterHeight+$lineSpace;
$text = "Background-Color: #".$hex.', rgb'.(isset($rgb[3])?'a':'').'('.  $rgb[0].', '.$rgb[1].', '.$rgb[2].(isset($rgb[3])?', '.$rgb[3]:'').')';
header($text);
$textWidth = strlen($text)*($letterWidth+$letterSpace);
if($w >= $x+$textWidth && $h >= $y+$letterHeight+$lineSpace && true){
	imagestring($image, $fontSize, $x, $y, $text , $fg);
}

$y += $letterHeight+$lineSpace;
$text = "Color: #".$fghex.', rgb'.(isset($fgrgb[3])?'a':'').'('. $fgrgb[0].', '.$fgrgb[1].', '.$fgrgb[2].(isset($fgrgb[3])?', '.$fgrgb[3]:'').')';
header($text);
$textWidth = strlen($text)*($letterWidth+$letterSpace);
if($w >= $x+$textWidth && $h >= $y+$letterHeight+$lineSpace && true){
	imagestring($image, $fontSize, $x, $y, $text , $fg);
}
	
$y += $letterHeight+$lineSpace;
$text = "Width: ".$w."px";
header($text);
$textWidth = strlen($text)*($letterWidth+$letterSpace);
if($w >= $x+$textWidth && $h >= $y+$letterHeight+$lineSpace && true){
	imagestring($image, $fontSize, $x, $y, $text , $fg);
}

$y += $letterHeight+$lineSpace;
$text = "Height: ".$h."px";
header($text);
$textWidth = strlen($text)*($letterWidth+$letterSpace);
if($w >= $x+$textWidth && $h >= $y+$letterHeight+$lineSpace && true){
	imagestring($image, $fontSize, $x, $y, $text , $fg);
}
	
call_user_func('image'.$m,$image);
imagedestroy($image);
