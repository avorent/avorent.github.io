//all the percentage data
var West = [0.35, 0.35, 0.37, 0.36, 0.39, 0.37, 0.19, 0.33, 0.43, 0.42, 0.42];
var Midwest = [0.36, 0.25, 0.17, 0.27, 0.24, 0.23, 0.43, 0.13, 0.23, 0.28, 0.31, 0.36];
var South = [0.39, 0.18, 0.38, 0.21, 0.19, 0.19, 0.35, 0.34, 0.15, 0.39, 0.32, 0.38, 0.21, 0.40, 0.19, 0.34];
var NorthEast = [0.46, 0.38, 0.23, 0.35, 0.16, 0.32, 0.50, 0.34, 0.30];
var Other = [0.41, 0.34, 0.54];

var WestN = ['AR', 'CA', 'CO', 'ID', 'MT', 'NV', 'NM', 'OR', 'UT', 'WA', 'WY'];
var MidwestN = ['IL', 'IN', 'IA', 'KS', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'];
var SouthN = ['AL', 'AR', 'DE', 'FL', 'GA', 'KY', 'LA', 'MD', 'MS', 'NC', 'OK', 'SC', 'TN', 'TX', 'VA', 'WV'];
var NorthEastN = ['CT', 'ME', 'MA', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT'];
var OtherN = ['AK', 'DC', 'HI'];

//centers of each radial graph
var w_x = 200; var y = 500;
var mw_x = 520; //var mw_y = 300;
var s_x = 900; //var s_y = 300;
var ne_x = 1250; //var ne_y = 300;
var o_x = 1500; //var o_y = 300;

var per = 0;
var j = 25;
var label_y = 250;

function setup() {
  createCanvas(1600, 600);
  frameRate(144);

  words('% of Drivers in Fatal Crashes Who Were Speeding in the U.S.', 55, 55, 100);
  words('West Region', 35, 70, label_y);
  words('Midwest Region', 35, 375, label_y);
  words('South Region', 35, 775, label_y);
  words('Northeast Region', 35, 1115, label_y);
  words('Others', 35, 1450, label_y);

  printStates(WestN, 41);
  printStates(MidwestN, 351);
  printStates(SouthN, 680);
  printStates(NorthEastN, 1116);
  printStates(OtherN, 1442);
}

function words(string, size, x, y){
  textSize(size);
  fill(100);
  textFont('Georgia');
  text(string, x, y);
}

function printStates(name, x){
  for(var i = 0; i < name.length; i++){
    if(i%2 == 0){
      textSize(12);
      textFont('Georgia');
      text(name[i], x + i*12.5, 520);
    }
    else {
      textFont('Georgia');
      text(name[i], x + i*12.5, 535);
    }
  }
}

function draw(){
  per = per + 0.005;

  //West graph
  for(var i = 0; i < West.length; i++){
    if(per <= West[i]){
      stroke(0, 0, i*23);
      drawData(w_x, y, (West.length*j + j) - i*j, per);
    }
  }

  //Midwest graph
  for(var i = 0; i < Midwest.length; i++){
    if(per <= Midwest[i]){
      stroke(i*20, 0, i*20);
      drawData(mw_x, y, (Midwest.length*j + j) - i*j, per);
    }
  }

  //NorthEast graph
  for(var i = 0; i < NorthEast.length; i++){
    if(per <= NorthEast[i]){
      stroke(i*28, i*28, 0);
      drawData(ne_x, y, (NorthEast.length*j + j) - i*j, per);
    }
  }

  //Other graph
  for(var i = 0; i < Other.length; i++){
    if(per <= Other[i]){
      stroke(0, i*85, 0);
      drawData(o_x, y, (Other.length*j + j) - i*j, per);
    }
  }

  //South graph
  for(var i = 0; i < South.length; i++){
    if(per <= South[i]){
      stroke(i*15, 0, 0);
      drawData(s_x, y, (South.length*j + j) - i*j, per);
    }
  }
}

function drawData(center_x, center_y, size, percentage){
  noFill();
  strokeWeight(10);
  arc(center_x, center_y, size, size, PI, percentage*TWO_PI + PI);
}
